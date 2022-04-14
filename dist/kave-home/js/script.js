/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/kave-home/mosaic-img/mosaic.js":
/*!********************************************!*\
  !*** ./src/kave-home/mosaic-img/mosaic.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lightgallery_scss_lightgallery_bundle_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lightgallery/scss/lightgallery-bundle.scss */ "./node_modules/lightgallery/scss/lightgallery-bundle.scss");
/* harmony import */ var lightgallery_css_lg_zoom_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lightgallery/css/lg-zoom.css */ "./node_modules/lightgallery/css/lg-zoom.css");
/* harmony import */ var lightgallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lightgallery */ "./node_modules/lightgallery/lightgallery.es5.js");
/* harmony import */ var _mosaic_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mosaic.html */ "./src/kave-home/mosaic-img/mosaic.html");
/* harmony import */ var _mosaic_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mosaic.scss */ "./src/kave-home/mosaic-img/mosaic.scss");

 // import "lightgallery/fonts/lg.ttf";

 //import lgZoom from "lightgallery/plugins/zoom";


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

console.log("glit", lightgallery__WEBPACK_IMPORTED_MODULE_2__["default"]);
(0,lightgallery__WEBPACK_IMPORTED_MODULE_2__["default"])(document.getElementById("my-mosaic-2"));
(0,lightgallery__WEBPACK_IMPORTED_MODULE_2__["default"])(document.getElementById("my-mosaic"));

/***/ }),

/***/ "./src/kave-home/mosaic-img/mosaic.html":
/*!**********************************************!*\
  !*** ./src/kave-home/mosaic-img/mosaic.html ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <!-- ======= Being masaic-img ======= -->\n      <div class=\"mosaic-img\">\n        <div class=\"column-two\" id=\"my-mosaic\">\n          <div\n            class=\"column-two__img gallery-item\"\n            data-src=\"https://cdn.shopify.com/s/files/1/0013/2123/8594/products/MCT-Pure-H-01002_x1060.jpg?v=1629533101\"\n          >\n            <img\n              class=\"ms-img\"\n              src=\"https://cdn.shopify.com/s/files/1/0013/2123/8594/products/MCT-Pure-H-01002_x560.jpg?v=1629533101\"\n            />\n          </div>\n          <div\n            class=\"column-two__img gallery-item\"\n            data-src=\"https://cdn.shopify.com/s/files/1/0013/2123/8594/products/MCT-Pure-H-01001_x1060.jpg?v=1629533101\"\n          >\n            <img\n              class=\"ms-img\"\n              src=\"https://cdn.shopify.com/s/files/1/0013/2123/8594/products/MCT-Pure-H-01001_x560.jpg?v=1629533101\"\n            />\n          </div>\n        </div>\n        <div class=\"column-three\" id=\"my-mosaic-2\">\n          <a\n            class=\"column-three__img gallery-item\"\n            data-src=\"https://cdn.shopify.com/s/files/1/0013/2123/8594/products/MCT-Pure-H-01003_x1060.jpg?v=1629533101\"\n          >\n            <img\n              class=\"ms-img\"\n              src=\"https://cdn.shopify.com/s/files/1/0013/2123/8594/products/MCT-Pure-H-01003_x560.jpg?v=1629533101\"\n            />\n          </a>\n          <a\n            class=\"column-three__img gallery-item\"\n            data-src=\"https://cdn.shopify.com/s/files/1/0013/2123/8594/products/MCT-Pure-H-01004_8419be4a-8429-4e49-9171-baf186199289_x1060.jpg?v=1629533101\"\n          >\n            <img\n              class=\"ms-img\"\n              src=\"https://cdn.shopify.com/s/files/1/0013/2123/8594/products/MCT-Pure-H-01004_8419be4a-8429-4e49-9171-baf186199289_x560.jpg?v=1629533101\"\n            />\n          </a>\n          <a\n            class=\"column-three__img gallery-item\"\n            data-src=\"https://cdn.shopify.com/s/files/1/0013/2123/8594/products/nutribe_mct_pure_2L_front_x1060.jpg?v=1639067309\"\n          >\n            <img\n              class=\"ms-img\"\n              src=\"https://cdn.shopify.com/s/files/1/0013/2123/8594/products/nutribe_mct_pure_2L_front_x560.jpg?v=1639067309\"\n            />\n          </a>\n        </div>\n      </div>\n      <!-- ======= End masaic-img ======= -->\n    </div>\n  </div>\n</div>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "./node_modules/lightgallery/lightgallery.es5.js":
/*!*******************************************************!*\
  !*** ./node_modules/lightgallery/lightgallery.es5.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/*!
 * lightgallery | 2.4.0 | January 29th 2022
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/**
 * List of lightGallery events
 * All events should be documented here
 * Below interfaces are used to build the website documentations
 * */
var lGEvents = {
    afterAppendSlide: 'lgAfterAppendSlide',
    init: 'lgInit',
    hasVideo: 'lgHasVideo',
    containerResize: 'lgContainerResize',
    updateSlides: 'lgUpdateSlides',
    afterAppendSubHtml: 'lgAfterAppendSubHtml',
    beforeOpen: 'lgBeforeOpen',
    afterOpen: 'lgAfterOpen',
    slideItemLoad: 'lgSlideItemLoad',
    beforeSlide: 'lgBeforeSlide',
    afterSlide: 'lgAfterSlide',
    posterClick: 'lgPosterClick',
    dragStart: 'lgDragStart',
    dragMove: 'lgDragMove',
    dragEnd: 'lgDragEnd',
    beforeNextSlide: 'lgBeforeNextSlide',
    beforePrevSlide: 'lgBeforePrevSlide',
    beforeClose: 'lgBeforeClose',
    afterClose: 'lgAfterClose',
    rotateLeft: 'lgRotateLeft',
    rotateRight: 'lgRotateRight',
    flipHorizontal: 'lgFlipHorizontal',
    flipVertical: 'lgFlipVertical',
    autoplay: 'lgAutoplay',
    autoplayStart: 'lgAutoplayStart',
    autoplayStop: 'lgAutoplayStop',
};

var lightGalleryCoreSettings = {
    mode: 'lg-slide',
    easing: 'ease',
    speed: 400,
    licenseKey: '0000-0000-000-0000',
    height: '100%',
    width: '100%',
    addClass: '',
    startClass: 'lg-start-zoom',
    backdropDuration: 300,
    container: '',
    startAnimationDuration: 400,
    zoomFromOrigin: true,
    hideBarsDelay: 0,
    showBarsAfter: 10000,
    slideDelay: 0,
    supportLegacyBrowser: true,
    allowMediaOverlap: false,
    videoMaxSize: '1280-720',
    loadYouTubePoster: true,
    defaultCaptionHeight: 0,
    ariaLabelledby: '',
    ariaDescribedby: '',
    closable: true,
    swipeToClose: true,
    closeOnTap: true,
    showCloseIcon: true,
    showMaximizeIcon: false,
    loop: true,
    escKey: true,
    keyPress: true,
    controls: true,
    slideEndAnimation: true,
    hideControlOnEnd: false,
    mousewheel: false,
    getCaptionFromTitleOrAlt: true,
    appendSubHtmlTo: '.lg-sub-html',
    subHtmlSelectorRelative: false,
    preload: 2,
    numberOfSlideItemsInDom: 10,
    selector: '',
    selectWithin: '',
    nextHtml: '',
    prevHtml: '',
    index: 0,
    iframeWidth: '100%',
    iframeHeight: '100%',
    iframeMaxWidth: '100%',
    iframeMaxHeight: '100%',
    download: true,
    counter: true,
    appendCounterTo: '.lg-toolbar',
    swipeThreshold: 50,
    enableSwipe: true,
    enableDrag: true,
    dynamic: false,
    dynamicEl: [],
    extraProps: [],
    exThumbImage: '',
    isMobile: undefined,
    mobileSettings: {
        controls: false,
        showCloseIcon: false,
        download: false,
    },
    plugins: [],
    strings: {
        closeGallery: 'Close gallery',
        toggleMaximize: 'Toggle maximize',
        previousSlide: 'Previous slide',
        nextSlide: 'Next slide',
        download: 'Download',
        playVideo: 'Play video',
    },
};

function initLgPolyfills() {
    (function () {
        if (typeof window.CustomEvent === 'function')
            return false;
        function CustomEvent(event, params) {
            params = params || {
                bubbles: false,
                cancelable: false,
                detail: null,
            };
            var evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
        }
        window.CustomEvent = CustomEvent;
    })();
    (function () {
        if (!Element.prototype.matches) {
            Element.prototype.matches =
                Element.prototype.msMatchesSelector ||
                    Element.prototype.webkitMatchesSelector;
        }
    })();
}
var lgQuery = /** @class */ (function () {
    function lgQuery(selector) {
        this.cssVenderPrefixes = [
            'TransitionDuration',
            'TransitionTimingFunction',
            'Transform',
            'Transition',
        ];
        this.selector = this._getSelector(selector);
        this.firstElement = this._getFirstEl();
        return this;
    }
    lgQuery.generateUUID = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    };
    lgQuery.prototype._getSelector = function (selector, context) {
        if (context === void 0) { context = document; }
        if (typeof selector !== 'string') {
            return selector;
        }
        context = context || document;
        var fl = selector.substring(0, 1);
        if (fl === '#') {
            return context.querySelector(selector);
        }
        else {
            return context.querySelectorAll(selector);
        }
    };
    lgQuery.prototype._each = function (func) {
        if (!this.selector) {
            return this;
        }
        if (this.selector.length !== undefined) {
            [].forEach.call(this.selector, func);
        }
        else {
            func(this.selector, 0);
        }
        return this;
    };
    lgQuery.prototype._setCssVendorPrefix = function (el, cssProperty, value) {
        // prettier-ignore
        var property = cssProperty.replace(/-([a-z])/gi, function (s, group1) {
            return group1.toUpperCase();
        });
        if (this.cssVenderPrefixes.indexOf(property) !== -1) {
            el.style[property.charAt(0).toLowerCase() + property.slice(1)] = value;
            el.style['webkit' + property] = value;
            el.style['moz' + property] = value;
            el.style['ms' + property] = value;
            el.style['o' + property] = value;
        }
        else {
            el.style[property] = value;
        }
    };
    lgQuery.prototype._getFirstEl = function () {
        if (this.selector && this.selector.length !== undefined) {
            return this.selector[0];
        }
        else {
            return this.selector;
        }
    };
    lgQuery.prototype.isEventMatched = function (event, eventName) {
        var eventNamespace = eventName.split('.');
        return event
            .split('.')
            .filter(function (e) { return e; })
            .every(function (e) {
            return eventNamespace.indexOf(e) !== -1;
        });
    };
    lgQuery.prototype.attr = function (attr, value) {
        if (value === undefined) {
            if (!this.firstElement) {
                return '';
            }
            return this.firstElement.getAttribute(attr);
        }
        this._each(function (el) {
            el.setAttribute(attr, value);
        });
        return this;
    };
    lgQuery.prototype.find = function (selector) {
        return $LG(this._getSelector(selector, this.selector));
    };
    lgQuery.prototype.first = function () {
        if (this.selector && this.selector.length !== undefined) {
            return $LG(this.selector[0]);
        }
        else {
            return $LG(this.selector);
        }
    };
    lgQuery.prototype.eq = function (index) {
        return $LG(this.selector[index]);
    };
    lgQuery.prototype.parent = function () {
        return $LG(this.selector.parentElement);
    };
    lgQuery.prototype.get = function () {
        return this._getFirstEl();
    };
    lgQuery.prototype.removeAttr = function (attributes) {
        var attrs = attributes.split(' ');
        this._each(function (el) {
            attrs.forEach(function (attr) { return el.removeAttribute(attr); });
        });
        return this;
    };
    lgQuery.prototype.wrap = function (className) {
        if (!this.firstElement) {
            return this;
        }
        var wrapper = document.createElement('div');
        wrapper.className = className;
        this.firstElement.parentNode.insertBefore(wrapper, this.firstElement);
        this.firstElement.parentNode.removeChild(this.firstElement);
        wrapper.appendChild(this.firstElement);
        return this;
    };
    lgQuery.prototype.addClass = function (classNames) {
        if (classNames === void 0) { classNames = ''; }
        this._each(function (el) {
            // IE doesn't support multiple arguments
            classNames.split(' ').forEach(function (className) {
                if (className) {
                    el.classList.add(className);
                }
            });
        });
        return this;
    };
    lgQuery.prototype.removeClass = function (classNames) {
        this._each(function (el) {
            // IE doesn't support multiple arguments
            classNames.split(' ').forEach(function (className) {
                if (className) {
                    el.classList.remove(className);
                }
            });
        });
        return this;
    };
    lgQuery.prototype.hasClass = function (className) {
        if (!this.firstElement) {
            return false;
        }
        return this.firstElement.classList.contains(className);
    };
    lgQuery.prototype.hasAttribute = function (attribute) {
        if (!this.firstElement) {
            return false;
        }
        return this.firstElement.hasAttribute(attribute);
    };
    lgQuery.prototype.toggleClass = function (className) {
        if (!this.firstElement) {
            return this;
        }
        if (this.hasClass(className)) {
            this.removeClass(className);
        }
        else {
            this.addClass(className);
        }
        return this;
    };
    lgQuery.prototype.css = function (property, value) {
        var _this = this;
        this._each(function (el) {
            _this._setCssVendorPrefix(el, property, value);
        });
        return this;
    };
    // Need to pass separate namespaces for separate elements
    lgQuery.prototype.on = function (events, listener) {
        var _this = this;
        if (!this.selector) {
            return this;
        }
        events.split(' ').forEach(function (event) {
            if (!Array.isArray(lgQuery.eventListeners[event])) {
                lgQuery.eventListeners[event] = [];
            }
            lgQuery.eventListeners[event].push(listener);
            _this.selector.addEventListener(event.split('.')[0], listener);
        });
        return this;
    };
    // @todo - test this
    lgQuery.prototype.once = function (event, listener) {
        var _this = this;
        this.on(event, function () {
            _this.off(event);
            listener(event);
        });
        return this;
    };
    lgQuery.prototype.off = function (event) {
        var _this = this;
        if (!this.selector) {
            return this;
        }
        Object.keys(lgQuery.eventListeners).forEach(function (eventName) {
            if (_this.isEventMatched(event, eventName)) {
                lgQuery.eventListeners[eventName].forEach(function (listener) {
                    _this.selector.removeEventListener(eventName.split('.')[0], listener);
                });
                lgQuery.eventListeners[eventName] = [];
            }
        });
        return this;
    };
    lgQuery.prototype.trigger = function (event, detail) {
        if (!this.firstElement) {
            return this;
        }
        var customEvent = new CustomEvent(event.split('.')[0], {
            detail: detail || null,
        });
        this.firstElement.dispatchEvent(customEvent);
        return this;
    };
    // Does not support IE
    lgQuery.prototype.load = function (url) {
        var _this = this;
        fetch(url)
            .then(function (res) { return res.text(); })
            .then(function (html) {
            _this.selector.innerHTML = html;
        });
        return this;
    };
    lgQuery.prototype.html = function (html) {
        if (html === undefined) {
            if (!this.firstElement) {
                return '';
            }
            return this.firstElement.innerHTML;
        }
        this._each(function (el) {
            el.innerHTML = html;
        });
        return this;
    };
    lgQuery.prototype.append = function (html) {
        this._each(function (el) {
            if (typeof html === 'string') {
                el.insertAdjacentHTML('beforeend', html);
            }
            else {
                el.appendChild(html);
            }
        });
        return this;
    };
    lgQuery.prototype.prepend = function (html) {
        this._each(function (el) {
            el.insertAdjacentHTML('afterbegin', html);
        });
        return this;
    };
    lgQuery.prototype.remove = function () {
        this._each(function (el) {
            el.parentNode.removeChild(el);
        });
        return this;
    };
    lgQuery.prototype.empty = function () {
        this._each(function (el) {
            el.innerHTML = '';
        });
        return this;
    };
    lgQuery.prototype.scrollTop = function (scrollTop) {
        if (scrollTop !== undefined) {
            document.body.scrollTop = scrollTop;
            document.documentElement.scrollTop = scrollTop;
            return this;
        }
        else {
            return (window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0);
        }
    };
    lgQuery.prototype.scrollLeft = function (scrollLeft) {
        if (scrollLeft !== undefined) {
            document.body.scrollLeft = scrollLeft;
            document.documentElement.scrollLeft = scrollLeft;
            return this;
        }
        else {
            return (window.pageXOffset ||
                document.documentElement.scrollLeft ||
                document.body.scrollLeft ||
                0);
        }
    };
    lgQuery.prototype.offset = function () {
        if (!this.firstElement) {
            return {
                left: 0,
                top: 0,
            };
        }
        var rect = this.firstElement.getBoundingClientRect();
        var bodyMarginLeft = $LG('body').style().marginLeft;
        // Minus body margin - https://stackoverflow.com/questions/30711548/is-getboundingclientrect-left-returning-a-wrong-value
        return {
            left: rect.left - parseFloat(bodyMarginLeft) + this.scrollLeft(),
            top: rect.top + this.scrollTop(),
        };
    };
    lgQuery.prototype.style = function () {
        if (!this.firstElement) {
            return {};
        }
        return (this.firstElement.currentStyle ||
            window.getComputedStyle(this.firstElement));
    };
    // Width without padding and border even if box-sizing is used.
    lgQuery.prototype.width = function () {
        var style = this.style();
        return (this.firstElement.clientWidth -
            parseFloat(style.paddingLeft) -
            parseFloat(style.paddingRight));
    };
    // Height without padding and border even if box-sizing is used.
    lgQuery.prototype.height = function () {
        var style = this.style();
        return (this.firstElement.clientHeight -
            parseFloat(style.paddingTop) -
            parseFloat(style.paddingBottom));
    };
    lgQuery.eventListeners = {};
    return lgQuery;
}());
function $LG(selector) {
    initLgPolyfills();
    return new lgQuery(selector);
}

var defaultDynamicOptions = [
    'src',
    'sources',
    'subHtml',
    'subHtmlUrl',
    'html',
    'video',
    'poster',
    'slideName',
    'responsive',
    'srcset',
    'sizes',
    'iframe',
    'downloadUrl',
    'download',
    'width',
    'facebookShareUrl',
    'tweetText',
    'iframeTitle',
    'twitterShareUrl',
    'pinterestShareUrl',
    'pinterestText',
    'fbHtml',
    'disqusIdentifier',
    'disqusUrl',
];
// Convert html data-attribute to camalcase
function convertToData(attr) {
    // FInd a way for lgsize
    if (attr === 'href') {
        return 'src';
    }
    attr = attr.replace('data-', '');
    attr = attr.charAt(0).toLowerCase() + attr.slice(1);
    attr = attr.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
    return attr;
}
var utils = {
    /**
     * get possible width and height from the lgSize attribute. Used for ZoomFromOrigin option
     */
    getSize: function (el, container, spacing, defaultLgSize) {
        if (spacing === void 0) { spacing = 0; }
        var LGel = $LG(el);
        var lgSize = LGel.attr('data-lg-size') || defaultLgSize;
        if (!lgSize) {
            return;
        }
        var isResponsiveSizes = lgSize.split(',');
        // if at-least two viewport sizes are available
        if (isResponsiveSizes[1]) {
            var wWidth = window.innerWidth;
            for (var i = 0; i < isResponsiveSizes.length; i++) {
                var size_1 = isResponsiveSizes[i];
                var responsiveWidth = parseInt(size_1.split('-')[2], 10);
                if (responsiveWidth > wWidth) {
                    lgSize = size_1;
                    break;
                }
                // take last item as last option
                if (i === isResponsiveSizes.length - 1) {
                    lgSize = size_1;
                }
            }
        }
        var size = lgSize.split('-');
        var width = parseInt(size[0], 10);
        var height = parseInt(size[1], 10);
        var cWidth = container.width();
        var cHeight = container.height() - spacing;
        var maxWidth = Math.min(cWidth, width);
        var maxHeight = Math.min(cHeight, height);
        var ratio = Math.min(maxWidth / width, maxHeight / height);
        return { width: width * ratio, height: height * ratio };
    },
    /**
     * @desc Get transform value based on the imageSize. Used for ZoomFromOrigin option
     * @param {jQuery Element}
     * @returns {String} Transform CSS string
     */
    getTransform: function (el, container, top, bottom, imageSize) {
        if (!imageSize) {
            return;
        }
        var LGel = $LG(el).find('img').first();
        if (!LGel.get()) {
            return;
        }
        var containerRect = container.get().getBoundingClientRect();
        var wWidth = containerRect.width;
        // using innerWidth to include mobile safari bottom bar
        var wHeight = container.height() - (top + bottom);
        var elWidth = LGel.width();
        var elHeight = LGel.height();
        var elStyle = LGel.style();
        var x = (wWidth - elWidth) / 2 -
            LGel.offset().left +
            (parseFloat(elStyle.paddingLeft) || 0) +
            (parseFloat(elStyle.borderLeft) || 0) +
            $LG(window).scrollLeft() +
            containerRect.left;
        var y = (wHeight - elHeight) / 2 -
            LGel.offset().top +
            (parseFloat(elStyle.paddingTop) || 0) +
            (parseFloat(elStyle.borderTop) || 0) +
            $LG(window).scrollTop() +
            top;
        var scX = elWidth / imageSize.width;
        var scY = elHeight / imageSize.height;
        var transform = 'translate3d(' +
            (x *= -1) +
            'px, ' +
            (y *= -1) +
            'px, 0) scale3d(' +
            scX +
            ', ' +
            scY +
            ', 1)';
        return transform;
    },
    getIframeMarkup: function (iframeWidth, iframeHeight, iframeMaxWidth, iframeMaxHeight, src, iframeTitle) {
        var title = iframeTitle ? 'title="' + iframeTitle + '"' : '';
        return "<div class=\"lg-video-cont lg-has-iframe\" style=\"width:" + iframeWidth + "; max-width:" + iframeMaxWidth + "; height: " + iframeHeight + "; max-height:" + iframeMaxHeight + "\">\n                    <iframe class=\"lg-object\" frameborder=\"0\" " + title + " src=\"" + src + "\"  allowfullscreen=\"true\"></iframe>\n                </div>";
    },
    getImgMarkup: function (index, src, altAttr, srcset, sizes, sources) {
        var srcsetAttr = srcset ? "srcset=\"" + srcset + "\"" : '';
        var sizesAttr = sizes ? "sizes=\"" + sizes + "\"" : '';
        var imgMarkup = "<img " + altAttr + " " + srcsetAttr + "  " + sizesAttr + " class=\"lg-object lg-image\" data-index=\"" + index + "\" src=\"" + src + "\" />";
        var sourceTag = '';
        if (sources) {
            var sourceObj = typeof sources === 'string' ? JSON.parse(sources) : sources;
            sourceTag = sourceObj.map(function (source) {
                var attrs = '';
                Object.keys(source).forEach(function (key) {
                    // Do not remove the first space as it is required to separate the attributes
                    attrs += " " + key + "=\"" + source[key] + "\"";
                });
                return "<source " + attrs + "></source>";
            });
        }
        return "" + sourceTag + imgMarkup;
    },
    // Get src from responsive src
    getResponsiveSrc: function (srcItms) {
        var rsWidth = [];
        var rsSrc = [];
        var src = '';
        for (var i = 0; i < srcItms.length; i++) {
            var _src = srcItms[i].split(' ');
            // Manage empty space
            if (_src[0] === '') {
                _src.splice(0, 1);
            }
            rsSrc.push(_src[0]);
            rsWidth.push(_src[1]);
        }
        var wWidth = window.innerWidth;
        for (var j = 0; j < rsWidth.length; j++) {
            if (parseInt(rsWidth[j], 10) > wWidth) {
                src = rsSrc[j];
                break;
            }
        }
        return src;
    },
    isImageLoaded: function (img) {
        if (!img)
            return false;
        // During the onload event, IE correctly identifies any images that
        // weren’t downloaded as not complete. Others should too. Gecko-based
        // browsers act like NS4 in that they report this incorrectly.
        if (!img.complete) {
            return false;
        }
        // However, they do have two very useful properties: naturalWidth and
        // naturalHeight. These give the true size of the image. If it failed
        // to load, either of these should be zero.
        if (img.naturalWidth === 0) {
            return false;
        }
        // No other way of checking: assume it’s ok.
        return true;
    },
    getVideoPosterMarkup: function (_poster, dummyImg, videoContStyle, playVideoString, _isVideo) {
        var videoClass = '';
        if (_isVideo && _isVideo.youtube) {
            videoClass = 'lg-has-youtube';
        }
        else if (_isVideo && _isVideo.vimeo) {
            videoClass = 'lg-has-vimeo';
        }
        else {
            videoClass = 'lg-has-html5';
        }
        return "<div class=\"lg-video-cont " + videoClass + "\" style=\"" + videoContStyle + "\">\n                <div class=\"lg-video-play-button\">\n                <svg\n                    viewBox=\"0 0 20 20\"\n                    preserveAspectRatio=\"xMidYMid\"\n                    focusable=\"false\"\n                    aria-labelledby=\"" + playVideoString + "\"\n                    role=\"img\"\n                    class=\"lg-video-play-icon\"\n                >\n                    <title>" + playVideoString + "</title>\n                    <polygon class=\"lg-video-play-icon-inner\" points=\"1,0 20,10 1,20\"></polygon>\n                </svg>\n                <svg class=\"lg-video-play-icon-bg\" viewBox=\"0 0 50 50\" focusable=\"false\">\n                    <circle cx=\"50%\" cy=\"50%\" r=\"20\"></circle></svg>\n                <svg class=\"lg-video-play-icon-circle\" viewBox=\"0 0 50 50\" focusable=\"false\">\n                    <circle cx=\"50%\" cy=\"50%\" r=\"20\"></circle>\n                </svg>\n            </div>\n            " + (dummyImg || '') + "\n            <img class=\"lg-object lg-video-poster\" src=\"" + _poster + "\" />\n        </div>";
    },
    /**
     * @desc Create dynamic elements array from gallery items when dynamic option is false
     * It helps to avoid frequent DOM interaction
     * and avoid multiple checks for dynamic elments
     *
     * @returns {Array} dynamicEl
     */
    getDynamicOptions: function (items, extraProps, getCaptionFromTitleOrAlt, exThumbImage) {
        var dynamicElements = [];
        var availableDynamicOptions = __spreadArrays(defaultDynamicOptions, extraProps);
        [].forEach.call(items, function (item) {
            var dynamicEl = {};
            for (var i = 0; i < item.attributes.length; i++) {
                var attr = item.attributes[i];
                if (attr.specified) {
                    var dynamicAttr = convertToData(attr.name);
                    var label = '';
                    if (availableDynamicOptions.indexOf(dynamicAttr) > -1) {
                        label = dynamicAttr;
                    }
                    if (label) {
                        dynamicEl[label] = attr.value;
                    }
                }
            }
            var currentItem = $LG(item);
            var alt = currentItem.find('img').first().attr('alt');
            var title = currentItem.attr('title');
            var thumb = exThumbImage
                ? currentItem.attr(exThumbImage)
                : currentItem.find('img').first().attr('src');
            dynamicEl.thumb = thumb;
            if (getCaptionFromTitleOrAlt && !dynamicEl.subHtml) {
                dynamicEl.subHtml = title || alt || '';
            }
            dynamicEl.alt = alt || title || '';
            dynamicElements.push(dynamicEl);
        });
        return dynamicElements;
    },
    isMobile: function () {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    },
    /**
     * @desc Check the given src is video
     * @param {String} src
     * @return {Object} video type
     * Ex:{ youtube  :  ["//www.youtube.com/watch?v=c0asJgSyxcY", "c0asJgSyxcY"] }
     *
     * @todo - this information can be moved to dynamicEl to avoid frequent calls
     */
    isVideo: function (src, isHTML5VIdeo, index) {
        if (!src) {
            if (isHTML5VIdeo) {
                return {
                    html5: true,
                };
            }
            else {
                console.error('lightGallery :- data-src is not provided on slide item ' +
                    (index + 1) +
                    '. Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/');
                return;
            }
        }
        var youtube = src.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i);
        var vimeo = src.match(/\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i);
        var wistia = src.match(/https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/);
        if (youtube) {
            return {
                youtube: youtube,
            };
        }
        else if (vimeo) {
            return {
                vimeo: vimeo,
            };
        }
        else if (wistia) {
            return {
                wistia: wistia,
            };
        }
    },
};

// @ref - https://stackoverflow.com/questions/3971841/how-to-resize-images-proportionally-keeping-the-aspect-ratio
// @ref - https://2ality.com/2017/04/setting-up-multi-platform-packages.html
// Unique id for each gallery
var lgId = 0;
var LightGallery = /** @class */ (function () {
    function LightGallery(element, options) {
        this.lgOpened = false;
        this.index = 0;
        // lightGallery modules
        this.plugins = [];
        // false when lightGallery load first slide content;
        this.lGalleryOn = false;
        // True when a slide animation is in progress
        this.lgBusy = false;
        this.currentItemsInDom = [];
        // Scroll top value before lightGallery is opened
        this.prevScrollTop = 0;
        this.isDummyImageRemoved = false;
        this.dragOrSwipeEnabled = false;
        this.mediaContainerPosition = {
            top: 0,
            bottom: 0,
        };
        if (!element) {
            return this;
        }
        lgId++;
        this.lgId = lgId;
        this.el = element;
        this.LGel = $LG(element);
        this.generateSettings(options);
        this.buildModules();
        // When using dynamic mode, ensure dynamicEl is an array
        if (this.settings.dynamic &&
            this.settings.dynamicEl !== undefined &&
            !Array.isArray(this.settings.dynamicEl)) {
            throw 'When using dynamic mode, you must also define dynamicEl as an Array.';
        }
        this.galleryItems = this.getItems();
        this.normalizeSettings();
        // Gallery items
        this.init();
        this.validateLicense();
        return this;
    }
    LightGallery.prototype.generateSettings = function (options) {
        // lightGallery settings
        this.settings = __assign(__assign({}, lightGalleryCoreSettings), options);
        if (this.settings.isMobile &&
            typeof this.settings.isMobile === 'function'
            ? this.settings.isMobile()
            : utils.isMobile()) {
            var mobileSettings = __assign(__assign({}, this.settings.mobileSettings), this.settings.mobileSettings);
            this.settings = __assign(__assign({}, this.settings), mobileSettings);
        }
    };
    LightGallery.prototype.normalizeSettings = function () {
        if (this.settings.slideEndAnimation) {
            this.settings.hideControlOnEnd = false;
        }
        if (!this.settings.closable) {
            this.settings.swipeToClose = false;
        }
        // And reset it on close to get the correct value next time
        this.zoomFromOrigin = this.settings.zoomFromOrigin;
        // At the moment, Zoom from image doesn't support dynamic options
        // @todo add zoomFromOrigin support for dynamic images
        if (this.settings.dynamic) {
            this.zoomFromOrigin = false;
        }
        if (!this.settings.container) {
            this.settings.container = document.body;
        }
        // settings.preload should not be grater than $item.length
        this.settings.preload = Math.min(this.settings.preload, this.galleryItems.length);
    };
    LightGallery.prototype.init = function () {
        var _this = this;
        this.addSlideVideoInfo(this.galleryItems);
        this.buildStructure();
        this.LGel.trigger(lGEvents.init, {
            instance: this,
        });
        if (this.settings.keyPress) {
            this.keyPress();
        }
        setTimeout(function () {
            _this.enableDrag();
            _this.enableSwipe();
            _this.triggerPosterClick();
        }, 50);
        this.arrow();
        if (this.settings.mousewheel) {
            this.mousewheel();
        }
        if (!this.settings.dynamic) {
            this.openGalleryOnItemClick();
        }
    };
    LightGallery.prototype.openGalleryOnItemClick = function () {
        var _this = this;
        var _loop_1 = function (index) {
            var element = this_1.items[index];
            var $element = $LG(element);
            // Using different namespace for click because click event should not unbind if selector is same object('this')
            // @todo manage all event listners - should have namespace that represent element
            var uuid = lgQuery.generateUUID();
            $element
                .attr('data-lg-id', uuid)
                .on("click.lgcustom-item-" + uuid, function (e) {
                e.preventDefault();
                var currentItemIndex = _this.settings.index || index;
                _this.openGallery(currentItemIndex, element);
            });
        };
        var this_1 = this;
        // Using for loop instead of using bubbling as the items can be any html element.
        for (var index = 0; index < this.items.length; index++) {
            _loop_1(index);
        }
    };
    /**
     * Module constructor
     * Modules are build incrementally.
     * Gallery should be opened only once all the modules are initialized.
     * use moduleBuildTimeout to make sure this
     */
    LightGallery.prototype.buildModules = function () {
        var _this = this;
        this.settings.plugins.forEach(function (plugin) {
            _this.plugins.push(new plugin(_this, $LG));
        });
    };
    LightGallery.prototype.validateLicense = function () {
        if (!this.settings.licenseKey) {
            console.error('Please provide a valid license key');
        }
        else if (this.settings.licenseKey === '0000-0000-000-0000') {
            console.warn("lightGallery: " + this.settings.licenseKey + " license key is not valid for production use");
        }
    };
    LightGallery.prototype.getSlideItem = function (index) {
        return $LG(this.getSlideItemId(index));
    };
    LightGallery.prototype.getSlideItemId = function (index) {
        return "#lg-item-" + this.lgId + "-" + index;
    };
    LightGallery.prototype.getIdName = function (id) {
        return id + "-" + this.lgId;
    };
    LightGallery.prototype.getElementById = function (id) {
        return $LG("#" + this.getIdName(id));
    };
    LightGallery.prototype.manageSingleSlideClassName = function () {
        if (this.galleryItems.length < 2) {
            this.outer.addClass('lg-single-item');
        }
        else {
            this.outer.removeClass('lg-single-item');
        }
    };
    LightGallery.prototype.buildStructure = function () {
        var _this = this;
        var container = this.$container && this.$container.get();
        if (container) {
            return;
        }
        var controls = '';
        var subHtmlCont = '';
        // Create controls
        if (this.settings.controls) {
            controls = "<button type=\"button\" id=\"" + this.getIdName('lg-prev') + "\" aria-label=\"" + this.settings.strings['previousSlide'] + "\" class=\"lg-prev lg-icon\"> " + this.settings.prevHtml + " </button>\n                <button type=\"button\" id=\"" + this.getIdName('lg-next') + "\" aria-label=\"" + this.settings.strings['nextSlide'] + "\" class=\"lg-next lg-icon\"> " + this.settings.nextHtml + " </button>";
        }
        if (this.settings.appendSubHtmlTo !== '.lg-item') {
            subHtmlCont =
                '<div class="lg-sub-html" role="status" aria-live="polite"></div>';
        }
        var addClasses = '';
        if (this.settings.allowMediaOverlap) {
            // Do not remove space before last single quote
            addClasses += 'lg-media-overlap ';
        }
        var ariaLabelledby = this.settings.ariaLabelledby
            ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"'
            : '';
        var ariaDescribedby = this.settings.ariaDescribedby
            ? 'aria-describedby="' + this.settings.ariaDescribedby + '"'
            : '';
        var containerClassName = "lg-container " + this.settings.addClass + " " + (document.body !== this.settings.container ? 'lg-inline' : '');
        var closeIcon = this.settings.closable && this.settings.showCloseIcon
            ? "<button type=\"button\" aria-label=\"" + this.settings.strings['closeGallery'] + "\" id=\"" + this.getIdName('lg-close') + "\" class=\"lg-close lg-icon\"></button>"
            : '';
        var maximizeIcon = this.settings.showMaximizeIcon
            ? "<button type=\"button\" aria-label=\"" + this.settings.strings['toggleMaximize'] + "\" id=\"" + this.getIdName('lg-maximize') + "\" class=\"lg-maximize lg-icon\"></button>"
            : '';
        var template = "\n        <div class=\"" + containerClassName + "\" id=\"" + this.getIdName('lg-container') + "\" tabindex=\"-1\" aria-modal=\"true\" " + ariaLabelledby + " " + ariaDescribedby + " role=\"dialog\"\n        >\n            <div id=\"" + this.getIdName('lg-backdrop') + "\" class=\"lg-backdrop\"></div>\n\n            <div id=\"" + this.getIdName('lg-outer') + "\" class=\"lg-outer lg-use-css3 lg-css3 lg-hide-items " + addClasses + " \">\n\n              <div id=\"" + this.getIdName('lg-content') + "\" class=\"lg-content\">\n                <div id=\"" + this.getIdName('lg-inner') + "\" class=\"lg-inner\">\n                </div>\n                " + controls + "\n              </div>\n                <div id=\"" + this.getIdName('lg-toolbar') + "\" class=\"lg-toolbar lg-group\">\n                    " + maximizeIcon + "\n                    " + closeIcon + "\n                    </div>\n                    " + (this.settings.appendSubHtmlTo === '.lg-outer'
            ? subHtmlCont
            : '') + "\n                <div id=\"" + this.getIdName('lg-components') + "\" class=\"lg-components\">\n                    " + (this.settings.appendSubHtmlTo === '.lg-sub-html'
            ? subHtmlCont
            : '') + "\n                </div>\n            </div>\n        </div>\n        ";
        $LG(this.settings.container).append(template);
        if (document.body !== this.settings.container) {
            $LG(this.settings.container).css('position', 'relative');
        }
        this.outer = this.getElementById('lg-outer');
        this.$lgComponents = this.getElementById('lg-components');
        this.$backdrop = this.getElementById('lg-backdrop');
        this.$container = this.getElementById('lg-container');
        this.$inner = this.getElementById('lg-inner');
        this.$content = this.getElementById('lg-content');
        this.$toolbar = this.getElementById('lg-toolbar');
        this.$backdrop.css('transition-duration', this.settings.backdropDuration + 'ms');
        var outerClassNames = this.settings.mode + " ";
        this.manageSingleSlideClassName();
        if (this.settings.enableDrag) {
            outerClassNames += 'lg-grab ';
        }
        this.outer.addClass(outerClassNames);
        this.$inner.css('transition-timing-function', this.settings.easing);
        this.$inner.css('transition-duration', this.settings.speed + 'ms');
        if (this.settings.download) {
            this.$toolbar.append("<a id=\"" + this.getIdName('lg-download') + "\" target=\"_blank\" rel=\"noopener\" aria-label=\"" + this.settings.strings['download'] + "\" download class=\"lg-download lg-icon\"></a>");
        }
        this.counter();
        $LG(window).on("resize.lg.global" + this.lgId + " orientationchange.lg.global" + this.lgId, function () {
            _this.refreshOnResize();
        });
        this.hideBars();
        this.manageCloseGallery();
        this.toggleMaximize();
        this.initModules();
    };
    LightGallery.prototype.refreshOnResize = function () {
        if (this.lgOpened) {
            var currentGalleryItem = this.galleryItems[this.index];
            var __slideVideoInfo = currentGalleryItem.__slideVideoInfo;
            this.mediaContainerPosition = this.getMediaContainerPosition();
            var _a = this.mediaContainerPosition, top_1 = _a.top, bottom = _a.bottom;
            this.currentImageSize = utils.getSize(this.items[this.index], this.outer, top_1 + bottom, __slideVideoInfo && this.settings.videoMaxSize);
            if (__slideVideoInfo) {
                this.resizeVideoSlide(this.index, this.currentImageSize);
            }
            if (this.zoomFromOrigin && !this.isDummyImageRemoved) {
                var imgStyle = this.getDummyImgStyles(this.currentImageSize);
                this.outer
                    .find('.lg-current .lg-dummy-img')
                    .first()
                    .attr('style', imgStyle);
            }
            this.LGel.trigger(lGEvents.containerResize);
        }
    };
    LightGallery.prototype.resizeVideoSlide = function (index, imageSize) {
        var lgVideoStyle = this.getVideoContStyle(imageSize);
        var currentSlide = this.getSlideItem(index);
        currentSlide.find('.lg-video-cont').attr('style', lgVideoStyle);
    };
    /**
     * Update slides dynamically.
     * Add, edit or delete slides dynamically when lightGallery is opened.
     * Modify the current gallery items and pass it via updateSlides method
     * @note
     * - Do not mutate existing lightGallery items directly.
     * - Always pass new list of gallery items
     * - You need to take care of thumbnails outside the gallery if any
     * - user this method only if you want to update slides when the gallery is opened. Otherwise, use `refresh()` method.
     * @param items Gallery items
     * @param index After the update operation, which slide gallery should navigate to
     * @category lGPublicMethods
     * @example
     * const plugin = lightGallery();
     *
     * // Adding slides dynamically
     * let galleryItems = [
     * // Access existing lightGallery items
     * // galleryItems are automatically generated internally from the gallery HTML markup
     * // or directly from galleryItems when dynamic gallery is used
     *   ...plugin.galleryItems,
     *     ...[
     *       {
     *         src: 'img/img-1.png',
     *           thumb: 'img/thumb1.png',
     *         },
     *     ],
     *   ];
     *   plugin.updateSlides(
     *     galleryItems,
     *     plugin.index,
     *   );
     *
     *
     * // Remove slides dynamically
     * galleryItems = JSON.parse(
     *   JSON.stringify(updateSlideInstance.galleryItems),
     * );
     * galleryItems.shift();
     * updateSlideInstance.updateSlides(galleryItems, 1);
     * @see <a href="/demos/update-slides/">Demo</a>
     */
    LightGallery.prototype.updateSlides = function (items, index) {
        if (this.index > items.length - 1) {
            this.index = items.length - 1;
        }
        if (items.length === 1) {
            this.index = 0;
        }
        if (!items.length) {
            this.closeGallery();
            return;
        }
        var currentSrc = this.galleryItems[index].src;
        this.galleryItems = items;
        this.updateControls();
        this.$inner.empty();
        this.currentItemsInDom = [];
        var _index = 0;
        // Find the current index based on source value of the slide
        this.galleryItems.some(function (galleryItem, itemIndex) {
            if (galleryItem.src === currentSrc) {
                _index = itemIndex;
                return true;
            }
            return false;
        });
        this.currentItemsInDom = this.organizeSlideItems(_index, -1);
        this.loadContent(_index, true);
        this.getSlideItem(_index).addClass('lg-current');
        this.index = _index;
        this.updateCurrentCounter(_index);
        this.LGel.trigger(lGEvents.updateSlides);
    };
    // Get gallery items based on multiple conditions
    LightGallery.prototype.getItems = function () {
        // Gallery items
        this.items = [];
        if (!this.settings.dynamic) {
            if (this.settings.selector === 'this') {
                this.items.push(this.el);
            }
            else if (this.settings.selector) {
                if (typeof this.settings.selector === 'string') {
                    if (this.settings.selectWithin) {
                        var selectWithin = $LG(this.settings.selectWithin);
                        this.items = selectWithin
                            .find(this.settings.selector)
                            .get();
                    }
                    else {
                        this.items = this.el.querySelectorAll(this.settings.selector);
                    }
                }
                else {
                    this.items = this.settings.selector;
                }
            }
            else {
                this.items = this.el.children;
            }
            return utils.getDynamicOptions(this.items, this.settings.extraProps, this.settings.getCaptionFromTitleOrAlt, this.settings.exThumbImage);
        }
        else {
            return this.settings.dynamicEl || [];
        }
    };
    /**
     * Open lightGallery.
     * Open gallery with specific slide by passing index of the slide as parameter.
     * @category lGPublicMethods
     * @param {Number} index  - index of the slide
     * @param {HTMLElement} element - Which image lightGallery should zoom from
     *
     * @example
     * const $dynamicGallery = document.getElementById('dynamic-gallery-demo');
     * const dynamicGallery = lightGallery($dynamicGallery, {
     *     dynamic: true,
     *     dynamicEl: [
     *         {
     *              src: 'img/1.jpg',
     *              thumb: 'img/thumb-1.jpg',
     *              subHtml: '<h4>Image 1 title</h4><p>Image 1 descriptions.</p>',
     *         },
     *         ...
     *     ],
     * });
     * $dynamicGallery.addEventListener('click', function () {
     *     // Starts with third item.(Optional).
     *     // This is useful if you want use dynamic mode with
     *     // custom thumbnails (thumbnails outside gallery),
     *     dynamicGallery.openGallery(2);
     * });
     *
     */
    LightGallery.prototype.openGallery = function (index, element) {
        var _this = this;
        if (index === void 0) { index = this.settings.index; }
        // prevent accidental double execution
        if (this.lgOpened)
            return;
        this.lgOpened = true;
        this.outer.get().focus();
        this.outer.removeClass('lg-hide-items');
        // Add display block, but still has opacity 0
        this.$container.addClass('lg-show');
        var itemsToBeInsertedToDom = this.getItemsToBeInsertedToDom(index, index);
        this.currentItemsInDom = itemsToBeInsertedToDom;
        var items = '';
        itemsToBeInsertedToDom.forEach(function (item) {
            items = items + ("<div id=\"" + item + "\" class=\"lg-item\"></div>");
        });
        this.$inner.append(items);
        this.addHtml(index);
        var transform = '';
        this.mediaContainerPosition = this.getMediaContainerPosition();
        var _a = this.mediaContainerPosition, top = _a.top, bottom = _a.bottom;
        if (!this.settings.allowMediaOverlap) {
            this.setMediaContainerPosition(top, bottom);
        }
        var __slideVideoInfo = this.galleryItems[index].__slideVideoInfo;
        if (this.zoomFromOrigin && element) {
            this.currentImageSize = utils.getSize(element, this.outer, top + bottom, __slideVideoInfo && this.settings.videoMaxSize);
            transform = utils.getTransform(element, this.outer, top, bottom, this.currentImageSize);
        }
        if (!this.zoomFromOrigin || !transform) {
            this.outer.addClass(this.settings.startClass);
            this.getSlideItem(index).removeClass('lg-complete');
        }
        var timeout = this.settings.zoomFromOrigin
            ? 100
            : this.settings.backdropDuration;
        setTimeout(function () {
            _this.outer.addClass('lg-components-open');
        }, timeout);
        this.index = index;
        this.LGel.trigger(lGEvents.beforeOpen);
        // add class lg-current to remove initial transition
        this.getSlideItem(index).addClass('lg-current');
        this.lGalleryOn = false;
        // Store the current scroll top value to scroll back after closing the gallery..
        this.prevScrollTop = $LG(window).scrollTop();
        setTimeout(function () {
            // Need to check both zoomFromOrigin and transform values as we need to set set the
            // default opening animation if user missed to add the lg-size attribute
            if (_this.zoomFromOrigin && transform) {
                var currentSlide_1 = _this.getSlideItem(index);
                currentSlide_1.css('transform', transform);
                setTimeout(function () {
                    currentSlide_1
                        .addClass('lg-start-progress lg-start-end-progress')
                        .css('transition-duration', _this.settings.startAnimationDuration + 'ms');
                    _this.outer.addClass('lg-zoom-from-image');
                });
                setTimeout(function () {
                    currentSlide_1.css('transform', 'translate3d(0, 0, 0)');
                }, 100);
            }
            setTimeout(function () {
                _this.$backdrop.addClass('in');
                _this.$container.addClass('lg-show-in');
            }, 10);
            // lg-visible class resets gallery opacity to 1
            if (!_this.zoomFromOrigin || !transform) {
                setTimeout(function () {
                    _this.outer.addClass('lg-visible');
                }, _this.settings.backdropDuration);
            }
            // initiate slide function
            _this.slide(index, false, false, false);
            _this.LGel.trigger(lGEvents.afterOpen);
        });
        if (document.body === this.settings.container) {
            $LG('html').addClass('lg-on');
        }
    };
    /**
     * Note - Changing the position of the media on every slide transition creates a flickering effect.
     * Therefore, The height of the caption is calculated dynamically, only once based on the first slide caption.
     * if you have dynamic captions for each media,
     * you can provide an appropriate height for the captions via allowMediaOverlap option
     */
    LightGallery.prototype.getMediaContainerPosition = function () {
        if (this.settings.allowMediaOverlap) {
            return {
                top: 0,
                bottom: 0,
            };
        }
        var top = this.$toolbar.get().clientHeight || 0;
        var subHtml = this.outer.find('.lg-components .lg-sub-html').get();
        var captionHeight = this.settings.defaultCaptionHeight ||
            (subHtml && subHtml.clientHeight) ||
            0;
        var thumbContainer = this.outer.find('.lg-thumb-outer').get();
        var thumbHeight = thumbContainer ? thumbContainer.clientHeight : 0;
        var bottom = thumbHeight + captionHeight;
        return {
            top: top,
            bottom: bottom,
        };
    };
    LightGallery.prototype.setMediaContainerPosition = function (top, bottom) {
        if (top === void 0) { top = 0; }
        if (bottom === void 0) { bottom = 0; }
        this.$content.css('top', top + 'px').css('bottom', bottom + 'px');
    };
    LightGallery.prototype.hideBars = function () {
        var _this = this;
        // Hide controllers if mouse doesn't move for some period
        setTimeout(function () {
            _this.outer.removeClass('lg-hide-items');
            if (_this.settings.hideBarsDelay > 0) {
                _this.outer.on('mousemove.lg click.lg touchstart.lg', function () {
                    _this.outer.removeClass('lg-hide-items');
                    clearTimeout(_this.hideBarTimeout);
                    // Timeout will be cleared on each slide movement also
                    _this.hideBarTimeout = setTimeout(function () {
                        _this.outer.addClass('lg-hide-items');
                    }, _this.settings.hideBarsDelay);
                });
                _this.outer.trigger('mousemove.lg');
            }
        }, this.settings.showBarsAfter);
    };
    LightGallery.prototype.initPictureFill = function ($img) {
        if (this.settings.supportLegacyBrowser) {
            try {
                picturefill({
                    elements: [$img.get()],
                });
            }
            catch (e) {
                console.warn('lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document.');
            }
        }
    };
    /**
     *  @desc Create image counter
     *  Ex: 1/10
     */
    LightGallery.prototype.counter = function () {
        if (this.settings.counter) {
            var counterHtml = "<div class=\"lg-counter\" role=\"status\" aria-live=\"polite\">\n                <span id=\"" + this.getIdName('lg-counter-current') + "\" class=\"lg-counter-current\">" + (this.index + 1) + " </span> /\n                <span id=\"" + this.getIdName('lg-counter-all') + "\" class=\"lg-counter-all\">" + this.galleryItems.length + " </span></div>";
            this.outer.find(this.settings.appendCounterTo).append(counterHtml);
        }
    };
    /**
     *  @desc add sub-html into the slide
     *  @param {Number} index - index of the slide
     */
    LightGallery.prototype.addHtml = function (index) {
        var subHtml;
        var subHtmlUrl;
        if (this.galleryItems[index].subHtmlUrl) {
            subHtmlUrl = this.galleryItems[index].subHtmlUrl;
        }
        else {
            subHtml = this.galleryItems[index].subHtml;
        }
        if (!subHtmlUrl) {
            if (subHtml) {
                // get first letter of sub-html
                // if first letter starts with . or # get the html form the jQuery object
                var fL = subHtml.substring(0, 1);
                if (fL === '.' || fL === '#') {
                    if (this.settings.subHtmlSelectorRelative &&
                        !this.settings.dynamic) {
                        subHtml = $LG(this.items)
                            .eq(index)
                            .find(subHtml)
                            .first()
                            .html();
                    }
                    else {
                        subHtml = $LG(subHtml).first().html();
                    }
                }
            }
            else {
                subHtml = '';
            }
        }
        if (this.settings.appendSubHtmlTo !== '.lg-item') {
            if (subHtmlUrl) {
                this.outer.find('.lg-sub-html').load(subHtmlUrl);
            }
            else {
                this.outer.find('.lg-sub-html').html(subHtml);
            }
        }
        else {
            var currentSlide = $LG(this.getSlideItemId(index));
            if (subHtmlUrl) {
                currentSlide.load(subHtmlUrl);
            }
            else {
                currentSlide.append("<div class=\"lg-sub-html\">" + subHtml + "</div>");
            }
        }
        // Add lg-empty-html class if title doesn't exist
        if (typeof subHtml !== 'undefined' && subHtml !== null) {
            if (subHtml === '') {
                this.outer
                    .find(this.settings.appendSubHtmlTo)
                    .addClass('lg-empty-html');
            }
            else {
                this.outer
                    .find(this.settings.appendSubHtmlTo)
                    .removeClass('lg-empty-html');
            }
        }
        this.LGel.trigger(lGEvents.afterAppendSubHtml, {
            index: index,
        });
    };
    /**
     *  @desc Preload slides
     *  @param {Number} index - index of the slide
     * @todo preload not working for the first slide, Also, should work for the first and last slide as well
     */
    LightGallery.prototype.preload = function (index) {
        for (var i = 1; i <= this.settings.preload; i++) {
            if (i >= this.galleryItems.length - index) {
                break;
            }
            this.loadContent(index + i, false);
        }
        for (var j = 1; j <= this.settings.preload; j++) {
            if (index - j < 0) {
                break;
            }
            this.loadContent(index - j, false);
        }
    };
    LightGallery.prototype.getDummyImgStyles = function (imageSize) {
        if (!imageSize)
            return '';
        return "width:" + imageSize.width + "px;\n                margin-left: -" + imageSize.width / 2 + "px;\n                margin-top: -" + imageSize.height / 2 + "px;\n                height:" + imageSize.height + "px";
    };
    LightGallery.prototype.getVideoContStyle = function (imageSize) {
        if (!imageSize)
            return '';
        return "width:" + imageSize.width + "px;\n                height:" + imageSize.height + "px";
    };
    LightGallery.prototype.getDummyImageContent = function ($currentSlide, index, alt) {
        var $currentItem;
        if (!this.settings.dynamic) {
            $currentItem = $LG(this.items).eq(index);
        }
        if ($currentItem) {
            var _dummyImgSrc = void 0;
            if (!this.settings.exThumbImage) {
                _dummyImgSrc = $currentItem.find('img').first().attr('src');
            }
            else {
                _dummyImgSrc = $currentItem.attr(this.settings.exThumbImage);
            }
            if (!_dummyImgSrc)
                return '';
            var imgStyle = this.getDummyImgStyles(this.currentImageSize);
            var dummyImgContent = "<img " + alt + " style=\"" + imgStyle + "\" class=\"lg-dummy-img\" src=\"" + _dummyImgSrc + "\" />";
            $currentSlide.addClass('lg-first-slide');
            this.outer.addClass('lg-first-slide-loading');
            return dummyImgContent;
        }
        return '';
    };
    LightGallery.prototype.setImgMarkup = function (src, $currentSlide, index) {
        var currentGalleryItem = this.galleryItems[index];
        var alt = currentGalleryItem.alt, srcset = currentGalleryItem.srcset, sizes = currentGalleryItem.sizes, sources = currentGalleryItem.sources;
        // Use the thumbnail as dummy image which will be resized to actual image size and
        // displayed on top of actual image
        var imgContent = '';
        var altAttr = alt ? 'alt="' + alt + '"' : '';
        if (this.isFirstSlideWithZoomAnimation()) {
            imgContent = this.getDummyImageContent($currentSlide, index, altAttr);
        }
        else {
            imgContent = utils.getImgMarkup(index, src, altAttr, srcset, sizes, sources);
        }
        var imgMarkup = "<picture class=\"lg-img-wrap\"> " + imgContent + "</picture>";
        $currentSlide.prepend(imgMarkup);
    };
    LightGallery.prototype.onSlideObjectLoad = function ($slide, isHTML5VideoWithoutPoster, onLoad, onError) {
        var mediaObject = $slide.find('.lg-object').first();
        if (utils.isImageLoaded(mediaObject.get()) ||
            isHTML5VideoWithoutPoster) {
            onLoad();
        }
        else {
            mediaObject.on('load.lg error.lg', function () {
                onLoad && onLoad();
            });
            mediaObject.on('error.lg', function () {
                onError && onError();
            });
        }
    };
    /**
     *
     * @param $el Current slide item
     * @param index
     * @param delay Delay is 0 except first time
     * @param speed Speed is same as delay, except it is 0 if gallery is opened via hash plugin
     * @param isFirstSlide
     */
    LightGallery.prototype.onLgObjectLoad = function (currentSlide, index, delay, speed, isFirstSlide, isHTML5VideoWithoutPoster) {
        var _this = this;
        this.onSlideObjectLoad(currentSlide, isHTML5VideoWithoutPoster, function () {
            _this.triggerSlideItemLoad(currentSlide, index, delay, speed, isFirstSlide);
        }, function () {
            currentSlide.addClass('lg-complete lg-complete_');
            currentSlide.html('<span class="lg-error-msg">Oops... Failed to load content...</span>');
        });
    };
    LightGallery.prototype.triggerSlideItemLoad = function ($currentSlide, index, delay, speed, isFirstSlide) {
        var _this = this;
        var currentGalleryItem = this.galleryItems[index];
        // Adding delay for video slides without poster for better performance and user experience
        // Videos should start playing once once the gallery is completely loaded
        var _speed = isFirstSlide &&
            this.getSlideType(currentGalleryItem) === 'video' &&
            !currentGalleryItem.poster
            ? speed
            : 0;
        setTimeout(function () {
            $currentSlide.addClass('lg-complete lg-complete_');
            _this.LGel.trigger(lGEvents.slideItemLoad, {
                index: index,
                delay: delay || 0,
                isFirstSlide: isFirstSlide,
            });
        }, _speed);
    };
    LightGallery.prototype.isFirstSlideWithZoomAnimation = function () {
        return !!(!this.lGalleryOn &&
            this.zoomFromOrigin &&
            this.currentImageSize);
    };
    // Add video slideInfo
    LightGallery.prototype.addSlideVideoInfo = function (items) {
        var _this = this;
        items.forEach(function (element, index) {
            element.__slideVideoInfo = utils.isVideo(element.src, !!element.video, index);
            if (element.__slideVideoInfo &&
                _this.settings.loadYouTubePoster &&
                !element.poster &&
                element.__slideVideoInfo.youtube) {
                element.poster = "//img.youtube.com/vi/" + element.__slideVideoInfo.youtube[1] + "/maxresdefault.jpg";
            }
        });
    };
    /**
     *  Load slide content into slide.
     *  This is used to load content into slides that is not visible too
     *  @param {Number} index - index of the slide.
     *  @param {Boolean} rec - if true call loadcontent() function again.
     */
    LightGallery.prototype.loadContent = function (index, rec) {
        var _this = this;
        var currentGalleryItem = this.galleryItems[index];
        var $currentSlide = $LG(this.getSlideItemId(index));
        var poster = currentGalleryItem.poster, srcset = currentGalleryItem.srcset, sizes = currentGalleryItem.sizes, sources = currentGalleryItem.sources;
        var src = currentGalleryItem.src;
        var video = currentGalleryItem.video;
        var _html5Video = video && typeof video === 'string' ? JSON.parse(video) : video;
        if (currentGalleryItem.responsive) {
            var srcDyItms = currentGalleryItem.responsive.split(',');
            src = utils.getResponsiveSrc(srcDyItms) || src;
        }
        var videoInfo = currentGalleryItem.__slideVideoInfo;
        var lgVideoStyle = '';
        var iframe = !!currentGalleryItem.iframe;
        var isFirstSlide = !this.lGalleryOn;
        // delay for adding complete class. it is 0 except first time.
        var delay = 0;
        if (isFirstSlide) {
            if (this.zoomFromOrigin && this.currentImageSize) {
                delay = this.settings.startAnimationDuration + 10;
            }
            else {
                delay = this.settings.backdropDuration + 10;
            }
        }
        if (!$currentSlide.hasClass('lg-loaded')) {
            if (videoInfo) {
                var _a = this.mediaContainerPosition, top_2 = _a.top, bottom = _a.bottom;
                var videoSize = utils.getSize(this.items[index], this.outer, top_2 + bottom, videoInfo && this.settings.videoMaxSize);
                lgVideoStyle = this.getVideoContStyle(videoSize);
            }
            if (iframe) {
                var markup = utils.getIframeMarkup(this.settings.iframeWidth, this.settings.iframeHeight, this.settings.iframeMaxWidth, this.settings.iframeMaxHeight, src, currentGalleryItem.iframeTitle);
                $currentSlide.prepend(markup);
            }
            else if (poster) {
                var dummyImg = '';
                var hasStartAnimation = isFirstSlide &&
                    this.zoomFromOrigin &&
                    this.currentImageSize;
                if (hasStartAnimation) {
                    dummyImg = this.getDummyImageContent($currentSlide, index, '');
                }
                var markup = utils.getVideoPosterMarkup(poster, dummyImg || '', lgVideoStyle, this.settings.strings['playVideo'], videoInfo);
                $currentSlide.prepend(markup);
            }
            else if (videoInfo) {
                var markup = "<div class=\"lg-video-cont \" style=\"" + lgVideoStyle + "\"></div>";
                $currentSlide.prepend(markup);
            }
            else {
                this.setImgMarkup(src, $currentSlide, index);
                if (srcset || sources) {
                    var $img = $currentSlide.find('.lg-object');
                    this.initPictureFill($img);
                }
            }
            if (poster || videoInfo) {
                this.LGel.trigger(lGEvents.hasVideo, {
                    index: index,
                    src: src,
                    html5Video: _html5Video,
                    hasPoster: !!poster,
                });
            }
            this.LGel.trigger(lGEvents.afterAppendSlide, { index: index });
            if (this.lGalleryOn &&
                this.settings.appendSubHtmlTo === '.lg-item') {
                this.addHtml(index);
            }
        }
        // For first time add some delay for displaying the start animation.
        var _speed = 0;
        // Do not change the delay value because it is required for zoom plugin.
        // If gallery opened from direct url (hash) speed value should be 0
        if (delay && !$LG(document.body).hasClass('lg-from-hash')) {
            _speed = delay;
        }
        // Only for first slide and zoomFromOrigin is enabled
        if (this.isFirstSlideWithZoomAnimation()) {
            setTimeout(function () {
                $currentSlide
                    .removeClass('lg-start-end-progress lg-start-progress')
                    .removeAttr('style');
            }, this.settings.startAnimationDuration + 100);
            if (!$currentSlide.hasClass('lg-loaded')) {
                setTimeout(function () {
                    if (_this.getSlideType(currentGalleryItem) === 'image') {
                        $currentSlide
                            .find('.lg-img-wrap')
                            .append(utils.getImgMarkup(index, src, '', srcset, sizes, currentGalleryItem.sources));
                        if (srcset || sources) {
                            var $img = $currentSlide.find('.lg-object');
                            _this.initPictureFill($img);
                        }
                    }
                    if (_this.getSlideType(currentGalleryItem) === 'image' ||
                        (_this.getSlideType(currentGalleryItem) === 'video' &&
                            poster)) {
                        _this.onLgObjectLoad($currentSlide, index, delay, _speed, true, false);
                        // load remaining slides once the slide is completely loaded
                        _this.onSlideObjectLoad($currentSlide, !!(videoInfo && videoInfo.html5 && !poster), function () {
                            _this.loadContentOnFirstSlideLoad(index, $currentSlide, _speed);
                        }, function () {
                            _this.loadContentOnFirstSlideLoad(index, $currentSlide, _speed);
                        });
                    }
                }, this.settings.startAnimationDuration + 100);
            }
        }
        // SLide content has been added to dom
        $currentSlide.addClass('lg-loaded');
        if (!this.isFirstSlideWithZoomAnimation() ||
            (this.getSlideType(currentGalleryItem) === 'video' && !poster)) {
            this.onLgObjectLoad($currentSlide, index, delay, _speed, isFirstSlide, !!(videoInfo && videoInfo.html5 && !poster));
        }
        // When gallery is opened once content is loaded (second time) need to add lg-complete class for css styling
        if ((!this.zoomFromOrigin || !this.currentImageSize) &&
            $currentSlide.hasClass('lg-complete_') &&
            !this.lGalleryOn) {
            setTimeout(function () {
                $currentSlide.addClass('lg-complete');
            }, this.settings.backdropDuration);
        }
        // Content loaded
        // Need to set lGalleryOn before calling preload function
        this.lGalleryOn = true;
        if (rec === true) {
            if (!$currentSlide.hasClass('lg-complete_')) {
                $currentSlide
                    .find('.lg-object')
                    .first()
                    .on('load.lg error.lg', function () {
                    _this.preload(index);
                });
            }
            else {
                this.preload(index);
            }
        }
    };
    /**
     * @desc Remove dummy image content and load next slides
     * Called only for the first time if zoomFromOrigin animation is enabled
     * @param index
     * @param $currentSlide
     * @param speed
     */
    LightGallery.prototype.loadContentOnFirstSlideLoad = function (index, $currentSlide, speed) {
        var _this = this;
        setTimeout(function () {
            $currentSlide.find('.lg-dummy-img').remove();
            $currentSlide.removeClass('lg-first-slide');
            _this.outer.removeClass('lg-first-slide-loading');
            _this.isDummyImageRemoved = true;
            _this.preload(index);
        }, speed + 300);
    };
    LightGallery.prototype.getItemsToBeInsertedToDom = function (index, prevIndex, numberOfItems) {
        var _this = this;
        if (numberOfItems === void 0) { numberOfItems = 0; }
        var itemsToBeInsertedToDom = [];
        // Minimum 2 items should be there
        var possibleNumberOfItems = Math.max(numberOfItems, 3);
        possibleNumberOfItems = Math.min(possibleNumberOfItems, this.galleryItems.length);
        var prevIndexItem = "lg-item-" + this.lgId + "-" + prevIndex;
        if (this.galleryItems.length <= 3) {
            this.galleryItems.forEach(function (_element, index) {
                itemsToBeInsertedToDom.push("lg-item-" + _this.lgId + "-" + index);
            });
            return itemsToBeInsertedToDom;
        }
        if (index < (this.galleryItems.length - 1) / 2) {
            for (var idx = index; idx > index - possibleNumberOfItems / 2 && idx >= 0; idx--) {
                itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + idx);
            }
            var numberOfExistingItems = itemsToBeInsertedToDom.length;
            for (var idx = 0; idx < possibleNumberOfItems - numberOfExistingItems; idx++) {
                itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (index + idx + 1));
            }
        }
        else {
            for (var idx = index; idx <= this.galleryItems.length - 1 &&
                idx < index + possibleNumberOfItems / 2; idx++) {
                itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + idx);
            }
            var numberOfExistingItems = itemsToBeInsertedToDom.length;
            for (var idx = 0; idx < possibleNumberOfItems - numberOfExistingItems; idx++) {
                itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (index - idx - 1));
            }
        }
        if (this.settings.loop) {
            if (index === this.galleryItems.length - 1) {
                itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + 0);
            }
            else if (index === 0) {
                itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (this.galleryItems.length - 1));
            }
        }
        if (itemsToBeInsertedToDom.indexOf(prevIndexItem) === -1) {
            itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + prevIndex);
        }
        return itemsToBeInsertedToDom;
    };
    LightGallery.prototype.organizeSlideItems = function (index, prevIndex) {
        var _this = this;
        var itemsToBeInsertedToDom = this.getItemsToBeInsertedToDom(index, prevIndex, this.settings.numberOfSlideItemsInDom);
        itemsToBeInsertedToDom.forEach(function (item) {
            if (_this.currentItemsInDom.indexOf(item) === -1) {
                _this.$inner.append("<div id=\"" + item + "\" class=\"lg-item\"></div>");
            }
        });
        this.currentItemsInDom.forEach(function (item) {
            if (itemsToBeInsertedToDom.indexOf(item) === -1) {
                $LG("#" + item).remove();
            }
        });
        return itemsToBeInsertedToDom;
    };
    /**
     * Get previous index of the slide
     */
    LightGallery.prototype.getPreviousSlideIndex = function () {
        var prevIndex = 0;
        try {
            var currentItemId = this.outer
                .find('.lg-current')
                .first()
                .attr('id');
            prevIndex = parseInt(currentItemId.split('-')[3]) || 0;
        }
        catch (error) {
            prevIndex = 0;
        }
        return prevIndex;
    };
    LightGallery.prototype.setDownloadValue = function (index) {
        if (this.settings.download) {
            var currentGalleryItem = this.galleryItems[index];
            var hideDownloadBtn = currentGalleryItem.downloadUrl === false ||
                currentGalleryItem.downloadUrl === 'false';
            if (hideDownloadBtn) {
                this.outer.addClass('lg-hide-download');
            }
            else {
                var $download = this.getElementById('lg-download');
                this.outer.removeClass('lg-hide-download');
                $download.attr('href', currentGalleryItem.downloadUrl ||
                    currentGalleryItem.src);
                if (currentGalleryItem.download) {
                    $download.attr('download', currentGalleryItem.download);
                }
            }
        }
    };
    LightGallery.prototype.makeSlideAnimation = function (direction, currentSlideItem, previousSlideItem) {
        var _this = this;
        if (this.lGalleryOn) {
            previousSlideItem.addClass('lg-slide-progress');
        }
        setTimeout(function () {
            // remove all transitions
            _this.outer.addClass('lg-no-trans');
            _this.outer
                .find('.lg-item')
                .removeClass('lg-prev-slide lg-next-slide');
            if (direction === 'prev') {
                //prevslide
                currentSlideItem.addClass('lg-prev-slide');
                previousSlideItem.addClass('lg-next-slide');
            }
            else {
                // next slide
                currentSlideItem.addClass('lg-next-slide');
                previousSlideItem.addClass('lg-prev-slide');
            }
            // give 50 ms for browser to add/remove class
            setTimeout(function () {
                _this.outer.find('.lg-item').removeClass('lg-current');
                currentSlideItem.addClass('lg-current');
                // reset all transitions
                _this.outer.removeClass('lg-no-trans');
            }, 50);
        }, this.lGalleryOn ? this.settings.slideDelay : 0);
    };
    /**
     * Goto a specific slide.
     * @param {Number} index - index of the slide
     * @param {Boolean} fromTouch - true if slide function called via touch event or mouse drag
     * @param {Boolean} fromThumb - true if slide function called via thumbnail click
     * @param {String} direction - Direction of the slide(next/prev)
     * @category lGPublicMethods
     * @example
     *  const plugin = lightGallery();
     *  // to go to 3rd slide
     *  plugin.slide(2);
     *
     */
    LightGallery.prototype.slide = function (index, fromTouch, fromThumb, direction) {
        var _this = this;
        var prevIndex = this.getPreviousSlideIndex();
        this.currentItemsInDom = this.organizeSlideItems(index, prevIndex);
        // Prevent multiple call, Required for hsh plugin
        if (this.lGalleryOn && prevIndex === index) {
            return;
        }
        var numberOfGalleryItems = this.galleryItems.length;
        if (!this.lgBusy) {
            if (this.settings.counter) {
                this.updateCurrentCounter(index);
            }
            var currentSlideItem = this.getSlideItem(index);
            var previousSlideItem_1 = this.getSlideItem(prevIndex);
            var currentGalleryItem = this.galleryItems[index];
            var videoInfo = currentGalleryItem.__slideVideoInfo;
            this.outer.attr('data-lg-slide-type', this.getSlideType(currentGalleryItem));
            this.setDownloadValue(index);
            if (videoInfo) {
                var _a = this.mediaContainerPosition, top_3 = _a.top, bottom = _a.bottom;
                var videoSize = utils.getSize(this.items[index], this.outer, top_3 + bottom, videoInfo && this.settings.videoMaxSize);
                this.resizeVideoSlide(index, videoSize);
            }
            this.LGel.trigger(lGEvents.beforeSlide, {
                prevIndex: prevIndex,
                index: index,
                fromTouch: !!fromTouch,
                fromThumb: !!fromThumb,
            });
            this.lgBusy = true;
            clearTimeout(this.hideBarTimeout);
            this.arrowDisable(index);
            if (!direction) {
                if (index < prevIndex) {
                    direction = 'prev';
                }
                else if (index > prevIndex) {
                    direction = 'next';
                }
            }
            if (!fromTouch) {
                this.makeSlideAnimation(direction, currentSlideItem, previousSlideItem_1);
            }
            else {
                this.outer
                    .find('.lg-item')
                    .removeClass('lg-prev-slide lg-current lg-next-slide');
                var touchPrev = void 0;
                var touchNext = void 0;
                if (numberOfGalleryItems > 2) {
                    touchPrev = index - 1;
                    touchNext = index + 1;
                    if (index === 0 && prevIndex === numberOfGalleryItems - 1) {
                        // next slide
                        touchNext = 0;
                        touchPrev = numberOfGalleryItems - 1;
                    }
                    else if (index === numberOfGalleryItems - 1 &&
                        prevIndex === 0) {
                        // prev slide
                        touchNext = 0;
                        touchPrev = numberOfGalleryItems - 1;
                    }
                }
                else {
                    touchPrev = 0;
                    touchNext = 1;
                }
                if (direction === 'prev') {
                    this.getSlideItem(touchNext).addClass('lg-next-slide');
                }
                else {
                    this.getSlideItem(touchPrev).addClass('lg-prev-slide');
                }
                currentSlideItem.addClass('lg-current');
            }
            // Do not put load content in set timeout as it needs to load immediately when the gallery is opened
            if (!this.lGalleryOn) {
                this.loadContent(index, true);
            }
            else {
                setTimeout(function () {
                    _this.loadContent(index, true);
                    // Add title if this.settings.appendSubHtmlTo === lg-sub-html
                    if (_this.settings.appendSubHtmlTo !== '.lg-item') {
                        _this.addHtml(index);
                    }
                }, this.settings.speed + 50 + (fromTouch ? 0 : this.settings.slideDelay));
            }
            setTimeout(function () {
                _this.lgBusy = false;
                previousSlideItem_1.removeClass('lg-slide-progress');
                _this.LGel.trigger(lGEvents.afterSlide, {
                    prevIndex: prevIndex,
                    index: index,
                    fromTouch: fromTouch,
                    fromThumb: fromThumb,
                });
            }, (this.lGalleryOn ? this.settings.speed + 100 : 100) + (fromTouch ? 0 : this.settings.slideDelay));
        }
        this.index = index;
    };
    LightGallery.prototype.updateCurrentCounter = function (index) {
        this.getElementById('lg-counter-current').html(index + 1 + '');
    };
    LightGallery.prototype.updateCounterTotal = function () {
        this.getElementById('lg-counter-all').html(this.galleryItems.length + '');
    };
    LightGallery.prototype.getSlideType = function (item) {
        if (item.__slideVideoInfo) {
            return 'video';
        }
        else if (item.iframe) {
            return 'iframe';
        }
        else {
            return 'image';
        }
    };
    LightGallery.prototype.touchMove = function (startCoords, endCoords, e) {
        var distanceX = endCoords.pageX - startCoords.pageX;
        var distanceY = endCoords.pageY - startCoords.pageY;
        var allowSwipe = false;
        if (this.swipeDirection) {
            allowSwipe = true;
        }
        else {
            if (Math.abs(distanceX) > 15) {
                this.swipeDirection = 'horizontal';
                allowSwipe = true;
            }
            else if (Math.abs(distanceY) > 15) {
                this.swipeDirection = 'vertical';
                allowSwipe = true;
            }
        }
        if (!allowSwipe) {
            return;
        }
        var $currentSlide = this.getSlideItem(this.index);
        if (this.swipeDirection === 'horizontal') {
            e === null || e === void 0 ? void 0 : e.preventDefault();
            // reset opacity and transition duration
            this.outer.addClass('lg-dragging');
            // move current slide
            this.setTranslate($currentSlide, distanceX, 0);
            // move next and prev slide with current slide
            var width = $currentSlide.get().offsetWidth;
            var slideWidthAmount = (width * 15) / 100;
            var gutter = slideWidthAmount - Math.abs((distanceX * 10) / 100);
            this.setTranslate(this.outer.find('.lg-prev-slide').first(), -width + distanceX - gutter, 0);
            this.setTranslate(this.outer.find('.lg-next-slide').first(), width + distanceX + gutter, 0);
        }
        else if (this.swipeDirection === 'vertical') {
            if (this.settings.swipeToClose) {
                e === null || e === void 0 ? void 0 : e.preventDefault();
                this.$container.addClass('lg-dragging-vertical');
                var opacity = 1 - Math.abs(distanceY) / window.innerHeight;
                this.$backdrop.css('opacity', opacity);
                var scale = 1 - Math.abs(distanceY) / (window.innerWidth * 2);
                this.setTranslate($currentSlide, 0, distanceY, scale, scale);
                if (Math.abs(distanceY) > 100) {
                    this.outer
                        .addClass('lg-hide-items')
                        .removeClass('lg-components-open');
                }
            }
        }
    };
    LightGallery.prototype.touchEnd = function (endCoords, startCoords, event) {
        var _this = this;
        var distance;
        // keep slide animation for any mode while dragg/swipe
        if (this.settings.mode !== 'lg-slide') {
            this.outer.addClass('lg-slide');
        }
        // set transition duration
        setTimeout(function () {
            _this.$container.removeClass('lg-dragging-vertical');
            _this.outer
                .removeClass('lg-dragging lg-hide-items')
                .addClass('lg-components-open');
            var triggerClick = true;
            if (_this.swipeDirection === 'horizontal') {
                distance = endCoords.pageX - startCoords.pageX;
                var distanceAbs = Math.abs(endCoords.pageX - startCoords.pageX);
                if (distance < 0 &&
                    distanceAbs > _this.settings.swipeThreshold) {
                    _this.goToNextSlide(true);
                    triggerClick = false;
                }
                else if (distance > 0 &&
                    distanceAbs > _this.settings.swipeThreshold) {
                    _this.goToPrevSlide(true);
                    triggerClick = false;
                }
            }
            else if (_this.swipeDirection === 'vertical') {
                distance = Math.abs(endCoords.pageY - startCoords.pageY);
                if (_this.settings.closable &&
                    _this.settings.swipeToClose &&
                    distance > 100) {
                    _this.closeGallery();
                    return;
                }
                else {
                    _this.$backdrop.css('opacity', 1);
                }
            }
            _this.outer.find('.lg-item').removeAttr('style');
            if (triggerClick &&
                Math.abs(endCoords.pageX - startCoords.pageX) < 5) {
                // Trigger click if distance is less than 5 pix
                var target = $LG(event.target);
                if (_this.isPosterElement(target)) {
                    _this.LGel.trigger(lGEvents.posterClick);
                }
            }
            _this.swipeDirection = undefined;
        });
        // remove slide class once drag/swipe is completed if mode is not slide
        setTimeout(function () {
            if (!_this.outer.hasClass('lg-dragging') &&
                _this.settings.mode !== 'lg-slide') {
                _this.outer.removeClass('lg-slide');
            }
        }, this.settings.speed + 100);
    };
    LightGallery.prototype.enableSwipe = function () {
        var _this = this;
        var startCoords = {};
        var endCoords = {};
        var isMoved = false;
        var isSwiping = false;
        if (this.settings.enableSwipe) {
            this.$inner.on('touchstart.lg', function (e) {
                _this.dragOrSwipeEnabled = true;
                var $item = _this.getSlideItem(_this.index);
                if (($LG(e.target).hasClass('lg-item') ||
                    $item.get().contains(e.target)) &&
                    !_this.outer.hasClass('lg-zoomed') &&
                    !_this.lgBusy &&
                    e.targetTouches.length === 1) {
                    isSwiping = true;
                    _this.touchAction = 'swipe';
                    _this.manageSwipeClass();
                    startCoords = {
                        pageX: e.targetTouches[0].pageX,
                        pageY: e.targetTouches[0].pageY,
                    };
                }
            });
            this.$inner.on('touchmove.lg', function (e) {
                if (isSwiping &&
                    _this.touchAction === 'swipe' &&
                    e.targetTouches.length === 1) {
                    endCoords = {
                        pageX: e.targetTouches[0].pageX,
                        pageY: e.targetTouches[0].pageY,
                    };
                    _this.touchMove(startCoords, endCoords, e);
                    isMoved = true;
                }
            });
            this.$inner.on('touchend.lg', function (event) {
                if (_this.touchAction === 'swipe') {
                    if (isMoved) {
                        isMoved = false;
                        _this.touchEnd(endCoords, startCoords, event);
                    }
                    else if (isSwiping) {
                        var target = $LG(event.target);
                        if (_this.isPosterElement(target)) {
                            _this.LGel.trigger(lGEvents.posterClick);
                        }
                    }
                    _this.touchAction = undefined;
                    isSwiping = false;
                }
            });
        }
    };
    LightGallery.prototype.enableDrag = function () {
        var _this = this;
        var startCoords = {};
        var endCoords = {};
        var isDraging = false;
        var isMoved = false;
        if (this.settings.enableDrag) {
            this.outer.on('mousedown.lg', function (e) {
                _this.dragOrSwipeEnabled = true;
                var $item = _this.getSlideItem(_this.index);
                if ($LG(e.target).hasClass('lg-item') ||
                    $item.get().contains(e.target)) {
                    if (!_this.outer.hasClass('lg-zoomed') && !_this.lgBusy) {
                        e.preventDefault();
                        if (!_this.lgBusy) {
                            _this.manageSwipeClass();
                            startCoords = {
                                pageX: e.pageX,
                                pageY: e.pageY,
                            };
                            isDraging = true;
                            // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
                            _this.outer.get().scrollLeft += 1;
                            _this.outer.get().scrollLeft -= 1;
                            // *
                            _this.outer
                                .removeClass('lg-grab')
                                .addClass('lg-grabbing');
                            _this.LGel.trigger(lGEvents.dragStart);
                        }
                    }
                }
            });
            $LG(window).on("mousemove.lg.global" + this.lgId, function (e) {
                if (isDraging && _this.lgOpened) {
                    isMoved = true;
                    endCoords = {
                        pageX: e.pageX,
                        pageY: e.pageY,
                    };
                    _this.touchMove(startCoords, endCoords);
                    _this.LGel.trigger(lGEvents.dragMove);
                }
            });
            $LG(window).on("mouseup.lg.global" + this.lgId, function (event) {
                if (!_this.lgOpened) {
                    return;
                }
                var target = $LG(event.target);
                if (isMoved) {
                    isMoved = false;
                    _this.touchEnd(endCoords, startCoords, event);
                    _this.LGel.trigger(lGEvents.dragEnd);
                }
                else if (_this.isPosterElement(target)) {
                    _this.LGel.trigger(lGEvents.posterClick);
                }
                // Prevent execution on click
                if (isDraging) {
                    isDraging = false;
                    _this.outer.removeClass('lg-grabbing').addClass('lg-grab');
                }
            });
        }
    };
    LightGallery.prototype.triggerPosterClick = function () {
        var _this = this;
        this.$inner.on('click.lg', function (event) {
            if (!_this.dragOrSwipeEnabled &&
                _this.isPosterElement($LG(event.target))) {
                _this.LGel.trigger(lGEvents.posterClick);
            }
        });
    };
    LightGallery.prototype.manageSwipeClass = function () {
        var _touchNext = this.index + 1;
        var _touchPrev = this.index - 1;
        if (this.settings.loop && this.galleryItems.length > 2) {
            if (this.index === 0) {
                _touchPrev = this.galleryItems.length - 1;
            }
            else if (this.index === this.galleryItems.length - 1) {
                _touchNext = 0;
            }
        }
        this.outer.find('.lg-item').removeClass('lg-next-slide lg-prev-slide');
        if (_touchPrev > -1) {
            this.getSlideItem(_touchPrev).addClass('lg-prev-slide');
        }
        this.getSlideItem(_touchNext).addClass('lg-next-slide');
    };
    /**
     * Go to next slide
     * @param {Boolean} fromTouch - true if slide function called via touch event
     * @category lGPublicMethods
     * @example
     *  const plugin = lightGallery();
     *  plugin.goToNextSlide();
     * @see <a href="/demos/methods/">Demo</a>
     */
    LightGallery.prototype.goToNextSlide = function (fromTouch) {
        var _this = this;
        var _loop = this.settings.loop;
        if (fromTouch && this.galleryItems.length < 3) {
            _loop = false;
        }
        if (!this.lgBusy) {
            if (this.index + 1 < this.galleryItems.length) {
                this.index++;
                this.LGel.trigger(lGEvents.beforeNextSlide, {
                    index: this.index,
                });
                this.slide(this.index, !!fromTouch, false, 'next');
            }
            else {
                if (_loop) {
                    this.index = 0;
                    this.LGel.trigger(lGEvents.beforeNextSlide, {
                        index: this.index,
                    });
                    this.slide(this.index, !!fromTouch, false, 'next');
                }
                else if (this.settings.slideEndAnimation && !fromTouch) {
                    this.outer.addClass('lg-right-end');
                    setTimeout(function () {
                        _this.outer.removeClass('lg-right-end');
                    }, 400);
                }
            }
        }
    };
    /**
     * Go to previous slides
     * @param {Boolean} fromTouch - true if slide function called via touch event
     * @category lGPublicMethods
     * @example
     *  const plugin = lightGallery({});
     *  plugin.goToPrevSlide();
     * @see <a href="/demos/methods/">Demo</a>
     *
     */
    LightGallery.prototype.goToPrevSlide = function (fromTouch) {
        var _this = this;
        var _loop = this.settings.loop;
        if (fromTouch && this.galleryItems.length < 3) {
            _loop = false;
        }
        if (!this.lgBusy) {
            if (this.index > 0) {
                this.index--;
                this.LGel.trigger(lGEvents.beforePrevSlide, {
                    index: this.index,
                    fromTouch: fromTouch,
                });
                this.slide(this.index, !!fromTouch, false, 'prev');
            }
            else {
                if (_loop) {
                    this.index = this.galleryItems.length - 1;
                    this.LGel.trigger(lGEvents.beforePrevSlide, {
                        index: this.index,
                        fromTouch: fromTouch,
                    });
                    this.slide(this.index, !!fromTouch, false, 'prev');
                }
                else if (this.settings.slideEndAnimation && !fromTouch) {
                    this.outer.addClass('lg-left-end');
                    setTimeout(function () {
                        _this.outer.removeClass('lg-left-end');
                    }, 400);
                }
            }
        }
    };
    LightGallery.prototype.keyPress = function () {
        var _this = this;
        $LG(window).on("keydown.lg.global" + this.lgId, function (e) {
            if (_this.lgOpened &&
                _this.settings.escKey === true &&
                e.keyCode === 27) {
                e.preventDefault();
                if (_this.settings.allowMediaOverlap &&
                    _this.outer.hasClass('lg-can-toggle') &&
                    _this.outer.hasClass('lg-components-open')) {
                    _this.outer.removeClass('lg-components-open');
                }
                else {
                    _this.closeGallery();
                }
            }
            if (_this.lgOpened && _this.galleryItems.length > 1) {
                if (e.keyCode === 37) {
                    e.preventDefault();
                    _this.goToPrevSlide();
                }
                if (e.keyCode === 39) {
                    e.preventDefault();
                    _this.goToNextSlide();
                }
            }
        });
    };
    LightGallery.prototype.arrow = function () {
        var _this = this;
        this.getElementById('lg-prev').on('click.lg', function () {
            _this.goToPrevSlide();
        });
        this.getElementById('lg-next').on('click.lg', function () {
            _this.goToNextSlide();
        });
    };
    LightGallery.prototype.arrowDisable = function (index) {
        // Disable arrows if settings.hideControlOnEnd is true
        if (!this.settings.loop && this.settings.hideControlOnEnd) {
            var $prev = this.getElementById('lg-prev');
            var $next = this.getElementById('lg-next');
            if (index + 1 === this.galleryItems.length) {
                $next.attr('disabled', 'disabled').addClass('disabled');
            }
            else {
                $next.removeAttr('disabled').removeClass('disabled');
            }
            if (index === 0) {
                $prev.attr('disabled', 'disabled').addClass('disabled');
            }
            else {
                $prev.removeAttr('disabled').removeClass('disabled');
            }
        }
    };
    LightGallery.prototype.setTranslate = function ($el, xValue, yValue, scaleX, scaleY) {
        if (scaleX === void 0) { scaleX = 1; }
        if (scaleY === void 0) { scaleY = 1; }
        $el.css('transform', 'translate3d(' +
            xValue +
            'px, ' +
            yValue +
            'px, 0px) scale3d(' +
            scaleX +
            ', ' +
            scaleY +
            ', 1)');
    };
    LightGallery.prototype.mousewheel = function () {
        var _this = this;
        var lastCall = 0;
        this.outer.on('wheel.lg', function (e) {
            if (!e.deltaY || _this.galleryItems.length < 2) {
                return;
            }
            e.preventDefault();
            var now = new Date().getTime();
            if (now - lastCall < 1000) {
                return;
            }
            lastCall = now;
            if (e.deltaY > 0) {
                _this.goToNextSlide();
            }
            else if (e.deltaY < 0) {
                _this.goToPrevSlide();
            }
        });
    };
    LightGallery.prototype.isSlideElement = function (target) {
        return (target.hasClass('lg-outer') ||
            target.hasClass('lg-item') ||
            target.hasClass('lg-img-wrap'));
    };
    LightGallery.prototype.isPosterElement = function (target) {
        var playButton = this.getSlideItem(this.index)
            .find('.lg-video-play-button')
            .get();
        return (target.hasClass('lg-video-poster') ||
            target.hasClass('lg-video-play-button') ||
            (playButton && playButton.contains(target.get())));
    };
    /**
     * Maximize minimize inline gallery.
     * @category lGPublicMethods
     */
    LightGallery.prototype.toggleMaximize = function () {
        var _this = this;
        this.getElementById('lg-maximize').on('click.lg', function () {
            _this.$container.toggleClass('lg-inline');
            _this.refreshOnResize();
        });
    };
    LightGallery.prototype.invalidateItems = function () {
        for (var index = 0; index < this.items.length; index++) {
            var element = this.items[index];
            var $element = $LG(element);
            $element.off("click.lgcustom-item-" + $element.attr('data-lg-id'));
        }
    };
    LightGallery.prototype.manageCloseGallery = function () {
        var _this = this;
        if (!this.settings.closable)
            return;
        var mousedown = false;
        this.getElementById('lg-close').on('click.lg', function () {
            _this.closeGallery();
        });
        if (this.settings.closeOnTap) {
            // If you drag the slide and release outside gallery gets close on chrome
            // for preventing this check mousedown and mouseup happened on .lg-item or lg-outer
            this.outer.on('mousedown.lg', function (e) {
                var target = $LG(e.target);
                if (_this.isSlideElement(target)) {
                    mousedown = true;
                }
                else {
                    mousedown = false;
                }
            });
            this.outer.on('mousemove.lg', function () {
                mousedown = false;
            });
            this.outer.on('mouseup.lg', function (e) {
                var target = $LG(e.target);
                if (_this.isSlideElement(target) && mousedown) {
                    if (!_this.outer.hasClass('lg-dragging')) {
                        _this.closeGallery();
                    }
                }
            });
        }
    };
    /**
     * Close lightGallery if it is opened.
     *
     * @description If closable is false in the settings, you need to pass true via closeGallery method to force close gallery
     * @return returns the estimated time to close gallery completely including the close animation duration
     * @category lGPublicMethods
     * @example
     *  const plugin = lightGallery();
     *  plugin.closeGallery();
     *
     */
    LightGallery.prototype.closeGallery = function (force) {
        var _this = this;
        if (!this.lgOpened || (!this.settings.closable && !force)) {
            return 0;
        }
        this.LGel.trigger(lGEvents.beforeClose);
        $LG(window).scrollTop(this.prevScrollTop);
        var currentItem = this.items[this.index];
        var transform;
        if (this.zoomFromOrigin && currentItem) {
            var _a = this.mediaContainerPosition, top_4 = _a.top, bottom = _a.bottom;
            var _b = this.galleryItems[this.index], __slideVideoInfo = _b.__slideVideoInfo, poster = _b.poster;
            var imageSize = utils.getSize(currentItem, this.outer, top_4 + bottom, __slideVideoInfo && poster && this.settings.videoMaxSize);
            transform = utils.getTransform(currentItem, this.outer, top_4, bottom, imageSize);
        }
        if (this.zoomFromOrigin && transform) {
            this.outer.addClass('lg-closing lg-zoom-from-image');
            this.getSlideItem(this.index)
                .addClass('lg-start-end-progress')
                .css('transition-duration', this.settings.startAnimationDuration + 'ms')
                .css('transform', transform);
        }
        else {
            this.outer.addClass('lg-hide-items');
            // lg-zoom-from-image is used for setting the opacity to 1 if zoomFromOrigin is true
            // If the closing item doesn't have the lg-size attribute, remove this class to avoid the closing css conflicts
            this.outer.removeClass('lg-zoom-from-image');
        }
        // Unbind all events added by lightGallery
        // @todo
        //this.$el.off('.lg.tm');
        this.destroyModules();
        this.lGalleryOn = false;
        this.isDummyImageRemoved = false;
        this.zoomFromOrigin = this.settings.zoomFromOrigin;
        clearTimeout(this.hideBarTimeout);
        this.hideBarTimeout = false;
        $LG('html').removeClass('lg-on');
        this.outer.removeClass('lg-visible lg-components-open');
        // Resetting opacity to 0 isd required as  vertical swipe to close function adds inline opacity.
        this.$backdrop.removeClass('in').css('opacity', 0);
        var removeTimeout = this.zoomFromOrigin && transform
            ? Math.max(this.settings.startAnimationDuration, this.settings.backdropDuration)
            : this.settings.backdropDuration;
        this.$container.removeClass('lg-show-in');
        // Once the closign animation is completed and gallery is invisible
        setTimeout(function () {
            if (_this.zoomFromOrigin && transform) {
                _this.outer.removeClass('lg-zoom-from-image');
            }
            _this.$container.removeClass('lg-show');
            // Need to remove inline opacity as it is used in the stylesheet as well
            _this.$backdrop
                .removeAttr('style')
                .css('transition-duration', _this.settings.backdropDuration + 'ms');
            _this.outer.removeClass("lg-closing " + _this.settings.startClass);
            _this.getSlideItem(_this.index).removeClass('lg-start-end-progress');
            _this.$inner.empty();
            if (_this.lgOpened) {
                _this.LGel.trigger(lGEvents.afterClose, {
                    instance: _this,
                });
            }
            if (_this.outer.get()) {
                _this.outer.get().blur();
            }
            _this.lgOpened = false;
        }, removeTimeout + 100);
        return removeTimeout + 100;
    };
    LightGallery.prototype.initModules = function () {
        this.plugins.forEach(function (module) {
            try {
                module.init();
            }
            catch (err) {
                console.warn("lightGallery:- make sure lightGallery module is properly initiated");
            }
        });
    };
    LightGallery.prototype.destroyModules = function (destroy) {
        this.plugins.forEach(function (module) {
            try {
                if (destroy) {
                    module.destroy();
                }
                else {
                    module.closeGallery && module.closeGallery();
                }
            }
            catch (err) {
                console.warn("lightGallery:- make sure lightGallery module is properly destroyed");
            }
        });
    };
    /**
     * Refresh lightGallery with new set of children.
     *
     * @description This is useful to update the gallery when the child elements are changed without calling destroy method.
     *
     * If you are using dynamic mode, you can pass the modified array of dynamicEl as the first parameter to refresh the dynamic gallery
     * @see <a href="/demos/dynamic-mode/">Demo</a>
     * @category lGPublicMethods
     * @example
     *  const plugin = lightGallery();
     *  // Delete or add children, then call
     *  plugin.refresh();
     *
     */
    LightGallery.prototype.refresh = function (galleryItems) {
        if (!this.settings.dynamic) {
            this.invalidateItems();
        }
        if (galleryItems) {
            this.galleryItems = galleryItems;
        }
        else {
            this.galleryItems = this.getItems();
        }
        this.updateControls();
        this.openGalleryOnItemClick();
        this.LGel.trigger(lGEvents.updateSlides);
    };
    LightGallery.prototype.updateControls = function () {
        this.addSlideVideoInfo(this.galleryItems);
        this.updateCounterTotal();
        this.manageSingleSlideClassName();
    };
    /**
     * Destroy lightGallery.
     * Destroy lightGallery and its plugin instances completely
     *
     * @description This method also calls CloseGallery function internally. Returns the time takes to completely close and destroy the instance.
     * In case if you want to re-initialize lightGallery right after destroying it, initialize it only once the destroy process is completed.
     * You can use refresh method most of the times.
     * @category lGPublicMethods
     * @example
     *  const plugin = lightGallery();
     *  plugin.destroy();
     *
     */
    LightGallery.prototype.destroy = function () {
        var _this = this;
        var closeTimeout = this.closeGallery(true);
        setTimeout(function () {
            _this.destroyModules(true);
            if (!_this.settings.dynamic) {
                _this.invalidateItems();
            }
            $LG(window).off(".lg.global" + _this.lgId);
            _this.LGel.off('.lg');
            _this.$container.remove();
        }, closeTimeout);
        return closeTimeout;
    };
    return LightGallery;
}());

function lightGallery(el, options) {
    return new LightGallery(el, options);
}

/* harmony default export */ __webpack_exports__["default"] = (lightGallery);
//# sourceMappingURL=lightgallery.es5.js.map


/***/ }),

/***/ "./node_modules/lightgallery/css/lg-zoom.css":
/*!***************************************************!*\
  !*** ./node_modules/lightgallery/css/lg-zoom.css ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/lightgallery/scss/lightgallery-bundle.scss":
/*!*****************************************************************!*\
  !*** ./node_modules/lightgallery/scss/lightgallery-bundle.scss ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/kave-home/kave-home.scss":
/*!**************************************!*\
  !*** ./src/kave-home/kave-home.scss ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/kave-home/mosaic-img/mosaic.scss":
/*!**********************************************!*\
  !*** ./src/kave-home/mosaic-img/mosaic.scss ***!
  \**********************************************/
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
/*!************************************!*\
  !*** ./src/kave-home/kave-home.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kave_home_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kave-home.scss */ "./src/kave-home/kave-home.scss");
/* harmony import */ var _mosaic_img_mosaic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mosaic-img/mosaic */ "./src/kave-home/mosaic-img/mosaic.js");
/* theme style */
 //import "@stephane888/wbu-atomique/js/bootstrap/all.js";
// html


}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvc2NyaXB0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztDQUVBOztBQUVBO0NBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0JGLG9EQUFwQjtBQUNBQSx3REFBWSxDQUFDRyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBRCxDQUFaO0FBQ0FKLHdEQUFZLENBQUNHLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUFELENBQVo7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBLCtEQUFlLElBQUk7Ozs7Ozs7Ozs7O0FDSG5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELFFBQVE7QUFDMUQseUNBQXlDLFFBQVE7QUFDakQseURBQXlELFFBQVE7QUFDakU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsV0FBVztBQUM5QztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLGtDQUFrQztBQUM5RSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxvQkFBb0I7QUFDdkQ7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCw0QkFBNEI7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDhCQUE4QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsZUFBZTtBQUNmLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSw4RkFBOEYsa0NBQWtDLDhCQUE4QjtBQUM5SixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvQkFBb0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9CQUFvQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw0QkFBNEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsUUFBUTtBQUN4QixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JELGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMkJBQTJCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxhQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNEJBQTRCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNEJBQTRCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCw4REFBOEQsOERBQThEO0FBQzVLO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QixnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsMkRBQTJELGNBQWM7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxxREFBcUQ7QUFDdkY7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHFEQUFxRDtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQyx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHFEQUFxRDtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFNBQVM7QUFDeEIsZUFBZSxTQUFTO0FBQ3hCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsNEJBQTRCLDJCQUEyQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLCtEQUFlLFlBQVksRUFBQztBQUM1Qjs7Ozs7Ozs7Ozs7O0FDemxGQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BO0NBR0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BndWdsZWRhcy90aGVtZS1idWlsZGVyLy4vc3JjL2thdmUtaG9tZS9tb3NhaWMtaW1nL21vc2FpYy5qcyIsIndlYnBhY2s6Ly9AZ3VnbGVkYXMvdGhlbWUtYnVpbGRlci8uL3NyYy9rYXZlLWhvbWUvbW9zYWljLWltZy9tb3NhaWMuaHRtbCIsIndlYnBhY2s6Ly9AZ3VnbGVkYXMvdGhlbWUtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9saWdodGdhbGxlcnkvbGlnaHRnYWxsZXJ5LmVzNS5qcyIsIndlYnBhY2s6Ly9AZ3VnbGVkYXMvdGhlbWUtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9saWdodGdhbGxlcnkvY3NzL2xnLXpvb20uY3NzP2UyMTkiLCJ3ZWJwYWNrOi8vQGd1Z2xlZGFzL3RoZW1lLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvbGlnaHRnYWxsZXJ5L3Njc3MvbGlnaHRnYWxsZXJ5LWJ1bmRsZS5zY3NzPzVmZmUiLCJ3ZWJwYWNrOi8vQGd1Z2xlZGFzL3RoZW1lLWJ1aWxkZXIvLi9zcmMva2F2ZS1ob21lL2thdmUtaG9tZS5zY3NzIiwid2VicGFjazovL0BndWdsZWRhcy90aGVtZS1idWlsZGVyLy4vc3JjL2thdmUtaG9tZS9tb3NhaWMtaW1nL21vc2FpYy5zY3NzPzRjZjEiLCJ3ZWJwYWNrOi8vQGd1Z2xlZGFzL3RoZW1lLWJ1aWxkZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGd1Z2xlZGFzL3RoZW1lLWJ1aWxkZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9AZ3VnbGVkYXMvdGhlbWUtYnVpbGRlci8uL3NyYy9rYXZlLWhvbWUva2F2ZS1ob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcImxpZ2h0Z2FsbGVyeS9zY3NzL2xpZ2h0Z2FsbGVyeS1idW5kbGUuc2Nzc1wiO1xuaW1wb3J0IFwibGlnaHRnYWxsZXJ5L2Nzcy9sZy16b29tLmNzc1wiO1xuLy8gaW1wb3J0IFwibGlnaHRnYWxsZXJ5L2ZvbnRzL2xnLnR0ZlwiO1xuaW1wb3J0IGxpZ2h0R2FsbGVyeSBmcm9tIFwibGlnaHRnYWxsZXJ5XCI7XG4vL2ltcG9ydCBsZ1pvb20gZnJvbSBcImxpZ2h0Z2FsbGVyeS9wbHVnaW5zL3pvb21cIjtcblxuaW1wb3J0IFwiLi9tb3NhaWMuaHRtbFwiO1xuaW1wb3J0IFwiLi9tb3NhaWMuc2Nzc1wiO1xuXG4vLyBsaWdodEdhbGxlcnkoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteS1tb3NhaWNcIiksIHtcbi8vICAgLy9wbHVnaW5zOiBbbGdab29tXSxcbi8vICAgc2VsZWN0b3I6IFwiLmdhbGxlcnktaXRlbVwiLFxuLy8gICBoaWRlQ29udHJvbE9uRW5kOiB0cnVlLFxuLy8gICBiYWNrZHJvcER1cmF0aW9uOiAxMDAsXG4vLyAgIG1vZGU6IFwiZmFkZVwiLFxuLy8gICBzcGVlZDogNTAwLFxuLy8gICBkb3dubG9hZDogZmFsc2UsXG4vLyAgIC8vIC4uLiBvdGhlciBzZXR0aW5nc1xuLy8gfSk7XG5jb25zb2xlLmxvZyhcImdsaXRcIiwgbGlnaHRHYWxsZXJ5KTtcbmxpZ2h0R2FsbGVyeShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15LW1vc2FpYy0yXCIpKTtcbmxpZ2h0R2FsbGVyeShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15LW1vc2FpY1wiKSk7XG4iLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLThcXFwiPlxcbiAgICAgIDwhLS0gPT09PT09PSBCZWluZyBtYXNhaWMtaW1nID09PT09PT0gLS0+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwibW9zYWljLWltZ1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2x1bW4tdHdvXFxcIiBpZD1cXFwibXktbW9zYWljXFxcIj5cXG4gICAgICAgICAgPGRpdlxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJjb2x1bW4tdHdvX19pbWcgZ2FsbGVyeS1pdGVtXFxcIlxcbiAgICAgICAgICAgIGRhdGEtc3JjPVxcXCJodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDAxMy8yMTIzLzg1OTQvcHJvZHVjdHMvTUNULVB1cmUtSC0wMTAwMl94MTA2MC5qcGc/dj0xNjI5NTMzMTAxXFxcIlxcbiAgICAgICAgICA+XFxuICAgICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgICAgY2xhc3M9XFxcIm1zLWltZ1xcXCJcXG4gICAgICAgICAgICAgIHNyYz1cXFwiaHR0cHM6Ly9jZG4uc2hvcGlmeS5jb20vcy9maWxlcy8xLzAwMTMvMjEyMy84NTk0L3Byb2R1Y3RzL01DVC1QdXJlLUgtMDEwMDJfeDU2MC5qcGc/dj0xNjI5NTMzMTAxXFxcIlxcbiAgICAgICAgICAgIC8+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2XFxuICAgICAgICAgICAgY2xhc3M9XFxcImNvbHVtbi10d29fX2ltZyBnYWxsZXJ5LWl0ZW1cXFwiXFxuICAgICAgICAgICAgZGF0YS1zcmM9XFxcImh0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8wMDEzLzIxMjMvODU5NC9wcm9kdWN0cy9NQ1QtUHVyZS1ILTAxMDAxX3gxMDYwLmpwZz92PTE2Mjk1MzMxMDFcXFwiXFxuICAgICAgICAgID5cXG4gICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICBjbGFzcz1cXFwibXMtaW1nXFxcIlxcbiAgICAgICAgICAgICAgc3JjPVxcXCJodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDAxMy8yMTIzLzg1OTQvcHJvZHVjdHMvTUNULVB1cmUtSC0wMTAwMV94NTYwLmpwZz92PTE2Mjk1MzMxMDFcXFwiXFxuICAgICAgICAgICAgLz5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbHVtbi10aHJlZVxcXCIgaWQ9XFxcIm15LW1vc2FpYy0yXFxcIj5cXG4gICAgICAgICAgPGFcXG4gICAgICAgICAgICBjbGFzcz1cXFwiY29sdW1uLXRocmVlX19pbWcgZ2FsbGVyeS1pdGVtXFxcIlxcbiAgICAgICAgICAgIGRhdGEtc3JjPVxcXCJodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDAxMy8yMTIzLzg1OTQvcHJvZHVjdHMvTUNULVB1cmUtSC0wMTAwM194MTA2MC5qcGc/dj0xNjI5NTMzMTAxXFxcIlxcbiAgICAgICAgICA+XFxuICAgICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgICAgY2xhc3M9XFxcIm1zLWltZ1xcXCJcXG4gICAgICAgICAgICAgIHNyYz1cXFwiaHR0cHM6Ly9jZG4uc2hvcGlmeS5jb20vcy9maWxlcy8xLzAwMTMvMjEyMy84NTk0L3Byb2R1Y3RzL01DVC1QdXJlLUgtMDEwMDNfeDU2MC5qcGc/dj0xNjI5NTMzMTAxXFxcIlxcbiAgICAgICAgICAgIC8+XFxuICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgPGFcXG4gICAgICAgICAgICBjbGFzcz1cXFwiY29sdW1uLXRocmVlX19pbWcgZ2FsbGVyeS1pdGVtXFxcIlxcbiAgICAgICAgICAgIGRhdGEtc3JjPVxcXCJodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDAxMy8yMTIzLzg1OTQvcHJvZHVjdHMvTUNULVB1cmUtSC0wMTAwNF84NDE5YmU0YS04NDI5LTRlNDktOTE3MS1iYWYxODYxOTkyODlfeDEwNjAuanBnP3Y9MTYyOTUzMzEwMVxcXCJcXG4gICAgICAgICAgPlxcbiAgICAgICAgICAgIDxpbWdcXG4gICAgICAgICAgICAgIGNsYXNzPVxcXCJtcy1pbWdcXFwiXFxuICAgICAgICAgICAgICBzcmM9XFxcImh0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8wMDEzLzIxMjMvODU5NC9wcm9kdWN0cy9NQ1QtUHVyZS1ILTAxMDA0Xzg0MTliZTRhLTg0MjktNGU0OS05MTcxLWJhZjE4NjE5OTI4OV94NTYwLmpwZz92PTE2Mjk1MzMxMDFcXFwiXFxuICAgICAgICAgICAgLz5cXG4gICAgICAgICAgPC9hPlxcbiAgICAgICAgICA8YVxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJjb2x1bW4tdGhyZWVfX2ltZyBnYWxsZXJ5LWl0ZW1cXFwiXFxuICAgICAgICAgICAgZGF0YS1zcmM9XFxcImh0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8wMDEzLzIxMjMvODU5NC9wcm9kdWN0cy9udXRyaWJlX21jdF9wdXJlXzJMX2Zyb250X3gxMDYwLmpwZz92PTE2MzkwNjczMDlcXFwiXFxuICAgICAgICAgID5cXG4gICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICBjbGFzcz1cXFwibXMtaW1nXFxcIlxcbiAgICAgICAgICAgICAgc3JjPVxcXCJodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDAxMy8yMTIzLzg1OTQvcHJvZHVjdHMvbnV0cmliZV9tY3RfcHVyZV8yTF9mcm9udF94NTYwLmpwZz92PTE2MzkwNjczMDlcXFwiXFxuICAgICAgICAgICAgLz5cXG4gICAgICAgICAgPC9hPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPCEtLSA9PT09PT09IEVuZCBtYXNhaWMtaW1nID09PT09PT0gLS0+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8qIVxuICogbGlnaHRnYWxsZXJ5IHwgMi40LjAgfCBKYW51YXJ5IDI5dGggMjAyMlxuICogaHR0cDovL3d3dy5saWdodGdhbGxlcnlqcy5jb20vXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgU2FjaGluIE5lcmF2YXRoO1xuICogQGxpY2Vuc2UgR1BMdjNcbiAqL1xuXG4vKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxudmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn1cblxuLyoqXHJcbiAqIExpc3Qgb2YgbGlnaHRHYWxsZXJ5IGV2ZW50c1xyXG4gKiBBbGwgZXZlbnRzIHNob3VsZCBiZSBkb2N1bWVudGVkIGhlcmVcclxuICogQmVsb3cgaW50ZXJmYWNlcyBhcmUgdXNlZCB0byBidWlsZCB0aGUgd2Vic2l0ZSBkb2N1bWVudGF0aW9uc1xyXG4gKiAqL1xyXG52YXIgbEdFdmVudHMgPSB7XHJcbiAgICBhZnRlckFwcGVuZFNsaWRlOiAnbGdBZnRlckFwcGVuZFNsaWRlJyxcclxuICAgIGluaXQ6ICdsZ0luaXQnLFxyXG4gICAgaGFzVmlkZW86ICdsZ0hhc1ZpZGVvJyxcclxuICAgIGNvbnRhaW5lclJlc2l6ZTogJ2xnQ29udGFpbmVyUmVzaXplJyxcclxuICAgIHVwZGF0ZVNsaWRlczogJ2xnVXBkYXRlU2xpZGVzJyxcclxuICAgIGFmdGVyQXBwZW5kU3ViSHRtbDogJ2xnQWZ0ZXJBcHBlbmRTdWJIdG1sJyxcclxuICAgIGJlZm9yZU9wZW46ICdsZ0JlZm9yZU9wZW4nLFxyXG4gICAgYWZ0ZXJPcGVuOiAnbGdBZnRlck9wZW4nLFxyXG4gICAgc2xpZGVJdGVtTG9hZDogJ2xnU2xpZGVJdGVtTG9hZCcsXHJcbiAgICBiZWZvcmVTbGlkZTogJ2xnQmVmb3JlU2xpZGUnLFxyXG4gICAgYWZ0ZXJTbGlkZTogJ2xnQWZ0ZXJTbGlkZScsXHJcbiAgICBwb3N0ZXJDbGljazogJ2xnUG9zdGVyQ2xpY2snLFxyXG4gICAgZHJhZ1N0YXJ0OiAnbGdEcmFnU3RhcnQnLFxyXG4gICAgZHJhZ01vdmU6ICdsZ0RyYWdNb3ZlJyxcclxuICAgIGRyYWdFbmQ6ICdsZ0RyYWdFbmQnLFxyXG4gICAgYmVmb3JlTmV4dFNsaWRlOiAnbGdCZWZvcmVOZXh0U2xpZGUnLFxyXG4gICAgYmVmb3JlUHJldlNsaWRlOiAnbGdCZWZvcmVQcmV2U2xpZGUnLFxyXG4gICAgYmVmb3JlQ2xvc2U6ICdsZ0JlZm9yZUNsb3NlJyxcclxuICAgIGFmdGVyQ2xvc2U6ICdsZ0FmdGVyQ2xvc2UnLFxyXG4gICAgcm90YXRlTGVmdDogJ2xnUm90YXRlTGVmdCcsXHJcbiAgICByb3RhdGVSaWdodDogJ2xnUm90YXRlUmlnaHQnLFxyXG4gICAgZmxpcEhvcml6b250YWw6ICdsZ0ZsaXBIb3Jpem9udGFsJyxcclxuICAgIGZsaXBWZXJ0aWNhbDogJ2xnRmxpcFZlcnRpY2FsJyxcclxuICAgIGF1dG9wbGF5OiAnbGdBdXRvcGxheScsXHJcbiAgICBhdXRvcGxheVN0YXJ0OiAnbGdBdXRvcGxheVN0YXJ0JyxcclxuICAgIGF1dG9wbGF5U3RvcDogJ2xnQXV0b3BsYXlTdG9wJyxcclxufTtcblxudmFyIGxpZ2h0R2FsbGVyeUNvcmVTZXR0aW5ncyA9IHtcclxuICAgIG1vZGU6ICdsZy1zbGlkZScsXHJcbiAgICBlYXNpbmc6ICdlYXNlJyxcclxuICAgIHNwZWVkOiA0MDAsXHJcbiAgICBsaWNlbnNlS2V5OiAnMDAwMC0wMDAwLTAwMC0wMDAwJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGFkZENsYXNzOiAnJyxcclxuICAgIHN0YXJ0Q2xhc3M6ICdsZy1zdGFydC16b29tJyxcclxuICAgIGJhY2tkcm9wRHVyYXRpb246IDMwMCxcclxuICAgIGNvbnRhaW5lcjogJycsXHJcbiAgICBzdGFydEFuaW1hdGlvbkR1cmF0aW9uOiA0MDAsXHJcbiAgICB6b29tRnJvbU9yaWdpbjogdHJ1ZSxcclxuICAgIGhpZGVCYXJzRGVsYXk6IDAsXHJcbiAgICBzaG93QmFyc0FmdGVyOiAxMDAwMCxcclxuICAgIHNsaWRlRGVsYXk6IDAsXHJcbiAgICBzdXBwb3J0TGVnYWN5QnJvd3NlcjogdHJ1ZSxcclxuICAgIGFsbG93TWVkaWFPdmVybGFwOiBmYWxzZSxcclxuICAgIHZpZGVvTWF4U2l6ZTogJzEyODAtNzIwJyxcclxuICAgIGxvYWRZb3VUdWJlUG9zdGVyOiB0cnVlLFxyXG4gICAgZGVmYXVsdENhcHRpb25IZWlnaHQ6IDAsXHJcbiAgICBhcmlhTGFiZWxsZWRieTogJycsXHJcbiAgICBhcmlhRGVzY3JpYmVkYnk6ICcnLFxyXG4gICAgY2xvc2FibGU6IHRydWUsXHJcbiAgICBzd2lwZVRvQ2xvc2U6IHRydWUsXHJcbiAgICBjbG9zZU9uVGFwOiB0cnVlLFxyXG4gICAgc2hvd0Nsb3NlSWNvbjogdHJ1ZSxcclxuICAgIHNob3dNYXhpbWl6ZUljb246IGZhbHNlLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIGVzY0tleTogdHJ1ZSxcclxuICAgIGtleVByZXNzOiB0cnVlLFxyXG4gICAgY29udHJvbHM6IHRydWUsXHJcbiAgICBzbGlkZUVuZEFuaW1hdGlvbjogdHJ1ZSxcclxuICAgIGhpZGVDb250cm9sT25FbmQ6IGZhbHNlLFxyXG4gICAgbW91c2V3aGVlbDogZmFsc2UsXHJcbiAgICBnZXRDYXB0aW9uRnJvbVRpdGxlT3JBbHQ6IHRydWUsXHJcbiAgICBhcHBlbmRTdWJIdG1sVG86ICcubGctc3ViLWh0bWwnLFxyXG4gICAgc3ViSHRtbFNlbGVjdG9yUmVsYXRpdmU6IGZhbHNlLFxyXG4gICAgcHJlbG9hZDogMixcclxuICAgIG51bWJlck9mU2xpZGVJdGVtc0luRG9tOiAxMCxcclxuICAgIHNlbGVjdG9yOiAnJyxcclxuICAgIHNlbGVjdFdpdGhpbjogJycsXHJcbiAgICBuZXh0SHRtbDogJycsXHJcbiAgICBwcmV2SHRtbDogJycsXHJcbiAgICBpbmRleDogMCxcclxuICAgIGlmcmFtZVdpZHRoOiAnMTAwJScsXHJcbiAgICBpZnJhbWVIZWlnaHQ6ICcxMDAlJyxcclxuICAgIGlmcmFtZU1heFdpZHRoOiAnMTAwJScsXHJcbiAgICBpZnJhbWVNYXhIZWlnaHQ6ICcxMDAlJyxcclxuICAgIGRvd25sb2FkOiB0cnVlLFxyXG4gICAgY291bnRlcjogdHJ1ZSxcclxuICAgIGFwcGVuZENvdW50ZXJUbzogJy5sZy10b29sYmFyJyxcclxuICAgIHN3aXBlVGhyZXNob2xkOiA1MCxcclxuICAgIGVuYWJsZVN3aXBlOiB0cnVlLFxyXG4gICAgZW5hYmxlRHJhZzogdHJ1ZSxcclxuICAgIGR5bmFtaWM6IGZhbHNlLFxyXG4gICAgZHluYW1pY0VsOiBbXSxcclxuICAgIGV4dHJhUHJvcHM6IFtdLFxyXG4gICAgZXhUaHVtYkltYWdlOiAnJyxcclxuICAgIGlzTW9iaWxlOiB1bmRlZmluZWQsXHJcbiAgICBtb2JpbGVTZXR0aW5nczoge1xyXG4gICAgICAgIGNvbnRyb2xzOiBmYWxzZSxcclxuICAgICAgICBzaG93Q2xvc2VJY29uOiBmYWxzZSxcclxuICAgICAgICBkb3dubG9hZDogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgcGx1Z2luczogW10sXHJcbiAgICBzdHJpbmdzOiB7XHJcbiAgICAgICAgY2xvc2VHYWxsZXJ5OiAnQ2xvc2UgZ2FsbGVyeScsXHJcbiAgICAgICAgdG9nZ2xlTWF4aW1pemU6ICdUb2dnbGUgbWF4aW1pemUnLFxyXG4gICAgICAgIHByZXZpb3VzU2xpZGU6ICdQcmV2aW91cyBzbGlkZScsXHJcbiAgICAgICAgbmV4dFNsaWRlOiAnTmV4dCBzbGlkZScsXHJcbiAgICAgICAgZG93bmxvYWQ6ICdEb3dubG9hZCcsXHJcbiAgICAgICAgcGxheVZpZGVvOiAnUGxheSB2aWRlbycsXHJcbiAgICB9LFxyXG59O1xuXG5mdW5jdGlvbiBpbml0TGdQb2x5ZmlsbHMoKSB7XHJcbiAgICAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgZnVuY3Rpb24gQ3VzdG9tRXZlbnQoZXZlbnQsIHBhcmFtcykge1xyXG4gICAgICAgICAgICBwYXJhbXMgPSBwYXJhbXMgfHwge1xyXG4gICAgICAgICAgICAgICAgYnViYmxlczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRldGFpbDogbnVsbCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdmFyIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xyXG4gICAgICAgICAgICBldnQuaW5pdEN1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUsIHBhcmFtcy5kZXRhaWwpO1xyXG4gICAgICAgICAgICByZXR1cm4gZXZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuQ3VzdG9tRXZlbnQgPSBDdXN0b21FdmVudDtcclxuICAgIH0pKCk7XHJcbiAgICAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcykge1xyXG4gICAgICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzID1cclxuICAgICAgICAgICAgICAgIEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xyXG4gICAgICAgIH1cclxuICAgIH0pKCk7XHJcbn1cclxudmFyIGxnUXVlcnkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBsZ1F1ZXJ5KHNlbGVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy5jc3NWZW5kZXJQcmVmaXhlcyA9IFtcclxuICAgICAgICAgICAgJ1RyYW5zaXRpb25EdXJhdGlvbicsXHJcbiAgICAgICAgICAgICdUcmFuc2l0aW9uVGltaW5nRnVuY3Rpb24nLFxyXG4gICAgICAgICAgICAnVHJhbnNmb3JtJyxcclxuICAgICAgICAgICAgJ1RyYW5zaXRpb24nLFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy5zZWxlY3RvciA9IHRoaXMuX2dldFNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgICAgICB0aGlzLmZpcnN0RWxlbWVudCA9IHRoaXMuX2dldEZpcnN0RWwoKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGxnUXVlcnkuZ2VuZXJhdGVVVUlEID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgICAgIHZhciByID0gKE1hdGgucmFuZG9tKCkgKiAxNikgfCAwLCB2ID0gYyA9PSAneCcgPyByIDogKHIgJiAweDMpIHwgMHg4O1xyXG4gICAgICAgICAgICByZXR1cm4gdi50b1N0cmluZygxNik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgbGdRdWVyeS5wcm90b3R5cGUuX2dldFNlbGVjdG9yID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBjb250ZXh0KSB7XHJcbiAgICAgICAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkgeyBjb250ZXh0ID0gZG9jdW1lbnQ7IH1cclxuICAgICAgICBpZiAodHlwZW9mIHNlbGVjdG9yICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0b3I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRleHQgPSBjb250ZXh0IHx8IGRvY3VtZW50O1xyXG4gICAgICAgIHZhciBmbCA9IHNlbGVjdG9yLnN1YnN0cmluZygwLCAxKTtcclxuICAgICAgICBpZiAoZmwgPT09ICcjJykge1xyXG4gICAgICAgICAgICByZXR1cm4gY29udGV4dC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBsZ1F1ZXJ5LnByb3RvdHlwZS5fZWFjaCA9IGZ1bmN0aW9uIChmdW5jKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zZWxlY3Rvci5sZW5ndGggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBbXS5mb3JFYWNoLmNhbGwodGhpcy5zZWxlY3RvciwgZnVuYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmdW5jKHRoaXMuc2VsZWN0b3IsIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBsZ1F1ZXJ5LnByb3RvdHlwZS5fc2V0Q3NzVmVuZG9yUHJlZml4ID0gZnVuY3Rpb24gKGVsLCBjc3NQcm9wZXJ0eSwgdmFsdWUpIHtcclxuICAgICAgICAvLyBwcmV0dGllci1pZ25vcmVcclxuICAgICAgICB2YXIgcHJvcGVydHkgPSBjc3NQcm9wZXJ0eS5yZXBsYWNlKC8tKFthLXpdKS9naSwgZnVuY3Rpb24gKHMsIGdyb3VwMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZ3JvdXAxLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMuY3NzVmVuZGVyUHJlZml4ZXMuaW5kZXhPZihwcm9wZXJ0eSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGVsLnN0eWxlW3Byb3BlcnR5LmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgcHJvcGVydHkuc2xpY2UoMSldID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGVsLnN0eWxlWyd3ZWJraXQnICsgcHJvcGVydHldID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGVsLnN0eWxlWydtb3onICsgcHJvcGVydHldID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGVsLnN0eWxlWydtcycgKyBwcm9wZXJ0eV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgZWwuc3R5bGVbJ28nICsgcHJvcGVydHldID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBlbC5zdHlsZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgbGdRdWVyeS5wcm90b3R5cGUuX2dldEZpcnN0RWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0b3IgJiYgdGhpcy5zZWxlY3Rvci5sZW5ndGggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RvclswXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdG9yO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBsZ1F1ZXJ5LnByb3RvdHlwZS5pc0V2ZW50TWF0Y2hlZCA9IGZ1bmN0aW9uIChldmVudCwgZXZlbnROYW1lKSB7XHJcbiAgICAgICAgdmFyIGV2ZW50TmFtZXNwYWNlID0gZXZlbnROYW1lLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgcmV0dXJuIGV2ZW50XHJcbiAgICAgICAgICAgIC5zcGxpdCgnLicpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGU7IH0pXHJcbiAgICAgICAgICAgIC5ldmVyeShmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXZlbnROYW1lc3BhY2UuaW5kZXhPZihlKSAhPT0gLTE7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgbGdRdWVyeS5wcm90b3R5cGUuYXR0ciA9IGZ1bmN0aW9uIChhdHRyLCB2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5maXJzdEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5maXJzdEVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9lYWNoKGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIGxnUXVlcnkucHJvdG90eXBlLmZpbmQgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcclxuICAgICAgICByZXR1cm4gJExHKHRoaXMuX2dldFNlbGVjdG9yKHNlbGVjdG9yLCB0aGlzLnNlbGVjdG9yKSk7XHJcbiAgICB9O1xyXG4gICAgbGdRdWVyeS5wcm90b3R5cGUuZmlyc3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0b3IgJiYgdGhpcy5zZWxlY3Rvci5sZW5ndGggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJExHKHRoaXMuc2VsZWN0b3JbMF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuICRMRyh0aGlzLnNlbGVjdG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgbGdRdWVyeS5wcm90b3R5cGUuZXEgPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gJExHKHRoaXMuc2VsZWN0b3JbaW5kZXhdKTtcclxuICAgIH07XHJcbiAgICBsZ1F1ZXJ5LnByb3RvdHlwZS5wYXJlbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICRMRyh0aGlzLnNlbGVjdG9yLnBhcmVudEVsZW1lbnQpO1xyXG4gICAgfTtcclxuICAgIGxnUXVlcnkucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0Rmlyc3RFbCgpO1xyXG4gICAgfTtcclxuICAgIGxnUXVlcnkucHJvdG90eXBlLnJlbW92ZUF0dHIgPSBmdW5jdGlvbiAoYXR0cmlidXRlcykge1xyXG4gICAgICAgIHZhciBhdHRycyA9IGF0dHJpYnV0ZXMuc3BsaXQoJyAnKTtcclxuICAgICAgICB0aGlzLl9lYWNoKGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgICAgICBhdHRycy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7IHJldHVybiBlbC5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7IH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIGxnUXVlcnkucHJvdG90eXBlLndyYXAgPSBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmZpcnN0RWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB3cmFwcGVyLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcclxuICAgICAgICB0aGlzLmZpcnN0RWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3cmFwcGVyLCB0aGlzLmZpcnN0RWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5maXJzdEVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmZpcnN0RWxlbWVudCk7XHJcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmZpcnN0RWxlbWVudCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgbGdRdWVyeS5wcm90b3R5cGUuYWRkQ2xhc3MgPSBmdW5jdGlvbiAoY2xhc3NOYW1lcykge1xyXG4gICAgICAgIGlmIChjbGFzc05hbWVzID09PSB2b2lkIDApIHsgY2xhc3NOYW1lcyA9ICcnOyB9XHJcbiAgICAgICAgdGhpcy5fZWFjaChmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICAgICAgLy8gSUUgZG9lc24ndCBzdXBwb3J0IG11bHRpcGxlIGFyZ3VtZW50c1xyXG4gICAgICAgICAgICBjbGFzc05hbWVzLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBsZ1F1ZXJ5LnByb3RvdHlwZS5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIChjbGFzc05hbWVzKSB7XHJcbiAgICAgICAgdGhpcy5fZWFjaChmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICAgICAgLy8gSUUgZG9lc24ndCBzdXBwb3J0IG11bHRpcGxlIGFyZ3VtZW50c1xyXG4gICAgICAgICAgICBjbGFzc05hbWVzLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBsZ1F1ZXJ5LnByb3RvdHlwZS5oYXNDbGFzcyA9IGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZmlyc3RFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlyc3RFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xyXG4gICAgfTtcclxuICAgIGxnUXVlcnkucHJvdG90eXBlLmhhc0F0dHJpYnV0ZSA9IGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZmlyc3RFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlyc3RFbGVtZW50Lmhhc0F0dHJpYnV0ZShhdHRyaWJ1dGUpO1xyXG4gICAgfTtcclxuICAgIGxnUXVlcnkucHJvdG90eXBlLnRvZ2dsZUNsYXNzID0gZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5maXJzdEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmhhc0NsYXNzKGNsYXNzTmFtZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRDbGFzcyhjbGFzc05hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBsZ1F1ZXJ5LnByb3RvdHlwZS5jc3MgPSBmdW5jdGlvbiAocHJvcGVydHksIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLl9lYWNoKGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgICAgICBfdGhpcy5fc2V0Q3NzVmVuZG9yUHJlZml4KGVsLCBwcm9wZXJ0eSwgdmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIC8vIE5lZWQgdG8gcGFzcyBzZXBhcmF0ZSBuYW1lc3BhY2VzIGZvciBzZXBhcmF0ZSBlbGVtZW50c1xyXG4gICAgbGdRdWVyeS5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAoZXZlbnRzLCBsaXN0ZW5lcikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBldmVudHMuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobGdRdWVyeS5ldmVudExpc3RlbmVyc1tldmVudF0pKSB7XHJcbiAgICAgICAgICAgICAgICBsZ1F1ZXJ5LmV2ZW50TGlzdGVuZXJzW2V2ZW50XSA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxnUXVlcnkuZXZlbnRMaXN0ZW5lcnNbZXZlbnRdLnB1c2gobGlzdGVuZXIpO1xyXG4gICAgICAgICAgICBfdGhpcy5zZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKGV2ZW50LnNwbGl0KCcuJylbMF0sIGxpc3RlbmVyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICAvLyBAdG9kbyAtIHRlc3QgdGhpc1xyXG4gICAgbGdRdWVyeS5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIChldmVudCwgbGlzdGVuZXIpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMub24oZXZlbnQsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMub2ZmKGV2ZW50KTtcclxuICAgICAgICAgICAgbGlzdGVuZXIoZXZlbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIGxnUXVlcnkucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBPYmplY3Qua2V5cyhsZ1F1ZXJ5LmV2ZW50TGlzdGVuZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcclxuICAgICAgICAgICAgaWYgKF90aGlzLmlzRXZlbnRNYXRjaGVkKGV2ZW50LCBldmVudE5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBsZ1F1ZXJ5LmV2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV0uZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZWxlY3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZS5zcGxpdCgnLicpWzBdLCBsaXN0ZW5lcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGxnUXVlcnkuZXZlbnRMaXN0ZW5lcnNbZXZlbnROYW1lXSA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgbGdRdWVyeS5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uIChldmVudCwgZGV0YWlsKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmZpcnN0RWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGN1c3RvbUV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KGV2ZW50LnNwbGl0KCcuJylbMF0sIHtcclxuICAgICAgICAgICAgZGV0YWlsOiBkZXRhaWwgfHwgbnVsbCxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmZpcnN0RWxlbWVudC5kaXNwYXRjaEV2ZW50KGN1c3RvbUV2ZW50KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICAvLyBEb2VzIG5vdCBzdXBwb3J0IElFXHJcbiAgICBsZ1F1ZXJ5LnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24gKHVybCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgZmV0Y2godXJsKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMudGV4dCgpOyB9KVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgICAgICBfdGhpcy5zZWxlY3Rvci5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIGxnUXVlcnkucHJvdG90eXBlLmh0bWwgPSBmdW5jdGlvbiAoaHRtbCkge1xyXG4gICAgICAgIGlmIChodG1sID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmZpcnN0RWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZpcnN0RWxlbWVudC5pbm5lckhUTUw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2VhY2goZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgICAgIGVsLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgbGdRdWVyeS5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICB0aGlzLl9lYWNoKGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGh0bWwgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICBlbC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGh0bWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWwuYXBwZW5kQ2hpbGQoaHRtbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBsZ1F1ZXJ5LnByb3RvdHlwZS5wcmVwZW5kID0gZnVuY3Rpb24gKGh0bWwpIHtcclxuICAgICAgICB0aGlzLl9lYWNoKGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgICAgICBlbC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBodG1sKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBsZ1F1ZXJ5LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fZWFjaChmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICAgICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgbGdRdWVyeS5wcm90b3R5cGUuZW1wdHkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fZWFjaChmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICAgICAgZWwuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgbGdRdWVyeS5wcm90b3R5cGUuc2Nyb2xsVG9wID0gZnVuY3Rpb24gKHNjcm9sbFRvcCkge1xyXG4gICAgICAgIGlmIChzY3JvbGxUb3AgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IHNjcm9sbFRvcDtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9IHNjcm9sbFRvcDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKHdpbmRvdy5wYWdlWU9mZnNldCB8fFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgfHxcclxuICAgICAgICAgICAgICAgIDApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBsZ1F1ZXJ5LnByb3RvdHlwZS5zY3JvbGxMZWZ0ID0gZnVuY3Rpb24gKHNjcm9sbExlZnQpIHtcclxuICAgICAgICBpZiAoc2Nyb2xsTGVmdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQ7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKHdpbmRvdy5wYWdlWE9mZnNldCB8fFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgfHxcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCB8fFxyXG4gICAgICAgICAgICAgICAgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGxnUXVlcnkucHJvdG90eXBlLm9mZnNldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZmlyc3RFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVjdCA9IHRoaXMuZmlyc3RFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIHZhciBib2R5TWFyZ2luTGVmdCA9ICRMRygnYm9keScpLnN0eWxlKCkubWFyZ2luTGVmdDtcclxuICAgICAgICAvLyBNaW51cyBib2R5IG1hcmdpbiAtIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzMwNzExNTQ4L2lzLWdldGJvdW5kaW5nY2xpZW50cmVjdC1sZWZ0LXJldHVybmluZy1hLXdyb25nLXZhbHVlXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbGVmdDogcmVjdC5sZWZ0IC0gcGFyc2VGbG9hdChib2R5TWFyZ2luTGVmdCkgKyB0aGlzLnNjcm9sbExlZnQoKSxcclxuICAgICAgICAgICAgdG9wOiByZWN0LnRvcCArIHRoaXMuc2Nyb2xsVG9wKCksXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICBsZ1F1ZXJ5LnByb3RvdHlwZS5zdHlsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZmlyc3RFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmZpcnN0RWxlbWVudC5jdXJyZW50U3R5bGUgfHxcclxuICAgICAgICAgICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5maXJzdEVsZW1lbnQpKTtcclxuICAgIH07XHJcbiAgICAvLyBXaWR0aCB3aXRob3V0IHBhZGRpbmcgYW5kIGJvcmRlciBldmVuIGlmIGJveC1zaXppbmcgaXMgdXNlZC5cclxuICAgIGxnUXVlcnkucHJvdG90eXBlLndpZHRoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzdHlsZSA9IHRoaXMuc3R5bGUoKTtcclxuICAgICAgICByZXR1cm4gKHRoaXMuZmlyc3RFbGVtZW50LmNsaWVudFdpZHRoIC1cclxuICAgICAgICAgICAgcGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nTGVmdCkgLVxyXG4gICAgICAgICAgICBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdSaWdodCkpO1xyXG4gICAgfTtcclxuICAgIC8vIEhlaWdodCB3aXRob3V0IHBhZGRpbmcgYW5kIGJvcmRlciBldmVuIGlmIGJveC1zaXppbmcgaXMgdXNlZC5cclxuICAgIGxnUXVlcnkucHJvdG90eXBlLmhlaWdodCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc3R5bGUgPSB0aGlzLnN0eWxlKCk7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmZpcnN0RWxlbWVudC5jbGllbnRIZWlnaHQgLVxyXG4gICAgICAgICAgICBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdUb3ApIC1cclxuICAgICAgICAgICAgcGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nQm90dG9tKSk7XHJcbiAgICB9O1xyXG4gICAgbGdRdWVyeS5ldmVudExpc3RlbmVycyA9IHt9O1xyXG4gICAgcmV0dXJuIGxnUXVlcnk7XHJcbn0oKSk7XHJcbmZ1bmN0aW9uICRMRyhzZWxlY3Rvcikge1xyXG4gICAgaW5pdExnUG9seWZpbGxzKCk7XHJcbiAgICByZXR1cm4gbmV3IGxnUXVlcnkoc2VsZWN0b3IpO1xyXG59XG5cbnZhciBkZWZhdWx0RHluYW1pY09wdGlvbnMgPSBbXHJcbiAgICAnc3JjJyxcclxuICAgICdzb3VyY2VzJyxcclxuICAgICdzdWJIdG1sJyxcclxuICAgICdzdWJIdG1sVXJsJyxcclxuICAgICdodG1sJyxcclxuICAgICd2aWRlbycsXHJcbiAgICAncG9zdGVyJyxcclxuICAgICdzbGlkZU5hbWUnLFxyXG4gICAgJ3Jlc3BvbnNpdmUnLFxyXG4gICAgJ3NyY3NldCcsXHJcbiAgICAnc2l6ZXMnLFxyXG4gICAgJ2lmcmFtZScsXHJcbiAgICAnZG93bmxvYWRVcmwnLFxyXG4gICAgJ2Rvd25sb2FkJyxcclxuICAgICd3aWR0aCcsXHJcbiAgICAnZmFjZWJvb2tTaGFyZVVybCcsXHJcbiAgICAndHdlZXRUZXh0JyxcclxuICAgICdpZnJhbWVUaXRsZScsXHJcbiAgICAndHdpdHRlclNoYXJlVXJsJyxcclxuICAgICdwaW50ZXJlc3RTaGFyZVVybCcsXHJcbiAgICAncGludGVyZXN0VGV4dCcsXHJcbiAgICAnZmJIdG1sJyxcclxuICAgICdkaXNxdXNJZGVudGlmaWVyJyxcclxuICAgICdkaXNxdXNVcmwnLFxyXG5dO1xyXG4vLyBDb252ZXJ0IGh0bWwgZGF0YS1hdHRyaWJ1dGUgdG8gY2FtYWxjYXNlXHJcbmZ1bmN0aW9uIGNvbnZlcnRUb0RhdGEoYXR0cikge1xyXG4gICAgLy8gRkluZCBhIHdheSBmb3IgbGdzaXplXHJcbiAgICBpZiAoYXR0ciA9PT0gJ2hyZWYnKSB7XHJcbiAgICAgICAgcmV0dXJuICdzcmMnO1xyXG4gICAgfVxyXG4gICAgYXR0ciA9IGF0dHIucmVwbGFjZSgnZGF0YS0nLCAnJyk7XHJcbiAgICBhdHRyID0gYXR0ci5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIGF0dHIuc2xpY2UoMSk7XHJcbiAgICBhdHRyID0gYXR0ci5yZXBsYWNlKC8tKFthLXpdKS9nLCBmdW5jdGlvbiAoZykgeyByZXR1cm4gZ1sxXS50b1VwcGVyQ2FzZSgpOyB9KTtcclxuICAgIHJldHVybiBhdHRyO1xyXG59XHJcbnZhciB1dGlscyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogZ2V0IHBvc3NpYmxlIHdpZHRoIGFuZCBoZWlnaHQgZnJvbSB0aGUgbGdTaXplIGF0dHJpYnV0ZS4gVXNlZCBmb3IgWm9vbUZyb21PcmlnaW4gb3B0aW9uXHJcbiAgICAgKi9cclxuICAgIGdldFNpemU6IGZ1bmN0aW9uIChlbCwgY29udGFpbmVyLCBzcGFjaW5nLCBkZWZhdWx0TGdTaXplKSB7XHJcbiAgICAgICAgaWYgKHNwYWNpbmcgPT09IHZvaWQgMCkgeyBzcGFjaW5nID0gMDsgfVxyXG4gICAgICAgIHZhciBMR2VsID0gJExHKGVsKTtcclxuICAgICAgICB2YXIgbGdTaXplID0gTEdlbC5hdHRyKCdkYXRhLWxnLXNpemUnKSB8fCBkZWZhdWx0TGdTaXplO1xyXG4gICAgICAgIGlmICghbGdTaXplKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGlzUmVzcG9uc2l2ZVNpemVzID0gbGdTaXplLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgLy8gaWYgYXQtbGVhc3QgdHdvIHZpZXdwb3J0IHNpemVzIGFyZSBhdmFpbGFibGVcclxuICAgICAgICBpZiAoaXNSZXNwb25zaXZlU2l6ZXNbMV0pIHtcclxuICAgICAgICAgICAgdmFyIHdXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlzUmVzcG9uc2l2ZVNpemVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2l6ZV8xID0gaXNSZXNwb25zaXZlU2l6ZXNbaV07XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2l2ZVdpZHRoID0gcGFyc2VJbnQoc2l6ZV8xLnNwbGl0KCctJylbMl0sIDEwKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zaXZlV2lkdGggPiB3V2lkdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZ1NpemUgPSBzaXplXzE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB0YWtlIGxhc3QgaXRlbSBhcyBsYXN0IG9wdGlvblxyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IGlzUmVzcG9uc2l2ZVNpemVzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZ1NpemUgPSBzaXplXzE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNpemUgPSBsZ1NpemUuc3BsaXQoJy0nKTtcclxuICAgICAgICB2YXIgd2lkdGggPSBwYXJzZUludChzaXplWzBdLCAxMCk7XHJcbiAgICAgICAgdmFyIGhlaWdodCA9IHBhcnNlSW50KHNpemVbMV0sIDEwKTtcclxuICAgICAgICB2YXIgY1dpZHRoID0gY29udGFpbmVyLndpZHRoKCk7XHJcbiAgICAgICAgdmFyIGNIZWlnaHQgPSBjb250YWluZXIuaGVpZ2h0KCkgLSBzcGFjaW5nO1xyXG4gICAgICAgIHZhciBtYXhXaWR0aCA9IE1hdGgubWluKGNXaWR0aCwgd2lkdGgpO1xyXG4gICAgICAgIHZhciBtYXhIZWlnaHQgPSBNYXRoLm1pbihjSGVpZ2h0LCBoZWlnaHQpO1xyXG4gICAgICAgIHZhciByYXRpbyA9IE1hdGgubWluKG1heFdpZHRoIC8gd2lkdGgsIG1heEhlaWdodCAvIGhlaWdodCk7XHJcbiAgICAgICAgcmV0dXJuIHsgd2lkdGg6IHdpZHRoICogcmF0aW8sIGhlaWdodDogaGVpZ2h0ICogcmF0aW8gfTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjIEdldCB0cmFuc2Zvcm0gdmFsdWUgYmFzZWQgb24gdGhlIGltYWdlU2l6ZS4gVXNlZCBmb3IgWm9vbUZyb21PcmlnaW4gb3B0aW9uXHJcbiAgICAgKiBAcGFyYW0ge2pRdWVyeSBFbGVtZW50fVxyXG4gICAgICogQHJldHVybnMge1N0cmluZ30gVHJhbnNmb3JtIENTUyBzdHJpbmdcclxuICAgICAqL1xyXG4gICAgZ2V0VHJhbnNmb3JtOiBmdW5jdGlvbiAoZWwsIGNvbnRhaW5lciwgdG9wLCBib3R0b20sIGltYWdlU2l6ZSkge1xyXG4gICAgICAgIGlmICghaW1hZ2VTaXplKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIExHZWwgPSAkTEcoZWwpLmZpbmQoJ2ltZycpLmZpcnN0KCk7XHJcbiAgICAgICAgaWYgKCFMR2VsLmdldCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNvbnRhaW5lclJlY3QgPSBjb250YWluZXIuZ2V0KCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgdmFyIHdXaWR0aCA9IGNvbnRhaW5lclJlY3Qud2lkdGg7XHJcbiAgICAgICAgLy8gdXNpbmcgaW5uZXJXaWR0aCB0byBpbmNsdWRlIG1vYmlsZSBzYWZhcmkgYm90dG9tIGJhclxyXG4gICAgICAgIHZhciB3SGVpZ2h0ID0gY29udGFpbmVyLmhlaWdodCgpIC0gKHRvcCArIGJvdHRvbSk7XHJcbiAgICAgICAgdmFyIGVsV2lkdGggPSBMR2VsLndpZHRoKCk7XHJcbiAgICAgICAgdmFyIGVsSGVpZ2h0ID0gTEdlbC5oZWlnaHQoKTtcclxuICAgICAgICB2YXIgZWxTdHlsZSA9IExHZWwuc3R5bGUoKTtcclxuICAgICAgICB2YXIgeCA9ICh3V2lkdGggLSBlbFdpZHRoKSAvIDIgLVxyXG4gICAgICAgICAgICBMR2VsLm9mZnNldCgpLmxlZnQgK1xyXG4gICAgICAgICAgICAocGFyc2VGbG9hdChlbFN0eWxlLnBhZGRpbmdMZWZ0KSB8fCAwKSArXHJcbiAgICAgICAgICAgIChwYXJzZUZsb2F0KGVsU3R5bGUuYm9yZGVyTGVmdCkgfHwgMCkgK1xyXG4gICAgICAgICAgICAkTEcod2luZG93KS5zY3JvbGxMZWZ0KCkgK1xyXG4gICAgICAgICAgICBjb250YWluZXJSZWN0LmxlZnQ7XHJcbiAgICAgICAgdmFyIHkgPSAod0hlaWdodCAtIGVsSGVpZ2h0KSAvIDIgLVxyXG4gICAgICAgICAgICBMR2VsLm9mZnNldCgpLnRvcCArXHJcbiAgICAgICAgICAgIChwYXJzZUZsb2F0KGVsU3R5bGUucGFkZGluZ1RvcCkgfHwgMCkgK1xyXG4gICAgICAgICAgICAocGFyc2VGbG9hdChlbFN0eWxlLmJvcmRlclRvcCkgfHwgMCkgK1xyXG4gICAgICAgICAgICAkTEcod2luZG93KS5zY3JvbGxUb3AoKSArXHJcbiAgICAgICAgICAgIHRvcDtcclxuICAgICAgICB2YXIgc2NYID0gZWxXaWR0aCAvIGltYWdlU2l6ZS53aWR0aDtcclxuICAgICAgICB2YXIgc2NZID0gZWxIZWlnaHQgLyBpbWFnZVNpemUuaGVpZ2h0O1xyXG4gICAgICAgIHZhciB0cmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoJyArXHJcbiAgICAgICAgICAgICh4ICo9IC0xKSArXHJcbiAgICAgICAgICAgICdweCwgJyArXHJcbiAgICAgICAgICAgICh5ICo9IC0xKSArXHJcbiAgICAgICAgICAgICdweCwgMCkgc2NhbGUzZCgnICtcclxuICAgICAgICAgICAgc2NYICtcclxuICAgICAgICAgICAgJywgJyArXHJcbiAgICAgICAgICAgIHNjWSArXHJcbiAgICAgICAgICAgICcsIDEpJztcclxuICAgICAgICByZXR1cm4gdHJhbnNmb3JtO1xyXG4gICAgfSxcclxuICAgIGdldElmcmFtZU1hcmt1cDogZnVuY3Rpb24gKGlmcmFtZVdpZHRoLCBpZnJhbWVIZWlnaHQsIGlmcmFtZU1heFdpZHRoLCBpZnJhbWVNYXhIZWlnaHQsIHNyYywgaWZyYW1lVGl0bGUpIHtcclxuICAgICAgICB2YXIgdGl0bGUgPSBpZnJhbWVUaXRsZSA/ICd0aXRsZT1cIicgKyBpZnJhbWVUaXRsZSArICdcIicgOiAnJztcclxuICAgICAgICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJsZy12aWRlby1jb250IGxnLWhhcy1pZnJhbWVcXFwiIHN0eWxlPVxcXCJ3aWR0aDpcIiArIGlmcmFtZVdpZHRoICsgXCI7IG1heC13aWR0aDpcIiArIGlmcmFtZU1heFdpZHRoICsgXCI7IGhlaWdodDogXCIgKyBpZnJhbWVIZWlnaHQgKyBcIjsgbWF4LWhlaWdodDpcIiArIGlmcmFtZU1heEhlaWdodCArIFwiXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpZnJhbWUgY2xhc3M9XFxcImxnLW9iamVjdFxcXCIgZnJhbWVib3JkZXI9XFxcIjBcXFwiIFwiICsgdGl0bGUgKyBcIiBzcmM9XFxcIlwiICsgc3JjICsgXCJcXFwiICBhbGxvd2Z1bGxzY3JlZW49XFxcInRydWVcXFwiPjwvaWZyYW1lPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cIjtcclxuICAgIH0sXHJcbiAgICBnZXRJbWdNYXJrdXA6IGZ1bmN0aW9uIChpbmRleCwgc3JjLCBhbHRBdHRyLCBzcmNzZXQsIHNpemVzLCBzb3VyY2VzKSB7XHJcbiAgICAgICAgdmFyIHNyY3NldEF0dHIgPSBzcmNzZXQgPyBcInNyY3NldD1cXFwiXCIgKyBzcmNzZXQgKyBcIlxcXCJcIiA6ICcnO1xyXG4gICAgICAgIHZhciBzaXplc0F0dHIgPSBzaXplcyA/IFwic2l6ZXM9XFxcIlwiICsgc2l6ZXMgKyBcIlxcXCJcIiA6ICcnO1xyXG4gICAgICAgIHZhciBpbWdNYXJrdXAgPSBcIjxpbWcgXCIgKyBhbHRBdHRyICsgXCIgXCIgKyBzcmNzZXRBdHRyICsgXCIgIFwiICsgc2l6ZXNBdHRyICsgXCIgY2xhc3M9XFxcImxnLW9iamVjdCBsZy1pbWFnZVxcXCIgZGF0YS1pbmRleD1cXFwiXCIgKyBpbmRleCArIFwiXFxcIiBzcmM9XFxcIlwiICsgc3JjICsgXCJcXFwiIC8+XCI7XHJcbiAgICAgICAgdmFyIHNvdXJjZVRhZyA9ICcnO1xyXG4gICAgICAgIGlmIChzb3VyY2VzKSB7XHJcbiAgICAgICAgICAgIHZhciBzb3VyY2VPYmogPSB0eXBlb2Ygc291cmNlcyA9PT0gJ3N0cmluZycgPyBKU09OLnBhcnNlKHNvdXJjZXMpIDogc291cmNlcztcclxuICAgICAgICAgICAgc291cmNlVGFnID0gc291cmNlT2JqLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXR0cnMgPSAnJztcclxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRG8gbm90IHJlbW92ZSB0aGUgZmlyc3Qgc3BhY2UgYXMgaXQgaXMgcmVxdWlyZWQgdG8gc2VwYXJhdGUgdGhlIGF0dHJpYnV0ZXNcclxuICAgICAgICAgICAgICAgICAgICBhdHRycyArPSBcIiBcIiArIGtleSArIFwiPVxcXCJcIiArIHNvdXJjZVtrZXldICsgXCJcXFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIjxzb3VyY2UgXCIgKyBhdHRycyArIFwiPjwvc291cmNlPlwiO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiXCIgKyBzb3VyY2VUYWcgKyBpbWdNYXJrdXA7XHJcbiAgICB9LFxyXG4gICAgLy8gR2V0IHNyYyBmcm9tIHJlc3BvbnNpdmUgc3JjXHJcbiAgICBnZXRSZXNwb25zaXZlU3JjOiBmdW5jdGlvbiAoc3JjSXRtcykge1xyXG4gICAgICAgIHZhciByc1dpZHRoID0gW107XHJcbiAgICAgICAgdmFyIHJzU3JjID0gW107XHJcbiAgICAgICAgdmFyIHNyYyA9ICcnO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3JjSXRtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgX3NyYyA9IHNyY0l0bXNbaV0uc3BsaXQoJyAnKTtcclxuICAgICAgICAgICAgLy8gTWFuYWdlIGVtcHR5IHNwYWNlXHJcbiAgICAgICAgICAgIGlmIChfc3JjWzBdID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgX3NyYy5zcGxpY2UoMCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcnNTcmMucHVzaChfc3JjWzBdKTtcclxuICAgICAgICAgICAgcnNXaWR0aC5wdXNoKF9zcmNbMV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCByc1dpZHRoLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXJzZUludChyc1dpZHRoW2pdLCAxMCkgPiB3V2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIHNyYyA9IHJzU3JjW2pdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNyYztcclxuICAgIH0sXHJcbiAgICBpc0ltYWdlTG9hZGVkOiBmdW5jdGlvbiAoaW1nKSB7XHJcbiAgICAgICAgaWYgKCFpbWcpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyBEdXJpbmcgdGhlIG9ubG9hZCBldmVudCwgSUUgY29ycmVjdGx5IGlkZW50aWZpZXMgYW55IGltYWdlcyB0aGF0XHJcbiAgICAgICAgLy8gd2VyZW7igJl0IGRvd25sb2FkZWQgYXMgbm90IGNvbXBsZXRlLiBPdGhlcnMgc2hvdWxkIHRvby4gR2Vja28tYmFzZWRcclxuICAgICAgICAvLyBicm93c2VycyBhY3QgbGlrZSBOUzQgaW4gdGhhdCB0aGV5IHJlcG9ydCB0aGlzIGluY29ycmVjdGx5LlxyXG4gICAgICAgIGlmICghaW1nLmNvbXBsZXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSG93ZXZlciwgdGhleSBkbyBoYXZlIHR3byB2ZXJ5IHVzZWZ1bCBwcm9wZXJ0aWVzOiBuYXR1cmFsV2lkdGggYW5kXHJcbiAgICAgICAgLy8gbmF0dXJhbEhlaWdodC4gVGhlc2UgZ2l2ZSB0aGUgdHJ1ZSBzaXplIG9mIHRoZSBpbWFnZS4gSWYgaXQgZmFpbGVkXHJcbiAgICAgICAgLy8gdG8gbG9hZCwgZWl0aGVyIG9mIHRoZXNlIHNob3VsZCBiZSB6ZXJvLlxyXG4gICAgICAgIGlmIChpbWcubmF0dXJhbFdpZHRoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gTm8gb3RoZXIgd2F5IG9mIGNoZWNraW5nOiBhc3N1bWUgaXTigJlzIG9rLlxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSxcclxuICAgIGdldFZpZGVvUG9zdGVyTWFya3VwOiBmdW5jdGlvbiAoX3Bvc3RlciwgZHVtbXlJbWcsIHZpZGVvQ29udFN0eWxlLCBwbGF5VmlkZW9TdHJpbmcsIF9pc1ZpZGVvKSB7XHJcbiAgICAgICAgdmFyIHZpZGVvQ2xhc3MgPSAnJztcclxuICAgICAgICBpZiAoX2lzVmlkZW8gJiYgX2lzVmlkZW8ueW91dHViZSkge1xyXG4gICAgICAgICAgICB2aWRlb0NsYXNzID0gJ2xnLWhhcy15b3V0dWJlJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoX2lzVmlkZW8gJiYgX2lzVmlkZW8udmltZW8pIHtcclxuICAgICAgICAgICAgdmlkZW9DbGFzcyA9ICdsZy1oYXMtdmltZW8nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmlkZW9DbGFzcyA9ICdsZy1oYXMtaHRtbDUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJsZy12aWRlby1jb250IFwiICsgdmlkZW9DbGFzcyArIFwiXFxcIiBzdHlsZT1cXFwiXCIgKyB2aWRlb0NvbnRTdHlsZSArIFwiXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGctdmlkZW8tcGxheS1idXR0b25cXFwiPlxcbiAgICAgICAgICAgICAgICA8c3ZnXFxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVxcXCIwIDAgMjAgMjBcXFwiXFxuICAgICAgICAgICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVxcXCJ4TWlkWU1pZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGZvY3VzYWJsZT1cXFwiZmFsc2VcXFwiXFxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XFxcIlwiICsgcGxheVZpZGVvU3RyaW5nICsgXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgICByb2xlPVxcXCJpbWdcXFwiXFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwibGctdmlkZW8tcGxheS1pY29uXFxcIlxcbiAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+XCIgKyBwbGF5VmlkZW9TdHJpbmcgKyBcIjwvdGl0bGU+XFxuICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBjbGFzcz1cXFwibGctdmlkZW8tcGxheS1pY29uLWlubmVyXFxcIiBwb2ludHM9XFxcIjEsMCAyMCwxMCAxLDIwXFxcIj48L3BvbHlnb24+XFxuICAgICAgICAgICAgICAgIDwvc3ZnPlxcbiAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVxcXCJsZy12aWRlby1wbGF5LWljb24tYmdcXFwiIHZpZXdCb3g9XFxcIjAgMCA1MCA1MFxcXCIgZm9jdXNhYmxlPVxcXCJmYWxzZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVxcXCI1MCVcXFwiIGN5PVxcXCI1MCVcXFwiIHI9XFxcIjIwXFxcIj48L2NpcmNsZT48L3N2Zz5cXG4gICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cXFwibGctdmlkZW8tcGxheS1pY29uLWNpcmNsZVxcXCIgdmlld0JveD1cXFwiMCAwIDUwIDUwXFxcIiBmb2N1c2FibGU9XFxcImZhbHNlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XFxcIjUwJVxcXCIgY3k9XFxcIjUwJVxcXCIgcj1cXFwiMjBcXFwiPjwvY2lyY2xlPlxcbiAgICAgICAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICBcIiArIChkdW1teUltZyB8fCAnJykgKyBcIlxcbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImxnLW9iamVjdCBsZy12aWRlby1wb3N0ZXJcXFwiIHNyYz1cXFwiXCIgKyBfcG9zdGVyICsgXCJcXFwiIC8+XFxuICAgICAgICA8L2Rpdj5cIjtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjIENyZWF0ZSBkeW5hbWljIGVsZW1lbnRzIGFycmF5IGZyb20gZ2FsbGVyeSBpdGVtcyB3aGVuIGR5bmFtaWMgb3B0aW9uIGlzIGZhbHNlXHJcbiAgICAgKiBJdCBoZWxwcyB0byBhdm9pZCBmcmVxdWVudCBET00gaW50ZXJhY3Rpb25cclxuICAgICAqIGFuZCBhdm9pZCBtdWx0aXBsZSBjaGVja3MgZm9yIGR5bmFtaWMgZWxtZW50c1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtBcnJheX0gZHluYW1pY0VsXHJcbiAgICAgKi9cclxuICAgIGdldER5bmFtaWNPcHRpb25zOiBmdW5jdGlvbiAoaXRlbXMsIGV4dHJhUHJvcHMsIGdldENhcHRpb25Gcm9tVGl0bGVPckFsdCwgZXhUaHVtYkltYWdlKSB7XHJcbiAgICAgICAgdmFyIGR5bmFtaWNFbGVtZW50cyA9IFtdO1xyXG4gICAgICAgIHZhciBhdmFpbGFibGVEeW5hbWljT3B0aW9ucyA9IF9fc3ByZWFkQXJyYXlzKGRlZmF1bHREeW5hbWljT3B0aW9ucywgZXh0cmFQcm9wcyk7XHJcbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKGl0ZW1zLCBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICB2YXIgZHluYW1pY0VsID0ge307XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbS5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXR0ciA9IGl0ZW0uYXR0cmlidXRlc1tpXTtcclxuICAgICAgICAgICAgICAgIGlmIChhdHRyLnNwZWNpZmllZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkeW5hbWljQXR0ciA9IGNvbnZlcnRUb0RhdGEoYXR0ci5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbGFiZWwgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXZhaWxhYmxlRHluYW1pY09wdGlvbnMuaW5kZXhPZihkeW5hbWljQXR0cikgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IGR5bmFtaWNBdHRyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHluYW1pY0VsW2xhYmVsXSA9IGF0dHIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50SXRlbSA9ICRMRyhpdGVtKTtcclxuICAgICAgICAgICAgdmFyIGFsdCA9IGN1cnJlbnRJdGVtLmZpbmQoJ2ltZycpLmZpcnN0KCkuYXR0cignYWx0Jyk7XHJcbiAgICAgICAgICAgIHZhciB0aXRsZSA9IGN1cnJlbnRJdGVtLmF0dHIoJ3RpdGxlJyk7XHJcbiAgICAgICAgICAgIHZhciB0aHVtYiA9IGV4VGh1bWJJbWFnZVxyXG4gICAgICAgICAgICAgICAgPyBjdXJyZW50SXRlbS5hdHRyKGV4VGh1bWJJbWFnZSlcclxuICAgICAgICAgICAgICAgIDogY3VycmVudEl0ZW0uZmluZCgnaW1nJykuZmlyc3QoKS5hdHRyKCdzcmMnKTtcclxuICAgICAgICAgICAgZHluYW1pY0VsLnRodW1iID0gdGh1bWI7XHJcbiAgICAgICAgICAgIGlmIChnZXRDYXB0aW9uRnJvbVRpdGxlT3JBbHQgJiYgIWR5bmFtaWNFbC5zdWJIdG1sKSB7XHJcbiAgICAgICAgICAgICAgICBkeW5hbWljRWwuc3ViSHRtbCA9IHRpdGxlIHx8IGFsdCB8fCAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkeW5hbWljRWwuYWx0ID0gYWx0IHx8IHRpdGxlIHx8ICcnO1xyXG4gICAgICAgICAgICBkeW5hbWljRWxlbWVudHMucHVzaChkeW5hbWljRWwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBkeW5hbWljRWxlbWVudHM7XHJcbiAgICB9LFxyXG4gICAgaXNNb2JpbGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gL2lQaG9uZXxpUGFkfGlQb2R8QW5kcm9pZC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzYyBDaGVjayB0aGUgZ2l2ZW4gc3JjIGlzIHZpZGVvXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3JjXHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHZpZGVvIHR5cGVcclxuICAgICAqIEV4OnsgeW91dHViZSAgOiAgW1wiLy93d3cueW91dHViZS5jb20vd2F0Y2g/dj1jMGFzSmdTeXhjWVwiLCBcImMwYXNKZ1N5eGNZXCJdIH1cclxuICAgICAqXHJcbiAgICAgKiBAdG9kbyAtIHRoaXMgaW5mb3JtYXRpb24gY2FuIGJlIG1vdmVkIHRvIGR5bmFtaWNFbCB0byBhdm9pZCBmcmVxdWVudCBjYWxsc1xyXG4gICAgICovXHJcbiAgICBpc1ZpZGVvOiBmdW5jdGlvbiAoc3JjLCBpc0hUTUw1VklkZW8sIGluZGV4KSB7XHJcbiAgICAgICAgaWYgKCFzcmMpIHtcclxuICAgICAgICAgICAgaWYgKGlzSFRNTDVWSWRlbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBodG1sNTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdsaWdodEdhbGxlcnkgOi0gZGF0YS1zcmMgaXMgbm90IHByb3ZpZGVkIG9uIHNsaWRlIGl0ZW0gJyArXHJcbiAgICAgICAgICAgICAgICAgICAgKGluZGV4ICsgMSkgK1xyXG4gICAgICAgICAgICAgICAgICAgICcuIFBsZWFzZSBtYWtlIHN1cmUgdGhlIHNlbGVjdG9yIHByb3BlcnR5IGlzIHByb3Blcmx5IGNvbmZpZ3VyZWQuIE1vcmUgaW5mbyAtIGh0dHBzOi8vd3d3LmxpZ2h0Z2FsbGVyeWpzLmNvbS9kZW1vcy9odG1sLW1hcmt1cC8nKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgeW91dHViZSA9IHNyYy5tYXRjaCgvXFwvXFwvKD86d3d3XFwuKT95b3V0dSg/OlxcLmJlfGJlXFwuY29tfGJlLW5vY29va2llXFwuY29tKVxcLyg/OndhdGNoXFw/dj18ZW1iZWRcXC8pPyhbYS16MC05XFwtXFxfXFwlXSspKFtcXCZ8P11bXFxTXSopKi9pKTtcclxuICAgICAgICB2YXIgdmltZW8gPSBzcmMubWF0Y2goL1xcL1xcLyg/Ond3d1xcLik/KD86cGxheWVyXFwuKT92aW1lby5jb21cXC8oPzp2aWRlb1xcLyk/KFswLTlhLXpcXC1fXSspKC4qKT8vaSk7XHJcbiAgICAgICAgdmFyIHdpc3RpYSA9IHNyYy5tYXRjaCgvaHR0cHM/OlxcL1xcLyguKyk/KHdpc3RpYVxcLmNvbXx3aVxcLnN0KVxcLyhtZWRpYXN8ZW1iZWQpXFwvKFswLTlhLXpcXC1fXSspKC4qKS8pO1xyXG4gICAgICAgIGlmICh5b3V0dWJlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB5b3V0dWJlOiB5b3V0dWJlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh2aW1lbykge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdmltZW86IHZpbWVvLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh3aXN0aWEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHdpc3RpYTogd2lzdGlhLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn07XG5cbi8vIEByZWYgLSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zOTcxODQxL2hvdy10by1yZXNpemUtaW1hZ2VzLXByb3BvcnRpb25hbGx5LWtlZXBpbmctdGhlLWFzcGVjdC1yYXRpb1xyXG4vLyBAcmVmIC0gaHR0cHM6Ly8yYWxpdHkuY29tLzIwMTcvMDQvc2V0dGluZy11cC1tdWx0aS1wbGF0Zm9ybS1wYWNrYWdlcy5odG1sXHJcbi8vIFVuaXF1ZSBpZCBmb3IgZWFjaCBnYWxsZXJ5XHJcbnZhciBsZ0lkID0gMDtcclxudmFyIExpZ2h0R2FsbGVyeSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIExpZ2h0R2FsbGVyeShlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5sZ09wZW5lZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xyXG4gICAgICAgIC8vIGxpZ2h0R2FsbGVyeSBtb2R1bGVzXHJcbiAgICAgICAgdGhpcy5wbHVnaW5zID0gW107XHJcbiAgICAgICAgLy8gZmFsc2Ugd2hlbiBsaWdodEdhbGxlcnkgbG9hZCBmaXJzdCBzbGlkZSBjb250ZW50O1xyXG4gICAgICAgIHRoaXMubEdhbGxlcnlPbiA9IGZhbHNlO1xyXG4gICAgICAgIC8vIFRydWUgd2hlbiBhIHNsaWRlIGFuaW1hdGlvbiBpcyBpbiBwcm9ncmVzc1xyXG4gICAgICAgIHRoaXMubGdCdXN5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SXRlbXNJbkRvbSA9IFtdO1xyXG4gICAgICAgIC8vIFNjcm9sbCB0b3AgdmFsdWUgYmVmb3JlIGxpZ2h0R2FsbGVyeSBpcyBvcGVuZWRcclxuICAgICAgICB0aGlzLnByZXZTY3JvbGxUb3AgPSAwO1xyXG4gICAgICAgIHRoaXMuaXNEdW1teUltYWdlUmVtb3ZlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZHJhZ09yU3dpcGVFbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tZWRpYUNvbnRhaW5lclBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgbGdJZCsrO1xyXG4gICAgICAgIHRoaXMubGdJZCA9IGxnSWQ7XHJcbiAgICAgICAgdGhpcy5lbCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5MR2VsID0gJExHKGVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVTZXR0aW5ncyhvcHRpb25zKTtcclxuICAgICAgICB0aGlzLmJ1aWxkTW9kdWxlcygpO1xyXG4gICAgICAgIC8vIFdoZW4gdXNpbmcgZHluYW1pYyBtb2RlLCBlbnN1cmUgZHluYW1pY0VsIGlzIGFuIGFycmF5XHJcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuZHluYW1pYyAmJlxyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmR5bmFtaWNFbCAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgICFBcnJheS5pc0FycmF5KHRoaXMuc2V0dGluZ3MuZHluYW1pY0VsKSkge1xyXG4gICAgICAgICAgICB0aHJvdyAnV2hlbiB1c2luZyBkeW5hbWljIG1vZGUsIHlvdSBtdXN0IGFsc28gZGVmaW5lIGR5bmFtaWNFbCBhcyBhbiBBcnJheS4nO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdhbGxlcnlJdGVtcyA9IHRoaXMuZ2V0SXRlbXMoKTtcclxuICAgICAgICB0aGlzLm5vcm1hbGl6ZVNldHRpbmdzKCk7XHJcbiAgICAgICAgLy8gR2FsbGVyeSBpdGVtc1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGVMaWNlbnNlKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLmdlbmVyYXRlU2V0dGluZ3MgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgICAgIC8vIGxpZ2h0R2FsbGVyeSBzZXR0aW5nc1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgbGlnaHRHYWxsZXJ5Q29yZVNldHRpbmdzKSwgb3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuaXNNb2JpbGUgJiZcclxuICAgICAgICAgICAgdHlwZW9mIHRoaXMuc2V0dGluZ3MuaXNNb2JpbGUgPT09ICdmdW5jdGlvbidcclxuICAgICAgICAgICAgPyB0aGlzLnNldHRpbmdzLmlzTW9iaWxlKClcclxuICAgICAgICAgICAgOiB1dGlscy5pc01vYmlsZSgpKSB7XHJcbiAgICAgICAgICAgIHZhciBtb2JpbGVTZXR0aW5ncyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCB0aGlzLnNldHRpbmdzLm1vYmlsZVNldHRpbmdzKSwgdGhpcy5zZXR0aW5ncy5tb2JpbGVTZXR0aW5ncyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdGhpcy5zZXR0aW5ncyksIG1vYmlsZVNldHRpbmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS5ub3JtYWxpemVTZXR0aW5ncyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5zbGlkZUVuZEFuaW1hdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmhpZGVDb250cm9sT25FbmQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnNldHRpbmdzLmNsb3NhYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3Muc3dpcGVUb0Nsb3NlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFuZCByZXNldCBpdCBvbiBjbG9zZSB0byBnZXQgdGhlIGNvcnJlY3QgdmFsdWUgbmV4dCB0aW1lXHJcbiAgICAgICAgdGhpcy56b29tRnJvbU9yaWdpbiA9IHRoaXMuc2V0dGluZ3Muem9vbUZyb21PcmlnaW47XHJcbiAgICAgICAgLy8gQXQgdGhlIG1vbWVudCwgWm9vbSBmcm9tIGltYWdlIGRvZXNuJ3Qgc3VwcG9ydCBkeW5hbWljIG9wdGlvbnNcclxuICAgICAgICAvLyBAdG9kbyBhZGQgem9vbUZyb21PcmlnaW4gc3VwcG9ydCBmb3IgZHluYW1pYyBpbWFnZXNcclxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5keW5hbWljKSB7XHJcbiAgICAgICAgICAgIHRoaXMuem9vbUZyb21PcmlnaW4gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnNldHRpbmdzLmNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmNvbnRhaW5lciA9IGRvY3VtZW50LmJvZHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNldHRpbmdzLnByZWxvYWQgc2hvdWxkIG5vdCBiZSBncmF0ZXIgdGhhbiAkaXRlbS5sZW5ndGhcclxuICAgICAgICB0aGlzLnNldHRpbmdzLnByZWxvYWQgPSBNYXRoLm1pbih0aGlzLnNldHRpbmdzLnByZWxvYWQsIHRoaXMuZ2FsbGVyeUl0ZW1zLmxlbmd0aCk7XHJcbiAgICB9O1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5hZGRTbGlkZVZpZGVvSW5mbyh0aGlzLmdhbGxlcnlJdGVtcyk7XHJcbiAgICAgICAgdGhpcy5idWlsZFN0cnVjdHVyZSgpO1xyXG4gICAgICAgIHRoaXMuTEdlbC50cmlnZ2VyKGxHRXZlbnRzLmluaXQsIHtcclxuICAgICAgICAgICAgaW5zdGFuY2U6IHRoaXMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3Mua2V5UHJlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5rZXlQcmVzcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuZW5hYmxlRHJhZygpO1xyXG4gICAgICAgICAgICBfdGhpcy5lbmFibGVTd2lwZSgpO1xyXG4gICAgICAgICAgICBfdGhpcy50cmlnZ2VyUG9zdGVyQ2xpY2soKTtcclxuICAgICAgICB9LCA1MCk7XHJcbiAgICAgICAgdGhpcy5hcnJvdygpO1xyXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLm1vdXNld2hlZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZXdoZWVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5zZXR0aW5ncy5keW5hbWljKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3BlbkdhbGxlcnlPbkl0ZW1DbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLm9wZW5HYWxsZXJ5T25JdGVtQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXNfMS5pdGVtc1tpbmRleF07XHJcbiAgICAgICAgICAgIHZhciAkZWxlbWVudCA9ICRMRyhlbGVtZW50KTtcclxuICAgICAgICAgICAgLy8gVXNpbmcgZGlmZmVyZW50IG5hbWVzcGFjZSBmb3IgY2xpY2sgYmVjYXVzZSBjbGljayBldmVudCBzaG91bGQgbm90IHVuYmluZCBpZiBzZWxlY3RvciBpcyBzYW1lIG9iamVjdCgndGhpcycpXHJcbiAgICAgICAgICAgIC8vIEB0b2RvIG1hbmFnZSBhbGwgZXZlbnQgbGlzdG5lcnMgLSBzaG91bGQgaGF2ZSBuYW1lc3BhY2UgdGhhdCByZXByZXNlbnQgZWxlbWVudFxyXG4gICAgICAgICAgICB2YXIgdXVpZCA9IGxnUXVlcnkuZ2VuZXJhdGVVVUlEKCk7XHJcbiAgICAgICAgICAgICRlbGVtZW50XHJcbiAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1sZy1pZCcsIHV1aWQpXHJcbiAgICAgICAgICAgICAgICAub24oXCJjbGljay5sZ2N1c3RvbS1pdGVtLVwiICsgdXVpZCwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50SXRlbUluZGV4ID0gX3RoaXMuc2V0dGluZ3MuaW5kZXggfHwgaW5kZXg7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5vcGVuR2FsbGVyeShjdXJyZW50SXRlbUluZGV4LCBlbGVtZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgdGhpc18xID0gdGhpcztcclxuICAgICAgICAvLyBVc2luZyBmb3IgbG9vcCBpbnN0ZWFkIG9mIHVzaW5nIGJ1YmJsaW5nIGFzIHRoZSBpdGVtcyBjYW4gYmUgYW55IGh0bWwgZWxlbWVudC5cclxuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5pdGVtcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgX2xvb3BfMShpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogTW9kdWxlIGNvbnN0cnVjdG9yXHJcbiAgICAgKiBNb2R1bGVzIGFyZSBidWlsZCBpbmNyZW1lbnRhbGx5LlxyXG4gICAgICogR2FsbGVyeSBzaG91bGQgYmUgb3BlbmVkIG9ubHkgb25jZSBhbGwgdGhlIG1vZHVsZXMgYXJlIGluaXRpYWxpemVkLlxyXG4gICAgICogdXNlIG1vZHVsZUJ1aWxkVGltZW91dCB0byBtYWtlIHN1cmUgdGhpc1xyXG4gICAgICovXHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLmJ1aWxkTW9kdWxlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MucGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHtcclxuICAgICAgICAgICAgX3RoaXMucGx1Z2lucy5wdXNoKG5ldyBwbHVnaW4oX3RoaXMsICRMRykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIExpZ2h0R2FsbGVyeS5wcm90b3R5cGUudmFsaWRhdGVMaWNlbnNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zZXR0aW5ncy5saWNlbnNlS2V5KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1BsZWFzZSBwcm92aWRlIGEgdmFsaWQgbGljZW5zZSBrZXknKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zZXR0aW5ncy5saWNlbnNlS2V5ID09PSAnMDAwMC0wMDAwLTAwMC0wMDAwJykge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJsaWdodEdhbGxlcnk6IFwiICsgdGhpcy5zZXR0aW5ncy5saWNlbnNlS2V5ICsgXCIgbGljZW5zZSBrZXkgaXMgbm90IHZhbGlkIGZvciBwcm9kdWN0aW9uIHVzZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS5nZXRTbGlkZUl0ZW0gPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gJExHKHRoaXMuZ2V0U2xpZGVJdGVtSWQoaW5kZXgpKTtcclxuICAgIH07XHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLmdldFNsaWRlSXRlbUlkID0gZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIFwiI2xnLWl0ZW0tXCIgKyB0aGlzLmxnSWQgKyBcIi1cIiArIGluZGV4O1xyXG4gICAgfTtcclxuICAgIExpZ2h0R2FsbGVyeS5wcm90b3R5cGUuZ2V0SWROYW1lID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIGlkICsgXCItXCIgKyB0aGlzLmxnSWQ7XHJcbiAgICB9O1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS5nZXRFbGVtZW50QnlJZCA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIHJldHVybiAkTEcoXCIjXCIgKyB0aGlzLmdldElkTmFtZShpZCkpO1xyXG4gICAgfTtcclxuICAgIExpZ2h0R2FsbGVyeS5wcm90b3R5cGUubWFuYWdlU2luZ2xlU2xpZGVDbGFzc05hbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FsbGVyeUl0ZW1zLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5vdXRlci5hZGRDbGFzcygnbGctc2luZ2xlLWl0ZW0nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLXNpbmdsZS1pdGVtJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIExpZ2h0R2FsbGVyeS5wcm90b3R5cGUuYnVpbGRTdHJ1Y3R1cmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgY29udGFpbmVyID0gdGhpcy4kY29udGFpbmVyICYmIHRoaXMuJGNvbnRhaW5lci5nZXQoKTtcclxuICAgICAgICBpZiAoY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNvbnRyb2xzID0gJyc7XHJcbiAgICAgICAgdmFyIHN1Ykh0bWxDb250ID0gJyc7XHJcbiAgICAgICAgLy8gQ3JlYXRlIGNvbnRyb2xzXHJcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuY29udHJvbHMpIHtcclxuICAgICAgICAgICAgY29udHJvbHMgPSBcIjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBpZD1cXFwiXCIgKyB0aGlzLmdldElkTmFtZSgnbGctcHJldicpICsgXCJcXFwiIGFyaWEtbGFiZWw9XFxcIlwiICsgdGhpcy5zZXR0aW5ncy5zdHJpbmdzWydwcmV2aW91c1NsaWRlJ10gKyBcIlxcXCIgY2xhc3M9XFxcImxnLXByZXYgbGctaWNvblxcXCI+IFwiICsgdGhpcy5zZXR0aW5ncy5wcmV2SHRtbCArIFwiIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgaWQ9XFxcIlwiICsgdGhpcy5nZXRJZE5hbWUoJ2xnLW5leHQnKSArIFwiXFxcIiBhcmlhLWxhYmVsPVxcXCJcIiArIHRoaXMuc2V0dGluZ3Muc3RyaW5nc1snbmV4dFNsaWRlJ10gKyBcIlxcXCIgY2xhc3M9XFxcImxnLW5leHQgbGctaWNvblxcXCI+IFwiICsgdGhpcy5zZXR0aW5ncy5uZXh0SHRtbCArIFwiIDwvYnV0dG9uPlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5hcHBlbmRTdWJIdG1sVG8gIT09ICcubGctaXRlbScpIHtcclxuICAgICAgICAgICAgc3ViSHRtbENvbnQgPVxyXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJsZy1zdWItaHRtbFwiIHJvbGU9XCJzdGF0dXNcIiBhcmlhLWxpdmU9XCJwb2xpdGVcIj48L2Rpdj4nO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYWRkQ2xhc3NlcyA9ICcnO1xyXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmFsbG93TWVkaWFPdmVybGFwKSB7XHJcbiAgICAgICAgICAgIC8vIERvIG5vdCByZW1vdmUgc3BhY2UgYmVmb3JlIGxhc3Qgc2luZ2xlIHF1b3RlXHJcbiAgICAgICAgICAgIGFkZENsYXNzZXMgKz0gJ2xnLW1lZGlhLW92ZXJsYXAgJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGFyaWFMYWJlbGxlZGJ5ID0gdGhpcy5zZXR0aW5ncy5hcmlhTGFiZWxsZWRieVxyXG4gICAgICAgICAgICA/ICdhcmlhLWxhYmVsbGVkYnk9XCInICsgdGhpcy5zZXR0aW5ncy5hcmlhTGFiZWxsZWRieSArICdcIidcclxuICAgICAgICAgICAgOiAnJztcclxuICAgICAgICB2YXIgYXJpYURlc2NyaWJlZGJ5ID0gdGhpcy5zZXR0aW5ncy5hcmlhRGVzY3JpYmVkYnlcclxuICAgICAgICAgICAgPyAnYXJpYS1kZXNjcmliZWRieT1cIicgKyB0aGlzLnNldHRpbmdzLmFyaWFEZXNjcmliZWRieSArICdcIidcclxuICAgICAgICAgICAgOiAnJztcclxuICAgICAgICB2YXIgY29udGFpbmVyQ2xhc3NOYW1lID0gXCJsZy1jb250YWluZXIgXCIgKyB0aGlzLnNldHRpbmdzLmFkZENsYXNzICsgXCIgXCIgKyAoZG9jdW1lbnQuYm9keSAhPT0gdGhpcy5zZXR0aW5ncy5jb250YWluZXIgPyAnbGctaW5saW5lJyA6ICcnKTtcclxuICAgICAgICB2YXIgY2xvc2VJY29uID0gdGhpcy5zZXR0aW5ncy5jbG9zYWJsZSAmJiB0aGlzLnNldHRpbmdzLnNob3dDbG9zZUljb25cclxuICAgICAgICAgICAgPyBcIjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBhcmlhLWxhYmVsPVxcXCJcIiArIHRoaXMuc2V0dGluZ3Muc3RyaW5nc1snY2xvc2VHYWxsZXJ5J10gKyBcIlxcXCIgaWQ9XFxcIlwiICsgdGhpcy5nZXRJZE5hbWUoJ2xnLWNsb3NlJykgKyBcIlxcXCIgY2xhc3M9XFxcImxnLWNsb3NlIGxnLWljb25cXFwiPjwvYnV0dG9uPlwiXHJcbiAgICAgICAgICAgIDogJyc7XHJcbiAgICAgICAgdmFyIG1heGltaXplSWNvbiA9IHRoaXMuc2V0dGluZ3Muc2hvd01heGltaXplSWNvblxyXG4gICAgICAgICAgICA/IFwiPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGFyaWEtbGFiZWw9XFxcIlwiICsgdGhpcy5zZXR0aW5ncy5zdHJpbmdzWyd0b2dnbGVNYXhpbWl6ZSddICsgXCJcXFwiIGlkPVxcXCJcIiArIHRoaXMuZ2V0SWROYW1lKCdsZy1tYXhpbWl6ZScpICsgXCJcXFwiIGNsYXNzPVxcXCJsZy1tYXhpbWl6ZSBsZy1pY29uXFxcIj48L2J1dHRvbj5cIlxyXG4gICAgICAgICAgICA6ICcnO1xyXG4gICAgICAgIHZhciB0ZW1wbGF0ZSA9IFwiXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJcIiArIGNvbnRhaW5lckNsYXNzTmFtZSArIFwiXFxcIiBpZD1cXFwiXCIgKyB0aGlzLmdldElkTmFtZSgnbGctY29udGFpbmVyJykgKyBcIlxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIiBhcmlhLW1vZGFsPVxcXCJ0cnVlXFxcIiBcIiArIGFyaWFMYWJlbGxlZGJ5ICsgXCIgXCIgKyBhcmlhRGVzY3JpYmVkYnkgKyBcIiByb2xlPVxcXCJkaWFsb2dcXFwiXFxuICAgICAgICA+XFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwiXCIgKyB0aGlzLmdldElkTmFtZSgnbGctYmFja2Ryb3AnKSArIFwiXFxcIiBjbGFzcz1cXFwibGctYmFja2Ryb3BcXFwiPjwvZGl2PlxcblxcbiAgICAgICAgICAgIDxkaXYgaWQ9XFxcIlwiICsgdGhpcy5nZXRJZE5hbWUoJ2xnLW91dGVyJykgKyBcIlxcXCIgY2xhc3M9XFxcImxnLW91dGVyIGxnLXVzZS1jc3MzIGxnLWNzczMgbGctaGlkZS1pdGVtcyBcIiArIGFkZENsYXNzZXMgKyBcIiBcXFwiPlxcblxcbiAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiXCIgKyB0aGlzLmdldElkTmFtZSgnbGctY29udGVudCcpICsgXCJcXFwiIGNsYXNzPVxcXCJsZy1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiXCIgKyB0aGlzLmdldElkTmFtZSgnbGctaW5uZXInKSArIFwiXFxcIiBjbGFzcz1cXFwibGctaW5uZXJcXFwiPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgXCIgKyBjb250cm9scyArIFwiXFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiXCIgKyB0aGlzLmdldElkTmFtZSgnbGctdG9vbGJhcicpICsgXCJcXFwiIGNsYXNzPVxcXCJsZy10b29sYmFyIGxnLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIFwiICsgbWF4aW1pemVJY29uICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICsgY2xvc2VJY29uICsgXCJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyAodGhpcy5zZXR0aW5ncy5hcHBlbmRTdWJIdG1sVG8gPT09ICcubGctb3V0ZXInXHJcbiAgICAgICAgICAgID8gc3ViSHRtbENvbnRcclxuICAgICAgICAgICAgOiAnJykgKyBcIlxcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJcIiArIHRoaXMuZ2V0SWROYW1lKCdsZy1jb21wb25lbnRzJykgKyBcIlxcXCIgY2xhc3M9XFxcImxnLWNvbXBvbmVudHNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgXCIgKyAodGhpcy5zZXR0aW5ncy5hcHBlbmRTdWJIdG1sVG8gPT09ICcubGctc3ViLWh0bWwnXHJcbiAgICAgICAgICAgID8gc3ViSHRtbENvbnRcclxuICAgICAgICAgICAgOiAnJykgKyBcIlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgXCI7XHJcbiAgICAgICAgJExHKHRoaXMuc2V0dGluZ3MuY29udGFpbmVyKS5hcHBlbmQodGVtcGxhdGUpO1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5ib2R5ICE9PSB0aGlzLnNldHRpbmdzLmNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAkTEcodGhpcy5zZXR0aW5ncy5jb250YWluZXIpLmNzcygncG9zaXRpb24nLCAncmVsYXRpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vdXRlciA9IHRoaXMuZ2V0RWxlbWVudEJ5SWQoJ2xnLW91dGVyJyk7XHJcbiAgICAgICAgdGhpcy4kbGdDb21wb25lbnRzID0gdGhpcy5nZXRFbGVtZW50QnlJZCgnbGctY29tcG9uZW50cycpO1xyXG4gICAgICAgIHRoaXMuJGJhY2tkcm9wID0gdGhpcy5nZXRFbGVtZW50QnlJZCgnbGctYmFja2Ryb3AnKTtcclxuICAgICAgICB0aGlzLiRjb250YWluZXIgPSB0aGlzLmdldEVsZW1lbnRCeUlkKCdsZy1jb250YWluZXInKTtcclxuICAgICAgICB0aGlzLiRpbm5lciA9IHRoaXMuZ2V0RWxlbWVudEJ5SWQoJ2xnLWlubmVyJyk7XHJcbiAgICAgICAgdGhpcy4kY29udGVudCA9IHRoaXMuZ2V0RWxlbWVudEJ5SWQoJ2xnLWNvbnRlbnQnKTtcclxuICAgICAgICB0aGlzLiR0b29sYmFyID0gdGhpcy5nZXRFbGVtZW50QnlJZCgnbGctdG9vbGJhcicpO1xyXG4gICAgICAgIHRoaXMuJGJhY2tkcm9wLmNzcygndHJhbnNpdGlvbi1kdXJhdGlvbicsIHRoaXMuc2V0dGluZ3MuYmFja2Ryb3BEdXJhdGlvbiArICdtcycpO1xyXG4gICAgICAgIHZhciBvdXRlckNsYXNzTmFtZXMgPSB0aGlzLnNldHRpbmdzLm1vZGUgKyBcIiBcIjtcclxuICAgICAgICB0aGlzLm1hbmFnZVNpbmdsZVNsaWRlQ2xhc3NOYW1lKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuZW5hYmxlRHJhZykge1xyXG4gICAgICAgICAgICBvdXRlckNsYXNzTmFtZXMgKz0gJ2xnLWdyYWIgJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vdXRlci5hZGRDbGFzcyhvdXRlckNsYXNzTmFtZXMpO1xyXG4gICAgICAgIHRoaXMuJGlubmVyLmNzcygndHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nLCB0aGlzLnNldHRpbmdzLmVhc2luZyk7XHJcbiAgICAgICAgdGhpcy4kaW5uZXIuY3NzKCd0cmFuc2l0aW9uLWR1cmF0aW9uJywgdGhpcy5zZXR0aW5ncy5zcGVlZCArICdtcycpO1xyXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmRvd25sb2FkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHRvb2xiYXIuYXBwZW5kKFwiPGEgaWQ9XFxcIlwiICsgdGhpcy5nZXRJZE5hbWUoJ2xnLWRvd25sb2FkJykgKyBcIlxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIHJlbD1cXFwibm9vcGVuZXJcXFwiIGFyaWEtbGFiZWw9XFxcIlwiICsgdGhpcy5zZXR0aW5ncy5zdHJpbmdzWydkb3dubG9hZCddICsgXCJcXFwiIGRvd25sb2FkIGNsYXNzPVxcXCJsZy1kb3dubG9hZCBsZy1pY29uXFxcIj48L2E+XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvdW50ZXIoKTtcclxuICAgICAgICAkTEcod2luZG93KS5vbihcInJlc2l6ZS5sZy5nbG9iYWxcIiArIHRoaXMubGdJZCArIFwiIG9yaWVudGF0aW9uY2hhbmdlLmxnLmdsb2JhbFwiICsgdGhpcy5sZ0lkLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnJlZnJlc2hPblJlc2l6ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuaGlkZUJhcnMoKTtcclxuICAgICAgICB0aGlzLm1hbmFnZUNsb3NlR2FsbGVyeSgpO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlTWF4aW1pemUoKTtcclxuICAgICAgICB0aGlzLmluaXRNb2R1bGVzKCk7XHJcbiAgICB9O1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS5yZWZyZXNoT25SZXNpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubGdPcGVuZWQpIHtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRHYWxsZXJ5SXRlbSA9IHRoaXMuZ2FsbGVyeUl0ZW1zW3RoaXMuaW5kZXhdO1xyXG4gICAgICAgICAgICB2YXIgX19zbGlkZVZpZGVvSW5mbyA9IGN1cnJlbnRHYWxsZXJ5SXRlbS5fX3NsaWRlVmlkZW9JbmZvO1xyXG4gICAgICAgICAgICB0aGlzLm1lZGlhQ29udGFpbmVyUG9zaXRpb24gPSB0aGlzLmdldE1lZGlhQ29udGFpbmVyUG9zaXRpb24oKTtcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5tZWRpYUNvbnRhaW5lclBvc2l0aW9uLCB0b3BfMSA9IF9hLnRvcCwgYm90dG9tID0gX2EuYm90dG9tO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZVNpemUgPSB1dGlscy5nZXRTaXplKHRoaXMuaXRlbXNbdGhpcy5pbmRleF0sIHRoaXMub3V0ZXIsIHRvcF8xICsgYm90dG9tLCBfX3NsaWRlVmlkZW9JbmZvICYmIHRoaXMuc2V0dGluZ3MudmlkZW9NYXhTaXplKTtcclxuICAgICAgICAgICAgaWYgKF9fc2xpZGVWaWRlb0luZm8pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzaXplVmlkZW9TbGlkZSh0aGlzLmluZGV4LCB0aGlzLmN1cnJlbnRJbWFnZVNpemUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnpvb21Gcm9tT3JpZ2luICYmICF0aGlzLmlzRHVtbXlJbWFnZVJlbW92ZWQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbWdTdHlsZSA9IHRoaXMuZ2V0RHVtbXlJbWdTdHlsZXModGhpcy5jdXJyZW50SW1hZ2VTaXplKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3V0ZXJcclxuICAgICAgICAgICAgICAgICAgICAuZmluZCgnLmxnLWN1cnJlbnQgLmxnLWR1bW15LWltZycpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpcnN0KClcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cignc3R5bGUnLCBpbWdTdHlsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5MR2VsLnRyaWdnZXIobEdFdmVudHMuY29udGFpbmVyUmVzaXplKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS5yZXNpemVWaWRlb1NsaWRlID0gZnVuY3Rpb24gKGluZGV4LCBpbWFnZVNpemUpIHtcclxuICAgICAgICB2YXIgbGdWaWRlb1N0eWxlID0gdGhpcy5nZXRWaWRlb0NvbnRTdHlsZShpbWFnZVNpemUpO1xyXG4gICAgICAgIHZhciBjdXJyZW50U2xpZGUgPSB0aGlzLmdldFNsaWRlSXRlbShpbmRleCk7XHJcbiAgICAgICAgY3VycmVudFNsaWRlLmZpbmQoJy5sZy12aWRlby1jb250JykuYXR0cignc3R5bGUnLCBsZ1ZpZGVvU3R5bGUpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHNsaWRlcyBkeW5hbWljYWxseS5cclxuICAgICAqIEFkZCwgZWRpdCBvciBkZWxldGUgc2xpZGVzIGR5bmFtaWNhbGx5IHdoZW4gbGlnaHRHYWxsZXJ5IGlzIG9wZW5lZC5cclxuICAgICAqIE1vZGlmeSB0aGUgY3VycmVudCBnYWxsZXJ5IGl0ZW1zIGFuZCBwYXNzIGl0IHZpYSB1cGRhdGVTbGlkZXMgbWV0aG9kXHJcbiAgICAgKiBAbm90ZVxyXG4gICAgICogLSBEbyBub3QgbXV0YXRlIGV4aXN0aW5nIGxpZ2h0R2FsbGVyeSBpdGVtcyBkaXJlY3RseS5cclxuICAgICAqIC0gQWx3YXlzIHBhc3MgbmV3IGxpc3Qgb2YgZ2FsbGVyeSBpdGVtc1xyXG4gICAgICogLSBZb3UgbmVlZCB0byB0YWtlIGNhcmUgb2YgdGh1bWJuYWlscyBvdXRzaWRlIHRoZSBnYWxsZXJ5IGlmIGFueVxyXG4gICAgICogLSB1c2VyIHRoaXMgbWV0aG9kIG9ubHkgaWYgeW91IHdhbnQgdG8gdXBkYXRlIHNsaWRlcyB3aGVuIHRoZSBnYWxsZXJ5IGlzIG9wZW5lZC4gT3RoZXJ3aXNlLCB1c2UgYHJlZnJlc2goKWAgbWV0aG9kLlxyXG4gICAgICogQHBhcmFtIGl0ZW1zIEdhbGxlcnkgaXRlbXNcclxuICAgICAqIEBwYXJhbSBpbmRleCBBZnRlciB0aGUgdXBkYXRlIG9wZXJhdGlvbiwgd2hpY2ggc2xpZGUgZ2FsbGVyeSBzaG91bGQgbmF2aWdhdGUgdG9cclxuICAgICAqIEBjYXRlZ29yeSBsR1B1YmxpY01ldGhvZHNcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiBjb25zdCBwbHVnaW4gPSBsaWdodEdhbGxlcnkoKTtcclxuICAgICAqXHJcbiAgICAgKiAvLyBBZGRpbmcgc2xpZGVzIGR5bmFtaWNhbGx5XHJcbiAgICAgKiBsZXQgZ2FsbGVyeUl0ZW1zID0gW1xyXG4gICAgICogLy8gQWNjZXNzIGV4aXN0aW5nIGxpZ2h0R2FsbGVyeSBpdGVtc1xyXG4gICAgICogLy8gZ2FsbGVyeUl0ZW1zIGFyZSBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBpbnRlcm5hbGx5IGZyb20gdGhlIGdhbGxlcnkgSFRNTCBtYXJrdXBcclxuICAgICAqIC8vIG9yIGRpcmVjdGx5IGZyb20gZ2FsbGVyeUl0ZW1zIHdoZW4gZHluYW1pYyBnYWxsZXJ5IGlzIHVzZWRcclxuICAgICAqICAgLi4ucGx1Z2luLmdhbGxlcnlJdGVtcyxcclxuICAgICAqICAgICAuLi5bXHJcbiAgICAgKiAgICAgICB7XHJcbiAgICAgKiAgICAgICAgIHNyYzogJ2ltZy9pbWctMS5wbmcnLFxyXG4gICAgICogICAgICAgICAgIHRodW1iOiAnaW1nL3RodW1iMS5wbmcnLFxyXG4gICAgICogICAgICAgICB9LFxyXG4gICAgICogICAgIF0sXHJcbiAgICAgKiAgIF07XHJcbiAgICAgKiAgIHBsdWdpbi51cGRhdGVTbGlkZXMoXHJcbiAgICAgKiAgICAgZ2FsbGVyeUl0ZW1zLFxyXG4gICAgICogICAgIHBsdWdpbi5pbmRleCxcclxuICAgICAqICAgKTtcclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgICogLy8gUmVtb3ZlIHNsaWRlcyBkeW5hbWljYWxseVxyXG4gICAgICogZ2FsbGVyeUl0ZW1zID0gSlNPTi5wYXJzZShcclxuICAgICAqICAgSlNPTi5zdHJpbmdpZnkodXBkYXRlU2xpZGVJbnN0YW5jZS5nYWxsZXJ5SXRlbXMpLFxyXG4gICAgICogKTtcclxuICAgICAqIGdhbGxlcnlJdGVtcy5zaGlmdCgpO1xyXG4gICAgICogdXBkYXRlU2xpZGVJbnN0YW5jZS51cGRhdGVTbGlkZXMoZ2FsbGVyeUl0ZW1zLCAxKTtcclxuICAgICAqIEBzZWUgPGEgaHJlZj1cIi9kZW1vcy91cGRhdGUtc2xpZGVzL1wiPkRlbW88L2E+XHJcbiAgICAgKi9cclxuICAgIExpZ2h0R2FsbGVyeS5wcm90b3R5cGUudXBkYXRlU2xpZGVzID0gZnVuY3Rpb24gKGl0ZW1zLCBpbmRleCkge1xyXG4gICAgICAgIGlmICh0aGlzLmluZGV4ID4gaXRlbXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmluZGV4ID0gaXRlbXMubGVuZ3RoIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmluZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpdGVtcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZUdhbGxlcnkoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY3VycmVudFNyYyA9IHRoaXMuZ2FsbGVyeUl0ZW1zW2luZGV4XS5zcmM7XHJcbiAgICAgICAgdGhpcy5nYWxsZXJ5SXRlbXMgPSBpdGVtcztcclxuICAgICAgICB0aGlzLnVwZGF0ZUNvbnRyb2xzKCk7XHJcbiAgICAgICAgdGhpcy4kaW5uZXIuZW1wdHkoKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRJdGVtc0luRG9tID0gW107XHJcbiAgICAgICAgdmFyIF9pbmRleCA9IDA7XHJcbiAgICAgICAgLy8gRmluZCB0aGUgY3VycmVudCBpbmRleCBiYXNlZCBvbiBzb3VyY2UgdmFsdWUgb2YgdGhlIHNsaWRlXHJcbiAgICAgICAgdGhpcy5nYWxsZXJ5SXRlbXMuc29tZShmdW5jdGlvbiAoZ2FsbGVyeUl0ZW0sIGl0ZW1JbmRleCkge1xyXG4gICAgICAgICAgICBpZiAoZ2FsbGVyeUl0ZW0uc3JjID09PSBjdXJyZW50U3JjKSB7XHJcbiAgICAgICAgICAgICAgICBfaW5kZXggPSBpdGVtSW5kZXg7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SXRlbXNJbkRvbSA9IHRoaXMub3JnYW5pemVTbGlkZUl0ZW1zKF9pbmRleCwgLTEpO1xyXG4gICAgICAgIHRoaXMubG9hZENvbnRlbnQoX2luZGV4LCB0cnVlKTtcclxuICAgICAgICB0aGlzLmdldFNsaWRlSXRlbShfaW5kZXgpLmFkZENsYXNzKCdsZy1jdXJyZW50Jyk7XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IF9pbmRleDtcclxuICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnRDb3VudGVyKF9pbmRleCk7XHJcbiAgICAgICAgdGhpcy5MR2VsLnRyaWdnZXIobEdFdmVudHMudXBkYXRlU2xpZGVzKTtcclxuICAgIH07XHJcbiAgICAvLyBHZXQgZ2FsbGVyeSBpdGVtcyBiYXNlZCBvbiBtdWx0aXBsZSBjb25kaXRpb25zXHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLmdldEl0ZW1zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIEdhbGxlcnkgaXRlbXNcclxuICAgICAgICB0aGlzLml0ZW1zID0gW107XHJcbiAgICAgICAgaWYgKCF0aGlzLnNldHRpbmdzLmR5bmFtaWMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3Muc2VsZWN0b3IgPT09ICd0aGlzJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHRoaXMuZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc2V0dGluZ3Muc2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5zZXR0aW5ncy5zZWxlY3RvciA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5zZWxlY3RXaXRoaW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGVjdFdpdGhpbiA9ICRMRyh0aGlzLnNldHRpbmdzLnNlbGVjdFdpdGhpbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBzZWxlY3RXaXRoaW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKHRoaXMuc2V0dGluZ3Muc2VsZWN0b3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuc2V0dGluZ3Muc2VsZWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLnNldHRpbmdzLnNlbGVjdG9yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuZWwuY2hpbGRyZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHV0aWxzLmdldER5bmFtaWNPcHRpb25zKHRoaXMuaXRlbXMsIHRoaXMuc2V0dGluZ3MuZXh0cmFQcm9wcywgdGhpcy5zZXR0aW5ncy5nZXRDYXB0aW9uRnJvbVRpdGxlT3JBbHQsIHRoaXMuc2V0dGluZ3MuZXhUaHVtYkltYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLmR5bmFtaWNFbCB8fCBbXTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBPcGVuIGxpZ2h0R2FsbGVyeS5cclxuICAgICAqIE9wZW4gZ2FsbGVyeSB3aXRoIHNwZWNpZmljIHNsaWRlIGJ5IHBhc3NpbmcgaW5kZXggb2YgdGhlIHNsaWRlIGFzIHBhcmFtZXRlci5cclxuICAgICAqIEBjYXRlZ29yeSBsR1B1YmxpY01ldGhvZHNcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleCAgLSBpbmRleCBvZiB0aGUgc2xpZGVcclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBXaGljaCBpbWFnZSBsaWdodEdhbGxlcnkgc2hvdWxkIHpvb20gZnJvbVxyXG4gICAgICpcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiBjb25zdCAkZHluYW1pY0dhbGxlcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHluYW1pYy1nYWxsZXJ5LWRlbW8nKTtcclxuICAgICAqIGNvbnN0IGR5bmFtaWNHYWxsZXJ5ID0gbGlnaHRHYWxsZXJ5KCRkeW5hbWljR2FsbGVyeSwge1xyXG4gICAgICogICAgIGR5bmFtaWM6IHRydWUsXHJcbiAgICAgKiAgICAgZHluYW1pY0VsOiBbXHJcbiAgICAgKiAgICAgICAgIHtcclxuICAgICAqICAgICAgICAgICAgICBzcmM6ICdpbWcvMS5qcGcnLFxyXG4gICAgICogICAgICAgICAgICAgIHRodW1iOiAnaW1nL3RodW1iLTEuanBnJyxcclxuICAgICAqICAgICAgICAgICAgICBzdWJIdG1sOiAnPGg0PkltYWdlIDEgdGl0bGU8L2g0PjxwPkltYWdlIDEgZGVzY3JpcHRpb25zLjwvcD4nLFxyXG4gICAgICogICAgICAgICB9LFxyXG4gICAgICogICAgICAgICAuLi5cclxuICAgICAqICAgICBdLFxyXG4gICAgICogfSk7XHJcbiAgICAgKiAkZHluYW1pY0dhbGxlcnkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgKiAgICAgLy8gU3RhcnRzIHdpdGggdGhpcmQgaXRlbS4oT3B0aW9uYWwpLlxyXG4gICAgICogICAgIC8vIFRoaXMgaXMgdXNlZnVsIGlmIHlvdSB3YW50IHVzZSBkeW5hbWljIG1vZGUgd2l0aFxyXG4gICAgICogICAgIC8vIGN1c3RvbSB0aHVtYm5haWxzICh0aHVtYm5haWxzIG91dHNpZGUgZ2FsbGVyeSksXHJcbiAgICAgKiAgICAgZHluYW1pY0dhbGxlcnkub3BlbkdhbGxlcnkoMik7XHJcbiAgICAgKiB9KTtcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIExpZ2h0R2FsbGVyeS5wcm90b3R5cGUub3BlbkdhbGxlcnkgPSBmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmIChpbmRleCA9PT0gdm9pZCAwKSB7IGluZGV4ID0gdGhpcy5zZXR0aW5ncy5pbmRleDsgfVxyXG4gICAgICAgIC8vIHByZXZlbnQgYWNjaWRlbnRhbCBkb3VibGUgZXhlY3V0aW9uXHJcbiAgICAgICAgaWYgKHRoaXMubGdPcGVuZWQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB0aGlzLmxnT3BlbmVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm91dGVyLmdldCgpLmZvY3VzKCk7XHJcbiAgICAgICAgdGhpcy5vdXRlci5yZW1vdmVDbGFzcygnbGctaGlkZS1pdGVtcycpO1xyXG4gICAgICAgIC8vIEFkZCBkaXNwbGF5IGJsb2NrLCBidXQgc3RpbGwgaGFzIG9wYWNpdHkgMFxyXG4gICAgICAgIHRoaXMuJGNvbnRhaW5lci5hZGRDbGFzcygnbGctc2hvdycpO1xyXG4gICAgICAgIHZhciBpdGVtc1RvQmVJbnNlcnRlZFRvRG9tID0gdGhpcy5nZXRJdGVtc1RvQmVJbnNlcnRlZFRvRG9tKGluZGV4LCBpbmRleCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SXRlbXNJbkRvbSA9IGl0ZW1zVG9CZUluc2VydGVkVG9Eb207XHJcbiAgICAgICAgdmFyIGl0ZW1zID0gJyc7XHJcbiAgICAgICAgaXRlbXNUb0JlSW5zZXJ0ZWRUb0RvbS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGl0ZW1zID0gaXRlbXMgKyAoXCI8ZGl2IGlkPVxcXCJcIiArIGl0ZW0gKyBcIlxcXCIgY2xhc3M9XFxcImxnLWl0ZW1cXFwiPjwvZGl2PlwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLiRpbm5lci5hcHBlbmQoaXRlbXMpO1xyXG4gICAgICAgIHRoaXMuYWRkSHRtbChpbmRleCk7XHJcbiAgICAgICAgdmFyIHRyYW5zZm9ybSA9ICcnO1xyXG4gICAgICAgIHRoaXMubWVkaWFDb250YWluZXJQb3NpdGlvbiA9IHRoaXMuZ2V0TWVkaWFDb250YWluZXJQb3NpdGlvbigpO1xyXG4gICAgICAgIHZhciBfYSA9IHRoaXMubWVkaWFDb250YWluZXJQb3NpdGlvbiwgdG9wID0gX2EudG9wLCBib3R0b20gPSBfYS5ib3R0b207XHJcbiAgICAgICAgaWYgKCF0aGlzLnNldHRpbmdzLmFsbG93TWVkaWFPdmVybGFwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TWVkaWFDb250YWluZXJQb3NpdGlvbih0b3AsIGJvdHRvbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBfX3NsaWRlVmlkZW9JbmZvID0gdGhpcy5nYWxsZXJ5SXRlbXNbaW5kZXhdLl9fc2xpZGVWaWRlb0luZm87XHJcbiAgICAgICAgaWYgKHRoaXMuem9vbUZyb21PcmlnaW4gJiYgZWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZVNpemUgPSB1dGlscy5nZXRTaXplKGVsZW1lbnQsIHRoaXMub3V0ZXIsIHRvcCArIGJvdHRvbSwgX19zbGlkZVZpZGVvSW5mbyAmJiB0aGlzLnNldHRpbmdzLnZpZGVvTWF4U2l6ZSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybSA9IHV0aWxzLmdldFRyYW5zZm9ybShlbGVtZW50LCB0aGlzLm91dGVyLCB0b3AsIGJvdHRvbSwgdGhpcy5jdXJyZW50SW1hZ2VTaXplKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnpvb21Gcm9tT3JpZ2luIHx8ICF0cmFuc2Zvcm0pIHtcclxuICAgICAgICAgICAgdGhpcy5vdXRlci5hZGRDbGFzcyh0aGlzLnNldHRpbmdzLnN0YXJ0Q2xhc3MpO1xyXG4gICAgICAgICAgICB0aGlzLmdldFNsaWRlSXRlbShpbmRleCkucmVtb3ZlQ2xhc3MoJ2xnLWNvbXBsZXRlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB0aW1lb3V0ID0gdGhpcy5zZXR0aW5ncy56b29tRnJvbU9yaWdpblxyXG4gICAgICAgICAgICA/IDEwMFxyXG4gICAgICAgICAgICA6IHRoaXMuc2V0dGluZ3MuYmFja2Ryb3BEdXJhdGlvbjtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMub3V0ZXIuYWRkQ2xhc3MoJ2xnLWNvbXBvbmVudHMtb3BlbicpO1xyXG4gICAgICAgIH0sIHRpbWVvdXQpO1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuICAgICAgICB0aGlzLkxHZWwudHJpZ2dlcihsR0V2ZW50cy5iZWZvcmVPcGVuKTtcclxuICAgICAgICAvLyBhZGQgY2xhc3MgbGctY3VycmVudCB0byByZW1vdmUgaW5pdGlhbCB0cmFuc2l0aW9uXHJcbiAgICAgICAgdGhpcy5nZXRTbGlkZUl0ZW0oaW5kZXgpLmFkZENsYXNzKCdsZy1jdXJyZW50Jyk7XHJcbiAgICAgICAgdGhpcy5sR2FsbGVyeU9uID0gZmFsc2U7XHJcbiAgICAgICAgLy8gU3RvcmUgdGhlIGN1cnJlbnQgc2Nyb2xsIHRvcCB2YWx1ZSB0byBzY3JvbGwgYmFjayBhZnRlciBjbG9zaW5nIHRoZSBnYWxsZXJ5Li5cclxuICAgICAgICB0aGlzLnByZXZTY3JvbGxUb3AgPSAkTEcod2luZG93KS5zY3JvbGxUb3AoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gTmVlZCB0byBjaGVjayBib3RoIHpvb21Gcm9tT3JpZ2luIGFuZCB0cmFuc2Zvcm0gdmFsdWVzIGFzIHdlIG5lZWQgdG8gc2V0IHNldCB0aGVcclxuICAgICAgICAgICAgLy8gZGVmYXVsdCBvcGVuaW5nIGFuaW1hdGlvbiBpZiB1c2VyIG1pc3NlZCB0byBhZGQgdGhlIGxnLXNpemUgYXR0cmlidXRlXHJcbiAgICAgICAgICAgIGlmIChfdGhpcy56b29tRnJvbU9yaWdpbiAmJiB0cmFuc2Zvcm0pIHtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50U2xpZGVfMSA9IF90aGlzLmdldFNsaWRlSXRlbShpbmRleCk7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGVfMS5jc3MoJ3RyYW5zZm9ybScsIHRyYW5zZm9ybSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGVfMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2xnLXN0YXJ0LXByb2dyZXNzIGxnLXN0YXJ0LWVuZC1wcm9ncmVzcycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jc3MoJ3RyYW5zaXRpb24tZHVyYXRpb24nLCBfdGhpcy5zZXR0aW5ncy5zdGFydEFuaW1hdGlvbkR1cmF0aW9uICsgJ21zJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMub3V0ZXIuYWRkQ2xhc3MoJ2xnLXpvb20tZnJvbS1pbWFnZScpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGVfMS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUzZCgwLCAwLCAwKScpO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLiRiYWNrZHJvcC5hZGRDbGFzcygnaW4nKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLiRjb250YWluZXIuYWRkQ2xhc3MoJ2xnLXNob3ctaW4nKTtcclxuICAgICAgICAgICAgfSwgMTApO1xyXG4gICAgICAgICAgICAvLyBsZy12aXNpYmxlIGNsYXNzIHJlc2V0cyBnYWxsZXJ5IG9wYWNpdHkgdG8gMVxyXG4gICAgICAgICAgICBpZiAoIV90aGlzLnpvb21Gcm9tT3JpZ2luIHx8ICF0cmFuc2Zvcm0pIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm91dGVyLmFkZENsYXNzKCdsZy12aXNpYmxlJyk7XHJcbiAgICAgICAgICAgICAgICB9LCBfdGhpcy5zZXR0aW5ncy5iYWNrZHJvcER1cmF0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBpbml0aWF0ZSBzbGlkZSBmdW5jdGlvblxyXG4gICAgICAgICAgICBfdGhpcy5zbGlkZShpbmRleCwgZmFsc2UsIGZhbHNlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIF90aGlzLkxHZWwudHJpZ2dlcihsR0V2ZW50cy5hZnRlck9wZW4pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5ib2R5ID09PSB0aGlzLnNldHRpbmdzLmNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAkTEcoJ2h0bWwnKS5hZGRDbGFzcygnbGctb24nKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBOb3RlIC0gQ2hhbmdpbmcgdGhlIHBvc2l0aW9uIG9mIHRoZSBtZWRpYSBvbiBldmVyeSBzbGlkZSB0cmFuc2l0aW9uIGNyZWF0ZXMgYSBmbGlja2VyaW5nIGVmZmVjdC5cclxuICAgICAqIFRoZXJlZm9yZSzCoFRoZSBoZWlnaHQgb2YgdGhlIGNhcHRpb24gaXMgY2FsY3VsYXRlZCBkeW5hbWljYWxseSwgb25seSBvbmNlIGJhc2VkIG9uIHRoZSBmaXJzdCBzbGlkZSBjYXB0aW9uLlxyXG4gICAgICogaWYgeW91IGhhdmUgZHluYW1pYyBjYXB0aW9ucyBmb3IgZWFjaCBtZWRpYSxcclxuICAgICAqIHlvdSBjYW4gcHJvdmlkZSBhbiBhcHByb3ByaWF0ZSBoZWlnaHQgZm9yIHRoZSBjYXB0aW9ucyB2aWEgYWxsb3dNZWRpYU92ZXJsYXAgb3B0aW9uXHJcbiAgICAgKi9cclxuICAgIExpZ2h0R2FsbGVyeS5wcm90b3R5cGUuZ2V0TWVkaWFDb250YWluZXJQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5hbGxvd01lZGlhT3ZlcmxhcCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdG9wID0gdGhpcy4kdG9vbGJhci5nZXQoKS5jbGllbnRIZWlnaHQgfHwgMDtcclxuICAgICAgICB2YXIgc3ViSHRtbCA9IHRoaXMub3V0ZXIuZmluZCgnLmxnLWNvbXBvbmVudHMgLmxnLXN1Yi1odG1sJykuZ2V0KCk7XHJcbiAgICAgICAgdmFyIGNhcHRpb25IZWlnaHQgPSB0aGlzLnNldHRpbmdzLmRlZmF1bHRDYXB0aW9uSGVpZ2h0IHx8XHJcbiAgICAgICAgICAgIChzdWJIdG1sICYmIHN1Ykh0bWwuY2xpZW50SGVpZ2h0KSB8fFxyXG4gICAgICAgICAgICAwO1xyXG4gICAgICAgIHZhciB0aHVtYkNvbnRhaW5lciA9IHRoaXMub3V0ZXIuZmluZCgnLmxnLXRodW1iLW91dGVyJykuZ2V0KCk7XHJcbiAgICAgICAgdmFyIHRodW1iSGVpZ2h0ID0gdGh1bWJDb250YWluZXIgPyB0aHVtYkNvbnRhaW5lci5jbGllbnRIZWlnaHQgOiAwO1xyXG4gICAgICAgIHZhciBib3R0b20gPSB0aHVtYkhlaWdodCArIGNhcHRpb25IZWlnaHQ7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdG9wOiB0b3AsXHJcbiAgICAgICAgICAgIGJvdHRvbTogYm90dG9tLFxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS5zZXRNZWRpYUNvbnRhaW5lclBvc2l0aW9uID0gZnVuY3Rpb24gKHRvcCwgYm90dG9tKSB7XHJcbiAgICAgICAgaWYgKHRvcCA9PT0gdm9pZCAwKSB7IHRvcCA9IDA7IH1cclxuICAgICAgICBpZiAoYm90dG9tID09PSB2b2lkIDApIHsgYm90dG9tID0gMDsgfVxyXG4gICAgICAgIHRoaXMuJGNvbnRlbnQuY3NzKCd0b3AnLCB0b3AgKyAncHgnKS5jc3MoJ2JvdHRvbScsIGJvdHRvbSArICdweCcpO1xyXG4gICAgfTtcclxuICAgIExpZ2h0R2FsbGVyeS5wcm90b3R5cGUuaGlkZUJhcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAvLyBIaWRlIGNvbnRyb2xsZXJzIGlmIG1vdXNlIGRvZXNuJ3QgbW92ZSBmb3Igc29tZSBwZXJpb2RcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMub3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLWhpZGUtaXRlbXMnKTtcclxuICAgICAgICAgICAgaWYgKF90aGlzLnNldHRpbmdzLmhpZGVCYXJzRGVsYXkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5vdXRlci5vbignbW91c2Vtb3ZlLmxnIGNsaWNrLmxnIHRvdWNoc3RhcnQubGcnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMub3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLWhpZGUtaXRlbXMnKTtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoX3RoaXMuaGlkZUJhclRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRpbWVvdXQgd2lsbCBiZSBjbGVhcmVkIG9uIGVhY2ggc2xpZGUgbW92ZW1lbnQgYWxzb1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmhpZGVCYXJUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLm91dGVyLmFkZENsYXNzKCdsZy1oaWRlLWl0ZW1zJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgX3RoaXMuc2V0dGluZ3MuaGlkZUJhcnNEZWxheSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIF90aGlzLm91dGVyLnRyaWdnZXIoJ21vdXNlbW92ZS5sZycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcy5zZXR0aW5ncy5zaG93QmFyc0FmdGVyKTtcclxuICAgIH07XHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLmluaXRQaWN0dXJlRmlsbCA9IGZ1bmN0aW9uICgkaW1nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3Muc3VwcG9ydExlZ2FjeUJyb3dzZXIpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHBpY3R1cmVmaWxsKHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50czogWyRpbWcuZ2V0KCldLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignbGlnaHRHYWxsZXJ5IDotIElmIHlvdSB3YW50IHNyY3NldCBvciBwaWN0dXJlIHRhZyB0byBiZSBzdXBwb3J0ZWQgZm9yIG9sZGVyIGJyb3dzZXIgcGxlYXNlIGluY2x1ZGUgcGljdHVyZWZpbCBqYXZhc2NyaXB0IGxpYnJhcnkgaW4geW91ciBkb2N1bWVudC4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqICBAZGVzYyBDcmVhdGUgaW1hZ2UgY291bnRlclxyXG4gICAgICogIEV4OiAxLzEwXHJcbiAgICAgKi9cclxuICAgIExpZ2h0R2FsbGVyeS5wcm90b3R5cGUuY291bnRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5jb3VudGVyKSB7XHJcbiAgICAgICAgICAgIHZhciBjb3VudGVySHRtbCA9IFwiPGRpdiBjbGFzcz1cXFwibGctY291bnRlclxcXCIgcm9sZT1cXFwic3RhdHVzXFxcIiBhcmlhLWxpdmU9XFxcInBvbGl0ZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPVxcXCJcIiArIHRoaXMuZ2V0SWROYW1lKCdsZy1jb3VudGVyLWN1cnJlbnQnKSArIFwiXFxcIiBjbGFzcz1cXFwibGctY291bnRlci1jdXJyZW50XFxcIj5cIiArICh0aGlzLmluZGV4ICsgMSkgKyBcIiA8L3NwYW4+IC9cXG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9XFxcIlwiICsgdGhpcy5nZXRJZE5hbWUoJ2xnLWNvdW50ZXItYWxsJykgKyBcIlxcXCIgY2xhc3M9XFxcImxnLWNvdW50ZXItYWxsXFxcIj5cIiArIHRoaXMuZ2FsbGVyeUl0ZW1zLmxlbmd0aCArIFwiIDwvc3Bhbj48L2Rpdj5cIjtcclxuICAgICAgICAgICAgdGhpcy5vdXRlci5maW5kKHRoaXMuc2V0dGluZ3MuYXBwZW5kQ291bnRlclRvKS5hcHBlbmQoY291bnRlckh0bWwpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqICBAZGVzYyBhZGQgc3ViLWh0bWwgaW50byB0aGUgc2xpZGVcclxuICAgICAqICBAcGFyYW0ge051bWJlcn0gaW5kZXggLSBpbmRleCBvZiB0aGUgc2xpZGVcclxuICAgICAqL1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS5hZGRIdG1sID0gZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgdmFyIHN1Ykh0bWw7XHJcbiAgICAgICAgdmFyIHN1Ykh0bWxVcmw7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FsbGVyeUl0ZW1zW2luZGV4XS5zdWJIdG1sVXJsKSB7XHJcbiAgICAgICAgICAgIHN1Ykh0bWxVcmwgPSB0aGlzLmdhbGxlcnlJdGVtc1tpbmRleF0uc3ViSHRtbFVybDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHN1Ykh0bWwgPSB0aGlzLmdhbGxlcnlJdGVtc1tpbmRleF0uc3ViSHRtbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzdWJIdG1sVXJsKSB7XHJcbiAgICAgICAgICAgIGlmIChzdWJIdG1sKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBnZXQgZmlyc3QgbGV0dGVyIG9mIHN1Yi1odG1sXHJcbiAgICAgICAgICAgICAgICAvLyBpZiBmaXJzdCBsZXR0ZXIgc3RhcnRzIHdpdGggLiBvciAjIGdldCB0aGUgaHRtbCBmb3JtIHRoZSBqUXVlcnkgb2JqZWN0XHJcbiAgICAgICAgICAgICAgICB2YXIgZkwgPSBzdWJIdG1sLnN1YnN0cmluZygwLCAxKTtcclxuICAgICAgICAgICAgICAgIGlmIChmTCA9PT0gJy4nIHx8IGZMID09PSAnIycpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5zdWJIdG1sU2VsZWN0b3JSZWxhdGl2ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5zZXR0aW5ncy5keW5hbWljKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ykh0bWwgPSAkTEcodGhpcy5pdGVtcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lcShpbmRleClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKHN1Ykh0bWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlyc3QoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmh0bWwoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ykh0bWwgPSAkTEcoc3ViSHRtbCkuZmlyc3QoKS5odG1sKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3ViSHRtbCA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmFwcGVuZFN1Ykh0bWxUbyAhPT0gJy5sZy1pdGVtJykge1xyXG4gICAgICAgICAgICBpZiAoc3ViSHRtbFVybCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdXRlci5maW5kKCcubGctc3ViLWh0bWwnKS5sb2FkKHN1Ykh0bWxVcmwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdXRlci5maW5kKCcubGctc3ViLWh0bWwnKS5odG1sKHN1Ykh0bWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudFNsaWRlID0gJExHKHRoaXMuZ2V0U2xpZGVJdGVtSWQoaW5kZXgpKTtcclxuICAgICAgICAgICAgaWYgKHN1Ykh0bWxVcmwpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZS5sb2FkKHN1Ykh0bWxVcmwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlLmFwcGVuZChcIjxkaXYgY2xhc3M9XFxcImxnLXN1Yi1odG1sXFxcIj5cIiArIHN1Ykh0bWwgKyBcIjwvZGl2PlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGQgbGctZW1wdHktaHRtbCBjbGFzcyBpZiB0aXRsZSBkb2Vzbid0IGV4aXN0XHJcbiAgICAgICAgaWYgKHR5cGVvZiBzdWJIdG1sICE9PSAndW5kZWZpbmVkJyAmJiBzdWJIdG1sICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChzdWJIdG1sID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdXRlclxyXG4gICAgICAgICAgICAgICAgICAgIC5maW5kKHRoaXMuc2V0dGluZ3MuYXBwZW5kU3ViSHRtbFRvKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnbGctZW1wdHktaHRtbCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdXRlclxyXG4gICAgICAgICAgICAgICAgICAgIC5maW5kKHRoaXMuc2V0dGluZ3MuYXBwZW5kU3ViSHRtbFRvKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnbGctZW1wdHktaHRtbCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuTEdlbC50cmlnZ2VyKGxHRXZlbnRzLmFmdGVyQXBwZW5kU3ViSHRtbCwge1xyXG4gICAgICAgICAgICBpbmRleDogaW5kZXgsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiAgQGRlc2MgUHJlbG9hZCBzbGlkZXNcclxuICAgICAqICBAcGFyYW0ge051bWJlcn0gaW5kZXggLSBpbmRleCBvZiB0aGUgc2xpZGVcclxuICAgICAqIEB0b2RvIHByZWxvYWQgbm90IHdvcmtpbmcgZm9yIHRoZSBmaXJzdCBzbGlkZSwgQWxzbywgc2hvdWxkIHdvcmsgZm9yIHRoZSBmaXJzdCBhbmQgbGFzdCBzbGlkZSBhcyB3ZWxsXHJcbiAgICAgKi9cclxuICAgIExpZ2h0R2FsbGVyeS5wcm90b3R5cGUucHJlbG9hZCA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IHRoaXMuc2V0dGluZ3MucHJlbG9hZDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpID49IHRoaXMuZ2FsbGVyeUl0ZW1zLmxlbmd0aCAtIGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxvYWRDb250ZW50KGluZGV4ICsgaSwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8PSB0aGlzLnNldHRpbmdzLnByZWxvYWQ7IGorKykge1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggLSBqIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sb2FkQ29udGVudChpbmRleCAtIGosIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS5nZXREdW1teUltZ1N0eWxlcyA9IGZ1bmN0aW9uIChpbWFnZVNpemUpIHtcclxuICAgICAgICBpZiAoIWltYWdlU2l6ZSlcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIHJldHVybiBcIndpZHRoOlwiICsgaW1hZ2VTaXplLndpZHRoICsgXCJweDtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC1cIiArIGltYWdlU2l6ZS53aWR0aCAvIDIgKyBcInB4O1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtXCIgKyBpbWFnZVNpemUuaGVpZ2h0IC8gMiArIFwicHg7XFxuICAgICAgICAgICAgICAgIGhlaWdodDpcIiArIGltYWdlU2l6ZS5oZWlnaHQgKyBcInB4XCI7XHJcbiAgICB9O1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS5nZXRWaWRlb0NvbnRTdHlsZSA9IGZ1bmN0aW9uIChpbWFnZVNpemUpIHtcclxuICAgICAgICBpZiAoIWltYWdlU2l6ZSlcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIHJldHVybiBcIndpZHRoOlwiICsgaW1hZ2VTaXplLndpZHRoICsgXCJweDtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OlwiICsgaW1hZ2VTaXplLmhlaWdodCArIFwicHhcIjtcclxuICAgIH07XHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLmdldER1bW15SW1hZ2VDb250ZW50ID0gZnVuY3Rpb24gKCRjdXJyZW50U2xpZGUsIGluZGV4LCBhbHQpIHtcclxuICAgICAgICB2YXIgJGN1cnJlbnRJdGVtO1xyXG4gICAgICAgIGlmICghdGhpcy5zZXR0aW5ncy5keW5hbWljKSB7XHJcbiAgICAgICAgICAgICRjdXJyZW50SXRlbSA9ICRMRyh0aGlzLml0ZW1zKS5lcShpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgkY3VycmVudEl0ZW0pIHtcclxuICAgICAgICAgICAgdmFyIF9kdW1teUltZ1NyYyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNldHRpbmdzLmV4VGh1bWJJbWFnZSkge1xyXG4gICAgICAgICAgICAgICAgX2R1bW15SW1nU3JjID0gJGN1cnJlbnRJdGVtLmZpbmQoJ2ltZycpLmZpcnN0KCkuYXR0cignc3JjJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBfZHVtbXlJbWdTcmMgPSAkY3VycmVudEl0ZW0uYXR0cih0aGlzLnNldHRpbmdzLmV4VGh1bWJJbWFnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFfZHVtbXlJbWdTcmMpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgIHZhciBpbWdTdHlsZSA9IHRoaXMuZ2V0RHVtbXlJbWdTdHlsZXModGhpcy5jdXJyZW50SW1hZ2VTaXplKTtcclxuICAgICAgICAgICAgdmFyIGR1bW15SW1nQ29udGVudCA9IFwiPGltZyBcIiArIGFsdCArIFwiIHN0eWxlPVxcXCJcIiArIGltZ1N0eWxlICsgXCJcXFwiIGNsYXNzPVxcXCJsZy1kdW1teS1pbWdcXFwiIHNyYz1cXFwiXCIgKyBfZHVtbXlJbWdTcmMgKyBcIlxcXCIgLz5cIjtcclxuICAgICAgICAgICAgJGN1cnJlbnRTbGlkZS5hZGRDbGFzcygnbGctZmlyc3Qtc2xpZGUnKTtcclxuICAgICAgICAgICAgdGhpcy5vdXRlci5hZGRDbGFzcygnbGctZmlyc3Qtc2xpZGUtbG9hZGluZycpO1xyXG4gICAgICAgICAgICByZXR1cm4gZHVtbXlJbWdDb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9O1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS5zZXRJbWdNYXJrdXAgPSBmdW5jdGlvbiAoc3JjLCAkY3VycmVudFNsaWRlLCBpbmRleCkge1xyXG4gICAgICAgIHZhciBjdXJyZW50R2FsbGVyeUl0ZW0gPSB0aGlzLmdhbGxlcnlJdGVtc1tpbmRleF07XHJcbiAgICAgICAgdmFyIGFsdCA9IGN1cnJlbnRHYWxsZXJ5SXRlbS5hbHQsIHNyY3NldCA9IGN1cnJlbnRHYWxsZXJ5SXRlbS5zcmNzZXQsIHNpemVzID0gY3VycmVudEdhbGxlcnlJdGVtLnNpemVzLCBzb3VyY2VzID0gY3VycmVudEdhbGxlcnlJdGVtLnNvdXJjZXM7XHJcbiAgICAgICAgLy8gVXNlIHRoZSB0aHVtYm5haWwgYXMgZHVtbXkgaW1hZ2Ugd2hpY2ggd2lsbCBiZSByZXNpemVkIHRvIGFjdHVhbCBpbWFnZSBzaXplIGFuZFxyXG4gICAgICAgIC8vIGRpc3BsYXllZCBvbiB0b3Agb2YgYWN0dWFsIGltYWdlXHJcbiAgICAgICAgdmFyIGltZ0NvbnRlbnQgPSAnJztcclxuICAgICAgICB2YXIgYWx0QXR0ciA9IGFsdCA/ICdhbHQ9XCInICsgYWx0ICsgJ1wiJyA6ICcnO1xyXG4gICAgICAgIGlmICh0aGlzLmlzRmlyc3RTbGlkZVdpdGhab29tQW5pbWF0aW9uKCkpIHtcclxuICAgICAgICAgICAgaW1nQ29udGVudCA9IHRoaXMuZ2V0RHVtbXlJbWFnZUNvbnRlbnQoJGN1cnJlbnRTbGlkZSwgaW5kZXgsIGFsdEF0dHIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaW1nQ29udGVudCA9IHV0aWxzLmdldEltZ01hcmt1cChpbmRleCwgc3JjLCBhbHRBdHRyLCBzcmNzZXQsIHNpemVzLCBzb3VyY2VzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGltZ01hcmt1cCA9IFwiPHBpY3R1cmUgY2xhc3M9XFxcImxnLWltZy13cmFwXFxcIj4gXCIgKyBpbWdDb250ZW50ICsgXCI8L3BpY3R1cmU+XCI7XHJcbiAgICAgICAgJGN1cnJlbnRTbGlkZS5wcmVwZW5kKGltZ01hcmt1cCk7XHJcbiAgICB9O1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS5vblNsaWRlT2JqZWN0TG9hZCA9IGZ1bmN0aW9uICgkc2xpZGUsIGlzSFRNTDVWaWRlb1dpdGhvdXRQb3N0ZXIsIG9uTG9hZCwgb25FcnJvcikge1xyXG4gICAgICAgIHZhciBtZWRpYU9iamVjdCA9ICRzbGlkZS5maW5kKCcubGctb2JqZWN0JykuZmlyc3QoKTtcclxuICAgICAgICBpZiAodXRpbHMuaXNJbWFnZUxvYWRlZChtZWRpYU9iamVjdC5nZXQoKSkgfHxcclxuICAgICAgICAgICAgaXNIVE1MNVZpZGVvV2l0aG91dFBvc3Rlcikge1xyXG4gICAgICAgICAgICBvbkxvYWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG1lZGlhT2JqZWN0Lm9uKCdsb2FkLmxnIGVycm9yLmxnJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgb25Mb2FkICYmIG9uTG9hZCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbWVkaWFPYmplY3Qub24oJ2Vycm9yLmxnJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgb25FcnJvciAmJiBvbkVycm9yKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gJGVsIEN1cnJlbnQgc2xpZGUgaXRlbVxyXG4gICAgICogQHBhcmFtIGluZGV4XHJcbiAgICAgKiBAcGFyYW0gZGVsYXkgRGVsYXkgaXMgMCBleGNlcHQgZmlyc3QgdGltZVxyXG4gICAgICogQHBhcmFtIHNwZWVkIFNwZWVkIGlzIHNhbWUgYXMgZGVsYXksIGV4Y2VwdCBpdCBpcyAwIGlmIGdhbGxlcnkgaXMgb3BlbmVkIHZpYSBoYXNoIHBsdWdpblxyXG4gICAgICogQHBhcmFtIGlzRmlyc3RTbGlkZVxyXG4gICAgICovXHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLm9uTGdPYmplY3RMb2FkID0gZnVuY3Rpb24gKGN1cnJlbnRTbGlkZSwgaW5kZXgsIGRlbGF5LCBzcGVlZCwgaXNGaXJzdFNsaWRlLCBpc0hUTUw1VmlkZW9XaXRob3V0UG9zdGVyKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLm9uU2xpZGVPYmplY3RMb2FkKGN1cnJlbnRTbGlkZSwgaXNIVE1MNVZpZGVvV2l0aG91dFBvc3RlciwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy50cmlnZ2VyU2xpZGVJdGVtTG9hZChjdXJyZW50U2xpZGUsIGluZGV4LCBkZWxheSwgc3BlZWQsIGlzRmlyc3RTbGlkZSk7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjdXJyZW50U2xpZGUuYWRkQ2xhc3MoJ2xnLWNvbXBsZXRlIGxnLWNvbXBsZXRlXycpO1xyXG4gICAgICAgICAgICBjdXJyZW50U2xpZGUuaHRtbCgnPHNwYW4gY2xhc3M9XCJsZy1lcnJvci1tc2dcIj5Pb3BzLi4uIEZhaWxlZCB0byBsb2FkIGNvbnRlbnQuLi48L3NwYW4+Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS50cmlnZ2VyU2xpZGVJdGVtTG9hZCA9IGZ1bmN0aW9uICgkY3VycmVudFNsaWRlLCBpbmRleCwgZGVsYXksIHNwZWVkLCBpc0ZpcnN0U2xpZGUpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBjdXJyZW50R2FsbGVyeUl0ZW0gPSB0aGlzLmdhbGxlcnlJdGVtc1tpbmRleF07XHJcbiAgICAgICAgLy8gQWRkaW5nIGRlbGF5IGZvciB2aWRlbyBzbGlkZXMgd2l0aG91dCBwb3N0ZXIgZm9yIGJldHRlciBwZXJmb3JtYW5jZSBhbmQgdXNlciBleHBlcmllbmNlXHJcbiAgICAgICAgLy8gVmlkZW9zIHNob3VsZCBzdGFydCBwbGF5aW5nIG9uY2Ugb25jZSB0aGUgZ2FsbGVyeSBpcyBjb21wbGV0ZWx5IGxvYWRlZFxyXG4gICAgICAgIHZhciBfc3BlZWQgPSBpc0ZpcnN0U2xpZGUgJiZcclxuICAgICAgICAgICAgdGhpcy5nZXRTbGlkZVR5cGUoY3VycmVudEdhbGxlcnlJdGVtKSA9PT0gJ3ZpZGVvJyAmJlxyXG4gICAgICAgICAgICAhY3VycmVudEdhbGxlcnlJdGVtLnBvc3RlclxyXG4gICAgICAgICAgICA/IHNwZWVkXHJcbiAgICAgICAgICAgIDogMDtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJGN1cnJlbnRTbGlkZS5hZGRDbGFzcygnbGctY29tcGxldGUgbGctY29tcGxldGVfJyk7XHJcbiAgICAgICAgICAgIF90aGlzLkxHZWwudHJpZ2dlcihsR0V2ZW50cy5zbGlkZUl0ZW1Mb2FkLCB7XHJcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXHJcbiAgICAgICAgICAgICAgICBkZWxheTogZGVsYXkgfHwgMCxcclxuICAgICAgICAgICAgICAgIGlzRmlyc3RTbGlkZTogaXNGaXJzdFNsaWRlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCBfc3BlZWQpO1xyXG4gICAgfTtcclxuICAgIExpZ2h0R2FsbGVyeS5wcm90b3R5cGUuaXNGaXJzdFNsaWRlV2l0aFpvb21BbmltYXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICEhKCF0aGlzLmxHYWxsZXJ5T24gJiZcclxuICAgICAgICAgICAgdGhpcy56b29tRnJvbU9yaWdpbiAmJlxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZVNpemUpO1xyXG4gICAgfTtcclxuICAgIC8vIEFkZCB2aWRlbyBzbGlkZUluZm9cclxuICAgIExpZ2h0R2FsbGVyeS5wcm90b3R5cGUuYWRkU2xpZGVWaWRlb0luZm8gPSBmdW5jdGlvbiAoaXRlbXMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuX19zbGlkZVZpZGVvSW5mbyA9IHV0aWxzLmlzVmlkZW8oZWxlbWVudC5zcmMsICEhZWxlbWVudC52aWRlbywgaW5kZXgpO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5fX3NsaWRlVmlkZW9JbmZvICYmXHJcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXR0aW5ncy5sb2FkWW91VHViZVBvc3RlciAmJlxyXG4gICAgICAgICAgICAgICAgIWVsZW1lbnQucG9zdGVyICYmXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50Ll9fc2xpZGVWaWRlb0luZm8ueW91dHViZSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5wb3N0ZXIgPSBcIi8vaW1nLnlvdXR1YmUuY29tL3ZpL1wiICsgZWxlbWVudC5fX3NsaWRlVmlkZW9JbmZvLnlvdXR1YmVbMV0gKyBcIi9tYXhyZXNkZWZhdWx0LmpwZ1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiAgTG9hZCBzbGlkZSBjb250ZW50IGludG8gc2xpZGUuXHJcbiAgICAgKiAgVGhpcyBpcyB1c2VkIHRvIGxvYWQgY29udGVudCBpbnRvIHNsaWRlcyB0aGF0IGlzIG5vdCB2aXNpYmxlIHRvb1xyXG4gICAgICogIEBwYXJhbSB7TnVtYmVyfSBpbmRleCAtIGluZGV4IG9mIHRoZSBzbGlkZS5cclxuICAgICAqICBAcGFyYW0ge0Jvb2xlYW59IHJlYyAtIGlmIHRydWUgY2FsbCBsb2FkY29udGVudCgpIGZ1bmN0aW9uIGFnYWluLlxyXG4gICAgICovXHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLmxvYWRDb250ZW50ID0gZnVuY3Rpb24gKGluZGV4LCByZWMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBjdXJyZW50R2FsbGVyeUl0ZW0gPSB0aGlzLmdhbGxlcnlJdGVtc1tpbmRleF07XHJcbiAgICAgICAgdmFyICRjdXJyZW50U2xpZGUgPSAkTEcodGhpcy5nZXRTbGlkZUl0ZW1JZChpbmRleCkpO1xyXG4gICAgICAgIHZhciBwb3N0ZXIgPSBjdXJyZW50R2FsbGVyeUl0ZW0ucG9zdGVyLCBzcmNzZXQgPSBjdXJyZW50R2FsbGVyeUl0ZW0uc3Jjc2V0LCBzaXplcyA9IGN1cnJlbnRHYWxsZXJ5SXRlbS5zaXplcywgc291cmNlcyA9IGN1cnJlbnRHYWxsZXJ5SXRlbS5zb3VyY2VzO1xyXG4gICAgICAgIHZhciBzcmMgPSBjdXJyZW50R2FsbGVyeUl0ZW0uc3JjO1xyXG4gICAgICAgIHZhciB2aWRlbyA9IGN1cnJlbnRHYWxsZXJ5SXRlbS52aWRlbztcclxuICAgICAgICB2YXIgX2h0bWw1VmlkZW8gPSB2aWRlbyAmJiB0eXBlb2YgdmlkZW8gPT09ICdzdHJpbmcnID8gSlNPTi5wYXJzZSh2aWRlbykgOiB2aWRlbztcclxuICAgICAgICBpZiAoY3VycmVudEdhbGxlcnlJdGVtLnJlc3BvbnNpdmUpIHtcclxuICAgICAgICAgICAgdmFyIHNyY0R5SXRtcyA9IGN1cnJlbnRHYWxsZXJ5SXRlbS5yZXNwb25zaXZlLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgIHNyYyA9IHV0aWxzLmdldFJlc3BvbnNpdmVTcmMoc3JjRHlJdG1zKSB8fCBzcmM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB2aWRlb0luZm8gPSBjdXJyZW50R2FsbGVyeUl0ZW0uX19zbGlkZVZpZGVvSW5mbztcclxuICAgICAgICB2YXIgbGdWaWRlb1N0eWxlID0gJyc7XHJcbiAgICAgICAgdmFyIGlmcmFtZSA9ICEhY3VycmVudEdhbGxlcnlJdGVtLmlmcmFtZTtcclxuICAgICAgICB2YXIgaXNGaXJzdFNsaWRlID0gIXRoaXMubEdhbGxlcnlPbjtcclxuICAgICAgICAvLyBkZWxheSBmb3IgYWRkaW5nIGNvbXBsZXRlIGNsYXNzLiBpdCBpcyAwIGV4Y2VwdCBmaXJzdCB0aW1lLlxyXG4gICAgICAgIHZhciBkZWxheSA9IDA7XHJcbiAgICAgICAgaWYgKGlzRmlyc3RTbGlkZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy56b29tRnJvbU9yaWdpbiAmJiB0aGlzLmN1cnJlbnRJbWFnZVNpemUpIHtcclxuICAgICAgICAgICAgICAgIGRlbGF5ID0gdGhpcy5zZXR0aW5ncy5zdGFydEFuaW1hdGlvbkR1cmF0aW9uICsgMTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkZWxheSA9IHRoaXMuc2V0dGluZ3MuYmFja2Ryb3BEdXJhdGlvbiArIDEwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghJGN1cnJlbnRTbGlkZS5oYXNDbGFzcygnbGctbG9hZGVkJykpIHtcclxuICAgICAgICAgICAgaWYgKHZpZGVvSW5mbykge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5tZWRpYUNvbnRhaW5lclBvc2l0aW9uLCB0b3BfMiA9IF9hLnRvcCwgYm90dG9tID0gX2EuYm90dG9tO1xyXG4gICAgICAgICAgICAgICAgdmFyIHZpZGVvU2l6ZSA9IHV0aWxzLmdldFNpemUodGhpcy5pdGVtc1tpbmRleF0sIHRoaXMub3V0ZXIsIHRvcF8yICsgYm90dG9tLCB2aWRlb0luZm8gJiYgdGhpcy5zZXR0aW5ncy52aWRlb01heFNpemUpO1xyXG4gICAgICAgICAgICAgICAgbGdWaWRlb1N0eWxlID0gdGhpcy5nZXRWaWRlb0NvbnRTdHlsZSh2aWRlb1NpemUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpZnJhbWUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBtYXJrdXAgPSB1dGlscy5nZXRJZnJhbWVNYXJrdXAodGhpcy5zZXR0aW5ncy5pZnJhbWVXaWR0aCwgdGhpcy5zZXR0aW5ncy5pZnJhbWVIZWlnaHQsIHRoaXMuc2V0dGluZ3MuaWZyYW1lTWF4V2lkdGgsIHRoaXMuc2V0dGluZ3MuaWZyYW1lTWF4SGVpZ2h0LCBzcmMsIGN1cnJlbnRHYWxsZXJ5SXRlbS5pZnJhbWVUaXRsZSk7XHJcbiAgICAgICAgICAgICAgICAkY3VycmVudFNsaWRlLnByZXBlbmQobWFya3VwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChwb3N0ZXIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkdW1teUltZyA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdmFyIGhhc1N0YXJ0QW5pbWF0aW9uID0gaXNGaXJzdFNsaWRlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy56b29tRnJvbU9yaWdpbiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEltYWdlU2l6ZTtcclxuICAgICAgICAgICAgICAgIGlmIChoYXNTdGFydEFuaW1hdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGR1bW15SW1nID0gdGhpcy5nZXREdW1teUltYWdlQ29udGVudCgkY3VycmVudFNsaWRlLCBpbmRleCwgJycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIG1hcmt1cCA9IHV0aWxzLmdldFZpZGVvUG9zdGVyTWFya3VwKHBvc3RlciwgZHVtbXlJbWcgfHwgJycsIGxnVmlkZW9TdHlsZSwgdGhpcy5zZXR0aW5ncy5zdHJpbmdzWydwbGF5VmlkZW8nXSwgdmlkZW9JbmZvKTtcclxuICAgICAgICAgICAgICAgICRjdXJyZW50U2xpZGUucHJlcGVuZChtYXJrdXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHZpZGVvSW5mbykge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1hcmt1cCA9IFwiPGRpdiBjbGFzcz1cXFwibGctdmlkZW8tY29udCBcXFwiIHN0eWxlPVxcXCJcIiArIGxnVmlkZW9TdHlsZSArIFwiXFxcIj48L2Rpdj5cIjtcclxuICAgICAgICAgICAgICAgICRjdXJyZW50U2xpZGUucHJlcGVuZChtYXJrdXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJbWdNYXJrdXAoc3JjLCAkY3VycmVudFNsaWRlLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3Jjc2V0IHx8IHNvdXJjZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgJGltZyA9ICRjdXJyZW50U2xpZGUuZmluZCgnLmxnLW9iamVjdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdFBpY3R1cmVGaWxsKCRpbWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwb3N0ZXIgfHwgdmlkZW9JbmZvKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkxHZWwudHJpZ2dlcihsR0V2ZW50cy5oYXNWaWRlbywge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcclxuICAgICAgICAgICAgICAgICAgICBzcmM6IHNyYyxcclxuICAgICAgICAgICAgICAgICAgICBodG1sNVZpZGVvOiBfaHRtbDVWaWRlbyxcclxuICAgICAgICAgICAgICAgICAgICBoYXNQb3N0ZXI6ICEhcG9zdGVyLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5MR2VsLnRyaWdnZXIobEdFdmVudHMuYWZ0ZXJBcHBlbmRTbGlkZSwgeyBpbmRleDogaW5kZXggfSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxHYWxsZXJ5T24gJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuYXBwZW5kU3ViSHRtbFRvID09PSAnLmxnLWl0ZW0nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEh0bWwoaW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEZvciBmaXJzdCB0aW1lIGFkZCBzb21lIGRlbGF5IGZvciBkaXNwbGF5aW5nIHRoZSBzdGFydCBhbmltYXRpb24uXHJcbiAgICAgICAgdmFyIF9zcGVlZCA9IDA7XHJcbiAgICAgICAgLy8gRG8gbm90IGNoYW5nZSB0aGUgZGVsYXkgdmFsdWUgYmVjYXVzZSBpdCBpcyByZXF1aXJlZCBmb3Igem9vbSBwbHVnaW4uXHJcbiAgICAgICAgLy8gSWYgZ2FsbGVyeSBvcGVuZWQgZnJvbSBkaXJlY3QgdXJsIChoYXNoKSBzcGVlZCB2YWx1ZSBzaG91bGQgYmUgMFxyXG4gICAgICAgIGlmIChkZWxheSAmJiAhJExHKGRvY3VtZW50LmJvZHkpLmhhc0NsYXNzKCdsZy1mcm9tLWhhc2gnKSkge1xyXG4gICAgICAgICAgICBfc3BlZWQgPSBkZWxheTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gT25seSBmb3IgZmlyc3Qgc2xpZGUgYW5kIHpvb21Gcm9tT3JpZ2luIGlzIGVuYWJsZWRcclxuICAgICAgICBpZiAodGhpcy5pc0ZpcnN0U2xpZGVXaXRoWm9vbUFuaW1hdGlvbigpKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJGN1cnJlbnRTbGlkZVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnbGctc3RhcnQtZW5kLXByb2dyZXNzIGxnLXN0YXJ0LXByb2dyZXNzJylcclxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuICAgICAgICAgICAgfSwgdGhpcy5zZXR0aW5ncy5zdGFydEFuaW1hdGlvbkR1cmF0aW9uICsgMTAwKTtcclxuICAgICAgICAgICAgaWYgKCEkY3VycmVudFNsaWRlLmhhc0NsYXNzKCdsZy1sb2FkZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmdldFNsaWRlVHlwZShjdXJyZW50R2FsbGVyeUl0ZW0pID09PSAnaW1hZ2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRjdXJyZW50U2xpZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKCcubGctaW1nLXdyYXAnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCh1dGlscy5nZXRJbWdNYXJrdXAoaW5kZXgsIHNyYywgJycsIHNyY3NldCwgc2l6ZXMsIGN1cnJlbnRHYWxsZXJ5SXRlbS5zb3VyY2VzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcmNzZXQgfHwgc291cmNlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRpbWcgPSAkY3VycmVudFNsaWRlLmZpbmQoJy5sZy1vYmplY3QnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmluaXRQaWN0dXJlRmlsbCgkaW1nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuZ2V0U2xpZGVUeXBlKGN1cnJlbnRHYWxsZXJ5SXRlbSkgPT09ICdpbWFnZScgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKF90aGlzLmdldFNsaWRlVHlwZShjdXJyZW50R2FsbGVyeUl0ZW0pID09PSAndmlkZW8nICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0ZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLm9uTGdPYmplY3RMb2FkKCRjdXJyZW50U2xpZGUsIGluZGV4LCBkZWxheSwgX3NwZWVkLCB0cnVlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvYWQgcmVtYWluaW5nIHNsaWRlcyBvbmNlIHRoZSBzbGlkZSBpcyBjb21wbGV0ZWx5IGxvYWRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5vblNsaWRlT2JqZWN0TG9hZCgkY3VycmVudFNsaWRlLCAhISh2aWRlb0luZm8gJiYgdmlkZW9JbmZvLmh0bWw1ICYmICFwb3N0ZXIpLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5sb2FkQ29udGVudE9uRmlyc3RTbGlkZUxvYWQoaW5kZXgsICRjdXJyZW50U2xpZGUsIF9zcGVlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmxvYWRDb250ZW50T25GaXJzdFNsaWRlTG9hZChpbmRleCwgJGN1cnJlbnRTbGlkZSwgX3NwZWVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgdGhpcy5zZXR0aW5ncy5zdGFydEFuaW1hdGlvbkR1cmF0aW9uICsgMTAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTTGlkZSBjb250ZW50IGhhcyBiZWVuIGFkZGVkIHRvIGRvbVxyXG4gICAgICAgICRjdXJyZW50U2xpZGUuYWRkQ2xhc3MoJ2xnLWxvYWRlZCcpO1xyXG4gICAgICAgIGlmICghdGhpcy5pc0ZpcnN0U2xpZGVXaXRoWm9vbUFuaW1hdGlvbigpIHx8XHJcbiAgICAgICAgICAgICh0aGlzLmdldFNsaWRlVHlwZShjdXJyZW50R2FsbGVyeUl0ZW0pID09PSAndmlkZW8nICYmICFwb3N0ZXIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25MZ09iamVjdExvYWQoJGN1cnJlbnRTbGlkZSwgaW5kZXgsIGRlbGF5LCBfc3BlZWQsIGlzRmlyc3RTbGlkZSwgISEodmlkZW9JbmZvICYmIHZpZGVvSW5mby5odG1sNSAmJiAhcG9zdGVyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFdoZW4gZ2FsbGVyeSBpcyBvcGVuZWQgb25jZSBjb250ZW50IGlzIGxvYWRlZCAoc2Vjb25kIHRpbWUpIG5lZWQgdG8gYWRkIGxnLWNvbXBsZXRlIGNsYXNzIGZvciBjc3Mgc3R5bGluZ1xyXG4gICAgICAgIGlmICgoIXRoaXMuem9vbUZyb21PcmlnaW4gfHwgIXRoaXMuY3VycmVudEltYWdlU2l6ZSkgJiZcclxuICAgICAgICAgICAgJGN1cnJlbnRTbGlkZS5oYXNDbGFzcygnbGctY29tcGxldGVfJykgJiZcclxuICAgICAgICAgICAgIXRoaXMubEdhbGxlcnlPbikge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICRjdXJyZW50U2xpZGUuYWRkQ2xhc3MoJ2xnLWNvbXBsZXRlJyk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMuc2V0dGluZ3MuYmFja2Ryb3BEdXJhdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIENvbnRlbnQgbG9hZGVkXHJcbiAgICAgICAgLy8gTmVlZCB0byBzZXQgbEdhbGxlcnlPbiBiZWZvcmUgY2FsbGluZyBwcmVsb2FkIGZ1bmN0aW9uXHJcbiAgICAgICAgdGhpcy5sR2FsbGVyeU9uID0gdHJ1ZTtcclxuICAgICAgICBpZiAocmVjID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmICghJGN1cnJlbnRTbGlkZS5oYXNDbGFzcygnbGctY29tcGxldGVfJykpIHtcclxuICAgICAgICAgICAgICAgICRjdXJyZW50U2xpZGVcclxuICAgICAgICAgICAgICAgICAgICAuZmluZCgnLmxnLW9iamVjdCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpcnN0KClcclxuICAgICAgICAgICAgICAgICAgICAub24oJ2xvYWQubGcgZXJyb3IubGcnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucHJlbG9hZChpbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJlbG9hZChpbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzYyBSZW1vdmUgZHVtbXkgaW1hZ2UgY29udGVudCBhbmQgbG9hZCBuZXh0IHNsaWRlc1xyXG4gICAgICogQ2FsbGVkIG9ubHkgZm9yIHRoZSBmaXJzdCB0aW1lIGlmIHpvb21Gcm9tT3JpZ2luIGFuaW1hdGlvbiBpcyBlbmFibGVkXHJcbiAgICAgKiBAcGFyYW0gaW5kZXhcclxuICAgICAqIEBwYXJhbSAkY3VycmVudFNsaWRlXHJcbiAgICAgKiBAcGFyYW0gc3BlZWRcclxuICAgICAqL1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS5sb2FkQ29udGVudE9uRmlyc3RTbGlkZUxvYWQgPSBmdW5jdGlvbiAoaW5kZXgsICRjdXJyZW50U2xpZGUsIHNwZWVkKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJGN1cnJlbnRTbGlkZS5maW5kKCcubGctZHVtbXktaW1nJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICRjdXJyZW50U2xpZGUucmVtb3ZlQ2xhc3MoJ2xnLWZpcnN0LXNsaWRlJyk7XHJcbiAgICAgICAgICAgIF90aGlzLm91dGVyLnJlbW92ZUNsYXNzKCdsZy1maXJzdC1zbGlkZS1sb2FkaW5nJyk7XHJcbiAgICAgICAgICAgIF90aGlzLmlzRHVtbXlJbWFnZVJlbW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBfdGhpcy5wcmVsb2FkKGluZGV4KTtcclxuICAgICAgICB9LCBzcGVlZCArIDMwMCk7XHJcbiAgICB9O1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS5nZXRJdGVtc1RvQmVJbnNlcnRlZFRvRG9tID0gZnVuY3Rpb24gKGluZGV4LCBwcmV2SW5kZXgsIG51bWJlck9mSXRlbXMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmIChudW1iZXJPZkl0ZW1zID09PSB2b2lkIDApIHsgbnVtYmVyT2ZJdGVtcyA9IDA7IH1cclxuICAgICAgICB2YXIgaXRlbXNUb0JlSW5zZXJ0ZWRUb0RvbSA9IFtdO1xyXG4gICAgICAgIC8vIE1pbmltdW0gMiBpdGVtcyBzaG91bGQgYmUgdGhlcmVcclxuICAgICAgICB2YXIgcG9zc2libGVOdW1iZXJPZkl0ZW1zID0gTWF0aC5tYXgobnVtYmVyT2ZJdGVtcywgMyk7XHJcbiAgICAgICAgcG9zc2libGVOdW1iZXJPZkl0ZW1zID0gTWF0aC5taW4ocG9zc2libGVOdW1iZXJPZkl0ZW1zLCB0aGlzLmdhbGxlcnlJdGVtcy5sZW5ndGgpO1xyXG4gICAgICAgIHZhciBwcmV2SW5kZXhJdGVtID0gXCJsZy1pdGVtLVwiICsgdGhpcy5sZ0lkICsgXCItXCIgKyBwcmV2SW5kZXg7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FsbGVyeUl0ZW1zLmxlbmd0aCA8PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FsbGVyeUl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKF9lbGVtZW50LCBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbXNUb0JlSW5zZXJ0ZWRUb0RvbS5wdXNoKFwibGctaXRlbS1cIiArIF90aGlzLmxnSWQgKyBcIi1cIiArIGluZGV4KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtc1RvQmVJbnNlcnRlZFRvRG9tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaW5kZXggPCAodGhpcy5nYWxsZXJ5SXRlbXMubGVuZ3RoIC0gMSkgLyAyKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGlkeCA9IGluZGV4OyBpZHggPiBpbmRleCAtIHBvc3NpYmxlTnVtYmVyT2ZJdGVtcyAvIDIgJiYgaWR4ID49IDA7IGlkeC0tKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtc1RvQmVJbnNlcnRlZFRvRG9tLnB1c2goXCJsZy1pdGVtLVwiICsgdGhpcy5sZ0lkICsgXCItXCIgKyBpZHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBudW1iZXJPZkV4aXN0aW5nSXRlbXMgPSBpdGVtc1RvQmVJbnNlcnRlZFRvRG9tLmxlbmd0aDtcclxuICAgICAgICAgICAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwgcG9zc2libGVOdW1iZXJPZkl0ZW1zIC0gbnVtYmVyT2ZFeGlzdGluZ0l0ZW1zOyBpZHgrKykge1xyXG4gICAgICAgICAgICAgICAgaXRlbXNUb0JlSW5zZXJ0ZWRUb0RvbS5wdXNoKFwibGctaXRlbS1cIiArIHRoaXMubGdJZCArIFwiLVwiICsgKGluZGV4ICsgaWR4ICsgMSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpZHggPSBpbmRleDsgaWR4IDw9IHRoaXMuZ2FsbGVyeUl0ZW1zLmxlbmd0aCAtIDEgJiZcclxuICAgICAgICAgICAgICAgIGlkeCA8IGluZGV4ICsgcG9zc2libGVOdW1iZXJPZkl0ZW1zIC8gMjsgaWR4KyspIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zVG9CZUluc2VydGVkVG9Eb20ucHVzaChcImxnLWl0ZW0tXCIgKyB0aGlzLmxnSWQgKyBcIi1cIiArIGlkeCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIG51bWJlck9mRXhpc3RpbmdJdGVtcyA9IGl0ZW1zVG9CZUluc2VydGVkVG9Eb20ubGVuZ3RoO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBwb3NzaWJsZU51bWJlck9mSXRlbXMgLSBudW1iZXJPZkV4aXN0aW5nSXRlbXM7IGlkeCsrKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtc1RvQmVJbnNlcnRlZFRvRG9tLnB1c2goXCJsZy1pdGVtLVwiICsgdGhpcy5sZ0lkICsgXCItXCIgKyAoaW5kZXggLSBpZHggLSAxKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MubG9vcCkge1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IHRoaXMuZ2FsbGVyeUl0ZW1zLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zVG9CZUluc2VydGVkVG9Eb20ucHVzaChcImxnLWl0ZW0tXCIgKyB0aGlzLmxnSWQgKyBcIi1cIiArIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtc1RvQmVJbnNlcnRlZFRvRG9tLnB1c2goXCJsZy1pdGVtLVwiICsgdGhpcy5sZ0lkICsgXCItXCIgKyAodGhpcy5nYWxsZXJ5SXRlbXMubGVuZ3RoIC0gMSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpdGVtc1RvQmVJbnNlcnRlZFRvRG9tLmluZGV4T2YocHJldkluZGV4SXRlbSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIGl0ZW1zVG9CZUluc2VydGVkVG9Eb20ucHVzaChcImxnLWl0ZW0tXCIgKyB0aGlzLmxnSWQgKyBcIi1cIiArIHByZXZJbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpdGVtc1RvQmVJbnNlcnRlZFRvRG9tO1xyXG4gICAgfTtcclxuICAgIExpZ2h0R2FsbGVyeS5wcm90b3R5cGUub3JnYW5pemVTbGlkZUl0ZW1zID0gZnVuY3Rpb24gKGluZGV4LCBwcmV2SW5kZXgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBpdGVtc1RvQmVJbnNlcnRlZFRvRG9tID0gdGhpcy5nZXRJdGVtc1RvQmVJbnNlcnRlZFRvRG9tKGluZGV4LCBwcmV2SW5kZXgsIHRoaXMuc2V0dGluZ3MubnVtYmVyT2ZTbGlkZUl0ZW1zSW5Eb20pO1xyXG4gICAgICAgIGl0ZW1zVG9CZUluc2VydGVkVG9Eb20uZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuY3VycmVudEl0ZW1zSW5Eb20uaW5kZXhPZihpdGVtKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLiRpbm5lci5hcHBlbmQoXCI8ZGl2IGlkPVxcXCJcIiArIGl0ZW0gKyBcIlxcXCIgY2xhc3M9XFxcImxnLWl0ZW1cXFwiPjwvZGl2PlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEl0ZW1zSW5Eb20uZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICBpZiAoaXRlbXNUb0JlSW5zZXJ0ZWRUb0RvbS5pbmRleE9mKGl0ZW0pID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgJExHKFwiI1wiICsgaXRlbSkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gaXRlbXNUb0JlSW5zZXJ0ZWRUb0RvbTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEdldCBwcmV2aW91cyBpbmRleCBvZiB0aGUgc2xpZGVcclxuICAgICAqL1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS5nZXRQcmV2aW91c1NsaWRlSW5kZXggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHByZXZJbmRleCA9IDA7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRJdGVtSWQgPSB0aGlzLm91dGVyXHJcbiAgICAgICAgICAgICAgICAuZmluZCgnLmxnLWN1cnJlbnQnKVxyXG4gICAgICAgICAgICAgICAgLmZpcnN0KClcclxuICAgICAgICAgICAgICAgIC5hdHRyKCdpZCcpO1xyXG4gICAgICAgICAgICBwcmV2SW5kZXggPSBwYXJzZUludChjdXJyZW50SXRlbUlkLnNwbGl0KCctJylbM10pIHx8IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBwcmV2SW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcHJldkluZGV4O1xyXG4gICAgfTtcclxuICAgIExpZ2h0R2FsbGVyeS5wcm90b3R5cGUuc2V0RG93bmxvYWRWYWx1ZSA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmRvd25sb2FkKSB7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50R2FsbGVyeUl0ZW0gPSB0aGlzLmdhbGxlcnlJdGVtc1tpbmRleF07XHJcbiAgICAgICAgICAgIHZhciBoaWRlRG93bmxvYWRCdG4gPSBjdXJyZW50R2FsbGVyeUl0ZW0uZG93bmxvYWRVcmwgPT09IGZhbHNlIHx8XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50R2FsbGVyeUl0ZW0uZG93bmxvYWRVcmwgPT09ICdmYWxzZSc7XHJcbiAgICAgICAgICAgIGlmIChoaWRlRG93bmxvYWRCdG4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3V0ZXIuYWRkQ2xhc3MoJ2xnLWhpZGUtZG93bmxvYWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciAkZG93bmxvYWQgPSB0aGlzLmdldEVsZW1lbnRCeUlkKCdsZy1kb3dubG9hZCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdXRlci5yZW1vdmVDbGFzcygnbGctaGlkZS1kb3dubG9hZCcpO1xyXG4gICAgICAgICAgICAgICAgJGRvd25sb2FkLmF0dHIoJ2hyZWYnLCBjdXJyZW50R2FsbGVyeUl0ZW0uZG93bmxvYWRVcmwgfHxcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50R2FsbGVyeUl0ZW0uc3JjKTtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50R2FsbGVyeUl0ZW0uZG93bmxvYWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAkZG93bmxvYWQuYXR0cignZG93bmxvYWQnLCBjdXJyZW50R2FsbGVyeUl0ZW0uZG93bmxvYWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIExpZ2h0R2FsbGVyeS5wcm90b3R5cGUubWFrZVNsaWRlQW5pbWF0aW9uID0gZnVuY3Rpb24gKGRpcmVjdGlvbiwgY3VycmVudFNsaWRlSXRlbSwgcHJldmlvdXNTbGlkZUl0ZW0pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmICh0aGlzLmxHYWxsZXJ5T24pIHtcclxuICAgICAgICAgICAgcHJldmlvdXNTbGlkZUl0ZW0uYWRkQ2xhc3MoJ2xnLXNsaWRlLXByb2dyZXNzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyByZW1vdmUgYWxsIHRyYW5zaXRpb25zXHJcbiAgICAgICAgICAgIF90aGlzLm91dGVyLmFkZENsYXNzKCdsZy1uby10cmFucycpO1xyXG4gICAgICAgICAgICBfdGhpcy5vdXRlclxyXG4gICAgICAgICAgICAgICAgLmZpbmQoJy5sZy1pdGVtJylcclxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnbGctcHJldi1zbGlkZSBsZy1uZXh0LXNsaWRlJyk7XHJcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdwcmV2Jykge1xyXG4gICAgICAgICAgICAgICAgLy9wcmV2c2xpZGVcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZUl0ZW0uYWRkQ2xhc3MoJ2xnLXByZXYtc2xpZGUnKTtcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzU2xpZGVJdGVtLmFkZENsYXNzKCdsZy1uZXh0LXNsaWRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBuZXh0IHNsaWRlXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGVJdGVtLmFkZENsYXNzKCdsZy1uZXh0LXNsaWRlJyk7XHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c1NsaWRlSXRlbS5hZGRDbGFzcygnbGctcHJldi1zbGlkZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGdpdmUgNTAgbXMgZm9yIGJyb3dzZXIgdG8gYWRkL3JlbW92ZSBjbGFzc1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLm91dGVyLmZpbmQoJy5sZy1pdGVtJykucmVtb3ZlQ2xhc3MoJ2xnLWN1cnJlbnQnKTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZUl0ZW0uYWRkQ2xhc3MoJ2xnLWN1cnJlbnQnKTtcclxuICAgICAgICAgICAgICAgIC8vIHJlc2V0IGFsbCB0cmFuc2l0aW9uc1xyXG4gICAgICAgICAgICAgICAgX3RoaXMub3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLW5vLXRyYW5zJyk7XHJcbiAgICAgICAgICAgIH0sIDUwKTtcclxuICAgICAgICB9LCB0aGlzLmxHYWxsZXJ5T24gPyB0aGlzLnNldHRpbmdzLnNsaWRlRGVsYXkgOiAwKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEdvdG8gYSBzcGVjaWZpYyBzbGlkZS5cclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleCAtIGluZGV4IG9mIHRoZSBzbGlkZVxyXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBmcm9tVG91Y2ggLSB0cnVlIGlmIHNsaWRlIGZ1bmN0aW9uIGNhbGxlZCB2aWEgdG91Y2ggZXZlbnQgb3IgbW91c2UgZHJhZ1xyXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBmcm9tVGh1bWIgLSB0cnVlIGlmIHNsaWRlIGZ1bmN0aW9uIGNhbGxlZCB2aWEgdGh1bWJuYWlsIGNsaWNrXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGlyZWN0aW9uIC0gRGlyZWN0aW9uIG9mIHRoZSBzbGlkZShuZXh0L3ByZXYpXHJcbiAgICAgKiBAY2F0ZWdvcnkgbEdQdWJsaWNNZXRob2RzXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogIGNvbnN0IHBsdWdpbiA9IGxpZ2h0R2FsbGVyeSgpO1xyXG4gICAgICogIC8vIHRvIGdvIHRvIDNyZCBzbGlkZVxyXG4gICAgICogIHBsdWdpbi5zbGlkZSgyKTtcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIExpZ2h0R2FsbGVyeS5wcm90b3R5cGUuc2xpZGUgPSBmdW5jdGlvbiAoaW5kZXgsIGZyb21Ub3VjaCwgZnJvbVRodW1iLCBkaXJlY3Rpb24pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBwcmV2SW5kZXggPSB0aGlzLmdldFByZXZpb3VzU2xpZGVJbmRleCgpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEl0ZW1zSW5Eb20gPSB0aGlzLm9yZ2FuaXplU2xpZGVJdGVtcyhpbmRleCwgcHJldkluZGV4KTtcclxuICAgICAgICAvLyBQcmV2ZW50IG11bHRpcGxlIGNhbGwsIFJlcXVpcmVkIGZvciBoc2ggcGx1Z2luXHJcbiAgICAgICAgaWYgKHRoaXMubEdhbGxlcnlPbiAmJiBwcmV2SW5kZXggPT09IGluZGV4KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG51bWJlck9mR2FsbGVyeUl0ZW1zID0gdGhpcy5nYWxsZXJ5SXRlbXMubGVuZ3RoO1xyXG4gICAgICAgIGlmICghdGhpcy5sZ0J1c3kpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuY291bnRlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50Q291bnRlcihpbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRTbGlkZUl0ZW0gPSB0aGlzLmdldFNsaWRlSXRlbShpbmRleCk7XHJcbiAgICAgICAgICAgIHZhciBwcmV2aW91c1NsaWRlSXRlbV8xID0gdGhpcy5nZXRTbGlkZUl0ZW0ocHJldkluZGV4KTtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRHYWxsZXJ5SXRlbSA9IHRoaXMuZ2FsbGVyeUl0ZW1zW2luZGV4XTtcclxuICAgICAgICAgICAgdmFyIHZpZGVvSW5mbyA9IGN1cnJlbnRHYWxsZXJ5SXRlbS5fX3NsaWRlVmlkZW9JbmZvO1xyXG4gICAgICAgICAgICB0aGlzLm91dGVyLmF0dHIoJ2RhdGEtbGctc2xpZGUtdHlwZScsIHRoaXMuZ2V0U2xpZGVUeXBlKGN1cnJlbnRHYWxsZXJ5SXRlbSkpO1xyXG4gICAgICAgICAgICB0aGlzLnNldERvd25sb2FkVmFsdWUoaW5kZXgpO1xyXG4gICAgICAgICAgICBpZiAodmlkZW9JbmZvKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2EgPSB0aGlzLm1lZGlhQ29udGFpbmVyUG9zaXRpb24sIHRvcF8zID0gX2EudG9wLCBib3R0b20gPSBfYS5ib3R0b207XHJcbiAgICAgICAgICAgICAgICB2YXIgdmlkZW9TaXplID0gdXRpbHMuZ2V0U2l6ZSh0aGlzLml0ZW1zW2luZGV4XSwgdGhpcy5vdXRlciwgdG9wXzMgKyBib3R0b20sIHZpZGVvSW5mbyAmJiB0aGlzLnNldHRpbmdzLnZpZGVvTWF4U2l6ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2l6ZVZpZGVvU2xpZGUoaW5kZXgsIHZpZGVvU2l6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5MR2VsLnRyaWdnZXIobEdFdmVudHMuYmVmb3JlU2xpZGUsIHtcclxuICAgICAgICAgICAgICAgIHByZXZJbmRleDogcHJldkluZGV4LFxyXG4gICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxyXG4gICAgICAgICAgICAgICAgZnJvbVRvdWNoOiAhIWZyb21Ub3VjaCxcclxuICAgICAgICAgICAgICAgIGZyb21UaHVtYjogISFmcm9tVGh1bWIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmxnQnVzeSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmhpZGVCYXJUaW1lb3V0KTtcclxuICAgICAgICAgICAgdGhpcy5hcnJvd0Rpc2FibGUoaW5kZXgpO1xyXG4gICAgICAgICAgICBpZiAoIWRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4IDwgcHJldkluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gJ3ByZXYnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaW5kZXggPiBwcmV2SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSAnbmV4dCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFmcm9tVG91Y2gpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFrZVNsaWRlQW5pbWF0aW9uKGRpcmVjdGlvbiwgY3VycmVudFNsaWRlSXRlbSwgcHJldmlvdXNTbGlkZUl0ZW1fMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm91dGVyXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbmQoJy5sZy1pdGVtJylcclxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2xnLXByZXYtc2xpZGUgbGctY3VycmVudCBsZy1uZXh0LXNsaWRlJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG91Y2hQcmV2ID0gdm9pZCAwO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRvdWNoTmV4dCA9IHZvaWQgMDtcclxuICAgICAgICAgICAgICAgIGlmIChudW1iZXJPZkdhbGxlcnlJdGVtcyA+IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3VjaFByZXYgPSBpbmRleCAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hOZXh0ID0gaW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCAmJiBwcmV2SW5kZXggPT09IG51bWJlck9mR2FsbGVyeUl0ZW1zIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBuZXh0IHNsaWRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoTmV4dCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoUHJldiA9IG51bWJlck9mR2FsbGVyeUl0ZW1zIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaW5kZXggPT09IG51bWJlck9mR2FsbGVyeUl0ZW1zIC0gMSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2SW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJldiBzbGlkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE5leHQgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaFByZXYgPSBudW1iZXJPZkdhbGxlcnlJdGVtcyAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hQcmV2ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0b3VjaE5leHQgPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ByZXYnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRTbGlkZUl0ZW0odG91Y2hOZXh0KS5hZGRDbGFzcygnbGctbmV4dC1zbGlkZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRTbGlkZUl0ZW0odG91Y2hQcmV2KS5hZGRDbGFzcygnbGctcHJldi1zbGlkZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlSXRlbS5hZGRDbGFzcygnbGctY3VycmVudCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIERvIG5vdCBwdXQgbG9hZCBjb250ZW50IGluIHNldCB0aW1lb3V0IGFzIGl0IG5lZWRzIHRvIGxvYWQgaW1tZWRpYXRlbHkgd2hlbiB0aGUgZ2FsbGVyeSBpcyBvcGVuZWRcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmxHYWxsZXJ5T24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZENvbnRlbnQoaW5kZXgsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubG9hZENvbnRlbnQoaW5kZXgsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCB0aXRsZSBpZiB0aGlzLnNldHRpbmdzLmFwcGVuZFN1Ykh0bWxUbyA9PT0gbGctc3ViLWh0bWxcclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuc2V0dGluZ3MuYXBwZW5kU3ViSHRtbFRvICE9PSAnLmxnLWl0ZW0nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmFkZEh0bWwoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIHRoaXMuc2V0dGluZ3Muc3BlZWQgKyA1MCArIChmcm9tVG91Y2ggPyAwIDogdGhpcy5zZXR0aW5ncy5zbGlkZURlbGF5KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5sZ0J1c3kgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzU2xpZGVJdGVtXzEucmVtb3ZlQ2xhc3MoJ2xnLXNsaWRlLXByb2dyZXNzJyk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5MR2VsLnRyaWdnZXIobEdFdmVudHMuYWZ0ZXJTbGlkZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZJbmRleDogcHJldkluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcclxuICAgICAgICAgICAgICAgICAgICBmcm9tVG91Y2g6IGZyb21Ub3VjaCxcclxuICAgICAgICAgICAgICAgICAgICBmcm9tVGh1bWI6IGZyb21UaHVtYixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LCAodGhpcy5sR2FsbGVyeU9uID8gdGhpcy5zZXR0aW5ncy5zcGVlZCArIDEwMCA6IDEwMCkgKyAoZnJvbVRvdWNoID8gMCA6IHRoaXMuc2V0dGluZ3Muc2xpZGVEZWxheSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XHJcbiAgICB9O1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS51cGRhdGVDdXJyZW50Q291bnRlciA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgIHRoaXMuZ2V0RWxlbWVudEJ5SWQoJ2xnLWNvdW50ZXItY3VycmVudCcpLmh0bWwoaW5kZXggKyAxICsgJycpO1xyXG4gICAgfTtcclxuICAgIExpZ2h0R2FsbGVyeS5wcm90b3R5cGUudXBkYXRlQ291bnRlclRvdGFsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZ2V0RWxlbWVudEJ5SWQoJ2xnLWNvdW50ZXItYWxsJykuaHRtbCh0aGlzLmdhbGxlcnlJdGVtcy5sZW5ndGggKyAnJyk7XHJcbiAgICB9O1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS5nZXRTbGlkZVR5cGUgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIGlmIChpdGVtLl9fc2xpZGVWaWRlb0luZm8pIHtcclxuICAgICAgICAgICAgcmV0dXJuICd2aWRlbyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGl0ZW0uaWZyYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnaWZyYW1lJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnaW1hZ2UnO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLnRvdWNoTW92ZSA9IGZ1bmN0aW9uIChzdGFydENvb3JkcywgZW5kQ29vcmRzLCBlKSB7XHJcbiAgICAgICAgdmFyIGRpc3RhbmNlWCA9IGVuZENvb3Jkcy5wYWdlWCAtIHN0YXJ0Q29vcmRzLnBhZ2VYO1xyXG4gICAgICAgIHZhciBkaXN0YW5jZVkgPSBlbmRDb29yZHMucGFnZVkgLSBzdGFydENvb3Jkcy5wYWdlWTtcclxuICAgICAgICB2YXIgYWxsb3dTd2lwZSA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLnN3aXBlRGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGFsbG93U3dpcGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGRpc3RhbmNlWCkgPiAxNSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zd2lwZURpcmVjdGlvbiA9ICdob3Jpem9udGFsJztcclxuICAgICAgICAgICAgICAgIGFsbG93U3dpcGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKE1hdGguYWJzKGRpc3RhbmNlWSkgPiAxNSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zd2lwZURpcmVjdGlvbiA9ICd2ZXJ0aWNhbCc7XHJcbiAgICAgICAgICAgICAgICBhbGxvd1N3aXBlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWFsbG93U3dpcGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgJGN1cnJlbnRTbGlkZSA9IHRoaXMuZ2V0U2xpZGVJdGVtKHRoaXMuaW5kZXgpO1xyXG4gICAgICAgIGlmICh0aGlzLnN3aXBlRGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgZSA9PT0gbnVsbCB8fCBlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIC8vIHJlc2V0IG9wYWNpdHkgYW5kIHRyYW5zaXRpb24gZHVyYXRpb25cclxuICAgICAgICAgICAgdGhpcy5vdXRlci5hZGRDbGFzcygnbGctZHJhZ2dpbmcnKTtcclxuICAgICAgICAgICAgLy8gbW92ZSBjdXJyZW50IHNsaWRlXHJcbiAgICAgICAgICAgIHRoaXMuc2V0VHJhbnNsYXRlKCRjdXJyZW50U2xpZGUsIGRpc3RhbmNlWCwgMCk7XHJcbiAgICAgICAgICAgIC8vIG1vdmUgbmV4dCBhbmQgcHJldiBzbGlkZSB3aXRoIGN1cnJlbnQgc2xpZGVcclxuICAgICAgICAgICAgdmFyIHdpZHRoID0gJGN1cnJlbnRTbGlkZS5nZXQoKS5vZmZzZXRXaWR0aDtcclxuICAgICAgICAgICAgdmFyIHNsaWRlV2lkdGhBbW91bnQgPSAod2lkdGggKiAxNSkgLyAxMDA7XHJcbiAgICAgICAgICAgIHZhciBndXR0ZXIgPSBzbGlkZVdpZHRoQW1vdW50IC0gTWF0aC5hYnMoKGRpc3RhbmNlWCAqIDEwKSAvIDEwMCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VHJhbnNsYXRlKHRoaXMub3V0ZXIuZmluZCgnLmxnLXByZXYtc2xpZGUnKS5maXJzdCgpLCAtd2lkdGggKyBkaXN0YW5jZVggLSBndXR0ZXIsIDApO1xyXG4gICAgICAgICAgICB0aGlzLnNldFRyYW5zbGF0ZSh0aGlzLm91dGVyLmZpbmQoJy5sZy1uZXh0LXNsaWRlJykuZmlyc3QoKSwgd2lkdGggKyBkaXN0YW5jZVggKyBndXR0ZXIsIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN3aXBlRGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzLnN3aXBlVG9DbG9zZSkge1xyXG4gICAgICAgICAgICAgICAgZSA9PT0gbnVsbCB8fCBlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRjb250YWluZXIuYWRkQ2xhc3MoJ2xnLWRyYWdnaW5nLXZlcnRpY2FsJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3BhY2l0eSA9IDEgLSBNYXRoLmFicyhkaXN0YW5jZVkpIC8gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kYmFja2Ryb3AuY3NzKCdvcGFjaXR5Jywgb3BhY2l0eSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2NhbGUgPSAxIC0gTWF0aC5hYnMoZGlzdGFuY2VZKSAvICh3aW5kb3cuaW5uZXJXaWR0aCAqIDIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUcmFuc2xhdGUoJGN1cnJlbnRTbGlkZSwgMCwgZGlzdGFuY2VZLCBzY2FsZSwgc2NhbGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGRpc3RhbmNlWSkgPiAxMDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm91dGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnbGctaGlkZS1pdGVtcycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnbGctY29tcG9uZW50cy1vcGVuJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS50b3VjaEVuZCA9IGZ1bmN0aW9uIChlbmRDb29yZHMsIHN0YXJ0Q29vcmRzLCBldmVudCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGRpc3RhbmNlO1xyXG4gICAgICAgIC8vIGtlZXAgc2xpZGUgYW5pbWF0aW9uIGZvciBhbnkgbW9kZSB3aGlsZSBkcmFnZy9zd2lwZVxyXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLm1vZGUgIT09ICdsZy1zbGlkZScpIHtcclxuICAgICAgICAgICAgdGhpcy5vdXRlci5hZGRDbGFzcygnbGctc2xpZGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc2V0IHRyYW5zaXRpb24gZHVyYXRpb25cclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuJGNvbnRhaW5lci5yZW1vdmVDbGFzcygnbGctZHJhZ2dpbmctdmVydGljYWwnKTtcclxuICAgICAgICAgICAgX3RoaXMub3V0ZXJcclxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnbGctZHJhZ2dpbmcgbGctaGlkZS1pdGVtcycpXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2xnLWNvbXBvbmVudHMtb3BlbicpO1xyXG4gICAgICAgICAgICB2YXIgdHJpZ2dlckNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKF90aGlzLnN3aXBlRGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gZW5kQ29vcmRzLnBhZ2VYIC0gc3RhcnRDb29yZHMucGFnZVg7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGlzdGFuY2VBYnMgPSBNYXRoLmFicyhlbmRDb29yZHMucGFnZVggLSBzdGFydENvb3Jkcy5wYWdlWCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2VBYnMgPiBfdGhpcy5zZXR0aW5ncy5zd2lwZVRocmVzaG9sZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmdvVG9OZXh0U2xpZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkaXN0YW5jZSA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZUFicyA+IF90aGlzLnNldHRpbmdzLnN3aXBlVGhyZXNob2xkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZ29Ub1ByZXZTbGlkZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyQ2xpY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChfdGhpcy5zd2lwZURpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBNYXRoLmFicyhlbmRDb29yZHMucGFnZVkgLSBzdGFydENvb3Jkcy5wYWdlWSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuc2V0dGluZ3MuY2xvc2FibGUgJiZcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXR0aW5ncy5zd2lwZVRvQ2xvc2UgJiZcclxuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA+IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNsb3NlR2FsbGVyeSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLiRiYWNrZHJvcC5jc3MoJ29wYWNpdHknLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy5vdXRlci5maW5kKCcubGctaXRlbScpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAgICAgICAgIGlmICh0cmlnZ2VyQ2xpY2sgJiZcclxuICAgICAgICAgICAgICAgIE1hdGguYWJzKGVuZENvb3Jkcy5wYWdlWCAtIHN0YXJ0Q29vcmRzLnBhZ2VYKSA8IDUpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRyaWdnZXIgY2xpY2sgaWYgZGlzdGFuY2UgaXMgbGVzcyB0aGFuIDUgcGl4XHJcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gJExHKGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuaXNQb3N0ZXJFbGVtZW50KHRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5MR2VsLnRyaWdnZXIobEdFdmVudHMucG9zdGVyQ2xpY2spO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLnN3aXBlRGlyZWN0aW9uID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIHJlbW92ZSBzbGlkZSBjbGFzcyBvbmNlIGRyYWcvc3dpcGUgaXMgY29tcGxldGVkIGlmIG1vZGUgaXMgbm90IHNsaWRlXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghX3RoaXMub3V0ZXIuaGFzQ2xhc3MoJ2xnLWRyYWdnaW5nJykgJiZcclxuICAgICAgICAgICAgICAgIF90aGlzLnNldHRpbmdzLm1vZGUgIT09ICdsZy1zbGlkZScpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLm91dGVyLnJlbW92ZUNsYXNzKCdsZy1zbGlkZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcy5zZXR0aW5ncy5zcGVlZCArIDEwMCk7XHJcbiAgICB9O1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS5lbmFibGVTd2lwZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBzdGFydENvb3JkcyA9IHt9O1xyXG4gICAgICAgIHZhciBlbmRDb29yZHMgPSB7fTtcclxuICAgICAgICB2YXIgaXNNb3ZlZCA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBpc1N3aXBpbmcgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5lbmFibGVTd2lwZSkge1xyXG4gICAgICAgICAgICB0aGlzLiRpbm5lci5vbigndG91Y2hzdGFydC5sZycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5kcmFnT3JTd2lwZUVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdmFyICRpdGVtID0gX3RoaXMuZ2V0U2xpZGVJdGVtKF90aGlzLmluZGV4KTtcclxuICAgICAgICAgICAgICAgIGlmICgoJExHKGUudGFyZ2V0KS5oYXNDbGFzcygnbGctaXRlbScpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgJGl0ZW0uZ2V0KCkuY29udGFpbnMoZS50YXJnZXQpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICFfdGhpcy5vdXRlci5oYXNDbGFzcygnbGctem9vbWVkJykgJiZcclxuICAgICAgICAgICAgICAgICAgICAhX3RoaXMubGdCdXN5ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzU3dpcGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudG91Y2hBY3Rpb24gPSAnc3dpcGUnO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm1hbmFnZVN3aXBlQ2xhc3MoKTtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydENvb3JkcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVg6IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVk6IGUudGFyZ2V0VG91Y2hlc1swXS5wYWdlWSxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy4kaW5uZXIub24oJ3RvdWNobW92ZS5sZycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNTd2lwaW5nICYmXHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudG91Y2hBY3Rpb24gPT09ICdzd2lwZScgJiZcclxuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldFRvdWNoZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kQ29vcmRzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlWDogZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlWTogZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZLFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudG91Y2hNb3ZlKHN0YXJ0Q29vcmRzLCBlbmRDb29yZHMsIGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzTW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy4kaW5uZXIub24oJ3RvdWNoZW5kLmxnJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMudG91Y2hBY3Rpb24gPT09ICdzd2lwZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNNb3ZlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc01vdmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnRvdWNoRW5kKGVuZENvb3Jkcywgc3RhcnRDb29yZHMsIGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNTd2lwaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkTEcoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmlzUG9zdGVyRWxlbWVudCh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5MR2VsLnRyaWdnZXIobEdFdmVudHMucG9zdGVyQ2xpY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnRvdWNoQWN0aW9uID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzU3dpcGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS5lbmFibGVEcmFnID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHN0YXJ0Q29vcmRzID0ge307XHJcbiAgICAgICAgdmFyIGVuZENvb3JkcyA9IHt9O1xyXG4gICAgICAgIHZhciBpc0RyYWdpbmcgPSBmYWxzZTtcclxuICAgICAgICB2YXIgaXNNb3ZlZCA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmVuYWJsZURyYWcpIHtcclxuICAgICAgICAgICAgdGhpcy5vdXRlci5vbignbW91c2Vkb3duLmxnJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmRyYWdPclN3aXBlRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB2YXIgJGl0ZW0gPSBfdGhpcy5nZXRTbGlkZUl0ZW0oX3RoaXMuaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCRMRyhlLnRhcmdldCkuaGFzQ2xhc3MoJ2xnLWl0ZW0nKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICRpdGVtLmdldCgpLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghX3RoaXMub3V0ZXIuaGFzQ2xhc3MoJ2xnLXpvb21lZCcpICYmICFfdGhpcy5sZ0J1c3kpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIV90aGlzLmxnQnVzeSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMubWFuYWdlU3dpcGVDbGFzcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRDb29yZHMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVg6IGUucGFnZVgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVk6IGUucGFnZVksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEcmFnaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICoqIEZpeCBmb3Igd2Via2l0IGN1cnNvciBpc3N1ZSBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MjY3MjNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLm91dGVyLmdldCgpLnNjcm9sbExlZnQgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLm91dGVyLmdldCgpLnNjcm9sbExlZnQgLT0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLm91dGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdsZy1ncmFiJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2xnLWdyYWJiaW5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5MR2VsLnRyaWdnZXIobEdFdmVudHMuZHJhZ1N0YXJ0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICRMRyh3aW5kb3cpLm9uKFwibW91c2Vtb3ZlLmxnLmdsb2JhbFwiICsgdGhpcy5sZ0lkLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzRHJhZ2luZyAmJiBfdGhpcy5sZ09wZW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzTW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZENvb3JkcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVg6IGUucGFnZVgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VZOiBlLnBhZ2VZLFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudG91Y2hNb3ZlKHN0YXJ0Q29vcmRzLCBlbmRDb29yZHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLkxHZWwudHJpZ2dlcihsR0V2ZW50cy5kcmFnTW92ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkTEcod2luZG93KS5vbihcIm1vdXNldXAubGcuZ2xvYmFsXCIgKyB0aGlzLmxnSWQsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5sZ09wZW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkTEcoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIGlmIChpc01vdmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNNb3ZlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnRvdWNoRW5kKGVuZENvb3Jkcywgc3RhcnRDb29yZHMsIGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5MR2VsLnRyaWdnZXIobEdFdmVudHMuZHJhZ0VuZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChfdGhpcy5pc1Bvc3RlckVsZW1lbnQodGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLkxHZWwudHJpZ2dlcihsR0V2ZW50cy5wb3N0ZXJDbGljayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBQcmV2ZW50IGV4ZWN1dGlvbiBvbiBjbGlja1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzRHJhZ2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzRHJhZ2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm91dGVyLnJlbW92ZUNsYXNzKCdsZy1ncmFiYmluZycpLmFkZENsYXNzKCdsZy1ncmFiJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLnRyaWdnZXJQb3N0ZXJDbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuJGlubmVyLm9uKCdjbGljay5sZycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBpZiAoIV90aGlzLmRyYWdPclN3aXBlRW5hYmxlZCAmJlxyXG4gICAgICAgICAgICAgICAgX3RoaXMuaXNQb3N0ZXJFbGVtZW50KCRMRyhldmVudC50YXJnZXQpKSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuTEdlbC50cmlnZ2VyKGxHRXZlbnRzLnBvc3RlckNsaWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIExpZ2h0R2FsbGVyeS5wcm90b3R5cGUubWFuYWdlU3dpcGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RvdWNoTmV4dCA9IHRoaXMuaW5kZXggKyAxO1xyXG4gICAgICAgIHZhciBfdG91Y2hQcmV2ID0gdGhpcy5pbmRleCAtIDE7XHJcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MubG9vcCAmJiB0aGlzLmdhbGxlcnlJdGVtcy5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBfdG91Y2hQcmV2ID0gdGhpcy5nYWxsZXJ5SXRlbXMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmluZGV4ID09PSB0aGlzLmdhbGxlcnlJdGVtcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICBfdG91Y2hOZXh0ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm91dGVyLmZpbmQoJy5sZy1pdGVtJykucmVtb3ZlQ2xhc3MoJ2xnLW5leHQtc2xpZGUgbGctcHJldi1zbGlkZScpO1xyXG4gICAgICAgIGlmIChfdG91Y2hQcmV2ID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRTbGlkZUl0ZW0oX3RvdWNoUHJldikuYWRkQ2xhc3MoJ2xnLXByZXYtc2xpZGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nZXRTbGlkZUl0ZW0oX3RvdWNoTmV4dCkuYWRkQ2xhc3MoJ2xnLW5leHQtc2xpZGUnKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEdvIHRvIG5leHQgc2xpZGVcclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gZnJvbVRvdWNoIC0gdHJ1ZSBpZiBzbGlkZSBmdW5jdGlvbiBjYWxsZWQgdmlhIHRvdWNoIGV2ZW50XHJcbiAgICAgKiBAY2F0ZWdvcnkgbEdQdWJsaWNNZXRob2RzXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogIGNvbnN0IHBsdWdpbiA9IGxpZ2h0R2FsbGVyeSgpO1xyXG4gICAgICogIHBsdWdpbi5nb1RvTmV4dFNsaWRlKCk7XHJcbiAgICAgKiBAc2VlIDxhIGhyZWY9XCIvZGVtb3MvbWV0aG9kcy9cIj5EZW1vPC9hPlxyXG4gICAgICovXHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLmdvVG9OZXh0U2xpZGUgPSBmdW5jdGlvbiAoZnJvbVRvdWNoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgX2xvb3AgPSB0aGlzLnNldHRpbmdzLmxvb3A7XHJcbiAgICAgICAgaWYgKGZyb21Ub3VjaCAmJiB0aGlzLmdhbGxlcnlJdGVtcy5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgICAgIF9sb29wID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5sZ0J1c3kpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaW5kZXggKyAxIDwgdGhpcy5nYWxsZXJ5SXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkxHZWwudHJpZ2dlcihsR0V2ZW50cy5iZWZvcmVOZXh0U2xpZGUsIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleDogdGhpcy5pbmRleCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZSh0aGlzLmluZGV4LCAhIWZyb21Ub3VjaCwgZmFsc2UsICduZXh0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX2xvb3ApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkxHZWwudHJpZ2dlcihsR0V2ZW50cy5iZWZvcmVOZXh0U2xpZGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zbGlkZSh0aGlzLmluZGV4LCAhIWZyb21Ub3VjaCwgZmFsc2UsICduZXh0Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNldHRpbmdzLnNsaWRlRW5kQW5pbWF0aW9uICYmICFmcm9tVG91Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm91dGVyLmFkZENsYXNzKCdsZy1yaWdodC1lbmQnKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMub3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLXJpZ2h0LWVuZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDQwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBHbyB0byBwcmV2aW91cyBzbGlkZXNcclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gZnJvbVRvdWNoIC0gdHJ1ZSBpZiBzbGlkZSBmdW5jdGlvbiBjYWxsZWQgdmlhIHRvdWNoIGV2ZW50XHJcbiAgICAgKiBAY2F0ZWdvcnkgbEdQdWJsaWNNZXRob2RzXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogIGNvbnN0IHBsdWdpbiA9IGxpZ2h0R2FsbGVyeSh7fSk7XHJcbiAgICAgKiAgcGx1Z2luLmdvVG9QcmV2U2xpZGUoKTtcclxuICAgICAqIEBzZWUgPGEgaHJlZj1cIi9kZW1vcy9tZXRob2RzL1wiPkRlbW88L2E+XHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLmdvVG9QcmV2U2xpZGUgPSBmdW5jdGlvbiAoZnJvbVRvdWNoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgX2xvb3AgPSB0aGlzLnNldHRpbmdzLmxvb3A7XHJcbiAgICAgICAgaWYgKGZyb21Ub3VjaCAmJiB0aGlzLmdhbGxlcnlJdGVtcy5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgICAgIF9sb29wID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5sZ0J1c3kpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4LS07XHJcbiAgICAgICAgICAgICAgICB0aGlzLkxHZWwudHJpZ2dlcihsR0V2ZW50cy5iZWZvcmVQcmV2U2xpZGUsIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleDogdGhpcy5pbmRleCxcclxuICAgICAgICAgICAgICAgICAgICBmcm9tVG91Y2g6IGZyb21Ub3VjaCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZSh0aGlzLmluZGV4LCAhIWZyb21Ub3VjaCwgZmFsc2UsICdwcmV2Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX2xvb3ApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4ID0gdGhpcy5nYWxsZXJ5SXRlbXMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkxHZWwudHJpZ2dlcihsR0V2ZW50cy5iZWZvcmVQcmV2U2xpZGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb21Ub3VjaDogZnJvbVRvdWNoLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2xpZGUodGhpcy5pbmRleCwgISFmcm9tVG91Y2gsIGZhbHNlLCAncHJldicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5zZXR0aW5ncy5zbGlkZUVuZEFuaW1hdGlvbiAmJiAhZnJvbVRvdWNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdXRlci5hZGRDbGFzcygnbGctbGVmdC1lbmQnKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMub3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLWxlZnQtZW5kJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLmtleVByZXNzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgJExHKHdpbmRvdykub24oXCJrZXlkb3duLmxnLmdsb2JhbFwiICsgdGhpcy5sZ0lkLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMubGdPcGVuZWQgJiZcclxuICAgICAgICAgICAgICAgIF90aGlzLnNldHRpbmdzLmVzY0tleSA9PT0gdHJ1ZSAmJlxyXG4gICAgICAgICAgICAgICAgZS5rZXlDb2RlID09PSAyNykge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLnNldHRpbmdzLmFsbG93TWVkaWFPdmVybGFwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMub3V0ZXIuaGFzQ2xhc3MoJ2xnLWNhbi10b2dnbGUnKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm91dGVyLmhhc0NsYXNzKCdsZy1jb21wb25lbnRzLW9wZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm91dGVyLnJlbW92ZUNsYXNzKCdsZy1jb21wb25lbnRzLW9wZW4nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNsb3NlR2FsbGVyeSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5sZ09wZW5lZCAmJiBfdGhpcy5nYWxsZXJ5SXRlbXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzcpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZ29Ub1ByZXZTbGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzkpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZ29Ub05leHRTbGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS5hcnJvdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuZ2V0RWxlbWVudEJ5SWQoJ2xnLXByZXYnKS5vbignY2xpY2subGcnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmdvVG9QcmV2U2xpZGUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmdldEVsZW1lbnRCeUlkKCdsZy1uZXh0Jykub24oJ2NsaWNrLmxnJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5nb1RvTmV4dFNsaWRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS5hcnJvd0Rpc2FibGUgPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICAvLyBEaXNhYmxlIGFycm93cyBpZiBzZXR0aW5ncy5oaWRlQ29udHJvbE9uRW5kIGlzIHRydWVcclxuICAgICAgICBpZiAoIXRoaXMuc2V0dGluZ3MubG9vcCAmJiB0aGlzLnNldHRpbmdzLmhpZGVDb250cm9sT25FbmQpIHtcclxuICAgICAgICAgICAgdmFyICRwcmV2ID0gdGhpcy5nZXRFbGVtZW50QnlJZCgnbGctcHJldicpO1xyXG4gICAgICAgICAgICB2YXIgJG5leHQgPSB0aGlzLmdldEVsZW1lbnRCeUlkKCdsZy1uZXh0Jyk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCArIDEgPT09IHRoaXMuZ2FsbGVyeUl0ZW1zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgJG5leHQuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRuZXh0LnJlbW92ZUF0dHIoJ2Rpc2FibGVkJykucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAkcHJldi5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJHByZXYucmVtb3ZlQXR0cignZGlzYWJsZWQnKS5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLnNldFRyYW5zbGF0ZSA9IGZ1bmN0aW9uICgkZWwsIHhWYWx1ZSwgeVZhbHVlLCBzY2FsZVgsIHNjYWxlWSkge1xyXG4gICAgICAgIGlmIChzY2FsZVggPT09IHZvaWQgMCkgeyBzY2FsZVggPSAxOyB9XHJcbiAgICAgICAgaWYgKHNjYWxlWSA9PT0gdm9pZCAwKSB7IHNjYWxlWSA9IDE7IH1cclxuICAgICAgICAkZWwuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlM2QoJyArXHJcbiAgICAgICAgICAgIHhWYWx1ZSArXHJcbiAgICAgICAgICAgICdweCwgJyArXHJcbiAgICAgICAgICAgIHlWYWx1ZSArXHJcbiAgICAgICAgICAgICdweCwgMHB4KSBzY2FsZTNkKCcgK1xyXG4gICAgICAgICAgICBzY2FsZVggK1xyXG4gICAgICAgICAgICAnLCAnICtcclxuICAgICAgICAgICAgc2NhbGVZICtcclxuICAgICAgICAgICAgJywgMSknKTtcclxuICAgIH07XHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLm1vdXNld2hlZWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgbGFzdENhbGwgPSAwO1xyXG4gICAgICAgIHRoaXMub3V0ZXIub24oJ3doZWVsLmxnJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKCFlLmRlbHRhWSB8fCBfdGhpcy5nYWxsZXJ5SXRlbXMubGVuZ3RoIDwgMikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICBpZiAobm93IC0gbGFzdENhbGwgPCAxMDAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGFzdENhbGwgPSBub3c7XHJcbiAgICAgICAgICAgIGlmIChlLmRlbHRhWSA+IDApIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmdvVG9OZXh0U2xpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChlLmRlbHRhWSA8IDApIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmdvVG9QcmV2U2xpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIExpZ2h0R2FsbGVyeS5wcm90b3R5cGUuaXNTbGlkZUVsZW1lbnQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgcmV0dXJuICh0YXJnZXQuaGFzQ2xhc3MoJ2xnLW91dGVyJykgfHxcclxuICAgICAgICAgICAgdGFyZ2V0Lmhhc0NsYXNzKCdsZy1pdGVtJykgfHxcclxuICAgICAgICAgICAgdGFyZ2V0Lmhhc0NsYXNzKCdsZy1pbWctd3JhcCcpKTtcclxuICAgIH07XHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLmlzUG9zdGVyRWxlbWVudCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICB2YXIgcGxheUJ1dHRvbiA9IHRoaXMuZ2V0U2xpZGVJdGVtKHRoaXMuaW5kZXgpXHJcbiAgICAgICAgICAgIC5maW5kKCcubGctdmlkZW8tcGxheS1idXR0b24nKVxyXG4gICAgICAgICAgICAuZ2V0KCk7XHJcbiAgICAgICAgcmV0dXJuICh0YXJnZXQuaGFzQ2xhc3MoJ2xnLXZpZGVvLXBvc3RlcicpIHx8XHJcbiAgICAgICAgICAgIHRhcmdldC5oYXNDbGFzcygnbGctdmlkZW8tcGxheS1idXR0b24nKSB8fFxyXG4gICAgICAgICAgICAocGxheUJ1dHRvbiAmJiBwbGF5QnV0dG9uLmNvbnRhaW5zKHRhcmdldC5nZXQoKSkpKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIE1heGltaXplIG1pbmltaXplIGlubGluZSBnYWxsZXJ5LlxyXG4gICAgICogQGNhdGVnb3J5IGxHUHVibGljTWV0aG9kc1xyXG4gICAgICovXHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLnRvZ2dsZU1heGltaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5nZXRFbGVtZW50QnlJZCgnbGctbWF4aW1pemUnKS5vbignY2xpY2subGcnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLiRjb250YWluZXIudG9nZ2xlQ2xhc3MoJ2xnLWlubGluZScpO1xyXG4gICAgICAgICAgICBfdGhpcy5yZWZyZXNoT25SZXNpemUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLmludmFsaWRhdGVJdGVtcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5pdGVtcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLml0ZW1zW2luZGV4XTtcclxuICAgICAgICAgICAgdmFyICRlbGVtZW50ID0gJExHKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAkZWxlbWVudC5vZmYoXCJjbGljay5sZ2N1c3RvbS1pdGVtLVwiICsgJGVsZW1lbnQuYXR0cignZGF0YS1sZy1pZCcpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS5tYW5hZ2VDbG9zZUdhbGxlcnkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAoIXRoaXMuc2V0dGluZ3MuY2xvc2FibGUpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB2YXIgbW91c2Vkb3duID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5nZXRFbGVtZW50QnlJZCgnbGctY2xvc2UnKS5vbignY2xpY2subGcnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmNsb3NlR2FsbGVyeSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmNsb3NlT25UYXApIHtcclxuICAgICAgICAgICAgLy8gSWYgeW91IGRyYWcgdGhlIHNsaWRlIGFuZCByZWxlYXNlIG91dHNpZGUgZ2FsbGVyeSBnZXRzIGNsb3NlIG9uIGNocm9tZVxyXG4gICAgICAgICAgICAvLyBmb3IgcHJldmVudGluZyB0aGlzIGNoZWNrIG1vdXNlZG93biBhbmQgbW91c2V1cCBoYXBwZW5lZCBvbiAubGctaXRlbSBvciBsZy1vdXRlclxyXG4gICAgICAgICAgICB0aGlzLm91dGVyLm9uKCdtb3VzZWRvd24ubGcnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9ICRMRyhlLnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuaXNTbGlkZUVsZW1lbnQodGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vdXNlZG93biA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBtb3VzZWRvd24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMub3V0ZXIub24oJ21vdXNlbW92ZS5sZycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIG1vdXNlZG93biA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5vdXRlci5vbignbW91c2V1cC5sZycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gJExHKGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5pc1NsaWRlRWxlbWVudCh0YXJnZXQpICYmIG1vdXNlZG93bikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghX3RoaXMub3V0ZXIuaGFzQ2xhc3MoJ2xnLWRyYWdnaW5nJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2xvc2VHYWxsZXJ5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDbG9zZSBsaWdodEdhbGxlcnkgaWYgaXQgaXMgb3BlbmVkLlxyXG4gICAgICpcclxuICAgICAqIEBkZXNjcmlwdGlvbiBJZiBjbG9zYWJsZSBpcyBmYWxzZSBpbiB0aGUgc2V0dGluZ3MsIHlvdSBuZWVkIHRvIHBhc3MgdHJ1ZSB2aWEgY2xvc2VHYWxsZXJ5IG1ldGhvZCB0byBmb3JjZSBjbG9zZSBnYWxsZXJ5XHJcbiAgICAgKiBAcmV0dXJuIHJldHVybnMgdGhlIGVzdGltYXRlZCB0aW1lIHRvIGNsb3NlIGdhbGxlcnkgY29tcGxldGVseSBpbmNsdWRpbmcgdGhlIGNsb3NlIGFuaW1hdGlvbiBkdXJhdGlvblxyXG4gICAgICogQGNhdGVnb3J5IGxHUHVibGljTWV0aG9kc1xyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqICBjb25zdCBwbHVnaW4gPSBsaWdodEdhbGxlcnkoKTtcclxuICAgICAqICBwbHVnaW4uY2xvc2VHYWxsZXJ5KCk7XHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBMaWdodEdhbGxlcnkucHJvdG90eXBlLmNsb3NlR2FsbGVyeSA9IGZ1bmN0aW9uIChmb3JjZSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxnT3BlbmVkIHx8ICghdGhpcy5zZXR0aW5ncy5jbG9zYWJsZSAmJiAhZm9yY2UpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLkxHZWwudHJpZ2dlcihsR0V2ZW50cy5iZWZvcmVDbG9zZSk7XHJcbiAgICAgICAgJExHKHdpbmRvdykuc2Nyb2xsVG9wKHRoaXMucHJldlNjcm9sbFRvcCk7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRJdGVtID0gdGhpcy5pdGVtc1t0aGlzLmluZGV4XTtcclxuICAgICAgICB2YXIgdHJhbnNmb3JtO1xyXG4gICAgICAgIGlmICh0aGlzLnpvb21Gcm9tT3JpZ2luICYmIGN1cnJlbnRJdGVtKSB7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMubWVkaWFDb250YWluZXJQb3NpdGlvbiwgdG9wXzQgPSBfYS50b3AsIGJvdHRvbSA9IF9hLmJvdHRvbTtcclxuICAgICAgICAgICAgdmFyIF9iID0gdGhpcy5nYWxsZXJ5SXRlbXNbdGhpcy5pbmRleF0sIF9fc2xpZGVWaWRlb0luZm8gPSBfYi5fX3NsaWRlVmlkZW9JbmZvLCBwb3N0ZXIgPSBfYi5wb3N0ZXI7XHJcbiAgICAgICAgICAgIHZhciBpbWFnZVNpemUgPSB1dGlscy5nZXRTaXplKGN1cnJlbnRJdGVtLCB0aGlzLm91dGVyLCB0b3BfNCArIGJvdHRvbSwgX19zbGlkZVZpZGVvSW5mbyAmJiBwb3N0ZXIgJiYgdGhpcy5zZXR0aW5ncy52aWRlb01heFNpemUpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm0gPSB1dGlscy5nZXRUcmFuc2Zvcm0oY3VycmVudEl0ZW0sIHRoaXMub3V0ZXIsIHRvcF80LCBib3R0b20sIGltYWdlU2l6ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnpvb21Gcm9tT3JpZ2luICYmIHRyYW5zZm9ybSkge1xyXG4gICAgICAgICAgICB0aGlzLm91dGVyLmFkZENsYXNzKCdsZy1jbG9zaW5nIGxnLXpvb20tZnJvbS1pbWFnZScpO1xyXG4gICAgICAgICAgICB0aGlzLmdldFNsaWRlSXRlbSh0aGlzLmluZGV4KVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdsZy1zdGFydC1lbmQtcHJvZ3Jlc3MnKVxyXG4gICAgICAgICAgICAgICAgLmNzcygndHJhbnNpdGlvbi1kdXJhdGlvbicsIHRoaXMuc2V0dGluZ3Muc3RhcnRBbmltYXRpb25EdXJhdGlvbiArICdtcycpXHJcbiAgICAgICAgICAgICAgICAuY3NzKCd0cmFuc2Zvcm0nLCB0cmFuc2Zvcm0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vdXRlci5hZGRDbGFzcygnbGctaGlkZS1pdGVtcycpO1xyXG4gICAgICAgICAgICAvLyBsZy16b29tLWZyb20taW1hZ2UgaXMgdXNlZCBmb3Igc2V0dGluZyB0aGUgb3BhY2l0eSB0byAxIGlmIHpvb21Gcm9tT3JpZ2luIGlzIHRydWVcclxuICAgICAgICAgICAgLy8gSWYgdGhlIGNsb3NpbmcgaXRlbSBkb2Vzbid0IGhhdmUgdGhlIGxnLXNpemUgYXR0cmlidXRlLCByZW1vdmUgdGhpcyBjbGFzcyB0byBhdm9pZCB0aGUgY2xvc2luZyBjc3MgY29uZmxpY3RzXHJcbiAgICAgICAgICAgIHRoaXMub3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLXpvb20tZnJvbS1pbWFnZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBVbmJpbmQgYWxsIGV2ZW50cyBhZGRlZCBieSBsaWdodEdhbGxlcnlcclxuICAgICAgICAvLyBAdG9kb1xyXG4gICAgICAgIC8vdGhpcy4kZWwub2ZmKCcubGcudG0nKTtcclxuICAgICAgICB0aGlzLmRlc3Ryb3lNb2R1bGVzKCk7XHJcbiAgICAgICAgdGhpcy5sR2FsbGVyeU9uID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc0R1bW15SW1hZ2VSZW1vdmVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy56b29tRnJvbU9yaWdpbiA9IHRoaXMuc2V0dGluZ3Muem9vbUZyb21PcmlnaW47XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuaGlkZUJhclRpbWVvdXQpO1xyXG4gICAgICAgIHRoaXMuaGlkZUJhclRpbWVvdXQgPSBmYWxzZTtcclxuICAgICAgICAkTEcoJ2h0bWwnKS5yZW1vdmVDbGFzcygnbGctb24nKTtcclxuICAgICAgICB0aGlzLm91dGVyLnJlbW92ZUNsYXNzKCdsZy12aXNpYmxlIGxnLWNvbXBvbmVudHMtb3BlbicpO1xyXG4gICAgICAgIC8vIFJlc2V0dGluZyBvcGFjaXR5IHRvIDAgaXNkIHJlcXVpcmVkIGFzICB2ZXJ0aWNhbCBzd2lwZSB0byBjbG9zZSBmdW5jdGlvbiBhZGRzIGlubGluZSBvcGFjaXR5LlxyXG4gICAgICAgIHRoaXMuJGJhY2tkcm9wLnJlbW92ZUNsYXNzKCdpbicpLmNzcygnb3BhY2l0eScsIDApO1xyXG4gICAgICAgIHZhciByZW1vdmVUaW1lb3V0ID0gdGhpcy56b29tRnJvbU9yaWdpbiAmJiB0cmFuc2Zvcm1cclxuICAgICAgICAgICAgPyBNYXRoLm1heCh0aGlzLnNldHRpbmdzLnN0YXJ0QW5pbWF0aW9uRHVyYXRpb24sIHRoaXMuc2V0dGluZ3MuYmFja2Ryb3BEdXJhdGlvbilcclxuICAgICAgICAgICAgOiB0aGlzLnNldHRpbmdzLmJhY2tkcm9wRHVyYXRpb247XHJcbiAgICAgICAgdGhpcy4kY29udGFpbmVyLnJlbW92ZUNsYXNzKCdsZy1zaG93LWluJyk7XHJcbiAgICAgICAgLy8gT25jZSB0aGUgY2xvc2lnbiBhbmltYXRpb24gaXMgY29tcGxldGVkIGFuZCBnYWxsZXJ5IGlzIGludmlzaWJsZVxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuem9vbUZyb21PcmlnaW4gJiYgdHJhbnNmb3JtKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5vdXRlci5yZW1vdmVDbGFzcygnbGctem9vbS1mcm9tLWltYWdlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMuJGNvbnRhaW5lci5yZW1vdmVDbGFzcygnbGctc2hvdycpO1xyXG4gICAgICAgICAgICAvLyBOZWVkIHRvIHJlbW92ZSBpbmxpbmUgb3BhY2l0eSBhcyBpdCBpcyB1c2VkIGluIHRoZSBzdHlsZXNoZWV0IGFzIHdlbGxcclxuICAgICAgICAgICAgX3RoaXMuJGJhY2tkcm9wXHJcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignc3R5bGUnKVxyXG4gICAgICAgICAgICAgICAgLmNzcygndHJhbnNpdGlvbi1kdXJhdGlvbicsIF90aGlzLnNldHRpbmdzLmJhY2tkcm9wRHVyYXRpb24gKyAnbXMnKTtcclxuICAgICAgICAgICAgX3RoaXMub3V0ZXIucmVtb3ZlQ2xhc3MoXCJsZy1jbG9zaW5nIFwiICsgX3RoaXMuc2V0dGluZ3Muc3RhcnRDbGFzcyk7XHJcbiAgICAgICAgICAgIF90aGlzLmdldFNsaWRlSXRlbShfdGhpcy5pbmRleCkucmVtb3ZlQ2xhc3MoJ2xnLXN0YXJ0LWVuZC1wcm9ncmVzcycpO1xyXG4gICAgICAgICAgICBfdGhpcy4kaW5uZXIuZW1wdHkoKTtcclxuICAgICAgICAgICAgaWYgKF90aGlzLmxnT3BlbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5MR2VsLnRyaWdnZXIobEdFdmVudHMuYWZ0ZXJDbG9zZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlOiBfdGhpcyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5vdXRlci5nZXQoKSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMub3V0ZXIuZ2V0KCkuYmx1cigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLmxnT3BlbmVkID0gZmFsc2U7XHJcbiAgICAgICAgfSwgcmVtb3ZlVGltZW91dCArIDEwMCk7XHJcbiAgICAgICAgcmV0dXJuIHJlbW92ZVRpbWVvdXQgKyAxMDA7XHJcbiAgICB9O1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS5pbml0TW9kdWxlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBtb2R1bGUuaW5pdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcImxpZ2h0R2FsbGVyeTotIG1ha2Ugc3VyZSBsaWdodEdhbGxlcnkgbW9kdWxlIGlzIHByb3Blcmx5IGluaXRpYXRlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIExpZ2h0R2FsbGVyeS5wcm90b3R5cGUuZGVzdHJveU1vZHVsZXMgPSBmdW5jdGlvbiAoZGVzdHJveSkge1xyXG4gICAgICAgIHRoaXMucGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGUpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmIChkZXN0cm95KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZS5jbG9zZUdhbGxlcnkgJiYgbW9kdWxlLmNsb3NlR2FsbGVyeSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcImxpZ2h0R2FsbGVyeTotIG1ha2Ugc3VyZSBsaWdodEdhbGxlcnkgbW9kdWxlIGlzIHByb3Blcmx5IGRlc3Ryb3llZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmVmcmVzaCBsaWdodEdhbGxlcnkgd2l0aCBuZXcgc2V0IG9mIGNoaWxkcmVuLlxyXG4gICAgICpcclxuICAgICAqIEBkZXNjcmlwdGlvbiBUaGlzIGlzIHVzZWZ1bCB0byB1cGRhdGUgdGhlIGdhbGxlcnkgd2hlbiB0aGUgY2hpbGQgZWxlbWVudHMgYXJlIGNoYW5nZWQgd2l0aG91dCBjYWxsaW5nIGRlc3Ryb3kgbWV0aG9kLlxyXG4gICAgICpcclxuICAgICAqIElmIHlvdSBhcmUgdXNpbmcgZHluYW1pYyBtb2RlLCB5b3UgY2FuIHBhc3MgdGhlIG1vZGlmaWVkIGFycmF5IG9mIGR5bmFtaWNFbCBhcyB0aGUgZmlyc3QgcGFyYW1ldGVyIHRvIHJlZnJlc2ggdGhlIGR5bmFtaWMgZ2FsbGVyeVxyXG4gICAgICogQHNlZSA8YSBocmVmPVwiL2RlbW9zL2R5bmFtaWMtbW9kZS9cIj5EZW1vPC9hPlxyXG4gICAgICogQGNhdGVnb3J5IGxHUHVibGljTWV0aG9kc1xyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqICBjb25zdCBwbHVnaW4gPSBsaWdodEdhbGxlcnkoKTtcclxuICAgICAqICAvLyBEZWxldGUgb3IgYWRkIGNoaWxkcmVuLCB0aGVuIGNhbGxcclxuICAgICAqICBwbHVnaW4ucmVmcmVzaCgpO1xyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24gKGdhbGxlcnlJdGVtcykge1xyXG4gICAgICAgIGlmICghdGhpcy5zZXR0aW5ncy5keW5hbWljKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW52YWxpZGF0ZUl0ZW1zKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnYWxsZXJ5SXRlbXMpIHtcclxuICAgICAgICAgICAgdGhpcy5nYWxsZXJ5SXRlbXMgPSBnYWxsZXJ5SXRlbXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdhbGxlcnlJdGVtcyA9IHRoaXMuZ2V0SXRlbXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVDb250cm9scygpO1xyXG4gICAgICAgIHRoaXMub3BlbkdhbGxlcnlPbkl0ZW1DbGljaygpO1xyXG4gICAgICAgIHRoaXMuTEdlbC50cmlnZ2VyKGxHRXZlbnRzLnVwZGF0ZVNsaWRlcyk7XHJcbiAgICB9O1xyXG4gICAgTGlnaHRHYWxsZXJ5LnByb3RvdHlwZS51cGRhdGVDb250cm9scyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmFkZFNsaWRlVmlkZW9JbmZvKHRoaXMuZ2FsbGVyeUl0ZW1zKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNvdW50ZXJUb3RhbCgpO1xyXG4gICAgICAgIHRoaXMubWFuYWdlU2luZ2xlU2xpZGVDbGFzc05hbWUoKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIERlc3Ryb3kgbGlnaHRHYWxsZXJ5LlxyXG4gICAgICogRGVzdHJveSBsaWdodEdhbGxlcnkgYW5kIGl0cyBwbHVnaW4gaW5zdGFuY2VzIGNvbXBsZXRlbHlcclxuICAgICAqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gVGhpcyBtZXRob2QgYWxzbyBjYWxscyBDbG9zZUdhbGxlcnkgZnVuY3Rpb24gaW50ZXJuYWxseS4gUmV0dXJucyB0aGUgdGltZSB0YWtlcyB0byBjb21wbGV0ZWx5IGNsb3NlIGFuZCBkZXN0cm95IHRoZSBpbnN0YW5jZS5cclxuICAgICAqIEluIGNhc2UgaWYgeW91IHdhbnQgdG8gcmUtaW5pdGlhbGl6ZSBsaWdodEdhbGxlcnkgcmlnaHQgYWZ0ZXIgZGVzdHJveWluZyBpdCwgaW5pdGlhbGl6ZSBpdCBvbmx5IG9uY2UgdGhlIGRlc3Ryb3kgcHJvY2VzcyBpcyBjb21wbGV0ZWQuXHJcbiAgICAgKiBZb3UgY2FuIHVzZSByZWZyZXNoIG1ldGhvZCBtb3N0IG9mIHRoZSB0aW1lcy5cclxuICAgICAqIEBjYXRlZ29yeSBsR1B1YmxpY01ldGhvZHNcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiAgY29uc3QgcGx1Z2luID0gbGlnaHRHYWxsZXJ5KCk7XHJcbiAgICAgKiAgcGx1Z2luLmRlc3Ryb3koKTtcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIExpZ2h0R2FsbGVyeS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBjbG9zZVRpbWVvdXQgPSB0aGlzLmNsb3NlR2FsbGVyeSh0cnVlKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuZGVzdHJveU1vZHVsZXModHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmICghX3RoaXMuc2V0dGluZ3MuZHluYW1pYykge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaW52YWxpZGF0ZUl0ZW1zKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJExHKHdpbmRvdykub2ZmKFwiLmxnLmdsb2JhbFwiICsgX3RoaXMubGdJZCk7XHJcbiAgICAgICAgICAgIF90aGlzLkxHZWwub2ZmKCcubGcnKTtcclxuICAgICAgICAgICAgX3RoaXMuJGNvbnRhaW5lci5yZW1vdmUoKTtcclxuICAgICAgICB9LCBjbG9zZVRpbWVvdXQpO1xyXG4gICAgICAgIHJldHVybiBjbG9zZVRpbWVvdXQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIExpZ2h0R2FsbGVyeTtcclxufSgpKTtcblxuZnVuY3Rpb24gbGlnaHRHYWxsZXJ5KGVsLCBvcHRpb25zKSB7XHJcbiAgICByZXR1cm4gbmV3IExpZ2h0R2FsbGVyeShlbCwgb3B0aW9ucyk7XHJcbn1cblxuZXhwb3J0IGRlZmF1bHQgbGlnaHRHYWxsZXJ5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGlnaHRnYWxsZXJ5LmVzNS5qcy5tYXBcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIHRoZW1lIHN0eWxlICovXG5pbXBvcnQgXCIuL2thdmUtaG9tZS5zY3NzXCI7XG5cbi8vaW1wb3J0IFwiQHN0ZXBoYW5lODg4L3didS1hdG9taXF1ZS9qcy9ib290c3RyYXAvYWxsLmpzXCI7XG4vLyBodG1sXG5pbXBvcnQgXCIuL21vc2FpYy1pbWcvbW9zYWljXCI7XG4iXSwibmFtZXMiOlsibGlnaHRHYWxsZXJ5IiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9