import { getCollection } from 'astro:content';
import type { Project } from '@/types';

/** All projects from the content collection, newest first. */
export async function getProjects(): Promise<Project[]> {
  const entries = await getCollection('projects');
  return entries
    .sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf())
    .map((entry) => ({
      slug: entry.slug,
      title: entry.data.title,
      description: entry.data.description,
      thumbnail: entry.data.thumbnail,
      tags: entry.data.tags,
      liveUrl: entry.data.liveUrl,
      repoUrl: entry.data.repoUrl,
      featured: entry.data.featured,
      publishedAt: entry.data.publishedAt,
    }));
}
