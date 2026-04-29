import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    role: z.string(),
    services: z.array(z.string()),
    year: z.string(),
    accentColor: z.string(),
    coverImage: z.union([image(), z.string()]).optional(),
    nextProject: z.object({
      title: z.string(),
      slug: z.string(),
    }).optional(),
    parentProject: z.object({
      title: z.string(),
      slug: z.string(),
    }).optional(),

    /* ── Versioning helpers ────────────────────────────────
       Pattern for swapping a case-study version:
         1. On the old file: add `draft: true` (route disappears)
         2. On the new file: add `urlSlug: "<old-slug>"` (claims old URL)
         3. If the new file renders its own hero in MDX, add `customHero: true`
       Filenames stay stable — the slug override controls the URL.
       Note: the field is `urlSlug` (not `slug`) because Astro's glob loader
       reserves a top-level `slug` field for the entry ID.
       ──────────────────────────────────────────────────── */

    /** When true, the project is excluded from the dynamic route (URL 404s). */
    draft: z.boolean().optional(),
    /** Override the URL slug. Defaults to the file basename when omitted. */
    urlSlug: z.string().optional(),
    /** When true, the layout's default hero is suppressed and the MDX is expected to render its own hero. */
    customHero: z.boolean().optional(),
  }),
});

export const collections = { projects };
