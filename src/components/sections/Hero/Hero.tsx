import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SOCIAL_ITEMS } from "@/lib/social";

const socialLinks = SOCIAL_ITEMS;

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="container-custom relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Greeting badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm text-muted-foreground">
              Based in Ho Chi Minh City · Open to opportunities
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="block text-muted-foreground text-lg sm:text-xl md:text-2xl font-normal mb-2">
              Hi, I'm
            </span>
            <span className="gradient-text">Pham Thien Long</span>
          </motion.h1>

          {/* Subtitle with typing effect style */}
          <motion.div variants={fadeInUp} className="mb-8">
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light">
              Frontend Developer
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl font-medium mt-1">
              who cares about the <span className="gradient-text">product behind the code</span>
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            I build web apps with React, Next.js and NestJS — from admin
            dashboards and multi-tenant SaaS to an MCP server and a tiny
            mobile game. I like asking "why are we building this?" before
            asking "how?".
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <motion.a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-linear-to-r from-primary to-accent text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="px-6 py-3 rounded-xl glass glass-hover font-medium"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-3 mt-8"
          >
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass glass-hover"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xs font-medium">Scroll to explore</span>
            <ArrowDown className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 border border-primary/20 rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 border border-accent/20 rounded-full animate-pulse delay-500" />
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-primary rounded-full animate-ping" />
    </section>
  );
}

export default Hero;
