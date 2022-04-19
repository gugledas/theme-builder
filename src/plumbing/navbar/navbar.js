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

let ul1 = document.querySelectorAll(".mobile-menu .nsp-nav-ul .nsp-nav-link");

let hideTogleBtn = (el) => {
  return new Promise((resolv) => {
    let a = el.querySelector("a");
    let ul = el.querySelector("ul");

    if (ul) {
      let liParent = el.parentElement.classList.contains("sub-menu");
      if (liParent) {
        a.querySelector("button").classList.remove("lit-btn--bg");
      }
      //ul.classList.add("d-none");
      a.addEventListener(
        "click",
        (e) => {
          var all = el.parentElement.querySelectorAll("li.nav-ul-opened");
          console.log("elle", e.target.parentElement.tagName);
          if (all && all.length) {
            for (let li of all) {
              if (li === el) {
                console.log("same", el);
              } else {
                (function (gr) {
                  let a = gr.querySelector("a");
                  let ul = gr.querySelector("ul");

                  gr.classList.toggle("nav-ul-opened");
                  a.querySelector("button").classList.toggle("lit-btn-opened");
                })(li);
              }
            }
          }

          el.classList.toggle("nav-ul-opened");
          a.querySelector("button").classList.toggle("lit-btn-opened");
          //el.classList.toggle("nav-ul-opened");
        },
        true
      );
    } else {
      a.querySelector("button").classList.add("d-none");
    }
    resolv(el);
  });
};
//console.log("nav_mb:", nav_mb);
let listElement = (parent) => {
  if (parent && parent.length) {
    for (let el of parent) {
      hideTogleBtn(el).then((re) => {
        console.log("ok", re);
      });
    }
  }
};
listElement(ul1);
//je veux selectionner tous les li
/* 
even doit toujour rechercher tous les li.activé et les désactivés
en suite selectionner l'element sur lequel on a cliqué
 */

//je veux que
