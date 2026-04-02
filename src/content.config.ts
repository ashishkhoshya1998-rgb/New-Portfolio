import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    role: z.string(),
    services: z.array(z.string()),
    year: z.string(),
    accentColor: z.string(),
    coverImage: z.string().optional(),
    nextProject: z.object({
      title: z.string(),
      slug: z.string(),
    }).optional(),
    parentProject: z.object({
      title: z.string(),
      slug: z.string(),
    }).optional(),
  }),
});

export const collections = { projects };
