import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, CheckCircle } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';
import { SOCIAL_ITEMS } from '@/lib/social';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const INITIAL_FORM: FormState = { name: '', email: '', message: '' };

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: SOCIAL_LINKS.email,
    href: `mailto:${SOCIAL_LINKS.email}`,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: SITE_CONFIG.location,
    href: null,
  },
];

const socialLinks = SOCIAL_ITEMS;

/**
 * Static site (GitHub Pages) has no backend, so the form hands off to the
 * visitor's mail client with subject/body prefilled instead of faking a send.
 */
function buildMailtoUrl({ name, email, message }: FormState): string {
  const subject = `Portfolio contact from ${name}`;
  const body = `${message}\n\n— ${name} (${email})`;
  return `mailto:${SOCIAL_LINKS.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function Contact() {
  const [formState, setFormState] = useState<FormState>(INITIAL_FORM);
  const [opened, setOpened] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    window.location.href = buildMailtoUrl(formState);
    setOpened(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setOpened(false);
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="section-title">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Hiring, collaborating, or just want to talk shop? Reach out.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact info */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Let's connect</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm open to frontend / full-stack roles, Odoo projects, and
                  conversations about building products. Email is the fastest
                  way to reach me.
                </p>
              </div>

              {/* Contact details */}
              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl glass flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="font-medium">{item.value}</p>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      className="block hover:opacity-80 transition-opacity"
                      whileHover={{ x: 4 }}
                    >
                      {content}
                    </motion.a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>

              {/* Social links */}
              <div>
                <p className="text-sm text-muted-foreground mb-4">
                  Find me online
                </p>
                <div className="flex gap-3">
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
                </div>
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div variants={fadeInUp}>
              <form
                onSubmit={handleSubmit}
                className="glass rounded-2xl p-6 md:p-8 space-y-6"
              >
                {/* Name field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                {/* Email field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="you@company.com"
                  />
                </div>

                {/* Message field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                    placeholder="What would you like to talk about?"
                  />
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  className={cn(
                    'w-full py-3 px-6 rounded-xl font-medium flex items-center justify-center gap-2 transition-all',
                    'bg-linear-to-r from-primary to-accent text-primary-foreground hover:opacity-90'
                  )}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-4 h-4" />
                  Open in Email App
                </motion.button>
                <p className="text-xs text-muted-foreground text-center" aria-live="polite">
                  {opened ? (
                    <span className="inline-flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Your email app should open with this message. If it
                      didn&apos;t, email me at {SOCIAL_LINKS.email}.
                    </span>
                  ) : (
                    'This opens your email app with the message prefilled.'
                  )}
                </p>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
