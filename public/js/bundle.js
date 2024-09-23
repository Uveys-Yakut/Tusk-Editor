/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/CreateEditor/index.ts":
/*!**********************************************!*\
  !*** ./src/components/CreateEditor/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createEditor: () => (/* binding */ createEditor)\n/* harmony export */ });\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\nfunction calculateTabSize() {\n  var testElement = document.createElement('span');\n  testElement.style.fontFamily = 'Liberation, \"Courier New\", monospace';\n  testElement.style.fontSize = '14px';\n  testElement.style.visibility = 'hidden'; // Görünmez yap\n  testElement.innerText = 'a'; // Boş bir karakter ekle\n  document.body.appendChild(testElement);\n\n  // Karakterin genişliğini ölç\n  var characterWidth = testElement.offsetWidth;\n\n  // 4 karakter genişliği\n  var tabSize = characterWidth * 4;\n\n  // Elementi kaldır\n  document.body.removeChild(testElement);\n  return tabSize;\n}\nfunction createEditor(editor) {\n  editor.style.position = \"relative\";\n  var frgmntCrtEdtr = document.createDocumentFragment();\n  // Components\n  var tuskEditorUnifyning = document.createElement(\"div\");\n  var tuskSlidableElement = document.createElement(\"div\");\n  var tuskGutter = document.createElement(\"div\");\n  var tuskGutters = document.createElement(\"div\");\n  var tuskGutterLineNmbr = document.createElement(\"div\");\n  var tuskEdtrView_lines = document.createElement(\"div\");\n  var tuskEdtrView_lineItm = document.createElement(\"div\");\n  var tuskEdtrCursorUnifyning = document.createElement(\"div\");\n  var tuskEdtrCursor = document.createElement(\"div\");\n  var tuskEdtrInptArea = document.createElement(\"textarea\");\n  // Components\n\n  // Tusk Editor Unifyning \n  tuskEditorUnifyning.classList.add(\"tusk-editor-unfyng\");\n  tuskSlidableElement.style.width = \"\".concat(editor.offsetWidth - 60, \"px\");\n  // Tusk Editor Unifyning\n\n  // Tusk Slidable Element\n  tuskSlidableElement.classList.add(\"tusk-editor\", \"slidable-element\");\n  tuskSlidableElement.style.left = \"60px\";\n  // Tusk Slidable Element\n\n  // Gutter Layer\n  tuskGutters.classList.add(\"tusk-gutters\");\n  tuskGutters.style.width = \"60px\";\n  tuskGutter.classList.add(\"tusk-gutter-itm\");\n  tuskGutter.style.top = \"0px\";\n  tuskGutter.style.height = \"19px\";\n  tuskGutterLineNmbr.classList.add(\"gutter-line-nmbr\");\n  tuskGutterLineNmbr.style.left = \"0px\";\n  tuskGutterLineNmbr.style.width = \"36px\";\n  tuskGutterLineNmbr.textContent = \"1\";\n  tuskGutter.appendChild(tuskGutterLineNmbr);\n  tuskGutters.appendChild(tuskGutter);\n  // Gutter Layer\n\n  // Tusk Editor View Lines \n  tuskEdtrView_lines.classList.add(\"tusk-editor\", \"view-lines\");\n  tuskEdtrView_lines.appendChild(tuskEdtrView_lineItm);\n  // Tusk Editor View Lines\n\n  // Tusk Editor View Line\n  tuskEdtrView_lineItm.classList.add(\"tusk-editor\", \"view-line\");\n  // Tusk Editor View Line\n\n  tuskEdtrCursorUnifyning.classList.add(\"tusk-editor\", \"cursor-unfyng\");\n  tuskEdtrCursorUnifyning.setAttribute(\"aria-hidden\", \"true\");\n  tuskEdtrCursor.classList.add(\"cursor\");\n  tuskEdtrCursor.style.top = \"0px\";\n  tuskEdtrCursor.style.left = \"0px\";\n  // Tusk Slidable Element Append Child\n  tuskEdtrCursorUnifyning.appendChild(tuskEdtrCursor);\n  tuskEdtrView_lines.appendChild(tuskEdtrCursorUnifyning);\n  tuskSlidableElement.appendChild(tuskEdtrView_lines);\n  // Tusk Slidable Element Append Child\n\n  // Tusk Editor Inptut Area\n  var inptAreaAttrbts = {\n    'wrap': \"off\",\n    'autocorrect': \"off\",\n    'autocapitalize': \"off\",\n    'autocomplete': \"off\",\n    'spellcheck': \"false\",\n    'aria-label': \"Editor content\",\n    'aria-required': \"false\",\n    'tabindex': \"0\",\n    'role': \"textbox\",\n    'aria-roledescription': \"editor\",\n    'aria-multiline': \"true\",\n    'aria-autocomplete': \"both\"\n  };\n  tuskEdtrInptArea.classList.add(\"inputarea\");\n  for (var _i = 0, _Object$entries = Object.entries(inptAreaAttrbts); _i < _Object$entries.length; _i++) {\n    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),\n      key = _Object$entries$_i[0],\n      value = _Object$entries$_i[1];\n    tuskEdtrInptArea.setAttribute(key, value);\n  }\n  tuskEdtrInptArea.setAttribute(\"style\", \"tab-size: \".concat(calculateTabSize(), \"; font-family: Consolas, \\\"Courier New\\\", monospace; font-weight: normal; font-size: 14px; font-feature-settings: \\\"liga\\\" 0, \\\"calt\\\" 0; font-variation-settings: normal; line-height: 19px; letter-spacing: 0px; top: 0; left: 0; width: 1px; height: 1px; \"));\n  // Tusk Editor Inptut Area \n\n  tuskEditorUnifyning.appendChild(tuskGutters);\n  tuskEditorUnifyning.appendChild(tuskSlidableElement);\n  tuskEditorUnifyning.appendChild(tuskEdtrInptArea);\n  frgmntCrtEdtr.appendChild(tuskEditorUnifyning);\n  editor.appendChild(frgmntCrtEdtr);\n}\n\n\n//# sourceURL=webpack://tusk-editor/./src/components/CreateEditor/index.ts?");

/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Editor: () => (/* binding */ Editor)\n/* harmony export */ });\n/* harmony import */ var _CreateEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateEditor */ \"./src/components/CreateEditor/index.ts\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\nvar Editor = /*#__PURE__*/function () {\n  function Editor(editorId, settings) {\n    _classCallCheck(this, Editor);\n    this.editor = document.getElementById(editorId);\n  }\n  return _createClass(Editor, [{\n    key: \"create\",\n    value: function create() {\n      if (this.editor) {\n        (0,_CreateEditor__WEBPACK_IMPORTED_MODULE_0__.createEditor)(this.editor);\n      }\n      return undefined;\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://tusk-editor/./src/components/index.ts?");

/***/ }),

/***/ "./src/editor.ts":
/*!***********************!*\
  !*** ./src/editor.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_sass_editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/sass/editor.scss */ \"./src/styles/sass/editor.scss\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ \"./src/components/index.ts\");\n\n\nvar editor = new _components__WEBPACK_IMPORTED_MODULE_1__.Editor('tusk-editor', {\n  language: \"javascript\"\n}).create();\n\n//# sourceURL=webpack://tusk-editor/./src/editor.ts?");

/***/ }),

/***/ "./src/styles/sass/editor.scss":
/*!*************************************!*\
  !*** ./src/styles/sass/editor.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://tusk-editor/./src/styles/sass/editor.scss?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/editor.ts");
/******/ 	
/******/ })()
;