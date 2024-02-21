class UtilClass {
	stringifyJson(string) {
		try {
			return JSON.stringify(string);
		} catch (e) { }
	
		return undefined;
	}

	parseJson(string) {
		try {
			return JSON.parse(string);
		} catch (e) { }
	
		return undefined;
	}

	prefersReducedMotion() {
		const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
	
		return (mediaQuery && mediaQuery.matches);
	}
}

export const Util = new UtilClass;

document.addEventListener('keydown', (event) => {
	if (event.target.matches('[role="button"]') && (event.key === 'Enter' || event.key === ' ')) {
		event.target.closest('[role="button"]').click();
	}
});