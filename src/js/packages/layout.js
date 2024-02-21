import { Util } from './util';

class LayoutClass {
	setSetting(key, value) {
		let settings = Util.parseJson(localStorage.getItem('layout-settings'));

		if (!settings || typeof settings !== 'object') {
			settings = {};
		}

		settings[key] = value;

		localStorage.setItem('layout-settings', Util.stringifyJson(settings));
	}

	getSetting(key) {
		const settings = Util.parseJson(localStorage.getItem('layout-settings'));

		if (!settings || typeof settings !== 'object' || settings[key] === undefined) {
			return undefined;
		}

		return settings[key];
	}

	deleteSetting(key) {
		let settings = Util.parseJson(localStorage.getItem('layout-settings'));

		if (!settings || typeof settings !== 'object' || settings[key] === undefined) {
			return;
		}
		
		delete settings[key];

		localStorage.setItem('layout-settings', Util.stringifyJson(settings));
	}

	getBreakpoint(breakpoint) {
		breakpoint = window.getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-' + breakpoint);
	
		return parseInt(breakpoint, 10);
	}

	init() {
		this.togglePrimaryNav();
	}

	togglePrimaryNav() {
		const primaryNav = document.querySelector('.primary-nav--list');
		const primaryNavButton = document.querySelector('.primary-nav--button');

		primaryNavButton.addEventListener('click', () => {
			let isOpened = primaryNavButton.getAttribute('aria-expanded') === 'true';
	
			primaryNavButton.setAttribute('aria-expanded', (!isOpened).toString());
	
			if (!isOpened) {
				primaryNav.setAttribute('data-status', 'opened');
			} else {
				primaryNav.setAttribute('data-status', 'closing');
	
				primaryNav.addEventListener('animationend', () => {
					primaryNav.setAttribute('data-status', 'closed');
				}, { once: true });
			}
		});
	}
}

export const Layout = new LayoutClass;