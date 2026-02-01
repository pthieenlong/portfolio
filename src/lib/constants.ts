export const SITE_CONFIG = {
  name: 'Portfolio',
  title: 'Your Name - Developer & Designer',
  description: 'A hybrid developer and designer portfolio showcasing projects and skills',
  url: 'https://yoursite.com',
} as const;

export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
] as const;

export const SOCIAL_LINKS = {
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  twitter: 'https://twitter.com/yourusername',
  email: 'your@email.com',
} as const;
