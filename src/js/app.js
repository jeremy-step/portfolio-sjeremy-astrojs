import { EventHandler } from './packages/events';
import { Util } from './packages/util';
import { Layout } from './packages/layout';
import { Gallery } from './packages/gallery';

window.EventHandler = EventHandler;
window.Util = Util;
window.Layout = Layout;

let disableMotionTimer = null;

window.addEventListener('load', () => {
	const html = document.querySelector('html');

	html.toggleAttribute('data-site-loaded', true);
	
	disableMotionTimer = setTimeout(() => {
		html.removeAttribute('data-disable-motion');

		disableMotionTimer = null;
	}, 0);
});

document.addEventListener('DOMContentLoaded', () => {
	Layout.init();
	Gallery.init();
	
	window.addEventListener('resize', () => {
		const html = document.querySelector('html');
	
		if (disableMotionTimer) {
			clearTimeout(disableMotionTimer);
	
			disableMotionTimer = null;
		} else {
			html.toggleAttribute('data-disable-motion');
		}
	
		disableMotionTimer = setTimeout(() => {
			html.removeAttribute('data-disable-motion');
	
			disableMotionTimer = null;
		}, 100);
	}, { passive: true });
});