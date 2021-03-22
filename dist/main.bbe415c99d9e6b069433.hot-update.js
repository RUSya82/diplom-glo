/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom_glo"]("main",{

/***/ "./src/modules/showPhone.js":
/*!**********************************!*\
  !*** ./src/modules/showPhone.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar showPhone = function showPhone() {\n  var phoneNumber = document.querySelector('.header-contacts__phone-number-accord a');\n  var arrow = document.querySelector('.header-contacts__arrow');\n  var phoneAccordeon = document.querySelector('.header-contacts__phone-number-accord');\n  var phoneNumberWrap = document.querySelector('.header-contacts__phone-number-wrap');\n\n  var togglePhone = function togglePhone() {\n    if (arrow.classList.contains('.header-contacts__arrow-opened')) {\n      phoneAccordeon.style.top = '0';\n      arrow.style.transform = 'rotate(0deg)';\n      phoneNumber.style.opacity = '0';\n      arrow.classList.remove('.header-contacts__arrow-opened');\n    } else {\n      phoneAccordeon.style.top = getComputedStyle(phoneNumberWrap).height;\n      arrow.style.transform = 'rotate(-180deg)';\n      phoneNumber.style.opacity = '1';\n      arrow.classList.add('.header-contacts__arrow-opened');\n    }\n  };\n\n  arrow.addEventListener('click', togglePhone);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showPhone);\n\n//# sourceURL=webpack://diplom_glo/./src/modules/showPhone.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("552a61cf1517c82450df")
/******/ })();
/******/ 
/******/ }
);