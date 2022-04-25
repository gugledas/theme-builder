import "./bac-top.html";
import "./bac-top.scss";

let bacTop = document.querySelector(".bac-top-plumbing");
bacTop.addEventListener("click", scrollUp);

window.onscroll = () => {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    bacTop.style.visibility = "visible";
    bacTop.style.opacity = "1";
  } else {
    bacTop.style = "";
  }
}

function scrollUp() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
}
