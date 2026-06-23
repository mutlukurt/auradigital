# AURA DIGITAL

> **Empowering Visionaries.** — A premium, immersive single-page studio website for a fictional digital agency. Built as a production-grade showcase of modern web engineering, motion design, and content-driven component architecture.

<p align="center">
  <a href="https://auradigital-phi.vercel.app/"><strong>🌐 Live Demo</strong></a>&nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="https://github.com/mutlukurt/auradigital"><strong>📦 Repository</strong></a>
</p>

<p align="center">
  <img src="public/images/hero-figure.jpg" alt="AURA DIGITAL — Unleashing Digital Aura" width="600" />
</p>

AURA DIGITAL is a high-fidelity marketing site for a digital studio that "crafts immersive brands, experiences and futures." It presents a hero, services grid, manifesto, capabilities, selected projects, and conversion sections — all engineered with a dark, cinematic aesthetic and solid orange accents.

---

## Table of Contents

1. [Overview](#overview)
2. [Live Sections](#live-sections)
3. [Tech Stack](#tech-stack)
4. [Software Architecture](#software-architecture)
5. [Project Structure](#project-structure)
6. [Technical Features](#technical-features)
7. [Performance & SEO](#performance--seo)
8. [Accessibility](#accessibility)
9. [Getting Started](#getting-started)
10. [Available Scripts](#available-scripts)
11. [Configuration](#configuration)
12. [Content Model](#content-model)
13. [Browser Support](#browser-support)
14. [License](#license)

---

## Overview

AURA DIGITAL is a **single-page application** built with the **Next.js App Router**. It is fully static-prerendered (SSG), type-safe end-to-end with TypeScript, and styled with a custom Tailwind CSS design system. Motion is orchestrated with Framer Motion through reusable, scroll-triggered reveal primitives.

The project demonstrates a clean separation between **content** (`lib/data.ts`), **presentation primitives** (`components/ui`), and **composed sections** (`components/sections`) — making the entire site editable from a single data file without touching component logic.

### What it is

- A fictional digital studio's marketing front page
- A reference implementation of a production Next.js 15 + React 19 site
- A design-system-driven component architecture

### What it is not

- A multi-page application (intentionally a single route `/`)
- A headless-CMS-backed site (content is statically typed in-repo)
- A backend/API project (no server actions or data fetching)

---

## Live Sections

The page is composed of nine vertically-stacked sections, each an isolated React component:

| # | Section       | Component            | Purpose                                                    |
|---|---------------|----------------------|------------------------------------------------------------|
| 1 | Header        | `Header`             | Fixed nav, scroll-aware blur, mobile menu, CTA             |
| 2 | Hero          | `Hero`               | Full-bleed figure, scroll parallax, animated headline      |
| 3 | Services      | `Services`           | Two-column service grid with hover-zoom imagery            |
| 4 | Manifesto     | `Manifesto`          | Large statement: "OUR VIBRATION."                          |
| 5 | Capabilities  | `ServicesDetail`     | Light section, 4-column capability cards                   |
| 6 | Projects      | `Projects`           | Three alternating-layout case studies                      |
| 7 | CTA           | `CTA`                | Conversion headline + email action                         |
| 8 | Meta Strip    | `MetaStrip`          | "What's New" / "Pricing" anchors                           |
| 9 | Footer        | `Footer`             | Brand, four link columns, socials, credits                 |

---

## Tech Stack

| Layer            | Technology                        | Version    | Role                                              |
|------------------|-----------------------------------|------------|---------------------------------------------------|
| Framework        | [Next.js](https://nextjs.org)     | 15.5.19    | App Router, RSC, SSG, image optimization          |
| UI Library       | [React](https://react.dev)        | 19.0.0     | Component rendering, hooks                        |
| Language         | [TypeScript](https://www.typescriptlang.org) | 5.7.3 | End-to-end static typing                          |
| Styling          | [Tailwind CSS](https://tailwindcss.com) | 3.4.17 | Utility-first design system, custom tokens        |
| Animation        | [Framer Motion](https://www.framer.com/motion/) | 11.18.0 | Scroll reveals, parallax, micro-interactions      |
| Typography       | [@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography) | 0.5.16 | Prose utilities                                   |
| Linting          | [ESLint](https://eslint.org) + `eslint-config-next` | 9.18.0 / 15.5.19 | Code quality, Next.js rules             |
| Font             | [Roboto](https://fonts.google.com/specimen/Roboto) | via `next/font/google` | Self-hosted, zero CLS, 300–900 weights |
| Package Manager  | npm                               | 11.x       | Dependency resolution                             |
| Runtime          | Node.js                           | 18.18+ / 24 | Build & dev server                                |

---

## Software Architecture

### Architectural Patterns

1. **App Router (Next.js 15)**
   - File-system based routing under `src/app/`
   - `layout.tsx` defines the root shell (fonts, metadata, `<html>`/`<body>`)
   - `page.tsx` is the single route composition root
   - Server Components by default; Client Components opted-in via the `"use client"` directive

2. **Server / Client Component Split**
   - Static, content-only sections (`Manifesto`, `CTA`, `MetaStrip`, `Footer`, `ServicesDetail`) remain **Server Components** — they ship zero client JS
   - Interactive sections (`Header`, `Hero`, `Services`, `Projects`) are **Client Components** due to `useScroll`, `useTransform`, `useState`, and `whileInView` usage
   - This minimizes the client bundle to only what requires interactivity

3. **Component Layering**
   - **`components/ui/`** — presentational primitives with no domain knowledge (`Button`, `Container`, `Reveal`, `SectionHeading`, `BrandMark`, `SocialLinks`)
   - **`components/sections/`** — page-level compositions that consume `ui/` primitives and `lib/data.ts`
   - Primitives are reusable; sections are single-purpose

4. **Content / Presentation Separation**
   - All copy, nav items, services, projects, capabilities, socials, and footer columns are defined as typed data in `src/lib/data.ts`
   - Components map over this data — changing a project title or adding a service requires editing only `data.ts`
   - TypeScript types (`Service`, `Project`, `Capability`, `NavItem`, `Social`) are co-located with the data and exported for component consumption

5. **Design Token System**
   - Tailwind theme extended with semantic color tokens (`ink.950`–`ink.600`, `accent.orange`, `accent.violet`, etc.) in `tailwind.config.ts`
   - CSS custom properties (`--font-display`, `--font-body`) wired through `next/font` for zero-CLS font loading
   - Global base styles (`globals.css`) layer Tailwind directives with component and utility layers

6. **Animation Strategy**
   - A single `Reveal` primitive wraps scroll-triggered entrance animations via Framer Motion's `whileInView`
   - Staggered delays are passed per-item for grid entrance choreography
   - The Hero uses `useScroll` + `useTransform` for scroll-linked parallax on the figure and content opacity
   - All animations respect `prefers-reduced-motion` through Framer Motion's defaults and Tailwind's motion-safe utilities

---

## Project Structure

```
AuraDigital/
├── public/
│   └── images/                       # 6 optimized source images (JPG)
│       ├── hero-figure.jpg
│       ├── service-immersive.jpg
│       ├── service-revitalization.jpg
│       ├── project-quantum.jpg
│       ├── project-ether.jpg
│       └── project-void.jpg
├── src/
│   ├── app/
│   │   ├── globals.css               # Tailwind layers + design tokens
│   │   ├── layout.tsx                # Root layout: fonts, SEO metadata, <html>
│   │   └── page.tsx                  # Single route: section composition
│   ├── components/
│   │   ├── ui/                       # Reusable presentational primitives
│   │   │   ├── BrandMark.tsx         # Logo + wordmark (SVG)
│   │   │   ├── Button.tsx            # 5 variants, 3 sizes, anchor/button polymorphic
│   │   │   ├── Container.tsx         # Max-width + responsive gutters
│   │   │   ├── Reveal.tsx            # Scroll-triggered motion wrapper
│   │   │   ├── SectionHeading.tsx    # Tag + title with alignment & theme variants
│   │   │   └── SocialLinks.tsx       # SVG icon set (Instagram, X, LinkedIn, Behance)
│   │   └── sections/                 # Page-level compositions
│   │       ├── Header.tsx            # Fixed header + mobile nav (Client)
│   │       ├── Hero.tsx              # Full-bleed hero + parallax (Client)
│   │       ├── Services.tsx          # 2-col service grid (Client)
│   │       ├── Manifesto.tsx         # Statement section (Server)
│   │       ├── ServicesDetail.tsx    # Light 4-col capabilities (Server)
│   │       ├── Projects.tsx          # Alternating project rows (Client)
│   │       ├── CTA.tsx               # Conversion section (Server)
│   │       ├── MetaStrip.tsx         # News / pricing anchors (Server)
│   │       └── Footer.tsx            # Footer with link columns (Server)
│   └── lib/
│       ├── data.ts                   # Centralized typed content model
│       └── utils.ts                  # cn() classname merge helper
├── .eslintrc.json
├── .gitignore
├── next.config.ts                    # Next.js config (image formats)
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.ts                # Theme tokens, keyframes, plugins
└── tsconfig.json                     # Strict mode, @/* path alias
```

---

## Technical Features

### Image Optimization
- All imagery served through `next/image`'s `<Image>` component
- Automatic **AVIF** and **WebP** format negotiation (`next.config.ts → images.formats`)
- Responsive `sizes` attributes prevent over-fetching on mobile
- Hero image uses `priority` + `fill` for above-the-fold LCP optimization
- Lazy-loading by default for below-the-fold media

### Motion Design
- **Scroll reveals**: `Reveal` component uses Framer Motion `whileInView` with `once: true` and a custom cubic-bezier easing `cubic-bezier(0.22, 1, 0.36, 1)`
- **Hero parallax**: `useScroll` tracks the hero section; `useTransform` maps scroll progress to figure translation/scale and content opacity
- **Staggered grids**: per-item `delay` props cascade entrance animations in services, capabilities, and projects
- **Micro-interactions**: hover lifts on cards (`-translate-y-1.5`), underline grow on nav links, arrow nudge on service links

### Responsive Design
- Mobile-first Tailwind breakpoints (`sm`, `md`, `lg`)
- Mobile slide-down menu with body scroll lock and animated hamburger → X
- Services grid: 1 column on mobile → 2 columns on `lg`
- Capabilities: 1 → 2 → 4 columns across breakpoints
- Projects: stacked on mobile, alternating asymmetric grid on desktop
- Fluid typography via `clamp()` on all large headlines (e.g. `clamp(2.8rem, 9vw, 8.5rem)`)

### Navigation
- Smooth-scroll anchor navigation with fixed-header offset
- Header background opacity & blur intensify on scroll past 24px
- Active state-ready anchor structure (all sections have stable `id`s: `#about`, `#services`, `#work`, `#other`, `#news`, `#pricing`, `#contact`)

### Theming
- Dark-first palette: deep ink blacks (`#050608` → `#242832`), pure white, solid orange accent (`#ff5a1f`)
- One light section (`ServicesDetail`) for visual rhythm contrast
- Solid color accents throughout — no gradients (by design decision)
- Custom scrollbar styling matching the dark theme

---

## Performance & SEO

### Performance
- **Static Generation (SSG)**: the entire site prerenders to static HTML at build time (`○ (Static)` in build output)
- **First Load JS**: ~152 kB (shared 102 kB + page 50 kB) — measured via `next build`
- **Zero-CLS fonts**: `next/font/google` self-hosts Roboto with `display: swap` and `size-adjust` fallbacks
- **Code splitting**: client JS is split per-route; only interactive sections ship Framer Motion
- **Image format optimization**: AVIF/WebP with responsive `srcset`

### SEO
- Full Next.js **Metadata API** in `layout.tsx`:
  - `metadataBase` for canonical URL resolution
  - `title.default` + `title.template` for consistent `<title>` tags
  - `description`, `keywords`, `authors`, `creator`
  - **OpenGraph** (`type`, `locale`, `url`, `siteName`, `title`, `description`, `images`)
  - **Twitter Card** (`summary_large_image`)
  - `robots: { index: true, follow: true }`
- Semantic HTML: `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`
- Descriptive `alt` text on every image
- `themeColor` viewport meta (`#050608`)

---

## Accessibility

- **Semantic landmarks**: header, main, footer, and nav elements provide structural context to assistive tech
- **ARIA**: `aria-label` on icon-only links and the social region; `aria-hidden` on decorative SVGs; `aria-expanded` on the mobile menu toggle
- **Keyboard navigation**: focus-visible rings (`focus-visible:ring-2 ring-accent-orange/60`); all interactive elements are reachable via tab
- **Color contrast**: white-on-ink-950 and ink-950-on-gray-100 pairings meet WCAG AA
- **Reduced motion**: `prefers-reduced-motion` respected — transitions and animations are disabled for users who request it
- **Descriptive link text**: no bare "click here" — every link has context

---

## Getting Started

### Prerequisites

- **Node.js 18.18+** (Next.js 15 requirement; tested on Node 24)
- **npm 10+** (or compatible pnpm/yarn — this repo ships `package-lock.json` for npm)

### Installation

```bash
git clone git@github.com:mutlukurt/auradigital.git
cd auradigital
npm install
```

### Development

```bash
npm run dev
```

The site is served at **http://localhost:3000** with hot module replacement.

### Production Build

```bash
npm run build
npm run start
```

`next build` generates the optimized production build and prerenders all static pages. `next start` serves the production build.

---

## Available Scripts

| Script              | Command           | Description                                              |
|---------------------|-------------------|----------------------------------------------------------|
| `dev`               | `next dev`        | Start the development server with HMR                    |
| `build`             | `next build`      | Create an optimized production build (SSG)               |
| `start`             | `next start`      | Serve the production build                               |
| `lint`              | `next lint`       | Run ESLint with `next/core-web-vitals` config            |
| `typecheck`         | `tsc --noEmit`    | Type-check the project without emitting output           |

---

## Configuration

### `next.config.ts`
- `reactStrictMode: true` — surfaces unsafe side effects in development
- `images.formats: ["image/avif", "image/webp"]` — modern format priority

### `tailwind.config.ts`
- Custom `ink` and `accent` color scales
- `fontFamily.display` / `fontFamily.body` bound to CSS variables from `next/font`
- Custom `max-width.container` (1280px) and `borderRadius` tokens
- Custom `scroll-dot` and `float-slow` keyframes
- `@tailwindcss/typography` plugin enabled

### `tsconfig.json`
- `strict: true` — full strict mode
- `moduleResolution: "bundler"` — modern resolution
- Path alias `@/*` → `./src/*`
- `incremental: true` with `.tsbuildinfo` for faster rechecks

### `globals.css`
- Tailwind `base`, `components`, `utilities` layers
- CSS custom properties for font stacks
- Base element styling (body, headings, selection, scrollbar)
- Component-layer utilities (`.section-tag`, `.glass`)

---

## Content Model

All site content lives in [`src/lib/data.ts`](src/lib/data.ts) as typed exports. To edit the site, you generally edit only this file.

```ts
export const brand = { name, tagline, designer, email, year };
export const nav: NavItem[];               // primary nav
export const headerActions: NavItem[];     // "What's New", "Pricing"
export const services: Service[];          // 2 services
export const capabilities: Capability[];   // 4 capabilities
export const projects: Project[];          // 3 projects
export const footerColumns: { heading, links }[];
export const socials: Social[];
```

**To add a project**, append to `projects`:
```ts
{
  num: "04 / 04",
  name: "NEW PROJECT",
  description: "...",
  image: "/images/project-new.jpg",
  alt: "...",
  tags: ["..."],
  reverse: false,
}
```
Drop the image into `public/images/` and the Projects component renders it automatically with the alternating layout logic.

---

## Browser Support

Tested and supported on the latest two versions of:
- Chrome / Edge (Chromium)
- Firefox
- Safari (macOS & iOS)

Requires browsers supporting:
- CSS `clamp()` and custom properties
- Intersection Observer (for scroll reveals)
- AVIF/WebP decoding (with graceful JPG fallback via `next/image`)

---

## License

This project is a personal portfolio piece. All rights reserved © 2026 Mutlu Kurt.

The source code is provided for reference and educational purposes. The "AURA DIGITAL" brand, copy, and visual assets are fictional and not licensed for commercial reuse.

---

<sub>Designed & built by **Mutlu Kurt** · Stack: Next.js 15 · React 19 · TypeScript · Tailwind CSS · Framer Motion</sub>
