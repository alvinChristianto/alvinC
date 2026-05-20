# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

This is a **Next.js 13 App Router** single-page portfolio site for Alvin Christianto. There are no routes beyond the root — everything is a single scrollable page assembled in `app/page.tsx`.

### Page structure

`app/page.tsx` composes four full-width sections in order:

| Component | Section ID | Purpose |
|---|---|---|
| `HomeSection` | `#home` | Hero with photo and intro |
| `AboutMe` | `#about` | Bio and social media links |
| `IndividualProject` | `#individual-project` | Personal/ongoing projects (bg-slate-100) |
| `Portfolio` | `#portfolio` | Completed client/professional projects |

The `Navbar` component exists but is currently commented out.

### Styling conventions

- **Tailwind only** — no CSS modules or styled-components. `globals.css` only imports Tailwind directives.
- **Custom primary color**: `#059669` (Tailwind `text-primary`, `bg-primary`, `shadow-primary`). Defined in `tailwind.config.js`.
- The centered container with `padding: 16px` is the only layout primitive — use `<div className="container">` as the top-level wrapper inside each section.
- Responsive breakpoints follow standard Tailwind (`sm`, `md`, `lg`).

### Adding a project card

Both `IndividualProject.tsx` and `Portfolio.tsx` use a repeated card pattern: a `columns-1 md:columns-2 lg:columns-3` masonry grid. To add a new project, copy an existing card block inside either file. The card structure is:
1. `next/image` with `fill` inside a fixed-height (`h-56`) container
2. Title (`text-primary`), description, and tech stack (italic, `text-slate-400`)
3. A link button styled with `bg-primary`

Place the project image in `public/img/`.

### Analytics

Google Analytics (GA4 tag `G-2M3V0ZN4MB`) is loaded via `next/script` in `app/page.tsx`. The old commented-out block above it used `strategy="afterInteractive"` — the active version omits this prop.
