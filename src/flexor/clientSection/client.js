import "./client.html";
import "./client.scss";
// import Swiper bundle with all modules installed
import Swiper from "../../gp/lib/vendor/swiper-bundle.min";

/**
 * Clients Slider
 */
new Swiper(".clients-slider", {
  speed: 400,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 60
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 80
    },
    992: {
      slidesPerView: 6,
      spaceBetween: 120
    }
  }
});
