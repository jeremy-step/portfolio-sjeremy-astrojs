import { EventHandler } from './packages/events';
import { Util } from './packages/util';
import { Layout } from './packages/layout';
import { Gallery } from './packages/gallery';

window.EventHandler = EventHandler;
window.Util = Util;
window.Layout = Layout;

// let disableMotionTimer = null;

// function setDisableMotionElements(value) {
// 	document.querySelectorAll('[data-disable-motion]').forEach(element => {
// 		element.setAttribute('data-disable-motion', value);
// 	});
// }

window.addEventListener('load', () => {
	const html = document.querySelector('html');
	
	html.toggleAttribute('data-site-loaded', true);
	
	// disableMotionTimer = setTimeout(() => {
	// 	setDisableMotionElements(false);
		
	// 	disableMotionTimer = null;
	// }, 100);
});

document.addEventListener('DOMContentLoaded', () => {
	Layout.init();
	Gallery.init();
	
	// window.addEventListener('resize', () => {
	// 	const html = document.querySelector('html');
	
	// 	if (disableMotionTimer) {
	// 		clearTimeout(disableMotionTimer);
	
	// 		disableMotionTimer = null;
	// 	} else {
	// 		//html.toggleAttribute('data-disable-motion');

	// 		document.dispatchEvent(window.MotionStatusEvent);
	// 	}
	
	// 	disableMotionTimer = setTimeout(() => {
	// 		html.removeAttribute('data-disable-motion');
			
	// 		disableMotionTimer = null;

	// 		document.dispatchEvent(window.MotionStatusEvent);
	// 	}, 100);
	// }, { passive: true });
});