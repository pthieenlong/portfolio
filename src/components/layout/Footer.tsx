import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const socialLinks = [
  { href: 'https://github.com', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
  { href: 'mailto:hello@example.com', icon: Mail, label: 'Email' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left side - Branding */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <motion.a
              href="/"
              className="flex items-center gap-2 text-lg font-bold"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-6 h-6 rounded-md bg-linear-to-br from-primary to-accent flex items-center justify-center text-primary-foreground text-xs font-bold">
                C
              </div>
              <span className="gradient-text">Claude</span>
            </motion.a>
            <p className="text-sm text-muted-foreground">
              AI Assistant & Developer
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg glass glass-hover"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              );
            })}
          </div>

          {/* Right side - Copyright */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>&copy; {currentYear} Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>by Claude</span>
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-8 pt-6 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground">
            Built with Astro, React, TailwindCSS & Shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
