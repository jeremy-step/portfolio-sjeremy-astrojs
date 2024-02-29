import { pageConfig } from './src/page.config.mjs';
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// https://astro.build/config
export default defineConfig({
  site: pageConfig.site,
  compressHTML: false,
  inlineStylesheets: 'never',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: pageConfig.defaultLocale,
    locales: pageConfig.locales,
    routing: {
      prefixDefaultLocale: false
    }
  },
  vite: {
    resolve: {
      alias: {
        '@/': `${path.resolve(__dirname, 'src')}/`
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
						@import "@/scss/inc/defaults/vars-sass";
						@import "@/scss/inc/mixins";
					`
        }
      }
    }
  },
  integrations: [mdx(), react()]
});