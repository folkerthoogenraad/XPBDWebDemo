/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

document.addEventListener("DOMContentLoaded", () => {});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/app.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/app.scss ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box; }\n\nhtml, body {\n  padding: 0;\n  margin: 0; }\n\nhtml, body {\n  width: 100vw;\n  height: 100vh;\n  max-width: 100vw;\n  max-height: 100vh;\n  overflow: hidden; }\n\nbody {\n  font-family: sans-serif;\n  --dark-color: #352f20;\n  --mid-color: #c2bba7;\n  --light-color: #e0ddd5;\n  --dark-color-alpha: #352f20ee;\n  font-size: 18px; }\n\n.container {\n  width: 100vw;\n  height: 100vh;\n  display: flex; }\n  .container canvas {\n    width: 100%;\n    height: 100%; }\n  .container .credits-overlay {\n    position: absolute;\n    bottom: 24px;\n    right: 24px;\n    color: var(--mid-color);\n    user-select: none;\n    pointer-events: none; }\n  .container .info-overlay {\n    position: absolute;\n    bottom: 24px;\n    left: 24px;\n    color: var(--mid-color);\n    user-select: none;\n    pointer-events: none; }\n\n.menu-button {\n  position: absolute;\n  top: 24px;\n  right: 24px;\n  width: 60px;\n  height: 60px;\n  background: var(--dark-color);\n  border-radius: 30px;\n  z-index: 1000;\n  cursor: pointer; }\n  .menu-button .menu-bar {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 24px;\n    height: 3px;\n    background: var(--light-color);\n    transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out; }\n  .menu-button .top {\n    transform: translate(-50%, calc(-50% - 8px)); }\n  .menu-button .bottom {\n    transform: translate(-50%, calc(-50% + 8px)); }\n  .menu-button.open .top {\n    transform: translate(-50%, -50%) rotate(135deg); }\n  .menu-button.open .bottom {\n    transform: translate(-50%, -50%) rotate(225deg); }\n  .menu-button.open .mid {\n    transform: translate(-50%, -50%) scale(0, 100%); }\n\n.menu {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  height: 100%;\n  width: 100%;\n  overflow-y: auto;\n  max-width: 400px;\n  color: var(--light-color);\n  background: var(--dark-color-alpha);\n  transition-property: transform, visibility;\n  transition-duration: 0.2s;\n  transition-timing-function: ease-in-out;\n  z-index: 100;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-direction: column;\n  padding: 24px;\n  padding-top: 80px; }\n  .menu .menu-spacing {\n    height: 100px; }\n  .menu .menu-header {\n    margin-top: 20px;\n    font-weight: bold; }\n  .menu .menu-item {\n    cursor: pointer;\n    width: 100%;\n    color: inherit;\n    text-decoration: none;\n    border-bottom: 1px solid transparent;\n    transition-property: border-color;\n    transition-duration: 0.2s;\n    transition-timing-function: ease-in-out;\n    margin-bottom: 10px; }\n    .menu .menu-item:hover {\n      border-color: var(--light-color); }\n  .menu.init {\n    visibility: hidden; }\n  .menu.hidden {\n    transform: translate(100%, 0);\n    visibility: hidden; }\n", "",{"version":3,"sources":["webpack://./src/scss/base/_base.scss","webpack://./src/scss/app.scss"],"names":[],"mappings":"AAAA;EACG,sBAAsB,EAAA;;AAGzB;EACG,UAAS;EACT,SAAQ,EAAA;;ACJX;EACI,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,iBAAiB;EAEjB,gBAAgB,EAAA;;AAGpB;EACI,uBAAuB;EAEvB,qBAAa;EACb,oBAAY;EACZ,sBAAc;EACd,6BAAmB;EAEnB,eAAe,EAAA;;AAGnB;EACI,YAAW;EACX,aAAY;EAEZ,aAAa,EAAA;EAJjB;IAOQ,WAAW;IACX,YAAY,EAAA;EARpB;IAYQ,kBAAkB;IAClB,YAAY;IACZ,WAAW;IAEX,uBAAuB;IAEvB,iBAAiB;IACjB,oBAAoB,EAAA;EAnB5B;IAsBQ,kBAAkB;IAClB,YAAY;IACZ,UAAU;IAEV,uBAAuB;IAEvB,iBAAiB;IACjB,oBAAoB,EAAA;;AAI5B;EACI,kBAAkB;EAClB,SAAS;EACT,WAAW;EAEX,WAAW;EACX,YAAY;EAEZ,6BAA6B;EAC7B,mBAAmB;EAEnB,aAAa;EAoCb,eAAe,EAAA;EA/CnB;IAcQ,kBAAiB;IACjB,QAAQ;IACR,SAAS;IAET,gCAAgC;IAEhC,WAAW;IACX,WAAW;IAEX,8BAA8B;IAE9B,gEAAgE,EAAA;EAzBxE;IA6BQ,4CAA4C,EAAA;EA7BpD;IAgCQ,4CAA4C,EAAA;EAhCpD;IAqCY,+CAA+C,EAAA;EArC3D;IAwCY,+CAA+C,EAAA;EAxC3D;IA2CY,+CAA+C,EAAA;;AAO3D;EACI,kBAAkB;EAClB,QAAQ;EACR,UAAU;EACV,YAAW;EACX,WAAW;EAEX,gBAAgB;EAEhB,gBAAe;EAEf,yBAAyB;EAEzB,mCAAmC;EAEnC,0CAA0C;EAC1C,yBAAyB;EACzB,uCAAuC;EAEvC,YAAY;EAEZ,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EAEnB,sBAAqB;EAErB,aAAY;EAEZ,iBAAiB,EAAA;EA7BrB;IAgCQ,aAAY,EAAA;EAhCpB;IAoCQ,gBAAe;IAEf,iBAAiB,EAAA;EAtCzB;IA0CQ,eAAe;IAEf,WAAW;IAEX,cAAa;IACb,qBAAqB;IAErB,oCAAoC;IAEpC,iCAAiC;IACjC,yBAAyB;IACzB,uCAAuC;IAMvC,mBAAmB,EAAA;IA3D3B;MAwDY,gCAAgC,EAAA;EAxD5C;IA+DQ,kBAAkB,EAAA;EA/D1B;IAmEQ,6BAA6B;IAC7B,kBAAkB,EAAA","sourcesContent":["* {\r\n   box-sizing: border-box;\r\n}\r\n\r\nhtml, body{\r\n   padding:0;\r\n   margin:0;\r\n}","@import \"base/base\";\r\n\r\nhtml, body {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    max-width: 100vw;\r\n    max-height: 100vh;\r\n    \r\n    overflow: hidden;\r\n}\r\n\r\nbody {\r\n    font-family: sans-serif;\r\n\r\n    --dark-color: #352f20;\r\n    --mid-color: #c2bba7;\r\n    --light-color: #e0ddd5;\r\n    --dark-color-alpha: #352f20ee;\r\n\r\n    font-size: 18px;\r\n}\r\n\r\n.container{\r\n    width:100vw;\r\n    height:100vh;\r\n\r\n    display: flex;\r\n\r\n    canvas {\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n    \r\n    .credits-overlay{\r\n        position: absolute;\r\n        bottom: 24px;\r\n        right: 24px;\r\n\r\n        color: var(--mid-color);\r\n\r\n        user-select: none;\r\n        pointer-events: none;\r\n    }\r\n    .info-overlay{\r\n        position: absolute;\r\n        bottom: 24px;\r\n        left: 24px;\r\n\r\n        color: var(--mid-color);\r\n\r\n        user-select: none;\r\n        pointer-events: none;\r\n    }\r\n}\r\n\r\n.menu-button {\r\n    position: absolute;\r\n    top: 24px;\r\n    right: 24px;\r\n\r\n    width: 60px;\r\n    height: 60px;\r\n\r\n    background: var(--dark-color);\r\n    border-radius: 30px;\r\n\r\n    z-index: 1000;\r\n\r\n    .menu-bar {\r\n        position:absolute;\r\n        top: 50%;\r\n        left: 50%;\r\n\r\n        transform: translate(-50%, -50%);\r\n\r\n        width: 24px;\r\n        height: 3px;\r\n\r\n        background: var(--light-color);\r\n\r\n        transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;\r\n    }\r\n\r\n    .top {\r\n        transform: translate(-50%, calc(-50% - 8px))\r\n    }\r\n    .bottom {\r\n        transform: translate(-50%, calc(-50% + 8px))\r\n    }\r\n\r\n    &.open {\r\n        .top {\r\n            transform: translate(-50%, -50%) rotate(135deg);\r\n        }\r\n        .bottom {\r\n            transform: translate(-50%, -50%) rotate(225deg)\r\n        }\r\n        .mid {\r\n            transform: translate(-50%, -50%) scale(0, 100%);\r\n        }\r\n    }\r\n\r\n    cursor: pointer;\r\n}\r\n\r\n.menu {\r\n    position: absolute;\r\n    top: 0px;\r\n    right: 0px;\r\n    height:100%;\r\n    width: 100%;\r\n\r\n    overflow-y: auto;\r\n\r\n    max-width:400px;\r\n\r\n    color: var(--light-color);\r\n\r\n    background: var(--dark-color-alpha);\r\n\r\n    transition-property: transform, visibility;\r\n    transition-duration: 0.2s;\r\n    transition-timing-function: ease-in-out;\r\n\r\n    z-index: 100;\r\n\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n\r\n    flex-direction:column;\r\n    \r\n    padding:24px;\r\n\r\n    padding-top: 80px;\r\n\r\n    .menu-spacing{\r\n        height:100px;\r\n    }\r\n    \r\n    .menu-header{\r\n        margin-top:20px;\r\n\r\n        font-weight: bold;\r\n    }\r\n\r\n    .menu-item{\r\n        cursor: pointer;\r\n\r\n        width: 100%;\r\n\r\n        color:inherit;\r\n        text-decoration: none;\r\n\r\n        border-bottom: 1px solid transparent;\r\n        \r\n        transition-property: border-color;\r\n        transition-duration: 0.2s;\r\n        transition-timing-function: ease-in-out;\r\n\r\n        &:hover{\r\n            border-color: var(--light-color);\r\n        }\r\n\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    &.init {\r\n        visibility: hidden;\r\n    }\r\n\r\n    &.hidden {\r\n        transform: translate(100%, 0);\r\n        visibility: hidden;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./app.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/app.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/ts/app/BridgeTestScene.ts":
/*!***************************************!*\
  !*** ./src/ts/app/BridgeTestScene.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createBridgeScene = void 0;
var Rigidbody2D_1 = __webpack_require__(/*! lib/xpbd/Rigidbody2D */ "./src/ts/lib/xpbd/Rigidbody2D.ts");
var SolverScene_1 = __webpack_require__(/*! ./SolverScene */ "./src/ts/app/SolverScene.ts");
var DistanceConstraint2D_1 = __webpack_require__(/*! lib/xpbd/DistanceConstraint2D */ "./src/ts/lib/xpbd/DistanceConstraint2D.ts");
var ConstraintAttachment2D_1 = __webpack_require__(/*! lib/xpbd/ConstraintAttachment2D */ "./src/ts/lib/xpbd/ConstraintAttachment2D.ts");
var PinConstraint2D_1 = __webpack_require__(/*! lib/xpbd/PinConstraint2D */ "./src/ts/lib/xpbd/PinConstraint2D.ts");
var RigidBodyPaths_1 = __webpack_require__(/*! ./paths/RigidBodyPaths */ "./src/ts/app/paths/RigidBodyPaths.ts");
var RigidbodyGraphic2D_1 = __webpack_require__(/*! lib/xpbd/graphics/RigidbodyGraphic2D */ "./src/ts/lib/xpbd/graphics/RigidbodyGraphic2D.ts");
var DistanceConstraintGraphic2D_1 = __webpack_require__(/*! lib/xpbd/graphics/DistanceConstraintGraphic2D */ "./src/ts/lib/xpbd/graphics/DistanceConstraintGraphic2D.ts");
function addGraphics(scene, spacing) {
    var _a;
    if (spacing === void 0) { spacing = 1; }
    var graphics = new RigidBodyPaths_1.RigidBodyPaths();
    graphics.lineWidth = (_a = window.lineWidth) !== null && _a !== void 0 ? _a : 0.05;
    var bodyGraphic = graphics.createBody(0.2);
    var constraintGraphic = graphics.createConnection(spacing);
    scene.bodies.forEach(function (body) {
        scene.bodyGraphics.push(new RigidbodyGraphic2D_1.RigidbodyGraphic2D(body, bodyGraphic));
    });
    scene.constraints.forEach(function (constraint) {
        if (!(constraint instanceof DistanceConstraint2D_1.DistanceConstraint2D))
            return;
        scene.constraintGraphics.push(new DistanceConstraintGraphic2D_1.DistanceConstraintGraphic2D(constraint, constraintGraphic));
    });
}
function createBridgeScene(count, spacing, compliance, damperCompliance) {
    if (spacing === void 0) { spacing = 1; }
    if (compliance === void 0) { compliance = 0; }
    if (damperCompliance === void 0) { damperCompliance = -1; }
    var scene = new SolverScene_1.SolverScene();
    for (var i = 0; i < count; i++) {
        var body1 = new Rigidbody2D_1.Rigidbody2D().translateTo(i * spacing, 0);
        var body2 = new Rigidbody2D_1.Rigidbody2D().translateTo(i * spacing + spacing * 0.5, -spacing);
        // This is not needed but is nice for grabbing it (because otherwise you introduce random rotations into the bridge)
        body1.inverseInertia = 0;
        body2.inverseInertia = 0;
        scene.bodies.push(body1);
        scene.bodies.push(body2);
    }
    // Spokes
    for (var i = 0; i < scene.bodies.length - 1; i++) {
        var from = scene.bodies[i];
        var to = scene.bodies[i + 1];
        var constraint = new DistanceConstraint2D_1.DistanceConstraint2D(new ConstraintAttachment2D_1.ConstraintAttachment2D(from), new ConstraintAttachment2D_1.ConstraintAttachment2D(to));
        constraint.compliance = compliance;
        constraint.damperCompliance = damperCompliance;
        scene.constraints.push(constraint);
    }
    // Even connections
    for (var i = 0; i < scene.bodies.length - 2; i += 2) {
        var from = scene.bodies[i];
        var to = scene.bodies[i + 2];
        var constraint = new DistanceConstraint2D_1.DistanceConstraint2D(new ConstraintAttachment2D_1.ConstraintAttachment2D(from), new ConstraintAttachment2D_1.ConstraintAttachment2D(to));
        constraint.compliance = compliance;
        constraint.damperCompliance = damperCompliance;
        scene.constraints.push(constraint);
    }
    // Uneven connections
    for (var i = 1; i < scene.bodies.length - 2; i += 2) {
        var from = scene.bodies[i];
        var to = scene.bodies[i + 2];
        var constraint = new DistanceConstraint2D_1.DistanceConstraint2D(new ConstraintAttachment2D_1.ConstraintAttachment2D(from), new ConstraintAttachment2D_1.ConstraintAttachment2D(to));
        constraint.compliance = compliance;
        constraint.damperCompliance = damperCompliance;
        scene.constraints.push(constraint);
    }
    var pin = new PinConstraint2D_1.PinConstraint2D(new ConstraintAttachment2D_1.ConstraintAttachment2D(scene.bodies[0]));
    scene.constraints.push(pin);
    addGraphics(scene);
    return scene;
}
exports.createBridgeScene = createBridgeScene;


/***/ }),

/***/ "./src/ts/app/ClothTestScene.ts":
/*!**************************************!*\
  !*** ./src/ts/app/ClothTestScene.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createCloth = void 0;
var Rigidbody2D_1 = __webpack_require__(/*! lib/xpbd/Rigidbody2D */ "./src/ts/lib/xpbd/Rigidbody2D.ts");
var SolverScene_1 = __webpack_require__(/*! ./SolverScene */ "./src/ts/app/SolverScene.ts");
var DistanceConstraint2D_1 = __webpack_require__(/*! lib/xpbd/DistanceConstraint2D */ "./src/ts/lib/xpbd/DistanceConstraint2D.ts");
var ConstraintAttachment2D_1 = __webpack_require__(/*! lib/xpbd/ConstraintAttachment2D */ "./src/ts/lib/xpbd/ConstraintAttachment2D.ts");
var PinConstraint2D_1 = __webpack_require__(/*! lib/xpbd/PinConstraint2D */ "./src/ts/lib/xpbd/PinConstraint2D.ts");
var RigidBodyPaths_1 = __webpack_require__(/*! ./paths/RigidBodyPaths */ "./src/ts/app/paths/RigidBodyPaths.ts");
var RigidbodyGraphic2D_1 = __webpack_require__(/*! lib/xpbd/graphics/RigidbodyGraphic2D */ "./src/ts/lib/xpbd/graphics/RigidbodyGraphic2D.ts");
var DistanceConstraintGraphic2D_1 = __webpack_require__(/*! lib/xpbd/graphics/DistanceConstraintGraphic2D */ "./src/ts/lib/xpbd/graphics/DistanceConstraintGraphic2D.ts");
function createCloth(width, height, compliance, damperCompliance) {
    var _a;
    if (compliance === void 0) { compliance = 0; }
    if (damperCompliance === void 0) { damperCompliance = 0; }
    var scene = new SolverScene_1.SolverScene();
    var graphics = new RigidBodyPaths_1.RigidBodyPaths();
    graphics.lineWidth = (_a = window.lineWidth) !== null && _a !== void 0 ? _a : 0.05;
    var bodyGraphic = graphics.createBody(0.1);
    var constraintGraphic = graphics.createConnection(1);
    // Create all bodies
    for (var j = 0; j < height; j++) {
        for (var i = 0; i < width; i++) {
            var body = new Rigidbody2D_1.Rigidbody2D().translateTo(i, j);
            body.inverseInertia = 0;
            scene.bodies.push(body);
            scene.bodyGraphics.push(new RigidbodyGraphic2D_1.RigidbodyGraphic2D(body, bodyGraphic));
        }
    }
    var getBody = function (i, j) {
        return scene.bodies[i + j * width];
    };
    // Sideways
    for (var j = 0; j < height; j++) {
        for (var i = 0; i < width - 1; i++) {
            var constraint = new DistanceConstraint2D_1.DistanceConstraint2D(new ConstraintAttachment2D_1.ConstraintAttachment2D(getBody(i, j)), new ConstraintAttachment2D_1.ConstraintAttachment2D(getBody(i + 1, j)), undefined, compliance);
            constraint.damperCompliance = damperCompliance;
            scene.constraints.push(constraint);
            scene.constraintGraphics.push(new DistanceConstraintGraphic2D_1.DistanceConstraintGraphic2D(constraint, constraintGraphic));
        }
    }
    // Top to bottom
    for (var j = 0; j < height - 1; j++) {
        for (var i = 0; i < width; i++) {
            var constraint = new DistanceConstraint2D_1.DistanceConstraint2D(new ConstraintAttachment2D_1.ConstraintAttachment2D(getBody(i, j)), new ConstraintAttachment2D_1.ConstraintAttachment2D(getBody(i, j + 1)), undefined, compliance);
            constraint.damperCompliance = damperCompliance;
            scene.constraints.push(constraint);
            scene.constraintGraphics.push(new DistanceConstraintGraphic2D_1.DistanceConstraintGraphic2D(constraint, constraintGraphic));
        }
    }
    // Pin the corners
    var pinLeft = new PinConstraint2D_1.PinConstraint2D(new ConstraintAttachment2D_1.ConstraintAttachment2D(getBody(0, 0)));
    var pinRight = new PinConstraint2D_1.PinConstraint2D(new ConstraintAttachment2D_1.ConstraintAttachment2D(getBody(width - 1, 0)));
    scene.constraints.push(pinLeft);
    scene.constraints.push(pinRight);
    // scene.constraints.push(pinTop);
    // scene.constraints.push(pinBottom);
    return scene;
}
exports.createCloth = createCloth;


/***/ }),

/***/ "./src/ts/app/ComplicatedSceneTest.ts":
/*!********************************************!*\
  !*** ./src/ts/app/ComplicatedSceneTest.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createComplicatedScene = void 0;
var Rigidbody2D_1 = __webpack_require__(/*! lib/xpbd/Rigidbody2D */ "./src/ts/lib/xpbd/Rigidbody2D.ts");
var SolverScene_1 = __webpack_require__(/*! ./SolverScene */ "./src/ts/app/SolverScene.ts");
var DistanceConstraint2D_1 = __webpack_require__(/*! lib/xpbd/DistanceConstraint2D */ "./src/ts/lib/xpbd/DistanceConstraint2D.ts");
var ConstraintAttachment2D_1 = __webpack_require__(/*! lib/xpbd/ConstraintAttachment2D */ "./src/ts/lib/xpbd/ConstraintAttachment2D.ts");
var PinConstraint2D_1 = __webpack_require__(/*! lib/xpbd/PinConstraint2D */ "./src/ts/lib/xpbd/PinConstraint2D.ts");
var RigidBodyPaths_1 = __webpack_require__(/*! ./paths/RigidBodyPaths */ "./src/ts/app/paths/RigidBodyPaths.ts");
var RigidbodyGraphic2D_1 = __webpack_require__(/*! lib/xpbd/graphics/RigidbodyGraphic2D */ "./src/ts/lib/xpbd/graphics/RigidbodyGraphic2D.ts");
var DistanceConstraintGraphic2D_1 = __webpack_require__(/*! lib/xpbd/graphics/DistanceConstraintGraphic2D */ "./src/ts/lib/xpbd/graphics/DistanceConstraintGraphic2D.ts");
var Vector2_1 = __webpack_require__(/*! lib/math/Vector2 */ "./src/ts/lib/math/Vector2.ts");
var AxisConstraint2D_1 = __webpack_require__(/*! lib/xpbd/AxisConstraint2D */ "./src/ts/lib/xpbd/AxisConstraint2D.ts");
function addGraphics(scene, spacing) {
    var _a;
    if (spacing === void 0) { spacing = 1; }
    var graphics = new RigidBodyPaths_1.RigidBodyPaths();
    graphics.lineWidth = (_a = window.lineWidth) !== null && _a !== void 0 ? _a : 0.05;
    scene.bodies.forEach(function (body) {
        var bodyGraphic = graphics.createBody(Math.sqrt(body.mass) * 0.2);
        scene.bodyGraphics.push(new RigidbodyGraphic2D_1.RigidbodyGraphic2D(body, bodyGraphic));
    });
    scene.constraints.forEach(function (constraint) {
        if (!(constraint instanceof DistanceConstraint2D_1.DistanceConstraint2D))
            return;
        var constraintGraphic = graphics.createConnection(constraint.restDistance);
        scene.constraintGraphics.push(new DistanceConstraintGraphic2D_1.DistanceConstraintGraphic2D(constraint, constraintGraphic));
    });
}
function createComplicatedScene() {
    var scene = new SolverScene_1.SolverScene();
    var topWeight = new Rigidbody2D_1.Rigidbody2D().translate(0, -2);
    topWeight.mass = 4;
    topWeight.inertia = 4;
    var rightWeight = new Rigidbody2D_1.Rigidbody2D().translateTo(3, 0);
    rightWeight.mass = 5;
    rightWeight.inertia = 5;
    var leftWeight = new Rigidbody2D_1.Rigidbody2D().translateTo(-3, 0);
    leftWeight.mass = 5;
    leftWeight.inertia = 5;
    var weight = new Rigidbody2D_1.Rigidbody2D();
    weight.mass = 10;
    weight.inertia = 10;
    var left = new Rigidbody2D_1.Rigidbody2D().translateTo(-0.5, 1);
    var leftBottom = new Rigidbody2D_1.Rigidbody2D().translateTo(-0.5, 2);
    var right = new Rigidbody2D_1.Rigidbody2D().translateTo(0.5, 1);
    left.mass = 1;
    right.mass = 2;
    var leftConnection = new DistanceConstraint2D_1.DistanceConstraint2D(new ConstraintAttachment2D_1.ConstraintAttachment2D(left, new Vector2_1.Vector2(0, 0)), new ConstraintAttachment2D_1.ConstraintAttachment2D(weight, new Vector2_1.Vector2(-0.5, 0)));
    var rightConnection = new DistanceConstraint2D_1.DistanceConstraint2D(new ConstraintAttachment2D_1.ConstraintAttachment2D(right, new Vector2_1.Vector2(0, 0)), new ConstraintAttachment2D_1.ConstraintAttachment2D(weight, new Vector2_1.Vector2(0.5, 0)));
    var leftBottomConnection = new DistanceConstraint2D_1.DistanceConstraint2D(new ConstraintAttachment2D_1.ConstraintAttachment2D(left, new Vector2_1.Vector2(0, 0)), new ConstraintAttachment2D_1.ConstraintAttachment2D(leftBottom, new Vector2_1.Vector2(0, 0)));
    var weightConnectionRight = new DistanceConstraint2D_1.DistanceConstraint2D(new ConstraintAttachment2D_1.ConstraintAttachment2D(rightWeight, new Vector2_1.Vector2(-0.3, 0)), new ConstraintAttachment2D_1.ConstraintAttachment2D(weight, new Vector2_1.Vector2(0.5, 0)));
    var weightConnectionLeft = new DistanceConstraint2D_1.DistanceConstraint2D(new ConstraintAttachment2D_1.ConstraintAttachment2D(leftWeight, new Vector2_1.Vector2(0.3, 0)), new ConstraintAttachment2D_1.ConstraintAttachment2D(weight, new Vector2_1.Vector2(-0.5, 0)));
    var weightPin = new PinConstraint2D_1.PinConstraint2D(new ConstraintAttachment2D_1.ConstraintAttachment2D(weight));
    var rightWeightAxis = new AxisConstraint2D_1.AxisConstraint2D(new ConstraintAttachment2D_1.ConstraintAttachment2D(rightWeight), new Vector2_1.Vector2(0, 0), new Vector2_1.Vector2(1, 0));
    var leftWeightAxis = new AxisConstraint2D_1.AxisConstraint2D(new ConstraintAttachment2D_1.ConstraintAttachment2D(leftWeight), new Vector2_1.Vector2(0, 0), new Vector2_1.Vector2(1, 0));
    var leftTopConnection = new DistanceConstraint2D_1.DistanceConstraint2D(new ConstraintAttachment2D_1.ConstraintAttachment2D(leftWeight), new ConstraintAttachment2D_1.ConstraintAttachment2D(topWeight, new Vector2_1.Vector2(-0.3, 0)));
    var rightTopConnection = new DistanceConstraint2D_1.DistanceConstraint2D(new ConstraintAttachment2D_1.ConstraintAttachment2D(rightWeight), new ConstraintAttachment2D_1.ConstraintAttachment2D(topWeight, new Vector2_1.Vector2(0.3, 0)));
    scene.bodies.push(weight);
    scene.bodies.push(left);
    scene.bodies.push(right);
    scene.bodies.push(leftBottom);
    scene.bodies.push(rightWeight);
    scene.bodies.push(leftWeight);
    scene.bodies.push(topWeight);
    scene.constraints.push(weightPin);
    scene.constraints.push(leftConnection);
    scene.constraints.push(rightConnection);
    scene.constraints.push(leftBottomConnection);
    scene.constraints.push(rightWeightAxis);
    scene.constraints.push(leftWeightAxis);
    scene.constraints.push(weightConnectionRight);
    scene.constraints.push(weightConnectionLeft);
    scene.constraints.push(leftTopConnection);
    scene.constraints.push(rightTopConnection);
    addGraphics(scene);
    return scene;
}
exports.createComplicatedScene = createComplicatedScene;


/***/ }),

/***/ "./src/ts/app/EngineTestScene.ts":
/*!***************************************!*\
  !*** ./src/ts/app/EngineTestScene.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createEngineTestScene = void 0;
var Rigidbody2D_1 = __webpack_require__(/*! lib/xpbd/Rigidbody2D */ "./src/ts/lib/xpbd/Rigidbody2D.ts");
var SolverScene_1 = __webpack_require__(/*! ./SolverScene */ "./src/ts/app/SolverScene.ts");
var AxisConstraint2D_1 = __webpack_require__(/*! lib/xpbd/AxisConstraint2D */ "./src/ts/lib/xpbd/AxisConstraint2D.ts");
var DistanceConstraint2D_1 = __webpack_require__(/*! lib/xpbd/DistanceConstraint2D */ "./src/ts/lib/xpbd/DistanceConstraint2D.ts");
var PinConstraint2D_1 = __webpack_require__(/*! lib/xpbd/PinConstraint2D */ "./src/ts/lib/xpbd/PinConstraint2D.ts");
var ConstraintAttachment2D_1 = __webpack_require__(/*! lib/xpbd/ConstraintAttachment2D */ "./src/ts/lib/xpbd/ConstraintAttachment2D.ts");
var Vector2_1 = __webpack_require__(/*! lib/math/Vector2 */ "./src/ts/lib/math/Vector2.ts");
var AxleConstraint2D_1 = __webpack_require__(/*! lib/xpbd/AxleConstraint2D */ "./src/ts/lib/xpbd/AxleConstraint2D.ts");
var EnginePartPaths_1 = __webpack_require__(/*! app/paths/EnginePartPaths */ "./src/ts/app/paths/EnginePartPaths.ts");
var RigidbodyGraphic2D_1 = __webpack_require__(/*! lib/xpbd/graphics/RigidbodyGraphic2D */ "./src/ts/lib/xpbd/graphics/RigidbodyGraphic2D.ts");
var DistanceConstraintGraphic2D_1 = __webpack_require__(/*! lib/xpbd/graphics/DistanceConstraintGraphic2D */ "./src/ts/lib/xpbd/graphics/DistanceConstraintGraphic2D.ts");
function addPiston(scene, x, y, phase) {
    var radius = 0.5;
    var piston = new Rigidbody2D_1.Rigidbody2D();
    piston.translateTo(x, y - 1.5 + Math.sin(phase));
    // Make sure we cannot rotate the piston.
    piston.inverseInertia = 0;
    var counterWeight = new Rigidbody2D_1.Rigidbody2D();
    counterWeight.translateTo(x, y);
    var pistonWalls = new AxisConstraint2D_1.AxisConstraint2D(new ConstraintAttachment2D_1.ConstraintAttachment2D(piston), new Vector2_1.Vector2(x, y), new Vector2_1.Vector2(0, 1));
    // TODO this distance is now set to 2 but this means the whole thing starts off with some energy in the system because the constraints are not met
    var crankArm = new DistanceConstraint2D_1.DistanceConstraint2D(new ConstraintAttachment2D_1.ConstraintAttachment2D(piston), new ConstraintAttachment2D_1.ConstraintAttachment2D(counterWeight, Vector2_1.Vector2.angled(phase).scale(radius)), 1.5);
    var crankShaft = new PinConstraint2D_1.PinConstraint2D(new ConstraintAttachment2D_1.ConstraintAttachment2D(counterWeight), counterWeight.position.clone());
    scene.bodies.push(piston);
    scene.bodies.push(counterWeight);
    scene.constraints.push(pistonWalls);
    scene.constraints.push(crankShaft);
    scene.constraints.push(crankArm);
    return {
        piston: piston,
        counterWeight: counterWeight,
        crankArm: crankArm,
        phase: phase,
    };
}
function addAxle(scene, bodies) {
    for (var i = 0; i < bodies.length - 1; i++) {
        var constraint = new AxleConstraint2D_1.AxleCosntraint2D(bodies[i], bodies[i + 1]);
        scene.constraints.push(constraint);
    }
}
function addCylinders(scene, amount) {
    var cylinders = [];
    var spacing = 1.5;
    var phaseOffset = Math.PI;
    var width = (amount - 1) * spacing;
    for (var i = 0; i < amount; i++) {
        cylinders.push(addPiston(scene, -width / 2 + spacing * i, 0, phaseOffset * i));
    }
    return cylinders;
}
function addGraphics(scene, cylinders) {
    var _a;
    var g = new EnginePartPaths_1.EnginePartPaths();
    g.lineWidth = (_a = window.lineWidth) !== null && _a !== void 0 ? _a : 0.05;
    var piston = g.createPiston(1, 0.8);
    var arm = g.createArm(1.5);
    var counterWeight = g.createCounterWeight(0.5);
    cylinders.forEach(function (cylinder) {
        scene.bodyGraphics.push(new RigidbodyGraphic2D_1.RigidbodyGraphic2D(cylinder.piston, piston));
        scene.bodyGraphics.push(new RigidbodyGraphic2D_1.RigidbodyGraphic2D(cylinder.counterWeight, counterWeight).setRotationalOffset(cylinder.phase));
        scene.constraintGraphics.push(new DistanceConstraintGraphic2D_1.DistanceConstraintGraphic2D(cylinder.crankArm, arm));
    });
}
function createEngineTestScene(cylinderCount) {
    var scene = new SolverScene_1.SolverScene();
    var cylinders = addCylinders(scene, cylinderCount);
    addAxle(scene, cylinders.map(function (cylidner) { return cylidner.counterWeight; }));
    addGraphics(scene, cylinders);
    return scene;
}
exports.createEngineTestScene = createEngineTestScene;


/***/ }),

/***/ "./src/ts/app/Menu.ts":
/*!****************************!*\
  !*** ./src/ts/app/Menu.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initMenu = void 0;
var menu;
var menuButton;
var menuOpen = false;
function setMenuOpen(v) {
    menuOpen = v;
    syncMenu();
}
function toggleMenu() {
    menuOpen = !menuOpen;
    syncMenu();
}
function syncMenu() {
    menu.classList.remove("init");
    menu.classList.toggle("hidden", !menuOpen);
    menuButton.classList.toggle("open", menuOpen);
}
function initMenu() {
    menu = document.getElementById("menu");
    menuButton = document.getElementById("menu-button");
    var canvas = document.getElementById("canvas");
    menuButton.addEventListener("click", function () { return toggleMenu(); });
    canvas.addEventListener("click", function () { return setMenuOpen(false); });
    var items = document.querySelectorAll(".menu-item");
    items.forEach(function (item) {
        item.addEventListener("click", function () { return setMenuOpen(false); });
    });
    syncMenu();
}
exports.initMenu = initMenu;


/***/ }),

/***/ "./src/ts/app/PendulumTestScene.ts":
/*!*****************************************!*\
  !*** ./src/ts/app/PendulumTestScene.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createPendulumTest = void 0;
var Rigidbody2D_1 = __webpack_require__(/*! lib/xpbd/Rigidbody2D */ "./src/ts/lib/xpbd/Rigidbody2D.ts");
var SolverScene_1 = __webpack_require__(/*! ./SolverScene */ "./src/ts/app/SolverScene.ts");
var DistanceConstraint2D_1 = __webpack_require__(/*! lib/xpbd/DistanceConstraint2D */ "./src/ts/lib/xpbd/DistanceConstraint2D.ts");
var ConstraintAttachment2D_1 = __webpack_require__(/*! lib/xpbd/ConstraintAttachment2D */ "./src/ts/lib/xpbd/ConstraintAttachment2D.ts");
var PinConstraint2D_1 = __webpack_require__(/*! lib/xpbd/PinConstraint2D */ "./src/ts/lib/xpbd/PinConstraint2D.ts");
var RigidBodyPaths_1 = __webpack_require__(/*! ./paths/RigidBodyPaths */ "./src/ts/app/paths/RigidBodyPaths.ts");
var RigidbodyGraphic2D_1 = __webpack_require__(/*! lib/xpbd/graphics/RigidbodyGraphic2D */ "./src/ts/lib/xpbd/graphics/RigidbodyGraphic2D.ts");
var DistanceConstraintGraphic2D_1 = __webpack_require__(/*! lib/xpbd/graphics/DistanceConstraintGraphic2D */ "./src/ts/lib/xpbd/graphics/DistanceConstraintGraphic2D.ts");
function createPendulumTest(count, spacing, compliance, damperCompliance) {
    var _a;
    if (spacing === void 0) { spacing = 1; }
    if (compliance === void 0) { compliance = 0; }
    if (damperCompliance === void 0) { damperCompliance = -1; }
    var scene = new SolverScene_1.SolverScene();
    var graphics = new RigidBodyPaths_1.RigidBodyPaths();
    graphics.lineWidth = (_a = window.lineWidth) !== null && _a !== void 0 ? _a : 0.05;
    var bodyGraphic = graphics.createBody(Math.min(spacing / 2 - 0.1, 0.4));
    var constraintGraphic = graphics.createConnection(spacing);
    var initialBody = new Rigidbody2D_1.Rigidbody2D().translateTo(0, 0);
    scene.bodies.push(initialBody);
    scene.bodyGraphics.push(new RigidbodyGraphic2D_1.RigidbodyGraphic2D(initialBody, bodyGraphic));
    initialBody.inverseInertia = 0;
    var previousBody = initialBody;
    for (var i = 1; i < count; i++) {
        // Very sligth random offset of the x to give it some cool animation :)
        var body = new Rigidbody2D_1.Rigidbody2D().translateTo(Math.random() * 0.001, -i * spacing);
        var constraint = new DistanceConstraint2D_1.DistanceConstraint2D(new ConstraintAttachment2D_1.ConstraintAttachment2D(body), new ConstraintAttachment2D_1.ConstraintAttachment2D(previousBody));
        constraint.compliance = compliance;
        constraint.damperCompliance = damperCompliance;
        body.inverseInertia = 0;
        scene.bodies.push(body);
        scene.constraints.push(constraint);
        scene.bodyGraphics.push(new RigidbodyGraphic2D_1.RigidbodyGraphic2D(body, bodyGraphic));
        scene.constraintGraphics.push(new DistanceConstraintGraphic2D_1.DistanceConstraintGraphic2D(constraint, constraintGraphic));
        previousBody = body;
    }
    var pin = new PinConstraint2D_1.PinConstraint2D(new ConstraintAttachment2D_1.ConstraintAttachment2D(initialBody));
    scene.constraints.push(pin);
    return scene;
}
exports.createPendulumTest = createPendulumTest;


/***/ }),

/***/ "./src/ts/app/SolverScene.ts":
/*!***********************************!*\
  !*** ./src/ts/app/SolverScene.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SolverScene = void 0;
var Vector2_1 = __webpack_require__(/*! lib/math/Vector2 */ "./src/ts/lib/math/Vector2.ts");
var AxisConstraint2D_1 = __webpack_require__(/*! lib/xpbd/AxisConstraint2D */ "./src/ts/lib/xpbd/AxisConstraint2D.ts");
var DistanceConstraint2D_1 = __webpack_require__(/*! lib/xpbd/DistanceConstraint2D */ "./src/ts/lib/xpbd/DistanceConstraint2D.ts");
var PinConstraint2D_1 = __webpack_require__(/*! lib/xpbd/PinConstraint2D */ "./src/ts/lib/xpbd/PinConstraint2D.ts");
var SolverScene = /** @class */ (function () {
    function SolverScene() {
        this.bodies = [];
        this.constraints = [];
        this.bodyGraphics = [];
        this.constraintGraphics = [];
        this.substeps = 1;
        this.constraintSubsteps = 1;
        this.gravityRate = 1;
        this.timeRate = 1;
    }
    SolverScene.prototype.update = function (delta) {
        for (var i = 0; i < this.substeps; i++) {
            // Note that we do have to divide delta into the substeps here.
            this.step(delta / this.substeps * this.timeRate);
        }
    };
    SolverScene.prototype.step = function (delta) {
        var _this = this;
        // Update all the bodies first
        this.bodies.forEach(function (body) {
            // Move with current velocity
            body.applyMotion(delta);
            // Apply gravity, if applicable
            if (body.inverseMass > 0) {
                body.addImmediateForce(0, 9.81 / body.inverseMass * _this.gravityRate, delta);
            }
        });
        // Update all the constraints
        this.constraints.forEach(function (constraint) {
            if (constraint.enabled) {
                constraint.init(delta);
            }
        });
        for (var i = 0; i < this.constraintSubsteps; i++) {
            this.constraints.forEach(function (constraint) {
                if (constraint.enabled) {
                    // Note: we don't need to divide the delta because of the lambda in the constraints.
                    // Constraints can be evaluated many times per frame without increasing energy.
                    constraint.apply(delta);
                }
            });
        }
        // Recalculate all the velocities. This step _can_ be skipped because 
        // we calculate the velocity immediatly when applying impulses
        // but this will be additionally robust if we move objects without affecting the velocity.
        this.bodies.forEach(function (body) { return body.recalculateVelocity(delta); });
        // Then finally we perform damping as well. Please note that in most of the examples we don't actually do much of any damping (damperCompliance < 0)
        for (var i = 0; i < this.constraintSubsteps; i++) {
            this.constraints.forEach(function (constraint) {
                if (constraint.enabled) {
                    // Note: we don't need to divide the delta because of the lambda in the constraints.
                    // Constraints can be evaluated many times per frame without increasing energy.
                    constraint.applyDamping(delta);
                }
            });
        }
    };
    SolverScene.prototype.draw = function (graphics) {
        this.constraintGraphics.forEach(function (graphic) { return graphic.draw(graphics); });
        this.bodyGraphics.forEach(function (graphic) { return graphic.draw(graphics); });
    };
    SolverScene.prototype.drawDebug = function (graphics, bodyRadius) {
        var scale = 4;
        graphics.setLineWidthInPoints(2);
        graphics.setStrokeColor("red");
        this.constraints.forEach(function (constraint) {
            if (!constraint.enabled)
                return;
            if ((constraint instanceof DistanceConstraint2D_1.DistanceConstraint2D)) {
                var from = constraint.from.getGlobalAttachmentPosition(new Vector2_1.Vector2());
                var to = constraint.to.getGlobalAttachmentPosition(new Vector2_1.Vector2());
                graphics.drawLine(from.x, from.y, to.x, to.y);
                graphics.drawCircle(from.x, from.y, graphics.pointSize * scale, false);
                graphics.drawCircle(to.x, to.y, graphics.pointSize * scale, false);
            }
            if ((constraint instanceof PinConstraint2D_1.PinConstraint2D)) {
                var attachment = constraint.attachment.getGlobalAttachmentPosition(new Vector2_1.Vector2());
                var origin_1 = constraint.origin;
                var size = scale * graphics.pointSize * 1;
                graphics.drawLine(origin_1.x, origin_1.y, attachment.x, attachment.y);
                graphics.drawLine(attachment.x - size, attachment.y - size, attachment.x + size, attachment.y + size);
                graphics.drawLine(attachment.x - size, attachment.y + size, attachment.x + size, attachment.y - size);
            }
            if ((constraint instanceof AxisConstraint2D_1.AxisConstraint2D)) {
                var attachment = constraint.attachment.getGlobalAttachmentPosition(new Vector2_1.Vector2());
                var origin_2 = constraint.origin;
                var axis = constraint.axis;
                origin_2 = attachment;
                var axisSize = scale * graphics.pointSize * 8;
                var anx = axis.y * axisSize / 4;
                var any = -axis.x * axisSize / 4;
                graphics.drawLine(origin_2.x - anx, origin_2.y - any, origin_2.x + anx, origin_2.y + any);
                graphics.drawLine(origin_2.x - axis.x * axisSize, origin_2.y - axis.y * axisSize, origin_2.x + axis.x * axisSize, origin_2.y + axis.y * axisSize);
            }
        });
        graphics.setStrokeColor("green");
        this.bodies.forEach(function (body) {
            graphics.drawCircle(body.position.x, body.position.y, bodyRadius, false);
            graphics.drawLine(body.position.x, body.position.y, body.position.x + body.basis.xx * bodyRadius * 1.1, body.position.y + body.basis.xy * bodyRadius * 1.1);
        });
    };
    return SolverScene;
}());
exports.SolverScene = SolverScene;


/***/ }),

/***/ "./src/ts/app/paths/EnginePartPaths.ts":
/*!*********************************************!*\
  !*** ./src/ts/app/paths/EnginePartPaths.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EnginePartPaths = void 0;
var EnginePartPaths = /** @class */ (function () {
    function EnginePartPaths() {
        this.lineWidth = 1;
    }
    EnginePartPaths.prototype.createPiston = function (width, height) {
        var path = new Path2D();
        var w = width / 2;
        var h = height / 2;
        var holeRadius = this.lineWidth * 2; //Math.min(w, h) / 4;
        var lowerIndentRadius = this.lineWidth * 2;
        var topStartOffset = -h;
        var topEndOffset = -h + h / 4;
        var sealStartOffset = topEndOffset + this.lineWidth;
        var sealEndOffset = sealStartOffset + this.lineWidth;
        var bottomStartOffset = sealEndOffset + this.lineWidth;
        var bottomEndOffset = h;
        var holeOffset = (bottomStartOffset + bottomEndOffset) / 2;
        holeOffset = 0;
        // Top
        path.moveTo(-w, topStartOffset);
        path.bezierCurveTo(-w / 2, topStartOffset * 1.2, w / 2, topStartOffset * 1.2, w, topStartOffset);
        path.lineTo(w, topEndOffset);
        path.lineTo(-w, topEndOffset);
        path.lineTo(-w, topStartOffset);
        path.closePath();
        // Seal
        path.moveTo(-w, sealStartOffset);
        path.lineTo(w, sealStartOffset);
        path.lineTo(w, sealEndOffset);
        path.lineTo(-w, sealEndOffset);
        path.lineTo(-w, sealStartOffset);
        path.closePath();
        // Bottom
        path.moveTo(-w, bottomStartOffset);
        path.lineTo(w, bottomStartOffset);
        path.lineTo(w, bottomEndOffset);
        path.lineTo(w, bottomEndOffset);
        path.lineTo(w - lowerIndentRadius, bottomEndOffset);
        path.arc(w - lowerIndentRadius * 2, bottomEndOffset, lowerIndentRadius, 0, -Math.PI * 0.5, true);
        path.arc(-w + lowerIndentRadius * 2, bottomEndOffset, lowerIndentRadius, -Math.PI * 0.5, -Math.PI, true);
        path.lineTo(-w + lowerIndentRadius, bottomEndOffset);
        path.lineTo(-w, bottomEndOffset);
        path.lineTo(-w, bottomStartOffset);
        path.closePath();
        // Hole
        path.moveTo(holeRadius, holeOffset);
        path.arc(0, holeOffset, holeRadius, 0, Math.PI * 2, true);
        path.closePath();
        return path;
    };
    EnginePartPaths.prototype.createArm = function (length) {
        var path = new Path2D();
        var topHoleRadius = this.lineWidth * 2;
        var bottomHoleRadius = this.lineWidth * 3;
        var bottomRadius = bottomHoleRadius + this.lineWidth;
        var topRadius = topHoleRadius + this.lineWidth;
        var bezierOffset = length / 4;
        var bottomOffsetX = 0;
        var topOffsetX = length;
        path.moveTo(bottomOffsetX, -bottomRadius);
        path.bezierCurveTo(bottomOffsetX + bezierOffset, -topRadius, topOffsetX - bezierOffset, -topRadius / 2, topOffsetX, -topRadius);
        path.arc(topOffsetX, 0, topRadius, -Math.PI / 2, Math.PI / 2, false);
        path.bezierCurveTo(topOffsetX - bezierOffset, topRadius / 2, bottomOffsetX + bezierOffset, topRadius, bottomOffsetX, bottomRadius);
        path.arc(bottomOffsetX, 0, bottomRadius, Math.PI / 2, -Math.PI / 2, false);
        path.closePath();
        // Top hole
        path.moveTo(bottomOffsetX + bottomHoleRadius, 0);
        path.arc(bottomOffsetX, 0, bottomHoleRadius, 0, Math.PI * 2, true);
        path.closePath();
        // Bottom hole
        path.moveTo(topOffsetX + topHoleRadius, 0);
        path.arc(topOffsetX, 0, topHoleRadius, 0, Math.PI * 2, true);
        path.closePath();
        return path;
    };
    EnginePartPaths.prototype.createCounterWeight = function (radius) {
        var path = new Path2D();
        var innerRadius = radius * 0.3;
        var centerOffset = radius * 0.1;
        var attachmentRadius = this.lineWidth * 2;
        // Main shape
        // path.moveTo(radius, -innerRadius);
        // path.arc(radius, 0, innerRadius, -Math.PI * 0.5, Math.PI * 0.5);
        // path.arc(radius, radius, innerRadius, -Math.PI * 0.5, -Math.PI, true);
        // path.arc(innerRadius, 0, radius, Math.PI * 0.5, Math.PI * 1.5);
        // path.arc(radius, -radius, innerRadius, -Math.PI, -Math.PI * 1.5, true);
        path.moveTo(radius, -innerRadius);
        path.arc(radius, 0, innerRadius, -Math.PI * 0.5, Math.PI * 0.5);
        path.lineTo(centerOffset, innerRadius);
        path.arc(centerOffset, 0, radius, Math.PI * 0.6, Math.PI * 1.4, false);
        path.lineTo(centerOffset, -innerRadius);
        path.lineTo(radius, -innerRadius);
        path.closePath();
        // Left hole
        path.moveTo(attachmentRadius, 0);
        path.arc(0, 0, attachmentRadius, 0, Math.PI * 2, true);
        path.closePath();
        // Right hole
        path.moveTo(radius + attachmentRadius, 0);
        path.arc(radius, 0, attachmentRadius, 0, Math.PI * 2, true);
        path.closePath();
        return path;
    };
    EnginePartPaths.prototype.createCylinderWalls = function (innerWidth, top, bottom, valveWidth, valveOffsetFromCenter) {
        var path = new Path2D();
        var thickness = this.lineWidth * 2;
        var midthickness = this.lineWidth * 2;
        var midSize = valveOffsetFromCenter - this.lineWidth;
        var boundSize = innerWidth / 2 - valveWidth - valveOffsetFromCenter;
        var w = innerWidth / 2 + this.lineWidth;
        var wOuter = w + thickness;
        // Left side
        path.moveTo(-w, top);
        path.lineTo(-w, bottom);
        path.lineTo(-wOuter, bottom);
        path.lineTo(-wOuter, top);
        path.moveTo(-w, top);
        path.arc(-w, top, thickness, Math.PI, Math.PI * 1.5);
        path.lineTo(-w + boundSize, top - thickness);
        path.lineTo(-w + boundSize, top);
        path.moveTo(-w, top);
        path.closePath();
        // Right side
        path.moveTo(w, top);
        path.lineTo(w, bottom);
        path.lineTo(wOuter, bottom);
        path.lineTo(wOuter, top);
        path.moveTo(w, top);
        path.arc(w, top, thickness, 0, -Math.PI * 0.5, true);
        path.lineTo(w - boundSize, top - thickness);
        path.lineTo(w - boundSize, top);
        path.moveTo(w, top);
        path.closePath();
        // Center bit
        path.moveTo(-midSize, top);
        path.lineTo(midSize, top);
        path.lineTo(midSize, top - midthickness);
        path.lineTo(-midSize, top - midthickness);
        path.lineTo(-midSize, top);
        path.closePath();
        return path;
    };
    EnginePartPaths.prototype.createValve = function (width, height) {
        var path = new Path2D();
        var w = width / 2;
        var thickness = this.lineWidth;
        var funnelHeight = w / 2 + thickness;
        var funnelWidth = this.lineWidth / 2;
        path.moveTo(w, 0);
        path.lineTo(w, -thickness);
        path.lineTo(funnelWidth, -funnelHeight);
        path.lineTo(funnelWidth, -height);
        path.lineTo(-funnelWidth, -height);
        path.lineTo(-funnelWidth, -funnelHeight);
        path.lineTo(-w, -thickness);
        path.lineTo(-w, 0);
        path.lineTo(w, 0);
        return path;
    };
    EnginePartPaths.prototype.createCam = function (radius, maxRadius) {
        var path = new Path2D();
        var holeRadius = this.lineWidth * 1;
        // Regular shape
        path.moveTo(0, -radius);
        path.bezierCurveTo(maxRadius * 0.25, -radius, maxRadius, -radius * 0.2, maxRadius, 0);
        path.bezierCurveTo(maxRadius, radius * 0.2, maxRadius * 0.25, radius, 0, radius);
        path.arc(0, 0, radius, Math.PI * 0.5, Math.PI * 1.5);
        path.closePath();
        // Hole
        path.moveTo(holeRadius, 0);
        path.arc(0, 0, holeRadius, 0, Math.PI * 2, true);
        path.closePath();
        return path;
    };
    return EnginePartPaths;
}());
exports.EnginePartPaths = EnginePartPaths;


/***/ }),

/***/ "./src/ts/app/paths/RigidBodyPaths.ts":
/*!********************************************!*\
  !*** ./src/ts/app/paths/RigidBodyPaths.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RigidBodyPaths = void 0;
var RigidBodyPaths = /** @class */ (function () {
    function RigidBodyPaths() {
        this.lineWidth = 1;
    }
    RigidBodyPaths.prototype.createConnection = function (length) {
        var path = new Path2D();
        var w = this.lineWidth / 2;
        path.moveTo(0, -w);
        path.lineTo(length, -w);
        path.lineTo(length, w);
        path.lineTo(0, w);
        path.lineTo(0, -w);
        path.closePath();
        return path;
    };
    RigidBodyPaths.prototype.createBody = function (radius) {
        var path = new Path2D();
        var holeRadius = this.lineWidth;
        // Regular shape
        path.moveTo(0, radius);
        path.arc(0, 0, radius, 0, Math.PI * 2);
        path.closePath();
        // Hole
        path.moveTo(radius / 2 + holeRadius, 0);
        path.arc(radius / 2, 0, holeRadius, 0, Math.PI * 2, true);
        path.closePath();
        return path;
    };
    return RigidBodyPaths;
}());
exports.RigidBodyPaths = RigidBodyPaths;


/***/ }),

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var EngineTestScene_1 = __webpack_require__(/*! app/EngineTestScene */ "./src/ts/app/EngineTestScene.ts");
var ConstraintAttachment2D_1 = __webpack_require__(/*! lib/xpbd/ConstraintAttachment2D */ "./src/ts/lib/xpbd/ConstraintAttachment2D.ts");
var PinConstraint2D_1 = __webpack_require__(/*! lib/xpbd/PinConstraint2D */ "./src/ts/lib/xpbd/PinConstraint2D.ts");
var Graphics2D_1 = __webpack_require__(/*! lib/graphics/Graphics2D */ "./src/ts/lib/graphics/Graphics2D.ts");
var ViewportSettings_1 = __webpack_require__(/*! lib/settings/ViewportSettings */ "./src/ts/lib/settings/ViewportSettings.ts");
var Vector2_1 = __webpack_require__(/*! lib/math/Vector2 */ "./src/ts/lib/math/Vector2.ts");
var PendulumTestScene_1 = __webpack_require__(/*! app/PendulumTestScene */ "./src/ts/app/PendulumTestScene.ts");
var Menu_1 = __webpack_require__(/*! app/Menu */ "./src/ts/app/Menu.ts");
var ClothTestScene_1 = __webpack_require__(/*! app/ClothTestScene */ "./src/ts/app/ClothTestScene.ts");
var BridgeTestScene_1 = __webpack_require__(/*! app/BridgeTestScene */ "./src/ts/app/BridgeTestScene.ts");
var ComplicatedSceneTest_1 = __webpack_require__(/*! app/ComplicatedSceneTest */ "./src/ts/app/ComplicatedSceneTest.ts");
var graphics;
var scene;
var sceneName = "";
var substeps = 1;
var gravityRate = 1;
var timeRate = 1;
var drawOverlay = false;
function setupMouseControls(canvas) {
    var selected = undefined;
    var touchId = -1;
    var offsetX = 0;
    var offsetY = 0;
    // Hacky nullable stuff.
    var constraint = new PinConstraint2D_1.PinConstraint2D(new ConstraintAttachment2D_1.ConstraintAttachment2D(selected), new Vector2_1.Vector2());
    constraint.enabled = false;
    constraint.compliance = 0.000001;
    constraint.damperCompliance = 0.001;
    var select = function (body) {
        var _a;
        selected = body;
        constraint.attachment = new ConstraintAttachment2D_1.ConstraintAttachment2D(selected, (_a = body === null || body === void 0 ? void 0 : body.inverseBasis) === null || _a === void 0 ? void 0 : _a.transform(new Vector2_1.Vector2(offsetX, offsetY)));
        constraint.enabled = body !== undefined;
        if (scene.constraints.indexOf(constraint) < 0) {
            scene.constraints = __spreadArray([constraint], scene.constraints, true);
        }
    };
    // TODO touch controls too
    canvas.addEventListener("mousedown", function (ev) {
        var p = graphics.canvasToViewport(ev.offsetX, ev.offsetY);
        var distance = 0.4;
        scene.bodies.forEach(function (body) {
            var d = Vector2_1.Vector2.fDistance(p.x, p.y, body.position.x, body.position.y);
            if (d < distance) {
                distance = d;
                offsetX = p.x - body.position.x;
                offsetY = p.y - body.position.y;
                select(body);
            }
        });
    });
    canvas.addEventListener("touchstart", function (ev) {
        var _loop_1 = function (i) {
            var touch = ev.changedTouches.item(i);
            ev.preventDefault();
            if (touch == null)
                return "continue";
            var p = graphics.canvasToViewport(touch === null || touch === void 0 ? void 0 : touch.clientX, touch === null || touch === void 0 ? void 0 : touch.clientY);
            var distance = 0.4;
            scene.bodies.forEach(function (body) {
                var d = Vector2_1.Vector2.fDistance(p.x, p.y, body.position.x, body.position.y);
                if (d < distance) {
                    distance = d;
                    offsetX = p.x - body.position.x;
                    offsetY = p.y - body.position.y;
                    select(body);
                    touchId = touch.identifier;
                    constraint.origin.apply(p.x, p.y);
                }
            });
        };
        for (var i = 0; i < ev.changedTouches.length; i++) {
            _loop_1(i);
        }
    });
    canvas.addEventListener("mousemove", function (ev) {
        var p = graphics.canvasToViewport(ev.offsetX, ev.offsetY);
        constraint.origin.apply(p.x, p.y);
    });
    canvas.addEventListener("touchmove", function (ev) {
        for (var i = 0; i < ev.changedTouches.length; i++) {
            var touch = ev.changedTouches.item(i);
            if ((touch === null || touch === void 0 ? void 0 : touch.identifier) == touchId) {
                var p = graphics.canvasToViewport(touch.clientX, touch.clientY);
                constraint.origin.apply(p.x, p.y);
            }
        }
    });
    canvas.addEventListener("touchend", function (ev) {
        select(undefined);
        touchId = -1;
    });
    canvas.addEventListener("touchcancel", function (ev) {
        select(undefined);
        touchId = -1;
    });
    canvas.addEventListener("mouseup", function (ev) {
        select(undefined);
    });
    canvas.addEventListener("mouseleave", function (ev) {
        select(undefined);
    });
}
function setupResizing(canvas) {
    var sync = function () {
        var v = graphics.viewportSettings;
        graphics = new Graphics2D_1.Graphics2D(canvas);
        graphics.setViewportSettings(v);
    };
    window.addEventListener("resize", function () { return sync(); });
    sync();
}
function setSolverRate(s) {
    substeps = s;
    scene.substeps = s;
    sync();
}
function setGravity(s) {
    gravityRate = s;
    sync();
}
function setTimeRate(s) {
    timeRate = s;
    sync();
}
function setupButtons() {
    var clickOn = function (id, action) {
        var element = document.getElementById(id);
        element === null || element === void 0 ? void 0 : element.addEventListener("click", action);
    };
    clickOn("scene-pendulum-3", goto3Pendulum);
    clickOn("scene-pendulum-4", goto4Pendulum);
    clickOn("scene-pendulum-10", goto10Pendulum);
    clickOn("scene-rope-soft", gotoSoftRope);
    clickOn("scene-bridge", gotoBridge);
    clickOn("scene-cloth", gotoCloth);
    clickOn("scene-engine-4", gotoEngineScene4Cylinder);
    clickOn("scene-engine-10", gotoEngineScene10Cylinder);
    clickOn("scene-engine-100", gotoEngineScene100Cylinder);
    clickOn("scene-complicated", gotoComplicated);
    clickOn("settings-toggle-overlay", toggleOverlay);
    clickOn("settings-substep-1", function () { return setSolverRate(1); });
    clickOn("settings-substep-10", function () { return setSolverRate(10); });
    clickOn("settings-substep-100", function () { return setSolverRate(100); });
    clickOn("settings-substep-1000", function () { return setSolverRate(1000); });
    clickOn("settings-substep-10000", function () { return setSolverRate(10000); });
    clickOn("settings-gravity-1", function () { return setGravity(1); });
    clickOn("settings-gravity-2", function () { return setGravity(2); });
    clickOn("settings-gravity-4", function () { return setGravity(4); });
    clickOn("settings-gravity-8", function () { return setGravity(8); });
}
function toggleOverlay() {
    drawOverlay = !drawOverlay;
}
function gotoEngineScene4Cylinder() {
    sceneName = "Engine, with 4 cylinders";
    scene = (0, EngineTestScene_1.createEngineTestScene)(4);
    graphics.setViewportSettings(new ViewportSettings_1.ViewportSettings(-3, -3, 3, 3, ViewportSettings_1.ViewportFit.Contain));
    sync();
}
function gotoEngineScene10Cylinder() {
    sceneName = "Engine, with 10 cylinders";
    scene = (0, EngineTestScene_1.createEngineTestScene)(10);
    graphics.setViewportSettings(new ViewportSettings_1.ViewportSettings(-8, -3, 8, 3, ViewportSettings_1.ViewportFit.Contain));
    sync();
}
function gotoEngineScene100Cylinder() {
    sceneName = "Engine, with 100 cylinders";
    scene = (0, EngineTestScene_1.createEngineTestScene)(100);
    graphics.setViewportSettings(new ViewportSettings_1.ViewportSettings(-80, -3, 80, 3, ViewportSettings_1.ViewportFit.Contain));
    sync();
}
function goto3Pendulum() {
    sceneName = "Pendulum, with 2 loose bodies";
    scene = (0, PendulumTestScene_1.createPendulumTest)(3, 2);
    graphics.setViewportSettings(new ViewportSettings_1.ViewportSettings(-2, -5, 2, 7, ViewportSettings_1.ViewportFit.Contain));
    sync();
}
function gotoDamperTest() {
    sceneName = "Pendulum, with 2 loose bodies";
    scene = (0, PendulumTestScene_1.createPendulumTest)(2, 2, 0.001, 0.1);
    graphics.setViewportSettings(new ViewportSettings_1.ViewportSettings(-2, -5, 2, 7, ViewportSettings_1.ViewportFit.Contain));
    sync();
}
function goto4Pendulum() {
    sceneName = "Pendulum, with 3 loose bodies";
    scene = (0, PendulumTestScene_1.createPendulumTest)(4, 1.5, 0, 0.01);
    graphics.setViewportSettings(new ViewportSettings_1.ViewportSettings(-2, -5, 2, 7, ViewportSettings_1.ViewportFit.Contain));
    sync();
}
function goto10Pendulum() {
    sceneName = "Pendulum, with 9 loose bodies";
    scene = (0, PendulumTestScene_1.createPendulumTest)(10, 0.5);
    graphics.setViewportSettings(new ViewportSettings_1.ViewportSettings(-2, -3, 2, 7, ViewportSettings_1.ViewportFit.Contain));
    sync();
}
function gotoSoftRope() {
    sceneName = "Soft rope (20 nodes), 100kN/unit of stretching, with damping";
    scene = (0, PendulumTestScene_1.createPendulumTest)(20, 0.25, 0.00001, 0.001);
    graphics.setViewportSettings(new ViewportSettings_1.ViewportSettings(-2, -3, 2, 7, ViewportSettings_1.ViewportFit.Contain));
    sync();
}
function gotoBridge() {
    sceneName = "A bridge";
    scene = (0, BridgeTestScene_1.createBridgeScene)(7, 1, 0, 0.1);
    graphics.setViewportSettings(new ViewportSettings_1.ViewportSettings(-1, -2, 8, 6, ViewportSettings_1.ViewportFit.Contain));
    sync();
}
function gotoCloth() {
    sceneName = "Cloth";
    scene = (0, ClothTestScene_1.createCloth)(10, 10, 0.0001, 0.01);
    graphics.setViewportSettings(new ViewportSettings_1.ViewportSettings(0, -1, 10, 12, ViewportSettings_1.ViewportFit.Contain));
    sync();
}
function gotoComplicated() {
    sceneName = "Complicated. Recommended to use 'Toggle debug overlay' in the menu.";
    scene = (0, ComplicatedSceneTest_1.createComplicatedScene)();
    graphics.setViewportSettings(new ViewportSettings_1.ViewportSettings(-5, -5, 5, 5, ViewportSettings_1.ViewportFit.Contain));
    sync();
}
function sync() {
    scene.substeps = substeps;
    scene.timeRate = timeRate;
    scene.gravityRate = gravityRate;
    var infoOverlay = document.getElementById("info-overlay");
    if (!infoOverlay)
        return;
    var info = "";
    info += sceneName + "<br/>";
    info += "".concat(graphics.width, "x").concat(graphics.height, "  (x").concat(devicePixelRatio, ") <br />");
    info += (substeps * 60) + "Hz <br />";
    info += (scene.bodies.length) + " bodies<br />";
    info += (scene.constraints.length) + " constraints<br />";
    info += (gravityRate) + "x gravity";
    infoOverlay.innerHTML = info;
}
document.addEventListener("DOMContentLoaded", function () { return __awaiter(void 0, void 0, void 0, function () {
    var canvas, lineWidth, update, draw, previousTime, tick;
    return __generator(this, function (_a) {
        (0, Menu_1.initMenu)();
        // Expose functions :)
        window.setGravity = setGravity;
        window.setSolverRate = setSolverRate;
        window.setTimeRate = setTimeRate;
        canvas = document.getElementById("canvas");
        graphics = new Graphics2D_1.Graphics2D(canvas);
        graphics.setViewportSettings(new ViewportSettings_1.ViewportSettings(-3, -3, 3, 3, ViewportSettings_1.ViewportFit.Contain));
        setupResizing(canvas);
        setupMouseControls(canvas);
        setupButtons();
        lineWidth = 0.06;
        window.lineWidth = lineWidth;
        goto3Pendulum();
        scene.substeps = 1;
        update = function (delta) {
            scene.update(delta);
        };
        draw = function () {
            graphics.setup();
            var background = "#e0ddd5";
            var foreground = "#352f20";
            graphics.setFillColor(background);
            graphics.drawBackground();
            graphics.setLineWidth(lineWidth);
            graphics.setStrokeColor(background);
            graphics.setFillColor(foreground);
            scene.draw(graphics);
            if (drawOverlay) {
                scene.drawDebug(graphics, 0.3);
            }
        };
        previousTime = window.performance.now();
        tick = function () {
            requestAnimationFrame(tick);
            var currentTime = window.performance.now();
            var delta = (currentTime - previousTime) / 1000;
            if (delta > 1 / 30) {
                delta = 1 / 30;
            }
            previousTime = currentTime;
            // In reality you should _never_ use the actual elapsed delta but a fixed delta time
            // but this is fine for a nice and smooth browser experience.
            update(delta);
            draw();
        };
        requestAnimationFrame(tick);
        return [2 /*return*/];
    });
}); });


/***/ }),

/***/ "./src/ts/lib/graphics/Graphics2D.ts":
/*!*******************************************!*\
  !*** ./src/ts/lib/graphics/Graphics2D.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Graphics2D = void 0;
var DocumentSettings_1 = __webpack_require__(/*! lib/settings/DocumentSettings */ "./src/ts/lib/settings/DocumentSettings.ts");
var ViewportSettings_1 = __webpack_require__(/*! lib/settings/ViewportSettings */ "./src/ts/lib/settings/ViewportSettings.ts");
function generateDocumentSettingsFromCanvas(canvas) {
    var width = canvas.width;
    var height = canvas.height;
    if (canvas instanceof HTMLCanvasElement) {
        width = canvas.offsetWidth * window.devicePixelRatio;
        height = canvas.offsetHeight * window.devicePixelRatio;
    }
    return new DocumentSettings_1.DocumentSettings(width, height, DocumentSettings_1.DocumentSettings.DefaultDPI * window.devicePixelRatio, DocumentSettings_1.DocumentUnits.px);
}
function generateViewportSettingsFromCanvas(canvas) {
    return new ViewportSettings_1.ViewportSettings(0, 0, canvas.width, canvas.height, ViewportSettings_1.ViewportFit.Contain);
}
var Graphics2D = /** @class */ (function () {
    function Graphics2D(canvas, documentSettings, viewportSettings) {
        this.canvas = canvas;
        var context = this.canvas.getContext("2d");
        if (context === null) {
            throw new Error("Failed to initialize context");
        }
        this.context = context;
        this._documentSettings = documentSettings !== null && documentSettings !== void 0 ? documentSettings : generateDocumentSettingsFromCanvas(canvas);
        this._viewportSettings = viewportSettings !== null && viewportSettings !== void 0 ? viewportSettings : generateViewportSettingsFromCanvas(canvas);
        this.canvas.width = this.documentSettings.widthInPixels;
        this.canvas.height = this.documentSettings.heightInPixels;
        this.context.lineCap = "round";
        this.context.miterLimit = 0.1;
        this.setup();
    }
    // ======================================================= //
    // Setup
    // ======================================================= //
    Graphics2D.prototype.setup = function () {
        this.context.resetTransform();
        this.context.clearRect(0, 0, this.width, this.height);
        var aspectRatio = this._viewportSettings.aspectRatio;
        var minSize = Math.min(this.width / aspectRatio, this.height);
        var maxSize = Math.max(this.width / aspectRatio, this.height);
        this.context.translate(this.width / 2, this.height / 2);
        if (this._viewportSettings.fit === ViewportSettings_1.ViewportFit.Fill) {
            this.context.scale(this.width / 2, this.height / 2);
        }
        if (this._viewportSettings.fit === ViewportSettings_1.ViewportFit.Contain) {
            this.context.scale(minSize / 2, minSize / 2);
        }
        if (this._viewportSettings.fit === ViewportSettings_1.ViewportFit.Cover) {
            this.context.scale(maxSize / 2, maxSize / 2);
        }
        // Viewport shouldn't have a width and height, but just one type of unit (height?) that scales this automatically based on factors... (landscape/portrait?)
        // Then we can also eliminate one of the viewport fit categories right? Because we either match height or width
        this.context.scale(1 / (this._viewportSettings.width / 2), 1 / (this._viewportSettings.height / 2));
        if (this._viewportSettings.fit !== ViewportSettings_1.ViewportFit.Fill) {
            this.context.scale(aspectRatio, 1);
        }
        this.context.translate(-this._viewportSettings.centerX, -this._viewportSettings.centerY);
    };
    // ======================================================= //
    // Settings
    // ======================================================= //
    Graphics2D.prototype.setFillColor = function (color) {
        this.context.fillStyle = color;
    };
    Graphics2D.prototype.setFillPattern = function (pattern) {
        this.context.fillStyle = pattern;
    };
    Graphics2D.prototype.setStrokeColor = function (color) {
        this.context.strokeStyle = color;
    };
    Graphics2D.prototype.setLineWidthInPoints = function (width) {
        this.context.lineWidth = this.pointSize * width;
    };
    Graphics2D.prototype.setLineWidth = function (width) {
        this.context.lineWidth = width;
    };
    Object.defineProperty(Graphics2D.prototype, "pixelSize", {
        // Returns the size of a pixel in viewport units
        get: function () {
            var t = this.context.getTransform();
            var sr = Math.sqrt(t.a * t.a + t.b * t.b);
            var st = Math.sqrt(t.c * t.c + t.d * t.d);
            return 1 / ((sr + st) / 2);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Graphics2D.prototype, "pointSize", {
        // Returns the size of a point in viewport units
        get: function () {
            return this.pixelSize * this._documentSettings.pixelsPerPoint;
        },
        enumerable: false,
        configurable: true
    });
    // ======================================================= //
    // Helpers
    // ======================================================= //
    // TODO this should be wrappnig the pattern in some way to still receive the image....
    Graphics2D.prototype.createPattern = function (image) {
        return this.context.createPattern(image, "repeat");
    };
    Graphics2D.prototype.transformPattern = function (image, pattern, widthInPoints, heightInPoints, angle) {
        var s = Math.sin(angle);
        var c = Math.cos(angle);
        var w = 1 / image.width * this.pointSize * widthInPoints;
        var h = 1 / image.height * this.pointSize * heightInPoints;
        var matrix = [
            c * w, s * w, 0,
            -s * h, c * w, 0,
        ];
        // [a c e]
        // [b d f]
        // [0 0 1]
        pattern.setTransform(new DOMMatrix([
            matrix[0], matrix[3],
            matrix[1], matrix[4],
            matrix[2], matrix[5]
        ]));
    };
    // ======================================================= //
    // Translations
    // ======================================================= //
    Graphics2D.prototype.push = function () {
        this.context.save();
    };
    Graphics2D.prototype.pop = function () {
        this.context.restore();
    };
    Graphics2D.prototype.scale = function (x, y) {
        this.context.scale(x, y);
    };
    Graphics2D.prototype.rotate = function (angle) {
        this.context.rotate(angle);
    };
    Graphics2D.prototype.rotateDeg = function (angle) {
        this.context.rotate(angle / 180 * Math.PI);
    };
    Graphics2D.prototype.translate = function (x, y) {
        this.context.translate(x, y);
    };
    // ======================================================= //
    // Drawing
    // ======================================================= //
    Graphics2D.prototype.drawRectangle = function (x, y, width, height, fill) {
        this.context.beginPath();
        this.context.moveTo(x, y);
        this.context.lineTo(x + width, y);
        this.context.lineTo(x + width, y + height);
        this.context.lineTo(x, y + height);
        this.context.closePath();
        if (fill) {
            this.context.fill();
        }
        else {
            this.context.stroke();
        }
    };
    Graphics2D.prototype.drawCircle = function (x, y, radius, fill) {
        this.context.beginPath();
        this.context.arc(x, y, radius, 0, Math.PI * 2, false);
        if (fill) {
            this.context.fill();
        }
        else {
            this.context.stroke();
        }
    };
    Graphics2D.prototype.drawLine = function (x, y, x2, y2) {
        this.context.beginPath();
        this.context.moveTo(x, y);
        this.context.lineTo(x2, y2);
        this.context.stroke();
    };
    Graphics2D.prototype.drawPath = function (pathOrCreatePath, fill) {
        if (typeof (pathOrCreatePath) === "object") {
            var path = pathOrCreatePath;
            if (fill)
                this.context.fill(path);
            else
                this.context.stroke(path);
            return path;
        }
        else {
            var path = new Path2D();
            pathOrCreatePath(path);
            if (fill)
                this.context.fill(path);
            else
                this.context.stroke(path);
            return path;
        }
    };
    Graphics2D.prototype.drawPaths = function (paths, fill) {
        var _this = this;
        paths.forEach(function (path) { return _this.drawPath(path, fill); });
    };
    Graphics2D.prototype.drawImage = function (image, x, y, w, h) {
        this.context.drawImage(image, x, y, w !== null && w !== void 0 ? w : image.width, h !== null && h !== void 0 ? h : image.height);
    };
    Graphics2D.prototype.drawBackground = function () {
        var f = this.canvasToViewport(0, 0);
        var t = this.canvasToViewport(this.width, this.height);
        this.drawRectangle(f.x, f.y, t.x - f.x, t.y - f.y, true);
    };
    // ======================================================= //
    // Clipping
    // ======================================================= //
    Graphics2D.prototype.clipRectangle = function (x, y, w, h) {
        return this.clip(function (path) {
            path.rect(x, y, w, h);
            path.closePath();
        });
    };
    Graphics2D.prototype.clip = function (pathOrCreatePath) {
        if (typeof (pathOrCreatePath) === "object") {
            var path = pathOrCreatePath;
            this.context.clip(path);
            return path;
        }
        else {
            var path = new Path2D();
            pathOrCreatePath(path);
            this.context.clip(path);
            return path;
        }
    };
    // ======================================================= //
    // Settings and conversions
    // ======================================================= //
    Graphics2D.prototype.setViewportSettings = function (settings) {
        this._viewportSettings = settings;
        this.setup();
    };
    Graphics2D.prototype.canvasToViewport = function (x, y) {
        if (this.canvas instanceof HTMLCanvasElement) {
            x /= this.canvas.offsetWidth;
            y /= this.canvas.offsetHeight;
            x *= this.canvas.width;
            y *= this.canvas.height;
        }
        var transform = this.context.getTransform();
        transform.invertSelf();
        return transform.transformPoint({ x: x, y: y });
    };
    Object.defineProperty(Graphics2D.prototype, "width", {
        // ======================================================= //
        // Getters
        // ======================================================= //
        get: function () {
            return this.canvas.width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Graphics2D.prototype, "height", {
        get: function () {
            return this.canvas.height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Graphics2D.prototype, "viewportSettings", {
        get: function () {
            return this._viewportSettings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Graphics2D.prototype, "documentSettings", {
        get: function () {
            return this._documentSettings;
        },
        enumerable: false,
        configurable: true
    });
    return Graphics2D;
}());
exports.Graphics2D = Graphics2D;


/***/ }),

/***/ "./src/ts/lib/math/MathHelper.ts":
/*!***************************************!*\
  !*** ./src/ts/lib/math/MathHelper.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MathHelper = void 0;
var MathHelper = /** @class */ (function () {
    function MathHelper() {
    }
    MathHelper.avarage = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        var sum = 0;
        for (var i = 0; i < values.length; i++) {
            sum += values[i];
        }
        return sum / values.length;
    };
    MathHelper.weightedAvarage = function (weights, values) {
        if (weights.length != values.length)
            throw new Error("weights and avlues don't match length");
        var sum = 0;
        var weightSum = 0;
        for (var i = 0; i < values.length; i++) {
            weightSum += weights[i];
            sum += values[i] * weights[i];
        }
        return sum / weightSum;
    };
    MathHelper.min = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        var min = values[0];
        for (var i = 1; i < values.length; i++) {
            if (values[i] < min)
                values[i] = min;
        }
        return min;
    };
    MathHelper.max = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        var max = values[0];
        for (var i = 1; i < values.length; i++) {
            if (values[i] > max)
                values[i] = max;
        }
        return max;
    };
    MathHelper.remap = function (min, max, newMin, newMax, v) {
        var f = this.inverseLerp(min, max, v);
        return this.lerp(newMin, newMax, f);
    };
    MathHelper.lerp = function (a, b, f) {
        return a + (b - a) * f;
    };
    MathHelper.inverseLerp = function (a, b, v) {
        return (v - a) / (b - a);
    };
    MathHelper.clamp = function (v, min, max) {
        if (v < min)
            return min;
        if (v > max)
            return max;
        return v;
    };
    MathHelper.clip = function (v) {
        return this.clamp(v, 0, 1);
    };
    MathHelper.normalizeAngle = function (angle) {
        angle %= Math.PI * 2;
        if (angle < 0) {
            angle += Math.PI * 2;
        }
        return angle;
    };
    MathHelper.shortestAngle = function (from, to) {
        var diff = (to - from + Math.PI) % (Math.PI * 2) - Math.PI;
        return diff < -Math.PI ? diff + Math.PI * 2 : diff;
    };
    return MathHelper;
}());
exports.MathHelper = MathHelper;


/***/ }),

/***/ "./src/ts/lib/math/Matrix2.ts":
/*!************************************!*\
  !*** ./src/ts/lib/math/Matrix2.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Matrix2 = void 0;
var Vector2_1 = __webpack_require__(/*! ./Vector2 */ "./src/ts/lib/math/Vector2.ts");
var Matrix2 = /** @class */ (function () {
    // ============================================================= //
    // Constructor
    // ============================================================= //
    function Matrix2(m00, m01, m10, m11) {
        // [m00  m01]
        // [m10  m11]
        this.xx = m00;
        this.xy = m10;
        this.yx = m01;
        this.yy = m11;
    }
    Object.defineProperty(Matrix2.prototype, "m00", {
        // [m00  m01]
        // [m10  m11]
        get: function () { return this.xx; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Matrix2.prototype, "m01", {
        get: function () { return this.yx; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Matrix2.prototype, "m10", {
        get: function () { return this.xy; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Matrix2.prototype, "m11", {
        get: function () { return this.yy; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Matrix2.prototype, "determinant", {
        // ============================================================= //
        // Getters
        // ============================================================= //
        get: function () {
            return Vector2_1.Vector2.fCross(this.xx, this.xy, this.yx, this.yy);
        },
        enumerable: false,
        configurable: true
    });
    // ============================================================= //
    // Linear transformations
    // ============================================================= //
    Matrix2.prototype.transformX = function (x, y) { return x * this.xx + y * this.yx; };
    Matrix2.prototype.transformY = function (x, y) { return x * this.xy + y * this.yy; };
    Matrix2.prototype.transform = function (input) {
        return this.transformOut(input, new Vector2_1.Vector2());
    };
    Matrix2.prototype.transformOut = function (input, output) {
        var x = this.transformX(input.x, input.y);
        var y = this.transformY(input.x, input.y);
        return output.apply(x, y);
    };
    // ============================================================= //
    // Setting this
    // ============================================================= //
    Matrix2.prototype.setX = function (x, y) {
        this.xx = x;
        this.xy = y;
        return this;
    };
    Matrix2.prototype.setY = function (x, y) {
        this.yx = x;
        this.yy = y;
        return this;
    };
    Matrix2.prototype.inverse = function () {
        var determinant = this.determinant;
        return this.adjugate().scale(1 / determinant);
    };
    Matrix2.prototype.transpose = function () {
        var temp = this.xy;
        this.xy = this.yx;
        this.yx = temp;
        return this;
    };
    Matrix2.prototype.adjugate = function () {
        // [a  b]
        // [c  d]
        // 
        // [ d -b]
        // [-c  a]
        var a = this.xx;
        var b = this.yx;
        var c = this.xy;
        var d = this.yy;
        this.xx = d;
        this.xy = -c;
        this.yx = -b;
        this.yy = a;
        return this;
    };
    Matrix2.prototype.scale = function (n) {
        this.xx *= n;
        this.xy *= n;
        this.yx *= n;
        this.yy *= n;
        return this;
    };
    Matrix2.prototype.setAsRotation = function (angle) {
        // [c  s]
        // [-s c]
        var s = Math.sin(angle);
        var c = Math.cos(angle);
        this.setX(c, s);
        this.setY(-s, c);
        return this;
    };
    Matrix2.prototype.setAsIdentity = function () {
        this.setX(1, 0);
        this.setY(0, 1);
        return this;
    };
    Matrix2.prototype.setAs = function (other) {
        this.xx = other.xx;
        this.xy = other.xy;
        this.yx = other.yx;
        this.yy = other.yy;
        return this;
    };
    // ============================================================= //
    // Cloning
    // ============================================================= //
    Matrix2.prototype.clone = function () {
        return new Matrix2(this.m00, this.m01, this.m10, this.m11);
    };
    // ============================================================= //
    // Static creations
    // ============================================================= //
    Matrix2.identity = function () { return new Matrix2(1, 0, 0, 1); };
    Matrix2.scaled = function (x, y) { return new Matrix2(x, 0, 0, y); };
    Matrix2.rotation = function (angle) { return new Matrix2(0, 0, 0, 0).setAsRotation(angle); };
    return Matrix2;
}());
exports.Matrix2 = Matrix2;


/***/ }),

/***/ "./src/ts/lib/math/Vector2.ts":
/*!************************************!*\
  !*** ./src/ts/lib/math/Vector2.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vector2 = void 0;
// This class should probably be immutable but isn't for performance reasons...
var Vector2 = /** @class */ (function () {
    function Vector2(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Vector2.prototype.add = function (other) {
        this.x += other.x;
        this.y += other.y;
        return this;
    };
    Vector2.prototype.addX = function (x) { this.x += x; return this; };
    Vector2.prototype.addY = function (y) { this.y += y; return this; };
    Vector2.prototype.sub = function (other) {
        this.x -= other.x;
        this.y -= other.y;
        return this;
    };
    Vector2.prototype.subX = function (x) { this.x -= x; return this; };
    Vector2.prototype.subY = function (y) { this.y -= y; return this; };
    Vector2.prototype.mul = function (other) {
        this.x *= other.x;
        this.y *= other.y;
        return this;
    };
    Vector2.prototype.mulX = function (x) { this.x *= x; return this; };
    Vector2.prototype.mulY = function (y) { this.y *= y; return this; };
    Vector2.prototype.div = function (other) {
        this.x /= other.x;
        this.y /= other.y;
        return this;
    };
    Vector2.prototype.divX = function (x) { this.x /= x; return this; };
    Vector2.prototype.divY = function (y) { this.y /= y; return this; };
    Vector2.prototype.scale = function (scaler) {
        this.x *= scaler;
        this.y *= scaler;
        return this;
    };
    Vector2.prototype.set = function (other) {
        this.x = other.x;
        this.y = other.y;
        return this;
    };
    Vector2.prototype.setZero = function () {
        this.x = 0;
        this.y = 0;
        return this;
    };
    Vector2.prototype.apply = function (x, y) {
        this.x = x;
        this.y = y;
        return this;
    };
    Vector2.prototype.negate = function () {
        this.x = -this.x;
        this.y = -this.y;
        return this;
    };
    Vector2.prototype.normalize = function () {
        var length = this.length;
        if (length > 0) {
            this.x /= length;
            this.y /= length;
        }
        return this;
    };
    Vector2.prototype.perpendicularize = function () {
        var t = this.y;
        this.y = this.x;
        this.x = -t;
        return this;
    };
    Object.defineProperty(Vector2.prototype, "normalized", {
        get: function () {
            return this.clone().normalize();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "sqrLength", {
        get: function () {
            return Vector2.dot(this, this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "length", {
        get: function () {
            return Math.sqrt(this.sqrLength);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "angle", {
        get: function () {
            return Vector2.fAngle(this.y, this.x);
        },
        enumerable: false,
        configurable: true
    });
    Vector2.prototype.distanceTo = function (other) {
        return Vector2.distance(this, other);
    };
    Vector2.prototype.directionTo = function (other) {
        return Vector2.direction(this, other);
    };
    Vector2.direction = function (a, b) {
        return this.directionOut(a, b, new Vector2());
    };
    Vector2.directionOut = function (a, b, out) {
        var dx = Vector2.dx(a, b);
        var dy = Vector2.dy(a, b);
        out.x = dx;
        out.y = dy;
        return out;
    };
    Vector2.tangent = function (a, b) {
        return Vector2.tangentOut(a, b, new Vector2());
    };
    Vector2.tangentOut = function (a, b, out) {
        return Vector2.directionOut(a, b, out);
    };
    Vector2.normal = function (a, b) {
        return Vector2.normalOut(a, b, new Vector2());
    };
    Vector2.normalOut = function (a, b, out) {
        return Vector2.directionOut(a, b, out).perpendicularize();
    };
    Vector2.distance = function (a, b) {
        return Vector2.fDistance(a.x, a.y, b.x, b.y);
    };
    Vector2.prototype.lerpTo = function (other, f) {
        return Vector2.lerpOut(this, other, this, f);
    };
    Vector2.lerp = function (a, b, f) {
        return this.lerpOut(a, b, new Vector2(), f);
    };
    Vector2.lerpOut = function (a, b, out, f) {
        out.x = a.x + (b.x - a.x) * f;
        out.y = a.y + (b.y - a.y) * f;
        return out;
    };
    Vector2.dot = function (a, b) {
        return this.fDot(a.x, a.y, b.x, b.y);
    };
    Vector2.cross = function (a, b) {
        return this.fCross(a.x, a.y, b.x, b.y);
    };
    Vector2.angled = function (angle) {
        return new Vector2(Math.cos(angle), Math.sin(angle));
    };
    // ============================================================== //
    // Helper functions to work without the Vector2 class
    // ============================================================== //
    Vector2.dx = function (a, b) {
        return b.x - a.x;
    };
    Vector2.dy = function (a, b) {
        return b.y - a.y;
    };
    Vector2.fDot = function (ax, ay, bx, by) {
        return ax * bx + ay * by;
    };
    Vector2.fDistance = function (ax, ay, bx, by) {
        var dx = ax - bx;
        var dy = ay - by;
        return this.fLength(dx, dy);
    };
    Vector2.fCross = function (ax, ay, bx, by) {
        return ax * by - ay * bx;
    };
    Vector2.fSquareLength = function (x, y) {
        return this.fDot(x, y, x, y);
    };
    Vector2.fAngle = function (x, y) {
        return Math.atan2(y, x);
    };
    Vector2.fLength = function (x, y) {
        return Math.sqrt(this.fSquareLength(x, y));
    };
    Vector2.prototype.clone = function () {
        return new Vector2(this.x, this.y);
    };
    Vector2.prototype.toString = function () {
        return "(".concat(this.x, ",").concat(this.y, ")");
    };
    Vector2.prototype.toShortString = function () {
        return "(".concat(Math.round(this.x * 100) / 100, ",").concat(Math.round(this.y * 100) / 100, ")");
    };
    Vector2.zero = new Vector2(0, 0);
    Vector2.one = new Vector2(1, 1);
    Vector2.unitX = new Vector2(1, 0);
    Vector2.unitY = new Vector2(0, 1);
    return Vector2;
}());
exports.Vector2 = Vector2;


/***/ }),

/***/ "./src/ts/lib/settings/DocumentSettings.ts":
/*!*************************************************!*\
  !*** ./src/ts/lib/settings/DocumentSettings.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DocumentSettings = exports.DocumentUnits = void 0;
var DocumentUnits;
(function (DocumentUnits) {
    DocumentUnits[DocumentUnits["in"] = 0] = "in";
    DocumentUnits[DocumentUnits["mm"] = 1] = "mm";
    DocumentUnits[DocumentUnits["cm"] = 2] = "cm";
    DocumentUnits[DocumentUnits["px"] = 3] = "px";
})(DocumentUnits = exports.DocumentUnits || (exports.DocumentUnits = {}));
function mmToInch(mm) {
    return mm * 0.0393700787;
}
function cmToInch(cm) {
    return mmToInch(cm * 10);
}
function calculatePixelSize(size, dpi, unit) {
    switch (unit) {
        case DocumentUnits.px: return size;
        case DocumentUnits.in: return size * dpi;
        case DocumentUnits.mm: return mmToInch(size) * dpi;
        case DocumentUnits.cm: return cmToInch(size) * dpi;
        default: throw "Unknown unit";
    }
}
var DocumentSettings = /** @class */ (function () {
    function DocumentSettings(width, height, dpi, unit) {
        this.width = width;
        this.height = height;
        this.dpi = dpi;
        this.unit = unit;
    }
    Object.defineProperty(DocumentSettings.prototype, "aspectRatio", {
        // All this can be cached because it just calculate the information :)
        get: function () {
            return this.width / this.height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocumentSettings.prototype, "widthInPixels", {
        get: function () {
            return calculatePixelSize(this.width, this.dpi, this.unit);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocumentSettings.prototype, "heightInPixels", {
        get: function () {
            return calculatePixelSize(this.height, this.dpi, this.unit);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocumentSettings.prototype, "pixelsPerPoint", {
        get: function () {
            return this.dpi / 72;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DocumentSettings.prototype, "pointsPerPixel", {
        get: function () {
            return 1 / this.pixelsPerPoint;
        },
        enumerable: false,
        configurable: true
    });
    DocumentSettings.A4Portrait = new DocumentSettings(210, 297, 300, DocumentUnits.mm);
    DocumentSettings.A4Landscape = new DocumentSettings(297, 210, 300, DocumentUnits.mm);
    DocumentSettings.Screen4K = new DocumentSettings(3840, 2160, 72, DocumentUnits.px);
    DocumentSettings.ScreenHD = new DocumentSettings(1920, 1080, 72, DocumentUnits.px);
    DocumentSettings.Square = new DocumentSettings(1024, 1024, 72, DocumentUnits.px);
    DocumentSettings.DefaultDPI = 72;
    return DocumentSettings;
}());
exports.DocumentSettings = DocumentSettings;


/***/ }),

/***/ "./src/ts/lib/settings/ViewportSettings.ts":
/*!*************************************************!*\
  !*** ./src/ts/lib/settings/ViewportSettings.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ViewportSettings = exports.ViewportFit = void 0;
var ViewportFit;
(function (ViewportFit) {
    ViewportFit[ViewportFit["Fill"] = 0] = "Fill";
    ViewportFit[ViewportFit["Contain"] = 1] = "Contain";
    ViewportFit[ViewportFit["Cover"] = 2] = "Cover";
})(ViewportFit = exports.ViewportFit || (exports.ViewportFit = {}));
var ViewportSettings = /** @class */ (function () {
    function ViewportSettings(minX, minY, maxX, maxY, fit) {
        this.minX = minX;
        this.minY = minY;
        this.maxX = maxX;
        this.maxY = maxY;
        this.fit = fit;
    }
    Object.defineProperty(ViewportSettings.prototype, "x", {
        get: function () { return this.minX; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewportSettings.prototype, "y", {
        get: function () { return this.minY; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewportSettings.prototype, "centerX", {
        get: function () { return this.x + this.width / 2; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewportSettings.prototype, "centerY", {
        get: function () { return this.y + this.height / 2; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewportSettings.prototype, "width", {
        get: function () { return this.maxX - this.minX; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewportSettings.prototype, "height", {
        get: function () { return this.maxY - this.minY; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewportSettings.prototype, "aspectRatio", {
        get: function () { return this.width / this.height; },
        enumerable: false,
        configurable: true
    });
    return ViewportSettings;
}());
exports.ViewportSettings = ViewportSettings;


/***/ }),

/***/ "./src/ts/lib/xpbd/AxisConstraint2D.ts":
/*!*********************************************!*\
  !*** ./src/ts/lib/xpbd/AxisConstraint2D.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AxisConstraint2D = void 0;
var Vector2_1 = __webpack_require__(/*! lib/math/Vector2 */ "./src/ts/lib/math/Vector2.ts");
var Constraint2D_1 = __webpack_require__(/*! ./Constraint2D */ "./src/ts/lib/xpbd/Constraint2D.ts");
var AxisConstraint2D = /** @class */ (function (_super) {
    __extends(AxisConstraint2D, _super);
    function AxisConstraint2D(attachment, origin, axis, compliance) {
        if (compliance === void 0) { compliance = 0; }
        var _this = _super.call(this) || this;
        _this.lambda = 0;
        _this._normal = new Vector2_1.Vector2();
        _this._globalAttachmentPosition = new Vector2_1.Vector2();
        _this._localDirection = new Vector2_1.Vector2();
        _this._impulse = new Vector2_1.Vector2();
        _this.attachment = attachment;
        _this.origin = origin;
        _this.axis = axis;
        _this.compliance = compliance;
        return _this;
    }
    AxisConstraint2D.prototype.init = function (delta) {
        this.lambda = 0;
    };
    AxisConstraint2D.prototype.apply = function (delta) {
        var globalAttachmentPosition = this.attachment.getGlobalAttachmentPosition(this._globalAttachmentPosition);
        var direction = Vector2_1.Vector2.directionOut(globalAttachmentPosition, this.origin, this._normal);
        var amount = Vector2_1.Vector2.dot(direction, this.axis);
        direction.subX(amount * this.axis.x).subY(amount * this.axis.y);
        var distance = direction.length;
        if (distance == 0)
            return;
        direction.scale(1 / distance);
        var localDirection = this.attachment.getLocalDirection(direction, this._localDirection);
        var w1 = this.attachment.getLocalGeneralizedInverseMass(localDirection);
        var w2 = 0;
        var alpha = this.compliance / (delta * delta);
        var c = distance;
        var deltaLambda = (-c + this.lambda * alpha) / (w1 + w2 + alpha);
        this.lambda += deltaLambda;
        var impulse = this._impulse.set(direction).scale(deltaLambda);
        this.attachment.body.addImmediateImpulseAt(-impulse.x, -impulse.y, globalAttachmentPosition.x, globalAttachmentPosition.y, delta);
    };
    AxisConstraint2D.prototype.applyDamping = function (delta) {
        // Not implemented. Reader excercise? :) 
    };
    return AxisConstraint2D;
}(Constraint2D_1.Constraint2D));
exports.AxisConstraint2D = AxisConstraint2D;


/***/ }),

/***/ "./src/ts/lib/xpbd/AxleConstraint2D.ts":
/*!*********************************************!*\
  !*** ./src/ts/lib/xpbd/AxleConstraint2D.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AxleCosntraint2D = void 0;
var Constraint2D_1 = __webpack_require__(/*! ./Constraint2D */ "./src/ts/lib/xpbd/Constraint2D.ts");
var MathHelper_1 = __webpack_require__(/*! lib/math/MathHelper */ "./src/ts/lib/math/MathHelper.ts");
var AxleCosntraint2D = /** @class */ (function (_super) {
    __extends(AxleCosntraint2D, _super);
    function AxleCosntraint2D(from, to, compliance) {
        if (compliance === void 0) { compliance = 0; }
        var _this = _super.call(this) || this;
        _this.lambda = 0;
        _this.gearRatio = 1;
        _this.from = from;
        _this.to = to;
        _this.compliance = compliance;
        return _this;
    }
    AxleCosntraint2D.prototype.init = function (delta) {
        this.lambda = 0;
    };
    AxleCosntraint2D.prototype.apply = function (delta) {
        var diff = MathHelper_1.MathHelper.shortestAngle(MathHelper_1.MathHelper.normalizeAngle(this.from.rotation * this.gearRatio), MathHelper_1.MathHelper.normalizeAngle(this.to.rotation));
        if (diff == 0)
            return;
        var w1 = this.from.inverseInertia;
        var w2 = this.to.inverseInertia * this.gearRatio;
        var alpha = this.compliance / (delta * delta);
        var c = Math.abs(diff);
        var deltaLambda = (-c + this.lambda * alpha) / (w1 + w2 + alpha);
        this.lambda += deltaLambda;
        var rotationalImpulse = Math.sign(diff) * deltaLambda;
        this.from.rotation -= rotationalImpulse * this.from.inverseInertia / this.gearRatio;
        this.from.angularVelocity -= rotationalImpulse * this.from.inverseInertia / delta / this.gearRatio;
        this.to.rotation += rotationalImpulse * this.to.inverseInertia;
        this.to.angularVelocity += rotationalImpulse * this.to.inverseInertia / delta;
    };
    AxleCosntraint2D.prototype.applyDamping = function (delta) {
        // Not implemented. Reader excercise? :) 
    };
    return AxleCosntraint2D;
}(Constraint2D_1.Constraint2D));
exports.AxleCosntraint2D = AxleCosntraint2D;


/***/ }),

/***/ "./src/ts/lib/xpbd/Constraint2D.ts":
/*!*****************************************!*\
  !*** ./src/ts/lib/xpbd/Constraint2D.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Constraint2D = void 0;
var Constraint2D = /** @class */ (function () {
    function Constraint2D() {
        this.enabled = true;
    }
    return Constraint2D;
}());
exports.Constraint2D = Constraint2D;


/***/ }),

/***/ "./src/ts/lib/xpbd/ConstraintAttachment2D.ts":
/*!***************************************************!*\
  !*** ./src/ts/lib/xpbd/ConstraintAttachment2D.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConstraintAttachment2D = void 0;
var Vector2_1 = __webpack_require__(/*! lib/math/Vector2 */ "./src/ts/lib/math/Vector2.ts");
var ConstraintAttachment2D = /** @class */ (function () {
    function ConstraintAttachment2D(body, relativePosition) {
        this.body = body;
        this.relativePosition = relativePosition !== null && relativePosition !== void 0 ? relativePosition : new Vector2_1.Vector2();
        this.isCentral = relativePosition === undefined;
    }
    ConstraintAttachment2D.prototype.getLocalGeneralizedInverseMass = function (normal) {
        if (this.isCentral) {
            return this.body.inverseMass;
        }
        else {
            var cross = Vector2_1.Vector2.cross(normal, this.relativePosition);
            return this.body.inverseMass + cross * this.body.inverseInertia * cross;
        }
    };
    ConstraintAttachment2D.prototype.getLocalDirection = function (input, output) {
        return this.body.inverseBasis.transformOut(input, output);
    };
    ConstraintAttachment2D.prototype.getGlobalAttachmentPosition = function (output) {
        return this.body.basis
            .transformOut(this.relativePosition, output)
            .add(this.body.position);
    };
    return ConstraintAttachment2D;
}());
exports.ConstraintAttachment2D = ConstraintAttachment2D;


/***/ }),

/***/ "./src/ts/lib/xpbd/DistanceConstraint2D.ts":
/*!*************************************************!*\
  !*** ./src/ts/lib/xpbd/DistanceConstraint2D.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DistanceConstraint2D = void 0;
var Vector2_1 = __webpack_require__(/*! lib/math/Vector2 */ "./src/ts/lib/math/Vector2.ts");
var Constraint2D_1 = __webpack_require__(/*! ./Constraint2D */ "./src/ts/lib/xpbd/Constraint2D.ts");
var DistanceConstraint2D = /** @class */ (function (_super) {
    __extends(DistanceConstraint2D, _super);
    function DistanceConstraint2D(from, to, distance, compliance) {
        if (compliance === void 0) { compliance = 0; }
        var _this = _super.call(this) || this;
        // Dampercompliance is the inverse of stiffness related to velocity (1 / damperCoefficient)
        _this.damperCompliance = -1;
        // The lambda's are accumulators that are reset per frame. This way you can evaluate the constraint multiple times per frame without increasing stiffness.
        _this.lambda = 0;
        _this.damperLambda = 0;
        // The total force applied over a frame (in this case we only take spring force into account, but it is trivial to add damper force as well)
        _this.forceApplied = new Vector2_1.Vector2();
        // Variables needed in the apply function that we don't want to reallocate
        _this._fromGlobalAttachmentPosition = new Vector2_1.Vector2();
        _this._toGlobalAttachmentPosition = new Vector2_1.Vector2();
        _this._direction = new Vector2_1.Vector2();
        _this._fromLocalDirection = new Vector2_1.Vector2();
        _this._toLocalDirection = new Vector2_1.Vector2();
        _this._impulse = new Vector2_1.Vector2();
        // Variables needed in the applyDamping function that we don't want to reallocate
        _this._fromVelocity = new Vector2_1.Vector2();
        _this._toVelocity = new Vector2_1.Vector2();
        _this._damperImpulse = new Vector2_1.Vector2();
        _this.from = from;
        _this.to = to;
        if (distance !== undefined) {
            _this.restDistance = distance;
        }
        else {
            _this.restDistance = _this.calculateDistance();
        }
        _this.compliance = compliance;
        return _this;
    }
    DistanceConstraint2D.prototype.init = function (delta) {
        // Reset the accumulators
        this.lambda = 0;
        this.damperLambda = 0;
        this.forceApplied.setZero();
    };
    DistanceConstraint2D.prototype.apply = function (delta) {
        if (this.compliance < 0)
            return;
        var fromGlobalAttachmentPosition = this.from.getGlobalAttachmentPosition(this._fromGlobalAttachmentPosition);
        var toGlobalAttachmentPosition = this.to.getGlobalAttachmentPosition(this._toGlobalAttachmentPosition);
        var direction = Vector2_1.Vector2.directionOut(fromGlobalAttachmentPosition, toGlobalAttachmentPosition, this._direction);
        var distance = direction.length;
        if (distance == 0)
            return;
        direction.scale(1 / distance);
        var fromLocalDirection = this.from.getLocalDirection(direction, this._fromLocalDirection);
        var toLocalDirection = this.to.getLocalDirection(direction, this._toLocalDirection);
        var w1 = this.from.getLocalGeneralizedInverseMass(fromLocalDirection);
        var w2 = this.to.getLocalGeneralizedInverseMass(toLocalDirection);
        var alpha = this.compliance / (delta * delta);
        var c = distance - this.restDistance;
        var deltaLambda = (-c + this.lambda * alpha) / (w1 + w2 + alpha);
        this.lambda += deltaLambda;
        var impulse = this._impulse.set(direction).scale(deltaLambda);
        this.from.body.addImmediateImpulseAt(-impulse.x, -impulse.y, fromGlobalAttachmentPosition.x, fromGlobalAttachmentPosition.y, delta);
        this.to.body.addImmediateImpulseAt(impulse.x, impulse.y, toGlobalAttachmentPosition.x, toGlobalAttachmentPosition.y, delta);
        // Just house keeping, not needed for the actual calculations
        this.forceApplied
            .addX(impulse.x / (delta * delta))
            .addY(impulse.y / (delta * delta));
    };
    DistanceConstraint2D.prototype.applyDamping = function (delta) {
        if (this.damperCompliance < 0)
            return;
        var fromGlobalAttachmentPosition = this.from.getGlobalAttachmentPosition(this._fromGlobalAttachmentPosition);
        var toGlobalAttachmentPosition = this.to.getGlobalAttachmentPosition(this._toGlobalAttachmentPosition);
        var direction = Vector2_1.Vector2.directionOut(fromGlobalAttachmentPosition, toGlobalAttachmentPosition, this._direction);
        var distance = direction.length;
        if (distance == 0)
            return;
        direction.scale(1 / distance);
        var fromVelocity = this.from.body.getPointVelocity(fromGlobalAttachmentPosition.x, fromGlobalAttachmentPosition.y, this._fromVelocity);
        var toVelocity = this.to.body.getPointVelocity(toGlobalAttachmentPosition.x, toGlobalAttachmentPosition.y, this._toVelocity);
        var velocityDifference = Vector2_1.Vector2.dot(toVelocity, direction) - Vector2_1.Vector2.dot(fromVelocity, direction);
        var fromLocalDirection = this.from.getLocalDirection(direction, this._fromLocalDirection);
        var toLocalDirection = this.to.getLocalDirection(direction, this._toLocalDirection);
        var w1 = this.from.getLocalGeneralizedInverseMass(fromLocalDirection);
        var w2 = this.to.getLocalGeneralizedInverseMass(toLocalDirection);
        var alpha = this.damperCompliance / (delta);
        var c = velocityDifference;
        var deltaLambda = (-c + this.damperLambda * alpha) / (w1 + w2 + alpha);
        this.damperLambda += deltaLambda;
        var impulse = this._damperImpulse.set(direction).scale(deltaLambda * delta);
        this.from.body.addVelocityImpulseAt(-impulse.x, -impulse.y, fromGlobalAttachmentPosition.x, fromGlobalAttachmentPosition.y, delta);
        this.to.body.addVelocityImpulseAt(impulse.x, impulse.y, toGlobalAttachmentPosition.x, toGlobalAttachmentPosition.y, delta);
    };
    // ========================================================= //
    // Helper functions
    // ========================================================= //
    DistanceConstraint2D.prototype.resetRestDistance = function () {
        this.restDistance = this.calculateDistance();
    };
    DistanceConstraint2D.prototype.calculateDistance = function () {
        var fromGlobalAttachmentPosition = this.from.getGlobalAttachmentPosition(this._fromGlobalAttachmentPosition);
        var toGlobalAttachmentPosition = this.to.getGlobalAttachmentPosition(this._toGlobalAttachmentPosition);
        var direction = Vector2_1.Vector2.directionOut(fromGlobalAttachmentPosition, toGlobalAttachmentPosition, this._direction);
        var distance = direction.length;
        return distance;
    };
    Object.defineProperty(DistanceConstraint2D.prototype, "springCoefficient", {
        get: function () {
            if (this.compliance < 0)
                return 0;
            return 1 / this.compliance;
        },
        set: function (v) {
            if (v <= 0) {
                this.compliance = -1;
            }
            else {
                this.compliance = 1 / v;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DistanceConstraint2D.prototype, "damperCoefficient", {
        get: function () {
            if (this.damperCompliance < 0)
                return 0;
            return 1 / this.damperCompliance;
        },
        set: function (v) {
            if (v <= 0) {
                this.damperCompliance = -1;
            }
            else {
                this.damperCompliance = 1 / v;
            }
        },
        enumerable: false,
        configurable: true
    });
    return DistanceConstraint2D;
}(Constraint2D_1.Constraint2D));
exports.DistanceConstraint2D = DistanceConstraint2D;


/***/ }),

/***/ "./src/ts/lib/xpbd/PinConstraint2D.ts":
/*!********************************************!*\
  !*** ./src/ts/lib/xpbd/PinConstraint2D.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PinConstraint2D = void 0;
var Vector2_1 = __webpack_require__(/*! lib/math/Vector2 */ "./src/ts/lib/math/Vector2.ts");
var Constraint2D_1 = __webpack_require__(/*! ./Constraint2D */ "./src/ts/lib/xpbd/Constraint2D.ts");
var PinConstraint2D = /** @class */ (function (_super) {
    __extends(PinConstraint2D, _super);
    function PinConstraint2D(attachment, origin, compliance) {
        if (compliance === void 0) { compliance = 0; }
        var _this = _super.call(this) || this;
        _this.damperCompliance = -1;
        _this.lambda = 0;
        _this.damperLambda = 0;
        _this._normal = new Vector2_1.Vector2();
        _this._globalAttachmentPosition = new Vector2_1.Vector2();
        _this._localDirection = new Vector2_1.Vector2();
        _this._impulse = new Vector2_1.Vector2();
        _this._velocity = new Vector2_1.Vector2();
        _this._damperImpulse = new Vector2_1.Vector2();
        _this.attachment = attachment;
        if (origin === undefined) {
            _this.origin = attachment.body.position.clone();
        }
        else {
            _this.origin = origin;
        }
        _this.compliance = compliance;
        return _this;
    }
    PinConstraint2D.prototype.init = function (delta) {
        this.lambda = 0;
        this.damperLambda = 0;
    };
    PinConstraint2D.prototype.apply = function (delta) {
        var globalAttachmentPosition = this.attachment.getGlobalAttachmentPosition(this._globalAttachmentPosition);
        var direction = Vector2_1.Vector2.directionOut(globalAttachmentPosition, this.origin, this._normal);
        var distance = direction.length;
        if (distance == 0)
            return;
        direction.scale(1 / distance);
        var localDirection = this.attachment.getLocalDirection(direction, this._localDirection);
        var w1 = this.attachment.getLocalGeneralizedInverseMass(localDirection);
        var w2 = 0;
        var alpha = this.compliance / (delta * delta);
        var c = distance;
        var deltaLambda = (-c + this.lambda * alpha) / (w1 + w2 + alpha);
        this.lambda += deltaLambda;
        var impulse = this._impulse.set(direction).scale(deltaLambda);
        this.attachment.body.addImmediateImpulseAt(-impulse.x, -impulse.y, globalAttachmentPosition.x, globalAttachmentPosition.y, delta);
    };
    PinConstraint2D.prototype.applyDamping = function (delta) {
        if (this.damperCompliance < 0)
            return;
        var globalAttachmentPosition = this.attachment.getGlobalAttachmentPosition(this._globalAttachmentPosition);
        var velocity = this.attachment.body.getPointVelocity(globalAttachmentPosition.x, globalAttachmentPosition.y, this._velocity);
        var amount = velocity.length;
        if (amount == 0)
            return;
        var direction = this._normal.set(velocity).scale(1 / amount);
        var localDirection = this.attachment.getLocalDirection(direction, this._localDirection);
        var w1 = this.attachment.getLocalGeneralizedInverseMass(localDirection);
        var w2 = 0;
        var alpha = this.damperCompliance / (delta);
        var c = -amount;
        var deltaLambda = (-c + this.damperLambda * alpha) / (w1 + w2 + alpha);
        this.damperLambda += deltaLambda;
        var impulse = this._damperImpulse.set(direction).scale(deltaLambda * delta);
        this.attachment.body.addVelocityImpulseAt(-impulse.x, -impulse.y, globalAttachmentPosition.x, globalAttachmentPosition.y, delta);
    };
    return PinConstraint2D;
}(Constraint2D_1.Constraint2D));
exports.PinConstraint2D = PinConstraint2D;


/***/ }),

/***/ "./src/ts/lib/xpbd/Rigidbody2D.ts":
/*!****************************************!*\
  !*** ./src/ts/lib/xpbd/Rigidbody2D.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Rigidbody2D = void 0;
var MathHelper_1 = __webpack_require__(/*! lib/math/MathHelper */ "./src/ts/lib/math/MathHelper.ts");
var Matrix2_1 = __webpack_require__(/*! lib/math/Matrix2 */ "./src/ts/lib/math/Matrix2.ts");
var Vector2_1 = __webpack_require__(/*! lib/math/Vector2 */ "./src/ts/lib/math/Vector2.ts");
var Rigidbody2D = /** @class */ (function () {
    function Rigidbody2D() {
        this._basisDirty = false;
        this._basisInverseDirty = false;
        this.position = new Vector2_1.Vector2();
        this._rotation = 0;
        this._previousPosition = this.position.clone();
        this._previousRotation = this._rotation;
        this.velocity = new Vector2_1.Vector2();
        this.angularVelocity = 0;
        this.inverseMass = 1;
        this.inverseInertia = 1;
        this._basis = Matrix2_1.Matrix2.identity();
        this._basisInverse = Matrix2_1.Matrix2.identity();
    }
    Object.defineProperty(Rigidbody2D.prototype, "mass", {
        get: function () {
            return 1 / this.inverseMass;
        },
        set: function (v) {
            this.inverseMass = 1 / v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rigidbody2D.prototype, "inertia", {
        get: function () {
            return 1 / this.inverseInertia;
        },
        set: function (v) {
            this.inverseInertia = 1 / v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rigidbody2D.prototype, "basis", {
        get: function () {
            if (this._basisDirty) {
                this.syncBasis();
            }
            return this._basis;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rigidbody2D.prototype, "inverseBasis", {
        get: function () {
            if (this._basisInverseDirty) {
                this.syncBasisInverse();
            }
            return this._basisInverse;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rigidbody2D.prototype, "rotation", {
        get: function () {
            return this._rotation;
        },
        set: function (rotation) {
            this._rotation = rotation;
            this.markBasisDirty();
        },
        enumerable: false,
        configurable: true
    });
    Rigidbody2D.prototype.applyMotion = function (delta) {
        this.position.x += this.velocity.x * delta;
        this.position.y += this.velocity.y * delta;
        this.rotation += this.angularVelocity * delta;
    };
    Rigidbody2D.prototype.recalculateVelocity = function (delta) {
        this.velocity.x = Vector2_1.Vector2.dx(this._previousPosition, this.position) / delta;
        this.velocity.y = Vector2_1.Vector2.dy(this._previousPosition, this.position) / delta;
        this._rotation = MathHelper_1.MathHelper.normalizeAngle(this._rotation);
        this._previousRotation = MathHelper_1.MathHelper.normalizeAngle(this._previousRotation);
        var angleDiff = MathHelper_1.MathHelper.shortestAngle(this._previousRotation, this._rotation);
        this.angularVelocity = angleDiff / delta;
        this._previousPosition.set(this.position);
        this._previousRotation = this._rotation;
    };
    Rigidbody2D.prototype.rotate = function (angle) {
        this.rotation += angle;
        return this;
    };
    Rigidbody2D.prototype.translate = function (x, y) {
        this.position.addX(x).addY(y);
        this._previousPosition.addX(x).addY(y);
        return this;
    };
    Rigidbody2D.prototype.translateTo = function (x, y) {
        this.position.apply(x, y);
        this._previousPosition.apply(x, y);
        return this;
    };
    Rigidbody2D.prototype.addImmediateForce = function (fx, fy, delta) {
        // F = m * a
        // a = F / m
        var ax = fx * this.inverseMass;
        var ay = fy * this.inverseMass;
        this.velocity.x += ax * delta;
        this.velocity.y += ay * delta;
        this.position.x += ax * delta * delta;
        this.position.y += ay * delta * delta;
    };
    Rigidbody2D.prototype.addImmediateImpulse = function (ix, iy, delta) {
        var dx = ix * this.inverseMass;
        var dy = iy * this.inverseMass;
        this.position.x += dx;
        this.position.y += dy;
        this.velocity.x += dx / delta;
        this.velocity.y += dy / delta;
    };
    Rigidbody2D.prototype.addImmediateImpulseAt = function (ix, iy, px, py, delta) {
        var dx = ix * this.inverseMass;
        var dy = iy * this.inverseMass;
        this.position.x += dx;
        this.position.y += dy;
        this.velocity.x += dx / delta;
        this.velocity.y += dy / delta;
        var angularImpulse = Vector2_1.Vector2.fCross(ix, iy, px - this.position.x, py - this.position.y) * this.inverseInertia;
        // console.log(Math.round(angularImpulse * 10) / 10);
        this.rotation -= angularImpulse;
        this.angularVelocity -= angularImpulse / delta;
    };
    Rigidbody2D.prototype.addVelocityImpulseAt = function (ix, iy, px, py, delta) {
        var dx = ix * this.inverseMass;
        var dy = iy * this.inverseMass;
        this.velocity.x += dx / delta;
        this.velocity.y += dy / delta;
        var angularImpulse = Vector2_1.Vector2.fCross(ix, iy, px - this.position.x, py - this.position.y) * this.inverseInertia;
        this.angularVelocity -= angularImpulse / delta;
    };
    Rigidbody2D.prototype.getPointVelocity = function (x, y, output) {
        output.x = this.velocity.x;
        output.y = this.velocity.y;
        var dx = x - this.position.x;
        var dy = y - this.position.y;
        output.x += -dy * this.angularVelocity;
        output.y += dx * this.angularVelocity;
        return output;
    };
    Rigidbody2D.prototype.markBasisDirty = function () {
        this._basisDirty = true;
        this._basisInverseDirty = true;
    };
    Rigidbody2D.prototype.syncBasis = function () {
        this._basis.setAsRotation(this.rotation);
        this._basisDirty = false;
    };
    Rigidbody2D.prototype.syncBasisInverse = function () {
        // this._basisInverse.setAs(this.basis).inverse();
        this._basisInverse.setAsRotation(-this.rotation);
        this._basisInverseDirty = false;
    };
    return Rigidbody2D;
}());
exports.Rigidbody2D = Rigidbody2D;


/***/ }),

/***/ "./src/ts/lib/xpbd/graphics/DistanceConstraintGraphic2D.ts":
/*!*****************************************************************!*\
  !*** ./src/ts/lib/xpbd/graphics/DistanceConstraintGraphic2D.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DistanceConstraintGraphic2D = void 0;
var Vector2_1 = __webpack_require__(/*! lib/math/Vector2 */ "./src/ts/lib/math/Vector2.ts");
var DistanceConstraintGraphic2D = /** @class */ (function () {
    function DistanceConstraintGraphic2D(constraint, path) {
        this._positionFrom = new Vector2_1.Vector2();
        this._positionTo = new Vector2_1.Vector2();
        this.constraint = constraint;
        this.path = path;
    }
    DistanceConstraintGraphic2D.prototype.draw = function (graphics) {
        graphics.push();
        var from = this.constraint.from.getGlobalAttachmentPosition(this._positionFrom);
        var to = this.constraint.to.getGlobalAttachmentPosition(this._positionTo);
        graphics.translate(from.x, from.y);
        var dx = Vector2_1.Vector2.dx(from, to);
        var dy = Vector2_1.Vector2.dy(from, to);
        var distance = Vector2_1.Vector2.fLength(dx, dy);
        var angle = Vector2_1.Vector2.fAngle(dx, dy);
        graphics.rotate(angle);
        graphics.scale(distance / this.constraint.restDistance, 1);
        graphics.drawPath(this.path, false);
        graphics.drawPath(this.path, true);
        graphics.pop();
    };
    return DistanceConstraintGraphic2D;
}());
exports.DistanceConstraintGraphic2D = DistanceConstraintGraphic2D;


/***/ }),

/***/ "./src/ts/lib/xpbd/graphics/RigidbodyGraphic2D.ts":
/*!********************************************************!*\
  !*** ./src/ts/lib/xpbd/graphics/RigidbodyGraphic2D.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RigidbodyGraphic2D = void 0;
var Vector2_1 = __webpack_require__(/*! lib/math/Vector2 */ "./src/ts/lib/math/Vector2.ts");
var RigidbodyGraphic2D = /** @class */ (function () {
    function RigidbodyGraphic2D(body, path) {
        this.rotationalOffset = 0;
        this.body = body;
        this.path = path;
    }
    RigidbodyGraphic2D.prototype.setRotationalOffset = function (offset) {
        this.rotationalOffset = offset;
        return this;
    };
    RigidbodyGraphic2D.prototype.draw = function (graphics) {
        graphics.push();
        graphics.translate(this.body.position.x, this.body.position.y);
        if (this.alignWith) {
            var dx = Vector2_1.Vector2.dx(this.body.position, this.alignWith.position);
            var dy = Vector2_1.Vector2.dy(this.body.position, this.alignWith.position);
            var angle = Vector2_1.Vector2.fAngle(dx, dy);
            graphics.rotate(angle + this.rotationalOffset);
        }
        else {
            graphics.rotate(this.body.rotation + this.rotationalOffset);
        }
        graphics.drawPath(this.path, false);
        graphics.drawPath(this.path, true);
        graphics.pop();
    };
    return RigidbodyGraphic2D;
}());
exports.RigidbodyGraphic2D = RigidbodyGraphic2D;


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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/main */ "./src/js/main.js");
/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_main__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ts/ */ "./src/ts/index.ts");
/* harmony import */ var _ts___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ts___WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/app.scss */ "./src/scss/app.scss");
// Load the javascript main



// Load the SASS main

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxDQUFDLEdBQUcsU0FBUyxDQUFDO1FBRTNCLFlBQVk7UUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRTFCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUVyRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsRUFBRSxHQUFHLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFakIsYUFBYTtRQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRXpCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FB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VUFBSSxLQUFjO1FBQ2QsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztRQUVsQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0Qsc0JBQUksR0FBSixVQUFLLENBQVMsSUFBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM1QyxzQkFBSSxHQUFKLFVBQUssQ0FBUyxJQUFHLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBRTVDLHFCQUFHLEdBQUgsVUFBSSxLQUFjO1FBQ2QsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztRQUVsQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0Qsc0JBQUksR0FBSixVQUFLLENBQVMsSUFBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM1QyxzQkFBSSxHQUFKLFVBQUssQ0FBUyxJQUFHLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBRTVDLHFCQUFHLEdBQUgsVUFBSSxLQUFjO1FBQ2QsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztRQUVsQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0Qsc0JBQUksR0FBSixVQUFLLENBQVMsSUFBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM1QyxzQkFB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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ21CO0FBQ0o7O0FBRWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zY3NzL2FwcC5zY3NzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3Njc3MvYXBwLnNjc3M/NTFjNSIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdHMvYXBwL0JyaWRnZVRlc3RTY2VuZS50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3RzL2FwcC9DbG90aFRlc3RTY2VuZS50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3RzL2FwcC9Db21wbGljYXRlZFNjZW5lVGVzdC50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3RzL2FwcC9FbmdpbmVUZXN0U2NlbmUudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy90cy9hcHAvTWVudS50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3RzL2FwcC9QZW5kdWx1bVRlc3RTY2VuZS50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3RzL2FwcC9Tb2x2ZXJTY2VuZS50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3RzL2FwcC9wYXRocy9FbmdpbmVQYXJ0UGF0aHMudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy90cy9hcHAvcGF0aHMvUmlnaWRCb2R5UGF0aHMudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy90cy9pbmRleC50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3RzL2xpYi9ncmFwaGljcy9HcmFwaGljczJELnRzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdHMvbGliL21hdGgvTWF0aEhlbHBlci50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3RzL2xpYi9tYXRoL01hdHJpeDIudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy90cy9saWIvbWF0aC9WZWN0b3IyLnRzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdHMvbGliL3NldHRpbmdzL0RvY3VtZW50U2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy90cy9saWIvc2V0dGluZ3MvVmlld3BvcnRTZXR0aW5ncy50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3RzL2xpYi94cGJkL0F4aXNDb25zdHJhaW50MkQudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy90cy9saWIveHBiZC9BeGxlQ29uc3RyYWludDJELnRzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdHMvbGliL3hwYmQvQ29uc3RyYWludDJELnRzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdHMvbGliL3hwYmQvQ29uc3RyYWludEF0dGFjaG1lbnQyRC50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3RzL2xpYi94cGJkL0Rpc3RhbmNlQ29uc3RyYWludDJELnRzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdHMvbGliL3hwYmQvUGluQ29uc3RyYWludDJELnRzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdHMvbGliL3hwYmQvUmlnaWRib2R5MkQudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy90cy9saWIveHBiZC9ncmFwaGljcy9EaXN0YW5jZUNvbnN0cmFpbnRHcmFwaGljMkQudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy90cy9saWIveHBiZC9ncmFwaGljcy9SaWdpZGJvZHlHcmFwaGljMkQudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKT0+e1xyXG59KTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbmh0bWwsIGJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDsgfVxcblxcbmh0bWwsIGJvZHkge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgLS1kYXJrLWNvbG9yOiAjMzUyZjIwO1xcbiAgLS1taWQtY29sb3I6ICNjMmJiYTc7XFxuICAtLWxpZ2h0LWNvbG9yOiAjZTBkZGQ1O1xcbiAgLS1kYXJrLWNvbG9yLWFscGhhOiAjMzUyZjIwZWU7XFxuICBmb250LXNpemU6IDE4cHg7IH1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuICAuY29udGFpbmVyIGNhbnZhcyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7IH1cXG4gIC5jb250YWluZXIgLmNyZWRpdHMtb3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAyNHB4O1xcbiAgICByaWdodDogMjRweDtcXG4gICAgY29sb3I6IHZhcigtLW1pZC1jb2xvcik7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxcbiAgLmNvbnRhaW5lciAuaW5mby1vdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDI0cHg7XFxuICAgIGxlZnQ6IDI0cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1taWQtY29sb3IpO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cXG5cXG4ubWVudS1idXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyNHB4O1xcbiAgcmlnaHQ6IDI0cHg7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmstY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIHotaW5kZXg6IDEwMDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIC5tZW51LWJ1dHRvbiAubWVudS1iYXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAzcHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQsIG9wYWNpdHkgMC4ycyBlYXNlLWluLW91dDsgfVxcbiAgLm1lbnUtYnV0dG9uIC50b3Age1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCBjYWxjKC01MCUgLSA4cHgpKTsgfVxcbiAgLm1lbnUtYnV0dG9uIC5ib3R0b20ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCBjYWxjKC01MCUgKyA4cHgpKTsgfVxcbiAgLm1lbnUtYnV0dG9uLm9wZW4gLnRvcCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgxMzVkZWcpOyB9XFxuICAubWVudS1idXR0b24ub3BlbiAuYm90dG9tIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDIyNWRlZyk7IH1cXG4gIC5tZW51LWJ1dHRvbi5vcGVuIC5taWQge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLCAxMDAlKTsgfVxcblxcbi5tZW51IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMHB4O1xcbiAgcmlnaHQ6IDBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1jb2xvci1hbHBoYSk7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIHZpc2liaWxpdHk7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgei1pbmRleDogMTAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMjRweDtcXG4gIHBhZGRpbmctdG9wOiA4MHB4OyB9XFxuICAubWVudSAubWVudS1zcGFjaW5nIHtcXG4gICAgaGVpZ2h0OiAxMDBweDsgfVxcbiAgLm1lbnUgLm1lbnUtaGVhZGVyIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG4gIC5tZW51IC5tZW51LWl0ZW0ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJvcmRlci1jb2xvcjtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XFxuICAgIC5tZW51IC5tZW51LWl0ZW06aG92ZXIge1xcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpOyB9XFxuICAubWVudS5pbml0IHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuICAubWVudS5oaWRkZW4ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlLCAwKTtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS9fYmFzZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9hcHAuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNHLHNCQUFzQixFQUFBOztBQUd6QjtFQUNHLFVBQVM7RUFDVCxTQUFRLEVBQUE7O0FDSlg7RUFDSSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFFakIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksdUJBQXVCO0VBRXZCLHFCQUFhO0VBQ2Isb0JBQVk7RUFDWixzQkFBYztFQUNkLDZCQUFtQjtFQUVuQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksWUFBVztFQUNYLGFBQVk7RUFFWixhQUFhLEVBQUE7RUFKakI7SUFPUSxXQUFXO0lBQ1gsWUFBWSxFQUFBO0VBUnBCO0lBWVEsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBRVgsdUJBQXVCO0lBRXZCLGlCQUFpQjtJQUNqQixvQkFBb0IsRUFBQTtFQW5CNUI7SUFzQlEsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0lBRVYsdUJBQXVCO0lBRXZCLGlCQUFpQjtJQUNqQixvQkFBb0IsRUFBQTs7QUFJNUI7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFFWCxXQUFXO0VBQ1gsWUFBWTtFQUVaLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFFbkIsYUFBYTtFQW9DYixlQUFlLEVBQUE7RUEvQ25CO0lBY1Esa0JBQWlCO0lBQ2pCLFFBQVE7SUFDUixTQUFTO0lBRVQsZ0NBQWdDO0lBRWhDLFdBQVc7SUFDWCxXQUFXO0lBRVgsOEJBQThCO0lBRTlCLGdFQUFnRSxFQUFBO0VBekJ4RTtJQTZCUSw0Q0FBNEMsRUFBQTtFQTdCcEQ7SUFnQ1EsNENBQTRDLEVBQUE7RUFoQ3BEO0lBcUNZLCtDQUErQyxFQUFBO0VBckMzRDtJQXdDWSwrQ0FBK0MsRUFBQTtFQXhDM0Q7SUEyQ1ksK0NBQStDLEVBQUE7O0FBTzNEO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1YsWUFBVztFQUNYLFdBQVc7RUFFWCxnQkFBZ0I7RUFFaEIsZ0JBQWU7RUFFZix5QkFBeUI7RUFFekIsbUNBQW1DO0VBRW5DLDBDQUEwQztFQUMxQyx5QkFBeUI7RUFDekIsdUNBQXVDO0VBRXZDLFlBQVk7RUFFWixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUVuQixzQkFBcUI7RUFFckIsYUFBWTtFQUVaLGlCQUFpQixFQUFBO0VBN0JyQjtJQWdDUSxhQUFZLEVBQUE7RUFoQ3BCO0lBb0NRLGdCQUFlO0lBRWYsaUJBQWlCLEVBQUE7RUF0Q3pCO0lBMENRLGVBQWU7SUFFZixXQUFXO0lBRVgsY0FBYTtJQUNiLHFCQUFxQjtJQUVyQixvQ0FBb0M7SUFFcEMsaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6Qix1Q0FBdUM7SUFNdkMsbUJBQW1CLEVBQUE7SUEzRDNCO01Bd0RZLGdDQUFnQyxFQUFBO0VBeEQ1QztJQStEUSxrQkFBa0IsRUFBQTtFQS9EMUI7SUFtRVEsNkJBQTZCO0lBQzdCLGtCQUFrQixFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmh0bWwsIGJvZHl7XFxyXFxuICAgcGFkZGluZzowO1xcclxcbiAgIG1hcmdpbjowO1xcclxcbn1cIixcIkBpbXBvcnQgXFxcImJhc2UvYmFzZVxcXCI7XFxyXFxuXFxyXFxuaHRtbCwgYm9keSB7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcXHJcXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XFxyXFxuICAgIFxcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuXFxyXFxuICAgIC0tZGFyay1jb2xvcjogIzM1MmYyMDtcXHJcXG4gICAgLS1taWQtY29sb3I6ICNjMmJiYTc7XFxyXFxuICAgIC0tbGlnaHQtY29sb3I6ICNlMGRkZDU7XFxyXFxuICAgIC0tZGFyay1jb2xvci1hbHBoYTogIzM1MmYyMGVlO1xcclxcblxcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXJ7XFxyXFxuICAgIHdpZHRoOjEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6MTAwdmg7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxuICAgIGNhbnZhcyB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmNyZWRpdHMtb3ZlcmxheXtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGJvdHRvbTogMjRweDtcXHJcXG4gICAgICAgIHJpZ2h0OiAyNHB4O1xcclxcblxcclxcbiAgICAgICAgY29sb3I6IHZhcigtLW1pZC1jb2xvcik7XFxyXFxuXFxyXFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICB9XFxyXFxuICAgIC5pbmZvLW92ZXJsYXl7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBib3R0b206IDI0cHg7XFxyXFxuICAgICAgICBsZWZ0OiAyNHB4O1xcclxcblxcclxcbiAgICAgICAgY29sb3I6IHZhcigtLW1pZC1jb2xvcik7XFxyXFxuXFxyXFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5tZW51LWJ1dHRvbiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAyNHB4O1xcclxcbiAgICByaWdodDogMjRweDtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgIGhlaWdodDogNjBweDtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1jb2xvcik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuXFxyXFxuICAgIHotaW5kZXg6IDEwMDA7XFxyXFxuXFxyXFxuICAgIC5tZW51LWJhciB7XFxyXFxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogNTAlO1xcclxcbiAgICAgICAgbGVmdDogNTAlO1xcclxcblxcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuXFxyXFxuICAgICAgICB3aWR0aDogMjRweDtcXHJcXG4gICAgICAgIGhlaWdodDogM3B4O1xcclxcblxcclxcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtY29sb3IpO1xcclxcblxcclxcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQsIG9wYWNpdHkgMC4ycyBlYXNlLWluLW91dDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudG9wIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIGNhbGMoLTUwJSAtIDhweCkpXFxyXFxuICAgIH1cXHJcXG4gICAgLmJvdHRvbSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCBjYWxjKC01MCUgKyA4cHgpKVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYub3BlbiB7XFxyXFxuICAgICAgICAudG9wIHtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMTM1ZGVnKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5ib3R0b20ge1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgyMjVkZWcpXFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAubWlkIHtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLCAxMDAlKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZW51IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDBweDtcXHJcXG4gICAgcmlnaHQ6IDBweDtcXHJcXG4gICAgaGVpZ2h0OjEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcblxcclxcbiAgICBtYXgtd2lkdGg6NDAwcHg7XFxyXFxuXFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWRhcmstY29sb3ItYWxwaGEpO1xcclxcblxcclxcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIHZpc2liaWxpdHk7XFxyXFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxyXFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXHJcXG5cXHJcXG4gICAgei1pbmRleDogMTAwO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXHJcXG4gICAgXFxyXFxuICAgIHBhZGRpbmc6MjRweDtcXHJcXG5cXHJcXG4gICAgcGFkZGluZy10b3A6IDgwcHg7XFxyXFxuXFxyXFxuICAgIC5tZW51LXNwYWNpbmd7XFxyXFxuICAgICAgICBoZWlnaHQ6MTAwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5tZW51LWhlYWRlcntcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6MjBweDtcXHJcXG5cXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tZW51LWl0ZW17XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICAgICAgIGNvbG9yOmluaGVyaXQ7XFxyXFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFxyXFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICBcXHJcXG4gICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJvcmRlci1jb2xvcjtcXHJcXG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxyXFxuXFxyXFxuICAgICAgICAmOmhvdmVye1xcclxcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLmluaXQge1xcclxcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYuaGlkZGVuIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUsIDApO1xcclxcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hcHAuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FwcC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBSaWdpZGJvZHkyRCB9IGZyb20gXCJsaWIveHBiZC9SaWdpZGJvZHkyRFwiO1xyXG5pbXBvcnQgeyBTb2x2ZXJTY2VuZSB9IGZyb20gXCIuL1NvbHZlclNjZW5lXCI7XHJcbmltcG9ydCB7IERpc3RhbmNlQ29uc3RyYWludDJEIH0gZnJvbSBcImxpYi94cGJkL0Rpc3RhbmNlQ29uc3RyYWludDJEXCI7XHJcbmltcG9ydCB7IENvbnN0cmFpbnRBdHRhY2htZW50MkQgfSBmcm9tIFwibGliL3hwYmQvQ29uc3RyYWludEF0dGFjaG1lbnQyRFwiO1xyXG5pbXBvcnQgeyBQaW5Db25zdHJhaW50MkQgfSBmcm9tIFwibGliL3hwYmQvUGluQ29uc3RyYWludDJEXCI7XHJcbmltcG9ydCB7IFJpZ2lkQm9keVBhdGhzIH0gZnJvbSBcIi4vcGF0aHMvUmlnaWRCb2R5UGF0aHNcIjtcclxuaW1wb3J0IHsgUmlnaWRib2R5R3JhcGhpYzJEIH0gZnJvbSBcImxpYi94cGJkL2dyYXBoaWNzL1JpZ2lkYm9keUdyYXBoaWMyRFwiO1xyXG5pbXBvcnQgeyBEaXN0YW5jZUNvbnN0cmFpbnRHcmFwaGljMkQgfSBmcm9tIFwibGliL3hwYmQvZ3JhcGhpY3MvRGlzdGFuY2VDb25zdHJhaW50R3JhcGhpYzJEXCI7XHJcblxyXG5mdW5jdGlvbiBhZGRHcmFwaGljcyhzY2VuZTogU29sdmVyU2NlbmUsIHNwYWNpbmcgPSAxKXtcclxuICAgIGxldCBncmFwaGljcyA9IG5ldyBSaWdpZEJvZHlQYXRocygpO1xyXG4gICAgZ3JhcGhpY3MubGluZVdpZHRoID0gKHdpbmRvdyBhcyBhbnkpLmxpbmVXaWR0aCA/PyAwLjA1O1xyXG5cclxuICAgIGxldCBib2R5R3JhcGhpYyA9IGdyYXBoaWNzLmNyZWF0ZUJvZHkoMC4yKTtcclxuICAgIGxldCBjb25zdHJhaW50R3JhcGhpYyA9IGdyYXBoaWNzLmNyZWF0ZUNvbm5lY3Rpb24oc3BhY2luZyk7XHJcblxyXG4gICAgc2NlbmUuYm9kaWVzLmZvckVhY2goYm9keSA9PiB7XHJcbiAgICAgICAgc2NlbmUuYm9keUdyYXBoaWNzLnB1c2gobmV3IFJpZ2lkYm9keUdyYXBoaWMyRChib2R5LCBib2R5R3JhcGhpYykpO1xyXG4gICAgfSk7XHJcbiAgICBzY2VuZS5jb25zdHJhaW50cy5mb3JFYWNoKGNvbnN0cmFpbnQgPT4ge1xyXG4gICAgICAgIGlmKCEoY29uc3RyYWludCBpbnN0YW5jZW9mIERpc3RhbmNlQ29uc3RyYWludDJEKSkgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNjZW5lLmNvbnN0cmFpbnRHcmFwaGljcy5wdXNoKG5ldyBEaXN0YW5jZUNvbnN0cmFpbnRHcmFwaGljMkQoY29uc3RyYWludCwgY29uc3RyYWludEdyYXBoaWMpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQnJpZGdlU2NlbmUoY291bnQ6IG51bWJlciwgc3BhY2luZzogbnVtYmVyID0gMSwgY29tcGxpYW5jZSA9IDAsIGRhbXBlckNvbXBsaWFuY2UgPSAtMSl7XHJcbiAgICBsZXQgc2NlbmUgPSBuZXcgU29sdmVyU2NlbmUoKTtcclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKyl7XHJcbiAgICAgICAgbGV0IGJvZHkxID0gbmV3IFJpZ2lkYm9keTJEKCkudHJhbnNsYXRlVG8oaSAqIHNwYWNpbmcsIDApO1xyXG4gICAgICAgIGxldCBib2R5MiA9IG5ldyBSaWdpZGJvZHkyRCgpLnRyYW5zbGF0ZVRvKGkgKiBzcGFjaW5nICsgc3BhY2luZyAqIDAuNSwgLXNwYWNpbmcpO1xyXG5cclxuICAgICAgICAvLyBUaGlzIGlzIG5vdCBuZWVkZWQgYnV0IGlzIG5pY2UgZm9yIGdyYWJiaW5nIGl0IChiZWNhdXNlIG90aGVyd2lzZSB5b3UgaW50cm9kdWNlIHJhbmRvbSByb3RhdGlvbnMgaW50byB0aGUgYnJpZGdlKVxyXG4gICAgICAgIGJvZHkxLmludmVyc2VJbmVydGlhID0gMDtcclxuICAgICAgICBib2R5Mi5pbnZlcnNlSW5lcnRpYSA9IDA7XHJcblxyXG4gICAgICAgIHNjZW5lLmJvZGllcy5wdXNoKGJvZHkxKTtcclxuICAgICAgICBzY2VuZS5ib2RpZXMucHVzaChib2R5Mik7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICAvLyBTcG9rZXNcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzY2VuZS5ib2RpZXMubGVuZ3RoIC0gMTsgaSsrKXtcclxuICAgICAgICBsZXQgZnJvbSA9IHNjZW5lLmJvZGllc1tpXTtcclxuICAgICAgICBsZXQgdG8gPSBzY2VuZS5ib2RpZXNbaSArIDFdO1xyXG4gICAgICAgIGxldCBjb25zdHJhaW50ID0gbmV3IERpc3RhbmNlQ29uc3RyYWludDJEKG5ldyBDb25zdHJhaW50QXR0YWNobWVudDJEKGZyb20pLCBuZXcgQ29uc3RyYWludEF0dGFjaG1lbnQyRCh0bykpO1xyXG4gICAgICAgIGNvbnN0cmFpbnQuY29tcGxpYW5jZSA9IGNvbXBsaWFuY2U7XHJcbiAgICAgICAgY29uc3RyYWludC5kYW1wZXJDb21wbGlhbmNlID0gZGFtcGVyQ29tcGxpYW5jZTtcclxuXHJcbiAgICAgICAgc2NlbmUuY29uc3RyYWludHMucHVzaChjb25zdHJhaW50KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gRXZlbiBjb25uZWN0aW9uc1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHNjZW5lLmJvZGllcy5sZW5ndGggLSAyOyBpICs9IDIpe1xyXG4gICAgICAgIGxldCBmcm9tID0gc2NlbmUuYm9kaWVzW2ldO1xyXG4gICAgICAgIGxldCB0byA9IHNjZW5lLmJvZGllc1tpICsgMl07XHJcbiAgICAgICAgbGV0IGNvbnN0cmFpbnQgPSBuZXcgRGlzdGFuY2VDb25zdHJhaW50MkQobmV3IENvbnN0cmFpbnRBdHRhY2htZW50MkQoZnJvbSksIG5ldyBDb25zdHJhaW50QXR0YWNobWVudDJEKHRvKSk7XHJcbiAgICAgICAgY29uc3RyYWludC5jb21wbGlhbmNlID0gY29tcGxpYW5jZTtcclxuICAgICAgICBjb25zdHJhaW50LmRhbXBlckNvbXBsaWFuY2UgPSBkYW1wZXJDb21wbGlhbmNlO1xyXG5cclxuICAgICAgICBzY2VuZS5jb25zdHJhaW50cy5wdXNoKGNvbnN0cmFpbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVuZXZlbiBjb25uZWN0aW9uc1xyXG4gICAgZm9yKGxldCBpID0gMTsgaSA8IHNjZW5lLmJvZGllcy5sZW5ndGggLSAyOyBpICs9IDIpe1xyXG4gICAgICAgIGxldCBmcm9tID0gc2NlbmUuYm9kaWVzW2ldO1xyXG4gICAgICAgIGxldCB0byA9IHNjZW5lLmJvZGllc1tpICsgMl07XHJcbiAgICAgICAgbGV0IGNvbnN0cmFpbnQgPSBuZXcgRGlzdGFuY2VDb25zdHJhaW50MkQobmV3IENvbnN0cmFpbnRBdHRhY2htZW50MkQoZnJvbSksIG5ldyBDb25zdHJhaW50QXR0YWNobWVudDJEKHRvKSk7XHJcbiAgICAgICAgY29uc3RyYWludC5jb21wbGlhbmNlID0gY29tcGxpYW5jZTtcclxuICAgICAgICBjb25zdHJhaW50LmRhbXBlckNvbXBsaWFuY2UgPSBkYW1wZXJDb21wbGlhbmNlO1xyXG5cclxuICAgICAgICBzY2VuZS5jb25zdHJhaW50cy5wdXNoKGNvbnN0cmFpbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBwaW4gPSBuZXcgUGluQ29uc3RyYWludDJEKG5ldyBDb25zdHJhaW50QXR0YWNobWVudDJEKHNjZW5lLmJvZGllc1swXSkpO1xyXG4gICAgc2NlbmUuY29uc3RyYWludHMucHVzaChwaW4pO1xyXG5cclxuICAgIGFkZEdyYXBoaWNzKHNjZW5lKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHNjZW5lO1xyXG59IiwiaW1wb3J0IHsgUmlnaWRib2R5MkQgfSBmcm9tIFwibGliL3hwYmQvUmlnaWRib2R5MkRcIjtcclxuaW1wb3J0IHsgU29sdmVyU2NlbmUgfSBmcm9tIFwiLi9Tb2x2ZXJTY2VuZVwiO1xyXG5pbXBvcnQgeyBEaXN0YW5jZUNvbnN0cmFpbnQyRCB9IGZyb20gXCJsaWIveHBiZC9EaXN0YW5jZUNvbnN0cmFpbnQyRFwiO1xyXG5pbXBvcnQgeyBDb25zdHJhaW50QXR0YWNobWVudDJEIH0gZnJvbSBcImxpYi94cGJkL0NvbnN0cmFpbnRBdHRhY2htZW50MkRcIjtcclxuaW1wb3J0IHsgUGluQ29uc3RyYWludDJEIH0gZnJvbSBcImxpYi94cGJkL1BpbkNvbnN0cmFpbnQyRFwiO1xyXG5pbXBvcnQgeyBSaWdpZEJvZHlQYXRocyB9IGZyb20gXCIuL3BhdGhzL1JpZ2lkQm9keVBhdGhzXCI7XHJcbmltcG9ydCB7IFJpZ2lkYm9keUdyYXBoaWMyRCB9IGZyb20gXCJsaWIveHBiZC9ncmFwaGljcy9SaWdpZGJvZHlHcmFwaGljMkRcIjtcclxuaW1wb3J0IHsgRGlzdGFuY2VDb25zdHJhaW50R3JhcGhpYzJEIH0gZnJvbSBcImxpYi94cGJkL2dyYXBoaWNzL0Rpc3RhbmNlQ29uc3RyYWludEdyYXBoaWMyRFwiO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDbG90aCh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgY29tcGxpYW5jZSA9IDAsIGRhbXBlckNvbXBsaWFuY2U9IDApe1xyXG4gICAgbGV0IHNjZW5lID0gbmV3IFNvbHZlclNjZW5lKCk7XHJcblxyXG4gICAgbGV0IGdyYXBoaWNzID0gbmV3IFJpZ2lkQm9keVBhdGhzKCk7XHJcbiAgICBncmFwaGljcy5saW5lV2lkdGggPSAod2luZG93IGFzIGFueSkubGluZVdpZHRoID8/IDAuMDU7XHJcblxyXG4gICAgbGV0IGJvZHlHcmFwaGljID0gZ3JhcGhpY3MuY3JlYXRlQm9keSgwLjEpO1xyXG4gICAgbGV0IGNvbnN0cmFpbnRHcmFwaGljID0gZ3JhcGhpY3MuY3JlYXRlQ29ubmVjdGlvbigxKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgYWxsIGJvZGllc1xyXG4gICAgZm9yKGxldCBqID0gMDsgaiA8IGhlaWdodDsgaisrKXtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgd2lkdGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCBib2R5ID0gbmV3IFJpZ2lkYm9keTJEKCkudHJhbnNsYXRlVG8oaSwgaik7XHJcbiAgICAgICAgICAgIGJvZHkuaW52ZXJzZUluZXJ0aWEgPSAwO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHNjZW5lLmJvZGllcy5wdXNoKGJvZHkpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHNjZW5lLmJvZHlHcmFwaGljcy5wdXNoKG5ldyBSaWdpZGJvZHlHcmFwaGljMkQoYm9keSwgYm9keUdyYXBoaWMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0Qm9keSA9IChpOiBudW1iZXIsIGo6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHJldHVybiBzY2VuZS5ib2RpZXNbaSArIGogKiB3aWR0aF07XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFNpZGV3YXlzXHJcbiAgICBmb3IobGV0IGogPSAwOyBqIDwgaGVpZ2h0OyBqKyspe1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB3aWR0aCAtIDE7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCBjb25zdHJhaW50ID0gbmV3IERpc3RhbmNlQ29uc3RyYWludDJEKG5ldyBDb25zdHJhaW50QXR0YWNobWVudDJEKGdldEJvZHkoaSwgaikpLCBuZXcgQ29uc3RyYWludEF0dGFjaG1lbnQyRChnZXRCb2R5KGkgKyAxLCBqKSksIHVuZGVmaW5lZCwgY29tcGxpYW5jZSk7XHJcbiAgICAgICAgICAgIGNvbnN0cmFpbnQuZGFtcGVyQ29tcGxpYW5jZSA9IGRhbXBlckNvbXBsaWFuY2U7XHJcblxyXG4gICAgICAgICAgICBzY2VuZS5jb25zdHJhaW50cy5wdXNoKGNvbnN0cmFpbnQpO1xyXG4gICAgICAgICAgICBzY2VuZS5jb25zdHJhaW50R3JhcGhpY3MucHVzaChuZXcgRGlzdGFuY2VDb25zdHJhaW50R3JhcGhpYzJEKGNvbnN0cmFpbnQsIGNvbnN0cmFpbnRHcmFwaGljKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFRvcCB0byBib3R0b21cclxuICAgIGZvcihsZXQgaiA9IDA7IGogPCBoZWlnaHQgLSAxOyBqKyspe1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB3aWR0aDsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IGNvbnN0cmFpbnQgPSBuZXcgRGlzdGFuY2VDb25zdHJhaW50MkQobmV3IENvbnN0cmFpbnRBdHRhY2htZW50MkQoZ2V0Qm9keShpLCBqKSksIG5ldyBDb25zdHJhaW50QXR0YWNobWVudDJEKGdldEJvZHkoaSwgaisgMSkpLCB1bmRlZmluZWQsIGNvbXBsaWFuY2UpO1xyXG4gICAgICAgICAgICBjb25zdHJhaW50LmRhbXBlckNvbXBsaWFuY2UgPSBkYW1wZXJDb21wbGlhbmNlO1xyXG5cclxuICAgICAgICAgICAgc2NlbmUuY29uc3RyYWludHMucHVzaChjb25zdHJhaW50KTtcclxuICAgICAgICAgICAgc2NlbmUuY29uc3RyYWludEdyYXBoaWNzLnB1c2gobmV3IERpc3RhbmNlQ29uc3RyYWludEdyYXBoaWMyRChjb25zdHJhaW50LCBjb25zdHJhaW50R3JhcGhpYykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gUGluIHRoZSBjb3JuZXJzXHJcbiAgICBsZXQgcGluTGVmdCA9IG5ldyBQaW5Db25zdHJhaW50MkQobmV3IENvbnN0cmFpbnRBdHRhY2htZW50MkQoZ2V0Qm9keSgwLCAwKSkpO1xyXG4gICAgbGV0IHBpblJpZ2h0ID0gbmV3IFBpbkNvbnN0cmFpbnQyRChuZXcgQ29uc3RyYWludEF0dGFjaG1lbnQyRChnZXRCb2R5KHdpZHRoIC0gMSwgMCkpKTtcclxuXHJcbiAgICBzY2VuZS5jb25zdHJhaW50cy5wdXNoKHBpbkxlZnQpO1xyXG4gICAgc2NlbmUuY29uc3RyYWludHMucHVzaChwaW5SaWdodCk7XHJcbiAgICAvLyBzY2VuZS5jb25zdHJhaW50cy5wdXNoKHBpblRvcCk7XHJcbiAgICAvLyBzY2VuZS5jb25zdHJhaW50cy5wdXNoKHBpbkJvdHRvbSk7XHJcbiAgICBcclxuICAgIHJldHVybiBzY2VuZTtcclxufSIsImltcG9ydCB7IFJpZ2lkYm9keTJEIH0gZnJvbSBcImxpYi94cGJkL1JpZ2lkYm9keTJEXCI7XHJcbmltcG9ydCB7IFNvbHZlclNjZW5lIH0gZnJvbSBcIi4vU29sdmVyU2NlbmVcIjtcclxuaW1wb3J0IHsgRGlzdGFuY2VDb25zdHJhaW50MkQgfSBmcm9tIFwibGliL3hwYmQvRGlzdGFuY2VDb25zdHJhaW50MkRcIjtcclxuaW1wb3J0IHsgQ29uc3RyYWludEF0dGFjaG1lbnQyRCB9IGZyb20gXCJsaWIveHBiZC9Db25zdHJhaW50QXR0YWNobWVudDJEXCI7XHJcbmltcG9ydCB7IFBpbkNvbnN0cmFpbnQyRCB9IGZyb20gXCJsaWIveHBiZC9QaW5Db25zdHJhaW50MkRcIjtcclxuaW1wb3J0IHsgUmlnaWRCb2R5UGF0aHMgfSBmcm9tIFwiLi9wYXRocy9SaWdpZEJvZHlQYXRoc1wiO1xyXG5pbXBvcnQgeyBSaWdpZGJvZHlHcmFwaGljMkQgfSBmcm9tIFwibGliL3hwYmQvZ3JhcGhpY3MvUmlnaWRib2R5R3JhcGhpYzJEXCI7XHJcbmltcG9ydCB7IERpc3RhbmNlQ29uc3RyYWludEdyYXBoaWMyRCB9IGZyb20gXCJsaWIveHBiZC9ncmFwaGljcy9EaXN0YW5jZUNvbnN0cmFpbnRHcmFwaGljMkRcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCJsaWIvbWF0aC9WZWN0b3IyXCI7XHJcbmltcG9ydCB7IEF4aXNDb25zdHJhaW50MkQgfSBmcm9tIFwibGliL3hwYmQvQXhpc0NvbnN0cmFpbnQyRFwiO1xyXG5cclxuZnVuY3Rpb24gYWRkR3JhcGhpY3Moc2NlbmU6IFNvbHZlclNjZW5lLCBzcGFjaW5nID0gMSl7XHJcbiAgICBsZXQgZ3JhcGhpY3MgPSBuZXcgUmlnaWRCb2R5UGF0aHMoKTtcclxuICAgIGdyYXBoaWNzLmxpbmVXaWR0aCA9ICh3aW5kb3cgYXMgYW55KS5saW5lV2lkdGggPz8gMC4wNTtcclxuXHJcbiAgICBzY2VuZS5ib2RpZXMuZm9yRWFjaChib2R5ID0+IHtcclxuICAgICAgICBsZXQgYm9keUdyYXBoaWMgPSBncmFwaGljcy5jcmVhdGVCb2R5KE1hdGguc3FydChib2R5Lm1hc3MpICogMC4yKTtcclxuXHJcbiAgICAgICAgc2NlbmUuYm9keUdyYXBoaWNzLnB1c2gobmV3IFJpZ2lkYm9keUdyYXBoaWMyRChib2R5LCBib2R5R3JhcGhpYykpO1xyXG4gICAgfSk7XHJcbiAgICBzY2VuZS5jb25zdHJhaW50cy5mb3JFYWNoKGNvbnN0cmFpbnQgPT4ge1xyXG4gICAgICAgIGlmKCEoY29uc3RyYWludCBpbnN0YW5jZW9mIERpc3RhbmNlQ29uc3RyYWludDJEKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgY29uc3RyYWludEdyYXBoaWMgPSBncmFwaGljcy5jcmVhdGVDb25uZWN0aW9uKGNvbnN0cmFpbnQucmVzdERpc3RhbmNlKTtcclxuICAgICAgICBcclxuICAgICAgICBzY2VuZS5jb25zdHJhaW50R3JhcGhpY3MucHVzaChuZXcgRGlzdGFuY2VDb25zdHJhaW50R3JhcGhpYzJEKGNvbnN0cmFpbnQsIGNvbnN0cmFpbnRHcmFwaGljKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbXBsaWNhdGVkU2NlbmUoKXtcclxuICAgIGxldCBzY2VuZSA9IG5ldyBTb2x2ZXJTY2VuZSgpO1xyXG5cclxuICAgIGxldCB0b3BXZWlnaHQgPSBuZXcgUmlnaWRib2R5MkQoKS50cmFuc2xhdGUoMCwgLTIpO1xyXG4gICAgdG9wV2VpZ2h0Lm1hc3MgPSA0O1xyXG4gICAgdG9wV2VpZ2h0LmluZXJ0aWEgPSA0O1xyXG5cclxuICAgIGxldCByaWdodFdlaWdodCA9IG5ldyBSaWdpZGJvZHkyRCgpLnRyYW5zbGF0ZVRvKDMsIDApO1xyXG4gICAgcmlnaHRXZWlnaHQubWFzcyA9IDU7XHJcbiAgICByaWdodFdlaWdodC5pbmVydGlhID0gNTtcclxuXHJcbiAgICBsZXQgbGVmdFdlaWdodCA9IG5ldyBSaWdpZGJvZHkyRCgpLnRyYW5zbGF0ZVRvKC0zLCAwKTtcclxuICAgIGxlZnRXZWlnaHQubWFzcyA9IDU7XHJcbiAgICBsZWZ0V2VpZ2h0LmluZXJ0aWEgPSA1O1xyXG5cclxuICAgIGxldCB3ZWlnaHQgPSBuZXcgUmlnaWRib2R5MkQoKTtcclxuICAgIHdlaWdodC5tYXNzID0gMTA7XHJcbiAgICB3ZWlnaHQuaW5lcnRpYSA9IDEwO1xyXG4gICAgXHJcbiAgICBsZXQgbGVmdCA9IG5ldyBSaWdpZGJvZHkyRCgpLnRyYW5zbGF0ZVRvKC0wLjUsIDEpO1xyXG4gICAgbGV0IGxlZnRCb3R0b20gPSBuZXcgUmlnaWRib2R5MkQoKS50cmFuc2xhdGVUbygtMC41LCAyKTtcclxuICAgIGxldCByaWdodCA9IG5ldyBSaWdpZGJvZHkyRCgpLnRyYW5zbGF0ZVRvKDAuNSwgMSk7XHJcblxyXG4gICAgbGVmdC5tYXNzID0gMTtcclxuICAgIHJpZ2h0Lm1hc3MgPSAyO1xyXG5cclxuICAgIGxldCBsZWZ0Q29ubmVjdGlvbiA9IG5ldyBEaXN0YW5jZUNvbnN0cmFpbnQyRChuZXcgQ29uc3RyYWludEF0dGFjaG1lbnQyRChsZWZ0LCBuZXcgVmVjdG9yMigwLCAwKSksIG5ldyBDb25zdHJhaW50QXR0YWNobWVudDJEKHdlaWdodCwgbmV3IFZlY3RvcjIoLTAuNSwgMCkpKTtcclxuICAgIGxldCByaWdodENvbm5lY3Rpb24gPSBuZXcgRGlzdGFuY2VDb25zdHJhaW50MkQobmV3IENvbnN0cmFpbnRBdHRhY2htZW50MkQocmlnaHQsIG5ldyBWZWN0b3IyKDAsIDApKSwgbmV3IENvbnN0cmFpbnRBdHRhY2htZW50MkQod2VpZ2h0LCBuZXcgVmVjdG9yMigwLjUsIDApKSk7XHJcbiAgICBsZXQgbGVmdEJvdHRvbUNvbm5lY3Rpb24gPSBuZXcgRGlzdGFuY2VDb25zdHJhaW50MkQobmV3IENvbnN0cmFpbnRBdHRhY2htZW50MkQobGVmdCwgbmV3IFZlY3RvcjIoMCwgMCkpLCBuZXcgQ29uc3RyYWludEF0dGFjaG1lbnQyRChsZWZ0Qm90dG9tLCBuZXcgVmVjdG9yMigwLCAwKSkpO1xyXG5cclxuICAgIGxldCB3ZWlnaHRDb25uZWN0aW9uUmlnaHQgPSBuZXcgRGlzdGFuY2VDb25zdHJhaW50MkQobmV3IENvbnN0cmFpbnRBdHRhY2htZW50MkQocmlnaHRXZWlnaHQsIG5ldyBWZWN0b3IyKC0wLjMsIDApKSwgbmV3IENvbnN0cmFpbnRBdHRhY2htZW50MkQod2VpZ2h0LCBuZXcgVmVjdG9yMigwLjUsIDApKSk7XHJcbiAgICBsZXQgd2VpZ2h0Q29ubmVjdGlvbkxlZnQgPSBuZXcgRGlzdGFuY2VDb25zdHJhaW50MkQobmV3IENvbnN0cmFpbnRBdHRhY2htZW50MkQobGVmdFdlaWdodCwgbmV3IFZlY3RvcjIoMC4zLCAwKSksIG5ldyBDb25zdHJhaW50QXR0YWNobWVudDJEKHdlaWdodCwgbmV3IFZlY3RvcjIoLTAuNSwgMCkpKTtcclxuXHJcbiAgICBsZXQgd2VpZ2h0UGluID0gbmV3IFBpbkNvbnN0cmFpbnQyRChuZXcgQ29uc3RyYWludEF0dGFjaG1lbnQyRCh3ZWlnaHQpKTtcclxuICAgIGxldCByaWdodFdlaWdodEF4aXMgPSBuZXcgQXhpc0NvbnN0cmFpbnQyRChuZXcgQ29uc3RyYWludEF0dGFjaG1lbnQyRChyaWdodFdlaWdodCksIG5ldyBWZWN0b3IyKDAsIDApLCBuZXcgVmVjdG9yMigxLCAwKSk7XHJcbiAgICBsZXQgbGVmdFdlaWdodEF4aXMgPSBuZXcgQXhpc0NvbnN0cmFpbnQyRChuZXcgQ29uc3RyYWludEF0dGFjaG1lbnQyRChsZWZ0V2VpZ2h0KSwgbmV3IFZlY3RvcjIoMCwgMCksIG5ldyBWZWN0b3IyKDEsIDApKTtcclxuXHJcbiAgICBsZXQgbGVmdFRvcENvbm5lY3Rpb24gPSBuZXcgRGlzdGFuY2VDb25zdHJhaW50MkQobmV3IENvbnN0cmFpbnRBdHRhY2htZW50MkQobGVmdFdlaWdodCksIG5ldyBDb25zdHJhaW50QXR0YWNobWVudDJEKHRvcFdlaWdodCwgbmV3IFZlY3RvcjIoLTAuMywgMCkpKTtcclxuICAgIGxldCByaWdodFRvcENvbm5lY3Rpb24gPSBuZXcgRGlzdGFuY2VDb25zdHJhaW50MkQobmV3IENvbnN0cmFpbnRBdHRhY2htZW50MkQocmlnaHRXZWlnaHQpLCBuZXcgQ29uc3RyYWludEF0dGFjaG1lbnQyRCh0b3BXZWlnaHQsIG5ldyBWZWN0b3IyKDAuMywgMCkpKTtcclxuXHJcbiAgICBzY2VuZS5ib2RpZXMucHVzaCh3ZWlnaHQpO1xyXG4gICAgc2NlbmUuYm9kaWVzLnB1c2gobGVmdCk7XHJcbiAgICBzY2VuZS5ib2RpZXMucHVzaChyaWdodCk7XHJcbiAgICBzY2VuZS5ib2RpZXMucHVzaChsZWZ0Qm90dG9tKTtcclxuICAgIHNjZW5lLmJvZGllcy5wdXNoKHJpZ2h0V2VpZ2h0KTtcclxuICAgIHNjZW5lLmJvZGllcy5wdXNoKGxlZnRXZWlnaHQpO1xyXG4gICAgc2NlbmUuYm9kaWVzLnB1c2godG9wV2VpZ2h0KTtcclxuXHJcbiAgICBzY2VuZS5jb25zdHJhaW50cy5wdXNoKHdlaWdodFBpbik7XHJcbiAgICBzY2VuZS5jb25zdHJhaW50cy5wdXNoKGxlZnRDb25uZWN0aW9uKTtcclxuICAgIHNjZW5lLmNvbnN0cmFpbnRzLnB1c2gocmlnaHRDb25uZWN0aW9uKTtcclxuICAgIHNjZW5lLmNvbnN0cmFpbnRzLnB1c2gobGVmdEJvdHRvbUNvbm5lY3Rpb24pO1xyXG4gICAgc2NlbmUuY29uc3RyYWludHMucHVzaChyaWdodFdlaWdodEF4aXMpO1xyXG4gICAgc2NlbmUuY29uc3RyYWludHMucHVzaChsZWZ0V2VpZ2h0QXhpcyk7XHJcblxyXG4gICAgc2NlbmUuY29uc3RyYWludHMucHVzaCh3ZWlnaHRDb25uZWN0aW9uUmlnaHQpO1xyXG4gICAgc2NlbmUuY29uc3RyYWludHMucHVzaCh3ZWlnaHRDb25uZWN0aW9uTGVmdCk7XHJcblxyXG4gICAgc2NlbmUuY29uc3RyYWludHMucHVzaChsZWZ0VG9wQ29ubmVjdGlvbik7XHJcbiAgICBzY2VuZS5jb25zdHJhaW50cy5wdXNoKHJpZ2h0VG9wQ29ubmVjdGlvbik7XHJcblxyXG4gICAgYWRkR3JhcGhpY3Moc2NlbmUpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gc2NlbmU7XHJcbn0iLCJpbXBvcnQgeyBSaWdpZGJvZHkyRCB9IGZyb20gXCJsaWIveHBiZC9SaWdpZGJvZHkyRFwiO1xyXG5pbXBvcnQgeyBTb2x2ZXJTY2VuZSB9IGZyb20gXCIuL1NvbHZlclNjZW5lXCI7XHJcbmltcG9ydCB7IEF4aXNDb25zdHJhaW50MkQgfSBmcm9tIFwibGliL3hwYmQvQXhpc0NvbnN0cmFpbnQyRFwiO1xyXG5pbXBvcnQgeyBEaXN0YW5jZUNvbnN0cmFpbnQyRCB9IGZyb20gXCJsaWIveHBiZC9EaXN0YW5jZUNvbnN0cmFpbnQyRFwiO1xyXG5pbXBvcnQgeyBQaW5Db25zdHJhaW50MkQgfSBmcm9tIFwibGliL3hwYmQvUGluQ29uc3RyYWludDJEXCI7XHJcbmltcG9ydCB7IENvbnN0cmFpbnRBdHRhY2htZW50MkQgfSBmcm9tIFwibGliL3hwYmQvQ29uc3RyYWludEF0dGFjaG1lbnQyRFwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcImxpYi9tYXRoL1ZlY3RvcjJcIjtcclxuaW1wb3J0IHsgQXhsZUNvc250cmFpbnQyRCB9IGZyb20gXCJsaWIveHBiZC9BeGxlQ29uc3RyYWludDJEXCI7XHJcbmltcG9ydCB7IEVuZ2luZVBhcnRQYXRocyB9IGZyb20gXCJhcHAvcGF0aHMvRW5naW5lUGFydFBhdGhzXCI7XHJcbmltcG9ydCB7IFJpZ2lkYm9keUdyYXBoaWMyRCB9IGZyb20gXCJsaWIveHBiZC9ncmFwaGljcy9SaWdpZGJvZHlHcmFwaGljMkRcIjtcclxuaW1wb3J0IHsgRGlzdGFuY2VDb25zdHJhaW50R3JhcGhpYzJEIH0gZnJvbSBcImxpYi94cGJkL2dyYXBoaWNzL0Rpc3RhbmNlQ29uc3RyYWludEdyYXBoaWMyRFwiO1xyXG5cclxuaW50ZXJmYWNlIEN5bGluZGVyIHtcclxuICAgIHBpc3RvbjogUmlnaWRib2R5MkQsXHJcbiAgICBjb3VudGVyV2VpZ2h0OiBSaWdpZGJvZHkyRCxcclxuICAgIFxyXG4gICAgY3JhbmtBcm06IERpc3RhbmNlQ29uc3RyYWludDJELFxyXG5cclxuICAgIHBoYXNlOiBudW1iZXIsXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQaXN0b24oc2NlbmU6IFNvbHZlclNjZW5lLCB4OiBudW1iZXIsIHk6IG51bWJlciwgcGhhc2U6IG51bWJlcik6IEN5bGluZGVyIHtcclxuICAgIGxldCByYWRpdXMgPSAwLjU7XHJcbiAgICBcclxuICAgIGxldCBwaXN0b24gPSBuZXcgUmlnaWRib2R5MkQoKTtcclxuICAgIHBpc3Rvbi50cmFuc2xhdGVUbyh4LCB5IC0gMS41ICsgTWF0aC5zaW4ocGhhc2UpKTtcclxuIFxyXG4gICAgLy8gTWFrZSBzdXJlIHdlIGNhbm5vdCByb3RhdGUgdGhlIHBpc3Rvbi5cclxuICAgIHBpc3Rvbi5pbnZlcnNlSW5lcnRpYSA9IDA7XHJcbiBcclxuICAgIGxldCBjb3VudGVyV2VpZ2h0ID0gbmV3IFJpZ2lkYm9keTJEKCk7XHJcbiAgICBjb3VudGVyV2VpZ2h0LnRyYW5zbGF0ZVRvKHgsIHkpO1xyXG4gXHJcbiAgICBsZXQgcGlzdG9uV2FsbHMgPSBuZXcgQXhpc0NvbnN0cmFpbnQyRChuZXcgQ29uc3RyYWludEF0dGFjaG1lbnQyRChwaXN0b24pLCBuZXcgVmVjdG9yMih4LCB5KSwgbmV3IFZlY3RvcjIoMCwgMSkpO1xyXG4gICAgXHJcbiAgICAvLyBUT0RPIHRoaXMgZGlzdGFuY2UgaXMgbm93IHNldCB0byAyIGJ1dCB0aGlzIG1lYW5zIHRoZSB3aG9sZSB0aGluZyBzdGFydHMgb2ZmIHdpdGggc29tZSBlbmVyZ3kgaW4gdGhlIHN5c3RlbSBiZWNhdXNlIHRoZSBjb25zdHJhaW50cyBhcmUgbm90IG1ldFxyXG4gICAgbGV0IGNyYW5rQXJtID0gbmV3IERpc3RhbmNlQ29uc3RyYWludDJEKFxyXG4gICAgICAgICAgICBuZXcgQ29uc3RyYWludEF0dGFjaG1lbnQyRChwaXN0b24pLCBcclxuICAgICAgICAgICAgbmV3IENvbnN0cmFpbnRBdHRhY2htZW50MkQoY291bnRlcldlaWdodCwgXHJcbiAgICAgICAgICAgIFZlY3RvcjIuYW5nbGVkKHBoYXNlKS5zY2FsZShyYWRpdXMpKSwgXHJcbiAgICAgICAgICAgIDEuNSk7XHJcbiAgICBcclxuICAgIGxldCBjcmFua1NoYWZ0ID0gbmV3IFBpbkNvbnN0cmFpbnQyRChuZXcgQ29uc3RyYWludEF0dGFjaG1lbnQyRChjb3VudGVyV2VpZ2h0KSwgY291bnRlcldlaWdodC5wb3NpdGlvbi5jbG9uZSgpKTtcclxuIFxyXG4gICAgc2NlbmUuYm9kaWVzLnB1c2gocGlzdG9uKTtcclxuICAgIHNjZW5lLmJvZGllcy5wdXNoKGNvdW50ZXJXZWlnaHQpO1xyXG4gXHJcbiAgICBzY2VuZS5jb25zdHJhaW50cy5wdXNoKHBpc3RvbldhbGxzKTtcclxuICAgIHNjZW5lLmNvbnN0cmFpbnRzLnB1c2goY3JhbmtTaGFmdCk7XHJcbiAgICBzY2VuZS5jb25zdHJhaW50cy5wdXNoKGNyYW5rQXJtKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBpc3RvbixcclxuICAgICAgICBjb3VudGVyV2VpZ2h0LFxyXG4gICAgICAgIGNyYW5rQXJtLFxyXG4gICAgICAgIHBoYXNlLFxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGFkZEF4bGUoc2NlbmU6IFNvbHZlclNjZW5lLCBib2RpZXM6IFJpZ2lkYm9keTJEW10pe1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGggLSAxOyBpKyspe1xyXG4gICAgICAgIGxldCBjb25zdHJhaW50ID0gbmV3IEF4bGVDb3NudHJhaW50MkQoYm9kaWVzW2ldLCBib2RpZXNbaSArIDFdKTtcclxuXHJcbiAgICAgICAgc2NlbmUuY29uc3RyYWludHMucHVzaChjb25zdHJhaW50KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRDeWxpbmRlcnMoc2NlbmU6IFNvbHZlclNjZW5lLCBhbW91bnQ6IG51bWJlcik6IEN5bGluZGVyW117XHJcbiAgICBsZXQgY3lsaW5kZXJzOiBDeWxpbmRlcltdID0gW107XHJcblxyXG4gICAgbGV0IHNwYWNpbmcgPSAxLjU7XHJcblxyXG4gICAgbGV0IHBoYXNlT2Zmc2V0ID0gTWF0aC5QSTtcclxuICAgIFxyXG4gICAgbGV0IHdpZHRoID0gKGFtb3VudCAtIDEpICogc3BhY2luZztcclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYW1vdW50OyBpKyspIHtcclxuICAgICAgICBjeWxpbmRlcnMucHVzaChhZGRQaXN0b24oc2NlbmUsIC13aWR0aCAvIDIgKyBzcGFjaW5nICogaSwgMCwgcGhhc2VPZmZzZXQgKiBpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGN5bGluZGVycztcclxufVxyXG5mdW5jdGlvbiBhZGRHcmFwaGljcyhzY2VuZTogU29sdmVyU2NlbmUsIGN5bGluZGVyczogQ3lsaW5kZXJbXSl7XHJcbiAgICBsZXQgZyA9IG5ldyBFbmdpbmVQYXJ0UGF0aHMoKTtcclxuICAgIGcubGluZVdpZHRoID0gKHdpbmRvdyBhcyBhbnkpLmxpbmVXaWR0aCA/PyAwLjA1O1xyXG5cclxuICAgIGxldCBwaXN0b24gPSBnLmNyZWF0ZVBpc3RvbigxLCAwLjgpO1xyXG4gICAgbGV0IGFybSA9IGcuY3JlYXRlQXJtKDEuNVxyXG4gICAgICAgICk7XHJcbiAgICBsZXQgY291bnRlcldlaWdodCA9IGcuY3JlYXRlQ291bnRlcldlaWdodCgwLjUpO1xyXG5cclxuICAgIGN5bGluZGVycy5mb3JFYWNoKGN5bGluZGVyID0+IHtcclxuICAgICAgICBzY2VuZS5ib2R5R3JhcGhpY3MucHVzaChuZXcgUmlnaWRib2R5R3JhcGhpYzJEKGN5bGluZGVyLnBpc3RvbiwgcGlzdG9uKSk7XHJcbiAgICAgICAgc2NlbmUuYm9keUdyYXBoaWNzLnB1c2gobmV3IFJpZ2lkYm9keUdyYXBoaWMyRChjeWxpbmRlci5jb3VudGVyV2VpZ2h0LCBjb3VudGVyV2VpZ2h0KS5zZXRSb3RhdGlvbmFsT2Zmc2V0KGN5bGluZGVyLnBoYXNlKSk7XHJcblxyXG4gICAgICAgIHNjZW5lLmNvbnN0cmFpbnRHcmFwaGljcy5wdXNoKG5ldyBEaXN0YW5jZUNvbnN0cmFpbnRHcmFwaGljMkQoY3lsaW5kZXIuY3JhbmtBcm0sIGFybSkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbmdpbmVUZXN0U2NlbmUoY3lsaW5kZXJDb3VudDogbnVtYmVyKXtcclxuICAgIGxldCBzY2VuZSA9IG5ldyBTb2x2ZXJTY2VuZSgpO1xyXG5cclxuICAgIGxldCBjeWxpbmRlcnMgPSBhZGRDeWxpbmRlcnMoc2NlbmUsIGN5bGluZGVyQ291bnQpO1xyXG5cclxuICAgIGFkZEF4bGUoc2NlbmUsIGN5bGluZGVycy5tYXAoY3lsaWRuZXIgPT4gY3lsaWRuZXIuY291bnRlcldlaWdodCkpO1xyXG5cclxuICAgIGFkZEdyYXBoaWNzKHNjZW5lLCBjeWxpbmRlcnMpO1xyXG4gXHJcbiAgICByZXR1cm4gc2NlbmU7XHJcbn0iLCJcclxubGV0IG1lbnU6IEhUTUxFbGVtZW50O1xyXG5sZXQgbWVudUJ1dHRvbjogSFRNTEVsZW1lbnQ7XHJcblxyXG5sZXQgbWVudU9wZW4gPSBmYWxzZTtcclxuXHJcbmZ1bmN0aW9uIHNldE1lbnVPcGVuKHY6IGJvb2xlYW4pe1xyXG4gICAgbWVudU9wZW4gPSB2O1xyXG4gICAgc3luY01lbnUoKTtcclxufVxyXG5mdW5jdGlvbiB0b2dnbGVNZW51KCl7XHJcbiAgICBtZW51T3BlbiA9ICFtZW51T3BlbjtcclxuICAgIHN5bmNNZW51KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN5bmNNZW51KCl7XHJcbiAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJpbml0XCIpO1xyXG5cclxuICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiLCAhbWVudU9wZW4pO1xyXG4gICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiLCBtZW51T3Blbik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0TWVudSgpe1xyXG4gICAgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVwiKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIG1lbnVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtYnV0dG9uXCIpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRvZ2dsZU1lbnUoKSk7XHJcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHNldE1lbnVPcGVuKGZhbHNlKSk7XHJcblxyXG4gICAgbGV0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LWl0ZW1cIik7XHJcbiAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHNldE1lbnVPcGVuKGZhbHNlKSk7XHJcbiAgICB9KTtcclxuICAgIFxyXG5cclxuICAgIFxyXG4gICAgc3luY01lbnUoKTtcclxufSIsImltcG9ydCB7IFJpZ2lkYm9keTJEIH0gZnJvbSBcImxpYi94cGJkL1JpZ2lkYm9keTJEXCI7XHJcbmltcG9ydCB7IFNvbHZlclNjZW5lIH0gZnJvbSBcIi4vU29sdmVyU2NlbmVcIjtcclxuaW1wb3J0IHsgRGlzdGFuY2VDb25zdHJhaW50MkQgfSBmcm9tIFwibGliL3hwYmQvRGlzdGFuY2VDb25zdHJhaW50MkRcIjtcclxuaW1wb3J0IHsgQ29uc3RyYWludEF0dGFjaG1lbnQyRCB9IGZyb20gXCJsaWIveHBiZC9Db25zdHJhaW50QXR0YWNobWVudDJEXCI7XHJcbmltcG9ydCB7IFBpbkNvbnN0cmFpbnQyRCB9IGZyb20gXCJsaWIveHBiZC9QaW5Db25zdHJhaW50MkRcIjtcclxuaW1wb3J0IHsgUmlnaWRCb2R5UGF0aHMgfSBmcm9tIFwiLi9wYXRocy9SaWdpZEJvZHlQYXRoc1wiO1xyXG5pbXBvcnQgeyBSaWdpZGJvZHlHcmFwaGljMkQgfSBmcm9tIFwibGliL3hwYmQvZ3JhcGhpY3MvUmlnaWRib2R5R3JhcGhpYzJEXCI7XHJcbmltcG9ydCB7IERpc3RhbmNlQ29uc3RyYWludEdyYXBoaWMyRCB9IGZyb20gXCJsaWIveHBiZC9ncmFwaGljcy9EaXN0YW5jZUNvbnN0cmFpbnRHcmFwaGljMkRcIjtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGVuZHVsdW1UZXN0KGNvdW50OiBudW1iZXIsIHNwYWNpbmc6IG51bWJlciA9IDEsIGNvbXBsaWFuY2UgPSAwLCBkYW1wZXJDb21wbGlhbmNlID0gLTEpe1xyXG4gICAgbGV0IHNjZW5lID0gbmV3IFNvbHZlclNjZW5lKCk7XHJcblxyXG4gICAgbGV0IGdyYXBoaWNzID0gbmV3IFJpZ2lkQm9keVBhdGhzKCk7XHJcbiAgICBncmFwaGljcy5saW5lV2lkdGggPSAod2luZG93IGFzIGFueSkubGluZVdpZHRoID8/IDAuMDU7XHJcblxyXG4gICAgbGV0IGJvZHlHcmFwaGljID0gZ3JhcGhpY3MuY3JlYXRlQm9keShNYXRoLm1pbihzcGFjaW5nIC8gMiAtIDAuMSwgMC40KSk7XHJcbiAgICBsZXQgY29uc3RyYWludEdyYXBoaWMgPSBncmFwaGljcy5jcmVhdGVDb25uZWN0aW9uKHNwYWNpbmcpO1xyXG5cclxuICAgIGxldCBpbml0aWFsQm9keSA9IG5ldyBSaWdpZGJvZHkyRCgpLnRyYW5zbGF0ZVRvKDAsIDApXHJcbiAgICBzY2VuZS5ib2RpZXMucHVzaChpbml0aWFsQm9keSk7XHJcbiAgICBzY2VuZS5ib2R5R3JhcGhpY3MucHVzaChuZXcgUmlnaWRib2R5R3JhcGhpYzJEKGluaXRpYWxCb2R5LCBib2R5R3JhcGhpYykpO1xyXG5cclxuICAgIGluaXRpYWxCb2R5LmludmVyc2VJbmVydGlhID0gMDtcclxuXHJcblxyXG4gICAgbGV0IHByZXZpb3VzQm9keSA9IGluaXRpYWxCb2R5O1xyXG5cclxuICAgIGZvcihsZXQgaSA9IDE7IGkgPCBjb3VudDsgaSsrKXtcclxuICAgICAgICAvLyBWZXJ5IHNsaWd0aCByYW5kb20gb2Zmc2V0IG9mIHRoZSB4IHRvIGdpdmUgaXQgc29tZSBjb29sIGFuaW1hdGlvbiA6KVxyXG4gICAgICAgIGxldCBib2R5ID0gbmV3IFJpZ2lkYm9keTJEKCkudHJhbnNsYXRlVG8oTWF0aC5yYW5kb20oKSAqIDAuMDAxLCAtaSAqIHNwYWNpbmcpO1xyXG4gICAgICAgIGxldCBjb25zdHJhaW50ID0gbmV3IERpc3RhbmNlQ29uc3RyYWludDJEKG5ldyBDb25zdHJhaW50QXR0YWNobWVudDJEKGJvZHkpLCBuZXcgQ29uc3RyYWludEF0dGFjaG1lbnQyRChwcmV2aW91c0JvZHkpKTtcclxuICAgICAgICBjb25zdHJhaW50LmNvbXBsaWFuY2UgPSBjb21wbGlhbmNlO1xyXG4gICAgICAgIGNvbnN0cmFpbnQuZGFtcGVyQ29tcGxpYW5jZSA9IGRhbXBlckNvbXBsaWFuY2U7XHJcblxyXG4gICAgICAgIGJvZHkuaW52ZXJzZUluZXJ0aWEgPSAwO1xyXG5cclxuICAgICAgICBzY2VuZS5ib2RpZXMucHVzaChib2R5KTtcclxuICAgICAgICBzY2VuZS5jb25zdHJhaW50cy5wdXNoKGNvbnN0cmFpbnQpO1xyXG5cclxuICAgICAgICBzY2VuZS5ib2R5R3JhcGhpY3MucHVzaChuZXcgUmlnaWRib2R5R3JhcGhpYzJEKGJvZHksIGJvZHlHcmFwaGljKSk7XHJcbiAgICAgICAgc2NlbmUuY29uc3RyYWludEdyYXBoaWNzLnB1c2gobmV3IERpc3RhbmNlQ29uc3RyYWludEdyYXBoaWMyRChjb25zdHJhaW50LCBjb25zdHJhaW50R3JhcGhpYykpO1xyXG5cclxuICAgICAgICBwcmV2aW91c0JvZHkgPSBib2R5O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsZXQgcGluID0gbmV3IFBpbkNvbnN0cmFpbnQyRChuZXcgQ29uc3RyYWludEF0dGFjaG1lbnQyRChpbml0aWFsQm9keSkpO1xyXG4gICAgc2NlbmUuY29uc3RyYWludHMucHVzaChwaW4pO1xyXG4gICAgXHJcbiAgICByZXR1cm4gc2NlbmU7XHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcImxpYi9tYXRoL1ZlY3RvcjJcIjtcclxuaW1wb3J0IHsgQXhpc0NvbnN0cmFpbnQyRCB9IGZyb20gXCJsaWIveHBiZC9BeGlzQ29uc3RyYWludDJEXCI7XHJcbmltcG9ydCB7IENvbnN0cmFpbnQyRCB9IGZyb20gXCJsaWIveHBiZC9Db25zdHJhaW50MkRcIjtcclxuaW1wb3J0IHsgRGlzdGFuY2VDb25zdHJhaW50MkQgfSBmcm9tIFwibGliL3hwYmQvRGlzdGFuY2VDb25zdHJhaW50MkRcIjtcclxuaW1wb3J0IHsgUGluQ29uc3RyYWludDJEIH0gZnJvbSBcImxpYi94cGJkL1BpbkNvbnN0cmFpbnQyRFwiO1xyXG5pbXBvcnQgeyBSaWdpZGJvZHkyRCB9IGZyb20gXCJsaWIveHBiZC9SaWdpZGJvZHkyRFwiO1xyXG5pbXBvcnQgeyBEaXN0YW5jZUNvbnN0cmFpbnRHcmFwaGljMkQgfSBmcm9tIFwibGliL3hwYmQvZ3JhcGhpY3MvRGlzdGFuY2VDb25zdHJhaW50R3JhcGhpYzJEXCI7XHJcbmltcG9ydCB7IFJpZ2lkYm9keUdyYXBoaWMyRCB9IGZyb20gXCJsaWIveHBiZC9ncmFwaGljcy9SaWdpZGJvZHlHcmFwaGljMkRcIjtcclxuaW1wb3J0IHsgR3JhcGhpY3MyRCB9IGZyb20gXCJsaWIvZ3JhcGhpY3MvR3JhcGhpY3MyRFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNvbHZlclNjZW5lIHtcclxuICAgIGJvZGllczogUmlnaWRib2R5MkRbXSA9IFtdO1xyXG4gICAgY29uc3RyYWludHM6IENvbnN0cmFpbnQyRFtdID0gW107XHJcblxyXG4gICAgYm9keUdyYXBoaWNzOiBSaWdpZGJvZHlHcmFwaGljMkRbXSA9IFtdO1xyXG4gICAgY29uc3RyYWludEdyYXBoaWNzOiBEaXN0YW5jZUNvbnN0cmFpbnRHcmFwaGljMkRbXSA9IFtdO1xyXG5cclxuICAgIHN1YnN0ZXBzOiBudW1iZXIgPSAxO1xyXG4gICAgY29uc3RyYWludFN1YnN0ZXBzOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIGdyYXZpdHlSYXRlOiBudW1iZXIgPSAxO1xyXG4gICAgdGltZVJhdGU6IG51bWJlciA9IDE7XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhOiBudW1iZXIpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3Vic3RlcHM7IGkrKykge1xyXG4gICAgICAgICAgICAvLyBOb3RlIHRoYXQgd2UgZG8gaGF2ZSB0byBkaXZpZGUgZGVsdGEgaW50byB0aGUgc3Vic3RlcHMgaGVyZS5cclxuICAgICAgICAgICAgdGhpcy5zdGVwKGRlbHRhIC8gdGhpcy5zdWJzdGVwcyAqIHRoaXMudGltZVJhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0ZXAoZGVsdGE6IG51bWJlcikge1xyXG4gICAgICAgIC8vIFVwZGF0ZSBhbGwgdGhlIGJvZGllcyBmaXJzdFxyXG4gICAgICAgIHRoaXMuYm9kaWVzLmZvckVhY2goYm9keSA9PiB7XHJcbiAgICAgICAgICAgIC8vIE1vdmUgd2l0aCBjdXJyZW50IHZlbG9jaXR5XHJcbiAgICAgICAgICAgIGJvZHkuYXBwbHlNb3Rpb24oZGVsdGEpO1xyXG5cclxuICAgICAgICAgICAgLy8gQXBwbHkgZ3Jhdml0eSwgaWYgYXBwbGljYWJsZVxyXG4gICAgICAgICAgICBpZiAoYm9keS5pbnZlcnNlTWFzcyA+IDApIHtcclxuICAgICAgICAgICAgICAgIGJvZHkuYWRkSW1tZWRpYXRlRm9yY2UoMCwgOS44MSAvIGJvZHkuaW52ZXJzZU1hc3MgKiB0aGlzLmdyYXZpdHlSYXRlLCBkZWx0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIGFsbCB0aGUgY29uc3RyYWludHNcclxuICAgICAgICB0aGlzLmNvbnN0cmFpbnRzLmZvckVhY2goY29uc3RyYWludCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjb25zdHJhaW50LmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0cmFpbnQuaW5pdChkZWx0YSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb25zdHJhaW50U3Vic3RlcHM7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnN0cmFpbnRzLmZvckVhY2goY29uc3RyYWludCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29uc3RyYWludC5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTm90ZTogd2UgZG9uJ3QgbmVlZCB0byBkaXZpZGUgdGhlIGRlbHRhIGJlY2F1c2Ugb2YgdGhlIGxhbWJkYSBpbiB0aGUgY29uc3RyYWludHMuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29uc3RyYWludHMgY2FuIGJlIGV2YWx1YXRlZCBtYW55IHRpbWVzIHBlciBmcmFtZSB3aXRob3V0IGluY3JlYXNpbmcgZW5lcmd5LlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cmFpbnQuYXBwbHkoZGVsdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFJlY2FsY3VsYXRlIGFsbCB0aGUgdmVsb2NpdGllcy4gVGhpcyBzdGVwIF9jYW5fIGJlIHNraXBwZWQgYmVjYXVzZSBcclxuICAgICAgICAvLyB3ZSBjYWxjdWxhdGUgdGhlIHZlbG9jaXR5IGltbWVkaWF0bHkgd2hlbiBhcHBseWluZyBpbXB1bHNlc1xyXG4gICAgICAgIC8vIGJ1dCB0aGlzIHdpbGwgYmUgYWRkaXRpb25hbGx5IHJvYnVzdCBpZiB3ZSBtb3ZlIG9iamVjdHMgd2l0aG91dCBhZmZlY3RpbmcgdGhlIHZlbG9jaXR5LlxyXG4gICAgICAgIHRoaXMuYm9kaWVzLmZvckVhY2goYm9keSA9PiBib2R5LnJlY2FsY3VsYXRlVmVsb2NpdHkoZGVsdGEpKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gVGhlbiBmaW5hbGx5IHdlIHBlcmZvcm0gZGFtcGluZyBhcyB3ZWxsLiBQbGVhc2Ugbm90ZSB0aGF0IGluIG1vc3Qgb2YgdGhlIGV4YW1wbGVzIHdlIGRvbid0IGFjdHVhbGx5IGRvIG11Y2ggb2YgYW55IGRhbXBpbmcgKGRhbXBlckNvbXBsaWFuY2UgPCAwKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb25zdHJhaW50U3Vic3RlcHM7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnN0cmFpbnRzLmZvckVhY2goY29uc3RyYWludCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29uc3RyYWludC5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTm90ZTogd2UgZG9uJ3QgbmVlZCB0byBkaXZpZGUgdGhlIGRlbHRhIGJlY2F1c2Ugb2YgdGhlIGxhbWJkYSBpbiB0aGUgY29uc3RyYWludHMuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29uc3RyYWludHMgY2FuIGJlIGV2YWx1YXRlZCBtYW55IHRpbWVzIHBlciBmcmFtZSB3aXRob3V0IGluY3JlYXNpbmcgZW5lcmd5LlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cmFpbnQuYXBwbHlEYW1waW5nKGRlbHRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoZ3JhcGhpY3M6IEdyYXBoaWNzMkQpe1xyXG4gICAgICAgIHRoaXMuY29uc3RyYWludEdyYXBoaWNzLmZvckVhY2goZ3JhcGhpYyA9PiBncmFwaGljLmRyYXcoZ3JhcGhpY3MpKTtcclxuICAgICAgICB0aGlzLmJvZHlHcmFwaGljcy5mb3JFYWNoKGdyYXBoaWMgPT4gZ3JhcGhpYy5kcmF3KGdyYXBoaWNzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0RlYnVnKGdyYXBoaWNzOiBHcmFwaGljczJELCBib2R5UmFkaXVzOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgc2NhbGUgPSA0O1xyXG5cclxuICAgICAgICBncmFwaGljcy5zZXRMaW5lV2lkdGhJblBvaW50cygyKTtcclxuXHJcbiAgICAgICAgZ3JhcGhpY3Muc2V0U3Ryb2tlQ29sb3IoXCJyZWRcIik7XHJcblxyXG4gICAgICAgIHRoaXMuY29uc3RyYWludHMuZm9yRWFjaChjb25zdHJhaW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKCFjb25zdHJhaW50LmVuYWJsZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGlmICgoY29uc3RyYWludCBpbnN0YW5jZW9mIERpc3RhbmNlQ29uc3RyYWludDJEKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGZyb20gPSBjb25zdHJhaW50LmZyb20uZ2V0R2xvYmFsQXR0YWNobWVudFBvc2l0aW9uKG5ldyBWZWN0b3IyKCkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvID0gY29uc3RyYWludC50by5nZXRHbG9iYWxBdHRhY2htZW50UG9zaXRpb24obmV3IFZlY3RvcjIoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZ3JhcGhpY3MuZHJhd0xpbmUoZnJvbS54LCBmcm9tLnksIHRvLngsIHRvLnkpO1xyXG4gICAgICAgICAgICAgICAgZ3JhcGhpY3MuZHJhd0NpcmNsZShmcm9tLngsIGZyb20ueSwgZ3JhcGhpY3MucG9pbnRTaXplICogc2NhbGUsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGdyYXBoaWNzLmRyYXdDaXJjbGUodG8ueCwgdG8ueSwgZ3JhcGhpY3MucG9pbnRTaXplICogc2NhbGUsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoKGNvbnN0cmFpbnQgaW5zdGFuY2VvZiBQaW5Db25zdHJhaW50MkQpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXR0YWNobWVudCA9IGNvbnN0cmFpbnQuYXR0YWNobWVudC5nZXRHbG9iYWxBdHRhY2htZW50UG9zaXRpb24obmV3IFZlY3RvcjIoKSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3JpZ2luID0gY29uc3RyYWludC5vcmlnaW47XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHNpemUgPSBzY2FsZSAqIGdyYXBoaWNzLnBvaW50U2l6ZSAqIDE7XHJcblxyXG4gICAgICAgICAgICAgICAgZ3JhcGhpY3MuZHJhd0xpbmUob3JpZ2luLngsIG9yaWdpbi55LCBhdHRhY2htZW50LngsIGF0dGFjaG1lbnQueSk7XHJcbiAgICAgICAgICAgICAgICBncmFwaGljcy5kcmF3TGluZShhdHRhY2htZW50LnggLSBzaXplLCBhdHRhY2htZW50LnkgLSBzaXplLCBhdHRhY2htZW50LnggKyBzaXplLCBhdHRhY2htZW50LnkgKyBzaXplKTtcclxuICAgICAgICAgICAgICAgIGdyYXBoaWNzLmRyYXdMaW5lKGF0dGFjaG1lbnQueCAtIHNpemUsIGF0dGFjaG1lbnQueSArIHNpemUsIGF0dGFjaG1lbnQueCArIHNpemUsIGF0dGFjaG1lbnQueSAtIHNpemUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgoY29uc3RyYWludCBpbnN0YW5jZW9mIEF4aXNDb25zdHJhaW50MkQpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXR0YWNobWVudCA9IGNvbnN0cmFpbnQuYXR0YWNobWVudC5nZXRHbG9iYWxBdHRhY2htZW50UG9zaXRpb24obmV3IFZlY3RvcjIoKSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3JpZ2luID0gY29uc3RyYWludC5vcmlnaW47XHJcbiAgICAgICAgICAgICAgICBsZXQgYXhpcyA9IGNvbnN0cmFpbnQuYXhpcztcclxuXHJcbiAgICAgICAgICAgICAgICBvcmlnaW4gPSBhdHRhY2htZW50O1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBheGlzU2l6ZSA9IHNjYWxlICogZ3JhcGhpY3MucG9pbnRTaXplICogODtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgYW54ID0gYXhpcy55ICogYXhpc1NpemUgLyA0O1xyXG4gICAgICAgICAgICAgICAgbGV0IGFueSA9IC1heGlzLnggKiBheGlzU2l6ZSAvIDQ7XHJcblxyXG4gICAgICAgICAgICAgICAgZ3JhcGhpY3MuZHJhd0xpbmUob3JpZ2luLnggLSBhbngsIG9yaWdpbi55IC0gYW55LCBvcmlnaW4ueCArIGFueCwgb3JpZ2luLnkgKyBhbnkpO1xyXG4gICAgICAgICAgICAgICAgZ3JhcGhpY3MuZHJhd0xpbmUob3JpZ2luLnggLSBheGlzLnggKiBheGlzU2l6ZSwgb3JpZ2luLnkgLSBheGlzLnkgKiBheGlzU2l6ZSwgb3JpZ2luLnggKyBheGlzLnggKiBheGlzU2l6ZSwgb3JpZ2luLnkgKyBheGlzLnkgKiBheGlzU2l6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZ3JhcGhpY3Muc2V0U3Ryb2tlQ29sb3IoXCJncmVlblwiKTtcclxuICAgICAgICB0aGlzLmJvZGllcy5mb3JFYWNoKGJvZHkgPT4ge1xyXG4gICAgICAgICAgICBncmFwaGljcy5kcmF3Q2lyY2xlKGJvZHkucG9zaXRpb24ueCwgYm9keS5wb3NpdGlvbi55LCBib2R5UmFkaXVzLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICBncmFwaGljcy5kcmF3TGluZShib2R5LnBvc2l0aW9uLngsIGJvZHkucG9zaXRpb24ueSwgYm9keS5wb3NpdGlvbi54ICsgYm9keS5iYXNpcy54eCAqIGJvZHlSYWRpdXMgKiAxLjEsIGJvZHkucG9zaXRpb24ueSArIGJvZHkuYmFzaXMueHkgKiBib2R5UmFkaXVzICogMS4xKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBFbmdpbmVQYXJ0UGF0aHMge1xyXG4gICAgbGluZVdpZHRoOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIGNyZWF0ZVBpc3Rvbih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IFBhdGgyRHtcclxuICAgICAgICBsZXQgcGF0aCA9IG5ldyBQYXRoMkQoKTtcclxuXHJcbiAgICAgICAgbGV0IHcgPSB3aWR0aCAvIDI7XHJcbiAgICAgICAgbGV0IGggPSBoZWlnaHQgLyAyO1xyXG5cclxuICAgICAgICBsZXQgaG9sZVJhZGl1cyA9IHRoaXMubGluZVdpZHRoICogMjsvL01hdGgubWluKHcsIGgpIC8gNDtcclxuICAgICAgICBsZXQgbG93ZXJJbmRlbnRSYWRpdXMgPSB0aGlzLmxpbmVXaWR0aCAqIDI7XHJcblxyXG4gICAgICAgIGxldCB0b3BTdGFydE9mZnNldCA9IC1oO1xyXG4gICAgICAgIGxldCB0b3BFbmRPZmZzZXQgPSAtaCArIGggLyA0O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBzZWFsU3RhcnRPZmZzZXQgPSB0b3BFbmRPZmZzZXQgKyB0aGlzLmxpbmVXaWR0aDtcclxuICAgICAgICBsZXQgc2VhbEVuZE9mZnNldCA9IHNlYWxTdGFydE9mZnNldCArIHRoaXMubGluZVdpZHRoO1xyXG5cclxuICAgICAgICBsZXQgYm90dG9tU3RhcnRPZmZzZXQgPSBzZWFsRW5kT2Zmc2V0ICsgdGhpcy5saW5lV2lkdGg7XHJcbiAgICAgICAgbGV0IGJvdHRvbUVuZE9mZnNldCA9IGg7XHJcblxyXG4gICAgICAgIGxldCBob2xlT2Zmc2V0ID0gKGJvdHRvbVN0YXJ0T2Zmc2V0ICsgYm90dG9tRW5kT2Zmc2V0KSAvIDI7XHJcblxyXG4gICAgICAgIGhvbGVPZmZzZXQgPSAwO1xyXG5cclxuICAgICAgICAvLyBUb3BcclxuICAgICAgICBwYXRoLm1vdmVUbygtdywgdG9wU3RhcnRPZmZzZXQpO1xyXG4gICAgICAgIHBhdGguYmV6aWVyQ3VydmVUbyhcclxuICAgICAgICAgICAgLXcgLyAyLCB0b3BTdGFydE9mZnNldCAqIDEuMixcclxuICAgICAgICAgICAgdyAvIDIsIHRvcFN0YXJ0T2Zmc2V0ICogMS4yLFxyXG4gICAgICAgICAgICB3LCB0b3BTdGFydE9mZnNldCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcGF0aC5saW5lVG8odywgdG9wRW5kT2Zmc2V0KTtcclxuICAgICAgICBwYXRoLmxpbmVUbygtdywgdG9wRW5kT2Zmc2V0KTtcclxuICAgICAgICBwYXRoLmxpbmVUbygtdywgdG9wU3RhcnRPZmZzZXQpO1xyXG4gICAgICAgIHBhdGguY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgICAgIC8vIFNlYWxcclxuICAgICAgICBwYXRoLm1vdmVUbygtdywgc2VhbFN0YXJ0T2Zmc2V0KTtcclxuICAgICAgICBwYXRoLmxpbmVUbyh3LCBzZWFsU3RhcnRPZmZzZXQpO1xyXG4gICAgICAgIHBhdGgubGluZVRvKHcsIHNlYWxFbmRPZmZzZXQpO1xyXG4gICAgICAgIHBhdGgubGluZVRvKC13LCBzZWFsRW5kT2Zmc2V0KTtcclxuICAgICAgICBwYXRoLmxpbmVUbygtdywgc2VhbFN0YXJ0T2Zmc2V0KTtcclxuICAgICAgICBwYXRoLmNsb3NlUGF0aCgpO1xyXG5cclxuICAgICAgICAvLyBCb3R0b21cclxuICAgICAgICBwYXRoLm1vdmVUbygtdywgYm90dG9tU3RhcnRPZmZzZXQpO1xyXG4gICAgICAgIHBhdGgubGluZVRvKHcsIGJvdHRvbVN0YXJ0T2Zmc2V0KTtcclxuICAgICAgICBcclxuICAgICAgICBwYXRoLmxpbmVUbyh3LCBib3R0b21FbmRPZmZzZXQpO1xyXG4gICAgICAgIHBhdGgubGluZVRvKHcsIGJvdHRvbUVuZE9mZnNldCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcGF0aC5saW5lVG8odyAtIGxvd2VySW5kZW50UmFkaXVzLCBib3R0b21FbmRPZmZzZXQpO1xyXG4gICAgICAgIHBhdGguYXJjKHcgLSBsb3dlckluZGVudFJhZGl1cyAqIDIsIGJvdHRvbUVuZE9mZnNldCwgbG93ZXJJbmRlbnRSYWRpdXMsIDAsIC1NYXRoLlBJICogMC41LCB0cnVlKTtcclxuICAgICAgICBwYXRoLmFyYygtdyArIGxvd2VySW5kZW50UmFkaXVzICogMiwgYm90dG9tRW5kT2Zmc2V0LCBsb3dlckluZGVudFJhZGl1cywgLU1hdGguUEkgKiAwLjUsIC1NYXRoLlBJLCB0cnVlKTtcclxuICAgICAgICBwYXRoLmxpbmVUbygtdyArIGxvd2VySW5kZW50UmFkaXVzLCBib3R0b21FbmRPZmZzZXQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHBhdGgubGluZVRvKC13LCBib3R0b21FbmRPZmZzZXQpO1xyXG4gICAgICAgIHBhdGgubGluZVRvKC13LCBib3R0b21TdGFydE9mZnNldCk7XHJcbiAgICAgICAgcGF0aC5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICAgICAgLy8gSG9sZVxyXG4gICAgICAgIHBhdGgubW92ZVRvKGhvbGVSYWRpdXMsIGhvbGVPZmZzZXQpO1xyXG4gICAgICAgIHBhdGguYXJjKDAsICBob2xlT2Zmc2V0LCBob2xlUmFkaXVzLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XHJcbiAgICAgICAgcGF0aC5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQXJtKGxlbmd0aDogbnVtYmVyKTogUGF0aDJEe1xyXG4gICAgICAgIGxldCBwYXRoID0gbmV3IFBhdGgyRCgpO1xyXG5cclxuICAgICAgICBsZXQgdG9wSG9sZVJhZGl1cyA9IHRoaXMubGluZVdpZHRoICogMjtcclxuICAgICAgICBsZXQgYm90dG9tSG9sZVJhZGl1cyA9IHRoaXMubGluZVdpZHRoICogMztcclxuXHJcbiAgICAgICAgbGV0IGJvdHRvbVJhZGl1cyA9IGJvdHRvbUhvbGVSYWRpdXMgKyB0aGlzLmxpbmVXaWR0aDtcclxuICAgICAgICBsZXQgdG9wUmFkaXVzID0gdG9wSG9sZVJhZGl1cyArIHRoaXMubGluZVdpZHRoO1xyXG5cclxuICAgICAgICBsZXQgYmV6aWVyT2Zmc2V0ID0gbGVuZ3RoIC8gNDtcclxuXHJcbiAgICAgICAgbGV0IGJvdHRvbU9mZnNldFggPSAwO1xyXG4gICAgICAgIGxldCB0b3BPZmZzZXRYID0gbGVuZ3RoO1xyXG5cclxuICAgICAgICBwYXRoLm1vdmVUbyhib3R0b21PZmZzZXRYLCAtYm90dG9tUmFkaXVzKTtcclxuICAgICAgICBwYXRoLmJlemllckN1cnZlVG8oXHJcbiAgICAgICAgICAgIGJvdHRvbU9mZnNldFggKyBiZXppZXJPZmZzZXQsIC10b3BSYWRpdXMsXHJcbiAgICAgICAgICAgIHRvcE9mZnNldFggLSBiZXppZXJPZmZzZXQsIC10b3BSYWRpdXMgLyAyLFxyXG4gICAgICAgICAgICB0b3BPZmZzZXRYLCAtdG9wUmFkaXVzKTtcclxuICAgICAgICBwYXRoLmFyYyh0b3BPZmZzZXRYLCAwLCB0b3BSYWRpdXMsIC1NYXRoLlBJIC8gMiwgTWF0aC5QSSAvIDIsIGZhbHNlKTtcclxuICAgICAgICBwYXRoLmJlemllckN1cnZlVG8oXHJcbiAgICAgICAgICAgIHRvcE9mZnNldFggLSBiZXppZXJPZmZzZXQsIHRvcFJhZGl1cyAvIDIsXHJcbiAgICAgICAgICAgIGJvdHRvbU9mZnNldFggKyBiZXppZXJPZmZzZXQsIHRvcFJhZGl1cyxcclxuICAgICAgICAgICAgYm90dG9tT2Zmc2V0WCwgYm90dG9tUmFkaXVzKTtcclxuICAgICAgICBwYXRoLmFyYyhib3R0b21PZmZzZXRYLCAwLCBib3R0b21SYWRpdXMsIE1hdGguUEkgLyAyLCAtTWF0aC5QSSAvIDIsIGZhbHNlKTtcclxuICAgICAgICBwYXRoLmNsb3NlUGF0aCgpO1xyXG5cclxuICAgICAgICAvLyBUb3AgaG9sZVxyXG4gICAgICAgIHBhdGgubW92ZVRvKGJvdHRvbU9mZnNldFggKyBib3R0b21Ib2xlUmFkaXVzLCAwKTtcclxuICAgICAgICBwYXRoLmFyYyhib3R0b21PZmZzZXRYLCAwLCBib3R0b21Ib2xlUmFkaXVzLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XHJcbiAgICAgICAgcGF0aC5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICAgICAgLy8gQm90dG9tIGhvbGVcclxuICAgICAgICBwYXRoLm1vdmVUbyh0b3BPZmZzZXRYICsgdG9wSG9sZVJhZGl1cywgMCk7XHJcbiAgICAgICAgcGF0aC5hcmModG9wT2Zmc2V0WCwgMCwgdG9wSG9sZVJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xyXG4gICAgICAgIHBhdGguY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBwYXRoO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlQ291bnRlcldlaWdodChyYWRpdXM6IG51bWJlcik6IFBhdGgyRHtcclxuICAgICAgICBsZXQgcGF0aCA9IG5ldyBQYXRoMkQoKTtcclxuXHJcbiAgICAgICAgbGV0IGlubmVyUmFkaXVzID0gcmFkaXVzICogMC4zO1xyXG5cclxuICAgICAgICBsZXQgY2VudGVyT2Zmc2V0ID0gcmFkaXVzICogMC4xO1xyXG5cclxuICAgICAgICBsZXQgYXR0YWNobWVudFJhZGl1cyA9IHRoaXMubGluZVdpZHRoICogMjtcclxuXHJcbiAgICAgICAgLy8gTWFpbiBzaGFwZVxyXG4gICAgICAgIC8vIHBhdGgubW92ZVRvKHJhZGl1cywgLWlubmVyUmFkaXVzKTtcclxuICAgICAgICAvLyBwYXRoLmFyYyhyYWRpdXMsIDAsIGlubmVyUmFkaXVzLCAtTWF0aC5QSSAqIDAuNSwgTWF0aC5QSSAqIDAuNSk7XHJcbiAgICAgICAgLy8gcGF0aC5hcmMocmFkaXVzLCByYWRpdXMsIGlubmVyUmFkaXVzLCAtTWF0aC5QSSAqIDAuNSwgLU1hdGguUEksIHRydWUpO1xyXG4gICAgICAgIC8vIHBhdGguYXJjKGlubmVyUmFkaXVzLCAwLCByYWRpdXMsIE1hdGguUEkgKiAwLjUsIE1hdGguUEkgKiAxLjUpO1xyXG4gICAgICAgIC8vIHBhdGguYXJjKHJhZGl1cywgLXJhZGl1cywgaW5uZXJSYWRpdXMsIC1NYXRoLlBJLCAtTWF0aC5QSSAqIDEuNSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIHBhdGgubW92ZVRvKHJhZGl1cywgLWlubmVyUmFkaXVzKTtcclxuICAgICAgICBwYXRoLmFyYyhyYWRpdXMsIDAsIGlubmVyUmFkaXVzLCAtTWF0aC5QSSAqIDAuNSwgTWF0aC5QSSAqIDAuNSk7XHJcbiAgICAgICAgcGF0aC5saW5lVG8oY2VudGVyT2Zmc2V0LCBpbm5lclJhZGl1cyk7XHJcbiAgICAgICAgcGF0aC5hcmMoY2VudGVyT2Zmc2V0LCAwLCByYWRpdXMsIE1hdGguUEkgKiAwLjYsIE1hdGguUEkgKiAxLjQsIGZhbHNlKTtcclxuICAgICAgICBwYXRoLmxpbmVUbyhjZW50ZXJPZmZzZXQsIC1pbm5lclJhZGl1cyk7XHJcbiAgICAgICAgcGF0aC5saW5lVG8ocmFkaXVzLCAtaW5uZXJSYWRpdXMpO1xyXG4gICAgICAgIHBhdGguY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgICAgIC8vIExlZnQgaG9sZVxyXG4gICAgICAgIHBhdGgubW92ZVRvKGF0dGFjaG1lbnRSYWRpdXMsIDApO1xyXG4gICAgICAgIHBhdGguYXJjKDAsIDAsIGF0dGFjaG1lbnRSYWRpdXMsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcclxuICAgICAgICBwYXRoLmNsb3NlUGF0aCgpO1xyXG5cclxuICAgICAgICAvLyBSaWdodCBob2xlXHJcbiAgICAgICAgcGF0aC5tb3ZlVG8ocmFkaXVzICsgYXR0YWNobWVudFJhZGl1cywgMCk7XHJcbiAgICAgICAgcGF0aC5hcmMocmFkaXVzLCAwLCBhdHRhY2htZW50UmFkaXVzLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XHJcbiAgICAgICAgcGF0aC5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQ3lsaW5kZXJXYWxscyhpbm5lcldpZHRoOiBudW1iZXIsIHRvcDogbnVtYmVyLCBib3R0b206IG51bWJlciwgdmFsdmVXaWR0aDogbnVtYmVyLCB2YWx2ZU9mZnNldEZyb21DZW50ZXI6IG51bWJlcik6IFBhdGgyRHtcclxuICAgICAgICBsZXQgcGF0aCA9IG5ldyBQYXRoMkQoKTtcclxuXHJcbiAgICAgICAgbGV0IHRoaWNrbmVzcyA9IHRoaXMubGluZVdpZHRoICogMjtcclxuICAgICAgICBsZXQgbWlkdGhpY2tuZXNzID0gdGhpcy5saW5lV2lkdGggKiAyO1xyXG5cclxuICAgICAgICBsZXQgbWlkU2l6ZSA9IHZhbHZlT2Zmc2V0RnJvbUNlbnRlciAtIHRoaXMubGluZVdpZHRoO1xyXG4gICAgICAgIGxldCBib3VuZFNpemUgPSBpbm5lcldpZHRoIC8gMiAtIHZhbHZlV2lkdGggLSB2YWx2ZU9mZnNldEZyb21DZW50ZXI7XHJcblxyXG4gICAgICAgIGxldCB3ID0gaW5uZXJXaWR0aCAvIDIgKyB0aGlzLmxpbmVXaWR0aDtcclxuICAgICAgICBsZXQgd091dGVyID0gdyArIHRoaWNrbmVzcztcclxuXHJcbiAgICAgICAgLy8gTGVmdCBzaWRlXHJcbiAgICAgICAgcGF0aC5tb3ZlVG8oLXcsIHRvcCk7XHJcbiAgICAgICAgcGF0aC5saW5lVG8oLXcsIGJvdHRvbSk7XHJcbiAgICAgICAgcGF0aC5saW5lVG8oLXdPdXRlciwgYm90dG9tKTtcclxuICAgICAgICBwYXRoLmxpbmVUbygtd091dGVyLCB0b3ApO1xyXG5cclxuICAgICAgICBwYXRoLm1vdmVUbygtdywgdG9wKTtcclxuICAgICAgICBwYXRoLmFyYygtdywgdG9wLCB0aGlja25lc3MsIE1hdGguUEksIE1hdGguUEkgKiAxLjUpO1xyXG5cclxuICAgICAgICBwYXRoLmxpbmVUbygtdyArIGJvdW5kU2l6ZSwgdG9wIC0gdGhpY2tuZXNzKTtcclxuICAgICAgICBwYXRoLmxpbmVUbygtdyArIGJvdW5kU2l6ZSwgdG9wKTtcclxuICAgICAgICBwYXRoLm1vdmVUbygtdywgdG9wKTtcclxuICAgICAgICBwYXRoLmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFJpZ2h0IHNpZGVcclxuICAgICAgICBwYXRoLm1vdmVUbyh3LCB0b3ApO1xyXG4gICAgICAgIHBhdGgubGluZVRvKHcsIGJvdHRvbSk7XHJcbiAgICAgICAgcGF0aC5saW5lVG8od091dGVyLCBib3R0b20pO1xyXG4gICAgICAgIHBhdGgubGluZVRvKHdPdXRlciwgdG9wKTtcclxuXHJcbiAgICAgICAgcGF0aC5tb3ZlVG8odywgdG9wKTtcclxuICAgICAgICBwYXRoLmFyYyh3LCB0b3AsIHRoaWNrbmVzcywgMCwgLU1hdGguUEkgKiAwLjUsIHRydWUpO1xyXG5cclxuICAgICAgICBwYXRoLmxpbmVUbyh3IC0gYm91bmRTaXplLCB0b3AgLSB0aGlja25lc3MpO1xyXG4gICAgICAgIHBhdGgubGluZVRvKHcgLSBib3VuZFNpemUsIHRvcCk7XHJcbiAgICAgICAgcGF0aC5tb3ZlVG8odywgdG9wKTtcclxuICAgICAgICBwYXRoLmNsb3NlUGF0aCgpO1xyXG5cclxuICAgICAgICAvLyBDZW50ZXIgYml0XHJcbiAgICAgICAgcGF0aC5tb3ZlVG8oLW1pZFNpemUsIHRvcCk7XHJcbiAgICAgICAgcGF0aC5saW5lVG8obWlkU2l6ZSwgdG9wKTtcclxuICAgICAgICBwYXRoLmxpbmVUbyhtaWRTaXplLCB0b3AgLSBtaWR0aGlja25lc3MpO1xyXG4gICAgICAgIHBhdGgubGluZVRvKC1taWRTaXplLCB0b3AgLSBtaWR0aGlja25lc3MpO1xyXG4gICAgICAgIHBhdGgubGluZVRvKC1taWRTaXplLCB0b3ApO1xyXG4gICAgICAgIHBhdGguY2xvc2VQYXRoKCk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gcGF0aDtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVWYWx2ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcil7XHJcbiAgICAgICAgbGV0IHBhdGggPSBuZXcgUGF0aDJEKCk7XHJcblxyXG4gICAgICAgIGxldCB3ID0gd2lkdGggLyAyO1xyXG5cclxuICAgICAgICBsZXQgdGhpY2tuZXNzID0gdGhpcy5saW5lV2lkdGg7XHJcbiAgICAgICAgbGV0IGZ1bm5lbEhlaWdodCA9IHcgLyAyICsgdGhpY2tuZXNzO1xyXG4gICAgICAgIGxldCBmdW5uZWxXaWR0aCA9IHRoaXMubGluZVdpZHRoIC8gMjtcclxuXHJcbiAgICAgICAgcGF0aC5tb3ZlVG8odywgMCk7XHJcbiAgICAgICAgcGF0aC5saW5lVG8odywgLXRoaWNrbmVzcyk7XHJcbiAgICAgICAgcGF0aC5saW5lVG8oZnVubmVsV2lkdGgsIC1mdW5uZWxIZWlnaHQpO1xyXG4gICAgICAgIHBhdGgubGluZVRvKGZ1bm5lbFdpZHRoLCAtaGVpZ2h0KTtcclxuICAgICAgICBwYXRoLmxpbmVUbygtZnVubmVsV2lkdGgsIC1oZWlnaHQpO1xyXG4gICAgICAgIHBhdGgubGluZVRvKC1mdW5uZWxXaWR0aCwgLWZ1bm5lbEhlaWdodCk7XHJcbiAgICAgICAgcGF0aC5saW5lVG8oLXcsIC10aGlja25lc3MpO1xyXG4gICAgICAgIHBhdGgubGluZVRvKC13LCAwKTtcclxuICAgICAgICBwYXRoLmxpbmVUbyh3LCAwKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQ2FtKHJhZGl1czogbnVtYmVyLCBtYXhSYWRpdXM6IG51bWJlcil7XHJcbiAgICAgICAgbGV0IHBhdGggPSBuZXcgUGF0aDJEKCk7XHJcblxyXG4gICAgICAgIGxldCBob2xlUmFkaXVzID0gdGhpcy5saW5lV2lkdGggKiAxO1xyXG5cclxuICAgICAgICAvLyBSZWd1bGFyIHNoYXBlXHJcbiAgICAgICAgcGF0aC5tb3ZlVG8oMCwgLXJhZGl1cyk7XHJcbiAgICAgICAgcGF0aC5iZXppZXJDdXJ2ZVRvKFxyXG4gICAgICAgICAgICBtYXhSYWRpdXMgKiAwLjI1LCAtcmFkaXVzLFxyXG4gICAgICAgICAgICBtYXhSYWRpdXMsIC1yYWRpdXMgKiAwLjIsXHJcbiAgICAgICAgICAgIG1heFJhZGl1cywgMCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIHBhdGguYmV6aWVyQ3VydmVUbyhcclxuICAgICAgICAgICAgbWF4UmFkaXVzLCByYWRpdXMgKiAwLjIsXHJcbiAgICAgICAgICAgIG1heFJhZGl1cyAqIDAuMjUsIHJhZGl1cyxcclxuICAgICAgICAgICAgMCwgcmFkaXVzKTtcclxuXHJcbiAgICAgICAgcGF0aC5hcmMoMCwgMCwgcmFkaXVzLCBNYXRoLlBJICogMC41LCBNYXRoLlBJICogMS41KTtcclxuICAgICAgICBwYXRoLmNsb3NlUGF0aCgpO1xyXG5cclxuICAgICAgICAvLyBIb2xlXHJcbiAgICAgICAgcGF0aC5tb3ZlVG8oaG9sZVJhZGl1cywgMCk7XHJcbiAgICAgICAgcGF0aC5hcmMoMCwgIDAsIGhvbGVSYWRpdXMsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcclxuICAgICAgICBwYXRoLmNsb3NlUGF0aCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gcGF0aDtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBSaWdpZEJvZHlQYXRocyB7XHJcbiAgICBsaW5lV2lkdGg6IG51bWJlciA9IDE7XHJcblxyXG4gICAgY3JlYXRlQ29ubmVjdGlvbihsZW5ndGg6IG51bWJlcik6IFBhdGgyRHtcclxuICAgICAgICBsZXQgcGF0aCA9IG5ldyBQYXRoMkQoKTtcclxuXHJcbiAgICAgICAgbGV0IHcgPSB0aGlzLmxpbmVXaWR0aCAvIDI7XHJcblxyXG4gICAgICAgIHBhdGgubW92ZVRvKDAsIC13KTtcclxuICAgICAgICBwYXRoLmxpbmVUbyhsZW5ndGgsIC13KTtcclxuICAgICAgICBwYXRoLmxpbmVUbyhsZW5ndGgsIHcpO1xyXG4gICAgICAgIHBhdGgubGluZVRvKDAsIHcpO1xyXG4gICAgICAgIHBhdGgubGluZVRvKDAsIC13KTtcclxuICAgICAgICBwYXRoLmNsb3NlUGF0aCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gcGF0aDtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVCb2R5KHJhZGl1czogbnVtYmVyKXtcclxuICAgICAgICBsZXQgcGF0aCA9IG5ldyBQYXRoMkQoKTtcclxuXHJcbiAgICAgICAgbGV0IGhvbGVSYWRpdXMgPSB0aGlzLmxpbmVXaWR0aDtcclxuXHJcbiAgICAgICAgLy8gUmVndWxhciBzaGFwZVxyXG4gICAgICAgIHBhdGgubW92ZVRvKDAsIHJhZGl1cyk7XHJcbiAgICAgICAgcGF0aC5hcmMoMCwgMCwgcmFkaXVzLCAwLCBNYXRoLlBJICogMik7XHJcbiAgICAgICAgcGF0aC5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICAgICAgLy8gSG9sZVxyXG4gICAgICAgIHBhdGgubW92ZVRvKHJhZGl1cyAvIDIgKyBob2xlUmFkaXVzLCAwKTtcclxuICAgICAgICBwYXRoLmFyYyhyYWRpdXMgLyAyLCAgMCwgaG9sZVJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xyXG4gICAgICAgIHBhdGguY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBwYXRoO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU29sdmVyU2NlbmUgfSBmcm9tIFwiYXBwL1NvbHZlclNjZW5lXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUVuZ2luZVRlc3RTY2VuZSBhcyBjcmVhdGVFbmdpbmVUZXN0IH0gZnJvbSBcImFwcC9FbmdpbmVUZXN0U2NlbmVcIjtcclxuaW1wb3J0IHsgQ29uc3RyYWludEF0dGFjaG1lbnQyRCB9IGZyb20gXCJsaWIveHBiZC9Db25zdHJhaW50QXR0YWNobWVudDJEXCI7XHJcbmltcG9ydCB7IFBpbkNvbnN0cmFpbnQyRCB9IGZyb20gXCJsaWIveHBiZC9QaW5Db25zdHJhaW50MkRcIjtcclxuaW1wb3J0IHsgUmlnaWRib2R5MkQgfSBmcm9tIFwibGliL3hwYmQvUmlnaWRib2R5MkRcIjtcclxuaW1wb3J0IHsgR3JhcGhpY3MyRCB9IGZyb20gXCJsaWIvZ3JhcGhpY3MvR3JhcGhpY3MyRFwiO1xyXG5pbXBvcnQgeyBWaWV3cG9ydEZpdCwgVmlld3BvcnRTZXR0aW5ncyB9IGZyb20gXCJsaWIvc2V0dGluZ3MvVmlld3BvcnRTZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcImxpYi9tYXRoL1ZlY3RvcjJcIjtcclxuaW1wb3J0IHsgY3JlYXRlUGVuZHVsdW1UZXN0IH0gZnJvbSBcImFwcC9QZW5kdWx1bVRlc3RTY2VuZVwiO1xyXG5pbXBvcnQgeyBpbml0TWVudSB9IGZyb20gXCJhcHAvTWVudVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVDbG90aCB9IGZyb20gXCJhcHAvQ2xvdGhUZXN0U2NlbmVcIjtcclxuaW1wb3J0IHsgY3JlYXRlQnJpZGdlU2NlbmUgfSBmcm9tIFwiYXBwL0JyaWRnZVRlc3RTY2VuZVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVDb21wbGljYXRlZFNjZW5lIH0gZnJvbSBcImFwcC9Db21wbGljYXRlZFNjZW5lVGVzdFwiO1xyXG5cclxuXHJcbmxldCBncmFwaGljczogR3JhcGhpY3MyRDtcclxubGV0IHNjZW5lOiBTb2x2ZXJTY2VuZTtcclxuXHJcbmxldCBzY2VuZU5hbWU6IHN0cmluZyA9IFwiXCI7XHJcbmxldCBzdWJzdGVwczogbnVtYmVyID0gMTtcclxubGV0IGdyYXZpdHlSYXRlOiBudW1iZXIgPSAxO1xyXG5sZXQgdGltZVJhdGU6IG51bWJlciA9IDE7XHJcbmxldCBkcmF3T3ZlcmxheTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuZnVuY3Rpb24gc2V0dXBNb3VzZUNvbnRyb2xzKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpIHtcclxuICAgbGV0IHNlbGVjdGVkOiBSaWdpZGJvZHkyRCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgIGxldCB0b3VjaElkID0gLTE7XHJcblxyXG4gICBsZXQgb2Zmc2V0WCA9IDA7XHJcbiAgIGxldCBvZmZzZXRZID0gMDtcclxuXHJcbiAgIC8vIEhhY2t5IG51bGxhYmxlIHN0dWZmLlxyXG4gICBsZXQgY29uc3RyYWludCA9IG5ldyBQaW5Db25zdHJhaW50MkQobmV3IENvbnN0cmFpbnRBdHRhY2htZW50MkQoc2VsZWN0ZWQhKSwgbmV3IFZlY3RvcjIoKSk7XHJcbiAgIGNvbnN0cmFpbnQuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICBjb25zdHJhaW50LmNvbXBsaWFuY2UgPSAwLjAwMDAwMTtcclxuICAgY29uc3RyYWludC5kYW1wZXJDb21wbGlhbmNlID0gMC4wMDE7XHJcblxyXG4gICBsZXQgc2VsZWN0ID0gKGJvZHk/OiBSaWdpZGJvZHkyRCkgPT4ge1xyXG4gICAgICBzZWxlY3RlZCA9IGJvZHk7XHJcblxyXG4gICAgICBjb25zdHJhaW50LmF0dGFjaG1lbnQgPSBuZXcgQ29uc3RyYWludEF0dGFjaG1lbnQyRChzZWxlY3RlZCEsIGJvZHk/LmludmVyc2VCYXNpcz8udHJhbnNmb3JtKG5ldyBWZWN0b3IyKG9mZnNldFgsIG9mZnNldFkpKSk7XHJcbiAgICAgIGNvbnN0cmFpbnQuZW5hYmxlZCA9IGJvZHkgIT09IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgIGlmKHNjZW5lLmNvbnN0cmFpbnRzLmluZGV4T2YoY29uc3RyYWludCkgPCAwKXtcclxuICAgICAgICAgc2NlbmUuY29uc3RyYWludHMgPSBbY29uc3RyYWludCwgLi4uc2NlbmUuY29uc3RyYWludHNdO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8vIFRPRE8gdG91Y2ggY29udHJvbHMgdG9vXHJcbiAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldikgPT4ge1xyXG4gICAgICBsZXQgcCA9IGdyYXBoaWNzLmNhbnZhc1RvVmlld3BvcnQoZXYub2Zmc2V0WCwgZXYub2Zmc2V0WSk7XHJcblxyXG4gICAgICBsZXQgZGlzdGFuY2UgPSAwLjQ7XHJcblxyXG4gICAgICBzY2VuZS5ib2RpZXMuZm9yRWFjaChib2R5ID0+IHtcclxuICAgICAgICAgbGV0IGQgPSBWZWN0b3IyLmZEaXN0YW5jZShwLngsIHAueSwgYm9keS5wb3NpdGlvbi54LCBib2R5LnBvc2l0aW9uLnkpO1xyXG5cclxuICAgICAgICAgaWYgKGQgPCBkaXN0YW5jZSkge1xyXG4gICAgICAgICAgICBkaXN0YW5jZSA9IGQ7XHJcbiAgICAgICAgICAgIG9mZnNldFggPSBwLnggLSBib2R5LnBvc2l0aW9uLng7XHJcbiAgICAgICAgICAgIG9mZnNldFkgPSBwLnkgLSBib2R5LnBvc2l0aW9uLnk7XHJcbiAgICAgICAgICAgIHNlbGVjdChib2R5KTtcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgfSk7XHJcbiAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCAoZXYpID0+IHtcclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGV2LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgbGV0IHRvdWNoID0gZXYuY2hhbmdlZFRvdWNoZXMuaXRlbShpKTtcclxuICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgXHJcbiAgICAgICAgIGlmICh0b3VjaCA9PSBudWxsKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgIGxldCBwID0gZ3JhcGhpY3MuY2FudmFzVG9WaWV3cG9ydCh0b3VjaD8uY2xpZW50WCwgdG91Y2g/LmNsaWVudFkpO1xyXG4gICBcclxuICAgICAgICAgbGV0IGRpc3RhbmNlID0gMC40O1xyXG4gICBcclxuICAgICAgICAgc2NlbmUuYm9kaWVzLmZvckVhY2goYm9keSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkID0gVmVjdG9yMi5mRGlzdGFuY2UocC54LCBwLnksIGJvZHkucG9zaXRpb24ueCwgYm9keS5wb3NpdGlvbi55KTtcclxuICAgXHJcbiAgICAgICAgICAgIGlmIChkIDwgZGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBkO1xyXG4gICAgICAgICAgICAgICBvZmZzZXRYID0gcC54IC0gYm9keS5wb3NpdGlvbi54O1xyXG4gICAgICAgICAgICAgICBvZmZzZXRZID0gcC55IC0gYm9keS5wb3NpdGlvbi55O1xyXG4gICAgICAgICAgICAgICBzZWxlY3QoYm9keSk7XHJcblxyXG4gICAgICAgICAgICAgICB0b3VjaElkID0gdG91Y2ghLmlkZW50aWZpZXI7XHJcbiAgICAgICAgICAgICAgIGNvbnN0cmFpbnQub3JpZ2luLmFwcGx5KHAueCwgcC55KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICB9KTtcclxuXHJcblxyXG4gICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZXYpID0+IHtcclxuICAgICAgbGV0IHAgPSBncmFwaGljcy5jYW52YXNUb1ZpZXdwb3J0KGV2Lm9mZnNldFgsIGV2Lm9mZnNldFkpO1xyXG5cclxuICAgICAgY29uc3RyYWludC5vcmlnaW4uYXBwbHkocC54LCBwLnkpO1xyXG4gICB9KTtcclxuXHJcbiAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGV2ID0+IHtcclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGV2LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgbGV0IHRvdWNoID0gZXYuY2hhbmdlZFRvdWNoZXMuaXRlbShpKTtcclxuXHJcbiAgICAgICAgIGlmKHRvdWNoPy5pZGVudGlmaWVyID09IHRvdWNoSWQpe1xyXG4gICAgICAgICAgICBsZXQgcCA9IGdyYXBoaWNzLmNhbnZhc1RvVmlld3BvcnQodG91Y2guY2xpZW50WCwgdG91Y2guY2xpZW50WSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdHJhaW50Lm9yaWdpbi5hcHBseShwLngsIHAueSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9KTtcclxuXHJcbiAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgZXYgPT4ge1xyXG4gICAgICBzZWxlY3QodW5kZWZpbmVkKTtcclxuICAgICAgdG91Y2hJZCA9IC0xO1xyXG4gICB9KTtcclxuICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGNhbmNlbFwiLCBldiA9PiB7XHJcbiAgICAgIHNlbGVjdCh1bmRlZmluZWQpO1xyXG4gICAgICB0b3VjaElkID0gLTE7XHJcbiAgIH0pO1xyXG5cclxuICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGV2ID0+IHtcclxuICAgICAgc2VsZWN0KHVuZGVmaW5lZCk7XHJcbiAgIH0pO1xyXG4gICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgZXYgPT4ge1xyXG4gICAgICBzZWxlY3QodW5kZWZpbmVkKTtcclxuICAgfSk7XHJcblxyXG59XHJcbmZ1bmN0aW9uIHNldHVwUmVzaXppbmcoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCl7XHJcbiAgIGxldCBzeW5jID0gKCkgPT4ge1xyXG4gICAgICBsZXQgdiA9IGdyYXBoaWNzLnZpZXdwb3J0U2V0dGluZ3M7XHJcbiAgICAgIFxyXG4gICAgICBncmFwaGljcyA9IG5ldyBHcmFwaGljczJEKGNhbnZhcyk7XHJcbiAgICAgIGdyYXBoaWNzLnNldFZpZXdwb3J0U2V0dGluZ3Modik7XHJcbiAgIH07XHJcblxyXG4gICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiBzeW5jKCkpO1xyXG5cclxuICAgc3luYygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRTb2x2ZXJSYXRlKHM6IG51bWJlcikge1xyXG4gICBzdWJzdGVwcyA9IHM7XHJcbiAgIHNjZW5lLnN1YnN0ZXBzID0gcztcclxuXHJcbiAgIHN5bmMoKTtcclxufVxyXG5mdW5jdGlvbiBzZXRHcmF2aXR5KHM6IG51bWJlcil7XHJcbiAgIGdyYXZpdHlSYXRlID0gcztcclxuICAgc3luYygpO1xyXG59XHJcbmZ1bmN0aW9uIHNldFRpbWVSYXRlKHM6IG51bWJlcil7XHJcbiAgIHRpbWVSYXRlID0gcztcclxuICAgc3luYygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXR1cEJ1dHRvbnMoKXtcclxuICAgY29uc3QgY2xpY2tPbiA9IChpZDogc3RyaW5nLCBhY3Rpb246ICgpID0+IHZvaWQpID0+IHtcclxuICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcblxyXG4gICAgICBlbGVtZW50Py5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWN0aW9uKTtcclxuICAgfTtcclxuXHJcbiAgIGNsaWNrT24oXCJzY2VuZS1wZW5kdWx1bS0zXCIsIGdvdG8zUGVuZHVsdW0pO1xyXG4gICBjbGlja09uKFwic2NlbmUtcGVuZHVsdW0tNFwiLCBnb3RvNFBlbmR1bHVtKTtcclxuICAgY2xpY2tPbihcInNjZW5lLXBlbmR1bHVtLTEwXCIsIGdvdG8xMFBlbmR1bHVtKTtcclxuICAgY2xpY2tPbihcInNjZW5lLXJvcGUtc29mdFwiLCBnb3RvU29mdFJvcGUpO1xyXG4gICBjbGlja09uKFwic2NlbmUtYnJpZGdlXCIsIGdvdG9CcmlkZ2UpO1xyXG4gICBjbGlja09uKFwic2NlbmUtY2xvdGhcIiwgZ290b0Nsb3RoKTtcclxuICAgY2xpY2tPbihcInNjZW5lLWVuZ2luZS00XCIsIGdvdG9FbmdpbmVTY2VuZTRDeWxpbmRlcik7XHJcbiAgIGNsaWNrT24oXCJzY2VuZS1lbmdpbmUtMTBcIiwgZ290b0VuZ2luZVNjZW5lMTBDeWxpbmRlcik7XHJcbiAgIGNsaWNrT24oXCJzY2VuZS1lbmdpbmUtMTAwXCIsIGdvdG9FbmdpbmVTY2VuZTEwMEN5bGluZGVyKTtcclxuICAgY2xpY2tPbihcInNjZW5lLWNvbXBsaWNhdGVkXCIsIGdvdG9Db21wbGljYXRlZCk7XHJcblxyXG4gICBjbGlja09uKFwic2V0dGluZ3MtdG9nZ2xlLW92ZXJsYXlcIiwgdG9nZ2xlT3ZlcmxheSk7XHJcblxyXG4gICBjbGlja09uKFwic2V0dGluZ3Mtc3Vic3RlcC0xXCIsICgpID0+IHNldFNvbHZlclJhdGUoMSkpO1xyXG4gICBjbGlja09uKFwic2V0dGluZ3Mtc3Vic3RlcC0xMFwiLCAoKSA9PiBzZXRTb2x2ZXJSYXRlKDEwKSk7XHJcbiAgIGNsaWNrT24oXCJzZXR0aW5ncy1zdWJzdGVwLTEwMFwiLCAoKSA9PiBzZXRTb2x2ZXJSYXRlKDEwMCkpO1xyXG4gICBjbGlja09uKFwic2V0dGluZ3Mtc3Vic3RlcC0xMDAwXCIsICgpID0+IHNldFNvbHZlclJhdGUoMTAwMCkpO1xyXG4gICBjbGlja09uKFwic2V0dGluZ3Mtc3Vic3RlcC0xMDAwMFwiLCAoKSA9PiBzZXRTb2x2ZXJSYXRlKDEwMDAwKSk7XHJcblxyXG4gICBjbGlja09uKFwic2V0dGluZ3MtZ3Jhdml0eS0xXCIsICgpID0+IHNldEdyYXZpdHkoMSkpO1xyXG4gICBjbGlja09uKFwic2V0dGluZ3MtZ3Jhdml0eS0yXCIsICgpID0+IHNldEdyYXZpdHkoMikpO1xyXG4gICBjbGlja09uKFwic2V0dGluZ3MtZ3Jhdml0eS00XCIsICgpID0+IHNldEdyYXZpdHkoNCkpO1xyXG4gICBjbGlja09uKFwic2V0dGluZ3MtZ3Jhdml0eS04XCIsICgpID0+IHNldEdyYXZpdHkoOCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVPdmVybGF5KCl7XHJcbiAgIGRyYXdPdmVybGF5ID0gIWRyYXdPdmVybGF5O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnb3RvRW5naW5lU2NlbmU0Q3lsaW5kZXIoKSB7IFxyXG4gICBzY2VuZU5hbWUgPSBcIkVuZ2luZSwgd2l0aCA0IGN5bGluZGVyc1wiO1xyXG4gICBzY2VuZSA9Y3JlYXRlRW5naW5lVGVzdCg0KTtcclxuICAgZ3JhcGhpY3Muc2V0Vmlld3BvcnRTZXR0aW5ncyhuZXcgVmlld3BvcnRTZXR0aW5ncygtMywgLTMsIDMsIDMsIFZpZXdwb3J0Rml0LkNvbnRhaW4pKTtcclxuICAgc3luYygpO1xyXG59XHJcbmZ1bmN0aW9uIGdvdG9FbmdpbmVTY2VuZTEwQ3lsaW5kZXIoKSB7IFxyXG4gICBzY2VuZU5hbWUgPSBcIkVuZ2luZSwgd2l0aCAxMCBjeWxpbmRlcnNcIjtcclxuICAgc2NlbmUgPSBjcmVhdGVFbmdpbmVUZXN0KDEwKTtcclxuICAgZ3JhcGhpY3Muc2V0Vmlld3BvcnRTZXR0aW5ncyhuZXcgVmlld3BvcnRTZXR0aW5ncygtOCwgLTMsIDgsIDMsIFZpZXdwb3J0Rml0LkNvbnRhaW4pKTtcclxuICAgc3luYygpO1xyXG59XHJcbmZ1bmN0aW9uIGdvdG9FbmdpbmVTY2VuZTEwMEN5bGluZGVyKCkgeyBcclxuICAgc2NlbmVOYW1lID0gXCJFbmdpbmUsIHdpdGggMTAwIGN5bGluZGVyc1wiO1xyXG4gICBzY2VuZSA9IGNyZWF0ZUVuZ2luZVRlc3QoMTAwKTtcclxuICAgZ3JhcGhpY3Muc2V0Vmlld3BvcnRTZXR0aW5ncyhuZXcgVmlld3BvcnRTZXR0aW5ncygtODAsIC0zLCA4MCwgMywgVmlld3BvcnRGaXQuQ29udGFpbikpO1xyXG5cclxuICAgc3luYygpO1xyXG59XHJcbmZ1bmN0aW9uIGdvdG8zUGVuZHVsdW0oKSB7IFxyXG4gICBzY2VuZU5hbWUgPSBcIlBlbmR1bHVtLCB3aXRoIDIgbG9vc2UgYm9kaWVzXCI7XHJcbiAgIHNjZW5lID0gY3JlYXRlUGVuZHVsdW1UZXN0KDMsIDIpO1xyXG4gICBncmFwaGljcy5zZXRWaWV3cG9ydFNldHRpbmdzKG5ldyBWaWV3cG9ydFNldHRpbmdzKC0yLCAtNSwgMiwgNywgVmlld3BvcnRGaXQuQ29udGFpbikpO1xyXG5cclxuICAgc3luYygpO1xyXG59XHJcbmZ1bmN0aW9uIGdvdG9EYW1wZXJUZXN0KCkgeyBcclxuICAgc2NlbmVOYW1lID0gXCJQZW5kdWx1bSwgd2l0aCAyIGxvb3NlIGJvZGllc1wiO1xyXG4gICBzY2VuZSA9IGNyZWF0ZVBlbmR1bHVtVGVzdCgyLCAyLCAwLjAwMSwgMC4xKTtcclxuICAgZ3JhcGhpY3Muc2V0Vmlld3BvcnRTZXR0aW5ncyhuZXcgVmlld3BvcnRTZXR0aW5ncygtMiwgLTUsIDIsIDcsIFZpZXdwb3J0Rml0LkNvbnRhaW4pKTtcclxuXHJcbiAgIHN5bmMoKTtcclxufVxyXG5mdW5jdGlvbiBnb3RvNFBlbmR1bHVtKCkgeyBcclxuICAgc2NlbmVOYW1lID0gXCJQZW5kdWx1bSwgd2l0aCAzIGxvb3NlIGJvZGllc1wiO1xyXG4gICBzY2VuZSA9IGNyZWF0ZVBlbmR1bHVtVGVzdCg0LCAxLjUsIDAsIDAuMDEpO1xyXG4gICBncmFwaGljcy5zZXRWaWV3cG9ydFNldHRpbmdzKG5ldyBWaWV3cG9ydFNldHRpbmdzKC0yLCAtNSwgMiwgNywgVmlld3BvcnRGaXQuQ29udGFpbikpO1xyXG5cclxuICAgc3luYygpO1xyXG59XHJcbmZ1bmN0aW9uIGdvdG8xMFBlbmR1bHVtKCkgeyBcclxuICAgc2NlbmVOYW1lID0gXCJQZW5kdWx1bSwgd2l0aCA5IGxvb3NlIGJvZGllc1wiO1xyXG4gICBzY2VuZSA9IGNyZWF0ZVBlbmR1bHVtVGVzdCgxMCwgMC41KTtcclxuICAgZ3JhcGhpY3Muc2V0Vmlld3BvcnRTZXR0aW5ncyhuZXcgVmlld3BvcnRTZXR0aW5ncygtMiwgLTMsIDIsIDcsIFZpZXdwb3J0Rml0LkNvbnRhaW4pKTtcclxuXHJcbiAgIHN5bmMoKTtcclxufVxyXG5mdW5jdGlvbiBnb3RvU29mdFJvcGUoKSB7IFxyXG4gICBzY2VuZU5hbWUgPSBcIlNvZnQgcm9wZSAoMjAgbm9kZXMpLCAxMDBrTi91bml0IG9mIHN0cmV0Y2hpbmcsIHdpdGggZGFtcGluZ1wiO1xyXG4gICBzY2VuZSA9IGNyZWF0ZVBlbmR1bHVtVGVzdCgyMCwgMC4yNSwgMC4wMDAwMSwgMC4wMDEpO1xyXG4gICBncmFwaGljcy5zZXRWaWV3cG9ydFNldHRpbmdzKG5ldyBWaWV3cG9ydFNldHRpbmdzKC0yLCAtMywgMiwgNywgVmlld3BvcnRGaXQuQ29udGFpbikpO1xyXG5cclxuICAgc3luYygpO1xyXG59XHJcbmZ1bmN0aW9uIGdvdG9CcmlkZ2UoKSB7IFxyXG4gICBzY2VuZU5hbWUgPSBcIkEgYnJpZGdlXCI7XHJcbiAgIHNjZW5lID0gY3JlYXRlQnJpZGdlU2NlbmUoNywgMSwgMCwgMC4xKTtcclxuICAgZ3JhcGhpY3Muc2V0Vmlld3BvcnRTZXR0aW5ncyhuZXcgVmlld3BvcnRTZXR0aW5ncygtMSwgLTIsIDgsIDYsIFZpZXdwb3J0Rml0LkNvbnRhaW4pKTtcclxuXHJcbiAgIHN5bmMoKTtcclxufVxyXG5mdW5jdGlvbiBnb3RvQ2xvdGgoKSB7IFxyXG4gICBzY2VuZU5hbWUgPSBcIkNsb3RoXCI7XHJcbiAgIHNjZW5lID0gY3JlYXRlQ2xvdGgoMTAsIDEwLCAwLjAwMDEsIDAuMDEpO1xyXG4gICBncmFwaGljcy5zZXRWaWV3cG9ydFNldHRpbmdzKG5ldyBWaWV3cG9ydFNldHRpbmdzKDAsIC0xLCAxMCwgMTIsIFZpZXdwb3J0Rml0LkNvbnRhaW4pKTtcclxuXHJcbiAgIHN5bmMoKTtcclxufVxyXG5mdW5jdGlvbiBnb3RvQ29tcGxpY2F0ZWQoKSB7IFxyXG4gICBzY2VuZU5hbWUgPSBcIkNvbXBsaWNhdGVkLiBSZWNvbW1lbmRlZCB0byB1c2UgJ1RvZ2dsZSBkZWJ1ZyBvdmVybGF5JyBpbiB0aGUgbWVudS5cIjtcclxuICAgc2NlbmUgPSBjcmVhdGVDb21wbGljYXRlZFNjZW5lKCk7XHJcbiAgIGdyYXBoaWNzLnNldFZpZXdwb3J0U2V0dGluZ3MobmV3IFZpZXdwb3J0U2V0dGluZ3MoLTUsIC01LCA1LCA1LCBWaWV3cG9ydEZpdC5Db250YWluKSk7XHJcblxyXG4gICBzeW5jKCk7XHJcbn1cclxuZnVuY3Rpb24gc3luYygpe1xyXG4gICBzY2VuZS5zdWJzdGVwcyA9IHN1YnN0ZXBzO1xyXG4gICBzY2VuZS50aW1lUmF0ZSA9IHRpbWVSYXRlO1xyXG4gICBzY2VuZS5ncmF2aXR5UmF0ZSA9IGdyYXZpdHlSYXRlO1xyXG5cclxuICAgbGV0IGluZm9PdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvLW92ZXJsYXlcIik7XHJcblxyXG4gICBpZighaW5mb092ZXJsYXkpIHJldHVybjtcclxuXHJcbiAgIGxldCBpbmZvID0gXCJcIjtcclxuXHJcbiAgIGluZm8gKz0gc2NlbmVOYW1lICsgXCI8YnIvPlwiO1xyXG4gICBpbmZvICs9IGAke2dyYXBoaWNzLndpZHRofXgke2dyYXBoaWNzLmhlaWdodH0gICh4JHtkZXZpY2VQaXhlbFJhdGlvfSkgPGJyIC8+YDtcclxuICAgaW5mbyArPSAoc3Vic3RlcHMgKiA2MCkgKyBcIkh6IDxiciAvPlwiO1xyXG4gICBpbmZvICs9IChzY2VuZS5ib2RpZXMubGVuZ3RoKSArIFwiIGJvZGllczxiciAvPlwiO1xyXG4gICBpbmZvICs9IChzY2VuZS5jb25zdHJhaW50cy5sZW5ndGgpICsgXCIgY29uc3RyYWludHM8YnIgLz5cIjsgXHJcbiAgIGluZm8gKz0gKGdyYXZpdHlSYXRlKSArIFwieCBncmF2aXR5XCI7XHJcblxyXG4gICBpbmZvT3ZlcmxheS5pbm5lckhUTUwgPSBpbmZvO1xyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhc3luYyAoKSA9PiB7XHJcbiAgIGluaXRNZW51KCk7XHJcblxyXG4gICAvLyBFeHBvc2UgZnVuY3Rpb25zIDopXHJcbiAgICh3aW5kb3cgYXMgYW55KS5zZXRHcmF2aXR5ID0gc2V0R3Jhdml0eTtcclxuICAgKHdpbmRvdyBhcyBhbnkpLnNldFNvbHZlclJhdGUgPSBzZXRTb2x2ZXJSYXRlO1xyXG4gICAod2luZG93IGFzIGFueSkuc2V0VGltZVJhdGUgPSBzZXRUaW1lUmF0ZTtcclxuICAgXHJcbiAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgXHJcbiAgIGdyYXBoaWNzID0gbmV3IEdyYXBoaWNzMkQoY2FudmFzKTtcclxuICAgZ3JhcGhpY3Muc2V0Vmlld3BvcnRTZXR0aW5ncyhuZXcgVmlld3BvcnRTZXR0aW5ncygtMywgLTMsIDMsIDMsIFZpZXdwb3J0Rml0LkNvbnRhaW4pKTtcclxuXHJcbiAgIHNldHVwUmVzaXppbmcoY2FudmFzKTtcclxuICAgc2V0dXBNb3VzZUNvbnRyb2xzKGNhbnZhcyk7XHJcblxyXG4gICBzZXR1cEJ1dHRvbnMoKTtcclxuXHJcbiAgIGxldCBsaW5lV2lkdGggPSAwLjA2O1xyXG5cclxuICAgKHdpbmRvdyBhcyBhbnkpLmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcclxuXHJcbiAgIGdvdG8zUGVuZHVsdW0oKTtcclxuXHJcbiAgIHNjZW5lLnN1YnN0ZXBzID0gMTtcclxuXHJcbiAgIGxldCB1cGRhdGUgPSAoZGVsdGE6IG51bWJlcikgPT4ge1xyXG4gICAgICBzY2VuZS51cGRhdGUoZGVsdGEpO1xyXG4gICB9O1xyXG5cclxuICAgbGV0IGRyYXcgPSAoKSA9PiB7XHJcbiAgICAgIGdyYXBoaWNzLnNldHVwKCk7XHJcblxyXG4gICAgICBsZXQgYmFja2dyb3VuZCA9IFwiI2UwZGRkNVwiO1xyXG4gICAgICBsZXQgZm9yZWdyb3VuZCA9IFwiIzM1MmYyMFwiO1xyXG4gICAgICBcclxuICAgICAgZ3JhcGhpY3Muc2V0RmlsbENvbG9yKGJhY2tncm91bmQpO1xyXG4gICAgICBncmFwaGljcy5kcmF3QmFja2dyb3VuZCgpO1xyXG5cclxuICAgICAgZ3JhcGhpY3Muc2V0TGluZVdpZHRoKGxpbmVXaWR0aCk7XHJcbiAgICAgIGdyYXBoaWNzLnNldFN0cm9rZUNvbG9yKGJhY2tncm91bmQpO1xyXG4gICAgICBncmFwaGljcy5zZXRGaWxsQ29sb3IoZm9yZWdyb3VuZCk7XHJcbiAgICAgIHNjZW5lLmRyYXcoZ3JhcGhpY3MpO1xyXG5cclxuICAgICAgaWYoZHJhd092ZXJsYXkpe1xyXG4gICAgICAgICBzY2VuZS5kcmF3RGVidWcoZ3JhcGhpY3MsIDAuMyk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgbGV0IHByZXZpb3VzVGltZSA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcclxuICAgbGV0IHRpY2sgPSAoKSA9PiB7XHJcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKTtcclxuXHJcbiAgICAgIGxldCBjdXJyZW50VGltZSA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcclxuXHJcbiAgICAgIGxldCBkZWx0YSA9IChjdXJyZW50VGltZSAtIHByZXZpb3VzVGltZSkgLyAxMDAwO1xyXG5cclxuICAgICAgaWYoZGVsdGEgPiAxIC8gMzApe1xyXG4gICAgICAgICBkZWx0YSA9IDEgLyAzMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcHJldmlvdXNUaW1lID0gY3VycmVudFRpbWU7XHJcblxyXG4gICAgICAvLyBJbiByZWFsaXR5IHlvdSBzaG91bGQgX25ldmVyXyB1c2UgdGhlIGFjdHVhbCBlbGFwc2VkIGRlbHRhIGJ1dCBhIGZpeGVkIGRlbHRhIHRpbWVcclxuICAgICAgLy8gYnV0IHRoaXMgaXMgZmluZSBmb3IgYSBuaWNlIGFuZCBzbW9vdGggYnJvd3NlciBleHBlcmllbmNlLlxyXG4gICAgICB1cGRhdGUgKGRlbHRhKTtcclxuICAgICAgZHJhdygpO1xyXG4gICB9XHJcblxyXG4gICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljayk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBEb2N1bWVudFNldHRpbmdzLCBEb2N1bWVudFVuaXRzIH0gZnJvbSBcImxpYi9zZXR0aW5ncy9Eb2N1bWVudFNldHRpbmdzXCI7XHJcbmltcG9ydCB7IFZpZXdwb3J0Rml0LCBWaWV3cG9ydFNldHRpbmdzIH0gZnJvbSBcImxpYi9zZXR0aW5ncy9WaWV3cG9ydFNldHRpbmdzXCI7XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZURvY3VtZW50U2V0dGluZ3NGcm9tQ2FudmFzKGNhbnZhczogVXNlYWJsZUNhbnZhcyl7XHJcbiAgICBsZXQgd2lkdGggPSBjYW52YXMud2lkdGg7XHJcbiAgICBsZXQgaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcclxuXHJcbiAgICBpZiAoY2FudmFzIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpe1xyXG4gICAgICAgIHdpZHRoID0gY2FudmFzLm9mZnNldFdpZHRoICogd2luZG93LmRldmljZVBpeGVsUmF0aW87XHJcbiAgICAgICAgaGVpZ2h0ID0gY2FudmFzLm9mZnNldEhlaWdodCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgRG9jdW1lbnRTZXR0aW5ncyh3aWR0aCwgaGVpZ2h0LCBEb2N1bWVudFNldHRpbmdzLkRlZmF1bHREUEkgKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbywgRG9jdW1lbnRVbml0cy5weCk7XHJcbn1cclxuZnVuY3Rpb24gZ2VuZXJhdGVWaWV3cG9ydFNldHRpbmdzRnJvbUNhbnZhcyhjYW52YXM6IFVzZWFibGVDYW52YXMpe1xyXG4gICAgcmV0dXJuIG5ldyBWaWV3cG9ydFNldHRpbmdzKDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCwgVmlld3BvcnRGaXQuQ29udGFpbik7XHJcbn1cclxuXHJcbnR5cGUgVXNlYWJsZUNhbnZhcyA9IEhUTUxDYW52YXNFbGVtZW50fE9mZnNjcmVlbkNhbnZhcztcclxudHlwZSBVc2VhYmxlQ29udGV4dCA9IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRHxPZmZzY3JlZW5DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbnR5cGUgVXNlYWJsZUltYWdlID0gSFRNTFZpZGVvRWxlbWVudCB8IEhUTUxJbWFnZUVsZW1lbnQgfCBIVE1MQ2FudmFzRWxlbWVudCB8IEltYWdlQml0bWFwIHwgT2Zmc2NyZWVuQ2FudmFzO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdyYXBoaWNzMkQge1xyXG4gICAgcmVhZG9ubHkgY2FudmFzOiBVc2VhYmxlQ2FudmFzO1xyXG4gICAgcmVhZG9ubHkgY29udGV4dDogVXNlYWJsZUNvbnRleHQ7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZG9jdW1lbnRTZXR0aW5nczogRG9jdW1lbnRTZXR0aW5ncztcclxuICAgIHByaXZhdGUgX3ZpZXdwb3J0U2V0dGluZ3M6IFZpZXdwb3J0U2V0dGluZ3M7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudHxPZmZzY3JlZW5DYW52YXMsIGRvY3VtZW50U2V0dGluZ3M/OiBEb2N1bWVudFNldHRpbmdzLCB2aWV3cG9ydFNldHRpbmdzPzogVmlld3BvcnRTZXR0aW5ncyl7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgbGV0IGNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgICAgIGlmKGNvbnRleHQgPT09IG51bGwpe1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gaW5pdGlhbGl6ZSBjb250ZXh0XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dCBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcblxyXG4gICAgICAgIHRoaXMuX2RvY3VtZW50U2V0dGluZ3MgPSBkb2N1bWVudFNldHRpbmdzID8/IGdlbmVyYXRlRG9jdW1lbnRTZXR0aW5nc0Zyb21DYW52YXMoY2FudmFzKTtcclxuICAgICAgICB0aGlzLl92aWV3cG9ydFNldHRpbmdzID0gdmlld3BvcnRTZXR0aW5ncyA/PyBnZW5lcmF0ZVZpZXdwb3J0U2V0dGluZ3NGcm9tQ2FudmFzKGNhbnZhcyk7XHJcblxyXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy5kb2N1bWVudFNldHRpbmdzLndpZHRoSW5QaXhlbHM7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5kb2N1bWVudFNldHRpbmdzLmhlaWdodEluUGl4ZWxzO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRleHQubGluZUNhcCA9IFwicm91bmRcIjtcclxuICAgICAgICB0aGlzLmNvbnRleHQubWl0ZXJMaW1pdCA9IDAuMTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXR1cCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cclxuICAgIC8vIFNldHVwXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXHJcbiAgICBzZXR1cCgpe1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5yZXNldFRyYW5zZm9ybSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG5cclxuICAgICAgICBsZXQgYXNwZWN0UmF0aW8gPSB0aGlzLl92aWV3cG9ydFNldHRpbmdzLmFzcGVjdFJhdGlvO1xyXG5cclxuICAgICAgICBsZXQgbWluU2l6ZSA9IE1hdGgubWluKHRoaXMud2lkdGggLyBhc3BlY3RSYXRpbywgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIGxldCBtYXhTaXplID0gTWF0aC5tYXgodGhpcy53aWR0aCAvIGFzcGVjdFJhdGlvLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnRyYW5zbGF0ZSh0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgLyAyKTtcclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLl92aWV3cG9ydFNldHRpbmdzLmZpdCA9PT0gVmlld3BvcnRGaXQuRmlsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5zY2FsZSh0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgLyAyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuX3ZpZXdwb3J0U2V0dGluZ3MuZml0ID09PSBWaWV3cG9ydEZpdC5Db250YWluKXtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnNjYWxlKG1pblNpemUgLyAyLCBtaW5TaXplIC8gMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuX3ZpZXdwb3J0U2V0dGluZ3MuZml0ID09PSBWaWV3cG9ydEZpdC5Db3Zlcil7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5zY2FsZShtYXhTaXplIC8gMiwgbWF4U2l6ZSAvIDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBWaWV3cG9ydCBzaG91bGRuJ3QgaGF2ZSBhIHdpZHRoIGFuZCBoZWlnaHQsIGJ1dCBqdXN0IG9uZSB0eXBlIG9mIHVuaXQgKGhlaWdodD8pIHRoYXQgc2NhbGVzIHRoaXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiBmYWN0b3JzLi4uIChsYW5kc2NhcGUvcG9ydHJhaXQ/KVxyXG4gICAgICAgIC8vIFRoZW4gd2UgY2FuIGFsc28gZWxpbWluYXRlIG9uZSBvZiB0aGUgdmlld3BvcnQgZml0IGNhdGVnb3JpZXMgcmlnaHQ/IEJlY2F1c2Ugd2UgZWl0aGVyIG1hdGNoIGhlaWdodCBvciB3aWR0aFxyXG4gICAgICAgIHRoaXMuY29udGV4dC5zY2FsZSgxIC8gKHRoaXMuX3ZpZXdwb3J0U2V0dGluZ3Mud2lkdGggLyAyKSwgMSAvICh0aGlzLl92aWV3cG9ydFNldHRpbmdzLmhlaWdodCAvIDIpKTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLl92aWV3cG9ydFNldHRpbmdzLmZpdCAhPT0gVmlld3BvcnRGaXQuRmlsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5zY2FsZShhc3BlY3RSYXRpbywgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvbnRleHQudHJhbnNsYXRlKC10aGlzLl92aWV3cG9ydFNldHRpbmdzLmNlbnRlclgsIC10aGlzLl92aWV3cG9ydFNldHRpbmdzLmNlbnRlclkpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXHJcbiAgICAvLyBTZXR0aW5nc1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xyXG4gICAgc2V0RmlsbENvbG9yKGNvbG9yOiBzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgIH1cclxuICAgIHNldEZpbGxQYXR0ZXJuKHBhdHRlcm46IENhbnZhc1BhdHRlcm4pe1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBwYXR0ZXJuO1xyXG4gICAgfVxyXG4gICAgc2V0U3Ryb2tlQ29sb3IoY29sb3I6IHN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gY29sb3I7XHJcbiAgICB9XHJcbiAgICBzZXRMaW5lV2lkdGhJblBvaW50cyh3aWR0aDogbnVtYmVyKXtcclxuICAgICAgICB0aGlzLmNvbnRleHQubGluZVdpZHRoID0gdGhpcy5wb2ludFNpemUgKiB3aWR0aDtcclxuICAgIH1cclxuICAgIHNldExpbmVXaWR0aCh3aWR0aDogbnVtYmVyKXtcclxuICAgICAgICB0aGlzLmNvbnRleHQubGluZVdpZHRoID0gd2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJucyB0aGUgc2l6ZSBvZiBhIHBpeGVsIGluIHZpZXdwb3J0IHVuaXRzXHJcbiAgICBnZXQgcGl4ZWxTaXplKCl7XHJcbiAgICAgICAgbGV0IHQgPSB0aGlzLmNvbnRleHQuZ2V0VHJhbnNmb3JtKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHNyID0gTWF0aC5zcXJ0KHQuYSAqIHQuYSArIHQuYiAqIHQuYik7XHJcbiAgICAgICAgbGV0IHN0ID0gTWF0aC5zcXJ0KHQuYyAqIHQuYyArIHQuZCAqIHQuZCk7XHJcblxyXG4gICAgICAgIHJldHVybiAxIC8gKChzciArIHN0KSAvIDIpO1xyXG4gICAgfVxyXG4gICAgLy8gUmV0dXJucyB0aGUgc2l6ZSBvZiBhIHBvaW50IGluIHZpZXdwb3J0IHVuaXRzXHJcbiAgICBnZXQgcG9pbnRTaXplKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGl4ZWxTaXplICogdGhpcy5fZG9jdW1lbnRTZXR0aW5ncy5waXhlbHNQZXJQb2ludDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xyXG4gICAgLy8gSGVscGVyc1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xyXG4gICAgLy8gVE9ETyB0aGlzIHNob3VsZCBiZSB3cmFwcG5pZyB0aGUgcGF0dGVybiBpbiBzb21lIHdheSB0byBzdGlsbCByZWNlaXZlIHRoZSBpbWFnZS4uLi5cclxuICAgIGNyZWF0ZVBhdHRlcm4oaW1hZ2U6IFVzZWFibGVJbWFnZSk6IENhbnZhc1BhdHRlcm58bnVsbHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LmNyZWF0ZVBhdHRlcm4oaW1hZ2UsIFwicmVwZWF0XCIpO1xyXG4gICAgfVxyXG4gICAgdHJhbnNmb3JtUGF0dGVybihpbWFnZTogVXNlYWJsZUltYWdlLCBwYXR0ZXJuOiBDYW52YXNQYXR0ZXJuLCB3aWR0aEluUG9pbnRzOiBudW1iZXIsIGhlaWdodEluUG9pbnRzOiBudW1iZXIsIGFuZ2xlOiBudW1iZXIpe1xyXG4gICAgICAgIGxldCBzID0gTWF0aC5zaW4oYW5nbGUpO1xyXG4gICAgICAgIGxldCBjID0gTWF0aC5jb3MoYW5nbGUpO1xyXG5cclxuICAgICAgICBsZXQgdyA9IDEgLyBpbWFnZS53aWR0aCAqIHRoaXMucG9pbnRTaXplICogd2lkdGhJblBvaW50cztcclxuICAgICAgICBsZXQgaCA9IDEgLyBpbWFnZS5oZWlnaHQgKiB0aGlzLnBvaW50U2l6ZSAqIGhlaWdodEluUG9pbnRzO1xyXG5cclxuICAgICAgICBsZXQgbWF0cml4ID0gW1xyXG4gICAgICAgICAgICBjICogdywgcyAqIHcsIDAsXHJcbiAgICAgICAgICAgIC1zICogaCwgYyAqIHcsIDAsXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgLy8gW2EgYyBlXVxyXG4gICAgICAgIC8vIFtiIGQgZl1cclxuICAgICAgICAvLyBbMCAwIDFdXHJcblxyXG4gICAgICAgIHBhdHRlcm4uc2V0VHJhbnNmb3JtKG5ldyBET01NYXRyaXgoW1xyXG4gICAgICAgICAgICBtYXRyaXhbMF0sIG1hdHJpeFszXSwgXHJcbiAgICAgICAgICAgIG1hdHJpeFsxXSwgbWF0cml4WzRdLFxyXG4gICAgICAgICAgICBtYXRyaXhbMl0sIG1hdHJpeFs1XVxyXG4gICAgICAgIF0pKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXHJcbiAgICAvLyBUcmFuc2xhdGlvbnNcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cclxuICAgIHB1c2goKXtcclxuICAgICAgICB0aGlzLmNvbnRleHQuc2F2ZSgpO1xyXG4gICAgfVxyXG4gICAgcG9wKCl7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnJlc3RvcmUoKTtcclxuICAgIH1cclxuICAgIHNjYWxlKHg6IG51bWJlciwgeTogbnVtYmVyKXtcclxuICAgICAgICB0aGlzLmNvbnRleHQuc2NhbGUoeCwgeSk7XHJcbiAgICB9XHJcbiAgICByb3RhdGUoYW5nbGU6IG51bWJlcil7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnJvdGF0ZShhbmdsZSk7XHJcbiAgICB9XHJcbiAgICByb3RhdGVEZWcoYW5nbGU6IG51bWJlcil7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnJvdGF0ZShhbmdsZSAvIDE4MCAqIE1hdGguUEkpO1xyXG4gICAgfVxyXG4gICAgdHJhbnNsYXRlKHg6IG51bWJlciwgeTogbnVtYmVyKXtcclxuICAgICAgICB0aGlzLmNvbnRleHQudHJhbnNsYXRlKHgsIHkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cclxuICAgIC8vIERyYXdpbmdcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cclxuICAgIGRyYXdSZWN0YW5nbGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBmaWxsOiBib29sZWFuKXtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGV4dC5tb3ZlVG8oeCwgeSk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVUbyh4ICsgd2lkdGgsIHkpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5saW5lVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmNvbnRleHQubGluZVRvKHgsIHkgKyBoZWlnaHQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY29udGV4dC5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICAgICAgaWYoZmlsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5zdHJva2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkcmF3Q2lyY2xlKHg6IG51bWJlciwgeTogbnVtYmVyLCByYWRpdXM6IG51bWJlciwgZmlsbDogYm9vbGVhbil7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5hcmMoeCwgeSwgcmFkaXVzLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGZpbGwpe1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZHJhd0xpbmUoeDogbnVtYmVyLCB5OiBudW1iZXIsIHgyOiBudW1iZXIsIHkyOiBudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250ZXh0Lm1vdmVUbyh4LCB5KTtcclxuICAgICAgICB0aGlzLmNvbnRleHQubGluZVRvKHgyLCB5Mik7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3UGF0aChwYXRoOiBQYXRoMkQsIGZpbGw6IGJvb2xlYW4pOiBQYXRoMkQ7XHJcbiAgICBkcmF3UGF0aChjcmVhdGVQYXRoOiAocGF0aDogUGF0aDJEKSA9PiB2b2lkLCBmaWxsOiBib29sZWFuKTogUGF0aDJEO1xyXG4gICAgZHJhd1BhdGgocGF0aE9yQ3JlYXRlUGF0aDogUGF0aDJEfCgocGF0aDogUGF0aDJEKSA9PiB2b2lkKSwgZmlsbDogYm9vbGVhbik6IFBhdGgyRHtcclxuICAgICAgICBpZih0eXBlb2YocGF0aE9yQ3JlYXRlUGF0aCkgPT09IFwib2JqZWN0XCIpe1xyXG4gICAgICAgICAgICBsZXQgcGF0aCA9IHBhdGhPckNyZWF0ZVBhdGggYXMgUGF0aDJEO1xyXG5cclxuICAgICAgICAgICAgaWYoZmlsbCkgdGhpcy5jb250ZXh0LmZpbGwocGF0aCk7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5jb250ZXh0LnN0cm9rZShwYXRoKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBwYXRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBsZXQgcGF0aCA9IG5ldyBQYXRoMkQoKTtcclxuXHJcbiAgICAgICAgICAgIHBhdGhPckNyZWF0ZVBhdGgocGF0aCk7XHJcblxyXG4gICAgICAgICAgICBpZihmaWxsKSB0aGlzLmNvbnRleHQuZmlsbChwYXRoKTtcclxuICAgICAgICAgICAgZWxzZSB0aGlzLmNvbnRleHQuc3Ryb2tlKHBhdGgpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHBhdGg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXdQYXRocyhwYXRoczogUGF0aDJEW10sIGZpbGw6IGJvb2xlYW4pe1xyXG4gICAgICAgIHBhdGhzLmZvckVhY2gocGF0aCA9PiB0aGlzLmRyYXdQYXRoKHBhdGgsIGZpbGwpKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3SW1hZ2UoaW1hZ2U6IFVzZWFibGVJbWFnZSwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkO1xyXG4gICAgZHJhd0ltYWdlKGltYWdlOiBVc2VhYmxlSW1hZ2UsIHg6IG51bWJlciwgeTogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlcik6IHZvaWQ7XHJcbiAgICBkcmF3SW1hZ2UoaW1hZ2U6IFVzZWFibGVJbWFnZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHc/OiBudW1iZXIsIGg/OiBudW1iZXIpOiB2b2lke1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIHgsIHksIHcgPz8gaW1hZ2Uud2lkdGgsIGggPz8gaW1hZ2UuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3QmFja2dyb3VuZCgpe1xyXG4gICAgICAgIGxldCBmID0gdGhpcy5jYW52YXNUb1ZpZXdwb3J0KDAsIDApO1xyXG4gICAgICAgIGxldCB0ID0gdGhpcy5jYW52YXNUb1ZpZXdwb3J0KHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgdGhpcy5kcmF3UmVjdGFuZ2xlKGYueCwgZi55LCB0LnggLSBmLngsIHQueSAtIGYueSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xyXG4gICAgLy8gQ2xpcHBpbmdcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cclxuICAgIGNsaXBSZWN0YW5nbGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyKTogUGF0aDJEIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jbGlwKChwYXRoKSA9PiB7XHJcbiAgICAgICAgICAgIHBhdGgucmVjdCh4LCB5LCB3LCBoKTtcclxuICAgICAgICAgICAgcGF0aC5jbG9zZVBhdGgoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNsaXAocGF0aDogUGF0aDJEKTogUGF0aDJEO1xyXG4gICAgY2xpcChjcmVhdGVQYXRoOiAocGF0aDogUGF0aDJEKSA9PiB2b2lkKTogUGF0aDJEO1xyXG4gICAgY2xpcChwYXRoT3JDcmVhdGVQYXRoOiBQYXRoMkR8KChwYXRoOiBQYXRoMkQpID0+IHZvaWQpKTogUGF0aDJEe1xyXG4gICAgICAgIGlmKHR5cGVvZihwYXRoT3JDcmVhdGVQYXRoKSA9PT0gXCJvYmplY3RcIil7XHJcbiAgICAgICAgICAgIGxldCBwYXRoID0gcGF0aE9yQ3JlYXRlUGF0aCBhcyBQYXRoMkQ7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuY2xpcChwYXRoKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBwYXRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBsZXQgcGF0aCA9IG5ldyBQYXRoMkQoKTtcclxuXHJcbiAgICAgICAgICAgIHBhdGhPckNyZWF0ZVBhdGgocGF0aCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuY2xpcChwYXRoKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBwYXRoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXHJcbiAgICAvLyBTZXR0aW5ncyBhbmQgY29udmVyc2lvbnNcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cclxuICAgIHNldFZpZXdwb3J0U2V0dGluZ3Moc2V0dGluZ3M6IFZpZXdwb3J0U2V0dGluZ3Mpe1xyXG4gICAgICAgIHRoaXMuX3ZpZXdwb3J0U2V0dGluZ3MgPSBzZXR0aW5ncztcclxuICAgICAgICB0aGlzLnNldHVwKCk7XHJcbiAgICB9XHJcbiAgICBjYW52YXNUb1ZpZXdwb3J0KHg6IG51bWJlciwgeTogbnVtYmVyKToge3g6IG51bWJlciwgeTogbnVtYmVyfSB7XHJcbiAgICAgICAgaWYodGhpcy5jYW52YXMgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCl7XHJcbiAgICAgICAgICAgIHggLz0gdGhpcy5jYW52YXMub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICAgIHkgLz0gdGhpcy5jYW52YXMub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgICB4ICo9IHRoaXMuY2FudmFzLndpZHRoO1xyXG4gICAgICAgICAgICB5ICo9IHRoaXMuY2FudmFzLmhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0cmFuc2Zvcm0gPSB0aGlzLmNvbnRleHQuZ2V0VHJhbnNmb3JtKCk7XHJcblxyXG4gICAgICAgIHRyYW5zZm9ybS5pbnZlcnRTZWxmKCk7XHJcbiAgIFxyXG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm0udHJhbnNmb3JtUG9pbnQoe3gsIHl9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXHJcbiAgICAvLyBHZXR0ZXJzXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXHJcbiAgICBnZXQgd2lkdGgoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXMud2lkdGg7XHJcbiAgICB9XHJcbiAgICBnZXQgaGVpZ2h0KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzLmhlaWdodDtcclxuICAgIH1cclxuICAgIGdldCB2aWV3cG9ydFNldHRpbmdzKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZXdwb3J0U2V0dGluZ3M7XHJcbiAgICB9XHJcbiAgICBnZXQgZG9jdW1lbnRTZXR0aW5ncygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kb2N1bWVudFNldHRpbmdzO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIE1hdGhIZWxwZXIge1xyXG4gICAgc3RhdGljIGF2YXJhZ2UoLi4udmFsdWVzOiBudW1iZXJbXSl7XHJcbiAgICAgICAgbGV0IHN1bSA9IDA7XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBzdW0gKz0gdmFsdWVzW2ldO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHN1bSAvIHZhbHVlcy5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgd2VpZ2h0ZWRBdmFyYWdlKHdlaWdodHM6IG51bWJlcltdLCB2YWx1ZXM6IG51bWJlcltdKXtcclxuICAgICAgICBpZih3ZWlnaHRzLmxlbmd0aCAhPSB2YWx1ZXMubGVuZ3RoKSB0aHJvdyBuZXcgRXJyb3IoXCJ3ZWlnaHRzIGFuZCBhdmx1ZXMgZG9uJ3QgbWF0Y2ggbGVuZ3RoXCIpO1xyXG5cclxuICAgICAgICBsZXQgc3VtID0gMDtcclxuICAgICAgICBsZXQgd2VpZ2h0U3VtID0gMDtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHdlaWdodFN1bSArPSB3ZWlnaHRzW2ldO1xyXG4gICAgICAgICAgICBzdW0gKz0gdmFsdWVzW2ldICogd2VpZ2h0c1tpXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzdW0gLyB3ZWlnaHRTdW07XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgbWluKC4uLnZhbHVlczogbnVtYmVyW10pe1xyXG4gICAgICAgIGxldCBtaW4gPSB2YWx1ZXNbMF07XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBpZih2YWx1ZXNbaV0gPCBtaW4pIHZhbHVlc1tpXSA9IG1pbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBtaW47XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgbWF4KC4uLnZhbHVlczogbnVtYmVyW10pe1xyXG4gICAgICAgIGxldCBtYXggPSB2YWx1ZXNbMF07XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBpZih2YWx1ZXNbaV0gPiBtYXgpIHZhbHVlc1tpXSA9IG1heDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBtYXg7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgcmVtYXAobWluOiBudW1iZXIsIG1heDogbnVtYmVyLCBuZXdNaW46IG51bWJlciwgbmV3TWF4OiBudW1iZXIsIHY6IG51bWJlcik6IG51bWJlcntcclxuICAgICAgICBsZXQgZiA9IHRoaXMuaW52ZXJzZUxlcnAobWluLCBtYXgsIHYpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5sZXJwKG5ld01pbiwgbmV3TWF4LCBmKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBsZXJwKGE6IG51bWJlciwgYjogbnVtYmVyLCBmOiBudW1iZXIpOiBudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIGEgKyAoYiAtIGEpICogZjtcclxuICAgIH1cclxuICAgIHN0YXRpYyBpbnZlcnNlTGVycChhOiBudW1iZXIsIGI6IG51bWJlciwgdjogbnVtYmVyKTogbnVtYmVye1xyXG4gICAgICAgIHJldHVybiAodiAtIGEpIC8gKGIgLSBhKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBjbGFtcCh2OiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlcntcclxuICAgICAgICBpZih2IDwgbWluKSByZXR1cm4gbWluO1xyXG4gICAgICAgIGlmKHYgPiBtYXgpIHJldHVybiBtYXg7XHJcblxyXG4gICAgICAgIHJldHVybiB2O1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGNsaXAodjogbnVtYmVyKTogbnVtYmVye1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNsYW1wKHYsIDAsIDEpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIG5vcm1hbGl6ZUFuZ2xlKGFuZ2xlOiBudW1iZXIpe1xyXG4gICAgICAgIGFuZ2xlICU9IE1hdGguUEkgKiAyO1xyXG5cclxuICAgICAgICBpZihhbmdsZSA8IDApe1xyXG4gICAgICAgICAgICBhbmdsZSArPSBNYXRoLlBJICogMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhbmdsZTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBzaG9ydGVzdEFuZ2xlKGZyb206IG51bWJlciwgdG86IG51bWJlcil7XHJcbiAgICAgICAgbGV0IGRpZmYgPSAodG8gLSBmcm9tICsgTWF0aC5QSSkgJSAoTWF0aC5QSSAqIDIpIC0gTWF0aC5QSTtcclxuICAgICAgICByZXR1cm4gZGlmZiA8IC1NYXRoLlBJID8gZGlmZiArIE1hdGguUEkgKiAyIDogZGlmZjtcclxuICAgIFxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi9WZWN0b3IyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWF0cml4MiB7XHJcbiAgICAvLyBbeHggIHl4XVxyXG4gICAgLy8gW3h5ICB5eV1cclxuICAgIHh4OiBudW1iZXI7XHJcbiAgICB4eTogbnVtYmVyO1xyXG4gICAgeXg6IG51bWJlcjtcclxuICAgIHl5OiBudW1iZXI7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xyXG4gICAgLy8gQ29uc3RydWN0b3JcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cclxuICAgIGNvbnN0cnVjdG9yKG0wMDogbnVtYmVyLCBtMDE6IG51bWJlciwgbTEwOiBudW1iZXIsIG0xMTogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gW20wMCAgbTAxXVxyXG4gICAgICAgIC8vIFttMTAgIG0xMV1cclxuICAgICAgICB0aGlzLnh4ID0gbTAwO1xyXG4gICAgICAgIHRoaXMueHkgPSBtMTA7XHJcblxyXG4gICAgICAgIHRoaXMueXggPSBtMDE7XHJcbiAgICAgICAgdGhpcy55eSA9IG0xMTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBbbTAwICBtMDFdXHJcbiAgICAvLyBbbTEwICBtMTFdXHJcbiAgICBnZXQgbTAwKCkgeyByZXR1cm4gdGhpcy54eDsgfVxyXG4gICAgZ2V0IG0wMSgpIHsgcmV0dXJuIHRoaXMueXg7IH1cclxuICAgIGdldCBtMTAoKSB7IHJldHVybiB0aGlzLnh5OyB9XHJcbiAgICBnZXQgbTExKCkgeyByZXR1cm4gdGhpcy55eTsgfVxyXG4gICAgXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXHJcbiAgICAvLyBHZXR0ZXJzXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXHJcbiAgICBnZXQgZGV0ZXJtaW5hbnQoKXtcclxuICAgICAgICByZXR1cm4gVmVjdG9yMi5mQ3Jvc3ModGhpcy54eCwgdGhpcy54eSwgdGhpcy55eCwgdGhpcy55eSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xyXG4gICAgLy8gTGluZWFyIHRyYW5zZm9ybWF0aW9uc1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xyXG4gICAgdHJhbnNmb3JtWCh4OiBudW1iZXIsIHk6IG51bWJlcil7IHJldHVybiB4ICogdGhpcy54eCArIHkgKiB0aGlzLnl4OyB9XHJcbiAgICB0cmFuc2Zvcm1ZKHg6IG51bWJlciwgeTogbnVtYmVyKXsgcmV0dXJuIHggKiB0aGlzLnh5ICsgeSAqIHRoaXMueXk7IH1cclxuICAgIHRyYW5zZm9ybShpbnB1dDogVmVjdG9yMikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybU91dChpbnB1dCwgbmV3IFZlY3RvcjIoKSk7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm1PdXQoaW5wdXQ6IFZlY3RvcjIsIG91dHB1dDogVmVjdG9yMil7XHJcbiAgICAgICAgbGV0IHggPSB0aGlzLnRyYW5zZm9ybVgoaW5wdXQueCwgaW5wdXQueSk7XHJcbiAgICAgICAgbGV0IHkgPSB0aGlzLnRyYW5zZm9ybVkoaW5wdXQueCwgaW5wdXQueSk7XHJcblxyXG4gICAgICAgIHJldHVybiBvdXRwdXQuYXBwbHkoeCwgeSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xyXG4gICAgLy8gU2V0dGluZyB0aGlzXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXHJcbiAgICBzZXRYKHg6IG51bWJlciwgeTogbnVtYmVyKXtcclxuICAgICAgICB0aGlzLnh4ID0geDtcclxuICAgICAgICB0aGlzLnh5ID0geTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBzZXRZKHg6IG51bWJlciwgeTogbnVtYmVyKXtcclxuICAgICAgICB0aGlzLnl4ID0geDtcclxuICAgICAgICB0aGlzLnl5ID0geTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBpbnZlcnNlKCl7XHJcbiAgICAgICAgbGV0IGRldGVybWluYW50ID0gdGhpcy5kZXRlcm1pbmFudDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRqdWdhdGUoKS5zY2FsZSgxL2RldGVybWluYW50KTtcclxuICAgIH1cclxuICAgIHRyYW5zcG9zZSgpe1xyXG4gICAgICAgIGxldCB0ZW1wID0gdGhpcy54eTtcclxuICAgICAgICB0aGlzLnh5ID0gdGhpcy55eDtcclxuICAgICAgICB0aGlzLnl4ID0gdGVtcDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBhZGp1Z2F0ZSgpe1xyXG4gICAgICAgIC8vIFthICBiXVxyXG4gICAgICAgIC8vIFtjICBkXVxyXG4gICAgICAgIC8vIFxyXG4gICAgICAgIC8vIFsgZCAtYl1cclxuICAgICAgICAvLyBbLWMgIGFdXHJcblxyXG4gICAgICAgIGxldCBhID0gdGhpcy54eDtcclxuICAgICAgICBsZXQgYiA9IHRoaXMueXg7XHJcbiAgICAgICAgbGV0IGMgPSB0aGlzLnh5O1xyXG4gICAgICAgIGxldCBkID0gdGhpcy55eTtcclxuXHJcbiAgICAgICAgdGhpcy54eCA9IGQ7XHJcbiAgICAgICAgdGhpcy54eSA9IC1jO1xyXG4gICAgICAgIHRoaXMueXggPSAtYjtcclxuICAgICAgICB0aGlzLnl5ID0gYTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBzY2FsZShuOiBudW1iZXIpe1xyXG4gICAgICAgIHRoaXMueHggKj0gbjtcclxuICAgICAgICB0aGlzLnh5ICo9IG47XHJcbiAgICAgICAgdGhpcy55eCAqPSBuO1xyXG4gICAgICAgIHRoaXMueXkgKj0gbjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBzZXRBc1JvdGF0aW9uKGFuZ2xlOiBudW1iZXIpe1xyXG4gICAgICAgIC8vIFtjICBzXVxyXG4gICAgICAgIC8vIFstcyBjXVxyXG5cclxuICAgICAgICBsZXQgcyA9IE1hdGguc2luKGFuZ2xlKTtcclxuICAgICAgICBsZXQgYyA9IE1hdGguY29zKGFuZ2xlKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRYKGMsIHMpO1xyXG4gICAgICAgIHRoaXMuc2V0WSgtcywgYyk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgc2V0QXNJZGVudGl0eSgpe1xyXG4gICAgICAgIHRoaXMuc2V0WCgxLCAwKTtcclxuICAgICAgICB0aGlzLnNldFkoMCwgMSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgc2V0QXMob3RoZXI6IE1hdHJpeDIpe1xyXG4gICAgICAgIHRoaXMueHggPSBvdGhlci54eDtcclxuICAgICAgICB0aGlzLnh5ID0gb3RoZXIueHk7XHJcbiAgICAgICAgdGhpcy55eCA9IG90aGVyLnl4O1xyXG4gICAgICAgIHRoaXMueXkgPSBvdGhlci55eTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cclxuICAgIC8vIENsb25pbmdcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cclxuICAgIGNsb25lKCl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXgyKHRoaXMubTAwLCB0aGlzLm0wMSwgdGhpcy5tMTAsIHRoaXMubTExKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xyXG4gICAgLy8gU3RhdGljIGNyZWF0aW9uc1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xyXG4gICAgc3RhdGljIGlkZW50aXR5KCkgeyByZXR1cm4gbmV3IE1hdHJpeDIoMSwgMCwgMCwgMSk7IH1cclxuICAgIHN0YXRpYyBzY2FsZWQoeDogbnVtYmVyLCB5OiBudW1iZXIpIHsgcmV0dXJuIG5ldyBNYXRyaXgyKHgsIDAsIDAsIHkpOyB9XHJcbiAgICBzdGF0aWMgcm90YXRpb24oYW5nbGU6IG51bWJlcikgeyByZXR1cm4gbmV3IE1hdHJpeDIoMCwgMCwgMCwgMCkuc2V0QXNSb3RhdGlvbihhbmdsZSk7IH1cclxufSIsIi8vIFRoaXMgY2xhc3Mgc2hvdWxkIHByb2JhYmx5IGJlIGltbXV0YWJsZSBidXQgaXNuJ3QgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMuLi5cclxuZXhwb3J0IGNsYXNzIFZlY3RvcjIge1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMCkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuXHJcbiAgICBhZGQob3RoZXI6IFZlY3RvcjIpIHtcclxuICAgICAgICB0aGlzLnggKz0gb3RoZXIueDtcclxuICAgICAgICB0aGlzLnkgKz0gb3RoZXIueTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBhZGRYKHg6IG51bWJlcikge3RoaXMueCArPSB4OyByZXR1cm4gdGhpczsgfVxyXG4gICAgYWRkWSh5OiBudW1iZXIpIHt0aGlzLnkgKz0geTsgcmV0dXJuIHRoaXM7IH1cclxuXHJcbiAgICBzdWIob3RoZXI6IFZlY3RvcjIpIHtcclxuICAgICAgICB0aGlzLnggLT0gb3RoZXIueDtcclxuICAgICAgICB0aGlzLnkgLT0gb3RoZXIueTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBzdWJYKHg6IG51bWJlcikge3RoaXMueCAtPSB4OyByZXR1cm4gdGhpczsgfVxyXG4gICAgc3ViWSh5OiBudW1iZXIpIHt0aGlzLnkgLT0geTsgcmV0dXJuIHRoaXM7IH1cclxuICAgIFxyXG4gICAgbXVsKG90aGVyOiBWZWN0b3IyKSB7XHJcbiAgICAgICAgdGhpcy54ICo9IG90aGVyLng7XHJcbiAgICAgICAgdGhpcy55ICo9IG90aGVyLnk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgbXVsWCh4OiBudW1iZXIpIHt0aGlzLnggKj0geDsgcmV0dXJuIHRoaXM7IH1cclxuICAgIG11bFkoeTogbnVtYmVyKSB7dGhpcy55ICo9IHk7IHJldHVybiB0aGlzOyB9XHJcblxyXG4gICAgZGl2KG90aGVyOiBWZWN0b3IyKSB7XHJcbiAgICAgICAgdGhpcy54IC89IG90aGVyLng7XHJcbiAgICAgICAgdGhpcy55IC89IG90aGVyLnk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgZGl2WCh4OiBudW1iZXIpIHt0aGlzLnggLz0geDsgcmV0dXJuIHRoaXM7IH1cclxuICAgIGRpdlkoeTogbnVtYmVyKSB7dGhpcy55IC89IHk7IHJldHVybiB0aGlzOyB9XHJcblxyXG4gICAgc2NhbGUoc2NhbGVyOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggKj0gc2NhbGVyO1xyXG4gICAgICAgIHRoaXMueSAqPSBzY2FsZXI7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgc2V0KG90aGVyOiBWZWN0b3IyKSB7XHJcbiAgICAgICAgdGhpcy54ID0gb3RoZXIueDtcclxuICAgICAgICB0aGlzLnkgPSBvdGhlci55O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHNldFplcm8oKSB7XHJcbiAgICAgICAgdGhpcy54ID0gMDtcclxuICAgICAgICB0aGlzLnkgPSAwO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGFwcGx5KHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIG5lZ2F0ZSgpIHtcclxuICAgICAgICB0aGlzLnggPSAtdGhpcy54O1xyXG4gICAgICAgIHRoaXMueSA9IC10aGlzLnk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG5vcm1hbGl6ZSgpIHtcclxuICAgICAgICBsZXQgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XHJcblxyXG4gICAgICAgIGlmIChsZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCAvPSBsZW5ndGg7XHJcbiAgICAgICAgICAgIHRoaXMueSAvPSBsZW5ndGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwZXJwZW5kaWN1bGFyaXplKCl7XHJcbiAgICAgICAgbGV0IHQgPSB0aGlzLnk7XHJcblxyXG4gICAgICAgIHRoaXMueSA9IHRoaXMueDtcclxuICAgICAgICB0aGlzLnggPSAtdDtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbm9ybWFsaXplZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jbG9uZSgpLm5vcm1hbGl6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzcXJMZW5ndGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIFZlY3RvcjIuZG90KHRoaXMsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBsZW5ndGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnNxckxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGFuZ2xlKCkge1xyXG4gICAgICAgIHJldHVybiBWZWN0b3IyLmZBbmdsZSh0aGlzLnksIHRoaXMueCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzdGFuY2VUbyhvdGhlcjogVmVjdG9yMikge1xyXG4gICAgICAgIHJldHVybiBWZWN0b3IyLmRpc3RhbmNlKHRoaXMsIG90aGVyKTtcclxuICAgIH1cclxuICAgIGRpcmVjdGlvblRvKG90aGVyOiBWZWN0b3IyKSB7XHJcbiAgICAgICAgcmV0dXJuIFZlY3RvcjIuZGlyZWN0aW9uKHRoaXMsIG90aGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGlyZWN0aW9uKGE6IFZlY3RvcjIsIGI6IFZlY3RvcjIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb25PdXQoYSwgYiwgbmV3IFZlY3RvcjIoKSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZGlyZWN0aW9uT3V0KGE6IFZlY3RvcjIsIGI6IFZlY3RvcjIsIG91dDogVmVjdG9yMikge1xyXG4gICAgICAgIGxldCBkeCA9IFZlY3RvcjIuZHgoYSwgYik7XHJcbiAgICAgICAgbGV0IGR5ID0gVmVjdG9yMi5keShhLCBiKTtcclxuXHJcbiAgICAgICAgb3V0LnggPSBkeDtcclxuICAgICAgICBvdXQueSA9IGR5O1xyXG5cclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHRhbmdlbnQoYTogVmVjdG9yMiwgYjogVmVjdG9yMikge1xyXG4gICAgICAgIHJldHVybiBWZWN0b3IyLnRhbmdlbnRPdXQoYSwgYiwgbmV3IFZlY3RvcjIoKSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgdGFuZ2VudE91dChhOiBWZWN0b3IyLCBiOiBWZWN0b3IyLCBvdXQ6IFZlY3RvcjIpIHtcclxuICAgICAgICByZXR1cm4gVmVjdG9yMi5kaXJlY3Rpb25PdXQoYSwgYiwgb3V0KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBub3JtYWwoYTogVmVjdG9yMiwgYjogVmVjdG9yMikge1xyXG4gICAgICAgIHJldHVybiBWZWN0b3IyLm5vcm1hbE91dChhLCBiLCBuZXcgVmVjdG9yMigpKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBub3JtYWxPdXQoYTogVmVjdG9yMiwgYjogVmVjdG9yMiwgb3V0OiBWZWN0b3IyKSB7XHJcbiAgICAgICAgcmV0dXJuIFZlY3RvcjIuZGlyZWN0aW9uT3V0KGEsIGIsIG91dCkucGVycGVuZGljdWxhcml6ZSgpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGRpc3RhbmNlKGE6IFZlY3RvcjIsIGI6IFZlY3RvcjIpIHtcclxuICAgICAgICByZXR1cm4gVmVjdG9yMi5mRGlzdGFuY2UoYS54LCBhLnksIGIueCwgYi55KTtcclxuICAgIH1cclxuXHJcbiAgICBsZXJwVG8ob3RoZXI6IFZlY3RvcjIsIGY6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBWZWN0b3IyLmxlcnBPdXQodGhpcywgb3RoZXIsIHRoaXMsIGYpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBsZXJwKGE6IFZlY3RvcjIsIGI6IFZlY3RvcjIsIGY6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxlcnBPdXQoYSwgYiwgbmV3IFZlY3RvcjIoKSwgZik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxlcnBPdXQoYTogVmVjdG9yMiwgYjogVmVjdG9yMiwgb3V0OiBWZWN0b3IyLCBmOiBudW1iZXIpIHtcclxuICAgICAgICBvdXQueCA9IGEueCArIChiLnggLSBhLngpICogZjtcclxuICAgICAgICBvdXQueSA9IGEueSArIChiLnkgLSBhLnkpICogZjtcclxuXHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZG90KGE6IFZlY3RvcjIsIGI6IFZlY3RvcjIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mRG90KGEueCwgYS55LCBiLngsIGIueSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyb3NzKGE6IFZlY3RvcjIsIGI6IFZlY3RvcjIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mQ3Jvc3MoYS54LCBhLnksIGIueCwgYi55KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYW5nbGVkKGFuZ2xlOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoTWF0aC5jb3MoYW5nbGUpLCBNYXRoLnNpbihhbmdsZSkpO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cclxuICAgIC8vIEhlbHBlciBmdW5jdGlvbnMgdG8gd29yayB3aXRob3V0IHRoZSBWZWN0b3IyIGNsYXNzXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xyXG4gICAgc3RhdGljIGR4KGE6IFZlY3RvcjIsIGI6IFZlY3RvcjIpIHtcclxuICAgICAgICByZXR1cm4gYi54IC0gYS54O1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGR5KGE6IFZlY3RvcjIsIGI6IFZlY3RvcjIpIHtcclxuICAgICAgICByZXR1cm4gYi55IC0gYS55O1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGZEb3QoYXg6IG51bWJlciwgYXk6IG51bWJlciwgYng6IG51bWJlciwgYnk6IG51bWJlcil7XHJcbiAgICAgICAgcmV0dXJuIGF4ICogYnggKyBheSAqIGJ5O1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGZEaXN0YW5jZShheDogbnVtYmVyLCBheTogbnVtYmVyLCBieDogbnVtYmVyLCBieTogbnVtYmVyKXtcclxuICAgICAgICBsZXQgZHggPSBheCAtIGJ4O1xyXG4gICAgICAgIGxldCBkeSA9IGF5IC0gYnk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmZMZW5ndGgoZHgsIGR5KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBmQ3Jvc3MoYXg6IG51bWJlciwgYXk6IG51bWJlciwgYng6IG51bWJlciwgYnk6IG51bWJlcil7XHJcbiAgICAgICAgcmV0dXJuIGF4ICogYnkgLSBheSAqIGJ4O1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGZTcXVhcmVMZW5ndGgoeDogbnVtYmVyLCB5OiBudW1iZXIpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZEb3QoeCwgeSwgeCwgeSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZkFuZ2xlKHg6IG51bWJlciwgeTogbnVtYmVyKXtcclxuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMih5LCB4KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBmTGVuZ3RoKHg6IG51bWJlciwgeTogbnVtYmVyKXtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMuZlNxdWFyZUxlbmd0aCh4LCB5KSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvbmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHRoaXMueCwgdGhpcy55KTtcclxuICAgIH1cclxuXHJcbiAgICB0b1N0cmluZygpe1xyXG4gICAgICAgIHJldHVybiBgKCR7dGhpcy54fSwke3RoaXMueX0pYDtcclxuICAgIH1cclxuICAgIHRvU2hvcnRTdHJpbmcoKXtcclxuICAgICAgICByZXR1cm4gYCgke01hdGgucm91bmQodGhpcy54ICogMTAwKSAvIDEwMH0sJHtNYXRoLnJvdW5kKHRoaXMueSAqIDEwMCkgLyAxMDB9KWA7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJlYWRvbmx5IHplcm86IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigwLCAwKTtcclxuICAgIHN0YXRpYyByZWFkb25seSBvbmU6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigxLCAxKTtcclxuICAgIHN0YXRpYyByZWFkb25seSB1bml0WDogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKDEsIDApO1xyXG4gICAgc3RhdGljIHJlYWRvbmx5IHVuaXRZOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoMCwgMSk7XHJcbn0iLCJleHBvcnQgZW51bSBEb2N1bWVudFVuaXRzIHtcclxuICAgIGluLFxyXG4gICAgbW0sXHJcbiAgICBjbSxcclxuICAgIHB4XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1tVG9JbmNoKG1tOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBtbSAqIDAuMDM5MzcwMDc4NztcclxufVxyXG5mdW5jdGlvbiBjbVRvSW5jaChjbTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gbW1Ub0luY2goY20gKiAxMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGN1bGF0ZVBpeGVsU2l6ZShzaXplOiBudW1iZXIsIGRwaTogbnVtYmVyLCB1bml0OiBEb2N1bWVudFVuaXRzKTogbnVtYmVyIHtcclxuICAgIHN3aXRjaCAodW5pdCkge1xyXG4gICAgICAgIGNhc2UgRG9jdW1lbnRVbml0cy5weDogcmV0dXJuIHNpemU7XHJcbiAgICAgICAgY2FzZSBEb2N1bWVudFVuaXRzLmluOiByZXR1cm4gc2l6ZSAqIGRwaTtcclxuICAgICAgICBjYXNlIERvY3VtZW50VW5pdHMubW06IHJldHVybiBtbVRvSW5jaChzaXplKSAqIGRwaTtcclxuICAgICAgICBjYXNlIERvY3VtZW50VW5pdHMuY206IHJldHVybiBjbVRvSW5jaChzaXplKSAqIGRwaTtcclxuICAgICAgICBkZWZhdWx0OiB0aHJvdyBcIlVua25vd24gdW5pdFwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRTZXR0aW5ncyB7XHJcbiAgICByZWFkb25seSB3aWR0aDogbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gICAgcmVhZG9ubHkgZHBpOiBudW1iZXI7XHJcblxyXG4gICAgcmVhZG9ubHkgdW5pdDogRG9jdW1lbnRVbml0cztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgZHBpOiBudW1iZXIsIHVuaXQ6IERvY3VtZW50VW5pdHMpe1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLmRwaSA9IGRwaTtcclxuICAgICAgICB0aGlzLnVuaXQgPSB1bml0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFsbCB0aGlzIGNhbiBiZSBjYWNoZWQgYmVjYXVzZSBpdCBqdXN0IGNhbGN1bGF0ZSB0aGUgaW5mb3JtYXRpb24gOilcclxuICAgIGdldCBhc3BlY3RSYXRpbygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLndpZHRoIC8gdGhpcy5oZWlnaHQ7XHJcbiAgICB9XHJcbiAgICBnZXQgd2lkdGhJblBpeGVscygpe1xyXG4gICAgICAgIHJldHVybiBjYWxjdWxhdGVQaXhlbFNpemUodGhpcy53aWR0aCwgdGhpcy5kcGksIHRoaXMudW5pdCk7XHJcbiAgICB9XHJcbiAgICBnZXQgaGVpZ2h0SW5QaXhlbHMoKXtcclxuICAgICAgICByZXR1cm4gY2FsY3VsYXRlUGl4ZWxTaXplKHRoaXMuaGVpZ2h0LCB0aGlzLmRwaSwgdGhpcy51bml0KTtcclxuICAgIH1cclxuICAgIGdldCBwaXhlbHNQZXJQb2ludCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRwaSAvIDcyO1xyXG4gICAgfVxyXG4gICAgZ2V0IHBvaW50c1BlclBpeGVsKCl7XHJcbiAgICAgICAgcmV0dXJuIDEgLyB0aGlzLnBpeGVsc1BlclBvaW50O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZWFkb25seSBBNFBvcnRyYWl0ID0gbmV3IERvY3VtZW50U2V0dGluZ3MoMjEwLCAyOTcsIDMwMCwgRG9jdW1lbnRVbml0cy5tbSk7XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgQTRMYW5kc2NhcGUgPSBuZXcgRG9jdW1lbnRTZXR0aW5ncygyOTcsIDIxMCwgMzAwLCBEb2N1bWVudFVuaXRzLm1tKTtcclxuICAgIFxyXG4gICAgc3RhdGljIHJlYWRvbmx5IFNjcmVlbjRLID0gbmV3IERvY3VtZW50U2V0dGluZ3MoMzg0MCwgMjE2MCwgNzIsIERvY3VtZW50VW5pdHMucHgpO1xyXG4gICAgc3RhdGljIHJlYWRvbmx5IFNjcmVlbkhEID0gbmV3IERvY3VtZW50U2V0dGluZ3MoMTkyMCwgMTA4MCwgNzIsIERvY3VtZW50VW5pdHMucHgpO1xyXG5cclxuICAgIHN0YXRpYyByZWFkb25seSBTcXVhcmUgPSBuZXcgRG9jdW1lbnRTZXR0aW5ncygxMDI0LCAxMDI0LCA3MiwgRG9jdW1lbnRVbml0cy5weCk7XHJcblxyXG4gICAgc3RhdGljIHJlYWRvbmx5IERlZmF1bHREUEkgPSA3MjtcclxufSIsImV4cG9ydCBlbnVtIFZpZXdwb3J0Rml0IHtcclxuICAgIEZpbGwsXHJcbiAgICBDb250YWluLFxyXG4gICAgQ292ZXIsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBWaWV3cG9ydFNldHRpbmdze1xyXG4gICAgcmVhZG9ubHkgbWluWDogbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWluWTogbnVtYmVyO1xyXG5cclxuICAgIHJlYWRvbmx5IG1heFg6IG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1heFk6IG51bWJlcjtcclxuXHJcbiAgICByZWFkb25seSBmaXQ6IFZpZXdwb3J0Rml0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1pblg6IG51bWJlciwgbWluWTogbnVtYmVyLCBtYXhYOiBudW1iZXIsIG1heFk6IG51bWJlciwgZml0OiBWaWV3cG9ydEZpdCl7XHJcbiAgICAgICAgdGhpcy5taW5YID0gbWluWDtcclxuICAgICAgICB0aGlzLm1pblkgPSBtaW5ZO1xyXG4gICAgICAgIHRoaXMubWF4WCA9IG1heFg7XHJcbiAgICAgICAgdGhpcy5tYXhZID0gbWF4WTtcclxuXHJcbiAgICAgICAgdGhpcy5maXQgPSBmaXQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHggKCkge3JldHVybiB0aGlzLm1pblg7fVxyXG4gICAgZ2V0IHkgKCkge3JldHVybiB0aGlzLm1pblk7fVxyXG4gICAgZ2V0IGNlbnRlclggKCkge3JldHVybiB0aGlzLnggKyB0aGlzLndpZHRoIC8gMjt9XHJcbiAgICBnZXQgY2VudGVyWSAoKSB7cmV0dXJuIHRoaXMueSArIHRoaXMuaGVpZ2h0IC8gMjt9XHJcblxyXG4gICAgZ2V0IHdpZHRoKCkge3JldHVybiB0aGlzLm1heFggLSB0aGlzLm1pblg7fVxyXG4gICAgZ2V0IGhlaWdodCgpIHtyZXR1cm4gdGhpcy5tYXhZIC0gdGhpcy5taW5ZO31cclxuXHJcbiAgICBnZXQgYXNwZWN0UmF0aW8oKSB7cmV0dXJuIHRoaXMud2lkdGggLyB0aGlzLmhlaWdodDt9XHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcImxpYi9tYXRoL1ZlY3RvcjJcIjtcclxuaW1wb3J0IHsgQ29uc3RyYWludDJEIH0gZnJvbSBcIi4vQ29uc3RyYWludDJEXCI7XHJcbmltcG9ydCB7IFJpZ2lkYm9keTJEIH0gZnJvbSBcIi4vUmlnaWRib2R5MkRcIjtcclxuaW1wb3J0IHsgQ29uc3RyYWludEF0dGFjaG1lbnQyRCB9IGZyb20gXCIuL0NvbnN0cmFpbnRBdHRhY2htZW50MkRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBeGlzQ29uc3RyYWludDJEIGV4dGVuZHMgQ29uc3RyYWludDJEIHtcclxuICAgIGNvbXBsaWFuY2U6IG51bWJlcjtcclxuXHJcbiAgICBvcmlnaW46IFZlY3RvcjI7XHJcbiAgICBheGlzOiBWZWN0b3IyO1xyXG5cclxuICAgIGF0dGFjaG1lbnQ6IENvbnN0cmFpbnRBdHRhY2htZW50MkQ7XHJcblxyXG4gICAgbGFtYmRhOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGF0dGFjaG1lbnQ6IENvbnN0cmFpbnRBdHRhY2htZW50MkQsIG9yaWdpbjogVmVjdG9yMiwgYXhpczogVmVjdG9yMiwgY29tcGxpYW5jZTogbnVtYmVyID0gMCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYXR0YWNobWVudCA9IGF0dGFjaG1lbnQ7XHJcblxyXG4gICAgICAgIHRoaXMub3JpZ2luID0gb3JpZ2luO1xyXG4gICAgICAgIHRoaXMuYXhpcyA9IGF4aXM7XHJcblxyXG4gICAgICAgIHRoaXMuY29tcGxpYW5jZSA9IGNvbXBsaWFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdChkZWx0YTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sYW1iZGEgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX25vcm1hbDogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKCk7XHJcbiAgICBwcml2YXRlIF9nbG9iYWxBdHRhY2htZW50UG9zaXRpb246IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigpO1xyXG4gICAgcHJpdmF0ZSBfbG9jYWxEaXJlY3Rpb246IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigpO1xyXG4gICAgcHJpdmF0ZSBfaW1wdWxzZTogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKCk7XHJcblxyXG4gICAgYXBwbHkoZGVsdGE6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGxldCBnbG9iYWxBdHRhY2htZW50UG9zaXRpb24gPSB0aGlzLmF0dGFjaG1lbnQuZ2V0R2xvYmFsQXR0YWNobWVudFBvc2l0aW9uKHRoaXMuX2dsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbiA9IFZlY3RvcjIuZGlyZWN0aW9uT3V0KGdsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbiwgdGhpcy5vcmlnaW4sIHRoaXMuX25vcm1hbCk7XHJcblxyXG4gICAgICAgIGxldCBhbW91bnQgPSBWZWN0b3IyLmRvdChkaXJlY3Rpb24sIHRoaXMuYXhpcyk7XHJcblxyXG4gICAgICAgIGRpcmVjdGlvbi5zdWJYKGFtb3VudCAqIHRoaXMuYXhpcy54KS5zdWJZKGFtb3VudCAqIHRoaXMuYXhpcy55KTtcclxuXHJcbiAgICAgICAgbGV0IGRpc3RhbmNlID0gZGlyZWN0aW9uLmxlbmd0aDtcclxuICAgICAgICBcclxuICAgICAgICBpZihkaXN0YW5jZSA9PSAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGRpcmVjdGlvbi5zY2FsZSgxIC8gZGlzdGFuY2UpO1xyXG5cclxuICAgICAgICBsZXQgbG9jYWxEaXJlY3Rpb24gPSB0aGlzLmF0dGFjaG1lbnQuZ2V0TG9jYWxEaXJlY3Rpb24oZGlyZWN0aW9uLCB0aGlzLl9sb2NhbERpcmVjdGlvbik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHcxID0gdGhpcy5hdHRhY2htZW50LmdldExvY2FsR2VuZXJhbGl6ZWRJbnZlcnNlTWFzcyhsb2NhbERpcmVjdGlvbik7XHJcbiAgICAgICAgbGV0IHcyID0gMDtcclxuXHJcbiAgICAgICAgbGV0IGFscGhhID0gdGhpcy5jb21wbGlhbmNlIC8gKGRlbHRhICogZGVsdGEpO1xyXG5cclxuICAgICAgICBsZXQgYyA9IGRpc3RhbmNlO1xyXG4gICAgICAgIGxldCBkZWx0YUxhbWJkYSA9ICgtYyArIHRoaXMubGFtYmRhICogYWxwaGEpIC8gKHcxICsgdzIgKyBhbHBoYSk7XHJcblxyXG4gICAgICAgIHRoaXMubGFtYmRhICs9IGRlbHRhTGFtYmRhO1xyXG5cclxuICAgICAgICBsZXQgaW1wdWxzZSA9IHRoaXMuX2ltcHVsc2Uuc2V0KGRpcmVjdGlvbikuc2NhbGUoZGVsdGFMYW1iZGEpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuYXR0YWNobWVudC5ib2R5LmFkZEltbWVkaWF0ZUltcHVsc2VBdCgtaW1wdWxzZS54LCAtaW1wdWxzZS55LCBnbG9iYWxBdHRhY2htZW50UG9zaXRpb24ueCwgZ2xvYmFsQXR0YWNobWVudFBvc2l0aW9uLnksIGRlbHRhKTtcclxuXHJcbiAgICB9XHJcbiAgICBhcHBseURhbXBpbmcoZGVsdGE6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIC8vIE5vdCBpbXBsZW1lbnRlZC4gUmVhZGVyIGV4Y2VyY2lzZT8gOikgXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcImxpYi9tYXRoL1ZlY3RvcjJcIjtcclxuaW1wb3J0IHsgQ29uc3RyYWludDJEIH0gZnJvbSBcIi4vQ29uc3RyYWludDJEXCI7XHJcbmltcG9ydCB7IFJpZ2lkYm9keTJEIH0gZnJvbSBcIi4vUmlnaWRib2R5MkRcIjtcclxuaW1wb3J0IHsgQ29uc3RyYWludEF0dGFjaG1lbnQyRCB9IGZyb20gXCIuL0NvbnN0cmFpbnRBdHRhY2htZW50MkRcIjtcclxuaW1wb3J0IHsgTWF0aEhlbHBlciB9IGZyb20gXCJsaWIvbWF0aC9NYXRoSGVscGVyXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEF4bGVDb3NudHJhaW50MkQgZXh0ZW5kcyBDb25zdHJhaW50MkQge1xyXG4gICAgY29tcGxpYW5jZTogbnVtYmVyO1xyXG5cclxuICAgIGZyb206IFJpZ2lkYm9keTJEO1xyXG4gICAgdG86IFJpZ2lkYm9keTJEO1xyXG5cclxuICAgIGxhbWJkYTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBnZWFyUmF0aW86IG51bWJlciA9IDE7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZnJvbTogUmlnaWRib2R5MkQsIHRvOiBSaWdpZGJvZHkyRCwgY29tcGxpYW5jZTogbnVtYmVyID0gMCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZnJvbSA9IGZyb207XHJcbiAgICAgICAgdGhpcy50byA9IHRvO1xyXG5cclxuICAgICAgICB0aGlzLmNvbXBsaWFuY2UgPSBjb21wbGlhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoZGVsdGE6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubGFtYmRhID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBhcHBseShkZWx0YTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGRpZmYgPSBNYXRoSGVscGVyLnNob3J0ZXN0QW5nbGUoXHJcbiAgICAgICAgICAgIE1hdGhIZWxwZXIubm9ybWFsaXplQW5nbGUodGhpcy5mcm9tLnJvdGF0aW9uICogdGhpcy5nZWFyUmF0aW8pLCBcclxuICAgICAgICAgICAgTWF0aEhlbHBlci5ub3JtYWxpemVBbmdsZSh0aGlzLnRvLnJvdGF0aW9uKSk7XHJcblxyXG4gICAgICAgIGlmKGRpZmYgPT0gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgdzEgPSB0aGlzLmZyb20uaW52ZXJzZUluZXJ0aWE7XHJcbiAgICAgICAgbGV0IHcyID0gdGhpcy50by5pbnZlcnNlSW5lcnRpYSAqIHRoaXMuZ2VhclJhdGlvO1xyXG5cclxuICAgICAgICBsZXQgYWxwaGEgPSB0aGlzLmNvbXBsaWFuY2UgLyAoZGVsdGEgKiBkZWx0YSk7XHJcblxyXG4gICAgICAgIGxldCBjID0gTWF0aC5hYnMoZGlmZik7XHJcbiAgICAgICAgbGV0IGRlbHRhTGFtYmRhID0gKC1jICsgdGhpcy5sYW1iZGEgKiBhbHBoYSkgLyAodzEgKyB3MiArIGFscGhhKTtcclxuXHJcbiAgICAgICAgdGhpcy5sYW1iZGEgKz0gZGVsdGFMYW1iZGE7XHJcblxyXG4gICAgICAgIGxldCByb3RhdGlvbmFsSW1wdWxzZSA9IE1hdGguc2lnbihkaWZmKSAqIGRlbHRhTGFtYmRhO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZnJvbS5yb3RhdGlvbiAtPSByb3RhdGlvbmFsSW1wdWxzZSAqIHRoaXMuZnJvbS5pbnZlcnNlSW5lcnRpYSAvIHRoaXMuZ2VhclJhdGlvO1xyXG4gICAgICAgIHRoaXMuZnJvbS5hbmd1bGFyVmVsb2NpdHkgLT0gcm90YXRpb25hbEltcHVsc2UgKiB0aGlzLmZyb20uaW52ZXJzZUluZXJ0aWEgLyBkZWx0YSAvIHRoaXMuZ2VhclJhdGlvO1xyXG4gICAgICAgIHRoaXMudG8ucm90YXRpb24gKz0gcm90YXRpb25hbEltcHVsc2UgKiB0aGlzLnRvLmludmVyc2VJbmVydGlhO1xyXG4gICAgICAgIHRoaXMudG8uYW5ndWxhclZlbG9jaXR5ICs9IHJvdGF0aW9uYWxJbXB1bHNlICogdGhpcy50by5pbnZlcnNlSW5lcnRpYSAvIGRlbHRhO1xyXG4gICAgfVxyXG4gICAgYXBwbHlEYW1waW5nKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICAvLyBOb3QgaW1wbGVtZW50ZWQuIFJlYWRlciBleGNlcmNpc2U/IDopIFxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbnN0cmFpbnQyRCB7XHJcbiAgICBlbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIFxyXG4gICAgYWJzdHJhY3QgaW5pdChkZWx0YTogbnVtYmVyKTogdm9pZDtcclxuICAgIGFic3RyYWN0IGFwcGx5KGRlbHRhOiBudW1iZXIpOiB2b2lkO1xyXG4gICAgYWJzdHJhY3QgYXBwbHlEYW1waW5nKGRlbHRhOiBudW1iZXIpOiB2b2lkO1xyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCJsaWIvbWF0aC9WZWN0b3IyXCI7XHJcbmltcG9ydCB7IFJpZ2lkYm9keTJEIH0gZnJvbSBcIi4vUmlnaWRib2R5MkRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb25zdHJhaW50QXR0YWNobWVudDJEIHtcclxuICAgIHJlYWRvbmx5IGJvZHk6IFJpZ2lkYm9keTJEO1xyXG4gICAgcmVhZG9ubHkgcmVsYXRpdmVQb3NpdGlvbjogVmVjdG9yMjtcclxuICAgIHJlYWRvbmx5IGlzQ2VudHJhbDogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihib2R5OiBSaWdpZGJvZHkyRCwgcmVsYXRpdmVQb3NpdGlvbj86IFZlY3RvcjIpe1xyXG4gICAgICAgIHRoaXMuYm9keSA9IGJvZHk7XHJcbiAgICAgICAgdGhpcy5yZWxhdGl2ZVBvc2l0aW9uID0gcmVsYXRpdmVQb3NpdGlvbiA/PyBuZXcgVmVjdG9yMigpO1xyXG4gICAgICAgIHRoaXMuaXNDZW50cmFsID0gcmVsYXRpdmVQb3NpdGlvbiA9PT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExvY2FsR2VuZXJhbGl6ZWRJbnZlcnNlTWFzcyhub3JtYWw6IFZlY3RvcjIpOiBudW1iZXIge1xyXG4gICAgICAgIGlmKHRoaXMuaXNDZW50cmFsKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9keS5pbnZlcnNlTWFzcztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBjcm9zcyA9IFZlY3RvcjIuY3Jvc3Mobm9ybWFsLCB0aGlzLnJlbGF0aXZlUG9zaXRpb24pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9keS5pbnZlcnNlTWFzcyArIGNyb3NzICogdGhpcy5ib2R5LmludmVyc2VJbmVydGlhICogY3Jvc3M7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldExvY2FsRGlyZWN0aW9uKGlucHV0OiBWZWN0b3IyLCBvdXRwdXQ6IFZlY3RvcjIpOiBWZWN0b3Iye1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJvZHkuaW52ZXJzZUJhc2lzLnRyYW5zZm9ybU91dChpbnB1dCwgb3V0cHV0KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRHbG9iYWxBdHRhY2htZW50UG9zaXRpb24ob3V0cHV0OiBWZWN0b3IyKTogVmVjdG9yMntcclxuICAgICAgICByZXR1cm4gdGhpcy5ib2R5LmJhc2lzXHJcbiAgICAgICAgICAgIC50cmFuc2Zvcm1PdXQodGhpcy5yZWxhdGl2ZVBvc2l0aW9uLCBvdXRwdXQpXHJcbiAgICAgICAgICAgIC5hZGQodGhpcy5ib2R5LnBvc2l0aW9uKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwibGliL21hdGgvVmVjdG9yMlwiO1xyXG5pbXBvcnQgeyBDb25zdHJhaW50MkQgfSBmcm9tIFwiLi9Db25zdHJhaW50MkRcIjtcclxuaW1wb3J0IHsgUmlnaWRib2R5MkQgfSBmcm9tIFwiLi9SaWdpZGJvZHkyRFwiO1xyXG5pbXBvcnQgeyBDb25zdHJhaW50QXR0YWNobWVudDJEIH0gZnJvbSBcIi4vQ29uc3RyYWludEF0dGFjaG1lbnQyRFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERpc3RhbmNlQ29uc3RyYWludDJEIGV4dGVuZHMgQ29uc3RyYWludDJEIHtcclxuICAgIC8vIENvbXBsaWFuY2UgaXMgdGhlIGludmVyc2Ugb2Ygc3RpZmZuZXNzICgxIC8gc3ByaW5nQ29lZmZpY2llbnQpXHJcbiAgICBjb21wbGlhbmNlOiBudW1iZXI7XHJcbiAgICAvLyBEYW1wZXJjb21wbGlhbmNlIGlzIHRoZSBpbnZlcnNlIG9mIHN0aWZmbmVzcyByZWxhdGVkIHRvIHZlbG9jaXR5ICgxIC8gZGFtcGVyQ29lZmZpY2llbnQpXHJcbiAgICBkYW1wZXJDb21wbGlhbmNlOiBudW1iZXIgPSAtMTtcclxuXHJcbiAgICByZXN0RGlzdGFuY2U6IG51bWJlcjtcclxuXHJcbiAgICBmcm9tOiBDb25zdHJhaW50QXR0YWNobWVudDJEO1xyXG4gICAgdG86IENvbnN0cmFpbnRBdHRhY2htZW50MkQ7XHJcblxyXG4gICAgLy8gVGhlIGxhbWJkYSdzIGFyZSBhY2N1bXVsYXRvcnMgdGhhdCBhcmUgcmVzZXQgcGVyIGZyYW1lLiBUaGlzIHdheSB5b3UgY2FuIGV2YWx1YXRlIHRoZSBjb25zdHJhaW50IG11bHRpcGxlIHRpbWVzIHBlciBmcmFtZSB3aXRob3V0IGluY3JlYXNpbmcgc3RpZmZuZXNzLlxyXG4gICAgbGFtYmRhOiBudW1iZXIgPSAwO1xyXG4gICAgZGFtcGVyTGFtYmRhOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8vIFRoZSB0b3RhbCBmb3JjZSBhcHBsaWVkIG92ZXIgYSBmcmFtZSAoaW4gdGhpcyBjYXNlIHdlIG9ubHkgdGFrZSBzcHJpbmcgZm9yY2UgaW50byBhY2NvdW50LCBidXQgaXQgaXMgdHJpdmlhbCB0byBhZGQgZGFtcGVyIGZvcmNlIGFzIHdlbGwpXHJcbiAgICBmb3JjZUFwcGxpZWQ6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGZyb206IENvbnN0cmFpbnRBdHRhY2htZW50MkQsIHRvOiBDb25zdHJhaW50QXR0YWNobWVudDJELCBkaXN0YW5jZT86IG51bWJlciwgY29tcGxpYW5jZTogbnVtYmVyID0gMCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZnJvbSA9IGZyb207XHJcbiAgICAgICAgdGhpcy50byA9IHRvO1xyXG5cclxuICAgICAgICBpZihkaXN0YW5jZSAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgdGhpcy5yZXN0RGlzdGFuY2UgPSBkaXN0YW5jZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5yZXN0RGlzdGFuY2UgPSB0aGlzLmNhbGN1bGF0ZURpc3RhbmNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29tcGxpYW5jZSA9IGNvbXBsaWFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdChkZWx0YTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgLy8gUmVzZXQgdGhlIGFjY3VtdWxhdG9yc1xyXG4gICAgICAgIHRoaXMubGFtYmRhID0gMDtcclxuICAgICAgICB0aGlzLmRhbXBlckxhbWJkYSA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuZm9yY2VBcHBsaWVkLnNldFplcm8oKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBWYXJpYWJsZXMgbmVlZGVkIGluIHRoZSBhcHBseSBmdW5jdGlvbiB0aGF0IHdlIGRvbid0IHdhbnQgdG8gcmVhbGxvY2F0ZVxyXG4gICAgcHJpdmF0ZSBfZnJvbUdsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbjogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKCk7XHJcbiAgICBwcml2YXRlIF90b0dsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbjogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfZGlyZWN0aW9uOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoKTtcclxuICAgIHByaXZhdGUgX2Zyb21Mb2NhbERpcmVjdGlvbjogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKCk7XHJcbiAgICBwcml2YXRlIF90b0xvY2FsRGlyZWN0aW9uOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoKTtcclxuXHJcbiAgICBwcml2YXRlIF9pbXB1bHNlOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoKTtcclxuXHJcbiAgICBhcHBseShkZWx0YTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYodGhpcy5jb21wbGlhbmNlIDwgMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgZnJvbUdsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbiA9IHRoaXMuZnJvbS5nZXRHbG9iYWxBdHRhY2htZW50UG9zaXRpb24odGhpcy5fZnJvbUdsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbik7XHJcbiAgICAgICAgbGV0IHRvR2xvYmFsQXR0YWNobWVudFBvc2l0aW9uID0gdGhpcy50by5nZXRHbG9iYWxBdHRhY2htZW50UG9zaXRpb24odGhpcy5fdG9HbG9iYWxBdHRhY2htZW50UG9zaXRpb24pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSBWZWN0b3IyLmRpcmVjdGlvbk91dChmcm9tR2xvYmFsQXR0YWNobWVudFBvc2l0aW9uLCB0b0dsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbiwgdGhpcy5fZGlyZWN0aW9uKTtcclxuICAgICAgICBsZXQgZGlzdGFuY2UgPSBkaXJlY3Rpb24ubGVuZ3RoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGRpc3RhbmNlID09IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgZGlyZWN0aW9uLnNjYWxlKDEgLyBkaXN0YW5jZSk7XHJcblxyXG4gICAgICAgIGxldCBmcm9tTG9jYWxEaXJlY3Rpb24gPSB0aGlzLmZyb20uZ2V0TG9jYWxEaXJlY3Rpb24oZGlyZWN0aW9uLCB0aGlzLl9mcm9tTG9jYWxEaXJlY3Rpb24pO1xyXG4gICAgICAgIGxldCB0b0xvY2FsRGlyZWN0aW9uID0gdGhpcy50by5nZXRMb2NhbERpcmVjdGlvbihkaXJlY3Rpb24sIHRoaXMuX3RvTG9jYWxEaXJlY3Rpb24pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB3MSA9IHRoaXMuZnJvbS5nZXRMb2NhbEdlbmVyYWxpemVkSW52ZXJzZU1hc3MoZnJvbUxvY2FsRGlyZWN0aW9uKTtcclxuICAgICAgICBsZXQgdzIgPSB0aGlzLnRvLmdldExvY2FsR2VuZXJhbGl6ZWRJbnZlcnNlTWFzcyh0b0xvY2FsRGlyZWN0aW9uKTtcclxuXHJcbiAgICAgICAgbGV0IGFscGhhID0gdGhpcy5jb21wbGlhbmNlIC8gKGRlbHRhICogZGVsdGEpO1xyXG5cclxuICAgICAgICBsZXQgYyA9IGRpc3RhbmNlIC0gdGhpcy5yZXN0RGlzdGFuY2U7XHJcbiAgICAgICAgbGV0IGRlbHRhTGFtYmRhID0gKC1jICsgdGhpcy5sYW1iZGEgKiBhbHBoYSkgLyAodzEgKyB3MiArIGFscGhhKTtcclxuXHJcbiAgICAgICAgdGhpcy5sYW1iZGEgKz0gZGVsdGFMYW1iZGE7XHJcblxyXG4gICAgICAgIGxldCBpbXB1bHNlID0gdGhpcy5faW1wdWxzZS5zZXQoZGlyZWN0aW9uKS5zY2FsZShkZWx0YUxhbWJkYSk7XHJcblxyXG4gICAgICAgIHRoaXMuZnJvbS5ib2R5LmFkZEltbWVkaWF0ZUltcHVsc2VBdCgtaW1wdWxzZS54LCAtaW1wdWxzZS55LCBmcm9tR2xvYmFsQXR0YWNobWVudFBvc2l0aW9uLngsIGZyb21HbG9iYWxBdHRhY2htZW50UG9zaXRpb24ueSwgZGVsdGEpO1xyXG4gICAgICAgIHRoaXMudG8uYm9keS5hZGRJbW1lZGlhdGVJbXB1bHNlQXQoaW1wdWxzZS54LCBpbXB1bHNlLnksIHRvR2xvYmFsQXR0YWNobWVudFBvc2l0aW9uLngsIHRvR2xvYmFsQXR0YWNobWVudFBvc2l0aW9uLnksIGRlbHRhKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBKdXN0IGhvdXNlIGtlZXBpbmcsIG5vdCBuZWVkZWQgZm9yIHRoZSBhY3R1YWwgY2FsY3VsYXRpb25zXHJcbiAgICAgICAgdGhpcy5mb3JjZUFwcGxpZWRcclxuICAgICAgICAgICAgLmFkZFgoaW1wdWxzZS54IC8gKGRlbHRhICogZGVsdGEpKVxyXG4gICAgICAgICAgICAuYWRkWShpbXB1bHNlLnkgLyAoZGVsdGEgKiBkZWx0YSkpO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgLy8gVmFyaWFibGVzIG5lZWRlZCBpbiB0aGUgYXBwbHlEYW1waW5nIGZ1bmN0aW9uIHRoYXQgd2UgZG9uJ3Qgd2FudCB0byByZWFsbG9jYXRlXHJcbiAgICBwcml2YXRlIF9mcm9tVmVsb2NpdHk6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigpO1xyXG4gICAgcHJpdmF0ZSBfdG9WZWxvY2l0eTogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKCk7XHJcbiAgICBwcml2YXRlIF9kYW1wZXJJbXB1bHNlOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoKTtcclxuXHJcbiAgICBhcHBseURhbXBpbmcoZGVsdGE6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmRhbXBlckNvbXBsaWFuY2UgPCAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBmcm9tR2xvYmFsQXR0YWNobWVudFBvc2l0aW9uID0gdGhpcy5mcm9tLmdldEdsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbih0aGlzLl9mcm9tR2xvYmFsQXR0YWNobWVudFBvc2l0aW9uKTtcclxuICAgICAgICBsZXQgdG9HbG9iYWxBdHRhY2htZW50UG9zaXRpb24gPSB0aGlzLnRvLmdldEdsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbih0aGlzLl90b0dsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbiA9IFZlY3RvcjIuZGlyZWN0aW9uT3V0KGZyb21HbG9iYWxBdHRhY2htZW50UG9zaXRpb24sIHRvR2xvYmFsQXR0YWNobWVudFBvc2l0aW9uLCB0aGlzLl9kaXJlY3Rpb24pO1xyXG4gICAgICAgIGxldCBkaXN0YW5jZSA9IGRpcmVjdGlvbi5sZW5ndGg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZGlzdGFuY2UgPT0gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBkaXJlY3Rpb24uc2NhbGUoMSAvIGRpc3RhbmNlKTtcclxuXHJcbiAgICAgICAgbGV0IGZyb21WZWxvY2l0eSA9IHRoaXMuZnJvbS5ib2R5LmdldFBvaW50VmVsb2NpdHkoZnJvbUdsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbi54LCBmcm9tR2xvYmFsQXR0YWNobWVudFBvc2l0aW9uLnksIHRoaXMuX2Zyb21WZWxvY2l0eSk7XHJcbiAgICAgICAgbGV0IHRvVmVsb2NpdHkgPSB0aGlzLnRvLmJvZHkuZ2V0UG9pbnRWZWxvY2l0eSh0b0dsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbi54LCB0b0dsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbi55LCB0aGlzLl90b1ZlbG9jaXR5KTtcclxuXHJcbiAgICAgICAgbGV0IHZlbG9jaXR5RGlmZmVyZW5jZSA9IFZlY3RvcjIuZG90KHRvVmVsb2NpdHksIGRpcmVjdGlvbikgLSBWZWN0b3IyLmRvdChmcm9tVmVsb2NpdHksIGRpcmVjdGlvbik7XHJcblxyXG4gICAgICAgIGxldCBmcm9tTG9jYWxEaXJlY3Rpb24gPSB0aGlzLmZyb20uZ2V0TG9jYWxEaXJlY3Rpb24oZGlyZWN0aW9uLCB0aGlzLl9mcm9tTG9jYWxEaXJlY3Rpb24pO1xyXG4gICAgICAgIGxldCB0b0xvY2FsRGlyZWN0aW9uID0gdGhpcy50by5nZXRMb2NhbERpcmVjdGlvbihkaXJlY3Rpb24sIHRoaXMuX3RvTG9jYWxEaXJlY3Rpb24pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB3MSA9IHRoaXMuZnJvbS5nZXRMb2NhbEdlbmVyYWxpemVkSW52ZXJzZU1hc3MoZnJvbUxvY2FsRGlyZWN0aW9uKTtcclxuICAgICAgICBsZXQgdzIgPSB0aGlzLnRvLmdldExvY2FsR2VuZXJhbGl6ZWRJbnZlcnNlTWFzcyh0b0xvY2FsRGlyZWN0aW9uKTtcclxuXHJcbiAgICAgICAgbGV0IGFscGhhID0gdGhpcy5kYW1wZXJDb21wbGlhbmNlIC8gKGRlbHRhKTtcclxuXHJcbiAgICAgICAgbGV0IGMgPSB2ZWxvY2l0eURpZmZlcmVuY2U7XHJcbiAgICAgICAgbGV0IGRlbHRhTGFtYmRhID0gKC1jICsgdGhpcy5kYW1wZXJMYW1iZGEgKiBhbHBoYSkgLyAodzEgKyB3MiArIGFscGhhKTtcclxuXHJcbiAgICAgICAgdGhpcy5kYW1wZXJMYW1iZGEgKz0gZGVsdGFMYW1iZGE7XHJcblxyXG4gICAgICAgIGxldCBpbXB1bHNlID0gdGhpcy5fZGFtcGVySW1wdWxzZS5zZXQoZGlyZWN0aW9uKS5zY2FsZShkZWx0YUxhbWJkYSAqIGRlbHRhKTtcclxuXHJcbiAgICAgICAgdGhpcy5mcm9tLmJvZHkuYWRkVmVsb2NpdHlJbXB1bHNlQXQoLWltcHVsc2UueCwgLWltcHVsc2UueSwgZnJvbUdsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbi54LCBmcm9tR2xvYmFsQXR0YWNobWVudFBvc2l0aW9uLnksIGRlbHRhKTtcclxuICAgICAgICB0aGlzLnRvLmJvZHkuYWRkVmVsb2NpdHlJbXB1bHNlQXQoaW1wdWxzZS54LCBpbXB1bHNlLnksIHRvR2xvYmFsQXR0YWNobWVudFBvc2l0aW9uLngsIHRvR2xvYmFsQXR0YWNobWVudFBvc2l0aW9uLnksIGRlbHRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cclxuICAgIC8vIEhlbHBlciBmdW5jdGlvbnNcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xyXG4gICAgcmVzZXRSZXN0RGlzdGFuY2UoKXtcclxuICAgICAgICB0aGlzLnJlc3REaXN0YW5jZSA9IHRoaXMuY2FsY3VsYXRlRGlzdGFuY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBjYWxjdWxhdGVEaXN0YW5jZSgpe1xyXG4gICAgICAgIGxldCBmcm9tR2xvYmFsQXR0YWNobWVudFBvc2l0aW9uID0gdGhpcy5mcm9tLmdldEdsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbih0aGlzLl9mcm9tR2xvYmFsQXR0YWNobWVudFBvc2l0aW9uKTtcclxuICAgICAgICBsZXQgdG9HbG9iYWxBdHRhY2htZW50UG9zaXRpb24gPSB0aGlzLnRvLmdldEdsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbih0aGlzLl90b0dsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbiA9IFZlY3RvcjIuZGlyZWN0aW9uT3V0KGZyb21HbG9iYWxBdHRhY2htZW50UG9zaXRpb24sIHRvR2xvYmFsQXR0YWNobWVudFBvc2l0aW9uLCB0aGlzLl9kaXJlY3Rpb24pO1xyXG4gICAgICAgIGxldCBkaXN0YW5jZSA9IGRpcmVjdGlvbi5sZW5ndGg7XHJcblxyXG4gICAgICAgIHJldHVybiBkaXN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3ByaW5nQ29lZmZpY2llbnQoKXtcclxuICAgICAgICBpZih0aGlzLmNvbXBsaWFuY2UgPCAwKSByZXR1cm4gMDtcclxuXHJcbiAgICAgICAgcmV0dXJuIDEgLyB0aGlzLmNvbXBsaWFuY2U7XHJcbiAgICB9XHJcbiAgICBzZXQgc3ByaW5nQ29lZmZpY2llbnQodjogbnVtYmVyKXtcclxuICAgICAgICBpZih2IDw9IDApe1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBsaWFuY2UgPSAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5jb21wbGlhbmNlID0gMSAvIHY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBkYW1wZXJDb2VmZmljaWVudCgpe1xyXG4gICAgICAgIGlmKHRoaXMuZGFtcGVyQ29tcGxpYW5jZSA8IDApIHJldHVybiAwO1xyXG5cclxuICAgICAgICByZXR1cm4gMSAvIHRoaXMuZGFtcGVyQ29tcGxpYW5jZTtcclxuICAgIH1cclxuICAgIHNldCBkYW1wZXJDb2VmZmljaWVudCh2OiBudW1iZXIpe1xyXG4gICAgICAgIGlmKHYgPD0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMuZGFtcGVyQ29tcGxpYW5jZSA9IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLmRhbXBlckNvbXBsaWFuY2UgPSAxIC8gdjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcImxpYi9tYXRoL1ZlY3RvcjJcIjtcclxuaW1wb3J0IHsgQ29uc3RyYWludDJEIH0gZnJvbSBcIi4vQ29uc3RyYWludDJEXCI7XHJcbmltcG9ydCB7IFJpZ2lkYm9keTJEIH0gZnJvbSBcIi4vUmlnaWRib2R5MkRcIjtcclxuaW1wb3J0IHsgQ29uc3RyYWludEF0dGFjaG1lbnQyRCB9IGZyb20gXCIuL0NvbnN0cmFpbnRBdHRhY2htZW50MkRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQaW5Db25zdHJhaW50MkQgZXh0ZW5kcyBDb25zdHJhaW50MkQge1xyXG4gICAgY29tcGxpYW5jZTogbnVtYmVyO1xyXG4gICAgZGFtcGVyQ29tcGxpYW5jZTogbnVtYmVyID0gLTE7XHJcblxyXG4gICAgb3JpZ2luOiBWZWN0b3IyO1xyXG5cclxuICAgIGF0dGFjaG1lbnQ6IENvbnN0cmFpbnRBdHRhY2htZW50MkQ7XHJcblxyXG4gICAgbGFtYmRhOiBudW1iZXIgPSAwO1xyXG4gICAgZGFtcGVyTGFtYmRhOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGF0dGFjaG1lbnQ6IENvbnN0cmFpbnRBdHRhY2htZW50MkQsIG9yaWdpbj86IFZlY3RvcjIsIGNvbXBsaWFuY2U6IG51bWJlciA9IDApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmF0dGFjaG1lbnQgPSBhdHRhY2htZW50O1xyXG5cclxuICAgICAgICBpZihvcmlnaW4gPT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHRoaXMub3JpZ2luID0gYXR0YWNobWVudC5ib2R5LnBvc2l0aW9uLmNsb25lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMub3JpZ2luID0gb3JpZ2luO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb21wbGlhbmNlID0gY29tcGxpYW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxhbWJkYSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYW1wZXJMYW1iZGEgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX25vcm1hbDogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKCk7XHJcbiAgICBwcml2YXRlIF9nbG9iYWxBdHRhY2htZW50UG9zaXRpb246IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigpO1xyXG4gICAgcHJpdmF0ZSBfbG9jYWxEaXJlY3Rpb246IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigpO1xyXG4gICAgcHJpdmF0ZSBfaW1wdWxzZTogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKCk7XHJcblxyXG4gICAgYXBwbHkoZGVsdGE6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGxldCBnbG9iYWxBdHRhY2htZW50UG9zaXRpb24gPSB0aGlzLmF0dGFjaG1lbnQuZ2V0R2xvYmFsQXR0YWNobWVudFBvc2l0aW9uKHRoaXMuX2dsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbiA9IFZlY3RvcjIuZGlyZWN0aW9uT3V0KGdsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbiwgdGhpcy5vcmlnaW4sIHRoaXMuX25vcm1hbCk7XHJcbiAgICAgICAgbGV0IGRpc3RhbmNlID0gZGlyZWN0aW9uLmxlbmd0aDtcclxuICAgICAgICBcclxuICAgICAgICBpZihkaXN0YW5jZSA9PSAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGRpcmVjdGlvbi5zY2FsZSgxIC8gZGlzdGFuY2UpO1xyXG5cclxuICAgICAgICBsZXQgbG9jYWxEaXJlY3Rpb24gPSB0aGlzLmF0dGFjaG1lbnQuZ2V0TG9jYWxEaXJlY3Rpb24oZGlyZWN0aW9uLCB0aGlzLl9sb2NhbERpcmVjdGlvbik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHcxID0gdGhpcy5hdHRhY2htZW50LmdldExvY2FsR2VuZXJhbGl6ZWRJbnZlcnNlTWFzcyhsb2NhbERpcmVjdGlvbik7XHJcbiAgICAgICAgbGV0IHcyID0gMDtcclxuXHJcbiAgICAgICAgbGV0IGFscGhhID0gdGhpcy5jb21wbGlhbmNlIC8gKGRlbHRhICogZGVsdGEpO1xyXG5cclxuICAgICAgICBsZXQgYyA9IGRpc3RhbmNlO1xyXG4gICAgICAgIGxldCBkZWx0YUxhbWJkYSA9ICgtYyArIHRoaXMubGFtYmRhICogYWxwaGEpIC8gKHcxICsgdzIgKyBhbHBoYSk7XHJcblxyXG4gICAgICAgIHRoaXMubGFtYmRhICs9IGRlbHRhTGFtYmRhO1xyXG5cclxuICAgICAgICBsZXQgaW1wdWxzZSA9IHRoaXMuX2ltcHVsc2Uuc2V0KGRpcmVjdGlvbikuc2NhbGUoZGVsdGFMYW1iZGEpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuYXR0YWNobWVudC5ib2R5LmFkZEltbWVkaWF0ZUltcHVsc2VBdCgtaW1wdWxzZS54LCAtaW1wdWxzZS55LCBnbG9iYWxBdHRhY2htZW50UG9zaXRpb24ueCwgZ2xvYmFsQXR0YWNobWVudFBvc2l0aW9uLnksIGRlbHRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF92ZWxvY2l0eTogVmVjdG9yMiA9IG5ldyAgVmVjdG9yMigpO1xyXG4gICAgcHJpdmF0ZSBfZGFtcGVySW1wdWxzZTogVmVjdG9yMiA9IG5ldyAgVmVjdG9yMigpO1xyXG5cclxuICAgIGFwcGx5RGFtcGluZyhkZWx0YTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYodGhpcy5kYW1wZXJDb21wbGlhbmNlIDwgMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgZ2xvYmFsQXR0YWNobWVudFBvc2l0aW9uID0gdGhpcy5hdHRhY2htZW50LmdldEdsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbih0aGlzLl9nbG9iYWxBdHRhY2htZW50UG9zaXRpb24pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB2ZWxvY2l0eSA9IHRoaXMuYXR0YWNobWVudC5ib2R5LmdldFBvaW50VmVsb2NpdHkoZ2xvYmFsQXR0YWNobWVudFBvc2l0aW9uLngsIGdsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbi55LCB0aGlzLl92ZWxvY2l0eSk7XHJcbiAgICAgICAgbGV0IGFtb3VudCA9IHZlbG9jaXR5Lmxlbmd0aDtcclxuICAgICAgICBcclxuICAgICAgICBpZihhbW91bnQgPT0gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgZGlyZWN0aW9uID0gdGhpcy5fbm9ybWFsLnNldCh2ZWxvY2l0eSkuc2NhbGUoMSAvIGFtb3VudCk7XHJcblxyXG4gICAgICAgIGxldCBsb2NhbERpcmVjdGlvbiA9IHRoaXMuYXR0YWNobWVudC5nZXRMb2NhbERpcmVjdGlvbihkaXJlY3Rpb24sIHRoaXMuX2xvY2FsRGlyZWN0aW9uKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgdzEgPSB0aGlzLmF0dGFjaG1lbnQuZ2V0TG9jYWxHZW5lcmFsaXplZEludmVyc2VNYXNzKGxvY2FsRGlyZWN0aW9uKTtcclxuICAgICAgICBsZXQgdzIgPSAwO1xyXG5cclxuICAgICAgICBsZXQgYWxwaGEgPSB0aGlzLmRhbXBlckNvbXBsaWFuY2UgLyAoZGVsdGEpO1xyXG5cclxuICAgICAgICBsZXQgYyA9IC1hbW91bnQ7XHJcbiAgICAgICAgbGV0IGRlbHRhTGFtYmRhID0gKC1jICsgdGhpcy5kYW1wZXJMYW1iZGEgKiBhbHBoYSkgLyAodzEgKyB3MiArIGFscGhhKTtcclxuXHJcbiAgICAgICAgdGhpcy5kYW1wZXJMYW1iZGEgKz0gZGVsdGFMYW1iZGE7XHJcblxyXG4gICAgICAgIGxldCBpbXB1bHNlID0gdGhpcy5fZGFtcGVySW1wdWxzZS5zZXQoZGlyZWN0aW9uKS5zY2FsZShkZWx0YUxhbWJkYSAqIGRlbHRhKTtcclxuXHJcbiAgICAgICAgdGhpcy5hdHRhY2htZW50LmJvZHkuYWRkVmVsb2NpdHlJbXB1bHNlQXQoLWltcHVsc2UueCwgLWltcHVsc2UueSwgZ2xvYmFsQXR0YWNobWVudFBvc2l0aW9uLngsIGdsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbi55LCBkZWx0YSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBNYXRoSGVscGVyIH0gZnJvbSBcImxpYi9tYXRoL01hdGhIZWxwZXJcIjtcclxuaW1wb3J0IHsgTWF0cml4MiB9IGZyb20gXCJsaWIvbWF0aC9NYXRyaXgyXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwibGliL21hdGgvVmVjdG9yMlwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJpZ2lkYm9keTJEIHtcclxuICAgIGludmVyc2VNYXNzOiBudW1iZXI7XHJcbiAgICBpbnZlcnNlSW5lcnRpYTogbnVtYmVyO1xyXG5cclxuICAgIHBvc2l0aW9uOiBWZWN0b3IyO1xyXG4gICAgXHJcbiAgICB2ZWxvY2l0eTogVmVjdG9yMjtcclxuICAgIGFuZ3VsYXJWZWxvY2l0eTogbnVtYmVyO1xyXG4gICAgXHJcbiAgICBwcml2YXRlIF9wcmV2aW91c1Bvc2l0aW9uOiBWZWN0b3IyO1xyXG4gICAgcHJpdmF0ZSBfcHJldmlvdXNSb3RhdGlvbjogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgX2Jhc2lzRGlydHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2Jhc2lzSW52ZXJzZURpcnR5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9iYXNpczogTWF0cml4MjtcclxuICAgIHByaXZhdGUgX2Jhc2lzSW52ZXJzZTogTWF0cml4MjtcclxuXHJcbiAgICBwcml2YXRlIF9yb3RhdGlvbjogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IG5ldyBWZWN0b3IyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX3JvdGF0aW9uID0gMDtcclxuICAgICAgICB0aGlzLl9wcmV2aW91c1Bvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5jbG9uZSgpO1xyXG4gICAgICAgIHRoaXMuX3ByZXZpb3VzUm90YXRpb24gPSB0aGlzLl9yb3RhdGlvbjtcclxuXHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBWZWN0b3IyKCk7XHJcbiAgICAgICAgdGhpcy5hbmd1bGFyVmVsb2NpdHkgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLmludmVyc2VNYXNzID0gMTtcclxuICAgICAgICB0aGlzLmludmVyc2VJbmVydGlhID0gMTtcclxuXHJcbiAgICAgICAgdGhpcy5fYmFzaXMgPSBNYXRyaXgyLmlkZW50aXR5KCk7XHJcbiAgICAgICAgdGhpcy5fYmFzaXNJbnZlcnNlID0gTWF0cml4Mi5pZGVudGl0eSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBtYXNzKCl7XHJcbiAgICAgICAgcmV0dXJuIDEgLyB0aGlzLmludmVyc2VNYXNzO1xyXG4gICAgfVxyXG4gICAgc2V0IG1hc3ModjogbnVtYmVyKXtcclxuICAgICAgICB0aGlzLmludmVyc2VNYXNzID0gMSAvIHY7XHJcbiAgICB9XHJcbiAgICBnZXQgaW5lcnRpYSgpIHtcclxuICAgICAgICByZXR1cm4gMSAvIHRoaXMuaW52ZXJzZUluZXJ0aWE7XHJcbiAgICB9XHJcbiAgICBzZXQgaW5lcnRpYSh2OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmludmVyc2VJbmVydGlhID0gMSAvIHY7XHJcbiAgICB9XHJcbiAgICBnZXQgYmFzaXMoKTogTWF0cml4MntcclxuICAgICAgICBpZih0aGlzLl9iYXNpc0RpcnR5KXtcclxuICAgICAgICAgICAgdGhpcy5zeW5jQmFzaXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Jhc2lzO1xyXG4gICAgfVxyXG4gICAgZ2V0IGludmVyc2VCYXNpcygpOiBNYXRyaXgye1xyXG4gICAgICAgIGlmKHRoaXMuX2Jhc2lzSW52ZXJzZURpcnR5KXtcclxuICAgICAgICAgICAgdGhpcy5zeW5jQmFzaXNJbnZlcnNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9iYXNpc0ludmVyc2U7XHJcbiAgICB9XHJcbiAgICBnZXQgcm90YXRpb24oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcm90YXRpb247XHJcbiAgICB9XHJcbiAgICBzZXQgcm90YXRpb24ocm90YXRpb246IG51bWJlcil7XHJcbiAgICAgICAgdGhpcy5fcm90YXRpb24gPSByb3RhdGlvbjtcclxuXHJcbiAgICAgICAgdGhpcy5tYXJrQmFzaXNEaXJ0eSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcGx5TW90aW9uKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnZlbG9jaXR5LnggKiBkZWx0YTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy52ZWxvY2l0eS55ICogZGVsdGE7XHJcblxyXG4gICAgICAgIHRoaXMucm90YXRpb24gKz0gdGhpcy5hbmd1bGFyVmVsb2NpdHkgKiBkZWx0YTtcclxuICAgIH1cclxuXHJcbiAgICByZWNhbGN1bGF0ZVZlbG9jaXR5KGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkueCA9IFZlY3RvcjIuZHgodGhpcy5fcHJldmlvdXNQb3NpdGlvbiwgdGhpcy5wb3NpdGlvbikgLyBkZWx0YTtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSBWZWN0b3IyLmR5KHRoaXMuX3ByZXZpb3VzUG9zaXRpb24sIHRoaXMucG9zaXRpb24pIC8gZGVsdGE7XHJcblxyXG4gICAgICAgIHRoaXMuX3JvdGF0aW9uID0gTWF0aEhlbHBlci5ub3JtYWxpemVBbmdsZSh0aGlzLl9yb3RhdGlvbik7XHJcbiAgICAgICAgdGhpcy5fcHJldmlvdXNSb3RhdGlvbiA9IE1hdGhIZWxwZXIubm9ybWFsaXplQW5nbGUodGhpcy5fcHJldmlvdXNSb3RhdGlvbik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGFuZ2xlRGlmZiA9IE1hdGhIZWxwZXIuc2hvcnRlc3RBbmdsZSh0aGlzLl9wcmV2aW91c1JvdGF0aW9uLCB0aGlzLl9yb3RhdGlvbik7XHJcblxyXG4gICAgICAgIHRoaXMuYW5ndWxhclZlbG9jaXR5ID0gYW5nbGVEaWZmIC8gZGVsdGE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fcHJldmlvdXNQb3NpdGlvbi5zZXQodGhpcy5wb3NpdGlvbik7XHJcbiAgICAgICAgdGhpcy5fcHJldmlvdXNSb3RhdGlvbiA9IHRoaXMuX3JvdGF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHJvdGF0ZShhbmdsZTogbnVtYmVyKTogUmlnaWRib2R5MkR7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbiArPSBhbmdsZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHRyYW5zbGF0ZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IFJpZ2lkYm9keTJEe1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24uYWRkWCh4KS5hZGRZKHkpO1xyXG4gICAgICAgIHRoaXMuX3ByZXZpb3VzUG9zaXRpb24uYWRkWCh4KS5hZGRZKHkpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHRyYW5zbGF0ZVRvKHg6IG51bWJlciwgeTogbnVtYmVyKTogUmlnaWRib2R5MkR7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5hcHBseSh4LCB5KTtcclxuICAgICAgICB0aGlzLl9wcmV2aW91c1Bvc2l0aW9uLmFwcGx5KHgsIHkpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBhZGRJbW1lZGlhdGVGb3JjZShmeDogbnVtYmVyLCBmeTogbnVtYmVyLCBkZWx0YTogbnVtYmVyKXtcclxuICAgICAgICAvLyBGID0gbSAqIGFcclxuICAgICAgICAvLyBhID0gRiAvIG1cclxuXHJcbiAgICAgICAgbGV0IGF4ID0gZnggKiB0aGlzLmludmVyc2VNYXNzO1xyXG4gICAgICAgIGxldCBheSA9IGZ5ICogdGhpcy5pbnZlcnNlTWFzcztcclxuXHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eS54ICs9IGF4ICogZGVsdGE7XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eS55ICs9IGF5ICogZGVsdGE7XHJcblxyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSBheCAqIGRlbHRhICogZGVsdGE7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IGF5ICogZGVsdGEgKiBkZWx0YTtcclxuICAgIH1cclxuICAgIGFkZEltbWVkaWF0ZUltcHVsc2UoaXg6IG51bWJlciwgaXk6IG51bWJlciwgZGVsdGE6IG51bWJlcil7XHJcbiAgICAgICAgbGV0IGR4ID0gaXggKiB0aGlzLmludmVyc2VNYXNzO1xyXG4gICAgICAgIGxldCBkeSA9IGl5ICogdGhpcy5pbnZlcnNlTWFzcztcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gZHg7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IGR5O1xyXG5cclxuICAgICAgICB0aGlzLnZlbG9jaXR5LnggKz0gZHggLyBkZWx0YTtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5LnkgKz0gZHkgLyBkZWx0YTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYWRkSW1tZWRpYXRlSW1wdWxzZUF0KGl4OiBudW1iZXIsIGl5OiBudW1iZXIsIHB4OiBudW1iZXIsIHB5OiBudW1iZXIsIGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICAgIGxldCBkeCA9IGl4ICogdGhpcy5pbnZlcnNlTWFzcztcclxuICAgICAgICBsZXQgZHkgPSBpeSAqIHRoaXMuaW52ZXJzZU1hc3M7XHJcblxyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSBkeDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gZHk7XHJcblxyXG4gICAgICAgIHRoaXMudmVsb2NpdHkueCArPSBkeCAvIGRlbHRhO1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkueSArPSBkeSAvIGRlbHRhO1xyXG5cclxuICAgICAgICBsZXQgYW5ndWxhckltcHVsc2UgPSBWZWN0b3IyLmZDcm9zcyhpeCwgaXksIHB4IC0gdGhpcy5wb3NpdGlvbi54LCBweSAtIHRoaXMucG9zaXRpb24ueSkgKiB0aGlzLmludmVyc2VJbmVydGlhO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhNYXRoLnJvdW5kKGFuZ3VsYXJJbXB1bHNlICogMTApIC8gMTApO1xyXG5cclxuICAgICAgICB0aGlzLnJvdGF0aW9uIC09IGFuZ3VsYXJJbXB1bHNlO1xyXG4gICAgICAgIHRoaXMuYW5ndWxhclZlbG9jaXR5IC09IGFuZ3VsYXJJbXB1bHNlIC8gZGVsdGE7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFkZFZlbG9jaXR5SW1wdWxzZUF0KGl4OiBudW1iZXIsIGl5OiBudW1iZXIsIHB4OiBudW1iZXIsIHB5OiBudW1iZXIsIGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICAgIGxldCBkeCA9IGl4ICogdGhpcy5pbnZlcnNlTWFzcztcclxuICAgICAgICBsZXQgZHkgPSBpeSAqIHRoaXMuaW52ZXJzZU1hc3M7XHJcblxyXG4gICAgICAgIHRoaXMudmVsb2NpdHkueCArPSBkeCAvIGRlbHRhO1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkueSArPSBkeSAvIGRlbHRhO1xyXG5cclxuICAgICAgICBsZXQgYW5ndWxhckltcHVsc2UgPSBWZWN0b3IyLmZDcm9zcyhpeCwgaXksIHB4IC0gdGhpcy5wb3NpdGlvbi54LCBweSAtIHRoaXMucG9zaXRpb24ueSkgKiB0aGlzLmludmVyc2VJbmVydGlhO1xyXG5cclxuICAgICAgICB0aGlzLmFuZ3VsYXJWZWxvY2l0eSAtPSBhbmd1bGFySW1wdWxzZSAvIGRlbHRhO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBvaW50VmVsb2NpdHkoeDogbnVtYmVyLCB5OiBudW1iZXIsIG91dHB1dDogVmVjdG9yMik6IFZlY3RvcjJ7XHJcbiAgICAgICAgb3V0cHV0LnggPSB0aGlzLnZlbG9jaXR5Lng7XHJcbiAgICAgICAgb3V0cHV0LnkgPSB0aGlzLnZlbG9jaXR5Lnk7XHJcblxyXG4gICAgICAgIGxldCBkeCA9IHggLSB0aGlzLnBvc2l0aW9uLng7XHJcbiAgICAgICAgbGV0IGR5ID0geSAtIHRoaXMucG9zaXRpb24ueTtcclxuXHJcbiAgICAgICAgb3V0cHV0LnggKz0gLWR5ICogdGhpcy5hbmd1bGFyVmVsb2NpdHk7XHJcbiAgICAgICAgb3V0cHV0LnkgKz0gZHggKiB0aGlzLmFuZ3VsYXJWZWxvY2l0eTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1hcmtCYXNpc0RpcnR5KCl7XHJcbiAgICAgICAgdGhpcy5fYmFzaXNEaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fYmFzaXNJbnZlcnNlRGlydHkgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3luY0Jhc2lzKCl7XHJcbiAgICAgICAgdGhpcy5fYmFzaXMuc2V0QXNSb3RhdGlvbih0aGlzLnJvdGF0aW9uKTtcclxuICAgICAgICB0aGlzLl9iYXNpc0RpcnR5ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzeW5jQmFzaXNJbnZlcnNlKCl7XHJcbiAgICAgICAgLy8gdGhpcy5fYmFzaXNJbnZlcnNlLnNldEFzKHRoaXMuYmFzaXMpLmludmVyc2UoKTtcclxuICAgICAgICB0aGlzLl9iYXNpc0ludmVyc2Uuc2V0QXNSb3RhdGlvbigtdGhpcy5yb3RhdGlvbik7XHJcbiAgICAgICAgdGhpcy5fYmFzaXNJbnZlcnNlRGlydHkgPSBmYWxzZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEdyYXBoaWNzMkQgfSBmcm9tIFwibGliL2dyYXBoaWNzL0dyYXBoaWNzMkRcIjtcclxuaW1wb3J0IHsgUmlnaWRib2R5MkQgfSBmcm9tIFwiLi4vUmlnaWRib2R5MkRcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCJsaWIvbWF0aC9WZWN0b3IyXCI7XHJcbmltcG9ydCB7IERpc3RhbmNlQ29uc3RyYWludDJEIH0gZnJvbSBcIi4uL0Rpc3RhbmNlQ29uc3RyYWludDJEXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGlzdGFuY2VDb25zdHJhaW50R3JhcGhpYzJEIHtcclxuICAgIGNvbnN0cmFpbnQ6IERpc3RhbmNlQ29uc3RyYWludDJEO1xyXG5cclxuICAgIHBhdGg6IFBhdGgyRDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25zdHJhaW50OiBEaXN0YW5jZUNvbnN0cmFpbnQyRCwgcGF0aDogUGF0aDJEKXtcclxuICAgICAgICB0aGlzLmNvbnN0cmFpbnQgPSBjb25zdHJhaW50O1xyXG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcG9zaXRpb25Gcm9tOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoKTtcclxuICAgIHByaXZhdGUgX3Bvc2l0aW9uVG86IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigpO1xyXG5cclxuICAgIGRyYXcoZ3JhcGhpY3M6IEdyYXBoaWNzMkQpe1xyXG4gICAgICAgIGdyYXBoaWNzLnB1c2goKTtcclxuXHJcbiAgICAgICAgbGV0IGZyb20gPSB0aGlzLmNvbnN0cmFpbnQuZnJvbS5nZXRHbG9iYWxBdHRhY2htZW50UG9zaXRpb24odGhpcy5fcG9zaXRpb25Gcm9tKTtcclxuICAgICAgICBsZXQgdG8gPSB0aGlzLmNvbnN0cmFpbnQudG8uZ2V0R2xvYmFsQXR0YWNobWVudFBvc2l0aW9uKHRoaXMuX3Bvc2l0aW9uVG8pO1xyXG5cclxuICAgICAgICBncmFwaGljcy50cmFuc2xhdGUoZnJvbS54LCBmcm9tLnkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBkeCA9IFZlY3RvcjIuZHgoZnJvbSwgdG8pO1xyXG4gICAgICAgIGxldCBkeSA9IFZlY3RvcjIuZHkoZnJvbSwgdG8pO1xyXG5cclxuICAgICAgICBsZXQgZGlzdGFuY2UgPSBWZWN0b3IyLmZMZW5ndGgoZHgsIGR5KTtcclxuXHJcbiAgICAgICAgbGV0IGFuZ2xlID0gVmVjdG9yMi5mQW5nbGUoZHgsIGR5KTtcclxuXHJcbiAgICAgICAgZ3JhcGhpY3Mucm90YXRlKGFuZ2xlKTtcclxuXHJcbiAgICAgICAgZ3JhcGhpY3Muc2NhbGUoZGlzdGFuY2UgLyB0aGlzLmNvbnN0cmFpbnQucmVzdERpc3RhbmNlLCAxKTtcclxuXHJcbiAgICAgICAgZ3JhcGhpY3MuZHJhd1BhdGgodGhpcy5wYXRoLCBmYWxzZSk7XHJcbiAgICAgICAgZ3JhcGhpY3MuZHJhd1BhdGgodGhpcy5wYXRoLCB0cnVlKTtcclxuXHJcbiAgICAgICAgZ3JhcGhpY3MucG9wKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBHcmFwaGljczJEIH0gZnJvbSBcImxpYi9ncmFwaGljcy9HcmFwaGljczJEXCI7XHJcbmltcG9ydCB7IFJpZ2lkYm9keTJEIH0gZnJvbSBcIi4uL1JpZ2lkYm9keTJEXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwibGliL21hdGgvVmVjdG9yMlwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJpZ2lkYm9keUdyYXBoaWMyRCB7XHJcbiAgICBib2R5OiBSaWdpZGJvZHkyRDtcclxuICAgIGFsaWduV2l0aD86IFJpZ2lkYm9keTJEOyAvLyBIYWNreSBzb2x1dGlvbiBidXQgd2hhdGV2ZXIgOilcclxuXHJcbiAgICBwYXRoOiBQYXRoMkQ7XHJcblxyXG4gICAgcm90YXRpb25hbE9mZnNldDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihib2R5OiBSaWdpZGJvZHkyRCwgcGF0aDogUGF0aDJEKXtcclxuICAgICAgICB0aGlzLmJvZHkgPSBib2R5O1xyXG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Um90YXRpb25hbE9mZnNldChvZmZzZXQ6IG51bWJlcil7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbmFsT2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoZ3JhcGhpY3M6IEdyYXBoaWNzMkQpe1xyXG4gICAgICAgIGdyYXBoaWNzLnB1c2goKTtcclxuXHJcbiAgICAgICAgZ3JhcGhpY3MudHJhbnNsYXRlKHRoaXMuYm9keS5wb3NpdGlvbi54LCB0aGlzLmJvZHkucG9zaXRpb24ueSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5hbGlnbldpdGgpe1xyXG4gICAgICAgICAgICBsZXQgZHggPSBWZWN0b3IyLmR4KHRoaXMuYm9keS5wb3NpdGlvbiwgdGhpcy5hbGlnbldpdGgucG9zaXRpb24pO1xyXG4gICAgICAgICAgICBsZXQgZHkgPSBWZWN0b3IyLmR5KHRoaXMuYm9keS5wb3NpdGlvbiwgdGhpcy5hbGlnbldpdGgucG9zaXRpb24pO1xyXG5cclxuICAgICAgICAgICAgbGV0IGFuZ2xlID0gVmVjdG9yMi5mQW5nbGUoZHgsIGR5KTtcclxuXHJcbiAgICAgICAgICAgIGdyYXBoaWNzLnJvdGF0ZShhbmdsZSArIHRoaXMucm90YXRpb25hbE9mZnNldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGdyYXBoaWNzLnJvdGF0ZSh0aGlzLmJvZHkucm90YXRpb24gKyB0aGlzLnJvdGF0aW9uYWxPZmZzZXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ3JhcGhpY3MuZHJhd1BhdGgodGhpcy5wYXRoLCBmYWxzZSk7XHJcbiAgICAgICAgZ3JhcGhpY3MuZHJhd1BhdGgodGhpcy5wYXRoLCB0cnVlKTtcclxuXHJcbiAgICAgICAgZ3JhcGhpY3MucG9wKCk7XHJcbiAgICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBMb2FkIHRoZSBqYXZhc2NyaXB0IG1haW5cclxuaW1wb3J0IFwiLi9qcy9tYWluXCI7XHJcbmltcG9ydCBcIi4vdHMvXCI7XHJcblxyXG4vLyBMb2FkIHRoZSBTQVNTIG1haW5cclxuaW1wb3J0IFwiLi9zY3NzL2FwcC5zY3NzXCI7Il0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=