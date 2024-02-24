import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import mdx from "@astrojs/mdx";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const config = {
  defaultLocale: 'es',
  locales: ['es', 'en', 'cs']
};


// https://astro.build/config
export default defineConfig({
  site: 'https://portfolio.sjeremy.dev',
  compressHTML: false,
  inlineStylesheets: 'never',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: config.defaultLocale,
    locales: config.locales,
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
  integrations: [mdx()]
});