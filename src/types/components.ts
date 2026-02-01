import type { ReactNode } from 'react';

export interface NavLink {
  href: string;
  labelKey: string;
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'email' | 'dribbble' | 'behance';
  url: string;
  label?: string;
}

export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

export interface SectionProps extends BaseComponentProps {
  id?: string;
  title?: string;
  subtitle?: string;
}
