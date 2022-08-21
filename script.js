// --- Preloader ---

const loader = document.querySelector('.preloader');
window.addEventListener('load', vanish);

function vanish() {
	setTimeout(() => {
		loader.style.display = 'none';
	}, 1000);
}

// --- Navbar ---

window.addEventListener('scroll', () => {
	const navbar = document.querySelector('.navbar');
	navbar.classList.toggle('sticky', window.scrollY > 0);
});

// --- Carousels ---

const buttons = document.querySelectorAll('[data-carousel-button]');

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
		const slides = button.closest('[data-carousel]').querySelector('[data-slides]');

		const activeSlide = slides.querySelector('[data-active]');
		let newIndex = [...slides.children].indexOf(activeSlide) + offset;
		if (newIndex < 0) newIndex = slides.children.length - 1;
		if (newIndex >= slides.children.length) newIndex = 0;

		slides.children[newIndex].dataset.active = true;
		delete activeSlide.dataset.active;
	});
});

// --- Pop-up image ---

const images = document.querySelectorAll('.carousel-container img');

images.forEach((image) => {
	image.onclick = () => {
		document.querySelector('.popup-img').style.display = 'block';
		document.querySelector('.popup-img img').src = image.closest('.realisations-top-carousel')
			? document.querySelector('[data-active] img').getAttribute('src')
			: document.querySelector('.realisations-bottom-carousel [data-active] img').getAttribute('src');
	};
});

document.querySelector('.popup-img span').onclick = () => {
	document.querySelector('.popup-img').style.display = 'none';
};
