/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\n// eslint-disable-next-line func-names\r\nmodule.exports = function (useSourceMap) {\r\n    var list = []; // return the list of modules as css string\r\n    list.toString = function toString() {\r\n        return this.map(function (item) {\r\n            var content = cssWithMappingToString(item, useSourceMap);\r\n            if (item[2]) {\r\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\r\n            }\r\n            return content;\r\n        }).join('');\r\n    }; // import a list of modules into the list\r\n    // eslint-disable-next-line func-names\r\n    list.i = function (modules, mediaQuery, dedupe) {\r\n        if (typeof modules === 'string') {\r\n            // eslint-disable-next-line no-param-reassign\r\n            modules = [[null, modules, '']];\r\n        }\r\n        var alreadyImportedModules = {};\r\n        if (dedupe) {\r\n            for (var i = 0; i < this.length; i++) {\r\n                // eslint-disable-next-line prefer-destructuring\r\n                var id = this[i][0];\r\n                if (id != null) {\r\n                    alreadyImportedModules[id] = true;\r\n                }\r\n            }\r\n        }\r\n        for (var _i = 0; _i < modules.length; _i++) {\r\n            var item = [].concat(modules[_i]);\r\n            if (dedupe && alreadyImportedModules[item[0]]) {\r\n                // eslint-disable-next-line no-continue\r\n                continue;\r\n            }\r\n            if (mediaQuery) {\r\n                if (!item[2]) {\r\n                    item[2] = mediaQuery;\r\n                }\r\n                else {\r\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\r\n                }\r\n            }\r\n            list.push(item);\r\n        }\r\n    };\r\n    return list;\r\n};\r\nfunction cssWithMappingToString(item, useSourceMap) {\r\n    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\r\n    var cssMapping = item[3];\r\n    if (!cssMapping) {\r\n        return content;\r\n    }\r\n    if (useSourceMap && typeof btoa === 'function') {\r\n        var sourceMapping = toComment(cssMapping);\r\n        var sourceURLs = cssMapping.sources.map(function (source) {\r\n            return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\r\n        });\r\n        return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\r\n    }\r\n    return [content].join('\\n');\r\n} // Adapted from convert-source-map (MIT)\r\nfunction toComment(sourceMap) {\r\n    // eslint-disable-next-line no-undef\r\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\r\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\r\n    return \"/*# \".concat(data, \" */\");\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\nvar Header_1 = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\r\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\r\nvar CardsList_1 = __webpack_require__(/*! ./shared/CardsList */ \"./src/shared/CardsList/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ./shared/Icon */ \"./src/shared/Icon/index.ts\");\r\nfunction AppComponent() {\r\n    return (react_1.default.createElement(Layout_1.Layout, null,\r\n        react_1.default.createElement(Header_1.Header, null),\r\n        react_1.default.createElement(Content_1.Content, null,\r\n            react_1.default.createElement(CardsList_1.CardsList, null)),\r\n        react_1.default.createElement(Icon_1.IconSprite, null)));\r\n}\r\nexports.App = root_1.hot(function () { return react_1.default.createElement(AppComponent, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts/googleapis.com/css?/css2?family=Roboto&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \":root {\\r\\n    --black:  #333333;\\r\\n    --orange: #CC6633;\\r\\n    --green:  #A4CC33;\\r\\n    --white:  #ffffff;\\r\\n    --greyF4: #f4f4f4;\\r\\n    --greyF3: #f3f3f3;\\r\\n    --greyD9: #d9d9d9;\\r\\n    --greyC4: #c4c4c4;\\r\\n    --grey99: #999999;\\r\\n    --grey66: #666666;\\r\\n    --greyBlue:#c9e2ee;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n    background-color: var(--greyF4);\\r\\n    font-size: 14px;\\r\\n    line-height: 16px;\\r\\n    font-family: 'Roboto', serif;\\r\\n}\\r\\n\\r\\n*{\\r\\n    color: var(--black);\\r\\n    box-sizing: border-box;\\r\\n    -webkit-font-smoothing: antialiased;\\r\\n    -moz-osx-font-smoothing: grayscale;\\r\\n}\\r\\n\\r\\nul {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    list-style: none;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n    padding: 0;\\r\\n    border: 0;\\r\\n    background: transparent;\\r\\n    cursor: pointer;\\r\\n}\\r\\nbutton:focus,\\r\\nbutton:active {\\r\\n    outline: unset !important;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexTemplate = void 0;\r\nexports.indexTemplate = function (content) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"ru\\\">\\n  <head>\\n    <meta charset=\\\"UTF-8\\\" />\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\">\\n    <title>Skillbox</title>\\n    <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n  </head>\\n  <body>\\n    <div id=\\\"react-root\\\">\" + content + \"</div>\\n  </body>\\n</html>\\n\"; };\r\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\r\nvar app = express_1.default();\r\napp.use('/static', express_1.default.static('./dist/client'));\r\napp.get('/auth', function (req, res) {\r\n    // req.query.code;\r\n    res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App())));\r\n});\r\napp.get('/', function (req, res) {\r\n    res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App())));\r\n});\r\napp.listen(3000, function () {\r\n    console.log('Server started on http://localhost:3000');\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Card.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/Card.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Card = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar card_css_1 = __importDefault(__webpack_require__(/*! ./card.css */ \"./src/shared/CardsList/Card/card.css\"));\r\nvar TextContent_1 = __webpack_require__(/*! ./TextContent */ \"./src/shared/CardsList/Card/TextContent/index.ts\");\r\nvar Preview_1 = __webpack_require__(/*! ./Preview */ \"./src/shared/CardsList/Card/Preview/index.ts\");\r\nvar Menu_1 = __webpack_require__(/*! ./Menu */ \"./src/shared/CardsList/Card/Menu/index.ts\");\r\nvar Controls_1 = __webpack_require__(/*! ./Controls */ \"./src/shared/CardsList/Card/Controls/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../shared/Icon */ \"./src/shared/Icon/index.ts\");\r\nfunction Card(_a) {\r\n    var id = _a.id, url = _a.url, title = _a.title, preview = _a.preview, time = _a.time, author = _a.author, karmaValue = _a.karmaValue, moveHandler = _a.moveHandler, setKarmaValue = _a.setKarmaValue, hiddenCard = _a.hiddenCard, changeBookmark = _a.changeBookmark, inBookmarks = _a.inBookmarks;\r\n    var _b = react_1.default.useState('white'), background = _b[0], setBackground = _b[1];\r\n    return (react_1.default.createElement(\"li\", { className: card_css_1.default.card, key: id, style: { background: background } },\r\n        inBookmarks && (react_1.default.createElement(Icon_1.Icon, { icon: \"bookmark\", size: 16, className: card_css_1.default.bookmark, onClick: function () { return changeBookmark(id, 'delete'); } })),\r\n        react_1.default.createElement(TextContent_1.TextContent, { author: author, title: title, time: time, url: url }),\r\n        react_1.default.createElement(Preview_1.Preview, { preview: preview }),\r\n        react_1.default.createElement(Menu_1.Menu, { setBackground: function (color) {\r\n                setBackground(color);\r\n            }, moveHandler: moveHandler, hiddenCard: hiddenCard, addBookmark: function (id) { return changeBookmark(id, 'add'); }, cardId: id }),\r\n        react_1.default.createElement(Controls_1.Controls, { karmaValue: karmaValue, setKarmaValue: function (value) { return setKarmaValue(id, value); } })));\r\n}\r\nexports.Card = Card;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/Controls.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/Controls.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Controls = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar controls_css_1 = __importDefault(__webpack_require__(/*! ./controls.css */ \"./src/shared/CardsList/Card/Controls/controls.css\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../../Icon */ \"./src/shared/Icon/index.ts\");\r\nfunction Controls(_a) {\r\n    var karmaValue = _a.karmaValue, setKarmaValue = _a.setKarmaValue;\r\n    return (react_1.default.createElement(\"div\", { className: controls_css_1.default.controls },\r\n        react_1.default.createElement(\"div\", { className: controls_css_1.default.karmaCounter },\r\n            react_1.default.createElement(Icon_1.Icon, { icon: \"arrow\", As: \"button\", className: controls_css_1.default.up, onClick: function () { return setKarmaValue(karmaValue + 1); } }),\r\n            react_1.default.createElement(\"span\", { className: controls_css_1.default.karmaValue }, karmaValue),\r\n            react_1.default.createElement(Icon_1.Icon, { icon: \"arrow\", As: \"button\", className: controls_css_1.default.down, onClick: function () { return setKarmaValue(karmaValue - 1); } })),\r\n        react_1.default.createElement(Icon_1.Icon, { icon: \"comments\", As: \"button\", className: controls_css_1.default.commentsButton, counter: 24 }),\r\n        react_1.default.createElement(\"div\", { className: controls_css_1.default.actions },\r\n            react_1.default.createElement(Icon_1.Icon, { icon: \"share\", As: \"button\", className: controls_css_1.default.shareButton }),\r\n            react_1.default.createElement(Icon_1.Icon, { icon: \"save\", As: \"button\", className: controls_css_1.default.saveButton }))));\r\n}\r\nexports.Controls = Controls;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/Controls.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/controls.css":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/controls.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"controls\": \"controls__controls--1d2gg\",\n\t\"karmaCounter\": \"controls__karmaCounter--2_dA0\",\n\t\"karmaValue\": \"controls__karmaValue--3pGmE\",\n\t\"down\": \"controls__down--RKs-G\",\n\t\"commentsButton\": \"controls__commentsButton--rf4n9\",\n\t\"commentsNumber\": \"controls__commentsNumber--1QEjv\",\n\t\"shareButton\": \"controls__shareButton--2Abnl\",\n\t\"saveButton\": \"controls__saveButton--F11mr\",\n\t\"actions\": \"controls__actions--iNBhY\",\n\t\"up\": \"controls__up--1zlqY\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/controls.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls/index.ts":
/*!*****************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Controls */ \"./src/shared/CardsList/Card/Controls/Controls.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/Menu.tsx":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/Menu.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Menu = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar menu_css_1 = __importDefault(__webpack_require__(/*! ./menu.css */ \"./src/shared/CardsList/Card/Menu/menu.css\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../../Icon */ \"./src/shared/Icon/index.ts\");\r\nvar Dropdown_1 = __webpack_require__(/*! ../../../Dropdown */ \"./src/shared/Dropdown/index.ts\");\r\nvar GenericList_1 = __webpack_require__(/*! ../../../GenericList */ \"./src/shared/GenericList/index.ts\");\r\nvar merge_1 = __webpack_require__(/*! ../../../../utils/js/merge */ \"./src/utils/js/merge.ts\");\r\nvar LIST = [\r\n    { id: '0', text: 'Поднять' },\r\n    { id: '1', text: 'Опустить' },\r\n    { id: '2', text: 'В самый верх' },\r\n    { id: '3', text: 'В самый низ' },\r\n];\r\nvar LIST2 = [\r\n    { id: '0', text: 'white', value: 'white' },\r\n    { id: '1', text: 'grey-blue', value: 'rgb(190, 214, 250)' },\r\n    { id: '2', text: 'light-mint', value: 'rgb(190, 250, 250)' },\r\n    { id: '3', text: 'sweet-peach', value: 'rgb(250, 217, 190)' },\r\n];\r\nvar LIST3 = [\r\n    { id: '0', text: 'Скрыть', value: 'higgen', icon: 'block' },\r\n    { id: '1', text: 'В закладки', value: 'bookmark', icon: 'bookmark' },\r\n];\r\nfunction Menu(_a) {\r\n    var setBackground = _a.setBackground, moveHandler = _a.moveHandler, hiddenCard = _a.hiddenCard, addBookmark = _a.addBookmark, cardId = _a.cardId;\r\n    var listDropdown = {\r\n        Moved: LIST,\r\n        'Background Card': LIST2,\r\n        Operations: LIST3,\r\n    };\r\n    var handleItemClick = function (id, text, header, cardId) {\r\n        if (header === 'Moved') {\r\n            moveHandler(cardId, text);\r\n        }\r\n        else if (header === 'Background Card') {\r\n            var newBackground = listDropdown['Background Card'].find(function (item) { return item.text === text; });\r\n            setBackground(newBackground && newBackground.value ? newBackground.value : '');\r\n        }\r\n        else if (header === 'Operations') {\r\n            if (text === LIST3[0].text) {\r\n                hiddenCard(cardId);\r\n            }\r\n            else {\r\n                addBookmark(cardId);\r\n            }\r\n        }\r\n    };\r\n    return (react_1.default.createElement(\"div\", { className: menu_css_1.default.menu },\r\n        react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement(Icon_1.Icon, { As: \"button\", icon: \"menu\", size: 20, className: menu_css_1.default.menuButton }) }, Object.entries(listDropdown).map(function (_a) {\r\n            var header = _a[0], list = _a[1];\r\n            return (react_1.default.createElement(\"div\", { key: header, className: menu_css_1.default.menuGroup },\r\n                react_1.default.createElement(\"span\", { className: menu_css_1.default.menuGroupHeader }, header),\r\n                react_1.default.createElement(GenericList_1.GenericList, { header: header, list: list.map(merge_1.merge({\r\n                        onClick: function (id, text) {\r\n                            return handleItemClick(id, text, header, cardId);\r\n                        },\r\n                        className: menu_css_1.default.menuItem,\r\n                    })) })));\r\n        }))));\r\n}\r\nexports.Menu = Menu;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/index.ts":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Menu */ \"./src/shared/CardsList/Card/Menu/Menu.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/menu.css":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/menu.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"menu\": \"menu__menu--1X1Mc\",\n\t\"menuButton\": \"menu__menuButton--1zAaD\",\n\t\"menuItem\": \"menu__menuItem--1AQzg\",\n\t\"menuGroup\": \"menu__menuGroup--ZaCDQ\",\n\t\"menuGroupHeader\": \"menu__menuGroupHeader--1mH9x\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/menu.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Preview/Preview.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/CardsList/Card/Preview/Preview.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Preview = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar preview_css_1 = __importDefault(__webpack_require__(/*! ./preview.css */ \"./src/shared/CardsList/Card/Preview/preview.css\"));\r\nfunction Preview(_a) {\r\n    var preview = _a.preview;\r\n    return (react_1.default.createElement(\"div\", { className: preview_css_1.default.preview },\r\n        react_1.default.createElement(\"img\", { className: preview_css_1.default.previewImg, src: preview })));\r\n}\r\nexports.Preview = Preview;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Preview/Preview.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Preview/index.ts":
/*!****************************************************!*\
  !*** ./src/shared/CardsList/Card/Preview/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Preview */ \"./src/shared/CardsList/Card/Preview/Preview.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Preview/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Preview/preview.css":
/*!*******************************************************!*\
  !*** ./src/shared/CardsList/Card/Preview/preview.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"preview\": \"preview__preview--1drxs\",\n\t\"previewImg\": \"preview__previewImg--2ucf0\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Preview/preview.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/TextContent.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/TextContent.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TextContent = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar textContent_css_1 = __importDefault(__webpack_require__(/*! ./textContent.css */ \"./src/shared/CardsList/Card/TextContent/textContent.css\"));\r\nfunction TextContent(_a) {\r\n    var author = _a.author, _b = _a.time, time = _b === void 0 ? new Date() : _b, title = _a.title, url = _a.url;\r\n    var name = author.name, avatar = author.avatar, href = author.href;\r\n    return (react_1.default.createElement(\"div\", { className: textContent_css_1.default.textContent },\r\n        react_1.default.createElement(\"div\", { className: textContent_css_1.default.metaData },\r\n            react_1.default.createElement(\"div\", { className: textContent_css_1.default.userLink },\r\n                react_1.default.createElement(\"img\", { className: textContent_css_1.default.avatar, src: avatar, alt: 'avatar' }),\r\n                react_1.default.createElement(\"a\", { href: href, className: textContent_css_1.default.userName }, name)),\r\n            react_1.default.createElement(\"span\", { className: textContent_css_1.default.createdAt },\r\n                react_1.default.createElement(\"span\", { className: textContent_css_1.default.publishedLabel }, \" \\u043E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E\"),\r\n                time.toString())),\r\n        react_1.default.createElement(\"h2\", { className: textContent_css_1.default.title },\r\n            react_1.default.createElement(\"a\", { href: url, className: textContent_css_1.default.postLink }, title))));\r\n}\r\nexports.TextContent = TextContent;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/TextContent.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/index.ts":
/*!********************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./TextContent */ \"./src/shared/CardsList/Card/TextContent/TextContent.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/TextContent/textContent.css":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/TextContent/textContent.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"textContent\": \"textContent__textContent--1_vTF\",\n\t\"metaData\": \"textContent__metaData--2tYOb\",\n\t\"userLink\": \"textContent__userLink--vF1IG\",\n\t\"avatar\": \"textContent__avatar--1Qyku\",\n\t\"userName\": \"textContent__userName--2D3tW\",\n\t\"createdAt\": \"textContent__createdAt--2UBLv\",\n\t\"publishedLabel\": \"textContent__publishedLabel--ra0GI\",\n\t\"title\": \"textContent__title--23fU3\",\n\t\"postLink\": \"textContent__postLink--1Myno\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/TextContent/textContent.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/card.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/card.css ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"card\": \"card__card--fbpLh\",\n\t\"show\": \"card__show--1vAA8\",\n\t\"bookmark\": \"card__bookmark--4ftMu\",\n\t\"appear\": \"card__appear--9yP2F\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/card.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/index.ts":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Card */ \"./src/shared/CardsList/Card/Card.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/CardsList.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/CardsList.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\r\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\r\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\r\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\r\n            r[k] = a[j];\r\n    return r;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardsList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Card_1 = __webpack_require__(/*! ./Card */ \"./src/shared/CardsList/Card/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../Icon */ \"./src/shared/Icon/index.ts\");\r\nvar Dropdown_1 = __webpack_require__(/*! ../Dropdown */ \"./src/shared/Dropdown/index.ts\");\r\nvar GenericList_1 = __webpack_require__(/*! ../GenericList */ \"./src/shared/GenericList/index.ts\");\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nvar cardslist_css_1 = __importDefault(__webpack_require__(/*! ./cardslist.css */ \"./src/shared/CardsList/cardslist.css\"));\r\nfunction CardsList() {\r\n    var defaultData = [\r\n        {\r\n            id: 0,\r\n            time: new Date(),\r\n            url: '#post-url',\r\n            title: 'Как я учусь на платформе Skillbox?',\r\n            preview: 'https://cdn.dribbble.com/users/1090020/screenshots/13924809/media/cbf89f0d4c5c24575f491a43d23b919e.png',\r\n            author: {\r\n                name: 'Viktoriya Kalinina',\r\n                href: '#user-url',\r\n                avatar: 'https://cdn.dribbble.com/users/1090020/screenshots/10586074/media/4a2e94eb47ed8eda1b5bea258b6759d8.png',\r\n            },\r\n        },\r\n        {\r\n            id: 1,\r\n            time: new Date(),\r\n            url: '#post-url',\r\n            title: 'Следует отметить, что новая модель организационной деятельности...',\r\n            preview: 'https://cdn.dribbble.com/users/1090020/screenshots/11669071/media/ba7888f13a6b889223b9f5b0f0e316f2.png',\r\n            author: {\r\n                name: 'Ivan Ivanov',\r\n                href: '#user-url',\r\n                avatar: 'https://cdn.dribbble.com/users/24158/screenshots/3990796/batman.jpg',\r\n            },\r\n        },\r\n        {\r\n            id: 2,\r\n            time: new Date(),\r\n            url: '#post-url',\r\n            title: 'Я понял, что необходимо рационально тратить время, избегая...',\r\n            preview: 'https://cdn.dribbble.com/users/1090020/screenshots/11952091/media/7e02a4d54b4f3790ceccfb6ce98edc3e.png',\r\n            author: {\r\n                name: 'Aleksandra Petrova',\r\n                href: '#user-url',\r\n                avatar: 'https://cdn.dribbble.com/users/1090020/screenshots/12110878/media/957c8b83c8624399e54b630dedce2310.png',\r\n            },\r\n        },\r\n        {\r\n            id: 3,\r\n            time: new Date(),\r\n            url: '#post-url',\r\n            title: 'Какой фильм посмотреть?',\r\n            preview: 'https://cdn.dribbble.com/users/1090020/screenshots/11906331/media/36124f3ac0a7a047d3bbc7be0baa846b.png',\r\n            author: {\r\n                name: 'Harry Potter',\r\n                href: '#user-url',\r\n                avatar: 'https://cdn.dribbble.com/users/1090020/screenshots/11481390/media/9223685c90d17859298858b426fe2e7e.png',\r\n            },\r\n        },\r\n    ];\r\n    var _a = react_1.default.useState(defaultData), data = _a[0], setData = _a[1];\r\n    var _b = react_1.default.useState([]), bookmarks = _b[0], setBookmarks = _b[1];\r\n    var _c = react_1.default.useState({\r\n        0: 1,\r\n        1: 234,\r\n        2: 325,\r\n        3: 25,\r\n    }), karmaValues = _c[0], setKarmaValues = _c[1];\r\n    var setKarmaValue = function (id, value) {\r\n        setKarmaValues(function (prevState) {\r\n            var _a;\r\n            return (__assign(__assign({}, prevState), (_a = {}, _a[id] = value, _a)));\r\n        });\r\n    };\r\n    var moveHandler = function (id, type) {\r\n        switch (type) {\r\n            case 'В самый верх': {\r\n                setData(function (prev) { return __spreadArrays(prev.filter(function (item) { return item.id === id; }), prev.filter(function (item) { return item.id !== id; })); });\r\n                break;\r\n            }\r\n            case 'В самый низ': {\r\n                setData(function (prev) { return __spreadArrays(prev.filter(function (item) { return id !== item.id; }), prev.filter(function (item) { return id === item.id; })); });\r\n                break;\r\n            }\r\n            case 'Поднять': {\r\n                var index_1 = data.map(function (item) { return item.id; }).indexOf(id);\r\n                if (index_1 > 0)\r\n                    setData(function (prev) { return __spreadArrays(prev.filter(function (item, i) { return i < index_1 - 1; }), [\r\n                        prev[index_1],\r\n                        prev[index_1 - 1]\r\n                    ], prev.filter(function (item, i) { return i > index_1; })); });\r\n                break;\r\n            }\r\n            case 'Опустить': {\r\n                var index_2 = data.map(function (item) { return item.id; }).indexOf(id);\r\n                if (index_2 < data.length - 1)\r\n                    setData(function (prev) { return __spreadArrays(prev.filter(function (item, i) { return i < index_2; }), [\r\n                        prev[index_2 + 1],\r\n                        prev[index_2]\r\n                    ], prev.filter(function (item, i) { return i > index_2 + 1; })); });\r\n                break;\r\n            }\r\n        }\r\n    };\r\n    var hiddenCard = function (id) {\r\n        setData(function (prev) { return prev.filter(function (item) { return item.id !== id; }); });\r\n    };\r\n    var changeBookmark = function (id, type) {\r\n        if (type === 'add')\r\n            setBookmarks(function (prev) { return __spreadArrays(prev, [id]); });\r\n        else if (type === 'delete')\r\n            setBookmarks(function (prev) { return prev.filter(function (bookmarksId) { return bookmarksId !== id; }); });\r\n    };\r\n    var getBookmarksList = function () {\r\n        var listData = [];\r\n        bookmarks.map(function (id) {\r\n            var findData = data.find(function (itemData) { return itemData.id === id; });\r\n            if (findData)\r\n                listData.push({\r\n                    id: findData.id.toString(),\r\n                    text: findData.title,\r\n                    As: 'div',\r\n                });\r\n        });\r\n        return listData;\r\n    };\r\n    var classesBookmarksList = classnames_1.default(cardslist_css_1.default.bookmarksList);\r\n    return (react_1.default.createElement(react_1.default.Fragment, null,\r\n        bookmarks.length !== 0 && (react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement(Icon_1.Icon, { icon: \"bookmark\", size: 20, counter: bookmarks.length, className: cardslist_css_1.default.bookmarks }), childrenClassName: classesBookmarksList },\r\n            react_1.default.createElement(GenericList_1.GenericList, { list: getBookmarksList() }))),\r\n        react_1.default.createElement(\"ul\", { className: cardslist_css_1.default.cardsList }, data.map(function (dataCard) { return (react_1.default.createElement(Card_1.Card, __assign({}, dataCard, { key: dataCard.id, hiddenCard: hiddenCard, moveHandler: moveHandler, changeBookmark: changeBookmark, inBookmarks: bookmarks.includes(dataCard.id), karmaValue: karmaValues[dataCard.id], setKarmaValue: function (id, value) { return setKarmaValue(id, value); } }))); }))));\r\n}\r\nexports.CardsList = CardsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardsList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/cardslist.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/cardslist.css ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"cardslist\": \"cardslist__cardslist--1QCbK\",\n\t\"bookmarks\": \"cardslist__bookmarks--JxDBq\",\n\t\"bookmarksList\": \"cardslist__bookmarksList--3_Zkt\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/cardslist.css?");

/***/ }),

/***/ "./src/shared/CardsList/index.ts":
/*!***************************************!*\
  !*** ./src/shared/CardsList/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CardsList */ \"./src/shared/CardsList/CardsList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/index.ts?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Content = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar content_css_1 = __importDefault(__webpack_require__(/*! ./content.css */ \"./src/shared/Content/content.css\"));\r\nfunction Content(_a) {\r\n    var children = _a.children;\r\n    return react_1.default.createElement(\"div\", { className: content_css_1.default.content }, children);\r\n}\r\nexports.Content = Content;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Content/content.css":
/*!****************************************!*\
  !*** ./src/shared/Content/content.css ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"content\": \"content__content--3z6rw\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Content/content.css?");

/***/ }),

/***/ "./src/shared/Content/index.ts":
/*!*************************************!*\
  !*** ./src/shared/Content/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Content */ \"./src/shared/Content/Content.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/index.ts?");

/***/ }),

/***/ "./src/shared/Dropdown/Dropdown.tsx":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/Dropdown.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Dropdown = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nvar dropdown_css_1 = __importDefault(__webpack_require__(/*! ./dropdown.css */ \"./src/shared/Dropdown/dropdown.css\"));\r\nvar NOOP = function () { };\r\nfunction Dropdown(_a) {\r\n    var _b;\r\n    var button = _a.button, children = _a.children, isOpen = _a.isOpen, _c = _a.onOpen, onOpen = _c === void 0 ? NOOP : _c, _d = _a.onClose, onClose = _d === void 0 ? NOOP : _d, childrenClassName = _a.childrenClassName;\r\n    var _e = react_1.default.useState(isOpen), isDropdownOpen = _e[0], setIsDropdownOpen = _e[1];\r\n    react_1.default.useEffect(function () { return setIsDropdownOpen(isOpen); }, [isOpen]);\r\n    react_1.default.useEffect(function () { return (isDropdownOpen ? onOpen() : onClose()); }, [\r\n        isDropdownOpen,\r\n    ]);\r\n    var handleOpen = function () {\r\n        if (isOpen === undefined) {\r\n            setIsDropdownOpen(!isDropdownOpen);\r\n        }\r\n    };\r\n    return (react_1.default.createElement(\"div\", { className: dropdown_css_1.default.container },\r\n        react_1.default.createElement(\"div\", { onClick: handleOpen }, button),\r\n        isDropdownOpen && (react_1.default.createElement(\"div\", { className: classnames_1.default(dropdown_css_1.default.listContainer, (_b = {},\r\n                _b[\"\" + childrenClassName] = childrenClassName,\r\n                _b)) },\r\n            react_1.default.createElement(\"div\", { className: dropdown_css_1.default.list, onClick: function () { return setIsDropdownOpen(false); } }, children)))));\r\n}\r\nexports.Dropdown = Dropdown;\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/Dropdown/dropdown.css":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/dropdown.css ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"container\": \"dropdown__container--1PHA3\",\n\t\"listContainer\": \"dropdown__listContainer--1PKIn\",\n\t\"list\": \"dropdown__list--L3_uZ\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/dropdown.css?");

/***/ }),

/***/ "./src/shared/Dropdown/index.ts":
/*!**************************************!*\
  !*** ./src/shared/Dropdown/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Dropdown = void 0;\r\nvar Dropdown_1 = __webpack_require__(/*! ./Dropdown */ \"./src/shared/Dropdown/Dropdown.tsx\");\r\nObject.defineProperty(exports, \"Dropdown\", { enumerable: true, get: function () { return Dropdown_1.Dropdown; } });\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/index.ts?");

/***/ }),

/***/ "./src/shared/GenericList/GenericList.tsx":
/*!************************************************!*\
  !*** ./src/shared/GenericList/GenericList.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.GenericList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Icon_1 = __webpack_require__(/*! ../Icon */ \"./src/shared/Icon/index.ts\");\r\nvar Noop = function () { };\r\nfunction GenericList(_a) {\r\n    var header = _a.header, list = _a.list, className = _a.className;\r\n    return (react_1.default.createElement(\"div\", { className: className ? className : '' }, list.map(function (_a) {\r\n        var _b = _a.As, As = _b === void 0 ? 'div' : _b, text = _a.text, value = _a.value, icon = _a.icon, onClick = _a.onClick, className = _a.className, id = _a.id, href = _a.href;\r\n        return (react_1.default.createElement(As, { key: header ? header + \"-\" + id : id, href: href, className: className, onClick: onClick ? function () { return onClick(id, text); } : Noop, style: header && header === 'Background Card'\r\n                ? { background: value }\r\n                : {} },\r\n            icon && Icon_1.EIcon.hasOwnProperty(icon) ? (react_1.default.createElement(Icon_1.Icon, { icon: icon, size: 16 })) : null,\r\n            text));\r\n    })));\r\n}\r\nexports.GenericList = GenericList;\r\n\n\n//# sourceURL=webpack:///./src/shared/GenericList/GenericList.tsx?");

/***/ }),

/***/ "./src/shared/GenericList/index.ts":
/*!*****************************************!*\
  !*** ./src/shared/GenericList/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.GenericList = void 0;\r\nvar GenericList_1 = __webpack_require__(/*! ./GenericList */ \"./src/shared/GenericList/GenericList.tsx\");\r\nObject.defineProperty(exports, \"GenericList\", { enumerable: true, get: function () { return GenericList_1.GenericList; } });\r\n\n\n//# sourceURL=webpack:///./src/shared/GenericList/index.ts?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\"));\r\nvar SearchBlock_1 = __webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/index.ts\");\r\nvar SortBlock_1 = __webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/index.ts\");\r\nvar UserBlock_1 = __webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/UserBlock/index.js\");\r\nvar ThreadTitle_1 = __webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/index.ts\");\r\nfunction Header() {\r\n    return (react_1.default.createElement(\"header\", { className: header_css_1.default.header },\r\n        react_1.default.createElement(SearchBlock_1.SearchBlock, null),\r\n        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),\r\n        react_1.default.createElement(SortBlock_1.SortBlock, null),\r\n        react_1.default.createElement(UserBlock_1.UserBlock, null)));\r\n}\r\nexports.Header = Header;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SearchBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar searchblock_css_1 = __importDefault(__webpack_require__(/*! ./searchblock.css */ \"./src/shared/Header/SearchBlock/searchblock.css\"));\r\nfunction SearchBlock() {\r\n    return react_1.default.createElement(\"div\", { className: searchblock_css_1.default.searchBlock }, \"Search Block\");\r\n}\r\nexports.SearchBlock = SearchBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/SearchBlock/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/SearchBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/searchblock.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/searchblock.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"searchBlock\": \"searchblock__searchBlock--3k13m\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/searchblock.css?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/SortBlock.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/SortBlock.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SortBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar sortblock_css_1 = __importDefault(__webpack_require__(/*! ./sortblock.css */ \"./src/shared/Header/SortBlock/sortblock.css\"));\r\nfunction SortBlock() {\r\n    return react_1.default.createElement(\"div\", { className: sortblock_css_1.default.sortBlock }, \"Sort Block\");\r\n}\r\nexports.SortBlock = SortBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/SortBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/Header/SortBlock/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/SortBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/sortblock.css":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/sortblock.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"sortBlock\": \"sortblock__sortBlock--4Fasu\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/sortblock.css?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/ThreadTitle.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/ThreadTitle.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ThreadTitle = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar threadtitle_css_1 = __importDefault(__webpack_require__(/*! ./threadtitle.css */ \"./src/shared/Header/ThreadTitle/threadtitle.css\"));\r\nfunction ThreadTitle() {\r\n    return react_1.default.createElement(\"h1\", { className: threadtitle_css_1.default.threadTitle }, \"Thread Title\");\r\n}\r\nexports.ThreadTitle = ThreadTitle;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/ThreadTitle.tsx?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/ThreadTitle.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/index.ts?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/threadtitle.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/threadtitle.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"threadTitle\": \"threadtitle__threadTitle--1uMoM\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/threadtitle.css?");

/***/ }),

/***/ "./src/shared/Header/UserBlock/UserBlock.css":
/*!***************************************************!*\
  !*** ./src/shared/Header/UserBlock/UserBlock.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"userBox\": \"UserBlock__userBox--1KsUk\",\n\t\"avatarBox\": \"UserBlock__avatarBox--38afy\",\n\t\"username\": \"UserBlock__username--3ueJ3\",\n\t\"avatarImage\": \"UserBlock__avatarImage--OaW4e\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Header/UserBlock/UserBlock.css?");

/***/ }),

/***/ "./src/shared/Header/UserBlock/UserBlock.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Header/UserBlock/UserBlock.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../Icon */ \"./src/shared/Icon/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../Text */ \"./src/shared/Text/index.ts\");\r\nvar Text_2 = __webpack_require__(/*! ../../Text */ \"./src/shared/Text/index.ts\");\r\nvar UserBlock_css_1 = __importDefault(__webpack_require__(/*! ./UserBlock.css */ \"./src/shared/Header/UserBlock/UserBlock.css\"));\r\nfunction UserBlock(_a) {\r\n    var avatarSrc = _a.avatarSrc, username = _a.username;\r\n    return (react_1.default.createElement(\"a\", { href: \"https://www.reddit.com/api/v1/authorize?client_id=JgKiK8iIy9px3g&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity\", className: UserBlock_css_1.default.userBox },\r\n        react_1.default.createElement(\"div\", { className: UserBlock_css_1.default.avatarBox }, avatarSrc ? (react_1.default.createElement(\"img\", { src: avatarSrc, alt: \"user avatar\", className: UserBlock_css_1.default.avatarImage })) : (react_1.default.createElement(Icon_1.Icon, { icon: \"avatar\", size: 28 }))),\r\n        react_1.default.createElement(\"div\", { className: UserBlock_css_1.default.username },\r\n            react_1.default.createElement(Text_1.Text, { size: 16, color: username ? Text_2.EColor.black : Text_2.EColor.grey99 }, username || 'Аноним'))));\r\n}\r\nexports.UserBlock = UserBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/UserBlock/UserBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/UserBlock/index.js":
/*!**********************************************!*\
  !*** ./src/shared/Header/UserBlock/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserBlock = void 0;\r\nvar UserBlock_1 = __webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/UserBlock/UserBlock.tsx\");\r\nObject.defineProperty(exports, \"UserBlock\", { enumerable: true, get: function () { return UserBlock_1.UserBlock; } });\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/UserBlock/index.js?");

/***/ }),

/***/ "./src/shared/Header/header.css":
/*!**************************************!*\
  !*** ./src/shared/Header/header.css ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"header\": \"header__header--1FWjL\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Header/header.css?");

/***/ }),

/***/ "./src/shared/Header/index.ts":
/*!************************************!*\
  !*** ./src/shared/Header/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Header */ \"./src/shared/Header/Header.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/index.ts?");

/***/ }),

/***/ "./src/shared/Icon/EIcon.ts":
/*!**********************************!*\
  !*** ./src/shared/Icon/EIcon.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.EIcon = void 0;\r\nvar EIcon;\r\n(function (EIcon) {\r\n    EIcon[\"arrow\"] = \"arrow\";\r\n    EIcon[\"block\"] = \"block\";\r\n    EIcon[\"bookmark\"] = \"bookmark\";\r\n    EIcon[\"comments\"] = \"comments\";\r\n    EIcon[\"menu\"] = \"menu\";\r\n    EIcon[\"save\"] = \"save\";\r\n    EIcon[\"share\"] = \"share\";\r\n})(EIcon = exports.EIcon || (exports.EIcon = {}));\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/EIcon.ts?");

/***/ }),

/***/ "./src/shared/Icon/Icon.tsx":
/*!**********************************!*\
  !*** ./src/shared/Icon/Icon.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Icon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar icon_css_1 = __importDefault(__webpack_require__(/*! ./icon.css */ \"./src/shared/Icon/icon.css\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nvar Noop = function () { };\r\nfunction Icon(props) {\r\n    var _a, _b;\r\n    var _c = props.As, As = _c === void 0 ? 'button' : _c, icon = props.icon, _d = props.size, size = _d === void 0 ? 16 : _d, onClick = props.onClick, className = props.className, counter = props.counter;\r\n    var classes = classnames_1.default((_a = {}, _a[icon_css_1.default[\"s\" + size]] = size, _a), (_b = {}, _b[\"\" + className] = className, _b));\r\n    return (react_1.default.createElement(As, { className: classes, onClick: onClick ? onClick : Noop },\r\n        react_1.default.createElement(\"svg\", null,\r\n            react_1.default.createElement(\"use\", { xlinkHref: \"#\" + icon })),\r\n        counter ? react_1.default.createElement(\"span\", null, counter) : null));\r\n}\r\nexports.Icon = Icon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/Icon.tsx?");

/***/ }),

/***/ "./src/shared/Icon/IconSprite.tsx":
/*!****************************************!*\
  !*** ./src/shared/Icon/IconSprite.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.IconSprite = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction IconSprite() {\r\n    return (react_1.default.createElement(\"svg\", { xmlns: \"http://www.w3.org/2000/svg\", xmlnsXlink: \"http://www.w3.org/1999/xlink\", x: \"0px\", y: \"0px\", display: \"hidden\" },\r\n        react_1.default.createElement(\"symbol\", { id: \"arrow\", viewBox: \"0 0 18 12\" },\r\n            react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\" })),\r\n        react_1.default.createElement(\"symbol\", { id: \"avatar\", viewBox: \"0 0 50 50\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n            react_1.default.createElement(\"path\", { d: \"M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z\", fill: \"#D9D9D9\" })),\r\n        react_1.default.createElement(\"symbol\", { id: \"block\", viewBox: \"0 0 426.667 426.667\" },\r\n            react_1.default.createElement(\"path\", { d: \"M213.333,0C95.467,0,0,95.467,0,213.333s95.467,213.333,213.333,213.333S426.667,331.2,426.667,213.333S331.2,0,213.333,0\\r\\n            z M42.667,213.333c0-94.293,76.373-170.667,170.667-170.667c39.467,0,75.627,13.547,104.533,35.947L78.613,317.867\\r\\n            C56.213,288.96,42.667,252.8,42.667,213.333z M213.333,384c-39.467,0-75.627-13.547-104.533-35.947L348.053,108.8\\r\\n            C370.453,137.707,384,173.867,384,213.333C384,307.627,307.627,384,213.333,384z\" })),\r\n        react_1.default.createElement(\"symbol\", { id: \"bookmark\", viewBox: \"0 0 512 512\" },\r\n            react_1.default.createElement(\"path\", { d: \"M416.667,0H95.334c-8.284,0-15,6.716-15,15v482c0,6.067,3.655,11.536,9.26,13.858c1.856,0.769,3.805,1.142,5.737,1.142\\r\\n          c3.903,0,7.74-1.523,10.609-4.394l150.063-150.062L406.06,507.606c4.29,4.291,10.741,5.573,16.347,3.252\\r\\n          c5.605-2.322,9.26-7.791,9.26-13.858V15C431.667,6.716,424.952,0,416.667,0z\" })),\r\n        react_1.default.createElement(\"symbol\", { id: \"comments\", x: \"0px\", y: \"0px\", viewBox: \"0 0 550 510\" },\r\n            react_1.default.createElement(\"path\", { d: \"M459,0H51C22.95,0,0,22.95,0,51v459l102-102h357c28.05,0,51-22.95,51-51V51C510,22.95,487.05,0,459,0z M408,306H102v-51 h306V306z M408,229.5H102v-51h306V229.5z M408,153H102v-51h306V153z\" })),\r\n        react_1.default.createElement(\"symbol\", { id: \"menu\", viewBox: \"0 0 5 20\" },\r\n            react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"2.5\", r: \"2.5\" }),\r\n            react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"10\", r: \"2.5\" }),\r\n            react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"17.5\", r: \"2.5\" })),\r\n        react_1.default.createElement(\"symbol\", { id: \"save\", viewBox: \"0 0 426.667 420\" },\r\n            react_1.default.createElement(\"path\", { d: \"M42.667,85.333H0V384c0,23.573,19.093,42.667,42.667,42.667h298.667V384H42.667V85.333z\" }),\r\n            react_1.default.createElement(\"path\", { d: \"M384,0H128c-23.573,0-42.667,19.093-42.667,42.667v256c0,23.573,19.093,42.667,42.667,42.667h256 c23.573,0,42.667-19.093,42.667-42.667v-256C426.667,19.093,407.573,0,384,0z M362.667,192h-85.333v85.333h-42.667V192h-85.333 v-42.667h85.333V64h42.667v85.333h85.333V192z\" })),\r\n        react_1.default.createElement(\"symbol\", { id: \"share\", viewBox: \"4 2 22 22\" },\r\n            react_1.default.createElement(\"path\", { d: \"M18 16.1365C17.24 16.1365 16.56 16.4378 16.04 16.9096L8.91 12.743C8.96 12.512 9 12.2811 9 12.0402C9 11.7992 8.96 11.5683 8.91 11.3373L15.96 7.21084C16.5 7.71285 17.21 8.0241 18 8.0241C19.66 8.0241 21 6.67871 21 5.01205C21 3.34538 19.66 2 18 2C16.34 2 15 3.34538 15 5.01205C15 5.25301 15.04 5.48394 15.09 5.71486L8.04 9.84137C7.5 9.33936 6.79 9.02811 6 9.02811C4.34 9.02811 3 10.3735 3 12.0402C3 13.7068 4.34 15.0522 6 15.0522C6.79 15.0522 7.5 14.741 8.04 14.239L15.16 18.4157C15.11 18.6265 15.08 18.8474 15.08 19.0683C15.08 20.6847 16.39 22 18 22C19.61 22 20.92 20.6847 20.92 19.0683C20.92 17.4518 19.61 16.1365 18 16.1365Z\" }))));\r\n}\r\nexports.IconSprite = IconSprite;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/IconSprite.tsx?");

/***/ }),

/***/ "./src/shared/Icon/icon.css":
/*!**********************************!*\
  !*** ./src/shared/Icon/icon.css ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"s12\": \"icon__s12--3MUIY\",\n\t\"s16\": \"icon__s16--6BeWI\",\n\t\"s20\": \"icon__s20--HY8bp\",\n\t\"s24\": \"icon__s24--WqSGq\",\n\t\"s28\": \"icon__s28--3GNgu\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Icon/icon.css?");

/***/ }),

/***/ "./src/shared/Icon/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Icon/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.EIcon = exports.IconSprite = exports.Icon = void 0;\r\nvar Icon_1 = __webpack_require__(/*! ./Icon */ \"./src/shared/Icon/Icon.tsx\");\r\nObject.defineProperty(exports, \"Icon\", { enumerable: true, get: function () { return Icon_1.Icon; } });\r\nvar EIcon_1 = __webpack_require__(/*! ./EIcon */ \"./src/shared/Icon/EIcon.ts\");\r\nObject.defineProperty(exports, \"EIcon\", { enumerable: true, get: function () { return EIcon_1.EIcon; } });\r\nvar IconSprite_1 = __webpack_require__(/*! ./IconSprite */ \"./src/shared/Icon/IconSprite.tsx\");\r\nObject.defineProperty(exports, \"IconSprite\", { enumerable: true, get: function () { return IconSprite_1.IconSprite; } });\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Layout = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar layout_css_1 = __importDefault(__webpack_require__(/*! ./layout.css */ \"./src/shared/Layout/layout.css\"));\r\nfunction Layout(_a) {\r\n    var children = _a.children;\r\n    return react_1.default.createElement(\"div\", { className: layout_css_1.default.layout }, children);\r\n}\r\nexports.Layout = Layout;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/index.ts":
/*!************************************!*\
  !*** ./src/shared/Layout/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Layout */ \"./src/shared/Layout/Layout.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/layout.css":
/*!**************************************!*\
  !*** ./src/shared/Layout/layout.css ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"layout\": \"layout__layout--1BrJT\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Layout/layout.css?");

/***/ }),

/***/ "./src/shared/Text/Text.tsx":
/*!**********************************!*\
  !*** ./src/shared/Text/Text.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Text = exports.EColor = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar text_css_1 = __importDefault(__webpack_require__(/*! ./text.css */ \"./src/shared/Text/text.css\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nvar EColor;\r\n(function (EColor) {\r\n    EColor[\"black\"] = \"black\";\r\n    EColor[\"orange\"] = \"orange\";\r\n    EColor[\"green\"] = \"green\";\r\n    EColor[\"white\"] = \"white\";\r\n    EColor[\"greyF4\"] = \"greyF4\";\r\n    EColor[\"greyF3\"] = \"greyF3\";\r\n    EColor[\"greyD9\"] = \"greyD9\";\r\n    EColor[\"greyC4\"] = \"greyC4\";\r\n    EColor[\"grey99\"] = \"grey99\";\r\n    EColor[\"grey66\"] = \"grey66\";\r\n})(EColor = exports.EColor || (exports.EColor = {}));\r\nfunction Text(props) {\r\n    var _a, _b, _c, _d;\r\n    var _e = props.As, As = _e === void 0 ? 'span' : _e, _f = props.color, color = _f === void 0 ? EColor.black : _f, _g = props.bold, bold = _g === void 0 ? false : _g, children = props.children, size = props.size, mobileSize = props.mobileSize, tabletSize = props.tabletSize, desktopSize = props.desktopSize;\r\n    var classes = classnames_1.default(text_css_1.default[color], (_a = {}, _a[text_css_1.default.bold] = bold, _a), text_css_1.default[\"s\" + size], (_b = {}, _b[text_css_1.default[\"m\" + mobileSize]] = mobileSize, _b), (_c = {}, _c[text_css_1.default[\"t\" + tabletSize]] = tabletSize, _c), (_d = {}, _d[text_css_1.default[\"d\" + desktopSize]] = desktopSize, _d));\r\n    return react_1.default.createElement(As, { className: classes }, children);\r\n}\r\nexports.Text = Text;\r\n\n\n//# sourceURL=webpack:///./src/shared/Text/Text.tsx?");

/***/ }),

/***/ "./src/shared/Text/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Text/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Text */ \"./src/shared/Text/Text.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Text/index.ts?");

/***/ }),

/***/ "./src/shared/Text/text.css":
/*!**********************************!*\
  !*** ./src/shared/Text/text.css ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"s28\": \"text__s28--1Y0UD\",\n\t\"s20\": \"text__s20--1rcCY\",\n\t\"s16\": \"text__s16--357-u\",\n\t\"s14\": \"text__s14--1yRIX\",\n\t\"s12\": \"text__s12--2VLJ9\",\n\t\"s10\": \"text__s10--34Ke5\",\n\t\"black\": \"text__black--195ax\",\n\t\"white\": \"text__white--3mLIt\",\n\t\"orange\": \"text__orange--KcfSv\",\n\t\"green\": \"text__green--1DoOT\",\n\t\"greyF4\": \"text__greyF4--XwDMR\",\n\t\"greyF3\": \"text__greyF3--1d406\",\n\t\"greyD9\": \"text__greyD9--OiOU9\",\n\t\"greyC4\": \"text__greyC4--3LoNh\",\n\t\"grey99\": \"text__grey99--3D1fM\",\n\t\"grey66\": \"text__grey66--219B_\",\n\t\"bold\": \"text__bold--3b6dr\",\n\t\"t28\": \"text__t28--1l9fS\",\n\t\"t20\": \"text__t20--1VzKx\",\n\t\"t16\": \"text__t16--1X1iF\",\n\t\"t14\": \"text__t14--1vRqk\",\n\t\"t12\": \"text__t12--1xY59\",\n\t\"t10\": \"text__t10--3ZtjN\",\n\t\"m28\": \"text__m28--3V7S6\",\n\t\"m20\": \"text__m20--Wd-DD\",\n\t\"m16\": \"text__m16--18mow\",\n\t\"m14\": \"text__m14--1mzQ-\",\n\t\"m12\": \"text__m12--ote0y\",\n\t\"m10\": \"text__m10--2mNG-\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Text/text.css?");

/***/ }),

/***/ "./src/utils/js/merge.ts":
/*!*******************************!*\
  !*** ./src/utils/js/merge.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.merge = void 0;\r\n// Объединение полей двух объектов\r\nfunction merge(obj1) {\r\n    return function (obj2) { return (__assign(__assign({}, obj1), obj2)); };\r\n}\r\nexports.merge = merge;\r\n\n\n//# sourceURL=webpack:///./src/utils/js/merge.ts?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ })

/******/ });