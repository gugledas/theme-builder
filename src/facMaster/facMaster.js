import "@stephane888/wbu-atomique/js/bootstrap/all.js";
import "./facMaster.scss";
import "./Heder/header";
// import "./facmaster-hero/facmaster-hero";
// import "./facmaster-gallery/facmaster-gallery";
/**
 * Permet d'injecter les librairies js.
 * @param {*} src
 * @returns
 */
function loadScript(src) {
  return new Promise((resolv) => {
    const s = document.createElement("script");
    s.setAttribute("src", src);
    s.onload = function () {
      console.log(" Chargement du script ok : ", src);
      resolv(true);
    };
    document.head.appendChild(s);
  });
}
function loadstyle(src) {
  return new Promise((resolv) => {
    var s = document.createElement("link");
    s.setAttribute("rel", "stylesheet");
    s.setAttribute("href", src);
    s.onload = function () {
      console.log("Chargement du Style ok : ", src);
      resolv(true);
    };
    document.head.appendChild(s);
  });
}
loadstyle(
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.1/css/all.min.css"
);
