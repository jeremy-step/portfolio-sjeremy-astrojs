import { EventHandler } from './events';

class GalleryClass {
	gallery = document.querySelector('.gallery');
	galleryImages = this.gallery ? this.gallery.querySelectorAll('.gallery-image') : [];
	popupHtml = `
		<div class="gallery-popup--image">
			<img src="" alt="Leer la descripción de la imagen" tabindex="0" role="button" aria-describedby="gallery-popup-description">
			<p class="gallery-popup--description" id="gallery-popup-description"></p>
		</div>
		<button class="gallery-popup--button" data-popup-function="next" aria-label="Siguiente imagen"></button>
		<button class="gallery-popup--button" data-popup-function="prev" aria-label="Imagen anterior"></button>
		<button class="gallery-popup--button" data-popup-function="close" aria-label="Cerrar galería"></button>
	`;
	currentIndex = 0;

	popupShow(index) {
		this.popupClose();

		this.currentIndex = index;

		const popup = document.createElement('div');

		popup.classList.add('gallery-popup');
		popup.setAttribute('tabindex', 0);
		popup.setAttribute('role', 'region');
		popup.setAttribute('aria-label', 'Galería');
		popup.innerHTML = this.popupHtml;

		document.body.appendChild(popup);

		const popupClose = popup.querySelector('.gallery-popup--button[data-popup-function="close"]');
		const popupPrev = popup.querySelector('.gallery-popup--button[data-popup-function="prev"]');
		const popupNext = popup.querySelector('.gallery-popup--button[data-popup-function="next"]');

		this.popupUpdate(this.currentIndex, popup);

		popup.focus();

		popupClose.addEventListener('click', () => this.popupClose());
		popupPrev.addEventListener('click', () => this.popupPrev(popup));
		popupNext.addEventListener('click', () => this.popupNext(popup));

		EventHandler.addEventListener(document, 'keydown.gallery-popup', (event) => {
			if (event.key === 'Escape') {
				this.popupClose();
			}

			if (event.key === 'ArrowLeft' || event.key === 'a' || event.key === 'A') {
				this.popupPrev(popup);
			}

			if (event.key === 'ArrowRight' || event.key === 'd' || event.key === 'D') {
				this.popupNext(popup);
			}
		});

		let touchStartX;
		let touchEndX;

		popup.addEventListener('touchstart', (event) => {
			touchStartX = event.changedTouches[0].screenX;
		}, { passive: false });

		popup.addEventListener('touchmove', (event) => {
			event.preventDefault();
		}, { passive: false });

		popup.addEventListener('touchend', (event) => {
			touchEndX = event.changedTouches[0].screenX;

			let touchLength = touchStartX - touchEndX;

			if (touchLength < 0) {
				touchLength *= -1;
			}

			if (touchEndX < touchStartX && touchLength >= 75) {
				this.popupNext(popup);
			}
		
			if (touchEndX > touchStartX && touchLength >= 75) {
				this.popupPrev(popup);
			}
		}, { passive: false });
	}

	popupUpdate(index, popup) {
		const popupImage = popup.querySelector('.gallery-popup--image img');
		const popupDescription = popup.querySelector('.gallery-popup--description');

		const currentImage = this.galleryImages[index].querySelector('img');

		popupImage.src = currentImage.dataset.popupSrc;
	
		const currentDescription = this.galleryImages[index].querySelector('.gallery-image--description');

		popupDescription.textContent = currentDescription ? currentDescription.textContent : currentImage.alt;
	}

	popupClose() {
		document.querySelectorAll('.gallery-popup').forEach((element) => {
			element.remove();
		});

		EventHandler.removeEventListener(document, 'keydown.gallery-popup');
	}

	popupPrev(popup) {
		this.currentIndex = this.currentIndex === 0 ? this.galleryImages.length - 1 : this.currentIndex - 1;

		this.popupUpdate(this.currentIndex, popup);
	}

	popupNext(popup) {
		this.currentIndex = this.currentIndex === this.galleryImages.length - 1 ? 0 : this.currentIndex + 1;

		this.popupUpdate(this.currentIndex, popup);
	}

	init() {
		this.galleryImages.forEach((image, index) => {
			image.addEventListener('click', () => {
				this.popupShow(index);
			});
		});
	}
}

export const Gallery = new GalleryClass;