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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./media/images/icons/pin.svg */ "./src/media/images/icons/pin.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./media/images/icons/pin-active.svg */ "./src/media/images/icons/pin-active.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./media/images/icons/edit.svg */ "./src/media/images/icons/edit.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./media/images/icons/fav.svg */ "./src/media/images/icons/fav.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./media/images/icons/fav-active.svg */ "./src/media/images/icons/fav-active.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --bgc-page: lavender;\r\n  --card-shadow: .25rem .25rem .25rem rgba(0,0,0,.1),\r\n    inset .25rem .25rem .25rem rgba(255,255,255,.5);\r\n  --icon-size: 30px;\r\n  --icon-check-size: 20px;\r\n  --txt-col-1: #000;\r\n  --txt-col-2: #444;\r\n  --txt-col-3: #666;\r\n  --card-border-rad: .75rem;\r\n}\r\n\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n  background-color: var(--bgc-page);\r\n}\r\n\r\nol, ul { padding: 0; margin: 0; list-style-type: none; }\r\n\r\nh1, h2, p {margin: 0;}\r\nh1 {font-size: 3rem;}\r\n\r\n#main {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  padding: .5rem;\r\n  overflow: hidden;\r\n  overflow-y: auto;\r\n}\r\n\r\n.project-item {\r\n  box-sizing: border-box;\r\n  padding: 1rem;\r\n  margin: 1rem;\r\n  box-shadow: var(--card-shadow);\r\n}\r\n\r\n\r\n\r\n/* cards */\r\n\r\n.card {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  box-shadow: var(--card-shadow);\r\n  padding: .5rem;\r\n  display: grid;\r\n  grid-template-columns: auto 1fr auto;\r\n  grid-template-rows: repeat(3, auto);\r\n  grid-template-areas:\r\n    \" drag  title edit  \"\r\n    \" ..... descr descr \"\r\n    \" ..... tasks tasks \";\r\n  gap: 1rem;\r\n  align-items: center;\r\n  overflow: hidden;\r\n  height: calc(var(--icon-size) * 1.75) ;\r\n} .card.active {\r\n  height: auto;\r\n  box-shadow: inset 0 0 5rem hsl(240, 70%, 90%);\r\n} .card:not(.active):hover {\r\n  background-color: rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n.card:first-of-type { border-radius: var(--card-border-rad) var(--card-border-rad) 0 0; }\r\n.card:last-of-type { border-radius: 0 0 var(--card-border-rad) var(--card-border-rad); }\r\n\r\n.card .title {\r\n  font-size: 2rem;\r\n  color: var(--txt-col-1);\r\n  cursor: pointer;\r\n} .card .description {\r\n  grid-area: descr;\r\n  font-size: 1.5rem;\r\n  color: var(--txt-col-2);\r\n} .card .checklist {\r\n  grid-area: tasks;\r\n  display: grid;\r\n  gap: .25rem;\r\n}\r\n\r\n.card li input[type=\"checkbox\"] {\r\n  position: relative;\r\n  width: var(--icon-size);\r\n  height: var(--icon-size);\r\n  appearance: none;\r\n}\r\n.card li input[type=\"checkbox\"]::before {\r\n  position: absolute;\r\n  content: \"\";\r\n  inset: 0;\r\n  background-color: rgba(0,0,0,.03);\r\n  box-shadow: .1rem .1rem .1rem white,\r\n    inset .1rem .1rem .25rem rgba(0,0,0,.1);\r\n  border-radius: .25rem;\r\n}\r\n.card li input[type=\"checkbox\"]::after {\r\n  --check-anim-duration: 200ms;\r\n  position: absolute;\r\n  content: \"\";\r\n  inset: -7px;\r\n  background-color: red;\r\n  clip-path: polygon(0 75%, 15% 60%, 15% 61%, 16% 62%, 18% 65%, 4% 78%, 1% 75%);\r\n  animation: checkmark-backwards var(--check-anim-duration) ease-out forwards;\r\n}\r\n.card li input[type=\"checkbox\"]:checked::after {\r\n  animation: checkmark-forwards var(--check-anim-duration) ease-in forwards;\r\n}\r\n@keyframes checkmark-forwards {\r\n  0% {opacity: 0;}\r\n  1% {opacity: 1; clip-path: polygon(0 75%, 15% 60%, 15% 61%, 16% 62%, 18% 65%, 4% 78%);}\r\n  30% {clip-path: polygon(0 75%, 15% 60%, 21% 66%, 26% 70%, 31% 76%, 9% 86%);}\r\n  50% {clip-path: polygon(0 75%, 15% 60%, 35% 75%, 43% 81%, 49% 88%, 40% 100%);}\r\n  100% {clip-path: polygon(0 75%, 15% 60%, 35% 75%, 85% 0, 100% 10%, 40% 100%);}\r\n} @keyframes checkmark-backwards {\r\n  0% {clip-path: polygon(0 75%, 15% 60%, 35% 75%, 85% 0, 100% 10%, 40% 100%);}\r\n  50% {clip-path: polygon(0 75%, 15% 60%, 35% 75%, 43% 81%, 49% 88%, 40% 100%);}\r\n  70% {clip-path: polygon(0 75%, 15% 60%, 21% 66%, 26% 70%, 31% 76%, 9% 86%);}\r\n  99% {opacity: 1; clip-path: polygon(0 75%, 15% 60%, 15% 61%, 16% 62%, 18% 65%, 4% 78%);}\r\n  100% {opacity: 0;}\r\n}\r\n\r\n.card label {\r\n  font-size: 1.25rem;\r\n  color: var(--txt-col-2);\r\n  background: linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.5), transparent 100%) no-repeat;\r\n  background-size: 100%;\r\n  transition: background-position 500ms;\r\n  background-position-x: -100vw;\r\n  cursor: pointer;\r\n}\r\n.card li input[type=\"checkbox\"]:checked + label {\r\n  text-decoration: line-through;\r\n  color: var(--txt-col-3);\r\n  background-position-x: 100vw;\r\n}\r\n\r\n.card[data-priority=\"low\"] {\r\n  background: linear-gradient(to right,lime, rgba(0, 128, 0, 0) 60px);\r\n} .card[data-priority=\"low\"].active {\r\n  background: linear-gradient(to bottom,lime, rgba(0, 128, 0, 0) 60px);\r\n}\r\n.card[data-priority=\"middle\"] {\r\n  background: linear-gradient(to right, goldenrod, rgba(0, 128, 0, 0) 60px);\r\n} .card[data-priority=\"middle\"].active {\r\n  background: linear-gradient(to bottom, goldenrod, rgba(0, 128, 0, 0) 60px);\r\n}\r\n.card[data-priority=\"high\"] {\r\n  background: linear-gradient(to right, orangered, rgba(0, 128, 0, 0) 60px);\r\n} .card[data-priority=\"high\"].active {\r\n  background: linear-gradient(to bottom, orangered, rgba(0, 128, 0, 0) 60px);\r\n}\r\n\r\n\r\n\r\n/* card icons */\r\n.card-icon {\r\n  position: relative;\r\n  width: var(--icon-size);\r\n  height: var(--icon-size);\r\n  cursor: pointer;\r\n  appearance: none;\r\n}\r\n.card-icon::after {\r\n  position: absolute;\r\n  content: \"\";\r\n  inset: 0;\r\n  background-size: 100%;\r\n  background-position: center;\r\n}\r\n\r\n.card-icon.icon-pin::after {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n} .card-icon.icon-pin:checked::after {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n.card-icon.icon-edit::after {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n/* } .card-icon.icon-edit:checked::after { */\r\n}\r\n.card-icon.icon-fav::after {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n}.card-icon.icon-fav:checked::after {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n}\r\n\r\n.card ul li {\r\n  display: grid;\r\n  grid-template-columns: auto 1fr auto auto;\r\n  gap: .5rem;\r\n}\r\n.edit-buttons {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  gap: .5rem;\r\n}\r\n\r\n.delete-icon {\r\n  position: relative;\r\n  width: var(--icon-size);\r\n}.icon-trash,\r\n.icon-trash-lid {\r\n  position: absolute;\r\n  transition: rotate 500ms;\r\n}\r\n.icon-trash { transform-origin: 100% 0%;}\r\n.icon-trash-lid { transform-origin: 250% 0%;}\r\n.delete-icon:hover .icon-trash { rotate: -10deg;}\r\n.delete-icon:hover .icon-trash-lid { rotate: 10deg; }\r\n\r\n.card-icon.icon-edit:hover {\r\n  animation: edit-shake 300ms;\r\n  transform-origin: 0% 100%;\r\n}\r\n@keyframes edit-shake {\r\n  0%, 100% { rotate: 0deg;}\r\n  10% { rotate: 5deg;}\r\n  20% { rotate: -5deg;}\r\n  30% { rotate: 4deg;}\r\n  40% { rotate: -4deg;}\r\n  50% { rotate: 3deg;}\r\n  60% { rotate: -3deg;}\r\n  70% { rotate: 2deg;}\r\n  80% { rotate: -2deg;}\r\n  90% { rotate: 1deg;}\r\n}\r\n\r\n.card-icon.icon-fav:hover{\r\n  animation: fav-spin 300ms;\r\n  transform-origin: 50% 55%;\r\n}\r\n@keyframes fav-spin { to {rotate: 72deg;} }\r\n\r\n.card-icon.icon-fav.shake {\r\n  animation: star-shake 300ms;\r\n}\r\n@keyframes star-shake {\r\n  0%, 100% {\r\n    rotate: 0deg;\r\n    filter: drop-shadow(0 0 5px goldenrod)\r\n      brightness(150%);\r\n  }\r\n  10% { rotate: 10deg;}\r\n  20% { rotate: -10deg;}\r\n  30% { rotate: 8deg;}\r\n  40% { rotate: -8deg;}\r\n  50% { rotate: 6deg;}\r\n  60% { rotate: -6deg;}\r\n  70% { rotate: 4deg;}\r\n  80% { rotate: -4deg;}\r\n  90% { rotate: 2deg;}\r\n}\r\n\r\n.check-icon.icon-edit {\r\n  width: var(--icon-check-size);\r\n}\r\n\r\n/*for testing*/\r\n/* * {\r\n  outline: 1px solid gray;\r\n} */", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n  --bgc-page: lavender;\r\n  --card-shadow: .25rem .25rem .25rem rgba(0,0,0,.1),\r\n    inset .25rem .25rem .25rem rgba(255,255,255,.5);\r\n  --icon-size: 30px;\r\n  --icon-check-size: 20px;\r\n  --txt-col-1: #000;\r\n  --txt-col-2: #444;\r\n  --txt-col-3: #666;\r\n  --card-border-rad: .75rem;\r\n}\r\n\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n  background-color: var(--bgc-page);\r\n}\r\n\r\nol, ul { padding: 0; margin: 0; list-style-type: none; }\r\n\r\nh1, h2, p {margin: 0;}\r\nh1 {font-size: 3rem;}\r\n\r\n#main {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  padding: .5rem;\r\n  overflow: hidden;\r\n  overflow-y: auto;\r\n}\r\n\r\n.project-item {\r\n  box-sizing: border-box;\r\n  padding: 1rem;\r\n  margin: 1rem;\r\n  box-shadow: var(--card-shadow);\r\n}\r\n\r\n\r\n\r\n/* cards */\r\n\r\n.card {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  box-shadow: var(--card-shadow);\r\n  padding: .5rem;\r\n  display: grid;\r\n  grid-template-columns: auto 1fr auto;\r\n  grid-template-rows: repeat(3, auto);\r\n  grid-template-areas:\r\n    \" drag  title edit  \"\r\n    \" ..... descr descr \"\r\n    \" ..... tasks tasks \";\r\n  gap: 1rem;\r\n  align-items: center;\r\n  overflow: hidden;\r\n  height: calc(var(--icon-size) * 1.75) ;\r\n} .card.active {\r\n  height: auto;\r\n  box-shadow: inset 0 0 5rem hsl(240, 70%, 90%);\r\n} .card:not(.active):hover {\r\n  background-color: rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n.card:first-of-type { border-radius: var(--card-border-rad) var(--card-border-rad) 0 0; }\r\n.card:last-of-type { border-radius: 0 0 var(--card-border-rad) var(--card-border-rad); }\r\n\r\n.card .title {\r\n  font-size: 2rem;\r\n  color: var(--txt-col-1);\r\n  cursor: pointer;\r\n} .card .description {\r\n  grid-area: descr;\r\n  font-size: 1.5rem;\r\n  color: var(--txt-col-2);\r\n} .card .checklist {\r\n  grid-area: tasks;\r\n  display: grid;\r\n  gap: .25rem;\r\n}\r\n\r\n.card li input[type=\"checkbox\"] {\r\n  position: relative;\r\n  width: var(--icon-size);\r\n  height: var(--icon-size);\r\n  appearance: none;\r\n}\r\n.card li input[type=\"checkbox\"]::before {\r\n  position: absolute;\r\n  content: \"\";\r\n  inset: 0;\r\n  background-color: rgba(0,0,0,.03);\r\n  box-shadow: .1rem .1rem .1rem white,\r\n    inset .1rem .1rem .25rem rgba(0,0,0,.1);\r\n  border-radius: .25rem;\r\n}\r\n.card li input[type=\"checkbox\"]::after {\r\n  --check-anim-duration: 200ms;\r\n  position: absolute;\r\n  content: \"\";\r\n  inset: -7px;\r\n  background-color: red;\r\n  clip-path: polygon(0 75%, 15% 60%, 15% 61%, 16% 62%, 18% 65%, 4% 78%, 1% 75%);\r\n  animation: checkmark-backwards var(--check-anim-duration) ease-out forwards;\r\n}\r\n.card li input[type=\"checkbox\"]:checked::after {\r\n  animation: checkmark-forwards var(--check-anim-duration) ease-in forwards;\r\n}\r\n@keyframes checkmark-forwards {\r\n  0% {opacity: 0;}\r\n  1% {opacity: 1; clip-path: polygon(0 75%, 15% 60%, 15% 61%, 16% 62%, 18% 65%, 4% 78%);}\r\n  30% {clip-path: polygon(0 75%, 15% 60%, 21% 66%, 26% 70%, 31% 76%, 9% 86%);}\r\n  50% {clip-path: polygon(0 75%, 15% 60%, 35% 75%, 43% 81%, 49% 88%, 40% 100%);}\r\n  100% {clip-path: polygon(0 75%, 15% 60%, 35% 75%, 85% 0, 100% 10%, 40% 100%);}\r\n} @keyframes checkmark-backwards {\r\n  0% {clip-path: polygon(0 75%, 15% 60%, 35% 75%, 85% 0, 100% 10%, 40% 100%);}\r\n  50% {clip-path: polygon(0 75%, 15% 60%, 35% 75%, 43% 81%, 49% 88%, 40% 100%);}\r\n  70% {clip-path: polygon(0 75%, 15% 60%, 21% 66%, 26% 70%, 31% 76%, 9% 86%);}\r\n  99% {opacity: 1; clip-path: polygon(0 75%, 15% 60%, 15% 61%, 16% 62%, 18% 65%, 4% 78%);}\r\n  100% {opacity: 0;}\r\n}\r\n\r\n.card label {\r\n  font-size: 1.25rem;\r\n  color: var(--txt-col-2);\r\n  background: linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.5), transparent 100%) no-repeat;\r\n  background-size: 100%;\r\n  transition: background-position 500ms;\r\n  background-position-x: -100vw;\r\n  cursor: pointer;\r\n}\r\n.card li input[type=\"checkbox\"]:checked + label {\r\n  text-decoration: line-through;\r\n  color: var(--txt-col-3);\r\n  background-position-x: 100vw;\r\n}\r\n\r\n.card[data-priority=\"low\"] {\r\n  background: linear-gradient(to right,lime, rgba(0, 128, 0, 0) 60px);\r\n} .card[data-priority=\"low\"].active {\r\n  background: linear-gradient(to bottom,lime, rgba(0, 128, 0, 0) 60px);\r\n}\r\n.card[data-priority=\"middle\"] {\r\n  background: linear-gradient(to right, goldenrod, rgba(0, 128, 0, 0) 60px);\r\n} .card[data-priority=\"middle\"].active {\r\n  background: linear-gradient(to bottom, goldenrod, rgba(0, 128, 0, 0) 60px);\r\n}\r\n.card[data-priority=\"high\"] {\r\n  background: linear-gradient(to right, orangered, rgba(0, 128, 0, 0) 60px);\r\n} .card[data-priority=\"high\"].active {\r\n  background: linear-gradient(to bottom, orangered, rgba(0, 128, 0, 0) 60px);\r\n}\r\n\r\n\r\n\r\n/* card icons */\r\n.card-icon {\r\n  position: relative;\r\n  width: var(--icon-size);\r\n  height: var(--icon-size);\r\n  cursor: pointer;\r\n  appearance: none;\r\n}\r\n.card-icon::after {\r\n  position: absolute;\r\n  content: \"\";\r\n  inset: 0;\r\n  background-size: 100%;\r\n  background-position: center;\r\n}\r\n\r\n.card-icon.icon-pin::after {\r\n  background-image: url(./media/images/icons/pin.svg);\r\n} .card-icon.icon-pin:checked::after {\r\n  background-image: url(./media/images/icons/pin-active.svg);\r\n}\r\n.card-icon.icon-edit::after {\r\n  background-image: url(./media/images/icons/edit.svg);\r\n/* } .card-icon.icon-edit:checked::after { */\r\n}\r\n.card-icon.icon-fav::after {\r\n  background-image: url(./media/images/icons/fav.svg);\r\n}.card-icon.icon-fav:checked::after {\r\n  background-image: url(./media/images/icons/fav-active.svg);\r\n}\r\n\r\n.card ul li {\r\n  display: grid;\r\n  grid-template-columns: auto 1fr auto auto;\r\n  gap: .5rem;\r\n}\r\n.edit-buttons {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  gap: .5rem;\r\n}\r\n\r\n.delete-icon {\r\n  position: relative;\r\n  width: var(--icon-size);\r\n}.icon-trash,\r\n.icon-trash-lid {\r\n  position: absolute;\r\n  transition: rotate 500ms;\r\n}\r\n.icon-trash { transform-origin: 100% 0%;}\r\n.icon-trash-lid { transform-origin: 250% 0%;}\r\n.delete-icon:hover .icon-trash { rotate: -10deg;}\r\n.delete-icon:hover .icon-trash-lid { rotate: 10deg; }\r\n\r\n.card-icon.icon-edit:hover {\r\n  animation: edit-shake 300ms;\r\n  transform-origin: 0% 100%;\r\n}\r\n@keyframes edit-shake {\r\n  0%, 100% { rotate: 0deg;}\r\n  10% { rotate: 5deg;}\r\n  20% { rotate: -5deg;}\r\n  30% { rotate: 4deg;}\r\n  40% { rotate: -4deg;}\r\n  50% { rotate: 3deg;}\r\n  60% { rotate: -3deg;}\r\n  70% { rotate: 2deg;}\r\n  80% { rotate: -2deg;}\r\n  90% { rotate: 1deg;}\r\n}\r\n\r\n.card-icon.icon-fav:hover{\r\n  animation: fav-spin 300ms;\r\n  transform-origin: 50% 55%;\r\n}\r\n@keyframes fav-spin { to {rotate: 72deg;} }\r\n\r\n.card-icon.icon-fav.shake {\r\n  animation: star-shake 300ms;\r\n}\r\n@keyframes star-shake {\r\n  0%, 100% {\r\n    rotate: 0deg;\r\n    filter: drop-shadow(0 0 5px goldenrod)\r\n      brightness(150%);\r\n  }\r\n  10% { rotate: 10deg;}\r\n  20% { rotate: -10deg;}\r\n  30% { rotate: 8deg;}\r\n  40% { rotate: -8deg;}\r\n  50% { rotate: 6deg;}\r\n  60% { rotate: -6deg;}\r\n  70% { rotate: 4deg;}\r\n  80% { rotate: -4deg;}\r\n  90% { rotate: 2deg;}\r\n}\r\n\r\n.check-icon.icon-edit {\r\n  width: var(--icon-check-size);\r\n}\r\n\r\n/*for testing*/\r\n/* * {\r\n  outline: 1px solid gray;\r\n} */"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
/* harmony import */ var _media_images_icons_pin_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../media/images/icons/pin.svg */ "./src/media/images/icons/pin.svg");
/* harmony import */ var _media_images_icons_pin_active_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../media/images/icons/pin-active.svg */ "./src/media/images/icons/pin-active.svg");
/* harmony import */ var _modules_classes_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modules/classes.js */ "./src/modules/classes.js");










//for testing

const localStorageTest = [
  {
    title: "routine",
    todos: [
      new _modules_classes_js__WEBPACK_IMPORTED_MODULE_9__.Todo("exercise", "It's leg day!", "2022-11-23T17:42", null, [
        { task: "run 3km", isDone: true },
        { task: "bicycle", isDone: false },
        { task: "squats", isDone: false },
      ], "low", false, false),

      new _modules_classes_js__WEBPACK_IMPORTED_MODULE_9__.Todo("coding", null, "2022-11-23T17:42", null, [
        { task: "check css-tricks", isDone: true },
        { task: "continue TOP practice", isDone: true },
      ], "high", true, true),
    ],
  },
  {
    title: "test",
    todos: [
      new _modules_classes_js__WEBPACK_IMPORTED_MODULE_9__.Todo("test1", "test1 descr", "2022-11-23T17:42","2023-11-23T17:42", [
        { task: "test1 task1", isDone: true },
        { task: "test1 task2", isDone: false },
        { task: "test1 task3", isDone: true },
      ], "low", true, false),

      new _modules_classes_js__WEBPACK_IMPORTED_MODULE_9__.Todo("test2", "test2 descr", "2022-11-23T17:42", "2023-11-23T17:42", [
        { task: "test2 task1", isDone: true },
        { task: "test2 task2", isDone: false },
        { task: "test2 task3", isDone: true },
        { task: "test2 task4", isDone: false },
        { task: "test2 task5", isDone: false },
      ], "middle", true, false),
      new _modules_classes_js__WEBPACK_IMPORTED_MODULE_9__.Todo("test3", "test3 descr", "2022-11-23T17:42", "2023-11-23T17:42", [
        { task: "test3 task1", isDone: true },
        { task: "test3 task2", isDone: true },
        { task: "test3 task3", isDone: false },
        { task: "test3 task4", isDone: false },
        { task: "test3 task5", isDone: true },
      ], "low", false, true),
      new _modules_classes_js__WEBPACK_IMPORTED_MODULE_9__.Todo("test4", "test4 descr", "2022-11-23T17:42", "2023-11-23T17:42", [
        { task: "test4 task1", isDone: false },
        { task: "test4 task2", isDone: false },
        { task: "test4 task3", isDone: true },
        { task: "test4 task4", isDone: false },
        { task: "test4 task5", isDone: true },
      ], "low", true, false),
      new _modules_classes_js__WEBPACK_IMPORTED_MODULE_9__.Todo("test5", "test5 descr", "2022-11-23T17:42", "2023-11-23T17:42", [
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

    const pin = document.createElement("input");
    pin.type = "checkbox";
    pin.checked = todo.isPinned ? true : false;
    pin.classList.add("card-icon", "icon-pin");

    const edit = document.createElement("input");
    edit.type = "checkbox";
    edit.classList.add("card-icon", "icon-edit");
    edit.addEventListener("click", cardEdit);

    const fav = document.createElement("input");
    fav.type = "checkbox";
    fav.checked = todo.isFavorite ? true : false;
    fav.classList.add("card-icon", "icon-fav");
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
    editBtns.append(pin, edit, fav, deleteIcon);

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

/***/ "./src/media/images/icons/pin-active.svg":
/*!***********************************************!*\
  !*** ./src/media/images/icons/pin-active.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f841d8dc7eecf3e74692.svg";

/***/ }),

/***/ "./src/media/images/icons/pin.svg":
/*!****************************************!*\
  !*** ./src/media/images/icons/pin.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aaba0694f523b1411efb.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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by1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdWkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vbWVkaWEvaW1hZ2VzL2ljb25zL3Bpbi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL21lZGlhL2ltYWdlcy9pY29ucy9waW4tYWN0aXZlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vbWVkaWEvaW1hZ2VzL2ljb25zL2VkaXQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9tZWRpYS9pbWFnZXMvaWNvbnMvZmF2LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vbWVkaWEvaW1hZ2VzL2ljb25zL2Zhdi1hY3RpdmUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gIC0tYmdjLXBhZ2U6IGxhdmVuZGVyO1xcclxcbiAgLS1jYXJkLXNoYWRvdzogLjI1cmVtIC4yNXJlbSAuMjVyZW0gcmdiYSgwLDAsMCwuMSksXFxyXFxuICAgIGluc2V0IC4yNXJlbSAuMjVyZW0gLjI1cmVtIHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xcclxcbiAgLS1pY29uLXNpemU6IDMwcHg7XFxyXFxuICAtLWljb24tY2hlY2stc2l6ZTogMjBweDtcXHJcXG4gIC0tdHh0LWNvbC0xOiAjMDAwO1xcclxcbiAgLS10eHQtY29sLTI6ICM0NDQ7XFxyXFxuICAtLXR4dC1jb2wtMzogIzY2NjtcXHJcXG4gIC0tY2FyZC1ib3JkZXItcmFkOiAuNzVyZW07XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnYy1wYWdlKTtcXHJcXG59XFxyXFxuXFxyXFxub2wsIHVsIHsgcGFkZGluZzogMDsgbWFyZ2luOiAwOyBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IH1cXHJcXG5cXHJcXG5oMSwgaDIsIHAge21hcmdpbjogMDt9XFxyXFxuaDEge2ZvbnQtc2l6ZTogM3JlbTt9XFxyXFxuXFxyXFxuI21haW4ge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1pdGVtIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgbWFyZ2luOiAxcmVtO1xcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1zaGFkb3cpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBjYXJkcyAqL1xcclxcblxcclxcbi5jYXJkIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93KTtcXHJcXG4gIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIGF1dG8pO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgXFxcIiBkcmFnICB0aXRsZSBlZGl0ICBcXFwiXFxyXFxuICAgIFxcXCIgLi4uLi4gZGVzY3IgZGVzY3IgXFxcIlxcclxcbiAgICBcXFwiIC4uLi4uIHRhc2tzIHRhc2tzIFxcXCI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1pY29uLXNpemUpICogMS43NSkgO1xcclxcbn0gLmNhcmQuYWN0aXZlIHtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cmVtIGhzbCgyNDAsIDcwJSwgOTAlKTtcXHJcXG59IC5jYXJkOm5vdCguYWN0aXZlKTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxyXFxufVxcclxcblxcclxcbi5jYXJkOmZpcnN0LW9mLXR5cGUgeyBib3JkZXItcmFkaXVzOiB2YXIoLS1jYXJkLWJvcmRlci1yYWQpIHZhcigtLWNhcmQtYm9yZGVyLXJhZCkgMCAwOyB9XFxyXFxuLmNhcmQ6bGFzdC1vZi10eXBlIHsgYm9yZGVyLXJhZGl1czogMCAwIHZhcigtLWNhcmQtYm9yZGVyLXJhZCkgdmFyKC0tY2FyZC1ib3JkZXItcmFkKTsgfVxcclxcblxcclxcbi5jYXJkIC50aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbC0xKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59IC5jYXJkIC5kZXNjcmlwdGlvbiB7XFxyXFxuICBncmlkLWFyZWE6IGRlc2NyO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbC0yKTtcXHJcXG59IC5jYXJkIC5jaGVja2xpc3Qge1xcclxcbiAgZ3JpZC1hcmVhOiB0YXNrcztcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBnYXA6IC4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgbGkgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogdmFyKC0taWNvbi1zaXplKTtcXHJcXG4gIGhlaWdodDogdmFyKC0taWNvbi1zaXplKTtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcbi5jYXJkIGxpIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmJlZm9yZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIGluc2V0OiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMDMpO1xcclxcbiAgYm94LXNoYWRvdzogLjFyZW0gLjFyZW0gLjFyZW0gd2hpdGUsXFxyXFxuICAgIGluc2V0IC4xcmVtIC4xcmVtIC4yNXJlbSByZ2JhKDAsMCwwLC4xKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcXHJcXG59XFxyXFxuLmNhcmQgbGkgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YWZ0ZXIge1xcclxcbiAgLS1jaGVjay1hbmltLWR1cmF0aW9uOiAyMDBtcztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgaW5zZXQ6IC03cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICBjbGlwLXBhdGg6IHBvbHlnb24oMCA3NSUsIDE1JSA2MCUsIDE1JSA2MSUsIDE2JSA2MiUsIDE4JSA2NSUsIDQlIDc4JSwgMSUgNzUlKTtcXHJcXG4gIGFuaW1hdGlvbjogY2hlY2ttYXJrLWJhY2t3YXJkcyB2YXIoLS1jaGVjay1hbmltLWR1cmF0aW9uKSBlYXNlLW91dCBmb3J3YXJkcztcXHJcXG59XFxyXFxuLmNhcmQgbGkgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkOjphZnRlciB7XFxyXFxuICBhbmltYXRpb246IGNoZWNrbWFyay1mb3J3YXJkcyB2YXIoLS1jaGVjay1hbmltLWR1cmF0aW9uKSBlYXNlLWluIGZvcndhcmRzO1xcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGNoZWNrbWFyay1mb3J3YXJkcyB7XFxyXFxuICAwJSB7b3BhY2l0eTogMDt9XFxyXFxuICAxJSB7b3BhY2l0eTogMTsgY2xpcC1wYXRoOiBwb2x5Z29uKDAgNzUlLCAxNSUgNjAlLCAxNSUgNjElLCAxNiUgNjIlLCAxOCUgNjUlLCA0JSA3OCUpO31cXHJcXG4gIDMwJSB7Y2xpcC1wYXRoOiBwb2x5Z29uKDAgNzUlLCAxNSUgNjAlLCAyMSUgNjYlLCAyNiUgNzAlLCAzMSUgNzYlLCA5JSA4NiUpO31cXHJcXG4gIDUwJSB7Y2xpcC1wYXRoOiBwb2x5Z29uKDAgNzUlLCAxNSUgNjAlLCAzNSUgNzUlLCA0MyUgODElLCA0OSUgODglLCA0MCUgMTAwJSk7fVxcclxcbiAgMTAwJSB7Y2xpcC1wYXRoOiBwb2x5Z29uKDAgNzUlLCAxNSUgNjAlLCAzNSUgNzUlLCA4NSUgMCwgMTAwJSAxMCUsIDQwJSAxMDAlKTt9XFxyXFxufSBAa2V5ZnJhbWVzIGNoZWNrbWFyay1iYWNrd2FyZHMge1xcclxcbiAgMCUge2NsaXAtcGF0aDogcG9seWdvbigwIDc1JSwgMTUlIDYwJSwgMzUlIDc1JSwgODUlIDAsIDEwMCUgMTAlLCA0MCUgMTAwJSk7fVxcclxcbiAgNTAlIHtjbGlwLXBhdGg6IHBvbHlnb24oMCA3NSUsIDE1JSA2MCUsIDM1JSA3NSUsIDQzJSA4MSUsIDQ5JSA4OCUsIDQwJSAxMDAlKTt9XFxyXFxuICA3MCUge2NsaXAtcGF0aDogcG9seWdvbigwIDc1JSwgMTUlIDYwJSwgMjElIDY2JSwgMjYlIDcwJSwgMzElIDc2JSwgOSUgODYlKTt9XFxyXFxuICA5OSUge29wYWNpdHk6IDE7IGNsaXAtcGF0aDogcG9seWdvbigwIDc1JSwgMTUlIDYwJSwgMTUlIDYxJSwgMTYlIDYyJSwgMTglIDY1JSwgNCUgNzglKTt9XFxyXFxuICAxMDAlIHtvcGFjaXR5OiAwO31cXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgbGFiZWwge1xcclxcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2wtMik7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHRyYW5zcGFyZW50IDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksIHRyYW5zcGFyZW50IDEwMCUpIG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gNTAwbXM7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IC0xMDB2dztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmNhcmQgbGkgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWwge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbC0zKTtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogMTAwdnc7XFxyXFxufVxcclxcblxcclxcbi5jYXJkW2RhdGEtcHJpb3JpdHk9XFxcImxvd1xcXCJdIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCxsaW1lLCByZ2JhKDAsIDEyOCwgMCwgMCkgNjBweCk7XFxyXFxufSAuY2FyZFtkYXRhLXByaW9yaXR5PVxcXCJsb3dcXFwiXS5hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSxsaW1lLCByZ2JhKDAsIDEyOCwgMCwgMCkgNjBweCk7XFxyXFxufVxcclxcbi5jYXJkW2RhdGEtcHJpb3JpdHk9XFxcIm1pZGRsZVxcXCJdIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgZ29sZGVucm9kLCByZ2JhKDAsIDEyOCwgMCwgMCkgNjBweCk7XFxyXFxufSAuY2FyZFtkYXRhLXByaW9yaXR5PVxcXCJtaWRkbGVcXFwiXS5hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgZ29sZGVucm9kLCByZ2JhKDAsIDEyOCwgMCwgMCkgNjBweCk7XFxyXFxufVxcclxcbi5jYXJkW2RhdGEtcHJpb3JpdHk9XFxcImhpZ2hcXFwiXSB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIG9yYW5nZXJlZCwgcmdiYSgwLCAxMjgsIDAsIDApIDYwcHgpO1xcclxcbn0gLmNhcmRbZGF0YS1wcmlvcml0eT1cXFwiaGlnaFxcXCJdLmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCBvcmFuZ2VyZWQsIHJnYmEoMCwgMTI4LCAwLCAwKSA2MHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogY2FyZCBpY29ucyAqL1xcclxcbi5jYXJkLWljb24ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IHZhcigtLWljb24tc2l6ZSk7XFxyXFxuICBoZWlnaHQ6IHZhcigtLWljb24tc2l6ZSk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG4uY2FyZC1pY29uOjphZnRlciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIGluc2V0OiAwO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1pY29uLmljb24tcGluOjphZnRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbn0gLmNhcmQtaWNvbi5pY29uLXBpbjpjaGVja2VkOjphZnRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcclxcbn1cXHJcXG4uY2FyZC1pY29uLmljb24tZWRpdDo6YWZ0ZXIge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXHJcXG4vKiB9IC5jYXJkLWljb24uaWNvbi1lZGl0OmNoZWNrZWQ6OmFmdGVyIHsgKi9cXHJcXG59XFxyXFxuLmNhcmQtaWNvbi5pY29uLWZhdjo6YWZ0ZXIge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXHJcXG59LmNhcmQtaWNvbi5pY29uLWZhdjpjaGVja2VkOjphZnRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB1bCBsaSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvIGF1dG87XFxyXFxuICBnYXA6IC41cmVtO1xcclxcbn1cXHJcXG4uZWRpdC1idXR0b25zIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcclxcbiAgZ2FwOiAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1pY29uIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiB2YXIoLS1pY29uLXNpemUpO1xcclxcbn0uaWNvbi10cmFzaCxcXHJcXG4uaWNvbi10cmFzaC1saWQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdHJhbnNpdGlvbjogcm90YXRlIDUwMG1zO1xcclxcbn1cXHJcXG4uaWNvbi10cmFzaCB7IHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMCU7fVxcclxcbi5pY29uLXRyYXNoLWxpZCB7IHRyYW5zZm9ybS1vcmlnaW46IDI1MCUgMCU7fVxcclxcbi5kZWxldGUtaWNvbjpob3ZlciAuaWNvbi10cmFzaCB7IHJvdGF0ZTogLTEwZGVnO31cXHJcXG4uZGVsZXRlLWljb246aG92ZXIgLmljb24tdHJhc2gtbGlkIHsgcm90YXRlOiAxMGRlZzsgfVxcclxcblxcclxcbi5jYXJkLWljb24uaWNvbi1lZGl0OmhvdmVyIHtcXHJcXG4gIGFuaW1hdGlvbjogZWRpdC1zaGFrZSAzMDBtcztcXHJcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAlIDEwMCU7XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgZWRpdC1zaGFrZSB7XFxyXFxuICAwJSwgMTAwJSB7IHJvdGF0ZTogMGRlZzt9XFxyXFxuICAxMCUgeyByb3RhdGU6IDVkZWc7fVxcclxcbiAgMjAlIHsgcm90YXRlOiAtNWRlZzt9XFxyXFxuICAzMCUgeyByb3RhdGU6IDRkZWc7fVxcclxcbiAgNDAlIHsgcm90YXRlOiAtNGRlZzt9XFxyXFxuICA1MCUgeyByb3RhdGU6IDNkZWc7fVxcclxcbiAgNjAlIHsgcm90YXRlOiAtM2RlZzt9XFxyXFxuICA3MCUgeyByb3RhdGU6IDJkZWc7fVxcclxcbiAgODAlIHsgcm90YXRlOiAtMmRlZzt9XFxyXFxuICA5MCUgeyByb3RhdGU6IDFkZWc7fVxcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1pY29uLmljb24tZmF2OmhvdmVye1xcclxcbiAgYW5pbWF0aW9uOiBmYXYtc3BpbiAzMDBtcztcXHJcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1NSU7XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgZmF2LXNwaW4geyB0byB7cm90YXRlOiA3MmRlZzt9IH1cXHJcXG5cXHJcXG4uY2FyZC1pY29uLmljb24tZmF2LnNoYWtlIHtcXHJcXG4gIGFuaW1hdGlvbjogc3Rhci1zaGFrZSAzMDBtcztcXHJcXG59XFxyXFxuQGtleWZyYW1lcyBzdGFyLXNoYWtlIHtcXHJcXG4gIDAlLCAxMDAlIHtcXHJcXG4gICAgcm90YXRlOiAwZGVnO1xcclxcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCA1cHggZ29sZGVucm9kKVxcclxcbiAgICAgIGJyaWdodG5lc3MoMTUwJSk7XFxyXFxuICB9XFxyXFxuICAxMCUgeyByb3RhdGU6IDEwZGVnO31cXHJcXG4gIDIwJSB7IHJvdGF0ZTogLTEwZGVnO31cXHJcXG4gIDMwJSB7IHJvdGF0ZTogOGRlZzt9XFxyXFxuICA0MCUgeyByb3RhdGU6IC04ZGVnO31cXHJcXG4gIDUwJSB7IHJvdGF0ZTogNmRlZzt9XFxyXFxuICA2MCUgeyByb3RhdGU6IC02ZGVnO31cXHJcXG4gIDcwJSB7IHJvdGF0ZTogNGRlZzt9XFxyXFxuICA4MCUgeyByb3RhdGU6IC00ZGVnO31cXHJcXG4gIDkwJSB7IHJvdGF0ZTogMmRlZzt9XFxyXFxufVxcclxcblxcclxcbi5jaGVjay1pY29uLmljb24tZWRpdCB7XFxyXFxuICB3aWR0aDogdmFyKC0taWNvbi1jaGVjay1zaXplKTtcXHJcXG59XFxyXFxuXFxyXFxuLypmb3IgdGVzdGluZyovXFxyXFxuLyogKiB7XFxyXFxuICBvdXRsaW5lOiAxcHggc29saWQgZ3JheTtcXHJcXG59ICovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQjttREFDaUQ7RUFDakQsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2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O0FBQy9COztBQUVBLGNBQWM7QUFDZDs7R0FFR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAtLWJnYy1wYWdlOiBsYXZlbmRlcjtcXHJcXG4gIC0tY2FyZC1zaGFkb3c6IC4yNXJlbSAuMjVyZW0gLjI1cmVtIHJnYmEoMCwwLDAsLjEpLFxcclxcbiAgICBpbnNldCAuMjVyZW0gLjI1cmVtIC4yNXJlbSByZ2JhKDI1NSwyNTUsMjU1LC41KTtcXHJcXG4gIC0taWNvbi1zaXplOiAzMHB4O1xcclxcbiAgLS1pY29uLWNoZWNrLXNpemU6IDIwcHg7XFxyXFxuICAtLXR4dC1jb2wtMTogIzAwMDtcXHJcXG4gIC0tdHh0LWNvbC0yOiAjNDQ0O1xcclxcbiAgLS10eHQtY29sLTM6ICM2NjY7XFxyXFxuICAtLWNhcmQtYm9yZGVyLXJhZDogLjc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ2MtcGFnZSk7XFxyXFxufVxcclxcblxcclxcbm9sLCB1bCB7IHBhZGRpbmc6IDA7IG1hcmdpbjogMDsgbGlzdC1zdHlsZS10eXBlOiBub25lOyB9XFxyXFxuXFxyXFxuaDEsIGgyLCBwIHttYXJnaW46IDA7fVxcclxcbmgxIHtmb250LXNpemU6IDNyZW07fVxcclxcblxcclxcbiNtYWluIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgcGFkZGluZzogLjVyZW07XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaXRlbSB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIG1hcmdpbjogMXJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogY2FyZHMgKi9cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLXNoYWRvdyk7XFxyXFxuICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBhdXRvKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCIgZHJhZyAgdGl0bGUgZWRpdCAgXFxcIlxcclxcbiAgICBcXFwiIC4uLi4uIGRlc2NyIGRlc2NyIFxcXCJcXHJcXG4gICAgXFxcIiAuLi4uLiB0YXNrcyB0YXNrcyBcXFwiO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBoZWlnaHQ6IGNhbGModmFyKC0taWNvbi1zaXplKSAqIDEuNzUpIDtcXHJcXG59IC5jYXJkLmFjdGl2ZSB7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXJlbSBoc2woMjQwLCA3MCUsIDkwJSk7XFxyXFxufSAuY2FyZDpub3QoLmFjdGl2ZSk6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZDpmaXJzdC1vZi10eXBlIHsgYm9yZGVyLXJhZGl1czogdmFyKC0tY2FyZC1ib3JkZXItcmFkKSB2YXIoLS1jYXJkLWJvcmRlci1yYWQpIDAgMDsgfVxcclxcbi5jYXJkOmxhc3Qtb2YtdHlwZSB7IGJvcmRlci1yYWRpdXM6IDAgMCB2YXIoLS1jYXJkLWJvcmRlci1yYWQpIHZhcigtLWNhcmQtYm9yZGVyLXJhZCk7IH1cXHJcXG5cXHJcXG4uY2FyZCAudGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2wtMSk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufSAuY2FyZCAuZGVzY3JpcHRpb24ge1xcclxcbiAgZ3JpZC1hcmVhOiBkZXNjcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2wtMik7XFxyXFxufSAuY2FyZCAuY2hlY2tsaXN0IHtcXHJcXG4gIGdyaWQtYXJlYTogdGFza3M7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ2FwOiAuMjVyZW07XFxyXFxufVxcclxcblxcclxcbi5jYXJkIGxpIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IHZhcigtLWljb24tc2l6ZSk7XFxyXFxuICBoZWlnaHQ6IHZhcigtLWljb24tc2l6ZSk7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG4uY2FyZCBsaSBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjpiZWZvcmUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBpbnNldDogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjAzKTtcXHJcXG4gIGJveC1zaGFkb3c6IC4xcmVtIC4xcmVtIC4xcmVtIHdoaXRlLFxcclxcbiAgICBpbnNldCAuMXJlbSAuMXJlbSAuMjVyZW0gcmdiYSgwLDAsMCwuMSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XFxyXFxufVxcclxcbi5jYXJkIGxpIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmFmdGVyIHtcXHJcXG4gIC0tY2hlY2stYW5pbS1kdXJhdGlvbjogMjAwbXM7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIGluc2V0OiAtN3B4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgNzUlLCAxNSUgNjAlLCAxNSUgNjElLCAxNiUgNjIlLCAxOCUgNjUlLCA0JSA3OCUsIDElIDc1JSk7XFxyXFxuICBhbmltYXRpb246IGNoZWNrbWFyay1iYWNrd2FyZHMgdmFyKC0tY2hlY2stYW5pbS1kdXJhdGlvbikgZWFzZS1vdXQgZm9yd2FyZHM7XFxyXFxufVxcclxcbi5jYXJkIGxpIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDo6YWZ0ZXIge1xcclxcbiAgYW5pbWF0aW9uOiBjaGVja21hcmstZm9yd2FyZHMgdmFyKC0tY2hlY2stYW5pbS1kdXJhdGlvbikgZWFzZS1pbiBmb3J3YXJkcztcXHJcXG59XFxyXFxuQGtleWZyYW1lcyBjaGVja21hcmstZm9yd2FyZHMge1xcclxcbiAgMCUge29wYWNpdHk6IDA7fVxcclxcbiAgMSUge29wYWNpdHk6IDE7IGNsaXAtcGF0aDogcG9seWdvbigwIDc1JSwgMTUlIDYwJSwgMTUlIDYxJSwgMTYlIDYyJSwgMTglIDY1JSwgNCUgNzglKTt9XFxyXFxuICAzMCUge2NsaXAtcGF0aDogcG9seWdvbigwIDc1JSwgMTUlIDYwJSwgMjElIDY2JSwgMjYlIDcwJSwgMzElIDc2JSwgOSUgODYlKTt9XFxyXFxuICA1MCUge2NsaXAtcGF0aDogcG9seWdvbigwIDc1JSwgMTUlIDYwJSwgMzUlIDc1JSwgNDMlIDgxJSwgNDklIDg4JSwgNDAlIDEwMCUpO31cXHJcXG4gIDEwMCUge2NsaXAtcGF0aDogcG9seWdvbigwIDc1JSwgMTUlIDYwJSwgMzUlIDc1JSwgODUlIDAsIDEwMCUgMTAlLCA0MCUgMTAwJSk7fVxcclxcbn0gQGtleWZyYW1lcyBjaGVja21hcmstYmFja3dhcmRzIHtcXHJcXG4gIDAlIHtjbGlwLXBhdGg6IHBvbHlnb24oMCA3NSUsIDE1JSA2MCUsIDM1JSA3NSUsIDg1JSAwLCAxMDAlIDEwJSwgNDAlIDEwMCUpO31cXHJcXG4gIDUwJSB7Y2xpcC1wYXRoOiBwb2x5Z29uKDAgNzUlLCAxNSUgNjAlLCAzNSUgNzUlLCA0MyUgODElLCA0OSUgODglLCA0MCUgMTAwJSk7fVxcclxcbiAgNzAlIHtjbGlwLXBhdGg6IHBvbHlnb24oMCA3NSUsIDE1JSA2MCUsIDIxJSA2NiUsIDI2JSA3MCUsIDMxJSA3NiUsIDklIDg2JSk7fVxcclxcbiAgOTklIHtvcGFjaXR5OiAxOyBjbGlwLXBhdGg6IHBvbHlnb24oMCA3NSUsIDE1JSA2MCUsIDE1JSA2MSUsIDE2JSA2MiUsIDE4JSA2NSUsIDQlIDc4JSk7fVxcclxcbiAgMTAwJSB7b3BhY2l0eTogMDt9XFxyXFxufVxcclxcblxcclxcbi5jYXJkIGxhYmVsIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sLTIpO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB0cmFuc3BhcmVudCAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLCB0cmFuc3BhcmVudCAxMDAlKSBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDUwMG1zO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAtMTAwdnc7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5jYXJkIGxpIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2wtMyk7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZFtkYXRhLXByaW9yaXR5PVxcXCJsb3dcXFwiXSB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsbGltZSwgcmdiYSgwLCAxMjgsIDAsIDApIDYwcHgpO1xcclxcbn0gLmNhcmRbZGF0YS1wcmlvcml0eT1cXFwibG93XFxcIl0uYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sbGltZSwgcmdiYSgwLCAxMjgsIDAsIDApIDYwcHgpO1xcclxcbn1cXHJcXG4uY2FyZFtkYXRhLXByaW9yaXR5PVxcXCJtaWRkbGVcXFwiXSB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGdvbGRlbnJvZCwgcmdiYSgwLCAxMjgsIDAsIDApIDYwcHgpO1xcclxcbn0gLmNhcmRbZGF0YS1wcmlvcml0eT1cXFwibWlkZGxlXFxcIl0uYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIGdvbGRlbnJvZCwgcmdiYSgwLCAxMjgsIDAsIDApIDYwcHgpO1xcclxcbn1cXHJcXG4uY2FyZFtkYXRhLXByaW9yaXR5PVxcXCJoaWdoXFxcIl0ge1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBvcmFuZ2VyZWQsIHJnYmEoMCwgMTI4LCAwLCAwKSA2MHB4KTtcXHJcXG59IC5jYXJkW2RhdGEtcHJpb3JpdHk9XFxcImhpZ2hcXFwiXS5hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgb3JhbmdlcmVkLCByZ2JhKDAsIDEyOCwgMCwgMCkgNjBweCk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qIGNhcmQgaWNvbnMgKi9cXHJcXG4uY2FyZC1pY29uIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiB2YXIoLS1pY29uLXNpemUpO1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1pY29uLXNpemUpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuLmNhcmQtaWNvbjo6YWZ0ZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBpbnNldDogMDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaWNvbi5pY29uLXBpbjo6YWZ0ZXIge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vbWVkaWEvaW1hZ2VzL2ljb25zL3Bpbi5zdmcpO1xcclxcbn0gLmNhcmQtaWNvbi5pY29uLXBpbjpjaGVja2VkOjphZnRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9tZWRpYS9pbWFnZXMvaWNvbnMvcGluLWFjdGl2ZS5zdmcpO1xcclxcbn1cXHJcXG4uY2FyZC1pY29uLmljb24tZWRpdDo6YWZ0ZXIge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vbWVkaWEvaW1hZ2VzL2ljb25zL2VkaXQuc3ZnKTtcXHJcXG4vKiB9IC5jYXJkLWljb24uaWNvbi1lZGl0OmNoZWNrZWQ6OmFmdGVyIHsgKi9cXHJcXG59XFxyXFxuLmNhcmQtaWNvbi5pY29uLWZhdjo6YWZ0ZXIge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vbWVkaWEvaW1hZ2VzL2ljb25zL2Zhdi5zdmcpO1xcclxcbn0uY2FyZC1pY29uLmljb24tZmF2OmNoZWNrZWQ6OmFmdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL21lZGlhL2ltYWdlcy9pY29ucy9mYXYtYWN0aXZlLnN2Zyk7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHVsIGxpIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG8gYXV0bztcXHJcXG4gIGdhcDogLjVyZW07XFxyXFxufVxcclxcbi5lZGl0LWJ1dHRvbnMge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxyXFxuICBnYXA6IC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLWljb24ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IHZhcigtLWljb24tc2l6ZSk7XFxyXFxufS5pY29uLXRyYXNoLFxcclxcbi5pY29uLXRyYXNoLWxpZCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0cmFuc2l0aW9uOiByb3RhdGUgNTAwbXM7XFxyXFxufVxcclxcbi5pY29uLXRyYXNoIHsgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwJTt9XFxyXFxuLmljb24tdHJhc2gtbGlkIHsgdHJhbnNmb3JtLW9yaWdpbjogMjUwJSAwJTt9XFxyXFxuLmRlbGV0ZS1pY29uOmhvdmVyIC5pY29uLXRyYXNoIHsgcm90YXRlOiAtMTBkZWc7fVxcclxcbi5kZWxldGUtaWNvbjpob3ZlciAuaWNvbi10cmFzaC1saWQgeyByb3RhdGU6IDEwZGVnOyB9XFxyXFxuXFxyXFxuLmNhcmQtaWNvbi5pY29uLWVkaXQ6aG92ZXIge1xcclxcbiAgYW5pbWF0aW9uOiBlZGl0LXNoYWtlIDMwMG1zO1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcXHJcXG59XFxyXFxuQGtleWZyYW1lcyBlZGl0LXNoYWtlIHtcXHJcXG4gIDAlLCAxMDAlIHsgcm90YXRlOiAwZGVnO31cXHJcXG4gIDEwJSB7IHJvdGF0ZTogNWRlZzt9XFxyXFxuICAyMCUgeyByb3RhdGU6IC01ZGVnO31cXHJcXG4gIDMwJSB7IHJvdGF0ZTogNGRlZzt9XFxyXFxuICA0MCUgeyByb3RhdGU6IC00ZGVnO31cXHJcXG4gIDUwJSB7IHJvdGF0ZTogM2RlZzt9XFxyXFxuICA2MCUgeyByb3RhdGU6IC0zZGVnO31cXHJcXG4gIDcwJSB7IHJvdGF0ZTogMmRlZzt9XFxyXFxuICA4MCUgeyByb3RhdGU6IC0yZGVnO31cXHJcXG4gIDkwJSB7IHJvdGF0ZTogMWRlZzt9XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWljb24uaWNvbi1mYXY6aG92ZXJ7XFxyXFxuICBhbmltYXRpb246IGZhdi1zcGluIDMwMG1zO1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDU1JTtcXHJcXG59XFxyXFxuQGtleWZyYW1lcyBmYXYtc3BpbiB7IHRvIHtyb3RhdGU6IDcyZGVnO30gfVxcclxcblxcclxcbi5jYXJkLWljb24uaWNvbi1mYXYuc2hha2Uge1xcclxcbiAgYW5pbWF0aW9uOiBzdGFyLXNoYWtlIDMwMG1zO1xcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIHN0YXItc2hha2Uge1xcclxcbiAgMCUsIDEwMCUge1xcclxcbiAgICByb3RhdGU6IDBkZWc7XFxyXFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDVweCBnb2xkZW5yb2QpXFxyXFxuICAgICAgYnJpZ2h0bmVzcygxNTAlKTtcXHJcXG4gIH1cXHJcXG4gIDEwJSB7IHJvdGF0ZTogMTBkZWc7fVxcclxcbiAgMjAlIHsgcm90YXRlOiAtMTBkZWc7fVxcclxcbiAgMzAlIHsgcm90YXRlOiA4ZGVnO31cXHJcXG4gIDQwJSB7IHJvdGF0ZTogLThkZWc7fVxcclxcbiAgNTAlIHsgcm90YXRlOiA2ZGVnO31cXHJcXG4gIDYwJSB7IHJvdGF0ZTogLTZkZWc7fVxcclxcbiAgNzAlIHsgcm90YXRlOiA0ZGVnO31cXHJcXG4gIDgwJSB7IHJvdGF0ZTogLTRkZWc7fVxcclxcbiAgOTAlIHsgcm90YXRlOiAyZGVnO31cXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrLWljb24uaWNvbi1lZGl0IHtcXHJcXG4gIHdpZHRoOiB2YXIoLS1pY29uLWNoZWNrLXNpemUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKmZvciB0ZXN0aW5nKi9cXHJcXG4vKiAqIHtcXHJcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBncmF5O1xcclxcbn0gKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHsgdWkgfSBmcm9tIFwiLi9tb2R1bGVzL3VpLmpzXCI7XHJcbmltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi9tb2R1bGVzL2NsYXNzZXMuanNcIjtcclxuXHJcbi8vZm9yIHRlc3RpbmdcclxuaW1wb3J0IHtsb2NhbFN0b3JhZ2VUZXN0fSBmcm9tIFwiLi9tb2R1bGVzL3VpLmpzXCJcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XHJcbiAgaWYoZS5rZXkgPT09IFwiclwiKXtcclxuICAgIHVpLnBsYWNlQ2FyZHMobG9jYWxTdG9yYWdlVGVzdCk7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlcGxhY2luZyBtYWluXCIpO1xyXG4gIH07XHJcbn0pO1xyXG5cclxuXHJcbi8vcnVuIG9uIGxvYWRcclxudWkucGxhY2VDYXJkcyhsb2NhbFN0b3JhZ2VUZXN0KTtcclxuIiwiZXhwb3J0IGNsYXNzIFRvZG8ge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZUNyZWF0aW9uLCBkYXRlRHVlLCAvL3R5cGU9XCJkYXRldGltZS1sb2NhbFwiXHJcbiAgICBjaGVja3MsIHByaW9yaXR5LCBpc0Zhdm9yaXRlLCBpc1Bpbm5lZCl7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmRhdGVDcmVhdGlvbiA9IGRhdGVDcmVhdGlvbjtcclxuICAgIHRoaXMuZGF0ZUR1ZSA9IGRhdGVEdWU7XHJcbiAgICB0aGlzLmNoZWNrcyA9IGNoZWNrcztcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIHRoaXMuaXNGYXZvcml0ZSA9IGlzRmF2b3JpdGU7XHJcbiAgICB0aGlzLmlzUGlubmVkID0gaXNQaW5uZWQ7XHJcbiAgfTtcclxuICBcclxuICB0b2dnbGVGYXYoKXtcclxuICAgIHRoaXMuaXNGYXZvcml0ZSA9ICF0aGlzLmlzRmF2b3JpdGU7XHJcbiAgfTtcclxuXHJcbiAgdG9nZ2xlVGFzayhpZHgpe1xyXG4gICAgdGhpcy5jaGVja3NbaWR4XS5pc0RvbmUgPSAhdGhpcy5jaGVja3NbaWR4XS5pc0RvbmU7XHJcbiAgfTtcclxufTsiLCJpbXBvcnQgaWNvbkNoZWNrbWFyayBmcm9tIFwiLi4vbWVkaWEvaW1hZ2VzL2ljb25zL2NoZWNrbWFyay5zdmdcIjtcclxuaW1wb3J0IGljb25EcmFnIGZyb20gXCIuLi9tZWRpYS9pbWFnZXMvaWNvbnMvZHJhZy5zdmdcIjtcclxuaW1wb3J0IGljb25FZGl0IGZyb20gXCIuLi9tZWRpYS9pbWFnZXMvaWNvbnMvZWRpdC5zdmdcIjtcclxuaW1wb3J0IGljb25UcmFzaCBmcm9tIFwiLi4vbWVkaWEvaW1hZ2VzL2ljb25zL3RyYXNoLnN2Z1wiO1xyXG5pbXBvcnQgaWNvblRyYXNoTGlkIGZyb20gXCIuLi9tZWRpYS9pbWFnZXMvaWNvbnMvdHJhc2gtbGlkLnN2Z1wiO1xyXG5pbXBvcnQgaWNvbkZhdiBmcm9tIFwiLi4vbWVkaWEvaW1hZ2VzL2ljb25zL2Zhdi5zdmdcIjtcclxuaW1wb3J0IGljb25GYXZBY3RpdmUgZnJvbSBcIi4uL21lZGlhL2ltYWdlcy9pY29ucy9mYXYtYWN0aXZlLnN2Z1wiO1xyXG5pbXBvcnQgaWNvblBpbiBmcm9tIFwiLi4vbWVkaWEvaW1hZ2VzL2ljb25zL3Bpbi5zdmdcIlxyXG5pbXBvcnQgaWNvblBpbkFjdGl2ZSBmcm9tIFwiLi4vbWVkaWEvaW1hZ2VzL2ljb25zL3Bpbi1hY3RpdmUuc3ZnXCJcclxuXHJcbi8vZm9yIHRlc3RpbmdcclxuaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuLi9tb2R1bGVzL2NsYXNzZXMuanNcIjtcclxuZXhwb3J0IGNvbnN0IGxvY2FsU3RvcmFnZVRlc3QgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwicm91dGluZVwiLFxyXG4gICAgdG9kb3M6IFtcclxuICAgICAgbmV3IFRvZG8oXCJleGVyY2lzZVwiLCBcIkl0J3MgbGVnIGRheSFcIiwgXCIyMDIyLTExLTIzVDE3OjQyXCIsIG51bGwsIFtcclxuICAgICAgICB7IHRhc2s6IFwicnVuIDNrbVwiLCBpc0RvbmU6IHRydWUgfSxcclxuICAgICAgICB7IHRhc2s6IFwiYmljeWNsZVwiLCBpc0RvbmU6IGZhbHNlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcInNxdWF0c1wiLCBpc0RvbmU6IGZhbHNlIH0sXHJcbiAgICAgIF0sIFwibG93XCIsIGZhbHNlLCBmYWxzZSksXHJcblxyXG4gICAgICBuZXcgVG9kbyhcImNvZGluZ1wiLCBudWxsLCBcIjIwMjItMTEtMjNUMTc6NDJcIiwgbnVsbCwgW1xyXG4gICAgICAgIHsgdGFzazogXCJjaGVjayBjc3MtdHJpY2tzXCIsIGlzRG9uZTogdHJ1ZSB9LFxyXG4gICAgICAgIHsgdGFzazogXCJjb250aW51ZSBUT1AgcHJhY3RpY2VcIiwgaXNEb25lOiB0cnVlIH0sXHJcbiAgICAgIF0sIFwiaGlnaFwiLCB0cnVlLCB0cnVlKSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJ0ZXN0XCIsXHJcbiAgICB0b2RvczogW1xyXG4gICAgICBuZXcgVG9kbyhcInRlc3QxXCIsIFwidGVzdDEgZGVzY3JcIiwgXCIyMDIyLTExLTIzVDE3OjQyXCIsXCIyMDIzLTExLTIzVDE3OjQyXCIsIFtcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDEgdGFzazFcIiwgaXNEb25lOiB0cnVlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcInRlc3QxIHRhc2syXCIsIGlzRG9uZTogZmFsc2UgfSxcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDEgdGFzazNcIiwgaXNEb25lOiB0cnVlIH0sXHJcbiAgICAgIF0sIFwibG93XCIsIHRydWUsIGZhbHNlKSxcclxuXHJcbiAgICAgIG5ldyBUb2RvKFwidGVzdDJcIiwgXCJ0ZXN0MiBkZXNjclwiLCBcIjIwMjItMTEtMjNUMTc6NDJcIiwgXCIyMDIzLTExLTIzVDE3OjQyXCIsIFtcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDIgdGFzazFcIiwgaXNEb25lOiB0cnVlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcInRlc3QyIHRhc2syXCIsIGlzRG9uZTogZmFsc2UgfSxcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDIgdGFzazNcIiwgaXNEb25lOiB0cnVlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcInRlc3QyIHRhc2s0XCIsIGlzRG9uZTogZmFsc2UgfSxcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDIgdGFzazVcIiwgaXNEb25lOiBmYWxzZSB9LFxyXG4gICAgICBdLCBcIm1pZGRsZVwiLCB0cnVlLCBmYWxzZSksXHJcbiAgICAgIG5ldyBUb2RvKFwidGVzdDNcIiwgXCJ0ZXN0MyBkZXNjclwiLCBcIjIwMjItMTEtMjNUMTc6NDJcIiwgXCIyMDIzLTExLTIzVDE3OjQyXCIsIFtcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDMgdGFzazFcIiwgaXNEb25lOiB0cnVlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcInRlc3QzIHRhc2syXCIsIGlzRG9uZTogdHJ1ZSB9LFxyXG4gICAgICAgIHsgdGFzazogXCJ0ZXN0MyB0YXNrM1wiLCBpc0RvbmU6IGZhbHNlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcInRlc3QzIHRhc2s0XCIsIGlzRG9uZTogZmFsc2UgfSxcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDMgdGFzazVcIiwgaXNEb25lOiB0cnVlIH0sXHJcbiAgICAgIF0sIFwibG93XCIsIGZhbHNlLCB0cnVlKSxcclxuICAgICAgbmV3IFRvZG8oXCJ0ZXN0NFwiLCBcInRlc3Q0IGRlc2NyXCIsIFwiMjAyMi0xMS0yM1QxNzo0MlwiLCBcIjIwMjMtMTEtMjNUMTc6NDJcIiwgW1xyXG4gICAgICAgIHsgdGFzazogXCJ0ZXN0NCB0YXNrMVwiLCBpc0RvbmU6IGZhbHNlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcInRlc3Q0IHRhc2syXCIsIGlzRG9uZTogZmFsc2UgfSxcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDQgdGFzazNcIiwgaXNEb25lOiB0cnVlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcInRlc3Q0IHRhc2s0XCIsIGlzRG9uZTogZmFsc2UgfSxcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDQgdGFzazVcIiwgaXNEb25lOiB0cnVlIH0sXHJcbiAgICAgIF0sIFwibG93XCIsIHRydWUsIGZhbHNlKSxcclxuICAgICAgbmV3IFRvZG8oXCJ0ZXN0NVwiLCBcInRlc3Q1IGRlc2NyXCIsIFwiMjAyMi0xMS0yM1QxNzo0MlwiLCBcIjIwMjMtMTEtMjNUMTc6NDJcIiwgW1xyXG4gICAgICAgIHsgdGFzazogXCJ0ZXN0NSB0YXNrMVwiLCBpc0RvbmU6IGZhbHNlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcInRlc3Q1IHRhc2syXCIsIGlzRG9uZTogdHJ1ZSB9LFxyXG4gICAgICAgIHsgdGFzazogXCJ0ZXN0NSB0YXNrM1wiLCBpc0RvbmU6IHRydWUgfSxcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDUgdGFzazRcIiwgaXNEb25lOiBmYWxzZSB9LFxyXG4gICAgICAgIHsgdGFzazogXCJ0ZXN0NSB0YXNrNVwiLCBpc0RvbmU6IHRydWUgfSxcclxuICAgICAgXSwgXCJoaWdoXCIsIGZhbHNlLCBmYWxzZSksXHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgdWkgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xyXG5cclxuICBmdW5jdGlvbiBwbGFjZUNhcmQodG9kbywgcHJvamVjdElkeCwgdG9kb0lkeCl7XHJcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XHJcbiAgICBjYXJkLmRhdGFzZXQucHJpb3JpdHkgPSB0b2RvLnByaW9yaXR5O1xyXG5cclxuICAgIGNvbnN0IGRyYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgZHJhZy5jbGFzc0xpc3QuYWRkKFwiY2FyZC1pY29uXCIsIFwiaWNvbi1kcmFnXCIpO1xyXG4gICAgZHJhZy5zcmMgPSBpY29uRHJhZztcclxuICAgIGRyYWcuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBjYXJkRHJhZyk7XHJcblxyXG4gICAgY29uc3QgZWRpdEJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZWRpdEJ0bnMuY2xhc3NMaXN0LmFkZChcImVkaXQtYnV0dG9uc1wiKTtcclxuXHJcbiAgICBjb25zdCBwaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBwaW4udHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgIHBpbi5jaGVja2VkID0gdG9kby5pc1Bpbm5lZCA/IHRydWUgOiBmYWxzZTtcclxuICAgIHBpbi5jbGFzc0xpc3QuYWRkKFwiY2FyZC1pY29uXCIsIFwiaWNvbi1waW5cIik7XHJcblxyXG4gICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGVkaXQudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgIGVkaXQuY2xhc3NMaXN0LmFkZChcImNhcmQtaWNvblwiLCBcImljb24tZWRpdFwiKTtcclxuICAgIGVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhcmRFZGl0KTtcclxuXHJcbiAgICBjb25zdCBmYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBmYXYudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgIGZhdi5jaGVja2VkID0gdG9kby5pc0Zhdm9yaXRlID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgZmF2LmNsYXNzTGlzdC5hZGQoXCJjYXJkLWljb25cIiwgXCJpY29uLWZhdlwiKTtcclxuICAgIGZhdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FyZEZhdlRvZ2dsZSk7XHJcbiAgICBmYXYuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCAoZSkgPT4ge1xyXG4gICAgICBpZihlLmFuaW1hdGlvbk5hbWUgPT09IFwic3Rhci1zaGFrZVwiKSB7XHJcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcInNoYWtlXCIpO1xyXG4gICAgICB9O1xyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1pY29uXCIpO1xyXG4gICAgZGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FyZERlbGV0ZSk7XHJcblxyXG4gICAgY29uc3QgdHJhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgdHJhc2guY2xhc3NMaXN0LmFkZChcImNhcmQtaWNvblwiLCBcImljb24tdHJhc2hcIik7XHJcbiAgICB0cmFzaC5zcmMgPSBpY29uVHJhc2g7XHJcbiAgICBjb25zdCB0cmFzaExpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICB0cmFzaExpZC5jbGFzc0xpc3QuYWRkKFwiY2FyZC1pY29uXCIsIFwiaWNvbi10cmFzaC1saWRcIik7XHJcbiAgICB0cmFzaExpZC5zcmMgPSBpY29uVHJhc2hMaWQ7XHJcbiAgICBcclxuICAgIGRlbGV0ZUljb24uYXBwZW5kKHRyYXNoLCB0cmFzaExpZCk7XHJcbiAgICBlZGl0QnRucy5hcHBlbmQocGluLCBlZGl0LCBmYXYsIGRlbGV0ZUljb24pO1xyXG5cclxuICAgIFtjYXJkLGRyYWcsZWRpdCxmYXYsZGVsZXRlSWNvbl0uZm9yRWFjaChpY29uID0+IHtcclxuICAgICAgaWNvbi5kYXRhc2V0LnByb2plY3RJZHggPSBwcm9qZWN0SWR4O1xyXG4gICAgICBpY29uLmRhdGFzZXQudG9kb0lkeCA9IHRvZG9JZHg7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XHJcbiAgICB0aXRsZS5pbm5lclRleHQgPSB0b2RvLnRpdGxlO1xyXG4gICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgY29uc3QgdGhpc0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIGBbZGF0YS1wcm9qZWN0LWlkeD1cIiR7cHJvamVjdElkeH1cIl1bZGF0YS10b2RvLWlkeD1cIiR7dG9kb0lkeH1cIl1gXHJcbiAgICAgICAgKTtcclxuICAgICAgXHJcbiAgICAgICAgdGhpc0NhcmQuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XHJcbiAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSB0b2RvLmRlc2NyaXB0aW9uO1xyXG5cclxuICAgIGNvbnN0IGNoZWNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIGNoZWNrcy5jbGFzc0xpc3QuYWRkKFwiY2hlY2tsaXN0XCIpO1xyXG5cclxuICAgIHRvZG8uY2hlY2tzLmZvckVhY2goKGNoZWNrLGkpID0+IHtcclxuICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuXHJcbiAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgICBjaGVja2JveC5pZCA9IGAke3RvZG8udGl0bGV9LSR7aX1gOyAvL2ZvciBsYWJlbCBvbmx5XHJcbiAgICAgIGNoZWNrYm94LmRhdGFzZXQucHJvamVjdElkeCA9IHByb2plY3RJZHg7XHJcbiAgICAgIGNoZWNrYm94LmRhdGFzZXQudG9kb0lkeCA9IHRvZG9JZHg7XHJcbiAgICAgIGNoZWNrYm94LmRhdGFzZXQudGFza0lkeCA9IGk7XHJcblxyXG4gICAgICBjaGVja2JveC5jaGVja2VkID0gY2hlY2suaXNEb25lO1xyXG4gICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGFza0NoZWNrVG9nZ2xlKTtcclxuXHJcbiAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICBsYWJlbC5odG1sRm9yID0gY2hlY2tib3guaWQ7XHJcbiAgICAgIGxhYmVsLmlubmVyVGV4dCA9IGNoZWNrLnRhc2s7XHJcblxyXG4gICAgICBjb25zdCBlZGl0Q2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICBlZGl0Q2hlY2suc3JjID0gaWNvbkVkaXQ7XHJcbiAgICAgIGVkaXRDaGVjay5jbGFzc0xpc3QuYWRkKFwiY2FyZC1pY29uXCIsIFwiY2hlY2staWNvblwiLCBcImljb24tZWRpdFwiKTtcclxuICAgICAgZWRpdENoZWNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVDaGVja0VkaXQpO1xyXG5cclxuICAgICAgdGFzay5hcHBlbmQoY2hlY2tib3gsIGxhYmVsLCBlZGl0Q2hlY2spO1xyXG5cclxuICAgICAgY2hlY2tzLmFwcGVuZENoaWxkKHRhc2spO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGNhcmQuYXBwZW5kKGRyYWcsIHRpdGxlLCBlZGl0QnRucywgZGVzY3JpcHRpb24sIGNoZWNrcyk7XHJcblxyXG4gICAgcmV0dXJuIGNhcmQ7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwbGFjZUNhcmRzKHByb2plY3RzKXtcclxuXHJcbiAgICBtYWluLnJlcGxhY2VDaGlsZHJlbigpXHJcbiAgICBcclxuXHJcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBwcm9qZWN0SWR4KSA9PiB7XHJcbiAgICAgIGNvbnN0IHByb2plY3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgcHJvamVjdEl0ZW0uZGF0YXNldC5pZHggPSBwcm9qZWN0SWR4O1xyXG4gICAgICBwcm9qZWN0SXRlbS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pdGVtXCIpO1xyXG5cclxuICAgICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICAgIGgxLmlubmVyVGV4dCA9IHByb2plY3QudGl0bGU7XHJcbiAgICAgIHByb2plY3RJdGVtLmFwcGVuZENoaWxkKGgxKTtcclxuXHJcbiAgICAgIHByb2plY3QudG9kb3MuZm9yRWFjaCgodG9kbywgdG9kb0lkeCkgPT4ge1xyXG4gICAgICAgIHByb2plY3RJdGVtLmFwcGVuZENoaWxkKHBsYWNlQ2FyZCh0b2RvLCBwcm9qZWN0SWR4LCB0b2RvSWR4KSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbWFpbi5hcHBlbmRDaGlsZChwcm9qZWN0SXRlbSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBjYXJkRHJhZygpe1xyXG4gICAgY29uc29sZS5sb2coYGRyYWdnaW5nIHByb2plY3QgJHt0aGlzLmRhdGFzZXQucHJvamVjdElkeFxyXG4gICAgfSAtIHRvZG8gJHt0aGlzLmRhdGFzZXQudG9kb0lkeH1gKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNhcmRFZGl0KCl7XHJcbiAgICBjb25zb2xlLmxvZyhgZWRpdGluZyBwcm9qZWN0ICR7dGhpcy5kYXRhc2V0LnByb2plY3RJZHhcclxuICAgIH0gLSB0b2RvICR7dGhpcy5kYXRhc2V0LnRvZG9JZHh9YCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0b2dnbGVDaGVja0VkaXQoKXtcclxuICAgIGNvbnNvbGUubG9nKFwiZWRpdCBjaGVja1wiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNhcmRGYXZUb2dnbGUoKXtcclxuICAgIGNvbnN0IHByb2plY3RJZHggPSB0aGlzLmRhdGFzZXQucHJvamVjdElkeDtcclxuICAgIGNvbnN0IHRvZG9JZHggPSB0aGlzLmRhdGFzZXQudG9kb0lkeDtcclxuICAgIGxvY2FsU3RvcmFnZVRlc3RbcHJvamVjdElkeF0udG9kb3NbdG9kb0lkeF0udG9nZ2xlRmF2KCk7XHJcbiAgICBcclxuICAgIC8vdG9nZ2xlIHN0YXIgaWNvblxyXG4gICAgY29uc3QgaXNGYXYgPSBsb2NhbFN0b3JhZ2VUZXN0W3Byb2plY3RJZHhdLnRvZG9zW3RvZG9JZHhdLmlzRmF2b3JpdGU7XHJcbiAgICB0aGlzLnNyYyA9IGlzRmF2ID8gaWNvbkZhdkFjdGl2ZSA6IGljb25GYXY7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjYXJkRGVsZXRlKCl7XHJcbiAgICBjb25zdCBwcm9qZWN0SWR4ID0gdGhpcy5kYXRhc2V0LnByb2plY3RJZHg7XHJcbiAgICBjb25zdCB0b2RvSWR4ID0gdGhpcy5kYXRhc2V0LnRvZG9JZHg7XHJcblxyXG4gICAgY29uc3QgaXNGYXYgPSBsb2NhbFN0b3JhZ2VUZXN0W3Byb2plY3RJZHhdLnRvZG9zW3RvZG9JZHhdLmlzRmF2b3JpdGU7XHJcbiAgICBpZihpc0Zhdikge1xyXG4gICAgICBjb25zdCB0aGlzQ2FyZFN0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wcm9qZWN0LWlkeD1cIiR7XHJcbiAgICAgICAgcHJvamVjdElkeH1cIl1bZGF0YS10b2RvLWlkeD1cIiR7dG9kb0lkeH1cIl0gLmljb24tZmF2YCk7XHJcbiAgICAgIHRoaXNDYXJkU3Rhci5jbGFzc0xpc3QuYWRkKFwic2hha2VcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH07XHJcblxyXG4gICAgY29uc29sZS5sb2coYGRlbGV0ZSBwcm9qZWN0ICR7cHJvamVjdElkeH0gLSB0b2RvICR7dG9kb0lkeH1gKTtcclxuICAgIGxvY2FsU3RvcmFnZVRlc3RbcHJvamVjdElkeF0udG9kb3Muc3BsaWNlKHRvZG9JZHgsMSk7XHJcbiAgICBwbGFjZUNhcmRzKGxvY2FsU3RvcmFnZVRlc3QpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdGFza0NoZWNrVG9nZ2xlKCl7XHJcbiAgICBsb2NhbFN0b3JhZ2VUZXN0W3RoaXMuZGF0YXNldC5wcm9qZWN0SWR4XVxyXG4gICAgLnRvZG9zW3RoaXMuZGF0YXNldC50b2RvSWR4XS50b2dnbGVUYXNrKHRoaXMuZGF0YXNldC50YXNrSWR4KTtcclxuICB9XHJcbiAgICBcclxuICByZXR1cm4geyBwbGFjZUNhcmRzIH07XHJcbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9