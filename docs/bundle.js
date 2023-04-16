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
var substeps = 10;
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
    clickOn("settings-substep-20", function () { return setSolverRate(20); });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxDQUFDLEdBQUcsU0FBUyxDQUFDO1FBRTNCLFlBQVk7UUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRTFCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUVyRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsRUFBRSxHQUFHLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFakIsYUFBYTtRQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRXpCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFckQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsU0FBUyxFQUFFLEdBQUcsR0FBRyxTQUFTLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWpCLGFBQWE7UUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEdBQUcsR0FBRyxZQUFZLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsR0FBRyxZQUFZLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUdqQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQscUNBQVcsR0FBWCxVQUFZLEtBQWEsRUFBRSxNQUFjO1FBQ3JDLElBQUksSUFBSSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7UUFFeEIsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUVsQixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQy9CLElBQUksWUFBWSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDO1FBQ3JDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRXJDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFbEIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELG1DQUFTLEdBQVQsVUFBVSxNQUFjLEVBQUUsU0FBaUI7UUFDdkMsSUFBSSxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUV4QixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUVwQyxnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxDQUNkLFNBQVMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQ3pCLFNBQVMsRUFBRSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQ3hCLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVsQixJQUFJLENBQUMsYUFBYSxDQUNkLFNBQVMsRUFBRSxNQUFNLEdBQUcsR0FBRyxFQUN2QixTQUFTLEdBQUcsSUFBSSxFQUFFLE1BQU0sRUFDeEIsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRWYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVqQixPQUFPO1FBQ1AsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUcsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWpCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUM7QUF0UFksMENBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ0E1QjtJQUFBO1FBQ0ksY0FBUyxHQUFXLENBQUMsQ0FBQztJQWtDMUIsQ0FBQztJQWhDRyx5Q0FBZ0IsR0FBaEIsVUFBaUIsTUFBYztRQUMzQixJQUFJLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO1FBRXhCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRTNCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVqQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsbUNBQVUsR0FBVixVQUFXLE1BQWM7UUFDckIsSUFBSSxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUV4QixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBRWhDLGdCQUFnQjtRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVqQixPQUFPO1FBQ1AsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUcsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWpCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUM7QUFuQ1ksd0NBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQzNCLDBHQUFnRjtBQUNoRix5SUFBeUU7QUFDekUsb0hBQTJEO0FBRTNELDZHQUFxRDtBQUNyRCwrSEFBOEU7QUFDOUUsNEZBQTJDO0FBQzNDLGdIQUEyRDtBQUMzRCx5RUFBb0M7QUFDcEMsdUdBQWlEO0FBQ2pELDBHQUF3RDtBQUN4RCx5SEFBa0U7QUFHbEUsSUFBSSxRQUFvQixDQUFDO0FBQ3pCLElBQUksS0FBa0IsQ0FBQztBQUV2QixJQUFJLFNBQVMsR0FBVyxFQUFFLENBQUM7QUFDM0IsSUFBSSxRQUFRLEdBQVcsRUFBRSxDQUFDO0FBQzFCLElBQUksV0FBVyxHQUFXLENBQUMsQ0FBQztBQUM1QixJQUFJLFFBQVEsR0FBVyxDQUFDLENBQUM7QUFDekIsSUFBSSxXQUFXLEdBQVksS0FBSyxDQUFDO0FBRWpDLFNBQVMsa0JBQWtCLENBQUMsTUFBeUI7SUFDbEQsSUFBSSxRQUFRLEdBQTRCLFNBQVMsQ0FBQztJQUVsRCxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUVqQixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFDaEIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBRWhCLHdCQUF3QjtJQUN4QixJQUFJLFVBQVUsR0FBRyxJQUFJLGlDQUFlLENBQUMsSUFBSSwrQ0FBc0IsQ0FBQyxRQUFTLENBQUMsRUFBRSxJQUFJLGlCQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzNGLFVBQVUsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQzNCLFVBQVUsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO0lBQ2pDLFVBQVUsQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7SUFFcEMsSUFBSSxNQUFNLEdBQUcsVUFBQyxJQUFrQjs7UUFDN0IsUUFBUSxHQUFHLElBQUksQ0FBQztRQUVoQixVQUFVLENBQUMsVUFBVSxHQUFHLElBQUksK0NBQXNCLENBQUMsUUFBUyxFQUFFLFVBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxZQUFZLDBDQUFFLFNBQVMsQ0FBQyxJQUFJLGlCQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1SCxVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksS0FBSyxTQUFTLENBQUM7UUFFeEMsSUFBRyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUM7WUFDMUMsS0FBSyxDQUFDLFdBQVcsa0JBQUksVUFBVSxHQUFLLEtBQUssQ0FBQyxXQUFXLE9BQUMsQ0FBQztTQUN6RDtJQUNKLENBQUM7SUFFRCwwQkFBMEI7SUFDMUIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxVQUFDLEVBQUU7UUFDckMsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTFELElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUVuQixLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFJO1lBQ3RCLElBQUksQ0FBQyxHQUFHLGlCQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXRFLElBQUksQ0FBQyxHQUFHLFFBQVEsRUFBRTtnQkFDZixRQUFRLEdBQUcsQ0FBQyxDQUFDO2dCQUNiLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2Y7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxVQUFDLEVBQUU7Z0NBQzlCLENBQUM7WUFDTixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QyxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFcEIsSUFBSSxLQUFLLElBQUksSUFBSTtrQ0FBVztZQUU1QixJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLE9BQU8sRUFBRSxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsT0FBTyxDQUFDLENBQUM7WUFFbEUsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDO1lBRW5CLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGNBQUk7Z0JBQ3RCLElBQUksQ0FBQyxHQUFHLGlCQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUV0RSxJQUFJLENBQUMsR0FBRyxRQUFRLEVBQUU7b0JBQ2YsUUFBUSxHQUFHLENBQUMsQ0FBQztvQkFDYixPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDaEMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFFYixPQUFPLEdBQUcsS0FBTSxDQUFDLFVBQVUsQ0FBQztvQkFDNUIsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3BDO1lBQ0osQ0FBQyxDQUFDLENBQUM7O1FBdEJOLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7b0JBQXhDLENBQUM7U0F1QlI7SUFDSixDQUFDLENBQUMsQ0FBQztJQUdILE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsVUFBQyxFQUFFO1FBQ3JDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUxRCxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsWUFBRTtRQUNwQyxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUM7WUFDOUMsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFdEMsSUFBRyxNQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsVUFBVSxLQUFJLE9BQU8sRUFBQztnQkFDN0IsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUVoRSxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwQztTQUNIO0lBQ0osQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLFlBQUU7UUFDbkMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xCLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDLENBQUMsQ0FBQztJQUNILE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsWUFBRTtRQUN0QyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbEIsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxZQUFFO1FBQ2xDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyQixDQUFDLENBQUMsQ0FBQztJQUNILE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsWUFBRTtRQUNyQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckIsQ0FBQyxDQUFDLENBQUM7QUFFTixDQUFDO0FBQ0QsU0FBUyxhQUFhLENBQUMsTUFBeUI7SUFDN0MsSUFBSSxJQUFJLEdBQUc7UUFDUixJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUM7UUFFbEMsUUFBUSxHQUFHLElBQUksdUJBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkMsQ0FBQyxDQUFDO0lBRUYsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxjQUFNLFdBQUksRUFBRSxFQUFOLENBQU0sQ0FBQyxDQUFDO0lBRWhELElBQUksRUFBRSxDQUFDO0FBQ1YsQ0FBQztBQUVELFNBQVMsYUFBYSxDQUFDLENBQVM7SUFDN0IsUUFBUSxHQUFHLENBQUMsQ0FBQztJQUNiLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBRW5CLElBQUksRUFBRSxDQUFDO0FBQ1YsQ0FBQztBQUNELFNBQVMsVUFBVSxDQUFDLENBQVM7SUFDMUIsV0FBVyxHQUFHLENBQUMsQ0FBQztJQUNoQixJQUFJLEVBQUUsQ0FBQztBQUNWLENBQUM7QUFDRCxTQUFTLFdBQVcsQ0FBQyxDQUFTO0lBQzNCLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDYixJQUFJLEVBQUUsQ0FBQztBQUNWLENBQUM7QUFFRCxTQUFTLFlBQVk7SUFDbEIsSUFBTSxPQUFPLEdBQUcsVUFBQyxFQUFVLEVBQUUsTUFBa0I7UUFDNUMsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUUxQyxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzlDLENBQUMsQ0FBQztJQUVGLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUMzQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDM0MsT0FBTyxDQUFDLG1CQUFtQixFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQzdDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUN6QyxPQUFPLENBQUMsY0FBYyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3BDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDbEMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLHdCQUF3QixDQUFDLENBQUM7SUFDcEQsT0FBTyxDQUFDLGlCQUFpQixFQUFFLHlCQUF5QixDQUFDLENBQUM7SUFDdEQsT0FBTyxDQUFDLGtCQUFrQixFQUFFLDBCQUEwQixDQUFDLENBQUM7SUFDeEQsT0FBTyxDQUFDLG1CQUFtQixFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBRTlDLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUVsRCxPQUFPLENBQUMsb0JBQW9CLEVBQUUsY0FBTSxvQkFBYSxDQUFDLENBQUMsQ0FBQyxFQUFoQixDQUFnQixDQUFDLENBQUM7SUFDdEQsT0FBTyxDQUFDLHFCQUFxQixFQUFFLGNBQU0sb0JBQWEsQ0FBQyxFQUFFLENBQUMsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO0lBQ3hELE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxjQUFNLG9CQUFhLENBQUMsRUFBRSxDQUFDLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUN4RCxPQUFPLENBQUMsc0JBQXNCLEVBQUUsY0FBTSxvQkFBYSxDQUFDLEdBQUcsQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUM7SUFDMUQsT0FBTyxDQUFDLHVCQUF1QixFQUFFLGNBQU0sb0JBQWEsQ0FBQyxJQUFJLENBQUMsRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDO0lBQzVELE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxjQUFNLG9CQUFhLENBQUMsS0FBSyxDQUFDLEVBQXBCLENBQW9CLENBQUMsQ0FBQztJQUU5RCxPQUFPLENBQUMsb0JBQW9CLEVBQUUsY0FBTSxpQkFBVSxDQUFDLENBQUMsQ0FBQyxFQUFiLENBQWEsQ0FBQyxDQUFDO0lBQ25ELE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxjQUFNLGlCQUFVLENBQUMsQ0FBQyxDQUFDLEVBQWIsQ0FBYSxDQUFDLENBQUM7SUFDbkQsT0FBTyxDQUFDLG9CQUFvQixFQUFFLGNBQU0saUJBQVUsQ0FBQyxDQUFDLENBQUMsRUFBYixDQUFhLENBQUMsQ0FBQztJQUNuRCxPQUFPLENBQUMsb0JBQW9CLEVBQUUsY0FBTSxpQkFBVSxDQUFDLENBQUMsQ0FBQyxFQUFiLENBQWEsQ0FBQyxDQUFDO0FBQ3RELENBQUM7QUFFRCxTQUFTLGFBQWE7SUFDbkIsV0FBVyxHQUFHLENBQUMsV0FBVyxDQUFDO0FBQzlCLENBQUM7QUFFRCxTQUFTLHdCQUF3QjtJQUM5QixTQUFTLEdBQUcsMEJBQTBCLENBQUM7SUFDdkMsS0FBSyxHQUFFLDJDQUFnQixFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLG1DQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsOEJBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3RGLElBQUksRUFBRSxDQUFDO0FBQ1YsQ0FBQztBQUNELFNBQVMseUJBQXlCO0lBQy9CLFNBQVMsR0FBRywyQkFBMkIsQ0FBQztJQUN4QyxLQUFLLEdBQUcsMkNBQWdCLEVBQUMsRUFBRSxDQUFDLENBQUM7SUFDN0IsUUFBUSxDQUFDLG1CQUFtQixDQUFDLElBQUksbUNBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSw4QkFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDdEYsSUFBSSxFQUFFLENBQUM7QUFDVixDQUFDO0FBQ0QsU0FBUywwQkFBMEI7SUFDaEMsU0FBUyxHQUFHLDRCQUE0QixDQUFDO0lBQ3pDLEtBQUssR0FBRywyQ0FBZ0IsRUFBQyxHQUFHLENBQUMsQ0FBQztJQUM5QixRQUFRLENBQUMsbUJBQW1CLENBQUMsSUFBSSxtQ0FBZ0IsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLDhCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUV4RixJQUFJLEVBQUUsQ0FBQztBQUNWLENBQUM7QUFDRCxTQUFTLGFBQWE7SUFDbkIsU0FBUyxHQUFHLCtCQUErQixDQUFDO0lBQzVDLEtBQUssR0FBRywwQ0FBa0IsRUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDakMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLElBQUksbUNBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSw4QkFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFFdEYsSUFBSSxFQUFFLENBQUM7QUFDVixDQUFDO0FBQ0QsU0FBUyxjQUFjO0lBQ3BCLFNBQVMsR0FBRywrQkFBK0IsQ0FBQztJQUM1QyxLQUFLLEdBQUcsMENBQWtCLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDN0MsUUFBUSxDQUFDLG1CQUFtQixDQUFDLElBQUksbUNBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSw4QkFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFFdEYsSUFBSSxFQUFFLENBQUM7QUFDVixDQUFDO0FBQ0QsU0FBUyxhQUFhO0lBQ25CLFNBQVMsR0FBRywrQkFBK0IsQ0FBQztJQUM1QyxLQUFLLEdBQUcsMENBQWtCLEVBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLElBQUksbUNBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSw4QkFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFFdEYsSUFBSSxFQUFFLENBQUM7QUFDVixDQUFDO0FBQ0QsU0FBUyxjQUFjO0lBQ3BCLFNBQVMsR0FBRywrQkFBK0IsQ0FBQztJQUM1QyxLQUFLLEdBQUcsMENBQWtCLEVBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLG1DQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsOEJBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBRXRGLElBQUksRUFBRSxDQUFDO0FBQ1YsQ0FBQztBQUNELFNBQVMsWUFBWTtJQUNsQixTQUFTLEdBQUcsOERBQThELENBQUM7SUFDM0UsS0FBSyxHQUFHLDBDQUFrQixFQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3JELFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLG1DQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsOEJBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBRXRGLElBQUksRUFBRSxDQUFDO0FBQ1YsQ0FBQztBQUNELFNBQVMsVUFBVTtJQUNoQixTQUFTLEdBQUcsVUFBVSxDQUFDO0lBQ3ZCLEtBQUssR0FBRyx1Q0FBaUIsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN4QyxRQUFRLENBQUMsbUJBQW1CLENBQUMsSUFBSSxtQ0FBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLDhCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUV0RixJQUFJLEVBQUUsQ0FBQztBQUNWLENBQUM7QUFDRCxTQUFTLFNBQVM7SUFDZixTQUFTLEdBQUcsT0FBTyxDQUFDO0lBQ3BCLEtBQUssR0FBRyxnQ0FBVyxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLG1DQUFnQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLDhCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUV2RixJQUFJLEVBQUUsQ0FBQztBQUNWLENBQUM7QUFDRCxTQUFTLGVBQWU7SUFDckIsU0FBUyxHQUFHLHFFQUFxRSxDQUFDO0lBQ2xGLEtBQUssR0FBRyxpREFBc0IsR0FBRSxDQUFDO0lBQ2pDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLG1DQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsOEJBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBRXRGLElBQUksRUFBRSxDQUFDO0FBQ1YsQ0FBQztBQUNELFNBQVMsSUFBSTtJQUNWLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzFCLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzFCLEtBQUssQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBRWhDLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFMUQsSUFBRyxDQUFDLFdBQVc7UUFBRSxPQUFPO0lBRXhCLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUVkLElBQUksSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDO0lBQzVCLElBQUksSUFBSSxVQUFHLFFBQVEsQ0FBQyxLQUFLLGNBQUksUUFBUSxDQUFDLE1BQU0saUJBQU8sZ0JBQWdCLGFBQVUsQ0FBQztJQUM5RSxJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDO0lBQ3RDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsZUFBZSxDQUFDO0lBQ2hELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsb0JBQW9CLENBQUM7SUFDMUQsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsV0FBVyxDQUFDO0lBRXBDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ2hDLENBQUM7QUFFRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUU7OztRQUMzQyxtQkFBUSxHQUFFLENBQUM7UUFFWCxzQkFBc0I7UUFDckIsTUFBYyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDdkMsTUFBYyxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDN0MsTUFBYyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFFdEMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFzQixDQUFDO1FBRXBFLFFBQVEsR0FBRyxJQUFJLHVCQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLElBQUksbUNBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSw4QkFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFFdEYsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTNCLFlBQVksRUFBRSxDQUFDO1FBRVgsU0FBUyxHQUFHLElBQUksQ0FBQztRQUVwQixNQUFjLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUV0QyxhQUFhLEVBQUUsQ0FBQztRQUVoQixLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUVmLE1BQU0sR0FBRyxVQUFDLEtBQWE7WUFDeEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUM7UUFFRSxJQUFJLEdBQUc7WUFDUixRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFakIsSUFBSSxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQzNCLElBQUksVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUUzQixRQUFRLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2xDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUUxQixRQUFRLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2pDLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDcEMsUUFBUSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNsQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXJCLElBQUcsV0FBVyxFQUFDO2dCQUNaLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ2pDO1FBQ0osQ0FBQztRQUVHLFlBQVksR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3hDLElBQUksR0FBRztZQUNSLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTVCLElBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7WUFFM0MsSUFBSSxLQUFLLEdBQUcsQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBRWhELElBQUcsS0FBSyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUM7Z0JBQ2YsS0FBSyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDakI7WUFFRCxZQUFZLEdBQUcsV0FBVyxDQUFDO1lBRTNCLG9GQUFvRjtZQUNwRiw2REFBNkQ7WUFDN0QsTUFBTSxDQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ2YsSUFBSSxFQUFFLENBQUM7UUFDVixDQUFDO1FBRUQscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7OztLQUM5QixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3hXSCwrSEFBZ0Y7QUFDaEYsK0hBQThFO0FBRTlFLFNBQVMsa0NBQWtDLENBQUMsTUFBcUI7SUFDN0QsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUN6QixJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBRTNCLElBQUksTUFBTSxZQUFZLGlCQUFpQixFQUFDO1FBQ3BDLEtBQUssR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztRQUNyRCxNQUFNLEdBQUcsTUFBTSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7S0FDMUQ7SUFFRCxPQUFPLElBQUksbUNBQWdCLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxtQ0FBZ0IsQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixFQUFFLGdDQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDeEgsQ0FBQztBQUNELFNBQVMsa0NBQWtDLENBQUMsTUFBcUI7SUFDN0QsT0FBTyxJQUFJLG1DQUFnQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLDhCQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDeEYsQ0FBQztBQU1EO0lBT0ksb0JBQVksTUFBeUMsRUFBRSxnQkFBbUMsRUFBRSxnQkFBbUM7UUFDM0gsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFM0MsSUFBRyxPQUFPLEtBQUssSUFBSSxFQUFDO1lBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQztTQUNuRDtRQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBbUMsQ0FBQztRQUVuRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsZ0JBQWdCLGFBQWhCLGdCQUFnQixjQUFoQixnQkFBZ0IsR0FBSSxrQ0FBa0MsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4RixJQUFJLENBQUMsaUJBQWlCLEdBQUcsZ0JBQWdCLGFBQWhCLGdCQUFnQixjQUFoQixnQkFBZ0IsR0FBSSxrQ0FBa0MsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV4RixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO1FBQ3hELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7UUFFMUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUU5QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELDZEQUE2RDtJQUM3RCxRQUFRO0lBQ1IsNkRBQTZEO0lBQzdELDBCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRTlCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFdEQsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQztRQUVyRCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5RCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU5RCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXhELElBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsS0FBSyw4QkFBVyxDQUFDLElBQUksRUFBQztZQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3ZEO1FBRUQsSUFBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxLQUFLLDhCQUFXLENBQUMsT0FBTyxFQUFDO1lBQ2xELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUUsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsSUFBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxLQUFLLDhCQUFXLENBQUMsS0FBSyxFQUFDO1lBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUUsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsMkpBQTJKO1FBQzNKLCtHQUErRztRQUMvRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUdwRyxJQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEtBQUssOEJBQVcsQ0FBQyxJQUFJLEVBQUM7WUFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3RDO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRTdGLENBQUM7SUFHRCw2REFBNkQ7SUFDN0QsV0FBVztJQUNYLDZEQUE2RDtJQUM3RCxpQ0FBWSxHQUFaLFVBQWEsS0FBYTtRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQztJQUNELG1DQUFjLEdBQWQsVUFBZSxPQUFzQjtRQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7SUFDckMsQ0FBQztJQUNELG1DQUFjLEdBQWQsVUFBZSxLQUFhO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUNyQyxDQUFDO0lBQ0QseUNBQW9CLEdBQXBCLFVBQXFCLEtBQWE7UUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDcEQsQ0FBQztJQUNELGlDQUFZLEdBQVosVUFBYSxLQUFhO1FBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDO0lBR0Qsc0JBQUksaUNBQVM7UUFEYixnREFBZ0Q7YUFDaEQ7WUFDSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBRXBDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRTFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxpQ0FBUztRQURiLGdEQUFnRDthQUNoRDtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDO1FBQ2xFLENBQUM7OztPQUFBO0lBRUQsNkRBQTZEO0lBQzdELFVBQVU7SUFDViw2REFBNkQ7SUFDN0Qsc0ZBQXNGO0lBQ3RGLGtDQUFhLEdBQWIsVUFBYyxLQUFtQjtRQUM3QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0QscUNBQWdCLEdBQWhCLFVBQWlCLEtBQW1CLEVBQUUsT0FBc0IsRUFBRSxhQUFxQixFQUFFLGNBQXNCLEVBQUUsS0FBYTtRQUN0SCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7UUFDekQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7UUFFM0QsSUFBSSxNQUFNLEdBQUc7WUFDVCxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUNmLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7U0FDbkIsQ0FBQztRQUVGLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUVWLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxTQUFTLENBQUM7WUFDL0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDcEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDcEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDdkIsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBRUQsNkRBQTZEO0lBQzdELGVBQWU7SUFDZiw2REFBNkQ7SUFDN0QseUJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUNELHdCQUFHLEdBQUg7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDRCwwQkFBSyxHQUFMLFVBQU0sQ0FBUyxFQUFFLENBQVM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCwyQkFBTSxHQUFOLFVBQU8sS0FBYTtRQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0QsOEJBQVMsR0FBVCxVQUFVLEtBQWE7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNELDhCQUFTLEdBQVQsVUFBVSxDQUFTLEVBQUUsQ0FBUztRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELDZEQUE2RDtJQUM3RCxVQUFVO0lBQ1YsNkRBQTZEO0lBQzdELGtDQUFhLEdBQWIsVUFBYyxDQUFTLEVBQUUsQ0FBUyxFQUFFLEtBQWEsRUFBRSxNQUFjLEVBQUUsSUFBYTtRQUM1RSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRXpCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFFbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUV6QixJQUFHLElBQUksRUFBQztZQUNKLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDdkI7YUFDRztZQUNBLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDekI7SUFDTCxDQUFDO0lBQ0QsK0JBQVUsR0FBVixVQUFXLENBQVMsRUFBRSxDQUFTLEVBQUUsTUFBYyxFQUFFLElBQWE7UUFDMUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFdEQsSUFBRyxJQUFJLEVBQUM7WUFDSixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3ZCO2FBQ0c7WUFDQSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztJQUNELDZCQUFRLEdBQVIsVUFBUyxDQUFTLEVBQUUsQ0FBUyxFQUFFLEVBQVUsRUFBRSxFQUFVO1FBQ2pELElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUU1QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFJRCw2QkFBUSxHQUFSLFVBQVMsZ0JBQWlELEVBQUUsSUFBYTtRQUNyRSxJQUFHLE9BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLFFBQVEsRUFBQztZQUNyQyxJQUFJLElBQUksR0FBRyxnQkFBMEIsQ0FBQztZQUV0QyxJQUFHLElBQUk7Z0JBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7O2dCQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUUvQixPQUFPLElBQUksQ0FBQztTQUNmO2FBQ0c7WUFDQSxJQUFJLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO1lBRXhCLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXZCLElBQUcsSUFBSTtnQkFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Z0JBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRS9CLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDTCxDQUFDO0lBRUQsOEJBQVMsR0FBVCxVQUFVLEtBQWUsRUFBRSxJQUFhO1FBQXhDLGlCQUVDO1FBREcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFJLElBQUksWUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBSUQsOEJBQVMsR0FBVCxVQUFVLEtBQW1CLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFVLEVBQUUsQ0FBVTtRQUN2RSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLGFBQUQsQ0FBQyxjQUFELENBQUMsR0FBSSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsYUFBRCxDQUFDLGNBQUQsQ0FBQyxHQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRUQsbUNBQWMsR0FBZDtRQUNJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXZELElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELDZEQUE2RDtJQUM3RCxXQUFXO0lBQ1gsNkRBQTZEO0lBQzdELGtDQUFhLEdBQWIsVUFBYyxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTO1FBQ3BELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7WUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBR0QseUJBQUksR0FBSixVQUFLLGdCQUFpRDtRQUNsRCxJQUFHLE9BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLFFBQVEsRUFBQztZQUNyQyxJQUFJLElBQUksR0FBRyxnQkFBMEIsQ0FBQztZQUV0QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUV4QixPQUFPLElBQUksQ0FBQztTQUNmO2FBQ0c7WUFDQSxJQUFJLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO1lBRXhCLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXZCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXhCLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDTCxDQUFDO0lBRUQsNkRBQTZEO0lBQzdELDJCQUEyQjtJQUMzQiw2REFBNkQ7SUFDN0Qsd0NBQW1CLEdBQW5CLFVBQW9CLFFBQTBCO1FBQzFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFDRCxxQ0FBZ0IsR0FBaEIsVUFBaUIsQ0FBUyxFQUFFLENBQVM7UUFDakMsSUFBRyxJQUFJLENBQUMsTUFBTSxZQUFZLGlCQUFpQixFQUFDO1lBQ3hDLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztZQUM3QixDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7WUFDOUIsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztTQUMzQjtRQUVELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFNUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRXZCLE9BQU8sU0FBUyxDQUFDLGNBQWMsQ0FBQyxFQUFDLENBQUMsS0FBRSxDQUFDLEtBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFLRCxzQkFBSSw2QkFBSztRQUhULDZEQUE2RDtRQUM3RCxVQUFVO1FBQ1YsNkRBQTZEO2FBQzdEO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUNELHNCQUFJLDhCQUFNO2FBQVY7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksd0NBQWdCO2FBQXBCO1lBQ0ksT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSx3Q0FBZ0I7YUFBcEI7WUFDSSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUNMLGlCQUFDO0FBQUQsQ0FBQztBQTlTWSxnQ0FBVTs7Ozs7Ozs7Ozs7Ozs7O0FDdEJ2QjtJQUFBO0lBMkVBLENBQUM7SUExRVUsa0JBQU8sR0FBZDtRQUFlLGdCQUFtQjthQUFuQixVQUFtQixFQUFuQixxQkFBbUIsRUFBbkIsSUFBbUI7WUFBbkIsMkJBQW1COztRQUM5QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFFWixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQztZQUNsQyxHQUFHLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BCO1FBRUQsT0FBTyxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUMvQixDQUFDO0lBQ00sMEJBQWUsR0FBdEIsVUFBdUIsT0FBaUIsRUFBRSxNQUFnQjtRQUN0RCxJQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU07WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7UUFFN0YsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ1osSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRWxCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDO1lBQ2xDLFNBQVMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsR0FBRyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDakM7UUFFRCxPQUFPLEdBQUcsR0FBRyxTQUFTLENBQUM7SUFDM0IsQ0FBQztJQUNNLGNBQUcsR0FBVjtRQUFXLGdCQUFtQjthQUFuQixVQUFtQixFQUFuQixxQkFBbUIsRUFBbkIsSUFBbUI7WUFBbkIsMkJBQW1COztRQUMxQixJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFcEIsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUM7WUFDbEMsSUFBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRztnQkFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1NBQ3ZDO1FBRUQsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBQ00sY0FBRyxHQUFWO1FBQVcsZ0JBQW1CO2FBQW5CLFVBQW1CLEVBQW5CLHFCQUFtQixFQUFuQixJQUFtQjtZQUFuQiwyQkFBbUI7O1FBQzFCLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVwQixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQztZQUNsQyxJQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHO2dCQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDdkM7UUFFRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFDTSxnQkFBSyxHQUFaLFVBQWEsR0FBVyxFQUFFLEdBQVcsRUFBRSxNQUFjLEVBQUUsTUFBYyxFQUFFLENBQVM7UUFDNUUsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXRDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDTSxlQUFJLEdBQVgsVUFBWSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVM7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFDTSxzQkFBVyxHQUFsQixVQUFtQixDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVM7UUFDOUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ00sZ0JBQUssR0FBWixVQUFhLENBQVMsRUFBRSxHQUFXLEVBQUUsR0FBVztRQUM1QyxJQUFHLENBQUMsR0FBRyxHQUFHO1lBQUUsT0FBTyxHQUFHLENBQUM7UUFDdkIsSUFBRyxDQUFDLEdBQUcsR0FBRztZQUFFLE9BQU8sR0FBRyxDQUFDO1FBRXZCLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUNNLGVBQUksR0FBWCxVQUFZLENBQVM7UUFDakIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNNLHlCQUFjLEdBQXJCLFVBQXNCLEtBQWE7UUFDL0IsS0FBSyxJQUFJLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRXJCLElBQUcsS0FBSyxHQUFHLENBQUMsRUFBQztZQUNULEtBQUssSUFBSSxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN4QjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFDTSx3QkFBYSxHQUFwQixVQUFxQixJQUFZLEVBQUUsRUFBVTtRQUN6QyxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQzNELE9BQU8sSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFFdkQsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQztBQTNFWSxnQ0FBVTs7Ozs7Ozs7Ozs7Ozs7O0FDQXZCLHFGQUFvQztBQUVwQztJQVFJLG1FQUFtRTtJQUNuRSxjQUFjO0lBQ2QsbUVBQW1FO0lBQ25FLGlCQUFZLEdBQVcsRUFBRSxHQUFXLEVBQUUsR0FBVyxFQUFFLEdBQVc7UUFDMUQsYUFBYTtRQUNiLGFBQWE7UUFDYixJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQztRQUNkLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO1FBRWQsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDZCxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQztJQUNsQixDQUFDO0lBSUQsc0JBQUksd0JBQUc7UUFGUCxhQUFhO1FBQ2IsYUFBYTthQUNiLGNBQVksT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDN0Isc0JBQUksd0JBQUc7YUFBUCxjQUFZLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQzdCLHNCQUFJLHdCQUFHO2FBQVAsY0FBWSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUM3QixzQkFBSSx3QkFBRzthQUFQLGNBQVksT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFLN0Isc0JBQUksZ0NBQVc7UUFIZixtRUFBbUU7UUFDbkUsVUFBVTtRQUNWLG1FQUFtRTthQUNuRTtZQUNJLE9BQU8saUJBQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzlELENBQUM7OztPQUFBO0lBRUQsbUVBQW1FO0lBQ25FLHlCQUF5QjtJQUN6QixtRUFBbUU7SUFDbkUsNEJBQVUsR0FBVixVQUFXLENBQVMsRUFBRSxDQUFTLElBQUcsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckUsNEJBQVUsR0FBVixVQUFXLENBQVMsRUFBRSxDQUFTLElBQUcsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckUsMkJBQVMsR0FBVCxVQUFVLEtBQWM7UUFDcEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxJQUFJLGlCQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDRCw4QkFBWSxHQUFaLFVBQWEsS0FBYyxFQUFFLE1BQWU7UUFDeEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTFDLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELG1FQUFtRTtJQUNuRSxlQUFlO0lBQ2YsbUVBQW1FO0lBQ25FLHNCQUFJLEdBQUosVUFBSyxDQUFTLEVBQUUsQ0FBUztRQUNyQixJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNaLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRVosT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNELHNCQUFJLEdBQUosVUFBSyxDQUFTLEVBQUUsQ0FBUztRQUNyQixJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNaLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRVosT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNELHlCQUFPLEdBQVA7UUFDSSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBRW5DLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUMsV0FBVyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNELDJCQUFTLEdBQVQ7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztRQUVmLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDRCwwQkFBUSxHQUFSO1FBQ0ksU0FBUztRQUNULFNBQVM7UUFDVCxHQUFHO1FBQ0gsVUFBVTtRQUNWLFVBQVU7UUFFVixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBRWhCLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1osSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNiLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVaLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDRCx1QkFBSyxHQUFMLFVBQU0sQ0FBUztRQUNYLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2IsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNiLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRWIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNELCtCQUFhLEdBQWIsVUFBYyxLQUFhO1FBQ3ZCLFNBQVM7UUFDVCxTQUFTO1FBRVQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXhCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFakIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNELCtCQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVoQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0QsdUJBQUssR0FBTCxVQUFNLEtBQWM7UUFDaEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDO1FBRW5CLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxtRUFBbUU7SUFDbkUsVUFBVTtJQUNWLG1FQUFtRTtJQUNuRSx1QkFBSyxHQUFMO1FBQ0ksT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELG1FQUFtRTtJQUNuRSxtQkFBbUI7SUFDbkIsbUVBQW1FO0lBQzVELGdCQUFRLEdBQWYsY0FBb0IsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUMsY0FBTSxHQUFiLFVBQWMsQ0FBUyxFQUFFLENBQVMsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRSxnQkFBUSxHQUFmLFVBQWdCLEtBQWEsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0YsY0FBQztBQUFELENBQUM7QUFoSlksMEJBQU87Ozs7Ozs7Ozs7Ozs7OztBQ0ZwQiwrRUFBK0U7QUFDL0U7SUFJSSxpQkFBWSxDQUFLLEVBQUUsQ0FBSztRQUFaLHlCQUFLO1FBQUUseUJBQUs7UUFDcEIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNmLENBQUM7SUFFRCxxQkFBRyxHQUFILFVBQUksS0FBYztRQUNkLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFbEIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNELHNCQUFJLEdBQUosVUFBSyxDQUFTLElBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDNUMsc0JBQUksR0FBSixVQUFLLENBQVMsSUFBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQztJQUU1QyxxQkFBRyxHQUFILFVBQUksS0FBYztRQUNkLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFbEIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNELHNCQUFJLEdBQUosVUFBSyxDQUFTLElBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDNUMsc0JBQUksR0FBSixVQUFLLENBQVMsSUFBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQztJQUU1QyxxQkFBRyxHQUFILFVBQUksS0FBYztRQUNkLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFbEIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNELHNCQUFJLEdBQUosVUFBSyxDQUFT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eUJBQUM7QUFBRCxDQUFDO0FBekNZLGdEQUFrQjs7Ozs7OztVQ0ovQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNtQjtBQUNKOztBQUVmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9qcy9tYWluLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc2Nzcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zY3NzL2FwcC5zY3NzPzUxYzUiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3RzL2FwcC9CcmlkZ2VUZXN0U2NlbmUudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy90cy9hcHAvQ2xvdGhUZXN0U2NlbmUudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy90cy9hcHAvQ29tcGxpY2F0ZWRTY2VuZVRlc3QudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy90cy9hcHAvRW5naW5lVGVzdFNjZW5lLnRzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdHMvYXBwL01lbnUudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy90cy9hcHAvUGVuZHVsdW1UZXN0U2NlbmUudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy90cy9hcHAvU29sdmVyU2NlbmUudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy90cy9hcHAvcGF0aHMvRW5naW5lUGFydFBhdGhzLnRzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdHMvYXBwL3BhdGhzL1JpZ2lkQm9keVBhdGhzLnRzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy90cy9saWIvZ3JhcGhpY3MvR3JhcGhpY3MyRC50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3RzL2xpYi9tYXRoL01hdGhIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy90cy9saWIvbWF0aC9NYXRyaXgyLnRzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdHMvbGliL21hdGgvVmVjdG9yMi50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3RzL2xpYi9zZXR0aW5ncy9Eb2N1bWVudFNldHRpbmdzLnRzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdHMvbGliL3NldHRpbmdzL1ZpZXdwb3J0U2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy90cy9saWIveHBiZC9BeGlzQ29uc3RyYWludDJELnRzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdHMvbGliL3hwYmQvQXhsZUNvbnN0cmFpbnQyRC50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3RzL2xpYi94cGJkL0NvbnN0cmFpbnQyRC50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3RzL2xpYi94cGJkL0NvbnN0cmFpbnRBdHRhY2htZW50MkQudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy90cy9saWIveHBiZC9EaXN0YW5jZUNvbnN0cmFpbnQyRC50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3RzL2xpYi94cGJkL1BpbkNvbnN0cmFpbnQyRC50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3RzL2xpYi94cGJkL1JpZ2lkYm9keTJELnRzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdHMvbGliL3hwYmQvZ3JhcGhpY3MvRGlzdGFuY2VDb25zdHJhaW50R3JhcGhpYzJELnRzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdHMvbGliL3hwYmQvZ3JhcGhpY3MvUmlnaWRib2R5R3JhcGhpYzJELnRzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCk9PntcclxufSk7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG5odG1sLCBib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7IH1cXG5cXG5odG1sLCBib2R5IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgbWF4LWhlaWdodDogMTAwdmg7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIC0tZGFyay1jb2xvcjogIzM1MmYyMDtcXG4gIC0tbWlkLWNvbG9yOiAjYzJiYmE3O1xcbiAgLS1saWdodC1jb2xvcjogI2UwZGRkNTtcXG4gIC0tZGFyay1jb2xvci1hbHBoYTogIzM1MmYyMGVlO1xcbiAgZm9udC1zaXplOiAxOHB4OyB9XFxuXFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDsgfVxcbiAgLmNvbnRhaW5lciBjYW52YXMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlOyB9XFxuICAuY29udGFpbmVyIC5jcmVkaXRzLW92ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMjRweDtcXG4gICAgcmlnaHQ6IDI0cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1taWQtY29sb3IpO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cXG4gIC5jb250YWluZXIgLmluZm8tb3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAyNHB4O1xcbiAgICBsZWZ0OiAyNHB4O1xcbiAgICBjb2xvcjogdmFyKC0tbWlkLWNvbG9yKTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XFxuXFxuLm1lbnUtYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjRweDtcXG4gIHJpZ2h0OiAyNHB4O1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICB6LWluZGV4OiAxMDAwO1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAubWVudS1idXR0b24gLm1lbnUtYmFyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIGhlaWdodDogM3B4O1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodC1jb2xvcik7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0LCBvcGFjaXR5IDAuMnMgZWFzZS1pbi1vdXQ7IH1cXG4gIC5tZW51LWJ1dHRvbiAudG9wIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgY2FsYygtNTAlIC0gOHB4KSk7IH1cXG4gIC5tZW51LWJ1dHRvbiAuYm90dG9tIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgY2FsYygtNTAlICsgOHB4KSk7IH1cXG4gIC5tZW51LWJ1dHRvbi5vcGVuIC50b3Age1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMTM1ZGVnKTsgfVxcbiAgLm1lbnUtYnV0dG9uLm9wZW4gLmJvdHRvbSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgyMjVkZWcpOyB9XFxuICAubWVudS1idXR0b24ub3BlbiAubWlkIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCwgMTAwJSk7IH1cXG5cXG4ubWVudSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDBweDtcXG4gIHJpZ2h0OiAwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmstY29sb3ItYWxwaGEpO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCB2aXNpYmlsaXR5O1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDI0cHg7XFxuICBwYWRkaW5nLXRvcDogODBweDsgfVxcbiAgLm1lbnUgLm1lbnUtc3BhY2luZyB7XFxuICAgIGhlaWdodDogMTAwcHg7IH1cXG4gIC5tZW51IC5tZW51LWhlYWRlciB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuICAubWVudSAubWVudS1pdGVtIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3JkZXItY29sb3I7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcbiAgICAubWVudSAubWVudS1pdGVtOmhvdmVyIHtcXG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTsgfVxcbiAgLm1lbnUuaW5pdCB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxcbiAgLm1lbnUuaGlkZGVuIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSwgMCk7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2UvX2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYXBwLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRyxzQkFBc0IsRUFBQTs7QUFHekI7RUFDRyxVQUFTO0VBQ1QsU0FBUSxFQUFBOztBQ0pYO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBRWpCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLHVCQUF1QjtFQUV2QixxQkFBYTtFQUNiLG9CQUFZO0VBQ1osc0JBQWM7RUFDZCw2QkFBbUI7RUFFbkIsZUFBZSxFQUFBOztBQUduQjtFQUNJLFlBQVc7RUFDWCxhQUFZO0VBRVosYUFBYSxFQUFBO0VBSmpCO0lBT1EsV0FBVztJQUNYLFlBQVksRUFBQTtFQVJwQjtJQVlRLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUVYLHVCQUF1QjtJQUV2QixpQkFBaUI7SUFDakIsb0JBQW9CLEVBQUE7RUFuQjVCO0lBc0JRLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVTtJQUVWLHVCQUF1QjtJQUV2QixpQkFBaUI7SUFDakIsb0JBQW9CLEVBQUE7O0FBSTVCO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBRVgsV0FBVztFQUNYLFlBQVk7RUFFWiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBRW5CLGFBQWE7RUFvQ2IsZUFBZSxFQUFBO0VBL0NuQjtJQWNRLGtCQUFpQjtJQUNqQixRQUFRO0lBQ1IsU0FBUztJQUVULGdDQUFnQztJQUVoQyxXQUFXO0lBQ1gsV0FBVztJQUVYLDhCQUE4QjtJQUU5QixnRUFBZ0UsRUFBQTtFQXpCeEU7SUE2QlEsNENBQTRDLEVBQUE7RUE3QnBEO0lBZ0NRLDRDQUE0QyxFQUFBO0VBaENwRDtJQXFDWSwrQ0FBK0MsRUFBQTtFQXJDM0Q7SUF3Q1ksK0NBQStDLEVBQUE7RUF4QzNEO0lBMkNZLCtDQUErQyxFQUFBOztBQU8zRDtFQUNJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLFlBQVc7RUFDWCxXQUFXO0VBRVgsZ0JBQWdCO0VBRWhCLGdCQUFlO0VBRWYseUJBQXlCO0VBRXpCLG1DQUFtQztFQUVuQywwQ0FBMEM7RUFDMUMseUJBQXlCO0VBQ3pCLHVDQUF1QztFQUV2QyxZQUFZO0VBRVosYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFFbkIsc0JBQXFCO0VBRXJCLGFBQVk7RUFFWixpQkFBaUIsRUFBQTtFQTdCckI7SUFnQ1EsYUFBWSxFQUFBO0VBaENwQjtJQW9DUSxnQkFBZTtJQUVmLGlCQUFpQixFQUFBO0VBdEN6QjtJQTBDUSxlQUFlO0lBRWYsV0FBVztJQUVYLGNBQWE7SUFDYixxQkFBcUI7SUFFckIsb0NBQW9DO0lBRXBDLGlDQUFpQztJQUNqQyx5QkFBeUI7SUFDekIsdUNBQXVDO0lBTXZDLG1CQUFtQixFQUFBO0lBM0QzQjtNQXdEWSxnQ0FBZ0MsRUFBQTtFQXhENUM7SUErRFEsa0JBQWtCLEVBQUE7RUEvRDFCO0lBbUVRLDZCQUE2QjtJQUM3QixrQkFBa0IsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLCBib2R5e1xcclxcbiAgIHBhZGRpbmc6MDtcXHJcXG4gICBtYXJnaW46MDtcXHJcXG59XCIsXCJAaW1wb3J0IFxcXCJiYXNlL2Jhc2VcXFwiO1xcclxcblxcclxcbmh0bWwsIGJvZHkge1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIG1heC13aWR0aDogMTAwdnc7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcblxcclxcbiAgICAtLWRhcmstY29sb3I6ICMzNTJmMjA7XFxyXFxuICAgIC0tbWlkLWNvbG9yOiAjYzJiYmE3O1xcclxcbiAgICAtLWxpZ2h0LWNvbG9yOiAjZTBkZGQ1O1xcclxcbiAgICAtLWRhcmstY29sb3ItYWxwaGE6ICMzNTJmMjBlZTtcXHJcXG5cXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVye1xcclxcbiAgICB3aWR0aDoxMDB2dztcXHJcXG4gICAgaGVpZ2h0OjEwMHZoO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcblxcclxcbiAgICBjYW52YXMge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5jcmVkaXRzLW92ZXJsYXl7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBib3R0b206IDI0cHg7XFxyXFxuICAgICAgICByaWdodDogMjRweDtcXHJcXG5cXHJcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1taWQtY29sb3IpO1xcclxcblxcclxcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICAuaW5mby1vdmVybGF5e1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgYm90dG9tOiAyNHB4O1xcclxcbiAgICAgICAgbGVmdDogMjRweDtcXHJcXG5cXHJcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1taWQtY29sb3IpO1xcclxcblxcclxcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1idXR0b24ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMjRweDtcXHJcXG4gICAgcmlnaHQ6IDI0cHg7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiA2MHB4O1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWRhcmstY29sb3IpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcblxcclxcbiAgICB6LWluZGV4OiAxMDAwO1xcclxcblxcclxcbiAgICAubWVudS1iYXIge1xcclxcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDUwJTtcXHJcXG4gICAgICAgIGxlZnQ6IDUwJTtcXHJcXG5cXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcblxcclxcbiAgICAgICAgd2lkdGg6IDI0cHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDNweDtcXHJcXG5cXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXHJcXG5cXHJcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0LCBvcGFjaXR5IDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRvcCB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCBjYWxjKC01MCUgLSA4cHgpKVxcclxcbiAgICB9XFxyXFxuICAgIC5ib3R0b20ge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgY2FsYygtNTAlICsgOHB4KSlcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLm9wZW4ge1xcclxcbiAgICAgICAgLnRvcCB7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDEzNWRlZyk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuYm90dG9tIHtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMjI1ZGVnKVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLm1pZCB7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCwgMTAwJSk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwcHg7XFxyXFxuICAgIHJpZ2h0OiAwcHg7XFxyXFxuICAgIGhlaWdodDoxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG5cXHJcXG4gICAgbWF4LXdpZHRoOjQwMHB4O1xcclxcblxcclxcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWNvbG9yLWFscGhhKTtcXHJcXG5cXHJcXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCB2aXNpYmlsaXR5O1xcclxcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcclxcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxyXFxuXFxyXFxuICAgIHotaW5kZXg6IDEwMDtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxyXFxuICAgIFxcclxcbiAgICBwYWRkaW5nOjI0cHg7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xcclxcblxcclxcbiAgICAubWVudS1zcGFjaW5ne1xcclxcbiAgICAgICAgaGVpZ2h0OjEwMHB4O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAubWVudS1oZWFkZXJ7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOjIwcHg7XFxyXFxuXFxyXFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWVudS1pdGVte1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcblxcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuICAgICAgICBjb2xvcjppbmhlcml0O1xcclxcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcclxcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgICAgICAgXFxyXFxuICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3JkZXItY29sb3I7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcclxcblxcclxcbiAgICAgICAgJjpob3ZlcntcXHJcXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi5pbml0IHtcXHJcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLmhpZGRlbiB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlLCAwKTtcXHJcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXBwLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hcHAuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgUmlnaWRib2R5MkQgfSBmcm9tIFwibGliL3hwYmQvUmlnaWRib2R5MkRcIjtcclxuaW1wb3J0IHsgU29sdmVyU2NlbmUgfSBmcm9tIFwiLi9Tb2x2ZXJTY2VuZVwiO1xyXG5pbXBvcnQgeyBEaXN0YW5jZUNvbnN0cmFpbnQyRCB9IGZyb20gXCJsaWIveHBiZC9EaXN0YW5jZUNvbnN0cmFpbnQyRFwiO1xyXG5pbXBvcnQgeyBDb25zdHJhaW50QXR0YWNobWVudDJEIH0gZnJvbSBcImxpYi94cGJkL0NvbnN0cmFpbnRBdHRhY2htZW50MkRcIjtcclxuaW1wb3J0IHsgUGluQ29uc3RyYWludDJEIH0gZnJvbSBcImxpYi94cGJkL1BpbkNvbnN0cmFpbnQyRFwiO1xyXG5pbXBvcnQgeyBSaWdpZEJvZHlQYXRocyB9IGZyb20gXCIuL3BhdGhzL1JpZ2lkQm9keVBhdGhzXCI7XHJcbmltcG9ydCB7IFJpZ2lkYm9keUdyYXBoaWMyRCB9IGZyb20gXCJsaWIveHBiZC9ncmFwaGljcy9SaWdpZGJvZHlHcmFwaGljMkRcIjtcclxuaW1wb3J0IHsgRGlzdGFuY2VDb25zdHJhaW50R3JhcGhpYzJEIH0gZnJvbSBcImxpYi94cGJkL2dyYXBoaWNzL0Rpc3RhbmNlQ29uc3RyYWludEdyYXBoaWMyRFwiO1xyXG5cclxuZnVuY3Rpb24gYWRkR3JhcGhpY3Moc2NlbmU6IFNvbHZlclNjZW5lLCBzcGFjaW5nID0gMSl7XHJcbiAgICBsZXQgZ3JhcGhpY3MgPSBuZXcgUmlnaWRCb2R5UGF0aHMoKTtcclxuICAgIGdyYXBoaWNzLmxpbmVXaWR0aCA9ICh3aW5kb3cgYXMgYW55KS5saW5lV2lkdGggPz8gMC4wNTtcclxuXHJcbiAgICBsZXQgYm9keUdyYXBoaWMgPSBncmFwaGljcy5jcmVhdGVCb2R5KDAuMik7XHJcbiAgICBsZXQgY29uc3RyYWludEdyYXBoaWMgPSBncmFwaGljcy5jcmVhdGVDb25uZWN0aW9uKHNwYWNpbmcpO1xyXG5cclxuICAgIHNjZW5lLmJvZGllcy5mb3JFYWNoKGJvZHkgPT4ge1xyXG4gICAgICAgIHNjZW5lLmJvZHlHcmFwaGljcy5wdXNoKG5ldyBSaWdpZGJvZHlHcmFwaGljMkQoYm9keSwgYm9keUdyYXBoaWMpKTtcclxuICAgIH0pO1xyXG4gICAgc2NlbmUuY29uc3RyYWludHMuZm9yRWFjaChjb25zdHJhaW50ID0+IHtcclxuICAgICAgICBpZighKGNvbnN0cmFpbnQgaW5zdGFuY2VvZiBEaXN0YW5jZUNvbnN0cmFpbnQyRCkpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICBzY2VuZS5jb25zdHJhaW50R3JhcGhpY3MucHVzaChuZXcgRGlzdGFuY2VDb25zdHJhaW50R3JhcGhpYzJEKGNvbnN0cmFpbnQsIGNvbnN0cmFpbnRHcmFwaGljKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJyaWRnZVNjZW5lKGNvdW50OiBudW1iZXIsIHNwYWNpbmc6IG51bWJlciA9IDEsIGNvbXBsaWFuY2UgPSAwLCBkYW1wZXJDb21wbGlhbmNlID0gLTEpe1xyXG4gICAgbGV0IHNjZW5lID0gbmV3IFNvbHZlclNjZW5lKCk7XHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspe1xyXG4gICAgICAgIGxldCBib2R5MSA9IG5ldyBSaWdpZGJvZHkyRCgpLnRyYW5zbGF0ZVRvKGkgKiBzcGFjaW5nLCAwKTtcclxuICAgICAgICBsZXQgYm9keTIgPSBuZXcgUmlnaWRib2R5MkQoKS50cmFuc2xhdGVUbyhpICogc3BhY2luZyArIHNwYWNpbmcgKiAwLjUsIC1zcGFjaW5nKTtcclxuXHJcbiAgICAgICAgLy8gVGhpcyBpcyBub3QgbmVlZGVkIGJ1dCBpcyBuaWNlIGZvciBncmFiYmluZyBpdCAoYmVjYXVzZSBvdGhlcndpc2UgeW91IGludHJvZHVjZSByYW5kb20gcm90YXRpb25zIGludG8gdGhlIGJyaWRnZSlcclxuICAgICAgICBib2R5MS5pbnZlcnNlSW5lcnRpYSA9IDA7XHJcbiAgICAgICAgYm9keTIuaW52ZXJzZUluZXJ0aWEgPSAwO1xyXG5cclxuICAgICAgICBzY2VuZS5ib2RpZXMucHVzaChib2R5MSk7XHJcbiAgICAgICAgc2NlbmUuYm9kaWVzLnB1c2goYm9keTIpO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgLy8gU3Bva2VzXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2NlbmUuYm9kaWVzLmxlbmd0aCAtIDE7IGkrKyl7XHJcbiAgICAgICAgbGV0IGZyb20gPSBzY2VuZS5ib2RpZXNbaV07XHJcbiAgICAgICAgbGV0IHRvID0gc2NlbmUuYm9kaWVzW2kgKyAxXTtcclxuICAgICAgICBsZXQgY29uc3RyYWludCA9IG5ldyBEaXN0YW5jZUNvbnN0cmFpbnQyRChuZXcgQ29uc3RyYWludEF0dGFjaG1lbnQyRChmcm9tKSwgbmV3IENvbnN0cmFpbnRBdHRhY2htZW50MkQodG8pKTtcclxuICAgICAgICBjb25zdHJhaW50LmNvbXBsaWFuY2UgPSBjb21wbGlhbmNlO1xyXG4gICAgICAgIGNvbnN0cmFpbnQuZGFtcGVyQ29tcGxpYW5jZSA9IGRhbXBlckNvbXBsaWFuY2U7XHJcblxyXG4gICAgICAgIHNjZW5lLmNvbnN0cmFpbnRzLnB1c2goY29uc3RyYWludCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEV2ZW4gY29ubmVjdGlvbnNcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzY2VuZS5ib2RpZXMubGVuZ3RoIC0gMjsgaSArPSAyKXtcclxuICAgICAgICBsZXQgZnJvbSA9IHNjZW5lLmJvZGllc1tpXTtcclxuICAgICAgICBsZXQgdG8gPSBzY2VuZS5ib2RpZXNbaSArIDJdO1xyXG4gICAgICAgIGxldCBjb25zdHJhaW50ID0gbmV3IERpc3RhbmNlQ29uc3RyYWludDJEKG5ldyBDb25zdHJhaW50QXR0YWNobWVudDJEKGZyb20pLCBuZXcgQ29uc3RyYWludEF0dGFjaG1lbnQyRCh0bykpO1xyXG4gICAgICAgIGNvbnN0cmFpbnQuY29tcGxpYW5jZSA9IGNvbXBsaWFuY2U7XHJcbiAgICAgICAgY29uc3RyYWludC5kYW1wZXJDb21wbGlhbmNlID0gZGFtcGVyQ29tcGxpYW5jZTtcclxuXHJcbiAgICAgICAgc2NlbmUuY29uc3RyYWludHMucHVzaChjb25zdHJhaW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVbmV2ZW4gY29ubmVjdGlvbnNcclxuICAgIGZvcihsZXQgaSA9IDE7IGkgPCBzY2VuZS5ib2RpZXMubGVuZ3RoIC0gMjsgaSArPSAyKXtcclxuICAgICAgICBsZXQgZnJvbSA9IHNjZW5lLmJvZGllc1tpXTtcclxuICAgICAgICBsZXQgdG8gPSBzY2VuZS5ib2RpZXNbaSArIDJdO1xyXG4gICAgICAgIGxldCBjb25zdHJhaW50ID0gbmV3IERpc3RhbmNlQ29uc3RyYWludDJEKG5ldyBDb25zdHJhaW50QXR0YWNobWVudDJEKGZyb20pLCBuZXcgQ29uc3RyYWludEF0dGFjaG1lbnQyRCh0bykpO1xyXG4gICAgICAgIGNvbnN0cmFpbnQuY29tcGxpYW5jZSA9IGNvbXBsaWFuY2U7XHJcbiAgICAgICAgY29uc3RyYWludC5kYW1wZXJDb21wbGlhbmNlID0gZGFtcGVyQ29tcGxpYW5jZTtcclxuXHJcbiAgICAgICAgc2NlbmUuY29uc3RyYWludHMucHVzaChjb25zdHJhaW50KTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcGluID0gbmV3IFBpbkNvbnN0cmFpbnQyRChuZXcgQ29uc3RyYWludEF0dGFjaG1lbnQyRChzY2VuZS5ib2RpZXNbMF0pKTtcclxuICAgIHNjZW5lLmNvbnN0cmFpbnRzLnB1c2gocGluKTtcclxuXHJcbiAgICBhZGRHcmFwaGljcyhzY2VuZSk7XHJcbiAgICBcclxuICAgIHJldHVybiBzY2VuZTtcclxufSIsImltcG9ydCB7IFJpZ2lkYm9keTJEIH0gZnJvbSBcImxpYi94cGJkL1JpZ2lkYm9keTJEXCI7XHJcbmltcG9ydCB7IFNvbHZlclNjZW5lIH0gZnJvbSBcIi4vU29sdmVyU2NlbmVcIjtcclxuaW1wb3J0IHsgRGlzdGFuY2VDb25zdHJhaW50MkQgfSBmcm9tIFwibGliL3hwYmQvRGlzdGFuY2VDb25zdHJhaW50MkRcIjtcclxuaW1wb3J0IHsgQ29uc3RyYWludEF0dGFjaG1lbnQyRCB9IGZyb20gXCJsaWIveHBiZC9Db25zdHJhaW50QXR0YWNobWVudDJEXCI7XHJcbmltcG9ydCB7IFBpbkNvbnN0cmFpbnQyRCB9IGZyb20gXCJsaWIveHBiZC9QaW5Db25zdHJhaW50MkRcIjtcclxuaW1wb3J0IHsgUmlnaWRCb2R5UGF0aHMgfSBmcm9tIFwiLi9wYXRocy9SaWdpZEJvZHlQYXRoc1wiO1xyXG5pbXBvcnQgeyBSaWdpZGJvZHlHcmFwaGljMkQgfSBmcm9tIFwibGliL3hwYmQvZ3JhcGhpY3MvUmlnaWRib2R5R3JhcGhpYzJEXCI7XHJcbmltcG9ydCB7IERpc3RhbmNlQ29uc3RyYWludEdyYXBoaWMyRCB9IGZyb20gXCJsaWIveHBiZC9ncmFwaGljcy9EaXN0YW5jZUNvbnN0cmFpbnRHcmFwaGljMkRcIjtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2xvdGgod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGNvbXBsaWFuY2UgPSAwLCBkYW1wZXJDb21wbGlhbmNlPSAwKXtcclxuICAgIGxldCBzY2VuZSA9IG5ldyBTb2x2ZXJTY2VuZSgpO1xyXG5cclxuICAgIGxldCBncmFwaGljcyA9IG5ldyBSaWdpZEJvZHlQYXRocygpO1xyXG4gICAgZ3JhcGhpY3MubGluZVdpZHRoID0gKHdpbmRvdyBhcyBhbnkpLmxpbmVXaWR0aCA/PyAwLjA1O1xyXG5cclxuICAgIGxldCBib2R5R3JhcGhpYyA9IGdyYXBoaWNzLmNyZWF0ZUJvZHkoMC4xKTtcclxuICAgIGxldCBjb25zdHJhaW50R3JhcGhpYyA9IGdyYXBoaWNzLmNyZWF0ZUNvbm5lY3Rpb24oMSk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIGFsbCBib2RpZXNcclxuICAgIGZvcihsZXQgaiA9IDA7IGogPCBoZWlnaHQ7IGorKyl7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHdpZHRoOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgYm9keSA9IG5ldyBSaWdpZGJvZHkyRCgpLnRyYW5zbGF0ZVRvKGksIGopO1xyXG4gICAgICAgICAgICBib2R5LmludmVyc2VJbmVydGlhID0gMDtcclxuICAgIFxyXG4gICAgICAgICAgICBzY2VuZS5ib2RpZXMucHVzaChib2R5KTtcclxuICAgIFxyXG4gICAgICAgICAgICBzY2VuZS5ib2R5R3JhcGhpY3MucHVzaChuZXcgUmlnaWRib2R5R3JhcGhpYzJEKGJvZHksIGJvZHlHcmFwaGljKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldEJvZHkgPSAoaTogbnVtYmVyLCBqOiBudW1iZXIpID0+IHtcclxuICAgICAgICByZXR1cm4gc2NlbmUuYm9kaWVzW2kgKyBqICogd2lkdGhdO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBTaWRld2F5c1xyXG4gICAgZm9yKGxldCBqID0gMDsgaiA8IGhlaWdodDsgaisrKXtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgd2lkdGggLSAxOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgY29uc3RyYWludCA9IG5ldyBEaXN0YW5jZUNvbnN0cmFpbnQyRChuZXcgQ29uc3RyYWludEF0dGFjaG1lbnQyRChnZXRCb2R5KGksIGopKSwgbmV3IENvbnN0cmFpbnRBdHRhY2htZW50MkQoZ2V0Qm9keShpICsgMSwgaikpLCB1bmRlZmluZWQsIGNvbXBsaWFuY2UpO1xyXG4gICAgICAgICAgICBjb25zdHJhaW50LmRhbXBlckNvbXBsaWFuY2UgPSBkYW1wZXJDb21wbGlhbmNlO1xyXG5cclxuICAgICAgICAgICAgc2NlbmUuY29uc3RyYWludHMucHVzaChjb25zdHJhaW50KTtcclxuICAgICAgICAgICAgc2NlbmUuY29uc3RyYWludEdyYXBoaWNzLnB1c2gobmV3IERpc3RhbmNlQ29uc3RyYWludEdyYXBoaWMyRChjb25zdHJhaW50LCBjb25zdHJhaW50R3JhcGhpYykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBUb3AgdG8gYm90dG9tXHJcbiAgICBmb3IobGV0IGogPSAwOyBqIDwgaGVpZ2h0IC0gMTsgaisrKXtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgd2lkdGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCBjb25zdHJhaW50ID0gbmV3IERpc3RhbmNlQ29uc3RyYWludDJEKG5ldyBDb25zdHJhaW50QXR0YWNobWVudDJEKGdldEJvZHkoaSwgaikpLCBuZXcgQ29uc3RyYWludEF0dGFjaG1lbnQyRChnZXRCb2R5KGksIGorIDEpKSwgdW5kZWZpbmVkLCBjb21wbGlhbmNlKTtcclxuICAgICAgICAgICAgY29uc3RyYWludC5kYW1wZXJDb21wbGlhbmNlID0gZGFtcGVyQ29tcGxpYW5jZTtcclxuXHJcbiAgICAgICAgICAgIHNjZW5lLmNvbnN0cmFpbnRzLnB1c2goY29uc3RyYWludCk7XHJcbiAgICAgICAgICAgIHNjZW5lLmNvbnN0cmFpbnRHcmFwaGljcy5wdXNoKG5ldyBEaXN0YW5jZUNvbnN0cmFpbnRHcmFwaGljMkQoY29uc3RyYWludCwgY29uc3RyYWludEdyYXBoaWMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFBpbiB0aGUgY29ybmVyc1xyXG4gICAgbGV0IHBpbkxlZnQgPSBuZXcgUGluQ29uc3RyYWludDJEKG5ldyBDb25zdHJhaW50QXR0YWNobWVudDJEKGdldEJvZHkoMCwgMCkpKTtcclxuICAgIGxldCBwaW5SaWdodCA9IG5ldyBQaW5Db25zdHJhaW50MkQobmV3IENvbnN0cmFpbnRBdHRhY2htZW50MkQoZ2V0Qm9keSh3aWR0aCAtIDEsIDApKSk7XHJcblxyXG4gICAgc2NlbmUuY29uc3RyYWludHMucHVzaChwaW5MZWZ0KTtcclxuICAgIHNjZW5lLmNvbnN0cmFpbnRzLnB1c2gocGluUmlnaHQpO1xyXG4gICAgLy8gc2NlbmUuY29uc3RyYWludHMucHVzaChwaW5Ub3ApO1xyXG4gICAgLy8gc2NlbmUuY29uc3RyYWludHMucHVzaChwaW5Cb3R0b20pO1xyXG4gICAgXHJcbiAgICByZXR1cm4gc2NlbmU7XHJcbn0iLCJpbXBvcnQgeyBSaWdpZGJvZHkyRCB9IGZyb20gXCJsaWIveHBiZC9SaWdpZGJvZHkyRFwiO1xyXG5pbXBvcnQgeyBTb2x2ZXJTY2VuZSB9IGZyb20gXCIuL1NvbHZlclNjZW5lXCI7XHJcbmltcG9ydCB7IERpc3RhbmNlQ29uc3RyYWludDJEIH0gZnJvbSBcImxpYi94cGJkL0Rpc3RhbmNlQ29uc3RyYWludDJEXCI7XHJcbmltcG9ydCB7IENvbnN0cmFpbnRBdHRhY2htZW50MkQgfSBmcm9tIFwibGliL3hwYmQvQ29uc3RyYWludEF0dGFjaG1lbnQyRFwiO1xyXG5pbXBvcnQgeyBQaW5Db25zdHJhaW50MkQgfSBmcm9tIFwibGliL3hwYmQvUGluQ29uc3RyYWludDJEXCI7XHJcbmltcG9ydCB7IFJpZ2lkQm9keVBhdGhzIH0gZnJvbSBcIi4vcGF0aHMvUmlnaWRCb2R5UGF0aHNcIjtcclxuaW1wb3J0IHsgUmlnaWRib2R5R3JhcGhpYzJEIH0gZnJvbSBcImxpYi94cGJkL2dyYXBoaWNzL1JpZ2lkYm9keUdyYXBoaWMyRFwiO1xyXG5pbXBvcnQgeyBEaXN0YW5jZUNvbnN0cmFpbnRHcmFwaGljMkQgfSBmcm9tIFwibGliL3hwYmQvZ3JhcGhpY3MvRGlzdGFuY2VDb25zdHJhaW50R3JhcGhpYzJEXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwibGliL21hdGgvVmVjdG9yMlwiO1xyXG5pbXBvcnQgeyBBeGlzQ29uc3RyYWludDJEIH0gZnJvbSBcImxpYi94cGJkL0F4aXNDb25zdHJhaW50MkRcIjtcclxuXHJcbmZ1bmN0aW9uIGFkZEdyYXBoaWNzKHNjZW5lOiBTb2x2ZXJTY2VuZSwgc3BhY2luZyA9IDEpe1xyXG4gICAgbGV0IGdyYXBoaWNzID0gbmV3IFJpZ2lkQm9keVBhdGhzKCk7XHJcbiAgICBncmFwaGljcy5saW5lV2lkdGggPSAod2luZG93IGFzIGFueSkubGluZVdpZHRoID8/IDAuMDU7XHJcblxyXG4gICAgc2NlbmUuYm9kaWVzLmZvckVhY2goYm9keSA9PiB7XHJcbiAgICAgICAgbGV0IGJvZHlHcmFwaGljID0gZ3JhcGhpY3MuY3JlYXRlQm9keShNYXRoLnNxcnQoYm9keS5tYXNzKSAqIDAuMik7XHJcblxyXG4gICAgICAgIHNjZW5lLmJvZHlHcmFwaGljcy5wdXNoKG5ldyBSaWdpZGJvZHlHcmFwaGljMkQoYm9keSwgYm9keUdyYXBoaWMpKTtcclxuICAgIH0pO1xyXG4gICAgc2NlbmUuY29uc3RyYWludHMuZm9yRWFjaChjb25zdHJhaW50ID0+IHtcclxuICAgICAgICBpZighKGNvbnN0cmFpbnQgaW5zdGFuY2VvZiBEaXN0YW5jZUNvbnN0cmFpbnQyRCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IGNvbnN0cmFpbnRHcmFwaGljID0gZ3JhcGhpY3MuY3JlYXRlQ29ubmVjdGlvbihjb25zdHJhaW50LnJlc3REaXN0YW5jZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2NlbmUuY29uc3RyYWludEdyYXBoaWNzLnB1c2gobmV3IERpc3RhbmNlQ29uc3RyYWludEdyYXBoaWMyRChjb25zdHJhaW50LCBjb25zdHJhaW50R3JhcGhpYykpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb21wbGljYXRlZFNjZW5lKCl7XHJcbiAgICBsZXQgc2NlbmUgPSBuZXcgU29sdmVyU2NlbmUoKTtcclxuXHJcbiAgICBsZXQgdG9wV2VpZ2h0ID0gbmV3IFJpZ2lkYm9keTJEKCkudHJhbnNsYXRlKDAsIC0yKTtcclxuICAgIHRvcFdlaWdodC5tYXNzID0gNDtcclxuICAgIHRvcFdlaWdodC5pbmVydGlhID0gNDtcclxuXHJcbiAgICBsZXQgcmlnaHRXZWlnaHQgPSBuZXcgUmlnaWRib2R5MkQoKS50cmFuc2xhdGVUbygzLCAwKTtcclxuICAgIHJpZ2h0V2VpZ2h0Lm1hc3MgPSA1O1xyXG4gICAgcmlnaHRXZWlnaHQuaW5lcnRpYSA9IDU7XHJcblxyXG4gICAgbGV0IGxlZnRXZWlnaHQgPSBuZXcgUmlnaWRib2R5MkQoKS50cmFuc2xhdGVUbygtMywgMCk7XHJcbiAgICBsZWZ0V2VpZ2h0Lm1hc3MgPSA1O1xyXG4gICAgbGVmdFdlaWdodC5pbmVydGlhID0gNTtcclxuXHJcbiAgICBsZXQgd2VpZ2h0ID0gbmV3IFJpZ2lkYm9keTJEKCk7XHJcbiAgICB3ZWlnaHQubWFzcyA9IDEwO1xyXG4gICAgd2VpZ2h0LmluZXJ0aWEgPSAxMDtcclxuICAgIFxyXG4gICAgbGV0IGxlZnQgPSBuZXcgUmlnaWRib2R5MkQoKS50cmFuc2xhdGVUbygtMC41LCAxKTtcclxuICAgIGxldCBsZWZ0Qm90dG9tID0gbmV3IFJpZ2lkYm9keTJEKCkudHJhbnNsYXRlVG8oLTAuNSwgMik7XHJcbiAgICBsZXQgcmlnaHQgPSBuZXcgUmlnaWRib2R5MkQoKS50cmFuc2xhdGVUbygwLjUsIDEpO1xyXG5cclxuICAgIGxlZnQubWFzcyA9IDE7XHJcbiAgICByaWdodC5tYXNzID0gMjtcclxuXHJcbiAgICBsZXQgbGVmdENvbm5lY3Rpb24gPSBuZXcgRGlzdGFuY2VDb25zdHJhaW50MkQobmV3IENvbnN0cmFpbnRBdHRhY2htZW50MkQobGVmdCwgbmV3IFZlY3RvcjIoMCwgMCkpLCBuZXcgQ29uc3RyYWludEF0dGFjaG1lbnQyRCh3ZWlnaHQsIG5ldyBWZWN0b3IyKC0wLjUsIDApKSk7XHJcbiAgICBsZXQgcmlnaHRDb25uZWN0aW9uID0gbmV3IERpc3RhbmNlQ29uc3RyYWludDJEKG5ldyBDb25zdHJhaW50QXR0YWNobWVudDJEKHJpZ2h0LCBuZXcgVmVjdG9yMigwLCAwKSksIG5ldyBDb25zdHJhaW50QXR0YWNobWVudDJEKHdlaWdodCwgbmV3IFZlY3RvcjIoMC41LCAwKSkpO1xyXG4gICAgbGV0IGxlZnRCb3R0b21Db25uZWN0aW9uID0gbmV3IERpc3RhbmNlQ29uc3RyYWludDJEKG5ldyBDb25zdHJhaW50QXR0YWNobWVudDJEKGxlZnQsIG5ldyBWZWN0b3IyKDAsIDApKSwgbmV3IENvbnN0cmFpbnRBdHRhY2htZW50MkQobGVmdEJvdHRvbSwgbmV3IFZlY3RvcjIoMCwgMCkpKTtcclxuXHJcbiAgICBsZXQgd2VpZ2h0Q29ubmVjdGlvblJpZ2h0ID0gbmV3IERpc3RhbmNlQ29uc3RyYWludDJEKG5ldyBDb25zdHJhaW50QXR0YWNobWVudDJEKHJpZ2h0V2VpZ2h0LCBuZXcgVmVjdG9yMigtMC4zLCAwKSksIG5ldyBDb25zdHJhaW50QXR0YWNobWVudDJEKHdlaWdodCwgbmV3IFZlY3RvcjIoMC41LCAwKSkpO1xyXG4gICAgbGV0IHdlaWdodENvbm5lY3Rpb25MZWZ0ID0gbmV3IERpc3RhbmNlQ29uc3RyYWludDJEKG5ldyBDb25zdHJhaW50QXR0YWNobWVudDJEKGxlZnRXZWlnaHQsIG5ldyBWZWN0b3IyKDAuMywgMCkpLCBuZXcgQ29uc3RyYWludEF0dGFjaG1lbnQyRCh3ZWlnaHQsIG5ldyBWZWN0b3IyKC0wLjUsIDApKSk7XHJcblxyXG4gICAgbGV0IHdlaWdodFBpbiA9IG5ldyBQaW5Db25zdHJhaW50MkQobmV3IENvbnN0cmFpbnRBdHRhY2htZW50MkQod2VpZ2h0KSk7XHJcbiAgICBsZXQgcmlnaHRXZWlnaHRBeGlzID0gbmV3IEF4aXNDb25zdHJhaW50MkQobmV3IENvbnN0cmFpbnRBdHRhY2htZW50MkQocmlnaHRXZWlnaHQpLCBuZXcgVmVjdG9yMigwLCAwKSwgbmV3IFZlY3RvcjIoMSwgMCkpO1xyXG4gICAgbGV0IGxlZnRXZWlnaHRBeGlzID0gbmV3IEF4aXNDb25zdHJhaW50MkQobmV3IENvbnN0cmFpbnRBdHRhY2htZW50MkQobGVmdFdlaWdodCksIG5ldyBWZWN0b3IyKDAsIDApLCBuZXcgVmVjdG9yMigxLCAwKSk7XHJcblxyXG4gICAgbGV0IGxlZnRUb3BDb25uZWN0aW9uID0gbmV3IERpc3RhbmNlQ29uc3RyYWludDJEKG5ldyBDb25zdHJhaW50QXR0YWNobWVudDJEKGxlZnRXZWlnaHQpLCBuZXcgQ29uc3RyYWludEF0dGFjaG1lbnQyRCh0b3BXZWlnaHQsIG5ldyBWZWN0b3IyKC0wLjMsIDApKSk7XHJcbiAgICBsZXQgcmlnaHRUb3BDb25uZWN0aW9uID0gbmV3IERpc3RhbmNlQ29uc3RyYWludDJEKG5ldyBDb25zdHJhaW50QXR0YWNobWVudDJEKHJpZ2h0V2VpZ2h0KSwgbmV3IENvbnN0cmFpbnRBdHRhY2htZW50MkQodG9wV2VpZ2h0LCBuZXcgVmVjdG9yMigwLjMsIDApKSk7XHJcblxyXG4gICAgc2NlbmUuYm9kaWVzLnB1c2god2VpZ2h0KTtcclxuICAgIHNjZW5lLmJvZGllcy5wdXNoKGxlZnQpO1xyXG4gICAgc2NlbmUuYm9kaWVzLnB1c2gocmlnaHQpO1xyXG4gICAgc2NlbmUuYm9kaWVzLnB1c2gobGVmdEJvdHRvbSk7XHJcbiAgICBzY2VuZS5ib2RpZXMucHVzaChyaWdodFdlaWdodCk7XHJcbiAgICBzY2VuZS5ib2RpZXMucHVzaChsZWZ0V2VpZ2h0KTtcclxuICAgIHNjZW5lLmJvZGllcy5wdXNoKHRvcFdlaWdodCk7XHJcblxyXG4gICAgc2NlbmUuY29uc3RyYWludHMucHVzaCh3ZWlnaHRQaW4pO1xyXG4gICAgc2NlbmUuY29uc3RyYWludHMucHVzaChsZWZ0Q29ubmVjdGlvbik7XHJcbiAgICBzY2VuZS5jb25zdHJhaW50cy5wdXNoKHJpZ2h0Q29ubmVjdGlvbik7XHJcbiAgICBzY2VuZS5jb25zdHJhaW50cy5wdXNoKGxlZnRCb3R0b21Db25uZWN0aW9uKTtcclxuICAgIHNjZW5lLmNvbnN0cmFpbnRzLnB1c2gocmlnaHRXZWlnaHRBeGlzKTtcclxuICAgIHNjZW5lLmNvbnN0cmFpbnRzLnB1c2gobGVmdFdlaWdodEF4aXMpO1xyXG5cclxuICAgIHNjZW5lLmNvbnN0cmFpbnRzLnB1c2god2VpZ2h0Q29ubmVjdGlvblJpZ2h0KTtcclxuICAgIHNjZW5lLmNvbnN0cmFpbnRzLnB1c2god2VpZ2h0Q29ubmVjdGlvbkxlZnQpO1xyXG5cclxuICAgIHNjZW5lLmNvbnN0cmFpbnRzLnB1c2gobGVmdFRvcENvbm5lY3Rpb24pO1xyXG4gICAgc2NlbmUuY29uc3RyYWludHMucHVzaChyaWdodFRvcENvbm5lY3Rpb24pO1xyXG5cclxuICAgIGFkZEdyYXBoaWNzKHNjZW5lKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHNjZW5lO1xyXG59IiwiaW1wb3J0IHsgUmlnaWRib2R5MkQgfSBmcm9tIFwibGliL3hwYmQvUmlnaWRib2R5MkRcIjtcclxuaW1wb3J0IHsgU29sdmVyU2NlbmUgfSBmcm9tIFwiLi9Tb2x2ZXJTY2VuZVwiO1xyXG5pbXBvcnQgeyBBeGlzQ29uc3RyYWludDJEIH0gZnJvbSBcImxpYi94cGJkL0F4aXNDb25zdHJhaW50MkRcIjtcclxuaW1wb3J0IHsgRGlzdGFuY2VDb25zdHJhaW50MkQgfSBmcm9tIFwibGliL3hwYmQvRGlzdGFuY2VDb25zdHJhaW50MkRcIjtcclxuaW1wb3J0IHsgUGluQ29uc3RyYWludDJEIH0gZnJvbSBcImxpYi94cGJkL1BpbkNvbnN0cmFpbnQyRFwiO1xyXG5pbXBvcnQgeyBDb25zdHJhaW50QXR0YWNobWVudDJEIH0gZnJvbSBcImxpYi94cGJkL0NvbnN0cmFpbnRBdHRhY2htZW50MkRcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCJsaWIvbWF0aC9WZWN0b3IyXCI7XHJcbmltcG9ydCB7IEF4bGVDb3NudHJhaW50MkQgfSBmcm9tIFwibGliL3hwYmQvQXhsZUNvbnN0cmFpbnQyRFwiO1xyXG5pbXBvcnQgeyBFbmdpbmVQYXJ0UGF0aHMgfSBmcm9tIFwiYXBwL3BhdGhzL0VuZ2luZVBhcnRQYXRoc1wiO1xyXG5pbXBvcnQgeyBSaWdpZGJvZHlHcmFwaGljMkQgfSBmcm9tIFwibGliL3hwYmQvZ3JhcGhpY3MvUmlnaWRib2R5R3JhcGhpYzJEXCI7XHJcbmltcG9ydCB7IERpc3RhbmNlQ29uc3RyYWludEdyYXBoaWMyRCB9IGZyb20gXCJsaWIveHBiZC9ncmFwaGljcy9EaXN0YW5jZUNvbnN0cmFpbnRHcmFwaGljMkRcIjtcclxuXHJcbmludGVyZmFjZSBDeWxpbmRlciB7XHJcbiAgICBwaXN0b246IFJpZ2lkYm9keTJELFxyXG4gICAgY291bnRlcldlaWdodDogUmlnaWRib2R5MkQsXHJcbiAgICBcclxuICAgIGNyYW5rQXJtOiBEaXN0YW5jZUNvbnN0cmFpbnQyRCxcclxuXHJcbiAgICBwaGFzZTogbnVtYmVyLFxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUGlzdG9uKHNjZW5lOiBTb2x2ZXJTY2VuZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHBoYXNlOiBudW1iZXIpOiBDeWxpbmRlciB7XHJcbiAgICBsZXQgcmFkaXVzID0gMC41O1xyXG4gICAgXHJcbiAgICBsZXQgcGlzdG9uID0gbmV3IFJpZ2lkYm9keTJEKCk7XHJcbiAgICBwaXN0b24udHJhbnNsYXRlVG8oeCwgeSAtIDEuNSArIE1hdGguc2luKHBoYXNlKSk7XHJcbiBcclxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBjYW5ub3Qgcm90YXRlIHRoZSBwaXN0b24uXHJcbiAgICBwaXN0b24uaW52ZXJzZUluZXJ0aWEgPSAwO1xyXG4gXHJcbiAgICBsZXQgY291bnRlcldlaWdodCA9IG5ldyBSaWdpZGJvZHkyRCgpO1xyXG4gICAgY291bnRlcldlaWdodC50cmFuc2xhdGVUbyh4LCB5KTtcclxuIFxyXG4gICAgbGV0IHBpc3RvbldhbGxzID0gbmV3IEF4aXNDb25zdHJhaW50MkQobmV3IENvbnN0cmFpbnRBdHRhY2htZW50MkQocGlzdG9uKSwgbmV3IFZlY3RvcjIoeCwgeSksIG5ldyBWZWN0b3IyKDAsIDEpKTtcclxuICAgIFxyXG4gICAgLy8gVE9ETyB0aGlzIGRpc3RhbmNlIGlzIG5vdyBzZXQgdG8gMiBidXQgdGhpcyBtZWFucyB0aGUgd2hvbGUgdGhpbmcgc3RhcnRzIG9mZiB3aXRoIHNvbWUgZW5lcmd5IGluIHRoZSBzeXN0ZW0gYmVjYXVzZSB0aGUgY29uc3RyYWludHMgYXJlIG5vdCBtZXRcclxuICAgIGxldCBjcmFua0FybSA9IG5ldyBEaXN0YW5jZUNvbnN0cmFpbnQyRChcclxuICAgICAgICAgICAgbmV3IENvbnN0cmFpbnRBdHRhY2htZW50MkQocGlzdG9uKSwgXHJcbiAgICAgICAgICAgIG5ldyBDb25zdHJhaW50QXR0YWNobWVudDJEKGNvdW50ZXJXZWlnaHQsIFxyXG4gICAgICAgICAgICBWZWN0b3IyLmFuZ2xlZChwaGFzZSkuc2NhbGUocmFkaXVzKSksIFxyXG4gICAgICAgICAgICAxLjUpO1xyXG4gICAgXHJcbiAgICBsZXQgY3JhbmtTaGFmdCA9IG5ldyBQaW5Db25zdHJhaW50MkQobmV3IENvbnN0cmFpbnRBdHRhY2htZW50MkQoY291bnRlcldlaWdodCksIGNvdW50ZXJXZWlnaHQucG9zaXRpb24uY2xvbmUoKSk7XHJcbiBcclxuICAgIHNjZW5lLmJvZGllcy5wdXNoKHBpc3Rvbik7XHJcbiAgICBzY2VuZS5ib2RpZXMucHVzaChjb3VudGVyV2VpZ2h0KTtcclxuIFxyXG4gICAgc2NlbmUuY29uc3RyYWludHMucHVzaChwaXN0b25XYWxscyk7XHJcbiAgICBzY2VuZS5jb25zdHJhaW50cy5wdXNoKGNyYW5rU2hhZnQpO1xyXG4gICAgc2NlbmUuY29uc3RyYWludHMucHVzaChjcmFua0FybSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwaXN0b24sXHJcbiAgICAgICAgY291bnRlcldlaWdodCxcclxuICAgICAgICBjcmFua0FybSxcclxuICAgICAgICBwaGFzZSxcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRBeGxlKHNjZW5lOiBTb2x2ZXJTY2VuZSwgYm9kaWVzOiBSaWdpZGJvZHkyRFtdKXtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoIC0gMTsgaSsrKXtcclxuICAgICAgICBsZXQgY29uc3RyYWludCA9IG5ldyBBeGxlQ29zbnRyYWludDJEKGJvZGllc1tpXSwgYm9kaWVzW2kgKyAxXSk7XHJcblxyXG4gICAgICAgIHNjZW5lLmNvbnN0cmFpbnRzLnB1c2goY29uc3RyYWludCk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gYWRkQ3lsaW5kZXJzKHNjZW5lOiBTb2x2ZXJTY2VuZSwgYW1vdW50OiBudW1iZXIpOiBDeWxpbmRlcltde1xyXG4gICAgbGV0IGN5bGluZGVyczogQ3lsaW5kZXJbXSA9IFtdO1xyXG5cclxuICAgIGxldCBzcGFjaW5nID0gMS41O1xyXG5cclxuICAgIGxldCBwaGFzZU9mZnNldCA9IE1hdGguUEk7XHJcbiAgICBcclxuICAgIGxldCB3aWR0aCA9IChhbW91bnQgLSAxKSAqIHNwYWNpbmc7XHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFtb3VudDsgaSsrKSB7XHJcbiAgICAgICAgY3lsaW5kZXJzLnB1c2goYWRkUGlzdG9uKHNjZW5lLCAtd2lkdGggLyAyICsgc3BhY2luZyAqIGksIDAsIHBoYXNlT2Zmc2V0ICogaSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjeWxpbmRlcnM7XHJcbn1cclxuZnVuY3Rpb24gYWRkR3JhcGhpY3Moc2NlbmU6IFNvbHZlclNjZW5lLCBjeWxpbmRlcnM6IEN5bGluZGVyW10pe1xyXG4gICAgbGV0IGcgPSBuZXcgRW5naW5lUGFydFBhdGhzKCk7XHJcbiAgICBnLmxpbmVXaWR0aCA9ICh3aW5kb3cgYXMgYW55KS5saW5lV2lkdGggPz8gMC4wNTtcclxuXHJcbiAgICBsZXQgcGlzdG9uID0gZy5jcmVhdGVQaXN0b24oMSwgMC44KTtcclxuICAgIGxldCBhcm0gPSBnLmNyZWF0ZUFybSgxLjVcclxuICAgICAgICApO1xyXG4gICAgbGV0IGNvdW50ZXJXZWlnaHQgPSBnLmNyZWF0ZUNvdW50ZXJXZWlnaHQoMC41KTtcclxuXHJcbiAgICBjeWxpbmRlcnMuZm9yRWFjaChjeWxpbmRlciA9PiB7XHJcbiAgICAgICAgc2NlbmUuYm9keUdyYXBoaWNzLnB1c2gobmV3IFJpZ2lkYm9keUdyYXBoaWMyRChjeWxpbmRlci5waXN0b24sIHBpc3RvbikpO1xyXG4gICAgICAgIHNjZW5lLmJvZHlHcmFwaGljcy5wdXNoKG5ldyBSaWdpZGJvZHlHcmFwaGljMkQoY3lsaW5kZXIuY291bnRlcldlaWdodCwgY291bnRlcldlaWdodCkuc2V0Um90YXRpb25hbE9mZnNldChjeWxpbmRlci5waGFzZSkpO1xyXG5cclxuICAgICAgICBzY2VuZS5jb25zdHJhaW50R3JhcGhpY3MucHVzaChuZXcgRGlzdGFuY2VDb25zdHJhaW50R3JhcGhpYzJEKGN5bGluZGVyLmNyYW5rQXJtLCBhcm0pKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRW5naW5lVGVzdFNjZW5lKGN5bGluZGVyQ291bnQ6IG51bWJlcil7XHJcbiAgICBsZXQgc2NlbmUgPSBuZXcgU29sdmVyU2NlbmUoKTtcclxuXHJcbiAgICBsZXQgY3lsaW5kZXJzID0gYWRkQ3lsaW5kZXJzKHNjZW5lLCBjeWxpbmRlckNvdW50KTtcclxuXHJcbiAgICBhZGRBeGxlKHNjZW5lLCBjeWxpbmRlcnMubWFwKGN5bGlkbmVyID0+IGN5bGlkbmVyLmNvdW50ZXJXZWlnaHQpKTtcclxuXHJcbiAgICBhZGRHcmFwaGljcyhzY2VuZSwgY3lsaW5kZXJzKTtcclxuIFxyXG4gICAgcmV0dXJuIHNjZW5lO1xyXG59IiwiXHJcbmxldCBtZW51OiBIVE1MRWxlbWVudDtcclxubGV0IG1lbnVCdXR0b246IEhUTUxFbGVtZW50O1xyXG5cclxubGV0IG1lbnVPcGVuID0gZmFsc2U7XHJcblxyXG5mdW5jdGlvbiBzZXRNZW51T3Blbih2OiBib29sZWFuKXtcclxuICAgIG1lbnVPcGVuID0gdjtcclxuICAgIHN5bmNNZW51KCk7XHJcbn1cclxuZnVuY3Rpb24gdG9nZ2xlTWVudSgpe1xyXG4gICAgbWVudU9wZW4gPSAhbWVudU9wZW47XHJcbiAgICBzeW5jTWVudSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzeW5jTWVudSgpe1xyXG4gICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiaW5pdFwiKTtcclxuXHJcbiAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIiwgIW1lbnVPcGVuKTtcclxuICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIiwgbWVudU9wZW4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdE1lbnUoKXtcclxuICAgIG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIikgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBtZW51QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LWJ1dHRvblwiKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0b2dnbGVNZW51KCkpO1xyXG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBzZXRNZW51T3BlbihmYWxzZSkpO1xyXG5cclxuICAgIGxldCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudS1pdGVtXCIpO1xyXG4gICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBzZXRNZW51T3BlbihmYWxzZSkpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuXHJcbiAgICBcclxuICAgIHN5bmNNZW51KCk7XHJcbn0iLCJpbXBvcnQgeyBSaWdpZGJvZHkyRCB9IGZyb20gXCJsaWIveHBiZC9SaWdpZGJvZHkyRFwiO1xyXG5pbXBvcnQgeyBTb2x2ZXJTY2VuZSB9IGZyb20gXCIuL1NvbHZlclNjZW5lXCI7XHJcbmltcG9ydCB7IERpc3RhbmNlQ29uc3RyYWludDJEIH0gZnJvbSBcImxpYi94cGJkL0Rpc3RhbmNlQ29uc3RyYWludDJEXCI7XHJcbmltcG9ydCB7IENvbnN0cmFpbnRBdHRhY2htZW50MkQgfSBmcm9tIFwibGliL3hwYmQvQ29uc3RyYWludEF0dGFjaG1lbnQyRFwiO1xyXG5pbXBvcnQgeyBQaW5Db25zdHJhaW50MkQgfSBmcm9tIFwibGliL3hwYmQvUGluQ29uc3RyYWludDJEXCI7XHJcbmltcG9ydCB7IFJpZ2lkQm9keVBhdGhzIH0gZnJvbSBcIi4vcGF0aHMvUmlnaWRCb2R5UGF0aHNcIjtcclxuaW1wb3J0IHsgUmlnaWRib2R5R3JhcGhpYzJEIH0gZnJvbSBcImxpYi94cGJkL2dyYXBoaWNzL1JpZ2lkYm9keUdyYXBoaWMyRFwiO1xyXG5pbXBvcnQgeyBEaXN0YW5jZUNvbnN0cmFpbnRHcmFwaGljMkQgfSBmcm9tIFwibGliL3hwYmQvZ3JhcGhpY3MvRGlzdGFuY2VDb25zdHJhaW50R3JhcGhpYzJEXCI7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBlbmR1bHVtVGVzdChjb3VudDogbnVtYmVyLCBzcGFjaW5nOiBudW1iZXIgPSAxLCBjb21wbGlhbmNlID0gMCwgZGFtcGVyQ29tcGxpYW5jZSA9IC0xKXtcclxuICAgIGxldCBzY2VuZSA9IG5ldyBTb2x2ZXJTY2VuZSgpO1xyXG5cclxuICAgIGxldCBncmFwaGljcyA9IG5ldyBSaWdpZEJvZHlQYXRocygpO1xyXG4gICAgZ3JhcGhpY3MubGluZVdpZHRoID0gKHdpbmRvdyBhcyBhbnkpLmxpbmVXaWR0aCA/PyAwLjA1O1xyXG5cclxuICAgIGxldCBib2R5R3JhcGhpYyA9IGdyYXBoaWNzLmNyZWF0ZUJvZHkoTWF0aC5taW4oc3BhY2luZyAvIDIgLSAwLjEsIDAuNCkpO1xyXG4gICAgbGV0IGNvbnN0cmFpbnRHcmFwaGljID0gZ3JhcGhpY3MuY3JlYXRlQ29ubmVjdGlvbihzcGFjaW5nKTtcclxuXHJcbiAgICBsZXQgaW5pdGlhbEJvZHkgPSBuZXcgUmlnaWRib2R5MkQoKS50cmFuc2xhdGVUbygwLCAwKVxyXG4gICAgc2NlbmUuYm9kaWVzLnB1c2goaW5pdGlhbEJvZHkpO1xyXG4gICAgc2NlbmUuYm9keUdyYXBoaWNzLnB1c2gobmV3IFJpZ2lkYm9keUdyYXBoaWMyRChpbml0aWFsQm9keSwgYm9keUdyYXBoaWMpKTtcclxuXHJcbiAgICBpbml0aWFsQm9keS5pbnZlcnNlSW5lcnRpYSA9IDA7XHJcblxyXG5cclxuICAgIGxldCBwcmV2aW91c0JvZHkgPSBpbml0aWFsQm9keTtcclxuXHJcbiAgICBmb3IobGV0IGkgPSAxOyBpIDwgY291bnQ7IGkrKyl7XHJcbiAgICAgICAgLy8gVmVyeSBzbGlndGggcmFuZG9tIG9mZnNldCBvZiB0aGUgeCB0byBnaXZlIGl0IHNvbWUgY29vbCBhbmltYXRpb24gOilcclxuICAgICAgICBsZXQgYm9keSA9IG5ldyBSaWdpZGJvZHkyRCgpLnRyYW5zbGF0ZVRvKE1hdGgucmFuZG9tKCkgKiAwLjAwMSwgLWkgKiBzcGFjaW5nKTtcclxuICAgICAgICBsZXQgY29uc3RyYWludCA9IG5ldyBEaXN0YW5jZUNvbnN0cmFpbnQyRChuZXcgQ29uc3RyYWludEF0dGFjaG1lbnQyRChib2R5KSwgbmV3IENvbnN0cmFpbnRBdHRhY2htZW50MkQocHJldmlvdXNCb2R5KSk7XHJcbiAgICAgICAgY29uc3RyYWludC5jb21wbGlhbmNlID0gY29tcGxpYW5jZTtcclxuICAgICAgICBjb25zdHJhaW50LmRhbXBlckNvbXBsaWFuY2UgPSBkYW1wZXJDb21wbGlhbmNlO1xyXG5cclxuICAgICAgICBib2R5LmludmVyc2VJbmVydGlhID0gMDtcclxuXHJcbiAgICAgICAgc2NlbmUuYm9kaWVzLnB1c2goYm9keSk7XHJcbiAgICAgICAgc2NlbmUuY29uc3RyYWludHMucHVzaChjb25zdHJhaW50KTtcclxuXHJcbiAgICAgICAgc2NlbmUuYm9keUdyYXBoaWNzLnB1c2gobmV3IFJpZ2lkYm9keUdyYXBoaWMyRChib2R5LCBib2R5R3JhcGhpYykpO1xyXG4gICAgICAgIHNjZW5lLmNvbnN0cmFpbnRHcmFwaGljcy5wdXNoKG5ldyBEaXN0YW5jZUNvbnN0cmFpbnRHcmFwaGljMkQoY29uc3RyYWludCwgY29uc3RyYWludEdyYXBoaWMpKTtcclxuXHJcbiAgICAgICAgcHJldmlvdXNCb2R5ID0gYm9keTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IHBpbiA9IG5ldyBQaW5Db25zdHJhaW50MkQobmV3IENvbnN0cmFpbnRBdHRhY2htZW50MkQoaW5pdGlhbEJvZHkpKTtcclxuICAgIHNjZW5lLmNvbnN0cmFpbnRzLnB1c2gocGluKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHNjZW5lO1xyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCJsaWIvbWF0aC9WZWN0b3IyXCI7XHJcbmltcG9ydCB7IEF4aXNDb25zdHJhaW50MkQgfSBmcm9tIFwibGliL3hwYmQvQXhpc0NvbnN0cmFpbnQyRFwiO1xyXG5pbXBvcnQgeyBDb25zdHJhaW50MkQgfSBmcm9tIFwibGliL3hwYmQvQ29uc3RyYWludDJEXCI7XHJcbmltcG9ydCB7IERpc3RhbmNlQ29uc3RyYWludDJEIH0gZnJvbSBcImxpYi94cGJkL0Rpc3RhbmNlQ29uc3RyYWludDJEXCI7XHJcbmltcG9ydCB7IFBpbkNvbnN0cmFpbnQyRCB9IGZyb20gXCJsaWIveHBiZC9QaW5Db25zdHJhaW50MkRcIjtcclxuaW1wb3J0IHsgUmlnaWRib2R5MkQgfSBmcm9tIFwibGliL3hwYmQvUmlnaWRib2R5MkRcIjtcclxuaW1wb3J0IHsgRGlzdGFuY2VDb25zdHJhaW50R3JhcGhpYzJEIH0gZnJvbSBcImxpYi94cGJkL2dyYXBoaWNzL0Rpc3RhbmNlQ29uc3RyYWludEdyYXBoaWMyRFwiO1xyXG5pbXBvcnQgeyBSaWdpZGJvZHlHcmFwaGljMkQgfSBmcm9tIFwibGliL3hwYmQvZ3JhcGhpY3MvUmlnaWRib2R5R3JhcGhpYzJEXCI7XHJcbmltcG9ydCB7IEdyYXBoaWNzMkQgfSBmcm9tIFwibGliL2dyYXBoaWNzL0dyYXBoaWNzMkRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTb2x2ZXJTY2VuZSB7XHJcbiAgICBib2RpZXM6IFJpZ2lkYm9keTJEW10gPSBbXTtcclxuICAgIGNvbnN0cmFpbnRzOiBDb25zdHJhaW50MkRbXSA9IFtdO1xyXG5cclxuICAgIGJvZHlHcmFwaGljczogUmlnaWRib2R5R3JhcGhpYzJEW10gPSBbXTtcclxuICAgIGNvbnN0cmFpbnRHcmFwaGljczogRGlzdGFuY2VDb25zdHJhaW50R3JhcGhpYzJEW10gPSBbXTtcclxuXHJcbiAgICBzdWJzdGVwczogbnVtYmVyID0gMTtcclxuICAgIGNvbnN0cmFpbnRTdWJzdGVwczogbnVtYmVyID0gMTtcclxuXHJcbiAgICBncmF2aXR5UmF0ZTogbnVtYmVyID0gMTtcclxuICAgIHRpbWVSYXRlOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN1YnN0ZXBzOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gTm90ZSB0aGF0IHdlIGRvIGhhdmUgdG8gZGl2aWRlIGRlbHRhIGludG8gdGhlIHN1YnN0ZXBzIGhlcmUuXHJcbiAgICAgICAgICAgIHRoaXMuc3RlcChkZWx0YSAvIHRoaXMuc3Vic3RlcHMgKiB0aGlzLnRpbWVSYXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGVwKGRlbHRhOiBudW1iZXIpIHtcclxuICAgICAgICAvLyBVcGRhdGUgYWxsIHRoZSBib2RpZXMgZmlyc3RcclxuICAgICAgICB0aGlzLmJvZGllcy5mb3JFYWNoKGJvZHkgPT4ge1xyXG4gICAgICAgICAgICAvLyBNb3ZlIHdpdGggY3VycmVudCB2ZWxvY2l0eVxyXG4gICAgICAgICAgICBib2R5LmFwcGx5TW90aW9uKGRlbHRhKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFwcGx5IGdyYXZpdHksIGlmIGFwcGxpY2FibGVcclxuICAgICAgICAgICAgaWYgKGJvZHkuaW52ZXJzZU1hc3MgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBib2R5LmFkZEltbWVkaWF0ZUZvcmNlKDAsIDkuODEgLyBib2R5LmludmVyc2VNYXNzICogdGhpcy5ncmF2aXR5UmF0ZSwgZGVsdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBhbGwgdGhlIGNvbnN0cmFpbnRzXHJcbiAgICAgICAgdGhpcy5jb25zdHJhaW50cy5mb3JFYWNoKGNvbnN0cmFpbnQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY29uc3RyYWludC5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdHJhaW50LmluaXQoZGVsdGEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29uc3RyYWludFN1YnN0ZXBzOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5jb25zdHJhaW50cy5mb3JFYWNoKGNvbnN0cmFpbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnN0cmFpbnQuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vdGU6IHdlIGRvbid0IG5lZWQgdG8gZGl2aWRlIHRoZSBkZWx0YSBiZWNhdXNlIG9mIHRoZSBsYW1iZGEgaW4gdGhlIGNvbnN0cmFpbnRzLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIENvbnN0cmFpbnRzIGNhbiBiZSBldmFsdWF0ZWQgbWFueSB0aW1lcyBwZXIgZnJhbWUgd2l0aG91dCBpbmNyZWFzaW5nIGVuZXJneS5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdHJhaW50LmFwcGx5KGRlbHRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSZWNhbGN1bGF0ZSBhbGwgdGhlIHZlbG9jaXRpZXMuIFRoaXMgc3RlcCBfY2FuXyBiZSBza2lwcGVkIGJlY2F1c2UgXHJcbiAgICAgICAgLy8gd2UgY2FsY3VsYXRlIHRoZSB2ZWxvY2l0eSBpbW1lZGlhdGx5IHdoZW4gYXBwbHlpbmcgaW1wdWxzZXNcclxuICAgICAgICAvLyBidXQgdGhpcyB3aWxsIGJlIGFkZGl0aW9uYWxseSByb2J1c3QgaWYgd2UgbW92ZSBvYmplY3RzIHdpdGhvdXQgYWZmZWN0aW5nIHRoZSB2ZWxvY2l0eS5cclxuICAgICAgICB0aGlzLmJvZGllcy5mb3JFYWNoKGJvZHkgPT4gYm9keS5yZWNhbGN1bGF0ZVZlbG9jaXR5KGRlbHRhKSk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFRoZW4gZmluYWxseSB3ZSBwZXJmb3JtIGRhbXBpbmcgYXMgd2VsbC4gUGxlYXNlIG5vdGUgdGhhdCBpbiBtb3N0IG9mIHRoZSBleGFtcGxlcyB3ZSBkb24ndCBhY3R1YWxseSBkbyBtdWNoIG9mIGFueSBkYW1waW5nIChkYW1wZXJDb21wbGlhbmNlIDwgMClcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29uc3RyYWludFN1YnN0ZXBzOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5jb25zdHJhaW50cy5mb3JFYWNoKGNvbnN0cmFpbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnN0cmFpbnQuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vdGU6IHdlIGRvbid0IG5lZWQgdG8gZGl2aWRlIHRoZSBkZWx0YSBiZWNhdXNlIG9mIHRoZSBsYW1iZGEgaW4gdGhlIGNvbnN0cmFpbnRzLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIENvbnN0cmFpbnRzIGNhbiBiZSBldmFsdWF0ZWQgbWFueSB0aW1lcyBwZXIgZnJhbWUgd2l0aG91dCBpbmNyZWFzaW5nIGVuZXJneS5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdHJhaW50LmFwcGx5RGFtcGluZyhkZWx0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljczJEKXtcclxuICAgICAgICB0aGlzLmNvbnN0cmFpbnRHcmFwaGljcy5mb3JFYWNoKGdyYXBoaWMgPT4gZ3JhcGhpYy5kcmF3KGdyYXBoaWNzKSk7XHJcbiAgICAgICAgdGhpcy5ib2R5R3JhcGhpY3MuZm9yRWFjaChncmFwaGljID0+IGdyYXBoaWMuZHJhdyhncmFwaGljcykpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdEZWJ1ZyhncmFwaGljczogR3JhcGhpY3MyRCwgYm9keVJhZGl1czogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHNjYWxlID0gNDtcclxuXHJcbiAgICAgICAgZ3JhcGhpY3Muc2V0TGluZVdpZHRoSW5Qb2ludHMoMik7XHJcblxyXG4gICAgICAgIGdyYXBoaWNzLnNldFN0cm9rZUNvbG9yKFwicmVkXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnN0cmFpbnRzLmZvckVhY2goY29uc3RyYWludCA9PiB7XHJcbiAgICAgICAgICAgIGlmICghY29uc3RyYWludC5lbmFibGVkKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBpZiAoKGNvbnN0cmFpbnQgaW5zdGFuY2VvZiBEaXN0YW5jZUNvbnN0cmFpbnQyRCkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBmcm9tID0gY29uc3RyYWludC5mcm9tLmdldEdsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbihuZXcgVmVjdG9yMigpKTtcclxuICAgICAgICAgICAgICAgIGxldCB0byA9IGNvbnN0cmFpbnQudG8uZ2V0R2xvYmFsQXR0YWNobWVudFBvc2l0aW9uKG5ldyBWZWN0b3IyKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGdyYXBoaWNzLmRyYXdMaW5lKGZyb20ueCwgZnJvbS55LCB0by54LCB0by55KTtcclxuICAgICAgICAgICAgICAgIGdyYXBoaWNzLmRyYXdDaXJjbGUoZnJvbS54LCBmcm9tLnksIGdyYXBoaWNzLnBvaW50U2l6ZSAqIHNjYWxlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBncmFwaGljcy5kcmF3Q2lyY2xlKHRvLngsIHRvLnksIGdyYXBoaWNzLnBvaW50U2l6ZSAqIHNjYWxlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKChjb25zdHJhaW50IGluc3RhbmNlb2YgUGluQ29uc3RyYWludDJEKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGF0dGFjaG1lbnQgPSBjb25zdHJhaW50LmF0dGFjaG1lbnQuZ2V0R2xvYmFsQXR0YWNobWVudFBvc2l0aW9uKG5ldyBWZWN0b3IyKCkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9yaWdpbiA9IGNvbnN0cmFpbnQub3JpZ2luO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBzaXplID0gc2NhbGUgKiBncmFwaGljcy5wb2ludFNpemUgKiAxO1xyXG5cclxuICAgICAgICAgICAgICAgIGdyYXBoaWNzLmRyYXdMaW5lKG9yaWdpbi54LCBvcmlnaW4ueSwgYXR0YWNobWVudC54LCBhdHRhY2htZW50LnkpO1xyXG4gICAgICAgICAgICAgICAgZ3JhcGhpY3MuZHJhd0xpbmUoYXR0YWNobWVudC54IC0gc2l6ZSwgYXR0YWNobWVudC55IC0gc2l6ZSwgYXR0YWNobWVudC54ICsgc2l6ZSwgYXR0YWNobWVudC55ICsgc2l6ZSk7XHJcbiAgICAgICAgICAgICAgICBncmFwaGljcy5kcmF3TGluZShhdHRhY2htZW50LnggLSBzaXplLCBhdHRhY2htZW50LnkgKyBzaXplLCBhdHRhY2htZW50LnggKyBzaXplLCBhdHRhY2htZW50LnkgLSBzaXplKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoKGNvbnN0cmFpbnQgaW5zdGFuY2VvZiBBeGlzQ29uc3RyYWludDJEKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGF0dGFjaG1lbnQgPSBjb25zdHJhaW50LmF0dGFjaG1lbnQuZ2V0R2xvYmFsQXR0YWNobWVudFBvc2l0aW9uKG5ldyBWZWN0b3IyKCkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9yaWdpbiA9IGNvbnN0cmFpbnQub3JpZ2luO1xyXG4gICAgICAgICAgICAgICAgbGV0IGF4aXMgPSBjb25zdHJhaW50LmF4aXM7XHJcblxyXG4gICAgICAgICAgICAgICAgb3JpZ2luID0gYXR0YWNobWVudDtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgYXhpc1NpemUgPSBzY2FsZSAqIGdyYXBoaWNzLnBvaW50U2l6ZSAqIDg7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGFueCA9IGF4aXMueSAqIGF4aXNTaXplIC8gNDtcclxuICAgICAgICAgICAgICAgIGxldCBhbnkgPSAtYXhpcy54ICogYXhpc1NpemUgLyA0O1xyXG5cclxuICAgICAgICAgICAgICAgIGdyYXBoaWNzLmRyYXdMaW5lKG9yaWdpbi54IC0gYW54LCBvcmlnaW4ueSAtIGFueSwgb3JpZ2luLnggKyBhbngsIG9yaWdpbi55ICsgYW55KTtcclxuICAgICAgICAgICAgICAgIGdyYXBoaWNzLmRyYXdMaW5lKG9yaWdpbi54IC0gYXhpcy54ICogYXhpc1NpemUsIG9yaWdpbi55IC0gYXhpcy55ICogYXhpc1NpemUsIG9yaWdpbi54ICsgYXhpcy54ICogYXhpc1NpemUsIG9yaWdpbi55ICsgYXhpcy55ICogYXhpc1NpemUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGdyYXBoaWNzLnNldFN0cm9rZUNvbG9yKFwiZ3JlZW5cIik7XHJcbiAgICAgICAgdGhpcy5ib2RpZXMuZm9yRWFjaChib2R5ID0+IHtcclxuICAgICAgICAgICAgZ3JhcGhpY3MuZHJhd0NpcmNsZShib2R5LnBvc2l0aW9uLngsIGJvZHkucG9zaXRpb24ueSwgYm9keVJhZGl1cywgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgZ3JhcGhpY3MuZHJhd0xpbmUoYm9keS5wb3NpdGlvbi54LCBib2R5LnBvc2l0aW9uLnksIGJvZHkucG9zaXRpb24ueCArIGJvZHkuYmFzaXMueHggKiBib2R5UmFkaXVzICogMS4xLCBib2R5LnBvc2l0aW9uLnkgKyBib2R5LmJhc2lzLnh5ICogYm9keVJhZGl1cyAqIDEuMSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgRW5naW5lUGFydFBhdGhzIHtcclxuICAgIGxpbmVXaWR0aDogbnVtYmVyID0gMTtcclxuXHJcbiAgICBjcmVhdGVQaXN0b24od2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiBQYXRoMkR7XHJcbiAgICAgICAgbGV0IHBhdGggPSBuZXcgUGF0aDJEKCk7XHJcblxyXG4gICAgICAgIGxldCB3ID0gd2lkdGggLyAyO1xyXG4gICAgICAgIGxldCBoID0gaGVpZ2h0IC8gMjtcclxuXHJcbiAgICAgICAgbGV0IGhvbGVSYWRpdXMgPSB0aGlzLmxpbmVXaWR0aCAqIDI7Ly9NYXRoLm1pbih3LCBoKSAvIDQ7XHJcbiAgICAgICAgbGV0IGxvd2VySW5kZW50UmFkaXVzID0gdGhpcy5saW5lV2lkdGggKiAyO1xyXG5cclxuICAgICAgICBsZXQgdG9wU3RhcnRPZmZzZXQgPSAtaDtcclxuICAgICAgICBsZXQgdG9wRW5kT2Zmc2V0ID0gLWggKyBoIC8gNDtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgc2VhbFN0YXJ0T2Zmc2V0ID0gdG9wRW5kT2Zmc2V0ICsgdGhpcy5saW5lV2lkdGg7XHJcbiAgICAgICAgbGV0IHNlYWxFbmRPZmZzZXQgPSBzZWFsU3RhcnRPZmZzZXQgKyB0aGlzLmxpbmVXaWR0aDtcclxuXHJcbiAgICAgICAgbGV0IGJvdHRvbVN0YXJ0T2Zmc2V0ID0gc2VhbEVuZE9mZnNldCArIHRoaXMubGluZVdpZHRoO1xyXG4gICAgICAgIGxldCBib3R0b21FbmRPZmZzZXQgPSBoO1xyXG5cclxuICAgICAgICBsZXQgaG9sZU9mZnNldCA9IChib3R0b21TdGFydE9mZnNldCArIGJvdHRvbUVuZE9mZnNldCkgLyAyO1xyXG5cclxuICAgICAgICBob2xlT2Zmc2V0ID0gMDtcclxuXHJcbiAgICAgICAgLy8gVG9wXHJcbiAgICAgICAgcGF0aC5tb3ZlVG8oLXcsIHRvcFN0YXJ0T2Zmc2V0KTtcclxuICAgICAgICBwYXRoLmJlemllckN1cnZlVG8oXHJcbiAgICAgICAgICAgIC13IC8gMiwgdG9wU3RhcnRPZmZzZXQgKiAxLjIsXHJcbiAgICAgICAgICAgIHcgLyAyLCB0b3BTdGFydE9mZnNldCAqIDEuMixcclxuICAgICAgICAgICAgdywgdG9wU3RhcnRPZmZzZXQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHBhdGgubGluZVRvKHcsIHRvcEVuZE9mZnNldCk7XHJcbiAgICAgICAgcGF0aC5saW5lVG8oLXcsIHRvcEVuZE9mZnNldCk7XHJcbiAgICAgICAgcGF0aC5saW5lVG8oLXcsIHRvcFN0YXJ0T2Zmc2V0KTtcclxuICAgICAgICBwYXRoLmNsb3NlUGF0aCgpO1xyXG5cclxuICAgICAgICAvLyBTZWFsXHJcbiAgICAgICAgcGF0aC5tb3ZlVG8oLXcsIHNlYWxTdGFydE9mZnNldCk7XHJcbiAgICAgICAgcGF0aC5saW5lVG8odywgc2VhbFN0YXJ0T2Zmc2V0KTtcclxuICAgICAgICBwYXRoLmxpbmVUbyh3LCBzZWFsRW5kT2Zmc2V0KTtcclxuICAgICAgICBwYXRoLmxpbmVUbygtdywgc2VhbEVuZE9mZnNldCk7XHJcbiAgICAgICAgcGF0aC5saW5lVG8oLXcsIHNlYWxTdGFydE9mZnNldCk7XHJcbiAgICAgICAgcGF0aC5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICAgICAgLy8gQm90dG9tXHJcbiAgICAgICAgcGF0aC5tb3ZlVG8oLXcsIGJvdHRvbVN0YXJ0T2Zmc2V0KTtcclxuICAgICAgICBwYXRoLmxpbmVUbyh3LCBib3R0b21TdGFydE9mZnNldCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcGF0aC5saW5lVG8odywgYm90dG9tRW5kT2Zmc2V0KTtcclxuICAgICAgICBwYXRoLmxpbmVUbyh3LCBib3R0b21FbmRPZmZzZXQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHBhdGgubGluZVRvKHcgLSBsb3dlckluZGVudFJhZGl1cywgYm90dG9tRW5kT2Zmc2V0KTtcclxuICAgICAgICBwYXRoLmFyYyh3IC0gbG93ZXJJbmRlbnRSYWRpdXMgKiAyLCBib3R0b21FbmRPZmZzZXQsIGxvd2VySW5kZW50UmFkaXVzLCAwLCAtTWF0aC5QSSAqIDAuNSwgdHJ1ZSk7XHJcbiAgICAgICAgcGF0aC5hcmMoLXcgKyBsb3dlckluZGVudFJhZGl1cyAqIDIsIGJvdHRvbUVuZE9mZnNldCwgbG93ZXJJbmRlbnRSYWRpdXMsIC1NYXRoLlBJICogMC41LCAtTWF0aC5QSSwgdHJ1ZSk7XHJcbiAgICAgICAgcGF0aC5saW5lVG8oLXcgKyBsb3dlckluZGVudFJhZGl1cywgYm90dG9tRW5kT2Zmc2V0KTtcclxuICAgICAgICBcclxuICAgICAgICBwYXRoLmxpbmVUbygtdywgYm90dG9tRW5kT2Zmc2V0KTtcclxuICAgICAgICBwYXRoLmxpbmVUbygtdywgYm90dG9tU3RhcnRPZmZzZXQpO1xyXG4gICAgICAgIHBhdGguY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgICAgIC8vIEhvbGVcclxuICAgICAgICBwYXRoLm1vdmVUbyhob2xlUmFkaXVzLCBob2xlT2Zmc2V0KTtcclxuICAgICAgICBwYXRoLmFyYygwLCAgaG9sZU9mZnNldCwgaG9sZVJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xyXG4gICAgICAgIHBhdGguY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBwYXRoO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUFybShsZW5ndGg6IG51bWJlcik6IFBhdGgyRHtcclxuICAgICAgICBsZXQgcGF0aCA9IG5ldyBQYXRoMkQoKTtcclxuXHJcbiAgICAgICAgbGV0IHRvcEhvbGVSYWRpdXMgPSB0aGlzLmxpbmVXaWR0aCAqIDI7XHJcbiAgICAgICAgbGV0IGJvdHRvbUhvbGVSYWRpdXMgPSB0aGlzLmxpbmVXaWR0aCAqIDM7XHJcblxyXG4gICAgICAgIGxldCBib3R0b21SYWRpdXMgPSBib3R0b21Ib2xlUmFkaXVzICsgdGhpcy5saW5lV2lkdGg7XHJcbiAgICAgICAgbGV0IHRvcFJhZGl1cyA9IHRvcEhvbGVSYWRpdXMgKyB0aGlzLmxpbmVXaWR0aDtcclxuXHJcbiAgICAgICAgbGV0IGJlemllck9mZnNldCA9IGxlbmd0aCAvIDQ7XHJcblxyXG4gICAgICAgIGxldCBib3R0b21PZmZzZXRYID0gMDtcclxuICAgICAgICBsZXQgdG9wT2Zmc2V0WCA9IGxlbmd0aDtcclxuXHJcbiAgICAgICAgcGF0aC5tb3ZlVG8oYm90dG9tT2Zmc2V0WCwgLWJvdHRvbVJhZGl1cyk7XHJcbiAgICAgICAgcGF0aC5iZXppZXJDdXJ2ZVRvKFxyXG4gICAgICAgICAgICBib3R0b21PZmZzZXRYICsgYmV6aWVyT2Zmc2V0LCAtdG9wUmFkaXVzLFxyXG4gICAgICAgICAgICB0b3BPZmZzZXRYIC0gYmV6aWVyT2Zmc2V0LCAtdG9wUmFkaXVzIC8gMixcclxuICAgICAgICAgICAgdG9wT2Zmc2V0WCwgLXRvcFJhZGl1cyk7XHJcbiAgICAgICAgcGF0aC5hcmModG9wT2Zmc2V0WCwgMCwgdG9wUmFkaXVzLCAtTWF0aC5QSSAvIDIsIE1hdGguUEkgLyAyLCBmYWxzZSk7XHJcbiAgICAgICAgcGF0aC5iZXppZXJDdXJ2ZVRvKFxyXG4gICAgICAgICAgICB0b3BPZmZzZXRYIC0gYmV6aWVyT2Zmc2V0LCB0b3BSYWRpdXMgLyAyLFxyXG4gICAgICAgICAgICBib3R0b21PZmZzZXRYICsgYmV6aWVyT2Zmc2V0LCB0b3BSYWRpdXMsXHJcbiAgICAgICAgICAgIGJvdHRvbU9mZnNldFgsIGJvdHRvbVJhZGl1cyk7XHJcbiAgICAgICAgcGF0aC5hcmMoYm90dG9tT2Zmc2V0WCwgMCwgYm90dG9tUmFkaXVzLCBNYXRoLlBJIC8gMiwgLU1hdGguUEkgLyAyLCBmYWxzZSk7XHJcbiAgICAgICAgcGF0aC5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICAgICAgLy8gVG9wIGhvbGVcclxuICAgICAgICBwYXRoLm1vdmVUbyhib3R0b21PZmZzZXRYICsgYm90dG9tSG9sZVJhZGl1cywgMCk7XHJcbiAgICAgICAgcGF0aC5hcmMoYm90dG9tT2Zmc2V0WCwgMCwgYm90dG9tSG9sZVJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xyXG4gICAgICAgIHBhdGguY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgICAgIC8vIEJvdHRvbSBob2xlXHJcbiAgICAgICAgcGF0aC5tb3ZlVG8odG9wT2Zmc2V0WCArIHRvcEhvbGVSYWRpdXMsIDApO1xyXG4gICAgICAgIHBhdGguYXJjKHRvcE9mZnNldFgsIDAsIHRvcEhvbGVSYWRpdXMsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcclxuICAgICAgICBwYXRoLmNsb3NlUGF0aCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gcGF0aDtcclxuICAgIH1cclxuICAgIGNyZWF0ZUNvdW50ZXJXZWlnaHQocmFkaXVzOiBudW1iZXIpOiBQYXRoMkR7XHJcbiAgICAgICAgbGV0IHBhdGggPSBuZXcgUGF0aDJEKCk7XHJcblxyXG4gICAgICAgIGxldCBpbm5lclJhZGl1cyA9IHJhZGl1cyAqIDAuMztcclxuXHJcbiAgICAgICAgbGV0IGNlbnRlck9mZnNldCA9IHJhZGl1cyAqIDAuMTtcclxuXHJcbiAgICAgICAgbGV0IGF0dGFjaG1lbnRSYWRpdXMgPSB0aGlzLmxpbmVXaWR0aCAqIDI7XHJcblxyXG4gICAgICAgIC8vIE1haW4gc2hhcGVcclxuICAgICAgICAvLyBwYXRoLm1vdmVUbyhyYWRpdXMsIC1pbm5lclJhZGl1cyk7XHJcbiAgICAgICAgLy8gcGF0aC5hcmMocmFkaXVzLCAwLCBpbm5lclJhZGl1cywgLU1hdGguUEkgKiAwLjUsIE1hdGguUEkgKiAwLjUpO1xyXG4gICAgICAgIC8vIHBhdGguYXJjKHJhZGl1cywgcmFkaXVzLCBpbm5lclJhZGl1cywgLU1hdGguUEkgKiAwLjUsIC1NYXRoLlBJLCB0cnVlKTtcclxuICAgICAgICAvLyBwYXRoLmFyYyhpbm5lclJhZGl1cywgMCwgcmFkaXVzLCBNYXRoLlBJICogMC41LCBNYXRoLlBJICogMS41KTtcclxuICAgICAgICAvLyBwYXRoLmFyYyhyYWRpdXMsIC1yYWRpdXMsIGlubmVyUmFkaXVzLCAtTWF0aC5QSSwgLU1hdGguUEkgKiAxLjUsIHRydWUpO1xyXG5cclxuICAgICAgICBwYXRoLm1vdmVUbyhyYWRpdXMsIC1pbm5lclJhZGl1cyk7XHJcbiAgICAgICAgcGF0aC5hcmMocmFkaXVzLCAwLCBpbm5lclJhZGl1cywgLU1hdGguUEkgKiAwLjUsIE1hdGguUEkgKiAwLjUpO1xyXG4gICAgICAgIHBhdGgubGluZVRvKGNlbnRlck9mZnNldCwgaW5uZXJSYWRpdXMpO1xyXG4gICAgICAgIHBhdGguYXJjKGNlbnRlck9mZnNldCwgMCwgcmFkaXVzLCBNYXRoLlBJICogMC42LCBNYXRoLlBJICogMS40LCBmYWxzZSk7XHJcbiAgICAgICAgcGF0aC5saW5lVG8oY2VudGVyT2Zmc2V0LCAtaW5uZXJSYWRpdXMpO1xyXG4gICAgICAgIHBhdGgubGluZVRvKHJhZGl1cywgLWlubmVyUmFkaXVzKTtcclxuICAgICAgICBwYXRoLmNsb3NlUGF0aCgpO1xyXG5cclxuICAgICAgICAvLyBMZWZ0IGhvbGVcclxuICAgICAgICBwYXRoLm1vdmVUbyhhdHRhY2htZW50UmFkaXVzLCAwKTtcclxuICAgICAgICBwYXRoLmFyYygwLCAwLCBhdHRhY2htZW50UmFkaXVzLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XHJcbiAgICAgICAgcGF0aC5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICAgICAgLy8gUmlnaHQgaG9sZVxyXG4gICAgICAgIHBhdGgubW92ZVRvKHJhZGl1cyArIGF0dGFjaG1lbnRSYWRpdXMsIDApO1xyXG4gICAgICAgIHBhdGguYXJjKHJhZGl1cywgMCwgYXR0YWNobWVudFJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xyXG4gICAgICAgIHBhdGguY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBwYXRoO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUN5bGluZGVyV2FsbHMoaW5uZXJXaWR0aDogbnVtYmVyLCB0b3A6IG51bWJlciwgYm90dG9tOiBudW1iZXIsIHZhbHZlV2lkdGg6IG51bWJlciwgdmFsdmVPZmZzZXRGcm9tQ2VudGVyOiBudW1iZXIpOiBQYXRoMkR7XHJcbiAgICAgICAgbGV0IHBhdGggPSBuZXcgUGF0aDJEKCk7XHJcblxyXG4gICAgICAgIGxldCB0aGlja25lc3MgPSB0aGlzLmxpbmVXaWR0aCAqIDI7XHJcbiAgICAgICAgbGV0IG1pZHRoaWNrbmVzcyA9IHRoaXMubGluZVdpZHRoICogMjtcclxuXHJcbiAgICAgICAgbGV0IG1pZFNpemUgPSB2YWx2ZU9mZnNldEZyb21DZW50ZXIgLSB0aGlzLmxpbmVXaWR0aDtcclxuICAgICAgICBsZXQgYm91bmRTaXplID0gaW5uZXJXaWR0aCAvIDIgLSB2YWx2ZVdpZHRoIC0gdmFsdmVPZmZzZXRGcm9tQ2VudGVyO1xyXG5cclxuICAgICAgICBsZXQgdyA9IGlubmVyV2lkdGggLyAyICsgdGhpcy5saW5lV2lkdGg7XHJcbiAgICAgICAgbGV0IHdPdXRlciA9IHcgKyB0aGlja25lc3M7XHJcblxyXG4gICAgICAgIC8vIExlZnQgc2lkZVxyXG4gICAgICAgIHBhdGgubW92ZVRvKC13LCB0b3ApO1xyXG4gICAgICAgIHBhdGgubGluZVRvKC13LCBib3R0b20pO1xyXG4gICAgICAgIHBhdGgubGluZVRvKC13T3V0ZXIsIGJvdHRvbSk7XHJcbiAgICAgICAgcGF0aC5saW5lVG8oLXdPdXRlciwgdG9wKTtcclxuXHJcbiAgICAgICAgcGF0aC5tb3ZlVG8oLXcsIHRvcCk7XHJcbiAgICAgICAgcGF0aC5hcmMoLXcsIHRvcCwgdGhpY2tuZXNzLCBNYXRoLlBJLCBNYXRoLlBJICogMS41KTtcclxuXHJcbiAgICAgICAgcGF0aC5saW5lVG8oLXcgKyBib3VuZFNpemUsIHRvcCAtIHRoaWNrbmVzcyk7XHJcbiAgICAgICAgcGF0aC5saW5lVG8oLXcgKyBib3VuZFNpemUsIHRvcCk7XHJcbiAgICAgICAgcGF0aC5tb3ZlVG8oLXcsIHRvcCk7XHJcbiAgICAgICAgcGF0aC5jbG9zZVBhdGgoKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBSaWdodCBzaWRlXHJcbiAgICAgICAgcGF0aC5tb3ZlVG8odywgdG9wKTtcclxuICAgICAgICBwYXRoLmxpbmVUbyh3LCBib3R0b20pO1xyXG4gICAgICAgIHBhdGgubGluZVRvKHdPdXRlciwgYm90dG9tKTtcclxuICAgICAgICBwYXRoLmxpbmVUbyh3T3V0ZXIsIHRvcCk7XHJcblxyXG4gICAgICAgIHBhdGgubW92ZVRvKHcsIHRvcCk7XHJcbiAgICAgICAgcGF0aC5hcmModywgdG9wLCB0aGlja25lc3MsIDAsIC1NYXRoLlBJICogMC41LCB0cnVlKTtcclxuXHJcbiAgICAgICAgcGF0aC5saW5lVG8odyAtIGJvdW5kU2l6ZSwgdG9wIC0gdGhpY2tuZXNzKTtcclxuICAgICAgICBwYXRoLmxpbmVUbyh3IC0gYm91bmRTaXplLCB0b3ApO1xyXG4gICAgICAgIHBhdGgubW92ZVRvKHcsIHRvcCk7XHJcbiAgICAgICAgcGF0aC5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICAgICAgLy8gQ2VudGVyIGJpdFxyXG4gICAgICAgIHBhdGgubW92ZVRvKC1taWRTaXplLCB0b3ApO1xyXG4gICAgICAgIHBhdGgubGluZVRvKG1pZFNpemUsIHRvcCk7XHJcbiAgICAgICAgcGF0aC5saW5lVG8obWlkU2l6ZSwgdG9wIC0gbWlkdGhpY2tuZXNzKTtcclxuICAgICAgICBwYXRoLmxpbmVUbygtbWlkU2l6ZSwgdG9wIC0gbWlkdGhpY2tuZXNzKTtcclxuICAgICAgICBwYXRoLmxpbmVUbygtbWlkU2l6ZSwgdG9wKTtcclxuICAgICAgICBwYXRoLmNsb3NlUGF0aCgpO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHBhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlVmFsdmUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpe1xyXG4gICAgICAgIGxldCBwYXRoID0gbmV3IFBhdGgyRCgpO1xyXG5cclxuICAgICAgICBsZXQgdyA9IHdpZHRoIC8gMjtcclxuXHJcbiAgICAgICAgbGV0IHRoaWNrbmVzcyA9IHRoaXMubGluZVdpZHRoO1xyXG4gICAgICAgIGxldCBmdW5uZWxIZWlnaHQgPSB3IC8gMiArIHRoaWNrbmVzcztcclxuICAgICAgICBsZXQgZnVubmVsV2lkdGggPSB0aGlzLmxpbmVXaWR0aCAvIDI7XHJcblxyXG4gICAgICAgIHBhdGgubW92ZVRvKHcsIDApO1xyXG4gICAgICAgIHBhdGgubGluZVRvKHcsIC10aGlja25lc3MpO1xyXG4gICAgICAgIHBhdGgubGluZVRvKGZ1bm5lbFdpZHRoLCAtZnVubmVsSGVpZ2h0KTtcclxuICAgICAgICBwYXRoLmxpbmVUbyhmdW5uZWxXaWR0aCwgLWhlaWdodCk7XHJcbiAgICAgICAgcGF0aC5saW5lVG8oLWZ1bm5lbFdpZHRoLCAtaGVpZ2h0KTtcclxuICAgICAgICBwYXRoLmxpbmVUbygtZnVubmVsV2lkdGgsIC1mdW5uZWxIZWlnaHQpO1xyXG4gICAgICAgIHBhdGgubGluZVRvKC13LCAtdGhpY2tuZXNzKTtcclxuICAgICAgICBwYXRoLmxpbmVUbygtdywgMCk7XHJcbiAgICAgICAgcGF0aC5saW5lVG8odywgMCk7XHJcblxyXG4gICAgICAgIHJldHVybiBwYXRoO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUNhbShyYWRpdXM6IG51bWJlciwgbWF4UmFkaXVzOiBudW1iZXIpe1xyXG4gICAgICAgIGxldCBwYXRoID0gbmV3IFBhdGgyRCgpO1xyXG5cclxuICAgICAgICBsZXQgaG9sZVJhZGl1cyA9IHRoaXMubGluZVdpZHRoICogMTtcclxuXHJcbiAgICAgICAgLy8gUmVndWxhciBzaGFwZVxyXG4gICAgICAgIHBhdGgubW92ZVRvKDAsIC1yYWRpdXMpO1xyXG4gICAgICAgIHBhdGguYmV6aWVyQ3VydmVUbyhcclxuICAgICAgICAgICAgbWF4UmFkaXVzICogMC4yNSwgLXJhZGl1cyxcclxuICAgICAgICAgICAgbWF4UmFkaXVzLCAtcmFkaXVzICogMC4yLFxyXG4gICAgICAgICAgICBtYXhSYWRpdXMsIDApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBwYXRoLmJlemllckN1cnZlVG8oXHJcbiAgICAgICAgICAgIG1heFJhZGl1cywgcmFkaXVzICogMC4yLFxyXG4gICAgICAgICAgICBtYXhSYWRpdXMgKiAwLjI1LCByYWRpdXMsXHJcbiAgICAgICAgICAgIDAsIHJhZGl1cyk7XHJcblxyXG4gICAgICAgIHBhdGguYXJjKDAsIDAsIHJhZGl1cywgTWF0aC5QSSAqIDAuNSwgTWF0aC5QSSAqIDEuNSk7XHJcbiAgICAgICAgcGF0aC5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICAgICAgLy8gSG9sZVxyXG4gICAgICAgIHBhdGgubW92ZVRvKGhvbGVSYWRpdXMsIDApO1xyXG4gICAgICAgIHBhdGguYXJjKDAsICAwLCBob2xlUmFkaXVzLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XHJcbiAgICAgICAgcGF0aC5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBhdGg7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgUmlnaWRCb2R5UGF0aHMge1xyXG4gICAgbGluZVdpZHRoOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIGNyZWF0ZUNvbm5lY3Rpb24obGVuZ3RoOiBudW1iZXIpOiBQYXRoMkR7XHJcbiAgICAgICAgbGV0IHBhdGggPSBuZXcgUGF0aDJEKCk7XHJcblxyXG4gICAgICAgIGxldCB3ID0gdGhpcy5saW5lV2lkdGggLyAyO1xyXG5cclxuICAgICAgICBwYXRoLm1vdmVUbygwLCAtdyk7XHJcbiAgICAgICAgcGF0aC5saW5lVG8obGVuZ3RoLCAtdyk7XHJcbiAgICAgICAgcGF0aC5saW5lVG8obGVuZ3RoLCB3KTtcclxuICAgICAgICBwYXRoLmxpbmVUbygwLCB3KTtcclxuICAgICAgICBwYXRoLmxpbmVUbygwLCAtdyk7XHJcbiAgICAgICAgcGF0aC5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQm9keShyYWRpdXM6IG51bWJlcil7XHJcbiAgICAgICAgbGV0IHBhdGggPSBuZXcgUGF0aDJEKCk7XHJcblxyXG4gICAgICAgIGxldCBob2xlUmFkaXVzID0gdGhpcy5saW5lV2lkdGg7XHJcblxyXG4gICAgICAgIC8vIFJlZ3VsYXIgc2hhcGVcclxuICAgICAgICBwYXRoLm1vdmVUbygwLCByYWRpdXMpO1xyXG4gICAgICAgIHBhdGguYXJjKDAsIDAsIHJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xyXG4gICAgICAgIHBhdGguY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgICAgIC8vIEhvbGVcclxuICAgICAgICBwYXRoLm1vdmVUbyhyYWRpdXMgLyAyICsgaG9sZVJhZGl1cywgMCk7XHJcbiAgICAgICAgcGF0aC5hcmMocmFkaXVzIC8gMiwgIDAsIGhvbGVSYWRpdXMsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcclxuICAgICAgICBwYXRoLmNsb3NlUGF0aCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gcGF0aDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFNvbHZlclNjZW5lIH0gZnJvbSBcImFwcC9Tb2x2ZXJTY2VuZVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVFbmdpbmVUZXN0U2NlbmUgYXMgY3JlYXRlRW5naW5lVGVzdCB9IGZyb20gXCJhcHAvRW5naW5lVGVzdFNjZW5lXCI7XHJcbmltcG9ydCB7IENvbnN0cmFpbnRBdHRhY2htZW50MkQgfSBmcm9tIFwibGliL3hwYmQvQ29uc3RyYWludEF0dGFjaG1lbnQyRFwiO1xyXG5pbXBvcnQgeyBQaW5Db25zdHJhaW50MkQgfSBmcm9tIFwibGliL3hwYmQvUGluQ29uc3RyYWludDJEXCI7XHJcbmltcG9ydCB7IFJpZ2lkYm9keTJEIH0gZnJvbSBcImxpYi94cGJkL1JpZ2lkYm9keTJEXCI7XHJcbmltcG9ydCB7IEdyYXBoaWNzMkQgfSBmcm9tIFwibGliL2dyYXBoaWNzL0dyYXBoaWNzMkRcIjtcclxuaW1wb3J0IHsgVmlld3BvcnRGaXQsIFZpZXdwb3J0U2V0dGluZ3MgfSBmcm9tIFwibGliL3NldHRpbmdzL1ZpZXdwb3J0U2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCJsaWIvbWF0aC9WZWN0b3IyXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVBlbmR1bHVtVGVzdCB9IGZyb20gXCJhcHAvUGVuZHVsdW1UZXN0U2NlbmVcIjtcclxuaW1wb3J0IHsgaW5pdE1lbnUgfSBmcm9tIFwiYXBwL01lbnVcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ2xvdGggfSBmcm9tIFwiYXBwL0Nsb3RoVGVzdFNjZW5lXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUJyaWRnZVNjZW5lIH0gZnJvbSBcImFwcC9CcmlkZ2VUZXN0U2NlbmVcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ29tcGxpY2F0ZWRTY2VuZSB9IGZyb20gXCJhcHAvQ29tcGxpY2F0ZWRTY2VuZVRlc3RcIjtcclxuXHJcblxyXG5sZXQgZ3JhcGhpY3M6IEdyYXBoaWNzMkQ7XHJcbmxldCBzY2VuZTogU29sdmVyU2NlbmU7XHJcblxyXG5sZXQgc2NlbmVOYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG5sZXQgc3Vic3RlcHM6IG51bWJlciA9IDEwO1xyXG5sZXQgZ3Jhdml0eVJhdGU6IG51bWJlciA9IDE7XHJcbmxldCB0aW1lUmF0ZTogbnVtYmVyID0gMTtcclxubGV0IGRyYXdPdmVybGF5OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5mdW5jdGlvbiBzZXR1cE1vdXNlQ29udHJvbHMoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCkge1xyXG4gICBsZXQgc2VsZWN0ZWQ6IFJpZ2lkYm9keTJEIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICAgbGV0IHRvdWNoSWQgPSAtMTtcclxuXHJcbiAgIGxldCBvZmZzZXRYID0gMDtcclxuICAgbGV0IG9mZnNldFkgPSAwO1xyXG5cclxuICAgLy8gSGFja3kgbnVsbGFibGUgc3R1ZmYuXHJcbiAgIGxldCBjb25zdHJhaW50ID0gbmV3IFBpbkNvbnN0cmFpbnQyRChuZXcgQ29uc3RyYWludEF0dGFjaG1lbnQyRChzZWxlY3RlZCEpLCBuZXcgVmVjdG9yMigpKTtcclxuICAgY29uc3RyYWludC5lbmFibGVkID0gZmFsc2U7XHJcbiAgIGNvbnN0cmFpbnQuY29tcGxpYW5jZSA9IDAuMDAwMDAxO1xyXG4gICBjb25zdHJhaW50LmRhbXBlckNvbXBsaWFuY2UgPSAwLjAwMTtcclxuXHJcbiAgIGxldCBzZWxlY3QgPSAoYm9keT86IFJpZ2lkYm9keTJEKSA9PiB7XHJcbiAgICAgIHNlbGVjdGVkID0gYm9keTtcclxuXHJcbiAgICAgIGNvbnN0cmFpbnQuYXR0YWNobWVudCA9IG5ldyBDb25zdHJhaW50QXR0YWNobWVudDJEKHNlbGVjdGVkISwgYm9keT8uaW52ZXJzZUJhc2lzPy50cmFuc2Zvcm0obmV3IFZlY3RvcjIob2Zmc2V0WCwgb2Zmc2V0WSkpKTtcclxuICAgICAgY29uc3RyYWludC5lbmFibGVkID0gYm9keSAhPT0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgaWYoc2NlbmUuY29uc3RyYWludHMuaW5kZXhPZihjb25zdHJhaW50KSA8IDApe1xyXG4gICAgICAgICBzY2VuZS5jb25zdHJhaW50cyA9IFtjb25zdHJhaW50LCAuLi5zY2VuZS5jb25zdHJhaW50c107XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLy8gVE9ETyB0b3VjaCBjb250cm9scyB0b29cclxuICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2KSA9PiB7XHJcbiAgICAgIGxldCBwID0gZ3JhcGhpY3MuY2FudmFzVG9WaWV3cG9ydChldi5vZmZzZXRYLCBldi5vZmZzZXRZKTtcclxuXHJcbiAgICAgIGxldCBkaXN0YW5jZSA9IDAuNDtcclxuXHJcbiAgICAgIHNjZW5lLmJvZGllcy5mb3JFYWNoKGJvZHkgPT4ge1xyXG4gICAgICAgICBsZXQgZCA9IFZlY3RvcjIuZkRpc3RhbmNlKHAueCwgcC55LCBib2R5LnBvc2l0aW9uLngsIGJvZHkucG9zaXRpb24ueSk7XHJcblxyXG4gICAgICAgICBpZiAoZCA8IGRpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIGRpc3RhbmNlID0gZDtcclxuICAgICAgICAgICAgb2Zmc2V0WCA9IHAueCAtIGJvZHkucG9zaXRpb24ueDtcclxuICAgICAgICAgICAgb2Zmc2V0WSA9IHAueSAtIGJvZHkucG9zaXRpb24ueTtcclxuICAgICAgICAgICAgc2VsZWN0KGJvZHkpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICB9KTtcclxuICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIChldikgPT4ge1xyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZXYuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICBsZXQgdG91Y2ggPSBldi5jaGFuZ2VkVG91Y2hlcy5pdGVtKGkpO1xyXG4gICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICBcclxuICAgICAgICAgaWYgKHRvdWNoID09IG51bGwpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgbGV0IHAgPSBncmFwaGljcy5jYW52YXNUb1ZpZXdwb3J0KHRvdWNoPy5jbGllbnRYLCB0b3VjaD8uY2xpZW50WSk7XHJcbiAgIFxyXG4gICAgICAgICBsZXQgZGlzdGFuY2UgPSAwLjQ7XHJcbiAgIFxyXG4gICAgICAgICBzY2VuZS5ib2RpZXMuZm9yRWFjaChib2R5ID0+IHtcclxuICAgICAgICAgICAgbGV0IGQgPSBWZWN0b3IyLmZEaXN0YW5jZShwLngsIHAueSwgYm9keS5wb3NpdGlvbi54LCBib2R5LnBvc2l0aW9uLnkpO1xyXG4gICBcclxuICAgICAgICAgICAgaWYgKGQgPCBkaXN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICBkaXN0YW5jZSA9IGQ7XHJcbiAgICAgICAgICAgICAgIG9mZnNldFggPSBwLnggLSBib2R5LnBvc2l0aW9uLng7XHJcbiAgICAgICAgICAgICAgIG9mZnNldFkgPSBwLnkgLSBib2R5LnBvc2l0aW9uLnk7XHJcbiAgICAgICAgICAgICAgIHNlbGVjdChib2R5KTtcclxuXHJcbiAgICAgICAgICAgICAgIHRvdWNoSWQgPSB0b3VjaCEuaWRlbnRpZmllcjtcclxuICAgICAgICAgICAgICAgY29uc3RyYWludC5vcmlnaW4uYXBwbHkocC54LCBwLnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgIH0pO1xyXG5cclxuXHJcbiAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChldikgPT4ge1xyXG4gICAgICBsZXQgcCA9IGdyYXBoaWNzLmNhbnZhc1RvVmlld3BvcnQoZXYub2Zmc2V0WCwgZXYub2Zmc2V0WSk7XHJcblxyXG4gICAgICBjb25zdHJhaW50Lm9yaWdpbi5hcHBseShwLngsIHAueSk7XHJcbiAgIH0pO1xyXG5cclxuICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgZXYgPT4ge1xyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZXYuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICBsZXQgdG91Y2ggPSBldi5jaGFuZ2VkVG91Y2hlcy5pdGVtKGkpO1xyXG5cclxuICAgICAgICAgaWYodG91Y2g/LmlkZW50aWZpZXIgPT0gdG91Y2hJZCl7XHJcbiAgICAgICAgICAgIGxldCBwID0gZ3JhcGhpY3MuY2FudmFzVG9WaWV3cG9ydCh0b3VjaC5jbGllbnRYLCB0b3VjaC5jbGllbnRZKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0cmFpbnQub3JpZ2luLmFwcGx5KHAueCwgcC55KTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgIH0pO1xyXG5cclxuICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBldiA9PiB7XHJcbiAgICAgIHNlbGVjdCh1bmRlZmluZWQpO1xyXG4gICAgICB0b3VjaElkID0gLTE7XHJcbiAgIH0pO1xyXG4gICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoY2FuY2VsXCIsIGV2ID0+IHtcclxuICAgICAgc2VsZWN0KHVuZGVmaW5lZCk7XHJcbiAgICAgIHRvdWNoSWQgPSAtMTtcclxuICAgfSk7XHJcblxyXG4gICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZXYgPT4ge1xyXG4gICAgICBzZWxlY3QodW5kZWZpbmVkKTtcclxuICAgfSk7XHJcbiAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBldiA9PiB7XHJcbiAgICAgIHNlbGVjdCh1bmRlZmluZWQpO1xyXG4gICB9KTtcclxuXHJcbn1cclxuZnVuY3Rpb24gc2V0dXBSZXNpemluZyhjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KXtcclxuICAgbGV0IHN5bmMgPSAoKSA9PiB7XHJcbiAgICAgIGxldCB2ID0gZ3JhcGhpY3Mudmlld3BvcnRTZXR0aW5ncztcclxuICAgICAgXHJcbiAgICAgIGdyYXBoaWNzID0gbmV3IEdyYXBoaWNzMkQoY2FudmFzKTtcclxuICAgICAgZ3JhcGhpY3Muc2V0Vmlld3BvcnRTZXR0aW5ncyh2KTtcclxuICAgfTtcclxuXHJcbiAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHN5bmMoKSk7XHJcblxyXG4gICBzeW5jKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFNvbHZlclJhdGUoczogbnVtYmVyKSB7XHJcbiAgIHN1YnN0ZXBzID0gcztcclxuICAgc2NlbmUuc3Vic3RlcHMgPSBzO1xyXG5cclxuICAgc3luYygpO1xyXG59XHJcbmZ1bmN0aW9uIHNldEdyYXZpdHkoczogbnVtYmVyKXtcclxuICAgZ3Jhdml0eVJhdGUgPSBzO1xyXG4gICBzeW5jKCk7XHJcbn1cclxuZnVuY3Rpb24gc2V0VGltZVJhdGUoczogbnVtYmVyKXtcclxuICAgdGltZVJhdGUgPSBzO1xyXG4gICBzeW5jKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldHVwQnV0dG9ucygpe1xyXG4gICBjb25zdCBjbGlja09uID0gKGlkOiBzdHJpbmcsIGFjdGlvbjogKCkgPT4gdm9pZCkgPT4ge1xyXG4gICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuXHJcbiAgICAgIGVsZW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhY3Rpb24pO1xyXG4gICB9O1xyXG5cclxuICAgY2xpY2tPbihcInNjZW5lLXBlbmR1bHVtLTNcIiwgZ290bzNQZW5kdWx1bSk7XHJcbiAgIGNsaWNrT24oXCJzY2VuZS1wZW5kdWx1bS00XCIsIGdvdG80UGVuZHVsdW0pO1xyXG4gICBjbGlja09uKFwic2NlbmUtcGVuZHVsdW0tMTBcIiwgZ290bzEwUGVuZHVsdW0pO1xyXG4gICBjbGlja09uKFwic2NlbmUtcm9wZS1zb2Z0XCIsIGdvdG9Tb2Z0Um9wZSk7XHJcbiAgIGNsaWNrT24oXCJzY2VuZS1icmlkZ2VcIiwgZ290b0JyaWRnZSk7XHJcbiAgIGNsaWNrT24oXCJzY2VuZS1jbG90aFwiLCBnb3RvQ2xvdGgpO1xyXG4gICBjbGlja09uKFwic2NlbmUtZW5naW5lLTRcIiwgZ290b0VuZ2luZVNjZW5lNEN5bGluZGVyKTtcclxuICAgY2xpY2tPbihcInNjZW5lLWVuZ2luZS0xMFwiLCBnb3RvRW5naW5lU2NlbmUxMEN5bGluZGVyKTtcclxuICAgY2xpY2tPbihcInNjZW5lLWVuZ2luZS0xMDBcIiwgZ290b0VuZ2luZVNjZW5lMTAwQ3lsaW5kZXIpO1xyXG4gICBjbGlja09uKFwic2NlbmUtY29tcGxpY2F0ZWRcIiwgZ290b0NvbXBsaWNhdGVkKTtcclxuXHJcbiAgIGNsaWNrT24oXCJzZXR0aW5ncy10b2dnbGUtb3ZlcmxheVwiLCB0b2dnbGVPdmVybGF5KTtcclxuXHJcbiAgIGNsaWNrT24oXCJzZXR0aW5ncy1zdWJzdGVwLTFcIiwgKCkgPT4gc2V0U29sdmVyUmF0ZSgxKSk7XHJcbiAgIGNsaWNrT24oXCJzZXR0aW5ncy1zdWJzdGVwLTEwXCIsICgpID0+IHNldFNvbHZlclJhdGUoMTApKTtcclxuICAgY2xpY2tPbihcInNldHRpbmdzLXN1YnN0ZXAtMjBcIiwgKCkgPT4gc2V0U29sdmVyUmF0ZSgyMCkpO1xyXG4gICBjbGlja09uKFwic2V0dGluZ3Mtc3Vic3RlcC0xMDBcIiwgKCkgPT4gc2V0U29sdmVyUmF0ZSgxMDApKTtcclxuICAgY2xpY2tPbihcInNldHRpbmdzLXN1YnN0ZXAtMTAwMFwiLCAoKSA9PiBzZXRTb2x2ZXJSYXRlKDEwMDApKTtcclxuICAgY2xpY2tPbihcInNldHRpbmdzLXN1YnN0ZXAtMTAwMDBcIiwgKCkgPT4gc2V0U29sdmVyUmF0ZSgxMDAwMCkpO1xyXG5cclxuICAgY2xpY2tPbihcInNldHRpbmdzLWdyYXZpdHktMVwiLCAoKSA9PiBzZXRHcmF2aXR5KDEpKTtcclxuICAgY2xpY2tPbihcInNldHRpbmdzLWdyYXZpdHktMlwiLCAoKSA9PiBzZXRHcmF2aXR5KDIpKTtcclxuICAgY2xpY2tPbihcInNldHRpbmdzLWdyYXZpdHktNFwiLCAoKSA9PiBzZXRHcmF2aXR5KDQpKTtcclxuICAgY2xpY2tPbihcInNldHRpbmdzLWdyYXZpdHktOFwiLCAoKSA9PiBzZXRHcmF2aXR5KDgpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlT3ZlcmxheSgpe1xyXG4gICBkcmF3T3ZlcmxheSA9ICFkcmF3T3ZlcmxheTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ290b0VuZ2luZVNjZW5lNEN5bGluZGVyKCkgeyBcclxuICAgc2NlbmVOYW1lID0gXCJFbmdpbmUsIHdpdGggNCBjeWxpbmRlcnNcIjtcclxuICAgc2NlbmUgPWNyZWF0ZUVuZ2luZVRlc3QoNCk7XHJcbiAgIGdyYXBoaWNzLnNldFZpZXdwb3J0U2V0dGluZ3MobmV3IFZpZXdwb3J0U2V0dGluZ3MoLTMsIC0zLCAzLCAzLCBWaWV3cG9ydEZpdC5Db250YWluKSk7XHJcbiAgIHN5bmMoKTtcclxufVxyXG5mdW5jdGlvbiBnb3RvRW5naW5lU2NlbmUxMEN5bGluZGVyKCkgeyBcclxuICAgc2NlbmVOYW1lID0gXCJFbmdpbmUsIHdpdGggMTAgY3lsaW5kZXJzXCI7XHJcbiAgIHNjZW5lID0gY3JlYXRlRW5naW5lVGVzdCgxMCk7XHJcbiAgIGdyYXBoaWNzLnNldFZpZXdwb3J0U2V0dGluZ3MobmV3IFZpZXdwb3J0U2V0dGluZ3MoLTgsIC0zLCA4LCAzLCBWaWV3cG9ydEZpdC5Db250YWluKSk7XHJcbiAgIHN5bmMoKTtcclxufVxyXG5mdW5jdGlvbiBnb3RvRW5naW5lU2NlbmUxMDBDeWxpbmRlcigpIHsgXHJcbiAgIHNjZW5lTmFtZSA9IFwiRW5naW5lLCB3aXRoIDEwMCBjeWxpbmRlcnNcIjtcclxuICAgc2NlbmUgPSBjcmVhdGVFbmdpbmVUZXN0KDEwMCk7XHJcbiAgIGdyYXBoaWNzLnNldFZpZXdwb3J0U2V0dGluZ3MobmV3IFZpZXdwb3J0U2V0dGluZ3MoLTgwLCAtMywgODAsIDMsIFZpZXdwb3J0Rml0LkNvbnRhaW4pKTtcclxuXHJcbiAgIHN5bmMoKTtcclxufVxyXG5mdW5jdGlvbiBnb3RvM1BlbmR1bHVtKCkgeyBcclxuICAgc2NlbmVOYW1lID0gXCJQZW5kdWx1bSwgd2l0aCAyIGxvb3NlIGJvZGllc1wiO1xyXG4gICBzY2VuZSA9IGNyZWF0ZVBlbmR1bHVtVGVzdCgzLCAyKTtcclxuICAgZ3JhcGhpY3Muc2V0Vmlld3BvcnRTZXR0aW5ncyhuZXcgVmlld3BvcnRTZXR0aW5ncygtMiwgLTUsIDIsIDcsIFZpZXdwb3J0Rml0LkNvbnRhaW4pKTtcclxuXHJcbiAgIHN5bmMoKTtcclxufVxyXG5mdW5jdGlvbiBnb3RvRGFtcGVyVGVzdCgpIHsgXHJcbiAgIHNjZW5lTmFtZSA9IFwiUGVuZHVsdW0sIHdpdGggMiBsb29zZSBib2RpZXNcIjtcclxuICAgc2NlbmUgPSBjcmVhdGVQZW5kdWx1bVRlc3QoMiwgMiwgMC4wMDEsIDAuMSk7XHJcbiAgIGdyYXBoaWNzLnNldFZpZXdwb3J0U2V0dGluZ3MobmV3IFZpZXdwb3J0U2V0dGluZ3MoLTIsIC01LCAyLCA3LCBWaWV3cG9ydEZpdC5Db250YWluKSk7XHJcblxyXG4gICBzeW5jKCk7XHJcbn1cclxuZnVuY3Rpb24gZ290bzRQZW5kdWx1bSgpIHsgXHJcbiAgIHNjZW5lTmFtZSA9IFwiUGVuZHVsdW0sIHdpdGggMyBsb29zZSBib2RpZXNcIjtcclxuICAgc2NlbmUgPSBjcmVhdGVQZW5kdWx1bVRlc3QoNCwgMS41LCAwLCAwLjAxKTtcclxuICAgZ3JhcGhpY3Muc2V0Vmlld3BvcnRTZXR0aW5ncyhuZXcgVmlld3BvcnRTZXR0aW5ncygtMiwgLTUsIDIsIDcsIFZpZXdwb3J0Rml0LkNvbnRhaW4pKTtcclxuXHJcbiAgIHN5bmMoKTtcclxufVxyXG5mdW5jdGlvbiBnb3RvMTBQZW5kdWx1bSgpIHsgXHJcbiAgIHNjZW5lTmFtZSA9IFwiUGVuZHVsdW0sIHdpdGggOSBsb29zZSBib2RpZXNcIjtcclxuICAgc2NlbmUgPSBjcmVhdGVQZW5kdWx1bVRlc3QoMTAsIDAuNSk7XHJcbiAgIGdyYXBoaWNzLnNldFZpZXdwb3J0U2V0dGluZ3MobmV3IFZpZXdwb3J0U2V0dGluZ3MoLTIsIC0zLCAyLCA3LCBWaWV3cG9ydEZpdC5Db250YWluKSk7XHJcblxyXG4gICBzeW5jKCk7XHJcbn1cclxuZnVuY3Rpb24gZ290b1NvZnRSb3BlKCkgeyBcclxuICAgc2NlbmVOYW1lID0gXCJTb2Z0IHJvcGUgKDIwIG5vZGVzKSwgMTAwa04vdW5pdCBvZiBzdHJldGNoaW5nLCB3aXRoIGRhbXBpbmdcIjtcclxuICAgc2NlbmUgPSBjcmVhdGVQZW5kdWx1bVRlc3QoMjAsIDAuMjUsIDAuMDAwMDEsIDAuMDAxKTtcclxuICAgZ3JhcGhpY3Muc2V0Vmlld3BvcnRTZXR0aW5ncyhuZXcgVmlld3BvcnRTZXR0aW5ncygtMiwgLTMsIDIsIDcsIFZpZXdwb3J0Rml0LkNvbnRhaW4pKTtcclxuXHJcbiAgIHN5bmMoKTtcclxufVxyXG5mdW5jdGlvbiBnb3RvQnJpZGdlKCkgeyBcclxuICAgc2NlbmVOYW1lID0gXCJBIGJyaWRnZVwiO1xyXG4gICBzY2VuZSA9IGNyZWF0ZUJyaWRnZVNjZW5lKDcsIDEsIDAsIDAuMSk7XHJcbiAgIGdyYXBoaWNzLnNldFZpZXdwb3J0U2V0dGluZ3MobmV3IFZpZXdwb3J0U2V0dGluZ3MoLTEsIC0yLCA4LCA2LCBWaWV3cG9ydEZpdC5Db250YWluKSk7XHJcblxyXG4gICBzeW5jKCk7XHJcbn1cclxuZnVuY3Rpb24gZ290b0Nsb3RoKCkgeyBcclxuICAgc2NlbmVOYW1lID0gXCJDbG90aFwiO1xyXG4gICBzY2VuZSA9IGNyZWF0ZUNsb3RoKDEwLCAxMCwgMC4wMDAxLCAwLjAxKTtcclxuICAgZ3JhcGhpY3Muc2V0Vmlld3BvcnRTZXR0aW5ncyhuZXcgVmlld3BvcnRTZXR0aW5ncygwLCAtMSwgMTAsIDEyLCBWaWV3cG9ydEZpdC5Db250YWluKSk7XHJcblxyXG4gICBzeW5jKCk7XHJcbn1cclxuZnVuY3Rpb24gZ290b0NvbXBsaWNhdGVkKCkgeyBcclxuICAgc2NlbmVOYW1lID0gXCJDb21wbGljYXRlZC4gUmVjb21tZW5kZWQgdG8gdXNlICdUb2dnbGUgZGVidWcgb3ZlcmxheScgaW4gdGhlIG1lbnUuXCI7XHJcbiAgIHNjZW5lID0gY3JlYXRlQ29tcGxpY2F0ZWRTY2VuZSgpO1xyXG4gICBncmFwaGljcy5zZXRWaWV3cG9ydFNldHRpbmdzKG5ldyBWaWV3cG9ydFNldHRpbmdzKC01LCAtNSwgNSwgNSwgVmlld3BvcnRGaXQuQ29udGFpbikpO1xyXG5cclxuICAgc3luYygpO1xyXG59XHJcbmZ1bmN0aW9uIHN5bmMoKXtcclxuICAgc2NlbmUuc3Vic3RlcHMgPSBzdWJzdGVwcztcclxuICAgc2NlbmUudGltZVJhdGUgPSB0aW1lUmF0ZTtcclxuICAgc2NlbmUuZ3Jhdml0eVJhdGUgPSBncmF2aXR5UmF0ZTtcclxuXHJcbiAgIGxldCBpbmZvT3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mby1vdmVybGF5XCIpO1xyXG5cclxuICAgaWYoIWluZm9PdmVybGF5KSByZXR1cm47XHJcblxyXG4gICBsZXQgaW5mbyA9IFwiXCI7XHJcblxyXG4gICBpbmZvICs9IHNjZW5lTmFtZSArIFwiPGJyLz5cIjtcclxuICAgaW5mbyArPSBgJHtncmFwaGljcy53aWR0aH14JHtncmFwaGljcy5oZWlnaHR9ICAoeCR7ZGV2aWNlUGl4ZWxSYXRpb30pIDxiciAvPmA7XHJcbiAgIGluZm8gKz0gKHN1YnN0ZXBzICogNjApICsgXCJIeiA8YnIgLz5cIjtcclxuICAgaW5mbyArPSAoc2NlbmUuYm9kaWVzLmxlbmd0aCkgKyBcIiBib2RpZXM8YnIgLz5cIjtcclxuICAgaW5mbyArPSAoc2NlbmUuY29uc3RyYWludHMubGVuZ3RoKSArIFwiIGNvbnN0cmFpbnRzPGJyIC8+XCI7IFxyXG4gICBpbmZvICs9IChncmF2aXR5UmF0ZSkgKyBcInggZ3Jhdml0eVwiO1xyXG5cclxuICAgaW5mb092ZXJsYXkuaW5uZXJIVE1MID0gaW5mbztcclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYXN5bmMgKCkgPT4ge1xyXG4gICBpbml0TWVudSgpO1xyXG5cclxuICAgLy8gRXhwb3NlIGZ1bmN0aW9ucyA6KVxyXG4gICAod2luZG93IGFzIGFueSkuc2V0R3Jhdml0eSA9IHNldEdyYXZpdHk7XHJcbiAgICh3aW5kb3cgYXMgYW55KS5zZXRTb2x2ZXJSYXRlID0gc2V0U29sdmVyUmF0ZTtcclxuICAgKHdpbmRvdyBhcyBhbnkpLnNldFRpbWVSYXRlID0gc2V0VGltZVJhdGU7XHJcbiAgIFxyXG4gICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgIFxyXG4gICBncmFwaGljcyA9IG5ldyBHcmFwaGljczJEKGNhbnZhcyk7XHJcbiAgIGdyYXBoaWNzLnNldFZpZXdwb3J0U2V0dGluZ3MobmV3IFZpZXdwb3J0U2V0dGluZ3MoLTMsIC0zLCAzLCAzLCBWaWV3cG9ydEZpdC5Db250YWluKSk7XHJcblxyXG4gICBzZXR1cFJlc2l6aW5nKGNhbnZhcyk7XHJcbiAgIHNldHVwTW91c2VDb250cm9scyhjYW52YXMpO1xyXG5cclxuICAgc2V0dXBCdXR0b25zKCk7XHJcblxyXG4gICBsZXQgbGluZVdpZHRoID0gMC4wNjtcclxuXHJcbiAgICh3aW5kb3cgYXMgYW55KS5saW5lV2lkdGggPSBsaW5lV2lkdGg7XHJcblxyXG4gICBnb3RvM1BlbmR1bHVtKCk7XHJcblxyXG4gICBzY2VuZS5zdWJzdGVwcyA9IDE7XHJcblxyXG4gICBsZXQgdXBkYXRlID0gKGRlbHRhOiBudW1iZXIpID0+IHtcclxuICAgICAgc2NlbmUudXBkYXRlKGRlbHRhKTtcclxuICAgfTtcclxuXHJcbiAgIGxldCBkcmF3ID0gKCkgPT4ge1xyXG4gICAgICBncmFwaGljcy5zZXR1cCgpO1xyXG5cclxuICAgICAgbGV0IGJhY2tncm91bmQgPSBcIiNlMGRkZDVcIjtcclxuICAgICAgbGV0IGZvcmVncm91bmQgPSBcIiMzNTJmMjBcIjtcclxuICAgICAgXHJcbiAgICAgIGdyYXBoaWNzLnNldEZpbGxDb2xvcihiYWNrZ3JvdW5kKTtcclxuICAgICAgZ3JhcGhpY3MuZHJhd0JhY2tncm91bmQoKTtcclxuXHJcbiAgICAgIGdyYXBoaWNzLnNldExpbmVXaWR0aChsaW5lV2lkdGgpO1xyXG4gICAgICBncmFwaGljcy5zZXRTdHJva2VDb2xvcihiYWNrZ3JvdW5kKTtcclxuICAgICAgZ3JhcGhpY3Muc2V0RmlsbENvbG9yKGZvcmVncm91bmQpO1xyXG4gICAgICBzY2VuZS5kcmF3KGdyYXBoaWNzKTtcclxuXHJcbiAgICAgIGlmKGRyYXdPdmVybGF5KXtcclxuICAgICAgICAgc2NlbmUuZHJhd0RlYnVnKGdyYXBoaWNzLCAwLjMpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIGxldCBwcmV2aW91c1RpbWUgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgIGxldCB0aWNrID0gKCkgPT4ge1xyXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljayk7XHJcblxyXG4gICAgICBsZXQgY3VycmVudFRpbWUgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XHJcblxyXG4gICAgICBsZXQgZGVsdGEgPSAoY3VycmVudFRpbWUgLSBwcmV2aW91c1RpbWUpIC8gMTAwMDtcclxuXHJcbiAgICAgIGlmKGRlbHRhID4gMSAvIDMwKXtcclxuICAgICAgICAgZGVsdGEgPSAxIC8gMzA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHByZXZpb3VzVGltZSA9IGN1cnJlbnRUaW1lO1xyXG5cclxuICAgICAgLy8gSW4gcmVhbGl0eSB5b3Ugc2hvdWxkIF9uZXZlcl8gdXNlIHRoZSBhY3R1YWwgZWxhcHNlZCBkZWx0YSBidXQgYSBmaXhlZCBkZWx0YSB0aW1lXHJcbiAgICAgIC8vIGJ1dCB0aGlzIGlzIGZpbmUgZm9yIGEgbmljZSBhbmQgc21vb3RoIGJyb3dzZXIgZXhwZXJpZW5jZS5cclxuICAgICAgdXBkYXRlIChkZWx0YSk7XHJcbiAgICAgIGRyYXcoKTtcclxuICAgfVxyXG5cclxuICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spO1xyXG59KTtcclxuIiwiaW1wb3J0IHsgRG9jdW1lbnRTZXR0aW5ncywgRG9jdW1lbnRVbml0cyB9IGZyb20gXCJsaWIvc2V0dGluZ3MvRG9jdW1lbnRTZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBWaWV3cG9ydEZpdCwgVmlld3BvcnRTZXR0aW5ncyB9IGZyb20gXCJsaWIvc2V0dGluZ3MvVmlld3BvcnRTZXR0aW5nc1wiO1xyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVEb2N1bWVudFNldHRpbmdzRnJvbUNhbnZhcyhjYW52YXM6IFVzZWFibGVDYW52YXMpe1xyXG4gICAgbGV0IHdpZHRoID0gY2FudmFzLndpZHRoO1xyXG4gICAgbGV0IGhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XHJcblxyXG4gICAgaWYgKGNhbnZhcyBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KXtcclxuICAgICAgICB3aWR0aCA9IGNhbnZhcy5vZmZzZXRXaWR0aCAqIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvO1xyXG4gICAgICAgIGhlaWdodCA9IGNhbnZhcy5vZmZzZXRIZWlnaHQgKiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IERvY3VtZW50U2V0dGluZ3Mod2lkdGgsIGhlaWdodCwgRG9jdW1lbnRTZXR0aW5ncy5EZWZhdWx0RFBJICogd2luZG93LmRldmljZVBpeGVsUmF0aW8sIERvY3VtZW50VW5pdHMucHgpO1xyXG59XHJcbmZ1bmN0aW9uIGdlbmVyYXRlVmlld3BvcnRTZXR0aW5nc0Zyb21DYW52YXMoY2FudmFzOiBVc2VhYmxlQ2FudmFzKXtcclxuICAgIHJldHVybiBuZXcgVmlld3BvcnRTZXR0aW5ncygwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQsIFZpZXdwb3J0Rml0LkNvbnRhaW4pO1xyXG59XHJcblxyXG50eXBlIFVzZWFibGVDYW52YXMgPSBIVE1MQ2FudmFzRWxlbWVudHxPZmZzY3JlZW5DYW52YXM7XHJcbnR5cGUgVXNlYWJsZUNvbnRleHQgPSBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR8T2Zmc2NyZWVuQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG50eXBlIFVzZWFibGVJbWFnZSA9IEhUTUxWaWRlb0VsZW1lbnQgfCBIVE1MSW1hZ2VFbGVtZW50IHwgSFRNTENhbnZhc0VsZW1lbnQgfCBJbWFnZUJpdG1hcCB8IE9mZnNjcmVlbkNhbnZhcztcclxuXHJcbmV4cG9ydCBjbGFzcyBHcmFwaGljczJEIHtcclxuICAgIHJlYWRvbmx5IGNhbnZhczogVXNlYWJsZUNhbnZhcztcclxuICAgIHJlYWRvbmx5IGNvbnRleHQ6IFVzZWFibGVDb250ZXh0O1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2RvY3VtZW50U2V0dGluZ3M6IERvY3VtZW50U2V0dGluZ3M7XHJcbiAgICBwcml2YXRlIF92aWV3cG9ydFNldHRpbmdzOiBWaWV3cG9ydFNldHRpbmdzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnR8T2Zmc2NyZWVuQ2FudmFzLCBkb2N1bWVudFNldHRpbmdzPzogRG9jdW1lbnRTZXR0aW5ncywgdmlld3BvcnRTZXR0aW5ncz86IFZpZXdwb3J0U2V0dGluZ3Mpe1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIGxldCBjb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICAgICAgICBpZihjb250ZXh0ID09PSBudWxsKXtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGluaXRpYWxpemUgY29udGV4dFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG5cclxuICAgICAgICB0aGlzLl9kb2N1bWVudFNldHRpbmdzID0gZG9jdW1lbnRTZXR0aW5ncyA/PyBnZW5lcmF0ZURvY3VtZW50U2V0dGluZ3NGcm9tQ2FudmFzKGNhbnZhcyk7XHJcbiAgICAgICAgdGhpcy5fdmlld3BvcnRTZXR0aW5ncyA9IHZpZXdwb3J0U2V0dGluZ3MgPz8gZ2VuZXJhdGVWaWV3cG9ydFNldHRpbmdzRnJvbUNhbnZhcyhjYW52YXMpO1xyXG5cclxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMuZG9jdW1lbnRTZXR0aW5ncy53aWR0aEluUGl4ZWxzO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuZG9jdW1lbnRTZXR0aW5ncy5oZWlnaHRJblBpeGVscztcclxuXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVDYXAgPSBcInJvdW5kXCI7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0Lm1pdGVyTGltaXQgPSAwLjE7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0dXAoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXHJcbiAgICAvLyBTZXR1cFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xyXG4gICAgc2V0dXAoKXtcclxuICAgICAgICB0aGlzLmNvbnRleHQucmVzZXRUcmFuc2Zvcm0oKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgbGV0IGFzcGVjdFJhdGlvID0gdGhpcy5fdmlld3BvcnRTZXR0aW5ncy5hc3BlY3RSYXRpbztcclxuXHJcbiAgICAgICAgbGV0IG1pblNpemUgPSBNYXRoLm1pbih0aGlzLndpZHRoIC8gYXNwZWN0UmF0aW8sIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICBsZXQgbWF4U2l6ZSA9IE1hdGgubWF4KHRoaXMud2lkdGggLyBhc3BlY3RSYXRpbywgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY29udGV4dC50cmFuc2xhdGUodGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5fdmlld3BvcnRTZXR0aW5ncy5maXQgPT09IFZpZXdwb3J0Rml0LkZpbGwpe1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuc2NhbGUodGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLl92aWV3cG9ydFNldHRpbmdzLmZpdCA9PT0gVmlld3BvcnRGaXQuQ29udGFpbil7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5zY2FsZShtaW5TaXplIC8gMiwgbWluU2l6ZSAvIDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLl92aWV3cG9ydFNldHRpbmdzLmZpdCA9PT0gVmlld3BvcnRGaXQuQ292ZXIpe1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuc2NhbGUobWF4U2l6ZSAvIDIsIG1heFNpemUgLyAyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gVmlld3BvcnQgc2hvdWxkbid0IGhhdmUgYSB3aWR0aCBhbmQgaGVpZ2h0LCBidXQganVzdCBvbmUgdHlwZSBvZiB1bml0IChoZWlnaHQ/KSB0aGF0IHNjYWxlcyB0aGlzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gZmFjdG9ycy4uLiAobGFuZHNjYXBlL3BvcnRyYWl0PylcclxuICAgICAgICAvLyBUaGVuIHdlIGNhbiBhbHNvIGVsaW1pbmF0ZSBvbmUgb2YgdGhlIHZpZXdwb3J0IGZpdCBjYXRlZ29yaWVzIHJpZ2h0PyBCZWNhdXNlIHdlIGVpdGhlciBtYXRjaCBoZWlnaHQgb3Igd2lkdGhcclxuICAgICAgICB0aGlzLmNvbnRleHQuc2NhbGUoMSAvICh0aGlzLl92aWV3cG9ydFNldHRpbmdzLndpZHRoIC8gMiksIDEgLyAodGhpcy5fdmlld3BvcnRTZXR0aW5ncy5oZWlnaHQgLyAyKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5fdmlld3BvcnRTZXR0aW5ncy5maXQgIT09IFZpZXdwb3J0Rml0LkZpbGwpe1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuc2NhbGUoYXNwZWN0UmF0aW8sIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnRyYW5zbGF0ZSgtdGhpcy5fdmlld3BvcnRTZXR0aW5ncy5jZW50ZXJYLCAtdGhpcy5fdmlld3BvcnRTZXR0aW5ncy5jZW50ZXJZKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xyXG4gICAgLy8gU2V0dGluZ3NcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cclxuICAgIHNldEZpbGxDb2xvcihjb2xvcjogc3RyaW5nKXtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICB9XHJcbiAgICBzZXRGaWxsUGF0dGVybihwYXR0ZXJuOiBDYW52YXNQYXR0ZXJuKXtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gcGF0dGVybjtcclxuICAgIH1cclxuICAgIHNldFN0cm9rZUNvbG9yKGNvbG9yOiBzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yO1xyXG4gICAgfVxyXG4gICAgc2V0TGluZVdpZHRoSW5Qb2ludHMod2lkdGg6IG51bWJlcil7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVXaWR0aCA9IHRoaXMucG9pbnRTaXplICogd2lkdGg7XHJcbiAgICB9XHJcbiAgICBzZXRMaW5lV2lkdGgod2lkdGg6IG51bWJlcil7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVXaWR0aCA9IHdpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybnMgdGhlIHNpemUgb2YgYSBwaXhlbCBpbiB2aWV3cG9ydCB1bml0c1xyXG4gICAgZ2V0IHBpeGVsU2l6ZSgpe1xyXG4gICAgICAgIGxldCB0ID0gdGhpcy5jb250ZXh0LmdldFRyYW5zZm9ybSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBzciA9IE1hdGguc3FydCh0LmEgKiB0LmEgKyB0LmIgKiB0LmIpO1xyXG4gICAgICAgIGxldCBzdCA9IE1hdGguc3FydCh0LmMgKiB0LmMgKyB0LmQgKiB0LmQpO1xyXG5cclxuICAgICAgICByZXR1cm4gMSAvICgoc3IgKyBzdCkgLyAyKTtcclxuICAgIH1cclxuICAgIC8vIFJldHVybnMgdGhlIHNpemUgb2YgYSBwb2ludCBpbiB2aWV3cG9ydCB1bml0c1xyXG4gICAgZ2V0IHBvaW50U2l6ZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBpeGVsU2l6ZSAqIHRoaXMuX2RvY3VtZW50U2V0dGluZ3MucGl4ZWxzUGVyUG9pbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cclxuICAgIC8vIEhlbHBlcnNcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cclxuICAgIC8vIFRPRE8gdGhpcyBzaG91bGQgYmUgd3JhcHBuaWcgdGhlIHBhdHRlcm4gaW4gc29tZSB3YXkgdG8gc3RpbGwgcmVjZWl2ZSB0aGUgaW1hZ2UuLi4uXHJcbiAgICBjcmVhdGVQYXR0ZXJuKGltYWdlOiBVc2VhYmxlSW1hZ2UpOiBDYW52YXNQYXR0ZXJufG51bGx7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5jcmVhdGVQYXR0ZXJuKGltYWdlLCBcInJlcGVhdFwiKTtcclxuICAgIH1cclxuICAgIHRyYW5zZm9ybVBhdHRlcm4oaW1hZ2U6IFVzZWFibGVJbWFnZSwgcGF0dGVybjogQ2FudmFzUGF0dGVybiwgd2lkdGhJblBvaW50czogbnVtYmVyLCBoZWlnaHRJblBvaW50czogbnVtYmVyLCBhbmdsZTogbnVtYmVyKXtcclxuICAgICAgICBsZXQgcyA9IE1hdGguc2luKGFuZ2xlKTtcclxuICAgICAgICBsZXQgYyA9IE1hdGguY29zKGFuZ2xlKTtcclxuXHJcbiAgICAgICAgbGV0IHcgPSAxIC8gaW1hZ2Uud2lkdGggKiB0aGlzLnBvaW50U2l6ZSAqIHdpZHRoSW5Qb2ludHM7XHJcbiAgICAgICAgbGV0IGggPSAxIC8gaW1hZ2UuaGVpZ2h0ICogdGhpcy5wb2ludFNpemUgKiBoZWlnaHRJblBvaW50cztcclxuXHJcbiAgICAgICAgbGV0IG1hdHJpeCA9IFtcclxuICAgICAgICAgICAgYyAqIHcsIHMgKiB3LCAwLFxyXG4gICAgICAgICAgICAtcyAqIGgsIGMgKiB3LCAwLFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIC8vIFthIGMgZV1cclxuICAgICAgICAvLyBbYiBkIGZdXHJcbiAgICAgICAgLy8gWzAgMCAxXVxyXG5cclxuICAgICAgICBwYXR0ZXJuLnNldFRyYW5zZm9ybShuZXcgRE9NTWF0cml4KFtcclxuICAgICAgICAgICAgbWF0cml4WzBdLCBtYXRyaXhbM10sIFxyXG4gICAgICAgICAgICBtYXRyaXhbMV0sIG1hdHJpeFs0XSxcclxuICAgICAgICAgICAgbWF0cml4WzJdLCBtYXRyaXhbNV1cclxuICAgICAgICBdKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xyXG4gICAgLy8gVHJhbnNsYXRpb25zXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXHJcbiAgICBwdXNoKCl7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnNhdmUoKTtcclxuICAgIH1cclxuICAgIHBvcCgpe1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcbiAgICBzY2FsZSh4OiBudW1iZXIsIHk6IG51bWJlcil7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnNjYWxlKHgsIHkpO1xyXG4gICAgfVxyXG4gICAgcm90YXRlKGFuZ2xlOiBudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5yb3RhdGUoYW5nbGUpO1xyXG4gICAgfVxyXG4gICAgcm90YXRlRGVnKGFuZ2xlOiBudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5yb3RhdGUoYW5nbGUgLyAxODAgKiBNYXRoLlBJKTtcclxuICAgIH1cclxuICAgIHRyYW5zbGF0ZSh4OiBudW1iZXIsIHk6IG51bWJlcil7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnRyYW5zbGF0ZSh4LCB5KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXHJcbiAgICAvLyBEcmF3aW5nXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXHJcbiAgICBkcmF3UmVjdGFuZ2xlKHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgZmlsbDogYm9vbGVhbil7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRleHQubW92ZVRvKHgsIHkpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5saW5lVG8oeCArIHdpZHRoLCB5KTtcclxuICAgICAgICB0aGlzLmNvbnRleHQubGluZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVUbyh4LCB5ICsgaGVpZ2h0KTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgICAgIGlmKGZpbGwpe1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZHJhd0NpcmNsZSh4OiBudW1iZXIsIHk6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIGZpbGw6IGJvb2xlYW4pe1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYXJjKHgsIHksIHJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcclxuICAgICAgICBcclxuICAgICAgICBpZihmaWxsKXtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRyYXdMaW5lKHg6IG51bWJlciwgeTogbnVtYmVyLCB4MjogbnVtYmVyLCB5MjogbnVtYmVyKXtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGV4dC5tb3ZlVG8oeCwgeSk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVUbyh4MiwgeTIpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd1BhdGgocGF0aDogUGF0aDJELCBmaWxsOiBib29sZWFuKTogUGF0aDJEO1xyXG4gICAgZHJhd1BhdGgoY3JlYXRlUGF0aDogKHBhdGg6IFBhdGgyRCkgPT4gdm9pZCwgZmlsbDogYm9vbGVhbik6IFBhdGgyRDtcclxuICAgIGRyYXdQYXRoKHBhdGhPckNyZWF0ZVBhdGg6IFBhdGgyRHwoKHBhdGg6IFBhdGgyRCkgPT4gdm9pZCksIGZpbGw6IGJvb2xlYW4pOiBQYXRoMkR7XHJcbiAgICAgICAgaWYodHlwZW9mKHBhdGhPckNyZWF0ZVBhdGgpID09PSBcIm9iamVjdFwiKXtcclxuICAgICAgICAgICAgbGV0IHBhdGggPSBwYXRoT3JDcmVhdGVQYXRoIGFzIFBhdGgyRDtcclxuXHJcbiAgICAgICAgICAgIGlmKGZpbGwpIHRoaXMuY29udGV4dC5maWxsKHBhdGgpO1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMuY29udGV4dC5zdHJva2UocGF0aCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcGF0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgbGV0IHBhdGggPSBuZXcgUGF0aDJEKCk7XHJcblxyXG4gICAgICAgICAgICBwYXRoT3JDcmVhdGVQYXRoKHBhdGgpO1xyXG5cclxuICAgICAgICAgICAgaWYoZmlsbCkgdGhpcy5jb250ZXh0LmZpbGwocGF0aCk7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5jb250ZXh0LnN0cm9rZShwYXRoKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBwYXRoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkcmF3UGF0aHMocGF0aHM6IFBhdGgyRFtdLCBmaWxsOiBib29sZWFuKXtcclxuICAgICAgICBwYXRocy5mb3JFYWNoKHBhdGggPT4gdGhpcy5kcmF3UGF0aChwYXRoLCBmaWxsKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0ltYWdlKGltYWdlOiBVc2VhYmxlSW1hZ2UsIHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZDtcclxuICAgIGRyYXdJbWFnZShpbWFnZTogVXNlYWJsZUltYWdlLCB4OiBudW1iZXIsIHk6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIpOiB2b2lkO1xyXG4gICAgZHJhd0ltYWdlKGltYWdlOiBVc2VhYmxlSW1hZ2UsIHg6IG51bWJlciwgeTogbnVtYmVyLCB3PzogbnVtYmVyLCBoPzogbnVtYmVyKTogdm9pZHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCB4LCB5LCB3ID8/IGltYWdlLndpZHRoLCBoID8/IGltYWdlLmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0JhY2tncm91bmQoKXtcclxuICAgICAgICBsZXQgZiA9IHRoaXMuY2FudmFzVG9WaWV3cG9ydCgwLCAwKTtcclxuICAgICAgICBsZXQgdCA9IHRoaXMuY2FudmFzVG9WaWV3cG9ydCh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcblxyXG4gICAgICAgIHRoaXMuZHJhd1JlY3RhbmdsZShmLngsIGYueSwgdC54IC0gZi54LCB0LnkgLSBmLnksIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cclxuICAgIC8vIENsaXBwaW5nXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXHJcbiAgICBjbGlwUmVjdGFuZ2xlKHg6IG51bWJlciwgeTogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlcik6IFBhdGgyRCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpcCgocGF0aCkgPT4ge1xyXG4gICAgICAgICAgICBwYXRoLnJlY3QoeCwgeSwgdywgaCk7XHJcbiAgICAgICAgICAgIHBhdGguY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjbGlwKHBhdGg6IFBhdGgyRCk6IFBhdGgyRDtcclxuICAgIGNsaXAoY3JlYXRlUGF0aDogKHBhdGg6IFBhdGgyRCkgPT4gdm9pZCk6IFBhdGgyRDtcclxuICAgIGNsaXAocGF0aE9yQ3JlYXRlUGF0aDogUGF0aDJEfCgocGF0aDogUGF0aDJEKSA9PiB2b2lkKSk6IFBhdGgyRHtcclxuICAgICAgICBpZih0eXBlb2YocGF0aE9yQ3JlYXRlUGF0aCkgPT09IFwib2JqZWN0XCIpe1xyXG4gICAgICAgICAgICBsZXQgcGF0aCA9IHBhdGhPckNyZWF0ZVBhdGggYXMgUGF0aDJEO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmNsaXAocGF0aCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcGF0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgbGV0IHBhdGggPSBuZXcgUGF0aDJEKCk7XHJcblxyXG4gICAgICAgICAgICBwYXRoT3JDcmVhdGVQYXRoKHBhdGgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmNsaXAocGF0aCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcGF0aDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xyXG4gICAgLy8gU2V0dGluZ3MgYW5kIGNvbnZlcnNpb25zXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXHJcbiAgICBzZXRWaWV3cG9ydFNldHRpbmdzKHNldHRpbmdzOiBWaWV3cG9ydFNldHRpbmdzKXtcclxuICAgICAgICB0aGlzLl92aWV3cG9ydFNldHRpbmdzID0gc2V0dGluZ3M7XHJcbiAgICAgICAgdGhpcy5zZXR1cCgpO1xyXG4gICAgfVxyXG4gICAgY2FudmFzVG9WaWV3cG9ydCh4OiBudW1iZXIsIHk6IG51bWJlcik6IHt4OiBudW1iZXIsIHk6IG51bWJlcn0ge1xyXG4gICAgICAgIGlmKHRoaXMuY2FudmFzIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpe1xyXG4gICAgICAgICAgICB4IC89IHRoaXMuY2FudmFzLm9mZnNldFdpZHRoO1xyXG4gICAgICAgICAgICB5IC89IHRoaXMuY2FudmFzLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgICAgeCAqPSB0aGlzLmNhbnZhcy53aWR0aDtcclxuICAgICAgICAgICAgeSAqPSB0aGlzLmNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdHJhbnNmb3JtID0gdGhpcy5jb250ZXh0LmdldFRyYW5zZm9ybSgpO1xyXG5cclxuICAgICAgICB0cmFuc2Zvcm0uaW52ZXJ0U2VsZigpO1xyXG4gICBcclxuICAgICAgICByZXR1cm4gdHJhbnNmb3JtLnRyYW5zZm9ybVBvaW50KHt4LCB5fSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xyXG4gICAgLy8gR2V0dGVyc1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xyXG4gICAgZ2V0IHdpZHRoKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzLndpZHRoO1xyXG4gICAgfVxyXG4gICAgZ2V0IGhlaWdodCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhcy5oZWlnaHQ7XHJcbiAgICB9XHJcbiAgICBnZXQgdmlld3BvcnRTZXR0aW5ncygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92aWV3cG9ydFNldHRpbmdzO1xyXG4gICAgfVxyXG4gICAgZ2V0IGRvY3VtZW50U2V0dGluZ3MoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZG9jdW1lbnRTZXR0aW5ncztcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBNYXRoSGVscGVyIHtcclxuICAgIHN0YXRpYyBhdmFyYWdlKC4uLnZhbHVlczogbnVtYmVyW10pe1xyXG4gICAgICAgIGxldCBzdW0gPSAwO1xyXG5cclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgc3VtICs9IHZhbHVlc1tpXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzdW0gLyB2YWx1ZXMubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHdlaWdodGVkQXZhcmFnZSh3ZWlnaHRzOiBudW1iZXJbXSwgdmFsdWVzOiBudW1iZXJbXSl7XHJcbiAgICAgICAgaWYod2VpZ2h0cy5sZW5ndGggIT0gdmFsdWVzLmxlbmd0aCkgdGhyb3cgbmV3IEVycm9yKFwid2VpZ2h0cyBhbmQgYXZsdWVzIGRvbid0IG1hdGNoIGxlbmd0aFwiKTtcclxuXHJcbiAgICAgICAgbGV0IHN1bSA9IDA7XHJcbiAgICAgICAgbGV0IHdlaWdodFN1bSA9IDA7XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB3ZWlnaHRTdW0gKz0gd2VpZ2h0c1tpXTtcclxuICAgICAgICAgICAgc3VtICs9IHZhbHVlc1tpXSAqIHdlaWdodHNbaV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc3VtIC8gd2VpZ2h0U3VtO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIG1pbiguLi52YWx1ZXM6IG51bWJlcltdKXtcclxuICAgICAgICBsZXQgbWluID0gdmFsdWVzWzBdO1xyXG5cclxuICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgaWYodmFsdWVzW2ldIDwgbWluKSB2YWx1ZXNbaV0gPSBtaW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbWluO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIG1heCguLi52YWx1ZXM6IG51bWJlcltdKXtcclxuICAgICAgICBsZXQgbWF4ID0gdmFsdWVzWzBdO1xyXG5cclxuICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgaWYodmFsdWVzW2ldID4gbWF4KSB2YWx1ZXNbaV0gPSBtYXg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbWF4O1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHJlbWFwKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlciwgbmV3TWluOiBudW1iZXIsIG5ld01heDogbnVtYmVyLCB2OiBudW1iZXIpOiBudW1iZXJ7XHJcbiAgICAgICAgbGV0IGYgPSB0aGlzLmludmVyc2VMZXJwKG1pbiwgbWF4LCB2KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGVycChuZXdNaW4sIG5ld01heCwgZik7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgbGVycChhOiBudW1iZXIsIGI6IG51bWJlciwgZjogbnVtYmVyKTogbnVtYmVye1xyXG4gICAgICAgIHJldHVybiBhICsgKGIgLSBhKSAqIGY7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgaW52ZXJzZUxlcnAoYTogbnVtYmVyLCBiOiBudW1iZXIsIHY6IG51bWJlcik6IG51bWJlcntcclxuICAgICAgICByZXR1cm4gKHYgLSBhKSAvIChiIC0gYSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY2xhbXAodjogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXJ7XHJcbiAgICAgICAgaWYodiA8IG1pbikgcmV0dXJuIG1pbjtcclxuICAgICAgICBpZih2ID4gbWF4KSByZXR1cm4gbWF4O1xyXG5cclxuICAgICAgICByZXR1cm4gdjtcclxuICAgIH1cclxuICAgIHN0YXRpYyBjbGlwKHY6IG51bWJlcik6IG51bWJlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5jbGFtcCh2LCAwLCAxKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBub3JtYWxpemVBbmdsZShhbmdsZTogbnVtYmVyKXtcclxuICAgICAgICBhbmdsZSAlPSBNYXRoLlBJICogMjtcclxuXHJcbiAgICAgICAgaWYoYW5nbGUgPCAwKXtcclxuICAgICAgICAgICAgYW5nbGUgKz0gTWF0aC5QSSAqIDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYW5nbGU7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc2hvcnRlc3RBbmdsZShmcm9tOiBudW1iZXIsIHRvOiBudW1iZXIpe1xyXG4gICAgICAgIGxldCBkaWZmID0gKHRvIC0gZnJvbSArIE1hdGguUEkpICUgKE1hdGguUEkgKiAyKSAtIE1hdGguUEk7XHJcbiAgICAgICAgcmV0dXJuIGRpZmYgPCAtTWF0aC5QSSA/IGRpZmYgKyBNYXRoLlBJICogMiA6IGRpZmY7XHJcbiAgICBcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4vVmVjdG9yMlwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hdHJpeDIge1xyXG4gICAgLy8gW3h4ICB5eF1cclxuICAgIC8vIFt4eSAgeXldXHJcbiAgICB4eDogbnVtYmVyO1xyXG4gICAgeHk6IG51bWJlcjtcclxuICAgIHl4OiBudW1iZXI7XHJcbiAgICB5eTogbnVtYmVyO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cclxuICAgIC8vIENvbnN0cnVjdG9yXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXHJcbiAgICBjb25zdHJ1Y3RvcihtMDA6IG51bWJlciwgbTAxOiBudW1iZXIsIG0xMDogbnVtYmVyLCBtMTE6IG51bWJlcikge1xyXG4gICAgICAgIC8vIFttMDAgIG0wMV1cclxuICAgICAgICAvLyBbbTEwICBtMTFdXHJcbiAgICAgICAgdGhpcy54eCA9IG0wMDtcclxuICAgICAgICB0aGlzLnh5ID0gbTEwO1xyXG5cclxuICAgICAgICB0aGlzLnl4ID0gbTAxO1xyXG4gICAgICAgIHRoaXMueXkgPSBtMTE7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gW20wMCAgbTAxXVxyXG4gICAgLy8gW20xMCAgbTExXVxyXG4gICAgZ2V0IG0wMCgpIHsgcmV0dXJuIHRoaXMueHg7IH1cclxuICAgIGdldCBtMDEoKSB7IHJldHVybiB0aGlzLnl4OyB9XHJcbiAgICBnZXQgbTEwKCkgeyByZXR1cm4gdGhpcy54eTsgfVxyXG4gICAgZ2V0IG0xMSgpIHsgcmV0dXJuIHRoaXMueXk7IH1cclxuICAgIFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xyXG4gICAgLy8gR2V0dGVyc1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xyXG4gICAgZ2V0IGRldGVybWluYW50KCl7XHJcbiAgICAgICAgcmV0dXJuIFZlY3RvcjIuZkNyb3NzKHRoaXMueHgsIHRoaXMueHksIHRoaXMueXgsIHRoaXMueXkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cclxuICAgIC8vIExpbmVhciB0cmFuc2Zvcm1hdGlvbnNcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cclxuICAgIHRyYW5zZm9ybVgoeDogbnVtYmVyLCB5OiBudW1iZXIpeyByZXR1cm4geCAqIHRoaXMueHggKyB5ICogdGhpcy55eDsgfVxyXG4gICAgdHJhbnNmb3JtWSh4OiBudW1iZXIsIHk6IG51bWJlcil7IHJldHVybiB4ICogdGhpcy54eSArIHkgKiB0aGlzLnl5OyB9XHJcbiAgICB0cmFuc2Zvcm0oaW5wdXQ6IFZlY3RvcjIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm1PdXQoaW5wdXQsIG5ldyBWZWN0b3IyKCkpO1xyXG4gICAgfVxyXG4gICAgdHJhbnNmb3JtT3V0KGlucHV0OiBWZWN0b3IyLCBvdXRwdXQ6IFZlY3RvcjIpe1xyXG4gICAgICAgIGxldCB4ID0gdGhpcy50cmFuc2Zvcm1YKGlucHV0LngsIGlucHV0LnkpO1xyXG4gICAgICAgIGxldCB5ID0gdGhpcy50cmFuc2Zvcm1ZKGlucHV0LngsIGlucHV0LnkpO1xyXG5cclxuICAgICAgICByZXR1cm4gb3V0cHV0LmFwcGx5KHgsIHkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cclxuICAgIC8vIFNldHRpbmcgdGhpc1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xyXG4gICAgc2V0WCh4OiBudW1iZXIsIHk6IG51bWJlcil7XHJcbiAgICAgICAgdGhpcy54eCA9IHg7XHJcbiAgICAgICAgdGhpcy54eSA9IHk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgc2V0WSh4OiBudW1iZXIsIHk6IG51bWJlcil7XHJcbiAgICAgICAgdGhpcy55eCA9IHg7XHJcbiAgICAgICAgdGhpcy55eSA9IHk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgaW52ZXJzZSgpe1xyXG4gICAgICAgIGxldCBkZXRlcm1pbmFudCA9IHRoaXMuZGV0ZXJtaW5hbnQ7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmFkanVnYXRlKCkuc2NhbGUoMS9kZXRlcm1pbmFudCk7XHJcbiAgICB9XHJcbiAgICB0cmFuc3Bvc2UoKXtcclxuICAgICAgICBsZXQgdGVtcCA9IHRoaXMueHk7XHJcbiAgICAgICAgdGhpcy54eSA9IHRoaXMueXg7XHJcbiAgICAgICAgdGhpcy55eCA9IHRlbXA7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgYWRqdWdhdGUoKXtcclxuICAgICAgICAvLyBbYSAgYl1cclxuICAgICAgICAvLyBbYyAgZF1cclxuICAgICAgICAvLyBcclxuICAgICAgICAvLyBbIGQgLWJdXHJcbiAgICAgICAgLy8gWy1jICBhXVxyXG5cclxuICAgICAgICBsZXQgYSA9IHRoaXMueHg7XHJcbiAgICAgICAgbGV0IGIgPSB0aGlzLnl4O1xyXG4gICAgICAgIGxldCBjID0gdGhpcy54eTtcclxuICAgICAgICBsZXQgZCA9IHRoaXMueXk7XHJcblxyXG4gICAgICAgIHRoaXMueHggPSBkO1xyXG4gICAgICAgIHRoaXMueHkgPSAtYztcclxuICAgICAgICB0aGlzLnl4ID0gLWI7XHJcbiAgICAgICAgdGhpcy55eSA9IGE7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgc2NhbGUobjogbnVtYmVyKXtcclxuICAgICAgICB0aGlzLnh4ICo9IG47XHJcbiAgICAgICAgdGhpcy54eSAqPSBuO1xyXG4gICAgICAgIHRoaXMueXggKj0gbjtcclxuICAgICAgICB0aGlzLnl5ICo9IG47XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgc2V0QXNSb3RhdGlvbihhbmdsZTogbnVtYmVyKXtcclxuICAgICAgICAvLyBbYyAgc11cclxuICAgICAgICAvLyBbLXMgY11cclxuXHJcbiAgICAgICAgbGV0IHMgPSBNYXRoLnNpbihhbmdsZSk7XHJcbiAgICAgICAgbGV0IGMgPSBNYXRoLmNvcyhhbmdsZSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0WChjLCBzKTtcclxuICAgICAgICB0aGlzLnNldFkoLXMsIGMpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHNldEFzSWRlbnRpdHkoKXtcclxuICAgICAgICB0aGlzLnNldFgoMSwgMCk7XHJcbiAgICAgICAgdGhpcy5zZXRZKDAsIDEpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHNldEFzKG90aGVyOiBNYXRyaXgyKXtcclxuICAgICAgICB0aGlzLnh4ID0gb3RoZXIueHg7XHJcbiAgICAgICAgdGhpcy54eSA9IG90aGVyLnh5O1xyXG4gICAgICAgIHRoaXMueXggPSBvdGhlci55eDtcclxuICAgICAgICB0aGlzLnl5ID0gb3RoZXIueXk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXHJcbiAgICAvLyBDbG9uaW5nXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXHJcbiAgICBjbG9uZSgpe1xyXG4gICAgICAgIHJldHVybiBuZXcgTWF0cml4Mih0aGlzLm0wMCwgdGhpcy5tMDEsIHRoaXMubTEwLCB0aGlzLm0xMSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cclxuICAgIC8vIFN0YXRpYyBjcmVhdGlvbnNcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cclxuICAgIHN0YXRpYyBpZGVudGl0eSgpIHsgcmV0dXJuIG5ldyBNYXRyaXgyKDEsIDAsIDAsIDEpOyB9XHJcbiAgICBzdGF0aWMgc2NhbGVkKHg6IG51bWJlciwgeTogbnVtYmVyKSB7IHJldHVybiBuZXcgTWF0cml4Mih4LCAwLCAwLCB5KTsgfVxyXG4gICAgc3RhdGljIHJvdGF0aW9uKGFuZ2xlOiBudW1iZXIpIHsgcmV0dXJuIG5ldyBNYXRyaXgyKDAsIDAsIDAsIDApLnNldEFzUm90YXRpb24oYW5nbGUpOyB9XHJcbn0iLCIvLyBUaGlzIGNsYXNzIHNob3VsZCBwcm9iYWJseSBiZSBpbW11dGFibGUgYnV0IGlzbid0IGZvciBwZXJmb3JtYW5jZSByZWFzb25zLi4uXHJcbmV4cG9ydCBjbGFzcyBWZWN0b3IyIHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDApIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKG90aGVyOiBWZWN0b3IyKSB7XHJcbiAgICAgICAgdGhpcy54ICs9IG90aGVyLng7XHJcbiAgICAgICAgdGhpcy55ICs9IG90aGVyLnk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgYWRkWCh4OiBudW1iZXIpIHt0aGlzLnggKz0geDsgcmV0dXJuIHRoaXM7IH1cclxuICAgIGFkZFkoeTogbnVtYmVyKSB7dGhpcy55ICs9IHk7IHJldHVybiB0aGlzOyB9XHJcblxyXG4gICAgc3ViKG90aGVyOiBWZWN0b3IyKSB7XHJcbiAgICAgICAgdGhpcy54IC09IG90aGVyLng7XHJcbiAgICAgICAgdGhpcy55IC09IG90aGVyLnk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgc3ViWCh4OiBudW1iZXIpIHt0aGlzLnggLT0geDsgcmV0dXJuIHRoaXM7IH1cclxuICAgIHN1YlkoeTogbnVtYmVyKSB7dGhpcy55IC09IHk7IHJldHVybiB0aGlzOyB9XHJcbiAgICBcclxuICAgIG11bChvdGhlcjogVmVjdG9yMikge1xyXG4gICAgICAgIHRoaXMueCAqPSBvdGhlci54O1xyXG4gICAgICAgIHRoaXMueSAqPSBvdGhlci55O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIG11bFgoeDogbnVtYmVyKSB7dGhpcy54ICo9IHg7IHJldHVybiB0aGlzOyB9XHJcbiAgICBtdWxZKHk6IG51bWJlcikge3RoaXMueSAqPSB5OyByZXR1cm4gdGhpczsgfVxyXG5cclxuICAgIGRpdihvdGhlcjogVmVjdG9yMikge1xyXG4gICAgICAgIHRoaXMueCAvPSBvdGhlci54O1xyXG4gICAgICAgIHRoaXMueSAvPSBvdGhlci55O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGRpdlgoeDogbnVtYmVyKSB7dGhpcy54IC89IHg7IHJldHVybiB0aGlzOyB9XHJcbiAgICBkaXZZKHk6IG51bWJlcikge3RoaXMueSAvPSB5OyByZXR1cm4gdGhpczsgfVxyXG5cclxuICAgIHNjYWxlKHNjYWxlcjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy54ICo9IHNjYWxlcjtcclxuICAgICAgICB0aGlzLnkgKj0gc2NhbGVyO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHNldChvdGhlcjogVmVjdG9yMikge1xyXG4gICAgICAgIHRoaXMueCA9IG90aGVyLng7XHJcbiAgICAgICAgdGhpcy55ID0gb3RoZXIueTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBzZXRaZXJvKCkge1xyXG4gICAgICAgIHRoaXMueCA9IDA7XHJcbiAgICAgICAgdGhpcy55ID0gMDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBhcHBseSh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBuZWdhdGUoKSB7XHJcbiAgICAgICAgdGhpcy54ID0gLXRoaXMueDtcclxuICAgICAgICB0aGlzLnkgPSAtdGhpcy55O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBub3JtYWxpemUoKSB7XHJcbiAgICAgICAgbGV0IGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xyXG5cclxuICAgICAgICBpZiAobGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnggLz0gbGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLnkgLz0gbGVuZ3RoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcGVycGVuZGljdWxhcml6ZSgpe1xyXG4gICAgICAgIGxldCB0ID0gdGhpcy55O1xyXG5cclxuICAgICAgICB0aGlzLnkgPSB0aGlzLng7XHJcbiAgICAgICAgdGhpcy54ID0gLXQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG5vcm1hbGl6ZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5ub3JtYWxpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3FyTGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiBWZWN0b3IyLmRvdCh0aGlzLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy5zcXJMZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBhbmdsZSgpIHtcclxuICAgICAgICByZXR1cm4gVmVjdG9yMi5mQW5nbGUodGhpcy55LCB0aGlzLngpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3RhbmNlVG8ob3RoZXI6IFZlY3RvcjIpIHtcclxuICAgICAgICByZXR1cm4gVmVjdG9yMi5kaXN0YW5jZSh0aGlzLCBvdGhlcik7XHJcbiAgICB9XHJcbiAgICBkaXJlY3Rpb25UbyhvdGhlcjogVmVjdG9yMikge1xyXG4gICAgICAgIHJldHVybiBWZWN0b3IyLmRpcmVjdGlvbih0aGlzLCBvdGhlcik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRpcmVjdGlvbihhOiBWZWN0b3IyLCBiOiBWZWN0b3IyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uT3V0KGEsIGIsIG5ldyBWZWN0b3IyKCkpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGRpcmVjdGlvbk91dChhOiBWZWN0b3IyLCBiOiBWZWN0b3IyLCBvdXQ6IFZlY3RvcjIpIHtcclxuICAgICAgICBsZXQgZHggPSBWZWN0b3IyLmR4KGEsIGIpO1xyXG4gICAgICAgIGxldCBkeSA9IFZlY3RvcjIuZHkoYSwgYik7XHJcblxyXG4gICAgICAgIG91dC54ID0gZHg7XHJcbiAgICAgICAgb3V0LnkgPSBkeTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH1cclxuICAgIHN0YXRpYyB0YW5nZW50KGE6IFZlY3RvcjIsIGI6IFZlY3RvcjIpIHtcclxuICAgICAgICByZXR1cm4gVmVjdG9yMi50YW5nZW50T3V0KGEsIGIsIG5ldyBWZWN0b3IyKCkpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHRhbmdlbnRPdXQoYTogVmVjdG9yMiwgYjogVmVjdG9yMiwgb3V0OiBWZWN0b3IyKSB7XHJcbiAgICAgICAgcmV0dXJuIFZlY3RvcjIuZGlyZWN0aW9uT3V0KGEsIGIsIG91dCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgbm9ybWFsKGE6IFZlY3RvcjIsIGI6IFZlY3RvcjIpIHtcclxuICAgICAgICByZXR1cm4gVmVjdG9yMi5ub3JtYWxPdXQoYSwgYiwgbmV3IFZlY3RvcjIoKSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgbm9ybWFsT3V0KGE6IFZlY3RvcjIsIGI6IFZlY3RvcjIsIG91dDogVmVjdG9yMikge1xyXG4gICAgICAgIHJldHVybiBWZWN0b3IyLmRpcmVjdGlvbk91dChhLCBiLCBvdXQpLnBlcnBlbmRpY3VsYXJpemUoKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBkaXN0YW5jZShhOiBWZWN0b3IyLCBiOiBWZWN0b3IyKSB7XHJcbiAgICAgICAgcmV0dXJuIFZlY3RvcjIuZkRpc3RhbmNlKGEueCwgYS55LCBiLngsIGIueSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGVycFRvKG90aGVyOiBWZWN0b3IyLCBmOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gVmVjdG9yMi5sZXJwT3V0KHRoaXMsIG90aGVyLCB0aGlzLCBmKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbGVycChhOiBWZWN0b3IyLCBiOiBWZWN0b3IyLCBmOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sZXJwT3V0KGEsIGIsIG5ldyBWZWN0b3IyKCksIGYpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBsZXJwT3V0KGE6IFZlY3RvcjIsIGI6IFZlY3RvcjIsIG91dDogVmVjdG9yMiwgZjogbnVtYmVyKSB7XHJcbiAgICAgICAgb3V0LnggPSBhLnggKyAoYi54IC0gYS54KSAqIGY7XHJcbiAgICAgICAgb3V0LnkgPSBhLnkgKyAoYi55IC0gYS55KSAqIGY7XHJcblxyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRvdChhOiBWZWN0b3IyLCBiOiBWZWN0b3IyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZkRvdChhLngsIGEueSwgYi54LCBiLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcm9zcyhhOiBWZWN0b3IyLCBiOiBWZWN0b3IyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZkNyb3NzKGEueCwgYS55LCBiLngsIGIueSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFuZ2xlZChhbmdsZTogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKE1hdGguY29zKGFuZ2xlKSwgTWF0aC5zaW4oYW5nbGUpKTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXHJcbiAgICAvLyBIZWxwZXIgZnVuY3Rpb25zIHRvIHdvcmsgd2l0aG91dCB0aGUgVmVjdG9yMiBjbGFzc1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cclxuICAgIHN0YXRpYyBkeChhOiBWZWN0b3IyLCBiOiBWZWN0b3IyKSB7XHJcbiAgICAgICAgcmV0dXJuIGIueCAtIGEueDtcclxuICAgIH1cclxuICAgIHN0YXRpYyBkeShhOiBWZWN0b3IyLCBiOiBWZWN0b3IyKSB7XHJcbiAgICAgICAgcmV0dXJuIGIueSAtIGEueTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBmRG90KGF4OiBudW1iZXIsIGF5OiBudW1iZXIsIGJ4OiBudW1iZXIsIGJ5OiBudW1iZXIpe1xyXG4gICAgICAgIHJldHVybiBheCAqIGJ4ICsgYXkgKiBieTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBmRGlzdGFuY2UoYXg6IG51bWJlciwgYXk6IG51bWJlciwgYng6IG51bWJlciwgYnk6IG51bWJlcil7XHJcbiAgICAgICAgbGV0IGR4ID0gYXggLSBieDtcclxuICAgICAgICBsZXQgZHkgPSBheSAtIGJ5O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5mTGVuZ3RoKGR4LCBkeSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZkNyb3NzKGF4OiBudW1iZXIsIGF5OiBudW1iZXIsIGJ4OiBudW1iZXIsIGJ5OiBudW1iZXIpe1xyXG4gICAgICAgIHJldHVybiBheCAqIGJ5IC0gYXkgKiBieDtcclxuICAgIH1cclxuICAgIHN0YXRpYyBmU3F1YXJlTGVuZ3RoKHg6IG51bWJlciwgeTogbnVtYmVyKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5mRG90KHgsIHksIHgsIHkpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGZBbmdsZSh4OiBudW1iZXIsIHk6IG51bWJlcil7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIoeSwgeCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZkxlbmd0aCh4OiBudW1iZXIsIHk6IG51bWJlcil7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmZTcXVhcmVMZW5ndGgoeCwgeSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb25lKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih0aGlzLngsIHRoaXMueSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9TdHJpbmcoKXtcclxuICAgICAgICByZXR1cm4gYCgke3RoaXMueH0sJHt0aGlzLnl9KWA7XHJcbiAgICB9XHJcbiAgICB0b1Nob3J0U3RyaW5nKCl7XHJcbiAgICAgICAgcmV0dXJuIGAoJHtNYXRoLnJvdW5kKHRoaXMueCAqIDEwMCkgLyAxMDB9LCR7TWF0aC5yb3VuZCh0aGlzLnkgKiAxMDApIC8gMTAwfSlgO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZWFkb25seSB6ZXJvOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoMCwgMCk7XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgb25lOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoMSwgMSk7XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgdW5pdFg6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigxLCAwKTtcclxuICAgIHN0YXRpYyByZWFkb25seSB1bml0WTogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKDAsIDEpO1xyXG59IiwiZXhwb3J0IGVudW0gRG9jdW1lbnRVbml0cyB7XHJcbiAgICBpbixcclxuICAgIG1tLFxyXG4gICAgY20sXHJcbiAgICBweFxyXG59XHJcblxyXG5mdW5jdGlvbiBtbVRvSW5jaChtbTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gbW0gKiAwLjAzOTM3MDA3ODc7XHJcbn1cclxuZnVuY3Rpb24gY21Ub0luY2goY206IG51bWJlcikge1xyXG4gICAgcmV0dXJuIG1tVG9JbmNoKGNtICogMTApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYWxjdWxhdGVQaXhlbFNpemUoc2l6ZTogbnVtYmVyLCBkcGk6IG51bWJlciwgdW5pdDogRG9jdW1lbnRVbml0cyk6IG51bWJlciB7XHJcbiAgICBzd2l0Y2ggKHVuaXQpIHtcclxuICAgICAgICBjYXNlIERvY3VtZW50VW5pdHMucHg6IHJldHVybiBzaXplO1xyXG4gICAgICAgIGNhc2UgRG9jdW1lbnRVbml0cy5pbjogcmV0dXJuIHNpemUgKiBkcGk7XHJcbiAgICAgICAgY2FzZSBEb2N1bWVudFVuaXRzLm1tOiByZXR1cm4gbW1Ub0luY2goc2l6ZSkgKiBkcGk7XHJcbiAgICAgICAgY2FzZSBEb2N1bWVudFVuaXRzLmNtOiByZXR1cm4gY21Ub0luY2goc2l6ZSkgKiBkcGk7XHJcbiAgICAgICAgZGVmYXVsdDogdGhyb3cgXCJVbmtub3duIHVuaXRcIjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERvY3VtZW50U2V0dGluZ3Mge1xyXG4gICAgcmVhZG9ubHkgd2lkdGg6IG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGhlaWdodDogbnVtYmVyO1xyXG5cclxuICAgIHJlYWRvbmx5IGRwaTogbnVtYmVyO1xyXG5cclxuICAgIHJlYWRvbmx5IHVuaXQ6IERvY3VtZW50VW5pdHM7XHJcblxyXG4gICAgY29uc3RydWN0b3Iod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGRwaTogbnVtYmVyLCB1bml0OiBEb2N1bWVudFVuaXRzKXtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5kcGkgPSBkcGk7XHJcbiAgICAgICAgdGhpcy51bml0ID0gdW5pdDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBbGwgdGhpcyBjYW4gYmUgY2FjaGVkIGJlY2F1c2UgaXQganVzdCBjYWxjdWxhdGUgdGhlIGluZm9ybWF0aW9uIDopXHJcbiAgICBnZXQgYXNwZWN0UmF0aW8oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy53aWR0aCAvIHRoaXMuaGVpZ2h0O1xyXG4gICAgfVxyXG4gICAgZ2V0IHdpZHRoSW5QaXhlbHMoKXtcclxuICAgICAgICByZXR1cm4gY2FsY3VsYXRlUGl4ZWxTaXplKHRoaXMud2lkdGgsIHRoaXMuZHBpLCB0aGlzLnVuaXQpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGhlaWdodEluUGl4ZWxzKCl7XHJcbiAgICAgICAgcmV0dXJuIGNhbGN1bGF0ZVBpeGVsU2l6ZSh0aGlzLmhlaWdodCwgdGhpcy5kcGksIHRoaXMudW5pdCk7XHJcbiAgICB9XHJcbiAgICBnZXQgcGl4ZWxzUGVyUG9pbnQoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5kcGkgLyA3MjtcclxuICAgIH1cclxuICAgIGdldCBwb2ludHNQZXJQaXhlbCgpe1xyXG4gICAgICAgIHJldHVybiAxIC8gdGhpcy5waXhlbHNQZXJQb2ludDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgQTRQb3J0cmFpdCA9IG5ldyBEb2N1bWVudFNldHRpbmdzKDIxMCwgMjk3LCAzMDAsIERvY3VtZW50VW5pdHMubW0pO1xyXG4gICAgc3RhdGljIHJlYWRvbmx5IEE0TGFuZHNjYXBlID0gbmV3IERvY3VtZW50U2V0dGluZ3MoMjk3LCAyMTAsIDMwMCwgRG9jdW1lbnRVbml0cy5tbSk7XHJcbiAgICBcclxuICAgIHN0YXRpYyByZWFkb25seSBTY3JlZW40SyA9IG5ldyBEb2N1bWVudFNldHRpbmdzKDM4NDAsIDIxNjAsIDcyLCBEb2N1bWVudFVuaXRzLnB4KTtcclxuICAgIHN0YXRpYyByZWFkb25seSBTY3JlZW5IRCA9IG5ldyBEb2N1bWVudFNldHRpbmdzKDE5MjAsIDEwODAsIDcyLCBEb2N1bWVudFVuaXRzLnB4KTtcclxuXHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgU3F1YXJlID0gbmV3IERvY3VtZW50U2V0dGluZ3MoMTAyNCwgMTAyNCwgNzIsIERvY3VtZW50VW5pdHMucHgpO1xyXG5cclxuICAgIHN0YXRpYyByZWFkb25seSBEZWZhdWx0RFBJID0gNzI7XHJcbn0iLCJleHBvcnQgZW51bSBWaWV3cG9ydEZpdCB7XHJcbiAgICBGaWxsLFxyXG4gICAgQ29udGFpbixcclxuICAgIENvdmVyLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVmlld3BvcnRTZXR0aW5nc3tcclxuICAgIHJlYWRvbmx5IG1pblg6IG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1pblk6IG51bWJlcjtcclxuXHJcbiAgICByZWFkb25seSBtYXhYOiBudW1iZXI7XHJcbiAgICByZWFkb25seSBtYXhZOiBudW1iZXI7XHJcblxyXG4gICAgcmVhZG9ubHkgZml0OiBWaWV3cG9ydEZpdDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtaW5YOiBudW1iZXIsIG1pblk6IG51bWJlciwgbWF4WDogbnVtYmVyLCBtYXhZOiBudW1iZXIsIGZpdDogVmlld3BvcnRGaXQpe1xyXG4gICAgICAgIHRoaXMubWluWCA9IG1pblg7XHJcbiAgICAgICAgdGhpcy5taW5ZID0gbWluWTtcclxuICAgICAgICB0aGlzLm1heFggPSBtYXhYO1xyXG4gICAgICAgIHRoaXMubWF4WSA9IG1heFk7XHJcblxyXG4gICAgICAgIHRoaXMuZml0ID0gZml0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB4ICgpIHtyZXR1cm4gdGhpcy5taW5YO31cclxuICAgIGdldCB5ICgpIHtyZXR1cm4gdGhpcy5taW5ZO31cclxuICAgIGdldCBjZW50ZXJYICgpIHtyZXR1cm4gdGhpcy54ICsgdGhpcy53aWR0aCAvIDI7fVxyXG4gICAgZ2V0IGNlbnRlclkgKCkge3JldHVybiB0aGlzLnkgKyB0aGlzLmhlaWdodCAvIDI7fVxyXG5cclxuICAgIGdldCB3aWR0aCgpIHtyZXR1cm4gdGhpcy5tYXhYIC0gdGhpcy5taW5YO31cclxuICAgIGdldCBoZWlnaHQoKSB7cmV0dXJuIHRoaXMubWF4WSAtIHRoaXMubWluWTt9XHJcblxyXG4gICAgZ2V0IGFzcGVjdFJhdGlvKCkge3JldHVybiB0aGlzLndpZHRoIC8gdGhpcy5oZWlnaHQ7fVxyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCJsaWIvbWF0aC9WZWN0b3IyXCI7XHJcbmltcG9ydCB7IENvbnN0cmFpbnQyRCB9IGZyb20gXCIuL0NvbnN0cmFpbnQyRFwiO1xyXG5pbXBvcnQgeyBSaWdpZGJvZHkyRCB9IGZyb20gXCIuL1JpZ2lkYm9keTJEXCI7XHJcbmltcG9ydCB7IENvbnN0cmFpbnRBdHRhY2htZW50MkQgfSBmcm9tIFwiLi9Db25zdHJhaW50QXR0YWNobWVudDJEXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQXhpc0NvbnN0cmFpbnQyRCBleHRlbmRzIENvbnN0cmFpbnQyRCB7XHJcbiAgICBjb21wbGlhbmNlOiBudW1iZXI7XHJcblxyXG4gICAgb3JpZ2luOiBWZWN0b3IyO1xyXG4gICAgYXhpczogVmVjdG9yMjtcclxuXHJcbiAgICBhdHRhY2htZW50OiBDb25zdHJhaW50QXR0YWNobWVudDJEO1xyXG5cclxuICAgIGxhbWJkYTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihhdHRhY2htZW50OiBDb25zdHJhaW50QXR0YWNobWVudDJELCBvcmlnaW46IFZlY3RvcjIsIGF4aXM6IFZlY3RvcjIsIGNvbXBsaWFuY2U6IG51bWJlciA9IDApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmF0dGFjaG1lbnQgPSBhdHRhY2htZW50O1xyXG5cclxuICAgICAgICB0aGlzLm9yaWdpbiA9IG9yaWdpbjtcclxuICAgICAgICB0aGlzLmF4aXMgPSBheGlzO1xyXG5cclxuICAgICAgICB0aGlzLmNvbXBsaWFuY2UgPSBjb21wbGlhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoZGVsdGE6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubGFtYmRhID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9ub3JtYWw6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigpO1xyXG4gICAgcHJpdmF0ZSBfZ2xvYmFsQXR0YWNobWVudFBvc2l0aW9uOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoKTtcclxuICAgIHByaXZhdGUgX2xvY2FsRGlyZWN0aW9uOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoKTtcclxuICAgIHByaXZhdGUgX2ltcHVsc2U6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigpO1xyXG5cclxuICAgIGFwcGx5KGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBsZXQgZ2xvYmFsQXR0YWNobWVudFBvc2l0aW9uID0gdGhpcy5hdHRhY2htZW50LmdldEdsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbih0aGlzLl9nbG9iYWxBdHRhY2htZW50UG9zaXRpb24pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSBWZWN0b3IyLmRpcmVjdGlvbk91dChnbG9iYWxBdHRhY2htZW50UG9zaXRpb24sIHRoaXMub3JpZ2luLCB0aGlzLl9ub3JtYWwpO1xyXG5cclxuICAgICAgICBsZXQgYW1vdW50ID0gVmVjdG9yMi5kb3QoZGlyZWN0aW9uLCB0aGlzLmF4aXMpO1xyXG5cclxuICAgICAgICBkaXJlY3Rpb24uc3ViWChhbW91bnQgKiB0aGlzLmF4aXMueCkuc3ViWShhbW91bnQgKiB0aGlzLmF4aXMueSk7XHJcblxyXG4gICAgICAgIGxldCBkaXN0YW5jZSA9IGRpcmVjdGlvbi5sZW5ndGg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZGlzdGFuY2UgPT0gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBkaXJlY3Rpb24uc2NhbGUoMSAvIGRpc3RhbmNlKTtcclxuXHJcbiAgICAgICAgbGV0IGxvY2FsRGlyZWN0aW9uID0gdGhpcy5hdHRhY2htZW50LmdldExvY2FsRGlyZWN0aW9uKGRpcmVjdGlvbiwgdGhpcy5fbG9jYWxEaXJlY3Rpb24pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB3MSA9IHRoaXMuYXR0YWNobWVudC5nZXRMb2NhbEdlbmVyYWxpemVkSW52ZXJzZU1hc3MobG9jYWxEaXJlY3Rpb24pO1xyXG4gICAgICAgIGxldCB3MiA9IDA7XHJcblxyXG4gICAgICAgIGxldCBhbHBoYSA9IHRoaXMuY29tcGxpYW5jZSAvIChkZWx0YSAqIGRlbHRhKTtcclxuXHJcbiAgICAgICAgbGV0IGMgPSBkaXN0YW5jZTtcclxuICAgICAgICBsZXQgZGVsdGFMYW1iZGEgPSAoLWMgKyB0aGlzLmxhbWJkYSAqIGFscGhhKSAvICh3MSArIHcyICsgYWxwaGEpO1xyXG5cclxuICAgICAgICB0aGlzLmxhbWJkYSArPSBkZWx0YUxhbWJkYTtcclxuXHJcbiAgICAgICAgbGV0IGltcHVsc2UgPSB0aGlzLl9pbXB1bHNlLnNldChkaXJlY3Rpb24pLnNjYWxlKGRlbHRhTGFtYmRhKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmF0dGFjaG1lbnQuYm9keS5hZGRJbW1lZGlhdGVJbXB1bHNlQXQoLWltcHVsc2UueCwgLWltcHVsc2UueSwgZ2xvYmFsQXR0YWNobWVudFBvc2l0aW9uLngsIGdsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbi55LCBkZWx0YSk7XHJcblxyXG4gICAgfVxyXG4gICAgYXBwbHlEYW1waW5nKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICAvLyBOb3QgaW1wbGVtZW50ZWQuIFJlYWRlciBleGNlcmNpc2U/IDopIFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCJsaWIvbWF0aC9WZWN0b3IyXCI7XHJcbmltcG9ydCB7IENvbnN0cmFpbnQyRCB9IGZyb20gXCIuL0NvbnN0cmFpbnQyRFwiO1xyXG5pbXBvcnQgeyBSaWdpZGJvZHkyRCB9IGZyb20gXCIuL1JpZ2lkYm9keTJEXCI7XHJcbmltcG9ydCB7IENvbnN0cmFpbnRBdHRhY2htZW50MkQgfSBmcm9tIFwiLi9Db25zdHJhaW50QXR0YWNobWVudDJEXCI7XHJcbmltcG9ydCB7IE1hdGhIZWxwZXIgfSBmcm9tIFwibGliL21hdGgvTWF0aEhlbHBlclwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBBeGxlQ29zbnRyYWludDJEIGV4dGVuZHMgQ29uc3RyYWludDJEIHtcclxuICAgIGNvbXBsaWFuY2U6IG51bWJlcjtcclxuXHJcbiAgICBmcm9tOiBSaWdpZGJvZHkyRDtcclxuICAgIHRvOiBSaWdpZGJvZHkyRDtcclxuXHJcbiAgICBsYW1iZGE6IG51bWJlciA9IDA7XHJcblxyXG4gICAgZ2VhclJhdGlvOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGZyb206IFJpZ2lkYm9keTJELCB0bzogUmlnaWRib2R5MkQsIGNvbXBsaWFuY2U6IG51bWJlciA9IDApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmZyb20gPSBmcm9tO1xyXG4gICAgICAgIHRoaXMudG8gPSB0bztcclxuXHJcbiAgICAgICAgdGhpcy5jb21wbGlhbmNlID0gY29tcGxpYW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxhbWJkYSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwbHkoZGVsdGE6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGxldCBkaWZmID0gTWF0aEhlbHBlci5zaG9ydGVzdEFuZ2xlKFxyXG4gICAgICAgICAgICBNYXRoSGVscGVyLm5vcm1hbGl6ZUFuZ2xlKHRoaXMuZnJvbS5yb3RhdGlvbiAqIHRoaXMuZ2VhclJhdGlvKSwgXHJcbiAgICAgICAgICAgIE1hdGhIZWxwZXIubm9ybWFsaXplQW5nbGUodGhpcy50by5yb3RhdGlvbikpO1xyXG5cclxuICAgICAgICBpZihkaWZmID09IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHcxID0gdGhpcy5mcm9tLmludmVyc2VJbmVydGlhO1xyXG4gICAgICAgIGxldCB3MiA9IHRoaXMudG8uaW52ZXJzZUluZXJ0aWEgKiB0aGlzLmdlYXJSYXRpbztcclxuXHJcbiAgICAgICAgbGV0IGFscGhhID0gdGhpcy5jb21wbGlhbmNlIC8gKGRlbHRhICogZGVsdGEpO1xyXG5cclxuICAgICAgICBsZXQgYyA9IE1hdGguYWJzKGRpZmYpO1xyXG4gICAgICAgIGxldCBkZWx0YUxhbWJkYSA9ICgtYyArIHRoaXMubGFtYmRhICogYWxwaGEpIC8gKHcxICsgdzIgKyBhbHBoYSk7XHJcblxyXG4gICAgICAgIHRoaXMubGFtYmRhICs9IGRlbHRhTGFtYmRhO1xyXG5cclxuICAgICAgICBsZXQgcm90YXRpb25hbEltcHVsc2UgPSBNYXRoLnNpZ24oZGlmZikgKiBkZWx0YUxhbWJkYTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmZyb20ucm90YXRpb24gLT0gcm90YXRpb25hbEltcHVsc2UgKiB0aGlzLmZyb20uaW52ZXJzZUluZXJ0aWEgLyB0aGlzLmdlYXJSYXRpbztcclxuICAgICAgICB0aGlzLmZyb20uYW5ndWxhclZlbG9jaXR5IC09IHJvdGF0aW9uYWxJbXB1bHNlICogdGhpcy5mcm9tLmludmVyc2VJbmVydGlhIC8gZGVsdGEgLyB0aGlzLmdlYXJSYXRpbztcclxuICAgICAgICB0aGlzLnRvLnJvdGF0aW9uICs9IHJvdGF0aW9uYWxJbXB1bHNlICogdGhpcy50by5pbnZlcnNlSW5lcnRpYTtcclxuICAgICAgICB0aGlzLnRvLmFuZ3VsYXJWZWxvY2l0eSArPSByb3RhdGlvbmFsSW1wdWxzZSAqIHRoaXMudG8uaW52ZXJzZUluZXJ0aWEgLyBkZWx0YTtcclxuICAgIH1cclxuICAgIGFwcGx5RGFtcGluZyhkZWx0YTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgLy8gTm90IGltcGxlbWVudGVkLiBSZWFkZXIgZXhjZXJjaXNlPyA6KSBcclxuICAgIH1cclxufSIsImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb25zdHJhaW50MkQge1xyXG4gICAgZW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBcclxuICAgIGFic3RyYWN0IGluaXQoZGVsdGE6IG51bWJlcik6IHZvaWQ7XHJcbiAgICBhYnN0cmFjdCBhcHBseShkZWx0YTogbnVtYmVyKTogdm9pZDtcclxuICAgIGFic3RyYWN0IGFwcGx5RGFtcGluZyhkZWx0YTogbnVtYmVyKTogdm9pZDtcclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwibGliL21hdGgvVmVjdG9yMlwiO1xyXG5pbXBvcnQgeyBSaWdpZGJvZHkyRCB9IGZyb20gXCIuL1JpZ2lkYm9keTJEXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uc3RyYWludEF0dGFjaG1lbnQyRCB7XHJcbiAgICByZWFkb25seSBib2R5OiBSaWdpZGJvZHkyRDtcclxuICAgIHJlYWRvbmx5IHJlbGF0aXZlUG9zaXRpb246IFZlY3RvcjI7XHJcbiAgICByZWFkb25seSBpc0NlbnRyYWw6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IoYm9keTogUmlnaWRib2R5MkQsIHJlbGF0aXZlUG9zaXRpb24/OiBWZWN0b3IyKXtcclxuICAgICAgICB0aGlzLmJvZHkgPSBib2R5O1xyXG4gICAgICAgIHRoaXMucmVsYXRpdmVQb3NpdGlvbiA9IHJlbGF0aXZlUG9zaXRpb24gPz8gbmV3IFZlY3RvcjIoKTtcclxuICAgICAgICB0aGlzLmlzQ2VudHJhbCA9IHJlbGF0aXZlUG9zaXRpb24gPT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMb2NhbEdlbmVyYWxpemVkSW52ZXJzZU1hc3Mobm9ybWFsOiBWZWN0b3IyKTogbnVtYmVyIHtcclxuICAgICAgICBpZih0aGlzLmlzQ2VudHJhbCl7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJvZHkuaW52ZXJzZU1hc3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgY3Jvc3MgPSBWZWN0b3IyLmNyb3NzKG5vcm1hbCwgdGhpcy5yZWxhdGl2ZVBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJvZHkuaW52ZXJzZU1hc3MgKyBjcm9zcyAqIHRoaXMuYm9keS5pbnZlcnNlSW5lcnRpYSAqIGNyb3NzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRMb2NhbERpcmVjdGlvbihpbnB1dDogVmVjdG9yMiwgb3V0cHV0OiBWZWN0b3IyKTogVmVjdG9yMntcclxuICAgICAgICByZXR1cm4gdGhpcy5ib2R5LmludmVyc2VCYXNpcy50cmFuc2Zvcm1PdXQoaW5wdXQsIG91dHB1dCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0R2xvYmFsQXR0YWNobWVudFBvc2l0aW9uKG91dHB1dDogVmVjdG9yMik6IFZlY3RvcjJ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9keS5iYXNpc1xyXG4gICAgICAgICAgICAudHJhbnNmb3JtT3V0KHRoaXMucmVsYXRpdmVQb3NpdGlvbiwgb3V0cHV0KVxyXG4gICAgICAgICAgICAuYWRkKHRoaXMuYm9keS5wb3NpdGlvbik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcImxpYi9tYXRoL1ZlY3RvcjJcIjtcclxuaW1wb3J0IHsgQ29uc3RyYWludDJEIH0gZnJvbSBcIi4vQ29uc3RyYWludDJEXCI7XHJcbmltcG9ydCB7IFJpZ2lkYm9keTJEIH0gZnJvbSBcIi4vUmlnaWRib2R5MkRcIjtcclxuaW1wb3J0IHsgQ29uc3RyYWludEF0dGFjaG1lbnQyRCB9IGZyb20gXCIuL0NvbnN0cmFpbnRBdHRhY2htZW50MkRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEaXN0YW5jZUNvbnN0cmFpbnQyRCBleHRlbmRzIENvbnN0cmFpbnQyRCB7XHJcbiAgICAvLyBDb21wbGlhbmNlIGlzIHRoZSBpbnZlcnNlIG9mIHN0aWZmbmVzcyAoMSAvIHNwcmluZ0NvZWZmaWNpZW50KVxyXG4gICAgY29tcGxpYW5jZTogbnVtYmVyO1xyXG4gICAgLy8gRGFtcGVyY29tcGxpYW5jZSBpcyB0aGUgaW52ZXJzZSBvZiBzdGlmZm5lc3MgcmVsYXRlZCB0byB2ZWxvY2l0eSAoMSAvIGRhbXBlckNvZWZmaWNpZW50KVxyXG4gICAgZGFtcGVyQ29tcGxpYW5jZTogbnVtYmVyID0gLTE7XHJcblxyXG4gICAgcmVzdERpc3RhbmNlOiBudW1iZXI7XHJcblxyXG4gICAgZnJvbTogQ29uc3RyYWludEF0dGFjaG1lbnQyRDtcclxuICAgIHRvOiBDb25zdHJhaW50QXR0YWNobWVudDJEO1xyXG5cclxuICAgIC8vIFRoZSBsYW1iZGEncyBhcmUgYWNjdW11bGF0b3JzIHRoYXQgYXJlIHJlc2V0IHBlciBmcmFtZS4gVGhpcyB3YXkgeW91IGNhbiBldmFsdWF0ZSB0aGUgY29uc3RyYWludCBtdWx0aXBsZSB0aW1lcyBwZXIgZnJhbWUgd2l0aG91dCBpbmNyZWFzaW5nIHN0aWZmbmVzcy5cclxuICAgIGxhbWJkYTogbnVtYmVyID0gMDtcclxuICAgIGRhbXBlckxhbWJkYTogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvLyBUaGUgdG90YWwgZm9yY2UgYXBwbGllZCBvdmVyIGEgZnJhbWUgKGluIHRoaXMgY2FzZSB3ZSBvbmx5IHRha2Ugc3ByaW5nIGZvcmNlIGludG8gYWNjb3VudCwgYnV0IGl0IGlzIHRyaXZpYWwgdG8gYWRkIGRhbXBlciBmb3JjZSBhcyB3ZWxsKVxyXG4gICAgZm9yY2VBcHBsaWVkOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihmcm9tOiBDb25zdHJhaW50QXR0YWNobWVudDJELCB0bzogQ29uc3RyYWludEF0dGFjaG1lbnQyRCwgZGlzdGFuY2U/OiBudW1iZXIsIGNvbXBsaWFuY2U6IG51bWJlciA9IDApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmZyb20gPSBmcm9tO1xyXG4gICAgICAgIHRoaXMudG8gPSB0bztcclxuXHJcbiAgICAgICAgaWYoZGlzdGFuY2UgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdERpc3RhbmNlID0gZGlzdGFuY2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdERpc3RhbmNlID0gdGhpcy5jYWxjdWxhdGVEaXN0YW5jZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbXBsaWFuY2UgPSBjb21wbGlhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoZGVsdGE6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIC8vIFJlc2V0IHRoZSBhY2N1bXVsYXRvcnNcclxuICAgICAgICB0aGlzLmxhbWJkYSA9IDA7XHJcbiAgICAgICAgdGhpcy5kYW1wZXJMYW1iZGEgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLmZvcmNlQXBwbGllZC5zZXRaZXJvKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmFyaWFibGVzIG5lZWRlZCBpbiB0aGUgYXBwbHkgZnVuY3Rpb24gdGhhdCB3ZSBkb24ndCB3YW50IHRvIHJlYWxsb2NhdGVcclxuICAgIHByaXZhdGUgX2Zyb21HbG9iYWxBdHRhY2htZW50UG9zaXRpb246IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigpO1xyXG4gICAgcHJpdmF0ZSBfdG9HbG9iYWxBdHRhY2htZW50UG9zaXRpb246IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigpO1xyXG5cclxuICAgIHByaXZhdGUgX2RpcmVjdGlvbjogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKCk7XHJcbiAgICBwcml2YXRlIF9mcm9tTG9jYWxEaXJlY3Rpb246IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigpO1xyXG4gICAgcHJpdmF0ZSBfdG9Mb2NhbERpcmVjdGlvbjogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfaW1wdWxzZTogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKCk7XHJcblxyXG4gICAgYXBwbHkoZGVsdGE6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmKHRoaXMuY29tcGxpYW5jZSA8IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IGZyb21HbG9iYWxBdHRhY2htZW50UG9zaXRpb24gPSB0aGlzLmZyb20uZ2V0R2xvYmFsQXR0YWNobWVudFBvc2l0aW9uKHRoaXMuX2Zyb21HbG9iYWxBdHRhY2htZW50UG9zaXRpb24pO1xyXG4gICAgICAgIGxldCB0b0dsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbiA9IHRoaXMudG8uZ2V0R2xvYmFsQXR0YWNobWVudFBvc2l0aW9uKHRoaXMuX3RvR2xvYmFsQXR0YWNobWVudFBvc2l0aW9uKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgZGlyZWN0aW9uID0gVmVjdG9yMi5kaXJlY3Rpb25PdXQoZnJvbUdsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbiwgdG9HbG9iYWxBdHRhY2htZW50UG9zaXRpb24sIHRoaXMuX2RpcmVjdGlvbik7XHJcbiAgICAgICAgbGV0IGRpc3RhbmNlID0gZGlyZWN0aW9uLmxlbmd0aDtcclxuICAgICAgICBcclxuICAgICAgICBpZihkaXN0YW5jZSA9PSAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIGRpcmVjdGlvbi5zY2FsZSgxIC8gZGlzdGFuY2UpO1xyXG5cclxuICAgICAgICBsZXQgZnJvbUxvY2FsRGlyZWN0aW9uID0gdGhpcy5mcm9tLmdldExvY2FsRGlyZWN0aW9uKGRpcmVjdGlvbiwgdGhpcy5fZnJvbUxvY2FsRGlyZWN0aW9uKTtcclxuICAgICAgICBsZXQgdG9Mb2NhbERpcmVjdGlvbiA9IHRoaXMudG8uZ2V0TG9jYWxEaXJlY3Rpb24oZGlyZWN0aW9uLCB0aGlzLl90b0xvY2FsRGlyZWN0aW9uKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgdzEgPSB0aGlzLmZyb20uZ2V0TG9jYWxHZW5lcmFsaXplZEludmVyc2VNYXNzKGZyb21Mb2NhbERpcmVjdGlvbik7XHJcbiAgICAgICAgbGV0IHcyID0gdGhpcy50by5nZXRMb2NhbEdlbmVyYWxpemVkSW52ZXJzZU1hc3ModG9Mb2NhbERpcmVjdGlvbik7XHJcblxyXG4gICAgICAgIGxldCBhbHBoYSA9IHRoaXMuY29tcGxpYW5jZSAvIChkZWx0YSAqIGRlbHRhKTtcclxuXHJcbiAgICAgICAgbGV0IGMgPSBkaXN0YW5jZSAtIHRoaXMucmVzdERpc3RhbmNlO1xyXG4gICAgICAgIGxldCBkZWx0YUxhbWJkYSA9ICgtYyArIHRoaXMubGFtYmRhICogYWxwaGEpIC8gKHcxICsgdzIgKyBhbHBoYSk7XHJcblxyXG4gICAgICAgIHRoaXMubGFtYmRhICs9IGRlbHRhTGFtYmRhO1xyXG5cclxuICAgICAgICBsZXQgaW1wdWxzZSA9IHRoaXMuX2ltcHVsc2Uuc2V0KGRpcmVjdGlvbikuc2NhbGUoZGVsdGFMYW1iZGEpO1xyXG5cclxuICAgICAgICB0aGlzLmZyb20uYm9keS5hZGRJbW1lZGlhdGVJbXB1bHNlQXQoLWltcHVsc2UueCwgLWltcHVsc2UueSwgZnJvbUdsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbi54LCBmcm9tR2xvYmFsQXR0YWNobWVudFBvc2l0aW9uLnksIGRlbHRhKTtcclxuICAgICAgICB0aGlzLnRvLmJvZHkuYWRkSW1tZWRpYXRlSW1wdWxzZUF0KGltcHVsc2UueCwgaW1wdWxzZS55LCB0b0dsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbi54LCB0b0dsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbi55LCBkZWx0YSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gSnVzdCBob3VzZSBrZWVwaW5nLCBub3QgbmVlZGVkIGZvciB0aGUgYWN0dWFsIGNhbGN1bGF0aW9uc1xyXG4gICAgICAgIHRoaXMuZm9yY2VBcHBsaWVkXHJcbiAgICAgICAgICAgIC5hZGRYKGltcHVsc2UueCAvIChkZWx0YSAqIGRlbHRhKSlcclxuICAgICAgICAgICAgLmFkZFkoaW1wdWxzZS55IC8gKGRlbHRhICogZGVsdGEpKTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIC8vIFZhcmlhYmxlcyBuZWVkZWQgaW4gdGhlIGFwcGx5RGFtcGluZyBmdW5jdGlvbiB0aGF0IHdlIGRvbid0IHdhbnQgdG8gcmVhbGxvY2F0ZVxyXG4gICAgcHJpdmF0ZSBfZnJvbVZlbG9jaXR5OiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoKTtcclxuICAgIHByaXZhdGUgX3RvVmVsb2NpdHk6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigpO1xyXG4gICAgcHJpdmF0ZSBfZGFtcGVySW1wdWxzZTogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKCk7XHJcblxyXG4gICAgYXBwbHlEYW1waW5nKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5kYW1wZXJDb21wbGlhbmNlIDwgMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgZnJvbUdsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbiA9IHRoaXMuZnJvbS5nZXRHbG9iYWxBdHRhY2htZW50UG9zaXRpb24odGhpcy5fZnJvbUdsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbik7XHJcbiAgICAgICAgbGV0IHRvR2xvYmFsQXR0YWNobWVudFBvc2l0aW9uID0gdGhpcy50by5nZXRHbG9iYWxBdHRhY2htZW50UG9zaXRpb24odGhpcy5fdG9HbG9iYWxBdHRhY2htZW50UG9zaXRpb24pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSBWZWN0b3IyLmRpcmVjdGlvbk91dChmcm9tR2xvYmFsQXR0YWNobWVudFBvc2l0aW9uLCB0b0dsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbiwgdGhpcy5fZGlyZWN0aW9uKTtcclxuICAgICAgICBsZXQgZGlzdGFuY2UgPSBkaXJlY3Rpb24ubGVuZ3RoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGRpc3RhbmNlID09IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgZGlyZWN0aW9uLnNjYWxlKDEgLyBkaXN0YW5jZSk7XHJcblxyXG4gICAgICAgIGxldCBmcm9tVmVsb2NpdHkgPSB0aGlzLmZyb20uYm9keS5nZXRQb2ludFZlbG9jaXR5KGZyb21HbG9iYWxBdHRhY2htZW50UG9zaXRpb24ueCwgZnJvbUdsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbi55LCB0aGlzLl9mcm9tVmVsb2NpdHkpO1xyXG4gICAgICAgIGxldCB0b1ZlbG9jaXR5ID0gdGhpcy50by5ib2R5LmdldFBvaW50VmVsb2NpdHkodG9HbG9iYWxBdHRhY2htZW50UG9zaXRpb24ueCwgdG9HbG9iYWxBdHRhY2htZW50UG9zaXRpb24ueSwgdGhpcy5fdG9WZWxvY2l0eSk7XHJcblxyXG4gICAgICAgIGxldCB2ZWxvY2l0eURpZmZlcmVuY2UgPSBWZWN0b3IyLmRvdCh0b1ZlbG9jaXR5LCBkaXJlY3Rpb24pIC0gVmVjdG9yMi5kb3QoZnJvbVZlbG9jaXR5LCBkaXJlY3Rpb24pO1xyXG5cclxuICAgICAgICBsZXQgZnJvbUxvY2FsRGlyZWN0aW9uID0gdGhpcy5mcm9tLmdldExvY2FsRGlyZWN0aW9uKGRpcmVjdGlvbiwgdGhpcy5fZnJvbUxvY2FsRGlyZWN0aW9uKTtcclxuICAgICAgICBsZXQgdG9Mb2NhbERpcmVjdGlvbiA9IHRoaXMudG8uZ2V0TG9jYWxEaXJlY3Rpb24oZGlyZWN0aW9uLCB0aGlzLl90b0xvY2FsRGlyZWN0aW9uKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgdzEgPSB0aGlzLmZyb20uZ2V0TG9jYWxHZW5lcmFsaXplZEludmVyc2VNYXNzKGZyb21Mb2NhbERpcmVjdGlvbik7XHJcbiAgICAgICAgbGV0IHcyID0gdGhpcy50by5nZXRMb2NhbEdlbmVyYWxpemVkSW52ZXJzZU1hc3ModG9Mb2NhbERpcmVjdGlvbik7XHJcblxyXG4gICAgICAgIGxldCBhbHBoYSA9IHRoaXMuZGFtcGVyQ29tcGxpYW5jZSAvIChkZWx0YSk7XHJcblxyXG4gICAgICAgIGxldCBjID0gdmVsb2NpdHlEaWZmZXJlbmNlO1xyXG4gICAgICAgIGxldCBkZWx0YUxhbWJkYSA9ICgtYyArIHRoaXMuZGFtcGVyTGFtYmRhICogYWxwaGEpIC8gKHcxICsgdzIgKyBhbHBoYSk7XHJcblxyXG4gICAgICAgIHRoaXMuZGFtcGVyTGFtYmRhICs9IGRlbHRhTGFtYmRhO1xyXG5cclxuICAgICAgICBsZXQgaW1wdWxzZSA9IHRoaXMuX2RhbXBlckltcHVsc2Uuc2V0KGRpcmVjdGlvbikuc2NhbGUoZGVsdGFMYW1iZGEgKiBkZWx0YSk7XHJcblxyXG4gICAgICAgIHRoaXMuZnJvbS5ib2R5LmFkZFZlbG9jaXR5SW1wdWxzZUF0KC1pbXB1bHNlLngsIC1pbXB1bHNlLnksIGZyb21HbG9iYWxBdHRhY2htZW50UG9zaXRpb24ueCwgZnJvbUdsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbi55LCBkZWx0YSk7XHJcbiAgICAgICAgdGhpcy50by5ib2R5LmFkZFZlbG9jaXR5SW1wdWxzZUF0KGltcHVsc2UueCwgaW1wdWxzZS55LCB0b0dsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbi54LCB0b0dsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbi55LCBkZWx0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXHJcbiAgICAvLyBIZWxwZXIgZnVuY3Rpb25zXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cclxuICAgIHJlc2V0UmVzdERpc3RhbmNlKCl7XHJcbiAgICAgICAgdGhpcy5yZXN0RGlzdGFuY2UgPSB0aGlzLmNhbGN1bGF0ZURpc3RhbmNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXRlRGlzdGFuY2UoKXtcclxuICAgICAgICBsZXQgZnJvbUdsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbiA9IHRoaXMuZnJvbS5nZXRHbG9iYWxBdHRhY2htZW50UG9zaXRpb24odGhpcy5fZnJvbUdsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbik7XHJcbiAgICAgICAgbGV0IHRvR2xvYmFsQXR0YWNobWVudFBvc2l0aW9uID0gdGhpcy50by5nZXRHbG9iYWxBdHRhY2htZW50UG9zaXRpb24odGhpcy5fdG9HbG9iYWxBdHRhY2htZW50UG9zaXRpb24pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSBWZWN0b3IyLmRpcmVjdGlvbk91dChmcm9tR2xvYmFsQXR0YWNobWVudFBvc2l0aW9uLCB0b0dsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbiwgdGhpcy5fZGlyZWN0aW9uKTtcclxuICAgICAgICBsZXQgZGlzdGFuY2UgPSBkaXJlY3Rpb24ubGVuZ3RoO1xyXG5cclxuICAgICAgICByZXR1cm4gZGlzdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNwcmluZ0NvZWZmaWNpZW50KCl7XHJcbiAgICAgICAgaWYodGhpcy5jb21wbGlhbmNlIDwgMCkgcmV0dXJuIDA7XHJcblxyXG4gICAgICAgIHJldHVybiAxIC8gdGhpcy5jb21wbGlhbmNlO1xyXG4gICAgfVxyXG4gICAgc2V0IHNwcmluZ0NvZWZmaWNpZW50KHY6IG51bWJlcil7XHJcbiAgICAgICAgaWYodiA8PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5jb21wbGlhbmNlID0gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcGxpYW5jZSA9IDEgLyB2O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgZGFtcGVyQ29lZmZpY2llbnQoKXtcclxuICAgICAgICBpZih0aGlzLmRhbXBlckNvbXBsaWFuY2UgPCAwKSByZXR1cm4gMDtcclxuXHJcbiAgICAgICAgcmV0dXJuIDEgLyB0aGlzLmRhbXBlckNvbXBsaWFuY2U7XHJcbiAgICB9XHJcbiAgICBzZXQgZGFtcGVyQ29lZmZpY2llbnQodjogbnVtYmVyKXtcclxuICAgICAgICBpZih2IDw9IDApe1xyXG4gICAgICAgICAgICB0aGlzLmRhbXBlckNvbXBsaWFuY2UgPSAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5kYW1wZXJDb21wbGlhbmNlID0gMSAvIHY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCJsaWIvbWF0aC9WZWN0b3IyXCI7XHJcbmltcG9ydCB7IENvbnN0cmFpbnQyRCB9IGZyb20gXCIuL0NvbnN0cmFpbnQyRFwiO1xyXG5pbXBvcnQgeyBSaWdpZGJvZHkyRCB9IGZyb20gXCIuL1JpZ2lkYm9keTJEXCI7XHJcbmltcG9ydCB7IENvbnN0cmFpbnRBdHRhY2htZW50MkQgfSBmcm9tIFwiLi9Db25zdHJhaW50QXR0YWNobWVudDJEXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGluQ29uc3RyYWludDJEIGV4dGVuZHMgQ29uc3RyYWludDJEIHtcclxuICAgIGNvbXBsaWFuY2U6IG51bWJlcjtcclxuICAgIGRhbXBlckNvbXBsaWFuY2U6IG51bWJlciA9IC0xO1xyXG5cclxuICAgIG9yaWdpbjogVmVjdG9yMjtcclxuXHJcbiAgICBhdHRhY2htZW50OiBDb25zdHJhaW50QXR0YWNobWVudDJEO1xyXG5cclxuICAgIGxhbWJkYTogbnVtYmVyID0gMDtcclxuICAgIGRhbXBlckxhbWJkYTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihhdHRhY2htZW50OiBDb25zdHJhaW50QXR0YWNobWVudDJELCBvcmlnaW4/OiBWZWN0b3IyLCBjb21wbGlhbmNlOiBudW1iZXIgPSAwKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5hdHRhY2htZW50ID0gYXR0YWNobWVudDtcclxuXHJcbiAgICAgICAgaWYob3JpZ2luID09PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICB0aGlzLm9yaWdpbiA9IGF0dGFjaG1lbnQuYm9keS5wb3NpdGlvbi5jbG9uZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLm9yaWdpbiA9IG9yaWdpbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29tcGxpYW5jZSA9IGNvbXBsaWFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdChkZWx0YTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sYW1iZGEgPSAwO1xyXG4gICAgICAgIHRoaXMuZGFtcGVyTGFtYmRhID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9ub3JtYWw6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigpO1xyXG4gICAgcHJpdmF0ZSBfZ2xvYmFsQXR0YWNobWVudFBvc2l0aW9uOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoKTtcclxuICAgIHByaXZhdGUgX2xvY2FsRGlyZWN0aW9uOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoKTtcclxuICAgIHByaXZhdGUgX2ltcHVsc2U6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigpO1xyXG5cclxuICAgIGFwcGx5KGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBsZXQgZ2xvYmFsQXR0YWNobWVudFBvc2l0aW9uID0gdGhpcy5hdHRhY2htZW50LmdldEdsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbih0aGlzLl9nbG9iYWxBdHRhY2htZW50UG9zaXRpb24pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSBWZWN0b3IyLmRpcmVjdGlvbk91dChnbG9iYWxBdHRhY2htZW50UG9zaXRpb24sIHRoaXMub3JpZ2luLCB0aGlzLl9ub3JtYWwpO1xyXG4gICAgICAgIGxldCBkaXN0YW5jZSA9IGRpcmVjdGlvbi5sZW5ndGg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZGlzdGFuY2UgPT0gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBkaXJlY3Rpb24uc2NhbGUoMSAvIGRpc3RhbmNlKTtcclxuXHJcbiAgICAgICAgbGV0IGxvY2FsRGlyZWN0aW9uID0gdGhpcy5hdHRhY2htZW50LmdldExvY2FsRGlyZWN0aW9uKGRpcmVjdGlvbiwgdGhpcy5fbG9jYWxEaXJlY3Rpb24pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB3MSA9IHRoaXMuYXR0YWNobWVudC5nZXRMb2NhbEdlbmVyYWxpemVkSW52ZXJzZU1hc3MobG9jYWxEaXJlY3Rpb24pO1xyXG4gICAgICAgIGxldCB3MiA9IDA7XHJcblxyXG4gICAgICAgIGxldCBhbHBoYSA9IHRoaXMuY29tcGxpYW5jZSAvIChkZWx0YSAqIGRlbHRhKTtcclxuXHJcbiAgICAgICAgbGV0IGMgPSBkaXN0YW5jZTtcclxuICAgICAgICBsZXQgZGVsdGFMYW1iZGEgPSAoLWMgKyB0aGlzLmxhbWJkYSAqIGFscGhhKSAvICh3MSArIHcyICsgYWxwaGEpO1xyXG5cclxuICAgICAgICB0aGlzLmxhbWJkYSArPSBkZWx0YUxhbWJkYTtcclxuXHJcbiAgICAgICAgbGV0IGltcHVsc2UgPSB0aGlzLl9pbXB1bHNlLnNldChkaXJlY3Rpb24pLnNjYWxlKGRlbHRhTGFtYmRhKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmF0dGFjaG1lbnQuYm9keS5hZGRJbW1lZGlhdGVJbXB1bHNlQXQoLWltcHVsc2UueCwgLWltcHVsc2UueSwgZ2xvYmFsQXR0YWNobWVudFBvc2l0aW9uLngsIGdsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbi55LCBkZWx0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdmVsb2NpdHk6IFZlY3RvcjIgPSBuZXcgIFZlY3RvcjIoKTtcclxuICAgIHByaXZhdGUgX2RhbXBlckltcHVsc2U6IFZlY3RvcjIgPSBuZXcgIFZlY3RvcjIoKTtcclxuXHJcbiAgICBhcHBseURhbXBpbmcoZGVsdGE6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmKHRoaXMuZGFtcGVyQ29tcGxpYW5jZSA8IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IGdsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbiA9IHRoaXMuYXR0YWNobWVudC5nZXRHbG9iYWxBdHRhY2htZW50UG9zaXRpb24odGhpcy5fZ2xvYmFsQXR0YWNobWVudFBvc2l0aW9uKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgdmVsb2NpdHkgPSB0aGlzLmF0dGFjaG1lbnQuYm9keS5nZXRQb2ludFZlbG9jaXR5KGdsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbi54LCBnbG9iYWxBdHRhY2htZW50UG9zaXRpb24ueSwgdGhpcy5fdmVsb2NpdHkpO1xyXG4gICAgICAgIGxldCBhbW91bnQgPSB2ZWxvY2l0eS5sZW5ndGg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoYW1vdW50ID09IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbiA9IHRoaXMuX25vcm1hbC5zZXQodmVsb2NpdHkpLnNjYWxlKDEgLyBhbW91bnQpO1xyXG5cclxuICAgICAgICBsZXQgbG9jYWxEaXJlY3Rpb24gPSB0aGlzLmF0dGFjaG1lbnQuZ2V0TG9jYWxEaXJlY3Rpb24oZGlyZWN0aW9uLCB0aGlzLl9sb2NhbERpcmVjdGlvbik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHcxID0gdGhpcy5hdHRhY2htZW50LmdldExvY2FsR2VuZXJhbGl6ZWRJbnZlcnNlTWFzcyhsb2NhbERpcmVjdGlvbik7XHJcbiAgICAgICAgbGV0IHcyID0gMDtcclxuXHJcbiAgICAgICAgbGV0IGFscGhhID0gdGhpcy5kYW1wZXJDb21wbGlhbmNlIC8gKGRlbHRhKTtcclxuXHJcbiAgICAgICAgbGV0IGMgPSAtYW1vdW50O1xyXG4gICAgICAgIGxldCBkZWx0YUxhbWJkYSA9ICgtYyArIHRoaXMuZGFtcGVyTGFtYmRhICogYWxwaGEpIC8gKHcxICsgdzIgKyBhbHBoYSk7XHJcblxyXG4gICAgICAgIHRoaXMuZGFtcGVyTGFtYmRhICs9IGRlbHRhTGFtYmRhO1xyXG5cclxuICAgICAgICBsZXQgaW1wdWxzZSA9IHRoaXMuX2RhbXBlckltcHVsc2Uuc2V0KGRpcmVjdGlvbikuc2NhbGUoZGVsdGFMYW1iZGEgKiBkZWx0YSk7XHJcblxyXG4gICAgICAgIHRoaXMuYXR0YWNobWVudC5ib2R5LmFkZFZlbG9jaXR5SW1wdWxzZUF0KC1pbXB1bHNlLngsIC1pbXB1bHNlLnksIGdsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbi54LCBnbG9iYWxBdHRhY2htZW50UG9zaXRpb24ueSwgZGVsdGEpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgTWF0aEhlbHBlciB9IGZyb20gXCJsaWIvbWF0aC9NYXRoSGVscGVyXCI7XHJcbmltcG9ydCB7IE1hdHJpeDIgfSBmcm9tIFwibGliL21hdGgvTWF0cml4MlwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcImxpYi9tYXRoL1ZlY3RvcjJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSaWdpZGJvZHkyRCB7XHJcbiAgICBpbnZlcnNlTWFzczogbnVtYmVyO1xyXG4gICAgaW52ZXJzZUluZXJ0aWE6IG51bWJlcjtcclxuXHJcbiAgICBwb3NpdGlvbjogVmVjdG9yMjtcclxuICAgIFxyXG4gICAgdmVsb2NpdHk6IFZlY3RvcjI7XHJcbiAgICBhbmd1bGFyVmVsb2NpdHk6IG51bWJlcjtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBfcHJldmlvdXNQb3NpdGlvbjogVmVjdG9yMjtcclxuICAgIHByaXZhdGUgX3ByZXZpb3VzUm90YXRpb246IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIF9iYXNpc0RpcnR5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9iYXNpc0ludmVyc2VEaXJ0eTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfYmFzaXM6IE1hdHJpeDI7XHJcbiAgICBwcml2YXRlIF9iYXNpc0ludmVyc2U6IE1hdHJpeDI7XHJcblxyXG4gICAgcHJpdmF0ZSBfcm90YXRpb246IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBuZXcgVmVjdG9yMigpO1xyXG5cclxuICAgICAgICB0aGlzLl9yb3RhdGlvbiA9IDA7XHJcbiAgICAgICAgdGhpcy5fcHJldmlvdXNQb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uY2xvbmUoKTtcclxuICAgICAgICB0aGlzLl9wcmV2aW91c1JvdGF0aW9uID0gdGhpcy5fcm90YXRpb247XHJcblxyXG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgVmVjdG9yMigpO1xyXG4gICAgICAgIHRoaXMuYW5ndWxhclZlbG9jaXR5ID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5pbnZlcnNlTWFzcyA9IDE7XHJcbiAgICAgICAgdGhpcy5pbnZlcnNlSW5lcnRpYSA9IDE7XHJcblxyXG4gICAgICAgIHRoaXMuX2Jhc2lzID0gTWF0cml4Mi5pZGVudGl0eSgpO1xyXG4gICAgICAgIHRoaXMuX2Jhc2lzSW52ZXJzZSA9IE1hdHJpeDIuaWRlbnRpdHkoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbWFzcygpe1xyXG4gICAgICAgIHJldHVybiAxIC8gdGhpcy5pbnZlcnNlTWFzcztcclxuICAgIH1cclxuICAgIHNldCBtYXNzKHY6IG51bWJlcil7XHJcbiAgICAgICAgdGhpcy5pbnZlcnNlTWFzcyA9IDEgLyB2O1xyXG4gICAgfVxyXG4gICAgZ2V0IGluZXJ0aWEoKSB7XHJcbiAgICAgICAgcmV0dXJuIDEgLyB0aGlzLmludmVyc2VJbmVydGlhO1xyXG4gICAgfVxyXG4gICAgc2V0IGluZXJ0aWEodjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5pbnZlcnNlSW5lcnRpYSA9IDEgLyB2O1xyXG4gICAgfVxyXG4gICAgZ2V0IGJhc2lzKCk6IE1hdHJpeDJ7XHJcbiAgICAgICAgaWYodGhpcy5fYmFzaXNEaXJ0eSl7XHJcbiAgICAgICAgICAgIHRoaXMuc3luY0Jhc2lzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9iYXNpcztcclxuICAgIH1cclxuICAgIGdldCBpbnZlcnNlQmFzaXMoKTogTWF0cml4MntcclxuICAgICAgICBpZih0aGlzLl9iYXNpc0ludmVyc2VEaXJ0eSl7XHJcbiAgICAgICAgICAgIHRoaXMuc3luY0Jhc2lzSW52ZXJzZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fYmFzaXNJbnZlcnNlO1xyXG4gICAgfVxyXG4gICAgZ2V0IHJvdGF0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JvdGF0aW9uO1xyXG4gICAgfVxyXG4gICAgc2V0IHJvdGF0aW9uKHJvdGF0aW9uOiBudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuX3JvdGF0aW9uID0gcm90YXRpb247XHJcblxyXG4gICAgICAgIHRoaXMubWFya0Jhc2lzRGlydHkoKTtcclxuICAgIH1cclxuXHJcbiAgICBhcHBseU1vdGlvbihkZWx0YTogbnVtYmVyKXtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy52ZWxvY2l0eS54ICogZGVsdGE7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IHRoaXMudmVsb2NpdHkueSAqIGRlbHRhO1xyXG5cclxuICAgICAgICB0aGlzLnJvdGF0aW9uICs9IHRoaXMuYW5ndWxhclZlbG9jaXR5ICogZGVsdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcmVjYWxjdWxhdGVWZWxvY2l0eShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5LnggPSBWZWN0b3IyLmR4KHRoaXMuX3ByZXZpb3VzUG9zaXRpb24sIHRoaXMucG9zaXRpb24pIC8gZGVsdGE7XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gVmVjdG9yMi5keSh0aGlzLl9wcmV2aW91c1Bvc2l0aW9uLCB0aGlzLnBvc2l0aW9uKSAvIGRlbHRhO1xyXG5cclxuICAgICAgICB0aGlzLl9yb3RhdGlvbiA9IE1hdGhIZWxwZXIubm9ybWFsaXplQW5nbGUodGhpcy5fcm90YXRpb24pO1xyXG4gICAgICAgIHRoaXMuX3ByZXZpb3VzUm90YXRpb24gPSBNYXRoSGVscGVyLm5vcm1hbGl6ZUFuZ2xlKHRoaXMuX3ByZXZpb3VzUm90YXRpb24pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBhbmdsZURpZmYgPSBNYXRoSGVscGVyLnNob3J0ZXN0QW5nbGUodGhpcy5fcHJldmlvdXNSb3RhdGlvbiwgdGhpcy5fcm90YXRpb24pO1xyXG5cclxuICAgICAgICB0aGlzLmFuZ3VsYXJWZWxvY2l0eSA9IGFuZ2xlRGlmZiAvIGRlbHRhO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuX3ByZXZpb3VzUG9zaXRpb24uc2V0KHRoaXMucG9zaXRpb24pO1xyXG4gICAgICAgIHRoaXMuX3ByZXZpb3VzUm90YXRpb24gPSB0aGlzLl9yb3RhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICByb3RhdGUoYW5nbGU6IG51bWJlcik6IFJpZ2lkYm9keTJEe1xyXG4gICAgICAgIHRoaXMucm90YXRpb24gKz0gYW5nbGU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICB0cmFuc2xhdGUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBSaWdpZGJvZHkyRHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLmFkZFgoeCkuYWRkWSh5KTtcclxuICAgICAgICB0aGlzLl9wcmV2aW91c1Bvc2l0aW9uLmFkZFgoeCkuYWRkWSh5KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICB0cmFuc2xhdGVUbyh4OiBudW1iZXIsIHk6IG51bWJlcik6IFJpZ2lkYm9keTJEe1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24uYXBwbHkoeCwgeSk7XHJcbiAgICAgICAgdGhpcy5fcHJldmlvdXNQb3NpdGlvbi5hcHBseSh4LCB5KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkSW1tZWRpYXRlRm9yY2UoZng6IG51bWJlciwgZnk6IG51bWJlciwgZGVsdGE6IG51bWJlcil7XHJcbiAgICAgICAgLy8gRiA9IG0gKiBhXHJcbiAgICAgICAgLy8gYSA9IEYgLyBtXHJcblxyXG4gICAgICAgIGxldCBheCA9IGZ4ICogdGhpcy5pbnZlcnNlTWFzcztcclxuICAgICAgICBsZXQgYXkgPSBmeSAqIHRoaXMuaW52ZXJzZU1hc3M7XHJcblxyXG4gICAgICAgIHRoaXMudmVsb2NpdHkueCArPSBheCAqIGRlbHRhO1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkueSArPSBheSAqIGRlbHRhO1xyXG5cclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gYXggKiBkZWx0YSAqIGRlbHRhO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSArPSBheSAqIGRlbHRhICogZGVsdGE7XHJcbiAgICB9XHJcbiAgICBhZGRJbW1lZGlhdGVJbXB1bHNlKGl4OiBudW1iZXIsIGl5OiBudW1iZXIsIGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICAgIGxldCBkeCA9IGl4ICogdGhpcy5pbnZlcnNlTWFzcztcclxuICAgICAgICBsZXQgZHkgPSBpeSAqIHRoaXMuaW52ZXJzZU1hc3M7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IGR4O1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSArPSBkeTtcclxuXHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eS54ICs9IGR4IC8gZGVsdGE7XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eS55ICs9IGR5IC8gZGVsdGE7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFkZEltbWVkaWF0ZUltcHVsc2VBdChpeDogbnVtYmVyLCBpeTogbnVtYmVyLCBweDogbnVtYmVyLCBweTogbnVtYmVyLCBkZWx0YTogbnVtYmVyKXtcclxuICAgICAgICBsZXQgZHggPSBpeCAqIHRoaXMuaW52ZXJzZU1hc3M7XHJcbiAgICAgICAgbGV0IGR5ID0gaXkgKiB0aGlzLmludmVyc2VNYXNzO1xyXG5cclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gZHg7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IGR5O1xyXG5cclxuICAgICAgICB0aGlzLnZlbG9jaXR5LnggKz0gZHggLyBkZWx0YTtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5LnkgKz0gZHkgLyBkZWx0YTtcclxuXHJcbiAgICAgICAgbGV0IGFuZ3VsYXJJbXB1bHNlID0gVmVjdG9yMi5mQ3Jvc3MoaXgsIGl5LCBweCAtIHRoaXMucG9zaXRpb24ueCwgcHkgLSB0aGlzLnBvc2l0aW9uLnkpICogdGhpcy5pbnZlcnNlSW5lcnRpYTtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coTWF0aC5yb3VuZChhbmd1bGFySW1wdWxzZSAqIDEwKSAvIDEwKTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbiAtPSBhbmd1bGFySW1wdWxzZTtcclxuICAgICAgICB0aGlzLmFuZ3VsYXJWZWxvY2l0eSAtPSBhbmd1bGFySW1wdWxzZSAvIGRlbHRhO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhZGRWZWxvY2l0eUltcHVsc2VBdChpeDogbnVtYmVyLCBpeTogbnVtYmVyLCBweDogbnVtYmVyLCBweTogbnVtYmVyLCBkZWx0YTogbnVtYmVyKXtcclxuICAgICAgICBsZXQgZHggPSBpeCAqIHRoaXMuaW52ZXJzZU1hc3M7XHJcbiAgICAgICAgbGV0IGR5ID0gaXkgKiB0aGlzLmludmVyc2VNYXNzO1xyXG5cclxuICAgICAgICB0aGlzLnZlbG9jaXR5LnggKz0gZHggLyBkZWx0YTtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5LnkgKz0gZHkgLyBkZWx0YTtcclxuXHJcbiAgICAgICAgbGV0IGFuZ3VsYXJJbXB1bHNlID0gVmVjdG9yMi5mQ3Jvc3MoaXgsIGl5LCBweCAtIHRoaXMucG9zaXRpb24ueCwgcHkgLSB0aGlzLnBvc2l0aW9uLnkpICogdGhpcy5pbnZlcnNlSW5lcnRpYTtcclxuXHJcbiAgICAgICAgdGhpcy5hbmd1bGFyVmVsb2NpdHkgLT0gYW5ndWxhckltcHVsc2UgLyBkZWx0YTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQb2ludFZlbG9jaXR5KHg6IG51bWJlciwgeTogbnVtYmVyLCBvdXRwdXQ6IFZlY3RvcjIpOiBWZWN0b3Iye1xyXG4gICAgICAgIG91dHB1dC54ID0gdGhpcy52ZWxvY2l0eS54O1xyXG4gICAgICAgIG91dHB1dC55ID0gdGhpcy52ZWxvY2l0eS55O1xyXG5cclxuICAgICAgICBsZXQgZHggPSB4IC0gdGhpcy5wb3NpdGlvbi54O1xyXG4gICAgICAgIGxldCBkeSA9IHkgLSB0aGlzLnBvc2l0aW9uLnk7XHJcblxyXG4gICAgICAgIG91dHB1dC54ICs9IC1keSAqIHRoaXMuYW5ndWxhclZlbG9jaXR5O1xyXG4gICAgICAgIG91dHB1dC55ICs9IGR4ICogdGhpcy5hbmd1bGFyVmVsb2NpdHk7XHJcblxyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtYXJrQmFzaXNEaXJ0eSgpe1xyXG4gICAgICAgIHRoaXMuX2Jhc2lzRGlydHkgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2Jhc2lzSW52ZXJzZURpcnR5ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN5bmNCYXNpcygpe1xyXG4gICAgICAgIHRoaXMuX2Jhc2lzLnNldEFzUm90YXRpb24odGhpcy5yb3RhdGlvbik7XHJcbiAgICAgICAgdGhpcy5fYmFzaXNEaXJ0eSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3luY0Jhc2lzSW52ZXJzZSgpe1xyXG4gICAgICAgIC8vIHRoaXMuX2Jhc2lzSW52ZXJzZS5zZXRBcyh0aGlzLmJhc2lzKS5pbnZlcnNlKCk7XHJcbiAgICAgICAgdGhpcy5fYmFzaXNJbnZlcnNlLnNldEFzUm90YXRpb24oLXRoaXMucm90YXRpb24pO1xyXG4gICAgICAgIHRoaXMuX2Jhc2lzSW52ZXJzZURpcnR5ID0gZmFsc2U7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBHcmFwaGljczJEIH0gZnJvbSBcImxpYi9ncmFwaGljcy9HcmFwaGljczJEXCI7XHJcbmltcG9ydCB7IFJpZ2lkYm9keTJEIH0gZnJvbSBcIi4uL1JpZ2lkYm9keTJEXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwibGliL21hdGgvVmVjdG9yMlwiO1xyXG5pbXBvcnQgeyBEaXN0YW5jZUNvbnN0cmFpbnQyRCB9IGZyb20gXCIuLi9EaXN0YW5jZUNvbnN0cmFpbnQyRFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERpc3RhbmNlQ29uc3RyYWludEdyYXBoaWMyRCB7XHJcbiAgICBjb25zdHJhaW50OiBEaXN0YW5jZUNvbnN0cmFpbnQyRDtcclxuXHJcbiAgICBwYXRoOiBQYXRoMkQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uc3RyYWludDogRGlzdGFuY2VDb25zdHJhaW50MkQsIHBhdGg6IFBhdGgyRCl7XHJcbiAgICAgICAgdGhpcy5jb25zdHJhaW50ID0gY29uc3RyYWludDtcclxuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3Bvc2l0aW9uRnJvbTogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKCk7XHJcbiAgICBwcml2YXRlIF9wb3NpdGlvblRvOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoKTtcclxuXHJcbiAgICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljczJEKXtcclxuICAgICAgICBncmFwaGljcy5wdXNoKCk7XHJcblxyXG4gICAgICAgIGxldCBmcm9tID0gdGhpcy5jb25zdHJhaW50LmZyb20uZ2V0R2xvYmFsQXR0YWNobWVudFBvc2l0aW9uKHRoaXMuX3Bvc2l0aW9uRnJvbSk7XHJcbiAgICAgICAgbGV0IHRvID0gdGhpcy5jb25zdHJhaW50LnRvLmdldEdsb2JhbEF0dGFjaG1lbnRQb3NpdGlvbih0aGlzLl9wb3NpdGlvblRvKTtcclxuXHJcbiAgICAgICAgZ3JhcGhpY3MudHJhbnNsYXRlKGZyb20ueCwgZnJvbS55KTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgZHggPSBWZWN0b3IyLmR4KGZyb20sIHRvKTtcclxuICAgICAgICBsZXQgZHkgPSBWZWN0b3IyLmR5KGZyb20sIHRvKTtcclxuXHJcbiAgICAgICAgbGV0IGRpc3RhbmNlID0gVmVjdG9yMi5mTGVuZ3RoKGR4LCBkeSk7XHJcblxyXG4gICAgICAgIGxldCBhbmdsZSA9IFZlY3RvcjIuZkFuZ2xlKGR4LCBkeSk7XHJcblxyXG4gICAgICAgIGdyYXBoaWNzLnJvdGF0ZShhbmdsZSk7XHJcblxyXG4gICAgICAgIGdyYXBoaWNzLnNjYWxlKGRpc3RhbmNlIC8gdGhpcy5jb25zdHJhaW50LnJlc3REaXN0YW5jZSwgMSk7XHJcblxyXG4gICAgICAgIGdyYXBoaWNzLmRyYXdQYXRoKHRoaXMucGF0aCwgZmFsc2UpO1xyXG4gICAgICAgIGdyYXBoaWNzLmRyYXdQYXRoKHRoaXMucGF0aCwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGdyYXBoaWNzLnBvcCgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgR3JhcGhpY3MyRCB9IGZyb20gXCJsaWIvZ3JhcGhpY3MvR3JhcGhpY3MyRFwiO1xyXG5pbXBvcnQgeyBSaWdpZGJvZHkyRCB9IGZyb20gXCIuLi9SaWdpZGJvZHkyRFwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcImxpYi9tYXRoL1ZlY3RvcjJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSaWdpZGJvZHlHcmFwaGljMkQge1xyXG4gICAgYm9keTogUmlnaWRib2R5MkQ7XHJcbiAgICBhbGlnbldpdGg/OiBSaWdpZGJvZHkyRDsgLy8gSGFja3kgc29sdXRpb24gYnV0IHdoYXRldmVyIDopXHJcblxyXG4gICAgcGF0aDogUGF0aDJEO1xyXG5cclxuICAgIHJvdGF0aW9uYWxPZmZzZXQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYm9keTogUmlnaWRib2R5MkQsIHBhdGg6IFBhdGgyRCl7XHJcbiAgICAgICAgdGhpcy5ib2R5ID0gYm9keTtcclxuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFJvdGF0aW9uYWxPZmZzZXQob2Zmc2V0OiBudW1iZXIpe1xyXG4gICAgICAgIHRoaXMucm90YXRpb25hbE9mZnNldCA9IG9mZnNldDtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljczJEKXtcclxuICAgICAgICBncmFwaGljcy5wdXNoKCk7XHJcblxyXG4gICAgICAgIGdyYXBoaWNzLnRyYW5zbGF0ZSh0aGlzLmJvZHkucG9zaXRpb24ueCwgdGhpcy5ib2R5LnBvc2l0aW9uLnkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuYWxpZ25XaXRoKXtcclxuICAgICAgICAgICAgbGV0IGR4ID0gVmVjdG9yMi5keCh0aGlzLmJvZHkucG9zaXRpb24sIHRoaXMuYWxpZ25XaXRoLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgbGV0IGR5ID0gVmVjdG9yMi5keSh0aGlzLmJvZHkucG9zaXRpb24sIHRoaXMuYWxpZ25XaXRoLnBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBhbmdsZSA9IFZlY3RvcjIuZkFuZ2xlKGR4LCBkeSk7XHJcblxyXG4gICAgICAgICAgICBncmFwaGljcy5yb3RhdGUoYW5nbGUgKyB0aGlzLnJvdGF0aW9uYWxPZmZzZXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBncmFwaGljcy5yb3RhdGUodGhpcy5ib2R5LnJvdGF0aW9uICsgdGhpcy5yb3RhdGlvbmFsT2Zmc2V0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdyYXBoaWNzLmRyYXdQYXRoKHRoaXMucGF0aCwgZmFsc2UpO1xyXG4gICAgICAgIGdyYXBoaWNzLmRyYXdQYXRoKHRoaXMucGF0aCwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGdyYXBoaWNzLnBvcCgpO1xyXG4gICAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gTG9hZCB0aGUgamF2YXNjcmlwdCBtYWluXHJcbmltcG9ydCBcIi4vanMvbWFpblwiO1xyXG5pbXBvcnQgXCIuL3RzL1wiO1xyXG5cclxuLy8gTG9hZCB0aGUgU0FTUyBtYWluXHJcbmltcG9ydCBcIi4vc2Nzcy9hcHAuc2Nzc1wiOyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9