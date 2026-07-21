import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface Project {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
}

interface Props {
  projects: Project[];
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={staggerItem}
      className="group relative rounded-2xl glass overflow-hidden"
      whileHover={{ y: -8 }}
    >
      {/* Image placeholder */}
      <div className="aspect-video bg-linear-to-br from-primary/20 to-accent/20 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-bold text-primary/20">
            {project.title.charAt(0)}
          </span>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <motion.a
            href={`/projects/${project.slug}`}
            className="p-3 rounded-full bg-primary text-primary-foreground"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowRight className="w-5 h-5" />
          </motion.a>
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          )}
          {project.repoUrl && (
            <motion.a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects({ projects }: Props) {
  const allTags = ['All', ...Array.from(new Set(projects.flatMap((p) => p.tags)))];
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.tags.includes(activeFilter);
  });

  return (
    <section id="projects" className="section">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section header */}
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="section-title">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              A selection of projects I've worked on, from web apps to design systems
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-2 mb-12"
          >
            {allTags.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all',
                  activeFilter === filter
                    ? 'bg-primary text-primary-foreground'
                    : 'glass glass-hover text-muted-foreground hover:text-foreground'
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View all button */}
          <motion.div variants={fadeInUp} className="text-center mt-12">
            <motion.a
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass glass-hover font-medium"
              whileHover={{ scale: 1.02, x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
