document.addEventListener("DOMContentLoaded", () => {
	const hamburgerMenu = document.getElementById("hamburgerMenu");
	const hamburgerList = document.getElementById("hamburgerList");
	const navbar = document.getElementById("navbar");
	let isMenuOpen = false;

	hamburgerMenu.addEventListener("click", () => {
		isMenuOpen = !isMenuOpen;
		hamburgerMenu.classList.toggle("hamburgerOpen", isMenuOpen);

		if (isMenuOpen) {
			hamburgerList.style.height = `${hamburgerList.scrollHeight}px`;
		} else {
			hamburgerList.style.height = "0";
			navbar.classList.remove("fixed");
		}
	});

	window.addEventListener("resize", () => {
		if (window.innerWidth >= 1200) {
			hamburgerList.style.height = "0";
			hamburgerMenu.classList.remove("hamburgerOpen");
		}
	});

	window.addEventListener("scroll", () => {
		if (window.scrollY > 0 && window.innerWidth < 1200) {
			navbar.classList.remove("relative");
			navbar.classList.add("fixed");
		} else if (window.scrollY <= 0 && window.innerWidth < 1200) {
			navbar.classList.remove("fixed");
			navbar.classList.add("relative");
		}
	});
});
