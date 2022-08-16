// --- Carousel ---

document.body.onload = () => {
	number = 4;
	position = 0;
	leftButton = document.getElementById('carousel-button-left');
	rightButton = document.getElementById('carousel-button-right');
	container = document.getElementById('carousel-container');

	for (i = 1; i <= number; i++) {
		div = document.createElement('div');
		div.className = 'carousel-img';
		div.style.backgroundImage = "url('/realisations/SE/se-img" + i + ".png')";
		container.appendChild(div);
	}
};

const translateCarouselLeft = () => {
	container.style.transform = 'translateY(-100%)';
	console.log('hello');
	console.log('heLLOoooooooooooooooooooooooo');
};

const translateCarouselRight = () => {
	container.style.transform = 'translateY(100%)';
	console.log('hello');
	console.log('heLLOoooooooooooooooooooooooo');
};

leftButton.onClick = () => {
	container.style.transform = 'translateY(-100%)';
	console.log('hello');
};

rightButton.onClick = () => {
	container.style.transform = 'translateY(-100%)';
	console.log('hello');
};
