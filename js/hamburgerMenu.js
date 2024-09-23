document.addEventListener("DOMContentLoaded", () => {
	const hamburgerMenu = document.getElementById("hamburgerMenu");
	const hamburgerList = document.getElementById("hamburgerList");
	let isMenuOpen = false;

	hamburgerMenu.addEventListener("click", () => {
		isMenuOpen = !isMenuOpen;
		hamburgerMenu.classList.toggle("hamburgerOpen", isMenuOpen);

		if (isMenuOpen) {
			hamburgerList.style.height = `${hamburgerList.scrollHeight}px`;
		} else {
			hamburgerList.style.height = "0";
		}
	});

	window.addEventListener("resize", () => {
		if (window.innerWidth >= 1280) {
			hamburgerList.style.height = "0";
			hamburgerMenu.classList.remove("hamburgerOpen");
		}
	});
});
