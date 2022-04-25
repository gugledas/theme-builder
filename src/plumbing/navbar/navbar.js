import "./navbar.html";
import "./navbar.scss";

let select = (element) => document.querySelector(element);
let header = select(".plumbing-navbar");
var ul = header.querySelectorAll("nav .nav-list > li");
const toggleNav = () => {
  var count = 0;

  select(".bar").addEventListener("click", () => {
    header.classList.toggle("active");
    var ul = select(".nav-list");

    ul.classList.add("nav-list-mobile");
    hideScrollBar();
    ul.classList.remove("nav-list");
    while (count < 1) {
      setToggleUl();
      count++;
    }
  });
  select(".hide").addEventListener("click", () => {
    header.classList.toggle("active");
    var ul = select(".nav-list-mobile");
    hideScrollBar(false);
    ul.classList.remove("nav-list-mobile");
    ul.classList.add("nav-list");
    //setToggleUl();
  });

  /* breakpoint */
  let small = window.matchMedia("(max-width :768px)");
  small.addEventListener("change", hideMenuSM);

  //
};
/*Gère l'affichage du menu sur petit écran*/
function hideMenuSM(bp) {
  if (!bp.matches) {
    select(".plumbing-navbar").classList.remove("active");
    select(".plumbing-navbar nav > ul").classList.remove("nav-list-mobile");
    select(".plumbing-navbar nav > ul").classList.add("nav-list");
    hideScrollBar(false);
    rebuildNav();
  } else {
    rebuildNav();
  }
  //setToggleUl();
}
/* cache la scroll bar du body */
function hideScrollBar(hide = true) {
  if (hide) {
    document.body.style.height = "100%";
    document.body.style.overflow = "hidden";
  } else {
    document.body.style = "";
  }
}
toggleNav();

/* cacher les nav lorsque besoin s'impose */

/* breakpoint */
let first = window.matchMedia("(max-width :1200px)");

first.addEventListener("change", copyNode);
let second = window.matchMedia("(max-width :992px)");
second.addEventListener("change", copyNode2);

let subuild = header.querySelector(".sub-build");
let navLi = Array.from(header.querySelectorAll("nav .nav-list > li"));

if (navLi && navLi.length) {
}
/* permet de reduire les nav en dessous des breakpoint egale 1200px */
function copyNode2(bp) {
  let child = Array.from(document.querySelectorAll(".sub-build > ul > li "));
  let navLi2 = Array.from(header.querySelectorAll("nav .nav-list > li"));
  if (bp.matches) {
    subuild.style.display = "flex";
    if (navLi.length) {
      for (let i = navLi2.length - 3; i > 1; i--) {
        (function (rs) {
          subuild.querySelector("ul").appendChild(rs);
        })(navLi2[i]);
      }
    }
  } else {
    for (let i = child.length - 1; i > child.length - 3; i--) {
      (function (rs) {
        if (rs) {
          subuild.parentElement.insertBefore(rs, subuild);
        }
      })(child[i]);
    }
  }
}
/* permet de reduire les nav en dessous des breakpoint egale 1200px */
function copyNode(bp) {
  let child = document.querySelectorAll(".sub-build > ul > li ");
  let navLi = Array.from(header.querySelectorAll("nav .nav-list > li"));
  if (bp.matches) {
    subuild.style.display = "flex";
    if (navLi.length) {
      for (let i = navLi.length - 3; i > 3; i--) {
        (function (rs) {
          subuild.querySelector("ul").appendChild(rs);
        })(navLi[i]);
      }
    }
  } else {
    for (let ch of child) {
      (function (rs) {
        subuild.parentElement.insertBefore(rs, subuild);
      })(ch);
    }
    subuild.style.display = "";
  }
}
function rebuildNav() {
  let windowWidth = window.innerWidth;
  if (windowWidth > 992 && windowWidth < 1201) {
    copyNode({ matches: true });
  }
  if (windowWidth < 992 && windowWidth >= 768) {
    copyNode2({ matches: true });
  }
  if (windowWidth <= 768) {
    copyNode({ matches: false });
  }
}
/* gestion de la navigation après le chargement de la page */
window.addEventListener("DOMContentLoaded", (event) => {
  rebuildNav();
});

/* permet de gérer les menu deroulant sur petit écran au click du burger*/
function setToggleUl() {
  var subMenu = header.querySelectorAll(".nav-list-mobile .sub-alt > a");
  if (subMenu) {
    for (let sub of subMenu) {
      sub.addEventListener("click", () => {
        var all = sub.parentElement.parentElement.querySelectorAll(
          sub.parentElement.parentElement.tagName + " > .sub-alt--open > a"
        );

        if (all && all.length) {
          for (let li of all) {
            (function (gr) {
              if (gr === sub) {
                //console.log("same", li);
              } else {
                trueHeight(gr);
                gr.parentElement.classList.toggle("sub-alt--open");

                let list =
                  gr.parentElement.querySelectorAll(".sub-alt--open > a");
                // console.log("sub", gr);
                if (list && list.length) {
                  for (let sous of list) {
                    trueHeight(sous);
                    sous.parentElement.classList.toggle("sub-alt--open");
                  }
                }
              }
            })(li);
          }
        }
        trueHeight(sub);
        sub.parentElement.classList.toggle("sub-alt--open");
      });
    }
  }
}
/* gere le max-height des ul au click pour les transition de fermeture et d'ouverture des accordeon*/
function trueHeight(a) {
  var parent = header.querySelectorAll(".nav-list-mobile");
  var ulNext = a.nextElementSibling;
  if (ulNext && parent) {
    if (ulNext) {
      if (ulNext.style.maxHeight) {
        ulNext.style.maxHeight = null;
      } else {
        ulNext.style.maxHeight = ulNext.scrollHeight + "px";
      }
    }
  } else {
    console.error("ulnext n'existe pas");
  }
}

/* fixe le menu au dessus */
const onscroll = (el, listener) => {
  el.addEventListener("scroll", listener);
};
var nav = document.querySelector(".plumbing-navbar");

if (nav) {
  let header = nav.offsetTop;
  const fixedTop = () => {
    if (window.pageYOffset > header) {
      nav.classList.add("plumbing-navbar--fixed");
    } else {
      nav.classList.remove("plumbing-navbar--fixed");
    }
  };
  window.addEventListener("load", fixedTop);
  onscroll(document, fixedTop);
}

/* pop up recherche */
let search = document.querySelector(".search-link");
let fermer = document.querySelector(".hide-search");
let blocSearch = document.querySelector(".search-pop-up");
search.addEventListener("click", activeSearch);
fermer.addEventListener("click", activeSearch);

function activeSearch() {
  blocSearch.classList.toggle("search-pop-up--show");
}
