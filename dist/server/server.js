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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EIcon = exports.IconSprite = exports.Icon = void 0;
var Icon_1 = __webpack_require__(46);
Object.defineProperty(exports, "Icon", { enumerable: true, get: function () { return Icon_1.Icon; } });
var EIcon_1 = __webpack_require__(48);
Object.defineProperty(exports, "EIcon", { enumerable: true, get: function () { return EIcon_1.EIcon; } });
var IconSprite_1 = __webpack_require__(49);
Object.defineProperty(exports, "IconSprite", { enumerable: true, get: function () { return IconSprite_1.IconSprite; } });


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(50), exports);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_USER_DATA_ERROR = exports.GET_USER_DATA_SUCCESS = exports.GET_USER_DATA = void 0;
exports.GET_USER_DATA = 'GET_USER_DATA';
exports.GET_USER_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS';
exports.GET_USER_DATA_ERROR = 'GET_USER_DATA_ERROR';


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_TOKEN = exports.UPDATE_COMMENT = void 0;
exports.UPDATE_COMMENT = 'UPDATE_COMMENT';
exports.GET_TOKEN = 'GET_TOKEN';


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_POST_DATA_ERROR = exports.GET_POST_DATA_SUCCESS = exports.GET_POST_DATA = void 0;
exports.GET_POST_DATA = 'GET_POST_DATA';
exports.GET_POST_DATA_SUCCESS = 'GET_POST_DATA_SUCCESS';
exports.GET_POST_DATA_ERROR = 'GET_POST_DATA_ERROR';


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setToken = exports.updateComment = void 0;
var const_1 = __webpack_require__(8);
exports.updateComment = function (value) {
    return {
        type: const_1.UPDATE_COMMENT,
        field: 'commentText',
        payload: { data: value },
    };
};
exports.setToken = function (token) {
    return {
        type: const_1.GET_TOKEN,
        field: 'token',
        payload: { data: token },
    };
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentForm = void 0;
var CommentFormContainer_1 = __webpack_require__(80);
Object.defineProperty(exports, "CommentForm", { enumerable: true, get: function () { return CommentFormContainer_1.CommentForm; } });


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = void 0;
var Dropdown_1 = __webpack_require__(94);
Object.defineProperty(exports, "Dropdown", { enumerable: true, get: function () { return Dropdown_1.Dropdown; } });


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericList = void 0;
var GenericList_1 = __webpack_require__(96);
Object.defineProperty(exports, "GenericList", { enumerable: true, get: function () { return GenericList_1.GenericList; } });


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
    var list = []; // return the list of modules as css string
    list.toString = function toString() {
        return this.map(function (item) {
            var content = cssWithMappingToString(item, useSourceMap);
            if (item[2]) {
                return "@media ".concat(item[2], " {").concat(content, "}");
            }
            return content;
        }).join('');
    }; // import a list of modules into the list
    // eslint-disable-next-line func-names
    list.i = function (modules, mediaQuery, dedupe) {
        if (typeof modules === 'string') {
            // eslint-disable-next-line no-param-reassign
            modules = [[null, modules, '']];
        }
        var alreadyImportedModules = {};
        if (dedupe) {
            for (var i = 0; i < this.length; i++) {
                // eslint-disable-next-line prefer-destructuring
                var id = this[i][0];
                if (id != null) {
                    alreadyImportedModules[id] = true;
                }
            }
        }
        for (var _i = 0; _i < modules.length; _i++) {
            var item = [].concat(modules[_i]);
            if (dedupe && alreadyImportedModules[item[0]]) {
                // eslint-disable-next-line no-continue
                continue;
            }
            if (mediaQuery) {
                if (!item[2]) {
                    item[2] = mediaQuery;
                }
                else {
                    item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
                }
            }
            list.push(item);
        }
    };
    return list;
};
function cssWithMappingToString(item, useSourceMap) {
    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring
    var cssMapping = item[3];
    if (!cssMapping) {
        return content;
    }
    if (useSourceMap && typeof btoa === 'function') {
        var sourceMapping = toComment(cssMapping);
        var sourceURLs = cssMapping.sources.map(function (source) {
            return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
        });
        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
    }
    return [content].join('\n');
} // Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    return "/*# ".concat(data, " */");
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(__webpack_require__(17));
var server_1 = __importDefault(__webpack_require__(18));
var App_1 = __webpack_require__(19);
var axios_1 = __importDefault(__webpack_require__(5));
var indexTemplate_1 = __webpack_require__(104);
var PORT = process.env.port || 3000;
var app = express_1.default();
app.use('/static', express_1.default.static('./dist/client'));
app.get('/auth', function (req, res) {
    axios_1.default
        .post('https://www.reddit.com/api/v1/access_token', "grant_type=authorization_code&code=" + req.query.code + "&redirect_uri=http://localhost:3000/auth", {
        auth: {
            username: 'JgKiK8iIy9px3g',
            password: 'AZM8u-wJSj256QrLk44inAdn65KXjQ',
        },
        headers: { 'Content-type': 'application/x-www-form-urlencoded' },
    })
        .then(function (_a) {
        var data = _a.data;
        res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App()), data['access_token']));
    })
        .catch(console.log);
});
app.get('/', function (req, res) {
    res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App())));
});
app.listen(PORT, function () {
    console.log('Server started on http://localhost:' + PORT);
});


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var root_1 = __webpack_require__(20);
var react_1 = __importDefault(__webpack_require__(0));
var react_redux_1 = __webpack_require__(2);
var store_1 = __webpack_require__(21);
__webpack_require__(31);
var Layout_1 = __webpack_require__(32);
var Header_1 = __webpack_require__(35);
var Content_1 = __webpack_require__(60);
var CardsList_1 = __webpack_require__(63);
var Icon_1 = __webpack_require__(1);
function AppComponent() {
    return (react_1.default.createElement(react_redux_1.Provider, { store: store_1.store },
        react_1.default.createElement(Layout_1.Layout, null,
            react_1.default.createElement(Header_1.Header, null),
            react_1.default.createElement(Content_1.Content, null,
                react_1.default.createElement(CardsList_1.CardsList, null)),
            react_1.default.createElement(Icon_1.IconSprite, null))));
}
exports.App = root_1.hot(function () { return AppComponent(); });


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader/root");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
var redux_1 = __webpack_require__(6);
var redux_devtools_extension_1 = __webpack_require__(22);
var rootReducer_1 = __webpack_require__(23);
var redux_thunk_1 = __importDefault(__webpack_require__(30));
// const ping: Middleware = (store) => (next) => (action) => {
//   console.log('ping');
//   next(action);
// };
exports.store = redux_1.createStore(rootReducer_1.rootReducer, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1.default)));


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rootReducer = void 0;
var redux_1 = __webpack_require__(6);
var reducer_1 = __webpack_require__(24);
var reducer_2 = __webpack_require__(26);
var reducer_3 = __webpack_require__(28);
exports.rootReducer = redux_1.combineReducers({
    user: reducer_1.userReducer,
    common: reducer_2.commonReducer,
    post: reducer_3.postReducer,
});


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userReducer = void 0;
var initialState_1 = __webpack_require__(25);
var const_1 = __webpack_require__(7);
exports.userReducer = function (state, action) {
    if (state === void 0) { state = initialState_1.initialState; }
    switch (action.type) {
        case const_1.GET_USER_DATA_SUCCESS:
            return __assign(__assign({}, state), { data: __assign(__assign({}, state.data), action.data), loading: false });
        case const_1.GET_USER_DATA_ERROR:
            return __assign(__assign({}, state), { error: action.error || null, loading: false });
        case const_1.GET_USER_DATA:
            return {
                data: initialState_1.initialState.data,
                error: null,
                loading: true,
            };
        default:
            return state;
    }
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.initialState = void 0;
exports.initialState = {
    data: { name: '', iconImg: '' },
    loading: false,
    error: null,
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonReducer = void 0;
var initialState_1 = __webpack_require__(27);
var const_1 = __webpack_require__(8);
exports.commonReducer = function (state, action) {
    var _a;
    if (state === void 0) { state = initialState_1.initialState; }
    switch (action.type) {
        case const_1.UPDATE_COMMENT:
        case const_1.GET_TOKEN:
            return __assign(__assign({}, state), (_a = {}, _a[action.field] = action.payload.data, _a));
        default:
            return state;
    }
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.initialState = void 0;
exports.initialState = {
    commentText: 'Hello, Skillbox!',
    token: '',
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postReducer = void 0;
var initialState_1 = __webpack_require__(29);
var const_1 = __webpack_require__(9);
exports.postReducer = function (state, action) {
    if (state === void 0) { state = initialState_1.initialState; }
    switch (action.type) {
        case const_1.GET_POST_DATA_SUCCESS:
            return __assign(__assign({}, state), { data: __spreadArrays(state.data, action.data), loading: false });
        case const_1.GET_POST_DATA_ERROR:
            return __assign(__assign({}, state), { error: action.error || null, loading: false });
        case const_1.GET_POST_DATA:
            return {
                data: initialState_1.initialState.data,
                error: null,
                loading: true,
            };
        default:
            return state;
    }
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.initialState = void 0;
exports.initialState = {
    data: [],
    loading: false,
    error: null,
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root {\r\n  --black: #333333;\r\n  --orange: #cc6633;\r\n  --green: #a4cc33;\r\n  --white: #ffffff;\r\n  --greyF4: #f4f4f4;\r\n  --greyF3: #f3f3f3;\r\n  --greyD9: #d9d9d9;\r\n  --greyC4: #c4c4c4;\r\n  --grey99: #999999;\r\n  --grey66: #666666;\r\n  --grey-blue: #c9e2ee;\r\n  --grey-blue-dark: #407994;\r\n}\r\n\r\n#modal-root {\r\n  position: absolute;\r\n  top: 0px;\r\n}\r\n\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n  background-color: var(--greyF4);\r\n  font-size: 14px;\r\n  line-height: 16px;\r\n  font-family: 'Roboto', serif;\r\n}\r\n\r\n* {\r\n  color: var(--black);\r\n  box-sizing: border-box;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\nul {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\nbutton {\r\n  padding: 0;\r\n  border: 0;\r\n  background: transparent;\r\n  cursor: pointer;\r\n}\r\nbutton:focus,\r\nbutton:active {\r\n  outline: unset !important;\r\n}\r\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(33), exports);


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var layout_css_1 = __importDefault(__webpack_require__(34));
function Layout(_a) {
    var children = _a.children;
    return react_1.default.createElement("div", { className: layout_css_1.default.layout }, children);
}
exports.Layout = Layout;


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"layout": "layout__layout--1BrJT"
});


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(36), exports);


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var header_css_1 = __importDefault(__webpack_require__(37));
var SearchBlock_1 = __webpack_require__(38);
var SortBlock_1 = __webpack_require__(41);
var UserBlock_1 = __webpack_require__(44);
var ThreadTitle_1 = __webpack_require__(57);
function Header() {
    return (react_1.default.createElement("header", { className: header_css_1.default.header },
        react_1.default.createElement(SearchBlock_1.SearchBlock, null),
        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),
        react_1.default.createElement(SortBlock_1.SortBlock, null),
        react_1.default.createElement(UserBlock_1.UserBlock, null),
        react_1.default.createElement("div", { id: "dropdown-bookmarks" })));
}
exports.Header = Header;


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"header": "header__header--1FWjL"
});


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(39), exports);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchBlock = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var searchblock_css_1 = __importDefault(__webpack_require__(40));
function SearchBlock() {
    return react_1.default.createElement("div", { className: searchblock_css_1.default.searchBlock }, "Search Block");
}
exports.SearchBlock = SearchBlock;


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"searchBlock": "searchblock__searchBlock--3k13m"
});


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(42), exports);


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortBlock = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var sortblock_css_1 = __importDefault(__webpack_require__(43));
function SortBlock() {
    return react_1.default.createElement("div", { className: sortblock_css_1.default.sortBlock }, "Sort Block");
}
exports.SortBlock = SortBlock;


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"sortBlock": "sortblock__sortBlock--4Fasu"
});


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBlock = void 0;
var UserBlock_1 = __webpack_require__(45);
Object.defineProperty(exports, "UserBlock", { enumerable: true, get: function () { return UserBlock_1.UserBlock; } });


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBlock = void 0;
var react_1 = __importStar(__webpack_require__(0));
var Icon_1 = __webpack_require__(1);
var Text_1 = __webpack_require__(4);
var UserBlock_css_1 = __importDefault(__webpack_require__(52));
var useUserData_1 = __webpack_require__(53);
var Loading_1 = __webpack_require__(55);
var actions_1 = __webpack_require__(10);
var react_redux_1 = __webpack_require__(2);
function UserBlock() {
    var _a = useUserData_1.useUserData(), _b = _a.data, iconImg = _b.iconImg, name = _b.name, loading = _a.loading;
    var dispatch = react_redux_1.useDispatch();
    react_1.useEffect(function () {
        if (window.__token__) {
            dispatch(actions_1.setToken(window.__token__));
        }
    }, []);
    return (react_1.default.createElement("a", { href: "https://www.reddit.com/api/v1/authorize?client_id=JgKiK8iIy9px3g&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity", className: UserBlock_css_1.default.userBox },
        react_1.default.createElement("div", { className: UserBlock_css_1.default.avatarBox }, iconImg ? (react_1.default.createElement("img", { src: iconImg, alt: "user avatar", className: UserBlock_css_1.default.avatarImage })) : (react_1.default.createElement(Icon_1.Icon, { icon: "avatar", size: 28 }))),
        react_1.default.createElement("div", { className: UserBlock_css_1.default.username }, loading ? (react_1.default.createElement(Loading_1.Loading, null)) : (react_1.default.createElement(Text_1.Text, { size: 16, color: name ? Text_1.EColor.black : Text_1.EColor.grey99 }, name || 'Аноним')))));
}
exports.UserBlock = UserBlock;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var icon_css_1 = __importDefault(__webpack_require__(47));
var classnames_1 = __importDefault(__webpack_require__(3));
var Noop = function () { };
function Icon(props) {
    var _a, _b;
    var _c = props.As, As = _c === void 0 ? 'button' : _c, icon = props.icon, _d = props.size, size = _d === void 0 ? 16 : _d, onClick = props.onClick, className = props.className, counter = props.counter;
    var classes = classnames_1.default((_a = {}, _a[icon_css_1.default["s" + size]] = size, _a), (_b = {}, _b["" + className] = className, _b));
    return (react_1.default.createElement(As, { className: classes, onClick: onClick ? onClick : Noop },
        react_1.default.createElement("svg", null,
            react_1.default.createElement("use", { xlinkHref: "#" + icon })),
        counter ? react_1.default.createElement("span", null, counter) : null));
}
exports.Icon = Icon;


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"s12": "icon__s12--3MUIY",
	"s16": "icon__s16--6BeWI",
	"s20": "icon__s20--HY8bp",
	"s24": "icon__s24--WqSGq",
	"s28": "icon__s28--3GNgu"
});


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EIcon = void 0;
var EIcon;
(function (EIcon) {
    EIcon["arrow"] = "arrow";
    EIcon["block"] = "block";
    EIcon["bookmark"] = "bookmark";
    EIcon["comments"] = "comments";
    EIcon["menu"] = "menu";
    EIcon["save"] = "save";
    EIcon["share"] = "share";
    EIcon["close"] = "close";
})(EIcon = exports.EIcon || (exports.EIcon = {}));


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconSprite = void 0;
var react_1 = __importDefault(__webpack_require__(0));
function IconSprite() {
    return (react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", display: "hidden" },
        react_1.default.createElement("symbol", { id: "close", viewBox: "0 0 21 21", fill: "none" },
            react_1.default.createElement("path", { d: "M19.7991 3.05176e-05L20.7419 0.942838L0.94289 20.7418L8.27312e-05 19.799L19.7991 3.05176e-05Z", fill: "#ADADAD" }),
            react_1.default.createElement("path", { d: "M20.7418 19.799L19.799 20.7418L2.47121e-05 0.942798L0.942833 -1.04904e-05L20.7418 19.799Z", fill: "#ADADAD" })),
        react_1.default.createElement("symbol", { id: "arrow", viewBox: "0 0 18 12" },
            react_1.default.createElement("path", { d: "M9.5 0L0 10H19L9.5 0Z" })),
        react_1.default.createElement("symbol", { id: "avatar", viewBox: "0 0 50 50", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            react_1.default.createElement("path", { d: "M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z", fill: "#D9D9D9" })),
        react_1.default.createElement("symbol", { id: "block", viewBox: "0 0 426.667 426.667" },
            react_1.default.createElement("path", { d: "M213.333,0C95.467,0,0,95.467,0,213.333s95.467,213.333,213.333,213.333S426.667,331.2,426.667,213.333S331.2,0,213.333,0\r\n            z M42.667,213.333c0-94.293,76.373-170.667,170.667-170.667c39.467,0,75.627,13.547,104.533,35.947L78.613,317.867\r\n            C56.213,288.96,42.667,252.8,42.667,213.333z M213.333,384c-39.467,0-75.627-13.547-104.533-35.947L348.053,108.8\r\n            C370.453,137.707,384,173.867,384,213.333C384,307.627,307.627,384,213.333,384z" })),
        react_1.default.createElement("symbol", { id: "bookmark", viewBox: "0 0 512 512" },
            react_1.default.createElement("path", { d: "M416.667,0H95.334c-8.284,0-15,6.716-15,15v482c0,6.067,3.655,11.536,9.26,13.858c1.856,0.769,3.805,1.142,5.737,1.142\r\n          c3.903,0,7.74-1.523,10.609-4.394l150.063-150.062L406.06,507.606c4.29,4.291,10.741,5.573,16.347,3.252\r\n          c5.605-2.322,9.26-7.791,9.26-13.858V15C431.667,6.716,424.952,0,416.667,0z" })),
        react_1.default.createElement("symbol", { id: "comments", x: "0px", y: "0px", viewBox: "0 0 550 510" },
            react_1.default.createElement("path", { d: "M459,0H51C22.95,0,0,22.95,0,51v459l102-102h357c28.05,0,51-22.95,51-51V51C510,22.95,487.05,0,459,0z M408,306H102v-51 h306V306z M408,229.5H102v-51h306V229.5z M408,153H102v-51h306V153z" })),
        react_1.default.createElement("symbol", { id: "menu", viewBox: "0 0 5 20" },
            react_1.default.createElement("circle", { cx: "2.5", cy: "2.5", r: "2.5" }),
            react_1.default.createElement("circle", { cx: "2.5", cy: "10", r: "2.5" }),
            react_1.default.createElement("circle", { cx: "2.5", cy: "17.5", r: "2.5" })),
        react_1.default.createElement("symbol", { id: "save", viewBox: "0 0 426.667 420" },
            react_1.default.createElement("path", { d: "M42.667,85.333H0V384c0,23.573,19.093,42.667,42.667,42.667h298.667V384H42.667V85.333z" }),
            react_1.default.createElement("path", { d: "M384,0H128c-23.573,0-42.667,19.093-42.667,42.667v256c0,23.573,19.093,42.667,42.667,42.667h256 c23.573,0,42.667-19.093,42.667-42.667v-256C426.667,19.093,407.573,0,384,0z M362.667,192h-85.333v85.333h-42.667V192h-85.333 v-42.667h85.333V64h42.667v85.333h85.333V192z" })),
        react_1.default.createElement("symbol", { id: "share", viewBox: "4 2 22 22" },
            react_1.default.createElement("path", { d: "M18 16.1365C17.24 16.1365 16.56 16.4378 16.04 16.9096L8.91 12.743C8.96 12.512 9 12.2811 9 12.0402C9 11.7992 8.96 11.5683 8.91 11.3373L15.96 7.21084C16.5 7.71285 17.21 8.0241 18 8.0241C19.66 8.0241 21 6.67871 21 5.01205C21 3.34538 19.66 2 18 2C16.34 2 15 3.34538 15 5.01205C15 5.25301 15.04 5.48394 15.09 5.71486L8.04 9.84137C7.5 9.33936 6.79 9.02811 6 9.02811C4.34 9.02811 3 10.3735 3 12.0402C3 13.7068 4.34 15.0522 6 15.0522C6.79 15.0522 7.5 14.741 8.04 14.239L15.16 18.4157C15.11 18.6265 15.08 18.8474 15.08 19.0683C15.08 20.6847 16.39 22 18 22C19.61 22 20.92 20.6847 20.92 19.0683C20.92 17.4518 19.61 16.1365 18 16.1365Z" }))));
}
exports.IconSprite = IconSprite;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = exports.EColor = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var text_css_1 = __importDefault(__webpack_require__(51));
var classnames_1 = __importDefault(__webpack_require__(3));
var EColor;
(function (EColor) {
    EColor["black"] = "black";
    EColor["orange"] = "orange";
    EColor["green"] = "green";
    EColor["white"] = "white";
    EColor["greyF4"] = "greyF4";
    EColor["greyF3"] = "greyF3";
    EColor["greyD9"] = "greyD9";
    EColor["greyC4"] = "greyC4";
    EColor["grey99"] = "grey99";
    EColor["grey66"] = "grey66";
})(EColor = exports.EColor || (exports.EColor = {}));
function Text(props) {
    var _a, _b, _c, _d;
    var _e = props.As, As = _e === void 0 ? 'span' : _e, _f = props.color, color = _f === void 0 ? EColor.black : _f, _g = props.bold, bold = _g === void 0 ? false : _g, children = props.children, size = props.size, mobileSize = props.mobileSize, tabletSize = props.tabletSize, desktopSize = props.desktopSize;
    var classes = classnames_1.default(text_css_1.default[color], (_a = {}, _a[text_css_1.default.bold] = bold, _a), text_css_1.default["s" + size], (_b = {}, _b[text_css_1.default["m" + mobileSize]] = mobileSize, _b), (_c = {}, _c[text_css_1.default["t" + tabletSize]] = tabletSize, _c), (_d = {}, _d[text_css_1.default["d" + desktopSize]] = desktopSize, _d));
    return react_1.default.createElement(As, { className: classes }, children);
}
exports.Text = Text;


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"s28": "text__s28--1Y0UD",
	"s20": "text__s20--1rcCY",
	"s16": "text__s16--357-u",
	"s14": "text__s14--1yRIX",
	"s12": "text__s12--2VLJ9",
	"s10": "text__s10--34Ke5",
	"black": "text__black--195ax",
	"white": "text__white--3mLIt",
	"orange": "text__orange--KcfSv",
	"green": "text__green--1DoOT",
	"greyF4": "text__greyF4--XwDMR",
	"greyF3": "text__greyF3--1d406",
	"greyD9": "text__greyD9--OiOU9",
	"greyC4": "text__greyC4--3LoNh",
	"grey99": "text__grey99--3D1fM",
	"grey66": "text__grey66--219B_",
	"bold": "text__bold--3b6dr",
	"t28": "text__t28--1l9fS",
	"t20": "text__t20--1VzKx",
	"t16": "text__t16--1X1iF",
	"t14": "text__t14--1vRqk",
	"t12": "text__t12--1xY59",
	"t10": "text__t10--3ZtjN",
	"m28": "text__m28--3V7S6",
	"m20": "text__m20--Wd-DD",
	"m16": "text__m16--18mow",
	"m14": "text__m14--1mzQ-",
	"m12": "text__m12--ote0y",
	"m10": "text__m10--2mNG-"
});


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"userBox": "UserBlock__userBox--1KsUk",
	"avatarBox": "UserBlock__avatarBox--38afy",
	"username": "UserBlock__username--3ueJ3",
	"avatarImage": "UserBlock__avatarImage--OaW4e"
});


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserData = void 0;
var react_1 = __webpack_require__(0);
var react_redux_1 = __webpack_require__(2);
var actions_1 = __webpack_require__(54);
function useUserData() {
    var data = react_redux_1.useSelector(function (state) { return state.user.data; });
    var loading = react_redux_1.useSelector(function (state) { return state.user.loading; });
    var token = react_redux_1.useSelector(function (state) { return state.common.token; });
    var dispatch = react_redux_1.useDispatch();
    react_1.useEffect(function () {
        if (!token || token === 'undefined' || token === '')
            return;
        else
            dispatch(actions_1.userDataRequestAsync(token));
    }, [token]);
    return { data: data, loading: loading };
}
exports.useUserData = useUserData;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDataRequestAsync = exports.userDataRequestError = exports.userDataRequestSuccess = exports.userDataRequest = void 0;
var axios_1 = __importDefault(__webpack_require__(5));
var const_1 = __webpack_require__(7);
exports.userDataRequest = function () {
    return {
        type: const_1.GET_USER_DATA,
    };
};
exports.userDataRequestSuccess = function (data) {
    return {
        type: const_1.GET_USER_DATA_SUCCESS,
        data: data,
    };
};
exports.userDataRequestError = function (error) {
    return {
        type: const_1.GET_USER_DATA_ERROR,
        error: error,
    };
};
exports.userDataRequestAsync = function (token) { return function (dispatch) {
    dispatch(exports.userDataRequest());
    axios_1.default
        .get('https://oauth.reddit.com/api/v1/me', {
        headers: { Authorization: "bearer " + token },
    })
        .then(function (resp) {
        var userData = resp.data;
        dispatch(exports.userDataRequestSuccess({
            name: userData.name,
            iconImg: userData.icon_img,
        }));
    })
        .catch(function (error) {
        console.log(error);
        dispatch(exports.userDataRequestError(error));
    });
}; };


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(56), exports);


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loading = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var Text_1 = __webpack_require__(4);
function Loading() {
    return (react_1.default.createElement(Text_1.Text, { size: 16, color: Text_1.EColor.grey99 }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430.."));
}
exports.Loading = Loading;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(58), exports);


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadTitle = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var threadtitle_css_1 = __importDefault(__webpack_require__(59));
function ThreadTitle() {
    return react_1.default.createElement("h1", { className: threadtitle_css_1.default.threadTitle }, "Thread Title");
}
exports.ThreadTitle = ThreadTitle;


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"threadTitle": "threadtitle__threadTitle--1uMoM"
});


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(61), exports);


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var content_css_1 = __importDefault(__webpack_require__(62));
function Content(_a) {
    var children = _a.children;
    return react_1.default.createElement("div", { className: content_css_1.default.content }, children);
}
exports.Content = Content;


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"content": "content__content--3z6rw"
});


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(64), exports);


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardsList = void 0;
var react_1 = __importStar(__webpack_require__(0));
var Card_1 = __webpack_require__(65);
var Icon_1 = __webpack_require__(1);
var Dropdown_1 = __webpack_require__(13);
var GenericList_1 = __webpack_require__(14);
var classnames_1 = __importDefault(__webpack_require__(3));
var cardslist_css_1 = __importDefault(__webpack_require__(101));
var usePostData_1 = __webpack_require__(102);
function CardsList() {
    var _a = usePostData_1.usePostData(), contextData = _a.contextData, loading = _a.loading;
    var _b = react_1.default.useState(contextData), data = _b[0], setData = _b[1];
    var _c = react_1.default.useState(''), openedMenuId = _c[0], setOpenedMenuId = _c[1];
    react_1.useEffect(function () {
        setData(contextData);
        contextData.forEach(function (_a) {
            var id = _a.id, karmaValue = _a.karmaValue;
            return setKarmaValue(id, karmaValue);
        });
    }, [contextData]);
    var _d = react_1.default.useState([]), bookmarks = _d[0], setBookmarks = _d[1];
    var _e = react_1.default.useState({}), karmaValues = _e[0], setKarmaValues = _e[1];
    var setKarmaValue = function (id, value) {
        setKarmaValues(function (prevState) {
            var _a;
            return (__assign(__assign({}, prevState), (_a = {}, _a[id] = value, _a)));
        });
    };
    var moveHandler = function (id, type) {
        switch (type) {
            case 'В самый верх': {
                setData(function (prev) { return __spreadArrays(prev.filter(function (item) { return item.id === id; }), prev.filter(function (item) { return item.id !== id; })); });
                break;
            }
            case 'В самый низ': {
                setData(function (prev) { return __spreadArrays(prev.filter(function (item) { return id !== item.id; }), prev.filter(function (item) { return id === item.id; })); });
                break;
            }
            case 'Поднять': {
                var index_1 = data.map(function (item) { return item.id; }).indexOf(id);
                if (index_1 > 0)
                    setData(function (prev) { return __spreadArrays(prev.filter(function (item, i) { return i < index_1 - 1; }), [
                        prev[index_1],
                        prev[index_1 - 1]
                    ], prev.filter(function (item, i) { return i > index_1; })); });
                break;
            }
            case 'Опустить': {
                var index_2 = data.map(function (item) { return item.id; }).indexOf(id);
                if (index_2 < data.length - 1)
                    setData(function (prev) { return __spreadArrays(prev.filter(function (item, i) { return i < index_2; }), [
                        prev[index_2 + 1],
                        prev[index_2]
                    ], prev.filter(function (item, i) { return i > index_2 + 1; })); });
                break;
            }
        }
    };
    var hiddenCard = function (id) {
        setData(function (prev) { return prev.filter(function (item) { return item.id !== id; }); });
    };
    var changeBookmark = function (id, type) {
        if (type === 'add')
            setBookmarks(function (prev) { return __spreadArrays(prev, [id]); });
        else if (type === 'delete')
            setBookmarks(function (prev) { return prev.filter(function (bookmarksId) { return bookmarksId !== id; }); });
    };
    var getBookmarksList = function () {
        var listData = [];
        bookmarks.map(function (id) {
            var findData = data.find(function (itemData) { return itemData.id === id; });
            if (findData)
                listData.push({
                    id: findData.id.toString(),
                    text: findData.title,
                    As: 'div',
                });
        });
        return listData;
    };
    var classesBookmarksList = classnames_1.default(cardslist_css_1.default.bookmarksList);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        bookmarks.length !== 0 && (react_1.default.createElement(Dropdown_1.Dropdown, { nodeId: "dropdown-bookmarks", button: react_1.default.createElement(Icon_1.Icon, { icon: "bookmark", size: 20, counter: bookmarks.length, className: cardslist_css_1.default.bookmarks }), childrenClassName: classesBookmarksList },
            react_1.default.createElement(GenericList_1.GenericList, { list: getBookmarksList() }))),
        react_1.default.createElement("ul", { className: cardslist_css_1.default.cardsList }, data.map(function (dataCard) { return (react_1.default.createElement(Card_1.Card, __assign({}, dataCard, { key: dataCard.id, hiddenCard: hiddenCard, moveHandler: moveHandler, changeBookmark: changeBookmark, inBookmarks: bookmarks.includes(dataCard.id), karmaValue: karmaValues[dataCard.id], setKarmaValue: function (id, value) {
                return setKarmaValue(id, value);
            }, openedMenuId: openedMenuId, setOpenedMenuId: setOpenedMenuId }))); }))));
}
exports.CardsList = CardsList;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(66), exports);


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var card_css_1 = __importDefault(__webpack_require__(67));
var TextContent_1 = __webpack_require__(68);
var Preview_1 = __webpack_require__(88);
var Menu_1 = __webpack_require__(91);
var Controls_1 = __webpack_require__(98);
var Icon_1 = __webpack_require__(1);
function Card(_a) {
    var id = _a.id, url = _a.url, title = _a.title, preview = _a.preview, time = _a.time, author = _a.author, karmaValue = _a.karmaValue, commentsValue = _a.commentsValue, moveHandler = _a.moveHandler, setKarmaValue = _a.setKarmaValue, hiddenCard = _a.hiddenCard, changeBookmark = _a.changeBookmark, inBookmarks = _a.inBookmarks, openedMenuId = _a.openedMenuId, setOpenedMenuId = _a.setOpenedMenuId;
    return (react_1.default.createElement("li", { className: card_css_1.default.card, key: id },
        inBookmarks && (react_1.default.createElement(Icon_1.Icon, { icon: "bookmark", size: 16, className: card_css_1.default.bookmark, onClick: function () { return changeBookmark(id, 'delete'); } })),
        react_1.default.createElement(TextContent_1.TextContent, { author: author, title: title, time: time, url: url }),
        react_1.default.createElement(Preview_1.Preview, { preview: preview }),
        react_1.default.createElement(Menu_1.Menu, { setOpenedMenuId: setOpenedMenuId, openedMenuId: openedMenuId, moveHandler: moveHandler, hiddenCard: hiddenCard, addBookmark: function (id) { return changeBookmark(id, 'add'); }, cardId: id }),
        react_1.default.createElement(Controls_1.Controls, { commentsValue: commentsValue, karmaValue: karmaValue, setKarmaValue: function (value) { return setKarmaValue(id, value); } })));
}
exports.Card = Card;


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"card": "card__card--fbpLh",
	"show": "card__show--1vAA8",
	"bookmark": "card__bookmark--4ftMu",
	"appear": "card__appear--9yP2F"
});


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(69), exports);


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextContent = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var moment_1 = __importDefault(__webpack_require__(70));
var textContent_css_1 = __importDefault(__webpack_require__(71));
var Title_1 = __webpack_require__(72);
function TextContent(_a) {
    var author = _a.author, _b = _a.time, time = _b === void 0 ? new Date() : _b, title = _a.title, url = _a.url;
    var name = author.name, avatar = author.avatar, href = author.href;
    return (react_1.default.createElement("div", { className: textContent_css_1.default.textContent },
        react_1.default.createElement("div", { className: textContent_css_1.default.metaData },
            react_1.default.createElement("div", { className: textContent_css_1.default.userLink },
                react_1.default.createElement("img", { className: textContent_css_1.default.avatar, src: avatar, alt: "avatar" }),
                react_1.default.createElement("a", { href: href, className: textContent_css_1.default.userName }, name)),
            react_1.default.createElement("span", { className: textContent_css_1.default.createdAt },
                react_1.default.createElement("span", { className: textContent_css_1.default.publishedLabel },
                    react_1.default.createElement("span", null, " published "),
                    moment_1.default(time.toString()).fromNow()),
                react_1.default.createElement("span", { className: textContent_css_1.default.publishedWithoutLabel }, moment_1.default(time.toString()).format('DD MMMM YYYY, HH:mm')))),
        react_1.default.createElement(Title_1.Title, { title: title, url: url })));
}
exports.TextContent = TextContent;


/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"textContent": "textContent__textContent--1_vTF",
	"metaData": "textContent__metaData--2tYOb",
	"userLink": "textContent__userLink--vF1IG",
	"avatar": "textContent__avatar--1Qyku",
	"userName": "textContent__userName--2D3tW",
	"createdAt": "textContent__createdAt--2UBLv",
	"publishedLabel": "textContent__publishedLabel--ra0GI",
	"publishedWithoutLabel": "textContent__publishedWithoutLabel--vibNI"
});


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = void 0;
var Title_1 = __webpack_require__(73);
Object.defineProperty(exports, "Title", { enumerable: true, get: function () { return Title_1.Title; } });


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = void 0;
var react_1 = __importStar(__webpack_require__(0));
var Post_1 = __webpack_require__(74);
var title_css_1 = __importDefault(__webpack_require__(87));
function Title(_a) {
    var title = _a.title, url = _a.url;
    var _b = react_1.useState(false), isModalOpened = _b[0], setIsModalOpened = _b[1];
    return (react_1.default.createElement("h2", { className: title_css_1.default.title },
        react_1.default.createElement("button", { className: title_css_1.default.postLink, onClick: function () {
                setIsModalOpened(true);
            } }, title),
        isModalOpened && (react_1.default.createElement(Post_1.Post, { title: title, text: 'Not have to worry about money.\nIm tired of every decision I make revolving around money...\n"Can I afford it?"\n"What would I have to compromise?"\n"What happens is I mess up and cant afford it again?"\n"How long will it take to save?"\n"Do I have to skip food for several days again?"', onClose: function () { return setIsModalOpened(false); } }))));
}
exports.Title = Title;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
var Post_1 = __webpack_require__(75);
Object.defineProperty(exports, "Post", { enumerable: true, get: function () { return Post_1.Post; } });


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
var react_1 = __importStar(__webpack_require__(0));
var react_dom_1 = __importDefault(__webpack_require__(11));
var CommentsList_1 = __webpack_require__(76);
var CommentForm_1 = __webpack_require__(12);
var Icon_1 = __webpack_require__(1);
var Text_1 = __webpack_require__(4);
var post_css_1 = __importDefault(__webpack_require__(86));
function Post(_a) {
    var title = _a.title, text = _a.text, onClose = _a.onClose;
    var ref = react_1.useRef(null);
    react_1.useEffect(function () {
        function handleClick(event) {
            var _a;
            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target)))
                onClose();
        }
        document.addEventListener('click', handleClick);
        return function () { return document.removeEventListener('click', handleClick); };
    }, []);
    var node = document.querySelector('#modal-root');
    if (!node)
        return null;
    return react_dom_1.default.createPortal(react_1.default.createElement("div", { className: post_css_1.default.postContainer, ref: ref },
        react_1.default.createElement(Text_1.Text, { As: 'h3', size: 20 }, title),
        react_1.default.createElement(Icon_1.Icon, { As: "button", icon: "close", className: post_css_1.default.close, size: 16, onClick: onClose }),
        react_1.default.createElement(Text_1.Text, { size: 14 }, text),
        react_1.default.createElement(CommentForm_1.CommentForm, null),
        react_1.default.createElement(CommentsList_1.CommentsList, null)), node);
}
exports.Post = Post;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsList = void 0;
var CommentsList_1 = __webpack_require__(77);
Object.defineProperty(exports, "CommentsList", { enumerable: true, get: function () { return CommentsList_1.CommentsList; } });


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsList = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var Comment_1 = __webpack_require__(78);
var commentsList_css_1 = __importDefault(__webpack_require__(85));
function CommentsList() {
    return (react_1.default.createElement("div", { className: commentsList_css_1.default.commentsList },
        react_1.default.createElement(Comment_1.Comment, { commentsList: ['Текст комментария текст комментария'] }),
        react_1.default.createElement(Comment_1.Comment, null),
        react_1.default.createElement(Comment_1.Comment, null)));
}
exports.CommentsList = CommentsList;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
var Comment_1 = __webpack_require__(79);
Object.defineProperty(exports, "Comment", { enumerable: true, get: function () { return Comment_1.Comment; } });


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
var react_1 = __importStar(__webpack_require__(0));
var CommentForm_1 = __webpack_require__(12);
var comment_css_1 = __importDefault(__webpack_require__(84));
function Comment(_a) {
    var commentsList = _a.commentsList;
    var _b = react_1.useState(false), commentFormIsOpen = _b[0], setCommentFormState = _b[1];
    function changeHandlerCommentFormState() {
        setCommentFormState(function (prev) { return !prev; });
    }
    return (react_1.default.createElement("div", { className: comment_css_1.default.commentBlock },
        react_1.default.createElement("div", null, "\u0422\u0435\u043A\u0441\u0442 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F \u0422\u0435\u043A\u0441\u0442 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F \u0422\u0435\u043A\u0441\u0442 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F \u0422\u0435\u043A\u0441\u0442 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F \u0422\u0435\u043A\u0441\u0442 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F \u0422\u0435\u043A\u0441\u0442 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F \u0422\u0435\u043A\u0441\u0442 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F \u0422\u0435\u043A\u0441\u0442 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F"),
        react_1.default.createElement("div", { className: comment_css_1.default.buttonsBlock },
            react_1.default.createElement("button", { className: comment_css_1.default.button, onClick: changeHandlerCommentFormState }, "Reply")),
        commentFormIsOpen && react_1.default.createElement(CommentForm_1.CommentForm, { type: "reply" }),
        commentsList && commentsList.length !== 0 && react_1.default.createElement(Comment, null)));
}
exports.Comment = Comment;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentForm = void 0;
var react_1 = __importStar(__webpack_require__(0));
var react_redux_1 = __webpack_require__(2);
var actions_1 = __webpack_require__(10);
var CommentFormControlled_1 = __webpack_require__(81);
function CommentForm(_a) {
    var type = _a.type;
    var dispatch = react_redux_1.useDispatch();
    var _b = type === 'reply'
        ? react_1.useState('')
        : [
            react_redux_1.useSelector(function (state) { return state.common.commentText; }),
            function (val) {
                dispatch(actions_1.updateComment(val));
            },
        ], value = _b[0], onChange = _b[1];
    function handleChange(event) {
        onChange(event.target.value);
    }
    function handleSubmit() {
        console.log('Submit: ', value);
    }
    react_1.useEffect(function () {
        if (type === 'reply')
            onChange('Михаил Рогов, ');
    }, []);
    return (react_1.default.createElement(CommentFormControlled_1.CommentFormControlled, { value: value, buttonText: type === 'reply' ? 'Reply' : 'Comment', onChange: handleChange, onSubmit: handleSubmit }));
}
exports.CommentForm = CommentForm;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentFormControlled = void 0;
var react_1 = __importStar(__webpack_require__(0));
var formik_1 = __webpack_require__(82);
var commentForm_css_1 = __importDefault(__webpack_require__(83));
function CommentFormControlled(_a) {
    var value = _a.value, buttonText = _a.buttonText, onChange = _a.onChange, onSubmit = _a.onSubmit;
    var ref = react_1.default.useRef(null);
    react_1.useEffect(function () {
        var _a;
        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus();
    });
    return (react_1.default.createElement("div", { className: commentForm_css_1.default.form },
        react_1.default.createElement(formik_1.Formik, { initialValues: { comment: value }, onSubmit: onSubmit, className: commentForm_css_1.default.form },
            react_1.default.createElement(formik_1.Form, null,
                react_1.default.createElement("label", { htmlFor: "comment" }, "Comment"),
                react_1.default.createElement(formik_1.Field, { value: value, name: "comment", type: "text", onChange: onChange, innerRef: ref }),
                react_1.default.createElement("div", { className: commentForm_css_1.default.buttonsBlock },
                    react_1.default.createElement("button", { type: "submit", className: commentForm_css_1.default.button }, buttonText))))));
}
exports.CommentFormControlled = CommentFormControlled;


/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"form": "commentForm__form--3M5MZ",
	"buttonsBlock": "commentForm__buttonsBlock--1TEkV",
	"button": "commentForm__button--24BI0"
});


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"commentBlock": "comment__commentBlock--3aK1p",
	"buttonsBlock": "comment__buttonsBlock--2u_zM",
	"button": "comment__button--bo_sv"
});


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"commentsList": "commentsList__commentsList--3sQuN"
});


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"postContainer": "post__postContainer--u_V76",
	"close": "post__close--3TG_d"
});


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"title": "title__title--3jzcC",
	"postLink": "title__postLink--sYP5M"
});


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(89), exports);


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preview = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var preview_css_1 = __importDefault(__webpack_require__(90));
function Preview(_a) {
    var preview = _a.preview;
    return (react_1.default.createElement("div", { className: preview_css_1.default.preview },
        react_1.default.createElement("img", { className: preview_css_1.default.previewImg, src: preview })));
}
exports.Preview = Preview;


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"preview": "preview__preview--1drxs",
	"previewImg": "preview__previewImg--2ucf0"
});


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(92), exports);


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var menu_css_1 = __importDefault(__webpack_require__(93));
var Icon_1 = __webpack_require__(1);
var Dropdown_1 = __webpack_require__(13);
var GenericList_1 = __webpack_require__(14);
var merge_1 = __webpack_require__(97);
var LIST = [
    { id: '0', text: 'Поднять' },
    { id: '1', text: 'Опустить' },
    { id: '2', text: 'В самый верх' },
    { id: '3', text: 'В самый низ' },
];
var LIST2 = [
    { id: '0', text: 'Скрыть', value: 'higgen', icon: 'block' },
    { id: '1', text: 'В закладки', value: 'bookmark', icon: 'bookmark' },
];
function Menu(_a) {
    var moveHandler = _a.moveHandler, hiddenCard = _a.hiddenCard, addBookmark = _a.addBookmark, cardId = _a.cardId, openedMenuId = _a.openedMenuId, setOpenedMenuId = _a.setOpenedMenuId;
    var listDropdown = {
        Moved: LIST,
        Operations: LIST2,
    };
    var handleItemClick = function (id, text, header, cardId) {
        if (header === 'Moved') {
            moveHandler(cardId, text);
        }
        else if (header === 'Operations') {
            if (text === LIST2[0].text) {
                hiddenCard(cardId);
            }
            else {
                addBookmark(cardId);
            }
        }
    };
    return (react_1.default.createElement("div", { className: menu_css_1.default.menu, id: "dropdown-menu--" + cardId, onClick: function () { return setOpenedMenuId(cardId); } },
        react_1.default.createElement(Dropdown_1.Dropdown, { nodeId: "dropdown-menu--" + cardId, button: react_1.default.createElement(Icon_1.Icon, { As: "button", icon: "menu", size: 20, className: menu_css_1.default.menuButton }) }, cardId === openedMenuId &&
            Object.entries(listDropdown).map(function (_a) {
                var header = _a[0], list = _a[1];
                return (react_1.default.createElement("div", { key: header, className: menu_css_1.default.menuGroup },
                    react_1.default.createElement("span", { className: menu_css_1.default.menuGroupHeader }, header),
                    react_1.default.createElement(GenericList_1.GenericList, { header: header, list: list.map(merge_1.merge({
                            onClick: function (id, text) {
                                return handleItemClick(id, text, header, cardId);
                            },
                            className: menu_css_1.default.menuItem,
                        })) })));
            }))));
}
exports.Menu = Menu;


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"menu": "menu__menu--1X1Mc",
	"menuButton": "menu__menuButton--1zAaD",
	"menuItem": "menu__menuItem--1AQzg",
	"menuGroup": "menu__menuGroup--ZaCDQ",
	"menuGroupHeader": "menu__menuGroupHeader--1mH9x"
});


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var react_dom_1 = __importDefault(__webpack_require__(11));
var classnames_1 = __importDefault(__webpack_require__(3));
var dropdown_css_1 = __importDefault(__webpack_require__(95));
var NOOP = function () { };
function Dropdown(_a) {
    var _b;
    var _c = _a.nodeId, nodeId = _c === void 0 ? '' : _c, button = _a.button, children = _a.children, isOpen = _a.isOpen, _d = _a.onOpen, onOpen = _d === void 0 ? NOOP : _d, _e = _a.onClose, onClose = _e === void 0 ? NOOP : _e, childrenClassName = _a.childrenClassName;
    var _f = react_1.default.useState(isOpen), isDropdownOpen = _f[0], setIsDropdownOpen = _f[1];
    react_1.default.useEffect(function () { return setIsDropdownOpen(isOpen); }, [isOpen]);
    react_1.default.useEffect(function () { return (isDropdownOpen ? onOpen() : onClose()); }, [
        isDropdownOpen,
    ]);
    var handleOpen = function () {
        if (isOpen === undefined) {
            setIsDropdownOpen(!isDropdownOpen);
        }
    };
    if (!nodeId)
        return null;
    var node = document.getElementById(nodeId) || document.getElementById('modal-root');
    if (!node)
        return null;
    return (react_1.default.createElement("div", { className: dropdown_css_1.default.container, id: nodeId },
        react_1.default.createElement("div", { onClick: handleOpen }, button),
        isDropdownOpen &&
            react_dom_1.default.createPortal(react_1.default.createElement("div", { className: classnames_1.default(dropdown_css_1.default.listContainer, (_b = {},
                    _b["" + childrenClassName] = childrenClassName,
                    _b)) },
                react_1.default.createElement("div", { className: dropdown_css_1.default.list, onClick: function () { return setIsDropdownOpen(false); } }, children)), node)));
}
exports.Dropdown = Dropdown;


/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"container": "dropdown__container--1PHA3",
	"listContainer": "dropdown__listContainer--1PKIn",
	"list": "dropdown__list--L3_uZ"
});


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericList = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var Icon_1 = __webpack_require__(1);
var Noop = function () { };
function GenericList(_a) {
    var header = _a.header, list = _a.list, className = _a.className;
    return (react_1.default.createElement("div", { className: className ? className : '' }, list.map(function (_a) {
        var _b = _a.As, As = _b === void 0 ? 'div' : _b, text = _a.text, value = _a.value, icon = _a.icon, onClick = _a.onClick, className = _a.className, id = _a.id, href = _a.href;
        return (react_1.default.createElement(As, { key: header ? header + "-" + id : id, href: href, className: className, onClick: onClick ? function () { return onClick(id, text); } : Noop },
            icon && Icon_1.EIcon.hasOwnProperty(icon) ? (react_1.default.createElement(Icon_1.Icon, { icon: icon, size: 16 })) : null,
            text));
    })));
}
exports.GenericList = GenericList;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
// Объединение полей двух объектов
function merge(obj1) {
    return function (obj2) { return (__assign(__assign({}, obj1), obj2)); };
}
exports.merge = merge;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(99), exports);


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controls = void 0;
var react_1 = __importDefault(__webpack_require__(0));
var controls_css_1 = __importDefault(__webpack_require__(100));
var Icon_1 = __webpack_require__(1);
function Controls(_a) {
    var karmaValue = _a.karmaValue, setKarmaValue = _a.setKarmaValue, commentsValue = _a.commentsValue;
    return (react_1.default.createElement("div", { className: controls_css_1.default.controls },
        react_1.default.createElement("div", { className: controls_css_1.default.karmaCounter },
            react_1.default.createElement(Icon_1.Icon, { icon: "arrow", As: "button", className: controls_css_1.default.up, onClick: function () { return setKarmaValue(karmaValue + 1); } }),
            react_1.default.createElement("span", { className: controls_css_1.default.karmaValue }, karmaValue > 1000 ? Math.floor(karmaValue / 1000) + 'K' : karmaValue),
            react_1.default.createElement(Icon_1.Icon, { icon: "arrow", As: "button", className: controls_css_1.default.down, onClick: function () { return setKarmaValue(karmaValue - 1); } })),
        react_1.default.createElement(Icon_1.Icon, { icon: "comments", As: "button", className: controls_css_1.default.commentsButton, counter: commentsValue }),
        react_1.default.createElement("div", { className: controls_css_1.default.actions },
            react_1.default.createElement(Icon_1.Icon, { icon: "share", As: "button", className: controls_css_1.default.shareButton }),
            react_1.default.createElement(Icon_1.Icon, { icon: "save", As: "button", className: controls_css_1.default.saveButton }))));
}
exports.Controls = Controls;


/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"controls": "controls__controls--1d2gg",
	"karmaCounter": "controls__karmaCounter--2_dA0",
	"karmaValue": "controls__karmaValue--3pGmE",
	"down": "controls__down--RKs-G",
	"commentsButton": "controls__commentsButton--rf4n9",
	"commentsNumber": "controls__commentsNumber--1QEjv",
	"shareButton": "controls__shareButton--2Abnl",
	"saveButton": "controls__saveButton--F11mr",
	"actions": "controls__actions--iNBhY",
	"up": "controls__up--1zlqY"
});


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Exports
/* harmony default export */ __webpack_exports__["default"] = ({
	"cardslist": "cardslist__cardslist--1QCbK",
	"bookmarks": "cardslist__bookmarks--JxDBq",
	"bookmarksList": "cardslist__bookmarksList--3_Zkt"
});


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.usePostData = void 0;
var react_1 = __webpack_require__(0);
var react_redux_1 = __webpack_require__(2);
var actions_1 = __webpack_require__(103);
function usePostData() {
    var data = react_redux_1.useSelector(function (state) { return state.post.data; });
    var loading = react_redux_1.useSelector(function (state) { return state.post.loading; });
    var dispatch = react_redux_1.useDispatch();
    react_1.useEffect(function () {
        dispatch(actions_1.getPostData());
    }, []);
    return { contextData: data, loading: loading };
}
exports.usePostData = usePostData;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostData = exports.postRequestError = exports.postRequestSuccess = exports.postRequest = void 0;
var axios_1 = __importDefault(__webpack_require__(5));
var const_1 = __webpack_require__(9);
exports.postRequest = function () {
    return {
        type: const_1.GET_POST_DATA,
    };
};
exports.postRequestSuccess = function (data) {
    return {
        type: const_1.GET_POST_DATA_SUCCESS,
        data: data,
    };
};
exports.postRequestError = function (error) {
    return {
        type: const_1.GET_POST_DATA_ERROR,
        error: error,
    };
};
exports.getPostData = function () { return function (dispatch) {
    dispatch(exports.postRequest());
    axios_1.default
        .get('https://www.reddit.com/r/popular/best.json?sr_detail=true', {
        headers: {
            'Content-type': "application/json",
        },
    })
        .then(function (resp) {
        var formattedPostData = resp.data.data.children.map(function (_a) {
            var data = _a.data;
            var _b = data || {}, _c = _b.id, id = _c === void 0 ? '' : _c, _d = _b.url, url = _d === void 0 ? '' : _d, _e = _b.title, title = _e === void 0 ? '' : _e, _f = _b.author, author = _f === void 0 ? '' : _f, _g = _b.ups, ups = _g === void 0 ? 0 : _g, _h = _b.num_comments, num_comments = _h === void 0 ? 0 : _h, _j = _b.sr_detail, sr_detail = _j === void 0 ? {
                icon_img: '',
                header_img: '',
                created_utc: 0,
            } : _j;
            return {
                id: id,
                url: url,
                title: title,
                time: new Date(new Date().getTime() - sr_detail.created_utc),
                preview: sr_detail.header_img,
                karmaValue: ups,
                commentValue: num_comments,
                author: {
                    name: author,
                    href: '#user-url',
                    avatar: sr_detail.icon_img,
                },
            };
        });
        dispatch(exports.postRequestSuccess(formattedPostData));
    })
        .catch(function (error) {
        console.log(error);
        dispatch(exports.postRequestError(error));
    });
}; };


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.indexTemplate = void 0;
exports.indexTemplate = function (content, token) { return "\n<!DOCTYPE html>\n<html lang=\"ru\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <title>Skillbox</title>\n    <script src=\"/static/client.js\" type=\"application/javascript\"></script>\n    <script>  window.__token__ = '" + token + "' </script>\n  </head>\n  <body>\n    <div id=\"react-root\">" + content + "</div>\n    <div id=\"modal-root\"></div>\n  </body>\n</html>\n"; };


/***/ })
/******/ ]);