class EventHandlerClass {
	functionMap = {};

	addEventListener(element, event, func, options = {}) {
		this.functionMap[event] = func;
		
		element.addEventListener(event.split('.')[0], this.functionMap[event], options);
	}

	removeEventListener(element, event) {
		element.removeEventListener(event.split('.')[0], this.functionMap[event]);
		
		delete this.functionMap[event];
	}
}

export const EventHandler = new EventHandlerClass();