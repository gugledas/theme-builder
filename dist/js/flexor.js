/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/flexor/HeroSection/hero.js":
/*!****************************************!*\
  !*** ./src/flexor/HeroSection/hero.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hero_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero.html */ "./src/flexor/HeroSection/hero.html");
/* harmony import */ var _hero_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero.scss */ "./src/flexor/HeroSection/hero.scss");



/***/ }),

/***/ "./src/flexor/headers/header.js":
/*!**************************************!*\
  !*** ./src/flexor/headers/header.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.html */ "./src/flexor/headers/header.html");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.scss */ "./src/flexor/headers/header.scss");



/***/ }),

/***/ "./src/flexor/HeroSection/hero.html":
/*!******************************************!*\
  !*** ./src/flexor/HeroSection/hero.html ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<!-- ======= Hero Section ======= -->\n<section\n  id=\"hero\"\n  class=\"d-flex flex-column justify-content-center align-items-center\"\n>\n  <div class=\"container aos-init aos-animate\" data-aos=\"fade-in\">\n    <h1>Welcome to Flexor</h1>\n    <h2>We are team of talented designers making websites with Bootstrap</h2>\n    <div class=\"d-flex align-items-center\">\n      <i class=\"bx bxs-right-arrow-alt get-started-icon\"></i>\n      <a href=\"#about\" class=\"btn-get-started scrollto\">Get Started</a>\n    </div>\n  </div>\n</section>\n<!-- End Hero -->\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "./src/flexor/headers/header.html":
/*!****************************************!*\
  !*** ./src/flexor/headers/header.html ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<header class=\"flexor-header\" id=\"header\" class=\"d-flex align-items-center\">\n  <div class=\"container d-flex align-items-center justify-content-between\">\n    <div class=\"logo\">\n      <h1><a href=\"index.html\">Flexor</a></h1>\n      <!-- Uncomment below if you prefer to use an image logo -->\n      <!-- <a href=\"index.html\"><img src=\"assets/img/logo.png\" alt=\"\" class=\"img-fluid\"></a>-->\n    </div>\n    <nav id=\"navbar\" class=\"navbar\">\n      <ul>\n        <li><a class=\"nav-link scrollto active\" href=\"#hero\">Home</a></li>\n        <li><a class=\"nav-link scrollto\" href=\"#about\">About</a></li>\n        <li><a class=\"nav-link scrollto\" href=\"#services\">Services</a></li>\n        <li>\n          <a class=\"nav-link scrollto\" href=\"#portfolio\">Portfolio</a>\n        </li>\n        <li><a class=\"nav-link scrollto\" href=\"#team\">Team</a></li>\n        <li><a class=\"nav-link scrollto\" href=\"#pricing\">Pricing</a></li>\n        <li><a href=\"blog.html\">Blog</a></li>\n        <li class=\"dropdown\">\n          <a href=\"#\"\n            ><span>Drop Down</span> <i class=\"bi bi-chevron-down\"></i\n          ></a>\n          <ul>\n            <li><a href=\"#\">Drop Down 1</a></li>\n            <li class=\"dropdown\">\n              <a href=\"#\"\n                ><span>Deep Drop Down</span> <i class=\"bi bi-chevron-right\"></i\n              ></a>\n              <ul>\n                <li><a href=\"#\">Deep Drop Down 1</a></li>\n                <li><a href=\"#\">Deep Drop Down 2</a></li>\n                <li><a href=\"#\">Deep Drop Down 3</a></li>\n                <li><a href=\"#\">Deep Drop Down 4</a></li>\n                <li><a href=\"#\">Deep Drop Down 5</a></li>\n              </ul>\n            </li>\n            <li><a href=\"#\">Drop Down 2</a></li>\n            <li><a href=\"#\">Drop Down 3</a></li>\n            <li><a href=\"#\">Drop Down 4</a></li>\n          </ul>\n        </li>\n        <li><a class=\"nav-link scrollto\" href=\"#contact\">Contact</a></li>\n      </ul>\n      <i class=\"bi bi-list mobile-nav-toggle\"></i>\n    </nav>\n    <!-- .navbar -->\n  </div>\n</header>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "./src/flexor/HeroSection/hero.scss":
/*!******************************************!*\
  !*** ./src/flexor/HeroSection/hero.scss ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/flexor/headers/header.scss":
/*!****************************************!*\
  !*** ./src/flexor/headers/header.scss ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!******************************!*\
  !*** ./src/flexor/flexor.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _headers_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./headers/header.js */ "./src/flexor/headers/header.js");
/* harmony import */ var _HeroSection_hero_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeroSection/hero.js */ "./src/flexor/HeroSection/hero.js");


/**
 * Mobile nav toggle
 */

on("click", ".mobile-nav-toggle", function (e) {
  select("#navbar").classList.toggle("navbar-mobile");
  this.classList.toggle("bi-list");
  this.classList.toggle("bi-x");
});
/**
 * Mobile nav dropdowns activate
 */

on("click", ".navbar .dropdown > a", function (e) {
  if (select("#navbar").classList.contains("navbar-mobile")) {
    e.preventDefault();
    this.nextElementSibling.classList.toggle("dropdown-active");
  }
}, true);
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvZmxleG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0EsK0RBQWUsSUFBSTs7Ozs7Ozs7Ozs7QUNIbkI7QUFDQTtBQUNBO0FBQ0EsK0RBQWUsSUFBSTs7Ozs7Ozs7Ozs7QUNIbkI7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQUEsRUFBRSxDQUFDLE9BQUQsRUFBVSxvQkFBVixFQUFnQyxVQUFVQyxDQUFWLEVBQWE7QUFDN0NDLEVBQUFBLE1BQU0sQ0FBQyxTQUFELENBQU4sQ0FBa0JDLFNBQWxCLENBQTRCQyxNQUE1QixDQUFtQyxlQUFuQztBQUNBLE9BQUtELFNBQUwsQ0FBZUMsTUFBZixDQUFzQixTQUF0QjtBQUNBLE9BQUtELFNBQUwsQ0FBZUMsTUFBZixDQUFzQixNQUF0QjtBQUNELENBSkMsQ0FBRjtBQU1BO0FBQ0E7QUFDQTs7QUFDQUosRUFBRSxDQUNBLE9BREEsRUFFQSx1QkFGQSxFQUdBLFVBQVVDLENBQVYsRUFBYTtBQUNYLE1BQUlDLE1BQU0sQ0FBQyxTQUFELENBQU4sQ0FBa0JDLFNBQWxCLENBQTRCRSxRQUE1QixDQUFxQyxlQUFyQyxDQUFKLEVBQTJEO0FBQ3pESixJQUFBQSxDQUFDLENBQUNLLGNBQUY7QUFDQSxTQUFLQyxrQkFBTCxDQUF3QkosU0FBeEIsQ0FBa0NDLE1BQWxDLENBQXlDLGlCQUF6QztBQUNEO0FBQ0YsQ0FSRCxFQVNBLElBVEEsQ0FBRixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlbWUtYnVpbGRlci8uL3NyYy9mbGV4b3IvSGVyb1NlY3Rpb24vaGVyby5qcyIsIndlYnBhY2s6Ly90aGVtZS1idWlsZGVyLy4vc3JjL2ZsZXhvci9oZWFkZXJzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90aGVtZS1idWlsZGVyLy4vc3JjL2ZsZXhvci9IZXJvU2VjdGlvbi9oZXJvLmh0bWwiLCJ3ZWJwYWNrOi8vdGhlbWUtYnVpbGRlci8uL3NyYy9mbGV4b3IvaGVhZGVycy9oZWFkZXIuaHRtbCIsIndlYnBhY2s6Ly90aGVtZS1idWlsZGVyLy4vc3JjL2ZsZXhvci9IZXJvU2VjdGlvbi9oZXJvLnNjc3M/MzdjMiIsIndlYnBhY2s6Ly90aGVtZS1idWlsZGVyLy4vc3JjL2ZsZXhvci9oZWFkZXJzL2hlYWRlci5zY3NzIiwid2VicGFjazovL3RoZW1lLWJ1aWxkZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGhlbWUtYnVpbGRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RoZW1lLWJ1aWxkZXIvLi9zcmMvZmxleG9yL2ZsZXhvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL2hlcm8uaHRtbFwiO1xuaW1wb3J0IFwiLi9oZXJvLnNjc3NcIjtcbiIsImltcG9ydCBcIi4vaGVhZGVyLmh0bWxcIjtcbmltcG9ydCBcIi4vaGVhZGVyLnNjc3NcIjtcbiIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjwhLS0gPT09PT09PSBIZXJvIFNlY3Rpb24gPT09PT09PSAtLT5cXG48c2VjdGlvblxcbiAgaWQ9XFxcImhlcm9cXFwiXFxuICBjbGFzcz1cXFwiZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXFxcIlxcbj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBhb3MtaW5pdCBhb3MtYW5pbWF0ZVxcXCIgZGF0YS1hb3M9XFxcImZhZGUtaW5cXFwiPlxcbiAgICA8aDE+V2VsY29tZSB0byBGbGV4b3I8L2gxPlxcbiAgICA8aDI+V2UgYXJlIHRlYW0gb2YgdGFsZW50ZWQgZGVzaWduZXJzIG1ha2luZyB3ZWJzaXRlcyB3aXRoIEJvb3RzdHJhcDwvaDI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcXFwiPlxcbiAgICAgIDxpIGNsYXNzPVxcXCJieCBieHMtcmlnaHQtYXJyb3ctYWx0IGdldC1zdGFydGVkLWljb25cXFwiPjwvaT5cXG4gICAgICA8YSBocmVmPVxcXCIjYWJvdXRcXFwiIGNsYXNzPVxcXCJidG4tZ2V0LXN0YXJ0ZWQgc2Nyb2xsdG9cXFwiPkdldCBTdGFydGVkPC9hPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2Plxcbjwvc2VjdGlvbj5cXG48IS0tIEVuZCBIZXJvIC0tPlxcblwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8aGVhZGVyIGNsYXNzPVxcXCJmbGV4b3ItaGVhZGVyXFxcIiBpZD1cXFwiaGVhZGVyXFxcIiBjbGFzcz1cXFwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImxvZ29cXFwiPlxcbiAgICAgIDxoMT48YSBocmVmPVxcXCJpbmRleC5odG1sXFxcIj5GbGV4b3I8L2E+PC9oMT5cXG4gICAgICA8IS0tIFVuY29tbWVudCBiZWxvdyBpZiB5b3UgcHJlZmVyIHRvIHVzZSBhbiBpbWFnZSBsb2dvIC0tPlxcbiAgICAgIDwhLS0gPGEgaHJlZj1cXFwiaW5kZXguaHRtbFxcXCI+PGltZyBzcmM9XFxcImFzc2V0cy9pbWcvbG9nby5wbmdcXFwiIGFsdD1cXFwiXFxcIiBjbGFzcz1cXFwiaW1nLWZsdWlkXFxcIj48L2E+LS0+XFxuICAgIDwvZGl2PlxcbiAgICA8bmF2IGlkPVxcXCJuYXZiYXJcXFwiIGNsYXNzPVxcXCJuYXZiYXJcXFwiPlxcbiAgICAgIDx1bD5cXG4gICAgICAgIDxsaT48YSBjbGFzcz1cXFwibmF2LWxpbmsgc2Nyb2xsdG8gYWN0aXZlXFxcIiBocmVmPVxcXCIjaGVyb1xcXCI+SG9tZTwvYT48L2xpPlxcbiAgICAgICAgPGxpPjxhIGNsYXNzPVxcXCJuYXYtbGluayBzY3JvbGx0b1xcXCIgaHJlZj1cXFwiI2Fib3V0XFxcIj5BYm91dDwvYT48L2xpPlxcbiAgICAgICAgPGxpPjxhIGNsYXNzPVxcXCJuYXYtbGluayBzY3JvbGx0b1xcXCIgaHJlZj1cXFwiI3NlcnZpY2VzXFxcIj5TZXJ2aWNlczwvYT48L2xpPlxcbiAgICAgICAgPGxpPlxcbiAgICAgICAgICA8YSBjbGFzcz1cXFwibmF2LWxpbmsgc2Nyb2xsdG9cXFwiIGhyZWY9XFxcIiNwb3J0Zm9saW9cXFwiPlBvcnRmb2xpbzwvYT5cXG4gICAgICAgIDwvbGk+XFxuICAgICAgICA8bGk+PGEgY2xhc3M9XFxcIm5hdi1saW5rIHNjcm9sbHRvXFxcIiBocmVmPVxcXCIjdGVhbVxcXCI+VGVhbTwvYT48L2xpPlxcbiAgICAgICAgPGxpPjxhIGNsYXNzPVxcXCJuYXYtbGluayBzY3JvbGx0b1xcXCIgaHJlZj1cXFwiI3ByaWNpbmdcXFwiPlByaWNpbmc8L2E+PC9saT5cXG4gICAgICAgIDxsaT48YSBocmVmPVxcXCJibG9nLmh0bWxcXFwiPkJsb2c8L2E+PC9saT5cXG4gICAgICAgIDxsaSBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcbiAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIlxcbiAgICAgICAgICAgID48c3Bhbj5Ecm9wIERvd248L3NwYW4+IDxpIGNsYXNzPVxcXCJiaSBiaS1jaGV2cm9uLWRvd25cXFwiPjwvaVxcbiAgICAgICAgICA+PC9hPlxcbiAgICAgICAgICA8dWw+XFxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiPkRyb3AgRG93biAxPC9hPjwvbGk+XFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIlxcbiAgICAgICAgICAgICAgICA+PHNwYW4+RGVlcCBEcm9wIERvd248L3NwYW4+IDxpIGNsYXNzPVxcXCJiaSBiaS1jaGV2cm9uLXJpZ2h0XFxcIj48L2lcXG4gICAgICAgICAgICAgID48L2E+XFxuICAgICAgICAgICAgICA8dWw+XFxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5EZWVwIERyb3AgRG93biAxPC9hPjwvbGk+XFxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5EZWVwIERyb3AgRG93biAyPC9hPjwvbGk+XFxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5EZWVwIERyb3AgRG93biAzPC9hPjwvbGk+XFxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5EZWVwIERyb3AgRG93biA0PC9hPjwvbGk+XFxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5EZWVwIERyb3AgRG93biA1PC9hPjwvbGk+XFxuICAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiPkRyb3AgRG93biAyPC9hPjwvbGk+XFxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiPkRyb3AgRG93biAzPC9hPjwvbGk+XFxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiPkRyb3AgRG93biA0PC9hPjwvbGk+XFxuICAgICAgICAgIDwvdWw+XFxuICAgICAgICA8L2xpPlxcbiAgICAgICAgPGxpPjxhIGNsYXNzPVxcXCJuYXYtbGluayBzY3JvbGx0b1xcXCIgaHJlZj1cXFwiI2NvbnRhY3RcXFwiPkNvbnRhY3Q8L2E+PC9saT5cXG4gICAgICA8L3VsPlxcbiAgICAgIDxpIGNsYXNzPVxcXCJiaSBiaS1saXN0IG1vYmlsZS1uYXYtdG9nZ2xlXFxcIj48L2k+XFxuICAgIDwvbmF2PlxcbiAgICA8IS0tIC5uYXZiYXIgLS0+XFxuICA8L2Rpdj5cXG48L2hlYWRlcj5cXG5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9oZWFkZXJzL2hlYWRlci5qc1wiO1xuaW1wb3J0IFwiLi9IZXJvU2VjdGlvbi9oZXJvLmpzXCI7XG5cbi8qKlxuICogTW9iaWxlIG5hdiB0b2dnbGVcbiAqL1xub24oXCJjbGlja1wiLCBcIi5tb2JpbGUtbmF2LXRvZ2dsZVwiLCBmdW5jdGlvbiAoZSkge1xuICBzZWxlY3QoXCIjbmF2YmFyXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJuYXZiYXItbW9iaWxlXCIpO1xuICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJiaS1saXN0XCIpO1xuICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJiaS14XCIpO1xufSk7XG5cbi8qKlxuICogTW9iaWxlIG5hdiBkcm9wZG93bnMgYWN0aXZhdGVcbiAqL1xub24oXG4gIFwiY2xpY2tcIixcbiAgXCIubmF2YmFyIC5kcm9wZG93biA+IGFcIixcbiAgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoc2VsZWN0KFwiI25hdmJhclwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJuYXZiYXItbW9iaWxlXCIpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKFwiZHJvcGRvd24tYWN0aXZlXCIpO1xuICAgIH1cbiAgfSxcbiAgdHJ1ZVxuKTtcbiJdLCJuYW1lcyI6WyJvbiIsImUiLCJzZWxlY3QiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjb250YWlucyIsInByZXZlbnREZWZhdWx0IiwibmV4dEVsZW1lbnRTaWJsaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==