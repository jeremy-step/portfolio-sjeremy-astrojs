import { EventHandler } from './packages/events';
import { Util } from './packages/util';
import { Layout } from './packages/layout';
import { Gallery } from './packages/gallery';

window.EventHandler = EventHandler;
window.Util = Util;
window.Layout = Layout;
window.isSiteLoaded = () => document.querySelector('html').dataset.siteLoaded !== undefined;
window.getMotionStatus = () => document.querySelector('html').dataset.disableMotion === undefined;

window.SiteLoadedEvent = new CustomEvent('siteLoaded', {
	detail: {
		loaded: window.isSiteLoaded
	}
});

window.MotionStatusEvent = new CustomEvent('motionStatus', {
	detail: {
		enabled: window.getMotionStatus,
		disabled: !window.getMotionStatus
	}
});

// let disableMotionTimer = null;

window.addEventListener('load', () => {
	const html = document.querySelector('html');
	
	html.toggleAttribute('data-site-loaded', true);
	
	document.dispatchEvent(window.SiteLoadedEvent);
	
	// disableMotionTimer = setTimeout(() => {
	// 	html.removeAttribute('data-disable-motion');
		
	// 	disableMotionTimer = null;
		
	// 	document.dispatchEvent(window.MotionStatusEvent);
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