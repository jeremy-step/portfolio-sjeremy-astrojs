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