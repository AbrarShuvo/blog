import { defineCollection, z } from 'astro:content';

// One article = one Markdown/MDX file in src/content/blog.
// Titles and descriptions are capped here so a page can never ship
// with a title over 60 characters or a description over 160.
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().max(60),
    description: z.string().max(160),
    // Optional on purpose: a draft outline has no publish date yet.
    // Published articles must set pubDate (see WRITING.md).
    pubDate: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    // Path to a cover image in public/, e.g. /og-my-article.png.
    // Omit it and the default cover (/og-cover.png) is used.
    cover: z.string().optional(),
    draft: z.boolean().default(false),
    // URL of the matching portfolio case study or service page.
    portfolioLink: z.string().url().optional(),
  }),
});

export const collections = { blog };
