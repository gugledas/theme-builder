/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/coming-soon-video-bg/coming-soon-video-bg.html":
/*!************************************************************!*\
  !*** ./src/coming-soon-video-bg/coming-soon-video-bg.html ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<section\n  class=\"facmaster-coming-soon cover-bg-theme opacity-before-055\"\n  style=\"\n    background: url('https://demo.cmssuperheroes.com/themeforest/facmaster/wp-content/uploads/2019/12/theme-10.jpg');\n    background-size: cover;\n    background-position: center;\n  \"\n>\n  <div class=\"fac-video-bg\">\n    <video\n      preload=\"auto\"\n      style=\"width: 100%; height: 100%\"\n      autoplay=\"\"\n      loop=\"\"\n      muted=\"\"\n    >\n      <source\n        src=\"https://wb-horizon.com/sites/default/files/video-thumbnails/2022-11/highway-2_1.mp4\"\n      />\n      <source\n        src=\"https://wb-horizon.com/sites/default/files/video-thumbnails/2022-11/highway-2_0.webm\"\n      />\n    </video>\n  </div>\n  <div class=\"facmaster-coming-soon-container container\">\n    <div class=\"coming-soon-text-element text-center\">\n      <h1 class=\"coming-soon-title font-weight-bolder wbu-titre-suppra\">\n        COMING SOON\n      </h1>\n      <h3 class=\"coming-soon-subtitle font-weight-bolder\">\n        PRODUCING 1 MILLION CAKES FOR\n      </h3>\n      <div class=\"coming-soon-description\">\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac mi\n          lacus. Phasellus mollis et nibh et condimentum. Integer dui diam,\n          ornare a sagittis vel, suscipit et leo.\n        </p>\n      </div>\n    </div>\n    <div class=\"coming-soon-count\">\n      <p id=\"demo\" class=\"count\"></p>\n    </div>\n  </div>\n  <div\n    class=\"coming-soon-copy-right d-flex position-relative align-items-center justify-content-center\"\n  >\n    <p>Copyright NICAMEX by <a href=\"habeuk.com\">Habeuk.com</a></p>\n  </div>\n  <script>\n    // Set the date we're counting down to\n    var countDownDate = new Date(\"Jan 5, 2024 15:37:25\").getTime();\n\n    // Update the count down every 1 second\n    var x = setInterval(function () {\n      // Get today's date and time\n      var now = new Date().getTime();\n\n      // Find the distance between now and the count down date\n      var distance = countDownDate - now;\n\n      // Time calculations for days, hours, minutes and seconds\n      var days = Math.floor(distance / (1000 * 60 * 60 * 24));\n      var hours = Math.floor(\n        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)\n      );\n      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));\n      var seconds = Math.floor((distance % (1000 * 60)) / 1000);\n\n      // Output the result in an element with id=\"demo\"\n      document.getElementById(\"demo\").innerHTML =\n        \"<div class='demo_element'> <div class='row'> <div class='col-6 col-md-3'> <div class='set'> <div class='time h1 font-weight-bolder'>\" +\n        days +\n        \"</div> <div class='letter h6 font-weight-bolder'>days</div></div></div>\" +\n        \"<div class='col-6 col-md-3'> <div class='set'> <div class='time h1 font-weight-bolder'>\" +\n        hours +\n        \"</div> <div class='letter h6 font-weight-bolder'>hours</div></div></div>\" +\n        \"<div class='col-6 col-md-3'> <div class='set'><div class='time h1 font-weight-bolder'>\" +\n        minutes +\n        \"</div> <div class='letter h6 font-weight-bolder'>minutes</div></div></div>\" +\n        \"<div class='col-6 col-md-3'> <div class='set'><div class='time h1 font-weight-bolder'>\" +\n        seconds +\n        \"</div> <div class='letter h6 font-weight-bolder'> seconds </div></div></div></div></div>\";\n\n      // If the count down is over, write some text\n      if (distance < 0) {\n        clearInterval(x);\n        document.getElementById(\"demo\").innerHTML = \"EXPIRED\";\n      }\n    }, 1000);\n  </script>\n</section>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "./src/coming-soon-video-bg/coming-soon-video-bg.scss":
/*!************************************************************!*\
  !*** ./src/coming-soon-video-bg/coming-soon-video-bg.scss ***!
  \************************************************************/
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
/*!**********************************************************!*\
  !*** ./src/coming-soon-video-bg/coming-soon-video-bg.js ***!
  \**********************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coming_soon_video_bg_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coming-soon-video-bg.html */ "./src/coming-soon-video-bg/coming-soon-video-bg.html");
/* harmony import */ var _coming_soon_video_bg_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coming-soon-video-bg.scss */ "./src/coming-soon-video-bg/coming-soon-video-bg.scss");


}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvc2NyaXB0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSw0TkFBNE4sNkJBQTZCLGtDQUFrQywwR0FBMEcsMjVDQUEyNUMsc0ZBQXNGLDJFQUEyRSw2R0FBNkcsbUlBQW1JLHdHQUF3Ryw4RUFBOEUsa0VBQWtFLGcvQkFBZy9CLGtGQUFrRiwyQkFBMkIsb0VBQW9FLFNBQVMsT0FBTyxRQUFRO0FBQ2xtSDtBQUNBLCtEQUFlLElBQUk7Ozs7Ozs7Ozs7O0FDSG5COzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZ3VnbGVkYXMvdGhlbWUtYnVpbGRlci8uL3NyYy9jb21pbmctc29vbi12aWRlby1iZy9jb21pbmctc29vbi12aWRlby1iZy5odG1sIiwid2VicGFjazovL0BndWdsZWRhcy90aGVtZS1idWlsZGVyLy4vc3JjL2NvbWluZy1zb29uLXZpZGVvLWJnL2NvbWluZy1zb29uLXZpZGVvLWJnLnNjc3M/Nzg1YiIsIndlYnBhY2s6Ly9AZ3VnbGVkYXMvdGhlbWUtYnVpbGRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AZ3VnbGVkYXMvdGhlbWUtYnVpbGRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0BndWdsZWRhcy90aGVtZS1idWlsZGVyLy4vc3JjL2NvbWluZy1zb29uLXZpZGVvLWJnL2NvbWluZy1zb29uLXZpZGVvLWJnLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxzZWN0aW9uXFxuICBjbGFzcz1cXFwiZmFjbWFzdGVyLWNvbWluZy1zb29uIGNvdmVyLWJnLXRoZW1lIG9wYWNpdHktYmVmb3JlLTA1NVxcXCJcXG4gIHN0eWxlPVxcXCJcXG4gICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL2RlbW8uY21zc3VwZXJoZXJvZXMuY29tL3RoZW1lZm9yZXN0L2ZhY21hc3Rlci93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8xMi90aGVtZS0xMC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgXFxcIlxcbj5cXG4gIDxkaXYgY2xhc3M9XFxcImZhYy12aWRlby1iZ1xcXCI+XFxuICAgIDx2aWRlb1xcbiAgICAgIHByZWxvYWQ9XFxcImF1dG9cXFwiXFxuICAgICAgc3R5bGU9XFxcIndpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCVcXFwiXFxuICAgICAgYXV0b3BsYXk9XFxcIlxcXCJcXG4gICAgICBsb29wPVxcXCJcXFwiXFxuICAgICAgbXV0ZWQ9XFxcIlxcXCJcXG4gICAgPlxcbiAgICAgIDxzb3VyY2VcXG4gICAgICAgIHNyYz1cXFwiaHR0cHM6Ly93Yi1ob3Jpem9uLmNvbS9zaXRlcy9kZWZhdWx0L2ZpbGVzL3ZpZGVvLXRodW1ibmFpbHMvMjAyMi0xMS9oaWdod2F5LTJfMS5tcDRcXFwiXFxuICAgICAgLz5cXG4gICAgICA8c291cmNlXFxuICAgICAgICBzcmM9XFxcImh0dHBzOi8vd2ItaG9yaXpvbi5jb20vc2l0ZXMvZGVmYXVsdC9maWxlcy92aWRlby10aHVtYm5haWxzLzIwMjItMTEvaGlnaHdheS0yXzAud2VibVxcXCJcXG4gICAgICAvPlxcbiAgICA8L3ZpZGVvPlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJmYWNtYXN0ZXItY29taW5nLXNvb24tY29udGFpbmVyIGNvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbWluZy1zb29uLXRleHQtZWxlbWVudCB0ZXh0LWNlbnRlclxcXCI+XFxuICAgICAgPGgxIGNsYXNzPVxcXCJjb21pbmctc29vbi10aXRsZSBmb250LXdlaWdodC1ib2xkZXIgd2J1LXRpdHJlLXN1cHByYVxcXCI+XFxuICAgICAgICBDT01JTkcgU09PTlxcbiAgICAgIDwvaDE+XFxuICAgICAgPGgzIGNsYXNzPVxcXCJjb21pbmctc29vbi1zdWJ0aXRsZSBmb250LXdlaWdodC1ib2xkZXJcXFwiPlxcbiAgICAgICAgUFJPRFVDSU5HIDEgTUlMTElPTiBDQUtFUyBGT1JcXG4gICAgICA8L2gzPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbWluZy1zb29uLWRlc2NyaXB0aW9uXFxcIj5cXG4gICAgICAgIDxwPlxcbiAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBGdXNjZSBhYyBtaVxcbiAgICAgICAgICBsYWN1cy4gUGhhc2VsbHVzIG1vbGxpcyBldCBuaWJoIGV0IGNvbmRpbWVudHVtLiBJbnRlZ2VyIGR1aSBkaWFtLFxcbiAgICAgICAgICBvcm5hcmUgYSBzYWdpdHRpcyB2ZWwsIHN1c2NpcGl0IGV0IGxlby5cXG4gICAgICAgIDwvcD5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbWluZy1zb29uLWNvdW50XFxcIj5cXG4gICAgICA8cCBpZD1cXFwiZGVtb1xcXCIgY2xhc3M9XFxcImNvdW50XFxcIj48L3A+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8ZGl2XFxuICAgIGNsYXNzPVxcXCJjb21pbmctc29vbi1jb3B5LXJpZ2h0IGQtZmxleCBwb3NpdGlvbi1yZWxhdGl2ZSBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclxcXCJcXG4gID5cXG4gICAgPHA+Q29weXJpZ2h0IE5JQ0FNRVggYnkgPGEgaHJlZj1cXFwiaGFiZXVrLmNvbVxcXCI+SGFiZXVrLmNvbTwvYT48L3A+XFxuICA8L2Rpdj5cXG4gIDxzY3JpcHQ+XFxuICAgIC8vIFNldCB0aGUgZGF0ZSB3ZSdyZSBjb3VudGluZyBkb3duIHRvXFxuICAgIHZhciBjb3VudERvd25EYXRlID0gbmV3IERhdGUoXFxcIkphbiA1LCAyMDI0IDE1OjM3OjI1XFxcIikuZ2V0VGltZSgpO1xcblxcbiAgICAvLyBVcGRhdGUgdGhlIGNvdW50IGRvd24gZXZlcnkgMSBzZWNvbmRcXG4gICAgdmFyIHggPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XFxuICAgICAgLy8gR2V0IHRvZGF5J3MgZGF0ZSBhbmQgdGltZVxcbiAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcXG5cXG4gICAgICAvLyBGaW5kIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIG5vdyBhbmQgdGhlIGNvdW50IGRvd24gZGF0ZVxcbiAgICAgIHZhciBkaXN0YW5jZSA9IGNvdW50RG93bkRhdGUgLSBub3c7XFxuXFxuICAgICAgLy8gVGltZSBjYWxjdWxhdGlvbnMgZm9yIGRheXMsIGhvdXJzLCBtaW51dGVzIGFuZCBzZWNvbmRzXFxuICAgICAgdmFyIGRheXMgPSBNYXRoLmZsb29yKGRpc3RhbmNlIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcXG4gICAgICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKFxcbiAgICAgICAgKGRpc3RhbmNlICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MClcXG4gICAgICApO1xcbiAgICAgIHZhciBtaW51dGVzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcXG4gICAgICB2YXIgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XFxuXFxuICAgICAgLy8gT3V0cHV0IHRoZSByZXN1bHQgaW4gYW4gZWxlbWVudCB3aXRoIGlkPVxcXCJkZW1vXFxcIlxcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxcXCJkZW1vXFxcIikuaW5uZXJIVE1MID1cXG4gICAgICAgIFxcXCI8ZGl2IGNsYXNzPSdkZW1vX2VsZW1lbnQnPiA8ZGl2IGNsYXNzPSdyb3cnPiA8ZGl2IGNsYXNzPSdjb2wtNiBjb2wtbWQtMyc+IDxkaXYgY2xhc3M9J3NldCc+IDxkaXYgY2xhc3M9J3RpbWUgaDEgZm9udC13ZWlnaHQtYm9sZGVyJz5cXFwiICtcXG4gICAgICAgIGRheXMgK1xcbiAgICAgICAgXFxcIjwvZGl2PiA8ZGl2IGNsYXNzPSdsZXR0ZXIgaDYgZm9udC13ZWlnaHQtYm9sZGVyJz5kYXlzPC9kaXY+PC9kaXY+PC9kaXY+XFxcIiArXFxuICAgICAgICBcXFwiPGRpdiBjbGFzcz0nY29sLTYgY29sLW1kLTMnPiA8ZGl2IGNsYXNzPSdzZXQnPiA8ZGl2IGNsYXNzPSd0aW1lIGgxIGZvbnQtd2VpZ2h0LWJvbGRlcic+XFxcIiArXFxuICAgICAgICBob3VycyArXFxuICAgICAgICBcXFwiPC9kaXY+IDxkaXYgY2xhc3M9J2xldHRlciBoNiBmb250LXdlaWdodC1ib2xkZXInPmhvdXJzPC9kaXY+PC9kaXY+PC9kaXY+XFxcIiArXFxuICAgICAgICBcXFwiPGRpdiBjbGFzcz0nY29sLTYgY29sLW1kLTMnPiA8ZGl2IGNsYXNzPSdzZXQnPjxkaXYgY2xhc3M9J3RpbWUgaDEgZm9udC13ZWlnaHQtYm9sZGVyJz5cXFwiICtcXG4gICAgICAgIG1pbnV0ZXMgK1xcbiAgICAgICAgXFxcIjwvZGl2PiA8ZGl2IGNsYXNzPSdsZXR0ZXIgaDYgZm9udC13ZWlnaHQtYm9sZGVyJz5taW51dGVzPC9kaXY+PC9kaXY+PC9kaXY+XFxcIiArXFxuICAgICAgICBcXFwiPGRpdiBjbGFzcz0nY29sLTYgY29sLW1kLTMnPiA8ZGl2IGNsYXNzPSdzZXQnPjxkaXYgY2xhc3M9J3RpbWUgaDEgZm9udC13ZWlnaHQtYm9sZGVyJz5cXFwiICtcXG4gICAgICAgIHNlY29uZHMgK1xcbiAgICAgICAgXFxcIjwvZGl2PiA8ZGl2IGNsYXNzPSdsZXR0ZXIgaDYgZm9udC13ZWlnaHQtYm9sZGVyJz4gc2Vjb25kcyA8L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj5cXFwiO1xcblxcbiAgICAgIC8vIElmIHRoZSBjb3VudCBkb3duIGlzIG92ZXIsIHdyaXRlIHNvbWUgdGV4dFxcbiAgICAgIGlmIChkaXN0YW5jZSA8IDApIHtcXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoeCk7XFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcXFwiZGVtb1xcXCIpLmlubmVySFRNTCA9IFxcXCJFWFBJUkVEXFxcIjtcXG4gICAgICB9XFxuICAgIH0sIDEwMDApO1xcbiAgPC9zY3JpcHQ+XFxuPC9zZWN0aW9uPlxcblwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL2NvbWluZy1zb29uLXZpZGVvLWJnLmh0bWxcIlxuaW1wb3J0IFwiLi9jb21pbmctc29vbi12aWRlby1iZy5zY3NzXCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=