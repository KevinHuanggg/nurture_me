//下拉式選單互動效果

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

// 捐款項目點擊切換效果

document.addEventListener("DOMContentLoaded", function () {
	const links = document.querySelectorAll("#donation_list li a");

	// 預設第一個項目 active
	links[0].parentElement.classList.add("active");

	// 監聽每個連結點擊事件
	links.forEach(link => {
		link.addEventListener("click", function (event) {
			event.preventDefault(); // 阻止頁面跳轉

			// 移除所有項目的 active 樣式
			links.forEach(a => {
				a.parentElement.classList.remove("active");
				const h2 = a.querySelector("h2");
				if (h2) {
					// 確認 h2 存在
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
