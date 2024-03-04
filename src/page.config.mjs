const locales = {
	es: 'es-ES',
	en: 'en-US'
};

const localesSimple = Object.keys(locales).map((key) => key);

export const pageConfig = {
	site: 'https://portfolio.sjeremy.dev',
	siteName: 'Jeremy\'s Portfolio',
	defaultLocale: 'es',
	locales: locales,
	localesSimple: localesSimple,
	address: 'Madrid Capital, 28013',
	email: 'contact@sjeremy.dev',
	privacy: {
		githubPages: 'https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#data-collection',
		github: 'https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement',
		cloudflare: 'https://www.cloudflare.com/privacypolicy/',
		cloudflare2: 'https://www.cloudflare.com/trust-hub/privacy-and-data-protection/',
	},
	social: {
		twitter: 'https://twitter.com/YoSoyJ3R3MIAS',
		instagram: 'https://www.instagram.com/el_j3r3mias',
		github: 'https://github.com/cima-alfa'
	}
};

export default pageConfig;