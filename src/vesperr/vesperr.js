// chargement des lib js //

import "./lib/vendor/swiper-bundle.min.css";
import "./lib/purecounter/purecounter";
import "./lib/aos/aos";
import "./lib/glightbox/js/glightbox";
import "./lib/js/main";
import AOS from "./lib/aos/aos";

// == importations des section du theme === //

import "./headers/header.js";
import "./HeroSection/hero.js";
import "./ClientSection/client.js";
import "./AboutSection/about.js";
import "./CountsSection/count.js";
import "./ServicesSection/services.js";
import "./MoreServicesSection/more.js";
import "./FeatureSection/feature.js";
import "./TestimonialSection/testimonial.js";
import "./PortofolioSection/portofolio.js";
import "./TeamSection/team.js";
import "./PriceSection/price.js";
import "./FaqSection/faq.js";
import "./ContactSection/contact.js";
//import "./FooterSection/footer.js";
//import "./bac-to-top/bac-top";
// == importation des scss par défaut == //

import "./vesperr.scss";

/**
 * animation on scroll
 */
window.addEventListener("load", () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false
  });
});
