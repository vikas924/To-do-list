"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_exercise"] = self["webpackChunkwebpack_exercise"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: rgba(139, 134, 134, 0.242);\\r\\n}\\r\\n\\r\\n.to-do-list {\\r\\n  height: 100vh;\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.listwrap {\\r\\n  max-width: 768px;\\r\\n  width: 80%;\\r\\n  background-color: #fff;\\r\\n  border: 1px solid rgba(139, 134, 134, 0.242);\\r\\n  box-shadow: 0 2px 5px rgba(139, 134, 134, 0.8);\\r\\n}\\r\\n\\r\\n.icon {\\r\\n  color: #acadaf;\\r\\n}\\r\\n\\r\\n.jvicon {\\r\\n  height: 40px;\\r\\n  width: 40px;\\r\\n}\\r\\n\\r\\n.hide {\\r\\n  display: none;\\r\\n  height: 40px;\\r\\n  width: 40px;\\r\\n}\\r\\n\\r\\n.div {\\r\\n  height: 4rem;\\r\\n  border-bottom: 1px solid rgba(139, 134, 134, 0.242);\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  padding-inline: 1rem;\\r\\n}\\r\\n\\r\\n.addinput {\\r\\n  height: 100%;\\r\\n  width: 98%;\\r\\n  border: none;\\r\\n  font-size: 1.5rem;\\r\\n  font-style: italic;\\r\\n  color: rgba(139, 134, 134, 0.8);\\r\\n}\\r\\n\\r\\n.addinput:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.spanicon {\\r\\n  width: 2%;\\r\\n}\\r\\n\\r\\n.listdiv {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 1rem;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.delete {\\r\\n  border: none;\\r\\n  background-color: transparent;\\r\\n}\\r\\n\\r\\n.listlabel {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  font-size: 1.5rem;\\r\\n  height: 100%;\\r\\n  width: 90%;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n.listlabel:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.textarea {\\r\\n  display: none;\\r\\n  align-items: center;\\r\\n  font-size: 1.5rem;\\r\\n  height: 100%;\\r\\n  width: 90%;\\r\\n  border: none;\\r\\n  resize: none;\\r\\n}\\r\\n\\r\\n.button {\\r\\n  width: 100%;\\r\\n  border: none;\\r\\n  text-align: center;\\r\\n  font-size: 1.5rem;\\r\\n  justify-content: center;\\r\\n  color: rgba(139, 134, 134, 0.8);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-exercise/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-exercise/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_add_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/add.js */ \"./src/modules/add.js\");\n/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/display.js */ \"./src/modules/display.js\");\n\n\n\n\n\n\nconst addbutton = document.querySelector('.spanicon');\nconst form = document.querySelector('.form');\naddbutton.addEventListener('click', () => {\n  const input = document.querySelector('.addinput');\n  const value1 = input.value.trim();\n  (0,_modules_add_js__WEBPACK_IMPORTED_MODULE_1__.add)(value1);\n});\naddbutton.addEventListener('click', _modules_display_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nform.addEventListener('submit', (e) => {\n  e.preventDefault();\n  const input = document.querySelector('.addinput');\n  const value1 = input.value.trim();\n  (0,_modules_add_js__WEBPACK_IMPORTED_MODULE_1__.add)(value1);\n  (0,_modules_display_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  input.value = '';\n});\n\n(0,_modules_display_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//# sourceURL=webpack://webpack-exercise/./src/index.js?");

/***/ }),

/***/ "./src/modules/add.js":
/*!****************************!*\
  !*** ./src/modules/add.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"add\": () => (/* binding */ add),\n/* harmony export */   \"tasks\": () => (/* binding */ tasks)\n/* harmony export */ });\nconst tasks = JSON.parse(localStorage.getItem('array')) || [];\n\nconst add = (value) => {\n  if ((value.length !== 0)) {\n    const obj = {\n      description: `${value}`,\n      completed: false,\n      index: tasks.length + 1,\n    };\n    tasks.push(obj);\n    localStorage.setItem('array', JSON.stringify(tasks));\n  }\n};\n\n//# sourceURL=webpack://webpack-exercise/./src/modules/add.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displaytasks)\n/* harmony export */ });\n/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.js */ \"./src/modules/add.js\");\n/* harmony import */ var _removecompleted_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removecompleted.js */ \"./src/modules/removecompleted.js\");\n/* harmony import */ var _status_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./status.js */ \"./src/modules/status.js\");\n/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit.js */ \"./src/modules/edit.js\");\n\n\n\n\n\n\n\n\nfunction displaytasks() {\n  const list = document.querySelector('.list');\n  let items = '';\n  for (let i = 0; i < _add_js__WEBPACK_IMPORTED_MODULE_0__.tasks.length; i += 1) {\n    items += `<li id=\"style\" class=\"div\"><div class=\"listdiv\"><input class=\"check\" type=\"checkbox\" name=\"${_add_js__WEBPACK_IMPORTED_MODULE_0__.tasks[i].description}\"><input class=\"listlabel style\" for=\"${_add_js__WEBPACK_IMPORTED_MODULE_0__.tasks[i].description}\" value=\"${_add_js__WEBPACK_IMPORTED_MODULE_0__.tasks[i].description}\"></div><button class=\"jvicon delete\"><i class=\"fa-solid fa-ellipsis-vertical\" style=\"color: #acadaf\"></i></button><button class=\"hide delete\"><i class=\"fa-solid fa-trash-can\"></i></button></li>`;\n  }\n  list.innerHTML = items;\n  for (let i = 0; i < _add_js__WEBPACK_IMPORTED_MODULE_0__.tasks.length; i += 1) {\n    const icon = document.querySelectorAll('.jvicon');\n    const hide = document.querySelectorAll('.hide');\n    hide[i].addEventListener('click', _edit_js__WEBPACK_IMPORTED_MODULE_3__.deletechild);\n    const input = document.querySelectorAll('.listlabel');\n    input[i].addEventListener('keyup', _edit_js__WEBPACK_IMPORTED_MODULE_3__.edit);\n    input[i].addEventListener('click', _edit_js__WEBPACK_IMPORTED_MODULE_3__.outclick);\n    const checkbox = document.querySelectorAll('.check');\n    checkbox[i].addEventListener('click', _status_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    if (_add_js__WEBPACK_IMPORTED_MODULE_0__.tasks[i].completed === true) {\n      input[i].style.textDecoration = 'line-through';\n      input[i].style.color = 'rgba(139, 134, 134, 0.8)';\n      input[i].disabled = true;\n      icon[i].style.display = 'none';\n      hide[i].style.display = 'block';\n      checkbox[i].checked = true;\n    } else {\n      input[i].style.textDecoration = 'none';\n      input[i].style.color = 'inherit';\n      input[i].disabled = false;\n      icon[i].style.display = 'block';\n      hide[i].style.display = 'none';\n      checkbox[i].checked = false;\n    }\n  }\n  const button = document.querySelector('.button');\n  button.addEventListener('click', _removecompleted_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  button.addEventListener('click', displaytasks);\n}\n\n//# sourceURL=webpack://webpack-exercise/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/edit.js":
/*!*****************************!*\
  !*** ./src/modules/edit.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deletechild\": () => (/* binding */ deletechild),\n/* harmony export */   \"edit\": () => (/* binding */ edit),\n/* harmony export */   \"outclick\": () => (/* binding */ outclick)\n/* harmony export */ });\n/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.js */ \"./src/modules/add.js\");\n/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remove.js */ \"./src/modules/remove.js\");\n\n\n\n\nfunction deletechild() {\n  const button = document.querySelectorAll('.hide');\n  const index = Array.from(button).indexOf(this);\n  const parent = document.querySelector('.list');\n  const remo = this.parentNode;\n  parent.removeChild(remo);\n  (0,_remove_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(index);\n}\n\nfunction edit(event) {\n  const label = document.querySelectorAll('.listlabel');\n  if (event.key === 'Enter' || event.key === 'Escape') {\n    const inputvalue = this.value;\n    const index = Array.from(label).indexOf(this);\n    label[index].value = inputvalue;\n    label[index].blur();\n    const div = document.querySelectorAll('#style');\n    div[index].style.backgroundColor = '#fff';\n    this.style.backgroundColor = '#fff';\n    const icon = document.querySelectorAll('.jvicon');\n    const hide = document.querySelectorAll('.hide');\n    icon[index].style.display = 'block';\n    hide[index].style.display = 'none';\n    _add_js__WEBPACK_IMPORTED_MODULE_0__.tasks[index].description = label[index].value;\n    localStorage.setItem('array', JSON.stringify(_add_js__WEBPACK_IMPORTED_MODULE_0__.tasks));\n  }\n}\n\nfunction outclick() {\n  const listner = (event) => {\n    const label = document.querySelectorAll('.listlabel');\n    const hide = document.querySelectorAll('.hide');\n    const checkbox = document.querySelectorAll('.check');\n    const index = Array.from(label).indexOf(this);\n    hide[index].removeEventListener('click', deletechild);\n    if (event.target !== this) {\n      const inputvalue = this.value;\n      const index = Array.from(label).indexOf(this);\n      label[index].value = inputvalue;\n      _add_js__WEBPACK_IMPORTED_MODULE_0__.tasks[index].description = label[index].value;\n      localStorage.setItem('array', JSON.stringify(_add_js__WEBPACK_IMPORTED_MODULE_0__.tasks));\n      const div = document.querySelectorAll('#style');\n      div[index].style.backgroundColor = '#fff';\n      this.style.backgroundColor = '#fff';\n      const icon = document.querySelectorAll('.jvicon');\n      const hide = document.querySelectorAll('.hide');\n      const list = document.querySelector('body');\n      list.removeEventListener('click', listner);\n      setTimeout(hide[index].addEventListener('click', deletechild), 2000);\n      if ((event.target !== checkbox[index])) {\n        icon[index].style.display = 'block';\n        hide[index].style.display = 'none';\n      } else {\n        icon[index].style.display = 'none';\n        hide[index].style.display = 'block';\n      }\n    } else if (event.target === this) {\n      const index = Array.from(label).indexOf(this);\n      const div = document.querySelectorAll('#style');\n      div[index].style.backgroundColor = 'red';\n      this.style.backgroundColor = 'red';\n      const icon = document.querySelectorAll('.jvicon');\n      const hide = document.querySelectorAll('.hide');\n      icon[index].style.display = 'none';\n      hide[index].style.display = 'block';\n    }\n  };\n  const list = document.querySelector('body');\n  list.addEventListener('click', listner);\n}\n\n//# sourceURL=webpack://webpack-exercise/./src/modules/edit.js?");

/***/ }),

/***/ "./src/modules/remove.js":
/*!*******************************!*\
  !*** ./src/modules/remove.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ remove)\n/* harmony export */ });\n/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.js */ \"./src/modules/add.js\");\n\n\nfunction remove(indx) {\n  if ((_add_js__WEBPACK_IMPORTED_MODULE_0__.tasks[indx].completed) === true) {\n    _add_js__WEBPACK_IMPORTED_MODULE_0__.tasks.splice(indx, 1);\n    for (let i = 0; i < _add_js__WEBPACK_IMPORTED_MODULE_0__.tasks.length; i += 1) {\n      _add_js__WEBPACK_IMPORTED_MODULE_0__.tasks[i].index = i + 1;\n    }\n    localStorage.setItem('array', JSON.stringify(_add_js__WEBPACK_IMPORTED_MODULE_0__.tasks));\n  }\n}\n\n//# sourceURL=webpack://webpack-exercise/./src/modules/remove.js?");

/***/ }),

/***/ "./src/modules/removecompleted.js":
/*!****************************************!*\
  !*** ./src/modules/removecompleted.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ removecompleted)\n/* harmony export */ });\n/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.js */ \"./src/modules/add.js\");\n\n\nfunction removecompleted() {\n  const completedarray = _add_js__WEBPACK_IMPORTED_MODULE_0__.tasks.filter((tasks) => tasks.completed === true);\n  for (let i = 0; i < completedarray.length; i += 1) {\n    const index = (completedarray[i].index - 1) - i;\n    _add_js__WEBPACK_IMPORTED_MODULE_0__.tasks.splice(index, 1);\n  }\n  for (let i = 0; i < _add_js__WEBPACK_IMPORTED_MODULE_0__.tasks.length; i += 1) {\n    _add_js__WEBPACK_IMPORTED_MODULE_0__.tasks[i].index = i + 1;\n  }\n  localStorage.setItem('array', JSON.stringify(_add_js__WEBPACK_IMPORTED_MODULE_0__.tasks));\n}\n\n//# sourceURL=webpack://webpack-exercise/./src/modules/removecompleted.js?");

/***/ }),

/***/ "./src/modules/status.js":
/*!*******************************!*\
  !*** ./src/modules/status.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ status)\n/* harmony export */ });\n/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.js */ \"./src/modules/add.js\");\n\n\nfunction status() {\n  const checkbox = document.querySelectorAll('.check');\n  const index = Array.from(checkbox).indexOf(this);\n  const input = document.querySelectorAll('.listlabel');\n  const hide = document.querySelectorAll('.hide');\n  const icon = document.querySelectorAll('.jvicon');\n  let value = false;\n  // setTimeout(() => {\n  if (this.checked === true) {\n    value = true;\n    _add_js__WEBPACK_IMPORTED_MODULE_0__.tasks[index].completed = value;\n    input[index].style.textDecoration = 'line-through';\n    input[index].style.color = 'rgba(139, 134, 134, 0.8)';\n    input[index].disabled = true;\n    icon[index].style.display = 'none';\n    hide[index].style.display = 'block';\n    localStorage.setItem('array', JSON.stringify(_add_js__WEBPACK_IMPORTED_MODULE_0__.tasks));\n  } else {\n    _add_js__WEBPACK_IMPORTED_MODULE_0__.tasks[index].completed = value;\n    input[index].style.textDecoration = 'none';\n    input[index].style.color = 'inherit';\n    input[index].disabled = false;\n    icon[index].style.display = 'block';\n    hide[index].style.display = 'none';\n    localStorage.setItem('array', JSON.stringify(_add_js__WEBPACK_IMPORTED_MODULE_0__.tasks));\n  }\n}// , 100);\n\n\n//# sourceURL=webpack://webpack-exercise/./src/modules/status.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);