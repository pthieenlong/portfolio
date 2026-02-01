import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
  current: boolean;
}

const experiences: ExperienceItem[] = [
  {
    id: '1',
    company: 'Anthropic',
    position: 'AI Assistant',
    period: '2024 - Present',
    location: 'San Francisco, CA',
    description:
      'Helping developers worldwide write better code, design systems, and solve complex problems through natural language interaction.',
    highlights: [
      'Assisted thousands of developers with code reviews and debugging',
      'Contributed to open-source documentation and tutorials',
      'Developed expertise in modern web frameworks and best practices',
    ],
    technologies: ['TypeScript', 'React', 'Node.js', 'Python', 'AI/ML'],
    current: true,
  },
  {
    id: '2',
    company: 'Tech Innovations',
    position: 'Senior Full-Stack Developer',
    period: '2021 - 2024',
    location: 'Remote',
    description:
      'Led development of enterprise-scale applications and mentored junior developers on best practices.',
    highlights: [
      'Architected microservices handling 10M+ daily requests',
      'Reduced deployment time by 60% through CI/CD optimization',
      'Mentored team of 5 junior developers',
    ],
    technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'AWS', 'Docker'],
    current: false,
  },
  {
    id: '3',
    company: 'Creative Studio',
    position: 'UI/UX Developer',
    period: '2019 - 2021',
    location: 'New York, NY',
    description:
      'Bridged the gap between design and development, creating pixel-perfect implementations of complex designs.',
    highlights: [
      'Implemented design system used across 15+ products',
      'Improved Core Web Vitals scores by 40%',
      'Collaborated directly with design team on UX improvements',
    ],
    technologies: ['React', 'Figma', 'Storybook', 'CSS-in-JS', 'A11y'],
    current: false,
  },
  {
    id: '4',
    company: 'Startup Labs',
    position: 'Frontend Developer',
    period: '2017 - 2019',
    location: 'Austin, TX',
    description:
      'Built user-facing features for early-stage startups, working in fast-paced agile environments.',
    highlights: [
      'Shipped 3 products from concept to launch',
      'Implemented real-time features using WebSockets',
      'Optimized bundle size reducing load time by 50%',
    ],
    technologies: ['Vue.js', 'TypeScript', 'Firebase', 'Tailwind'],
    current: false,
  },
];

function TimelineItem({ item, index }: { item: ExperienceItem; index: number }) {
  return (
    <motion.div
      variants={staggerItem}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

      {/* Timeline dot */}
      <div
        className={cn(
          'absolute left-0 top-1 w-2 h-2 -translate-x-1/2 rounded-full',
          item.current ? 'bg-primary animate-pulse' : 'bg-muted-foreground'
        )}
      />

      {/* Card */}
      <motion.div
        className="glass rounded-2xl p-6 ml-4"
        whileHover={{ x: 4 }}
      >
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              {item.current && (
                <span className="px-2 py-0.5 text-xs rounded-full bg-primary/20 text-primary">
                  Current
                </span>
              )}
              <h3 className="text-lg font-semibold">{item.position}</h3>
            </div>
            <p className="text-primary font-medium">{item.company}</p>
          </div>
          <div className="flex flex-col items-end gap-1 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {item.period}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {item.location}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground mb-4">{item.description}</p>

        {/* Highlights */}
        <ul className="space-y-2 mb-4">
          {item.highlights.map((highlight, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <span className="text-primary mt-1">•</span>
              {highlight}
            </li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section">
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
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              My professional journey through the tech industry
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto">
            {experiences.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>

          {/* Download CV button */}
          <motion.div variants={fadeInUp} className="text-center mt-12">
            <motion.a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-primary to-accent text-primary-foreground font-medium"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Briefcase className="w-4 h-4" />
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
