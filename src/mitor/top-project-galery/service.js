import "./service.html";
import "./service.scss";

import "lightgallery/css/lightgallery-bundle.min.css";
import "lightgallery/css/lg-zoom.css";

import lightGallery from "lightgallery";
import lgZoom from "lightgallery/plugins/zoom";
import Thum from "lightgallery/plugins/thumbnail";

lightGallery(document.getElementById("mitor-top-project"), {
  plugins: [lgZoom, Thum],
  selector: ".grid-img",
  hideControlOnEnd: true,
  backdropDuration: 100,
  // mode: "lg-fade",
  speed: 500,
  download: false,
  thumbnail: true,
  animateThumb: false,
  zoomFromOrigin: false,
  allowMediaOverlap: true,
  toggleThumb: true
  // ... other settings
});
