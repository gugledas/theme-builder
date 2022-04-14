import "./navbar.html";
import "./navbar.scss";

const onscroll = (el, listener) => {
  el.addEventListener("scroll", listener);
};
var nav = document.querySelector(".navbar-section-plumbing");

if (nav) {
  let header = nav.offsetTop;
  var next = nav.nextElementSibling;
  const fixedTop = () => {
    if (header - window.scrollY <= 0) {
      // console.log("arr", header, window.scrollY);
      nav.classList.add("pl-fixed-top");
    } else {
      nav.classList.remove("pl-fixed-top");
    }
  };
  window.addEventListener("load", fixedTop);
  onscroll(document, fixedTop);
}

let mobile = document.querySelector(".nsp-mobile-menu");
let burger = document.querySelector(".nsp-nav-toggler");
let close = document.querySelector(".menu-hide");
if (mobile && burger && close) {
  const toggler = () => {
    mobile.classList.toggle("mobile-menu-active");
  };
  burger.addEventListener("click", toggler);
  close.addEventListener("click", toggler);
}
