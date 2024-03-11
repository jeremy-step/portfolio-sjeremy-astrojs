import { pageConfig } from "./page.config.mjs";

export const i18n = {
	es: {
		metaKeywords: 'desarrollador web, sitios web impresionantes y funcionales, HTML, CSS, JavaScript, PHP, MySQL, administrador servidores plesk linux, Madrid, España',
		menu: 'Menú',
		pages: {
			home: { text: 'Inicio', title: 'Página principal' },
			projects: { text: 'Mis proyectos', title: 'El trabajo que he hecho' },
			contact: { text: 'Contacto', title: 'Ponte en contacto conmigo' },
			tos: { text: 'Términos de servicio', title: 'Los términos de uso del sitio web' },
			privacy: { text: 'Política de privacidad', title: 'Cómo tratamos su privacidad' },
			cookies: { text: 'Uso de cookies', title: 'Qué cookies usamos' },
		},
		privacy: {
			githubPages: 'Política de privacidad de GitHub Pages',
			github: 'Política de privacidad de GitHub',
			cloudflare: 'Política de privacidad de Cloudflare',
			cloudflare2: 'Privacidad y protección de datos de Cloudflare',
		},
		licenses: {
			website: 'Sitio web',
			license: 'Licencia',
			assetsLicenses: 'Licencias de archivos',
			iconsLicenses: 'Licencias de iconos',
			brandsGuidelines: 'Directrices de marcas',
			assets: {
				unsplash: { website: 'Sitio web de Unsplash', license: 'Licencia de Unsplash'},
			},
			icons: {
				fontAwesome: { website: 'Sitio web de Font Awesome', license: 'Licencia de Font Awesome'},
				simpleIcons: { website: 'Sitio web de Simple Icons', license: 'Licencia de Simple Icons'},
				devicons: { website: 'Sitio web de Devicons', license: 'Licencia de Devicons'},
				bootstrapIcons: { website: 'Sitio web de Bootstrap Icons', license: 'Licencia de Bootstrap Icons'},
			},	
			brands: {
				twitter: 'X / Twitter - Directrices de marca',
				github: 'GitHub - Directrices de marca',
				instagram: 'Instagram - Directrices de marca',
				astro: 'Astro - Directrices de marca',
				nette: 'Nette - Directrices de marca',
				plesk: 'Plesk - Directrices de marca',
				sass: 'SASS - Directrices de marca',
				php: 'PHP - Directrices de marca',
				mariadb: 'MariaDB - Directrices de marca',
			}
		},
		name: 'Nombre',
		surname: 'Apellido(s)',
		email: 'Correo electrónico',
		message: 'Mensaje',
		accept: 'Acepto',
		sendMessage: 'Enviar mensaje'
	},

	en: {
		metaKeywords: 'web developer, awesome and functional websites, HTML, CSS, JavaScript, PHP, MySQL, plesk linux servers administrator, Madrid, Spain',
		menu: 'Menu',
		pages: {
			home: { text: 'Home', title: 'Starting page' },
			projects: { text: 'My projects', title: 'My work till now' },
			contact: { text: 'Contact', title: 'Contact me here' },
			tos: { text: 'Terms of service', title: 'Terms of service of this website' },
			privacy: { text: 'Privacy policy', title: 'How we treat your privacy' },
			cookies: { text: 'Cookies policy', title: 'Which cookies we use' },
		},
		privacy: {
			githubPages: 'GitHub Pages privacy policy',
			github: 'GitHub privacy policy',
			cloudflare: 'Cloudflare privacy policy',
			cloudflare2: 'Cloudflare privacy and data protection',
		},
		licenses: {
			website: 'Website',
			license: 'License',
			assetsLicenses: 'Assets Licenses',
			iconsLicenses: 'Icons Licenses',
			brandsGuidelines: 'Brands Guidelines',
			assets: {
				unsplash: { website: 'Unsplash website', license: 'Unsplash license'},
			},
			icons: {
				fontAwesome: { website: 'Font Awesome website', license: 'Font Awesome license'},
				simpleIcons: { website: 'Simple Icons website', license: 'Simple Icons license'},
				devicons: { website: 'Devicons website', license: 'Devicons license'},
				bootstrapIcons: { website: 'Bootstrap Icons website', license: 'Bootstrap Icons license'},
			},	
			brands: {
				twitter: 'X / Twitter - Brand guidelines',
				github: 'GitHub - Brand guidelines',
				instagram: 'Instagram - Brand guidelines',
				astro: 'Astro - Brand guidelines',
				nette: 'Nette - Brand guidelines',
				plesk: 'Plesk - Brand guidelines',
				sass: 'SASS - Brand guidelines',
				php: 'PHP - Brand guidelines',
				mariadb: 'MariaDB - Brand guidelines',
			}
		},
		name: 'Name',
		surname: 'Surname',
		email: 'E-Mail',
		message: 'Message',
		accept: 'I accept',
		sendMessage: 'Send message'
	}
	
};

export function translate(locale, path) {
	const translate = (translation) => {
		path = path.split('.');
		translation = translation[path[0]];
		path.shift();
		path = path.join('.');
		
		return (typeof translation !== 'string') ? translate(translation) : translation;
	};

	return translate(i18n[locale]);
};

export function getCurrentLocale(Astro) {
	return Astro.currentLocale ?? pageConfig.defaultLocale;
};