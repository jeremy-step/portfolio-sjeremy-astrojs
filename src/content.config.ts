import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const timeline = defineCollection({
    loader: glob({ pattern: "*/*.mdx", base: "./src/content/timeline" }),
    schema: ({ image }) =>
        z
            .looseObject({
                image: image().nullish(),
                title: z.string(),
                date: z.string(),
                featured: z.boolean().nullish(),
                link: z.url().nullish(),
                linkDisplay: z.string().nullish(),
                imageLoading: z.enum(["lazy", "eager"]).nullish(),
                technologies: z.string().nullish(),
            })
            .refine((data) => (data.link && data.linkDisplay) || !data.link, {
                message: "When link is set, Link Display is required",
                path: ["linkDisplay"],
            }),
});

const footer = defineCollection({
    loader: glob({ pattern: "*/*.mdx", base: "./src/content/footer" }),
    schema: z.object({
        title: z.string(),
    }),
});

const forms = defineCollection({
    loader: glob({ pattern: "*/**/*.mdx", base: "./src/content/forms" }),
});

export const collections = { timeline, footer, forms };
