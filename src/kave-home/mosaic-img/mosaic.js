import "lightgallery/css/lightgallery-bundle.min.css";
import "lightgallery/css/lg-zoom.css";
// import "lightgallery/fonts/lg.ttf";
import lightGallery from "lightgallery";
//import lgZoom from "lightgallery/plugins/zoom";

import "./mosaic.html";
import "./mosaic.scss";

lightGallery(document.getElementById("my-mosaic"), {
  //plugins: [lgZoom],
  selector: ".gallery-item",
  hideControlOnEnd: true,
  backdropDuration: 100,
  mode: "fade",
  speed: 500,
  download: false
  // ... other settings
});
console.log("glit", lightGallery);
// // Open the Modal
// function openModal() {
//   document.getElementById("myModal").style.display = "block";
// }

// // Close the Modal
// function closeModal() {
//   console.log("mince");
//   document.getElementById("myModal").style.display = "none";
// }
// let close = document.getElementsByClassName("close")[0];
// let img = document.getElementsByClassName("ms-img");
// for (let i = 0; i < img.length; i++) {
//   img[i].addEventListener(
//     "click",
//     () => {
//       openModal;
//       currentSlide(i);
//     },
//     false
//   );
// }
// console.log("close", close);
// close.onclick = closeModal;

// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   //var dots = document.getElementsByClassName("demo");
//   var captionText = document.getElementById("caption");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   //   for (i = 0; i < dots.length; i++) {
//   //     dots[i].className = dots[i].className.replace(" active", "");
//   //   }
//   slides[slideIndex - 1].style.display = "block";
//   //dots[slideIndex-1].className += " active";
//   //captionText.innerHTML = dots[slideIndex-1].alt;
// }
