import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";

// header swiper
const swiper = new Swiper(".swiperAdoption", {
	// Swiper 配置選項
	slidesPerView: "auto", // 每個 slide 的寬度由內容自動決定
	centeredSlides: true, // 確保當前 slide 居中
	spaceBetween: 20, // Slide 之間的間距
	loop: true, // 循環播放
	autoplay: {
		delay: 2500,
		disableOnInteraction: true,
	},

	breakpoints: {
		768: {
			// 平板
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1400: {
			// 桌面，
			slidesPerView: 2,
			spaceBetween: 20,
		},
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next", // 自定義下一步按鈕
		prevEl: ".swiper-button-prev", // 自定義上一步按鈕
	},
});

// mobile swiper
document.addEventListener("DOMContentLoaded", function () {
	const swiper = new Swiper(".swiper-container", {
		// 可根據需要自定義 Swiper 配置
		loop: true, // 循環模式
		slidesPerView: 1,
		centeredSlides: true,
		// autoplay: {
		// 	delay: 2500, // 自動播放延遲
		// 	disableOnInteraction: false, // 用戶互動後仍可自動播放
		// },
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});
});

// 查看更多
const contentContainer = document.getElementById("contentContainer");
const content = document.getElementById("content");
const toggleButton = document.getElementById("toggleButton");

let isExpanded = false; // 用來追蹤內容是否展開

toggleButton.addEventListener("click", () => {
	if (isExpanded) {
		// 如果已展開，則收起內容
		contentContainer.style.maxHeight = "120px"; // 收起時設置最大高度為 120px
		toggleButton.textContent = "查看更多";
	} else {
		// 如果內容過長，展開顯示
		contentContainer.style.maxHeight = content.scrollHeight + "px"; // 展開時設置為內容的實際高度
		toggleButton.textContent = "取消查看";
	}
	isExpanded = !isExpanded; // 切換狀態
});

// 初始加載時檢查內容高度，並在手機上控制顯示
window.addEventListener("load", () => {
	// 檢查視窗寬度以區分手機與桌面
	if (window.innerWidth < 768) {
		// lg 的斷點是 1024px
		if (content.scrollHeight <= 120) {
			toggleButton.style.display = "none"; // 如果內容沒有超過容器高度，就隱藏 "查看更多" 按鈕
		}
	} else {
		// 在桌面版將顯示全部內容
		contentContainer.style.maxHeight = "none"; // 取消高度限制
		toggleButton.style.display = "none"; // 隱藏按鈕
	}
});

// 當視窗大小改變時自動調整
window.addEventListener("resize", () => {
	if (window.innerWidth >= 768) {
		// 桌面版：直接顯示所有內容並隱藏按鈕
		contentContainer.style.maxHeight = "none";
		toggleButton.style.display = "none";
	} else {
		// 手機版：根據是否展開來設置 max-height
		if (isExpanded) {
			contentContainer.style.maxHeight = content.scrollHeight + "px";
		} else {
			contentContainer.style.maxHeight = "120px"; // 收起時設置最大高度為 120px
		}
		toggleButton.style.display = "block";
	}
});
