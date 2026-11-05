export const SITE_CONFIG = {
  name: 'Pham Thien Long',
  title: 'Pham Thien Long — Frontend Developer',
  description:
    'Frontend Developer in Ho Chi Minh City building web apps with React, Next.js, NestJS and TypeScript.',
  url: 'https://pthieenlong.github.io/portfolio',
  location: 'Ho Chi Minh City, Vietnam',
} as const;

export const SOCIAL_LINKS = {
  github: 'https://github.com/pthieenlong',
  email: 'longpt.dev@gmail.com',
} as const;

/**
 * Prefix an internal path with the deploy base (e.g. `/portfolio`).
 * Hash-only links (`#about`) and absolute URLs are returned untouched.
 */
export function withBase(path: string): string {
  if (path.startsWith('#') || /^[a-z]+:/i.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export const NAV_LINKS = [
  { href: '/#about', label: 'About' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#contact', label: 'Contact' },
] as const;
