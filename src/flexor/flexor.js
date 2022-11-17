/* theme style */
import "./flexor.scss";
/* AOS import */
import AOS from "../gp/lib/aos/aos";
import "../gp/lib/aos/aos.css";

import "@stephane888/wbu-atomique/js/bootstrap/all.js";

import "./headers/header.js";
import "./HeroSection/hero.js";
import "./whyUs/whyUs.js";
import "./AboutSection/about.js";
import "./clientSection/client.js";
import "./serviceSection/service.js";
import "./valueSection/value.js";
import "./testimony/testimony.js";
import "./portfolioSection/portfolio";
import "./teamSection/team";
import "./pricingSection/pricing";
import "./faqSection/faq";
import "./contactSection/contact";
import "./footerSection/footer";
import "./backToTop/top";

window.addEventListener("load", () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false
  });
});
