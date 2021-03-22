/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom_glo"]("main",{

/***/ "./src/modules/documentListener.js":
/*!*****************************************!*\
  !*** ./src/modules/documentListener.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _togglePopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./togglePopup */ \"./src/modules/togglePopup.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './menuHandler'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n/**\r\n * Добавление событий клика по документу (делегирование)\r\n */\n\nvar documentListener = function documentListener() {\n  document.addEventListener('click', function (e) {\n    var target = e.target; //куда кликнули\n\n    console.log(target);\n  });\n  document.addEventListener('keydown', function (event) {\n    if (event.key === 'Escape') {\n      var activePopup = document.querySelector('.popup.open');\n      var activeMenu = document.querySelector('.popup-dialog-menu.active');\n\n      if (activePopup) {\n        (0,_togglePopup__WEBPACK_IMPORTED_MODULE_0__.default)();\n      }\n\n      if (activeMenu) {\n        Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './menuHandler'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (documentListener);\n\n//# sourceURL=webpack://diplom_glo/./src/modules/documentListener.js?");

/***/ }),

/***/ "./src/modules/menuInit.js":
/*!*********************************!*\
  !*** ./src/modules/menuInit.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _togglePopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./togglePopup */ \"./src/modules/togglePopup.js\");\n/* harmony import */ var _scrollToElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scrollToElement */ \"./src/modules/scrollToElement.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './menuHandler'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\nvar menuInit = function menuInit() {\n  var icon = document.querySelector('.menu__icon');\n  var popupMenu = document.querySelector('.popup.popup-menu');\n  var popupDialogMenu = document.querySelector('.popup-dialog-menu');\n  popupMenu.addEventListener('click', function (e) {\n    var target = e.target;\n\n    if (target.matches('.close-menu')) {\n      (0,_togglePopup__WEBPACK_IMPORTED_MODULE_0__.default)(popupMenu, Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './menuHandler'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n    } else if (target.matches('.menu-link')) {\n      e.preventDefault();\n      var targetElementName = target.getAttribute('href').slice(1);\n      var targetElement = document.getElementById(targetElementName);\n      (0,_scrollToElement__WEBPACK_IMPORTED_MODULE_1__.default)(targetElement, 200); //плавный скролл до него\n\n      (0,_togglePopup__WEBPACK_IMPORTED_MODULE_0__.default)(popupMenu, Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './menuHandler'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())); //закрываем меню\n    } else if (!target.closest('.popup-dialog-menu') && popupDialogMenu.classList.contains('active')) {\n      (0,_togglePopup__WEBPACK_IMPORTED_MODULE_0__.default)(popupMenu, Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './menuHandler'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n    }\n\n    console.log(target);\n  });\n  icon.addEventListener('click', function (e) {\n    (0,_togglePopup__WEBPACK_IMPORTED_MODULE_0__.default)(popupMenu, Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './menuHandler'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuInit);\n\n//# sourceURL=webpack://diplom_glo/./src/modules/menuInit.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fb8ae71f5be56f966e78")
/******/ })();
/******/ 
/******/ }
);