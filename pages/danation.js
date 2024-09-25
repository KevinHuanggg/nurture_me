document.addEventListener("DOMContentLoaded", function () {
	const menuButton = document.getElementById("menu-button");
	const dropdownMenu = document.getElementById("dropdown-menu");

	// Initially hide the dropdown menu
	dropdownMenu.style.display = "none";

	// Toggle dropdown visibility on button click with smooth animation
	menuButton.addEventListener("click", function () {
		const isMenuVisible = dropdownMenu.style.display === "block";
		if (isMenuVisible) {
			dropdownMenu.style.opacity = "0";
			dropdownMenu.style.transform = "scale(0.95)";
			setTimeout(() => {
				dropdownMenu.style.display = "none";
			}, 300); // Match the duration of transition
		} else {
			dropdownMenu.style.display = "block";
			setTimeout(() => {
				dropdownMenu.style.opacity = "1";
				dropdownMenu.style.transform = "scale(1)";
			}, 10); // Delay to ensure transition is applied
		}
	});

	// Close dropdown when clicking outside of it
	document.addEventListener("click", function (event) {
		if (
			!menuButton.contains(event.target) &&
			!dropdownMenu.contains(event.target)
		) {
			dropdownMenu.style.opacity = "0";
			dropdownMenu.style.transform = "scale(0.95)";
			setTimeout(() => {
				dropdownMenu.style.display = "none";
			}, 300);
		}
	});
});
