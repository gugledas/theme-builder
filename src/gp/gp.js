// import lib
import "./lib/vendor/swiper-bundle.min.css";
import AOS from "./lib/aos/aos";
import "@stephane888/wbu-atomique/js/bootstrap/all.js";

//load html sections
import "./hero/hero.js";
import "./text-left--img-right/text-left--img-right.js";
import "./clients-logos/clients-logos";
import "./features-section/features-section.html";
import "./services-section/services-section.html";
import "./cta-section/cta-section.html";
import "./portfolio-section/portfolio-section";
import "./counts-section/counts-section.js";
import "./testimonials-section/testimonials-section";
import "./team-section/team-section.html";
import "./contact-section/contact-section";
import "./footer/footer.html";

//style for sections
import "./gp.scss";
// general style
/**
 * Animation on scroll
 */
window.addEventListener("load", () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false
  });
});
