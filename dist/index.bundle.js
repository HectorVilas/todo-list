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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --bgc-page: lavender;\r\n  --card-shadow: .25rem .25rem .25rem rgba(0,0,0,.1),\r\n    inset .25rem .25rem .25rem rgba(255,255,255,.5);\r\n  --icon-size: 30px;\r\n  --icon-check-size: 20px;\r\n  --txt-col-1: #000;\r\n  --txt-col-2: #444;\r\n  --txt-col-3: #666;\r\n  --card-border-rad: .75rem;\r\n}\r\n\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n  background-color: var(--bgc-page);\r\n}\r\n\r\nol, ul { padding: 0; margin: 0; list-style-type: none; }\r\n\r\nh1, h2, p {margin: 0;}\r\nh1 {font-size: 3rem;}\r\n\r\n#main {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  padding: .5rem;\r\n  overflow: hidden;\r\n  overflow-y: auto;\r\n}\r\n\r\n.project-item {\r\n  box-sizing: border-box;\r\n  padding: 1rem;\r\n  margin: 1rem;\r\n  box-shadow: var(--card-shadow);\r\n}\r\n\r\n\r\n\r\n/* cards */\r\n\r\n.card {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  box-shadow: var(--card-shadow);\r\n  padding: .5rem;\r\n  display: grid;\r\n  grid-template-columns: auto 1fr auto;\r\n  grid-template-rows: repeat(3, auto);\r\n  grid-template-areas:\r\n    \" drag  title edit  \"\r\n    \" ..... descr descr \"\r\n    \" ..... tasks tasks \";\r\n  gap: 1rem;\r\n  align-items: center;\r\n  overflow: hidden;\r\n  height: calc(var(--icon-size) * 1.75) ;\r\n} .card.active {\r\n  height: auto;\r\n  box-shadow: inset 0 0 5rem hsl(240, 70%, 90%);\r\n} .card:not(.active):hover {\r\n  background-color: rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n.card:first-of-type { border-radius: var(--card-border-rad) var(--card-border-rad) 0 0; }\r\n.card:last-of-type { border-radius: 0 0 var(--card-border-rad) var(--card-border-rad); }\r\n\r\n.card .title {\r\n  font-size: 2rem;\r\n  color: var(--txt-col-1);\r\n  cursor: pointer;\r\n} .card .description {\r\n  grid-area: descr;\r\n  font-size: 1.5rem;\r\n  color: var(--txt-col-2);\r\n} .card .checklist {\r\n  grid-area: tasks;\r\n  display: grid;\r\n  gap: .25rem;\r\n}\r\n\r\n.card input[type=\"checkbox\"] {\r\n  position: relative;\r\n  width: var(--icon-size);\r\n  height: var(--icon-size);\r\n  appearance: none;\r\n}\r\n.card input[type=\"checkbox\"]::before {\r\n  position: absolute;\r\n  content: \"\";\r\n  inset: 0;\r\n  background-color: rgba(0,0,0,.03);\r\n  box-shadow: .1rem .1rem .1rem white,\r\n    inset .1rem .1rem .25rem rgba(0,0,0,.1);\r\n  border-radius: .25rem;\r\n}\r\n.card input[type=\"checkbox\"]::after {\r\n  --check-anim-duration: 200ms;\r\n  position: absolute;\r\n  content: \"\";\r\n  inset: -7px;\r\n  background-color: red;\r\n  clip-path: polygon(0 75%, 15% 60%, 15% 61%, 16% 62%, 18% 65%, 4% 78%, 1% 75%);\r\n  animation: checkmark-backwards var(--check-anim-duration) ease-out forwards;\r\n}\r\n.card input[type=\"checkbox\"]:checked::after {\r\n  animation: checkmark-forwards var(--check-anim-duration) ease-in forwards;\r\n}\r\n@keyframes checkmark-forwards {\r\n  0% {opacity: 0;}\r\n  1% {opacity: 1; clip-path: polygon(0 75%, 15% 60%, 15% 61%, 16% 62%, 18% 65%, 4% 78%);}\r\n  30% {clip-path: polygon(0 75%, 15% 60%, 21% 66%, 26% 70%, 31% 76%, 9% 86%);}\r\n  50% {clip-path: polygon(0 75%, 15% 60%, 35% 75%, 43% 81%, 49% 88%, 40% 100%);}\r\n  100% {clip-path: polygon(0 75%, 15% 60%, 35% 75%, 85% 0, 100% 10%, 40% 100%);}\r\n} @keyframes checkmark-backwards {\r\n  0% {clip-path: polygon(0 75%, 15% 60%, 35% 75%, 85% 0, 100% 10%, 40% 100%);}\r\n  50% {clip-path: polygon(0 75%, 15% 60%, 35% 75%, 43% 81%, 49% 88%, 40% 100%);}\r\n  70% {clip-path: polygon(0 75%, 15% 60%, 21% 66%, 26% 70%, 31% 76%, 9% 86%);}\r\n  99% {opacity: 1; clip-path: polygon(0 75%, 15% 60%, 15% 61%, 16% 62%, 18% 65%, 4% 78%);}\r\n  100% {opacity: 0;}\r\n}\r\n\r\n.card label {\r\n  font-size: 1.25rem;\r\n  color: var(--txt-col-2);\r\n  background: linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.5), transparent 100%) no-repeat;\r\n  background-size: 100%;\r\n  transition: background-position 500ms;\r\n  background-position-x: -100vw;\r\n  cursor: pointer;\r\n}\r\n.card input[type=\"checkbox\"]:checked + label {\r\n  text-decoration: line-through;\r\n  color: var(--txt-col-3);\r\n  background-position-x: 100vw;\r\n}\r\n\r\n.card[data-priority=\"low\"] {\r\n  background: linear-gradient(to right,lime, rgba(0, 128, 0, 0) 60px);\r\n} .card[data-priority=\"low\"].active {\r\n  background: linear-gradient(to bottom,lime, rgba(0, 128, 0, 0) 60px);\r\n}\r\n.card[data-priority=\"middle\"] {\r\n  background: linear-gradient(to right, goldenrod, rgba(0, 128, 0, 0) 60px);\r\n} .card[data-priority=\"middle\"].active {\r\n  background: linear-gradient(to bottom, goldenrod, rgba(0, 128, 0, 0) 60px);\r\n}\r\n.card[data-priority=\"high\"] {\r\n  background: linear-gradient(to right, orangered, rgba(0, 128, 0, 0) 60px);\r\n} .card[data-priority=\"high\"].active {\r\n  background: linear-gradient(to bottom, orangered, rgba(0, 128, 0, 0) 60px);\r\n}\r\n\r\n\r\n\r\n/* card icons */\r\n.card-icon { width: var(--icon-size); }\r\n.card-icon:hover { cursor: pointer; }\r\n.card ul li {\r\n  display: grid;\r\n  grid-template-columns: auto 1fr auto auto;\r\n  gap: .5rem;\r\n}\r\n.edit-buttons {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: .5rem;\r\n}\r\n\r\n.delete-icon {\r\n  position: relative;\r\n  width: var(--icon-size);\r\n}.icon-trash,\r\n.icon-trash-lid {\r\n  position: absolute;\r\n  transition: rotate 500ms;\r\n}\r\n.icon-trash { transform-origin: 100% 0%;}\r\n.icon-trash-lid { transform-origin: 250% 0%;}\r\n.delete-icon:hover .icon-trash { rotate: -10deg;}\r\n.delete-icon:hover .icon-trash-lid { rotate: 10deg; }\r\n\r\n.card-icon.icon-edit:hover {\r\n  animation: edit-shake 300ms;\r\n  transform-origin: 0% 100%;\r\n}\r\n@keyframes edit-shake {\r\n  0%, 100% { rotate: 0deg;}\r\n  10% { rotate: 5deg;}\r\n  20% { rotate: -5deg;}\r\n  30% { rotate: 4deg;}\r\n  40% { rotate: -4deg;}\r\n  50% { rotate: 3deg;}\r\n  60% { rotate: -3deg;}\r\n  70% { rotate: 2deg;}\r\n  80% { rotate: -2deg;}\r\n  90% { rotate: 1deg;}\r\n}\r\n\r\n.card-icon.icon-fav:hover{\r\n  animation: fav-spin 300ms;\r\n  transform-origin: 50% 55%;\r\n}\r\n@keyframes fav-spin { to {rotate: 72deg;} }\r\n\r\n.card-icon.icon-fav.shake {\r\n  animation: star-shake 300ms;\r\n}\r\n@keyframes star-shake {\r\n  0%, 100% {\r\n    rotate: 0deg;\r\n    filter: drop-shadow(0 0 5px goldenrod)\r\n      brightness(150%);\r\n  }\r\n  10% { rotate: 10deg;}\r\n  20% { rotate: -10deg;}\r\n  30% { rotate: 8deg;}\r\n  40% { rotate: -8deg;}\r\n  50% { rotate: 6deg;}\r\n  60% { rotate: -6deg;}\r\n  70% { rotate: 4deg;}\r\n  80% { rotate: -4deg;}\r\n  90% { rotate: 2deg;}\r\n}\r\n\r\n.check-icon.icon-edit {\r\n  width: var(--icon-check-size);\r\n}\r\n\r\n/*for testing*/\r\n/* * {\r\n  outline: 1px solid gray;\r\n} */", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n  --bgc-page: lavender;\r\n  --card-shadow: .25rem .25rem .25rem rgba(0,0,0,.1),\r\n    inset .25rem .25rem .25rem rgba(255,255,255,.5);\r\n  --icon-size: 30px;\r\n  --icon-check-size: 20px;\r\n  --txt-col-1: #000;\r\n  --txt-col-2: #444;\r\n  --txt-col-3: #666;\r\n  --card-border-rad: .75rem;\r\n}\r\n\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n  background-color: var(--bgc-page);\r\n}\r\n\r\nol, ul { padding: 0; margin: 0; list-style-type: none; }\r\n\r\nh1, h2, p {margin: 0;}\r\nh1 {font-size: 3rem;}\r\n\r\n#main {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  padding: .5rem;\r\n  overflow: hidden;\r\n  overflow-y: auto;\r\n}\r\n\r\n.project-item {\r\n  box-sizing: border-box;\r\n  padding: 1rem;\r\n  margin: 1rem;\r\n  box-shadow: var(--card-shadow);\r\n}\r\n\r\n\r\n\r\n/* cards */\r\n\r\n.card {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  box-shadow: var(--card-shadow);\r\n  padding: .5rem;\r\n  display: grid;\r\n  grid-template-columns: auto 1fr auto;\r\n  grid-template-rows: repeat(3, auto);\r\n  grid-template-areas:\r\n    \" drag  title edit  \"\r\n    \" ..... descr descr \"\r\n    \" ..... tasks tasks \";\r\n  gap: 1rem;\r\n  align-items: center;\r\n  overflow: hidden;\r\n  height: calc(var(--icon-size) * 1.75) ;\r\n} .card.active {\r\n  height: auto;\r\n  box-shadow: inset 0 0 5rem hsl(240, 70%, 90%);\r\n} .card:not(.active):hover {\r\n  background-color: rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n.card:first-of-type { border-radius: var(--card-border-rad) var(--card-border-rad) 0 0; }\r\n.card:last-of-type { border-radius: 0 0 var(--card-border-rad) var(--card-border-rad); }\r\n\r\n.card .title {\r\n  font-size: 2rem;\r\n  color: var(--txt-col-1);\r\n  cursor: pointer;\r\n} .card .description {\r\n  grid-area: descr;\r\n  font-size: 1.5rem;\r\n  color: var(--txt-col-2);\r\n} .card .checklist {\r\n  grid-area: tasks;\r\n  display: grid;\r\n  gap: .25rem;\r\n}\r\n\r\n.card input[type=\"checkbox\"] {\r\n  position: relative;\r\n  width: var(--icon-size);\r\n  height: var(--icon-size);\r\n  appearance: none;\r\n}\r\n.card input[type=\"checkbox\"]::before {\r\n  position: absolute;\r\n  content: \"\";\r\n  inset: 0;\r\n  background-color: rgba(0,0,0,.03);\r\n  box-shadow: .1rem .1rem .1rem white,\r\n    inset .1rem .1rem .25rem rgba(0,0,0,.1);\r\n  border-radius: .25rem;\r\n}\r\n.card input[type=\"checkbox\"]::after {\r\n  --check-anim-duration: 200ms;\r\n  position: absolute;\r\n  content: \"\";\r\n  inset: -7px;\r\n  background-color: red;\r\n  clip-path: polygon(0 75%, 15% 60%, 15% 61%, 16% 62%, 18% 65%, 4% 78%, 1% 75%);\r\n  animation: checkmark-backwards var(--check-anim-duration) ease-out forwards;\r\n}\r\n.card input[type=\"checkbox\"]:checked::after {\r\n  animation: checkmark-forwards var(--check-anim-duration) ease-in forwards;\r\n}\r\n@keyframes checkmark-forwards {\r\n  0% {opacity: 0;}\r\n  1% {opacity: 1; clip-path: polygon(0 75%, 15% 60%, 15% 61%, 16% 62%, 18% 65%, 4% 78%);}\r\n  30% {clip-path: polygon(0 75%, 15% 60%, 21% 66%, 26% 70%, 31% 76%, 9% 86%);}\r\n  50% {clip-path: polygon(0 75%, 15% 60%, 35% 75%, 43% 81%, 49% 88%, 40% 100%);}\r\n  100% {clip-path: polygon(0 75%, 15% 60%, 35% 75%, 85% 0, 100% 10%, 40% 100%);}\r\n} @keyframes checkmark-backwards {\r\n  0% {clip-path: polygon(0 75%, 15% 60%, 35% 75%, 85% 0, 100% 10%, 40% 100%);}\r\n  50% {clip-path: polygon(0 75%, 15% 60%, 35% 75%, 43% 81%, 49% 88%, 40% 100%);}\r\n  70% {clip-path: polygon(0 75%, 15% 60%, 21% 66%, 26% 70%, 31% 76%, 9% 86%);}\r\n  99% {opacity: 1; clip-path: polygon(0 75%, 15% 60%, 15% 61%, 16% 62%, 18% 65%, 4% 78%);}\r\n  100% {opacity: 0;}\r\n}\r\n\r\n.card label {\r\n  font-size: 1.25rem;\r\n  color: var(--txt-col-2);\r\n  background: linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.5), transparent 100%) no-repeat;\r\n  background-size: 100%;\r\n  transition: background-position 500ms;\r\n  background-position-x: -100vw;\r\n  cursor: pointer;\r\n}\r\n.card input[type=\"checkbox\"]:checked + label {\r\n  text-decoration: line-through;\r\n  color: var(--txt-col-3);\r\n  background-position-x: 100vw;\r\n}\r\n\r\n.card[data-priority=\"low\"] {\r\n  background: linear-gradient(to right,lime, rgba(0, 128, 0, 0) 60px);\r\n} .card[data-priority=\"low\"].active {\r\n  background: linear-gradient(to bottom,lime, rgba(0, 128, 0, 0) 60px);\r\n}\r\n.card[data-priority=\"middle\"] {\r\n  background: linear-gradient(to right, goldenrod, rgba(0, 128, 0, 0) 60px);\r\n} .card[data-priority=\"middle\"].active {\r\n  background: linear-gradient(to bottom, goldenrod, rgba(0, 128, 0, 0) 60px);\r\n}\r\n.card[data-priority=\"high\"] {\r\n  background: linear-gradient(to right, orangered, rgba(0, 128, 0, 0) 60px);\r\n} .card[data-priority=\"high\"].active {\r\n  background: linear-gradient(to bottom, orangered, rgba(0, 128, 0, 0) 60px);\r\n}\r\n\r\n\r\n\r\n/* card icons */\r\n.card-icon { width: var(--icon-size); }\r\n.card-icon:hover { cursor: pointer; }\r\n.card ul li {\r\n  display: grid;\r\n  grid-template-columns: auto 1fr auto auto;\r\n  gap: .5rem;\r\n}\r\n.edit-buttons {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: .5rem;\r\n}\r\n\r\n.delete-icon {\r\n  position: relative;\r\n  width: var(--icon-size);\r\n}.icon-trash,\r\n.icon-trash-lid {\r\n  position: absolute;\r\n  transition: rotate 500ms;\r\n}\r\n.icon-trash { transform-origin: 100% 0%;}\r\n.icon-trash-lid { transform-origin: 250% 0%;}\r\n.delete-icon:hover .icon-trash { rotate: -10deg;}\r\n.delete-icon:hover .icon-trash-lid { rotate: 10deg; }\r\n\r\n.card-icon.icon-edit:hover {\r\n  animation: edit-shake 300ms;\r\n  transform-origin: 0% 100%;\r\n}\r\n@keyframes edit-shake {\r\n  0%, 100% { rotate: 0deg;}\r\n  10% { rotate: 5deg;}\r\n  20% { rotate: -5deg;}\r\n  30% { rotate: 4deg;}\r\n  40% { rotate: -4deg;}\r\n  50% { rotate: 3deg;}\r\n  60% { rotate: -3deg;}\r\n  70% { rotate: 2deg;}\r\n  80% { rotate: -2deg;}\r\n  90% { rotate: 1deg;}\r\n}\r\n\r\n.card-icon.icon-fav:hover{\r\n  animation: fav-spin 300ms;\r\n  transform-origin: 50% 55%;\r\n}\r\n@keyframes fav-spin { to {rotate: 72deg;} }\r\n\r\n.card-icon.icon-fav.shake {\r\n  animation: star-shake 300ms;\r\n}\r\n@keyframes star-shake {\r\n  0%, 100% {\r\n    rotate: 0deg;\r\n    filter: drop-shadow(0 0 5px goldenrod)\r\n      brightness(150%);\r\n  }\r\n  10% { rotate: 10deg;}\r\n  20% { rotate: -10deg;}\r\n  30% { rotate: 8deg;}\r\n  40% { rotate: -8deg;}\r\n  50% { rotate: 6deg;}\r\n  60% { rotate: -6deg;}\r\n  70% { rotate: 4deg;}\r\n  80% { rotate: -4deg;}\r\n  90% { rotate: 2deg;}\r\n}\r\n\r\n.check-icon.icon-edit {\r\n  width: var(--icon-check-size);\r\n}\r\n\r\n/*for testing*/\r\n/* * {\r\n  outline: 1px solid gray;\r\n} */"],"sourceRoot":""}]);
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




//for testing

window.addEventListener("keydown", (e) => {
  if(e.key === "r"){
    _modules_ui_js__WEBPACK_IMPORTED_MODULE_1__.ui.placeCards(_modules_ui_js__WEBPACK_IMPORTED_MODULE_1__.localStorageTest);
    console.log("replacing main");
  };
});


//run on load
_modules_ui_js__WEBPACK_IMPORTED_MODULE_1__.ui.placeCards(_modules_ui_js__WEBPACK_IMPORTED_MODULE_1__.localStorageTest);


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
    checks, priority, isFavorite, isPinned){
    this.title = title;
    this.description = description;
    this.dateCreation = dateCreation;
    this.dateDue = dateDue;
    this.checks = checks;
    this.priority = priority;
    this.isFavorite = isFavorite;
    this.isPinned = isPinned;
  };
  
  toggleFav(){
    this.isFavorite = !this.isFavorite;
  };

  toggleTask(idx){
    this.checks[idx].isDone = !this.checks[idx].isDone;
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
/* harmony export */   "localStorageTest": () => (/* binding */ localStorageTest),
/* harmony export */   "ui": () => (/* binding */ ui)
/* harmony export */ });
/* harmony import */ var _media_images_icons_checkmark_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../media/images/icons/checkmark.svg */ "./src/media/images/icons/checkmark.svg");
/* harmony import */ var _media_images_icons_drag_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../media/images/icons/drag.svg */ "./src/media/images/icons/drag.svg");
/* harmony import */ var _media_images_icons_edit_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../media/images/icons/edit.svg */ "./src/media/images/icons/edit.svg");
/* harmony import */ var _media_images_icons_trash_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../media/images/icons/trash.svg */ "./src/media/images/icons/trash.svg");
/* harmony import */ var _media_images_icons_trash_lid_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../media/images/icons/trash-lid.svg */ "./src/media/images/icons/trash-lid.svg");
/* harmony import */ var _media_images_icons_fav_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../media/images/icons/fav.svg */ "./src/media/images/icons/fav.svg");
/* harmony import */ var _media_images_icons_fav_active_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../media/images/icons/fav-active.svg */ "./src/media/images/icons/fav-active.svg");
/* harmony import */ var _modules_classes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/classes.js */ "./src/modules/classes.js");








//for testing

const localStorageTest = [
  {
    title: "routine",
    todos: [
      new _modules_classes_js__WEBPACK_IMPORTED_MODULE_7__.Todo("exercise", "It's leg day!", "2022-11-23T17:42", null, [
        { task: "run 3km", isDone: true },
        { task: "bicycle", isDone: false },
        { task: "squats", isDone: false },
      ], "low", false, false),

      new _modules_classes_js__WEBPACK_IMPORTED_MODULE_7__.Todo("coding", null, "2022-11-23T17:42", null, [
        { task: "check css-tricks", isDone: true },
        { task: "continue TOP practice", isDone: true },
      ], "high", true, true),
    ],
  },
  {
    title: "test",
    todos: [
      new _modules_classes_js__WEBPACK_IMPORTED_MODULE_7__.Todo("test1", "test1 descr", "2022-11-23T17:42","2023-11-23T17:42", [
        { task: "test1 task1", isDone: true },
        { task: "test1 task2", isDone: false },
        { task: "test1 task3", isDone: true },
      ], "low", true, false),

      new _modules_classes_js__WEBPACK_IMPORTED_MODULE_7__.Todo("test2", "test2 descr", "2022-11-23T17:42", "2023-11-23T17:42", [
        { task: "test2 task1", isDone: true },
        { task: "test2 task2", isDone: false },
        { task: "test2 task3", isDone: true },
        { task: "test2 task4", isDone: false },
        { task: "test2 task5", isDone: false },
      ], "middle", true, false),
      new _modules_classes_js__WEBPACK_IMPORTED_MODULE_7__.Todo("test3", "test3 descr", "2022-11-23T17:42", "2023-11-23T17:42", [
        { task: "test3 task1", isDone: true },
        { task: "test3 task2", isDone: true },
        { task: "test3 task3", isDone: false },
        { task: "test3 task4", isDone: false },
        { task: "test3 task5", isDone: true },
      ], "low", false, true),
      new _modules_classes_js__WEBPACK_IMPORTED_MODULE_7__.Todo("test4", "test4 descr", "2022-11-23T17:42", "2023-11-23T17:42", [
        { task: "test4 task1", isDone: false },
        { task: "test4 task2", isDone: false },
        { task: "test4 task3", isDone: true },
        { task: "test4 task4", isDone: false },
        { task: "test4 task5", isDone: true },
      ], "low", true, false),
      new _modules_classes_js__WEBPACK_IMPORTED_MODULE_7__.Todo("test5", "test5 descr", "2022-11-23T17:42", "2023-11-23T17:42", [
        { task: "test5 task1", isDone: false },
        { task: "test5 task2", isDone: true },
        { task: "test5 task3", isDone: true },
        { task: "test5 task4", isDone: false },
        { task: "test5 task5", isDone: true },
      ], "high", false, false),
    ],
  },
];




const ui = (() => {
  const body = document.querySelector("body");
  const main = document.querySelector("#main");

  function placeCard(todo, projectIdx, todoIdx){
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.priority = todo.priority;

    const drag = document.createElement("img");
    drag.classList.add("card-icon", "icon-drag");
    drag.src = _media_images_icons_drag_svg__WEBPACK_IMPORTED_MODULE_1__;
    drag.addEventListener("mousedown", cardDrag);

    const editBtns = document.createElement("div");
    editBtns.classList.add("edit-buttons");
    const edit = document.createElement("img");
    edit.classList.add("card-icon", "icon-edit");
    edit.src = _media_images_icons_edit_svg__WEBPACK_IMPORTED_MODULE_2__;
    edit.addEventListener("click", cardEdit);

    const fav = document.createElement("img");
    fav.classList.add("card-icon", "icon-fav");
    fav.src = todo.isFavorite ? _media_images_icons_fav_active_svg__WEBPACK_IMPORTED_MODULE_6__ : _media_images_icons_fav_svg__WEBPACK_IMPORTED_MODULE_5__;
    fav.addEventListener("click", cardFavToggle);
    fav.addEventListener("animationend", (e) => {
      if(e.animationName === "star-shake") {
        e.target.classList.remove("shake");
      };
    })

    const deleteIcon = document.createElement("div");
    deleteIcon.classList.add("delete-icon");
    deleteIcon.addEventListener("click", cardDelete);

    const trash = document.createElement("img");
    trash.classList.add("card-icon", "icon-trash");
    trash.src = _media_images_icons_trash_svg__WEBPACK_IMPORTED_MODULE_3__;
    const trashLid = document.createElement("img");
    trashLid.classList.add("card-icon", "icon-trash-lid");
    trashLid.src = _media_images_icons_trash_lid_svg__WEBPACK_IMPORTED_MODULE_4__;
    
    deleteIcon.append(trash, trashLid);
    editBtns.append(edit, fav, deleteIcon);

    [card,drag,edit,fav,deleteIcon].forEach(icon => {
      icon.dataset.projectIdx = projectIdx;
      icon.dataset.todoIdx = todoIdx;
    });
    
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
      checkbox.id = `${todo.title}-${i}`; //for label only
      checkbox.dataset.projectIdx = projectIdx;
      checkbox.dataset.todoIdx = todoIdx;
      checkbox.dataset.taskIdx = i;

      checkbox.checked = check.isDone;
      checkbox.addEventListener("click", taskCheckToggle);

      const label = document.createElement("label");
      label.htmlFor = checkbox.id;
      label.innerText = check.task;

      const editCheck = document.createElement("img");
      editCheck.src = _media_images_icons_edit_svg__WEBPACK_IMPORTED_MODULE_2__;
      editCheck.classList.add("card-icon", "check-icon", "icon-edit");
      editCheck.addEventListener("click", toggleCheckEdit);

      task.append(checkbox, label, editCheck);

      checks.appendChild(task);

    });

    card.append(drag, title, editBtns, description, checks);

    return card;
  }

  function placeCards(projects){

    main.replaceChildren()
    

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

  function cardDrag(){
    console.log(`dragging project ${this.dataset.projectIdx
    } - todo ${this.dataset.todoIdx}`);
  }

  function cardEdit(){
    console.log(`editing project ${this.dataset.projectIdx
    } - todo ${this.dataset.todoIdx}`);
  }

  function toggleCheckEdit(){
    console.log("edit check");
  }

  function cardFavToggle(){
    const projectIdx = this.dataset.projectIdx;
    const todoIdx = this.dataset.todoIdx;
    localStorageTest[projectIdx].todos[todoIdx].toggleFav();
    
    //toggle star icon
    const isFav = localStorageTest[projectIdx].todos[todoIdx].isFavorite;
    this.src = isFav ? _media_images_icons_fav_active_svg__WEBPACK_IMPORTED_MODULE_6__ : _media_images_icons_fav_svg__WEBPACK_IMPORTED_MODULE_5__;
  }

  function cardDelete(){
    const projectIdx = this.dataset.projectIdx;
    const todoIdx = this.dataset.todoIdx;

    const isFav = localStorageTest[projectIdx].todos[todoIdx].isFavorite;
    if(isFav) {
      const thisCardStar = document.querySelector(`[data-project-idx="${
        projectIdx}"][data-todo-idx="${todoIdx}"] .icon-fav`);
      thisCardStar.classList.add("shake");
      return;
    };

    console.log(`delete project ${projectIdx} - todo ${todoIdx}`);
    localStorageTest[projectIdx].todos.splice(todoIdx,1);
    placeCards(localStorageTest);
  }

  function taskCheckToggle(){
    localStorageTest[this.dataset.projectIdx]
    .todos[this.dataset.todoIdx].toggleTask(this.dataset.taskIdx);
  }
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy91aS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gIC0tYmdjLXBhZ2U6IGxhdmVuZGVyO1xcclxcbiAgLS1jYXJkLXNoYWRvdzogLjI1cmVtIC4yNXJlbSAuMjVyZW0gcmdiYSgwLDAsMCwuMSksXFxyXFxuICAgIGluc2V0IC4yNXJlbSAuMjVyZW0gLjI1cmVtIHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xcclxcbiAgLS1pY29uLXNpemU6IDMwcHg7XFxyXFxuICAtLWljb24tY2hlY2stc2l6ZTogMjBweDtcXHJcXG4gIC0tdHh0LWNvbC0xOiAjMDAwO1xcclxcbiAgLS10eHQtY29sLTI6ICM0NDQ7XFxyXFxuICAtLXR4dC1jb2wtMzogIzY2NjtcXHJcXG4gIC0tY2FyZC1ib3JkZXItcmFkOiAuNzVyZW07XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnYy1wYWdlKTtcXHJcXG59XFxyXFxuXFxyXFxub2wsIHVsIHsgcGFkZGluZzogMDsgbWFyZ2luOiAwOyBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IH1cXHJcXG5cXHJcXG5oMSwgaDIsIHAge21hcmdpbjogMDt9XFxyXFxuaDEge2ZvbnQtc2l6ZTogM3JlbTt9XFxyXFxuXFxyXFxuI21haW4ge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1pdGVtIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgbWFyZ2luOiAxcmVtO1xcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1zaGFkb3cpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBjYXJkcyAqL1xcclxcblxcclxcbi5jYXJkIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93KTtcXHJcXG4gIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIGF1dG8pO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgXFxcIiBkcmFnICB0aXRsZSBlZGl0ICBcXFwiXFxyXFxuICAgIFxcXCIgLi4uLi4gZGVzY3IgZGVzY3IgXFxcIlxcclxcbiAgICBcXFwiIC4uLi4uIHRhc2tzIHRhc2tzIFxcXCI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1pY29uLXNpemUpICogMS43NSkgO1xcclxcbn0gLmNhcmQuYWN0aXZlIHtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cmVtIGhzbCgyNDAsIDcwJSwgOTAlKTtcXHJcXG59IC5jYXJkOm5vdCguYWN0aXZlKTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxyXFxufVxcclxcblxcclxcbi5jYXJkOmZpcnN0LW9mLXR5cGUgeyBib3JkZXItcmFkaXVzOiB2YXIoLS1jYXJkLWJvcmRlci1yYWQpIHZhcigtLWNhcmQtYm9yZGVyLXJhZCkgMCAwOyB9XFxyXFxuLmNhcmQ6bGFzdC1vZi10eXBlIHsgYm9yZGVyLXJhZGl1czogMCAwIHZhcigtLWNhcmQtYm9yZGVyLXJhZCkgdmFyKC0tY2FyZC1ib3JkZXItcmFkKTsgfVxcclxcblxcclxcbi5jYXJkIC50aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbC0xKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59IC5jYXJkIC5kZXNjcmlwdGlvbiB7XFxyXFxuICBncmlkLWFyZWE6IGRlc2NyO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbC0yKTtcXHJcXG59IC5jYXJkIC5jaGVja2xpc3Qge1xcclxcbiAgZ3JpZC1hcmVhOiB0YXNrcztcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBnYXA6IC4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogdmFyKC0taWNvbi1zaXplKTtcXHJcXG4gIGhlaWdodDogdmFyKC0taWNvbi1zaXplKTtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcbi5jYXJkIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmJlZm9yZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIGluc2V0OiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMDMpO1xcclxcbiAgYm94LXNoYWRvdzogLjFyZW0gLjFyZW0gLjFyZW0gd2hpdGUsXFxyXFxuICAgIGluc2V0IC4xcmVtIC4xcmVtIC4yNXJlbSByZ2JhKDAsMCwwLC4xKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcXHJcXG59XFxyXFxuLmNhcmQgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YWZ0ZXIge1xcclxcbiAgLS1jaGVjay1hbmltLWR1cmF0aW9uOiAyMDBtcztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgaW5zZXQ6IC03cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICBjbGlwLXBhdGg6IHBvbHlnb24oMCA3NSUsIDE1JSA2MCUsIDE1JSA2MSUsIDE2JSA2MiUsIDE4JSA2NSUsIDQlIDc4JSwgMSUgNzUlKTtcXHJcXG4gIGFuaW1hdGlvbjogY2hlY2ttYXJrLWJhY2t3YXJkcyB2YXIoLS1jaGVjay1hbmltLWR1cmF0aW9uKSBlYXNlLW91dCBmb3J3YXJkcztcXHJcXG59XFxyXFxuLmNhcmQgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkOjphZnRlciB7XFxyXFxuICBhbmltYXRpb246IGNoZWNrbWFyay1mb3J3YXJkcyB2YXIoLS1jaGVjay1hbmltLWR1cmF0aW9uKSBlYXNlLWluIGZvcndhcmRzO1xcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGNoZWNrbWFyay1mb3J3YXJkcyB7XFxyXFxuICAwJSB7b3BhY2l0eTogMDt9XFxyXFxuICAxJSB7b3BhY2l0eTogMTsgY2xpcC1wYXRoOiBwb2x5Z29uKDAgNzUlLCAxNSUgNjAlLCAxNSUgNjElLCAxNiUgNjIlLCAxOCUgNjUlLCA0JSA3OCUpO31cXHJcXG4gIDMwJSB7Y2xpcC1wYXRoOiBwb2x5Z29uKDAgNzUlLCAxNSUgNjAlLCAyMSUgNjYlLCAyNiUgNzAlLCAzMSUgNzYlLCA5JSA4NiUpO31cXHJcXG4gIDUwJSB7Y2xpcC1wYXRoOiBwb2x5Z29uKDAgNzUlLCAxNSUgNjAlLCAzNSUgNzUlLCA0MyUgODElLCA0OSUgODglLCA0MCUgMTAwJSk7fVxcclxcbiAgMTAwJSB7Y2xpcC1wYXRoOiBwb2x5Z29uKDAgNzUlLCAxNSUgNjAlLCAzNSUgNzUlLCA4NSUgMCwgMTAwJSAxMCUsIDQwJSAxMDAlKTt9XFxyXFxufSBAa2V5ZnJhbWVzIGNoZWNrbWFyay1iYWNrd2FyZHMge1xcclxcbiAgMCUge2NsaXAtcGF0aDogcG9seWdvbigwIDc1JSwgMTUlIDYwJSwgMzUlIDc1JSwgODUlIDAsIDEwMCUgMTAlLCA0MCUgMTAwJSk7fVxcclxcbiAgNTAlIHtjbGlwLXBhdGg6IHBvbHlnb24oMCA3NSUsIDE1JSA2MCUsIDM1JSA3NSUsIDQzJSA4MSUsIDQ5JSA4OCUsIDQwJSAxMDAlKTt9XFxyXFxuICA3MCUge2NsaXAtcGF0aDogcG9seWdvbigwIDc1JSwgMTUlIDYwJSwgMjElIDY2JSwgMjYlIDcwJSwgMzElIDc2JSwgOSUgODYlKTt9XFxyXFxuICA5OSUge29wYWNpdHk6IDE7IGNsaXAtcGF0aDogcG9seWdvbigwIDc1JSwgMTUlIDYwJSwgMTUlIDYxJSwgMTYlIDYyJSwgMTglIDY1JSwgNCUgNzglKTt9XFxyXFxuICAxMDAlIHtvcGFjaXR5OiAwO31cXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgbGFiZWwge1xcclxcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2wtMik7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHRyYW5zcGFyZW50IDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksIHRyYW5zcGFyZW50IDEwMCUpIG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gNTAwbXM7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IC0xMDB2dztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmNhcmQgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWwge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbC0zKTtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogMTAwdnc7XFxyXFxufVxcclxcblxcclxcbi5jYXJkW2RhdGEtcHJpb3JpdHk9XFxcImxvd1xcXCJdIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCxsaW1lLCByZ2JhKDAsIDEyOCwgMCwgMCkgNjBweCk7XFxyXFxufSAuY2FyZFtkYXRhLXByaW9yaXR5PVxcXCJsb3dcXFwiXS5hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSxsaW1lLCByZ2JhKDAsIDEyOCwgMCwgMCkgNjBweCk7XFxyXFxufVxcclxcbi5jYXJkW2RhdGEtcHJpb3JpdHk9XFxcIm1pZGRsZVxcXCJdIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgZ29sZGVucm9kLCByZ2JhKDAsIDEyOCwgMCwgMCkgNjBweCk7XFxyXFxufSAuY2FyZFtkYXRhLXByaW9yaXR5PVxcXCJtaWRkbGVcXFwiXS5hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgZ29sZGVucm9kLCByZ2JhKDAsIDEyOCwgMCwgMCkgNjBweCk7XFxyXFxufVxcclxcbi5jYXJkW2RhdGEtcHJpb3JpdHk9XFxcImhpZ2hcXFwiXSB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIG9yYW5nZXJlZCwgcmdiYSgwLCAxMjgsIDAsIDApIDYwcHgpO1xcclxcbn0gLmNhcmRbZGF0YS1wcmlvcml0eT1cXFwiaGlnaFxcXCJdLmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCBvcmFuZ2VyZWQsIHJnYmEoMCwgMTI4LCAwLCAwKSA2MHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogY2FyZCBpY29ucyAqL1xcclxcbi5jYXJkLWljb24geyB3aWR0aDogdmFyKC0taWNvbi1zaXplKTsgfVxcclxcbi5jYXJkLWljb246aG92ZXIgeyBjdXJzb3I6IHBvaW50ZXI7IH1cXHJcXG4uY2FyZCB1bCBsaSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvIGF1dG87XFxyXFxuICBnYXA6IC41cmVtO1xcclxcbn1cXHJcXG4uZWRpdC1idXR0b25zIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgZ2FwOiAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1pY29uIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiB2YXIoLS1pY29uLXNpemUpO1xcclxcbn0uaWNvbi10cmFzaCxcXHJcXG4uaWNvbi10cmFzaC1saWQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdHJhbnNpdGlvbjogcm90YXRlIDUwMG1zO1xcclxcbn1cXHJcXG4uaWNvbi10cmFzaCB7IHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMCU7fVxcclxcbi5pY29uLXRyYXNoLWxpZCB7IHRyYW5zZm9ybS1vcmlnaW46IDI1MCUgMCU7fVxcclxcbi5kZWxldGUtaWNvbjpob3ZlciAuaWNvbi10cmFzaCB7IHJvdGF0ZTogLTEwZGVnO31cXHJcXG4uZGVsZXRlLWljb246aG92ZXIgLmljb24tdHJhc2gtbGlkIHsgcm90YXRlOiAxMGRlZzsgfVxcclxcblxcclxcbi5jYXJkLWljb24uaWNvbi1lZGl0OmhvdmVyIHtcXHJcXG4gIGFuaW1hdGlvbjogZWRpdC1zaGFrZSAzMDBtcztcXHJcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAlIDEwMCU7XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgZWRpdC1zaGFrZSB7XFxyXFxuICAwJSwgMTAwJSB7IHJvdGF0ZTogMGRlZzt9XFxyXFxuICAxMCUgeyByb3RhdGU6IDVkZWc7fVxcclxcbiAgMjAlIHsgcm90YXRlOiAtNWRlZzt9XFxyXFxuICAzMCUgeyByb3RhdGU6IDRkZWc7fVxcclxcbiAgNDAlIHsgcm90YXRlOiAtNGRlZzt9XFxyXFxuICA1MCUgeyByb3RhdGU6IDNkZWc7fVxcclxcbiAgNjAlIHsgcm90YXRlOiAtM2RlZzt9XFxyXFxuICA3MCUgeyByb3RhdGU6IDJkZWc7fVxcclxcbiAgODAlIHsgcm90YXRlOiAtMmRlZzt9XFxyXFxuICA5MCUgeyByb3RhdGU6IDFkZWc7fVxcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1pY29uLmljb24tZmF2OmhvdmVye1xcclxcbiAgYW5pbWF0aW9uOiBmYXYtc3BpbiAzMDBtcztcXHJcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1NSU7XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgZmF2LXNwaW4geyB0byB7cm90YXRlOiA3MmRlZzt9IH1cXHJcXG5cXHJcXG4uY2FyZC1pY29uLmljb24tZmF2LnNoYWtlIHtcXHJcXG4gIGFuaW1hdGlvbjogc3Rhci1zaGFrZSAzMDBtcztcXHJcXG59XFxyXFxuQGtleWZyYW1lcyBzdGFyLXNoYWtlIHtcXHJcXG4gIDAlLCAxMDAlIHtcXHJcXG4gICAgcm90YXRlOiAwZGVnO1xcclxcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCA1cHggZ29sZGVucm9kKVxcclxcbiAgICAgIGJyaWdodG5lc3MoMTUwJSk7XFxyXFxuICB9XFxyXFxuICAxMCUgeyByb3RhdGU6IDEwZGVnO31cXHJcXG4gIDIwJSB7IHJvdGF0ZTogLTEwZGVnO31cXHJcXG4gIDMwJSB7IHJvdGF0ZTogOGRlZzt9XFxyXFxuICA0MCUgeyByb3RhdGU6IC04ZGVnO31cXHJcXG4gIDUwJSB7IHJvdGF0ZTogNmRlZzt9XFxyXFxuICA2MCUgeyByb3RhdGU6IC02ZGVnO31cXHJcXG4gIDcwJSB7IHJvdGF0ZTogNGRlZzt9XFxyXFxuICA4MCUgeyByb3RhdGU6IC00ZGVnO31cXHJcXG4gIDkwJSB7IHJvdGF0ZTogMmRlZzt9XFxyXFxufVxcclxcblxcclxcbi5jaGVjay1pY29uLmljb24tZWRpdCB7XFxyXFxuICB3aWR0aDogdmFyKC0taWNvbi1jaGVjay1zaXplKTtcXHJcXG59XFxyXFxuXFxyXFxuLypmb3IgdGVzdGluZyovXFxyXFxuLyogKiB7XFxyXFxuICBvdXRsaW5lOiAxcHggc29saWQgZ3JheTtcXHJcXG59ICovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQjttREFDaUQ7RUFDakQsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULGlDQUFpQztBQUNuQzs7QUFFQSxTQUFTLFVBQVUsRUFBRSxTQUFTLEVBQUUscUJBQXFCLEVBQUU7O0FBRXZELFdBQVcsU0FBUyxDQUFDO0FBQ3JCLElBQUksZUFBZSxDQUFDOztBQUVwQjtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsWUFBWTtFQUNaLGFB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LFlBQVksQ0FBQztFQUNuQixNQUFNLGFBQWEsQ0FBQztFQUNwQixNQUFNLFlBQVksQ0FBQztFQUNuQixNQUFNLGFBQWEsQ0FBQztFQUNwQixNQUFNLFlBQVksQ0FBQztBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7QUFDQSxzQkFBc0IsSUFBSSxhQUFhLENBQUMsRUFBRTs7QUFFMUM7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFO0lBQ0UsWUFBWTtJQUNaO3NCQUNrQjtFQUNwQjtFQUNBLE1BQU0sYUFBYSxDQUFDO0VBQ3BCLE1BQU0sY0FBYyxDQUFDO0VBQ3JCLE1BQU0sWUFBWSxDQUFDO0VBQ25CLE1BQU0sYUFBYSxDQUFDO0VBQ3BCLE1BQU0sWUFBWSxDQUFDO0VBQ25CLE1BQU0sYUFBYSxDQUFDO0VBQ3BCLE1BQU0sWUFBWSxDQUFDO0VBQ25CLE1BQU0sYUFBYSxDQUFDO0VBQ3BCLE1BQU0sWUFBWSxDQUFDO0FBQ3JCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBLGNBQWM7QUFDZDs7R0FFR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAtLWJnYy1wYWdlOiBsYXZlbmRlcjtcXHJcXG4gIC0tY2FyZC1zaGFkb3c6IC4yNXJlbSAuMjVyZW0gLjI1cmVtIHJnYmEoMCwwLDAsLjEpLFxcclxcbiAgICBpbnNldCAuMjVyZW0gLjI1cmVtIC4yNXJlbSByZ2JhKDI1NSwyNTUsMjU1LC41KTtcXHJcXG4gIC0taWNvbi1zaXplOiAzMHB4O1xcclxcbiAgLS1pY29uLWNoZWNrLXNpemU6IDIwcHg7XFxyXFxuICAtLXR4dC1jb2wtMTogIzAwMDtcXHJcXG4gIC0tdHh0LWNvbC0yOiAjNDQ0O1xcclxcbiAgLS10eHQtY29sLTM6ICM2NjY7XFxyXFxuICAtLWNhcmQtYm9yZGVyLXJhZDogLjc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ2MtcGFnZSk7XFxyXFxufVxcclxcblxcclxcbm9sLCB1bCB7IHBhZGRpbmc6IDA7IG1hcmdpbjogMDsgbGlzdC1zdHlsZS10eXBlOiBub25lOyB9XFxyXFxuXFxyXFxuaDEsIGgyLCBwIHttYXJnaW46IDA7fVxcclxcbmgxIHtmb250LXNpemU6IDNyZW07fVxcclxcblxcclxcbiNtYWluIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgcGFkZGluZzogLjVyZW07XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaXRlbSB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIG1hcmdpbjogMXJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogY2FyZHMgKi9cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLXNoYWRvdyk7XFxyXFxuICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBhdXRvKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCIgZHJhZyAgdGl0bGUgZWRpdCAgXFxcIlxcclxcbiAgICBcXFwiIC4uLi4uIGRlc2NyIGRlc2NyIFxcXCJcXHJcXG4gICAgXFxcIiAuLi4uLiB0YXNrcyB0YXNrcyBcXFwiO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBoZWlnaHQ6IGNhbGModmFyKC0taWNvbi1zaXplKSAqIDEuNzUpIDtcXHJcXG59IC5jYXJkLmFjdGl2ZSB7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXJlbSBoc2woMjQwLCA3MCUsIDkwJSk7XFxyXFxufSAuY2FyZDpub3QoLmFjdGl2ZSk6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZDpmaXJzdC1vZi10eXBlIHsgYm9yZGVyLXJhZGl1czogdmFyKC0tY2FyZC1ib3JkZXItcmFkKSB2YXIoLS1jYXJkLWJvcmRlci1yYWQpIDAgMDsgfVxcclxcbi5jYXJkOmxhc3Qtb2YtdHlwZSB7IGJvcmRlci1yYWRpdXM6IDAgMCB2YXIoLS1jYXJkLWJvcmRlci1yYWQpIHZhcigtLWNhcmQtYm9yZGVyLXJhZCk7IH1cXHJcXG5cXHJcXG4uY2FyZCAudGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2wtMSk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufSAuY2FyZCAuZGVzY3JpcHRpb24ge1xcclxcbiAgZ3JpZC1hcmVhOiBkZXNjcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2wtMik7XFxyXFxufSAuY2FyZCAuY2hlY2tsaXN0IHtcXHJcXG4gIGdyaWQtYXJlYTogdGFza3M7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ2FwOiAuMjVyZW07XFxyXFxufVxcclxcblxcclxcbi5jYXJkIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IHZhcigtLWljb24tc2l6ZSk7XFxyXFxuICBoZWlnaHQ6IHZhcigtLWljb24tc2l6ZSk7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG4uY2FyZCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjpiZWZvcmUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBpbnNldDogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjAzKTtcXHJcXG4gIGJveC1zaGFkb3c6IC4xcmVtIC4xcmVtIC4xcmVtIHdoaXRlLFxcclxcbiAgICBpbnNldCAuMXJlbSAuMXJlbSAuMjVyZW0gcmdiYSgwLDAsMCwuMSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XFxyXFxufVxcclxcbi5jYXJkIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmFmdGVyIHtcXHJcXG4gIC0tY2hlY2stYW5pbS1kdXJhdGlvbjogMjAwbXM7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIGluc2V0OiAtN3B4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgNzUlLCAxNSUgNjAlLCAxNSUgNjElLCAxNiUgNjIlLCAxOCUgNjUlLCA0JSA3OCUsIDElIDc1JSk7XFxyXFxuICBhbmltYXRpb246IGNoZWNrbWFyay1iYWNrd2FyZHMgdmFyKC0tY2hlY2stYW5pbS1kdXJhdGlvbikgZWFzZS1vdXQgZm9yd2FyZHM7XFxyXFxufVxcclxcbi5jYXJkIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDo6YWZ0ZXIge1xcclxcbiAgYW5pbWF0aW9uOiBjaGVja21hcmstZm9yd2FyZHMgdmFyKC0tY2hlY2stYW5pbS1kdXJhdGlvbikgZWFzZS1pbiBmb3J3YXJkcztcXHJcXG59XFxyXFxuQGtleWZyYW1lcyBjaGVja21hcmstZm9yd2FyZHMge1xcclxcbiAgMCUge29wYWNpdHk6IDA7fVxcclxcbiAgMSUge29wYWNpdHk6IDE7IGNsaXAtcGF0aDogcG9seWdvbigwIDc1JSwgMTUlIDYwJSwgMTUlIDYxJSwgMTYlIDYyJSwgMTglIDY1JSwgNCUgNzglKTt9XFxyXFxuICAzMCUge2NsaXAtcGF0aDogcG9seWdvbigwIDc1JSwgMTUlIDYwJSwgMjElIDY2JSwgMjYlIDcwJSwgMzElIDc2JSwgOSUgODYlKTt9XFxyXFxuICA1MCUge2NsaXAtcGF0aDogcG9seWdvbigwIDc1JSwgMTUlIDYwJSwgMzUlIDc1JSwgNDMlIDgxJSwgNDklIDg4JSwgNDAlIDEwMCUpO31cXHJcXG4gIDEwMCUge2NsaXAtcGF0aDogcG9seWdvbigwIDc1JSwgMTUlIDYwJSwgMzUlIDc1JSwgODUlIDAsIDEwMCUgMTAlLCA0MCUgMTAwJSk7fVxcclxcbn0gQGtleWZyYW1lcyBjaGVja21hcmstYmFja3dhcmRzIHtcXHJcXG4gIDAlIHtjbGlwLXBhdGg6IHBvbHlnb24oMCA3NSUsIDE1JSA2MCUsIDM1JSA3NSUsIDg1JSAwLCAxMDAlIDEwJSwgNDAlIDEwMCUpO31cXHJcXG4gIDUwJSB7Y2xpcC1wYXRoOiBwb2x5Z29uKDAgNzUlLCAxNSUgNjAlLCAzNSUgNzUlLCA0MyUgODElLCA0OSUgODglLCA0MCUgMTAwJSk7fVxcclxcbiAgNzAlIHtjbGlwLXBhdGg6IHBvbHlnb24oMCA3NSUsIDE1JSA2MCUsIDIxJSA2NiUsIDI2JSA3MCUsIDMxJSA3NiUsIDklIDg2JSk7fVxcclxcbiAgOTklIHtvcGFjaXR5OiAxOyBjbGlwLXBhdGg6IHBvbHlnb24oMCA3NSUsIDE1JSA2MCUsIDE1JSA2MSUsIDE2JSA2MiUsIDE4JSA2NSUsIDQlIDc4JSk7fVxcclxcbiAgMTAwJSB7b3BhY2l0eTogMDt9XFxyXFxufVxcclxcblxcclxcbi5jYXJkIGxhYmVsIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sLTIpO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB0cmFuc3BhcmVudCAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLCB0cmFuc3BhcmVudCAxMDAlKSBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDUwMG1zO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAtMTAwdnc7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5jYXJkIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2wtMyk7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZFtkYXRhLXByaW9yaXR5PVxcXCJsb3dcXFwiXSB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsbGltZSwgcmdiYSgwLCAxMjgsIDAsIDApIDYwcHgpO1xcclxcbn0gLmNhcmRbZGF0YS1wcmlvcml0eT1cXFwibG93XFxcIl0uYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sbGltZSwgcmdiYSgwLCAxMjgsIDAsIDApIDYwcHgpO1xcclxcbn1cXHJcXG4uY2FyZFtkYXRhLXByaW9yaXR5PVxcXCJtaWRkbGVcXFwiXSB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGdvbGRlbnJvZCwgcmdiYSgwLCAxMjgsIDAsIDApIDYwcHgpO1xcclxcbn0gLmNhcmRbZGF0YS1wcmlvcml0eT1cXFwibWlkZGxlXFxcIl0uYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIGdvbGRlbnJvZCwgcmdiYSgwLCAxMjgsIDAsIDApIDYwcHgpO1xcclxcbn1cXHJcXG4uY2FyZFtkYXRhLXByaW9yaXR5PVxcXCJoaWdoXFxcIl0ge1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBvcmFuZ2VyZWQsIHJnYmEoMCwgMTI4LCAwLCAwKSA2MHB4KTtcXHJcXG59IC5jYXJkW2RhdGEtcHJpb3JpdHk9XFxcImhpZ2hcXFwiXS5hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgb3JhbmdlcmVkLCByZ2JhKDAsIDEyOCwgMCwgMCkgNjBweCk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qIGNhcmQgaWNvbnMgKi9cXHJcXG4uY2FyZC1pY29uIHsgd2lkdGg6IHZhcigtLWljb24tc2l6ZSk7IH1cXHJcXG4uY2FyZC1pY29uOmhvdmVyIHsgY3Vyc29yOiBwb2ludGVyOyB9XFxyXFxuLmNhcmQgdWwgbGkge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0byBhdXRvO1xcclxcbiAgZ2FwOiAuNXJlbTtcXHJcXG59XFxyXFxuLmVkaXQtYnV0dG9ucyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gIGdhcDogLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtaWNvbiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogdmFyKC0taWNvbi1zaXplKTtcXHJcXG59Lmljb24tdHJhc2gsXFxyXFxuLmljb24tdHJhc2gtbGlkIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRyYW5zaXRpb246IHJvdGF0ZSA1MDBtcztcXHJcXG59XFxyXFxuLmljb24tdHJhc2ggeyB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDAlO31cXHJcXG4uaWNvbi10cmFzaC1saWQgeyB0cmFuc2Zvcm0tb3JpZ2luOiAyNTAlIDAlO31cXHJcXG4uZGVsZXRlLWljb246aG92ZXIgLmljb24tdHJhc2ggeyByb3RhdGU6IC0xMGRlZzt9XFxyXFxuLmRlbGV0ZS1pY29uOmhvdmVyIC5pY29uLXRyYXNoLWxpZCB7IHJvdGF0ZTogMTBkZWc7IH1cXHJcXG5cXHJcXG4uY2FyZC1pY29uLmljb24tZWRpdDpob3ZlciB7XFxyXFxuICBhbmltYXRpb246IGVkaXQtc2hha2UgMzAwbXM7XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGVkaXQtc2hha2Uge1xcclxcbiAgMCUsIDEwMCUgeyByb3RhdGU6IDBkZWc7fVxcclxcbiAgMTAlIHsgcm90YXRlOiA1ZGVnO31cXHJcXG4gIDIwJSB7IHJvdGF0ZTogLTVkZWc7fVxcclxcbiAgMzAlIHsgcm90YXRlOiA0ZGVnO31cXHJcXG4gIDQwJSB7IHJvdGF0ZTogLTRkZWc7fVxcclxcbiAgNTAlIHsgcm90YXRlOiAzZGVnO31cXHJcXG4gIDYwJSB7IHJvdGF0ZTogLTNkZWc7fVxcclxcbiAgNzAlIHsgcm90YXRlOiAyZGVnO31cXHJcXG4gIDgwJSB7IHJvdGF0ZTogLTJkZWc7fVxcclxcbiAgOTAlIHsgcm90YXRlOiAxZGVnO31cXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaWNvbi5pY29uLWZhdjpob3ZlcntcXHJcXG4gIGFuaW1hdGlvbjogZmF2LXNwaW4gMzAwbXM7XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTUlO1xcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGZhdi1zcGluIHsgdG8ge3JvdGF0ZTogNzJkZWc7fSB9XFxyXFxuXFxyXFxuLmNhcmQtaWNvbi5pY29uLWZhdi5zaGFrZSB7XFxyXFxuICBhbmltYXRpb246IHN0YXItc2hha2UgMzAwbXM7XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgc3Rhci1zaGFrZSB7XFxyXFxuICAwJSwgMTAwJSB7XFxyXFxuICAgIHJvdGF0ZTogMGRlZztcXHJcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgNXB4IGdvbGRlbnJvZClcXHJcXG4gICAgICBicmlnaHRuZXNzKDE1MCUpO1xcclxcbiAgfVxcclxcbiAgMTAlIHsgcm90YXRlOiAxMGRlZzt9XFxyXFxuICAyMCUgeyByb3RhdGU6IC0xMGRlZzt9XFxyXFxuICAzMCUgeyByb3RhdGU6IDhkZWc7fVxcclxcbiAgNDAlIHsgcm90YXRlOiAtOGRlZzt9XFxyXFxuICA1MCUgeyByb3RhdGU6IDZkZWc7fVxcclxcbiAgNjAlIHsgcm90YXRlOiAtNmRlZzt9XFxyXFxuICA3MCUgeyByb3RhdGU6IDRkZWc7fVxcclxcbiAgODAlIHsgcm90YXRlOiAtNGRlZzt9XFxyXFxuICA5MCUgeyByb3RhdGU6IDJkZWc7fVxcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2staWNvbi5pY29uLWVkaXQge1xcclxcbiAgd2lkdGg6IHZhcigtLWljb24tY2hlY2stc2l6ZSk7XFxyXFxufVxcclxcblxcclxcbi8qZm9yIHRlc3RpbmcqL1xcclxcbi8qICoge1xcclxcbiAgb3V0bGluZTogMXB4IHNvbGlkIGdyYXk7XFxyXFxufSAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7IHVpIH0gZnJvbSBcIi4vbW9kdWxlcy91aS5qc1wiO1xyXG5pbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4vbW9kdWxlcy9jbGFzc2VzLmpzXCI7XHJcblxyXG4vL2ZvciB0ZXN0aW5nXHJcbmltcG9ydCB7bG9jYWxTdG9yYWdlVGVzdH0gZnJvbSBcIi4vbW9kdWxlcy91aS5qc1wiXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xyXG4gIGlmKGUua2V5ID09PSBcInJcIil7XHJcbiAgICB1aS5wbGFjZUNhcmRzKGxvY2FsU3RvcmFnZVRlc3QpO1xyXG4gICAgY29uc29sZS5sb2coXCJyZXBsYWNpbmcgbWFpblwiKTtcclxuICB9O1xyXG59KTtcclxuXHJcblxyXG4vL3J1biBvbiBsb2FkXHJcbnVpLnBsYWNlQ2FyZHMobG9jYWxTdG9yYWdlVGVzdCk7XHJcbiIsImV4cG9ydCBjbGFzcyBUb2RvIHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGVDcmVhdGlvbiwgZGF0ZUR1ZSwgLy90eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIlxyXG4gICAgY2hlY2tzLCBwcmlvcml0eSwgaXNGYXZvcml0ZSwgaXNQaW5uZWQpe1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5kYXRlQ3JlYXRpb24gPSBkYXRlQ3JlYXRpb247XHJcbiAgICB0aGlzLmRhdGVEdWUgPSBkYXRlRHVlO1xyXG4gICAgdGhpcy5jaGVja3MgPSBjaGVja3M7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICB0aGlzLmlzRmF2b3JpdGUgPSBpc0Zhdm9yaXRlO1xyXG4gICAgdGhpcy5pc1Bpbm5lZCA9IGlzUGlubmVkO1xyXG4gIH07XHJcbiAgXHJcbiAgdG9nZ2xlRmF2KCl7XHJcbiAgICB0aGlzLmlzRmF2b3JpdGUgPSAhdGhpcy5pc0Zhdm9yaXRlO1xyXG4gIH07XHJcblxyXG4gIHRvZ2dsZVRhc2soaWR4KXtcclxuICAgIHRoaXMuY2hlY2tzW2lkeF0uaXNEb25lID0gIXRoaXMuY2hlY2tzW2lkeF0uaXNEb25lO1xyXG4gIH07XHJcbn07IiwiaW1wb3J0IGljb25DaGVja21hcmsgZnJvbSBcIi4uL21lZGlhL2ltYWdlcy9pY29ucy9jaGVja21hcmsuc3ZnXCI7XHJcbmltcG9ydCBpY29uRHJhZyBmcm9tIFwiLi4vbWVkaWEvaW1hZ2VzL2ljb25zL2RyYWcuc3ZnXCI7XHJcbmltcG9ydCBpY29uRWRpdCBmcm9tIFwiLi4vbWVkaWEvaW1hZ2VzL2ljb25zL2VkaXQuc3ZnXCI7XHJcbmltcG9ydCBpY29uVHJhc2ggZnJvbSBcIi4uL21lZGlhL2ltYWdlcy9pY29ucy90cmFzaC5zdmdcIjtcclxuaW1wb3J0IGljb25UcmFzaExpZCBmcm9tIFwiLi4vbWVkaWEvaW1hZ2VzL2ljb25zL3RyYXNoLWxpZC5zdmdcIjtcclxuaW1wb3J0IGljb25GYXYgZnJvbSBcIi4uL21lZGlhL2ltYWdlcy9pY29ucy9mYXYuc3ZnXCI7XHJcbmltcG9ydCBpY29uRmF2QWN0aXZlIGZyb20gXCIuLi9tZWRpYS9pbWFnZXMvaWNvbnMvZmF2LWFjdGl2ZS5zdmdcIjtcclxuXHJcbi8vZm9yIHRlc3RpbmdcclxuaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuLi9tb2R1bGVzL2NsYXNzZXMuanNcIjtcclxuZXhwb3J0IGNvbnN0IGxvY2FsU3RvcmFnZVRlc3QgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwicm91dGluZVwiLFxyXG4gICAgdG9kb3M6IFtcclxuICAgICAgbmV3IFRvZG8oXCJleGVyY2lzZVwiLCBcIkl0J3MgbGVnIGRheSFcIiwgXCIyMDIyLTExLTIzVDE3OjQyXCIsIG51bGwsIFtcclxuICAgICAgICB7IHRhc2s6IFwicnVuIDNrbVwiLCBpc0RvbmU6IHRydWUgfSxcclxuICAgICAgICB7IHRhc2s6IFwiYmljeWNsZVwiLCBpc0RvbmU6IGZhbHNlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcInNxdWF0c1wiLCBpc0RvbmU6IGZhbHNlIH0sXHJcbiAgICAgIF0sIFwibG93XCIsIGZhbHNlLCBmYWxzZSksXHJcblxyXG4gICAgICBuZXcgVG9kbyhcImNvZGluZ1wiLCBudWxsLCBcIjIwMjItMTEtMjNUMTc6NDJcIiwgbnVsbCwgW1xyXG4gICAgICAgIHsgdGFzazogXCJjaGVjayBjc3MtdHJpY2tzXCIsIGlzRG9uZTogdHJ1ZSB9LFxyXG4gICAgICAgIHsgdGFzazogXCJjb250aW51ZSBUT1AgcHJhY3RpY2VcIiwgaXNEb25lOiB0cnVlIH0sXHJcbiAgICAgIF0sIFwiaGlnaFwiLCB0cnVlLCB0cnVlKSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJ0ZXN0XCIsXHJcbiAgICB0b2RvczogW1xyXG4gICAgICBuZXcgVG9kbyhcInRlc3QxXCIsIFwidGVzdDEgZGVzY3JcIiwgXCIyMDIyLTExLTIzVDE3OjQyXCIsXCIyMDIzLTExLTIzVDE3OjQyXCIsIFtcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDEgdGFzazFcIiwgaXNEb25lOiB0cnVlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcInRlc3QxIHRhc2syXCIsIGlzRG9uZTogZmFsc2UgfSxcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDEgdGFzazNcIiwgaXNEb25lOiB0cnVlIH0sXHJcbiAgICAgIF0sIFwibG93XCIsIHRydWUsIGZhbHNlKSxcclxuXHJcbiAgICAgIG5ldyBUb2RvKFwidGVzdDJcIiwgXCJ0ZXN0MiBkZXNjclwiLCBcIjIwMjItMTEtMjNUMTc6NDJcIiwgXCIyMDIzLTExLTIzVDE3OjQyXCIsIFtcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDIgdGFzazFcIiwgaXNEb25lOiB0cnVlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcInRlc3QyIHRhc2syXCIsIGlzRG9uZTogZmFsc2UgfSxcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDIgdGFzazNcIiwgaXNEb25lOiB0cnVlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcInRlc3QyIHRhc2s0XCIsIGlzRG9uZTogZmFsc2UgfSxcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDIgdGFzazVcIiwgaXNEb25lOiBmYWxzZSB9LFxyXG4gICAgICBdLCBcIm1pZGRsZVwiLCB0cnVlLCBmYWxzZSksXHJcbiAgICAgIG5ldyBUb2RvKFwidGVzdDNcIiwgXCJ0ZXN0MyBkZXNjclwiLCBcIjIwMjItMTEtMjNUMTc6NDJcIiwgXCIyMDIzLTExLTIzVDE3OjQyXCIsIFtcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDMgdGFzazFcIiwgaXNEb25lOiB0cnVlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcInRlc3QzIHRhc2syXCIsIGlzRG9uZTogdHJ1ZSB9LFxyXG4gICAgICAgIHsgdGFzazogXCJ0ZXN0MyB0YXNrM1wiLCBpc0RvbmU6IGZhbHNlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcInRlc3QzIHRhc2s0XCIsIGlzRG9uZTogZmFsc2UgfSxcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDMgdGFzazVcIiwgaXNEb25lOiB0cnVlIH0sXHJcbiAgICAgIF0sIFwibG93XCIsIGZhbHNlLCB0cnVlKSxcclxuICAgICAgbmV3IFRvZG8oXCJ0ZXN0NFwiLCBcInRlc3Q0IGRlc2NyXCIsIFwiMjAyMi0xMS0yM1QxNzo0MlwiLCBcIjIwMjMtMTEtMjNUMTc6NDJcIiwgW1xyXG4gICAgICAgIHsgdGFzazogXCJ0ZXN0NCB0YXNrMVwiLCBpc0RvbmU6IGZhbHNlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcInRlc3Q0IHRhc2syXCIsIGlzRG9uZTogZmFsc2UgfSxcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDQgdGFzazNcIiwgaXNEb25lOiB0cnVlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcInRlc3Q0IHRhc2s0XCIsIGlzRG9uZTogZmFsc2UgfSxcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDQgdGFzazVcIiwgaXNEb25lOiB0cnVlIH0sXHJcbiAgICAgIF0sIFwibG93XCIsIHRydWUsIGZhbHNlKSxcclxuICAgICAgbmV3IFRvZG8oXCJ0ZXN0NVwiLCBcInRlc3Q1IGRlc2NyXCIsIFwiMjAyMi0xMS0yM1QxNzo0MlwiLCBcIjIwMjMtMTEtMjNUMTc6NDJcIiwgW1xyXG4gICAgICAgIHsgdGFzazogXCJ0ZXN0NSB0YXNrMVwiLCBpc0RvbmU6IGZhbHNlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcInRlc3Q1IHRhc2syXCIsIGlzRG9uZTogdHJ1ZSB9LFxyXG4gICAgICAgIHsgdGFzazogXCJ0ZXN0NSB0YXNrM1wiLCBpc0RvbmU6IHRydWUgfSxcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDUgdGFzazRcIiwgaXNEb25lOiBmYWxzZSB9LFxyXG4gICAgICAgIHsgdGFzazogXCJ0ZXN0NSB0YXNrNVwiLCBpc0RvbmU6IHRydWUgfSxcclxuICAgICAgXSwgXCJoaWdoXCIsIGZhbHNlLCBmYWxzZSksXHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgdWkgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xyXG5cclxuICBmdW5jdGlvbiBwbGFjZUNhcmQodG9kbywgcHJvamVjdElkeCwgdG9kb0lkeCl7XHJcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XHJcbiAgICBjYXJkLmRhdGFzZXQucHJpb3JpdHkgPSB0b2RvLnByaW9yaXR5O1xyXG5cclxuICAgIGNvbnN0IGRyYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgZHJhZy5jbGFzc0xpc3QuYWRkKFwiY2FyZC1pY29uXCIsIFwiaWNvbi1kcmFnXCIpO1xyXG4gICAgZHJhZy5zcmMgPSBpY29uRHJhZztcclxuICAgIGRyYWcuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBjYXJkRHJhZyk7XHJcblxyXG4gICAgY29uc3QgZWRpdEJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZWRpdEJ0bnMuY2xhc3NMaXN0LmFkZChcImVkaXQtYnV0dG9uc1wiKTtcclxuICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgZWRpdC5jbGFzc0xpc3QuYWRkKFwiY2FyZC1pY29uXCIsIFwiaWNvbi1lZGl0XCIpO1xyXG4gICAgZWRpdC5zcmMgPSBpY29uRWRpdDtcclxuICAgIGVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhcmRFZGl0KTtcclxuXHJcbiAgICBjb25zdCBmYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgZmF2LmNsYXNzTGlzdC5hZGQoXCJjYXJkLWljb25cIiwgXCJpY29uLWZhdlwiKTtcclxuICAgIGZhdi5zcmMgPSB0b2RvLmlzRmF2b3JpdGUgPyBpY29uRmF2QWN0aXZlIDogaWNvbkZhdjtcclxuICAgIGZhdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FyZEZhdlRvZ2dsZSk7XHJcbiAgICBmYXYuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCAoZSkgPT4ge1xyXG4gICAgICBpZihlLmFuaW1hdGlvbk5hbWUgPT09IFwic3Rhci1zaGFrZVwiKSB7XHJcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcInNoYWtlXCIpO1xyXG4gICAgICB9O1xyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1pY29uXCIpO1xyXG4gICAgZGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FyZERlbGV0ZSk7XHJcblxyXG4gICAgY29uc3QgdHJhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgdHJhc2guY2xhc3NMaXN0LmFkZChcImNhcmQtaWNvblwiLCBcImljb24tdHJhc2hcIik7XHJcbiAgICB0cmFzaC5zcmMgPSBpY29uVHJhc2g7XHJcbiAgICBjb25zdCB0cmFzaExpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICB0cmFzaExpZC5jbGFzc0xpc3QuYWRkKFwiY2FyZC1pY29uXCIsIFwiaWNvbi10cmFzaC1saWRcIik7XHJcbiAgICB0cmFzaExpZC5zcmMgPSBpY29uVHJhc2hMaWQ7XHJcbiAgICBcclxuICAgIGRlbGV0ZUljb24uYXBwZW5kKHRyYXNoLCB0cmFzaExpZCk7XHJcbiAgICBlZGl0QnRucy5hcHBlbmQoZWRpdCwgZmF2LCBkZWxldGVJY29uKTtcclxuXHJcbiAgICBbY2FyZCxkcmFnLGVkaXQsZmF2LGRlbGV0ZUljb25dLmZvckVhY2goaWNvbiA9PiB7XHJcbiAgICAgIGljb24uZGF0YXNldC5wcm9qZWN0SWR4ID0gcHJvamVjdElkeDtcclxuICAgICAgaWNvbi5kYXRhc2V0LnRvZG9JZHggPSB0b2RvSWR4O1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gdG9kby50aXRsZTtcclxuICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRoaXNDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBgW2RhdGEtcHJvamVjdC1pZHg9XCIke3Byb2plY3RJZHh9XCJdW2RhdGEtdG9kby1pZHg9XCIke3RvZG9JZHh9XCJdYFxyXG4gICAgICAgICk7XHJcbiAgICAgIFxyXG4gICAgICAgIHRoaXNDYXJkLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xyXG4gICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gdG9kby5kZXNjcmlwdGlvbjtcclxuXHJcbiAgICBjb25zdCBjaGVja3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICBjaGVja3MuY2xhc3NMaXN0LmFkZChcImNoZWNrbGlzdFwiKTtcclxuXHJcbiAgICB0b2RvLmNoZWNrcy5mb3JFYWNoKChjaGVjayxpKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcblxyXG4gICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgICAgY2hlY2tib3guaWQgPSBgJHt0b2RvLnRpdGxlfS0ke2l9YDsgLy9mb3IgbGFiZWwgb25seVxyXG4gICAgICBjaGVja2JveC5kYXRhc2V0LnByb2plY3RJZHggPSBwcm9qZWN0SWR4O1xyXG4gICAgICBjaGVja2JveC5kYXRhc2V0LnRvZG9JZHggPSB0b2RvSWR4O1xyXG4gICAgICBjaGVja2JveC5kYXRhc2V0LnRhc2tJZHggPSBpO1xyXG5cclxuICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGNoZWNrLmlzRG9uZTtcclxuICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhc2tDaGVja1RvZ2dsZSk7XHJcblxyXG4gICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgbGFiZWwuaHRtbEZvciA9IGNoZWNrYm94LmlkO1xyXG4gICAgICBsYWJlbC5pbm5lclRleHQgPSBjaGVjay50YXNrO1xyXG5cclxuICAgICAgY29uc3QgZWRpdENoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgZWRpdENoZWNrLnNyYyA9IGljb25FZGl0O1xyXG4gICAgICBlZGl0Q2hlY2suY2xhc3NMaXN0LmFkZChcImNhcmQtaWNvblwiLCBcImNoZWNrLWljb25cIiwgXCJpY29uLWVkaXRcIik7XHJcbiAgICAgIGVkaXRDaGVjay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlQ2hlY2tFZGl0KTtcclxuXHJcbiAgICAgIHRhc2suYXBwZW5kKGNoZWNrYm94LCBsYWJlbCwgZWRpdENoZWNrKTtcclxuXHJcbiAgICAgIGNoZWNrcy5hcHBlbmRDaGlsZCh0YXNrKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBjYXJkLmFwcGVuZChkcmFnLCB0aXRsZSwgZWRpdEJ0bnMsIGRlc2NyaXB0aW9uLCBjaGVja3MpO1xyXG5cclxuICAgIHJldHVybiBjYXJkO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGxhY2VDYXJkcyhwcm9qZWN0cyl7XHJcblxyXG4gICAgbWFpbi5yZXBsYWNlQ2hpbGRyZW4oKVxyXG4gICAgXHJcblxyXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgcHJvamVjdElkeCkgPT4ge1xyXG4gICAgICBjb25zdCBwcm9qZWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHByb2plY3RJdGVtLmRhdGFzZXQuaWR4ID0gcHJvamVjdElkeDtcclxuICAgICAgcHJvamVjdEl0ZW0uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaXRlbVwiKTtcclxuXHJcbiAgICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgICBoMS5pbm5lclRleHQgPSBwcm9qZWN0LnRpdGxlO1xyXG4gICAgICBwcm9qZWN0SXRlbS5hcHBlbmRDaGlsZChoMSk7XHJcblxyXG4gICAgICBwcm9qZWN0LnRvZG9zLmZvckVhY2goKHRvZG8sIHRvZG9JZHgpID0+IHtcclxuICAgICAgICBwcm9qZWN0SXRlbS5hcHBlbmRDaGlsZChwbGFjZUNhcmQodG9kbywgcHJvamVjdElkeCwgdG9kb0lkeCkpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIG1haW4uYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gY2FyZERyYWcoKXtcclxuICAgIGNvbnNvbGUubG9nKGBkcmFnZ2luZyBwcm9qZWN0ICR7dGhpcy5kYXRhc2V0LnByb2plY3RJZHhcclxuICAgIH0gLSB0b2RvICR7dGhpcy5kYXRhc2V0LnRvZG9JZHh9YCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjYXJkRWRpdCgpe1xyXG4gICAgY29uc29sZS5sb2coYGVkaXRpbmcgcHJvamVjdCAke3RoaXMuZGF0YXNldC5wcm9qZWN0SWR4XHJcbiAgICB9IC0gdG9kbyAke3RoaXMuZGF0YXNldC50b2RvSWR4fWApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdG9nZ2xlQ2hlY2tFZGl0KCl7XHJcbiAgICBjb25zb2xlLmxvZyhcImVkaXQgY2hlY2tcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjYXJkRmF2VG9nZ2xlKCl7XHJcbiAgICBjb25zdCBwcm9qZWN0SWR4ID0gdGhpcy5kYXRhc2V0LnByb2plY3RJZHg7XHJcbiAgICBjb25zdCB0b2RvSWR4ID0gdGhpcy5kYXRhc2V0LnRvZG9JZHg7XHJcbiAgICBsb2NhbFN0b3JhZ2VUZXN0W3Byb2plY3RJZHhdLnRvZG9zW3RvZG9JZHhdLnRvZ2dsZUZhdigpO1xyXG4gICAgXHJcbiAgICAvL3RvZ2dsZSBzdGFyIGljb25cclxuICAgIGNvbnN0IGlzRmF2ID0gbG9jYWxTdG9yYWdlVGVzdFtwcm9qZWN0SWR4XS50b2Rvc1t0b2RvSWR4XS5pc0Zhdm9yaXRlO1xyXG4gICAgdGhpcy5zcmMgPSBpc0ZhdiA/IGljb25GYXZBY3RpdmUgOiBpY29uRmF2O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2FyZERlbGV0ZSgpe1xyXG4gICAgY29uc3QgcHJvamVjdElkeCA9IHRoaXMuZGF0YXNldC5wcm9qZWN0SWR4O1xyXG4gICAgY29uc3QgdG9kb0lkeCA9IHRoaXMuZGF0YXNldC50b2RvSWR4O1xyXG5cclxuICAgIGNvbnN0IGlzRmF2ID0gbG9jYWxTdG9yYWdlVGVzdFtwcm9qZWN0SWR4XS50b2Rvc1t0b2RvSWR4XS5pc0Zhdm9yaXRlO1xyXG4gICAgaWYoaXNGYXYpIHtcclxuICAgICAgY29uc3QgdGhpc0NhcmRTdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcHJvamVjdC1pZHg9XCIke1xyXG4gICAgICAgIHByb2plY3RJZHh9XCJdW2RhdGEtdG9kby1pZHg9XCIke3RvZG9JZHh9XCJdIC5pY29uLWZhdmApO1xyXG4gICAgICB0aGlzQ2FyZFN0YXIuY2xhc3NMaXN0LmFkZChcInNoYWtlXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGBkZWxldGUgcHJvamVjdCAke3Byb2plY3RJZHh9IC0gdG9kbyAke3RvZG9JZHh9YCk7XHJcbiAgICBsb2NhbFN0b3JhZ2VUZXN0W3Byb2plY3RJZHhdLnRvZG9zLnNwbGljZSh0b2RvSWR4LDEpO1xyXG4gICAgcGxhY2VDYXJkcyhsb2NhbFN0b3JhZ2VUZXN0KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRhc2tDaGVja1RvZ2dsZSgpe1xyXG4gICAgbG9jYWxTdG9yYWdlVGVzdFt0aGlzLmRhdGFzZXQucHJvamVjdElkeF1cclxuICAgIC50b2Rvc1t0aGlzLmRhdGFzZXQudG9kb0lkeF0udG9nZ2xlVGFzayh0aGlzLmRhdGFzZXQudGFza0lkeCk7XHJcbiAgfVxyXG4gICAgXHJcbiAgcmV0dXJuIHsgcGxhY2VDYXJkcyB9O1xyXG59KSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==