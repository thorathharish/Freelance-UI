# iTechie — Engineering Services Site

The marketing site for iTechie, built on Next.js 16 with the App Router.

**Live:** [freelance-ui-neon.vercel.app](https://freelance-ui-neon.vercel.app)

`Next.js 16 · React 19 · Tailwind v4 · Framer Motion · TypeScript`

---

## Overview

A single-page site presenting services, technical stack, past work, and engagement process. Sections are reached by smooth in-page navigation from a scroll-aware header.

Two things drove the build: a **token-based design system** so colour and surface decisions live in one place rather than scattered through utility classes, and **accessibility as a build requirement** rather than a retrofit.

---

## Sections

| Section | Contents |
|---|---|
| Hero | Positioning statement with animated capability counters |
| Services | Six service areas, each with its associated tooling |
| Tech Stack | Grouped technologies across DevOps/cloud, AI systems, and frontend |
| Work | Case study cards describing delivered projects |
| Why Us | Four differentiators |
| Process | Four-stage engagement model — discovery, architecture, development, deployment |
| Contact | Direct email and phone links |

---

## Accessibility

Handled deliberately throughout, not added at the end:

- **Skip-to-content link** as the first focusable element
- **Labelled landmarks** — every section uses `aria-labelledby` tied to its heading
- **Semantic lists** — card grids expose `role="list"` so screen readers announce item counts
- **Decorative icons hidden** from the accessibility tree with `aria-hidden`
- **Reduced-motion support** — `useReducedMotion()` gates every animation, so the entire site renders statically for users who request less motion rather than merely slowing down

---

## Design System

`tokens.json` defines the palette; `app/globals.css` exposes it as CSS custom properties (`--brand-primary`, `--brand-accent`, `--brand-highlight`, `--surface`, `--text-muted`) consumed across components. Changing the brand palette is a single-file edit.

Typography pairs Inter with Space Grotesk, both loaded through `next/font/google` so there is no layout shift on font load.

---

## Technical Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router), React 19 |
| Styling | Tailwind CSS v4, CSS custom properties |
| Animation | Framer Motion |
| Components | Base UI primitives, shadcn-style local components |
| Icons | lucide-react |
| Language | TypeScript |
| Hosting | Vercel |

---

## Project Structure

```
app/
├── layout.tsx          root layout, fonts, SEO + OpenGraph metadata, skip link
├── page.tsx            composes the section sequence
└── globals.css         Tailwind layer + design tokens as CSS variables
components/
├── layout/Navbar.tsx   scroll-aware header, mobile menu, smooth scrolling
├── sections/           Hero · Services · TechStack · CaseStudy · WhyUs · Process · CTA
└── ui/                 badge · button · card · input
lib/utils.ts            className merge helper
tokens.json             design token source
```

---

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script | Purpose |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |

---

## Deployment

Deployed on Vercel through Git integration using zero-config Next.js detection — every push to `main` triggers a build. There is no `vercel.json`; nothing about the deployment is customised.

---

## Engineering Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Design tokens in JSON + CSS variables | Single source for the palette | Rebranding is one file, not a search across components |
| `useReducedMotion()` on every animation | Motion is opt-out at the system level | A motion-heavy site is unusable for some visitors; honouring the OS preference is the correct default |
| Fonts via `next/font` | Self-hosted, preloaded | No layout shift and no third-party font request |
| Single route | Anchor navigation | The content is one linear pitch; routing would add cost without adding information |
| Minimal component set | Four local UI primitives | Only what the page uses, rather than a full component library for a seven-section site |

---

## Current Limitations

- **Marketing site.** No backend, no API routes, no database, and no authentication. It makes no network requests at runtime.
- **The case studies describe work that lives elsewhere.** The projects named under Work, and the frameworks and models listed under Tech Stack, are descriptions of engagements and capabilities — none of that code is in this repository. Nothing here calls an AI model.
- **Contact is email and phone links only.** There is no form and therefore no submission handler.
- **Statistics in the hero are static content**, not measured or fetched values.
- **No tests, no lint script, and no CI.** Deployment correctness relies on the Vercel build.
- **Leftover scaffold assets** — the default `create-next-app` SVGs remain in `public/` and are unreferenced.

## Future Improvements

- Contact form with a server action and spam protection
- Add a lint script and CI so builds fail fast on regressions
- Link case studies to their public repositories where those exist
- Remove unused scaffold assets from `public/`
