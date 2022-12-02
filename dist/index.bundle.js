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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --bgc-page: lavender;\r\n  --card-shadow: .25rem .25rem .25rem rgba(0,0,0,.1),\r\n    inset .25rem .25rem .25rem rgba(255,255,255,.5);\r\n  --icon-size: 30px;\r\n  --icon-check-size: 20px;\r\n  --txt-col-1: #000;\r\n  --txt-col-2: #444;\r\n  --txt-col-3: #666;\r\n  --card-border-rad: .75rem;\r\n  --card-open-transition: 250ms;\r\n}\r\n\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n  background-color: var(--bgc-page);\r\n}\r\n\r\nol, ul { padding: 0; margin: 0; list-style-type: none; }\r\n\r\nh1, h2, p {margin: 0;}\r\nh1 {font-size: 3rem;}\r\n\r\n#main {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  padding: .5rem;\r\n  overflow: hidden;\r\n  overflow-y: auto;\r\n}\r\n\r\n.project-item {\r\n  box-sizing: border-box;\r\n  padding: 1rem;\r\n  margin: 1rem;\r\n  box-shadow: var(--card-shadow);\r\n}\r\n\r\n\r\n\r\n/* cards */\r\n\r\n.card {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  box-shadow: var(--card-shadow);\r\n  padding: .5rem;\r\n  display: grid;\r\n  grid-template-columns: auto 1fr auto;\r\n  grid-template-rows: repeat(5, auto);\r\n  grid-template-areas:\r\n    \" drag  title   edit  \"\r\n    \" ..... descr   descr \"\r\n    \" ..... created ..... \"\r\n    \" ..... due     ..... \"\r\n    \" ..... tasks   tasks \";\r\n  align-items: center;\r\n  overflow: hidden;\r\n} .card.active {\r\n  height: auto;\r\n  box-shadow: inset 0 0 5rem hsl(240, 70%, 90%);\r\n} .card:not(.active):hover {\r\n  background-color: rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n.card:first-of-type { border-radius: var(--card-border-rad) var(--card-border-rad) 0 0; }\r\n.card:last-of-type { border-radius: 0 0 var(--card-border-rad) var(--card-border-rad); }\r\n\r\n.card .title {\r\n  font-size: 2rem;\r\n  color: var(--txt-col-1);\r\n  cursor: pointer;\r\n  padding-left: .5rem;\r\n}\r\n.card .description {\r\n  grid-area: descr;\r\n  font-size: 1.5rem;\r\n  color: var(--txt-col-2);\r\n}\r\n.card .date-creation {\r\n  grid-area: created;\r\n}\r\n.card .date-due {\r\n  grid-area: due;\r\n}\r\n.card .checklist {\r\n  grid-area: tasks;\r\n  display: grid;\r\n}\r\n\r\n\r\n\r\n/* card priority indicator */\r\n\r\n.card[data-priority=\"low\"] {\r\n  background: linear-gradient(to right,lime, rgba(0, 128, 0, 0) 60px);\r\n} .card[data-priority=\"low\"].active {\r\n  background: linear-gradient(to bottom,lime, rgba(0, 128, 0, 0) 60px);\r\n}\r\n.card[data-priority=\"middle\"] {\r\n  background: linear-gradient(to right, goldenrod, rgba(0, 128, 0, 0) 60px);\r\n} .card[data-priority=\"middle\"].active {\r\n  background: linear-gradient(to bottom, goldenrod, rgba(0, 128, 0, 0) 60px);\r\n}\r\n.card[data-priority=\"high\"] {\r\n  background: linear-gradient(to right, orangered, rgba(0, 128, 0, 0) 60px);\r\n} .card[data-priority=\"high\"].active {\r\n  background: linear-gradient(to bottom, orangered, rgba(0, 128, 0, 0) 60px);\r\n}\r\n\r\n\r\n\r\n/* card details transition */\r\n\r\n.card .description,\r\n.card .date-creation,\r\n.card .date-due,\r\n.card ul li {\r\n  overflow: hidden;\r\n  transition: var(--card-open-transition);\r\n  height: 0rem;\r\n}\r\n.card.active .description,\r\n.card.active .date-creation,\r\n.card.active .date-due,\r\n.card.active ul li {\r\n  overflow: visible;\r\n  height: 1.75rem;\r\n}\r\n/*individual settings*/\r\n.card .description { margin-top: 0rem; margin-bottom: 0rem;}\r\n.card.active .description { margin-top: 1rem; margin-bottom: .5rem;}\r\n.card.active ul li { height: 2.5rem;}\r\n.card .date-due  {margin-bottom: 0rem; }\r\n.card.active .date-due  {margin-bottom: .5rem; }\r\n\r\n.card ul li:nth-child(1) { transition-delay: 25ms; }\r\n.card ul li:nth-child(2) { transition-delay: 50ms; }\r\n.card ul li:nth-child(3) { transition-delay: 75ms; }\r\n.card ul li:nth-child(4) { transition-delay: 100ms; }\r\n.card ul li:nth-child(5) { transition-delay: 125ms; }\r\n.card ul li:nth-child(6) { transition-delay: 150ms; }\r\n.card ul li:nth-child(7) { transition-delay: 175ms; }\r\n.card ul li:nth-child(8) { transition-delay: 200ms; }\r\n.card ul li:nth-child(9) { transition-delay: 225ms; }\r\n.card ul li:nth-child(10) { transition-delay: 250ms; }\r\n.card ul li:nth-child(11) { transition-delay: 275ms; }\r\n.card ul li:nth-child(12) { transition-delay: 300ms; }\r\n.card ul li:nth-child(13) { transition-delay: 325ms; }\r\n.card ul li:nth-child(14) { transition-delay: 350ms; }\r\n.card ul li:nth-child(15) { transition-delay: 375ms; }\r\n.card ul li:nth-child(16) { transition-delay: 400ms; }\r\n.card ul li:nth-child(17) { transition-delay: 425ms; }\r\n.card ul li:nth-child(18) { transition-delay: 450ms; }\r\n.card ul li:nth-child(19) { transition-delay: 475ms; }\r\n.card ul li:nth-child(1n+20) { transition-delay: 500ms; }\r\n\r\n\r\n\r\n/* card icons */\r\n\r\n.card li input[type=\"checkbox\"] {\r\n  position: relative;\r\n  width: var(--icon-size);\r\n  height: var(--icon-size);\r\n  appearance: none;\r\n}\r\n.card li input[type=\"checkbox\"]::before {\r\n  position: absolute;\r\n  content: \"\";\r\n  inset: 0;\r\n  background-color: rgba(0,0,0,.03);\r\n  box-shadow: .1rem .1rem .1rem white,\r\n    inset .1rem .1rem .25rem rgba(0,0,0,.1);\r\n  border-radius: .25rem;\r\n}\r\n.card li input[type=\"checkbox\"]::after {\r\n  --check-anim-duration: 200ms;\r\n  position: absolute;\r\n  content: \"\";\r\n  inset: -7px;\r\n  background-color: red;\r\n  clip-path: polygon(0 75%, 15% 60%, 15% 61%, 16% 62%, 18% 65%, 4% 78%, 1% 75%);\r\n  animation: checkmark-backwards var(--check-anim-duration) ease-out forwards;\r\n}\r\n.card li input[type=\"checkbox\"]:checked::after {\r\n  animation: checkmark-forwards var(--check-anim-duration) ease-in forwards;\r\n}\r\n@keyframes checkmark-forwards {\r\n  0% {opacity: 0;}\r\n  1% {opacity: 1; clip-path: polygon(0 75%, 15% 60%, 15% 61%, 16% 62%, 18% 65%, 4% 78%);}\r\n  30% {clip-path: polygon(0 75%, 15% 60%, 21% 66%, 26% 70%, 31% 76%, 9% 86%);}\r\n  50% {clip-path: polygon(0 75%, 15% 60%, 35% 75%, 43% 81%, 49% 88%, 40% 100%);}\r\n  100% {clip-path: polygon(0 75%, 15% 60%, 35% 75%, 85% 0, 100% 10%, 40% 100%);}\r\n} @keyframes checkmark-backwards {\r\n  0% {clip-path: polygon(0 75%, 15% 60%, 35% 75%, 85% 0, 100% 10%, 40% 100%);}\r\n  50% {clip-path: polygon(0 75%, 15% 60%, 35% 75%, 43% 81%, 49% 88%, 40% 100%);}\r\n  70% {clip-path: polygon(0 75%, 15% 60%, 21% 66%, 26% 70%, 31% 76%, 9% 86%);}\r\n  99% {opacity: 1; clip-path: polygon(0 75%, 15% 60%, 15% 61%, 16% 62%, 18% 65%, 4% 78%);}\r\n  100% {opacity: 0;}\r\n}\r\n\r\n.card label {\r\n  font-size: 1.25rem;\r\n  color: var(--txt-col-2);\r\n  background: linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.5), transparent 100%) no-repeat;\r\n  background-size: 100%;\r\n  transition: background-position 500ms;\r\n  background-position-x: -100vw;\r\n  cursor: pointer;\r\n}\r\n.card li input[type=\"checkbox\"]:checked + label {\r\n  text-decoration: line-through;\r\n  color: var(--txt-col-3);\r\n  background-position-x: 100vw;\r\n}\r\n\r\n.card-icon {\r\n  position: relative;\r\n  width: var(--icon-size);\r\n  height: var(--icon-size);\r\n  cursor: pointer;\r\n  appearance: none;\r\n}\r\n.card-icon::after {\r\n  position: absolute;\r\n  content: \"\";\r\n  inset: 0;\r\n  background-size: 100%;\r\n  background-position: center;\r\n}\r\n\r\n.card-icon.icon-pin::after {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n} .card-icon.icon-pin:checked::after {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n.card-icon.icon-edit::after {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n/* } .card-icon.icon-edit:checked::after { */\r\n}\r\n.card-icon.icon-fav::after {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n}.card-icon.icon-fav:checked::after {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n}\r\n\r\n.card ul li {\r\n  display: grid;\r\n  grid-template-columns: auto 1fr auto auto;\r\n  gap: .5rem;\r\n}\r\n.edit-buttons {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  gap: .5rem;\r\n}\r\n\r\n.delete-icon {\r\n  position: relative;\r\n  width: var(--icon-size);\r\n}.icon-trash,\r\n.icon-trash-lid {\r\n  position: absolute;\r\n  transition: rotate 300ms;\r\n}\r\n.icon-trash { transform-origin: 100% 0%;}\r\n.icon-trash-lid { transform-origin: 250% 0%;}\r\n.delete-icon:hover .icon-trash { rotate: -7deg;}\r\n.delete-icon:hover .icon-trash-lid { rotate: 7deg; }\r\n\r\n.card-icon.icon-edit:hover,\r\n.card-icon.icon-pin:hover {\r\n  animation: icon-shake 300ms;\r\n  transform-origin: 0% 100%;\r\n}\r\n@keyframes icon-shake {\r\n  0%, 100% { rotate: 0deg;}\r\n  10% { rotate: 5deg;}\r\n  20% { rotate: -5deg;}\r\n  30% { rotate: 4deg;}\r\n  40% { rotate: -4deg;}\r\n  50% { rotate: 3deg;}\r\n  60% { rotate: -3deg;}\r\n  70% { rotate: 2deg;}\r\n  80% { rotate: -2deg;}\r\n  90% { rotate: 1deg;}\r\n}\r\n\r\n.card-icon.icon-fav:hover{\r\n  animation: icon-spin 300ms;\r\n  transform-origin: 50% 55%;\r\n}\r\n@keyframes icon-spin { to {rotate: 72deg;} }\r\n\r\n.card-icon.icon-fav.shake {\r\n  animation: icon-fav-shake 300ms;\r\n}\r\n@keyframes icon-fav-shake {\r\n  0%, 100% {\r\n    rotate: 0deg;\r\n    filter: drop-shadow(0 0 5px goldenrod)\r\n      brightness(150%);\r\n  }\r\n  10% { rotate: 10deg;}\r\n  20% { rotate: -10deg;}\r\n  30% { rotate: 8deg;}\r\n  40% { rotate: -8deg;}\r\n  50% { rotate: 6deg;}\r\n  60% { rotate: -6deg;}\r\n  70% { rotate: 4deg;}\r\n  80% { rotate: -4deg;}\r\n  90% { rotate: 2deg;}\r\n}\r\n\r\n.check-icon.icon-edit {\r\n  width: var(--icon-check-size);\r\n}\r\n\r\n/*for testing*/\r\n/* * {\r\n  outline: 1px solid gray;\r\n} */", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n  --bgc-page: lavender;\r\n  --card-shadow: .25rem .25rem .25rem rgba(0,0,0,.1),\r\n    inset .25rem .25rem .25rem rgba(255,255,255,.5);\r\n  --icon-size: 30px;\r\n  --icon-check-size: 20px;\r\n  --txt-col-1: #000;\r\n  --txt-col-2: #444;\r\n  --txt-col-3: #666;\r\n  --card-border-rad: .75rem;\r\n  --card-open-transition: 250ms;\r\n}\r\n\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n  background-color: var(--bgc-page);\r\n}\r\n\r\nol, ul { padding: 0; margin: 0; list-style-type: none; }\r\n\r\nh1, h2, p {margin: 0;}\r\nh1 {font-size: 3rem;}\r\n\r\n#main {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  padding: .5rem;\r\n  overflow: hidden;\r\n  overflow-y: auto;\r\n}\r\n\r\n.project-item {\r\n  box-sizing: border-box;\r\n  padding: 1rem;\r\n  margin: 1rem;\r\n  box-shadow: var(--card-shadow);\r\n}\r\n\r\n\r\n\r\n/* cards */\r\n\r\n.card {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  box-shadow: var(--card-shadow);\r\n  padding: .5rem;\r\n  display: grid;\r\n  grid-template-columns: auto 1fr auto;\r\n  grid-template-rows: repeat(5, auto);\r\n  grid-template-areas:\r\n    \" drag  title   edit  \"\r\n    \" ..... descr   descr \"\r\n    \" ..... created ..... \"\r\n    \" ..... due     ..... \"\r\n    \" ..... tasks   tasks \";\r\n  align-items: center;\r\n  overflow: hidden;\r\n} .card.active {\r\n  height: auto;\r\n  box-shadow: inset 0 0 5rem hsl(240, 70%, 90%);\r\n} .card:not(.active):hover {\r\n  background-color: rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n.card:first-of-type { border-radius: var(--card-border-rad) var(--card-border-rad) 0 0; }\r\n.card:last-of-type { border-radius: 0 0 var(--card-border-rad) var(--card-border-rad); }\r\n\r\n.card .title {\r\n  font-size: 2rem;\r\n  color: var(--txt-col-1);\r\n  cursor: pointer;\r\n  padding-left: .5rem;\r\n}\r\n.card .description {\r\n  grid-area: descr;\r\n  font-size: 1.5rem;\r\n  color: var(--txt-col-2);\r\n}\r\n.card .date-creation {\r\n  grid-area: created;\r\n}\r\n.card .date-due {\r\n  grid-area: due;\r\n}\r\n.card .checklist {\r\n  grid-area: tasks;\r\n  display: grid;\r\n}\r\n\r\n\r\n\r\n/* card priority indicator */\r\n\r\n.card[data-priority=\"low\"] {\r\n  background: linear-gradient(to right,lime, rgba(0, 128, 0, 0) 60px);\r\n} .card[data-priority=\"low\"].active {\r\n  background: linear-gradient(to bottom,lime, rgba(0, 128, 0, 0) 60px);\r\n}\r\n.card[data-priority=\"middle\"] {\r\n  background: linear-gradient(to right, goldenrod, rgba(0, 128, 0, 0) 60px);\r\n} .card[data-priority=\"middle\"].active {\r\n  background: linear-gradient(to bottom, goldenrod, rgba(0, 128, 0, 0) 60px);\r\n}\r\n.card[data-priority=\"high\"] {\r\n  background: linear-gradient(to right, orangered, rgba(0, 128, 0, 0) 60px);\r\n} .card[data-priority=\"high\"].active {\r\n  background: linear-gradient(to bottom, orangered, rgba(0, 128, 0, 0) 60px);\r\n}\r\n\r\n\r\n\r\n/* card details transition */\r\n\r\n.card .description,\r\n.card .date-creation,\r\n.card .date-due,\r\n.card ul li {\r\n  overflow: hidden;\r\n  transition: var(--card-open-transition);\r\n  height: 0rem;\r\n}\r\n.card.active .description,\r\n.card.active .date-creation,\r\n.card.active .date-due,\r\n.card.active ul li {\r\n  overflow: visible;\r\n  height: 1.75rem;\r\n}\r\n/*individual settings*/\r\n.card .description { margin-top: 0rem; margin-bottom: 0rem;}\r\n.card.active .description { margin-top: 1rem; margin-bottom: .5rem;}\r\n.card.active ul li { height: 2.5rem;}\r\n.card .date-due  {margin-bottom: 0rem; }\r\n.card.active .date-due  {margin-bottom: .5rem; }\r\n\r\n.card ul li:nth-child(1) { transition-delay: 25ms; }\r\n.card ul li:nth-child(2) { transition-delay: 50ms; }\r\n.card ul li:nth-child(3) { transition-delay: 75ms; }\r\n.card ul li:nth-child(4) { transition-delay: 100ms; }\r\n.card ul li:nth-child(5) { transition-delay: 125ms; }\r\n.card ul li:nth-child(6) { transition-delay: 150ms; }\r\n.card ul li:nth-child(7) { transition-delay: 175ms; }\r\n.card ul li:nth-child(8) { transition-delay: 200ms; }\r\n.card ul li:nth-child(9) { transition-delay: 225ms; }\r\n.card ul li:nth-child(10) { transition-delay: 250ms; }\r\n.card ul li:nth-child(11) { transition-delay: 275ms; }\r\n.card ul li:nth-child(12) { transition-delay: 300ms; }\r\n.card ul li:nth-child(13) { transition-delay: 325ms; }\r\n.card ul li:nth-child(14) { transition-delay: 350ms; }\r\n.card ul li:nth-child(15) { transition-delay: 375ms; }\r\n.card ul li:nth-child(16) { transition-delay: 400ms; }\r\n.card ul li:nth-child(17) { transition-delay: 425ms; }\r\n.card ul li:nth-child(18) { transition-delay: 450ms; }\r\n.card ul li:nth-child(19) { transition-delay: 475ms; }\r\n.card ul li:nth-child(1n+20) { transition-delay: 500ms; }\r\n\r\n\r\n\r\n/* card icons */\r\n\r\n.card li input[type=\"checkbox\"] {\r\n  position: relative;\r\n  width: var(--icon-size);\r\n  height: var(--icon-size);\r\n  appearance: none;\r\n}\r\n.card li input[type=\"checkbox\"]::before {\r\n  position: absolute;\r\n  content: \"\";\r\n  inset: 0;\r\n  background-color: rgba(0,0,0,.03);\r\n  box-shadow: .1rem .1rem .1rem white,\r\n    inset .1rem .1rem .25rem rgba(0,0,0,.1);\r\n  border-radius: .25rem;\r\n}\r\n.card li input[type=\"checkbox\"]::after {\r\n  --check-anim-duration: 200ms;\r\n  position: absolute;\r\n  content: \"\";\r\n  inset: -7px;\r\n  background-color: red;\r\n  clip-path: polygon(0 75%, 15% 60%, 15% 61%, 16% 62%, 18% 65%, 4% 78%, 1% 75%);\r\n  animation: checkmark-backwards var(--check-anim-duration) ease-out forwards;\r\n}\r\n.card li input[type=\"checkbox\"]:checked::after {\r\n  animation: checkmark-forwards var(--check-anim-duration) ease-in forwards;\r\n}\r\n@keyframes checkmark-forwards {\r\n  0% {opacity: 0;}\r\n  1% {opacity: 1; clip-path: polygon(0 75%, 15% 60%, 15% 61%, 16% 62%, 18% 65%, 4% 78%);}\r\n  30% {clip-path: polygon(0 75%, 15% 60%, 21% 66%, 26% 70%, 31% 76%, 9% 86%);}\r\n  50% {clip-path: polygon(0 75%, 15% 60%, 35% 75%, 43% 81%, 49% 88%, 40% 100%);}\r\n  100% {clip-path: polygon(0 75%, 15% 60%, 35% 75%, 85% 0, 100% 10%, 40% 100%);}\r\n} @keyframes checkmark-backwards {\r\n  0% {clip-path: polygon(0 75%, 15% 60%, 35% 75%, 85% 0, 100% 10%, 40% 100%);}\r\n  50% {clip-path: polygon(0 75%, 15% 60%, 35% 75%, 43% 81%, 49% 88%, 40% 100%);}\r\n  70% {clip-path: polygon(0 75%, 15% 60%, 21% 66%, 26% 70%, 31% 76%, 9% 86%);}\r\n  99% {opacity: 1; clip-path: polygon(0 75%, 15% 60%, 15% 61%, 16% 62%, 18% 65%, 4% 78%);}\r\n  100% {opacity: 0;}\r\n}\r\n\r\n.card label {\r\n  font-size: 1.25rem;\r\n  color: var(--txt-col-2);\r\n  background: linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.5), transparent 100%) no-repeat;\r\n  background-size: 100%;\r\n  transition: background-position 500ms;\r\n  background-position-x: -100vw;\r\n  cursor: pointer;\r\n}\r\n.card li input[type=\"checkbox\"]:checked + label {\r\n  text-decoration: line-through;\r\n  color: var(--txt-col-3);\r\n  background-position-x: 100vw;\r\n}\r\n\r\n.card-icon {\r\n  position: relative;\r\n  width: var(--icon-size);\r\n  height: var(--icon-size);\r\n  cursor: pointer;\r\n  appearance: none;\r\n}\r\n.card-icon::after {\r\n  position: absolute;\r\n  content: \"\";\r\n  inset: 0;\r\n  background-size: 100%;\r\n  background-position: center;\r\n}\r\n\r\n.card-icon.icon-pin::after {\r\n  background-image: url(./media/images/icons/pin.svg);\r\n} .card-icon.icon-pin:checked::after {\r\n  background-image: url(./media/images/icons/pin-active.svg);\r\n}\r\n.card-icon.icon-edit::after {\r\n  background-image: url(./media/images/icons/edit.svg);\r\n/* } .card-icon.icon-edit:checked::after { */\r\n}\r\n.card-icon.icon-fav::after {\r\n  background-image: url(./media/images/icons/fav.svg);\r\n}.card-icon.icon-fav:checked::after {\r\n  background-image: url(./media/images/icons/fav-active.svg);\r\n}\r\n\r\n.card ul li {\r\n  display: grid;\r\n  grid-template-columns: auto 1fr auto auto;\r\n  gap: .5rem;\r\n}\r\n.edit-buttons {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  gap: .5rem;\r\n}\r\n\r\n.delete-icon {\r\n  position: relative;\r\n  width: var(--icon-size);\r\n}.icon-trash,\r\n.icon-trash-lid {\r\n  position: absolute;\r\n  transition: rotate 300ms;\r\n}\r\n.icon-trash { transform-origin: 100% 0%;}\r\n.icon-trash-lid { transform-origin: 250% 0%;}\r\n.delete-icon:hover .icon-trash { rotate: -7deg;}\r\n.delete-icon:hover .icon-trash-lid { rotate: 7deg; }\r\n\r\n.card-icon.icon-edit:hover,\r\n.card-icon.icon-pin:hover {\r\n  animation: icon-shake 300ms;\r\n  transform-origin: 0% 100%;\r\n}\r\n@keyframes icon-shake {\r\n  0%, 100% { rotate: 0deg;}\r\n  10% { rotate: 5deg;}\r\n  20% { rotate: -5deg;}\r\n  30% { rotate: 4deg;}\r\n  40% { rotate: -4deg;}\r\n  50% { rotate: 3deg;}\r\n  60% { rotate: -3deg;}\r\n  70% { rotate: 2deg;}\r\n  80% { rotate: -2deg;}\r\n  90% { rotate: 1deg;}\r\n}\r\n\r\n.card-icon.icon-fav:hover{\r\n  animation: icon-spin 300ms;\r\n  transform-origin: 50% 55%;\r\n}\r\n@keyframes icon-spin { to {rotate: 72deg;} }\r\n\r\n.card-icon.icon-fav.shake {\r\n  animation: icon-fav-shake 300ms;\r\n}\r\n@keyframes icon-fav-shake {\r\n  0%, 100% {\r\n    rotate: 0deg;\r\n    filter: drop-shadow(0 0 5px goldenrod)\r\n      brightness(150%);\r\n  }\r\n  10% { rotate: 10deg;}\r\n  20% { rotate: -10deg;}\r\n  30% { rotate: 8deg;}\r\n  40% { rotate: -8deg;}\r\n  50% { rotate: 6deg;}\r\n  60% { rotate: -6deg;}\r\n  70% { rotate: 4deg;}\r\n  80% { rotate: -4deg;}\r\n  90% { rotate: 2deg;}\r\n}\r\n\r\n.check-icon.icon-edit {\r\n  width: var(--icon-check-size);\r\n}\r\n\r\n/*for testing*/\r\n/* * {\r\n  outline: 1px solid gray;\r\n} */"],"sourceRoot":""}]);
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
  if(e.key === "r" && e.altKey){
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

  togglePin(){
    this.isPinned = !this.isPinned;
  }
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
/* harmony import */ var _media_images_icons_drag_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../media/images/icons/drag.svg */ "./src/media/images/icons/drag.svg");
/* harmony import */ var _media_images_icons_edit_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../media/images/icons/edit.svg */ "./src/media/images/icons/edit.svg");
/* harmony import */ var _media_images_icons_trash_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../media/images/icons/trash.svg */ "./src/media/images/icons/trash.svg");
/* harmony import */ var _media_images_icons_trash_lid_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../media/images/icons/trash-lid.svg */ "./src/media/images/icons/trash-lid.svg");
/* harmony import */ var _modules_classes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/classes.js */ "./src/modules/classes.js");





//for testing

const localStorageTest = [
  {
    title: "routine",
    todos: [
      new _modules_classes_js__WEBPACK_IMPORTED_MODULE_4__.Todo("exercise", "It's leg day!", "2022-11-23T17:42", "", [
        { task: "run 3km", isDone: true },
        { task: "bicycle", isDone: false },
        { task: "squats", isDone: false },
      ], "low", false, false),

      new _modules_classes_js__WEBPACK_IMPORTED_MODULE_4__.Todo("coding", "", "2022-11-23T17:42", "", [
        { task: "check css-tricks", isDone: true },
        { task: "continue TOP practice", isDone: true },
      ], "high", true, true),
    ],
  },
  {
    title: "test",
    todos: [
      new _modules_classes_js__WEBPACK_IMPORTED_MODULE_4__.Todo("test1", "test1 descr", "2022-11-23T17:42","2023-11-23T17:42", [
        { task: "test1 task1", isDone: true },
        { task: "test1 task2", isDone: false },
        { task: "test1 task3", isDone: true },
      ], "low", true, false),

      new _modules_classes_js__WEBPACK_IMPORTED_MODULE_4__.Todo("test2", "test2 descr", "2022-11-23T17:42", "2023-11-23T17:42", [
        { task: "test2 task1", isDone: true },
        { task: "test2 task2", isDone: false },
        { task: "test2 task3", isDone: true },
        { task: "test2 task4", isDone: false },
        { task: "test2 task5", isDone: false },
      ], "middle", true, false),
      new _modules_classes_js__WEBPACK_IMPORTED_MODULE_4__.Todo("test3 (long)", "test3 descr", "2022-11-23T17:42", "2023-11-23T17:42", [
        { task: "test3 task1", isDone: true },
        { task: "test3 task2", isDone: true },
        { task: "test3 task3", isDone: false },
        { task: "test3 task4", isDone: false },
        { task: "test3 task5", isDone: true },
        { task: "test3 task6", isDone: true },
        { task: "test3 task7", isDone: false },
        { task: "test3 task8", isDone: true },
        { task: "test3 task9", isDone: true },
        { task: "test3 task10", isDone: false },
        { task: "test3 task11", isDone: false },
        { task: "test3 task12", isDone: true },
        { task: "test3 task13", isDone: false },
        { task: "test3 task14", isDone: true },
        { task: "test3 task15", isDone: true },
      ], "low", false, true),
      new _modules_classes_js__WEBPACK_IMPORTED_MODULE_4__.Todo("test4", "test4 descr", "2022-11-23T17:42", "2023-11-23T17:42", [
        { task: "test4 task1", isDone: false },
        { task: "test4 task2", isDone: false },
        { task: "test4 task3", isDone: true },
        { task: "test4 task4", isDone: false },
        { task: "test4 task5", isDone: true },
      ], "low", true, false),
      new _modules_classes_js__WEBPACK_IMPORTED_MODULE_4__.Todo("test5", "test5 descr", "2022-11-23T17:42", "2023-11-23T17:42", [
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
  const main = document.querySelector("#main");

  function placeCard(todo, projectIdx, todoIdx){
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.priority = todo.priority;

    const drag = document.createElement("img");
    drag.classList.add("card-icon", "icon-drag");
    drag.src = _media_images_icons_drag_svg__WEBPACK_IMPORTED_MODULE_0__;
    drag.addEventListener("mousedown", cardDrag);

    const editBtns = document.createElement("div");
    editBtns.classList.add("edit-buttons");

    const pin = document.createElement("input");
    pin.type = "checkbox";
    pin.checked = todo.isPinned ? true : false;
    pin.classList.add("card-icon", "icon-pin");
    pin.addEventListener("click", cardPinToggle);

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
      if(e.animationName === "icon-fav-shake") {
        e.target.classList.remove("shake");
      };
    })

    const deleteIcon = document.createElement("div");
    deleteIcon.classList.add("delete-icon");
    deleteIcon.addEventListener("click", cardDelete);

    const trash = document.createElement("img");
    trash.classList.add("card-icon", "icon-trash");
    trash.src = _media_images_icons_trash_svg__WEBPACK_IMPORTED_MODULE_2__;
    const trashLid = document.createElement("img");
    trashLid.classList.add("card-icon", "icon-trash-lid");
    trashLid.src = _media_images_icons_trash_lid_svg__WEBPACK_IMPORTED_MODULE_3__;
    
    deleteIcon.append(trash, trashLid);
    editBtns.append(pin, edit, fav, deleteIcon);

    //add dataset to each item
    [card,drag,pin,edit,fav,deleteIcon].forEach(icon => {
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

    const dateCreation = document.createElement("p");
    dateCreation.classList.add("date-creation");
    dateCreation.innerText = `Created: ${todo.dateCreation}`;

    const dateDue = document.createElement("p");
    dateDue.classList.add("date-due");
    dateDue.innerText = todo.dateDue.length > 0 ? `Due: ${todo.dateDue}` : "";

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
      editCheck.src = _media_images_icons_edit_svg__WEBPACK_IMPORTED_MODULE_1__;
      editCheck.classList.add("card-icon", "check-icon", "icon-edit");
      editCheck.addEventListener("click", toggleCheckEdit);

      task.append(checkbox, label, editCheck);

      checks.appendChild(task);

    });

    card.append(drag, title, dateCreation, dateDue,
      editBtns, description, checks);

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
    this.parentNode.classList.remove("active");
  }

  function cardEdit(){
    console.log(`editing project ${this.dataset.projectIdx
    } - todo ${this.dataset.todoIdx}`);
    this.parentNode.parentNode.classList.add("active");
  }

  function toggleCheckEdit(){
    console.log("edit check");
  }

  function cardFavToggle(){
    const projectIdx = this.dataset.projectIdx;
    const todoIdx = this.dataset.todoIdx;
    localStorageTest[projectIdx].todos[todoIdx].toggleFav();
  }

  function cardPinToggle(){
    const projectIdx = this.dataset.projectIdx;
    const todoIdx = this.dataset.todoIdx;
    localStorageTest[projectIdx].todos[todoIdx].togglePin();
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

/***/ "./src/media/images/icons/drag.svg":
/*!*****************************************!*\
  !*** ./src/media/images/icons/drag.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e4a448ad74532fc1ad87.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QyxxSUFBK0M7QUFDM0YsNENBQTRDLG1KQUFzRDtBQUNsRyw0Q0FBNEMsdUlBQWdEO0FBQzVGLDRDQUE0QyxxSUFBK0M7QUFDM0YsNENBQTRDLG1KQUFzRDtBQUNsRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLGlEQUFpRCwyQkFBMkIsaUhBQWlILHdCQUF3Qiw4QkFBOEIsd0JBQXdCLHdCQUF3Qix3QkFBd0IsZ0NBQWdDLG9DQUFvQyxLQUFLLGNBQWMsaUJBQWlCLGdCQUFnQix3Q0FBd0MsS0FBSyxpQkFBaUIsWUFBWSxXQUFXLHdCQUF3QixtQkFBbUIsV0FBVyxRQUFRLGlCQUFpQixlQUFlLDZCQUE2QixnQkFBZ0IsbUJBQW1CLG9CQUFvQixxQkFBcUIsdUJBQXVCLHVCQUF1QixLQUFLLHVCQUF1Qiw2QkFBNkIsb0JBQW9CLG1CQUFtQixxQ0FBcUMsS0FBSywwQ0FBMEMsNkJBQTZCLGtCQUFrQixxQ0FBcUMscUJBQXFCLG9CQUFvQiwyQ0FBMkMsMENBQTBDLGdNQUFnTSwwQkFBMEIsdUJBQXVCLE1BQU0sY0FBYyxtQkFBbUIsb0RBQW9ELE1BQU0sMEJBQTBCLGlEQUFpRCxLQUFLLDhCQUE4QixtRUFBbUUseUJBQXlCLG1FQUFtRSxzQkFBc0Isc0JBQXNCLDhCQUE4QixzQkFBc0IsMEJBQTBCLEtBQUssd0JBQXdCLHVCQUF1Qix3QkFBd0IsOEJBQThCLEtBQUssMEJBQTBCLHlCQUF5QixLQUFLLHFCQUFxQixxQkFBcUIsS0FBSyxzQkFBc0IsdUJBQXVCLG9CQUFvQixLQUFLLG1GQUFtRiwwRUFBMEUsTUFBTSxxQ0FBcUMsMkVBQTJFLEtBQUsscUNBQXFDLGdGQUFnRixNQUFNLHdDQUF3QyxpRkFBaUYsS0FBSyxtQ0FBbUMsZ0ZBQWdGLE1BQU0sc0NBQXNDLGlGQUFpRixLQUFLLHNJQUFzSSx1QkFBdUIsOENBQThDLG1CQUFtQixLQUFLLGlIQUFpSCx3QkFBd0Isc0JBQXNCLEtBQUssb0RBQW9ELGtCQUFrQixxQkFBcUIsZ0NBQWdDLGtCQUFrQixzQkFBc0IseUJBQXlCLGdCQUFnQixzQkFBc0Isc0JBQXNCLDZCQUE2Qix1QkFBdUIsbUNBQW1DLHlCQUF5QiwrQkFBK0IseUJBQXlCLCtCQUErQix5QkFBeUIsK0JBQStCLDBCQUEwQiwrQkFBK0IsMEJBQTBCLCtCQUErQiwwQkFBMEIsK0JBQStCLDBCQUEwQiwrQkFBK0IsMEJBQTBCLCtCQUErQiwwQkFBMEIsZ0NBQWdDLDBCQUEwQixnQ0FBZ0MsMEJBQTBCLGdDQUFnQywwQkFBMEIsZ0NBQWdDLDBCQUEwQixnQ0FBZ0MsMEJBQTBCLGdDQUFnQywwQkFBMEIsZ0NBQWdDLDBCQUEwQixnQ0FBZ0MsMEJBQTBCLGdDQUFnQywwQkFBMEIsZ0NBQWdDLDBCQUEwQixtQ0FBbUMsMEJBQTBCLDJFQUEyRSx5QkFBeUIsOEJBQThCLCtCQUErQix1QkFBdUIsS0FBSywrQ0FBK0MseUJBQXlCLG9CQUFvQixlQUFlLHdDQUF3QywwRkFBMEYsNEJBQTRCLEtBQUssOENBQThDLG1DQUFtQyx5QkFBeUIsb0JBQW9CLGtCQUFrQiw0QkFBNEIsb0ZBQW9GLGtGQUFrRixLQUFLLHNEQUFzRCxnRkFBZ0YsS0FBSyxtQ0FBbUMsVUFBVSxZQUFZLFVBQVUsWUFBWSx1RUFBdUUsV0FBVyx1RUFBdUUsV0FBVyx5RUFBeUUsWUFBWSx3RUFBd0UsTUFBTSxnQ0FBZ0MsVUFBVSx3RUFBd0UsV0FBVyx5RUFBeUUsV0FBVyx1RUFBdUUsV0FBVyxZQUFZLHVFQUF1RSxZQUFZLFlBQVksS0FBSyxxQkFBcUIseUJBQXlCLDhCQUE4QixrSEFBa0gsNEJBQTRCLDRDQUE0QyxvQ0FBb0Msc0JBQXNCLEtBQUssdURBQXVELG9DQUFvQyw4QkFBOEIsbUNBQW1DLEtBQUssb0JBQW9CLHlCQUF5Qiw4QkFBOEIsK0JBQStCLHNCQUFzQix1QkFBdUIsS0FBSyx1QkFBdUIseUJBQXlCLG9CQUFvQixlQUFlLDRCQUE0QixrQ0FBa0MsS0FBSyxvQ0FBb0Msd0VBQXdFLE1BQU0sb0NBQW9DLHdFQUF3RSxLQUFLLGlDQUFpQyx3RUFBd0UsU0FBUyxzQ0FBc0MsT0FBTyxnQ0FBZ0Msd0VBQXdFLEtBQUssb0NBQW9DLHdFQUF3RSxLQUFLLHFCQUFxQixvQkFBb0IsZ0RBQWdELGlCQUFpQixLQUFLLG1CQUFtQixvQkFBb0IsNENBQTRDLGlCQUFpQixLQUFLLHNCQUFzQix5QkFBeUIsOEJBQThCLEtBQUssaUNBQWlDLHlCQUF5QiwrQkFBK0IsS0FBSyxrQkFBa0IsMkJBQTJCLHNCQUFzQiwyQkFBMkIscUNBQXFDLGVBQWUseUNBQXlDLGVBQWUsa0VBQWtFLGtDQUFrQyxnQ0FBZ0MsS0FBSywyQkFBMkIsaUJBQWlCLGNBQWMsWUFBWSxjQUFjLFlBQVksZUFBZSxZQUFZLGNBQWMsWUFBWSxlQUFlLFlBQVksY0FBYyxZQUFZLGVBQWUsWUFBWSxjQUFjLFlBQVksZUFBZSxZQUFZLGNBQWMsS0FBSyxrQ0FBa0MsaUNBQWlDLGdDQUFnQyxLQUFLLDJCQUEyQixJQUFJLGlCQUFpQixtQ0FBbUMsc0NBQXNDLEtBQUssK0JBQStCLGdCQUFnQixxQkFBcUIseUVBQXlFLE9BQU8sWUFBWSxlQUFlLFlBQVksZ0JBQWdCLFlBQVksY0FBYyxZQUFZLGVBQWUsWUFBWSxjQUFjLFlBQVksZUFBZSxZQUFZLGNBQWMsWUFBWSxlQUFlLFlBQVksY0FBYyxLQUFLLCtCQUErQixvQ0FBb0MsS0FBSyxpQ0FBaUMsOEJBQThCLE1BQU0sU0FBUyxnRkFBZ0YsWUFBWSxNQUFNLE9BQU8sYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTywyQ0FBMkMscUJBQXFCLHNCQUFzQixNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksU0FBUyxXQUFXLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxVQUFVLE9BQU8sYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLHdCQUF3QiwwQkFBMEIsTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFFBQVEsYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksU0FBUyxhQUFhLFNBQVMsWUFBWSxhQUFhLFdBQVcsS0FBSyxRQUFRLFlBQVksV0FBVyxNQUFNLFlBQVkscUNBQXFDLHFDQUFxQyx1QkFBdUIseUJBQXlCLDBCQUEwQix5QkFBeUIseUJBQXlCLHlCQUF5Qix5QkFBeUIseUJBQXlCLHlCQUF5Qix5QkFBeUIseUJBQXlCLHlCQUF5Qix5QkFBeUIseUJBQXlCLHlCQUF5Qix5QkFBeUIseUJBQXlCLHlCQUF5Qix5QkFBeUIseUJBQXlCLHlCQUF5Qix5QkFBeUIsNEJBQTRCLFlBQVksS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sT0FBTyxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxvQkFBb0IsZ0NBQWdDLHVCQUF1Qix1QkFBdUIsdUJBQXVCLFdBQVcsc0JBQXNCLHVCQUF1Qix1QkFBdUIsaUNBQWlDLHFCQUFxQixPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsWUFBWSxZQUFZLGFBQWEsTUFBTSxzQkFBc0IseUJBQXlCLHVCQUF1Qix3QkFBd0IsT0FBTyxZQUFZLGFBQWEsTUFBTSxLQUFLLG9CQUFvQixxQkFBcUIscUJBQXFCLHFCQUFxQixxQkFBcUIscUJBQXFCLHFCQUFxQixxQkFBcUIscUJBQXFCLHFCQUFxQixPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0saUNBQWlDLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssT0FBTyxNQUFNLG9CQUFvQixxQkFBcUIscUJBQXFCLHFCQUFxQixxQkFBcUIscUJBQXFCLHFCQUFxQixxQkFBcUIscUJBQXFCLE9BQU8sS0FBSyxZQUFZLE9BQU8sVUFBVSxNQUFNLGdDQUFnQywyQkFBMkIsaUhBQWlILHdCQUF3Qiw4QkFBOEIsd0JBQXdCLHdCQUF3Qix3QkFBd0IsZ0NBQWdDLG9DQUFvQyxLQUFLLGNBQWMsaUJBQWlCLGdCQUFnQix3Q0FBd0MsS0FBSyxpQkFBaUIsWUFBWSxXQUFXLHdCQUF3QixtQkFBbUIsV0FBVyxRQUFRLGlCQUFpQixlQUFlLDZCQUE2QixnQkFBZ0IsbUJBQW1CLG9CQUFvQixxQkFBcUIsdUJBQXVCLHVCQUF1QixLQUFLLHVCQUF1Qiw2QkFBNkIsb0JBQW9CLG1CQUFtQixxQ0FBcUMsS0FBSywwQ0FBMEMsNkJBQTZCLGtCQUFrQixxQ0FBcUMscUJBQXFCLG9CQUFvQiwyQ0FBMkMsMENBQTBDLGdNQUFnTSwwQkFBMEIsdUJBQXVCLE1BQU0sY0FBYyxtQkFBbUIsb0RBQW9ELE1BQU0sMEJBQTBCLGlEQUFpRCxLQUFLLDhCQUE4QixtRUFBbUUseUJBQXlCLG1FQUFtRSxzQkFBc0Isc0JBQXNCLDhCQUE4QixzQkFBc0IsMEJBQTBCLEtBQUssd0JBQXdCLHVCQUF1Qix3QkFBd0IsOEJBQThCLEtBQUssMEJBQTBCLHlCQUF5QixLQUFLLHFCQUFxQixxQkFBcUIsS0FBSyxzQkFBc0IsdUJBQXVCLG9CQUFvQixLQUFLLG1GQUFtRiwwRUFBMEUsTUFBTSxxQ0FBcUMsMkVBQTJFLEtBQUsscUNBQXFDLGdGQUFnRixNQUFNLHdDQUF3QyxpRkFBaUYsS0FBSyxtQ0FBbUMsZ0ZBQWdGLE1BQU0sc0NBQXNDLGlGQUFpRixLQUFLLHNJQUFzSSx1QkFBdUIsOENBQThDLG1CQUFtQixLQUFLLGlIQUFpSCx3QkFBd0Isc0JBQXNCLEtBQUssb0RBQW9ELGtCQUFrQixxQkFBcUIsZ0NBQWdDLGtCQUFrQixzQkFBc0IseUJBQXlCLGdCQUFnQixzQkFBc0Isc0JBQXNCLDZCQUE2Qix1QkFBdUIsbUNBQW1DLHlCQUF5QiwrQkFBK0IseUJBQXlCLCtCQUErQix5QkFBeUIsK0JBQStCLDBCQUEwQiwrQkFBK0IsMEJBQTBCLCtCQUErQiwwQkFBMEIsK0JBQStCLDBCQUEwQiwrQkFBK0IsMEJBQTBCLCtCQUErQiwwQkFBMEIsZ0NBQWdDLDBCQUEwQixnQ0FBZ0MsMEJBQTBCLGdDQUFnQywwQkFBMEIsZ0NBQWdDLDBCQUEwQixnQ0FBZ0MsMEJBQTBCLGdDQUFnQywwQkFBMEIsZ0NBQWdDLDBCQUEwQixnQ0FBZ0MsMEJBQTBCLGdDQUFnQywwQkFBMEIsZ0NBQWdDLDBCQUEwQixtQ0FBbUMsMEJBQTBCLDJFQUEyRSx5QkFBeUIsOEJBQThCLCtCQUErQix1QkFBdUIsS0FBSywrQ0FBK0MseUJBQXlCLG9CQUFvQixlQUFlLHdDQUF3QywwRkFBMEYsNEJBQTRCLEtBQUssOENBQThDLG1DQUFtQyx5QkFBeUIsb0JBQW9CLGtCQUFrQiw0QkFBNEIsb0ZBQW9GLGtGQUFrRixLQUFLLHNEQUFzRCxnRkFBZ0YsS0FBSyxtQ0FBbUMsVUFBVSxZQUFZLFVBQVUsWUFBWSx1RUFBdUUsV0FBVyx1RUFBdUUsV0FBVyx5RUFBeUUsWUFBWSx3RUFBd0UsTUFBTSxnQ0FBZ0MsVUFBVSx3RUFBd0UsV0FBVyx5RUFBeUUsV0FBVyx1RUFBdUUsV0FBVyxZQUFZLHVFQUF1RSxZQUFZLFlBQVksS0FBSyxxQkFBcUIseUJBQXlCLDhCQUE4QixrSEFBa0gsNEJBQTRCLDRDQUE0QyxvQ0FBb0Msc0JBQXNCLEtBQUssdURBQXVELG9DQUFvQyw4QkFBOEIsbUNBQW1DLEtBQUssb0JBQW9CLHlCQUF5Qiw4QkFBOEIsK0JBQStCLHNCQUFzQix1QkFBdUIsS0FBSyx1QkFBdUIseUJBQXlCLG9CQUFvQixlQUFlLDRCQUE0QixrQ0FBa0MsS0FBSyxvQ0FBb0MsMERBQTBELE1BQU0sb0NBQW9DLGlFQUFpRSxLQUFLLGlDQUFpQywyREFBMkQsU0FBUyxzQ0FBc0MsT0FBTyxnQ0FBZ0MsMERBQTBELEtBQUssb0NBQW9DLGlFQUFpRSxLQUFLLHFCQUFxQixvQkFBb0IsZ0RBQWdELGlCQUFpQixLQUFLLG1CQUFtQixvQkFBb0IsNENBQTRDLGlCQUFpQixLQUFLLHNCQUFzQix5QkFBeUIsOEJBQThCLEtBQUssaUNBQWlDLHlCQUF5QiwrQkFBK0IsS0FBSyxrQkFBa0IsMkJBQTJCLHNCQUFzQiwyQkFBMkIscUNBQXFDLGVBQWUseUNBQXlDLGVBQWUsa0VBQWtFLGtDQUFrQyxnQ0FBZ0MsS0FBSywyQkFBMkIsaUJBQWlCLGNBQWMsWUFBWSxjQUFjLFlBQVksZUFBZSxZQUFZLGNBQWMsWUFBWSxlQUFlLFlBQVksY0FBYyxZQUFZLGVBQWUsWUFBWSxjQUFjLFlBQVksZUFBZSxZQUFZLGNBQWMsS0FBSyxrQ0FBa0MsaUNBQWlDLGdDQUFnQyxLQUFLLDJCQUEyQixJQUFJLGlCQUFpQixtQ0FBbUMsc0NBQXNDLEtBQUssK0JBQStCLGdCQUFnQixxQkFBcUIseUVBQXlFLE9BQU8sWUFBWSxlQUFlLFlBQVksZ0JBQWdCLFlBQVksY0FBYyxZQUFZLGVBQWUsWUFBWSxjQUFjLFlBQVksZUFBZSxZQUFZLGNBQWMsWUFBWSxlQUFlLFlBQVksY0FBYyxLQUFLLCtCQUErQixvQ0FBb0MsS0FBSyxpQ0FBaUMsOEJBQThCLE1BQU0scUJBQXFCO0FBQ2prdEI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNsQjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUNnQjtBQUNPO0FBQzVDO0FBQ0E7QUFDZ0Q7QUFDaEQ7QUFDQTtBQUNBLElBQUkseURBQWEsQ0FBQyw0REFBZ0I7QUFDbEM7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSx5REFBYSxDQUFDLDREQUFnQjs7Ozs7Ozs7Ozs7Ozs7O0FDZnZCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCc0Q7QUFDQTtBQUNFO0FBQ087QUFDL0Q7QUFDQTtBQUM2QztBQUN0QztBQUNQO0FBQ0E7QUFDQTtBQUNBLFVBQVUscURBQUk7QUFDZCxVQUFVLCtCQUErQjtBQUN6QyxVQUFVLGdDQUFnQztBQUMxQyxVQUFVLCtCQUErQjtBQUN6QztBQUNBO0FBQ0EsVUFBVSxxREFBSTtBQUNkLFVBQVUsd0NBQXdDO0FBQ2xELFVBQVUsNkNBQTZDO0FBQ3ZEO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsVUFBVSxxREFBSTtBQUNkLFVBQVUsbUNBQW1DO0FBQzdDLFVBQVUsb0NBQW9DO0FBQzlDLFVBQVUsbUNBQW1DO0FBQzdDO0FBQ0E7QUFDQSxVQUFVLHFEQUFJO0FBQ2QsVUFBVSxtQ0FBbUM7QUFDN0MsVUFBVSxvQ0FBb0M7QUFDOUMsVUFBVSxtQ0FBbUM7QUFDN0MsVUFBVSxvQ0FBb0M7QUFDOUMsVUFBVSxvQ0FBb0M7QUFDOUM7QUFDQSxVQUFVLHFEQUFJO0FBQ2QsVUFBVSxtQ0FBbUM7QUFDN0MsVUFBVSxtQ0FBbUM7QUFDN0MsVUFBVSxvQ0FBb0M7QUFDOUMsVUFBVSxvQ0FBb0M7QUFDOUMsVUFBVSxtQ0FBbUM7QUFDN0MsVUFBVSxtQ0FBbUM7QUFDN0MsVUFBVSxvQ0FBb0M7QUFDOUMsVUFBVSxtQ0FBbUM7QUFDN0MsVUFBVSxtQ0FBbUM7QUFDN0MsVUFBVSxxQ0FBcUM7QUFDL0MsVUFBVSxxQ0FBcUM7QUFDL0MsVUFBVSxvQ0FBb0M7QUFDOUMsVUFBVSxxQ0FBcUM7QUFDL0MsVUFBVSxvQ0FBb0M7QUFDOUMsVUFBVSxvQ0FBb0M7QUFDOUM7QUFDQSxVQUFVLHFEQUFJO0FBQ2QsVUFBVSxvQ0FBb0M7QUFDOUMsVUFBVSxvQ0FBb0M7QUFDOUMsVUFBVSxtQ0FBbUM7QUFDN0MsVUFBVSxvQ0FBb0M7QUFDOUMsVUFBVSxtQ0FBbUM7QUFDN0M7QUFDQSxVQUFVLHFEQUFJO0FBQ2QsVUFBVSxvQ0FBb0M7QUFDOUMsVUFBVSxtQ0FBbUM7QUFDN0MsVUFBVSxtQ0FBbUM7QUFDN0MsVUFBVSxvQ0FBb0M7QUFDOUMsVUFBVSxtQ0FBbUM7QUFDN0M7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHlEQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDBEQUFTO0FBQ3pCO0FBQ0E7QUFDQSxtQkFBbUIsOERBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsV0FBVyxvQkFBb0IsUUFBUTtBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsa0JBQWtCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxhQUFhO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixXQUFXLEdBQUcsRUFBRSxHQUFHO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix5REFBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLE1BQU0sU0FBUyxxQkFBcUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkMsTUFBTSxTQUFTLHFCQUFxQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG9CQUFvQixRQUFRO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFlBQVksU0FBUyxRQUFRO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdWkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vbWVkaWEvaW1hZ2VzL2ljb25zL3Bpbi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL21lZGlhL2ltYWdlcy9pY29ucy9waW4tYWN0aXZlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vbWVkaWEvaW1hZ2VzL2ljb25zL2VkaXQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9tZWRpYS9pbWFnZXMvaWNvbnMvZmF2LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vbWVkaWEvaW1hZ2VzL2ljb25zL2Zhdi1hY3RpdmUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gIC0tYmdjLXBhZ2U6IGxhdmVuZGVyO1xcclxcbiAgLS1jYXJkLXNoYWRvdzogLjI1cmVtIC4yNXJlbSAuMjVyZW0gcmdiYSgwLDAsMCwuMSksXFxyXFxuICAgIGluc2V0IC4yNXJlbSAuMjVyZW0gLjI1cmVtIHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xcclxcbiAgLS1pY29uLXNpemU6IDMwcHg7XFxyXFxuICAtLWljb24tY2hlY2stc2l6ZTogMjBweDtcXHJcXG4gIC0tdHh0LWNvbC0xOiAjMDAwO1xcclxcbiAgLS10eHQtY29sLTI6ICM0NDQ7XFxyXFxuICAtLXR4dC1jb2wtMzogIzY2NjtcXHJcXG4gIC0tY2FyZC1ib3JkZXItcmFkOiAuNzVyZW07XFxyXFxuICAtLWNhcmQtb3Blbi10cmFuc2l0aW9uOiAyNTBtcztcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdjLXBhZ2UpO1xcclxcbn1cXHJcXG5cXHJcXG5vbCwgdWwgeyBwYWRkaW5nOiAwOyBtYXJnaW46IDA7IGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgfVxcclxcblxcclxcbmgxLCBoMiwgcCB7bWFyZ2luOiAwO31cXHJcXG5oMSB7Zm9udC1zaXplOiAzcmVtO31cXHJcXG5cXHJcXG4jbWFpbiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWl0ZW0ge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBtYXJnaW46IDFyZW07XFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLXNoYWRvdyk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qIGNhcmRzICovXFxyXFxuXFxyXFxuLmNhcmQge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1zaGFkb3cpO1xcclxcbiAgcGFkZGluZzogLjVyZW07XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgYXV0byk7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwiIGRyYWcgIHRpdGxlICAgZWRpdCAgXFxcIlxcclxcbiAgICBcXFwiIC4uLi4uIGRlc2NyICAgZGVzY3IgXFxcIlxcclxcbiAgICBcXFwiIC4uLi4uIGNyZWF0ZWQgLi4uLi4gXFxcIlxcclxcbiAgICBcXFwiIC4uLi4uIGR1ZSAgICAgLi4uLi4gXFxcIlxcclxcbiAgICBcXFwiIC4uLi4uIHRhc2tzICAgdGFza3MgXFxcIjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn0gLmNhcmQuYWN0aXZlIHtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cmVtIGhzbCgyNDAsIDcwJSwgOTAlKTtcXHJcXG59IC5jYXJkOm5vdCguYWN0aXZlKTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxyXFxufVxcclxcblxcclxcbi5jYXJkOmZpcnN0LW9mLXR5cGUgeyBib3JkZXItcmFkaXVzOiB2YXIoLS1jYXJkLWJvcmRlci1yYWQpIHZhcigtLWNhcmQtYm9yZGVyLXJhZCkgMCAwOyB9XFxyXFxuLmNhcmQ6bGFzdC1vZi10eXBlIHsgYm9yZGVyLXJhZGl1czogMCAwIHZhcigtLWNhcmQtYm9yZGVyLXJhZCkgdmFyKC0tY2FyZC1ib3JkZXItcmFkKTsgfVxcclxcblxcclxcbi5jYXJkIC50aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbC0xKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmctbGVmdDogLjVyZW07XFxyXFxufVxcclxcbi5jYXJkIC5kZXNjcmlwdGlvbiB7XFxyXFxuICBncmlkLWFyZWE6IGRlc2NyO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbC0yKTtcXHJcXG59XFxyXFxuLmNhcmQgLmRhdGUtY3JlYXRpb24ge1xcclxcbiAgZ3JpZC1hcmVhOiBjcmVhdGVkO1xcclxcbn1cXHJcXG4uY2FyZCAuZGF0ZS1kdWUge1xcclxcbiAgZ3JpZC1hcmVhOiBkdWU7XFxyXFxufVxcclxcbi5jYXJkIC5jaGVja2xpc3Qge1xcclxcbiAgZ3JpZC1hcmVhOiB0YXNrcztcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qIGNhcmQgcHJpb3JpdHkgaW5kaWNhdG9yICovXFxyXFxuXFxyXFxuLmNhcmRbZGF0YS1wcmlvcml0eT1cXFwibG93XFxcIl0ge1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LGxpbWUsIHJnYmEoMCwgMTI4LCAwLCAwKSA2MHB4KTtcXHJcXG59IC5jYXJkW2RhdGEtcHJpb3JpdHk9XFxcImxvd1xcXCJdLmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLGxpbWUsIHJnYmEoMCwgMTI4LCAwLCAwKSA2MHB4KTtcXHJcXG59XFxyXFxuLmNhcmRbZGF0YS1wcmlvcml0eT1cXFwibWlkZGxlXFxcIl0ge1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBnb2xkZW5yb2QsIHJnYmEoMCwgMTI4LCAwLCAwKSA2MHB4KTtcXHJcXG59IC5jYXJkW2RhdGEtcHJpb3JpdHk9XFxcIm1pZGRsZVxcXCJdLmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCBnb2xkZW5yb2QsIHJnYmEoMCwgMTI4LCAwLCAwKSA2MHB4KTtcXHJcXG59XFxyXFxuLmNhcmRbZGF0YS1wcmlvcml0eT1cXFwiaGlnaFxcXCJdIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgb3JhbmdlcmVkLCByZ2JhKDAsIDEyOCwgMCwgMCkgNjBweCk7XFxyXFxufSAuY2FyZFtkYXRhLXByaW9yaXR5PVxcXCJoaWdoXFxcIl0uYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIG9yYW5nZXJlZCwgcmdiYSgwLCAxMjgsIDAsIDApIDYwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBjYXJkIGRldGFpbHMgdHJhbnNpdGlvbiAqL1xcclxcblxcclxcbi5jYXJkIC5kZXNjcmlwdGlvbixcXHJcXG4uY2FyZCAuZGF0ZS1jcmVhdGlvbixcXHJcXG4uY2FyZCAuZGF0ZS1kdWUsXFxyXFxuLmNhcmQgdWwgbGkge1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHRyYW5zaXRpb246IHZhcigtLWNhcmQtb3Blbi10cmFuc2l0aW9uKTtcXHJcXG4gIGhlaWdodDogMHJlbTtcXHJcXG59XFxyXFxuLmNhcmQuYWN0aXZlIC5kZXNjcmlwdGlvbixcXHJcXG4uY2FyZC5hY3RpdmUgLmRhdGUtY3JlYXRpb24sXFxyXFxuLmNhcmQuYWN0aXZlIC5kYXRlLWR1ZSxcXHJcXG4uY2FyZC5hY3RpdmUgdWwgbGkge1xcclxcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxyXFxuICBoZWlnaHQ6IDEuNzVyZW07XFxyXFxufVxcclxcbi8qaW5kaXZpZHVhbCBzZXR0aW5ncyovXFxyXFxuLmNhcmQgLmRlc2NyaXB0aW9uIHsgbWFyZ2luLXRvcDogMHJlbTsgbWFyZ2luLWJvdHRvbTogMHJlbTt9XFxyXFxuLmNhcmQuYWN0aXZlIC5kZXNjcmlwdGlvbiB7IG1hcmdpbi10b3A6IDFyZW07IG1hcmdpbi1ib3R0b206IC41cmVtO31cXHJcXG4uY2FyZC5hY3RpdmUgdWwgbGkgeyBoZWlnaHQ6IDIuNXJlbTt9XFxyXFxuLmNhcmQgLmRhdGUtZHVlICB7bWFyZ2luLWJvdHRvbTogMHJlbTsgfVxcclxcbi5jYXJkLmFjdGl2ZSAuZGF0ZS1kdWUgIHttYXJnaW4tYm90dG9tOiAuNXJlbTsgfVxcclxcblxcclxcbi5jYXJkIHVsIGxpOm50aC1jaGlsZCgxKSB7IHRyYW5zaXRpb24tZGVsYXk6IDI1bXM7IH1cXHJcXG4uY2FyZCB1bCBsaTpudGgtY2hpbGQoMikgeyB0cmFuc2l0aW9uLWRlbGF5OiA1MG1zOyB9XFxyXFxuLmNhcmQgdWwgbGk6bnRoLWNoaWxkKDMpIHsgdHJhbnNpdGlvbi1kZWxheTogNzVtczsgfVxcclxcbi5jYXJkIHVsIGxpOm50aC1jaGlsZCg0KSB7IHRyYW5zaXRpb24tZGVsYXk6IDEwMG1zOyB9XFxyXFxuLmNhcmQgdWwgbGk6bnRoLWNoaWxkKDUpIHsgdHJhbnNpdGlvbi1kZWxheTogMTI1bXM7IH1cXHJcXG4uY2FyZCB1bCBsaTpudGgtY2hpbGQoNikgeyB0cmFuc2l0aW9uLWRlbGF5OiAxNTBtczsgfVxcclxcbi5jYXJkIHVsIGxpOm50aC1jaGlsZCg3KSB7IHRyYW5zaXRpb24tZGVsYXk6IDE3NW1zOyB9XFxyXFxuLmNhcmQgdWwgbGk6bnRoLWNoaWxkKDgpIHsgdHJhbnNpdGlvbi1kZWxheTogMjAwbXM7IH1cXHJcXG4uY2FyZCB1bCBsaTpudGgtY2hpbGQoOSkgeyB0cmFuc2l0aW9uLWRlbGF5OiAyMjVtczsgfVxcclxcbi5jYXJkIHVsIGxpOm50aC1jaGlsZCgxMCkgeyB0cmFuc2l0aW9uLWRlbGF5OiAyNTBtczsgfVxcclxcbi5jYXJkIHVsIGxpOm50aC1jaGlsZCgxMSkgeyB0cmFuc2l0aW9uLWRlbGF5OiAyNzVtczsgfVxcclxcbi5jYXJkIHVsIGxpOm50aC1jaGlsZCgxMikgeyB0cmFuc2l0aW9uLWRlbGF5OiAzMDBtczsgfVxcclxcbi5jYXJkIHVsIGxpOm50aC1jaGlsZCgxMykgeyB0cmFuc2l0aW9uLWRlbGF5OiAzMjVtczsgfVxcclxcbi5jYXJkIHVsIGxpOm50aC1jaGlsZCgxNCkgeyB0cmFuc2l0aW9uLWRlbGF5OiAzNTBtczsgfVxcclxcbi5jYXJkIHVsIGxpOm50aC1jaGlsZCgxNSkgeyB0cmFuc2l0aW9uLWRlbGF5OiAzNzVtczsgfVxcclxcbi5jYXJkIHVsIGxpOm50aC1jaGlsZCgxNikgeyB0cmFuc2l0aW9uLWRlbGF5OiA0MDBtczsgfVxcclxcbi5jYXJkIHVsIGxpOm50aC1jaGlsZCgxNykgeyB0cmFuc2l0aW9uLWRlbGF5OiA0MjVtczsgfVxcclxcbi5jYXJkIHVsIGxpOm50aC1jaGlsZCgxOCkgeyB0cmFuc2l0aW9uLWRlbGF5OiA0NTBtczsgfVxcclxcbi5jYXJkIHVsIGxpOm50aC1jaGlsZCgxOSkgeyB0cmFuc2l0aW9uLWRlbGF5OiA0NzVtczsgfVxcclxcbi5jYXJkIHVsIGxpOm50aC1jaGlsZCgxbisyMCkgeyB0cmFuc2l0aW9uLWRlbGF5OiA1MDBtczsgfVxcclxcblxcclxcblxcclxcblxcclxcbi8qIGNhcmQgaWNvbnMgKi9cXHJcXG5cXHJcXG4uY2FyZCBsaSBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiB2YXIoLS1pY29uLXNpemUpO1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1pY29uLXNpemUpO1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuLmNhcmQgbGkgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YmVmb3JlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgaW5zZXQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4wMyk7XFxyXFxuICBib3gtc2hhZG93OiAuMXJlbSAuMXJlbSAuMXJlbSB3aGl0ZSxcXHJcXG4gICAgaW5zZXQgLjFyZW0gLjFyZW0gLjI1cmVtIHJnYmEoMCwwLDAsLjEpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xcclxcbn1cXHJcXG4uY2FyZCBsaSBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjphZnRlciB7XFxyXFxuICAtLWNoZWNrLWFuaW0tZHVyYXRpb246IDIwMG1zO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBpbnNldDogLTdweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDc1JSwgMTUlIDYwJSwgMTUlIDYxJSwgMTYlIDYyJSwgMTglIDY1JSwgNCUgNzglLCAxJSA3NSUpO1xcclxcbiAgYW5pbWF0aW9uOiBjaGVja21hcmstYmFja3dhcmRzIHZhcigtLWNoZWNrLWFuaW0tZHVyYXRpb24pIGVhc2Utb3V0IGZvcndhcmRzO1xcclxcbn1cXHJcXG4uY2FyZCBsaSBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQ6OmFmdGVyIHtcXHJcXG4gIGFuaW1hdGlvbjogY2hlY2ttYXJrLWZvcndhcmRzIHZhcigtLWNoZWNrLWFuaW0tZHVyYXRpb24pIGVhc2UtaW4gZm9yd2FyZHM7XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgY2hlY2ttYXJrLWZvcndhcmRzIHtcXHJcXG4gIDAlIHtvcGFjaXR5OiAwO31cXHJcXG4gIDElIHtvcGFjaXR5OiAxOyBjbGlwLXBhdGg6IHBvbHlnb24oMCA3NSUsIDE1JSA2MCUsIDE1JSA2MSUsIDE2JSA2MiUsIDE4JSA2NSUsIDQlIDc4JSk7fVxcclxcbiAgMzAlIHtjbGlwLXBhdGg6IHBvbHlnb24oMCA3NSUsIDE1JSA2MCUsIDIxJSA2NiUsIDI2JSA3MCUsIDMxJSA3NiUsIDklIDg2JSk7fVxcclxcbiAgNTAlIHtjbGlwLXBhdGg6IHBvbHlnb24oMCA3NSUsIDE1JSA2MCUsIDM1JSA3NSUsIDQzJSA4MSUsIDQ5JSA4OCUsIDQwJSAxMDAlKTt9XFxyXFxuICAxMDAlIHtjbGlwLXBhdGg6IHBvbHlnb24oMCA3NSUsIDE1JSA2MCUsIDM1JSA3NSUsIDg1JSAwLCAxMDAlIDEwJSwgNDAlIDEwMCUpO31cXHJcXG59IEBrZXlmcmFtZXMgY2hlY2ttYXJrLWJhY2t3YXJkcyB7XFxyXFxuICAwJSB7Y2xpcC1wYXRoOiBwb2x5Z29uKDAgNzUlLCAxNSUgNjAlLCAzNSUgNzUlLCA4NSUgMCwgMTAwJSAxMCUsIDQwJSAxMDAlKTt9XFxyXFxuICA1MCUge2NsaXAtcGF0aDogcG9seWdvbigwIDc1JSwgMTUlIDYwJSwgMzUlIDc1JSwgNDMlIDgxJSwgNDklIDg4JSwgNDAlIDEwMCUpO31cXHJcXG4gIDcwJSB7Y2xpcC1wYXRoOiBwb2x5Z29uKDAgNzUlLCAxNSUgNjAlLCAyMSUgNjYlLCAyNiUgNzAlLCAzMSUgNzYlLCA5JSA4NiUpO31cXHJcXG4gIDk5JSB7b3BhY2l0eTogMTsgY2xpcC1wYXRoOiBwb2x5Z29uKDAgNzUlLCAxNSUgNjAlLCAxNSUgNjElLCAxNiUgNjIlLCAxOCUgNjUlLCA0JSA3OCUpO31cXHJcXG4gIDEwMCUge29wYWNpdHk6IDA7fVxcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCBsYWJlbCB7XFxyXFxuICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbC0yKTtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdHJhbnNwYXJlbnQgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSwgdHJhbnNwYXJlbnQgMTAwJSkgbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiA1MDBtcztcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogLTEwMHZ3O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uY2FyZCBsaSBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sLTMpO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxMDB2dztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaWNvbiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogdmFyKC0taWNvbi1zaXplKTtcXHJcXG4gIGhlaWdodDogdmFyKC0taWNvbi1zaXplKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcbi5jYXJkLWljb246OmFmdGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgaW5zZXQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWljb24uaWNvbi1waW46OmFmdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxufSAuY2FyZC1pY29uLmljb24tcGluOmNoZWNrZWQ6OmFmdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxufVxcclxcbi5jYXJkLWljb24uaWNvbi1lZGl0OjphZnRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcclxcbi8qIH0gLmNhcmQtaWNvbi5pY29uLWVkaXQ6Y2hlY2tlZDo6YWZ0ZXIgeyAqL1xcclxcbn1cXHJcXG4uY2FyZC1pY29uLmljb24tZmF2OjphZnRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcclxcbn0uY2FyZC1pY29uLmljb24tZmF2OmNoZWNrZWQ6OmFmdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHVsIGxpIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG8gYXV0bztcXHJcXG4gIGdhcDogLjVyZW07XFxyXFxufVxcclxcbi5lZGl0LWJ1dHRvbnMge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxyXFxuICBnYXA6IC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLWljb24ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IHZhcigtLWljb24tc2l6ZSk7XFxyXFxufS5pY29uLXRyYXNoLFxcclxcbi5pY29uLXRyYXNoLWxpZCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0cmFuc2l0aW9uOiByb3RhdGUgMzAwbXM7XFxyXFxufVxcclxcbi5pY29uLXRyYXNoIHsgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwJTt9XFxyXFxuLmljb24tdHJhc2gtbGlkIHsgdHJhbnNmb3JtLW9yaWdpbjogMjUwJSAwJTt9XFxyXFxuLmRlbGV0ZS1pY29uOmhvdmVyIC5pY29uLXRyYXNoIHsgcm90YXRlOiAtN2RlZzt9XFxyXFxuLmRlbGV0ZS1pY29uOmhvdmVyIC5pY29uLXRyYXNoLWxpZCB7IHJvdGF0ZTogN2RlZzsgfVxcclxcblxcclxcbi5jYXJkLWljb24uaWNvbi1lZGl0OmhvdmVyLFxcclxcbi5jYXJkLWljb24uaWNvbi1waW46aG92ZXIge1xcclxcbiAgYW5pbWF0aW9uOiBpY29uLXNoYWtlIDMwMG1zO1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcXHJcXG59XFxyXFxuQGtleWZyYW1lcyBpY29uLXNoYWtlIHtcXHJcXG4gIDAlLCAxMDAlIHsgcm90YXRlOiAwZGVnO31cXHJcXG4gIDEwJSB7IHJvdGF0ZTogNWRlZzt9XFxyXFxuICAyMCUgeyByb3RhdGU6IC01ZGVnO31cXHJcXG4gIDMwJSB7IHJvdGF0ZTogNGRlZzt9XFxyXFxuICA0MCUgeyByb3RhdGU6IC00ZGVnO31cXHJcXG4gIDUwJSB7IHJvdGF0ZTogM2RlZzt9XFxyXFxuICA2MCUgeyByb3RhdGU6IC0zZGVnO31cXHJcXG4gIDcwJSB7IHJvdGF0ZTogMmRlZzt9XFxyXFxuICA4MCUgeyByb3RhdGU6IC0yZGVnO31cXHJcXG4gIDkwJSB7IHJvdGF0ZTogMWRlZzt9XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWljb24uaWNvbi1mYXY6aG92ZXJ7XFxyXFxuICBhbmltYXRpb246IGljb24tc3BpbiAzMDBtcztcXHJcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1NSU7XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgaWNvbi1zcGluIHsgdG8ge3JvdGF0ZTogNzJkZWc7fSB9XFxyXFxuXFxyXFxuLmNhcmQtaWNvbi5pY29uLWZhdi5zaGFrZSB7XFxyXFxuICBhbmltYXRpb246IGljb24tZmF2LXNoYWtlIDMwMG1zO1xcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGljb24tZmF2LXNoYWtlIHtcXHJcXG4gIDAlLCAxMDAlIHtcXHJcXG4gICAgcm90YXRlOiAwZGVnO1xcclxcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCA1cHggZ29sZGVucm9kKVxcclxcbiAgICAgIGJyaWdodG5lc3MoMTUwJSk7XFxyXFxuICB9XFxyXFxuICAxMCUgeyByb3RhdGU6IDEwZGVnO31cXHJcXG4gIDIwJSB7IHJvdGF0ZTogLTEwZGVnO31cXHJcXG4gIDMwJSB7IHJvdGF0ZTogOGRlZzt9XFxyXFxuICA0MCUgeyByb3RhdGU6IC04ZGVnO31cXHJcXG4gIDUwJSB7IHJvdGF0ZTogNmRlZzt9XFxyXFxuICA2MCUgeyByb3RhdGU6IC02ZGVnO31cXHJcXG4gIDcwJSB7IHJvdGF0ZTogNGRlZzt9XFxyXFxuICA4MCUgeyByb3RhdGU6IC00ZGVnO31cXHJcXG4gIDkwJSB7IHJvdGF0ZTogMmRlZzt9XFxyXFxufVxcclxcblxcclxcbi5jaGVjay1pY29uLmljb24tZWRpdCB7XFxyXFxuICB3aWR0aDogdmFyKC0taWNvbi1jaGVjay1zaXplKTtcXHJcXG59XFxyXFxuXFxyXFxuLypmb3IgdGVzdGluZyovXFxyXFxuLyogKiB7XFxyXFxuICBvdXRsaW5lOiAxcHggc29saWQgZ3JheTtcXHJcXG59ICovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG9CQUFvQjtF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ZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS1iZ2MtcGFnZTogbGF2ZW5kZXI7XFxyXFxuICAtLWNhcmQtc2hhZG93OiAuMjVyZW0gLjI1cmVtIC4yNXJlbSByZ2JhKDAsMCwwLC4xKSxcXHJcXG4gICAgaW5zZXQgLjI1cmVtIC4yNXJlbSAuMjVyZW0gcmdiYSgyNTUsMjU1LDI1NSwuNSk7XFxyXFxuICAtLWljb24tc2l6ZTogMzBweDtcXHJcXG4gIC0taWNvbi1jaGVjay1zaXplOiAyMHB4O1xcclxcbiAgLS10eHQtY29sLTE6ICMwMDA7XFxyXFxuICAtLXR4dC1jb2wtMjogIzQ0NDtcXHJcXG4gIC0tdHh0LWNvbC0zOiAjNjY2O1xcclxcbiAgLS1jYXJkLWJvcmRlci1yYWQ6IC43NXJlbTtcXHJcXG4gIC0tY2FyZC1vcGVuLXRyYW5zaXRpb246IDI1MG1zO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ2MtcGFnZSk7XFxyXFxufVxcclxcblxcclxcbm9sLCB1bCB7IHBhZGRpbmc6IDA7IG1hcmdpbjogMDsgbGlzdC1zdHlsZS10eXBlOiBub25lOyB9XFxyXFxuXFxyXFxuaDEsIGgyLCBwIHttYXJnaW46IDA7fVxcclxcbmgxIHtmb250LXNpemU6IDNyZW07fVxcclxcblxcclxcbiNtYWluIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgcGFkZGluZzogLjVyZW07XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaXRlbSB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIG1hcmdpbjogMXJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogY2FyZHMgKi9cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLXNoYWRvdyk7XFxyXFxuICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCBhdXRvKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCIgZHJhZyAgdGl0bGUgICBlZGl0ICBcXFwiXFxyXFxuICAgIFxcXCIgLi4uLi4gZGVzY3IgICBkZXNjciBcXFwiXFxyXFxuICAgIFxcXCIgLi4uLi4gY3JlYXRlZCAuLi4uLiBcXFwiXFxyXFxuICAgIFxcXCIgLi4uLi4gZHVlICAgICAuLi4uLiBcXFwiXFxyXFxuICAgIFxcXCIgLi4uLi4gdGFza3MgICB0YXNrcyBcXFwiO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufSAuY2FyZC5hY3RpdmUge1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVyZW0gaHNsKDI0MCwgNzAlLCA5MCUpO1xcclxcbn0gLmNhcmQ6bm90KC5hY3RpdmUpOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQ6Zmlyc3Qtb2YtdHlwZSB7IGJvcmRlci1yYWRpdXM6IHZhcigtLWNhcmQtYm9yZGVyLXJhZCkgdmFyKC0tY2FyZC1ib3JkZXItcmFkKSAwIDA7IH1cXHJcXG4uY2FyZDpsYXN0LW9mLXR5cGUgeyBib3JkZXItcmFkaXVzOiAwIDAgdmFyKC0tY2FyZC1ib3JkZXItcmFkKSB2YXIoLS1jYXJkLWJvcmRlci1yYWQpOyB9XFxyXFxuXFxyXFxuLmNhcmQgLnRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sLTEpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcXHJcXG59XFxyXFxuLmNhcmQgLmRlc2NyaXB0aW9uIHtcXHJcXG4gIGdyaWQtYXJlYTogZGVzY3I7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sLTIpO1xcclxcbn1cXHJcXG4uY2FyZCAuZGF0ZS1jcmVhdGlvbiB7XFxyXFxuICBncmlkLWFyZWE6IGNyZWF0ZWQ7XFxyXFxufVxcclxcbi5jYXJkIC5kYXRlLWR1ZSB7XFxyXFxuICBncmlkLWFyZWE6IGR1ZTtcXHJcXG59XFxyXFxuLmNhcmQgLmNoZWNrbGlzdCB7XFxyXFxuICBncmlkLWFyZWE6IHRhc2tzO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogY2FyZCBwcmlvcml0eSBpbmRpY2F0b3IgKi9cXHJcXG5cXHJcXG4uY2FyZFtkYXRhLXByaW9yaXR5PVxcXCJsb3dcXFwiXSB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsbGltZSwgcmdiYSgwLCAxMjgsIDAsIDApIDYwcHgpO1xcclxcbn0gLmNhcmRbZGF0YS1wcmlvcml0eT1cXFwibG93XFxcIl0uYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sbGltZSwgcmdiYSgwLCAxMjgsIDAsIDApIDYwcHgpO1xcclxcbn1cXHJcXG4uY2FyZFtkYXRhLXByaW9yaXR5PVxcXCJtaWRkbGVcXFwiXSB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGdvbGRlbnJvZCwgcmdiYSgwLCAxMjgsIDAsIDApIDYwcHgpO1xcclxcbn0gLmNhcmRbZGF0YS1wcmlvcml0eT1cXFwibWlkZGxlXFxcIl0uYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIGdvbGRlbnJvZCwgcmdiYSgwLCAxMjgsIDAsIDApIDYwcHgpO1xcclxcbn1cXHJcXG4uY2FyZFtkYXRhLXByaW9yaXR5PVxcXCJoaWdoXFxcIl0ge1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBvcmFuZ2VyZWQsIHJnYmEoMCwgMTI4LCAwLCAwKSA2MHB4KTtcXHJcXG59IC5jYXJkW2RhdGEtcHJpb3JpdHk9XFxcImhpZ2hcXFwiXS5hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgb3JhbmdlcmVkLCByZ2JhKDAsIDEyOCwgMCwgMCkgNjBweCk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qIGNhcmQgZGV0YWlscyB0cmFuc2l0aW9uICovXFxyXFxuXFxyXFxuLmNhcmQgLmRlc2NyaXB0aW9uLFxcclxcbi5jYXJkIC5kYXRlLWNyZWF0aW9uLFxcclxcbi5jYXJkIC5kYXRlLWR1ZSxcXHJcXG4uY2FyZCB1bCBsaSB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgdHJhbnNpdGlvbjogdmFyKC0tY2FyZC1vcGVuLXRyYW5zaXRpb24pO1xcclxcbiAgaGVpZ2h0OiAwcmVtO1xcclxcbn1cXHJcXG4uY2FyZC5hY3RpdmUgLmRlc2NyaXB0aW9uLFxcclxcbi5jYXJkLmFjdGl2ZSAuZGF0ZS1jcmVhdGlvbixcXHJcXG4uY2FyZC5hY3RpdmUgLmRhdGUtZHVlLFxcclxcbi5jYXJkLmFjdGl2ZSB1bCBsaSB7XFxyXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXHJcXG4gIGhlaWdodDogMS43NXJlbTtcXHJcXG59XFxyXFxuLyppbmRpdmlkdWFsIHNldHRpbmdzKi9cXHJcXG4uY2FyZCAuZGVzY3JpcHRpb24geyBtYXJnaW4tdG9wOiAwcmVtOyBtYXJnaW4tYm90dG9tOiAwcmVtO31cXHJcXG4uY2FyZC5hY3RpdmUgLmRlc2NyaXB0aW9uIHsgbWFyZ2luLXRvcDogMXJlbTsgbWFyZ2luLWJvdHRvbTogLjVyZW07fVxcclxcbi5jYXJkLmFjdGl2ZSB1bCBsaSB7IGhlaWdodDogMi41cmVtO31cXHJcXG4uY2FyZCAuZGF0ZS1kdWUgIHttYXJnaW4tYm90dG9tOiAwcmVtOyB9XFxyXFxuLmNhcmQuYWN0aXZlIC5kYXRlLWR1ZSAge21hcmdpbi1ib3R0b206IC41cmVtOyB9XFxyXFxuXFxyXFxuLmNhcmQgdWwgbGk6bnRoLWNoaWxkKDEpIHsgdHJhbnNpdGlvbi1kZWxheTogMjVtczsgfVxcclxcbi5jYXJkIHVsIGxpOm50aC1jaGlsZCgyKSB7IHRyYW5zaXRpb24tZGVsYXk6IDUwbXM7IH1cXHJcXG4uY2FyZCB1bCBsaTpudGgtY2hpbGQoMykgeyB0cmFuc2l0aW9uLWRlbGF5OiA3NW1zOyB9XFxyXFxuLmNhcmQgdWwgbGk6bnRoLWNoaWxkKDQpIHsgdHJhbnNpdGlvbi1kZWxheTogMTAwbXM7IH1cXHJcXG4uY2FyZCB1bCBsaTpudGgtY2hpbGQoNSkgeyB0cmFuc2l0aW9uLWRlbGF5OiAxMjVtczsgfVxcclxcbi5jYXJkIHVsIGxpOm50aC1jaGlsZCg2KSB7IHRyYW5zaXRpb24tZGVsYXk6IDE1MG1zOyB9XFxyXFxuLmNhcmQgdWwgbGk6bnRoLWNoaWxkKDcpIHsgdHJhbnNpdGlvbi1kZWxheTogMTc1bXM7IH1cXHJcXG4uY2FyZCB1bCBsaTpudGgtY2hpbGQoOCkgeyB0cmFuc2l0aW9uLWRlbGF5OiAyMDBtczsgfVxcclxcbi5jYXJkIHVsIGxpOm50aC1jaGlsZCg5KSB7IHRyYW5zaXRpb24tZGVsYXk6IDIyNW1zOyB9XFxyXFxuLmNhcmQgdWwgbGk6bnRoLWNoaWxkKDEwKSB7IHRyYW5zaXRpb24tZGVsYXk6IDI1MG1zOyB9XFxyXFxuLmNhcmQgdWwgbGk6bnRoLWNoaWxkKDExKSB7IHRyYW5zaXRpb24tZGVsYXk6IDI3NW1zOyB9XFxyXFxuLmNhcmQgdWwgbGk6bnRoLWNoaWxkKDEyKSB7IHRyYW5zaXRpb24tZGVsYXk6IDMwMG1zOyB9XFxyXFxuLmNhcmQgdWwgbGk6bnRoLWNoaWxkKDEzKSB7IHRyYW5zaXRpb24tZGVsYXk6IDMyNW1zOyB9XFxyXFxuLmNhcmQgdWwgbGk6bnRoLWNoaWxkKDE0KSB7IHRyYW5zaXRpb24tZGVsYXk6IDM1MG1zOyB9XFxyXFxuLmNhcmQgdWwgbGk6bnRoLWNoaWxkKDE1KSB7IHRyYW5zaXRpb24tZGVsYXk6IDM3NW1zOyB9XFxyXFxuLmNhcmQgdWwgbGk6bnRoLWNoaWxkKDE2KSB7IHRyYW5zaXRpb24tZGVsYXk6IDQwMG1zOyB9XFxyXFxuLmNhcmQgdWwgbGk6bnRoLWNoaWxkKDE3KSB7IHRyYW5zaXRpb24tZGVsYXk6IDQyNW1zOyB9XFxyXFxuLmNhcmQgdWwgbGk6bnRoLWNoaWxkKDE4KSB7IHRyYW5zaXRpb24tZGVsYXk6IDQ1MG1zOyB9XFxyXFxuLmNhcmQgdWwgbGk6bnRoLWNoaWxkKDE5KSB7IHRyYW5zaXRpb24tZGVsYXk6IDQ3NW1zOyB9XFxyXFxuLmNhcmQgdWwgbGk6bnRoLWNoaWxkKDFuKzIwKSB7IHRyYW5zaXRpb24tZGVsYXk6IDUwMG1zOyB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogY2FyZCBpY29ucyAqL1xcclxcblxcclxcbi5jYXJkIGxpIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IHZhcigtLWljb24tc2l6ZSk7XFxyXFxuICBoZWlnaHQ6IHZhcigtLWljb24tc2l6ZSk7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG4uY2FyZCBsaSBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjpiZWZvcmUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBpbnNldDogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjAzKTtcXHJcXG4gIGJveC1zaGFkb3c6IC4xcmVtIC4xcmVtIC4xcmVtIHdoaXRlLFxcclxcbiAgICBpbnNldCAuMXJlbSAuMXJlbSAuMjVyZW0gcmdiYSgwLDAsMCwuMSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XFxyXFxufVxcclxcbi5jYXJkIGxpIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmFmdGVyIHtcXHJcXG4gIC0tY2hlY2stYW5pbS1kdXJhdGlvbjogMjAwbXM7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIGluc2V0OiAtN3B4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgNzUlLCAxNSUgNjAlLCAxNSUgNjElLCAxNiUgNjIlLCAxOCUgNjUlLCA0JSA3OCUsIDElIDc1JSk7XFxyXFxuICBhbmltYXRpb246IGNoZWNrbWFyay1iYWNrd2FyZHMgdmFyKC0tY2hlY2stYW5pbS1kdXJhdGlvbikgZWFzZS1vdXQgZm9yd2FyZHM7XFxyXFxufVxcclxcbi5jYXJkIGxpIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDo6YWZ0ZXIge1xcclxcbiAgYW5pbWF0aW9uOiBjaGVja21hcmstZm9yd2FyZHMgdmFyKC0tY2hlY2stYW5pbS1kdXJhdGlvbikgZWFzZS1pbiBmb3J3YXJkcztcXHJcXG59XFxyXFxuQGtleWZyYW1lcyBjaGVja21hcmstZm9yd2FyZHMge1xcclxcbiAgMCUge29wYWNpdHk6IDA7fVxcclxcbiAgMSUge29wYWNpdHk6IDE7IGNsaXAtcGF0aDogcG9seWdvbigwIDc1JSwgMTUlIDYwJSwgMTUlIDYxJSwgMTYlIDYyJSwgMTglIDY1JSwgNCUgNzglKTt9XFxyXFxuICAzMCUge2NsaXAtcGF0aDogcG9seWdvbigwIDc1JSwgMTUlIDYwJSwgMjElIDY2JSwgMjYlIDcwJSwgMzElIDc2JSwgOSUgODYlKTt9XFxyXFxuICA1MCUge2NsaXAtcGF0aDogcG9seWdvbigwIDc1JSwgMTUlIDYwJSwgMzUlIDc1JSwgNDMlIDgxJSwgNDklIDg4JSwgNDAlIDEwMCUpO31cXHJcXG4gIDEwMCUge2NsaXAtcGF0aDogcG9seWdvbigwIDc1JSwgMTUlIDYwJSwgMzUlIDc1JSwgODUlIDAsIDEwMCUgMTAlLCA0MCUgMTAwJSk7fVxcclxcbn0gQGtleWZyYW1lcyBjaGVja21hcmstYmFja3dhcmRzIHtcXHJcXG4gIDAlIHtjbGlwLXBhdGg6IHBvbHlnb24oMCA3NSUsIDE1JSA2MCUsIDM1JSA3NSUsIDg1JSAwLCAxMDAlIDEwJSwgNDAlIDEwMCUpO31cXHJcXG4gIDUwJSB7Y2xpcC1wYXRoOiBwb2x5Z29uKDAgNzUlLCAxNSUgNjAlLCAzNSUgNzUlLCA0MyUgODElLCA0OSUgODglLCA0MCUgMTAwJSk7fVxcclxcbiAgNzAlIHtjbGlwLXBhdGg6IHBvbHlnb24oMCA3NSUsIDE1JSA2MCUsIDIxJSA2NiUsIDI2JSA3MCUsIDMxJSA3NiUsIDklIDg2JSk7fVxcclxcbiAgOTklIHtvcGFjaXR5OiAxOyBjbGlwLXBhdGg6IHBvbHlnb24oMCA3NSUsIDE1JSA2MCUsIDE1JSA2MSUsIDE2JSA2MiUsIDE4JSA2NSUsIDQlIDc4JSk7fVxcclxcbiAgMTAwJSB7b3BhY2l0eTogMDt9XFxyXFxufVxcclxcblxcclxcbi5jYXJkIGxhYmVsIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sLTIpO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB0cmFuc3BhcmVudCAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLCB0cmFuc3BhcmVudCAxMDAlKSBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDUwMG1zO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAtMTAwdnc7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5jYXJkIGxpIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2wtMyk7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1pY29uIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiB2YXIoLS1pY29uLXNpemUpO1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1pY29uLXNpemUpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuLmNhcmQtaWNvbjo6YWZ0ZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBpbnNldDogMDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaWNvbi5pY29uLXBpbjo6YWZ0ZXIge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vbWVkaWEvaW1hZ2VzL2ljb25zL3Bpbi5zdmcpO1xcclxcbn0gLmNhcmQtaWNvbi5pY29uLXBpbjpjaGVja2VkOjphZnRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9tZWRpYS9pbWFnZXMvaWNvbnMvcGluLWFjdGl2ZS5zdmcpO1xcclxcbn1cXHJcXG4uY2FyZC1pY29uLmljb24tZWRpdDo6YWZ0ZXIge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vbWVkaWEvaW1hZ2VzL2ljb25zL2VkaXQuc3ZnKTtcXHJcXG4vKiB9IC5jYXJkLWljb24uaWNvbi1lZGl0OmNoZWNrZWQ6OmFmdGVyIHsgKi9cXHJcXG59XFxyXFxuLmNhcmQtaWNvbi5pY29uLWZhdjo6YWZ0ZXIge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vbWVkaWEvaW1hZ2VzL2ljb25zL2Zhdi5zdmcpO1xcclxcbn0uY2FyZC1pY29uLmljb24tZmF2OmNoZWNrZWQ6OmFmdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL21lZGlhL2ltYWdlcy9pY29ucy9mYXYtYWN0aXZlLnN2Zyk7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHVsIGxpIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG8gYXV0bztcXHJcXG4gIGdhcDogLjVyZW07XFxyXFxufVxcclxcbi5lZGl0LWJ1dHRvbnMge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxyXFxuICBnYXA6IC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLWljb24ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IHZhcigtLWljb24tc2l6ZSk7XFxyXFxufS5pY29uLXRyYXNoLFxcclxcbi5pY29uLXRyYXNoLWxpZCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0cmFuc2l0aW9uOiByb3RhdGUgMzAwbXM7XFxyXFxufVxcclxcbi5pY29uLXRyYXNoIHsgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwJTt9XFxyXFxuLmljb24tdHJhc2gtbGlkIHsgdHJhbnNmb3JtLW9yaWdpbjogMjUwJSAwJTt9XFxyXFxuLmRlbGV0ZS1pY29uOmhvdmVyIC5pY29uLXRyYXNoIHsgcm90YXRlOiAtN2RlZzt9XFxyXFxuLmRlbGV0ZS1pY29uOmhvdmVyIC5pY29uLXRyYXNoLWxpZCB7IHJvdGF0ZTogN2RlZzsgfVxcclxcblxcclxcbi5jYXJkLWljb24uaWNvbi1lZGl0OmhvdmVyLFxcclxcbi5jYXJkLWljb24uaWNvbi1waW46aG92ZXIge1xcclxcbiAgYW5pbWF0aW9uOiBpY29uLXNoYWtlIDMwMG1zO1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcXHJcXG59XFxyXFxuQGtleWZyYW1lcyBpY29uLXNoYWtlIHtcXHJcXG4gIDAlLCAxMDAlIHsgcm90YXRlOiAwZGVnO31cXHJcXG4gIDEwJSB7IHJvdGF0ZTogNWRlZzt9XFxyXFxuICAyMCUgeyByb3RhdGU6IC01ZGVnO31cXHJcXG4gIDMwJSB7IHJvdGF0ZTogNGRlZzt9XFxyXFxuICA0MCUgeyByb3RhdGU6IC00ZGVnO31cXHJcXG4gIDUwJSB7IHJvdGF0ZTogM2RlZzt9XFxyXFxuICA2MCUgeyByb3RhdGU6IC0zZGVnO31cXHJcXG4gIDcwJSB7IHJvdGF0ZTogMmRlZzt9XFxyXFxuICA4MCUgeyByb3RhdGU6IC0yZGVnO31cXHJcXG4gIDkwJSB7IHJvdGF0ZTogMWRlZzt9XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWljb24uaWNvbi1mYXY6aG92ZXJ7XFxyXFxuICBhbmltYXRpb246IGljb24tc3BpbiAzMDBtcztcXHJcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1NSU7XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgaWNvbi1zcGluIHsgdG8ge3JvdGF0ZTogNzJkZWc7fSB9XFxyXFxuXFxyXFxuLmNhcmQtaWNvbi5pY29uLWZhdi5zaGFrZSB7XFxyXFxuICBhbmltYXRpb246IGljb24tZmF2LXNoYWtlIDMwMG1zO1xcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGljb24tZmF2LXNoYWtlIHtcXHJcXG4gIDAlLCAxMDAlIHtcXHJcXG4gICAgcm90YXRlOiAwZGVnO1xcclxcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCA1cHggZ29sZGVucm9kKVxcclxcbiAgICAgIGJyaWdodG5lc3MoMTUwJSk7XFxyXFxuICB9XFxyXFxuICAxMCUgeyByb3RhdGU6IDEwZGVnO31cXHJcXG4gIDIwJSB7IHJvdGF0ZTogLTEwZGVnO31cXHJcXG4gIDMwJSB7IHJvdGF0ZTogOGRlZzt9XFxyXFxuICA0MCUgeyByb3RhdGU6IC04ZGVnO31cXHJcXG4gIDUwJSB7IHJvdGF0ZTogNmRlZzt9XFxyXFxuICA2MCUgeyByb3RhdGU6IC02ZGVnO31cXHJcXG4gIDcwJSB7IHJvdGF0ZTogNGRlZzt9XFxyXFxuICA4MCUgeyByb3RhdGU6IC00ZGVnO31cXHJcXG4gIDkwJSB7IHJvdGF0ZTogMmRlZzt9XFxyXFxufVxcclxcblxcclxcbi5jaGVjay1pY29uLmljb24tZWRpdCB7XFxyXFxuICB3aWR0aDogdmFyKC0taWNvbi1jaGVjay1zaXplKTtcXHJcXG59XFxyXFxuXFxyXFxuLypmb3IgdGVzdGluZyovXFxyXFxuLyogKiB7XFxyXFxuICBvdXRsaW5lOiAxcHggc29saWQgZ3JheTtcXHJcXG59ICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7IHVpIH0gZnJvbSBcIi4vbW9kdWxlcy91aS5qc1wiO1xyXG5pbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4vbW9kdWxlcy9jbGFzc2VzLmpzXCI7XHJcblxyXG4vL2ZvciB0ZXN0aW5nXHJcbmltcG9ydCB7bG9jYWxTdG9yYWdlVGVzdH0gZnJvbSBcIi4vbW9kdWxlcy91aS5qc1wiXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xyXG4gIGlmKGUua2V5ID09PSBcInJcIiAmJiBlLmFsdEtleSl7XHJcbiAgICB1aS5wbGFjZUNhcmRzKGxvY2FsU3RvcmFnZVRlc3QpO1xyXG4gICAgY29uc29sZS5sb2coXCJyZXBsYWNpbmcgbWFpblwiKTtcclxuICB9O1xyXG59KTtcclxuXHJcblxyXG4vL3J1biBvbiBsb2FkXHJcbnVpLnBsYWNlQ2FyZHMobG9jYWxTdG9yYWdlVGVzdCk7XHJcbiIsImV4cG9ydCBjbGFzcyBUb2RvIHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGVDcmVhdGlvbiwgZGF0ZUR1ZSwgLy90eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIlxyXG4gICAgY2hlY2tzLCBwcmlvcml0eSwgaXNGYXZvcml0ZSwgaXNQaW5uZWQpe1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5kYXRlQ3JlYXRpb24gPSBkYXRlQ3JlYXRpb247XHJcbiAgICB0aGlzLmRhdGVEdWUgPSBkYXRlRHVlO1xyXG4gICAgdGhpcy5jaGVja3MgPSBjaGVja3M7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICB0aGlzLmlzRmF2b3JpdGUgPSBpc0Zhdm9yaXRlO1xyXG4gICAgdGhpcy5pc1Bpbm5lZCA9IGlzUGlubmVkO1xyXG4gIH07XHJcbiAgXHJcbiAgdG9nZ2xlRmF2KCl7XHJcbiAgICB0aGlzLmlzRmF2b3JpdGUgPSAhdGhpcy5pc0Zhdm9yaXRlO1xyXG4gIH07XHJcblxyXG4gIHRvZ2dsZVRhc2soaWR4KXtcclxuICAgIHRoaXMuY2hlY2tzW2lkeF0uaXNEb25lID0gIXRoaXMuY2hlY2tzW2lkeF0uaXNEb25lO1xyXG4gIH07XHJcblxyXG4gIHRvZ2dsZVBpbigpe1xyXG4gICAgdGhpcy5pc1Bpbm5lZCA9ICF0aGlzLmlzUGlubmVkO1xyXG4gIH1cclxufTsiLCJpbXBvcnQgaWNvbkRyYWcgZnJvbSBcIi4uL21lZGlhL2ltYWdlcy9pY29ucy9kcmFnLnN2Z1wiO1xyXG5pbXBvcnQgaWNvbkVkaXQgZnJvbSBcIi4uL21lZGlhL2ltYWdlcy9pY29ucy9lZGl0LnN2Z1wiO1xyXG5pbXBvcnQgaWNvblRyYXNoIGZyb20gXCIuLi9tZWRpYS9pbWFnZXMvaWNvbnMvdHJhc2guc3ZnXCI7XHJcbmltcG9ydCBpY29uVHJhc2hMaWQgZnJvbSBcIi4uL21lZGlhL2ltYWdlcy9pY29ucy90cmFzaC1saWQuc3ZnXCI7XHJcblxyXG4vL2ZvciB0ZXN0aW5nXHJcbmltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi4vbW9kdWxlcy9jbGFzc2VzLmpzXCI7XHJcbmV4cG9ydCBjb25zdCBsb2NhbFN0b3JhZ2VUZXN0ID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcInJvdXRpbmVcIixcclxuICAgIHRvZG9zOiBbXHJcbiAgICAgIG5ldyBUb2RvKFwiZXhlcmNpc2VcIiwgXCJJdCdzIGxlZyBkYXkhXCIsIFwiMjAyMi0xMS0yM1QxNzo0MlwiLCBcIlwiLCBbXHJcbiAgICAgICAgeyB0YXNrOiBcInJ1biAza21cIiwgaXNEb25lOiB0cnVlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcImJpY3ljbGVcIiwgaXNEb25lOiBmYWxzZSB9LFxyXG4gICAgICAgIHsgdGFzazogXCJzcXVhdHNcIiwgaXNEb25lOiBmYWxzZSB9LFxyXG4gICAgICBdLCBcImxvd1wiLCBmYWxzZSwgZmFsc2UpLFxyXG5cclxuICAgICAgbmV3IFRvZG8oXCJjb2RpbmdcIiwgXCJcIiwgXCIyMDIyLTExLTIzVDE3OjQyXCIsIFwiXCIsIFtcclxuICAgICAgICB7IHRhc2s6IFwiY2hlY2sgY3NzLXRyaWNrc1wiLCBpc0RvbmU6IHRydWUgfSxcclxuICAgICAgICB7IHRhc2s6IFwiY29udGludWUgVE9QIHByYWN0aWNlXCIsIGlzRG9uZTogdHJ1ZSB9LFxyXG4gICAgICBdLCBcImhpZ2hcIiwgdHJ1ZSwgdHJ1ZSksXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwidGVzdFwiLFxyXG4gICAgdG9kb3M6IFtcclxuICAgICAgbmV3IFRvZG8oXCJ0ZXN0MVwiLCBcInRlc3QxIGRlc2NyXCIsIFwiMjAyMi0xMS0yM1QxNzo0MlwiLFwiMjAyMy0xMS0yM1QxNzo0MlwiLCBbXHJcbiAgICAgICAgeyB0YXNrOiBcInRlc3QxIHRhc2sxXCIsIGlzRG9uZTogdHJ1ZSB9LFxyXG4gICAgICAgIHsgdGFzazogXCJ0ZXN0MSB0YXNrMlwiLCBpc0RvbmU6IGZhbHNlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcInRlc3QxIHRhc2szXCIsIGlzRG9uZTogdHJ1ZSB9LFxyXG4gICAgICBdLCBcImxvd1wiLCB0cnVlLCBmYWxzZSksXHJcblxyXG4gICAgICBuZXcgVG9kbyhcInRlc3QyXCIsIFwidGVzdDIgZGVzY3JcIiwgXCIyMDIyLTExLTIzVDE3OjQyXCIsIFwiMjAyMy0xMS0yM1QxNzo0MlwiLCBbXHJcbiAgICAgICAgeyB0YXNrOiBcInRlc3QyIHRhc2sxXCIsIGlzRG9uZTogdHJ1ZSB9LFxyXG4gICAgICAgIHsgdGFzazogXCJ0ZXN0MiB0YXNrMlwiLCBpc0RvbmU6IGZhbHNlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcInRlc3QyIHRhc2szXCIsIGlzRG9uZTogdHJ1ZSB9LFxyXG4gICAgICAgIHsgdGFzazogXCJ0ZXN0MiB0YXNrNFwiLCBpc0RvbmU6IGZhbHNlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcInRlc3QyIHRhc2s1XCIsIGlzRG9uZTogZmFsc2UgfSxcclxuICAgICAgXSwgXCJtaWRkbGVcIiwgdHJ1ZSwgZmFsc2UpLFxyXG4gICAgICBuZXcgVG9kbyhcInRlc3QzIChsb25nKVwiLCBcInRlc3QzIGRlc2NyXCIsIFwiMjAyMi0xMS0yM1QxNzo0MlwiLCBcIjIwMjMtMTEtMjNUMTc6NDJcIiwgW1xyXG4gICAgICAgIHsgdGFzazogXCJ0ZXN0MyB0YXNrMVwiLCBpc0RvbmU6IHRydWUgfSxcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDMgdGFzazJcIiwgaXNEb25lOiB0cnVlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcInRlc3QzIHRhc2szXCIsIGlzRG9uZTogZmFsc2UgfSxcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDMgdGFzazRcIiwgaXNEb25lOiBmYWxzZSB9LFxyXG4gICAgICAgIHsgdGFzazogXCJ0ZXN0MyB0YXNrNVwiLCBpc0RvbmU6IHRydWUgfSxcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDMgdGFzazZcIiwgaXNEb25lOiB0cnVlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcInRlc3QzIHRhc2s3XCIsIGlzRG9uZTogZmFsc2UgfSxcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDMgdGFzazhcIiwgaXNEb25lOiB0cnVlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcInRlc3QzIHRhc2s5XCIsIGlzRG9uZTogdHJ1ZSB9LFxyXG4gICAgICAgIHsgdGFzazogXCJ0ZXN0MyB0YXNrMTBcIiwgaXNEb25lOiBmYWxzZSB9LFxyXG4gICAgICAgIHsgdGFzazogXCJ0ZXN0MyB0YXNrMTFcIiwgaXNEb25lOiBmYWxzZSB9LFxyXG4gICAgICAgIHsgdGFzazogXCJ0ZXN0MyB0YXNrMTJcIiwgaXNEb25lOiB0cnVlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcInRlc3QzIHRhc2sxM1wiLCBpc0RvbmU6IGZhbHNlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcInRlc3QzIHRhc2sxNFwiLCBpc0RvbmU6IHRydWUgfSxcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDMgdGFzazE1XCIsIGlzRG9uZTogdHJ1ZSB9LFxyXG4gICAgICBdLCBcImxvd1wiLCBmYWxzZSwgdHJ1ZSksXHJcbiAgICAgIG5ldyBUb2RvKFwidGVzdDRcIiwgXCJ0ZXN0NCBkZXNjclwiLCBcIjIwMjItMTEtMjNUMTc6NDJcIiwgXCIyMDIzLTExLTIzVDE3OjQyXCIsIFtcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDQgdGFzazFcIiwgaXNEb25lOiBmYWxzZSB9LFxyXG4gICAgICAgIHsgdGFzazogXCJ0ZXN0NCB0YXNrMlwiLCBpc0RvbmU6IGZhbHNlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcInRlc3Q0IHRhc2szXCIsIGlzRG9uZTogdHJ1ZSB9LFxyXG4gICAgICAgIHsgdGFzazogXCJ0ZXN0NCB0YXNrNFwiLCBpc0RvbmU6IGZhbHNlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcInRlc3Q0IHRhc2s1XCIsIGlzRG9uZTogdHJ1ZSB9LFxyXG4gICAgICBdLCBcImxvd1wiLCB0cnVlLCBmYWxzZSksXHJcbiAgICAgIG5ldyBUb2RvKFwidGVzdDVcIiwgXCJ0ZXN0NSBkZXNjclwiLCBcIjIwMjItMTEtMjNUMTc6NDJcIiwgXCIyMDIzLTExLTIzVDE3OjQyXCIsIFtcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDUgdGFzazFcIiwgaXNEb25lOiBmYWxzZSB9LFxyXG4gICAgICAgIHsgdGFzazogXCJ0ZXN0NSB0YXNrMlwiLCBpc0RvbmU6IHRydWUgfSxcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDUgdGFzazNcIiwgaXNEb25lOiB0cnVlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcInRlc3Q1IHRhc2s0XCIsIGlzRG9uZTogZmFsc2UgfSxcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDUgdGFzazVcIiwgaXNEb25lOiB0cnVlIH0sXHJcbiAgICAgIF0sIFwiaGlnaFwiLCBmYWxzZSwgZmFsc2UpLFxyXG4gICAgXSxcclxuICB9LFxyXG5dO1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHVpID0gKCgpID0+IHtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xyXG5cclxuICBmdW5jdGlvbiBwbGFjZUNhcmQodG9kbywgcHJvamVjdElkeCwgdG9kb0lkeCl7XHJcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XHJcbiAgICBjYXJkLmRhdGFzZXQucHJpb3JpdHkgPSB0b2RvLnByaW9yaXR5O1xyXG5cclxuICAgIGNvbnN0IGRyYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgZHJhZy5jbGFzc0xpc3QuYWRkKFwiY2FyZC1pY29uXCIsIFwiaWNvbi1kcmFnXCIpO1xyXG4gICAgZHJhZy5zcmMgPSBpY29uRHJhZztcclxuICAgIGRyYWcuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBjYXJkRHJhZyk7XHJcblxyXG4gICAgY29uc3QgZWRpdEJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZWRpdEJ0bnMuY2xhc3NMaXN0LmFkZChcImVkaXQtYnV0dG9uc1wiKTtcclxuXHJcbiAgICBjb25zdCBwaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBwaW4udHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgIHBpbi5jaGVja2VkID0gdG9kby5pc1Bpbm5lZCA/IHRydWUgOiBmYWxzZTtcclxuICAgIHBpbi5jbGFzc0xpc3QuYWRkKFwiY2FyZC1pY29uXCIsIFwiaWNvbi1waW5cIik7XHJcbiAgICBwaW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhcmRQaW5Ub2dnbGUpO1xyXG5cclxuICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBlZGl0LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICBlZGl0LmNsYXNzTGlzdC5hZGQoXCJjYXJkLWljb25cIiwgXCJpY29uLWVkaXRcIik7XHJcbiAgICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYXJkRWRpdCk7XHJcblxyXG4gICAgY29uc3QgZmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgZmF2LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICBmYXYuY2hlY2tlZCA9IHRvZG8uaXNGYXZvcml0ZSA/IHRydWUgOiBmYWxzZTtcclxuICAgIGZhdi5jbGFzc0xpc3QuYWRkKFwiY2FyZC1pY29uXCIsIFwiaWNvbi1mYXZcIik7XHJcbiAgICBmYXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhcmRGYXZUb2dnbGUpO1xyXG4gICAgZmF2LmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKGUpID0+IHtcclxuICAgICAgaWYoZS5hbmltYXRpb25OYW1lID09PSBcImljb24tZmF2LXNoYWtlXCIpIHtcclxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwic2hha2VcIik7XHJcbiAgICAgIH07XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWljb25cIik7XHJcbiAgICBkZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYXJkRGVsZXRlKTtcclxuXHJcbiAgICBjb25zdCB0cmFzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICB0cmFzaC5jbGFzc0xpc3QuYWRkKFwiY2FyZC1pY29uXCIsIFwiaWNvbi10cmFzaFwiKTtcclxuICAgIHRyYXNoLnNyYyA9IGljb25UcmFzaDtcclxuICAgIGNvbnN0IHRyYXNoTGlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIHRyYXNoTGlkLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWljb25cIiwgXCJpY29uLXRyYXNoLWxpZFwiKTtcclxuICAgIHRyYXNoTGlkLnNyYyA9IGljb25UcmFzaExpZDtcclxuICAgIFxyXG4gICAgZGVsZXRlSWNvbi5hcHBlbmQodHJhc2gsIHRyYXNoTGlkKTtcclxuICAgIGVkaXRCdG5zLmFwcGVuZChwaW4sIGVkaXQsIGZhdiwgZGVsZXRlSWNvbik7XHJcblxyXG4gICAgLy9hZGQgZGF0YXNldCB0byBlYWNoIGl0ZW1cclxuICAgIFtjYXJkLGRyYWcscGluLGVkaXQsZmF2LGRlbGV0ZUljb25dLmZvckVhY2goaWNvbiA9PiB7XHJcbiAgICAgIGljb24uZGF0YXNldC5wcm9qZWN0SWR4ID0gcHJvamVjdElkeDtcclxuICAgICAgaWNvbi5kYXRhc2V0LnRvZG9JZHggPSB0b2RvSWR4O1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gdG9kby50aXRsZTtcclxuICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRoaXNDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICBgW2RhdGEtcHJvamVjdC1pZHg9XCIke3Byb2plY3RJZHh9XCJdW2RhdGEtdG9kby1pZHg9XCIke3RvZG9JZHh9XCJdYFxyXG4gICAgICAgICk7XHJcbiAgICAgIFxyXG4gICAgICAgIHRoaXNDYXJkLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xyXG4gICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gdG9kby5kZXNjcmlwdGlvbjtcclxuXHJcbiAgICBjb25zdCBkYXRlQ3JlYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGRhdGVDcmVhdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGF0ZS1jcmVhdGlvblwiKTtcclxuICAgIGRhdGVDcmVhdGlvbi5pbm5lclRleHQgPSBgQ3JlYXRlZDogJHt0b2RvLmRhdGVDcmVhdGlvbn1gO1xyXG5cclxuICAgIGNvbnN0IGRhdGVEdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGRhdGVEdWUuY2xhc3NMaXN0LmFkZChcImRhdGUtZHVlXCIpO1xyXG4gICAgZGF0ZUR1ZS5pbm5lclRleHQgPSB0b2RvLmRhdGVEdWUubGVuZ3RoID4gMCA/IGBEdWU6ICR7dG9kby5kYXRlRHVlfWAgOiBcIlwiO1xyXG5cclxuICAgIGNvbnN0IGNoZWNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIGNoZWNrcy5jbGFzc0xpc3QuYWRkKFwiY2hlY2tsaXN0XCIpO1xyXG5cclxuICAgIHRvZG8uY2hlY2tzLmZvckVhY2goKGNoZWNrLGkpID0+IHtcclxuICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuXHJcbiAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gICAgICBjaGVja2JveC5pZCA9IGAke3RvZG8udGl0bGV9LSR7aX1gOyAvL2ZvciBsYWJlbCBvbmx5XHJcbiAgICAgIGNoZWNrYm94LmRhdGFzZXQucHJvamVjdElkeCA9IHByb2plY3RJZHg7XHJcbiAgICAgIGNoZWNrYm94LmRhdGFzZXQudG9kb0lkeCA9IHRvZG9JZHg7XHJcbiAgICAgIGNoZWNrYm94LmRhdGFzZXQudGFza0lkeCA9IGk7XHJcblxyXG4gICAgICBjaGVja2JveC5jaGVja2VkID0gY2hlY2suaXNEb25lO1xyXG4gICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGFza0NoZWNrVG9nZ2xlKTtcclxuXHJcbiAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICBsYWJlbC5odG1sRm9yID0gY2hlY2tib3guaWQ7XHJcbiAgICAgIGxhYmVsLmlubmVyVGV4dCA9IGNoZWNrLnRhc2s7XHJcblxyXG4gICAgICBjb25zdCBlZGl0Q2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICBlZGl0Q2hlY2suc3JjID0gaWNvbkVkaXQ7XHJcbiAgICAgIGVkaXRDaGVjay5jbGFzc0xpc3QuYWRkKFwiY2FyZC1pY29uXCIsIFwiY2hlY2staWNvblwiLCBcImljb24tZWRpdFwiKTtcclxuICAgICAgZWRpdENoZWNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVDaGVja0VkaXQpO1xyXG5cclxuICAgICAgdGFzay5hcHBlbmQoY2hlY2tib3gsIGxhYmVsLCBlZGl0Q2hlY2spO1xyXG5cclxuICAgICAgY2hlY2tzLmFwcGVuZENoaWxkKHRhc2spO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGNhcmQuYXBwZW5kKGRyYWcsIHRpdGxlLCBkYXRlQ3JlYXRpb24sIGRhdGVEdWUsXHJcbiAgICAgIGVkaXRCdG5zLCBkZXNjcmlwdGlvbiwgY2hlY2tzKTtcclxuXHJcbiAgICByZXR1cm4gY2FyZDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBsYWNlQ2FyZHMocHJvamVjdHMpe1xyXG5cclxuICAgIG1haW4ucmVwbGFjZUNoaWxkcmVuKClcclxuICAgIFxyXG5cclxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QsIHByb2plY3RJZHgpID0+IHtcclxuICAgICAgY29uc3QgcHJvamVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBwcm9qZWN0SXRlbS5kYXRhc2V0LmlkeCA9IHByb2plY3RJZHg7XHJcbiAgICAgIHByb2plY3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWl0ZW1cIik7XHJcblxyXG4gICAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgICAgaDEuaW5uZXJUZXh0ID0gcHJvamVjdC50aXRsZTtcclxuICAgICAgcHJvamVjdEl0ZW0uYXBwZW5kQ2hpbGQoaDEpO1xyXG5cclxuICAgICAgcHJvamVjdC50b2Rvcy5mb3JFYWNoKCh0b2RvLCB0b2RvSWR4KSA9PiB7XHJcbiAgICAgICAgcHJvamVjdEl0ZW0uYXBwZW5kQ2hpbGQocGxhY2VDYXJkKHRvZG8sIHByb2plY3RJZHgsIHRvZG9JZHgpKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBtYWluLmFwcGVuZENoaWxkKHByb2plY3RJdGVtKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGNhcmREcmFnKCl7XHJcbiAgICBjb25zb2xlLmxvZyhgZHJhZ2dpbmcgcHJvamVjdCAke3RoaXMuZGF0YXNldC5wcm9qZWN0SWR4XHJcbiAgICB9IC0gdG9kbyAke3RoaXMuZGF0YXNldC50b2RvSWR4fWApO1xyXG4gICAgdGhpcy5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjYXJkRWRpdCgpe1xyXG4gICAgY29uc29sZS5sb2coYGVkaXRpbmcgcHJvamVjdCAke3RoaXMuZGF0YXNldC5wcm9qZWN0SWR4XHJcbiAgICB9IC0gdG9kbyAke3RoaXMuZGF0YXNldC50b2RvSWR4fWApO1xyXG4gICAgdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRvZ2dsZUNoZWNrRWRpdCgpe1xyXG4gICAgY29uc29sZS5sb2coXCJlZGl0IGNoZWNrXCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2FyZEZhdlRvZ2dsZSgpe1xyXG4gICAgY29uc3QgcHJvamVjdElkeCA9IHRoaXMuZGF0YXNldC5wcm9qZWN0SWR4O1xyXG4gICAgY29uc3QgdG9kb0lkeCA9IHRoaXMuZGF0YXNldC50b2RvSWR4O1xyXG4gICAgbG9jYWxTdG9yYWdlVGVzdFtwcm9qZWN0SWR4XS50b2Rvc1t0b2RvSWR4XS50b2dnbGVGYXYoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNhcmRQaW5Ub2dnbGUoKXtcclxuICAgIGNvbnN0IHByb2plY3RJZHggPSB0aGlzLmRhdGFzZXQucHJvamVjdElkeDtcclxuICAgIGNvbnN0IHRvZG9JZHggPSB0aGlzLmRhdGFzZXQudG9kb0lkeDtcclxuICAgIGxvY2FsU3RvcmFnZVRlc3RbcHJvamVjdElkeF0udG9kb3NbdG9kb0lkeF0udG9nZ2xlUGluKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjYXJkRGVsZXRlKCl7XHJcbiAgICBjb25zdCBwcm9qZWN0SWR4ID0gdGhpcy5kYXRhc2V0LnByb2plY3RJZHg7XHJcbiAgICBjb25zdCB0b2RvSWR4ID0gdGhpcy5kYXRhc2V0LnRvZG9JZHg7XHJcblxyXG4gICAgY29uc3QgaXNGYXYgPSBsb2NhbFN0b3JhZ2VUZXN0W3Byb2plY3RJZHhdLnRvZG9zW3RvZG9JZHhdLmlzRmF2b3JpdGU7XHJcbiAgICBpZihpc0Zhdikge1xyXG4gICAgICBjb25zdCB0aGlzQ2FyZFN0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wcm9qZWN0LWlkeD1cIiR7XHJcbiAgICAgICAgcHJvamVjdElkeH1cIl1bZGF0YS10b2RvLWlkeD1cIiR7dG9kb0lkeH1cIl0gLmljb24tZmF2YCk7XHJcbiAgICAgIHRoaXNDYXJkU3Rhci5jbGFzc0xpc3QuYWRkKFwic2hha2VcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH07XHJcblxyXG4gICAgY29uc29sZS5sb2coYGRlbGV0ZSBwcm9qZWN0ICR7cHJvamVjdElkeH0gLSB0b2RvICR7dG9kb0lkeH1gKTtcclxuICAgIGxvY2FsU3RvcmFnZVRlc3RbcHJvamVjdElkeF0udG9kb3Muc3BsaWNlKHRvZG9JZHgsMSk7XHJcbiAgICBwbGFjZUNhcmRzKGxvY2FsU3RvcmFnZVRlc3QpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdGFza0NoZWNrVG9nZ2xlKCl7XHJcbiAgICBsb2NhbFN0b3JhZ2VUZXN0W3RoaXMuZGF0YXNldC5wcm9qZWN0SWR4XVxyXG4gICAgLnRvZG9zW3RoaXMuZGF0YXNldC50b2RvSWR4XS50b2dnbGVUYXNrKHRoaXMuZGF0YXNldC50YXNrSWR4KTtcclxuICB9XHJcbiAgICBcclxuICByZXR1cm4geyBwbGFjZUNhcmRzIH07XHJcbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9