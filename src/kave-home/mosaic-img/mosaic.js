import "lightgallery/css/lightgallery-bundle.min.css";
import "lightgallery/css/lg-zoom.css";
// import "lightgallery/fonts/lg.ttf";
import lightGallery from "lightgallery";
//import lgZoom from "lightgallery/plugins/zoom";

import "./mosaic.html";
import "./mosaic.scss";

// lightGallery(document.getElementById("my-mosaic"), {
//   //plugins: [lgZoom],
//   selector: ".gallery-item",
//   hideControlOnEnd: true,
//   backdropDuration: 100,
//   mode: "fade",
//   speed: 500,
//   download: false,
//   // ... other settings
// });
console.log("glit", lightGallery);
lightGallery(document.getElementById("my-mosaic-2"));
lightGallery(document.getElementById("my-mosaic"));
