# Portfolio Website — Rules & Guidelines

## Language
- All content, UI text, and metadata must be in English only
- No RTL layout support needed

## Routing
- Use Next.js App Router (no Pages Router)
- File-based routing under `src/app/`

## Rendering Strategy
- Static Generation (SSG) by default — no SSR
- Use `generateStaticParams()` for dynamic routes (`/projects/[slug]`)
- Avoid `cookies()`, `headers()`, `searchParams` to keep pages static

## SEO
- Use Next.js `metadata` API for static metadata per page
- Use `generateMetadata()` for dynamic pages (case studies)
- Add `sitemap.ts` and `robots.ts` in `src/app/`
- Add JSON-LD structured data (`Person` schema)
- One `<h1>` per page, proper heading hierarchy (`h1` > `h2` > `h3`)
- Use semantic HTML (`<main>`, `<article>`, `<section>`, `<nav>`, `<footer>`)
- Open Graph and Twitter Card meta tags on every page
- All images use `next/image` for automatic optimization (WebP, lazy loading, srcset)

## Theme — Rumors (Behr 2025)
Warm light background with bold ruby red accent — confident and unique.
```
Background:  #FBF3F0   (warm cream-pink)
Surface:     #E8D5CE   (soft blush)
Primary:     #8B2E2E   (ruby red)
Accent:      #CC736B   (warm coral)
Text:        #2A1210   (deep brown)
Muted:       #AB7B75   (dusty rose)
```

## Styling
- Tailwind CSS v4 — utility-first, no custom CSS unless absolutely necessary
- Use `cn()` helper (clsx + tailwind-merge) for conditional classes
- Mobile-first responsive design
- Consistent spacing and typography scale
- Light warm theme using Rumors palette (single theme, no toggle needed)

## Fonts
- Use `next/font/google` for zero layout shift
- Self-hosted automatically by Next.js

## Animations
- Use Framer Motion for scroll-triggered and entrance animations
- Keep animations subtle and performant — no heavy or distracting effects
- Respect `prefers-reduced-motion`

## Components
- Server Components by default — only use `"use client"` when needed (interactivity, hooks)
- Reusable primitives in `components/ui/`
- Page sections in `components/sections/`
- Layout components in `components/layout/`

## Data
- Project/case study data stored in `src/data/` as typed TypeScript files
- No CMS — content lives in code for simplicity
- All data must have proper TypeScript interfaces in `src/types/`

## Code Quality
- TypeScript strict mode
- No `any` types
- Descriptive variable and component names
- Keep components small and focused — one responsibility per component

## Performance
- Target 90+ Lighthouse score across all categories
- No unnecessary client-side JavaScript
- Optimize all images before adding to `public/`
- Minimal dependencies — only install what is truly needed

## Accessibility
- All images must have meaningful `alt` text
- Interactive elements must be keyboard accessible
- Sufficient color contrast ratios
- Use ARIA attributes where semantic HTML is not enough

## Project Structure
```
src/
├── app/          # Routes and pages
├── components/   # ui/, sections/, layout/
├── data/         # Project and content data
├── lib/          # Utility functions
└── types/        # Shared TypeScript interfaces
```

## Git
- Clean, descriptive commit messages
- One feature or section per commit
