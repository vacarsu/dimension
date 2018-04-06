(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-redux"), require("react-router-dom"), require("redux"), require("history/createBrowserHistory"), require("material-ui/styles/MuiThemeProvider"), require("material-ui/styles/getMuiTheme"), require("react-dom"), require("react-intl"), require("react-router-redux"), require("react-tap-event-plugin"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-redux", "react-router-dom", "redux", "history/createBrowserHistory", "material-ui/styles/MuiThemeProvider", "material-ui/styles/getMuiTheme", "react-dom", "react-intl", "react-router-redux", "react-tap-event-plugin"], factory);
	else if(typeof exports === 'object')
		exports["vendors"] = factory(require("react"), require("react-redux"), require("react-router-dom"), require("redux"), require("history/createBrowserHistory"), require("material-ui/styles/MuiThemeProvider"), require("material-ui/styles/getMuiTheme"), require("react-dom"), require("react-intl"), require("react-router-redux"), require("react-tap-event-plugin"));
	else
		root["vendors"] = factory(root["react"], root["react-redux"], root["react-router-dom"], root["redux"], root["history/createBrowserHistory"], root["material-ui/styles/MuiThemeProvider"], root["material-ui/styles/getMuiTheme"], root["react-dom"], root["react-intl"], root["react-router-redux"], root["react-tap-event-plugin"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_28__, __WEBPACK_EXTERNAL_MODULE_30__, __WEBPACK_EXTERNAL_MODULE_31__, __WEBPACK_EXTERNAL_MODULE_32__, __WEBPACK_EXTERNAL_MODULE_33__, __WEBPACK_EXTERNAL_MODULE_34__, __WEBPACK_EXTERNAL_MODULE_35__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp_name_"];
/******/ 	window["webpackJsonp_name_"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length)
/******/ 			resolves.shift()();
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return Promise.resolve();

/******/ 		// an Promise means "currently loading".
/******/ 		if(installedChunks[chunkId]) {
/******/ 			return installedChunks[chunkId][2];
/******/ 		}
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;

/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + chunkId + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};

/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunks[chunkId][2] = promise;

/******/ 		head.appendChild(script);
/******/ 		return promise;
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colors = __webpack_require__(23);

Object.keys(_colors).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _colors[key];
    }
  });
});

var _defaultTheme = __webpack_require__(24);

Object.keys(_defaultTheme).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _defaultTheme[key];
    }
  });
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = __webpack_require__(4);

Object.keys(_core).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _core[key];
    }
  });
});

var _push = __webpack_require__(5);

Object.keys(_push).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _push[key];
    }
  });
});

var _state = __webpack_require__(10);

Object.keys(_state).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _state[key];
    }
  });
});

var _theme = __webpack_require__(1);

Object.keys(_theme).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _theme[key];
    }
  });
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.state = undefined;
exports.store = store;

var _redux = __webpack_require__(9);

var _reducers = __webpack_require__(22);

var state = exports.state = undefined;

function store(reducer, initialState) {
  return exports.state = state = (0, _redux.createStore)(reducer, initialState);
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _app = __webpack_require__(26);

Object.keys(_app).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _app[key];
    }
  });
});

var _page = __webpack_require__(27);

Object.keys(_page).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _page[key];
    }
  });
});

var _proptypes = __webpack_require__(13);

Object.keys(_proptypes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _proptypes[key];
    }
  });
});

var _render = __webpack_require__(14);

Object.keys(_render).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _render[key];
    }
  });
});

var _state = __webpack_require__(15);

Object.keys(_state).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _state[key];
    }
  });
});

var _styles = __webpack_require__(16);

Object.keys(_styles).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _styles[key];
    }
  });
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pushManager = __webpack_require__(21);

Object.keys(_pushManager).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _pushManager[key];
    }
  });
});

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _store = __webpack_require__(3);

Object.keys(_store).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _store[key];
    }
  });
});

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DimPropTypes = DimPropTypes;
/* 
  This decorator attaches attaches the supplied PropTypes to the decorated class
  ex: 
    @DimPropTypes({
      test: PropTypes.string.isRequired
    })
    class HomePage extends Component {
      constructor(props) {
        super(props);
      }
    }
*/
function DimPropTypes(propTypes) {
  return function (target) {
    target.PropTypes = propTypes;
    return target;
  };
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bootstrap = bootstrap;

var _reactDom = __webpack_require__(32);

var _reactTapEventPlugin = __webpack_require__(35);

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactTapEventPlugin2.default)();

function bootstrap(component, element) {
  (0, _reactDom.render)(component, element);
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DimState = DimState;

var _reactRedux = __webpack_require__(7);

/* 
  This decorator creates a redux container which supplies the state keys which were asked for
  ex: 
    @DimState([
      'test'
    ])
    class HomePage extends Component {
      constructor(props) {
        super(props);
      }
    }
*/
function DimState(stateKeys) {
  var select = function select(state) {
    var stateMap = {};
    stateKeys.forEach(function (key) {
      stateMap[key] = state[key];
    });
    return stateMap;
  };
  return function (target) {
    return (0, _reactRedux.connect)(select)(target);
  };
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DimStyles = DimStyles;
/* 
  This decorator attaches your styles to the class
  ex: 
    @DimStyles({
      divStyles: {
        width: '100%'
      }
    })
    export default class HomePage extends Component {
      constructor(props) {
        super(props);
      }

      render() {
        return (
          <div style={this.styles.divStyles}></div>
        )
      }
    }
*/
function DimStyles(styles) {
  return function (target) {
    target.prototype.styles = styles;
    return target;
  };
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _initializeRedux = __webpack_require__(18);

Object.keys(_initializeRedux).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _initializeRedux[key];
    }
  });
});

var _startWorker = __webpack_require__(20);

Object.keys(_startWorker).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _startWorker[key];
    }
  });
});

var _setupRoutes = __webpack_require__(19);

Object.keys(_setupRoutes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _setupRoutes[key];
    }
  });
});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializeRedux = initializeRedux;

var _redux = __webpack_require__(9);

var _store = __webpack_require__(3);

function initializeRedux(reducers, initialState) {
  var combinedReducers = (0, _redux.combineReducers)(reducers);
  return (0, _store.store)(combinedReducers, initialState);
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapChildren = mapChildren;
exports.setupRoutes = setupRoutes;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
  DEPRECATED
*/
function mapChildren(children) {
  children.map(function (child) {
    return _react2.default.createElement(_reactRouterDom.Route, { key: child.prototype.path, exact: true, path: child.prototype.path, component: child });
  });
}

/*
  DEPRECATED
*/
function setupRoutes(pages) {
  return pages.map(function (page) {
    if (page.children && page.children.length > 0) {
      return _react2.default.createElement(
        _reactRouterDom.Route,
        { key: page.component.prototype.path, exact: true, path: page.component.prototype.path, component: page.component },
        mapChildren(page.children)
      );
    } else {
      return _react2.default.createElement(_reactRouterDom.Route, { key: page.component.prototype.path, exact: true, path: page.component.prototype.path, component: page.component });
    }
  });
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startWorker = startWorker;

var _push = __webpack_require__(5);

function startWorker(worker) {
  if ('serviceWorker' in navigator && 'PushManager' in window) {
    console.log('Service Worker and Push is supported');

    navigator.serviceWorker.register(worker, { cache: 'no-cache' }).then(function (swReg) {
      console.log('Service Worker is registered', swReg);

      _push.push.manager = swReg.pushManager;
    }).catch(function (error) {
      console.error('Service Worker Error', error);
    });
  } else {
    console.warn('Push messaging is not supported');
  }
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Push = exports.Push = function Push() {
  _classCallCheck(this, Push);
};

var push = exports.push = new Push();

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addReducer = addReducer;
// DEPRECATED
var reducers = exports.reducers = [];

function addReducer(reducer) {
  reducers.push(reducer);
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var red = exports.red = {
  hue50: '#FFEBEE',
  hue100: '#FFCDD2',
  hue200: '#EF9A9A',
  hue300: '#E57373',
  hue400: '#EF5350',
  hue500: '#F44336',
  hue600: '#E53935',
  hue700: '#D32F2F',
  hue800: '#C62828',
  hue900: '#B71C1C',
  hueA100: '#FF8A80',
  hueA200: '#FF5252',
  hueA400: '#FF1744',
  hueA700: '#D50000'
};

var pink = exports.pink = {
  hue50: '#FCE4EC',
  hue100: '#F8BBD0',
  hue200: '#F48FB1',
  hue300: '#F06292',
  hue400: '#EC407A',
  hue500: '#E91E63',
  hue600: '#D81B60',
  hue700: '#C2185B',
  hue800: '#AD1457',
  hue900: '#880E4F',
  hueA100: '#FF80AB',
  hueA200: '#FF4081',
  hueA400: '#F50057',
  hueA700: '#C51162'
};

var purple = exports.purple = {
  hue50: '#F3E5F5',
  hue100: '#E1BEE7',
  hue200: '#CE93D8',
  hue300: '#BA68C8',
  hue400: '#AB47BC',
  hue500: '#9C27B0',
  hue600: '#8E24AA',
  hue700: '#7B1FA2',
  hue800: '#6A1B9A',
  hue900: '#4A148C',
  hueA100: '#EA80FC',
  hueA200: '#E040FB',
  hueA400: '#D500F9',
  hueA700: '#AA00FF'
};

var deepPurple = exports.deepPurple = {
  hue50: '#EDE7F6',
  hue100: '#D1C4E9',
  hue200: '#B39DDB',
  hue300: '#9575CD',
  hue400: '#7E57C2',
  hue500: '#673AB7',
  hue600: '#5E35B1',
  hue700: '#512DA8',
  hue800: '#4527A0',
  hue900: '#311B92',
  hueA100: '#B388FF',
  hueA200: '#7C4DFF',
  hueA400: '#651FFF',
  hueA700: '#6200EA'
};

var indigo = exports.indigo = {
  hue50: '#E8EAF6',
  hue100: '#C5CAE9',
  hue200: '#9FA8DA',
  hue300: '#7986CB',
  hue400: '#5C6BC0',
  hue500: '#3F51B5',
  hue600: '#3949AB',
  hue700: '#303F9F',
  hue800: '#283593',
  hue900: '#1A237E',
  hueA100: '#8C9EFF',
  hueA200: '#536DFE',
  hueA400: '#3D5AFE',
  hueA700: '#304FFE'
};

var blue = exports.blue = {
  hue50: '#E3F2FD',
  hue100: '#BBDEFB',
  hue200: '#90CAF9',
  hue300: '#64B5F6',
  hue400: '#42A5F5',
  hue500: '#2196F3',
  hue600: '#1E88E5',
  hue700: '#1976D2',
  hue800: '#1565C0',
  hue900: '#0D47A1',
  hueA100: '#82B1FF',
  hueA200: '#448AFF',
  hueA400: '#2979FF',
  hueA700: '#2962FF'
};

var lightBlue = exports.lightBlue = {
  hue50: '#E1F5FE',
  hue100: '#B3E5FC',
  hue200: '#81D4FA',
  hue300: '#4FC3F7',
  hue400: '#29B6F6',
  hue500: '#03A9F4',
  hue600: '#039BE5',
  hue700: '#0288D1',
  hue800: '#0277BD',
  hue900: '#01579B',
  hueA100: '#80D8FF',
  hueA200: '#40C4FF',
  hueA400: '#00B0FF',
  hueA700: '#0091EA'
};

var cyan = exports.cyan = {
  hue50: '#E0F7FA',
  hue100: '#B2EBF2',
  hue200: '#80DEEA',
  hue300: '#4DD0E1',
  hue400: '#26C6DA',
  hue500: '#00BCD4',
  hue600: '#00ACC1',
  hue700: '#0097A7',
  hue800: '#00838F',
  hue900: '#006064',
  hueA100: '#84FFFF',
  hueA200: '#18FFFF',
  hueA400: '#00E5FF',
  hueA700: '#00B8D4'
};

var teal = exports.teal = {
  hue50: '#E0F2F1',
  hue100: '#B2DFDB',
  hue200: '#80CBC4',
  hue300: '#4DB6AC',
  hue400: '#26A69A',
  hue500: '#009688',
  hue600: '#00897B',
  hue700: '#00796B',
  hue800: '#00695C',
  hue900: '#004D40',
  hueA100: '#A7FFEB',
  hueA200: '#64FFDA',
  hueA400: '#1DE9B6',
  hueA700: '#00BFA5'
};

var green = exports.green = {
  hue50: '#E8F5E9',
  hue100: '#C8E6C9',
  hue200: '#A5D6A7',
  hue300: '#81C784',
  hue400: '#66BB6A',
  hue500: '#4CAF50',
  hue600: '#43A047',
  hue700: '#388E3C',
  hue800: '#2E7D32',
  hue900: '#1B5E20',
  hueA100: '#B9F6CA',
  hueA200: '#69F0AE',
  hueA400: '#00E676',
  hueA700: '#00C853'
};

var lightGreen = exports.lightGreen = {
  hue50: '#F1F8E9',
  hue100: '#DCEDC8',
  hue200: '#C5E1A5',
  hue300: '#AED581',
  hue400: '#9CCC65',
  hue500: '#8BC34A',
  hue600: '#7CB342',
  hue700: '#689F38',
  hue800: '#558B2F',
  hue900: '#33691E',
  hueA100: '#CCFF90',
  hueA200: '#B2FF59',
  hueA400: '#76FF03',
  hueA700: '#64DD17'
};

var lime = exports.lime = {
  hue50: '#F9FBE7',
  hue100: '#F0F4C3',
  hue200: '#E6EE9C',
  hue300: '#DCE775',
  hue400: '#D4E157',
  hue500: '#CDDC39',
  hue600: '#C0CA33',
  hue700: '#AFB42B',
  hue800: '#9E9D24',
  hue900: '#827717',
  hueA100: '#F4FF81',
  hueA200: '#EEFF41',
  hueA400: '#C6FF00',
  hueA700: '#AEEA00'
};

var yellow = exports.yellow = {
  hue50: '#FFFDE7',
  hue100: '#FFF9C4',
  hue200: '#FFF59D',
  hue300: '#FFF176',
  hue400: '#FFEE58',
  hue500: '#FFEB3B',
  hue600: '#FDD835',
  hue700: '#FBC02D',
  hue800: '#F9A825',
  hue900: '#F57F17',
  hueA100: '#FFFF8D',
  hueA200: '#FFFF00',
  hueA400: '#FFEA00',
  hueA700: '#FFD600'
};

var amber = exports.amber = {
  hue50: '#FFF8E1',
  hue100: '#FFECB3',
  hue200: '#FFE082',
  hue300: '#FFD54F',
  hue400: '#FFCA28',
  hue500: '#FFC107',
  hue600: '#FFB300',
  hue700: '#FFA000',
  hue800: '#FF8F00',
  hue900: '#FF6F00',
  hueA100: '#FFE57F',
  hueA200: '#FFD740',
  hueA400: '#FFC400',
  hueA700: '#FFAB00'
};

var orange = exports.orange = {
  hue50: '#FFF3E0',
  hue100: '#FFE0B2',
  hue200: '#FFCC80',
  hue300: '#FFB74D',
  hue400: '#FFA726',
  hue500: '#FF9800',
  hue600: '#FB8C00',
  hue700: '#F57C00',
  hue800: '#EF6C00',
  hue900: '#E65100',
  hueA100: '#FFD180',
  hueA200: '#FFAB40',
  hueA400: '#FF9100',
  hueA700: '#FF6D00'
};

var deepOrange = exports.deepOrange = {
  hue50: '#FBE9E7',
  hue100: '#FFCCBC',
  hue200: '#FFAB91',
  hue300: '#FF8A65',
  hue400: '#FF7043',
  hue500: '#FF5722',
  hue600: '#F4511E',
  hue700: '#E64A19',
  hue800: '#D84315',
  hue900: '#BF360C',
  hueA100: '#FF9E80',
  hueA200: '#FF6E40',
  hueA400: '#FF3D00',
  hueA700: '#DD2C00'
};

var brown = exports.brown = {
  hue50: '#EFEBE9',
  hue100: '#D7CCC8',
  hue200: '#BCAAA4',
  hue300: '#A1887F',
  hue400: '#8D6E63',
  hue500: '#795548',
  hue600: '#6D4C41',
  hue700: '#5D4037',
  hue800: '#4E342E',
  hue900: '#3E2723'
};

var grey = exports.grey = {
  hue50: '#FAFAFA',
  hue100: '#F5F5F5',
  hue200: '#EEEEEE',
  hue300: '#E0E0E0',
  hue400: '#BDBDBD',
  hue500: '#9E9E9E',
  hue600: '#757575',
  hue700: '#616161',
  hue800: '#424242',
  hue900: '#212121'
};

var blueGrey = exports.blueGrey = {
  hue50: '#ECEFF1',
  hue100: '#CFD8DC',
  hue200: '#B0BEC5',
  hue300: '#90A4AE',
  hue400: '#78909C',
  hue500: '#607D8B',
  hue600: '#546E7A',
  hue700: '#455A64',
  hue800: '#37474F',
  hue900: '#263238'
};

var black = exports.black = '#000000';
var white = exports.white = '#FFFFFF';

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultTheme = undefined;

var _ = __webpack_require__(1);

var defaultTheme = exports.defaultTheme = {
  fontFamily: 'Noto, sans-serif',
  palette: {
    primary1Color: _.blue.hue500,
    primary2Color: _.blue.hue700,
    primary3Color: _.blue.hue800,
    accent1Color: _.pink.hueA200,
    accent2Color: _.pink.hueA100,
    accent3Color: _.pink.hueA400,
    textColor: _.black,
    alternateTextColor: _.white,
    canvasColor: _.white
  }
};

/***/ }),
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DimApp = DimApp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(8);

var _createBrowserHistory = __webpack_require__(28);

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _reactRouterRedux = __webpack_require__(34);

var _reactRedux = __webpack_require__(7);

var _MuiThemeProvider = __webpack_require__(30);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _getMuiTheme = __webpack_require__(31);

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _reactIntl = __webpack_require__(33);

var _lib = __webpack_require__(17);

var _store = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
  This decorator abstracts the react-router, redux setup, material-ui setup, and react-intl
  along with a service worker install.

  It will map the pages and build a react router from them.

  If a service worker is provided it will run the install process for that service worker.

  After setup it will attach the react render function to the decorated class.

  ex: 
    @DimApp({
      router: (
        <route path="/" component="Home" />
      ),
      config: {
        theme: defaultTheme,
        locale: 'en',
        serviceWorker: '/worker.js'
      }
    })
    class App extends Component {
      constructor(props) {
        super(props);
      }
    }
*/
function DimApp(setup) {
  return function (target) {
    if (setup.config.serviceWorker) (0, _lib.startWorker)(setup.config.serviceWorker);
    target.prototype.render = function () {
      return _react2.default.createElement(
        _MuiThemeProvider2.default,
        { muiTheme: (0, _getMuiTheme2.default)(setup.config.theme) },
        _react2.default.createElement(
          _reactIntl.IntlProvider,
          { locale: setup.config.locale },
          _react2.default.createElement(
            _reactRedux.Provider,
            {
              store: setup.config.state.store ? setup.config.state.store : (0, _lib.initializeRedux)(setup.config.state.reducers, setup.config.state.initialState)
            },
            _react2.default.createElement(
              _reactRouterDom.HashRouter,
              null,
              _react2.default.createElement(
                'div',
                null,
                setup.router,
                setup.include ? setup.include() : ""
              )
            )
          )
        )
      );
    };
    return target;
  };
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DimPage = DimPage;
/* 
  This decorator attaches the route path to the decorated classes prototype
  ex: 
    @DimPage({
      path: 'string'
    })
    class HomePage extends Component {
      constructor(props) {
        super(props);
      }
    }
*/
function DimPage(setup) {
  return function (target) {
    target.prototype.path = setup.path;
    return target;
  };
}

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("history/createBrowserHistory");

/***/ }),
/* 29 */,
/* 30 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/getMuiTheme");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("react-tap-event-plugin");

/***/ })
/******/ ]);
});