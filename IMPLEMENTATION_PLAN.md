# Implementation Plan — UI Enhancements

Four features to elevate the editorial design:

1. **Scroll-triggered reveals** — consistent fade-up entrance animation on every
   section, triggered once as each enters the viewport.
2. **Project row hover states** — subtle background shift + left-accent bar on
   each project article row.
3. **Sticky section indicator** — a small vertical rail fixed to the right edge
   showing which section is currently in view, with an active dot.
4. **"Currently open to" status line** — a small pill in the Hero showing
   availability status.

---

## 1. Scroll-triggered reveals

### Component

New `src/components/Reveal.jsx` — a thin wrapper around framer-motion:

```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-60px' }}
  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
>
  {children}
</motion.div>
```

- `margin: '-60px'` triggers slightly before the element hits the viewport edge,
  so animations feel preemptive rather than late.
- Stagger children: wrap siblings in `<Reveal delay={i * 0.08}>`.

### Where to apply

| Section | What to wrap |
|---------|-------------|
| Hero | Whole `<div className="w-full">` — single reveal on page load (no `whileInView`, just `initial`→`animate`) |
| About | Section heading + 3 focus cards (keep existing per-card stagger, add reveal to the heading) |
| Projects | Section heading + each `<article>` row |
| Experience | Each `<article>` entry |
| Skills | Section heading + each skill group `<div>` |
| Education | Each `<article>` entry |
| Achievements | Each `<article>` entry |
| Certifications | Each cert `<div>` |
| Contact | Section heading + link row |

**Approach:** Rather than adding `<Reveal>` to every child individually (verbose),
wrap the top-level content of each section in a single `<Reveal>`. This gives a
clean "section appears" effect. Individual stagger is only needed where items
within a section should cascade (About cards, Skills groups, Projects rows).

### Files

`Reveal.jsx` (new), all section components (add import + wrap).

---

## 2. Project row hover states

### Design

Each `<article>` in Projects gets:

- `group` class (Tailwind) for `group-hover:` propagation.
- On hover: `bg-[#EAE3D5]` background (surface color, very subtle).
- A 2px left border in accent color that fades in (`border-l-2 border-transparent`
  → `group-hover:border-l-[#C2410C]`).
- `transition-all duration-200` for smoothness.
- `px-4 -mx-4` to bleed the background outside the content edge.

### Implementation in `Projects.jsx`

```jsx
<article
  key={project.id}
  className="group py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12
    gap-6 lg:gap-12 -mx-4 px-4 border-l-2 border-transparent
    group-hover:bg-[#EAE3D5]/60 group-hover:border-l-[#C2410C]
    transition-all duration-200"
>
```

### Files

`Projects.jsx` only.

---

## 3. Sticky section indicator (mini ToC)

### Design

A small vertical nav pinned to the right edge of the viewport, centered
vertically. Each section gets a small dot + label. The active section's dot
lights up in accent color; others are faint. Labels appear on hover (optional,
or always visible on desktop, hidden on mobile).

```
Desktop (right edge):
  ●  About
  ○  Work
  ○  Experience
  ○  Skills
  ○  Education
  ○  Contact
```

- Dot: 6px circle, `bg-[#B08A6E]` (faint) / `bg-[#C2410C]` (active).
- Label: 11px mono (section-label style), appears on hover or always visible.
- Clicking a dot scrolls to that section via Lenis.
- Hidden on mobile (`hidden lg:flex`).
- `pointer-events: auto` on the dots, `pointer-events: none` on the container
  so it doesn't block content interaction.
- Uses `IntersectionObserver` to track which section is in view.

### Component

New `src/components/SectionIndicator.jsx`:

- Define sections array: `[{ id: 'about', label: 'About' }, ...]`
- `useEffect` with `IntersectionObserver` watching all `section[id]` elements.
- Track `activeId` state, render dots + labels.
- Each dot: `<button onClick={() => scrollTo(id)}>` using Lenis or
  `document.getElementById(id).scrollIntoView`.
- Position: `fixed right-6 top-1/2 -translate-y-1/2 z-40`.

### Files

`SectionIndicator.jsx` (new), `App.jsx` (mount).

---

## 4. "Currently open to" status line

### Design

A small inline pill below the Hero's subtitle, showing current availability.
Editorial style — monospace label + status text.

```
[AVAILABLE]  Open to freelance & full-time roles
```

- `[AVAILABLE]` in mono, accent color, uppercase.
- Status text in muted color.
- Optional: a small pulsing dot before "AVAILABLE" for a living feel
  (CSS `@keyframes pulse`).

### Implementation in `Hero.jsx`

Add after the subtitle `<p>`:

```jsx
<div className="mt-8 flex items-center gap-3">
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C2410C] opacity-75" />
    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C2410C]" />
  </span>
  <span className="section-label">Available for opportunities</span>
</div>
```

### Files

`Hero.jsx` only.

---

## 5. Order of work

1. Create `Reveal.jsx`.
2. Add scroll reveals to all section components.
3. Add project hover states to `Projects.jsx`.
4. Create `SectionIndicator.jsx` + mount in `App.jsx`.
5. Add status line to `Hero.jsx`.
6. `npm run lint && npm run build`.

---

## 6. Acceptance criteria

- Every section fades in as it enters the viewport; Hero animates on load.
  No section pops in abruptly.
- Project rows show a subtle background + accent left-border on hover.
- Section indicator dots track scroll position; clicking a dot navigates to
  that section. Hidden on mobile.
- Hero shows a pulsing dot + "Available for opportunities" label.
- `npm run lint` → zero errors; `npm run build` succeeds.
- All animations respect `prefers-reduced-motion` (framer-motion does this
  automatically via `useReducedMotion`).
