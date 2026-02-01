# CLAUDE.md - Portfolio Project Guidelines

## Project Overview

A modern portfolio website built with Astro, React, TailwindCSS, and Shadcn/ui.
This is a Hybrid Developer + Designer portfolio with Glassmorphism design style.

## Tech Stack

- **Framework:** Astro 5.x with React integration
- **Styling:** TailwindCSS 4.x + Shadcn/ui
- **Language:** TypeScript (strict mode)
- **Content:** Astro Content Collections + MDX for blog
- **Animation:** Framer Motion

---

## Folder Structure

```
src/
├── assets/                    # Static assets (images, SVGs, fonts)
│   ├── images/
│   │   ├── projects/         # Project screenshots/thumbnails
│   │   ├── blog/             # Blog post images
│   │   └── profile/          # Personal photos
│   ├── icons/                # Custom SVG icons
│   └── fonts/                # Custom fonts (if any)
│
├── components/
│   ├── ui/                   # Shadcn/ui components (auto-generated)
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── ...
│   │
│   ├── common/               # Shared/reusable components
│   │   ├── Logo.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── SocialLinks.tsx
│   │   └── ScrollToTop.tsx
│   │
│   ├── layout/               # Layout-specific components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   ├── MobileMenu.tsx
│   │   └── Container.tsx
│   │
│   ├── sections/             # Page sections (React components)
│   │   ├── Hero/
│   │   │   ├── Hero.tsx
│   │   │   ├── HeroBackground.tsx
│   │   │   └── index.ts
│   │   ├── Bento/
│   │   │   ├── BentoGrid.tsx
│   │   │   └── index.ts
│   │   ├── Projects/
│   │   │   ├── Projects.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── ProjectFilter.tsx
│   │   │   └── index.ts
│   │   ├── Experience/
│   │   │   ├── Experience.tsx
│   │   │   ├── ExperienceTimeline.tsx
│   │   │   └── index.ts
│   │   └── Contact/
│   │       ├── Contact.tsx
│   │       ├── ContactForm.tsx
│   │       └── index.ts
│   │
│   └── mdx/                  # Custom MDX components
│       ├── CodeBlock.tsx
│       ├── Callout.tsx
│       ├── ImageGallery.tsx
│       └── index.ts
│
├── content/                  # Astro Content Collections
│   ├── config.ts             # Collection schemas
│   ├── projects/             # Project entries (MDX/MD)
│   │   ├── project-1.mdx
│   │   └── project-2.mdx
│   ├── blog/                 # Blog posts (MDX)
│   └── experience/           # Work experience (JSON/YAML)
│       └── experiences.json
│
├── layouts/                  # Astro layouts
│   ├── Layout.astro          # Base layout
│   ├── BlogLayout.astro      # Blog post layout
│   └── ProjectLayout.astro   # Project detail layout
│
├── pages/                    # Astro pages (file-based routing)
│   ├── index.astro           # Home page
│   ├── blog/
│   │   ├── index.astro       # Blog listing
│   │   └── [...slug].astro   # Dynamic blog post
│   ├── projects/
│   │   ├── index.astro       # Projects listing
│   │   └── [...slug].astro   # Dynamic project detail
│   └── 404.astro             # Custom 404 page
│
├── lib/                      # Utilities and helpers
│   ├── utils.ts              # General utilities (cn, etc.)
│   ├── constants.ts          # App constants
│   └── animations.ts         # Framer Motion variants
│
├── hooks/                    # Custom React hooks
│   ├── useTheme.ts
│   ├── useScrollPosition.ts
│   └── useMediaQuery.ts
│
├── types/                    # TypeScript type definitions
│   ├── index.ts              # Barrel export
│   ├── content.ts            # Content collection types
│   └── components.ts         # Component prop types
│
└── styles/
    └── global.css            # Global styles + Tailwind + Shadcn theme
```

---

## Code Rules

### 1. TypeScript Guidelines

```typescript
// GOOD: Explicit types for props
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

// BAD: Using 'any' or implicit types
const Button = (props: any) => { ... }
```

- **ALWAYS** use explicit types for function parameters and return types
- **NEVER** use `any` type - use `unknown` if type is truly unknown
- **PREFER** interfaces over types for object shapes (better error messages)
- **USE** type guards for narrowing union types

### 2. Component Guidelines (OOP, SOLID, DRY, KISS)

#### Single Responsibility Principle (SRP)
```typescript
// GOOD: Each component has ONE job
const ProjectCard = ({ project }: Props) => <div>...</div>;
const ProjectFilter = ({ onFilter }: Props) => <select>...</select>;
const ProjectGrid = ({ projects }: Props) => <div>...</div>;

// BAD: Component doing too many things
const Projects = () => {
  // fetching + filtering + rendering + pagination all in one
}
```

#### Open/Closed Principle (OCP)
```typescript
// GOOD: Extensible through props/composition
interface CardProps {
  variant?: 'default' | 'glass' | 'outlined';
  children: React.ReactNode;
}

// BAD: Modifying component for each new case
const Card = ({ type }) => {
  if (type === 'project') return ...
  if (type === 'blog') return ...
  if (type === 'skill') return ...
}
```

#### DRY (Don't Repeat Yourself)
```typescript
// GOOD: Reusable animation variants
// lib/animations.ts
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// GOOD: Shared glass morphism styles
// Use Tailwind @apply or component composition
const glassStyles = "bg-white/10 backdrop-blur-lg border border-white/20";
```

#### KISS (Keep It Simple, Stupid)
```typescript
// GOOD: Simple, readable code
const isActive = pathname === href;

// BAD: Over-engineered
const isActive = useMemo(() =>
  new URL(href, window.location.origin).pathname ===
  new URL(pathname, window.location.origin).pathname
, [href, pathname]);
```

### 3. Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `ProjectCard.tsx` |
| Hooks | camelCase with 'use' prefix | `useTheme.ts` |
| Utilities | camelCase | `formatDate.ts` |
| Constants | SCREAMING_SNAKE_CASE | `MAX_PROJECTS` |
| Types/Interfaces | PascalCase | `ProjectProps` |
| CSS Classes | kebab-case (Tailwind) | `bg-primary` |
| Files (non-components) | kebab-case | `animation-variants.ts` |

### 4. Import Order

```typescript
// 1. React/Framework imports
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// 2. Third-party libraries
import { format } from 'date-fns';

// 3. Internal aliases (@/)
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

// 4. Relative imports
import { HeroBackground } from './HeroBackground';

// 5. Types (with 'type' keyword)
import type { Project } from '@/types';
```

### 5. Component Structure

```typescript
// 1. Imports
import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { ComponentProps } from '@/types';

// 2. Types/Interfaces (if not imported)
interface Props {
  title: string;
  className?: string;
}

// 3. Constants (component-specific)
const ANIMATION_DURATION = 0.3;

// 4. Component
export function ComponentName({ title, className }: Props) {
  // a. Hooks
  const [state, setState] = useState(false);

  // b. Derived state / computed values
  const displayTitle = title.toUpperCase();

  // c. Effects
  useEffect(() => {
    // ...
  }, []);

  // d. Handlers
  const handleClick = () => {
    setState(true);
  };

  // e. Render
  return (
    <div className={cn('base-styles', className)}>
      {displayTitle}
    </div>
  );
}
```

---

## Styling Rules

### 1. Glassmorphism Design System

```css
/* Base glass effect classes - use these consistently */
.glass {
  @apply bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl;
}

.glass-card {
  @apply bg-white/5 backdrop-blur-md border border-white/10 rounded-xl;
}

.glass-button {
  @apply bg-white/10 backdrop-blur-sm border border-white/20
         hover:bg-white/20 transition-all duration-300;
}
```

### 2. Color Palette (Dark Mode First)

```css
/* Primary accent - use for CTAs and highlights */
--accent-primary: oklch(0.7 0.2 250);      /* Blue-ish */
--accent-secondary: oklch(0.7 0.15 320);   /* Purple-ish */

/* Glass backgrounds */
--glass-bg: rgba(255, 255, 255, 0.05);
--glass-border: rgba(255, 255, 255, 0.1);
--glass-hover: rgba(255, 255, 255, 0.1);
```

### 3. Typography Scale

```typescript
// Use Tailwind's typography scale consistently
const typography = {
  hero: 'text-5xl md:text-7xl font-bold',
  h1: 'text-4xl md:text-5xl font-bold',
  h2: 'text-3xl md:text-4xl font-semibold',
  h3: 'text-2xl md:text-3xl font-semibold',
  h4: 'text-xl md:text-2xl font-medium',
  body: 'text-base md:text-lg',
  small: 'text-sm',
  caption: 'text-xs text-muted-foreground',
};
```

### 4. Spacing System

```typescript
// Use consistent spacing multipliers (4px base)
// Tailwind: p-4 = 16px, p-8 = 32px, etc.

const spacing = {
  section: 'py-20 md:py-32',        // Between sections
  container: 'px-4 md:px-8 lg:px-16', // Container padding
  card: 'p-6 md:p-8',               // Card internal padding
  gap: 'gap-4 md:gap-6',            // Grid/flex gaps
};
```

### 5. Animation Guidelines

```typescript
// lib/animations.ts
import { Variants } from 'framer-motion';

// Standard durations
export const DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  verySlow: 0.8,
};

// Standard easings
export const EASING = {
  easeOut: [0.16, 1, 0.3, 1],
  easeInOut: [0.65, 0, 0.35, 1],
  spring: { type: 'spring', stiffness: 100, damping: 15 },
};

// Reusable variants
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.normal, ease: EASING.easeOut }
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  },
};
```

### 6. Responsive Breakpoints

```typescript
// Follow Tailwind's default breakpoints
// sm: 640px  - Mobile landscape
// md: 768px  - Tablet
// lg: 1024px - Desktop
// xl: 1280px - Large desktop
// 2xl: 1536px - Extra large

// Mobile-first approach: base styles for mobile, then scale up
<div className="
  text-sm md:text-base lg:text-lg
  p-4 md:p-6 lg:p-8
  grid-cols-1 md:grid-cols-2 lg:grid-cols-3
">
```

---

## Content Collection Schemas

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string(),
    tags: z.array(z.string()),
    liveUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    publishedAt: z.date(),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.date(),
    updatedAt: z.date().optional(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  projects: projectsCollection,
  blog: blogCollection,
};
```

---

## Git Commit Convention

```
<type>(<scope>): <subject>

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: Formatting (no code change)
- refactor: Code restructuring
- perf: Performance improvement
- test: Adding tests
- chore: Maintenance

Examples:
- feat(hero): add animated background
- fix(nav): mobile menu not closing
- style(global): update glassmorphism opacity
- refactor(projects): extract ProjectCard component
```

---

## Performance Checklist

- [ ] Use `client:load` only when necessary (prefer `client:visible` or `client:idle`)
- [ ] Optimize images with Astro's Image component
- [ ] Lazy load below-the-fold content
- [ ] Minimize JavaScript bundle size
- [ ] Use CSS animations over JS when possible
- [ ] Implement proper loading states

---

## Accessibility Checklist

- [ ] All images have meaningful alt text
- [ ] Color contrast meets WCAG AA (4.5:1 for text)
- [ ] Interactive elements have focus states
- [ ] Skip links for keyboard navigation
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] ARIA labels where needed
- [ ] Reduced motion support (`prefers-reduced-motion`)
