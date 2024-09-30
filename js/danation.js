import "swiper/swiper-bundle.css";

document.addEventListener("DOMContentLoaded", function () {
	const menuButton = document.getElementById("menu-button");
	const dropdownMenu = document.getElementById("dropdown-menu");
	const links = document.querySelectorAll("#donation_list li a");
	const buttons = document.querySelectorAll("#dropdown-menu button");
	const sections = document.querySelectorAll(".content-section");

	// 用於追蹤當前顯示的區塊
	let currentSection = "food_block";

	// 下拉選單初始設置
	dropdownMenu.style.display = "none";
	menuButton.addEventListener("click", function () {
		const isMenuVisible = dropdownMenu.style.display === "block";
		if (isMenuVisible) {
			dropdownMenu.style.opacity = "0";
			dropdownMenu.style.transform = "scale(0.95)";
			setTimeout(() => {
				dropdownMenu.style.display = "none";
			}, 300);
		} else {
			dropdownMenu.style.display = "block";
			setTimeout(() => {
				dropdownMenu.style.opacity = "1";
				dropdownMenu.style.transform = "scale(1)";
			}, 10);
		}
	});

	// 點擊頁面其他地方關閉下拉選單
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

	// 更新顯示區塊
	function showSection(sectionId) {
		sections.forEach(section => section.classList.add("hidden"));
		document.getElementById(sectionId).classList.remove("hidden");
	}

	// 更新選單按鈕文字
	function updateMenuButtonText(sectionId) {
		const selectedButton = Array.from(buttons).find(
			button => button.getAttribute("data-target") === sectionId
		);
		if (selectedButton) {
			menuButton.querySelector("p").textContent =
				selectedButton.textContent;
		}
	}

	// 更新桌機版 active 樣式
	function updateDesktopActive(sectionId) {
		links.forEach(a => {
			a.parentElement.classList.remove("active");
			const h2 = a.querySelector("h2");
			if (h2) {
				h2.classList.add("opacity-70");
			}
			if (a.parentElement.getAttribute("data-target") === sectionId) {
				a.parentElement.classList.add("active");
				if (h2) {
					h2.classList.remove("opacity-70");
				}
			}
		});
	}

	// 預設第一個捐贈項目 active
	links[0].parentElement.classList.add("active");

	// 手機板切換對應區塊功能
	buttons.forEach(button => {
		button.addEventListener("click", function () {
			// 更新區塊顯示
			currentSection = this.getAttribute("data-target");
			showSection(currentSection);

			// 隱藏下拉選單
			dropdownMenu.style.opacity = "0";
			dropdownMenu.style.transform = "scale(0.95)";
			setTimeout(() => {
				dropdownMenu.style.display = "none";
			}, 300);

			// 更新按鈕文字為所選的選項
			updateMenuButtonText(currentSection);

			// 同步桌機版 active 樣式
			updateDesktopActive(currentSection);
		});
	});

	// 桌機板切換對應區塊功能
	links.forEach(link => {
		link.addEventListener("click", function (event) {
			event.preventDefault();

			// 更新區塊顯示
			currentSection = this.parentElement.getAttribute("data-target");
			showSection(currentSection);

			// 同步桌機版 active 樣式
			updateDesktopActive(currentSection);

			// 更新選單按鈕文字同步手機版
			updateMenuButtonText(currentSection);
		});
	});
});
