"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --bgc-page: lavender;\r\n  --card-shadow: .25rem .25rem .25rem rgba(0,0,0,.1),\r\n    inset .25rem .25rem .25rem rgba(255,255,255,.5);\r\n  --icon-size: 25px;\r\n  --txt-col-1: #000;\r\n  --txt-col-2: #444;\r\n  --txt-col-3: #666;\r\n}\r\n\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n  background-color: var(--bgc-page);\r\n}\r\n\r\nol, ul { padding: 0; margin: 0; list-style-type: none; }\r\n\r\nh1, h2, p {margin: 0;}\r\nh1 {font-size: 3rem;}\r\n\r\n#main {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  padding: .5rem;\r\n  overflow: hidden;\r\n  overflow-y: auto;\r\n}\r\n\r\n.project-item {\r\n  box-sizing: border-box;\r\n  padding: 1rem;\r\n  margin: 1rem;\r\n  box-shadow: var(--card-shadow);\r\n}\r\n\r\n/* cards */\r\n\r\n.card {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  box-shadow: var(--card-shadow);\r\n  padding: .5rem;\r\n  margin: .25rem;\r\n  display: grid;\r\n  grid-template-columns: auto 1fr auto;\r\n  grid-template-rows: repeat(3, auto);\r\n  grid-template-areas:\r\n    \" drag  title edit  \"\r\n    \" ..... descr descr \"\r\n    \" ..... tasks tasks \";\r\n  gap: 1rem;\r\n}\r\n.card .title { font-size: 2rem; color: var(--txt-col-1);}\r\n.card .description { grid-area: descr; font-size: 1.5rem; color: var(--txt-col-2);}\r\n.card .checklist {\r\n  grid-area: tasks;\r\n  display: grid;\r\n  gap: .25rem;\r\n}\r\n\r\n.card input[type=\"checkbox\"] {\r\n  position: relative;\r\n  width: var(--icon-size);\r\n  height: var(--icon-size);\r\n  appearance: none;\r\n}\r\n.card input[type=\"checkbox\"]::before {\r\n  position: absolute;\r\n  content: \"\";\r\n  inset: 0;\r\n  /* background-color: rgba(0,0,0,.03); */\r\n  box-shadow: .1rem .1rem .1rem white,\r\n    inset .1rem .1rem .25rem rgba(0,0,0,.1);\r\n  border-radius: .25rem;\r\n}\r\n.card input[type=\"checkbox\"]::after {\r\n  --anim-duration: 200ms;\r\n  position: absolute;\r\n  content: \"\";\r\n  inset: -5px;\r\n  background-color: red;\r\n  clip-path: polygon(0 75%, 15% 60%, 15% 61%, 16% 62%, 18% 65%, 4% 78%, 1% 75%);\r\n  animation: checkmark-backwards var(--anim-duration) ease-out forwards;\r\n}\r\n.card input[type=\"checkbox\"]:checked::after {\r\n  animation: checkmark-forwards var(--anim-duration) ease-in forwards;\r\n}\r\n@keyframes checkmark-forwards {\r\n  0% {opacity: 0;}\r\n  1% {opacity: 1; clip-path: polygon(0 75%, 15% 60%, 15% 61%, 16% 62%, 18% 65%, 4% 78%, 1% 75%);}\r\n  30% {clip-path: polygon(0 75%, 15% 60%, 21% 66%, 26% 70%, 31% 76%, 9% 86%, 4% 80%);}\r\n  50% {clip-path: polygon(0 75%, 15% 60%, 35% 80%, 43% 81%, 49% 88%, 50% 100%, 20% 100%);}\r\n  100% {clip-path: polygon(0 75%, 15% 60%, 35% 80%, 85% 0, 100% 10%, 50% 100%, 20% 100%);}\r\n} @keyframes checkmark-backwards {\r\n  0% {clip-path: polygon(0 75%, 15% 60%, 35% 80%, 85% 0, 100% 10%, 50% 100%, 20% 100%);}\r\n  50% {clip-path: polygon(0 75%, 15% 60%, 35% 80%, 43% 81%, 49% 88%, 50% 100%, 20% 100%);}\r\n  70% {clip-path: polygon(0 75%, 15% 60%, 21% 66%, 26% 70%, 31% 76%, 9% 86%, 4% 80%);}\r\n  99% {opacity: 1; clip-path: polygon(0 75%, 15% 60%, 15% 61%, 16% 62%, 18% 65%, 4% 78%, 1% 75%);}\r\n  100% {opacity: 0;}\r\n}\r\n.card input[type=\"checkbox\"]:checked + label {\r\n  text-decoration: line-through;\r\n  color: var(--txt-col-3);\r\n}\r\n.card label { font-size: 1.25rem; color: var(--txt-col-2);}\r\n\r\n/* card icons */\r\n.card-icon { width: var(--icon-size); }\r\n.card ul li {\r\n  display: grid;\r\n  grid-template-columns: 2rem 1fr;\r\n  gap: .5rem;\r\n}\r\n.card li:hover {\r\n  transition: background-color 150ms;\r\n  background-color: rgba(255,255,255,.5);\r\n}\r\n.edit-buttons {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: .5rem;\r\n}\r\n.delete-icon {\r\n  position: relative;\r\n  width: var(--icon-size);\r\n}.icon-trash,\r\n.icon-trash-lid {\r\n  position: absolute;\r\n  transition: rotate 500ms;\r\n}\r\n.icon-trash { transform-origin: 100% 0%;}\r\n.icon-trash-lid { transform-origin: 250% 0%;}\r\n\r\n.delete-icon:hover .icon-trash { rotate: -10deg;}\r\n.delete-icon:hover .icon-trash-lid { rotate: 10deg; }\r\n\r\n\r\n\r\n/*for testing*/\r\n/* * {\r\n  outline: 1px solid gray;\r\n} */", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB;mDACiD;EACjD,iBAAiB;EACjB,iBAAiB;EACjB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,SAAS;EACT,iCAAiC;AACnC;;AAEA,SAAS,UAAU,EAAE,SAAS,EAAE,qBAAqB,EAAE;;AAEvD,WAAW,SAAS,CAAC;AACrB,IAAI,eAAe,CAAC;;AAEpB;EACE,sBAAsB;EACtB,SAAS;EACT,YAAY;EACZ,aAAa;EACb,cAAc;EACd,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,YAAY;EACZ,8BAA8B;AAChC;;AAEA,UAAU;;AAEV;EACE,sBAAsB;EACtB,WAAW;EACX,8BAA8B;EAC9B,cAAc;EACd,cAAc;EACd,aAAa;EACb,oCAAoC;EACpC,mCAAmC;EACnC;;;yBAGuB;EACvB,SAAS;AACX;AACA,eAAe,eAAe,EAAE,uBAAuB,CAAC;AACxD,qBAAqB,gBAAgB,EAAE,iBAAiB,EAAE,uBAAuB,CAAC;AAClF;EACE,gBAAgB;EAChB,aAAa;EACb,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,wBAAwB;EACxB,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,QAAQ;EACR,uCAAuC;EACvC;2CACyC;EACzC,qBAAqB;AACvB;AACA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,qBAAqB;EACrB,6EAA6E;EAC7E,qEAAqE;AACvE;AACA;EACE,mEAAmE;AACrE;AACA;EACE,IAAI,UAAU,CAAC;EACf,IAAI,UAAU,EAAE,6EAA6E,CAAC;EAC9F,KAAK,6EAA6E,CAAC;EACnF,KAAK,iFAAiF,CAAC;EACvF,MAAM,gFAAgF,CAAC;AACzF,EAAE;EACA,IAAI,gFAAgF,CAAC;EACrF,KAAK,iFAAiF,CAAC;EACvF,KAAK,6EAA6E,CAAC;EACnF,KAAK,UAAU,EAAE,6EAA6E,CAAC;EAC/F,MAAM,UAAU,CAAC;AACnB;AACA;EACE,6BAA6B;EAC7B,uBAAuB;AACzB;AACA,cAAc,kBAAkB,EAAE,uBAAuB,CAAC;;AAE1D,eAAe;AACf,aAAa,uBAAuB,EAAE;AACtC;EACE,aAAa;EACb,+BAA+B;EAC/B,UAAU;AACZ;AACA;EACE,kCAAkC;EAClC,sCAAsC;AACxC;AACA;EACE,aAAa;EACb,qCAAqC;EACrC,UAAU;AACZ;AACA;EACE,kBAAkB;EAClB,uBAAuB;AACzB,CAAC;;EAEC,kBAAkB;EAClB,wBAAwB;AAC1B;AACA,cAAc,yBAAyB,CAAC;AACxC,kBAAkB,yBAAyB,CAAC;;AAE5C,iCAAiC,cAAc,CAAC;AAChD,qCAAqC,aAAa,EAAE;;;;AAIpD,cAAc;AACd;;GAEG","sourcesContent":[":root {\r\n  --bgc-page: lavender;\r\n  --card-shadow: .25rem .25rem .25rem rgba(0,0,0,.1),\r\n    inset .25rem .25rem .25rem rgba(255,255,255,.5);\r\n  --icon-size: 25px;\r\n  --txt-col-1: #000;\r\n  --txt-col-2: #444;\r\n  --txt-col-3: #666;\r\n}\r\n\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n  background-color: var(--bgc-page);\r\n}\r\n\r\nol, ul { padding: 0; margin: 0; list-style-type: none; }\r\n\r\nh1, h2, p {margin: 0;}\r\nh1 {font-size: 3rem;}\r\n\r\n#main {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  padding: .5rem;\r\n  overflow: hidden;\r\n  overflow-y: auto;\r\n}\r\n\r\n.project-item {\r\n  box-sizing: border-box;\r\n  padding: 1rem;\r\n  margin: 1rem;\r\n  box-shadow: var(--card-shadow);\r\n}\r\n\r\n/* cards */\r\n\r\n.card {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  box-shadow: var(--card-shadow);\r\n  padding: .5rem;\r\n  margin: .25rem;\r\n  display: grid;\r\n  grid-template-columns: auto 1fr auto;\r\n  grid-template-rows: repeat(3, auto);\r\n  grid-template-areas:\r\n    \" drag  title edit  \"\r\n    \" ..... descr descr \"\r\n    \" ..... tasks tasks \";\r\n  gap: 1rem;\r\n}\r\n.card .title { font-size: 2rem; color: var(--txt-col-1);}\r\n.card .description { grid-area: descr; font-size: 1.5rem; color: var(--txt-col-2);}\r\n.card .checklist {\r\n  grid-area: tasks;\r\n  display: grid;\r\n  gap: .25rem;\r\n}\r\n\r\n.card input[type=\"checkbox\"] {\r\n  position: relative;\r\n  width: var(--icon-size);\r\n  height: var(--icon-size);\r\n  appearance: none;\r\n}\r\n.card input[type=\"checkbox\"]::before {\r\n  position: absolute;\r\n  content: \"\";\r\n  inset: 0;\r\n  /* background-color: rgba(0,0,0,.03); */\r\n  box-shadow: .1rem .1rem .1rem white,\r\n    inset .1rem .1rem .25rem rgba(0,0,0,.1);\r\n  border-radius: .25rem;\r\n}\r\n.card input[type=\"checkbox\"]::after {\r\n  --anim-duration: 200ms;\r\n  position: absolute;\r\n  content: \"\";\r\n  inset: -5px;\r\n  background-color: red;\r\n  clip-path: polygon(0 75%, 15% 60%, 15% 61%, 16% 62%, 18% 65%, 4% 78%, 1% 75%);\r\n  animation: checkmark-backwards var(--anim-duration) ease-out forwards;\r\n}\r\n.card input[type=\"checkbox\"]:checked::after {\r\n  animation: checkmark-forwards var(--anim-duration) ease-in forwards;\r\n}\r\n@keyframes checkmark-forwards {\r\n  0% {opacity: 0;}\r\n  1% {opacity: 1; clip-path: polygon(0 75%, 15% 60%, 15% 61%, 16% 62%, 18% 65%, 4% 78%, 1% 75%);}\r\n  30% {clip-path: polygon(0 75%, 15% 60%, 21% 66%, 26% 70%, 31% 76%, 9% 86%, 4% 80%);}\r\n  50% {clip-path: polygon(0 75%, 15% 60%, 35% 80%, 43% 81%, 49% 88%, 50% 100%, 20% 100%);}\r\n  100% {clip-path: polygon(0 75%, 15% 60%, 35% 80%, 85% 0, 100% 10%, 50% 100%, 20% 100%);}\r\n} @keyframes checkmark-backwards {\r\n  0% {clip-path: polygon(0 75%, 15% 60%, 35% 80%, 85% 0, 100% 10%, 50% 100%, 20% 100%);}\r\n  50% {clip-path: polygon(0 75%, 15% 60%, 35% 80%, 43% 81%, 49% 88%, 50% 100%, 20% 100%);}\r\n  70% {clip-path: polygon(0 75%, 15% 60%, 21% 66%, 26% 70%, 31% 76%, 9% 86%, 4% 80%);}\r\n  99% {opacity: 1; clip-path: polygon(0 75%, 15% 60%, 15% 61%, 16% 62%, 18% 65%, 4% 78%, 1% 75%);}\r\n  100% {opacity: 0;}\r\n}\r\n.card input[type=\"checkbox\"]:checked + label {\r\n  text-decoration: line-through;\r\n  color: var(--txt-col-3);\r\n}\r\n.card label { font-size: 1.25rem; color: var(--txt-col-2);}\r\n\r\n/* card icons */\r\n.card-icon { width: var(--icon-size); }\r\n.card ul li {\r\n  display: grid;\r\n  grid-template-columns: 2rem 1fr;\r\n  gap: .5rem;\r\n}\r\n.card li:hover {\r\n  transition: background-color 150ms;\r\n  background-color: rgba(255,255,255,.5);\r\n}\r\n.edit-buttons {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: .5rem;\r\n}\r\n.delete-icon {\r\n  position: relative;\r\n  width: var(--icon-size);\r\n}.icon-trash,\r\n.icon-trash-lid {\r\n  position: absolute;\r\n  transition: rotate 500ms;\r\n}\r\n.icon-trash { transform-origin: 100% 0%;}\r\n.icon-trash-lid { transform-origin: 250% 0%;}\r\n\r\n.delete-icon:hover .icon-trash { rotate: -10deg;}\r\n.delete-icon:hover .icon-trash-lid { rotate: 10deg; }\r\n\r\n\r\n\r\n/*for testing*/\r\n/* * {\r\n  outline: 1px solid gray;\r\n} */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ui.js */ "./src/modules/ui.js");
/* harmony import */ var _modules_classes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes.js */ "./src/modules/classes.js");




const projects = [
  {
    title: "routine",
    todos: [
      new _modules_classes_js__WEBPACK_IMPORTED_MODULE_2__.Todo("exercise", "It's leg day!", "2022-11-23T17:42", null, [
        { task: "run 3km", isDone: true },
        { task: "bicycle", isDone: false },
        { task: "squats", isDone: false },
      ], "low"),

      new _modules_classes_js__WEBPACK_IMPORTED_MODULE_2__.Todo("coding", null, "2022-11-23T17:42", null, [
        { task: "check css-tricks", isDone: true },
        { task: "continue TOP practice", isDone: true },
      ], "high"),
    ],
  },
  {
    title: "test",
    todos: [
      new _modules_classes_js__WEBPACK_IMPORTED_MODULE_2__.Todo("test1", "test1 descr", "2022-11-23T17:42","2023-11-23T17:42", [
        { task: "test1 task1", isDone: true },
        { task: "test1 task2", isDone: false },
        { task: "test1 task3", isDone: true },
      ], "low"),

      new _modules_classes_js__WEBPACK_IMPORTED_MODULE_2__.Todo("test2", "test2 descr", "2022-11-23T17:42", "2023-11-23T17:42", [
        { task: "test2 task1", isDone: true },
        { task: "test2 task2", isDone: true },
        { task: "test3 task3", isDone: true },
        { task: "test4 task4", isDone: true },
        { task: "test5 task5", isDone: true },
      ], "middle"),
    ],
  },
];


_modules_ui_js__WEBPACK_IMPORTED_MODULE_1__.ui.placeCards(projects);

/***/ }),

/***/ "./src/modules/classes.js":
/*!********************************!*\
  !*** ./src/modules/classes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Todo": () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
  constructor(title, description, dateCreation, dateDue, //type="datetime-local"
    checks, priority){
    this.title = title;
    this.description = description;
    this.dateCreation = dateCreation;
    this.dateDue = dateDue;
    this.checks = checks;
    this.priority = priority;
  };
};

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ui": () => (/* binding */ ui)
/* harmony export */ });
/* harmony import */ var _media_images_icons_checkmark_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../media/images/icons/checkmark.svg */ "./src/media/images/icons/checkmark.svg");
/* harmony import */ var _media_images_icons_drag_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../media/images/icons/drag.svg */ "./src/media/images/icons/drag.svg");
/* harmony import */ var _media_images_icons_edit_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../media/images/icons/edit.svg */ "./src/media/images/icons/edit.svg");
/* harmony import */ var _media_images_icons_trash_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../media/images/icons/trash.svg */ "./src/media/images/icons/trash.svg");
/* harmony import */ var _media_images_icons_trash_lid_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../media/images/icons/trash-lid.svg */ "./src/media/images/icons/trash-lid.svg");
/* harmony import */ var _media_images_icons_fav_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../media/images/icons/fav.svg */ "./src/media/images/icons/fav.svg");
/* harmony import */ var _media_images_icons_fav_active_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../media/images/icons/fav-active.svg */ "./src/media/images/icons/fav-active.svg");









const ui = (() => {
  const body = document.querySelector("body");
  const main = document.querySelector("#main");

  function placeCard(todo){
    const card = document.createElement("div");
    card.classList.add("card");

    const drag = document.createElement("img");
    drag.classList.add("card-icon", "icon-drag");
    drag.src = _media_images_icons_drag_svg__WEBPACK_IMPORTED_MODULE_1__;

    const editBtns = document.createElement("div");
    editBtns.classList.add("edit-buttons");
    const edit = document.createElement("img");
    edit.classList.add("card-icon", "icon-edit");
    edit.src = _media_images_icons_edit_svg__WEBPACK_IMPORTED_MODULE_2__;
    const fav = document.createElement("img");
    fav.classList.add("card-icon", "icon-fav");
    fav.src = _media_images_icons_fav_svg__WEBPACK_IMPORTED_MODULE_5__;
    const deleteIcon = document.createElement("div");
    deleteIcon.classList.add("delete-icon");
    const trash = document.createElement("img");
    trash.classList.add("card-icon", "icon-trash");
    trash.src = _media_images_icons_trash_svg__WEBPACK_IMPORTED_MODULE_3__;
    const trashLid = document.createElement("img");
    trashLid.classList.add("card-icon", "icon-trash-lid");
    trashLid.src = _media_images_icons_trash_lid_svg__WEBPACK_IMPORTED_MODULE_4__;
    
    deleteIcon.append(trash, trashLid);
    editBtns.append(edit, fav, deleteIcon);
    
    const title = document.createElement("h2");
    title.classList.add("title");
    title.innerText = todo.title;

    const description = document.createElement("p");
    description.classList.add("description");
    description.innerText = todo.description;

    const checks = document.createElement("ul");
    checks.classList.add("checklist");

    todo.checks.forEach((check,i) => {
      const task = document.createElement("li");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = `${todo.title}-${i}`;
      checkbox.checked = check.isDone;

      const label = document.createElement("label");
      label.htmlFor = checkbox.id;
      label.innerText = check.task;

      task.append(checkbox, label);

      checks.appendChild(task);

    });

    card.append(drag, title, editBtns, description, checks);

    return card;
  }

  function placeCards(projects){
    

    projects.forEach((project, i) => {
      const projectItem = document.createElement("div");
      projectItem.dataset.idx = i;
      projectItem.classList.add("project-item");

      const h1 = document.createElement("h1");
      h1.innerText = project.title;
      projectItem.appendChild(h1);

      project.todos.forEach(todo => {
        projectItem.appendChild(placeCard(todo));
      });

      main.appendChild(projectItem);
    });
  };
    
  return { placeCards };
})();

/***/ }),

/***/ "./src/media/images/icons/checkmark.svg":
/*!**********************************************!*\
  !*** ./src/media/images/icons/checkmark.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1240affeb70a73dcaf33.svg";

/***/ }),

/***/ "./src/media/images/icons/drag.svg":
/*!*****************************************!*\
  !*** ./src/media/images/icons/drag.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "39266999887fcba36276.svg";

/***/ }),

/***/ "./src/media/images/icons/edit.svg":
/*!*****************************************!*\
  !*** ./src/media/images/icons/edit.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f03b9f358dbbd4da601b.svg";

/***/ }),

/***/ "./src/media/images/icons/fav-active.svg":
/*!***********************************************!*\
  !*** ./src/media/images/icons/fav-active.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d692444f2ac9e99e9fce.svg";

/***/ }),

/***/ "./src/media/images/icons/fav.svg":
/*!****************************************!*\
  !*** ./src/media/images/icons/fav.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9478457f9f4a1af52ae8.svg";

/***/ }),

/***/ "./src/media/images/icons/trash-lid.svg":
/*!**********************************************!*\
  !*** ./src/media/images/icons/trash-lid.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9a4b9ec3d6fcf14983e0.svg";

/***/ }),

/***/ "./src/media/images/icons/trash.svg":
/*!******************************************!*\
  !*** ./src/media/images/icons/trash.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ff7b9ff91190fb690926.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy91aS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gIC0tYmdjLXBhZ2U6IGxhdmVuZGVyO1xcclxcbiAgLS1jYXJkLXNoYWRvdzogLjI1cmVtIC4yNXJlbSAuMjVyZW0gcmdiYSgwLDAsMCwuMSksXFxyXFxuICAgIGluc2V0IC4yNXJlbSAuMjVyZW0gLjI1cmVtIHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xcclxcbiAgLS1pY29uLXNpemU6IDI1cHg7XFxyXFxuICAtLXR4dC1jb2wtMTogIzAwMDtcXHJcXG4gIC0tdHh0LWNvbC0yOiAjNDQ0O1xcclxcbiAgLS10eHQtY29sLTM6ICM2NjY7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnYy1wYWdlKTtcXHJcXG59XFxyXFxuXFxyXFxub2wsIHVsIHsgcGFkZGluZzogMDsgbWFyZ2luOiAwOyBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IH1cXHJcXG5cXHJcXG5oMSwgaDIsIHAge21hcmdpbjogMDt9XFxyXFxuaDEge2ZvbnQtc2l6ZTogM3JlbTt9XFxyXFxuXFxyXFxuI21haW4ge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1pdGVtIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgbWFyZ2luOiAxcmVtO1xcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1zaGFkb3cpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjYXJkcyAqL1xcclxcblxcclxcbi5jYXJkIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93KTtcXHJcXG4gIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgbWFyZ2luOiAuMjVyZW07XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgYXV0byk7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwiIGRyYWcgIHRpdGxlIGVkaXQgIFxcXCJcXHJcXG4gICAgXFxcIiAuLi4uLiBkZXNjciBkZXNjciBcXFwiXFxyXFxuICAgIFxcXCIgLi4uLi4gdGFza3MgdGFza3MgXFxcIjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuLmNhcmQgLnRpdGxlIHsgZm9udC1zaXplOiAycmVtOyBjb2xvcjogdmFyKC0tdHh0LWNvbC0xKTt9XFxyXFxuLmNhcmQgLmRlc2NyaXB0aW9uIHsgZ3JpZC1hcmVhOiBkZXNjcjsgZm9udC1zaXplOiAxLjVyZW07IGNvbG9yOiB2YXIoLS10eHQtY29sLTIpO31cXHJcXG4uY2FyZCAuY2hlY2tsaXN0IHtcXHJcXG4gIGdyaWQtYXJlYTogdGFza3M7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ2FwOiAuMjVyZW07XFxyXFxufVxcclxcblxcclxcbi5jYXJkIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IHZhcigtLWljb24tc2l6ZSk7XFxyXFxuICBoZWlnaHQ6IHZhcigtLWljb24tc2l6ZSk7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG4uY2FyZCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjpiZWZvcmUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBpbnNldDogMDtcXHJcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjAzKTsgKi9cXHJcXG4gIGJveC1zaGFkb3c6IC4xcmVtIC4xcmVtIC4xcmVtIHdoaXRlLFxcclxcbiAgICBpbnNldCAuMXJlbSAuMXJlbSAuMjVyZW0gcmdiYSgwLDAsMCwuMSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XFxyXFxufVxcclxcbi5jYXJkIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmFmdGVyIHtcXHJcXG4gIC0tYW5pbS1kdXJhdGlvbjogMjAwbXM7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIGluc2V0OiAtNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgNzUlLCAxNSUgNjAlLCAxNSUgNjElLCAxNiUgNjIlLCAxOCUgNjUlLCA0JSA3OCUsIDElIDc1JSk7XFxyXFxuICBhbmltYXRpb246IGNoZWNrbWFyay1iYWNrd2FyZHMgdmFyKC0tYW5pbS1kdXJhdGlvbikgZWFzZS1vdXQgZm9yd2FyZHM7XFxyXFxufVxcclxcbi5jYXJkIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDo6YWZ0ZXIge1xcclxcbiAgYW5pbWF0aW9uOiBjaGVja21hcmstZm9yd2FyZHMgdmFyKC0tYW5pbS1kdXJhdGlvbikgZWFzZS1pbiBmb3J3YXJkcztcXHJcXG59XFxyXFxuQGtleWZyYW1lcyBjaGVja21hcmstZm9yd2FyZHMge1xcclxcbiAgMCUge29wYWNpdHk6IDA7fVxcclxcbiAgMSUge29wYWNpdHk6IDE7IGNsaXAtcGF0aDogcG9seWdvbigwIDc1JSwgMTUlIDYwJSwgMTUlIDYxJSwgMTYlIDYyJSwgMTglIDY1JSwgNCUgNzglLCAxJSA3NSUpO31cXHJcXG4gIDMwJSB7Y2xpcC1wYXRoOiBwb2x5Z29uKDAgNzUlLCAxNSUgNjAlLCAyMSUgNjYlLCAyNiUgNzAlLCAzMSUgNzYlLCA5JSA4NiUsIDQlIDgwJSk7fVxcclxcbiAgNTAlIHtjbGlwLXBhdGg6IHBvbHlnb24oMCA3NSUsIDE1JSA2MCUsIDM1JSA4MCUsIDQzJSA4MSUsIDQ5JSA4OCUsIDUwJSAxMDAlLCAyMCUgMTAwJSk7fVxcclxcbiAgMTAwJSB7Y2xpcC1wYXRoOiBwb2x5Z29uKDAgNzUlLCAxNSUgNjAlLCAzNSUgODAlLCA4NSUgMCwgMTAwJSAxMCUsIDUwJSAxMDAlLCAyMCUgMTAwJSk7fVxcclxcbn0gQGtleWZyYW1lcyBjaGVja21hcmstYmFja3dhcmRzIHtcXHJcXG4gIDAlIHtjbGlwLXBhdGg6IHBvbHlnb24oMCA3NSUsIDE1JSA2MCUsIDM1JSA4MCUsIDg1JSAwLCAxMDAlIDEwJSwgNTAlIDEwMCUsIDIwJSAxMDAlKTt9XFxyXFxuICA1MCUge2NsaXAtcGF0aDogcG9seWdvbigwIDc1JSwgMTUlIDYwJSwgMzUlIDgwJSwgNDMlIDgxJSwgNDklIDg4JSwgNTAlIDEwMCUsIDIwJSAxMDAlKTt9XFxyXFxuICA3MCUge2NsaXAtcGF0aDogcG9seWdvbigwIDc1JSwgMTUlIDYwJSwgMjElIDY2JSwgMjYlIDcwJSwgMzElIDc2JSwgOSUgODYlLCA0JSA4MCUpO31cXHJcXG4gIDk5JSB7b3BhY2l0eTogMTsgY2xpcC1wYXRoOiBwb2x5Z29uKDAgNzUlLCAxNSUgNjAlLCAxNSUgNjElLCAxNiUgNjIlLCAxOCUgNjUlLCA0JSA3OCUsIDElIDc1JSk7fVxcclxcbiAgMTAwJSB7b3BhY2l0eTogMDt9XFxyXFxufVxcclxcbi5jYXJkIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2wtMyk7XFxyXFxufVxcclxcbi5jYXJkIGxhYmVsIHsgZm9udC1zaXplOiAxLjI1cmVtOyBjb2xvcjogdmFyKC0tdHh0LWNvbC0yKTt9XFxyXFxuXFxyXFxuLyogY2FyZCBpY29ucyAqL1xcclxcbi5jYXJkLWljb24geyB3aWR0aDogdmFyKC0taWNvbi1zaXplKTsgfVxcclxcbi5jYXJkIHVsIGxpIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJyZW0gMWZyO1xcclxcbiAgZ2FwOiAuNXJlbTtcXHJcXG59XFxyXFxuLmNhcmQgbGk6aG92ZXIge1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxNTBtcztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xcclxcbn1cXHJcXG4uZWRpdC1idXR0b25zIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgZ2FwOiAuNXJlbTtcXHJcXG59XFxyXFxuLmRlbGV0ZS1pY29uIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiB2YXIoLS1pY29uLXNpemUpO1xcclxcbn0uaWNvbi10cmFzaCxcXHJcXG4uaWNvbi10cmFzaC1saWQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdHJhbnNpdGlvbjogcm90YXRlIDUwMG1zO1xcclxcbn1cXHJcXG4uaWNvbi10cmFzaCB7IHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMCU7fVxcclxcbi5pY29uLXRyYXNoLWxpZCB7IHRyYW5zZm9ybS1vcmlnaW46IDI1MCUgMCU7fVxcclxcblxcclxcbi5kZWxldGUtaWNvbjpob3ZlciAuaWNvbi10cmFzaCB7IHJvdGF0ZTogLTEwZGVnO31cXHJcXG4uZGVsZXRlLWljb246aG92ZXIgLmljb24tdHJhc2gtbGlkIHsgcm90YXRlOiAxMGRlZzsgfVxcclxcblxcclxcblxcclxcblxcclxcbi8qZm9yIHRlc3RpbmcqL1xcclxcbi8qICoge1xcclxcbiAgb3V0bGluZTogMXB4IHNvbGlkIGdyYXk7XFxyXFxufSAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxvQkFBb0I7RUFDcEI7bURBQ2lEO0VBQ2pELGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsaUNBQWlDO0FBQ25DOztBQUVBLFNBQVMsVUFBVSxFQUFFLFNBQVMsRUFBRSxxQkFBcUIsRUFBRTs7QUFFdkQsV0FBVyxTQUFTLENBQUM7QUFDckIsSUFBSSxlQUFlLENBQUM7O0FBRXBCO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixZQUFZO0VBQ1osOEJBQThCO0FBQ2hDOztBQUVBLFVBQVU7O0FBRVY7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLDhCQUE4QjtFQUM5QixjQUFjO0VBQ2QsY0FBYztFQUNkLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsbUNBQW1DO0VBQ25DOzs7eUJBR3VCO0VBQ3ZCLFNBQVM7QUFDWDtBQUNBLGVBQWUsZUFBZSxFQUFFLHVCQUF1QixDQUFDO0FBQ3hELHFCQUFxQixnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSx1QkFBdUIsQ0FBQztBQUNsRjtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFFBQVE7RUFDUix1Q0FBdUM7RUFDdkM7MkNBQ3lDO0VBQ3pDLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLHFCQUFxQjtFQUNyQiw2RUFBNkU7RUFDN0UscUVBQXFFO0FBQ3ZFO0FBQ0E7RUFDRSxtRUFBbUU7QUFDckU7QUFDQTtFQUNFLElBQUksVUFBVSxDQUFDO0VBQ2YsSUFBSSxVQUFVLEVBQUUsNkVBQTZFLENBQUM7RUFDOUYsS0FBSyw2RUFBNkUsQ0FBQztFQUNuRixLQUFLLGlGQUFpRixDQUFDO0VBQ3ZGLE1BQU0sZ0ZBQWdGLENBQUM7QUFDekYsRUFBRTtFQUNBLElBQUksZ0ZBQWdGLENBQUM7RUFDckYsS0FBSyxpRkFBaUYsQ0FBQztFQUN2RixLQUFLLDZFQUE2RSxDQUFDO0VBQ25GLEtBQUssVUFBVSxFQUFFLDZFQUE2RSxDQUFDO0VBQy9GLE1BQU0sVUFBVSxDQUFDO0FBQ25CO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsdUJBQXVCO0FBQ3pCO0FBQ0EsY0FBYyxrQkFBa0IsRUFBRSx1QkFBdUIsQ0FBQzs7QUFFMUQsZUFBZTtBQUNmLGFBQWEsdUJBQXVCLEVBQUU7QUFDdEM7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLFVBQVU7QUFDWjtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLHNDQUFzQztBQUN4QztBQUNBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxVQUFVO0FBQ1o7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekIsQ0FBQzs7RUFFQyxrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCO0FBQ0EsY0FBYyx5QkFBeUIsQ0FBQztBQUN4QyxrQkFBa0IseUJBQXlCLENBQUM7O0FBRTVDLGlDQUFpQyxjQUFjLENBQUM7QUFDaEQscUNBQXFDLGFBQWEsRUFBRTs7OztBQUlwRCxjQUFjO0FBQ2Q7O0dBRUdcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS1iZ2MtcGFnZTogbGF2ZW5kZXI7XFxyXFxuICAtLWNhcmQtc2hhZG93OiAuMjVyZW0gLjI1cmVtIC4yNXJlbSByZ2JhKDAsMCwwLC4xKSxcXHJcXG4gICAgaW5zZXQgLjI1cmVtIC4yNXJlbSAuMjVyZW0gcmdiYSgyNTUsMjU1LDI1NSwuNSk7XFxyXFxuICAtLWljb24tc2l6ZTogMjVweDtcXHJcXG4gIC0tdHh0LWNvbC0xOiAjMDAwO1xcclxcbiAgLS10eHQtY29sLTI6ICM0NDQ7XFxyXFxuICAtLXR4dC1jb2wtMzogIzY2NjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdjLXBhZ2UpO1xcclxcbn1cXHJcXG5cXHJcXG5vbCwgdWwgeyBwYWRkaW5nOiAwOyBtYXJnaW46IDA7IGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgfVxcclxcblxcclxcbmgxLCBoMiwgcCB7bWFyZ2luOiAwO31cXHJcXG5oMSB7Zm9udC1zaXplOiAzcmVtO31cXHJcXG5cXHJcXG4jbWFpbiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWl0ZW0ge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBtYXJnaW46IDFyZW07XFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLXNoYWRvdyk7XFxyXFxufVxcclxcblxcclxcbi8qIGNhcmRzICovXFxyXFxuXFxyXFxuLmNhcmQge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1zaGFkb3cpO1xcclxcbiAgcGFkZGluZzogLjVyZW07XFxyXFxuICBtYXJnaW46IC4yNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBhdXRvKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCIgZHJhZyAgdGl0bGUgZWRpdCAgXFxcIlxcclxcbiAgICBcXFwiIC4uLi4uIGRlc2NyIGRlc2NyIFxcXCJcXHJcXG4gICAgXFxcIiAuLi4uLiB0YXNrcyB0YXNrcyBcXFwiO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG4uY2FyZCAudGl0bGUgeyBmb250LXNpemU6IDJyZW07IGNvbG9yOiB2YXIoLS10eHQtY29sLTEpO31cXHJcXG4uY2FyZCAuZGVzY3JpcHRpb24geyBncmlkLWFyZWE6IGRlc2NyOyBmb250LXNpemU6IDEuNXJlbTsgY29sb3I6IHZhcigtLXR4dC1jb2wtMik7fVxcclxcbi5jYXJkIC5jaGVja2xpc3Qge1xcclxcbiAgZ3JpZC1hcmVhOiB0YXNrcztcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBnYXA6IC4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogdmFyKC0taWNvbi1zaXplKTtcXHJcXG4gIGhlaWdodDogdmFyKC0taWNvbi1zaXplKTtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcbi5jYXJkIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmJlZm9yZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIGluc2V0OiAwO1xcclxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMDMpOyAqL1xcclxcbiAgYm94LXNoYWRvdzogLjFyZW0gLjFyZW0gLjFyZW0gd2hpdGUsXFxyXFxuICAgIGluc2V0IC4xcmVtIC4xcmVtIC4yNXJlbSByZ2JhKDAsMCwwLC4xKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcXHJcXG59XFxyXFxuLmNhcmQgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YWZ0ZXIge1xcclxcbiAgLS1hbmltLWR1cmF0aW9uOiAyMDBtcztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgaW5zZXQ6IC01cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICBjbGlwLXBhdGg6IHBvbHlnb24oMCA3NSUsIDE1JSA2MCUsIDE1JSA2MSUsIDE2JSA2MiUsIDE4JSA2NSUsIDQlIDc4JSwgMSUgNzUlKTtcXHJcXG4gIGFuaW1hdGlvbjogY2hlY2ttYXJrLWJhY2t3YXJkcyB2YXIoLS1hbmltLWR1cmF0aW9uKSBlYXNlLW91dCBmb3J3YXJkcztcXHJcXG59XFxyXFxuLmNhcmQgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkOjphZnRlciB7XFxyXFxuICBhbmltYXRpb246IGNoZWNrbWFyay1mb3J3YXJkcyB2YXIoLS1hbmltLWR1cmF0aW9uKSBlYXNlLWluIGZvcndhcmRzO1xcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGNoZWNrbWFyay1mb3J3YXJkcyB7XFxyXFxuICAwJSB7b3BhY2l0eTogMDt9XFxyXFxuICAxJSB7b3BhY2l0eTogMTsgY2xpcC1wYXRoOiBwb2x5Z29uKDAgNzUlLCAxNSUgNjAlLCAxNSUgNjElLCAxNiUgNjIlLCAxOCUgNjUlLCA0JSA3OCUsIDElIDc1JSk7fVxcclxcbiAgMzAlIHtjbGlwLXBhdGg6IHBvbHlnb24oMCA3NSUsIDE1JSA2MCUsIDIxJSA2NiUsIDI2JSA3MCUsIDMxJSA3NiUsIDklIDg2JSwgNCUgODAlKTt9XFxyXFxuICA1MCUge2NsaXAtcGF0aDogcG9seWdvbigwIDc1JSwgMTUlIDYwJSwgMzUlIDgwJSwgNDMlIDgxJSwgNDklIDg4JSwgNTAlIDEwMCUsIDIwJSAxMDAlKTt9XFxyXFxuICAxMDAlIHtjbGlwLXBhdGg6IHBvbHlnb24oMCA3NSUsIDE1JSA2MCUsIDM1JSA4MCUsIDg1JSAwLCAxMDAlIDEwJSwgNTAlIDEwMCUsIDIwJSAxMDAlKTt9XFxyXFxufSBAa2V5ZnJhbWVzIGNoZWNrbWFyay1iYWNrd2FyZHMge1xcclxcbiAgMCUge2NsaXAtcGF0aDogcG9seWdvbigwIDc1JSwgMTUlIDYwJSwgMzUlIDgwJSwgODUlIDAsIDEwMCUgMTAlLCA1MCUgMTAwJSwgMjAlIDEwMCUpO31cXHJcXG4gIDUwJSB7Y2xpcC1wYXRoOiBwb2x5Z29uKDAgNzUlLCAxNSUgNjAlLCAzNSUgODAlLCA0MyUgODElLCA0OSUgODglLCA1MCUgMTAwJSwgMjAlIDEwMCUpO31cXHJcXG4gIDcwJSB7Y2xpcC1wYXRoOiBwb2x5Z29uKDAgNzUlLCAxNSUgNjAlLCAyMSUgNjYlLCAyNiUgNzAlLCAzMSUgNzYlLCA5JSA4NiUsIDQlIDgwJSk7fVxcclxcbiAgOTklIHtvcGFjaXR5OiAxOyBjbGlwLXBhdGg6IHBvbHlnb24oMCA3NSUsIDE1JSA2MCUsIDE1JSA2MSUsIDE2JSA2MiUsIDE4JSA2NSUsIDQlIDc4JSwgMSUgNzUlKTt9XFxyXFxuICAxMDAlIHtvcGFjaXR5OiAwO31cXHJcXG59XFxyXFxuLmNhcmQgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWwge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbC0zKTtcXHJcXG59XFxyXFxuLmNhcmQgbGFiZWwgeyBmb250LXNpemU6IDEuMjVyZW07IGNvbG9yOiB2YXIoLS10eHQtY29sLTIpO31cXHJcXG5cXHJcXG4vKiBjYXJkIGljb25zICovXFxyXFxuLmNhcmQtaWNvbiB7IHdpZHRoOiB2YXIoLS1pY29uLXNpemUpOyB9XFxyXFxuLmNhcmQgdWwgbGkge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMnJlbSAxZnI7XFxyXFxuICBnYXA6IC41cmVtO1xcclxcbn1cXHJcXG4uY2FyZCBsaTpob3ZlciB7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDE1MG1zO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNSk7XFxyXFxufVxcclxcbi5lZGl0LWJ1dHRvbnMge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICBnYXA6IC41cmVtO1xcclxcbn1cXHJcXG4uZGVsZXRlLWljb24ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IHZhcigtLWljb24tc2l6ZSk7XFxyXFxufS5pY29uLXRyYXNoLFxcclxcbi5pY29uLXRyYXNoLWxpZCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0cmFuc2l0aW9uOiByb3RhdGUgNTAwbXM7XFxyXFxufVxcclxcbi5pY29uLXRyYXNoIHsgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwJTt9XFxyXFxuLmljb24tdHJhc2gtbGlkIHsgdHJhbnNmb3JtLW9yaWdpbjogMjUwJSAwJTt9XFxyXFxuXFxyXFxuLmRlbGV0ZS1pY29uOmhvdmVyIC5pY29uLXRyYXNoIHsgcm90YXRlOiAtMTBkZWc7fVxcclxcbi5kZWxldGUtaWNvbjpob3ZlciAuaWNvbi10cmFzaC1saWQgeyByb3RhdGU6IDEwZGVnOyB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLypmb3IgdGVzdGluZyovXFxyXFxuLyogKiB7XFxyXFxuICBvdXRsaW5lOiAxcHggc29saWQgZ3JheTtcXHJcXG59ICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHsgdWkgfSBmcm9tIFwiLi9tb2R1bGVzL3VpLmpzXCI7XHJcbmltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi9tb2R1bGVzL2NsYXNzZXMuanNcIjtcclxuXHJcbmNvbnN0IHByb2plY3RzID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcInJvdXRpbmVcIixcclxuICAgIHRvZG9zOiBbXHJcbiAgICAgIG5ldyBUb2RvKFwiZXhlcmNpc2VcIiwgXCJJdCdzIGxlZyBkYXkhXCIsIFwiMjAyMi0xMS0yM1QxNzo0MlwiLCBudWxsLCBbXHJcbiAgICAgICAgeyB0YXNrOiBcInJ1biAza21cIiwgaXNEb25lOiB0cnVlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcImJpY3ljbGVcIiwgaXNEb25lOiBmYWxzZSB9LFxyXG4gICAgICAgIHsgdGFzazogXCJzcXVhdHNcIiwgaXNEb25lOiBmYWxzZSB9LFxyXG4gICAgICBdLCBcImxvd1wiKSxcclxuXHJcbiAgICAgIG5ldyBUb2RvKFwiY29kaW5nXCIsIG51bGwsIFwiMjAyMi0xMS0yM1QxNzo0MlwiLCBudWxsLCBbXHJcbiAgICAgICAgeyB0YXNrOiBcImNoZWNrIGNzcy10cmlja3NcIiwgaXNEb25lOiB0cnVlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcImNvbnRpbnVlIFRPUCBwcmFjdGljZVwiLCBpc0RvbmU6IHRydWUgfSxcclxuICAgICAgXSwgXCJoaWdoXCIpLFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcInRlc3RcIixcclxuICAgIHRvZG9zOiBbXHJcbiAgICAgIG5ldyBUb2RvKFwidGVzdDFcIiwgXCJ0ZXN0MSBkZXNjclwiLCBcIjIwMjItMTEtMjNUMTc6NDJcIixcIjIwMjMtMTEtMjNUMTc6NDJcIiwgW1xyXG4gICAgICAgIHsgdGFzazogXCJ0ZXN0MSB0YXNrMVwiLCBpc0RvbmU6IHRydWUgfSxcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDEgdGFzazJcIiwgaXNEb25lOiBmYWxzZSB9LFxyXG4gICAgICAgIHsgdGFzazogXCJ0ZXN0MSB0YXNrM1wiLCBpc0RvbmU6IHRydWUgfSxcclxuICAgICAgXSwgXCJsb3dcIiksXHJcblxyXG4gICAgICBuZXcgVG9kbyhcInRlc3QyXCIsIFwidGVzdDIgZGVzY3JcIiwgXCIyMDIyLTExLTIzVDE3OjQyXCIsIFwiMjAyMy0xMS0yM1QxNzo0MlwiLCBbXHJcbiAgICAgICAgeyB0YXNrOiBcInRlc3QyIHRhc2sxXCIsIGlzRG9uZTogdHJ1ZSB9LFxyXG4gICAgICAgIHsgdGFzazogXCJ0ZXN0MiB0YXNrMlwiLCBpc0RvbmU6IHRydWUgfSxcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDMgdGFzazNcIiwgaXNEb25lOiB0cnVlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcInRlc3Q0IHRhc2s0XCIsIGlzRG9uZTogdHJ1ZSB9LFxyXG4gICAgICAgIHsgdGFzazogXCJ0ZXN0NSB0YXNrNVwiLCBpc0RvbmU6IHRydWUgfSxcclxuICAgICAgXSwgXCJtaWRkbGVcIiksXHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcblxyXG5cclxudWkucGxhY2VDYXJkcyhwcm9qZWN0cyk7IiwiZXhwb3J0IGNsYXNzIFRvZG8ge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZUNyZWF0aW9uLCBkYXRlRHVlLCAvL3R5cGU9XCJkYXRldGltZS1sb2NhbFwiXHJcbiAgICBjaGVja3MsIHByaW9yaXR5KXtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuZGF0ZUNyZWF0aW9uID0gZGF0ZUNyZWF0aW9uO1xyXG4gICAgdGhpcy5kYXRlRHVlID0gZGF0ZUR1ZTtcclxuICAgIHRoaXMuY2hlY2tzID0gY2hlY2tzO1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gIH07XHJcbn07IiwiaW1wb3J0IGljb25DaGVja21hcmsgZnJvbSBcIi4uL21lZGlhL2ltYWdlcy9pY29ucy9jaGVja21hcmsuc3ZnXCI7XHJcbmltcG9ydCBpY29uRHJhZyBmcm9tIFwiLi4vbWVkaWEvaW1hZ2VzL2ljb25zL2RyYWcuc3ZnXCI7XHJcbmltcG9ydCBpY29uRWRpdCBmcm9tIFwiLi4vbWVkaWEvaW1hZ2VzL2ljb25zL2VkaXQuc3ZnXCI7XHJcbmltcG9ydCBpY29uVHJhc2ggZnJvbSBcIi4uL21lZGlhL2ltYWdlcy9pY29ucy90cmFzaC5zdmdcIjtcclxuaW1wb3J0IGljb25UcmFzaExpZCBmcm9tIFwiLi4vbWVkaWEvaW1hZ2VzL2ljb25zL3RyYXNoLWxpZC5zdmdcIjtcclxuaW1wb3J0IGljb25GYXYgZnJvbSBcIi4uL21lZGlhL2ltYWdlcy9pY29ucy9mYXYuc3ZnXCI7XHJcbmltcG9ydCBpY29uRmF2QWN0aXZlIGZyb20gXCIuLi9tZWRpYS9pbWFnZXMvaWNvbnMvZmF2LWFjdGl2ZS5zdmdcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgdWkgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xyXG5cclxuICBmdW5jdGlvbiBwbGFjZUNhcmQodG9kbyl7XHJcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XHJcblxyXG4gICAgY29uc3QgZHJhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBkcmFnLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWljb25cIiwgXCJpY29uLWRyYWdcIik7XHJcbiAgICBkcmFnLnNyYyA9IGljb25EcmFnO1xyXG5cclxuICAgIGNvbnN0IGVkaXRCdG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGVkaXRCdG5zLmNsYXNzTGlzdC5hZGQoXCJlZGl0LWJ1dHRvbnNcIik7XHJcbiAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGVkaXQuY2xhc3NMaXN0LmFkZChcImNhcmQtaWNvblwiLCBcImljb24tZWRpdFwiKTtcclxuICAgIGVkaXQuc3JjID0gaWNvbkVkaXQ7XHJcbiAgICBjb25zdCBmYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgZmF2LmNsYXNzTGlzdC5hZGQoXCJjYXJkLWljb25cIiwgXCJpY29uLWZhdlwiKTtcclxuICAgIGZhdi5zcmMgPSBpY29uRmF2O1xyXG4gICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtaWNvblwiKTtcclxuICAgIGNvbnN0IHRyYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIHRyYXNoLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWljb25cIiwgXCJpY29uLXRyYXNoXCIpO1xyXG4gICAgdHJhc2guc3JjID0gaWNvblRyYXNoO1xyXG4gICAgY29uc3QgdHJhc2hMaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgdHJhc2hMaWQuY2xhc3NMaXN0LmFkZChcImNhcmQtaWNvblwiLCBcImljb24tdHJhc2gtbGlkXCIpO1xyXG4gICAgdHJhc2hMaWQuc3JjID0gaWNvblRyYXNoTGlkO1xyXG4gICAgXHJcbiAgICBkZWxldGVJY29uLmFwcGVuZCh0cmFzaCwgdHJhc2hMaWQpO1xyXG4gICAgZWRpdEJ0bnMuYXBwZW5kKGVkaXQsIGZhdiwgZGVsZXRlSWNvbik7XHJcbiAgICBcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gdG9kby50aXRsZTtcclxuXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xyXG4gICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gdG9kby5kZXNjcmlwdGlvbjtcclxuXHJcbiAgICBjb25zdCBjaGVja3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICBjaGVja3MuY2xhc3NMaXN0LmFkZChcImNoZWNrbGlzdFwiKTtcclxuXHJcbiAgICB0b2RvLmNoZWNrcy5mb3JFYWNoKChjaGVjayxpKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcblxyXG4gICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgICAgY2hlY2tib3guaWQgPSBgJHt0b2RvLnRpdGxlfS0ke2l9YDtcclxuICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGNoZWNrLmlzRG9uZTtcclxuXHJcbiAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICBsYWJlbC5odG1sRm9yID0gY2hlY2tib3guaWQ7XHJcbiAgICAgIGxhYmVsLmlubmVyVGV4dCA9IGNoZWNrLnRhc2s7XHJcblxyXG4gICAgICB0YXNrLmFwcGVuZChjaGVja2JveCwgbGFiZWwpO1xyXG5cclxuICAgICAgY2hlY2tzLmFwcGVuZENoaWxkKHRhc2spO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGNhcmQuYXBwZW5kKGRyYWcsIHRpdGxlLCBlZGl0QnRucywgZGVzY3JpcHRpb24sIGNoZWNrcyk7XHJcblxyXG4gICAgcmV0dXJuIGNhcmQ7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwbGFjZUNhcmRzKHByb2plY3RzKXtcclxuICAgIFxyXG5cclxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGkpID0+IHtcclxuICAgICAgY29uc3QgcHJvamVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBwcm9qZWN0SXRlbS5kYXRhc2V0LmlkeCA9IGk7XHJcbiAgICAgIHByb2plY3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWl0ZW1cIik7XHJcblxyXG4gICAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgICAgaDEuaW5uZXJUZXh0ID0gcHJvamVjdC50aXRsZTtcclxuICAgICAgcHJvamVjdEl0ZW0uYXBwZW5kQ2hpbGQoaDEpO1xyXG5cclxuICAgICAgcHJvamVjdC50b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xyXG4gICAgICAgIHByb2plY3RJdGVtLmFwcGVuZENoaWxkKHBsYWNlQ2FyZCh0b2RvKSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbWFpbi5hcHBlbmRDaGlsZChwcm9qZWN0SXRlbSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gICAgXHJcbiAgcmV0dXJuIHsgcGxhY2VDYXJkcyB9O1xyXG59KSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==