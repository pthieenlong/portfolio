# Portfolio

A modern portfolio website built with Astro, React, TailwindCSS, and Shadcn/ui featuring glassmorphism design and smooth Framer Motion animations.

## Tech Stack

- **Framework:** Astro 5.x + React
- **Styling:** TailwindCSS 4.x + Shadcn/ui
- **Animation:** Framer Motion
- **Language:** TypeScript
- **Content:** Astro Content Collections + MDX

## Features

- Glassmorphism design with blur effects and gradient borders
- Dark/Light mode toggle
- Responsive design (mobile-first)
- Animated sections with Framer Motion
- Bento grid layout for About section
- Project filtering system
- Experience timeline
- Contact form
- Mouse tracking effects on cards

## Project Structure

```text
src/
├── components/
│   ├── layout/          # Header, Footer
│   ├── sections/        # Hero, Bento, Projects, Experience, Contact
│   └── ui/              # Shadcn components
├── content/             # Astro Content Collections
├── hooks/               # useTheme, useScrollPosition, useMediaQuery
├── layouts/             # Base Astro layout
├── lib/                 # utils, constants, animations
├── pages/               # Astro pages
├── styles/              # Global CSS + Tailwind config
└── types/               # TypeScript definitions
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Editing content

1. Personal info & social links: `src/lib/constants.ts`
2. Projects: one MDX file per project in `src/content/projects/`
3. Experience timeline: `src/content/experience/experiences.json`
4. Blog posts: `src/content/blog/` (`draft: true` hides a post)
5. Theme colors: `src/styles/global.css`

## Deploy

Pushing to `main` builds and deploys to GitHub Pages via `.github/workflows/deploy.yml`:
https://pthieenlong.github.io/portfolio

The site uses `base: '/portfolio'`, so internal links must go through `withBase()` from `src/lib/constants.ts`.

## Adding Shadcn Components

```bash
npx shadcn@latest add button
npx shadcn@latest add card
# etc.
```

## License

MIT
