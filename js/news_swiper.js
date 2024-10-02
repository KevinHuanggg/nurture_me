import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

var swiper = new Swiper(".mySwiper", {
  modules: [Pagination, Navigation, Autoplay],  // 啟用所需模塊
  loop: true,  // 讓輪播循環
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      // 獲取螢幕寬度
      const screenWidth = window.innerWidth;
  
      // 根據螢幕寬度設置不同的大小
      if (screenWidth > 992) { 
        return '<span class="' + className + '" style="width: 16px; height: 16px; background-color: #7782B8;"></span>';
      } else { 
        return '<span class="' + className + '" style="width: 8px; height: 8px; background-color: #7782B8;"></span>';
      }
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
  delay: 4000,
  }
});


var swiper = new Swiper(".news-swiper", {
  modules: [Pagination, Navigation, Autoplay],  // 啟用所需模塊
  loop: true,  // 讓輪播循環
  pagination: {
    el: ".custom-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '" style="width: 8px; height: 8px; background-color: #7782B8;"></span>';
    }
  },
  navigation: {
    nextEl: ".custom-button-next",
    prevEl: ".custom-button-prev",
  },
  autoplay: {
  delay: 4000,
  }
});
