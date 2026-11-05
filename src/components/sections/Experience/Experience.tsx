import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface ExperienceItem {
  company: string;
  position: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  description: string;
  highlights: string[];
  technologies: string[];
  logo?: string;
}

interface Props {
  experiences: ExperienceItem[];
}

function formatPeriod(startDate: Date, endDate?: Date, current?: boolean): string {
  const start = startDate.getFullYear();
  if (current) return `${start} - Present`;
  const end = endDate ? endDate.getFullYear() : '';
  return `${start} - ${end}`;
}

function TimelineItem({ item }: { item: ExperienceItem }) {
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
              {formatPeriod(item.startDate, item.endDate, item.current)}
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

export function Experience({ experiences }: Props) {
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
              My <span className="gradient-text">Journey</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              From self-taught game dev to frontend developer
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto">
            {experiences.map((item, index) => (
              <TimelineItem key={index} item={item} />
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
