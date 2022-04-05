//import "./section/header/header.js";
// import "./footer/footer";
// import "./contact/contact";
// import "./contactV2/contact";
// import "./faq/faq";
// import "./404/404";
// import "./term-condition/term";
// import "./brand-carousel/carousel";
// import "./recent-vue/recent";
// import "./full-banner/banner";
// import "./product-carousel/product";
// import "./banner/banner";
// import "./deals-and-tabs/deal";
// import "./slider-section/slider";
//import "./side-bar-nav/sidebar";

//import "./section/top-bar/top-bar";
//pages
import "./pages/home3";
//shop
// import "./shop/wishlist/wishlist";
// import "./shop/track-your-code/track";
// import "./shop/aside-latest-product/latest";
// import "./shop/single-product-body/single";
// import "./shop/single-product-tab/single";
// import "./shop/related-prduct/related";
// import "./shop/filters/filters";
//

// CSS Implementing Plugins
import "./assets/vendor/font-awesome/css/fontawesome-all.min.css";
import "./assets/css/font-electro.css";

import "./assets/vendor/animate.css/animate.min.css";
import "./assets/vendor/hs-megamenu/src/hs.megamenu.css";
import "./assets/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar";
import "./assets/vendor/fancybox/jquery.fancybox.css";
import "./assets/vendor/slick-carousel/slick/slick.css";
import "./assets/vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import "./assets/scss/theme.scss";

// import "./assets/vendor/font-awesome/css/fontawesome-all.min.css";
// import "./assets/css/font-electro.css";
// import "./assets/vendor/animate.css/animate.min.css";
//import "./assets/vendor/hs-megamenu/src/hs.megamenu.css";
//import "./assets/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css";
// import "./assets/vendor/fancybox/jquery.fancybox.css";
// import "./assets/vendor/slick-carousel/slick/slick.css";
// import "./assets/vendor/bootstrap-select/dist/css/bootstrap-select.min.css";

// JS Global Compulsory
//import "./assets/vendor/jquery/dist/jquery.min.js";
//import "jquery-migrate";
import $ from "jquery";
import "./assets/vendor/jquery-migrate/dist/jquery-migrate.min.js";
import "./assets/vendor/popper.js/dist/umd/popper.min.js";
//bootstrap
//import "bootstrap";
import "@stephane888/wbu-atomique/js/bootstrap/all.js";
//import "./assets/vendor/bootstrap/bootstrap.min.js";
//<!-- JS Implementing Plugins -->
import "./assets/vendor/appear.js";
import "./assets/vendor/jquery.countdown.min.js";
import "./assets/vendor/hs-megamenu/src/hs.megamenu.js";
import "./assets/vendor/svg-injector/dist/svg-injector.min.js";
import "./assets/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js";
import "./assets/vendor/jquery-validation/dist/jquery.validate.min.js";
import "./assets/vendor/fancybox/jquery.fancybox";
import "./assets/vendor/typed.js/lib/typed.min.js";
import "./assets/vendor/slick-carousel/slick/slick.js";
import "./assets/vendor/bootstrap-select/dist/js/bootstrap-select.min.js";

//    <!-- JS Electro -->
import "./assets/js/hs.core.js";
import "./assets/js/components/hs.countdown.js";
import "./assets/js/components/hs.header.js";
import "./assets/js/components/hs.hamburgers.js";
import "./assets/js/components/hs.focus-state.js";
import "./assets/js/components/hs.malihu-scrollbar.js";
import "./assets/js/components/hs.unfold.js";
import "./assets/js/components/hs.validation.js";
import "./assets/js/components/hs.fancybox.js";
import "./assets/js/components/hs.onscroll-animation.js";
import "./assets/js/components/hs.slick-carousel.js";
import "./assets/js/components/hs.show-animation.js";
import "./assets/js/components/hs.svg-injector.js";
import "./assets/js/components/hs.go-to.js";
import "./assets/js/components/hs.selectpicker.js";
import "./assets/js/components/hs.range-slider.js";

if (document.head) {
  console.log("header true");
} else {
  console.log("header false");
}
//
// var script = document.createElement("script");
// script.type = "text/javascript";
// script.src =
//   "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.2/jquery.min.js";
// document.head.appendChild(script);
// console.log("document.head : ", document.head);

//
var link = document.createElement("link");
link.rel = "stylesheet";
link.media = "all";
link.href =
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.1/css/all.min.css";
document.head.appendChild(link);

(function () {
  $(window).on("load", function () {
    // initialization of HSMegaMenu component
    $(".js-mega-menu").HSMegaMenu({
      event: "hover",
      direction: "horizontal",
      pageContainer: $(".container"),
      breakpoint: 767.98,
      hideTimeOut: 0,
    });
  });

  $(document).on("ready", function () {
    // initialization of header
    $.HSCore.components.HSHeader.init($("#header"));

    // initialization of animation
    $.HSCore.components.HSOnScrollAnimation.init("[data-animation]");

    // initialization of unfold component
    $.HSCore.components.HSUnfold.init($("[data-unfold-target]"), {
      afterOpen: function () {
        $(this).find('input[type="search"]').focus();
      },
    });

    // initialization of popups
    //$.HSCore.components.HSFancyBox.init(".js-fancybox");

    // initialization of countdowns
    var countdowns = $.HSCore.components.HSCountdown.init(".js-countdown", {
      yearsElSelector: ".js-cd-years",
      monthsElSelector: ".js-cd-months",
      daysElSelector: ".js-cd-days",
      hoursElSelector: ".js-cd-hours",
      minutesElSelector: ".js-cd-minutes",
      secondsElSelector: ".js-cd-seconds",
    });

    // initialization of malihu scrollbar
    $.HSCore.components.HSMalihuScrollBar.init($(".js-scrollbar"));

    // initialization of forms
    $.HSCore.components.HSFocusState.init();

    // initialization of form validation
    $.HSCore.components.HSValidation.init(".js-validate", {
      rules: {
        confirmPassword: {
          equalTo: "#signupPassword",
        },
      },
    });

    // initialization of show animations
    $.HSCore.components.HSShowAnimation.init(".js-animation-link");

    // initialization of fancybox
    $.HSCore.components.HSFancyBox.init(".js-fancybox");

    // initialization of slick carousel
    $.HSCore.components.HSSlickCarousel.init(".js-slick-carousel");

    // initialization of go to
    $.HSCore.components.HSGoTo.init(".js-go-to");

    // initialization of hamburgers
    $.HSCore.components.HSHamburgers.init("#hamburgerTrigger");

    // initialization of unfold component
    $.HSCore.components.HSUnfold.init($("[data-unfold-target]"), {
      beforeClose: function () {
        $("#hamburgerTrigger").removeClass("is-active");
      },
      afterClose: function () {
        $("#headerSidebarList .collapse.show").collapse("hide");
      },
    });

    $('#headerSidebarList [data-toggle="collapse"]').on("click", function (e) {
      e.preventDefault();

      var target = $(this).data("target");

      if ($(this).attr("aria-expanded") === "true") {
        $(target).collapse("hide");
      } else {
        $(target).collapse("show");
      }
    });

    // initialization of unfold component
    $.HSCore.components.HSUnfold.init($("[data-unfold-target]"));

    // initialization of select picker
    $.HSCore.components.HSSelectPicker.init(".js-select");
  });
})();
