import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const issues = defineCollection({
  // Load Markdown and MDX files in the `src/content/issues/` directory.
  loader: glob({ base: "./src/content/issues", pattern: "**/[^_]*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      issue: z.string(),
      summary: z.string(),
      // Transform string to Date object
      date: z.string(),
      coverSrc: z.optional(image()),
    }),
});

export const collections = { issues };
