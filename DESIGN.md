# DESIGN.md

## Design Direction

A dark, editorial, typography-led portfolio. The interface is built around
large screen-covering serif type in warm off-white (#F2F2F0) on a near-black
canvas (#101010), with a single surgical orange accent and minimal chrome.

The goal is to feel like a well-set editorial page that happens to be about
engineering — a reading experience, not a dashboard.

> **Core principle:** the type is the interface. Everything else stays out
> of the way.

---

# 1. Visual Identity

## Color Palette

A dual-theme ink-on-paper system. Both themes share the same typography,
layout, and hairlines — only the palette swaps. Stored as CSS custom
properties on `:root` (light) and `[data-theme="dark"]`, exposed to Tailwind
as semantic tokens (`bg-base`, `text-ink`, `border-line`, `text-accent`, …).

### Light (default `:root`) — old paper with dark burnt-orange ink

``` text
Canvas           #F5F1E8   (old paper)
Surface          #EAE3D5
Surface Elevated #DFD5C0
Line / hairline  #D8CCB4

Text Primary     #7B2816   (dark burnt brick)
Text Muted       #8A4A35   (warm umber)
Text Faint       #B08A6E   (soft bronze)

Accent           #C2410C   (burnt orange)
```

### Dark (`[data-theme="dark"]`)

``` text
Canvas           #101010
Surface          #111111
Surface Elevated #151515
Line / hairline  #252525

Text Primary     #F2F2F0   (warm off-white)
Text Muted       #777777
Text Faint       #555555

Accent           #FF6900   (burnt orange)
```

Orange is used surgically for:

- Link hovers / underlines
- The thin scroll-progress line
- Selection states
- Small directional arrows (→) and the eyebrow marker
- The theme toggle icon

It should never dominate a section. 95% of the page is ink on paper.

## Theme toggle

`data-theme` lives on `<html>`, persisted in `localStorage["theme"]`
(`"light"` / `"dark"`). A pre-paint inline script in `index.html` reads the
stored value so there is no flash on load; the navbar Toggle swaps it.

Theme switches are smooth: every element that uses semantic color tokens
(`bg-base`, `text-ink`, `border-line`, etc.) has a 500ms `cubic-bezier(0.4, 0, 0.2, 1)`
transition on `background-color`, `color`, `border-color`, and `box-shadow`.
The toggle button itself does a spring-scaled icon swap (Framer Motion) with
`AnimatePresence` for a clean sun/moon crossfade.

## Texture

No gradients, no heavy shadows, no glassmorphism, no background grids.
Division of content comes from **single-pixel hairlines** (`--line`) and
whitespace.

## Glowing grid background (GridGlow)

Scoped to the **Hero section only** (mounted inside `Hero.jsx`, clipped by the
section's `overflow-hidden`). A canvas fills the section behind the hero
content (`z-0`, `pointer-events: none`) and renders a large, subtle square grid
in the theme's `--line` color. As the cursor moves over the hero, a small
cluster of grid cells around it illuminates individually:

- Cells are **large** (80px) and the lit group spans ~3–5 cells.
- The cell under the cursor is **clearly brightest**; the surrounding ring is
  a medium orange/brown, the outer ring a faint tint — a tiered falloff
  (`pow(1 - d/r, 2.2)` in cell units), **not** one circular spotlight.
- Each lit cell is drawn as an inset tile filled with `--accent`, so the dark
  grid hairlines separate the squares cleanly.
- The highlight interpolates toward the cursor smoothly and decays
  (`*0.94`/frame) after it leaves, leaving a soft trailing fade.

- `GridGlow.jsx` is reusable and self-contained (no dependencies beyond React);
  it sizes itself to its host container and tracks the cursor relative to it.
- It reads `--line` / `--accent` live from CSS so it matches light & dark mode
  automatically (a `MutationObserver` refreshes it on `data-theme` changes).
- Purely a canvas paint loop with `requestAnimationFrame` + lerped per-cell
  values — no React state churn on mouse movement, no DOM rebuilds.
- Props: `cellSize` (80), `glowRadius` (2.4 cells), `cellAlpha` (0.55), `gridOpacity` (0.8).
- Its host must be `position: relative` (or similar) so the absolutely-positioned
  canvas stays inside the section and below the content.

---

# 2. Typography

Typography carries the entire design.

## Display — Fraunces (Serif)

The only display voice. Reserved for headlines, names, and the large email
link in Contact.

``` css
font-family: 'Fraunces', Georgia, serif;
font-weight: 500;
line-height: 1.05;
letter-spacing: -0.01em;
```

Rules:

- Generated with the `.display` utility class
- Never bold. Medium weight maximum.
- Headlines should feel large but readable; heroes use fluid sizing
  (`text-5xl` → `lg:text-[7rem]`), section headings `text-4xl` → `md:text-6xl`.

## Sans-serif — Inter

Body copy and navigation. Kept muted (`#777777`) so it never competes with
the display type.

## Monospace — JetBrains Mono

Micro-labels only: section indices, durations, small annotations.
Tiny (10–12px), uppercase, wide letter-spacing, faint gray.

## Hierarchy

``` text
Display / Hero   → Fraunces, huge
Section heading  → Fraunces
Body             → Inter
Micro-labels     → JetBrains Mono, uppercase 10–12px
```

---

# 3. Layout

- Content container: `max-w-7xl` (1280px) per section, centered, `px-6 md:px-12`.
- No vertical boundary lines, no boxed page rail, no grid overlays.
- Sections separated by a single hairline `border` and generous vertical
  rhythm (`py-24 md:py-28`).
- Readability is handled locally: long paragraphs carry `max-w-2xl/3xl`,
  never whole-section containers.

## Section Pattern

Every section follows a consistent rhythm:

``` text
MONO LABEL   →  "02 — SELECTED WORK"
DISPLAY BIG  →  "Things I've shipped."
CONTENT      →  hairline-divided rows / columns
```

Content is never wrapped in cards. Cards, panels, and bordered tiles are
removed in favor of rows and columns separated by hairlines.

---

# 4. Section-by-Section

## Navbar

Fixed, transparent at top, blurred canvas once scrolled. Left: name in serif.
Right: plain text links (Work, About, Skills, Timeline, Milestones) + theme
toggle (sun/moon icon), Resume link and a "Get in touch" pill. Mobile:
hamburger → full-height menu. No command palette, no search, no version badges.

## Hero

High, whitespace-rich, left-aligned. Stack:

``` text
Mono label:   AYUSH SONI — FULL STACK DEVELOPER, LUCKNOW
Display H1:   "I'm Ayush — I build full-stack web apps powered by AI."
Mono role:    rotating role line (orange)
Body:         one line of proof (what's live, with what stack)
CTA row:      See the work · View resume
Meta row:     email / github / linkedin (hairline separated)
```

No console windows, no fake telemetry, no architecture diagrams.

## About

`01 — ABOUT`. A wide display statement, followed by three focus areas
in a `3-col`, hairline-divided grid. Each column: mono index, display title,
description, hairline spec list. No cards.

## Projects

`02 — SELECTED WORK`. A vertical list of projects, each a full-width row:

``` text
[01]   Project title (display, hover→orange)
       tagline (italic, muted)
       description (muted, max-w-3xl)

       tech list ────────────────  Live ↗  Code ↗
```

Divided by hairlines. No images, no boxes, no badges. Beneath the list, a
compact hairline row of the four measured performance numbers, and a
"git clone" reproduction note.

## Experience / Education

`03` / `04`. Simple stacked rows: display title, muted company/institution,
hairline-divided duration on the right, plain list of points. No timeline
markers, no cards.

## Skills

`05 — SKILLS`. A 3-column hairline grid of plain-text skill groups. Category
title in display, items as orange-dot bullet lists. No icons, no "VERIFIED"
labels, no per-skill chips.

## Milestones

`06 — MILESTONES`. Hairline stacked rows merging hackathon results and
certifications: mono kind label, display title, context line, short plain
description. No "VERIFIED / OFFICIAL / RECORD" framing — just the facts.

## Contact

`08 — CONTACT`. A huge display question ("Have a project in mind? Let's
talk.") followed by the email in large italic serif in orange, then a
hairline list of direct channels (email, phone, LinkedIn, GitHub).

## Footer

One line: `© Year Ayush Soni. Designed & built by me. Lucknow, India.` plus
bare icon links. Nothing else.

---

# 5. Motion

Minimal. Only subtle fade/translate reveals on scroll (`motion` from
framer-motion, `whileInView`, `once: true`, short durations). Link hovers
transition with 150–200ms. The single persistent motion is the 2px orange
scroll-progress line at the top of the viewport.

Avoid: bouncy easing, parallax, spinning elements, background animation.

---

# 6. Responsive Behavior

- Fluid display type scales with the viewport.
- Grids collapse: `3-col` → `1-col`.
- Project rows stack; meta column aligns left on mobile.
- Navbar links hide below `lg`; hamburger takes over.

Do not shrink the desktop layout; reflow it.

---

# 7. Accessibility

- Headlines: high contrast in both themes (ink on canvas).
- Muted body text stays readable against its canvas in both modes.
- All interactive links have visible hover states and focus styles.
- All interactive links have visible hover states and focus styles.
- Information is never conveyed by color alone.

---

# 8. Do / Don't

## Do

- Let typography fill the screen.
- Use Fraunces for every headline.
- Separate content with hairlines and whitespace.
- Keep body copy and labels quiet and gray.
- Use orange as a surgical accent only.

## Don't

- Don't add boxes, cards, panels, or borders around content itself.
- Don't use monospace for anything larger than a micro-label.
- Don't show fake telemetry, metrics, or console windows.
- Don't use heavy weights, gradients, shadows, or 3D.
- Don't write technical filler — say what you do plainly.