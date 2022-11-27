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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --bgc-page: lavender;\r\n  --card-shadow: .25rem .25rem .25rem rgba(0,0,0,.1),\r\n    inset .25rem .25rem .25rem rgba(255,255,255,.5);\r\n  --icon-size: 30px;\r\n  --txt-col-1: #000;\r\n  --txt-col-2: #444;\r\n  --txt-col-3: #666;\r\n}\r\n\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n  background-color: var(--bgc-page);\r\n}\r\n\r\nol, ul { padding: 0; margin: 0; list-style-type: none; }\r\n\r\nh1, h2, p {margin: 0;}\r\nh1 {font-size: 3rem;}\r\n\r\n#main {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  padding: .5rem;\r\n  overflow: hidden;\r\n  overflow-y: auto;\r\n}\r\n\r\n.project-item {\r\n  box-sizing: border-box;\r\n  padding: 1rem;\r\n  margin: 1rem;\r\n  box-shadow: var(--card-shadow);\r\n}\r\n\r\n/* cards */\r\n\r\n.card {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  box-shadow: var(--card-shadow);\r\n  padding: .5rem;\r\n  margin: .25rem;\r\n  display: grid;\r\n  grid-template-columns: auto 1fr auto;\r\n  grid-template-rows: repeat(3, auto);\r\n  grid-template-areas:\r\n    \" drag  title edit  \"\r\n    \" ..... descr descr \"\r\n    \" ..... tasks tasks \";\r\n  gap: 1rem;\r\n  border-radius: .5rem;\r\n  align-items: center;\r\n  overflow: hidden;\r\n  height: calc(var(--icon-size) * 1.75) ;\r\n  /* transition: 100ms; */\r\n} .card.active {\r\n  height: auto;\r\n}\r\n.card .title {\r\n  font-size: 2rem;\r\n  color: var(--txt-col-1);\r\n  cursor: pointer;\r\n} .card .description {\r\n  grid-area: descr;\r\n  font-size: 1.5rem;\r\n  color: var(--txt-col-2);\r\n} .card .checklist {\r\n  grid-area: tasks;\r\n  display: grid;\r\n  gap: .25rem;\r\n}\r\n\r\n.card input[type=\"checkbox\"] {\r\n  position: relative;\r\n  width: var(--icon-size);\r\n  height: var(--icon-size);\r\n  appearance: none;\r\n}\r\n.card input[type=\"checkbox\"]::before {\r\n  position: absolute;\r\n  content: \"\";\r\n  inset: 0;\r\n  background-color: rgba(0,0,0,.03);\r\n  box-shadow: .1rem .1rem .1rem white,\r\n    inset .1rem .1rem .25rem rgba(0,0,0,.1);\r\n  border-radius: .25rem;\r\n}\r\n.card input[type=\"checkbox\"]::after {\r\n  --check-anim-duration: 200ms;\r\n  position: absolute;\r\n  content: \"\";\r\n  inset: -7px;\r\n  background-color: red;\r\n  clip-path: polygon(0 75%, 15% 60%, 15% 61%, 16% 62%, 18% 65%, 4% 78%, 1% 75%);\r\n  animation: checkmark-backwards var(--check-anim-duration) ease-out forwards;\r\n}\r\n.card input[type=\"checkbox\"]:checked::after {\r\n  animation: checkmark-forwards var(--check-anim-duration) ease-in forwards;\r\n}\r\n@keyframes checkmark-forwards {\r\n  0% {opacity: 0;}\r\n  1% {opacity: 1; clip-path: polygon(0 75%, 15% 60%, 15% 61%, 16% 62%, 18% 65%, 4% 78%);}\r\n  30% {clip-path: polygon(0 75%, 15% 60%, 21% 66%, 26% 70%, 31% 76%, 9% 86%);}\r\n  50% {clip-path: polygon(0 75%, 15% 60%, 35% 75%, 43% 81%, 49% 88%, 40% 100%);}\r\n  100% {clip-path: polygon(0 75%, 15% 60%, 35% 75%, 85% 0, 100% 10%, 40% 100%);}\r\n} @keyframes checkmark-backwards {\r\n  0% {clip-path: polygon(0 75%, 15% 60%, 35% 75%, 85% 0, 100% 10%, 40% 100%);}\r\n  50% {clip-path: polygon(0 75%, 15% 60%, 35% 75%, 43% 81%, 49% 88%, 40% 100%);}\r\n  70% {clip-path: polygon(0 75%, 15% 60%, 21% 66%, 26% 70%, 31% 76%, 9% 86%);}\r\n  99% {opacity: 1; clip-path: polygon(0 75%, 15% 60%, 15% 61%, 16% 62%, 18% 65%, 4% 78%);}\r\n  100% {opacity: 0;}\r\n}\r\n\r\n.card label {\r\n  font-size: 1.25rem;\r\n  color: var(--txt-col-2);\r\n  background: linear-gradient(to right, transparent 0%, rgba(255, 238, 0, 0.2), transparent 100%) no-repeat;\r\n  background-size: 100%;\r\n  transition: background-position 500ms;\r\n  background-position-x: -100vw;\r\n}\r\n.card input[type=\"checkbox\"]:checked + label {\r\n  text-decoration: line-through;\r\n  color: var(--txt-col-3);\r\n  background-position-x: 100vw;\r\n}\r\n\r\n.card[data-priority=\"low\"] {\r\n  background: linear-gradient(to right,lime, rgba(0, 128, 0, 0) 60px);\r\n} .card[data-priority=\"low\"].active {\r\n  background: linear-gradient(to bottom,lime, rgba(0, 128, 0, 0) 60px);\r\n}\r\n.card[data-priority=\"middle\"] {\r\n  background: linear-gradient(to right, goldenrod, rgba(0, 128, 0, 0) 60px);\r\n} .card[data-priority=\"middle\"].active {\r\n  background: linear-gradient(to bottom, goldenrod, rgba(0, 128, 0, 0) 60px);\r\n}\r\n.card[data-priority=\"high\"] {\r\n  background: linear-gradient(to right, orangered, rgba(0, 128, 0, 0) 60px);\r\n} .card[data-priority=\"high\"].active {\r\n  background: linear-gradient(to bottom, orangered, rgba(0, 128, 0, 0) 60px);\r\n}\r\n\r\n/* card icons */\r\n.card-icon { width: var(--icon-size); }\r\n.card ul li {\r\n  display: grid;\r\n  grid-template-columns: 2rem 1fr;\r\n  gap: .5rem;\r\n}\r\n/* .card li:hover {\r\n  transition: background-color 150ms;\r\n  background-color: rgba(255,255,255,.5);\r\n} */\r\n.edit-buttons {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: .5rem;\r\n}\r\n.delete-icon {\r\n  position: relative;\r\n  width: var(--icon-size);\r\n}.icon-trash,\r\n.icon-trash-lid {\r\n  position: absolute;\r\n  transition: rotate 500ms;\r\n}\r\n.icon-trash { transform-origin: 100% 0%;}\r\n.icon-trash-lid { transform-origin: 250% 0%;}\r\n\r\n.delete-icon:hover .icon-trash { rotate: -10deg;}\r\n.delete-icon:hover .icon-trash-lid { rotate: 10deg; }\r\n\r\n\r\n\r\n/*for testing*/\r\n/* * {\r\n  outline: 1px solid gray;\r\n} */", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB;mDACiD;EACjD,iBAAiB;EACjB,iBAAiB;EACjB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,SAAS;EACT,iCAAiC;AACnC;;AAEA,SAAS,UAAU,EAAE,SAAS,EAAE,qBAAqB,EAAE;;AAEvD,WAAW,SAAS,CAAC;AACrB,IAAI,eAAe,CAAC;;AAEpB;EACE,sBAAsB;EACtB,SAAS;EACT,YAAY;EACZ,aAAa;EACb,cAAc;EACd,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,YAAY;EACZ,8BAA8B;AAChC;;AAEA,UAAU;;AAEV;EACE,sBAAsB;EACtB,WAAW;EACX,8BAA8B;EAC9B,cAAc;EACd,cAAc;EACd,aAAa;EACb,oCAAoC;EACpC,mCAAmC;EACnC;;;yBAGuB;EACvB,SAAS;EACT,oBAAoB;EACpB,mBAAmB;EACnB,gBAAgB;EAChB,sCAAsC;EACtC,uBAAuB;AACzB,EAAE;EACA,YAAY;AACd;AACA;EACE,eAAe;EACf,uBAAuB;EACvB,eAAe;AACjB,EAAE;EACA,gBAAgB;EAChB,iBAAiB;EACjB,uBAAuB;AACzB,EAAE;EACA,gBAAgB;EAChB,aAAa;EACb,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,wBAAwB;EACxB,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,QAAQ;EACR,iCAAiC;EACjC;2CACyC;EACzC,qBAAqB;AACvB;AACA;EACE,4BAA4B;EAC5B,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,qBAAqB;EACrB,6EAA6E;EAC7E,2EAA2E;AAC7E;AACA;EACE,yEAAyE;AAC3E;AACA;EACE,IAAI,UAAU,CAAC;EACf,IAAI,UAAU,EAAE,qEAAqE,CAAC;EACtF,KAAK,qEAAqE,CAAC;EAC3E,KAAK,uEAAuE,CAAC;EAC7E,MAAM,sEAAsE,CAAC;AAC/E,EAAE;EACA,IAAI,sEAAsE,CAAC;EAC3E,KAAK,uEAAuE,CAAC;EAC7E,KAAK,qEAAqE,CAAC;EAC3E,KAAK,UAAU,EAAE,qEAAqE,CAAC;EACvF,MAAM,UAAU,CAAC;AACnB;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,yGAAyG;EACzG,qBAAqB;EACrB,qCAAqC;EACrC,6BAA6B;AAC/B;AACA;EACE,6BAA6B;EAC7B,uBAAuB;EACvB,4BAA4B;AAC9B;;AAEA;EACE,mEAAmE;AACrE,EAAE;EACA,oEAAoE;AACtE;AACA;EACE,yEAAyE;AAC3E,EAAE;EACA,0EAA0E;AAC5E;AACA;EACE,yEAAyE;AAC3E,EAAE;EACA,0EAA0E;AAC5E;;AAEA,eAAe;AACf,aAAa,uBAAuB,EAAE;AACtC;EACE,aAAa;EACb,+BAA+B;EAC/B,UAAU;AACZ;AACA;;;GAGG;AACH;EACE,aAAa;EACb,qCAAqC;EACrC,UAAU;AACZ;AACA;EACE,kBAAkB;EAClB,uBAAuB;AACzB,CAAC;;EAEC,kBAAkB;EAClB,wBAAwB;AAC1B;AACA,cAAc,yBAAyB,CAAC;AACxC,kBAAkB,yBAAyB,CAAC;;AAE5C,iCAAiC,cAAc,CAAC;AAChD,qCAAqC,aAAa,EAAE;;;;AAIpD,cAAc;AACd;;GAEG","sourcesContent":[":root {\r\n  --bgc-page: lavender;\r\n  --card-shadow: .25rem .25rem .25rem rgba(0,0,0,.1),\r\n    inset .25rem .25rem .25rem rgba(255,255,255,.5);\r\n  --icon-size: 30px;\r\n  --txt-col-1: #000;\r\n  --txt-col-2: #444;\r\n  --txt-col-3: #666;\r\n}\r\n\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n  background-color: var(--bgc-page);\r\n}\r\n\r\nol, ul { padding: 0; margin: 0; list-style-type: none; }\r\n\r\nh1, h2, p {margin: 0;}\r\nh1 {font-size: 3rem;}\r\n\r\n#main {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  padding: .5rem;\r\n  overflow: hidden;\r\n  overflow-y: auto;\r\n}\r\n\r\n.project-item {\r\n  box-sizing: border-box;\r\n  padding: 1rem;\r\n  margin: 1rem;\r\n  box-shadow: var(--card-shadow);\r\n}\r\n\r\n/* cards */\r\n\r\n.card {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  box-shadow: var(--card-shadow);\r\n  padding: .5rem;\r\n  margin: .25rem;\r\n  display: grid;\r\n  grid-template-columns: auto 1fr auto;\r\n  grid-template-rows: repeat(3, auto);\r\n  grid-template-areas:\r\n    \" drag  title edit  \"\r\n    \" ..... descr descr \"\r\n    \" ..... tasks tasks \";\r\n  gap: 1rem;\r\n  border-radius: .5rem;\r\n  align-items: center;\r\n  overflow: hidden;\r\n  height: calc(var(--icon-size) * 1.75) ;\r\n  /* transition: 100ms; */\r\n} .card.active {\r\n  height: auto;\r\n}\r\n.card .title {\r\n  font-size: 2rem;\r\n  color: var(--txt-col-1);\r\n  cursor: pointer;\r\n} .card .description {\r\n  grid-area: descr;\r\n  font-size: 1.5rem;\r\n  color: var(--txt-col-2);\r\n} .card .checklist {\r\n  grid-area: tasks;\r\n  display: grid;\r\n  gap: .25rem;\r\n}\r\n\r\n.card input[type=\"checkbox\"] {\r\n  position: relative;\r\n  width: var(--icon-size);\r\n  height: var(--icon-size);\r\n  appearance: none;\r\n}\r\n.card input[type=\"checkbox\"]::before {\r\n  position: absolute;\r\n  content: \"\";\r\n  inset: 0;\r\n  background-color: rgba(0,0,0,.03);\r\n  box-shadow: .1rem .1rem .1rem white,\r\n    inset .1rem .1rem .25rem rgba(0,0,0,.1);\r\n  border-radius: .25rem;\r\n}\r\n.card input[type=\"checkbox\"]::after {\r\n  --check-anim-duration: 200ms;\r\n  position: absolute;\r\n  content: \"\";\r\n  inset: -7px;\r\n  background-color: red;\r\n  clip-path: polygon(0 75%, 15% 60%, 15% 61%, 16% 62%, 18% 65%, 4% 78%, 1% 75%);\r\n  animation: checkmark-backwards var(--check-anim-duration) ease-out forwards;\r\n}\r\n.card input[type=\"checkbox\"]:checked::after {\r\n  animation: checkmark-forwards var(--check-anim-duration) ease-in forwards;\r\n}\r\n@keyframes checkmark-forwards {\r\n  0% {opacity: 0;}\r\n  1% {opacity: 1; clip-path: polygon(0 75%, 15% 60%, 15% 61%, 16% 62%, 18% 65%, 4% 78%);}\r\n  30% {clip-path: polygon(0 75%, 15% 60%, 21% 66%, 26% 70%, 31% 76%, 9% 86%);}\r\n  50% {clip-path: polygon(0 75%, 15% 60%, 35% 75%, 43% 81%, 49% 88%, 40% 100%);}\r\n  100% {clip-path: polygon(0 75%, 15% 60%, 35% 75%, 85% 0, 100% 10%, 40% 100%);}\r\n} @keyframes checkmark-backwards {\r\n  0% {clip-path: polygon(0 75%, 15% 60%, 35% 75%, 85% 0, 100% 10%, 40% 100%);}\r\n  50% {clip-path: polygon(0 75%, 15% 60%, 35% 75%, 43% 81%, 49% 88%, 40% 100%);}\r\n  70% {clip-path: polygon(0 75%, 15% 60%, 21% 66%, 26% 70%, 31% 76%, 9% 86%);}\r\n  99% {opacity: 1; clip-path: polygon(0 75%, 15% 60%, 15% 61%, 16% 62%, 18% 65%, 4% 78%);}\r\n  100% {opacity: 0;}\r\n}\r\n\r\n.card label {\r\n  font-size: 1.25rem;\r\n  color: var(--txt-col-2);\r\n  background: linear-gradient(to right, transparent 0%, rgba(255, 238, 0, 0.2), transparent 100%) no-repeat;\r\n  background-size: 100%;\r\n  transition: background-position 500ms;\r\n  background-position-x: -100vw;\r\n}\r\n.card input[type=\"checkbox\"]:checked + label {\r\n  text-decoration: line-through;\r\n  color: var(--txt-col-3);\r\n  background-position-x: 100vw;\r\n}\r\n\r\n.card[data-priority=\"low\"] {\r\n  background: linear-gradient(to right,lime, rgba(0, 128, 0, 0) 60px);\r\n} .card[data-priority=\"low\"].active {\r\n  background: linear-gradient(to bottom,lime, rgba(0, 128, 0, 0) 60px);\r\n}\r\n.card[data-priority=\"middle\"] {\r\n  background: linear-gradient(to right, goldenrod, rgba(0, 128, 0, 0) 60px);\r\n} .card[data-priority=\"middle\"].active {\r\n  background: linear-gradient(to bottom, goldenrod, rgba(0, 128, 0, 0) 60px);\r\n}\r\n.card[data-priority=\"high\"] {\r\n  background: linear-gradient(to right, orangered, rgba(0, 128, 0, 0) 60px);\r\n} .card[data-priority=\"high\"].active {\r\n  background: linear-gradient(to bottom, orangered, rgba(0, 128, 0, 0) 60px);\r\n}\r\n\r\n/* card icons */\r\n.card-icon { width: var(--icon-size); }\r\n.card ul li {\r\n  display: grid;\r\n  grid-template-columns: 2rem 1fr;\r\n  gap: .5rem;\r\n}\r\n/* .card li:hover {\r\n  transition: background-color 150ms;\r\n  background-color: rgba(255,255,255,.5);\r\n} */\r\n.edit-buttons {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: .5rem;\r\n}\r\n.delete-icon {\r\n  position: relative;\r\n  width: var(--icon-size);\r\n}.icon-trash,\r\n.icon-trash-lid {\r\n  position: absolute;\r\n  transition: rotate 500ms;\r\n}\r\n.icon-trash { transform-origin: 100% 0%;}\r\n.icon-trash-lid { transform-origin: 250% 0%;}\r\n\r\n.delete-icon:hover .icon-trash { rotate: -10deg;}\r\n.delete-icon:hover .icon-trash-lid { rotate: 10deg; }\r\n\r\n\r\n\r\n/*for testing*/\r\n/* * {\r\n  outline: 1px solid gray;\r\n} */"],"sourceRoot":""}]);
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
      ], "low", false),

      new _modules_classes_js__WEBPACK_IMPORTED_MODULE_2__.Todo("coding", null, "2022-11-23T17:42", null, [
        { task: "check css-tricks", isDone: true },
        { task: "continue TOP practice", isDone: true },
      ], "high", true),
    ],
  },
  {
    title: "test",
    todos: [
      new _modules_classes_js__WEBPACK_IMPORTED_MODULE_2__.Todo("test1", "test1 descr", "2022-11-23T17:42","2023-11-23T17:42", [
        { task: "test1 task1", isDone: true },
        { task: "test1 task2", isDone: false },
        { task: "test1 task3", isDone: true },
      ], "low", true),

      new _modules_classes_js__WEBPACK_IMPORTED_MODULE_2__.Todo("test2", "test2 descr", "2022-11-23T17:42", "2023-11-23T17:42", [
        { task: "test2 task1", isDone: true },
        { task: "test2 task2", isDone: true },
        { task: "test3 task3", isDone: true },
        { task: "test4 task4", isDone: true },
        { task: "test5 task5", isDone: true },
      ], "middle", false),
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
    checks, priority, isFavorite){
    this.title = title;
    this.description = description;
    this.dateCreation = dateCreation;
    this.dateDue = dateDue;
    this.checks = checks;
    this.priority = priority;
    this.isFavorite = isFavorite;
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

  function placeCard(todo, projectIdx, todoIdx){
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.priority = todo.priority;
    card.dataset.projectIdx = projectIdx;
    card.dataset.todoIdx = todoIdx;

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
    fav.src = todo.isFavorite ? _media_images_icons_fav_active_svg__WEBPACK_IMPORTED_MODULE_6__ : _media_images_icons_fav_svg__WEBPACK_IMPORTED_MODULE_5__;
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
    title.addEventListener("click", () => {
      const thisCard = document.querySelector(
        `[data-project-idx="${projectIdx}"][data-todo-idx="${todoIdx}"]`
        );
      
        thisCard.classList.toggle("active");
    });

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
    

    projects.forEach((project, projectIdx) => {
      const projectItem = document.createElement("div");
      projectItem.dataset.idx = projectIdx;
      projectItem.classList.add("project-item");

      const h1 = document.createElement("h1");
      h1.innerText = project.title;
      projectItem.appendChild(h1);

      project.todos.forEach((todo, todoIdx) => {
        projectItem.appendChild(placeCard(todo, projectIdx, todoIdx));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0U7QUFDTztBQUNYO0FBQ2E7QUFDakU7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx5REFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx5REFBUTtBQUN2QjtBQUNBO0FBQ0EsZ0NBQWdDLCtEQUFhLEdBQUcsd0RBQU87QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMERBQVM7QUFDekI7QUFDQTtBQUNBLG1CQUFtQiw4REFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsV0FBVyxvQkFBb0IsUUFBUTtBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsV0FBVyxHQUFHLEVBQUU7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy91aS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gIC0tYmdjLXBhZ2U6IGxhdmVuZGVyO1xcclxcbiAgLS1jYXJkLXNoYWRvdzogLjI1cmVtIC4yNXJlbSAuMjVyZW0gcmdiYSgwLDAsMCwuMSksXFxyXFxuICAgIGluc2V0IC4yNXJlbSAuMjVyZW0gLjI1cmVtIHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xcclxcbiAgLS1pY29uLXNpemU6IDMwcHg7XFxyXFxuICAtLXR4dC1jb2wtMTogIzAwMDtcXHJcXG4gIC0tdHh0LWNvbC0yOiAjNDQ0O1xcclxcbiAgLS10eHQtY29sLTM6ICM2NjY7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnYy1wYWdlKTtcXHJcXG59XFxyXFxuXFxyXFxub2wsIHVsIHsgcGFkZGluZzogMDsgbWFyZ2luOiAwOyBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IH1cXHJcXG5cXHJcXG5oMSwgaDIsIHAge21hcmdpbjogMDt9XFxyXFxuaDEge2ZvbnQtc2l6ZTogM3JlbTt9XFxyXFxuXFxyXFxuI21haW4ge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1pdGVtIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgbWFyZ2luOiAxcmVtO1xcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1zaGFkb3cpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjYXJkcyAqL1xcclxcblxcclxcbi5jYXJkIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93KTtcXHJcXG4gIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgbWFyZ2luOiAuMjVyZW07XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgYXV0byk7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwiIGRyYWcgIHRpdGxlIGVkaXQgIFxcXCJcXHJcXG4gICAgXFxcIiAuLi4uLiBkZXNjciBkZXNjciBcXFwiXFxyXFxuICAgIFxcXCIgLi4uLi4gdGFza3MgdGFza3MgXFxcIjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBoZWlnaHQ6IGNhbGModmFyKC0taWNvbi1zaXplKSAqIDEuNzUpIDtcXHJcXG4gIC8qIHRyYW5zaXRpb246IDEwMG1zOyAqL1xcclxcbn0gLmNhcmQuYWN0aXZlIHtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuLmNhcmQgLnRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sLTEpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn0gLmNhcmQgLmRlc2NyaXB0aW9uIHtcXHJcXG4gIGdyaWQtYXJlYTogZGVzY3I7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sLTIpO1xcclxcbn0gLmNhcmQgLmNoZWNrbGlzdCB7XFxyXFxuICBncmlkLWFyZWE6IHRhc2tzO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdhcDogLjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiB2YXIoLS1pY29uLXNpemUpO1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1pY29uLXNpemUpO1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuLmNhcmQgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YmVmb3JlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgaW5zZXQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4wMyk7XFxyXFxuICBib3gtc2hhZG93OiAuMXJlbSAuMXJlbSAuMXJlbSB3aGl0ZSxcXHJcXG4gICAgaW5zZXQgLjFyZW0gLjFyZW0gLjI1cmVtIHJnYmEoMCwwLDAsLjEpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xcclxcbn1cXHJcXG4uY2FyZCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjphZnRlciB7XFxyXFxuICAtLWNoZWNrLWFuaW0tZHVyYXRpb246IDIwMG1zO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBpbnNldDogLTdweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDc1JSwgMTUlIDYwJSwgMTUlIDYxJSwgMTYlIDYyJSwgMTglIDY1JSwgNCUgNzglLCAxJSA3NSUpO1xcclxcbiAgYW5pbWF0aW9uOiBjaGVja21hcmstYmFja3dhcmRzIHZhcigtLWNoZWNrLWFuaW0tZHVyYXRpb24pIGVhc2Utb3V0IGZvcndhcmRzO1xcclxcbn1cXHJcXG4uY2FyZCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQ6OmFmdGVyIHtcXHJcXG4gIGFuaW1hdGlvbjogY2hlY2ttYXJrLWZvcndhcmRzIHZhcigtLWNoZWNrLWFuaW0tZHVyYXRpb24pIGVhc2UtaW4gZm9yd2FyZHM7XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgY2hlY2ttYXJrLWZvcndhcmRzIHtcXHJcXG4gIDAlIHtvcGFjaXR5OiAwO31cXHJcXG4gIDElIHtvcGFjaXR5OiAxOyBjbGlwLXBhdGg6IHBvbHlnb24oMCA3NSUsIDE1JSA2MCUsIDE1JSA2MSUsIDE2JSA2MiUsIDE4JSA2NSUsIDQlIDc4JSk7fVxcclxcbiAgMzAlIHtjbGlwLXBhdGg6IHBvbHlnb24oMCA3NSUsIDE1JSA2MCUsIDIxJSA2NiUsIDI2JSA3MCUsIDMxJSA3NiUsIDklIDg2JSk7fVxcclxcbiAgNTAlIHtjbGlwLXBhdGg6IHBvbHlnb24oMCA3NSUsIDE1JSA2MCUsIDM1JSA3NSUsIDQzJSA4MSUsIDQ5JSA4OCUsIDQwJSAxMDAlKTt9XFxyXFxuICAxMDAlIHtjbGlwLXBhdGg6IHBvbHlnb24oMCA3NSUsIDE1JSA2MCUsIDM1JSA3NSUsIDg1JSAwLCAxMDAlIDEwJSwgNDAlIDEwMCUpO31cXHJcXG59IEBrZXlmcmFtZXMgY2hlY2ttYXJrLWJhY2t3YXJkcyB7XFxyXFxuICAwJSB7Y2xpcC1wYXRoOiBwb2x5Z29uKDAgNzUlLCAxNSUgNjAlLCAzNSUgNzUlLCA4NSUgMCwgMTAwJSAxMCUsIDQwJSAxMDAlKTt9XFxyXFxuICA1MCUge2NsaXAtcGF0aDogcG9seWdvbigwIDc1JSwgMTUlIDYwJSwgMzUlIDc1JSwgNDMlIDgxJSwgNDklIDg4JSwgNDAlIDEwMCUpO31cXHJcXG4gIDcwJSB7Y2xpcC1wYXRoOiBwb2x5Z29uKDAgNzUlLCAxNSUgNjAlLCAyMSUgNjYlLCAyNiUgNzAlLCAzMSUgNzYlLCA5JSA4NiUpO31cXHJcXG4gIDk5JSB7b3BhY2l0eTogMTsgY2xpcC1wYXRoOiBwb2x5Z29uKDAgNzUlLCAxNSUgNjAlLCAxNSUgNjElLCAxNiUgNjIlLCAxOCUgNjUlLCA0JSA3OCUpO31cXHJcXG4gIDEwMCUge29wYWNpdHk6IDA7fVxcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCBsYWJlbCB7XFxyXFxuICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbC0yKTtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdHJhbnNwYXJlbnQgMCUsIHJnYmEoMjU1LCAyMzgsIDAsIDAuMiksIHRyYW5zcGFyZW50IDEwMCUpIG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gNTAwbXM7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IC0xMDB2dztcXHJcXG59XFxyXFxuLmNhcmQgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWwge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbC0zKTtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogMTAwdnc7XFxyXFxufVxcclxcblxcclxcbi5jYXJkW2RhdGEtcHJpb3JpdHk9XFxcImxvd1xcXCJdIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCxsaW1lLCByZ2JhKDAsIDEyOCwgMCwgMCkgNjBweCk7XFxyXFxufSAuY2FyZFtkYXRhLXByaW9yaXR5PVxcXCJsb3dcXFwiXS5hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSxsaW1lLCByZ2JhKDAsIDEyOCwgMCwgMCkgNjBweCk7XFxyXFxufVxcclxcbi5jYXJkW2RhdGEtcHJpb3JpdHk9XFxcIm1pZGRsZVxcXCJdIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgZ29sZGVucm9kLCByZ2JhKDAsIDEyOCwgMCwgMCkgNjBweCk7XFxyXFxufSAuY2FyZFtkYXRhLXByaW9yaXR5PVxcXCJtaWRkbGVcXFwiXS5hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgZ29sZGVucm9kLCByZ2JhKDAsIDEyOCwgMCwgMCkgNjBweCk7XFxyXFxufVxcclxcbi5jYXJkW2RhdGEtcHJpb3JpdHk9XFxcImhpZ2hcXFwiXSB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIG9yYW5nZXJlZCwgcmdiYSgwLCAxMjgsIDAsIDApIDYwcHgpO1xcclxcbn0gLmNhcmRbZGF0YS1wcmlvcml0eT1cXFwiaGlnaFxcXCJdLmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCBvcmFuZ2VyZWQsIHJnYmEoMCwgMTI4LCAwLCAwKSA2MHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogY2FyZCBpY29ucyAqL1xcclxcbi5jYXJkLWljb24geyB3aWR0aDogdmFyKC0taWNvbi1zaXplKTsgfVxcclxcbi5jYXJkIHVsIGxpIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJyZW0gMWZyO1xcclxcbiAgZ2FwOiAuNXJlbTtcXHJcXG59XFxyXFxuLyogLmNhcmQgbGk6aG92ZXIge1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxNTBtcztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xcclxcbn0gKi9cXHJcXG4uZWRpdC1idXR0b25zIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgZ2FwOiAuNXJlbTtcXHJcXG59XFxyXFxuLmRlbGV0ZS1pY29uIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiB2YXIoLS1pY29uLXNpemUpO1xcclxcbn0uaWNvbi10cmFzaCxcXHJcXG4uaWNvbi10cmFzaC1saWQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdHJhbnNpdGlvbjogcm90YXRlIDUwMG1zO1xcclxcbn1cXHJcXG4uaWNvbi10cmFzaCB7IHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMCU7fVxcclxcbi5pY29uLXRyYXNoLWxpZCB7IHRyYW5zZm9ybS1vcmlnaW46IDI1MCUgMCU7fVxcclxcblxcclxcbi5kZWxldGUtaWNvbjpob3ZlciAuaWNvbi10cmFzaCB7IHJvdGF0ZTogLTEwZGVnO31cXHJcXG4uZGVsZXRlLWljb246aG92ZXIgLmljb24tdHJhc2gtbGlkIHsgcm90YXRlOiAxMGRlZzsgfVxcclxcblxcclxcblxcclxcblxcclxcbi8qZm9yIHRlc3RpbmcqL1xcclxcbi8qICoge1xcclxcbiAgb3V0bGluZTogMXB4IHNvbGlkIGdyYXk7XFxyXFxufSAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxvQkFBb0I7RUFDcEI7bURBQ2lEO0VBQ2pELGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsaUNBQWlDO0FBQ25DOztBQUVBLFNBQVMsVUFBVSxFQUFFLFNBQVMsRUFBRSxxQkFBcUIsRUFBRTs7QUFFdkQsV0FBVyxTQUFTLENBQUM7QUFDckIsSUFBSSxlQUFlLENBQUM7O0FBRXBCO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixZQUFZO0VBQ1osOEJBQThCO0FBQ2hDOztBQUVBLFVBQVU7O0FBRVY7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLDhCQUE4QjtFQUM5QixjQUFjO0VBQ2QsY0FBYztFQUNkLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsbUNBQW1DO0VBQ25DOzs7eUJBR3VCO0VBQ3ZCLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixzQ0FBc0M7RUFDdEMsdUJBQXVCO0FBQ3pCLEVBQUU7RUFDQSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQixFQUFFO0VBQ0EsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix1QkFBdUI7QUFDekIsRUFBRTtFQUNBLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFFBQVE7RUFDUixpQ0FBaUM7RUFDakM7MkNBQ3lDO0VBQ3pDLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLHFCQUFxQjtFQUNyQiw2RUFBNkU7RUFDN0UsMkVBQTJFO0FBQzdFO0FBQ0E7RUFDRSx5RUFBeUU7QUFDM0U7QUFDQTtFQUNFLElBQUksVUFBVSxDQUFDO0VBQ2YsSUFBSSxVQUFVLEVBQUUscUVBQXFFLENBQUM7RUFDdEYsS0FBSyxxRUFBcUUsQ0FBQztFQUMzRSxLQUFLLHVFQUF1RSxDQUFDO0VBQzdFLE1BQU0sc0VBQXNFLENBQUM7QUFDL0UsRUFBRTtFQUNBLElBQUksc0VBQXNFLENBQUM7RUFDM0UsS0FBSyx1RUFBdUUsQ0FBQztFQUM3RSxLQUFLLHFFQUFxRSxDQUFDO0VBQzNFLEtBQUssVUFBVSxFQUFFLHFFQUFxRSxDQUFDO0VBQ3ZGLE1BQU0sVUFBVSxDQUFDO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2Qix5R0FBeUc7RUFDekcscUJBQXFCO0VBQ3JCLHFDQUFxQztFQUNyQyw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsbUVBQW1FO0FBQ3JFLEVBQUU7RUFDQSxvRUFBb0U7QUFDdEU7QUFDQTtFQUNFLHlFQUF5RTtBQUMzRSxFQUFFO0VBQ0EsMEVBQTBFO0FBQzVFO0FBQ0E7RUFDRSx5RUFBeUU7QUFDM0UsRUFBRTtFQUNBLDBFQUEwRTtBQUM1RTs7QUFFQSxlQUFlO0FBQ2YsYUFBYSx1QkFBdUIsRUFBRTtBQUN0QztFQUNFLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsVUFBVTtBQUNaO0FBQ0E7OztHQUdHO0FBQ0g7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLFVBQVU7QUFDWjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6QixDQUFDOztFQUVDLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7QUFDQSxjQUFjLHlCQUF5QixDQUFDO0FBQ3hDLGtCQUFrQix5QkFBeUIsQ0FBQzs7QUFFNUMsaUNBQWlDLGNBQWMsQ0FBQztBQUNoRCxxQ0FBcUMsYUFBYSxFQUFFOzs7O0FBSXBELGNBQWM7QUFDZDs7R0FFR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAtLWJnYy1wYWdlOiBsYXZlbmRlcjtcXHJcXG4gIC0tY2FyZC1zaGFkb3c6IC4yNXJlbSAuMjVyZW0gLjI1cmVtIHJnYmEoMCwwLDAsLjEpLFxcclxcbiAgICBpbnNldCAuMjVyZW0gLjI1cmVtIC4yNXJlbSByZ2JhKDI1NSwyNTUsMjU1LC41KTtcXHJcXG4gIC0taWNvbi1zaXplOiAzMHB4O1xcclxcbiAgLS10eHQtY29sLTE6ICMwMDA7XFxyXFxuICAtLXR4dC1jb2wtMjogIzQ0NDtcXHJcXG4gIC0tdHh0LWNvbC0zOiAjNjY2O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ2MtcGFnZSk7XFxyXFxufVxcclxcblxcclxcbm9sLCB1bCB7IHBhZGRpbmc6IDA7IG1hcmdpbjogMDsgbGlzdC1zdHlsZS10eXBlOiBub25lOyB9XFxyXFxuXFxyXFxuaDEsIGgyLCBwIHttYXJnaW46IDA7fVxcclxcbmgxIHtmb250LXNpemU6IDNyZW07fVxcclxcblxcclxcbiNtYWluIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgcGFkZGluZzogLjVyZW07XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaXRlbSB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIG1hcmdpbjogMXJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogY2FyZHMgKi9cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLXNoYWRvdyk7XFxyXFxuICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gIG1hcmdpbjogLjI1cmVtO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIGF1dG8pO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgXFxcIiBkcmFnICB0aXRsZSBlZGl0ICBcXFwiXFxyXFxuICAgIFxcXCIgLi4uLi4gZGVzY3IgZGVzY3IgXFxcIlxcclxcbiAgICBcXFwiIC4uLi4uIHRhc2tzIHRhc2tzIFxcXCI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWljb24tc2l6ZSkgKiAxLjc1KSA7XFxyXFxuICAvKiB0cmFuc2l0aW9uOiAxMDBtczsgKi9cXHJcXG59IC5jYXJkLmFjdGl2ZSB7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcbi5jYXJkIC50aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbC0xKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59IC5jYXJkIC5kZXNjcmlwdGlvbiB7XFxyXFxuICBncmlkLWFyZWE6IGRlc2NyO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbC0yKTtcXHJcXG59IC5jYXJkIC5jaGVja2xpc3Qge1xcclxcbiAgZ3JpZC1hcmVhOiB0YXNrcztcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBnYXA6IC4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogdmFyKC0taWNvbi1zaXplKTtcXHJcXG4gIGhlaWdodDogdmFyKC0taWNvbi1zaXplKTtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcbi5jYXJkIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmJlZm9yZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIGluc2V0OiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMDMpO1xcclxcbiAgYm94LXNoYWRvdzogLjFyZW0gLjFyZW0gLjFyZW0gd2hpdGUsXFxyXFxuICAgIGluc2V0IC4xcmVtIC4xcmVtIC4yNXJlbSByZ2JhKDAsMCwwLC4xKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcXHJcXG59XFxyXFxuLmNhcmQgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YWZ0ZXIge1xcclxcbiAgLS1jaGVjay1hbmltLWR1cmF0aW9uOiAyMDBtcztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgaW5zZXQ6IC03cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICBjbGlwLXBhdGg6IHBvbHlnb24oMCA3NSUsIDE1JSA2MCUsIDE1JSA2MSUsIDE2JSA2MiUsIDE4JSA2NSUsIDQlIDc4JSwgMSUgNzUlKTtcXHJcXG4gIGFuaW1hdGlvbjogY2hlY2ttYXJrLWJhY2t3YXJkcyB2YXIoLS1jaGVjay1hbmltLWR1cmF0aW9uKSBlYXNlLW91dCBmb3J3YXJkcztcXHJcXG59XFxyXFxuLmNhcmQgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkOjphZnRlciB7XFxyXFxuICBhbmltYXRpb246IGNoZWNrbWFyay1mb3J3YXJkcyB2YXIoLS1jaGVjay1hbmltLWR1cmF0aW9uKSBlYXNlLWluIGZvcndhcmRzO1xcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGNoZWNrbWFyay1mb3J3YXJkcyB7XFxyXFxuICAwJSB7b3BhY2l0eTogMDt9XFxyXFxuICAxJSB7b3BhY2l0eTogMTsgY2xpcC1wYXRoOiBwb2x5Z29uKDAgNzUlLCAxNSUgNjAlLCAxNSUgNjElLCAxNiUgNjIlLCAxOCUgNjUlLCA0JSA3OCUpO31cXHJcXG4gIDMwJSB7Y2xpcC1wYXRoOiBwb2x5Z29uKDAgNzUlLCAxNSUgNjAlLCAyMSUgNjYlLCAyNiUgNzAlLCAzMSUgNzYlLCA5JSA4NiUpO31cXHJcXG4gIDUwJSB7Y2xpcC1wYXRoOiBwb2x5Z29uKDAgNzUlLCAxNSUgNjAlLCAzNSUgNzUlLCA0MyUgODElLCA0OSUgODglLCA0MCUgMTAwJSk7fVxcclxcbiAgMTAwJSB7Y2xpcC1wYXRoOiBwb2x5Z29uKDAgNzUlLCAxNSUgNjAlLCAzNSUgNzUlLCA4NSUgMCwgMTAwJSAxMCUsIDQwJSAxMDAlKTt9XFxyXFxufSBAa2V5ZnJhbWVzIGNoZWNrbWFyay1iYWNrd2FyZHMge1xcclxcbiAgMCUge2NsaXAtcGF0aDogcG9seWdvbigwIDc1JSwgMTUlIDYwJSwgMzUlIDc1JSwgODUlIDAsIDEwMCUgMTAlLCA0MCUgMTAwJSk7fVxcclxcbiAgNTAlIHtjbGlwLXBhdGg6IHBvbHlnb24oMCA3NSUsIDE1JSA2MCUsIDM1JSA3NSUsIDQzJSA4MSUsIDQ5JSA4OCUsIDQwJSAxMDAlKTt9XFxyXFxuICA3MCUge2NsaXAtcGF0aDogcG9seWdvbigwIDc1JSwgMTUlIDYwJSwgMjElIDY2JSwgMjYlIDcwJSwgMzElIDc2JSwgOSUgODYlKTt9XFxyXFxuICA5OSUge29wYWNpdHk6IDE7IGNsaXAtcGF0aDogcG9seWdvbigwIDc1JSwgMTUlIDYwJSwgMTUlIDYxJSwgMTYlIDYyJSwgMTglIDY1JSwgNCUgNzglKTt9XFxyXFxuICAxMDAlIHtvcGFjaXR5OiAwO31cXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgbGFiZWwge1xcclxcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2wtMik7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHRyYW5zcGFyZW50IDAlLCByZ2JhKDI1NSwgMjM4LCAwLCAwLjIpLCB0cmFuc3BhcmVudCAxMDAlKSBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDUwMG1zO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAtMTAwdnc7XFxyXFxufVxcclxcbi5jYXJkIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2wtMyk7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZFtkYXRhLXByaW9yaXR5PVxcXCJsb3dcXFwiXSB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsbGltZSwgcmdiYSgwLCAxMjgsIDAsIDApIDYwcHgpO1xcclxcbn0gLmNhcmRbZGF0YS1wcmlvcml0eT1cXFwibG93XFxcIl0uYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sbGltZSwgcmdiYSgwLCAxMjgsIDAsIDApIDYwcHgpO1xcclxcbn1cXHJcXG4uY2FyZFtkYXRhLXByaW9yaXR5PVxcXCJtaWRkbGVcXFwiXSB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGdvbGRlbnJvZCwgcmdiYSgwLCAxMjgsIDAsIDApIDYwcHgpO1xcclxcbn0gLmNhcmRbZGF0YS1wcmlvcml0eT1cXFwibWlkZGxlXFxcIl0uYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIGdvbGRlbnJvZCwgcmdiYSgwLCAxMjgsIDAsIDApIDYwcHgpO1xcclxcbn1cXHJcXG4uY2FyZFtkYXRhLXByaW9yaXR5PVxcXCJoaWdoXFxcIl0ge1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBvcmFuZ2VyZWQsIHJnYmEoMCwgMTI4LCAwLCAwKSA2MHB4KTtcXHJcXG59IC5jYXJkW2RhdGEtcHJpb3JpdHk9XFxcImhpZ2hcXFwiXS5hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgb3JhbmdlcmVkLCByZ2JhKDAsIDEyOCwgMCwgMCkgNjBweCk7XFxyXFxufVxcclxcblxcclxcbi8qIGNhcmQgaWNvbnMgKi9cXHJcXG4uY2FyZC1pY29uIHsgd2lkdGg6IHZhcigtLWljb24tc2l6ZSk7IH1cXHJcXG4uY2FyZCB1bCBsaSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAycmVtIDFmcjtcXHJcXG4gIGdhcDogLjVyZW07XFxyXFxufVxcclxcbi8qIC5jYXJkIGxpOmhvdmVyIHtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTUwbXM7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC41KTtcXHJcXG59ICovXFxyXFxuLmVkaXQtYnV0dG9ucyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gIGdhcDogLjVyZW07XFxyXFxufVxcclxcbi5kZWxldGUtaWNvbiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogdmFyKC0taWNvbi1zaXplKTtcXHJcXG59Lmljb24tdHJhc2gsXFxyXFxuLmljb24tdHJhc2gtbGlkIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRyYW5zaXRpb246IHJvdGF0ZSA1MDBtcztcXHJcXG59XFxyXFxuLmljb24tdHJhc2ggeyB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDAlO31cXHJcXG4uaWNvbi10cmFzaC1saWQgeyB0cmFuc2Zvcm0tb3JpZ2luOiAyNTAlIDAlO31cXHJcXG5cXHJcXG4uZGVsZXRlLWljb246aG92ZXIgLmljb24tdHJhc2ggeyByb3RhdGU6IC0xMGRlZzt9XFxyXFxuLmRlbGV0ZS1pY29uOmhvdmVyIC5pY29uLXRyYXNoLWxpZCB7IHJvdGF0ZTogMTBkZWc7IH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKmZvciB0ZXN0aW5nKi9cXHJcXG4vKiAqIHtcXHJcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBncmF5O1xcclxcbn0gKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgeyB1aSB9IGZyb20gXCIuL21vZHVsZXMvdWkuanNcIjtcclxuaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL21vZHVsZXMvY2xhc3Nlcy5qc1wiO1xyXG5cclxuY29uc3QgcHJvamVjdHMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwicm91dGluZVwiLFxyXG4gICAgdG9kb3M6IFtcclxuICAgICAgbmV3IFRvZG8oXCJleGVyY2lzZVwiLCBcIkl0J3MgbGVnIGRheSFcIiwgXCIyMDIyLTExLTIzVDE3OjQyXCIsIG51bGwsIFtcclxuICAgICAgICB7IHRhc2s6IFwicnVuIDNrbVwiLCBpc0RvbmU6IHRydWUgfSxcclxuICAgICAgICB7IHRhc2s6IFwiYmljeWNsZVwiLCBpc0RvbmU6IGZhbHNlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcInNxdWF0c1wiLCBpc0RvbmU6IGZhbHNlIH0sXHJcbiAgICAgIF0sIFwibG93XCIsIGZhbHNlKSxcclxuXHJcbiAgICAgIG5ldyBUb2RvKFwiY29kaW5nXCIsIG51bGwsIFwiMjAyMi0xMS0yM1QxNzo0MlwiLCBudWxsLCBbXHJcbiAgICAgICAgeyB0YXNrOiBcImNoZWNrIGNzcy10cmlja3NcIiwgaXNEb25lOiB0cnVlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcImNvbnRpbnVlIFRPUCBwcmFjdGljZVwiLCBpc0RvbmU6IHRydWUgfSxcclxuICAgICAgXSwgXCJoaWdoXCIsIHRydWUpLFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcInRlc3RcIixcclxuICAgIHRvZG9zOiBbXHJcbiAgICAgIG5ldyBUb2RvKFwidGVzdDFcIiwgXCJ0ZXN0MSBkZXNjclwiLCBcIjIwMjItMTEtMjNUMTc6NDJcIixcIjIwMjMtMTEtMjNUMTc6NDJcIiwgW1xyXG4gICAgICAgIHsgdGFzazogXCJ0ZXN0MSB0YXNrMVwiLCBpc0RvbmU6IHRydWUgfSxcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDEgdGFzazJcIiwgaXNEb25lOiBmYWxzZSB9LFxyXG4gICAgICAgIHsgdGFzazogXCJ0ZXN0MSB0YXNrM1wiLCBpc0RvbmU6IHRydWUgfSxcclxuICAgICAgXSwgXCJsb3dcIiwgdHJ1ZSksXHJcblxyXG4gICAgICBuZXcgVG9kbyhcInRlc3QyXCIsIFwidGVzdDIgZGVzY3JcIiwgXCIyMDIyLTExLTIzVDE3OjQyXCIsIFwiMjAyMy0xMS0yM1QxNzo0MlwiLCBbXHJcbiAgICAgICAgeyB0YXNrOiBcInRlc3QyIHRhc2sxXCIsIGlzRG9uZTogdHJ1ZSB9LFxyXG4gICAgICAgIHsgdGFzazogXCJ0ZXN0MiB0YXNrMlwiLCBpc0RvbmU6IHRydWUgfSxcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDMgdGFzazNcIiwgaXNEb25lOiB0cnVlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcInRlc3Q0IHRhc2s0XCIsIGlzRG9uZTogdHJ1ZSB9LFxyXG4gICAgICAgIHsgdGFzazogXCJ0ZXN0NSB0YXNrNVwiLCBpc0RvbmU6IHRydWUgfSxcclxuICAgICAgXSwgXCJtaWRkbGVcIiwgZmFsc2UpLFxyXG4gICAgXSxcclxuICB9LFxyXG5dO1xyXG5cclxuXHJcbnVpLnBsYWNlQ2FyZHMocHJvamVjdHMpOyIsImV4cG9ydCBjbGFzcyBUb2RvIHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGVDcmVhdGlvbiwgZGF0ZUR1ZSwgLy90eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIlxyXG4gICAgY2hlY2tzLCBwcmlvcml0eSwgaXNGYXZvcml0ZSl7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmRhdGVDcmVhdGlvbiA9IGRhdGVDcmVhdGlvbjtcclxuICAgIHRoaXMuZGF0ZUR1ZSA9IGRhdGVEdWU7XHJcbiAgICB0aGlzLmNoZWNrcyA9IGNoZWNrcztcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIHRoaXMuaXNGYXZvcml0ZSA9IGlzRmF2b3JpdGU7XHJcbiAgfTtcclxufTsiLCJpbXBvcnQgaWNvbkNoZWNrbWFyayBmcm9tIFwiLi4vbWVkaWEvaW1hZ2VzL2ljb25zL2NoZWNrbWFyay5zdmdcIjtcclxuaW1wb3J0IGljb25EcmFnIGZyb20gXCIuLi9tZWRpYS9pbWFnZXMvaWNvbnMvZHJhZy5zdmdcIjtcclxuaW1wb3J0IGljb25FZGl0IGZyb20gXCIuLi9tZWRpYS9pbWFnZXMvaWNvbnMvZWRpdC5zdmdcIjtcclxuaW1wb3J0IGljb25UcmFzaCBmcm9tIFwiLi4vbWVkaWEvaW1hZ2VzL2ljb25zL3RyYXNoLnN2Z1wiO1xyXG5pbXBvcnQgaWNvblRyYXNoTGlkIGZyb20gXCIuLi9tZWRpYS9pbWFnZXMvaWNvbnMvdHJhc2gtbGlkLnN2Z1wiO1xyXG5pbXBvcnQgaWNvbkZhdiBmcm9tIFwiLi4vbWVkaWEvaW1hZ2VzL2ljb25zL2Zhdi5zdmdcIjtcclxuaW1wb3J0IGljb25GYXZBY3RpdmUgZnJvbSBcIi4uL21lZGlhL2ltYWdlcy9pY29ucy9mYXYtYWN0aXZlLnN2Z1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB1aSA9ICgoKSA9PiB7XHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIik7XHJcblxyXG4gIGZ1bmN0aW9uIHBsYWNlQ2FyZCh0b2RvLCBwcm9qZWN0SWR4LCB0b2RvSWR4KXtcclxuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcclxuICAgIGNhcmQuZGF0YXNldC5wcmlvcml0eSA9IHRvZG8ucHJpb3JpdHk7XHJcbiAgICBjYXJkLmRhdGFzZXQucHJvamVjdElkeCA9IHByb2plY3RJZHg7XHJcbiAgICBjYXJkLmRhdGFzZXQudG9kb0lkeCA9IHRvZG9JZHg7XHJcblxyXG4gICAgY29uc3QgZHJhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBkcmFnLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWljb25cIiwgXCJpY29uLWRyYWdcIik7XHJcbiAgICBkcmFnLnNyYyA9IGljb25EcmFnO1xyXG5cclxuICAgIGNvbnN0IGVkaXRCdG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGVkaXRCdG5zLmNsYXNzTGlzdC5hZGQoXCJlZGl0LWJ1dHRvbnNcIik7XHJcbiAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGVkaXQuY2xhc3NMaXN0LmFkZChcImNhcmQtaWNvblwiLCBcImljb24tZWRpdFwiKTtcclxuICAgIGVkaXQuc3JjID0gaWNvbkVkaXQ7XHJcbiAgICBjb25zdCBmYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgZmF2LmNsYXNzTGlzdC5hZGQoXCJjYXJkLWljb25cIiwgXCJpY29uLWZhdlwiKTtcclxuICAgIGZhdi5zcmMgPSB0b2RvLmlzRmF2b3JpdGUgPyBpY29uRmF2QWN0aXZlIDogaWNvbkZhdjtcclxuICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWljb25cIik7XHJcbiAgICBjb25zdCB0cmFzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICB0cmFzaC5jbGFzc0xpc3QuYWRkKFwiY2FyZC1pY29uXCIsIFwiaWNvbi10cmFzaFwiKTtcclxuICAgIHRyYXNoLnNyYyA9IGljb25UcmFzaDtcclxuICAgIGNvbnN0IHRyYXNoTGlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIHRyYXNoTGlkLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWljb25cIiwgXCJpY29uLXRyYXNoLWxpZFwiKTtcclxuICAgIHRyYXNoTGlkLnNyYyA9IGljb25UcmFzaExpZDtcclxuICAgIFxyXG4gICAgZGVsZXRlSWNvbi5hcHBlbmQodHJhc2gsIHRyYXNoTGlkKTtcclxuICAgIGVkaXRCdG5zLmFwcGVuZChlZGl0LCBmYXYsIGRlbGV0ZUljb24pO1xyXG4gICAgXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcclxuICAgIHRpdGxlLmlubmVyVGV4dCA9IHRvZG8udGl0bGU7XHJcbiAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBjb25zdCB0aGlzQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgYFtkYXRhLXByb2plY3QtaWR4PVwiJHtwcm9qZWN0SWR4fVwiXVtkYXRhLXRvZG8taWR4PVwiJHt0b2RvSWR4fVwiXWBcclxuICAgICAgICApO1xyXG4gICAgICBcclxuICAgICAgICB0aGlzQ2FyZC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcclxuICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IHRvZG8uZGVzY3JpcHRpb247XHJcblxyXG4gICAgY29uc3QgY2hlY2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgY2hlY2tzLmNsYXNzTGlzdC5hZGQoXCJjaGVja2xpc3RcIik7XHJcblxyXG4gICAgdG9kby5jaGVja3MuZm9yRWFjaCgoY2hlY2ssaSkgPT4ge1xyXG4gICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG5cclxuICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICAgIGNoZWNrYm94LmlkID0gYCR7dG9kby50aXRsZX0tJHtpfWA7XHJcbiAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBjaGVjay5pc0RvbmU7XHJcblxyXG4gICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgbGFiZWwuaHRtbEZvciA9IGNoZWNrYm94LmlkO1xyXG4gICAgICBsYWJlbC5pbm5lclRleHQgPSBjaGVjay50YXNrO1xyXG5cclxuICAgICAgdGFzay5hcHBlbmQoY2hlY2tib3gsIGxhYmVsKTtcclxuXHJcbiAgICAgIGNoZWNrcy5hcHBlbmRDaGlsZCh0YXNrKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBjYXJkLmFwcGVuZChkcmFnLCB0aXRsZSwgZWRpdEJ0bnMsIGRlc2NyaXB0aW9uLCBjaGVja3MpO1xyXG5cclxuICAgIHJldHVybiBjYXJkO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGxhY2VDYXJkcyhwcm9qZWN0cyl7XHJcbiAgICBcclxuXHJcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBwcm9qZWN0SWR4KSA9PiB7XHJcbiAgICAgIGNvbnN0IHByb2plY3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgcHJvamVjdEl0ZW0uZGF0YXNldC5pZHggPSBwcm9qZWN0SWR4O1xyXG4gICAgICBwcm9qZWN0SXRlbS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pdGVtXCIpO1xyXG5cclxuICAgICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICAgIGgxLmlubmVyVGV4dCA9IHByb2plY3QudGl0bGU7XHJcbiAgICAgIHByb2plY3RJdGVtLmFwcGVuZENoaWxkKGgxKTtcclxuXHJcbiAgICAgIHByb2plY3QudG9kb3MuZm9yRWFjaCgodG9kbywgdG9kb0lkeCkgPT4ge1xyXG4gICAgICAgIHByb2plY3RJdGVtLmFwcGVuZENoaWxkKHBsYWNlQ2FyZCh0b2RvLCBwcm9qZWN0SWR4LCB0b2RvSWR4KSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbWFpbi5hcHBlbmRDaGlsZChwcm9qZWN0SXRlbSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gICAgXHJcbiAgcmV0dXJuIHsgcGxhY2VDYXJkcyB9O1xyXG59KSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==