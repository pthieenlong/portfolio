import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Portfolio Website',
    description:
      'A modern portfolio built with Astro, React, and TailwindCSS featuring glassmorphism design and smooth animations.',
    image: '/projects/portfolio.png',
    tags: ['Astro', 'React', 'TailwindCSS', 'Framer Motion'],
    liveUrl: '#',
    repoUrl: '#',
    featured: true,
  },
  {
    id: '2',
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
    image: '/projects/ecommerce.png',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Stripe'],
    liveUrl: '#',
    repoUrl: '#',
    featured: true,
  },
  {
    id: '3',
    title: 'Task Management App',
    description:
      'Collaborative task management with real-time updates, drag-and-drop, and team features.',
    image: '/projects/taskapp.png',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    liveUrl: '#',
    repoUrl: '#',
    featured: true,
  },
  {
    id: '4',
    title: 'AI Chat Interface',
    description:
      'Modern chat interface for AI conversations with markdown support and code highlighting.',
    image: '/projects/aichat.png',
    tags: ['React', 'TypeScript', 'OpenAI', 'Tailwind'],
    liveUrl: '#',
    featured: false,
  },
  {
    id: '5',
    title: 'Design System',
    description:
      'Comprehensive design system with components, documentation, and Figma integration.',
    image: '/projects/designsystem.png',
    tags: ['React', 'Storybook', 'Figma', 'CSS-in-JS'],
    repoUrl: '#',
    featured: false,
  },
  {
    id: '6',
    title: 'Mobile Banking App',
    description:
      'Secure mobile banking application with biometric auth and real-time transactions.',
    image: '/projects/banking.png',
    tags: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL'],
    featured: false,
  },
];

const filters = ['All', 'React', 'TypeScript', 'Next.js', 'Node.js'];

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
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary text-primary-foreground"
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

export function Projects() {
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
            {filters.map((filter) => (
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
                <ProjectCard key={project.id} project={project} />
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
