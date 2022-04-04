import "./image-scroll.html";
import "./image-scroll.scss";

function setImage(img) {
  var image = img.src;
  var dataset = img.dataset.src;
  img.addEventListener(
    "mouseover",
    () => {
      img.src = dataset;
    },
    true
  );
  img.removeEventListener("mouseover", () => {}, false);
  //;
}

var img = document.querySelectorAll(".the-image");

for (let im of img) {
  setImage(im);
}
