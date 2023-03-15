let header = document.querySelector('header');
const elements = document.querySelector('header .navlinks');
const menu = document.querySelectorAll('.menu-btn');
const icon = document.querySelector('#menu-icon i');
// onscroll header animation
window.onscroll = () => {
	if (window.scrollY > 20) {
		header.classList.add('sticky');
	} else {
		header.classList.remove('sticky');
	}
};

// hamburger menu
menu.forEach((element) => {
	element.addEventListener('click', () => {
		elements.classList.toggle('active');
		icon.classList.toggle('active');
	});
});

// swiper
let swipers = new Swiper('.carousel', {
	slidesPerView: 2,
	spaceBetween: 60,
	// slidesPerGroup: 1,
	loop: true,
	loopFillGroupWithBlank: true,
	centerSlide: true,
	fade: true,
	grabCursor: true,
	dynamicBullets: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		1024: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 2,
		},
	},
});
