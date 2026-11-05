import { motion } from 'framer-motion';
import { Check, Copy, Github, Mail, MapPin } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';

export function Contact() {
  const { copied, failed, copy } = useCopyToClipboard();

  const copyLabel = copied ? 'Copied!' : failed ? 'Copy failed' : 'Copy email';

  return (
    <section id="contact" className="section">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle max-w-xl mx-auto mb-0">
              Open to frontend / full-stack roles, Odoo projects, and
              conversations about building products. Email is the fastest way
              to reach me.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bento-card glass rounded-3xl p-6 sm:p-10 text-center"
          >
            <p className="text-sm text-muted-foreground mb-2">Say hello at</p>
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="block text-2xl sm:text-4xl font-semibold tracking-tight break-all hover:text-primary transition-colors"
            >
              {SOCIAL_LINKS.email}
            </a>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-medium shadow-lg shadow-primary/25 hover:opacity-90 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                Send an email
              </a>
              <button
                type="button"
                onClick={() => copy(SOCIAL_LINKS.email)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass glass-hover font-medium"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-primary" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
                <span aria-live="polite">{copyLabel}</span>
              </button>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass glass-hover font-medium"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>

            <p className="mt-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              {SITE_CONFIG.location} · GMT+7
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
