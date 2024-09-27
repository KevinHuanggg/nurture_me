document.addEventListener("DOMContentLoaded", function () {
	const menuButton = document.getElementById("menu-button");
	const dropdownMenu = document.getElementById("dropdown-menu");
	const links = document.querySelectorAll("#donation_list li a");

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

	// 預設第一個捐贈項目 active
	links[0].parentElement.classList.add("active");

	// 點擊切換捐贈項目效果
	links.forEach(link => {
		link.addEventListener("click", function (event) {
			event.preventDefault();

			// 移除所有項目的 active 樣式
			links.forEach(a => {
				a.parentElement.classList.remove("active");
				const h2 = a.querySelector("h2");
				if (h2) {
					h2.classList.add("opacity-70");
				}
			});

			// 為當前點擊的項目添加 active 樣式
			this.parentElement.classList.add("active");
			const h2 = this.querySelector("h2");
			if (h2) {
				h2.classList.remove("opacity-70");
			}
		});
	});
});

//手機板切換對應區塊功能

document.addEventListener("DOMContentLoaded", function () {
	const buttons = document.querySelectorAll("#dropdown-menu button");
	const sections = document.querySelectorAll(".content-section");

	buttons.forEach(button => {
		button.addEventListener("click", function () {
			// 隱藏所有區塊
			sections.forEach(section => section.classList.add("hidden"));

			// 顯示當前點擊項目對應的區塊
			const target = this.getAttribute("data-target");
			document.getElementById(target).classList.remove("hidden");
		});
	});
});

//捉機板切換對應區塊功能

document.addEventListener("DOMContentLoaded", function () {
	const links = document.querySelectorAll("#donation_list li");
	const sections = document.querySelectorAll(".content-section");

	links.forEach(link => {
		link.addEventListener("click", function () {
			// 隱藏所有區塊
			sections.forEach(section => section.classList.add("hidden"));

			// 顯示當前點擊項目對應的區塊
			const target = this.getAttribute("data-target");
			document.getElementById(target).classList.remove("hidden");
		});
	});
});
