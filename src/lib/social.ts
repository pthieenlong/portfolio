import { Github, Mail } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';

export interface SocialItem {
  href: string;
  icon: LucideIcon;
  label: string;
}

/** Single source of truth for social links shown in Hero, Contact and Footer. */
export const SOCIAL_ITEMS: SocialItem[] = [
  { href: SOCIAL_LINKS.github, icon: Github, label: 'GitHub' },
  { href: `mailto:${SOCIAL_LINKS.email}`, icon: Mail, label: 'Email' },
];
