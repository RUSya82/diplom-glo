/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom_glo"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_showPhone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/showPhone */ \"./src/modules/showPhone.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_documentListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/documentListener */ \"./src/modules/documentListener.js\");\n\n\n\n(0,_modules_showPhone__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_modules_documentListener__WEBPACK_IMPORTED_MODULE_2__.default)();\n\n//# sourceURL=webpack://diplom_glo/./src/index.js?");

/***/ }),

/***/ "./src/modules/documentListener.js":
/*!*****************************************!*\
  !*** ./src/modules/documentListener.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _scrollToElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scrollToElement */ \"./src/modules/scrollToElement.js\");\n\n\nvar documentListener = function documentListener() {\n  document.addEventListener('click', function (e) {\n    var target = e.target;\n\n    if (target.matches('.button-footer')) {\n      console.log(target);\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (documentListener);\n\n//# sourceURL=webpack://diplom_glo/./src/modules/documentListener.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4650ce5bccbccda03dce")
/******/ })();
/******/ 
/******/ }
);