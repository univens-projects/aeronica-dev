# Aeronica Design Guide

> Inspired by Fluid Glass & Lesse Studio — Light Mode | Fluid Typography | Glassmorphism

---

## 1. Typography

### Font Stack

| Role | Family | CSS Variable | Source |
|------|--------|-------------|--------|
| Sans-serif | Inter (Variable) | `--font-sans` | next/font/google |
| Monospace | JetBrains Mono (Variable) | `--font-mono` | next/font/google |

### Type Scale (Fluid)

The root font size scales with viewport width:

```css
--font-s: calc((100vw / var(--size)) * 10);
```

| Viewport | `--size` | Base `1rem` |
|----------|----------|-------------|
| ≤600px | 375 | ~2.67px |
| 601–1024px | 768 | ~1.30px |
| ≥1025px | 1440 | ~0.69px |

**Key sizes in rendered `rem`:**

| Token | Size | Usage |
|-------|------|-------|
| `body` | 1.6rem | Body text |
| `h1` / hero heading | clamp(3.2rem, 6.4rem, 8rem) | Hero / page titles |
| `section-title` | 1.4rem | Section intro (mono) |
| `section-label` | 1.2rem | Hero/CTA eyebrow label |
| `.cta-button` text | 1.3–1.4rem | Button labels |
| `navbar-link` | 1.3rem | Navigation |
| `nav-overlay-link` | 4rem | Mobile nav |
| `newsletter-input` | 1.3rem | Form inputs |

### Letter Spacing

- `-0.03em` to `-0.04em` — headings, large titles (tight)
- `-0.02em` — subheadings, card titles
- `0.05em` to `0.1em` — monospace / uppercase labels, meta

### Line Height

- `1` — hero headings, large display text
- `1.05 – 1.2` — section headings, testimonials
- `1.4 – 1.6` — body, card descriptions
- `1.5` — default body

---

## 2. Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#ffffff` | Main background |
| `--color-text` | `#1a1a1a` | Primary text |
| `--color-text-soft` | `#555555` | Secondary text |
| `--color-text-muted` | `#888888` | Muted/labels |
| `--color-cream` | `#f3f0ec` | Alternate section bg |
| `--color-taupe` | `#d4cec6` | (Reserved) |
| `--color-border` | `#e5e5e5` | Borders, dividers |
| `--color-accent` | `#111111` | Accent (near-black) |
| `--color-black` | `#0b1012` | Footer bg |
| Navbar initial | `#ffffff` | Text on dark hero |
| Navbar scrolled | `--color-text` | Text on glass bg |

### Gradient Palette (Card Overlays)

Card images use a **linear-gradient + image blend** pattern:

```css
background: linear-gradient(135deg, <color-1>, <color-2>), url(...);
background-blend-mode: overlay;
```

Common pairs used across components:

| Theme | Color 1 | Color 2 |
|-------|---------|---------|
| Maritime / Railway | `#1a2d3d` | `#2d5a7a` |
| Mining / Earth | `#3d2d1a` | `#6a4a2d` |
| Agriculture | `#1a4731` | `#2d7a4b` |
| Surveillance / Purple | `#2d1b69` | `#5b3a9e` |
| Oil & Gas | `#3d1f1a` | `#7a3d2d` |
| Power / Teal | `#1a3a3a` | `#2d6a6a` |
| Tech / Dark Blue | `#1a3a4a` | `#2d6a7a` |

---

## 3. Spacing & Layout

### Section Padding

```css
--section-py: clamp(8rem, 12vw, 12rem);
--section-px: clamp(1.5rem, 4vw, 6rem);
@media (min-width: 1440px) { --section-px: 8rem; }
@media (max-width: 768px) { --section-px: 1.5rem; }
```

### Grid Gap

```css
--grid-gap: clamp(1rem, 1.5vw, 2rem);
```

### Grid Patterns

| Component | Grid Template |
|-----------|--------------|
| Services Bento | `repeat(4, 1fr)` with spans |
| Industries | `repeat(auto-fill, minmax(22rem, 1fr))` |
| Portfolio / News | `repeat(auto-fill, minmax(28–30rem, 1fr))` |
| Stats | `1fr 1.2fr` → stacked on mobile |
| Process | `repeat(4, 1fr)` → single on mobile |
| Footer | `repeat(4, 1fr)` → `repeat(2, 1fr)` → `1fr` |

---

## 4. Border Radius

| Token | Value (globals.css) | Usage |
|-------|---------------------|-------|
| `--radius-sm` | 6px | Buttons, inputs |
| `--radius-md` | 12px | Cards, containers |
| `--radius-lg` | 20px | Bento items, images |
| `--radius-xl` | 24px | Large containers |
| `--radius-full` | 9999px | Avatars, dots |

> Note: `css/style.css` (legacy) uses 2px/4px; `app/globals.css` (active) uses larger radii.

---

## 5. Shadows

| Token | Value |
|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.04)` |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.04)` |
| `--shadow-lg` | `0 12px 40px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04)` |
| `--shadow-xl` | `0 20px 60px rgba(0,0,0,0.08), 0 6px 20px rgba(0,0,0,0.04)` |

Cards use `.card-hover` to transition to `--shadow-lg` on hover.

---

## 6. Easing & Transitions

### Easing Curves

| Variable | Cubic Bezier | Usage |
|----------|-------------|-------|
| `--ease-out-quart` | `0.165, 0.84, 0.44, 1` | Primary: cards, sections |
| `--ease-in-out-quart` | `0.77, 0, 0.175, 1` | Loading cube, menu |
| `--ease-out-cubic` | `0.215, 0.61, 0.355, 1` | Navbar, overlay, buttons |
| `--ease-in-out-cubic` | `0.645, 0.045, 0.355, 1` | (Available) |
| `--ease-out-quad` | `0.25, 0.46, 0.45, 0.94` | (Available) |

### Transition Durations

| Token | Duration | Usage |
|-------|----------|-------|
| `--transition-fast` | 200ms | Small interactions |
| `--transition-base` | 300ms | Default hover/focus |
| `--transition-slow` | 500ms | Panel, overlay |
| `--transition-spring` | 500ms ease-out-quart | Spring-like motion |

### Hover Effects

- **Card hover** (`.card-hover`): `translateY(-2px)` + `--shadow-lg`
- **Bento item**: `scale(1.01)` + shadow + border
- **Button**: `scale(1.02–1.05)` + enhanced shadow
- **Nav link**: opacity 0.7 → 1, optional bg
- **Industry card**: `translateY(-0.3rem)`
- **Client card**: grayscale → full color, `translateY(-0.3rem)`

---

## 7. Animations

| Name | Duration | Easing | Description |
|------|----------|--------|-------------|
| `text-cinematic-in` | 2s | cubic-bezier(0.22, 1, 0.36, 1) | Hero text: blur → sharp + slide up |
| `hero-bg-blur-in` | 5s | cubic-bezier(0.22, 1, 0.36, 1) | Video/image: blur → sharp + scale |
| `stagger-in` | 0.7s | `--ease-out-quart` | Staggered reveal: translateY + fade |
| `ken-burns` | 25s | `--ease-out-cubic` | Slow zoom scale(1 → 1.08) |
| `marquee-slide` | 40s | linear | Infinite scroll for client logos |
| `scroll-pulse` | 2s | `--ease-out-cubic` | Scroll indicator line animation |
| `logo-cinematic-zoom` | 2s | cubic-bezier(0.2, 0, 0.2, 1) | Loading logo: zoom + blur + brightness |
| `light-sweep` | 2s | ease-in-out | Shimmer sweep across logo |
| `glow-pulse` | 2s | ease-in-out | Radial glow on loading logo |
| `cube-spin` | 1.5s | `--ease-in-out-quart` | 3D cube rotation (legacy loader) |

### Scroll-Based Effects

- **Parallax**: Via Framer Motion `useScroll` / `useTransform` or manual scroll listener
- **Products slider**: Horizontal scroll snap (sticky + translateX)
- **Staggered reveal**: IntersectionObserver adds `.is-visible` class
- **Navbar**: `.is-scrolled` class for glass effect
- **Back to top**: `.is-visible` at scroll threshold

---

## 8. Components

### Navigation

| State | Background | Text Color | Height |
|-------|-----------|------------|--------|
| Default (top) | Transparent | White | 1.5rem padding |
| Scrolled | `rgba(255,255,255,0.82)` + blur(2rem) | `--color-text` | 0.8rem padding |

- **Desktop**: Horizontal menu with dropdown support (`navbar-dropdown`)
- **Mobile** (≤1024px): Full-screen overlay (`nav-overlay`) with accordion submenus
- **Dropdown**: White panel, 220px min-width, `box-shadow: 0 12px 40px rgba(0,0,0,0.08)`
- **CTA button**: Inverted on scroll (white bg → dark bg)

### Hero

- Full viewport (`100vh`), cinematic video background
- Video starts at 4× speed, transitions to 0.5× slow-motion at 12s
- Gradient overlay (`rgba(0,0,0,0.4–0.8)`) for readability
- 4 staggered text entries via `preloader-finished` class
- Scroll-based blur via Framer Motion (`0px → 10px`)
- Parallax shift on background (`translateY` up to 60px)

### Loading Screen

- Full-screen overlay with gradient + backdrop-blur
- **Current**: Logo cinematic zoom + glow pulse + light sweep
- **Legacy**: 3D spinning cube (Cube-shape)
- Hidden via `.hidden` class after delay

### Products Carousel

- Sticky horizontal scroll: 400vw container, 4 slides
- Each slide: 2-column grid (image + specs)
- Specs grid: 3-column layout
- Progress tracked via scroll percentage

### Testimonials

- Manual carousel with dots
- Slide-in content (no auto-rotate)
- Author avatars: grayscale, gradient + image blend
- Dot navigation

### CTA / Contact Section

- Cream background with decorative circle borders
- 2-column form layout (stacks on mobile)
- Inputs: white bg, `--color-border`, focus state → `--color-text`

### Footer

- Dark background (`--color-black` = `#0b1012`)
- 4-column grid (2 on mobile, simplified on tablet)
- Hover underline animation (scaleX from right to left)
- Newsletter form with dark input styling
- Wordmark watermark at 6% opacity

### PageHero (Inner Pages)

- Same layout as Hero: parallax, blur on scroll, breadcrumbs
- Gradient/radial backgrounds with z-index layering

---

## 9. Image & Icon Patterns

### Image Treatment

All hero/background images use:
```tsx
background: `linear-gradient(135deg, ${color1}, ${color2}), url(...)`
backgroundBlendMode: "overlay"
backgroundSize: "cover"
```

**Products**: PNG assets from `/assets/img/` with gradient overlay
**Portfolio / Cards**: Pexels photos from `/assets/images/pexels/`
**Client logos**: From `/assets/img/client logos/`, `mix-blend-mode: multiply`

### Icons

- **Lucide React** for most UI icons (ArrowRight, ChevronDown, Menu, X, etc.)
- **Custom dot-grid icon** used in CTAs (SVG rect elements forming an arrow pattern)
- **SVG quote** for testimonial decoration
- **Inline SVG** for select dropdown chevron

### Placeholder / Fallback

Legacy HTML (`index.html`) used Unsplash hotlinked images. Current Next.js app uses local Pexels images served from `/assets/images/pexels/` with gradient overlay fallbacks.

---

## 10. Responsive Breakpoints

| Name | Width | Adjustments |
|------|-------|-------------|
| Mobile | ≤768px | Single column grids, `--section-px: 1.5rem`, smaller type, hide hero indicator, hide film grain |
| Tablet | ≤1024px | Hide desktop nav, show hamburger, 2-column grids, sticky product images become stacked |
| Desktop | 769–1439px | Full layouts, show desktop nav |
| Wide | ≥1440px | `--section-px: 8rem`, max-width containers |

---

## 11. Cinematic Effects

| Effect | Element | Description |
|--------|---------|-------------|
| Film grain | `.film-grain` | Fixed overlay, SVG noise pattern, 1.5% opacity, hidden on mobile |
| Custom cursor | `.custom-cursor-dot` / `.custom-cursor-ring` | `mix-blend-mode: difference`, expands on links, hidden on tablet |
| Blur on scroll | Hero | `filter: blur()` driven by scroll progress |
| Page transitions | `.page-overlay` | White flash overlay for route changes |
| 3D card tilt | `.tilt-element` | Perspective + mouse-follow rotation (Framer Motion) |
| Parallax | `.parallax-layer` | `will-change: transform`, manual or Framer Motion |

---

## 12. Code Patterns

### CSS Class Naming

- BEM-lite: `.block__element--modifier`
- Component-scoped: `.hero-`, `.navbar-`, `.product-`, `.cta-`
- State classes: `.is-scrolled`, `.is-open`, `.is-visible`, `.is-active`, `.hidden`

### Component Architecture

- **Client components**: `"use client"` for interactivity (Framer Motion, scroll handlers, state)
- **Server components**: Static content sections
- **Wrapper pattern**: `ClientOnly` wraps interactive children to prevent hydration mismatch
- **Layout**: `CinematicEffects` wraps main content, `CustomCursor` and `LoadingScreen` are siblings

### Image Paths

```
/assets/images/pexels/  ← Pexels stock photos
/assets/img/            ← Product PNGs and client logos
/assets/video/          ← Hero background MP4
```

> **Never hotlink external images.** All assets must be local.

---

## 13. Key Dependencies

| Package | Version | Usage |
|---------|---------|-------|
| next | ^16.2.9 | Framework |
| react / react-dom | ^18 | UI |
| framer-motion | ^12.40.0 | Animations, scroll, parallax |
| lucide-react | ^0.378.0 | Icons |
| tailwindcss | ^3.4.1 | Utility CSS (minimal, custom CSS primary) |
| postcss / autoprefixer | — | PostCSS pipeline |
| typescript | ^5 | Type safety |
