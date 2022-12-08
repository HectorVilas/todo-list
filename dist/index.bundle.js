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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./media/images/icons/remove-task.svg */ "./src/media/images/icons/remove-task.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./media/images/icons/pin.svg */ "./src/media/images/icons/pin.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./media/images/icons/pin-active.svg */ "./src/media/images/icons/pin-active.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./media/images/icons/edit.svg */ "./src/media/images/icons/edit.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./media/images/icons/edit-active.svg */ "./src/media/images/icons/edit-active.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./media/images/icons/fav.svg */ "./src/media/images/icons/fav.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./media/images/icons/fav-active.svg */ "./src/media/images/icons/fav-active.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --bgc-page: lavender;\r\n  --card-shadow: .25rem .25rem .25rem rgba(0,0,0,.1),\r\n    inset .25rem .25rem .25rem rgba(255,255,255,.5);\r\n  --icon-size: 30px;\r\n  --icon-check-size: 20px;\r\n  --txt-col-1: #000;\r\n  --txt-col-2: #444;\r\n  --txt-col-3: #666;\r\n  --card-border-rad: .75rem;\r\n  --card-open-transition: 250ms;\r\n}\r\n\r\n/* default values reset */\r\nbody { padding: 0; margin: 0; }\r\nol, ul { padding: 0; margin: 0; list-style-type: none; }\r\nh1, h2, p {margin: 0;}\r\nh1 {font-size: 3rem;}\r\ninput[type=\"text\"], input[type=\"datetime-local\"] {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n* {font-family: 'Times New Roman', Times, serif;}\r\n\r\n\r\n\r\n/* page content */\r\n\r\nbody {background-color: var(--bgc-page);}\r\n\r\n#main {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  padding: .5rem;\r\n  overflow: hidden;\r\n  overflow-y: auto;\r\n}\r\n\r\n.project-item {\r\n  box-sizing: border-box;\r\n  padding: 1rem;\r\n  margin: 1rem;\r\n  box-shadow: var(--card-shadow);\r\n}\r\n\r\n\r\n\r\n/* cards */\r\n\r\n.card {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  box-shadow: var(--card-shadow);\r\n  padding: .5rem;\r\n  display: grid;\r\n  grid-template-columns: auto 1fr auto;\r\n  grid-template-rows: repeat(5, auto);\r\n  grid-template-areas:\r\n    \" drag  title   edit  \"\r\n    \" ..... descr   descr \"\r\n    \" ..... created ..... \"\r\n    \" ..... due     ..... \"\r\n    \" ..... tasks   tasks \";\r\n  align-items: center;\r\n  overflow: hidden;\r\n} .card.active {\r\n  height: auto;\r\n  box-shadow: inset 0 0 5rem hsl(240, 70%, 90%);\r\n} .card:not(.active):hover {\r\n  background-color: rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n.card:first-of-type { border-radius: var(--card-border-rad) var(--card-border-rad) 0 0; }\r\n.card:last-of-type { border-radius: 0 0 var(--card-border-rad) var(--card-border-rad); }\r\n\r\n.card .title {\r\n  font-size: 2rem;\r\n  color: var(--txt-col-1);\r\n  cursor: pointer;\r\n  padding-left: .5rem;\r\n}\r\n.card .description {\r\n  grid-area: descr;\r\n  font-size: 1.5rem;\r\n  color: var(--txt-col-2);\r\n}\r\n.card .date-creation {\r\n  grid-area: created;\r\n}\r\n.card .date-due {\r\n  grid-area: due;\r\n}\r\n.card .checklist {\r\n  grid-area: tasks;\r\n  display: grid;\r\n}\r\n\r\n\r\n\r\n/* card priority indicator */\r\n\r\n.card[data-priority=\"low\"] {\r\n  background: linear-gradient(to right,lime, rgba(0, 128, 0, 0) 60px);\r\n} .card[data-priority=\"low\"].active {\r\n  background: linear-gradient(to bottom,lime, rgba(0, 128, 0, 0) 60px);\r\n}\r\n.card[data-priority=\"middle\"] {\r\n  background: linear-gradient(to right, goldenrod, rgba(0, 128, 0, 0) 60px);\r\n} .card[data-priority=\"middle\"].active {\r\n  background: linear-gradient(to bottom, goldenrod, rgba(0, 128, 0, 0) 60px);\r\n}\r\n.card[data-priority=\"high\"] {\r\n  background: linear-gradient(to right, orangered, rgba(0, 128, 0, 0) 60px);\r\n} .card[data-priority=\"high\"].active {\r\n  background: linear-gradient(to bottom, orangered, rgba(0, 128, 0, 0) 60px);\r\n}\r\n\r\n\r\n\r\n/* card details transition */\r\n\r\n.card .description,\r\n.card .date-creation,\r\n.card .date-due,\r\n.card ul li {\r\n  overflow: hidden;\r\n  transition: var(--card-open-transition);\r\n  height: 0rem;\r\n}\r\n.card.active .description,\r\n.card.active .date-creation,\r\n.card.active .date-due,\r\n.card.active ul li {\r\n  overflow: visible;\r\n  height: 1.75rem;\r\n}\r\n/*individual settings*/\r\n.card .description { margin-top: 0rem; margin-bottom: 0rem;}\r\n.card.active .description { margin-top: 1rem; margin-bottom: .5rem;}\r\n.card.active ul li { height: 2.5rem;}\r\n.card .date-due  {margin-bottom: 0rem; }\r\n.card.active .date-due  {margin-bottom: .5rem; }\r\n\r\n.card ul li:nth-child(1) { transition-delay: 25ms; }\r\n.card ul li:nth-child(2) { transition-delay: 50ms; }\r\n.card ul li:nth-child(3) { transition-delay: 75ms; }\r\n.card ul li:nth-child(4) { transition-delay: 100ms; }\r\n.card ul li:nth-child(5) { transition-delay: 125ms; }\r\n.card ul li:nth-child(6) { transition-delay: 150ms; }\r\n.card ul li:nth-child(7) { transition-delay: 175ms; }\r\n.card ul li:nth-child(8) { transition-delay: 200ms; }\r\n.card ul li:nth-child(9) { transition-delay: 225ms; }\r\n.card ul li:nth-child(10) { transition-delay: 250ms; }\r\n.card ul li:nth-child(11) { transition-delay: 275ms; }\r\n.card ul li:nth-child(12) { transition-delay: 300ms; }\r\n.card ul li:nth-child(13) { transition-delay: 325ms; }\r\n.card ul li:nth-child(14) { transition-delay: 350ms; }\r\n.card ul li:nth-child(15) { transition-delay: 375ms; }\r\n.card ul li:nth-child(16) { transition-delay: 400ms; }\r\n.card ul li:nth-child(17) { transition-delay: 425ms; }\r\n.card ul li:nth-child(18) { transition-delay: 450ms; }\r\n.card ul li:nth-child(19) { transition-delay: 475ms; }\r\n.card ul li:nth-child(1n+20) { transition-delay: 500ms; }\r\n\r\n\r\n\r\n/* card icons */\r\n\r\n.card li input[type=\"checkbox\"] {\r\n  position: relative;\r\n  width: var(--icon-size);\r\n  height: var(--icon-size);\r\n  appearance: none;\r\n}\r\n.card li input[type=\"checkbox\"]::before {\r\n  position: absolute;\r\n  content: \"\";\r\n  inset: 0;\r\n  background-color: rgba(0,0,0,.03);\r\n  box-shadow: .1rem .1rem .1rem white,\r\n    inset .1rem .1rem .25rem rgba(0,0,0,.1);\r\n  border-radius: .25rem;\r\n}\r\n.card li input[type=\"checkbox\"]::after {\r\n  --check-anim-duration: 200ms;\r\n  position: absolute;\r\n  content: \"\";\r\n  inset: -7px;\r\n  background-color: red;\r\n  clip-path: polygon(0 75%, 15% 60%, 15% 61%, 16% 62%, 18% 65%, 4% 78%, 1% 75%);\r\n  animation: checkmark-backwards var(--check-anim-duration) ease-out forwards;\r\n}\r\n.card li input[type=\"checkbox\"]:checked::after {\r\n  animation: checkmark-forwards var(--check-anim-duration) ease-in forwards;\r\n}\r\n@keyframes checkmark-forwards {\r\n  0% {opacity: 0;}\r\n  1% {opacity: 1; clip-path: polygon(0 75%, 15% 60%, 15% 61%, 16% 62%, 18% 65%, 4% 78%);}\r\n  30% {clip-path: polygon(0 75%, 15% 60%, 21% 66%, 26% 70%, 31% 76%, 9% 86%);}\r\n  50% {clip-path: polygon(0 75%, 15% 60%, 35% 75%, 43% 81%, 49% 88%, 40% 100%);}\r\n  100% {clip-path: polygon(0 75%, 15% 60%, 35% 75%, 85% 0, 100% 10%, 40% 100%);}\r\n} @keyframes checkmark-backwards {\r\n  0% {clip-path: polygon(0 75%, 15% 60%, 35% 75%, 85% 0, 100% 10%, 40% 100%);}\r\n  50% {clip-path: polygon(0 75%, 15% 60%, 35% 75%, 43% 81%, 49% 88%, 40% 100%);}\r\n  70% {clip-path: polygon(0 75%, 15% 60%, 21% 66%, 26% 70%, 31% 76%, 9% 86%);}\r\n  99% {opacity: 1; clip-path: polygon(0 75%, 15% 60%, 15% 61%, 16% 62%, 18% 65%, 4% 78%);}\r\n  100% {opacity: 0;}\r\n}\r\n\r\n.card label,\r\n.card .edit-label {\r\n  font-size: 1.25rem;\r\n  color: var(--txt-col-2);\r\n  background: linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.5), transparent 100%) no-repeat;\r\n  background-size: 100%;\r\n  transition: background-position 500ms;\r\n  background-position-x: -100vw;\r\n  cursor: pointer;\r\n}\r\n.card li input[type=\"checkbox\"]:checked + label {\r\n  text-decoration: line-through;\r\n  color: var(--txt-col-3);\r\n  background-position-x: 100vw;\r\n}\r\n\r\n.card.edit-mode .card-icon.remove-task {\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center no-repeat;\r\n  background-size: 80%;\r\n}\r\n\r\n.card-icon {\r\n  position: relative;\r\n  width: var(--icon-size);\r\n  height: var(--icon-size);\r\n  cursor: pointer;\r\n  appearance: none;\r\n}\r\n.card-icon::after {\r\n  position: absolute;\r\n  content: \"\";\r\n  inset: 0;\r\n  background-size: 100%;\r\n  background-position: center;\r\n}\r\n\r\n.card-icon.icon-drag {\r\n  cursor: ns-resize;\r\n}\r\n\r\n.card-icon.icon-pin::after {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n} .card-icon.icon-pin:checked::after {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n}\r\n.card-icon.icon-edit::after {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n} .card-icon.icon-edit:checked::after {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n}\r\n.card-icon.icon-fav::after {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\r\n}.card-icon.icon-fav:checked::after {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\r\n}\r\n\r\n.card ul li {\r\n  display: grid;\r\n  grid-template-columns: auto 1fr auto;\r\n  gap: .5rem;\r\n  align-items: center;\r\n}\r\n.edit-buttons {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  gap: .5rem;\r\n}\r\n.delete-icon {\r\n  position: relative;\r\n  width: var(--icon-size);\r\n  height: var(--icon-size);\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n}.icon-trash,\r\n.icon-trash-lid {\r\n  position: absolute;\r\n  transition: rotate 300ms;\r\n}\r\n.icon-trash { transform-origin: 100% 0%;}\r\n.icon-trash-lid { transform-origin: 250% 0%;}\r\n.delete-icon:hover .icon-trash { rotate: -7deg;}\r\n.delete-icon:hover .icon-trash-lid { rotate: 7deg; }\r\n\r\n.card-icon.icon-edit:hover,\r\n.card-icon.icon-pin:hover {\r\n  animation: icon-shake 300ms;\r\n  transform-origin: 0% 100%;\r\n}\r\n@keyframes icon-shake {\r\n  0%, 100% { rotate: 0deg;}\r\n  10% { rotate: 5deg;}\r\n  20% { rotate: -5deg;}\r\n  30% { rotate: 4deg;}\r\n  40% { rotate: -4deg;}\r\n  50% { rotate: 3deg;}\r\n  60% { rotate: -3deg;}\r\n  70% { rotate: 2deg;}\r\n  80% { rotate: -2deg;}\r\n  90% { rotate: 1deg;}\r\n}\r\n\r\n.card-icon.icon-fav:hover{\r\n  animation: icon-spin 300ms;\r\n  transform-origin: 50% 55%;\r\n}\r\n@keyframes icon-spin { to {rotate: 72deg;} }\r\n\r\n.card-icon.icon-fav.shake {\r\n  animation: icon-fav-shake 300ms;\r\n}\r\n@keyframes icon-fav-shake {\r\n  0%, 100% {\r\n    rotate: 0deg;\r\n    filter: drop-shadow(0 0 5px goldenrod)\r\n      brightness(150%);\r\n  }\r\n  10% { rotate: 10deg;}\r\n  20% { rotate: -10deg;}\r\n  30% { rotate: 8deg;}\r\n  40% { rotate: -8deg;}\r\n  50% { rotate: 6deg;}\r\n  60% { rotate: -6deg;}\r\n  70% { rotate: 4deg;}\r\n  80% { rotate: -4deg;}\r\n  90% { rotate: 2deg;}\r\n}\r\n\r\n\r\n\r\n/* edit mode content status */\r\n\r\ninput[type=\"text\"], input[type=\"datetime-local\"] {\r\n  border-radius: .25rem;\r\n  background-color: white !important;\r\n  border: none;\r\n  box-shadow: inset .15rem .15rem .15rem rgba(0,0,0,.25);\r\n}\r\n\r\n.card.edit-mode input[type=\"text\"], input[type=\"datetime-local\"] {\r\n  cursor: text;\r\n}\r\n\r\n.card.edit-mode .title { display: none; }\r\n.card .edit-title { display: none; font-weight: 600;}\r\n.card.edit-mode .edit-title { display: block; box-sizing: border-box; }\r\n\r\n.card.edit-mode .description { display: none; }\r\n.card .edit-description { display: none; }\r\n.card.edit-mode .edit-description { display: block; box-sizing: border-box; }\r\n\r\n.card.edit-mode .date-due { display: none; }\r\n.card .edit-date-due { display: none; }\r\n.card.edit-mode .edit-date-due { display: block; box-sizing: border-box; }\r\n\r\n.card.edit-mode label { display: none; }\r\n.card .edit-label { display: none; }\r\n.card.edit-mode .edit-label { display: block; box-sizing: border-box; }\r\n.card input[type=\"checkbox\"]:checked ~ .edit-label {\r\n  text-decoration: line-through rgba(0,0,0,.25);\r\n}\r\n\r\n\r\n\r\n/*for testing*/\r\n/* * {\r\n  outline: 1px solid gray;\r\n} */", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n  --bgc-page: lavender;\r\n  --card-shadow: .25rem .25rem .25rem rgba(0,0,0,.1),\r\n    inset .25rem .25rem .25rem rgba(255,255,255,.5);\r\n  --icon-size: 30px;\r\n  --icon-check-size: 20px;\r\n  --txt-col-1: #000;\r\n  --txt-col-2: #444;\r\n  --txt-col-3: #666;\r\n  --card-border-rad: .75rem;\r\n  --card-open-transition: 250ms;\r\n}\r\n\r\n/* default values reset */\r\nbody { padding: 0; margin: 0; }\r\nol, ul { padding: 0; margin: 0; list-style-type: none; }\r\nh1, h2, p {margin: 0;}\r\nh1 {font-size: 3rem;}\r\ninput[type=\"text\"], input[type=\"datetime-local\"] {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n* {font-family: 'Times New Roman', Times, serif;}\r\n\r\n\r\n\r\n/* page content */\r\n\r\nbody {background-color: var(--bgc-page);}\r\n\r\n#main {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  padding: .5rem;\r\n  overflow: hidden;\r\n  overflow-y: auto;\r\n}\r\n\r\n.project-item {\r\n  box-sizing: border-box;\r\n  padding: 1rem;\r\n  margin: 1rem;\r\n  box-shadow: var(--card-shadow);\r\n}\r\n\r\n\r\n\r\n/* cards */\r\n\r\n.card {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  box-shadow: var(--card-shadow);\r\n  padding: .5rem;\r\n  display: grid;\r\n  grid-template-columns: auto 1fr auto;\r\n  grid-template-rows: repeat(5, auto);\r\n  grid-template-areas:\r\n    \" drag  title   edit  \"\r\n    \" ..... descr   descr \"\r\n    \" ..... created ..... \"\r\n    \" ..... due     ..... \"\r\n    \" ..... tasks   tasks \";\r\n  align-items: center;\r\n  overflow: hidden;\r\n} .card.active {\r\n  height: auto;\r\n  box-shadow: inset 0 0 5rem hsl(240, 70%, 90%);\r\n} .card:not(.active):hover {\r\n  background-color: rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n.card:first-of-type { border-radius: var(--card-border-rad) var(--card-border-rad) 0 0; }\r\n.card:last-of-type { border-radius: 0 0 var(--card-border-rad) var(--card-border-rad); }\r\n\r\n.card .title {\r\n  font-size: 2rem;\r\n  color: var(--txt-col-1);\r\n  cursor: pointer;\r\n  padding-left: .5rem;\r\n}\r\n.card .description {\r\n  grid-area: descr;\r\n  font-size: 1.5rem;\r\n  color: var(--txt-col-2);\r\n}\r\n.card .date-creation {\r\n  grid-area: created;\r\n}\r\n.card .date-due {\r\n  grid-area: due;\r\n}\r\n.card .checklist {\r\n  grid-area: tasks;\r\n  display: grid;\r\n}\r\n\r\n\r\n\r\n/* card priority indicator */\r\n\r\n.card[data-priority=\"low\"] {\r\n  background: linear-gradient(to right,lime, rgba(0, 128, 0, 0) 60px);\r\n} .card[data-priority=\"low\"].active {\r\n  background: linear-gradient(to bottom,lime, rgba(0, 128, 0, 0) 60px);\r\n}\r\n.card[data-priority=\"middle\"] {\r\n  background: linear-gradient(to right, goldenrod, rgba(0, 128, 0, 0) 60px);\r\n} .card[data-priority=\"middle\"].active {\r\n  background: linear-gradient(to bottom, goldenrod, rgba(0, 128, 0, 0) 60px);\r\n}\r\n.card[data-priority=\"high\"] {\r\n  background: linear-gradient(to right, orangered, rgba(0, 128, 0, 0) 60px);\r\n} .card[data-priority=\"high\"].active {\r\n  background: linear-gradient(to bottom, orangered, rgba(0, 128, 0, 0) 60px);\r\n}\r\n\r\n\r\n\r\n/* card details transition */\r\n\r\n.card .description,\r\n.card .date-creation,\r\n.card .date-due,\r\n.card ul li {\r\n  overflow: hidden;\r\n  transition: var(--card-open-transition);\r\n  height: 0rem;\r\n}\r\n.card.active .description,\r\n.card.active .date-creation,\r\n.card.active .date-due,\r\n.card.active ul li {\r\n  overflow: visible;\r\n  height: 1.75rem;\r\n}\r\n/*individual settings*/\r\n.card .description { margin-top: 0rem; margin-bottom: 0rem;}\r\n.card.active .description { margin-top: 1rem; margin-bottom: .5rem;}\r\n.card.active ul li { height: 2.5rem;}\r\n.card .date-due  {margin-bottom: 0rem; }\r\n.card.active .date-due  {margin-bottom: .5rem; }\r\n\r\n.card ul li:nth-child(1) { transition-delay: 25ms; }\r\n.card ul li:nth-child(2) { transition-delay: 50ms; }\r\n.card ul li:nth-child(3) { transition-delay: 75ms; }\r\n.card ul li:nth-child(4) { transition-delay: 100ms; }\r\n.card ul li:nth-child(5) { transition-delay: 125ms; }\r\n.card ul li:nth-child(6) { transition-delay: 150ms; }\r\n.card ul li:nth-child(7) { transition-delay: 175ms; }\r\n.card ul li:nth-child(8) { transition-delay: 200ms; }\r\n.card ul li:nth-child(9) { transition-delay: 225ms; }\r\n.card ul li:nth-child(10) { transition-delay: 250ms; }\r\n.card ul li:nth-child(11) { transition-delay: 275ms; }\r\n.card ul li:nth-child(12) { transition-delay: 300ms; }\r\n.card ul li:nth-child(13) { transition-delay: 325ms; }\r\n.card ul li:nth-child(14) { transition-delay: 350ms; }\r\n.card ul li:nth-child(15) { transition-delay: 375ms; }\r\n.card ul li:nth-child(16) { transition-delay: 400ms; }\r\n.card ul li:nth-child(17) { transition-delay: 425ms; }\r\n.card ul li:nth-child(18) { transition-delay: 450ms; }\r\n.card ul li:nth-child(19) { transition-delay: 475ms; }\r\n.card ul li:nth-child(1n+20) { transition-delay: 500ms; }\r\n\r\n\r\n\r\n/* card icons */\r\n\r\n.card li input[type=\"checkbox\"] {\r\n  position: relative;\r\n  width: var(--icon-size);\r\n  height: var(--icon-size);\r\n  appearance: none;\r\n}\r\n.card li input[type=\"checkbox\"]::before {\r\n  position: absolute;\r\n  content: \"\";\r\n  inset: 0;\r\n  background-color: rgba(0,0,0,.03);\r\n  box-shadow: .1rem .1rem .1rem white,\r\n    inset .1rem .1rem .25rem rgba(0,0,0,.1);\r\n  border-radius: .25rem;\r\n}\r\n.card li input[type=\"checkbox\"]::after {\r\n  --check-anim-duration: 200ms;\r\n  position: absolute;\r\n  content: \"\";\r\n  inset: -7px;\r\n  background-color: red;\r\n  clip-path: polygon(0 75%, 15% 60%, 15% 61%, 16% 62%, 18% 65%, 4% 78%, 1% 75%);\r\n  animation: checkmark-backwards var(--check-anim-duration) ease-out forwards;\r\n}\r\n.card li input[type=\"checkbox\"]:checked::after {\r\n  animation: checkmark-forwards var(--check-anim-duration) ease-in forwards;\r\n}\r\n@keyframes checkmark-forwards {\r\n  0% {opacity: 0;}\r\n  1% {opacity: 1; clip-path: polygon(0 75%, 15% 60%, 15% 61%, 16% 62%, 18% 65%, 4% 78%);}\r\n  30% {clip-path: polygon(0 75%, 15% 60%, 21% 66%, 26% 70%, 31% 76%, 9% 86%);}\r\n  50% {clip-path: polygon(0 75%, 15% 60%, 35% 75%, 43% 81%, 49% 88%, 40% 100%);}\r\n  100% {clip-path: polygon(0 75%, 15% 60%, 35% 75%, 85% 0, 100% 10%, 40% 100%);}\r\n} @keyframes checkmark-backwards {\r\n  0% {clip-path: polygon(0 75%, 15% 60%, 35% 75%, 85% 0, 100% 10%, 40% 100%);}\r\n  50% {clip-path: polygon(0 75%, 15% 60%, 35% 75%, 43% 81%, 49% 88%, 40% 100%);}\r\n  70% {clip-path: polygon(0 75%, 15% 60%, 21% 66%, 26% 70%, 31% 76%, 9% 86%);}\r\n  99% {opacity: 1; clip-path: polygon(0 75%, 15% 60%, 15% 61%, 16% 62%, 18% 65%, 4% 78%);}\r\n  100% {opacity: 0;}\r\n}\r\n\r\n.card label,\r\n.card .edit-label {\r\n  font-size: 1.25rem;\r\n  color: var(--txt-col-2);\r\n  background: linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.5), transparent 100%) no-repeat;\r\n  background-size: 100%;\r\n  transition: background-position 500ms;\r\n  background-position-x: -100vw;\r\n  cursor: pointer;\r\n}\r\n.card li input[type=\"checkbox\"]:checked + label {\r\n  text-decoration: line-through;\r\n  color: var(--txt-col-3);\r\n  background-position-x: 100vw;\r\n}\r\n\r\n.card.edit-mode .card-icon.remove-task {\r\n  background: url(./media/images/icons/remove-task.svg) center no-repeat;\r\n  background-size: 80%;\r\n}\r\n\r\n.card-icon {\r\n  position: relative;\r\n  width: var(--icon-size);\r\n  height: var(--icon-size);\r\n  cursor: pointer;\r\n  appearance: none;\r\n}\r\n.card-icon::after {\r\n  position: absolute;\r\n  content: \"\";\r\n  inset: 0;\r\n  background-size: 100%;\r\n  background-position: center;\r\n}\r\n\r\n.card-icon.icon-drag {\r\n  cursor: ns-resize;\r\n}\r\n\r\n.card-icon.icon-pin::after {\r\n  background-image: url(./media/images/icons/pin.svg);\r\n} .card-icon.icon-pin:checked::after {\r\n  background-image: url(./media/images/icons/pin-active.svg);\r\n}\r\n.card-icon.icon-edit::after {\r\n  background-image: url(./media/images/icons/edit.svg);\r\n} .card-icon.icon-edit:checked::after {\r\n  background-image: url(./media/images/icons/edit-active.svg);\r\n}\r\n.card-icon.icon-fav::after {\r\n  background-image: url(./media/images/icons/fav.svg);\r\n}.card-icon.icon-fav:checked::after {\r\n  background-image: url(./media/images/icons/fav-active.svg);\r\n}\r\n\r\n.card ul li {\r\n  display: grid;\r\n  grid-template-columns: auto 1fr auto;\r\n  gap: .5rem;\r\n  align-items: center;\r\n}\r\n.edit-buttons {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  gap: .5rem;\r\n}\r\n.delete-icon {\r\n  position: relative;\r\n  width: var(--icon-size);\r\n  height: var(--icon-size);\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n}.icon-trash,\r\n.icon-trash-lid {\r\n  position: absolute;\r\n  transition: rotate 300ms;\r\n}\r\n.icon-trash { transform-origin: 100% 0%;}\r\n.icon-trash-lid { transform-origin: 250% 0%;}\r\n.delete-icon:hover .icon-trash { rotate: -7deg;}\r\n.delete-icon:hover .icon-trash-lid { rotate: 7deg; }\r\n\r\n.card-icon.icon-edit:hover,\r\n.card-icon.icon-pin:hover {\r\n  animation: icon-shake 300ms;\r\n  transform-origin: 0% 100%;\r\n}\r\n@keyframes icon-shake {\r\n  0%, 100% { rotate: 0deg;}\r\n  10% { rotate: 5deg;}\r\n  20% { rotate: -5deg;}\r\n  30% { rotate: 4deg;}\r\n  40% { rotate: -4deg;}\r\n  50% { rotate: 3deg;}\r\n  60% { rotate: -3deg;}\r\n  70% { rotate: 2deg;}\r\n  80% { rotate: -2deg;}\r\n  90% { rotate: 1deg;}\r\n}\r\n\r\n.card-icon.icon-fav:hover{\r\n  animation: icon-spin 300ms;\r\n  transform-origin: 50% 55%;\r\n}\r\n@keyframes icon-spin { to {rotate: 72deg;} }\r\n\r\n.card-icon.icon-fav.shake {\r\n  animation: icon-fav-shake 300ms;\r\n}\r\n@keyframes icon-fav-shake {\r\n  0%, 100% {\r\n    rotate: 0deg;\r\n    filter: drop-shadow(0 0 5px goldenrod)\r\n      brightness(150%);\r\n  }\r\n  10% { rotate: 10deg;}\r\n  20% { rotate: -10deg;}\r\n  30% { rotate: 8deg;}\r\n  40% { rotate: -8deg;}\r\n  50% { rotate: 6deg;}\r\n  60% { rotate: -6deg;}\r\n  70% { rotate: 4deg;}\r\n  80% { rotate: -4deg;}\r\n  90% { rotate: 2deg;}\r\n}\r\n\r\n\r\n\r\n/* edit mode content status */\r\n\r\ninput[type=\"text\"], input[type=\"datetime-local\"] {\r\n  border-radius: .25rem;\r\n  background-color: white !important;\r\n  border: none;\r\n  box-shadow: inset .15rem .15rem .15rem rgba(0,0,0,.25);\r\n}\r\n\r\n.card.edit-mode input[type=\"text\"], input[type=\"datetime-local\"] {\r\n  cursor: text;\r\n}\r\n\r\n.card.edit-mode .title { display: none; }\r\n.card .edit-title { display: none; font-weight: 600;}\r\n.card.edit-mode .edit-title { display: block; box-sizing: border-box; }\r\n\r\n.card.edit-mode .description { display: none; }\r\n.card .edit-description { display: none; }\r\n.card.edit-mode .edit-description { display: block; box-sizing: border-box; }\r\n\r\n.card.edit-mode .date-due { display: none; }\r\n.card .edit-date-due { display: none; }\r\n.card.edit-mode .edit-date-due { display: block; box-sizing: border-box; }\r\n\r\n.card.edit-mode label { display: none; }\r\n.card .edit-label { display: none; }\r\n.card.edit-mode .edit-label { display: block; box-sizing: border-box; }\r\n.card input[type=\"checkbox\"]:checked ~ .edit-label {\r\n  text-decoration: line-through rgba(0,0,0,.25);\r\n}\r\n\r\n\r\n\r\n/*for testing*/\r\n/* * {\r\n  outline: 1px solid gray;\r\n} */"],"sourceRoot":""}]);
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

    const title = document.createElement("h2");
    title.classList.add("title");
    title.innerText = todo.title;
    title.addEventListener("click", toggleCard);
    const editTitle = document.createElement("input");
    editTitle.type = "text";
    editTitle.classList.add("title", "edit-title");
    editTitle.value = todo.title;
    editTitle.addEventListener("input", editField);
    
    const description = document.createElement("p");
    description.classList.add("description");
    description.innerText = todo.description;
    const editDescription = document.createElement("input");
    editDescription.type = "text";
    editDescription.classList.add("description", "edit-description");
    editDescription.value = todo.description;
    editDescription.addEventListener("input", editField);

    const dateCreation = document.createElement("p");
    dateCreation.classList.add("date-creation");
    dateCreation.innerText = `Created: ${todo.dateCreation}`;

    const dateDue = document.createElement("p");
    dateDue.classList.add("date-due");
    dateDue.innerText = todo.dateDue.length > 0 ? `Due: ${todo.dateDue}` : "";
    const editDateDue = document.createElement("input");
    editDateDue.type = "datetime-local";
    editDateDue.classList.add("date-due", "edit-date-due");
    editDateDue.value = todo.dateDue;
    editDateDue.addEventListener("input", editField);

    const checks = document.createElement("ul");
    checks.classList.add("checklist");

    //add dataset to each item
    [card,editTitle,drag,editDescription,editDateDue].forEach(icon => {
      icon.dataset.projectIdx = projectIdx;
      icon.dataset.todoIdx = todoIdx;
    });

    todo.checks.forEach((check,i) => {
      const task = document.createElement("li");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = `${todo.title}-${i}`; //for label only
      checkbox.checked = check.isDone;
      checkbox.addEventListener("click", taskCheckToggle);

      const label = document.createElement("label");
      label.htmlFor = checkbox.id;
      label.innerText = check.task;
      const editLabel = document.createElement("input");
      editLabel.type = "text";
      editLabel.classList.add("edit-label");
      editLabel.type = "text";
      editLabel.htmlFor = checkbox.id;
      editLabel.value = check.task;
      editLabel.addEventListener("input", editField);

      const removeTask = document.createElement("div");
      removeTask.classList.add("card-icon", "remove-task");
      removeTask.addEventListener("click", deleteTask);

      //add dataset
      [checkbox,editLabel, removeTask].forEach(item => {
        item.dataset.projectIdx = projectIdx;
        item.dataset.todoIdx = todoIdx;
        item.dataset.taskIdx = i;
      });

      task.append(checkbox, label, editLabel, removeTask);

      checks.appendChild(task);

    });

    card.append(drag, title, editTitle, dateCreation, dateDue, editDateDue,
      editButtonsDiv(todo, projectIdx, todoIdx),
      description, editDescription, checks);

    return card;
  }

  function editButtonsDiv(todo, projectIdx, todoIdx){
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

    //add dataset to each item
    [pin,edit,fav,deleteIcon].forEach(icon => {
      icon.dataset.projectIdx = projectIdx;
      icon.dataset.todoIdx = todoIdx;
    });

    deleteIcon.append(trash, trashLid);
    editBtns.append(pin, edit, fav, deleteIcon);

    return editBtns;
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

  function toggleCard() {
    const card = this.parentNode;
    card.classList.toggle("active");

    if(!card.className.includes("active")) {
      card.querySelector(".icon-edit").checked = false;
      card.classList.remove("edit-mode");
    }
  }

  function cardDrag(){
    console.log(`dragging project ${this.dataset.projectIdx
    } - todo ${this.dataset.todoIdx}`);
    this.parentNode.classList.remove("active");

    const card = this.parentNode;
    card.querySelector(".icon-edit").checked = false;
    card.classList.remove("edit-mode");
  }

  function cardEdit(){
    const cardClass = this.parentNode.parentNode.classList;
    this.checked ? cardClass.add("edit-mode") : cardClass.remove("edit-mode");
    
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

  function deleteTask(){
    const projectIdx = this.dataset.projectIdx;
    const todoIdx = this.dataset.todoIdx;
    const taskIdx = this?.dataset?.taskIdx;
    
    localStorageTest[projectIdx].todos[todoIdx].checks.splice(taskIdx, 1);
  }

  function editField(){
    const projectIdx = this.dataset.projectIdx;
    const todoIdx = this.dataset.todoIdx;
    const taskIdx = this?.dataset?.taskIdx;

    if(this.className.includes("edit-title")){
      localStorageTest[projectIdx].todos[todoIdx].title = this.value;
      const thisTitle = document.querySelector(`.card[data-project-idx="${projectIdx}"][data-todo-idx="${todoIdx}"] .title`);
      thisTitle.innerText = this.value;

    } else if(this.className.includes("edit-description")){
      localStorageTest[projectIdx].todos[todoIdx].description = this.value;
      const thisDescription = document.querySelector(`.card[data-project-idx="${projectIdx}"][data-todo-idx="${todoIdx}"] .description`);
      thisDescription.innerText = this.value;
      
    } else if(this.className.includes("edit-date-due")){
      const thisDateDue = document.querySelector(`.card[data-project-idx="${projectIdx}"][data-todo-idx="${todoIdx}"] .date-due`);
      localStorageTest[projectIdx].todos[todoIdx].dateDue = this.value;
      thisDateDue.innerText = this.value.length > 0 ? `Due: ${this.value}` : "";
      
    } else if(this.className.includes("edit-label")){
      const thisTask = document.querySelector(`[data-project-idx="${projectIdx}"][data-todo-idx="${todoIdx}"][data-task-idx="${taskIdx}"] ~ label`);
      localStorageTest[projectIdx].todos[todoIdx].checks[taskIdx].task = this.value;
      thisTask.innerText = this.value;
    }
  }
    
  return { placeCards };
})();

/***/ }),

/***/ "./src/media/images/icons/drag.svg":
/*!*****************************************!*\
  !*** ./src/media/images/icons/drag.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb3bac6ee3ea510bb512.svg";

/***/ }),

/***/ "./src/media/images/icons/edit-active.svg":
/*!************************************************!*\
  !*** ./src/media/images/icons/edit-active.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "96ef065eccb47f85c95f.svg";

/***/ }),

/***/ "./src/media/images/icons/edit.svg":
/*!*****************************************!*\
  !*** ./src/media/images/icons/edit.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ed3f41a0460cd96fa556.svg";

/***/ }),

/***/ "./src/media/images/icons/fav-active.svg":
/*!***********************************************!*\
  !*** ./src/media/images/icons/fav-active.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2b6810a1f36ee63b2300.svg";

/***/ }),

/***/ "./src/media/images/icons/fav.svg":
/*!****************************************!*\
  !*** ./src/media/images/icons/fav.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0c2930205a66180a6ec2.svg";

/***/ }),

/***/ "./src/media/images/icons/pin-active.svg":
/*!***********************************************!*\
  !*** ./src/media/images/icons/pin-active.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "410d453edd8152dd6bff.svg";

/***/ }),

/***/ "./src/media/images/icons/pin.svg":
/*!****************************************!*\
  !*** ./src/media/images/icons/pin.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3bcde04207314cd97e27.svg";

/***/ }),

/***/ "./src/media/images/icons/remove-task.svg":
/*!************************************************!*\
  !*** ./src/media/images/icons/remove-task.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "21a6a57e4fbc317460e1.svg";

/***/ }),

/***/ "./src/media/images/icons/trash-lid.svg":
/*!**********************************************!*\
  !*** ./src/media/images/icons/trash-lid.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e40d09a97ad9f7b92bc7.svg";

/***/ }),

/***/ "./src/media/images/icons/trash.svg":
/*!******************************************!*\
  !*** ./src/media/images/icons/trash.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3986a511b137d999737d.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsb0JBQW9CLFFBQVE7QUFDakg7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLGdGQUFnRixXQUFXLG9CQUFvQixRQUFRO0FBQ3ZIO0FBQ0E7QUFDQSxNQUFNO0FBQ04sNEVBQTRFLFdBQVcsb0JBQW9CLFFBQVE7QUFDbkg7QUFDQSw4REFBOEQsV0FBVztBQUN6RTtBQUNBLE1BQU07QUFDTixvRUFBb0UsV0FBVyxvQkFBb0IsUUFBUSxvQkFBb0IsUUFBUTtBQUN2STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy91aS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9tZWRpYS9pbWFnZXMvaWNvbnMvcmVtb3ZlLXRhc2suc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9tZWRpYS9pbWFnZXMvaWNvbnMvcGluLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vbWVkaWEvaW1hZ2VzL2ljb25zL3Bpbi1hY3RpdmUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9tZWRpYS9pbWFnZXMvaWNvbnMvZWRpdC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL21lZGlhL2ltYWdlcy9pY29ucy9lZGl0LWFjdGl2ZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuL21lZGlhL2ltYWdlcy9pY29ucy9mYXYuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi9tZWRpYS9pbWFnZXMvaWNvbnMvZmF2LWFjdGl2ZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAtLWJnYy1wYWdlOiBsYXZlbmRlcjtcXHJcXG4gIC0tY2FyZC1zaGFkb3c6IC4yNXJlbSAuMjVyZW0gLjI1cmVtIHJnYmEoMCwwLDAsLjEpLFxcclxcbiAgICBpbnNldCAuMjVyZW0gLjI1cmVtIC4yNXJlbSByZ2JhKDI1NSwyNTUsMjU1LC41KTtcXHJcXG4gIC0taWNvbi1zaXplOiAzMHB4O1xcclxcbiAgLS1pY29uLWNoZWNrLXNpemU6IDIwcHg7XFxyXFxuICAtLXR4dC1jb2wtMTogIzAwMDtcXHJcXG4gIC0tdHh0LWNvbC0yOiAjNDQ0O1xcclxcbiAgLS10eHQtY29sLTM6ICM2NjY7XFxyXFxuICAtLWNhcmQtYm9yZGVyLXJhZDogLjc1cmVtO1xcclxcbiAgLS1jYXJkLW9wZW4tdHJhbnNpdGlvbjogMjUwbXM7XFxyXFxufVxcclxcblxcclxcbi8qIGRlZmF1bHQgdmFsdWVzIHJlc2V0ICovXFxyXFxuYm9keSB7IHBhZGRpbmc6IDA7IG1hcmdpbjogMDsgfVxcclxcbm9sLCB1bCB7IHBhZGRpbmc6IDA7IG1hcmdpbjogMDsgbGlzdC1zdHlsZS10eXBlOiBub25lOyB9XFxyXFxuaDEsIGgyLCBwIHttYXJnaW46IDA7fVxcclxcbmgxIHtmb250LXNpemU6IDNyZW07fVxcclxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSwgaW5wdXRbdHlwZT1cXFwiZGF0ZXRpbWUtbG9jYWxcXFwiXSB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG4qIHtmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjt9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogcGFnZSBjb250ZW50ICovXFxyXFxuXFxyXFxuYm9keSB7YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdjLXBhZ2UpO31cXHJcXG5cXHJcXG4jbWFpbiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWl0ZW0ge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBtYXJnaW46IDFyZW07XFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLXNoYWRvdyk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qIGNhcmRzICovXFxyXFxuXFxyXFxuLmNhcmQge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1zaGFkb3cpO1xcclxcbiAgcGFkZGluZzogLjVyZW07XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgYXV0byk7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwiIGRyYWcgIHRpdGxlICAgZWRpdCAgXFxcIlxcclxcbiAgICBcXFwiIC4uLi4uIGRlc2NyICAgZGVzY3IgXFxcIlxcclxcbiAgICBcXFwiIC4uLi4uIGNyZWF0ZWQgLi4uLi4gXFxcIlxcclxcbiAgICBcXFwiIC4uLi4uIGR1ZSAgICAgLi4uLi4gXFxcIlxcclxcbiAgICBcXFwiIC4uLi4uIHRhc2tzICAgdGFza3MgXFxcIjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn0gLmNhcmQuYWN0aXZlIHtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cmVtIGhzbCgyNDAsIDcwJSwgOTAlKTtcXHJcXG59IC5jYXJkOm5vdCguYWN0aXZlKTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxyXFxufVxcclxcblxcclxcbi5jYXJkOmZpcnN0LW9mLXR5cGUgeyBib3JkZXItcmFkaXVzOiB2YXIoLS1jYXJkLWJvcmRlci1yYWQpIHZhcigtLWNhcmQtYm9yZGVyLXJhZCkgMCAwOyB9XFxyXFxuLmNhcmQ6bGFzdC1vZi10eXBlIHsgYm9yZGVyLXJhZGl1czogMCAwIHZhcigtLWNhcmQtYm9yZGVyLXJhZCkgdmFyKC0tY2FyZC1ib3JkZXItcmFkKTsgfVxcclxcblxcclxcbi5jYXJkIC50aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbC0xKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmctbGVmdDogLjVyZW07XFxyXFxufVxcclxcbi5jYXJkIC5kZXNjcmlwdGlvbiB7XFxyXFxuICBncmlkLWFyZWE6IGRlc2NyO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbC0yKTtcXHJcXG59XFxyXFxuLmNhcmQgLmRhdGUtY3JlYXRpb24ge1xcclxcbiAgZ3JpZC1hcmVhOiBjcmVhdGVkO1xcclxcbn1cXHJcXG4uY2FyZCAuZGF0ZS1kdWUge1xcclxcbiAgZ3JpZC1hcmVhOiBkdWU7XFxyXFxufVxcclxcbi5jYXJkIC5jaGVja2xpc3Qge1xcclxcbiAgZ3JpZC1hcmVhOiB0YXNrcztcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qIGNhcmQgcHJpb3JpdHkgaW5kaWNhdG9yICovXFxyXFxuXFxyXFxuLmNhcmRbZGF0YS1wcmlvcml0eT1cXFwibG93XFxcIl0ge1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LGxpbWUsIHJnYmEoMCwgMTI4LCAwLCAwKSA2MHB4KTtcXHJcXG59IC5jYXJkW2RhdGEtcHJpb3JpdHk9XFxcImxvd1xcXCJdLmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLGxpbWUsIHJnYmEoMCwgMTI4LCAwLCAwKSA2MHB4KTtcXHJcXG59XFxyXFxuLmNhcmRbZGF0YS1wcmlvcml0eT1cXFwibWlkZGxlXFxcIl0ge1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBnb2xkZW5yb2QsIHJnYmEoMCwgMTI4LCAwLCAwKSA2MHB4KTtcXHJcXG59IC5jYXJkW2RhdGEtcHJpb3JpdHk9XFxcIm1pZGRsZVxcXCJdLmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCBnb2xkZW5yb2QsIHJnYmEoMCwgMTI4LCAwLCAwKSA2MHB4KTtcXHJcXG59XFxyXFxuLmNhcmRbZGF0YS1wcmlvcml0eT1cXFwiaGlnaFxcXCJdIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgb3JhbmdlcmVkLCByZ2JhKDAsIDEyOCwgMCwgMCkgNjBweCk7XFxyXFxufSAuY2FyZFtkYXRhLXByaW9yaXR5PVxcXCJoaWdoXFxcIl0uYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIG9yYW5nZXJlZCwgcmdiYSgwLCAxMjgsIDAsIDApIDYwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBjYXJkIGRldGFpbHMgdHJhbnNpdGlvbiAqL1xcclxcblxcclxcbi5jYXJkIC5kZXNjcmlwdGlvbixcXHJcXG4uY2FyZCAuZGF0ZS1jcmVhdGlvbixcXHJcXG4uY2FyZCAuZGF0ZS1kdWUsXFxyXFxuLmNhcmQgdWwgbGkge1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHRyYW5zaXRpb246IHZhcigtLWNhcmQtb3Blbi10cmFuc2l0aW9uKTtcXHJcXG4gIGhlaWdodDogMHJlbTtcXHJcXG59XFxyXFxuLmNhcmQuYWN0aXZlIC5kZXNjcmlwdGlvbixcXHJcXG4uY2FyZC5hY3RpdmUgLmRhdGUtY3JlYXRpb24sXFxyXFxuLmNhcmQuYWN0aXZlIC5kYXRlLWR1ZSxcXHJcXG4uY2FyZC5hY3RpdmUgdWwgbGkge1xcclxcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxyXFxuICBoZWlnaHQ6IDEuNzVyZW07XFxyXFxufVxcclxcbi8qaW5kaXZpZHVhbCBzZXR0aW5ncyovXFxyXFxuLmNhcmQgLmRlc2NyaXB0aW9uIHsgbWFyZ2luLXRvcDogMHJlbTsgbWFyZ2luLWJvdHRvbTogMHJlbTt9XFxyXFxuLmNhcmQuYWN0aXZlIC5kZXNjcmlwdGlvbiB7IG1hcmdpbi10b3A6IDFyZW07IG1hcmdpbi1ib3R0b206IC41cmVtO31cXHJcXG4uY2FyZC5hY3RpdmUgdWwgbGkgeyBoZWlnaHQ6IDIuNXJlbTt9XFxyXFxuLmNhcmQgLmRhdGUtZHVlICB7bWFyZ2luLWJvdHRvbTogMHJlbTsgfVxcclxcbi5jYXJkLmFjdGl2ZSAuZGF0ZS1kdWUgIHttYXJnaW4tYm90dG9tOiAuNXJlbTsgfVxcclxcblxcclxcbi5jYXJkIHVsIGxpOm50aC1jaGlsZCgxKSB7IHRyYW5zaXRpb24tZGVsYXk6IDI1bXM7IH1cXHJcXG4uY2FyZCB1bCBsaTpudGgtY2hpbGQoMikgeyB0cmFuc2l0aW9uLWRlbGF5OiA1MG1zOyB9XFxyXFxuLmNhcmQgdWwgbGk6bnRoLWNoaWxkKDMpIHsgdHJhbnNpdGlvbi1kZWxheTogNzVtczsgfVxcclxcbi5jYXJkIHVsIGxpOm50aC1jaGlsZCg0KSB7IHRyYW5zaXRpb24tZGVsYXk6IDEwMG1zOyB9XFxyXFxuLmNhcmQgdWwgbGk6bnRoLWNoaWxkKDUpIHsgdHJhbnNpdGlvbi1kZWxheTogMTI1bXM7IH1cXHJcXG4uY2FyZCB1bCBsaTpudGgtY2hpbGQoNikgeyB0cmFuc2l0aW9uLWRlbGF5OiAxNTBtczsgfVxcclxcbi5jYXJkIHVsIGxpOm50aC1jaGlsZCg3KSB7IHRyYW5zaXRpb24tZGVsYXk6IDE3NW1zOyB9XFxyXFxuLmNhcmQgdWwgbGk6bnRoLWNoaWxkKDgpIHsgdHJhbnNpdGlvbi1kZWxheTogMjAwbXM7IH1cXHJcXG4uY2FyZCB1bCBsaTpudGgtY2hpbGQoOSkgeyB0cmFuc2l0aW9uLWRlbGF5OiAyMjVtczsgfVxcclxcbi5jYXJkIHVsIGxpOm50aC1jaGlsZCgxMCkgeyB0cmFuc2l0aW9uLWRlbGF5OiAyNTBtczsgfVxcclxcbi5jYXJkIHVsIGxpOm50aC1jaGlsZCgxMSkgeyB0cmFuc2l0aW9uLWRlbGF5OiAyNzVtczsgfVxcclxcbi5jYXJkIHVsIGxpOm50aC1jaGlsZCgxMikgeyB0cmFuc2l0aW9uLWRlbGF5OiAzMDBtczsgfVxcclxcbi5jYXJkIHVsIGxpOm50aC1jaGlsZCgxMykgeyB0cmFuc2l0aW9uLWRlbGF5OiAzMjVtczsgfVxcclxcbi5jYXJkIHVsIGxpOm50aC1jaGlsZCgxNCkgeyB0cmFuc2l0aW9uLWRlbGF5OiAzNTBtczsgfVxcclxcbi5jYXJkIHVsIGxpOm50aC1jaGlsZCgxNSkgeyB0cmFuc2l0aW9uLWRlbGF5OiAzNzVtczsgfVxcclxcbi5jYXJkIHVsIGxpOm50aC1jaGlsZCgxNikgeyB0cmFuc2l0aW9uLWRlbGF5OiA0MDBtczsgfVxcclxcbi5jYXJkIHVsIGxpOm50aC1jaGlsZCgxNykgeyB0cmFuc2l0aW9uLWRlbGF5OiA0MjVtczsgfVxcclxcbi5jYXJkIHVsIGxpOm50aC1jaGlsZCgxOCkgeyB0cmFuc2l0aW9uLWRlbGF5OiA0NTBtczsgfVxcclxcbi5jYXJkIHVsIGxpOm50aC1jaGlsZCgxOSkgeyB0cmFuc2l0aW9uLWRlbGF5OiA0NzVtczsgfVxcclxcbi5jYXJkIHVsIGxpOm50aC1jaGlsZCgxbisyMCkgeyB0cmFuc2l0aW9uLWRlbGF5OiA1MDBtczsgfVxcclxcblxcclxcblxcclxcblxcclxcbi8qIGNhcmQgaWNvbnMgKi9cXHJcXG5cXHJcXG4uY2FyZCBsaSBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiB2YXIoLS1pY29uLXNpemUpO1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1pY29uLXNpemUpO1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuLmNhcmQgbGkgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YmVmb3JlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgaW5zZXQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4wMyk7XFxyXFxuICBib3gtc2hhZG93OiAuMXJlbSAuMXJlbSAuMXJlbSB3aGl0ZSxcXHJcXG4gICAgaW5zZXQgLjFyZW0gLjFyZW0gLjI1cmVtIHJnYmEoMCwwLDAsLjEpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xcclxcbn1cXHJcXG4uY2FyZCBsaSBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjphZnRlciB7XFxyXFxuICAtLWNoZWNrLWFuaW0tZHVyYXRpb246IDIwMG1zO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBpbnNldDogLTdweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDc1JSwgMTUlIDYwJSwgMTUlIDYxJSwgMTYlIDYyJSwgMTglIDY1JSwgNCUgNzglLCAxJSA3NSUpO1xcclxcbiAgYW5pbWF0aW9uOiBjaGVja21hcmstYmFja3dhcmRzIHZhcigtLWNoZWNrLWFuaW0tZHVyYXRpb24pIGVhc2Utb3V0IGZvcndhcmRzO1xcclxcbn1cXHJcXG4uY2FyZCBsaSBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQ6OmFmdGVyIHtcXHJcXG4gIGFuaW1hdGlvbjogY2hlY2ttYXJrLWZvcndhcmRzIHZhcigtLWNoZWNrLWFuaW0tZHVyYXRpb24pIGVhc2UtaW4gZm9yd2FyZHM7XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgY2hlY2ttYXJrLWZvcndhcmRzIHtcXHJcXG4gIDAlIHtvcGFjaXR5OiAwO31cXHJcXG4gIDElIHtvcGFjaXR5OiAxOyBjbGlwLXBhdGg6IHBvbHlnb24oMCA3NSUsIDE1JSA2MCUsIDE1JSA2MSUsIDE2JSA2MiUsIDE4JSA2NSUsIDQlIDc4JSk7fVxcclxcbiAgMzAlIHtjbGlwLXBhdGg6IHBvbHlnb24oMCA3NSUsIDE1JSA2MCUsIDIxJSA2NiUsIDI2JSA3MCUsIDMxJSA3NiUsIDklIDg2JSk7fVxcclxcbiAgNTAlIHtjbGlwLXBhdGg6IHBvbHlnb24oMCA3NSUsIDE1JSA2MCUsIDM1JSA3NSUsIDQzJSA4MSUsIDQ5JSA4OCUsIDQwJSAxMDAlKTt9XFxyXFxuICAxMDAlIHtjbGlwLXBhdGg6IHBvbHlnb24oMCA3NSUsIDE1JSA2MCUsIDM1JSA3NSUsIDg1JSAwLCAxMDAlIDEwJSwgNDAlIDEwMCUpO31cXHJcXG59IEBrZXlmcmFtZXMgY2hlY2ttYXJrLWJhY2t3YXJkcyB7XFxyXFxuICAwJSB7Y2xpcC1wYXRoOiBwb2x5Z29uKDAgNzUlLCAxNSUgNjAlLCAzNSUgNzUlLCA4NSUgMCwgMTAwJSAxMCUsIDQwJSAxMDAlKTt9XFxyXFxuICA1MCUge2NsaXAtcGF0aDogcG9seWdvbigwIDc1JSwgMTUlIDYwJSwgMzUlIDc1JSwgNDMlIDgxJSwgNDklIDg4JSwgNDAlIDEwMCUpO31cXHJcXG4gIDcwJSB7Y2xpcC1wYXRoOiBwb2x5Z29uKDAgNzUlLCAxNSUgNjAlLCAyMSUgNjYlLCAyNiUgNzAlLCAzMSUgNzYlLCA5JSA4NiUpO31cXHJcXG4gIDk5JSB7b3BhY2l0eTogMTsgY2xpcC1wYXRoOiBwb2x5Z29uKDAgNzUlLCAxNSUgNjAlLCAxNSUgNjElLCAxNiUgNjIlLCAxOCUgNjUlLCA0JSA3OCUpO31cXHJcXG4gIDEwMCUge29wYWNpdHk6IDA7fVxcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCBsYWJlbCxcXHJcXG4uY2FyZCAuZWRpdC1sYWJlbCB7XFxyXFxuICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdHh0LWNvbC0yKTtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdHJhbnNwYXJlbnQgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSwgdHJhbnNwYXJlbnQgMTAwJSkgbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiA1MDBtcztcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogLTEwMHZ3O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uY2FyZCBsaSBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sLTMpO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxMDB2dztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQuZWRpdC1tb2RlIC5jYXJkLWljb24ucmVtb3ZlLXRhc2sge1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBjZW50ZXIgbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiA4MCU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWljb24ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IHZhcigtLWljb24tc2l6ZSk7XFxyXFxuICBoZWlnaHQ6IHZhcigtLWljb24tc2l6ZSk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG4uY2FyZC1pY29uOjphZnRlciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIGluc2V0OiAwO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1pY29uLmljb24tZHJhZyB7XFxyXFxuICBjdXJzb3I6IG5zLXJlc2l6ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaWNvbi5pY29uLXBpbjo6YWZ0ZXIge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG59IC5jYXJkLWljb24uaWNvbi1waW46Y2hlY2tlZDo6YWZ0ZXIge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXHJcXG59XFxyXFxuLmNhcmQtaWNvbi5pY29uLWVkaXQ6OmFmdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxyXFxufSAuY2FyZC1pY29uLmljb24tZWRpdDpjaGVja2VkOjphZnRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcclxcbn1cXHJcXG4uY2FyZC1pY29uLmljb24tZmF2OjphZnRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpO1xcclxcbn0uY2FyZC1pY29uLmljb24tZmF2OmNoZWNrZWQ6OmFmdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHVsIGxpIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XFxyXFxuICBnYXA6IC41cmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmVkaXQtYnV0dG9ucyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXHJcXG4gIGdhcDogLjVyZW07XFxyXFxufVxcclxcbi5kZWxldGUtaWNvbiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogdmFyKC0taWNvbi1zaXplKTtcXHJcXG4gIGhlaWdodDogdmFyKC0taWNvbi1zaXplKTtcXHJcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxyXFxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcclxcbn0uaWNvbi10cmFzaCxcXHJcXG4uaWNvbi10cmFzaC1saWQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdHJhbnNpdGlvbjogcm90YXRlIDMwMG1zO1xcclxcbn1cXHJcXG4uaWNvbi10cmFzaCB7IHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMCU7fVxcclxcbi5pY29uLXRyYXNoLWxpZCB7IHRyYW5zZm9ybS1vcmlnaW46IDI1MCUgMCU7fVxcclxcbi5kZWxldGUtaWNvbjpob3ZlciAuaWNvbi10cmFzaCB7IHJvdGF0ZTogLTdkZWc7fVxcclxcbi5kZWxldGUtaWNvbjpob3ZlciAuaWNvbi10cmFzaC1saWQgeyByb3RhdGU6IDdkZWc7IH1cXHJcXG5cXHJcXG4uY2FyZC1pY29uLmljb24tZWRpdDpob3ZlcixcXHJcXG4uY2FyZC1pY29uLmljb24tcGluOmhvdmVyIHtcXHJcXG4gIGFuaW1hdGlvbjogaWNvbi1zaGFrZSAzMDBtcztcXHJcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAlIDEwMCU7XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgaWNvbi1zaGFrZSB7XFxyXFxuICAwJSwgMTAwJSB7IHJvdGF0ZTogMGRlZzt9XFxyXFxuICAxMCUgeyByb3RhdGU6IDVkZWc7fVxcclxcbiAgMjAlIHsgcm90YXRlOiAtNWRlZzt9XFxyXFxuICAzMCUgeyByb3RhdGU6IDRkZWc7fVxcclxcbiAgNDAlIHsgcm90YXRlOiAtNGRlZzt9XFxyXFxuICA1MCUgeyByb3RhdGU6IDNkZWc7fVxcclxcbiAgNjAlIHsgcm90YXRlOiAtM2RlZzt9XFxyXFxuICA3MCUgeyByb3RhdGU6IDJkZWc7fVxcclxcbiAgODAlIHsgcm90YXRlOiAtMmRlZzt9XFxyXFxuICA5MCUgeyByb3RhdGU6IDFkZWc7fVxcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1pY29uLmljb24tZmF2OmhvdmVye1xcclxcbiAgYW5pbWF0aW9uOiBpY29uLXNwaW4gMzAwbXM7XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTUlO1xcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGljb24tc3BpbiB7IHRvIHtyb3RhdGU6IDcyZGVnO30gfVxcclxcblxcclxcbi5jYXJkLWljb24uaWNvbi1mYXYuc2hha2Uge1xcclxcbiAgYW5pbWF0aW9uOiBpY29uLWZhdi1zaGFrZSAzMDBtcztcXHJcXG59XFxyXFxuQGtleWZyYW1lcyBpY29uLWZhdi1zaGFrZSB7XFxyXFxuICAwJSwgMTAwJSB7XFxyXFxuICAgIHJvdGF0ZTogMGRlZztcXHJcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgNXB4IGdvbGRlbnJvZClcXHJcXG4gICAgICBicmlnaHRuZXNzKDE1MCUpO1xcclxcbiAgfVxcclxcbiAgMTAlIHsgcm90YXRlOiAxMGRlZzt9XFxyXFxuICAyMCUgeyByb3RhdGU6IC0xMGRlZzt9XFxyXFxuICAzMCUgeyByb3RhdGU6IDhkZWc7fVxcclxcbiAgNDAlIHsgcm90YXRlOiAtOGRlZzt9XFxyXFxuICA1MCUgeyByb3RhdGU6IDZkZWc7fVxcclxcbiAgNjAlIHsgcm90YXRlOiAtNmRlZzt9XFxyXFxuICA3MCUgeyByb3RhdGU6IDRkZWc7fVxcclxcbiAgODAlIHsgcm90YXRlOiAtNGRlZzt9XFxyXFxuICA5MCUgeyByb3RhdGU6IDJkZWc7fVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBlZGl0IG1vZGUgY29udGVudCBzdGF0dXMgKi9cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sIGlucHV0W3R5cGU9XFxcImRhdGV0aW1lLWxvY2FsXFxcIl0ge1xcclxcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IC4xNXJlbSAuMTVyZW0gLjE1cmVtIHJnYmEoMCwwLDAsLjI1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQuZWRpdC1tb2RlIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSwgaW5wdXRbdHlwZT1cXFwiZGF0ZXRpbWUtbG9jYWxcXFwiXSB7XFxyXFxuICBjdXJzb3I6IHRleHQ7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLmVkaXQtbW9kZSAudGl0bGUgeyBkaXNwbGF5OiBub25lOyB9XFxyXFxuLmNhcmQgLmVkaXQtdGl0bGUgeyBkaXNwbGF5OiBub25lOyBmb250LXdlaWdodDogNjAwO31cXHJcXG4uY2FyZC5lZGl0LW1vZGUgLmVkaXQtdGl0bGUgeyBkaXNwbGF5OiBibG9jazsgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcclxcblxcclxcbi5jYXJkLmVkaXQtbW9kZSAuZGVzY3JpcHRpb24geyBkaXNwbGF5OiBub25lOyB9XFxyXFxuLmNhcmQgLmVkaXQtZGVzY3JpcHRpb24geyBkaXNwbGF5OiBub25lOyB9XFxyXFxuLmNhcmQuZWRpdC1tb2RlIC5lZGl0LWRlc2NyaXB0aW9uIHsgZGlzcGxheTogYmxvY2s7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXHJcXG5cXHJcXG4uY2FyZC5lZGl0LW1vZGUgLmRhdGUtZHVlIHsgZGlzcGxheTogbm9uZTsgfVxcclxcbi5jYXJkIC5lZGl0LWRhdGUtZHVlIHsgZGlzcGxheTogbm9uZTsgfVxcclxcbi5jYXJkLmVkaXQtbW9kZSAuZWRpdC1kYXRlLWR1ZSB7IGRpc3BsYXk6IGJsb2NrOyBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxyXFxuXFxyXFxuLmNhcmQuZWRpdC1tb2RlIGxhYmVsIHsgZGlzcGxheTogbm9uZTsgfVxcclxcbi5jYXJkIC5lZGl0LWxhYmVsIHsgZGlzcGxheTogbm9uZTsgfVxcclxcbi5jYXJkLmVkaXQtbW9kZSAuZWRpdC1sYWJlbCB7IGRpc3BsYXk6IGJsb2NrOyBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxyXFxuLmNhcmQgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkIH4gLmVkaXQtbGFiZWwge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2ggcmdiYSgwLDAsMCwuMjUpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKmZvciB0ZXN0aW5nKi9cXHJcXG4vKiAqIHtcXHJcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBncmF5O1xcclxcbn0gKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCO21EQUNpRDtFQUNqRCxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6Qiw2QkFBNkI7QUFDL0I7O0FBRUEseUJBQXlCO0FBQ3pCLE9BQU8sVUFBVSxFQUFFLFNBQVMsRUFBRTtBQUM5QixTQUFTLFVBQVUsRUFBRSxTQUFTLEVBQUUscUJBQXFCLEVBQUU7QUFDdkQsV0FBVyxTQUFTLENBQUM7QUFDckIsSUFBSSxlQUFlLENBQUM7QUFDcEI7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYO0FBQ0EsR0FBRyw0Q0FBNEMsQ0FBQzs7OztBQUloRCxpQkFBaUI7O0FBRWpCLE1BQU0saUNBQWlDLENBQUM7O0FBRXhDO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixZQUFZO0VBQ1osOEJBQThCO0FBQ2hDOzs7O0FBSUEsVUFBVTs7QUFFVjtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLGNBQWM7RUFDZCxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLG1DQUFtQztFQUNuQzs7Ozs7MkJBS3lCO0VBQ3pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEIsRUFBRTtFQUNBLFlBQVk7RUFDWiw2Q0FBNkM7QUFDL0Ms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dFwiOltcIjpyb290IHtcXHJcXG4gIC0tYmdjLXBhZ2U6IGxhdmVuZGVyO1xcclxcbiAgLS1jYXJkLXNoYWRvdzogLjI1cmVtIC4yNXJlbSAuMjVyZW0gcmdiYSgwLDAsMCwuMSksXFxyXFxuICAgIGluc2V0IC4yNXJlbSAuMjVyZW0gLjI1cmVtIHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xcclxcbiAgLS1pY29uLXNpemU6IDMwcHg7XFxyXFxuICAtLWljb24tY2hlY2stc2l6ZTogMjBweDtcXHJcXG4gIC0tdHh0LWNvbC0xOiAjMDAwO1xcclxcbiAgLS10eHQtY29sLTI6ICM0NDQ7XFxyXFxuICAtLXR4dC1jb2wtMzogIzY2NjtcXHJcXG4gIC0tY2FyZC1ib3JkZXItcmFkOiAuNzVyZW07XFxyXFxuICAtLWNhcmQtb3Blbi10cmFuc2l0aW9uOiAyNTBtcztcXHJcXG59XFxyXFxuXFxyXFxuLyogZGVmYXVsdCB2YWx1ZXMgcmVzZXQgKi9cXHJcXG5ib2R5IHsgcGFkZGluZzogMDsgbWFyZ2luOiAwOyB9XFxyXFxub2wsIHVsIHsgcGFkZGluZzogMDsgbWFyZ2luOiAwOyBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IH1cXHJcXG5oMSwgaDIsIHAge21hcmdpbjogMDt9XFxyXFxuaDEge2ZvbnQtc2l6ZTogM3JlbTt9XFxyXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLCBpbnB1dFt0eXBlPVxcXCJkYXRldGltZS1sb2NhbFxcXCJdIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcbioge2ZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO31cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBwYWdlIGNvbnRlbnQgKi9cXHJcXG5cXHJcXG5ib2R5IHtiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ2MtcGFnZSk7fVxcclxcblxcclxcbiNtYWluIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgcGFkZGluZzogLjVyZW07XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaXRlbSB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIG1hcmdpbjogMXJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogY2FyZHMgKi9cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLXNoYWRvdyk7XFxyXFxuICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCBhdXRvKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCIgZHJhZyAgdGl0bGUgICBlZGl0ICBcXFwiXFxyXFxuICAgIFxcXCIgLi4uLi4gZGVzY3IgICBkZXNjciBcXFwiXFxyXFxuICAgIFxcXCIgLi4uLi4gY3JlYXRlZCAuLi4uLiBcXFwiXFxyXFxuICAgIFxcXCIgLi4uLi4gZHVlICAgICAuLi4uLiBcXFwiXFxyXFxuICAgIFxcXCIgLi4uLi4gdGFza3MgICB0YXNrcyBcXFwiO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufSAuY2FyZC5hY3RpdmUge1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVyZW0gaHNsKDI0MCwgNzAlLCA5MCUpO1xcclxcbn0gLmNhcmQ6bm90KC5hY3RpdmUpOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQ6Zmlyc3Qtb2YtdHlwZSB7IGJvcmRlci1yYWRpdXM6IHZhcigtLWNhcmQtYm9yZGVyLXJhZCkgdmFyKC0tY2FyZC1ib3JkZXItcmFkKSAwIDA7IH1cXHJcXG4uY2FyZDpsYXN0LW9mLXR5cGUgeyBib3JkZXItcmFkaXVzOiAwIDAgdmFyKC0tY2FyZC1ib3JkZXItcmFkKSB2YXIoLS1jYXJkLWJvcmRlci1yYWQpOyB9XFxyXFxuXFxyXFxuLmNhcmQgLnRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sLTEpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcXHJcXG59XFxyXFxuLmNhcmQgLmRlc2NyaXB0aW9uIHtcXHJcXG4gIGdyaWQtYXJlYTogZGVzY3I7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sLTIpO1xcclxcbn1cXHJcXG4uY2FyZCAuZGF0ZS1jcmVhdGlvbiB7XFxyXFxuICBncmlkLWFyZWE6IGNyZWF0ZWQ7XFxyXFxufVxcclxcbi5jYXJkIC5kYXRlLWR1ZSB7XFxyXFxuICBncmlkLWFyZWE6IGR1ZTtcXHJcXG59XFxyXFxuLmNhcmQgLmNoZWNrbGlzdCB7XFxyXFxuICBncmlkLWFyZWE6IHRhc2tzO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogY2FyZCBwcmlvcml0eSBpbmRpY2F0b3IgKi9cXHJcXG5cXHJcXG4uY2FyZFtkYXRhLXByaW9yaXR5PVxcXCJsb3dcXFwiXSB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsbGltZSwgcmdiYSgwLCAxMjgsIDAsIDApIDYwcHgpO1xcclxcbn0gLmNhcmRbZGF0YS1wcmlvcml0eT1cXFwibG93XFxcIl0uYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sbGltZSwgcmdiYSgwLCAxMjgsIDAsIDApIDYwcHgpO1xcclxcbn1cXHJcXG4uY2FyZFtkYXRhLXByaW9yaXR5PVxcXCJtaWRkbGVcXFwiXSB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGdvbGRlbnJvZCwgcmdiYSgwLCAxMjgsIDAsIDApIDYwcHgpO1xcclxcbn0gLmNhcmRbZGF0YS1wcmlvcml0eT1cXFwibWlkZGxlXFxcIl0uYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIGdvbGRlbnJvZCwgcmdiYSgwLCAxMjgsIDAsIDApIDYwcHgpO1xcclxcbn1cXHJcXG4uY2FyZFtkYXRhLXByaW9yaXR5PVxcXCJoaWdoXFxcIl0ge1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBvcmFuZ2VyZWQsIHJnYmEoMCwgMTI4LCAwLCAwKSA2MHB4KTtcXHJcXG59IC5jYXJkW2RhdGEtcHJpb3JpdHk9XFxcImhpZ2hcXFwiXS5hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgb3JhbmdlcmVkLCByZ2JhKDAsIDEyOCwgMCwgMCkgNjBweCk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qIGNhcmQgZGV0YWlscyB0cmFuc2l0aW9uICovXFxyXFxuXFxyXFxuLmNhcmQgLmRlc2NyaXB0aW9uLFxcclxcbi5jYXJkIC5kYXRlLWNyZWF0aW9uLFxcclxcbi5jYXJkIC5kYXRlLWR1ZSxcXHJcXG4uY2FyZCB1bCBsaSB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgdHJhbnNpdGlvbjogdmFyKC0tY2FyZC1vcGVuLXRyYW5zaXRpb24pO1xcclxcbiAgaGVpZ2h0OiAwcmVtO1xcclxcbn1cXHJcXG4uY2FyZC5hY3RpdmUgLmRlc2NyaXB0aW9uLFxcclxcbi5jYXJkLmFjdGl2ZSAuZGF0ZS1jcmVhdGlvbixcXHJcXG4uY2FyZC5hY3RpdmUgLmRhdGUtZHVlLFxcclxcbi5jYXJkLmFjdGl2ZSB1bCBsaSB7XFxyXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXHJcXG4gIGhlaWdodDogMS43NXJlbTtcXHJcXG59XFxyXFxuLyppbmRpdmlkdWFsIHNldHRpbmdzKi9cXHJcXG4uY2FyZCAuZGVzY3JpcHRpb24geyBtYXJnaW4tdG9wOiAwcmVtOyBtYXJnaW4tYm90dG9tOiAwcmVtO31cXHJcXG4uY2FyZC5hY3RpdmUgLmRlc2NyaXB0aW9uIHsgbWFyZ2luLXRvcDogMXJlbTsgbWFyZ2luLWJvdHRvbTogLjVyZW07fVxcclxcbi5jYXJkLmFjdGl2ZSB1bCBsaSB7IGhlaWdodDogMi41cmVtO31cXHJcXG4uY2FyZCAuZGF0ZS1kdWUgIHttYXJnaW4tYm90dG9tOiAwcmVtOyB9XFxyXFxuLmNhcmQuYWN0aXZlIC5kYXRlLWR1ZSAge21hcmdpbi1ib3R0b206IC41cmVtOyB9XFxyXFxuXFxyXFxuLmNhcmQgdWwgbGk6bnRoLWNoaWxkKDEpIHsgdHJhbnNpdGlvbi1kZWxheTogMjVtczsgfVxcclxcbi5jYXJkIHVsIGxpOm50aC1jaGlsZCgyKSB7IHRyYW5zaXRpb24tZGVsYXk6IDUwbXM7IH1cXHJcXG4uY2FyZCB1bCBsaTpudGgtY2hpbGQoMykgeyB0cmFuc2l0aW9uLWRlbGF5OiA3NW1zOyB9XFxyXFxuLmNhcmQgdWwgbGk6bnRoLWNoaWxkKDQpIHsgdHJhbnNpdGlvbi1kZWxheTogMTAwbXM7IH1cXHJcXG4uY2FyZCB1bCBsaTpudGgtY2hpbGQoNSkgeyB0cmFuc2l0aW9uLWRlbGF5OiAxMjVtczsgfVxcclxcbi5jYXJkIHVsIGxpOm50aC1jaGlsZCg2KSB7IHRyYW5zaXRpb24tZGVsYXk6IDE1MG1zOyB9XFxyXFxuLmNhcmQgdWwgbGk6bnRoLWNoaWxkKDcpIHsgdHJhbnNpdGlvbi1kZWxheTogMTc1bXM7IH1cXHJcXG4uY2FyZCB1bCBsaTpudGgtY2hpbGQoOCkgeyB0cmFuc2l0aW9uLWRlbGF5OiAyMDBtczsgfVxcclxcbi5jYXJkIHVsIGxpOm50aC1jaGlsZCg5KSB7IHRyYW5zaXRpb24tZGVsYXk6IDIyNW1zOyB9XFxyXFxuLmNhcmQgdWwgbGk6bnRoLWNoaWxkKDEwKSB7IHRyYW5zaXRpb24tZGVsYXk6IDI1MG1zOyB9XFxyXFxuLmNhcmQgdWwgbGk6bnRoLWNoaWxkKDExKSB7IHRyYW5zaXRpb24tZGVsYXk6IDI3NW1zOyB9XFxyXFxuLmNhcmQgdWwgbGk6bnRoLWNoaWxkKDEyKSB7IHRyYW5zaXRpb24tZGVsYXk6IDMwMG1zOyB9XFxyXFxuLmNhcmQgdWwgbGk6bnRoLWNoaWxkKDEzKSB7IHRyYW5zaXRpb24tZGVsYXk6IDMyNW1zOyB9XFxyXFxuLmNhcmQgdWwgbGk6bnRoLWNoaWxkKDE0KSB7IHRyYW5zaXRpb24tZGVsYXk6IDM1MG1zOyB9XFxyXFxuLmNhcmQgdWwgbGk6bnRoLWNoaWxkKDE1KSB7IHRyYW5zaXRpb24tZGVsYXk6IDM3NW1zOyB9XFxyXFxuLmNhcmQgdWwgbGk6bnRoLWNoaWxkKDE2KSB7IHRyYW5zaXRpb24tZGVsYXk6IDQwMG1zOyB9XFxyXFxuLmNhcmQgdWwgbGk6bnRoLWNoaWxkKDE3KSB7IHRyYW5zaXRpb24tZGVsYXk6IDQyNW1zOyB9XFxyXFxuLmNhcmQgdWwgbGk6bnRoLWNoaWxkKDE4KSB7IHRyYW5zaXRpb24tZGVsYXk6IDQ1MG1zOyB9XFxyXFxuLmNhcmQgdWwgbGk6bnRoLWNoaWxkKDE5KSB7IHRyYW5zaXRpb24tZGVsYXk6IDQ3NW1zOyB9XFxyXFxuLmNhcmQgdWwgbGk6bnRoLWNoaWxkKDFuKzIwKSB7IHRyYW5zaXRpb24tZGVsYXk6IDUwMG1zOyB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogY2FyZCBpY29ucyAqL1xcclxcblxcclxcbi5jYXJkIGxpIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IHZhcigtLWljb24tc2l6ZSk7XFxyXFxuICBoZWlnaHQ6IHZhcigtLWljb24tc2l6ZSk7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG4uY2FyZCBsaSBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjpiZWZvcmUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBpbnNldDogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjAzKTtcXHJcXG4gIGJveC1zaGFkb3c6IC4xcmVtIC4xcmVtIC4xcmVtIHdoaXRlLFxcclxcbiAgICBpbnNldCAuMXJlbSAuMXJlbSAuMjVyZW0gcmdiYSgwLDAsMCwuMSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XFxyXFxufVxcclxcbi5jYXJkIGxpIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmFmdGVyIHtcXHJcXG4gIC0tY2hlY2stYW5pbS1kdXJhdGlvbjogMjAwbXM7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIGluc2V0OiAtN3B4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgNzUlLCAxNSUgNjAlLCAxNSUgNjElLCAxNiUgNjIlLCAxOCUgNjUlLCA0JSA3OCUsIDElIDc1JSk7XFxyXFxuICBhbmltYXRpb246IGNoZWNrbWFyay1iYWNrd2FyZHMgdmFyKC0tY2hlY2stYW5pbS1kdXJhdGlvbikgZWFzZS1vdXQgZm9yd2FyZHM7XFxyXFxufVxcclxcbi5jYXJkIGxpIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDo6YWZ0ZXIge1xcclxcbiAgYW5pbWF0aW9uOiBjaGVja21hcmstZm9yd2FyZHMgdmFyKC0tY2hlY2stYW5pbS1kdXJhdGlvbikgZWFzZS1pbiBmb3J3YXJkcztcXHJcXG59XFxyXFxuQGtleWZyYW1lcyBjaGVja21hcmstZm9yd2FyZHMge1xcclxcbiAgMCUge29wYWNpdHk6IDA7fVxcclxcbiAgMSUge29wYWNpdHk6IDE7IGNsaXAtcGF0aDogcG9seWdvbigwIDc1JSwgMTUlIDYwJSwgMTUlIDYxJSwgMTYlIDYyJSwgMTglIDY1JSwgNCUgNzglKTt9XFxyXFxuICAzMCUge2NsaXAtcGF0aDogcG9seWdvbigwIDc1JSwgMTUlIDYwJSwgMjElIDY2JSwgMjYlIDcwJSwgMzElIDc2JSwgOSUgODYlKTt9XFxyXFxuICA1MCUge2NsaXAtcGF0aDogcG9seWdvbigwIDc1JSwgMTUlIDYwJSwgMzUlIDc1JSwgNDMlIDgxJSwgNDklIDg4JSwgNDAlIDEwMCUpO31cXHJcXG4gIDEwMCUge2NsaXAtcGF0aDogcG9seWdvbigwIDc1JSwgMTUlIDYwJSwgMzUlIDc1JSwgODUlIDAsIDEwMCUgMTAlLCA0MCUgMTAwJSk7fVxcclxcbn0gQGtleWZyYW1lcyBjaGVja21hcmstYmFja3dhcmRzIHtcXHJcXG4gIDAlIHtjbGlwLXBhdGg6IHBvbHlnb24oMCA3NSUsIDE1JSA2MCUsIDM1JSA3NSUsIDg1JSAwLCAxMDAlIDEwJSwgNDAlIDEwMCUpO31cXHJcXG4gIDUwJSB7Y2xpcC1wYXRoOiBwb2x5Z29uKDAgNzUlLCAxNSUgNjAlLCAzNSUgNzUlLCA0MyUgODElLCA0OSUgODglLCA0MCUgMTAwJSk7fVxcclxcbiAgNzAlIHtjbGlwLXBhdGg6IHBvbHlnb24oMCA3NSUsIDE1JSA2MCUsIDIxJSA2NiUsIDI2JSA3MCUsIDMxJSA3NiUsIDklIDg2JSk7fVxcclxcbiAgOTklIHtvcGFjaXR5OiAxOyBjbGlwLXBhdGg6IHBvbHlnb24oMCA3NSUsIDE1JSA2MCUsIDE1JSA2MSUsIDE2JSA2MiUsIDE4JSA2NSUsIDQlIDc4JSk7fVxcclxcbiAgMTAwJSB7b3BhY2l0eTogMDt9XFxyXFxufVxcclxcblxcclxcbi5jYXJkIGxhYmVsLFxcclxcbi5jYXJkIC5lZGl0LWxhYmVsIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10eHQtY29sLTIpO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB0cmFuc3BhcmVudCAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLCB0cmFuc3BhcmVudCAxMDAlKSBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDUwMG1zO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAtMTAwdnc7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5jYXJkIGxpIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbiAgY29sb3I6IHZhcigtLXR4dC1jb2wtMyk7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC5lZGl0LW1vZGUgLmNhcmQtaWNvbi5yZW1vdmUtdGFzayB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoLi9tZWRpYS9pbWFnZXMvaWNvbnMvcmVtb3ZlLXRhc2suc3ZnKSBjZW50ZXIgbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiA4MCU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWljb24ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IHZhcigtLWljb24tc2l6ZSk7XFxyXFxuICBoZWlnaHQ6IHZhcigtLWljb24tc2l6ZSk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG4uY2FyZC1pY29uOjphZnRlciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIGluc2V0OiAwO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1pY29uLmljb24tZHJhZyB7XFxyXFxuICBjdXJzb3I6IG5zLXJlc2l6ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaWNvbi5pY29uLXBpbjo6YWZ0ZXIge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vbWVkaWEvaW1hZ2VzL2ljb25zL3Bpbi5zdmcpO1xcclxcbn0gLmNhcmQtaWNvbi5pY29uLXBpbjpjaGVja2VkOjphZnRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9tZWRpYS9pbWFnZXMvaWNvbnMvcGluLWFjdGl2ZS5zdmcpO1xcclxcbn1cXHJcXG4uY2FyZC1pY29uLmljb24tZWRpdDo6YWZ0ZXIge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vbWVkaWEvaW1hZ2VzL2ljb25zL2VkaXQuc3ZnKTtcXHJcXG59IC5jYXJkLWljb24uaWNvbi1lZGl0OmNoZWNrZWQ6OmFmdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL21lZGlhL2ltYWdlcy9pY29ucy9lZGl0LWFjdGl2ZS5zdmcpO1xcclxcbn1cXHJcXG4uY2FyZC1pY29uLmljb24tZmF2OjphZnRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9tZWRpYS9pbWFnZXMvaWNvbnMvZmF2LnN2Zyk7XFxyXFxufS5jYXJkLWljb24uaWNvbi1mYXY6Y2hlY2tlZDo6YWZ0ZXIge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vbWVkaWEvaW1hZ2VzL2ljb25zL2Zhdi1hY3RpdmUuc3ZnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgdWwgbGkge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcXHJcXG4gIGdhcDogLjVyZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uZWRpdC1idXR0b25zIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcclxcbiAgZ2FwOiAuNXJlbTtcXHJcXG59XFxyXFxuLmRlbGV0ZS1pY29uIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiB2YXIoLS1pY29uLXNpemUpO1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1pY29uLXNpemUpO1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XFxyXFxufS5pY29uLXRyYXNoLFxcclxcbi5pY29uLXRyYXNoLWxpZCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0cmFuc2l0aW9uOiByb3RhdGUgMzAwbXM7XFxyXFxufVxcclxcbi5pY29uLXRyYXNoIHsgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwJTt9XFxyXFxuLmljb24tdHJhc2gtbGlkIHsgdHJhbnNmb3JtLW9yaWdpbjogMjUwJSAwJTt9XFxyXFxuLmRlbGV0ZS1pY29uOmhvdmVyIC5pY29uLXRyYXNoIHsgcm90YXRlOiAtN2RlZzt9XFxyXFxuLmRlbGV0ZS1pY29uOmhvdmVyIC5pY29uLXRyYXNoLWxpZCB7IHJvdGF0ZTogN2RlZzsgfVxcclxcblxcclxcbi5jYXJkLWljb24uaWNvbi1lZGl0OmhvdmVyLFxcclxcbi5jYXJkLWljb24uaWNvbi1waW46aG92ZXIge1xcclxcbiAgYW5pbWF0aW9uOiBpY29uLXNoYWtlIDMwMG1zO1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcXHJcXG59XFxyXFxuQGtleWZyYW1lcyBpY29uLXNoYWtlIHtcXHJcXG4gIDAlLCAxMDAlIHsgcm90YXRlOiAwZGVnO31cXHJcXG4gIDEwJSB7IHJvdGF0ZTogNWRlZzt9XFxyXFxuICAyMCUgeyByb3RhdGU6IC01ZGVnO31cXHJcXG4gIDMwJSB7IHJvdGF0ZTogNGRlZzt9XFxyXFxuICA0MCUgeyByb3RhdGU6IC00ZGVnO31cXHJcXG4gIDUwJSB7IHJvdGF0ZTogM2RlZzt9XFxyXFxuICA2MCUgeyByb3RhdGU6IC0zZGVnO31cXHJcXG4gIDcwJSB7IHJvdGF0ZTogMmRlZzt9XFxyXFxuICA4MCUgeyByb3RhdGU6IC0yZGVnO31cXHJcXG4gIDkwJSB7IHJvdGF0ZTogMWRlZzt9XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWljb24uaWNvbi1mYXY6aG92ZXJ7XFxyXFxuICBhbmltYXRpb246IGljb24tc3BpbiAzMDBtcztcXHJcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1NSU7XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgaWNvbi1zcGluIHsgdG8ge3JvdGF0ZTogNzJkZWc7fSB9XFxyXFxuXFxyXFxuLmNhcmQtaWNvbi5pY29uLWZhdi5zaGFrZSB7XFxyXFxuICBhbmltYXRpb246IGljb24tZmF2LXNoYWtlIDMwMG1zO1xcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGljb24tZmF2LXNoYWtlIHtcXHJcXG4gIDAlLCAxMDAlIHtcXHJcXG4gICAgcm90YXRlOiAwZGVnO1xcclxcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCA1cHggZ29sZGVucm9kKVxcclxcbiAgICAgIGJyaWdodG5lc3MoMTUwJSk7XFxyXFxuICB9XFxyXFxuICAxMCUgeyByb3RhdGU6IDEwZGVnO31cXHJcXG4gIDIwJSB7IHJvdGF0ZTogLTEwZGVnO31cXHJcXG4gIDMwJSB7IHJvdGF0ZTogOGRlZzt9XFxyXFxuICA0MCUgeyByb3RhdGU6IC04ZGVnO31cXHJcXG4gIDUwJSB7IHJvdGF0ZTogNmRlZzt9XFxyXFxuICA2MCUgeyByb3RhdGU6IC02ZGVnO31cXHJcXG4gIDcwJSB7IHJvdGF0ZTogNGRlZzt9XFxyXFxuICA4MCUgeyByb3RhdGU6IC00ZGVnO31cXHJcXG4gIDkwJSB7IHJvdGF0ZTogMmRlZzt9XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qIGVkaXQgbW9kZSBjb250ZW50IHN0YXR1cyAqL1xcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSwgaW5wdXRbdHlwZT1cXFwiZGF0ZXRpbWUtbG9jYWxcXFwiXSB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgLjE1cmVtIC4xNXJlbSAuMTVyZW0gcmdiYSgwLDAsMCwuMjUpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC5lZGl0LW1vZGUgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLCBpbnB1dFt0eXBlPVxcXCJkYXRldGltZS1sb2NhbFxcXCJdIHtcXHJcXG4gIGN1cnNvcjogdGV4dDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQuZWRpdC1tb2RlIC50aXRsZSB7IGRpc3BsYXk6IG5vbmU7IH1cXHJcXG4uY2FyZCAuZWRpdC10aXRsZSB7IGRpc3BsYXk6IG5vbmU7IGZvbnQtd2VpZ2h0OiA2MDA7fVxcclxcbi5jYXJkLmVkaXQtbW9kZSAuZWRpdC10aXRsZSB7IGRpc3BsYXk6IGJsb2NrOyBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxyXFxuXFxyXFxuLmNhcmQuZWRpdC1tb2RlIC5kZXNjcmlwdGlvbiB7IGRpc3BsYXk6IG5vbmU7IH1cXHJcXG4uY2FyZCAuZWRpdC1kZXNjcmlwdGlvbiB7IGRpc3BsYXk6IG5vbmU7IH1cXHJcXG4uY2FyZC5lZGl0LW1vZGUgLmVkaXQtZGVzY3JpcHRpb24geyBkaXNwbGF5OiBibG9jazsgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcclxcblxcclxcbi5jYXJkLmVkaXQtbW9kZSAuZGF0ZS1kdWUgeyBkaXNwbGF5OiBub25lOyB9XFxyXFxuLmNhcmQgLmVkaXQtZGF0ZS1kdWUgeyBkaXNwbGF5OiBub25lOyB9XFxyXFxuLmNhcmQuZWRpdC1tb2RlIC5lZGl0LWRhdGUtZHVlIHsgZGlzcGxheTogYmxvY2s7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXHJcXG5cXHJcXG4uY2FyZC5lZGl0LW1vZGUgbGFiZWwgeyBkaXNwbGF5OiBub25lOyB9XFxyXFxuLmNhcmQgLmVkaXQtbGFiZWwgeyBkaXNwbGF5OiBub25lOyB9XFxyXFxuLmNhcmQuZWRpdC1tb2RlIC5lZGl0LWxhYmVsIHsgZGlzcGxheTogYmxvY2s7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXHJcXG4uY2FyZCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgfiAuZWRpdC1sYWJlbCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaCByZ2JhKDAsMCwwLC4yNSk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qZm9yIHRlc3RpbmcqL1xcclxcbi8qICoge1xcclxcbiAgb3V0bGluZTogMXB4IHNvbGlkIGdyYXk7XFxyXFxufSAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgeyB1aSB9IGZyb20gXCIuL21vZHVsZXMvdWkuanNcIjtcclxuaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL21vZHVsZXMvY2xhc3Nlcy5qc1wiO1xyXG5cclxuLy9mb3IgdGVzdGluZ1xyXG5pbXBvcnQge2xvY2FsU3RvcmFnZVRlc3R9IGZyb20gXCIuL21vZHVsZXMvdWkuanNcIlxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcclxuICBpZihlLmtleSA9PT0gXCJyXCIgJiYgZS5hbHRLZXkpe1xyXG4gICAgdWkucGxhY2VDYXJkcyhsb2NhbFN0b3JhZ2VUZXN0KTtcclxuICAgIGNvbnNvbGUubG9nKFwicmVwbGFjaW5nIG1haW5cIik7XHJcbiAgfTtcclxufSk7XHJcblxyXG5cclxuLy9ydW4gb24gbG9hZFxyXG51aS5wbGFjZUNhcmRzKGxvY2FsU3RvcmFnZVRlc3QpO1xyXG4iLCJleHBvcnQgY2xhc3MgVG9kbyB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlQ3JlYXRpb24sIGRhdGVEdWUsIC8vdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJcclxuICAgIGNoZWNrcywgcHJpb3JpdHksIGlzRmF2b3JpdGUsIGlzUGlubmVkKXtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuZGF0ZUNyZWF0aW9uID0gZGF0ZUNyZWF0aW9uO1xyXG4gICAgdGhpcy5kYXRlRHVlID0gZGF0ZUR1ZTtcclxuICAgIHRoaXMuY2hlY2tzID0gY2hlY2tzO1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgdGhpcy5pc0Zhdm9yaXRlID0gaXNGYXZvcml0ZTtcclxuICAgIHRoaXMuaXNQaW5uZWQgPSBpc1Bpbm5lZDtcclxuICB9O1xyXG4gIFxyXG4gIHRvZ2dsZUZhdigpe1xyXG4gICAgdGhpcy5pc0Zhdm9yaXRlID0gIXRoaXMuaXNGYXZvcml0ZTtcclxuICB9O1xyXG5cclxuICB0b2dnbGVUYXNrKGlkeCl7XHJcbiAgICB0aGlzLmNoZWNrc1tpZHhdLmlzRG9uZSA9ICF0aGlzLmNoZWNrc1tpZHhdLmlzRG9uZTtcclxuICB9O1xyXG5cclxuICB0b2dnbGVQaW4oKXtcclxuICAgIHRoaXMuaXNQaW5uZWQgPSAhdGhpcy5pc1Bpbm5lZDtcclxuICB9XHJcbn07IiwiaW1wb3J0IGljb25EcmFnIGZyb20gXCIuLi9tZWRpYS9pbWFnZXMvaWNvbnMvZHJhZy5zdmdcIjtcclxuaW1wb3J0IGljb25FZGl0IGZyb20gXCIuLi9tZWRpYS9pbWFnZXMvaWNvbnMvZWRpdC5zdmdcIjtcclxuaW1wb3J0IGljb25UcmFzaCBmcm9tIFwiLi4vbWVkaWEvaW1hZ2VzL2ljb25zL3RyYXNoLnN2Z1wiO1xyXG5pbXBvcnQgaWNvblRyYXNoTGlkIGZyb20gXCIuLi9tZWRpYS9pbWFnZXMvaWNvbnMvdHJhc2gtbGlkLnN2Z1wiO1xyXG5cclxuLy9mb3IgdGVzdGluZ1xyXG5pbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4uL21vZHVsZXMvY2xhc3Nlcy5qc1wiO1xyXG5leHBvcnQgY29uc3QgbG9jYWxTdG9yYWdlVGVzdCA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJyb3V0aW5lXCIsXHJcbiAgICB0b2RvczogW1xyXG4gICAgICBuZXcgVG9kbyhcImV4ZXJjaXNlXCIsIFwiSXQncyBsZWcgZGF5IVwiLCBcIjIwMjItMTEtMjNUMTc6NDJcIiwgXCJcIiwgW1xyXG4gICAgICAgIHsgdGFzazogXCJydW4gM2ttXCIsIGlzRG9uZTogdHJ1ZSB9LFxyXG4gICAgICAgIHsgdGFzazogXCJiaWN5Y2xlXCIsIGlzRG9uZTogZmFsc2UgfSxcclxuICAgICAgICB7IHRhc2s6IFwic3F1YXRzXCIsIGlzRG9uZTogZmFsc2UgfSxcclxuICAgICAgXSwgXCJsb3dcIiwgZmFsc2UsIGZhbHNlKSxcclxuXHJcbiAgICAgIG5ldyBUb2RvKFwiY29kaW5nXCIsIFwiXCIsIFwiMjAyMi0xMS0yM1QxNzo0MlwiLCBcIlwiLCBbXHJcbiAgICAgICAgeyB0YXNrOiBcImNoZWNrIGNzcy10cmlja3NcIiwgaXNEb25lOiB0cnVlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcImNvbnRpbnVlIFRPUCBwcmFjdGljZVwiLCBpc0RvbmU6IHRydWUgfSxcclxuICAgICAgXSwgXCJoaWdoXCIsIHRydWUsIHRydWUpLFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcInRlc3RcIixcclxuICAgIHRvZG9zOiBbXHJcbiAgICAgIG5ldyBUb2RvKFwidGVzdDFcIiwgXCJ0ZXN0MSBkZXNjclwiLCBcIjIwMjItMTEtMjNUMTc6NDJcIixcIjIwMjMtMTEtMjNUMTc6NDJcIiwgW1xyXG4gICAgICAgIHsgdGFzazogXCJ0ZXN0MSB0YXNrMVwiLCBpc0RvbmU6IHRydWUgfSxcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDEgdGFzazJcIiwgaXNEb25lOiBmYWxzZSB9LFxyXG4gICAgICAgIHsgdGFzazogXCJ0ZXN0MSB0YXNrM1wiLCBpc0RvbmU6IHRydWUgfSxcclxuICAgICAgXSwgXCJsb3dcIiwgdHJ1ZSwgZmFsc2UpLFxyXG5cclxuICAgICAgbmV3IFRvZG8oXCJ0ZXN0MlwiLCBcInRlc3QyIGRlc2NyXCIsIFwiMjAyMi0xMS0yM1QxNzo0MlwiLCBcIjIwMjMtMTEtMjNUMTc6NDJcIiwgW1xyXG4gICAgICAgIHsgdGFzazogXCJ0ZXN0MiB0YXNrMVwiLCBpc0RvbmU6IHRydWUgfSxcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDIgdGFzazJcIiwgaXNEb25lOiBmYWxzZSB9LFxyXG4gICAgICAgIHsgdGFzazogXCJ0ZXN0MiB0YXNrM1wiLCBpc0RvbmU6IHRydWUgfSxcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDIgdGFzazRcIiwgaXNEb25lOiBmYWxzZSB9LFxyXG4gICAgICAgIHsgdGFzazogXCJ0ZXN0MiB0YXNrNVwiLCBpc0RvbmU6IGZhbHNlIH0sXHJcbiAgICAgIF0sIFwibWlkZGxlXCIsIHRydWUsIGZhbHNlKSxcclxuICAgICAgbmV3IFRvZG8oXCJ0ZXN0MyAobG9uZylcIiwgXCJ0ZXN0MyBkZXNjclwiLCBcIjIwMjItMTEtMjNUMTc6NDJcIiwgXCIyMDIzLTExLTIzVDE3OjQyXCIsIFtcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDMgdGFzazFcIiwgaXNEb25lOiB0cnVlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcInRlc3QzIHRhc2syXCIsIGlzRG9uZTogdHJ1ZSB9LFxyXG4gICAgICAgIHsgdGFzazogXCJ0ZXN0MyB0YXNrM1wiLCBpc0RvbmU6IGZhbHNlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcInRlc3QzIHRhc2s0XCIsIGlzRG9uZTogZmFsc2UgfSxcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDMgdGFzazVcIiwgaXNEb25lOiB0cnVlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcInRlc3QzIHRhc2s2XCIsIGlzRG9uZTogdHJ1ZSB9LFxyXG4gICAgICAgIHsgdGFzazogXCJ0ZXN0MyB0YXNrN1wiLCBpc0RvbmU6IGZhbHNlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcInRlc3QzIHRhc2s4XCIsIGlzRG9uZTogdHJ1ZSB9LFxyXG4gICAgICAgIHsgdGFzazogXCJ0ZXN0MyB0YXNrOVwiLCBpc0RvbmU6IHRydWUgfSxcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDMgdGFzazEwXCIsIGlzRG9uZTogZmFsc2UgfSxcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDMgdGFzazExXCIsIGlzRG9uZTogZmFsc2UgfSxcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDMgdGFzazEyXCIsIGlzRG9uZTogdHJ1ZSB9LFxyXG4gICAgICAgIHsgdGFzazogXCJ0ZXN0MyB0YXNrMTNcIiwgaXNEb25lOiBmYWxzZSB9LFxyXG4gICAgICAgIHsgdGFzazogXCJ0ZXN0MyB0YXNrMTRcIiwgaXNEb25lOiB0cnVlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcInRlc3QzIHRhc2sxNVwiLCBpc0RvbmU6IHRydWUgfSxcclxuICAgICAgXSwgXCJsb3dcIiwgZmFsc2UsIHRydWUpLFxyXG4gICAgICBuZXcgVG9kbyhcInRlc3Q0XCIsIFwidGVzdDQgZGVzY3JcIiwgXCIyMDIyLTExLTIzVDE3OjQyXCIsIFwiMjAyMy0xMS0yM1QxNzo0MlwiLCBbXHJcbiAgICAgICAgeyB0YXNrOiBcInRlc3Q0IHRhc2sxXCIsIGlzRG9uZTogZmFsc2UgfSxcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDQgdGFzazJcIiwgaXNEb25lOiBmYWxzZSB9LFxyXG4gICAgICAgIHsgdGFzazogXCJ0ZXN0NCB0YXNrM1wiLCBpc0RvbmU6IHRydWUgfSxcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDQgdGFzazRcIiwgaXNEb25lOiBmYWxzZSB9LFxyXG4gICAgICAgIHsgdGFzazogXCJ0ZXN0NCB0YXNrNVwiLCBpc0RvbmU6IHRydWUgfSxcclxuICAgICAgXSwgXCJsb3dcIiwgdHJ1ZSwgZmFsc2UpLFxyXG4gICAgICBuZXcgVG9kbyhcInRlc3Q1XCIsIFwidGVzdDUgZGVzY3JcIiwgXCIyMDIyLTExLTIzVDE3OjQyXCIsIFwiMjAyMy0xMS0yM1QxNzo0MlwiLCBbXHJcbiAgICAgICAgeyB0YXNrOiBcInRlc3Q1IHRhc2sxXCIsIGlzRG9uZTogZmFsc2UgfSxcclxuICAgICAgICB7IHRhc2s6IFwidGVzdDUgdGFzazJcIiwgaXNEb25lOiB0cnVlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcInRlc3Q1IHRhc2szXCIsIGlzRG9uZTogdHJ1ZSB9LFxyXG4gICAgICAgIHsgdGFzazogXCJ0ZXN0NSB0YXNrNFwiLCBpc0RvbmU6IGZhbHNlIH0sXHJcbiAgICAgICAgeyB0YXNrOiBcInRlc3Q1IHRhc2s1XCIsIGlzRG9uZTogdHJ1ZSB9LFxyXG4gICAgICBdLCBcImhpZ2hcIiwgZmFsc2UsIGZhbHNlKSxcclxuICAgIF0sXHJcbiAgfSxcclxuXTtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB1aSA9ICgoKSA9PiB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpblwiKTtcclxuXHJcbiAgZnVuY3Rpb24gcGxhY2VDYXJkKHRvZG8sIHByb2plY3RJZHgsIHRvZG9JZHgpe1xyXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xyXG4gICAgY2FyZC5kYXRhc2V0LnByaW9yaXR5ID0gdG9kby5wcmlvcml0eTtcclxuXHJcbiAgICBjb25zdCBkcmFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGRyYWcuY2xhc3NMaXN0LmFkZChcImNhcmQtaWNvblwiLCBcImljb24tZHJhZ1wiKTtcclxuICAgIGRyYWcuc3JjID0gaWNvbkRyYWc7XHJcbiAgICBkcmFnLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgY2FyZERyYWcpO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gdG9kby50aXRsZTtcclxuICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVDYXJkKTtcclxuICAgIGNvbnN0IGVkaXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGVkaXRUaXRsZS50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICBlZGl0VGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIsIFwiZWRpdC10aXRsZVwiKTtcclxuICAgIGVkaXRUaXRsZS52YWx1ZSA9IHRvZG8udGl0bGU7XHJcbiAgICBlZGl0VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGVkaXRGaWVsZCk7XHJcbiAgICBcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XHJcbiAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSB0b2RvLmRlc2NyaXB0aW9uO1xyXG4gICAgY29uc3QgZWRpdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgZWRpdERlc2NyaXB0aW9uLnR5cGUgPSBcInRleHRcIjtcclxuICAgIGVkaXREZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIiwgXCJlZGl0LWRlc2NyaXB0aW9uXCIpO1xyXG4gICAgZWRpdERlc2NyaXB0aW9uLnZhbHVlID0gdG9kby5kZXNjcmlwdGlvbjtcclxuICAgIGVkaXREZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZWRpdEZpZWxkKTtcclxuXHJcbiAgICBjb25zdCBkYXRlQ3JlYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGRhdGVDcmVhdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGF0ZS1jcmVhdGlvblwiKTtcclxuICAgIGRhdGVDcmVhdGlvbi5pbm5lclRleHQgPSBgQ3JlYXRlZDogJHt0b2RvLmRhdGVDcmVhdGlvbn1gO1xyXG5cclxuICAgIGNvbnN0IGRhdGVEdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGRhdGVEdWUuY2xhc3NMaXN0LmFkZChcImRhdGUtZHVlXCIpO1xyXG4gICAgZGF0ZUR1ZS5pbm5lclRleHQgPSB0b2RvLmRhdGVEdWUubGVuZ3RoID4gMCA/IGBEdWU6ICR7dG9kby5kYXRlRHVlfWAgOiBcIlwiO1xyXG4gICAgY29uc3QgZWRpdERhdGVEdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBlZGl0RGF0ZUR1ZS50eXBlID0gXCJkYXRldGltZS1sb2NhbFwiO1xyXG4gICAgZWRpdERhdGVEdWUuY2xhc3NMaXN0LmFkZChcImRhdGUtZHVlXCIsIFwiZWRpdC1kYXRlLWR1ZVwiKTtcclxuICAgIGVkaXREYXRlRHVlLnZhbHVlID0gdG9kby5kYXRlRHVlO1xyXG4gICAgZWRpdERhdGVEdWUuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGVkaXRGaWVsZCk7XHJcblxyXG4gICAgY29uc3QgY2hlY2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgY2hlY2tzLmNsYXNzTGlzdC5hZGQoXCJjaGVja2xpc3RcIik7XHJcblxyXG4gICAgLy9hZGQgZGF0YXNldCB0byBlYWNoIGl0ZW1cclxuICAgIFtjYXJkLGVkaXRUaXRsZSxkcmFnLGVkaXREZXNjcmlwdGlvbixlZGl0RGF0ZUR1ZV0uZm9yRWFjaChpY29uID0+IHtcclxuICAgICAgaWNvbi5kYXRhc2V0LnByb2plY3RJZHggPSBwcm9qZWN0SWR4O1xyXG4gICAgICBpY29uLmRhdGFzZXQudG9kb0lkeCA9IHRvZG9JZHg7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0b2RvLmNoZWNrcy5mb3JFYWNoKChjaGVjayxpKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcblxyXG4gICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgICAgY2hlY2tib3guaWQgPSBgJHt0b2RvLnRpdGxlfS0ke2l9YDsgLy9mb3IgbGFiZWwgb25seVxyXG4gICAgICBjaGVja2JveC5jaGVja2VkID0gY2hlY2suaXNEb25lO1xyXG4gICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGFza0NoZWNrVG9nZ2xlKTtcclxuXHJcbiAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICBsYWJlbC5odG1sRm9yID0gY2hlY2tib3guaWQ7XHJcbiAgICAgIGxhYmVsLmlubmVyVGV4dCA9IGNoZWNrLnRhc2s7XHJcbiAgICAgIGNvbnN0IGVkaXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgZWRpdExhYmVsLnR5cGUgPSBcInRleHRcIjtcclxuICAgICAgZWRpdExhYmVsLmNsYXNzTGlzdC5hZGQoXCJlZGl0LWxhYmVsXCIpO1xyXG4gICAgICBlZGl0TGFiZWwudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgICBlZGl0TGFiZWwuaHRtbEZvciA9IGNoZWNrYm94LmlkO1xyXG4gICAgICBlZGl0TGFiZWwudmFsdWUgPSBjaGVjay50YXNrO1xyXG4gICAgICBlZGl0TGFiZWwuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGVkaXRGaWVsZCk7XHJcblxyXG4gICAgICBjb25zdCByZW1vdmVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgcmVtb3ZlVGFzay5jbGFzc0xpc3QuYWRkKFwiY2FyZC1pY29uXCIsIFwicmVtb3ZlLXRhc2tcIik7XHJcbiAgICAgIHJlbW92ZVRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVRhc2spO1xyXG5cclxuICAgICAgLy9hZGQgZGF0YXNldFxyXG4gICAgICBbY2hlY2tib3gsZWRpdExhYmVsLCByZW1vdmVUYXNrXS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGl0ZW0uZGF0YXNldC5wcm9qZWN0SWR4ID0gcHJvamVjdElkeDtcclxuICAgICAgICBpdGVtLmRhdGFzZXQudG9kb0lkeCA9IHRvZG9JZHg7XHJcbiAgICAgICAgaXRlbS5kYXRhc2V0LnRhc2tJZHggPSBpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRhc2suYXBwZW5kKGNoZWNrYm94LCBsYWJlbCwgZWRpdExhYmVsLCByZW1vdmVUYXNrKTtcclxuXHJcbiAgICAgIGNoZWNrcy5hcHBlbmRDaGlsZCh0YXNrKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBjYXJkLmFwcGVuZChkcmFnLCB0aXRsZSwgZWRpdFRpdGxlLCBkYXRlQ3JlYXRpb24sIGRhdGVEdWUsIGVkaXREYXRlRHVlLFxyXG4gICAgICBlZGl0QnV0dG9uc0Rpdih0b2RvLCBwcm9qZWN0SWR4LCB0b2RvSWR4KSxcclxuICAgICAgZGVzY3JpcHRpb24sIGVkaXREZXNjcmlwdGlvbiwgY2hlY2tzKTtcclxuXHJcbiAgICByZXR1cm4gY2FyZDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGVkaXRCdXR0b25zRGl2KHRvZG8sIHByb2plY3RJZHgsIHRvZG9JZHgpe1xyXG4gICAgY29uc3QgZWRpdEJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZWRpdEJ0bnMuY2xhc3NMaXN0LmFkZChcImVkaXQtYnV0dG9uc1wiKTtcclxuXHJcbiAgICBjb25zdCBwaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBwaW4udHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgIHBpbi5jaGVja2VkID0gdG9kby5pc1Bpbm5lZCA/IHRydWUgOiBmYWxzZTtcclxuICAgIHBpbi5jbGFzc0xpc3QuYWRkKFwiY2FyZC1pY29uXCIsIFwiaWNvbi1waW5cIik7XHJcbiAgICBwaW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhcmRQaW5Ub2dnbGUpO1xyXG5cclxuICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBlZGl0LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICBlZGl0LmNsYXNzTGlzdC5hZGQoXCJjYXJkLWljb25cIiwgXCJpY29uLWVkaXRcIik7XHJcbiAgICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYXJkRWRpdCk7XHJcblxyXG4gICAgY29uc3QgZmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgZmF2LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICBmYXYuY2hlY2tlZCA9IHRvZG8uaXNGYXZvcml0ZSA/IHRydWUgOiBmYWxzZTtcclxuICAgIGZhdi5jbGFzc0xpc3QuYWRkKFwiY2FyZC1pY29uXCIsIFwiaWNvbi1mYXZcIik7XHJcbiAgICBmYXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhcmRGYXZUb2dnbGUpO1xyXG4gICAgZmF2LmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKGUpID0+IHtcclxuICAgICAgaWYoZS5hbmltYXRpb25OYW1lID09PSBcImljb24tZmF2LXNoYWtlXCIpIHtcclxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwic2hha2VcIik7XHJcbiAgICAgIH07XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWljb25cIik7XHJcbiAgICBkZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYXJkRGVsZXRlKTtcclxuXHJcbiAgICBjb25zdCB0cmFzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICB0cmFzaC5jbGFzc0xpc3QuYWRkKFwiY2FyZC1pY29uXCIsIFwiaWNvbi10cmFzaFwiKTtcclxuICAgIHRyYXNoLnNyYyA9IGljb25UcmFzaDtcclxuICAgIGNvbnN0IHRyYXNoTGlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIHRyYXNoTGlkLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWljb25cIiwgXCJpY29uLXRyYXNoLWxpZFwiKTtcclxuICAgIHRyYXNoTGlkLnNyYyA9IGljb25UcmFzaExpZDtcclxuXHJcbiAgICAvL2FkZCBkYXRhc2V0IHRvIGVhY2ggaXRlbVxyXG4gICAgW3BpbixlZGl0LGZhdixkZWxldGVJY29uXS5mb3JFYWNoKGljb24gPT4ge1xyXG4gICAgICBpY29uLmRhdGFzZXQucHJvamVjdElkeCA9IHByb2plY3RJZHg7XHJcbiAgICAgIGljb24uZGF0YXNldC50b2RvSWR4ID0gdG9kb0lkeDtcclxuICAgIH0pO1xyXG5cclxuICAgIGRlbGV0ZUljb24uYXBwZW5kKHRyYXNoLCB0cmFzaExpZCk7XHJcbiAgICBlZGl0QnRucy5hcHBlbmQocGluLCBlZGl0LCBmYXYsIGRlbGV0ZUljb24pO1xyXG5cclxuICAgIHJldHVybiBlZGl0QnRucztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBsYWNlQ2FyZHMocHJvamVjdHMpe1xyXG5cclxuICAgIG1haW4ucmVwbGFjZUNoaWxkcmVuKClcclxuICAgIFxyXG5cclxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QsIHByb2plY3RJZHgpID0+IHtcclxuICAgICAgY29uc3QgcHJvamVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBwcm9qZWN0SXRlbS5kYXRhc2V0LmlkeCA9IHByb2plY3RJZHg7XHJcbiAgICAgIHByb2plY3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWl0ZW1cIik7XHJcblxyXG4gICAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgICAgaDEuaW5uZXJUZXh0ID0gcHJvamVjdC50aXRsZTtcclxuICAgICAgcHJvamVjdEl0ZW0uYXBwZW5kQ2hpbGQoaDEpO1xyXG5cclxuICAgICAgcHJvamVjdC50b2Rvcy5mb3JFYWNoKCh0b2RvLCB0b2RvSWR4KSA9PiB7XHJcbiAgICAgICAgcHJvamVjdEl0ZW0uYXBwZW5kQ2hpbGQocGxhY2VDYXJkKHRvZG8sIHByb2plY3RJZHgsIHRvZG9JZHgpKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBtYWluLmFwcGVuZENoaWxkKHByb2plY3RJdGVtKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIHRvZ2dsZUNhcmQoKSB7XHJcbiAgICBjb25zdCBjYXJkID0gdGhpcy5wYXJlbnROb2RlO1xyXG4gICAgY2FyZC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgIGlmKCFjYXJkLmNsYXNzTmFtZS5pbmNsdWRlcyhcImFjdGl2ZVwiKSkge1xyXG4gICAgICBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuaWNvbi1lZGl0XCIpLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiZWRpdC1tb2RlXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2FyZERyYWcoKXtcclxuICAgIGNvbnNvbGUubG9nKGBkcmFnZ2luZyBwcm9qZWN0ICR7dGhpcy5kYXRhc2V0LnByb2plY3RJZHhcclxuICAgIH0gLSB0b2RvICR7dGhpcy5kYXRhc2V0LnRvZG9JZHh9YCk7XHJcbiAgICB0aGlzLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuXHJcbiAgICBjb25zdCBjYXJkID0gdGhpcy5wYXJlbnROb2RlO1xyXG4gICAgY2FyZC5xdWVyeVNlbGVjdG9yKFwiLmljb24tZWRpdFwiKS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJlZGl0LW1vZGVcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjYXJkRWRpdCgpe1xyXG4gICAgY29uc3QgY2FyZENsYXNzID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0O1xyXG4gICAgdGhpcy5jaGVja2VkID8gY2FyZENsYXNzLmFkZChcImVkaXQtbW9kZVwiKSA6IGNhcmRDbGFzcy5yZW1vdmUoXCJlZGl0LW1vZGVcIik7XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKGBlZGl0aW5nIHByb2plY3QgJHt0aGlzLmRhdGFzZXQucHJvamVjdElkeFxyXG4gICAgfSAtIHRvZG8gJHt0aGlzLmRhdGFzZXQudG9kb0lkeH1gKTtcclxuICAgIHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0b2dnbGVDaGVja0VkaXQoKXtcclxuICAgIGNvbnNvbGUubG9nKFwiZWRpdCBjaGVja1wiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNhcmRGYXZUb2dnbGUoKXtcclxuICAgIGNvbnN0IHByb2plY3RJZHggPSB0aGlzLmRhdGFzZXQucHJvamVjdElkeDtcclxuICAgIGNvbnN0IHRvZG9JZHggPSB0aGlzLmRhdGFzZXQudG9kb0lkeDtcclxuICAgIGxvY2FsU3RvcmFnZVRlc3RbcHJvamVjdElkeF0udG9kb3NbdG9kb0lkeF0udG9nZ2xlRmF2KCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjYXJkUGluVG9nZ2xlKCl7XHJcbiAgICBjb25zdCBwcm9qZWN0SWR4ID0gdGhpcy5kYXRhc2V0LnByb2plY3RJZHg7XHJcbiAgICBjb25zdCB0b2RvSWR4ID0gdGhpcy5kYXRhc2V0LnRvZG9JZHg7XHJcbiAgICBsb2NhbFN0b3JhZ2VUZXN0W3Byb2plY3RJZHhdLnRvZG9zW3RvZG9JZHhdLnRvZ2dsZVBpbigpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2FyZERlbGV0ZSgpe1xyXG4gICAgY29uc3QgcHJvamVjdElkeCA9IHRoaXMuZGF0YXNldC5wcm9qZWN0SWR4O1xyXG4gICAgY29uc3QgdG9kb0lkeCA9IHRoaXMuZGF0YXNldC50b2RvSWR4O1xyXG5cclxuICAgIGNvbnN0IGlzRmF2ID0gbG9jYWxTdG9yYWdlVGVzdFtwcm9qZWN0SWR4XS50b2Rvc1t0b2RvSWR4XS5pc0Zhdm9yaXRlO1xyXG4gICAgaWYoaXNGYXYpIHtcclxuICAgICAgY29uc3QgdGhpc0NhcmRTdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcHJvamVjdC1pZHg9XCIke1xyXG4gICAgICAgIHByb2plY3RJZHh9XCJdW2RhdGEtdG9kby1pZHg9XCIke3RvZG9JZHh9XCJdIC5pY29uLWZhdmApO1xyXG4gICAgICB0aGlzQ2FyZFN0YXIuY2xhc3NMaXN0LmFkZChcInNoYWtlXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGBkZWxldGUgcHJvamVjdCAke3Byb2plY3RJZHh9IC0gdG9kbyAke3RvZG9JZHh9YCk7XHJcbiAgICBsb2NhbFN0b3JhZ2VUZXN0W3Byb2plY3RJZHhdLnRvZG9zLnNwbGljZSh0b2RvSWR4LDEpO1xyXG4gICAgcGxhY2VDYXJkcyhsb2NhbFN0b3JhZ2VUZXN0KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRhc2tDaGVja1RvZ2dsZSgpe1xyXG4gICAgbG9jYWxTdG9yYWdlVGVzdFt0aGlzLmRhdGFzZXQucHJvamVjdElkeF1cclxuICAgIC50b2Rvc1t0aGlzLmRhdGFzZXQudG9kb0lkeF0udG9nZ2xlVGFzayh0aGlzLmRhdGFzZXQudGFza0lkeCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkZWxldGVUYXNrKCl7XHJcbiAgICBjb25zdCBwcm9qZWN0SWR4ID0gdGhpcy5kYXRhc2V0LnByb2plY3RJZHg7XHJcbiAgICBjb25zdCB0b2RvSWR4ID0gdGhpcy5kYXRhc2V0LnRvZG9JZHg7XHJcbiAgICBjb25zdCB0YXNrSWR4ID0gdGhpcz8uZGF0YXNldD8udGFza0lkeDtcclxuICAgIFxyXG4gICAgbG9jYWxTdG9yYWdlVGVzdFtwcm9qZWN0SWR4XS50b2Rvc1t0b2RvSWR4XS5jaGVja3Muc3BsaWNlKHRhc2tJZHgsIDEpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZWRpdEZpZWxkKCl7XHJcbiAgICBjb25zdCBwcm9qZWN0SWR4ID0gdGhpcy5kYXRhc2V0LnByb2plY3RJZHg7XHJcbiAgICBjb25zdCB0b2RvSWR4ID0gdGhpcy5kYXRhc2V0LnRvZG9JZHg7XHJcbiAgICBjb25zdCB0YXNrSWR4ID0gdGhpcz8uZGF0YXNldD8udGFza0lkeDtcclxuXHJcbiAgICBpZih0aGlzLmNsYXNzTmFtZS5pbmNsdWRlcyhcImVkaXQtdGl0bGVcIikpe1xyXG4gICAgICBsb2NhbFN0b3JhZ2VUZXN0W3Byb2plY3RJZHhdLnRvZG9zW3RvZG9JZHhdLnRpdGxlID0gdGhpcy52YWx1ZTtcclxuICAgICAgY29uc3QgdGhpc1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNhcmRbZGF0YS1wcm9qZWN0LWlkeD1cIiR7cHJvamVjdElkeH1cIl1bZGF0YS10b2RvLWlkeD1cIiR7dG9kb0lkeH1cIl0gLnRpdGxlYCk7XHJcbiAgICAgIHRoaXNUaXRsZS5pbm5lclRleHQgPSB0aGlzLnZhbHVlO1xyXG5cclxuICAgIH0gZWxzZSBpZih0aGlzLmNsYXNzTmFtZS5pbmNsdWRlcyhcImVkaXQtZGVzY3JpcHRpb25cIikpe1xyXG4gICAgICBsb2NhbFN0b3JhZ2VUZXN0W3Byb2plY3RJZHhdLnRvZG9zW3RvZG9JZHhdLmRlc2NyaXB0aW9uID0gdGhpcy52YWx1ZTtcclxuICAgICAgY29uc3QgdGhpc0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNhcmRbZGF0YS1wcm9qZWN0LWlkeD1cIiR7cHJvamVjdElkeH1cIl1bZGF0YS10b2RvLWlkeD1cIiR7dG9kb0lkeH1cIl0gLmRlc2NyaXB0aW9uYCk7XHJcbiAgICAgIHRoaXNEZXNjcmlwdGlvbi5pbm5lclRleHQgPSB0aGlzLnZhbHVlO1xyXG4gICAgICBcclxuICAgIH0gZWxzZSBpZih0aGlzLmNsYXNzTmFtZS5pbmNsdWRlcyhcImVkaXQtZGF0ZS1kdWVcIikpe1xyXG4gICAgICBjb25zdCB0aGlzRGF0ZUR1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jYXJkW2RhdGEtcHJvamVjdC1pZHg9XCIke3Byb2plY3RJZHh9XCJdW2RhdGEtdG9kby1pZHg9XCIke3RvZG9JZHh9XCJdIC5kYXRlLWR1ZWApO1xyXG4gICAgICBsb2NhbFN0b3JhZ2VUZXN0W3Byb2plY3RJZHhdLnRvZG9zW3RvZG9JZHhdLmRhdGVEdWUgPSB0aGlzLnZhbHVlO1xyXG4gICAgICB0aGlzRGF0ZUR1ZS5pbm5lclRleHQgPSB0aGlzLnZhbHVlLmxlbmd0aCA+IDAgPyBgRHVlOiAke3RoaXMudmFsdWV9YCA6IFwiXCI7XHJcbiAgICAgIFxyXG4gICAgfSBlbHNlIGlmKHRoaXMuY2xhc3NOYW1lLmluY2x1ZGVzKFwiZWRpdC1sYWJlbFwiKSl7XHJcbiAgICAgIGNvbnN0IHRoaXNUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcHJvamVjdC1pZHg9XCIke3Byb2plY3RJZHh9XCJdW2RhdGEtdG9kby1pZHg9XCIke3RvZG9JZHh9XCJdW2RhdGEtdGFzay1pZHg9XCIke3Rhc2tJZHh9XCJdIH4gbGFiZWxgKTtcclxuICAgICAgbG9jYWxTdG9yYWdlVGVzdFtwcm9qZWN0SWR4XS50b2Rvc1t0b2RvSWR4XS5jaGVja3NbdGFza0lkeF0udGFzayA9IHRoaXMudmFsdWU7XHJcbiAgICAgIHRoaXNUYXNrLmlubmVyVGV4dCA9IHRoaXMudmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gICAgXHJcbiAgcmV0dXJuIHsgcGxhY2VDYXJkcyB9O1xyXG59KSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==