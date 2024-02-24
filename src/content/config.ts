import { z, defineCollection } from 'astro:content';

const footerCollection = defineCollection({
  	type: 'content',
  	schema: z.object({
    	title: z.string()
  	})
});

export const collections = {
  	'footer': footerCollection,
};