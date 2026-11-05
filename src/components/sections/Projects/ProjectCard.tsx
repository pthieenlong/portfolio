import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { staggerItem } from '@/lib/animations';
import { withBase } from '@/lib/constants';
import type { Project } from '@/types';

interface Props {
  project: Project;
}

const MAX_TAGS = 4;

export function ProjectCard({ project }: Props) {
  const detailHref = withBase(`/projects/${project.slug}`);
  const year = new Date(project.publishedAt).getFullYear();
  const visibleTags = project.tags.slice(0, MAX_TAGS);
  const hiddenTagCount = project.tags.length - visibleTags.length;

  return (
    <motion.article
      layout
      variants={staggerItem}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, scale: 0.96 }}
      className="group relative flex flex-col rounded-2xl glass glass-hover p-6"
      whileHover={{ y: -6 }}
    >
      {/* Meta row */}
      <div className="flex items-center justify-between mb-4 text-xs text-muted-foreground">
        <span>{year}</span>
        <div className="flex items-center gap-2">
          {project.liveUrl && (
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary/15 text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              Live
            </span>
          )}
          {!project.repoUrl && (
            <span className="px-2 py-0.5 rounded-full bg-muted">Private</span>
          )}
        </div>
      </div>

      {/* Title: stretched link makes the whole card clickable */}
      <h3 className="text-lg font-semibold mb-2 pr-6">
        <a href={detailHref} className="after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none">
          {project.title}
        </a>
      </h3>
      <ArrowUpRight
        className="absolute top-14 right-6 w-5 h-5 text-muted-foreground transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        aria-hidden="true"
      />

      <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">
        {project.description}
      </p>

      {/* Tags + external links pinned to the bottom */}
      <div className="mt-auto flex items-end justify-between gap-3">
        <ul className="flex flex-wrap gap-1.5">
          {visibleTags.map((tag) => (
            <li key={tag} className="px-2 py-0.5 text-xs rounded-md bg-muted text-muted-foreground">
              {tag}
            </li>
          ))}
          {hiddenTagCount > 0 && (
            <li className="px-2 py-0.5 text-xs rounded-md bg-muted text-muted-foreground">
              +{hiddenTagCount}
            </li>
          )}
        </ul>
        <div className="relative z-10 flex shrink-0 gap-1">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-glass-hover hover:text-primary transition-colors"
              aria-label={`${project.title} live demo`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-glass-hover hover:text-primary transition-colors"
              aria-label={`${project.title} source code`}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
