# Aeronica — Theme Documentation

Deep technical documentation of the design system, theme architecture, and implementation logic.

---

## 1. Fluid Typography System

### Root Font Scaling
The base font size is fluid, derived from a viewport-width calculation:

```css
--size: 1440; /* design reference width */
--font-s: calc((100vw / var(--size)) * 10);
```

| Viewport Range | `--size` | 1rem ≈ | Rationale |
|---|---|---|---|
| ≤ 600px | 375 | 2.67px | Mobile-first compact scaling |
| 601–1024px | 768 | 1.30px | Tablet intermediate |
| ≥ 1025px | 1440 | 0.69px | Desktop reference (1440 = design width) |

**Consequence:** `1.6rem` body text renders as ~4.3px on mobile → all typography scales down proportionally on smaller screens without media query breakpoints.

### Font Families

| Role | Font | Source | CSS Variable | Weight Range |
|---|---|---|---|---|
| Sans-serif | Inter | `next/font/google` | `--font-sans` | 100–900 |
| Monospace | JetBrains Mono | `next/font/google` | `--font-mono` | 100–800 |
| Heading | Inter (same as sans) | falls through to `--font-sans` | `--font-heading` | 400–700 |
| Body | Inter | falls through to `--font-sans` | `--font-body` | 300–500 |

Fonts are loaded via `next/font/google` in `app/layout.tsx` with `display: "swap"`.

### Type Scale Tokens

| Token | Size | Weight | Letter-spacing | Line-height | Usage |
|---|---|---|---|---|---|
| `body` | 1.6rem | 400 | normal | 1.5 | Paragraphs, general text |
| `h1` / hero | `clamp(3.6rem, 6vw, 7.2rem)` | 400 | -0.03em | 1.1 | Hero headline, page titles |
| `h2` | `clamp(2.8rem, 4vw, 4rem)` | 600 | -0.03em | 1.15 | Section headings |
| `h3` | 1.7–2.2rem | 600 | -0.02em | 1.2–1.3 | Card titles |
| `section-title` | 1.4rem | 600 | 0.1em | 1 | Mono uppercase label above h2 |
| `eyebrow` | 1.2rem | 600 | 0.1em | 1 | Hero/CTA mono label |
| `cta-text` | 1.3–1.5rem | 500–600 | normal | 1 | Button and link labels |
| `nav-link` | 1.3rem | 500 | normal | 1 | Desktop navigation |
| `mobile-nav` | 4rem | 400 | -0.02em | 1 | Mobile overlay links |
| `meta` | 0.9–1.1rem | 500 | 0.08em | 1 | Spec labels, tags, footnotes |
| `mono-stat` | `clamp(3.2rem, 4vw, 4.8rem)` | 500 | -0.03em | 1 | Stat numbers |

### Easing Curves for Typography
- Headings use no `letter-spacing` or small negative (`-0.03em`) for tight, modern look.
- Mono text always uses positive `letter-spacing` (0.05–0.1em) for readability.
- JetBrains Mono at small sizes benefits from `0.08em` letter-spacing in uppercase contexts.

---

## 2. Color System

### Brand Palette

| Token | Value | CSS Variable | Role |
|---|---|---|---|
| Primary Blue | `#009BFF` | `--color-primary` | CTAs, links, highlights, accent elements |
| Dark Blue | `#21389A` | `--color-primary-dark` | Dark sections, navbar scrolled, footer, headings |
| White | `#FFFFFF` | `--color-white` | Backgrounds, cards, text on dark |
| Black | `#000000` / `#1a1a1a` | `--color-black` | Typography only — never backgrounds |
| Agri Dark | `#32620E` | `--color-agri-dark` | Agriculture sections |
| Agri Light | `#0CC820` | `--color-agri-light` | Agriculture accent |

### Semantic Tokens

```css
--color-bg: #ffffff;
--color-text: #1a1a1a;
--color-text-soft: #555555;
--color-text-muted: #888888;
--color-border: #e5e5e5;
--color-dark-bg: #21389A;
```

### Contrast System on Dark Backgrounds (#21389A)
White text on `#21389A` uses opacity to create hierarchy without additional colors:

| Element | Opacity (rgba white) | Uses |
|---|---|---|
| Primary heading | 1.0 | Section titles, stat numbers |
| Body / description | 0.85–0.92 | Paragraphs, quotes |
| Eyebrow / label | 0.7–0.8 | Mono section labels, breadcrumbs |
| Subtitle | 0.6–0.7 | Secondary text |
| Link / subdued | 0.5–0.6 | Footer links, category labels |
| Legal / copyright | 0.4–0.5 | Footer legal text |
| Watermark | 0.03–0.06 | Decorative / background elements |

### Critical Color Rules
1. **No black backgrounds** — all dark sections use `#21389A`
2. **Black is typography-only** (`#000000` or `#1a1a1a`)
3. **Agriculture greens** restricted to agriculture-specific sections only
4. **Hero overlay gradients** are the sole exception for black (`rgba(0,0,0,α)`)
5. **Pure white only** — no off-white variations (`#f3f0ec`, `#fbfbfb`, `#fafafa` etc. must be `#ffffff`)

### Contrast Enhancement Strategy on Dark Sections
When text sits on `#21389A`, white text opacities are tuned to WCAG-compliant levels:
- Minimum opacity 0.5 for 4.5:1 contrast ratio on `#21389A` at typical heading sizes
- Larger type (stats, headings) can use lower opacities while remaining compliant

---

## 3. Spacing & Layout

### Section Dimensions
```css
--section-py: clamp(8rem, 12vw, 12rem); /* vertical padding */
--section-px: clamp(1.5rem, 4vw, 6rem); /* horizontal padding */
--grid-gap: clamp(1rem, 1.5vw, 2rem);
```

At 1440px breakpoint: `--section-px` becomes `8rem`.

### Section Max-Width Convention
- Most content sections use `max-width: 1440px; margin: 0 auto`
- Testimonials uses `max-width: 1000px` for narrower reading width
- Stats uses `max-width: 1200px`
- Full-width sections (Hero, Stats, Testimonials, CTA) ignore max-width on the section itself

### Grid Patterns

| Component | CSS Grid | Breakpoint Behavior |
|---|---|---|
| Services | `repeat(4, 1fr)` with column spans | → 2-col at 1024px → 1-col at 640px |
| Technology | `repeat(auto-fit, minmax(280px, 1fr))` | Wraps naturally |
| Process | `repeat(4, 1fr)` | → 2-col at 1024px → 1-col at 640px |
| Products | Horizontal scroll (`flex`, no wrap) | Card min-width: `calc(100%/3 - 1.6rem)` → 50% → 100% |
| Industries | `repeat(auto-fill, minmax(22rem, 1fr))` | Wraps naturally |
| Portfolio | `repeat(auto-fill, minmax(28rem, 1fr))` | Wraps naturally |
| Stats | `repeat(4, 1fr)` with 1px separator gaps | → 2-col at 768px → 1-col at 480px |
| Footer | `repeat(4, 1fr)` | → 2-col at 768px → 1-col at 480px |

### Border Radius
All radii intentionally small for a precision-engineering aesthetic:

| Token | Value | Elements |
|---|---|---|
| `--radius-sm` | 2px | Small UI elements, tags |
| `--radius-md` | 4px | Cards, buttons, inputs, dropdowns |
| `--radius-lg` | 4px | Bento items, images |
| `--radius-xl` | 4px | Large containers |
| `--radius-full` | 9999px | Avatars, custom cursor, dots |

### Shadow System

| Token | Value | Use |
|---|---|---|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.04)` | Subtle depth |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.05)` + `0 2px 4px rgba(0,0,0,0.04)` | Default card state |
| `--shadow-lg` | `0 12px 40px rgba(0,0,0,0.06)` + `0 4px 12px rgba(0,0,0,0.04)` | Card hover |
| `--shadow-xl` | `0 20px 60px rgba(0,0,0,0.08)` + `0 6px 20px rgba(0,0,0,0.04)` | Dropdowns, modals |

---

## 4. Dot Design System

The dot is the signature graphic primitive, used as a replacement for thin-line vector icons.

### Dot Radius Conventions

| Component | `r` value | ViewBox | Purpose |
|---|---|---|---|
| DotChevron (arrow) | `r="1.3"` | `24×24` | Link/button arrows, cursor arrow |
| DotCross | `r="1.1"` | `24×24` | Decorative cross (unused currently) |
| DotDivider | `r="1.0"` | `30×24` | Section separators |
| DotBullet | `r="1.2"` | `8×8` | List item bullets |
| DotIndicator | `r="1.6"` (active), `r="0.7"` (inactive) | `12×12` | Carousel pagination |

### Rendered Size Hierarchy

| Tier | SVG `size` | Usage Context | Font Size |
|---|---|---|---|
| Large | 16px | Standalone scroll/carousel arrows (Products, Testimonials) | — |
| Medium | 14px | Primary CTA buttons (Hero, Navbar, CTA section, BackToTop) | 1.3–1.5rem |
| Small | 12px | All inline links, breadcrumbs, back-links, section links | 1.3–1.4rem |

### Dot Arrow Technique
Arrows are built from 9 dots forming a 2-segment chevron:

```
Segment 1: (5,2) → (19,12) — 5 dots
Segment 2: (19,12) → (5,22) — 5 dots (vertex at 19,12 shared)

Result: 9 unique dots (vertex counted once)
```

Dots are evenly spaced along each segment using linear interpolation:
```
dx = (x2 - x1) / (n - 1)
dy = (y2 - y1) / (n - 1)
```

### Rotation Convention
DotChevron supports 4 directions via SVG `transform: rotate()`:

| Direction | Degrees |
|---|---|
| right | 0 |
| left | 180 |
| up | -90 |
| down | 90 |

### Active Link Indicator
Navigation active links use a single filled dot (`width: 4px; height: 4px; border-radius: 50%`) positioned below the link text. This is the same dot language applied at the smallest scale.

### Component Map

| Component | File | Dots | Behavior |
|---|---|---|---|
| DotChevron | `DotIcons.tsx:20` | 9 | Base arrow: 4 directional rotations |
| DotArrowRight | `DotIcons.tsx:35` | via DotChevron | Right-pointing alias |
| DotArrowLeft | `DotIcons.tsx:36` | via DotChevron | Left-pointing alias |
| DotArrowUp | `DotIcons.tsx:37` | via DotChevron | Up-pointing alias |
| DotArrowDown | `DotIcons.tsx:38` | via DotChevron | Down-pointing alias |
| DotCross | `DotIcons.tsx:44` | 5 | Zigzag diagonal (reserved) |
| DotDivider | `DotIcons.tsx:65` | 9 | Arc-shaped section divider |
| DotBullet | `DotIcons.tsx:81` | 1 | List item marker |
| DotIndicator | `DotIcons.tsx:97` | 1–2 | Active/inactive carousel pagination |

---

## 5. Custom Cursor System

### Architecture
The cursor has two elements: a **dot** (8×8px, follows mouse at 35% lerp) and a **ring** (36×36px, follows at 12% lerp). Both are `position: fixed` with `pointer-events: none`.

### State Machine

```
                    ┌──────────────────────────────┐
                    │        Default (8px dot)       │
                    │        Ring: 36px              │
                    └──────────────┬───────────────┘
                                   │
              ┌────────────────────┼────────────────────┐
              ▼                    ▼                    ▼
      ┌──────────────┐   ┌──────────────┐   ┌──────────────────┐
      │  Dark BG      │   │  On Link      │   │  On Text          │
      │  dot: #fff    │   │  dot: hidden  │   │  dot: I-beam bar   │
      │  ring: #fff70 │   │  ring: 56px   │   │  (22px tall, 2px)  │
      └──────────────┘   └──────────────┘   └──────────────────┘
                                                   │
                                                   ▼
                                          ┌──────────────────┐
                                          │  Horizontal        │
                                          │  Scroll Arrow      │
                                          │  dot: transparent  │
                                          │  arrow: 34px SVG   │
                                          │  ring: 56px        │
                                          │  side: left/right  │
                                          └──────────────────┘
```

### Dark Background Detection
Uses `elementFromPoint` + `getComputedStyle` to detect dark backgrounds:
1. Check explicit `background-color` luminance (≤ 140)
2. Check `background-image` for gradients with dark color stops
3. File-based background images (not linear/radial gradients) → treat as dark
4. White text color with no explicit background → likely dark section
5. `<img>` elements → always dark

Checked every 50ms (RAF throttled) to avoid layout thrashing.

### Horizontal Scroll Mode
When the cursor enters a `.horizontal-scroll` element:
1. The dot becomes transparent
2. A 34px dot-arrow SVG appears centered in its place
3. Direction (left/right) is determined by comparing cursor X to container midpoint
4. Clicking on the arrow scrolls the container by `clientWidth * 0.75` in the arrow direction
5. Ring expands to 56px with subtle background fill

### Cursor States CSS Classes
- `html.cursor-dark-bg` — dark background detected
- `html.cursor-on-link` — hovering `<a>, <button>, [role=button]`
- `html.cursor-on-text` — hovering text elements (p, h1–h6, li, etc.)
- `html.cursor-h-scroll` — inside `.horizontal-scroll` container
- `html.cursor-h-scroll-left` / `html.cursor-h-scroll-right` — arrow direction

---

## 6. Animation System

### Framework
All animations use **Framer Motion** exclusively (no GSAP). Key components:
- `MotionReveal` — staggered `whileInView` reveal (translateY + fade)
- `MotionParallax` — `useScroll` / `useTransform` parallax offset
- `FadeIn` — simple opacity + Y reveal

### Animation Tokens

| Name | Duration | Easing | Elements |
|---|---|---|---|
| `stagger-in` | 0.7s | `--ease-out-quart` | Staggered card reveals |
| `marquee-slide` | 60s | linear | Client logo infinite scroll |
| `ken-burns` | 25s | `--ease-out-cubic` | Background image slow zoom |
| `logo-cinematic-zoom` | 2s | `cubic-bezier(0.2, 0, 0.2, 1)` | Loading screen logo |
| `light-sweep` | 2s | ease-in-out | Logo shimmer sweep |
| `glow-pulse` | 2s | ease-in-out | Loading glow |

### Transition Durations

```css
--transition-fast: 200ms ease;    /* color, opacity hovers */
--transition-base: 300ms ease;    /* card, button hovers */
--transition-slow: 500ms ease;    /* overlay, panel toggles */
--transition-spring: 500ms cubic-bezier(0.165, 0.84, 0.44, 1);  /* cinematic */
```

### Hover Effects Registry

| Element | Transform | Shadow | Duration | Easing |
|---|---|---|---|---|
| `.card-hover` | `translateY(-2px)` | `shadow-sm` → `shadow-lg` | 0.3s | `--ease-out-cubic` |
| `.card-hover::after` | (dot grid fades in top-right) | — | 0.3s | ease |
| `button` (general) | `scale(1.02–1.05)` | enhanced shadow | 0.2s | ease |
| `nav-link` | — | background tint | 0.3s | ease |
| `industry-card` | `translateY(-0.3rem)` | enhanced shadow | 0.3s | ease |
| `client-logo` | — | grayscale→full color | 0.3s | ease |

---

## 7. Component Architecture

### Component Tree (Home Page)
```
App Layout
├── Loading Screen (logo-cinematic + glow-pulse)
├── Navbar (fixed, scroll-aware)
├── Page Content
│   ├── Hero (100vh, video bg, parallax, CTA)
│   ├── ClientsMarquee (infinite scroll logos)
│   ├── Stats (#21389A bg, animated counters, .dot-watermark)
│   ├── Services (bento grid, dot watermark)
│   │   └── (Tech section)
│   ├── Technology (#21389A bg, white cards, .dot-watermark)
│   ├── Process (cardless horizontal grid, .dot-watermark)
│   ├── Products (horizontal-scroll carousel, DotIndicator pagination)
│   ├── Portfolio (image cards with gradient overlays)
│   ├── Industries (icon cards, flex-start alignment)
│   ├── Testimonials (manual carousel, DotIndicator pagination)
│   ├── News (article cards)
│   └── CTA (primary call-to-action)
├── Footer (#21389A bg, 4-column grid)
├── BackToTop (floating scroll-to-top)
├── CustomCursor (dot + ring)
└── Film Grain (SVG noise overlay, hidden mobile)
```

### Page Routes & Their Sections

| Route | Sections |
|---|---|
| `/` | Hero → Clients → Stats → Services → Technology → Process → Products → Portfolio → Industries → Testimonials → News → CTA |
| `/about` | PageHero → About content → Leadership → Tech → Positions → Partner |
| `/solutions` | PageHero → Solutions grid → Case studies link |
| `/solutions/[slug]` | PageHero → Solution detail → Industry indicators → Resources → Case study |
| `/technology` | PageHero → Tech pillars → Stats → CTA |
| `/products/[slug]` | PageHero → Product detail → Specs → CTA |
| `/resources` | PageHero → Resource cards → Contact support |
| `/resources/[slug]` | PageHero → Category listing → Back link |
| `/resources/[slug]/[subslug]` | PageHero → Article content → Breadcrumbs → Back link |
| `/case-studies/[slug]` | PageHero → Case study content → Results |
| `/case-studies/project-gallery` | PageHero → Gallery grid → CTA |
| `/industries/[slug]` | PageHero → Industry detail → Stats → CTA |
| `/contact` | PageHero → Contact form → Info cards |

### Component Pattern: Server vs Client

| Type | Directive | Tools | Files |
|---|---|---|---|
| Server | (none) | Plain React, server data | `app/page.tsx`, layout, pages |
| Client | `"use client"` | Framer Motion, useEffect, state, refs | All `components/*.tsx` |

---

## 8. CSS Architecture

### File Structure
- **`app/globals.css`** — All global styles (1021 lines)
  - CSS custom properties (fluid type, colors, shadows, radii, easing)
  - Reset & base styles
  - Custom cursor (full state machine)
  - Navigation (desktop dropdown + mobile overlay)
  - Loading screen + keyframes
  - Page overlay, film grain, ken burns, parallax, tilt
  - Card hover + dot watermark
  - Clients marquee
  - Product cards
  - CTA section, back-to-top
  - Footer
  - All responsive breakpoints

- **`css/style.css`** — Legacy original CSS (not actively used, kept for reference)

### CSS Class Conventions
- **BEM-lite**: `.block__element--modifier` (e.g., `.nav-overlay__menu--open`)
- **Component-scoped**: `.navbar-`, `.hero-`, `.product-`, `.cta-`
- **State classes**: `.is-scrolled`, `.is-open`, `.is-visible`, `.is-active`, `.hidden`
- **Interaction classes** (set via JS): `.cursor-dark-bg`, `.cursor-on-link`, `.cursor-h-scroll`

---

## 9. Image & Asset Strategy

### Image Paths
```
/public/
├── assets/images/pexels/    ← Pexels stock photos (local, no hotlinking)
├── assets/img/              ← Product PNGs, client logos, favicon
├── assets/video/            ← Hero background MP4
└── assets/fonts/            ← Self-hosted fonts (fallback)
```

### Background Image Pattern
All hero/card background images use the gradient-overlay technique:

```tsx
background: `linear-gradient(135deg, ${color1}, ${color2}), url(...)`
backgroundBlendMode: "overlay"
backgroundSize: "cover"
```

### Image Treatment by Context
| Context | Source | Treatment |
|---|---|---|
| Hero video | Local MP4 | 4x speed → 0.5x slow-mo, black gradient overlay |
| Product cards | `/assets/img/*.png` | Gradient bg (dark blue), drop-shadow |
| Portfolio cards | `/assets/images/pexels/*` | Brand gradient overlay (`background-blend-mode: overlay`) |
| Client logos | `/assets/img/client-logos/*` | `mix-blend-mode: multiply`, grayscale on default |
| About / Solutions | Pexels | Gradient overlay + background-blend-mode |

---

## 10. Responsive Strategy

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | ≤ 768px | `--section-px: 1.5rem`, single-column grids, hide film grain, back-to-top: 3.6rem |
| Tablet | ≤ 1024px | Hide desktop nav → hamburger, 2-column grids, mobile overlay active |
| Desktop | 769–1024+ | Full layouts, desktop nav visible |
| Wide | ≥ 1440px | `--section-px: 8rem`, max-width containers at 1440px |

### Responsive Pattern
- **Typography**: Fluid via `--font-s` — no media queries needed for text scaling
- **Grids**: CSS Grid with `auto-fit` / `auto-fill` for natural wrapping
- **Navigation**: `@media (max-width: 1024px)` toggles between desktop menu and mobile overlay
- **Custom cursor**: Disabled on touch devices (no `touchstart` handling needed — `pointer-events: none` ensures no interference)
- **Film grain**: Hidden ≤ 768px for performance

---

## 11. Interaction Patterns

### Navigation
- **Desktop**: Horizontal menu, `.is-scrolled` adds white bg + shadow, active link shows dot indicator
- **Dropdown**: Solutions hover-triggered panel, 220px min-width columns
- **Mobile**: Full-screen overlay (`#21389A` + backdrop-blur), accordion submenus, 4rem font links
- **CTA button**: Inverted on scroll (white → `#21389A` bg with white text)

### Scroll
- **Smooth scroll**: Lenis v1 via `SmoothScroll` component wrapping `<main>`
- **Horizontal scroll**: Products carousel uses native `overflow-x: auto` with `scroll-snap-type: x mandatory`
- **Parallax**: Framer Motion `useScroll`/`useTransform` for background offset
- **Scroll-aware navbar**: `.is-scrolled` class toggled at 50px threshold

### Loading
- Full-screen overlay with logo cinematic zoom (blur → sharp, scale up, brightness fade)
- Light sweep animation across logo
- Radial glow pulse
- Hidden after timeout + page-ready check

---

## 12. Key Dependencies

| Package | Version | Role |
|---|---|---|
| `next` | ^16.2.9 | React framework (App Router) |
| `react` / `react-dom` | ^18 | UI library |
| `framer-motion` | ^12.40.0 | All animations, scroll, parallax |
| `lucide-react` | ^0.378.0 | Icon library (chevrons, nav icons) |
| `lenis` | ^1.3.24 | Smooth scroll engine |
| `tailwindcss` | ^3.4.1 | Utility CSS (minimal usage; custom CSS is primary) |
| `postcss` / `autoprefixer` | — | CSS pipeline |
| `typescript` | ^5 | Type safety |

---

## 13. Performance Considerations

- **Custom cursor**: RAF-based loop (no setInterval), 50ms throttle on `elementFromPoint` which is layout-triggering
- **Images**: `next/image` with `priority` prop on above-fold images, lazy loading below
- **Animations**: `will-change: transform` on animated elements, Framer Motion's `whileInView` for off-screen components
- **Film grain**: Fixed `::before` with SVG noise — 1.5% opacity, 180px tile. Hidden on mobile.
- **Fonts**: `display: swap` with next/font/google — zero CLS impact
- **Cursor**: `pointer-events: none` ensures no interaction blocking

---

## 14. Code Style Conventions

- **No comments in JSX/TSX** — logic documents via clean naming only
- **Inline styles** for component-specific layouts (no separate CSS module per component)
- **Global CSS** for shared patterns (cursor, nav, card-hover, marquee, products)
- **Framer Motion** variants defined as `const` objects outside component
- **Lucide icons** imported individually (tree-shakeable)
- **Font imports** via `next/font/google` in layout, not per-component
