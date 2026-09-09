# DESIGN.md

## Design Direction

A dark, technical, enterprise-grade visual system for an AI
infrastructure / inference platform.

The interface should feel:

-   **Industrial**
-   **Technical**
-   **Premium**
-   **Secure**
-   **Minimal**
-   **Data-driven**
-   **Confident rather than flashy**

The design relies on restraint. Avoid gradients, excessive shadows,
decorative illustrations, large rounded cards, or generic SaaS visual
language.

> **Core principle:** make the product feel like infrastructure, not a
> marketing website.

------------------------------------------------------------------------

# 1. Visual Identity

## Color Palette

Use a near-black base with warm off-white typography and a single orange
accent.

### Primary

``` text
Background       #0B0B0B
Surface          #111111
Elevated Surface #151515
Border           #252525
Border Strong    #303030

Text Primary     #F2F2F0
Text Secondary   #777777
Text Muted       #555555

Accent Orange    #FF6900
```

Orange should be used sparingly for:

-   Section markers
-   Active states
-   Important metrics
-   Diagram highlights
-   Primary CTA emphasis
-   Small visual indicators

Do **not** turn the interface into an orange-themed website. Orange is
an accent, not the foundation.

------------------------------------------------------------------------

# 2. Typography

Use **three distinct font categories** to create hierarchy and give the interface its technical/editorial character:

1. **Sans-serif** for primary UI and large headings
2. **Monospace** for technical/system information
3. **Serif** as a restrained editorial accent where appropriate

The three fonts should feel intentionally different, but still belong to the same visual system.

## Font Roles

### 1. Sans-serif: Primary UI & Display

Use a modern grotesk or geometric sans-serif for the majority of the interface.

Characteristics:

- Large
- Clean
- Neutral
- Tight but readable
- Normal, medium, or slightly light weight
- Minimal stylistic variation

Use for:

- Hero headlines
- Section headings
- Card titles
- Body copy
- Navigation
- Buttons
- General UI

Example stack:

```css
font-family:
  "Inter",
  "Helvetica Neue",
  Arial,
  sans-serif;
```

### 2. Monospace: Technical Language

Use a technical monospace font to create the infrastructure / engineering feel.

```css
font-family:
  "IBM Plex Mono",
  "JetBrains Mono",
  "SFMono-Regular",
  monospace;
```

Use monospace for:

- Eyebrow labels
- Metrics
- Model names
- Table metadata
- Technical annotations
- Code
- Small uppercase descriptors
- Status indicators
- Performance numbers
- Navigation labels where a more technical treatment is desired

Recommended treatment:

```text
font-size: 11–14px
letter-spacing: 0.12–0.20em
text-transform: uppercase
```

### 3. Serif: Editorial / Contrast Accent

A serif font may be used sparingly to introduce contrast and give selected messaging a more editorial, premium character.

Do **not** use serif for the entire interface.

Use it selectively for:

- A short emphasized phrase
- Supporting editorial statements
- Brand storytelling
- Large campaign/CTA moments
- Occasional visual contrast against technical UI

Example stack:

```css
font-family:
  "DM Serif Display",
  "Cormorant Garamond",
  Georgia,
  serif;
```

Serif usage should remain a minority of the typography system. It should feel intentional rather than decorative.

## Typography Hierarchy

```text
Display / Hero
→ Sans-serif

Section headings
→ Sans-serif

Body copy
→ Sans-serif

Technical labels
→ Monospace

Metrics / model data
→ Monospace

Code
→ Monospace

Editorial emphasis
→ Serif
```

## Important Rule

Do not randomly mix the three fonts.

The hierarchy should communicate meaning:

```text
Sans-serif → product / communication
Monospace  → system / data / engineering
Serif      → editorial / emphasis
```

This distinction is part of the visual identity, not merely a font preference.

# 3. Layout System

Use a centered page container with a visible vertical grid.

## Desktop

``` text
Page width:      ~1440–1600px
Content width:   ~1290–1450px
Side gutters:    5–7vw
```

The page should have subtle vertical boundary lines.

Example:

``` css
.container {
  width: min(90vw, 1440px);
  margin-inline: auto;
  border-inline: 1px solid var(--border);
}
```

Sections can use these grid boundaries as structural anchors.

## Grid

Prefer:

``` text
12-column desktop grid
6-column tablet grid
1–2 column mobile grid
```

Typical desktop gaps:

``` text
24px
32px
48px
64px
```

Avoid arbitrary spacing values when an established spacing scale can be
used.

------------------------------------------------------------------------

# 4. Spacing

Whitespace is a major part of the visual identity.

Use generous vertical spacing.

``` text
XS    8px
SM    12px
MD    20px
LG    32px
XL    48px
2XL   72px
3XL   96px
4XL   128px
5XL   180–240px
```

Major sections should feel separated by large amounts of empty space.

Do not compress sections merely to "fit more content."

------------------------------------------------------------------------

# 5. Borders

Borders are subtle and structural.

Preferred:

``` css
border: 1px solid #252525;
```

For stronger separation:

``` css
border-color: #303030;
```

Avoid:

-   Bright borders
-   Thick borders
-   Heavy drop shadows
-   Glassmorphism
-   Decorative outlines

The border should usually be visible only after the viewer notices it.

------------------------------------------------------------------------

# 6. Border Radius

Keep geometry mostly sharp.

``` text
Cards:       0–4px
Inputs:      0–4px
Code blocks: 8–14px
Pills:       999px
```

Buttons may use pill shapes, while structural components should remain
rectangular.

------------------------------------------------------------------------

# 7. Navigation

The navigation is compact, horizontal, and restrained.

### Desktop structure

``` text
[LOGO]

                    PLATFORM  PRODUCTS  RESOURCES  PRICING

                                      [LOGIN] [GET STARTED] [SEARCH]
```

Characteristics:

-   Dark background
-   Thin bottom border
-   Sticky/fixed behavior
-   Small uppercase or spaced labels
-   Generous horizontal spacing
-   Primary CTA is light/off-white
-   Secondary login button is outlined
-   Search is represented as a minimal icon button

### Navigation CTA

Primary:

``` text
GET STARTED
```

Style:

-   Off-white background
-   Near-black text
-   Pill shape
-   Medium-heavy typography
-   Compact height

------------------------------------------------------------------------

# 8. Eyebrow Labels

Most major sections begin with a small technical label.

Pattern:

``` text
■  SECTION NAME
```

The square marker is orange.

Example:

``` text
■ SECURITY & PRIVACY
```

Style:

``` text
font-size: 11–13px
font-family: monospace
letter-spacing: .18em
text-transform: uppercase
color: muted gray
```

The marker:

``` text
6–10px square
orange
```

This is one of the strongest recurring visual motifs.

------------------------------------------------------------------------

# 9. Hero Section

The hero should immediately communicate the product's core value.

## Structure

Desktop:

``` text
┌─────────────────────────────────────────────────────┐
│                                                     │
│  EYEBROW                    TECHNICAL VISUAL        │
│                                                     │
│  Huge headline                                      │
│                                                     │
│  Supporting copy                                    │
│                                                     │
│  [PRIMARY CTA] [SECONDARY CTA]                      │
│                                                     │
└─────────────────────────────────────────────────────┘
```

Use approximately a 50/50 or 52/48 split.

The left side contains:

1.  Eyebrow
2.  H1
3.  Supporting paragraph
4.  CTA row

The right side contains a technical visualization, diagram, benchmark
graphic, or product UI.

------------------------------------------------------------------------

# 10. Hero Headline

The headline should be extremely large and confident.

Example structure:

``` text
End-to-end
encrypted inference
for every model.
```

Characteristics:

-   Large display size
-   White/off-white
-   Tight line-height
-   Minimal decoration
-   Strong contrast against background

Avoid excessive bolding inside the headline.

------------------------------------------------------------------------

# 11. Hero Supporting Text

Supporting copy should be significantly quieter than the heading.

``` text
color: #777
font-size: 18–20px
max-width: 620px
line-height: 1.55–1.7
```

Important phrases may use the accent color sparingly, but avoid turning
the paragraph into a highlighted rainbow.

------------------------------------------------------------------------

# 12. Buttons

Buttons should feel like controls from an engineering product.

## Primary Button

``` text
BUILD ↗
```

Style:

-   Off-white background
-   Black text
-   Pill radius
-   14--16px technical typography
-   Generous horizontal padding
-   Compact vertical height

## Secondary Button

``` text
EXPLORE
```

Style:

-   Transparent background
-   Thin gray border
-   White text
-   Same dimensions as primary where possible

### Hover

Primary:

``` text
background: slightly darker off-white
transform: translateY(-1px)
```

Secondary:

``` text
border-color: #555
background: #111
```

Transitions should be quick and subtle.

------------------------------------------------------------------------

# 13. Metrics Strip

Immediately after the hero, use a horizontal metrics row.

Example:

``` text
454 t/s       0              2.7×             300+
performance   retention      lower cost       models
```

Each metric occupies an equal-width cell.

Use:

-   Large monospace or technical number
-   Small uppercase description
-   Vertical borders between cells
-   Strong horizontal borders above/below

Numbers should visually dominate the descriptions.

------------------------------------------------------------------------

# 14. Platform Section

Use a large heading followed by a concise explanation and three feature
cards.

Structure:

``` text
EYEBROW

Fastest and most secure
inference engine

Description                              VIEW DOCS ↗


┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ 01           │ │ 02           │ │ 03           │
│              │ │              │ │              │
│ Enterprise   │ │ Blackbox     │ │ Agents &     │
│ Inference    │ │ Router       │ │ Tooling      │
│              │ │              │ │              │
│ description  │ │ description  │ │ description  │
└──────────────┘ └──────────────┘ └──────────────┘
```

Cards should have:

-   Flat dark surface
-   Thin border
-   Large internal padding
-   Small index number
-   Small geometric icon
-   Large title
-   Muted description

------------------------------------------------------------------------

# 15. Feature Cards

Do not make cards overly decorative.

The cards should feel like panels in a technical control system.

Recommended:

``` css
padding: 32px;
min-height: 320px;
background: #111;
border: 1px solid #252525;
```

Use an icon or diagram in the top-right corner.

Keep icons geometric and minimal.

------------------------------------------------------------------------

# 16. Benchmark Section

The benchmark section should feel like technical evidence.

Headline:

``` text
Independent
measurements, not
claims.
```

Split layout:

``` text
LEFT
headline
explanation
unit/context

RIGHT
benchmark bars
```

## Benchmark Bars

Each row:

``` text
BLACKBOX.AI                         454
████████████████████████████████████

NEBIUS                              351
████████████████████████████

COREWEAVE                           222
████████████████████

TOGETHER AI                         173
██████████████
```

The leading result can use the brightest visual treatment.

Other results should progressively recede.

Keep the bars rectangular and flat.

------------------------------------------------------------------------

# 17. Technical Background Grid

Some sections can use a subtle repeating vertical grid or alternating
dark columns.

Example:

``` css
background-image:
  repeating-linear-gradient(
    90deg,
    transparent 0,
    transparent 120px,
    rgba(255,255,255,.025) 121px
  );
```

The effect must remain extremely subtle.

It should provide structure, not become a visible pattern competing with
the content.

------------------------------------------------------------------------

# 18. Security Section

Use security messaging as a major visual section rather than a tiny
footer claim.

Example:

``` text
■ SECURITY & PRIVACY

Your prompts are not
our product.

Supporting explanation


END-TO-END          explanation
CLOSED MODELS       explanation
TRAINING            explanation
```

The right side can contain a nested architecture diagram.

Use nested rectangular boundaries to communicate isolation:

``` text
ENTERPRISE API
└── DEDICATED CAPACITY
    └── SINGLE-TENANT DEPLOYMENT
        └── NO HUMAN REVIEW
```

Orange should highlight the most important security boundary.

------------------------------------------------------------------------

# 19. Model Catalog

Treat model listings like infrastructure data rather than product cards.

Use a table.

Columns:

``` text
MODEL | TYPE | CONTEXT | INPUT $/M
```

Each row should contain:

``` text
PROVIDER
model-name
```

The model name should be brighter and larger than the provider.

Rows are separated by thin horizontal borders.

Use tabs/filters such as:

``` text
[ALL] [TEXT] [CODE]
```

Selected state:

-   Off-white background
-   Dark text

Unselected:

-   Transparent
-   Thin border

------------------------------------------------------------------------

# 20. Code Section

Use a two-column developer section.

``` text
┌──────────────────────┬─────────────────────────────┐
│                      │                             │
│ Or start with        │       CODE WINDOW           │
│ three lines of       │                             │
│ code.                │                             │
│                      │                             │
│ explanation          │       curl ...              │
│                      │                             │
│ ■ feature            │                             │
│ ■ feature            │                             │
│ ■ feature            │                             │
└──────────────────────┴─────────────────────────────┘
```

The code window should resemble a terminal/editor:

-   Dark elevated surface
-   Rounded corners
-   Tiny top controls
-   Monospace text
-   Copy button
-   Horizontal overflow where necessary

Do not use a giant colorful syntax-highlighted editor.

Keep syntax highlighting restrained.

------------------------------------------------------------------------

# 21. CTA Section

The major CTA should intentionally break the dark visual rhythm.

Use the accent orange as a full-width section.

``` text
┌─────────────────────────────────────────────────────┐
│                                                     │
│ ■ HIGH-TRUST MACHINE INTELLIGENCE                  │
│                                                     │
│ Any model. Full speed.                              │
│ Your data stays yours.                              │
│                                                     │
│ [START BUILDING ↗] [TALK TO ENTERPRISE SALES]       │
│                                                     │
└─────────────────────────────────────────────────────┘
```

## CTA Colors

``` text
Background: Orange
Heading:    Near-black
Body:       Near-black
Primary:    Near-black background + orange text
Secondary:  Transparent + dark border
```

The headline should be huge.

This section is intentionally high contrast and should feel like the
conclusion of the page.

------------------------------------------------------------------------

# 22. Footer

Keep the footer minimal.

Structure:

``` text
LOGO / COMPANY
short description

PLATFORM
...

DEPLOYMENT
...

DEVELOPERS
...

COMPANY
...
```

Use small text and generous spacing.

The footer should feel like infrastructure documentation rather than a
marketing sitemap.

------------------------------------------------------------------------

# 23. Motion

Motion should be subtle.

Preferred:

-   Fade/translate section reveals
-   Button hover transitions
-   Slight diagram movement
-   Benchmark bar animation
-   Staggered card appearance
-   Smooth navigation transitions

Avoid:

-   Bouncy animations
-   Excessive parallax
-   Spinning 3D objects
-   Constantly moving backgrounds
-   Scroll hijacking

Recommended:

``` css
transition:
  transform 180ms ease,
  opacity 180ms ease,
  border-color 180ms ease,
  background-color 180ms ease;
```

------------------------------------------------------------------------

# 24. Responsive Behavior

## Desktop

Prioritize:

-   Large typography
-   Two-column sections
-   Horizontal metrics
-   Three-column cards
-   Full-width tables

## Tablet

Reduce:

-   Heading sizes
-   Section spacing
-   Grid gaps

Allow some two-column layouts to remain where space permits.

## Mobile

Convert:

``` text
2 columns → 1 column
3 cards → vertical stack
metrics row → 2 × 2 grid
table → horizontally scrollable
navigation → compact menu
```

Hero technical visual should move below the text.

Do not simply shrink the desktop layout until everything becomes
microscopic.

------------------------------------------------------------------------

# 25. Accessibility

Maintain strong contrast for:

-   Primary headings
-   Buttons
-   Navigation
-   Interactive controls

Muted gray text should still remain readable.

Every interactive element needs:

-   Visible focus state
-   Keyboard accessibility
-   Clear hover state
-   Meaningful accessible label

Do not communicate information through orange alone.

------------------------------------------------------------------------

# 26. Component Rules

Recommended component structure:

``` text
Layout
├── Navbar
├── PageContainer
├── Section
├── SectionEyebrow
├── Button
├── MetricStrip
├── FeatureCard
├── TechnicalDiagram
├── BenchmarkChart
├── SecurityPanel
├── ModelTable
├── CodeWindow
├── CTASection
└── Footer
```

Components should be composable rather than page-specific whenever
possible.

------------------------------------------------------------------------

# 27. Design Tokens

Example token system:

``` css
:root {
  --bg: #0B0B0B;
  --surface: #111111;
  --surface-elevated: #151515;

  --text: #F2F2F0;
  --text-secondary: #777777;
  --text-muted: #555555;

  --border: #252525;
  --border-strong: #303030;

  --accent: #FF6900;

  --space-1: 8px;
  --space-2: 12px;
  --space-3: 20px;
  --space-4: 32px;
  --space-5: 48px;
  --space-6: 72px;
  --space-7: 96px;
  --space-8: 128px;
  --space-9: 180px;

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-pill: 999px;
}
```

------------------------------------------------------------------------

# 28. Do / Don't

## Do

-   Use huge typography.
-   Use generous whitespace.
-   Use thin borders.
-   Use monospace metadata.
-   Use orange as a surgical accent.
-   Use diagrams and data as visual content.
-   Keep cards rectangular and restrained.
-   Make infrastructure and technical information visually important.
-   Maintain a strict grid.
-   Make the page feel expensive through restraint.

## Don't

-   Use gradients everywhere.
-   Use purple/blue AI clichés.
-   Use glassmorphism.
-   Use giant rounded cards.
-   Use excessive shadows.
-   Use stock photos.
-   Use cartoon illustrations.
-   Over-animate the page.
-   Put every piece of content inside a card.
-   Turn every heading into bold 900-weight text.
-   Use orange for every interactive element.

------------------------------------------------------------------------

# 29. Overall Design Formula

``` text
70%  near-black / negative space
20%  off-white + muted typography
8%   borders / technical UI
2%   orange accent
```

The strongest visual characteristic is **controlled restraint**.

The page should look like a company that sells compute infrastructure to
engineers and enterprises, not a startup desperately trying to convince
visitors that it uses AI.

When implementing the design, prioritize:

``` text
GRID
→ TYPOGRAPHY
→ SPACING
→ CONTRAST
→ DATA VISUALIZATION
→ MICRO-INTERACTIONS
```

If those are correct, the interface will retain the same visual
character even when the content, branding, and product details change.
