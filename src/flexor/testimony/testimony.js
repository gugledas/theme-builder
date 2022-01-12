import "./testimony.html";
import "./testimony.scss";

// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

//import Swiper from "../../gp/lib/vendor/swiper-bundle.min.js";

/**
 * Testimonials slider
 */
new Swiper(".testimonials-slider", {
  speed: 600,
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
  }
});
