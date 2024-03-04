import { pageConfig } from './src/page.config.mjs';
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
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
    locales: pageConfig.localesSimple,
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
  integrations: [
		mdx(), 
		react(), 
		sitemap({
			filter: (page) => {
				// if (page.search(new RegExp(pageConfig.site + '/en/.*$')) !== -1) {
				// 	return false;
				// }

				if (page.search(new RegExp(pageConfig.site + '/(.{2}/)?(tos|privacy)/$')) !== -1) {
					return false;
				}

				return true;
			},
			i18n: {
				defaultLocale: pageConfig.defaultLocale,
				locales: pageConfig.locales,
			},
		})
	]
});