import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Guides migrated from the legacy Jekyll tutorials site (use-cases + blog posts).
 * Frontmatter is permissive — the legacy files carry extra fields (permalink,
 * canonical_url, neuronwriter_*) that we simply carry along.
 */
const resources = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/resources" }),
  schema: z
    .object({
      title: z.string().optional(),
      description: z.string().optional(),
      date: z.union([z.string(), z.date()]).optional(),
      tags: z.array(z.string()).optional(),
      categories: z.union([z.string(), z.array(z.string())]).optional(),
      target_keyword: z.string().optional(),
      persona: z.string().optional(),
      content_type: z.string().optional(),
      actor_slug: z.string().optional(),
      actor_url: z.string().optional(),
    })
    .passthrough(),
});

export const collections = { resources };
