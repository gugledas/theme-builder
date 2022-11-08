import "./teaser-srcoll.html";
import "./teaser-srcoll.scss";

function setImage(img) {
  var imge = img.parentElement.parentElement.nextElementSibling.children[0];

  var dataset = imge.dataset.src;
  img.addEventListener(
    "mouseover",
    () => {
      imge.src = dataset;
      imge.parentElement.style.display = "block";
    },
    true
  );
  img.removeEventListener("mouseover", () => {}, false);
  //;
}

var img = document.querySelectorAll(".image-teaser");

if (img.length) {
  for (let im of img) {
    setImage(im);
  }
}
