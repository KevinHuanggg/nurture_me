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
      return '<span class="' + className + '" style="width: 16px; height: 16px; background-color: #7782B8;"></span>';
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //autoplay: {
  //  delay: 4000,
  //}
});
