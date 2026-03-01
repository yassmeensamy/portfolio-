# Portfolio Website — Implementation Tasks

## Layout Structure

### 1. Root Layout
- [ ] Sticky navbar with blur backdrop
- [ ] Footer with social links
- [ ] Font setup (next/font/google)
- [ ] Global metadata (title, description, Open Graph)
- [ ] Smooth scroll behavior

### 2. Homepage (`/`)
- [ ] Hero section — name, title, tagline, CTA buttons (Projects / Contact)
- [ ] About section — 2-3 sentences + tech philosophy
- [ ] Skills section — grouped by category (Mobile, State Mgmt, Testing, API)
- [ ] Featured projects section — 2-3 case study cards with thumbnails
- [ ] Contact section — email, GitHub, LinkedIn links

### 3. Projects Page (`/projects`)
- [ ] Projects listing grid with filter by tech stack
- [ ] Project card component — thumbnail, title, summary, tags

### 4. Case Study Page (`/projects/[slug]`)
- [ ] Hero banner — project name, description, tech badges, links
- [ ] The Problem — context and challenge
- [ ] Role & Approach — architecture decisions and reasoning
- [ ] Technical Deep Dive — diagrams, key code decisions
- [ ] Challenges & Solutions — real problems and how they were solved
- [ ] Results & Impact — metrics, screenshots, demo
- [ ] Lessons Learned — reflection and growth

### 5. About Page (`/about`)
- [ ] Bio and background
- [ ] Experience timeline
- [ ] Tech stack breakdown with context

### 6. Contact Page (`/contact`)
- [ ] Contact form or direct links
- [ ] Email, GitHub, LinkedIn

---

## Setup & Infrastructure
- [ ] Folder architecture (components, data, lib, types)
- [ ] Install dependencies (framer-motion, lucide-react, clsx, tailwind-merge)
- [ ] Utility helper (`cn()` for class merging)
- [ ] Project data model and sample data
- [ ] SEO — sitemap.ts, robots.ts, JSON-LD structured data
- [ ] Image optimization with next/image
