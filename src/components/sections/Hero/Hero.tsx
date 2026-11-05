import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SOCIAL_ITEMS } from "@/lib/social";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-svh flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="container-custom relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-center"
        >
          {/* Status badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass text-sm"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-muted-foreground whitespace-nowrap">
              Open to opportunities · HCMC
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-5 text-balance"
          >
            <span className="gradient-text">Pham Thien Long</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={fadeInUp}
            className="text-xl sm:text-2xl md:text-3xl font-medium mb-6 text-balance"
          >
            Frontend Developer who cares about the product behind the code.
          </motion.p>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-balance"
          >
            I build web apps with React, Next.js and NestJS: admin CMSs,
            multi-tenant SaaS, an MCP server on npm and a tiny mobile game. I
            like asking "why are we building this?" before "how?".
          </motion.p>

          {/* CTAs + socials in one row */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <motion.a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium shadow-lg shadow-primary/25 hover:opacity-90 transition-opacity"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="#contact"
              className="px-6 py-3 rounded-xl glass glass-hover font-medium"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch
            </motion.a>
            <span className="hidden sm:block w-px h-8 bg-border mx-1" aria-hidden="true" />
            {SOCIAL_ITEMS.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass glass-hover"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator — sits alone at the bottom, away from the CTAs */}
      <motion.a
        href="#about"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.5 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 rounded-full text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowDown className="w-5 h-5" />
      </motion.a>
    </section>
  );
}

export default Hero;
