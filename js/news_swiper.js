import { Autoplay } from "swiper/modules";

var swiper = new Swiper(".mySwiper", {
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
    //autoplay:{
      //delay: 4000,
    //}
  });
