import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

document.addEventListener("DOMContentLoaded", () => {
	const commonConfig = {
		loop: true,
		spaceBetween: 24,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
	};

	const teamSwiperConfig = {
		...commonConfig,
		modules: [Navigation, Pagination, Autoplay],
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
			},
			1400: {
				slidesPerView: 3,
			},
		},
	};

	const storySwiperConfig = {
		...commonConfig,
		modules: [Pagination, Autoplay],
		breakpoints: {
			768: {
				slidesPerView: 2,
			},
			1400: {
				slidesPerView: 4,
			},
		},
	};

	const teamSwiper = new Swiper(".teamSwiper", teamSwiperConfig);
	const storySwiper = new Swiper(".storySwiper", storySwiperConfig);
});
