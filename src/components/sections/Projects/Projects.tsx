import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { withBase } from '@/lib/constants';
import { ProjectCard } from './ProjectCard';
import type { Project } from '@/types';

interface Props {
  projects: Project[];
  /** `home`: featured projects + "View all" link. `page`: every project, page-level heading. */
  variant?: 'home' | 'page';
}

const ALL = 'All';

/** Only offer filters that match 2+ projects; one-off tags add noise. */
function getFilterTags(projects: Project[]): string[] {
  const counts = new Map<string, number>();
  projects.flatMap((p) => p.tags).forEach((tag) => counts.set(tag, (counts.get(tag) ?? 0) + 1));
  return [ALL, ...[...counts.keys()].filter((tag) => (counts.get(tag) ?? 0) >= 2)];
}

export function Projects({ projects, variant = 'home' }: Props) {
  const [activeFilter, setActiveFilter] = useState(ALL);

  const isHome = variant === 'home';
  const pool = isHome ? projects.filter((p) => p.featured) : projects;
  const filterTags = getFilterTags(pool);
  const visibleProjects =
    activeFilter === ALL ? pool : pool.filter((p) => p.tags.includes(activeFilter));
  const Heading = isHome ? 'h2' : 'h1';

  return (
    <section id="projects" className={isHome ? 'section' : 'pt-28 md:pt-32 pb-20'}>
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section header */}
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <Heading className={isHome ? 'section-title' : 'text-4xl md:text-5xl font-bold mb-4'}>
              {isHome ? 'Featured Projects' : 'All Projects'}
            </Heading>
            <p className="section-subtitle max-w-2xl mx-auto mb-0">
              Things I've built: open-source tools, SaaS dashboards, CMSs and a game
            </p>
          </motion.div>

          {/* Filters */}
          {!isHome && filterTags.length > 2 && (
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center gap-2 mb-10"
              role="group"
              aria-label="Filter projects by technology"
            >
              {filterTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setActiveFilter(tag)}
                  aria-pressed={activeFilter === tag}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                    activeFilter === tag
                      ? 'bg-primary text-primary-foreground'
                      : 'glass glass-hover text-muted-foreground hover:text-foreground'
                  )}
                >
                  {tag}
                </button>
              ))}
            </motion.div>
          )}

          {/* Projects grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>

          {isHome && projects.length > pool.length && (
            <motion.div variants={fadeInUp} className="text-center mt-12">
              <a
                href={withBase('/projects')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass glass-hover font-medium"
              >
                View all {projects.length} projects
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
