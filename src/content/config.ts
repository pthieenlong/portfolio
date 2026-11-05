import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string().optional(),
    tags: z.array(z.string()),
    liveUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    publishedAt: z.coerce.date(),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const experienceCollection = defineCollection({
  type: 'data',
  schema: z.object({
    experiences: z.array(
      z.object({
        company: z.string(),
        position: z.string(),
        startDate: z.coerce.date(),
        endDate: z.coerce.date().optional(),
        current: z.boolean().default(false),
        description: z.string(),
        highlights: z.array(z.string()),
        technologies: z.array(z.string()),
        logo: z.string().optional(),
      })
    ),
  }),
});

export const collections = {
  projects: projectsCollection,
  blog: blogCollection,
  experience: experienceCollection,
};
