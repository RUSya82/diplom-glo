/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom_glo"]("main",{

/***/ "./src/modules/scrollToElement.js":
/*!****************************************!*\
  !*** ./src/modules/scrollToElement.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * Функция плавного скролла до элемента, чистая, работает как вверх, так и вниз (писал сам)))\r\n * @param element - ссылка на элемент\r\n * @param duration - продолжительность скролла в мс\r\n */\nvar scrollToElement = function scrollToElement(element, duration) {\n  var Id; //id анимации\n\n  var start = performance.now(); //время старта\n\n  var topPosition = element.getBoundingClientRect().top; //текущая позиция элемента\n\n  var currentDocumentPosition = document.documentElement.scrollTop; //текущая прокрутка документа\n\n  var progress = 0; //прогресс анимации\n\n  var animateScroll = function animateScroll() {\n    var now = performance.now(); //текущее время\n\n    progress = (now - start) / duration; //вычисляем прогресс\n\n    if (progress <= 1) {\n      document.documentElement.scrollTop = currentDocumentPosition + topPosition * progress;\n      Id = requestAnimationFrame(animateScroll);\n    } else {\n      document.documentElement.scrollTop = currentDocumentPosition + topPosition;\n      cancelAnimationFrame(Id);\n    }\n  };\n\n  animateScroll();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollToElement);\n\n//# sourceURL=webpack://diplom_glo/./src/modules/scrollToElement.js?");

/***/ }),

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _togglePopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./togglePopup */ \"./src/modules/togglePopup.js\");\n/* harmony import */ var _scrollToElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scrollToElement */ \"./src/modules/scrollToElement.js\");\n\n\n\nvar toggleMenu = function toggleMenu() {\n  var icon = document.querySelector('.menu__icon');\n  var popupMenu = document.querySelector('.popup.popup-menu');\n  var popupDialogMenu = document.querySelector('.popup-dialog-menu');\n\n  var menuHandler = function menuHandler() {\n    popupDialogMenu.classList.toggle('active');\n  };\n\n  popupDialogMenu.addEventListener('click', function (e) {\n    var target = e.target;\n\n    if (target.matches('.close-menu')) {\n      (0,_togglePopup__WEBPACK_IMPORTED_MODULE_0__.default)(popupMenu, menuHandler);\n    } else if (target.matches('.popup-menu-nav__item')) {}\n\n    console.log(target);\n  });\n  icon.addEventListener('click', function (e) {\n    (0,_togglePopup__WEBPACK_IMPORTED_MODULE_0__.default)(popupMenu, menuHandler);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://diplom_glo/./src/modules/toggleMenu.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c5e34a3a36d87ac64534")
/******/ })();
/******/ 
/******/ }
);