# Aeronica Brand Guidelines

Inspired by DJI & Lesse Studio — Light Mode | Fluid Typography | Minimal Aesthetic

---

## 1. Typography

### Font Stack

| Role | Family | CSS Variable | Source |
| --- | --- | --- | --- |
| Sans-serif | Inter (Variable) | `--font-sans` | next/font/google |
| Monospace | JetBrains Mono (Variable) | `--font-mono` | next/font/google |
| Heading | Sora | — | — |
| Body | IBM Plex Sans | — | — |

### Type Scale (Fluid)

The root font size scales with viewport width:

`--font-s: calc((100vw / var(--size)) * 10);`

| Viewport | `--size` | Base 1rem |
| --- | --- | --- |
| $\le 600\text{px}$ | 375 | ~2.67px |
| 601–1024px | 768 | ~1.30px |
| $\ge 1025\text{px}$ | 1440 | ~0.69px |

### Key Sizes in Rendered rem

| Token | Size | Usage |
| --- | --- | --- |
| body | 1.6rem | Body text |
| h1 / hero heading | clamp(3.2rem, 6.4rem, 8rem) | Hero / page titles |
| section-title | 1.4rem | Section intro (mono) |
| section-label | 1.2rem | Hero/CTA eyebrow label |
| cta-button text | 1.3–1.4rem | Button labels |
| navbar-link | 1.3rem | Navigation |
| nav-overlay-link | 4rem | Mobile nav |
| newsletter-input | 1.3rem | Form inputs |

### Typography Weights & Styles

* **Thin**
* **Regular**
* **Medium**
* **Bold**

### Letter Spacing

* -0.03em to -0.04em — headings, large titles (tight)
* -0.02em — subheadings, card titles
* 0.05em to 0.1em — monospace / uppercase labels, meta

### Line Height

* 1 — hero headings, large display text
* 1.05 – 1.2 — section headings, testimonials
* 1.4 – 1.6 — body, card descriptions
* 1.5 — default body

---

## 2. Color System

The Aeronica color system is designed around aerospace technology, precision engineering, innovation, and trust. The primary identity is built using a blue color palette, while agriculture-focused communication introduces a complementary green palette.

---

### Primary Brand Colors

#### Light Blue

Primary brand color used for logos, call-to-actions, highlights, links, icons, and key interface elements.

```css
--color-primary: #009BFF;
```

| Format | Value       |
| ------ | ----------- |
| HEX    | #009BFF     |
| RGB    | 0, 155, 255 |

---

#### Dark Blue

Secondary brand color used for headings, navigation, supporting elements, and premium brand applications.

```css
--color-primary-dark: #21389A;
```

| Format | Value       |
| ------ | ----------- |
| HEX    | #21389A     |
| RGB    | 33, 56, 154 |

---

#### White

Primary background color and negative space.

```css
--color-white: #FFFFFF;
```

| Format | Value         |
| ------ | ------------- |
| HEX    | #FFFFFF       |
| RGB    | 255, 255, 255 |

---

#### Black

Used for typography, dark surfaces, overlays, and monochrome logo applications.

```css
--color-black: #000000;
```

| Format | Value   |
| ------ | ------- |
| HEX    | #000000 |
| RGB    | 0, 0, 0 |

---

### Agriculture Color Palette

The agriculture palette is reserved for farming, agri-tech, crop monitoring, spraying solutions, and agriculture-specific campaigns.

#### Dark Green

```css
--color-agri-dark: #32620E;
```

| Format | Value      |
| ------ | ---------- |
| HEX    | #32620E    |
| RGB    | 50, 98, 14 |

---

#### Light Green

```css
--color-agri-light: #0CC820;
```

| Format | Value       |
| ------ | ----------- |
| HEX    | #0CC820     |
| RGB    | 12, 200, 32 |

---

### Color Usage Rules

#### Corporate & Technology Communication

Use:

* Light Blue (#009BFF)
* Dark Blue (#21389A)
* White (#FFFFFF)
* Black (#000000 — typography only)

Recommended ratio:

```text
60% White
25% Dark Blue
10% Light Blue
5% Black (typography only)
```

#### Critical Constraints

* **Black must never be used as a background color.** All dark backgrounds use `--color-primary-dark` (#21389A).
* **Black is reserved for typography only** (`color: #000000` or `color: #111`).
* **Agriculture greens** (`#32620E`, `#0CC820`) must only appear in agriculture-specific sections.
* **Green gradients** must never appear outside agriculture sections.
* **Hero overlay gradients** are the sole exception — they may use `rgba(0,0,0,α)` for video readability.

---

#### Agriculture Communication

Use:

* Dark Green (#32620E)
* Light Green (#0CC820)
* White (#FFFFFF)
* Black (#000000)

Recommended ratio:

```text
50% White
25% Dark Green
15% Light Green
10% Black
```

---

### Gradient System

#### Primary Brand Gradient

Used for hero sections, banners, illustrations, and premium brand assets.

```css
background: linear-gradient(
  135deg,
  #009BFF 0%,
  #21389A 100%
);
```

---

#### Extended Technology Gradient

Used for cinematic website backgrounds and digital interfaces.

```css
background: linear-gradient(
  135deg,
  #009BFF 0%,
  #2A5BFF 50%,
  #21389A 100%
);
```

---

#### Agriculture Gradient

Used for agriculture product pages, campaigns, and drone spraying solutions.

```css
background: linear-gradient(
  135deg,
  #0CC820 0%,
  #32620E 100%
);
```

---

### CSS Variables

```css
:root {

  /* Primary Brand */

  --color-primary: #009BFF;
  --color-primary-dark: #21389A;

  /* Neutral */

  --color-white: #FFFFFF;
  --color-black: #000000;

  /* Agriculture */

  --color-agri-dark: #32620E;
  --color-agri-light: #0CC820;

}
```

---

### Logo Color Specifications

#### Primary Logo

| Element       | Color   |
| ------------- | ------- |
| Aircraft Mark | #009BFF |
| Location Pin  | #21389A |
| Wordmark      | #009BFF |
| Tagline       | #21389A |

---

### Accessibility

#### Preferred Text Colors

| Background | Text Color         |
| ---------- | ------------------ |
| White      | #21389A or #000000 |
| Light Blue | #FFFFFF            |
| Dark Blue  | #FFFFFF            |
| Dark Green | #FFFFFF            |
| Black      | #FFFFFF            |

---

### Brand Meaning

| Color   | Represents                                        |
| ------- | ------------------------------------------------- |
| #009BFF | Innovation, Technology, UAV Systems, Intelligence |
| #21389A | Precision, Reliability, Aerospace Engineering     |
| #32620E | Agriculture, Sustainability, Growth               |
| #0CC820 | Productivity, Smart Farming, Efficiency           |
| #FFFFFF | Clarity, Simplicity, Transparency                 |
| #000000 | Authority, Strength, Professionalism              |

The blue palette should remain the dominant identity across all Aeronica corporate, industrial, GIS, mapping, drone manufacturing, automation, and enterprise communication. Green should only be introduced for agriculture-focused products and campaigns.

---

## 3. Spacing & Layout

### Section Padding

`--section-py: clamp(8rem, 12vw, 12rem);`

`--section-px: clamp(1.5rem, 4vw, 6rem);`

* `@media (min-width: 1440px) { --section-px: 8rem; }`
* `@media (max-width: 768px) { --section-px: 1.5rem; }`

### Grid Gap

`--grid-gap: clamp(1rem, 1.5vw, 2rem);`

### Grid Patterns

| Component | Grid Template |
| --- | --- |
| Services Bento | repeat(4, 1fr) with spans |
| Industries | repeat(auto-fill, minmax(22rem, 1fr)) |
| Portfolio / News | repeat(auto-fill, minmax(28–30rem, 1fr)) |
| Stats | 1fr 1.2fr $\rightarrow$ stacked on mobile |
| Process | repeat(4, 1fr) $\rightarrow$ single on mobile |
| Footer | repeat(4, 1fr) $\rightarrow$ repeat(2, 1fr) $\rightarrow$ 1fr |

---

## 4. Border Radius

| Token | Value (globals.css) | Usage |
| --- | --- | --- |
| Token | Value | Usage |
| --- | --- | --- |
| `--radius-sm` | 2px | Small UI elements |
| `--radius-md` | 4px | Cards, containers, buttons, inputs |
| `--radius-lg` | 4px | Bento items, images |
| `--radius-xl` | 4px | Large containers |
| `--radius-full` | 9999px | Avatars, dots |

> All radii are intentionally small (2–4px) for a modern, professional look (DJI-inspired).

---

## 5. Shadows

| Token | Value |
| --- | --- |
| `--shadow-sm` | 0 1px 2px rgba(0,0,0,0.04) |
| `--shadow-md` | 0 4px 12px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.04) |
| `--shadow-lg` | 0 12px 40px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04) |
| `--shadow-xl` | 0 20px 60px rgba(0,0,0,0.08), 0 6px 20px rgba(0,0,0,0.04) |

> Cards use `.card-hover` to transition to `--shadow-lg` on hover.

---

## 6. Easing & Transitions

### Easing Curves

| Variable | Cubic Bezier | Usage |
| --- | --- | --- |
| `--ease-out-quart` | 0.165, 0.84, 0.44, 1 | Primary: cards, sections |
| `--ease-in-out-quart` | 0.77, 0, 0.175, 1 | Loading cube, menu |
| `--ease-out-cubic` | 0.215, 0.61, 0.355, 1 | (Available) |
| `--ease-in-out-cubic` | 0.645, 0.045, 0.355, 1 | (Available) |
| `--ease-out-quad` | 0.25, 0.46, 0.45, 0.94 | (Available) |

### Transition Durations

| Token | Duration | Usage |
| --- | --- | --- |
| `--transition-fast` | 200ms | Small interactions |
| `--transition-base` | 300ms | Default hover/focus |
| `--transition-slow` | 500ms | Panel, overlay |
| `--transition-spring` | 500ms | ease-out-quart Spring-like motion |

### Hover Effects

* **Card hover (`.card-hover`)**: `translateY(-2px)` + `--shadow-lg`
* **Bento item**: `scale(1.01)` + shadow + border
* **Button**: `scale(1.02–1.05)` + enhanced shadow
* **Nav link**: opacity 0.7 $\rightarrow$ 1, optional bg
* **Industry card**: `translateY(-0.3rem)`
* **Client card**: grayscale $\rightarrow$ full color, `translateY(-0.3rem)`

---

## 7. Animations

| Name | Duration | Easing | Description |
| --- | --- | --- | --- |
| `text-cinematic-in` | 2s | `cubic-bezier(0.22, 1, 0.36, 1)` | Hero text: blur $\rightarrow$ sharp + slide up |
| `hero-bg-blur-in` | 5s | `cubic-bezier(0.22, 1, 0.36, 1)` | Video/image: blur $\rightarrow$ sharp + scale |
| `stagger-in` | 0.7s | `--ease-out-quart` | Staggered reveal: translateY + fade |
| `ken-burns` | 25s | `--ease-out-cubic` | Slow zoom scale(1 $\rightarrow$ 1.08) |
| `marquee-slide` | 40s | linear | Infinite scroll for client logos |
| `scroll-pulse` | 2s | `--ease-out-cubic` | Scroll indicator line animation |
| `logo-cinematic-zoom` | 2s | `cubic-bezier(0.2, 0, 0.2, 1)` | Loading logo: zoom + blur + brightness |
| `light-sweep` | 2s | ease-in-out | Shimmer sweep across logo |
| `glow-pulse` | 2s | ease-in-out | Radial glow on loading logo |
| `cube-spin` | 1.5s | `--ease-in-out-quart` | 3D cube rotation (legacy loader) |

### Scroll-Based Effects

* **Parallax**: Via Framer Motion `useScroll` / `useTransform` or manual scroll listener.
* **Products slider**: Horizontal scroll snap (sticky + `translateX`).
* **Staggered reveal**: `IntersectionObserver` adds `.is-visible` class.
* **Navbar**: `.is-scrolled` class for glass effect.
* **Back to top**: `.is-visible` at scroll threshold.

---

## 8. Components

### Navigation

| State | Background | Text Color | Padding |
| --- | --- | --- | --- |
| Default (top) | Transparent | White | 1.2rem 0 |
| Scrolled | #ffffff + border-bottom | `--color-text` | 0.8rem 0 |

* **Desktop**: Horizontal menu with dropdown support (`navbar-dropdown`).
* **Mobile ($\le 1024\text{px}$)**: Full-screen overlay (`nav-overlay` with `#21389A` background) with accordion submenus.
* **Dropdown**: White panel, 220px min-width, `box-shadow: 0 12px 40px rgba(0,0,0,0.08)`.
* **CTA button**: Inverted on scroll (white bg → `#21389A` bg).
* **Logo height**: `3.8rem` (controlled via `.navbar-logo-img` CSS).
* **Active link color**: `#21389A` when scrolled.

### Hero

* Full viewport (100vh), cinematic video background with `.navbar-logo-img` CSS.
* Video starts at 4× speed, transitions to 0.5× slow-motion at 12s.
* Black gradient overlay (`rgba(0,0,0,0.32)` → `rgba(0,0,0,0.63)`) for video readability. This is the **only** place black is used as a background overlay.
* Centered text layout with mono eyebrow label, heading, and description.
* CTA button: white background, `#21389A` text, dot-grid arrow SVG icon.
* Parallax shift on background (`translateY` up to 60px). Background div extends `bottom: -60px` to prevent exposing the section background during scroll.
* Background section color: `#21389A`.
* **No scroll blur effect** (removed).

### Loading Screen

* Full-screen overlay with gradient + backdrop-blur.
* **Current**: Logo cinematic zoom + glow pulse + light sweep.
* **Legacy**: 3D spinning cube (Cube-shape).
* Hidden via `.hidden` class after delay.

### Clients Marquee

* Full-width section with top/bottom borders.
* Heading: single mono label "Trusted by Leading Organisations" (small, uppercase).
* Two rows of client logos in infinite horizontal scroll (`marquee-slide` 60s).
* Even row reverses direction.
* Logo height: `8rem`, grayscale + 0.5 opacity, full color on hover.
* Edge fade gradients via `::before`/`::after` pseudo-elements.
* No card backgrounds — logos float on white.

### Stats (Our Impact)

* Dark blue section background (`#21389A`).
* Minimal header: mono "Our Impact" label + "By the Numbers" heading (weight 500).
* 4-column grid with subtle hairline separators (`1px` gap with `rgba(255,255,255,0.06)`).
* Animated number counters (eased, 2.2s duration) via `IntersectionObserver`.
* Mono font for numbers, uppercase mono for labels.
* No decorative elements (no dot grid, no gradient blobs, no dividers).

### Products Carousel

* Sticky horizontal scroll: 400vw container, 4 slides.
* Each slide: 2-column grid (image + specs).
* Specs grid: 3-column layout.
* Progress tracked via scroll percentage.

### Testimonials

* Manual carousel with dots.
* Slide-in content (no auto-rotate).
* Author avatars: grayscale, gradient + image blend.
* Dot navigation.

### CTA / Contact Section

* Cream background with decorative circle borders.
* 2-column form layout (stacks on mobile).
* Inputs: white bg, `--color-border`, focus state $\rightarrow$ `--color-text`.

### Footer

* Dark blue background (`--color-primary-dark` = #21389A).
* 4-column grid (2 on mobile, simplified on tablet).
* All styles inline (no separate CSS classes). SVG social icons.
* Wordmark watermark at 6% opacity.

### PageHero (Inner Pages)

* Solid `#21389A` background (no gradient).
* No scroll blur, no parallax.
* Gradient/radial backgrounds with z-index layering.

---

## 9. Image & Icon Patterns

### Image Treatment

All hero/background images use:

```tsx
background: `linear-gradient(135deg, ${color1}, ${color2}), url(...)`
backgroundBlendMode: "overlay"
backgroundSize: "cover"

```

* **Products**: PNG assets from `/assets/img/` with gradient overlay.
* **Portfolio / Cards**: Pexels photos from `/assets/images/pexels/`.
* **Client logos**: From `/assets/img/client-logos/`, `mix-blend-mode: multiply`.
* **Asset Constraint**: Never hotlink external images. All assets must be local.

### Dot‑Grid Arrow Technique (Custom Cursor)

The horizontal‑scroll cursor uses a chevron arrow formed from evenly spaced dots. This technique generalizes to any shape made of straight segments.

**Method (SVG `<circle>` approach — pixel‑perfect alignment):**

1. **Decompose** the shape into straight line segments (each `(x1,y1) → (x2,y2)`).
2. For each segment, choose a dot count `n` (≥2).
3. Compute step increments:
   ```
   dx = (x2 - x1) / (n - 1)
   dy = (y2 - y1) / (n - 1)
   ```
4. Generate `n` `<circle cx="…" cy="…" r="…" />` elements along the segment.
5. The vertex (shared endpoint of two segments) naturally gets two overlapping dots — this is intended and sharpens the corner.

**Example — 2‑segment chevron (right‑pointing arrow):**

| Segment | Start | End | n | dx | dy |
| --- | --- | | --- | --- | --- | --- |
| 1 | (5, 3) | (19, 12) | 5 | 3.5 | 2.25 |
| 2 | (19, 12) | (5, 21) | 5 | −3.5 | 2.25 |

| Dot | cx | cy |
| --- | --- | --- |
| 1 | 5 | 3 |
| 2 | 8.5 | 5.25 |
| 3 | 12 | 7.5 |
| 4 | 15.5 | 9.75 |
| 5 | **19** | **12** (vertex) |
| 6 | 15.5 | 14.25 |
| 7 | 12 | 16.5 |
| 8 | 8.5 | 18.75 |
| 9 | 5 | 21 |

```tsx
<svg viewBox="0 0 24 24" fill="currentColor">
  {dots.map((d, i) => (
    <circle key={i} cx={d.x} cy={d.y} r={1.0} />
  ))}
</svg>
```

**Sizing & styling:**

- `r="1.0"` produces clean 2px dots (scales with viewBox).
- Use `fill="currentColor"` and control via CSS `color` (auto‑switches on dark backgrounds).
- Set rendered size via CSS: `width: 34px; height: 34px`.
- For a left‑pointing arrow, apply `transform: rotate(180deg)` via CSS class.
- The circle approach supersedes SVG `strokeDasharray` — dashes drift at path corners and can't guarantee vertex alignment.

**To adapt for any shape:**

1. Draw the shape on a 24×24 (or any) grid.
2. Record vertex coordinates.
3. Pick a dot count per segment (5 works well for segments 10–18px long).
4. Apply the step formula above.
5. Merge all `<circle>` elements into one `<svg>`.

### Icons

* **Lucide React** for most UI icons (`ArrowRight`, `ChevronDown`, `Menu`, `X`, etc.).
* Custom dot-grid icon used in CTAs (SVG rect elements forming an arrow pattern).
* SVG quote for testimonial decoration.
* Inline SVG for select dropdown chevron.

### Placeholder / Fallback

Legacy HTML (`index.html`) used Unsplash hotlinked images. Current Next.js app uses local Pexels images served from `/assets/images/pexels/` with gradient overlay fallbacks.

---

## 10. Responsive Breakpoints

| Name | Width | Adjustments |
| --- | --- | --- |
| Mobile | $\le 768\text{px}$ | Single column grids, `--section-px: 1.5rem`, smaller type, hide hero indicator, hide film grain |
| Tablet | $\le 1024\text{px}$ | Hide desktop nav, show hamburger, 2-column grids, sticky product images become stacked |
| Desktop | 769–1439px | Full layouts, show desktop nav |
| Wide | $\ge 1440\text{px}$ | `--section-px: 8rem`, max-width containers |

---

## 11. Cinematic Effects

| Effect | Element | Description |
| --- | --- | --- |
| Film grain | `.film-grain` | Fixed overlay, SVG noise pattern, 1.5% opacity, hidden on mobile |
| Custom cursor | `.custom-cursor-dot` / `.custom-cursor-ring` | Luminance-based dark/light switching, expands on links, I-beam on text. Always active on all pages (no responsive hide). |
| Blur on scroll | Hero | Removed — no scroll blur on hero |
| Page transitions | `.page-overlay` | White flash overlay for route changes |
| 3D card tilt | `.tilt-element` | Perspective + mouse-follow rotation (Framer Motion) |
| Parallax | `.parallax-layer` | `will-change: transform`, manual or Framer Motion |

---

## 12. Code Patterns

### CSS Class Naming

* **BEM-lite**: `.block__element--modifier`
* **Component-scoped**: `.hero-`, `.navbar-`, `.product-`, `.cta-`
* **State classes**: `.is-scrolled`, `.is-open`, `.is-visible`, `.is-active`, `.hidden`

### Component Architecture

* **Client components**: `"use client"` for interactivity (Framer Motion, scroll handlers, state).
* **Server components**: Static content sections.
* **Wrapper pattern**: `ClientOnly` wraps interactive children to prevent hydration mismatch.
* **Layout**: `CinematicEffects` wraps Navbar + SmoothScroll + Footer + BackToTop; `CustomCursor` and `LoadingScreen` are siblings.
* **Smooth scroll**: Lenis v1 via `SmoothScroll` provider wrapping `<main>`.
* **Animations**: `MotionReveal` (whileInView), `MotionParallax` (useScroll/useTransform), `SectionHeader` (stagger variants) — all framer-motion, no GSAP.

### Image Paths

* `/assets/images/pexels/` $\leftarrow$ Pexels stock photos
* `/assets/img/` $\leftarrow$ Product PNGs and client logos
* `/assets/video/` $\leftarrow$ Hero background MP4

---

## 13. Key Dependencies

| Package | Version | Usage |
| --- | --- | --- |
| `next` | ^16.2.9 | Framework |
| `react` / `react-dom` | ^18 | UI |
| `framer-motion` | ^12.40.0 | Animations, scroll, parallax |
| `lucide-react` | ^0.378.0 | Icons |
| `lenis` | ^1.3.24 | Smooth scrolling |
| `tailwindcss` | ^3.4.1 | Utility CSS (minimal, custom CSS primary) |
| `postcss` / `autoprefixer` | — | PostCSS pipeline |
| `typescript` | ^5 | Type safety |

---

## 14. Audience Profile & Pain Points

### Ideal Audience Segments

* **B2B (Enterprises)**
* **B2C (Agriculture)**
* **B2G (Government)**

### Regional Target Markets

* Maharashtra, Gujarat, Odisha

### Structural Pain Points

#### B2C (Agriculture)

* **Pesticide Waste**: 30–40% chemical loss + ₹50–80K annual cost.
* **Time Loss**: Manual spraying requires 8–12 hrs/acre (causing seasonal crunches).
* **Labor Shortage**: Unreliable workers alongside rising overhead constraints (₹500–800/day cost).
* **Yield Gap**: 10–20% lower yield compared to precision farming implementations.
* **Fuel Expense**: 50–100L per agricultural season utilizing traditional tractor spraying methods.

#### B2B (Enterprises)

* **Manual Inspections**: Weeks-long survey timelines subject to severe weather-dependent delays.
* **High Labor Costs**: Sustaining massive overhead metrics (30–50 inspection staff per estate ecosystem).
* **Data Silos**: Valuable structural field info trapped across legacy static spreadsheets.
* **Decision Delays**: Slow tracking architectures lead directly to 5–15% total crop/yield loss vectors.
* **Integration Complexity**: Demands seamless custom configurations with modern ERP frameworks.

#### B2G (Government)

* **Infrastructure Visibility Gap**: Failure metrics monitoring critical roads, pipelines, and power networks at modern scale.
* **Surveillance Blind Spots**: Fragmented CCTV loops sparking highly prolonged structural response cycles.
* **Reporting Delays**: Public administrative management queues lingering across multi-week backlogs.
* **Data Silos**: Water, Roads, and Traffic departments working inside closed systems without cross-visibility.
* **Budget Justification**: Explicitly requires deep operational ROI validation frameworks to unlock state funding resources.

---

## 15. Profile Directory & Corporate Identity

### Corporate Overview

Aeronica Advance Technologies Pvt. Ltd. is an automated technology startup established in 2017 specializing in custom UAV engineering architectures, low-altitude GIS-based asset mapping datasets, high-definition aerial imaging systems, and automated data-processing applications built around performance safety.

* **Vision**: "Inspire with drones; invent intelligent tech; empower smarter skies."
* **Mission**: "Shaping a future where intelligent drones revolutionize the world."

### Operational Base & Contact Infrastructure

* **Corporate Mailing Pipeline**: info@aeronica.in
* **Telecommunication Line**: +91 72764 69160
* **Official Digital Domain**: www.aeronica.in
* **Headquarters**: 101, Sunrise Apartments, Opp. Kamla Nehru Park main gate, Dr. Ketkar path near Prabhat road, Pune, MH India 411004.

### Social Index Handles

* **Instagram**: `@aeronica_at`
* **Facebook**: `@Aeronica Advance Technologies`
* **LinkedIn**: `@Aeronica Advance Technologies PVT.LTD`
