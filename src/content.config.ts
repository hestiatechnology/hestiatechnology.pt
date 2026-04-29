import { defineCollection, z } from "astro:content";

const legalCollection = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  legal: legalCollection,
  blog: blogCollection,
};