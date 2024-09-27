import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

document.addEventListener("DOMContentLoaded", () => {
	const indexSwiper = new Swiper(".indexSwiper", {
		modules: [Navigation, Pagination, Autoplay],
		loop: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		autoplay: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
});
