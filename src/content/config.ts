import { z, defineCollection } from 'astro:content';

const footerCollection = defineCollection({
	type: 'content',
	schema: z.object({
	  title: z.string()
	})
});

const formsCollection = defineCollection({
	type: 'content'
});

export const collections = {
  	'footer': footerCollection,
	'forms': formsCollection
};