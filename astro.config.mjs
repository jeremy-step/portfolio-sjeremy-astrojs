import { defineConfig } from 'astro/config';
import { NEVER } from 'astro/zod';

// https://astro.build/config
export default defineConfig({
	site: 'https://portfolio.sjeremy.dev',
	compressHTML: false,
	trailingSlash: NEVER
});
