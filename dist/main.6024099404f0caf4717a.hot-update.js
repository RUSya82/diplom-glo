/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom_glo"]("main",{

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _togglePopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./togglePopup */ \"./src/modules/togglePopup.js\");\n\n\nvar toggleMenu = function toggleMenu() {\n  var icon = document.querySelector('.menu__icon');\n  var popupMenu = document.querySelector('.popup.popup-menu');\n  var popupDialogMenu = document.querySelector('.popup-dialog-menu');\n  popupDialogMenu.addEventListener('click', function (e) {\n    var target = e.target;\n  });\n  icon.addEventListener('click', function (e) {\n    (0,_togglePopup__WEBPACK_IMPORTED_MODULE_0__.default)(popupMenu, function () {\n      popupDialogMenu.classList.toggle('active');\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://diplom_glo/./src/modules/toggleMenu.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5de9c1ec6273c4d5263e")
/******/ })();
/******/ 
/******/ }
);