/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/advantages/advantages.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/advantages/advantages.js ***!
  \*****************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/blocks/modules/articles/articles.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/articles/articles.js ***!
  \*************************************************/
/***/ (() => {

// $(()=> {
//     const $articles = $('.js-swiper-articles');

//     $articles.each((_, slider) => {
//         const swiperArticles = new Swiper(slider, {
//             slidesPerView: 1.2,
// 			spaceBetween: 14,

//             pagination: {
//                 el: '.swiper-pagination',
//                 type: 'bullets',
// 				clickable: true,
//                 // renderBullet: function (index, className) {
//                 //     return '<span class="' + className + '">' + (index + 1) + "</span>";
//                 //   },
//             },

//             breakpoints: {

//                 768: {
//                     slidesPerView: 1.5,
//                     spaceBetween: 20,
//                 },

//                 992: {
//                     slidesPerView: 2,
//                     spaceBetween: 20,
//                 },

//                 1340: {
//                     slidesPerView: 3,
// 			        spaceBetween: 20,
//                 }
//             }

//         })
//     })
// })

/***/ }),

/***/ "./src/blocks/modules/contacts/contacts.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/contacts/contacts.js ***!
  \*************************************************/
/***/ (() => {

$(function () {
  var $ymapsObj = $('.contacts');
  if (!$ymapsObj.length) return;
  var myMap = null;
  ymaps.ready(init);
  function init() {
    $('.contacts__map').each(function (_, el) {
      myMap = new ymaps.Map(el, {
        center: [59.849993, 30.178992],
        zoom: 17,
        controls: []
      });
      var placeMark = new ymaps.Placemark([59.849993, 30.178992], {
        ballonContent: 'ASB Прогнозы на спорт '
      });
      myMap.geoObjects.add(placeMark);
    });
  }
});

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/***/ (() => {

$(function () {});

/***/ }),

/***/ "./src/blocks/modules/forecast-slider/forecast-slider.js":
/*!***************************************************************!*\
  !*** ./src/blocks/modules/forecast-slider/forecast-slider.js ***!
  \***************************************************************/
/***/ (() => {

$(function () {
  var swiper = new Swiper(".js-forecast-slider", {
    slidesPerView: 3,
    spaceBetween: 15,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
});

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ (() => {

$(function () {
  var $headerMenuLink = $('.js-header-menu-link');
  var matchMedia = window.matchMedia('(max-width: 1024px)');
  $headerMenuLink.on('mouseenter', function () {
    var that = $(this);
    that.siblings().find('.header__menu-link').removeClass('is-active');
    that.find('.header__menu-link').addClass('is-active');
    that.siblings().find('.js-header-menu-sub').fadeOut();
    that.find('.js-header-menu-sub').fadeIn();
  });
  $headerMenuLink.on('mouseleave', function () {
    var that = $(this);
    that.find('.header__menu-link').removeClass('is-active');
    if (!matchMedia.matches) that.find('.js-header-menu-sub').fadeOut(300);
  });
  var $headerBurger = $('.js-header-burger');
  $headerBurger.on('click', function () {
    var that = $(this);
    that.toggleClass('is-active');
    var svgPath = that.find('use');
    var xlinkHref = svgPath.attr('xlink:href').split('#')[0];
    var $headerMenu = $('.js-header-menu');
    if (that.hasClass('is-active')) {
      svgPath.attr('xlink:href', xlinkHref + '#burger-x');
      $headerMenu.fadeIn();
    } else {
      svgPath.attr('xlink:href', xlinkHref + '#burger');
      $headerMenu.fadeOut();
    }
    if (matchMedia.matches) {
      $('body').toggleClass('is-hidden');
    }
  });
});

/***/ }),

/***/ "./src/blocks/modules/intro/intro.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/intro/intro.js ***!
  \*******************************************/
/***/ (() => {

$(function () {
  var $button = $('.js-button-prices');
  var $slider = $(".js-range-slider").ionRangeSlider({
    min: 0,
    max: 10000,
    from: 5000,
    postfix: ' ₽'
  });
  var my_range = $slider.data("ionRangeSlider");
  $button.on('click', 'button', function () {
    var that = $(this);
    var price = that.data('price');
    that.addClass('is-active').siblings().removeClass('is-active');
    console.log(price);
    my_range.update({
      from: price
    });
  });
});

/***/ }),

/***/ "./src/blocks/modules/modal/modal.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/modal/modal.js ***!
  \*******************************************/
/***/ (() => {

var $jsFancy = $('.js-fancy');
$jsFancy.on('click', function (e) {
  e.preventDefault();
  Fancybox.show([{
    src: e.currentTarget.dataset.src || e.currentTarget.getAttribute('data-src'),
    type: "inline"
  }]);
});

/***/ }),

/***/ "./src/blocks/modules/reviews/reviews.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/reviews/reviews.js ***!
  \***********************************************/
/***/ (() => {

$(function () {
  var $reviews = $('.js-slider-reviews');
  $reviews.each(function (_, slider) {
    var nextNav = $(slider).next();
    var pagination = nextNav.find('.js-swiper-pagin')[0];
    var swiper = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 14,
      navigation: {
        nextEl: nextNav.find('.js-swiper-next')[0],
        prevEl: nextNav.find('.js-swiper-prev')[0]
      },
      on: {
        init: function init() {
          setTimeout(function () {
            $('.swiper-slide-next').next().addClass('swiper-slide-next');
          }, 50);
        },
        slideNextTransitionStart: function slideNextTransitionStart(swiper) {
          $('.swiper-slide-next').prev().removeClass('swiper-slide-next');
          $('.swiper-slide-next').next().addClass('swiper-slide-next');
        },
        slidePrevTransitionStart: function slidePrevTransitionStart(swiper) {
          $('.swiper-slide-next').next().addClass('swiper-slide-next').next().removeClass('swiper-slide-next');
        }
      },
      pagination: {
        el: pagination,
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        768: {
          slidesPerView: 1.5,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1240: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }
    });
  });
});

/***/ }),

/***/ "./src/blocks/modules/select/select.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/select/select.js ***!
  \*********************************************/
/***/ (() => {

$(function () {
  var $select = $('.js-select');
  if (!$select.length) return;
  $select.each(function (_, select) {
    var $that = $(select);
    var _$that$data = $that.data(),
      placeholder = _$that$data.placeholder;
    $that.select2({
      placeholder: placeholder,
      width: null
    });
  });
});

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_intro_intro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/intro/intro */ "./src/blocks/modules/intro/intro.js");
/* harmony import */ var _modules_intro_intro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_intro_intro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_forecast_slider_forecast_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/forecast-slider/forecast-slider */ "./src/blocks/modules/forecast-slider/forecast-slider.js");
/* harmony import */ var _modules_forecast_slider_forecast_slider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_forecast_slider_forecast_slider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_select_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/select/select */ "./src/blocks/modules/select/select.js");
/* harmony import */ var _modules_select_select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_select_select__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/modal/modal */ "./src/blocks/modules/modal/modal.js");
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_modal_modal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_advantages_advantages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/advantages/advantages */ "./src/blocks/modules/advantages/advantages.js");
/* harmony import */ var _modules_advantages_advantages__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_advantages_advantages__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_reviews_reviews__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/reviews/reviews */ "./src/blocks/modules/reviews/reviews.js");
/* harmony import */ var _modules_reviews_reviews__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_reviews_reviews__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_articles_articles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/articles/articles */ "./src/blocks/modules/articles/articles.js");
/* harmony import */ var _modules_articles_articles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_modules_articles_articles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modules_contacts_contacts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/contacts/contacts */ "./src/blocks/modules/contacts/contacts.js");
/* harmony import */ var _modules_contacts_contacts__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_modules_contacts_contacts__WEBPACK_IMPORTED_MODULE_9__);











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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_1__);


})();

/******/ })()
;
//# sourceMappingURL=main.js.map