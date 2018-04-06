(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("material-ui/AppBar"));
	else if(typeof define === 'function' && define.amd)
		define(["material-ui/AppBar"], factory);
	else if(typeof exports === 'object')
		exports["app"] = factory(require("material-ui/AppBar"));
	else
		root["app"] = factory(root["material-ui/AppBar"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_29__) {
return webpackJsonp_name_([0],{

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _class;

var _ = __webpack_require__(2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _theme = __webpack_require__(1);

var _initialState = __webpack_require__(6);

var _testReducer = __webpack_require__(12);

var _home = __webpack_require__(25);

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = (_dec = (0, _.DimApp)({
  pages: [{ component: _home2.default, children: [] }],
  config: {
    theme: _theme.defaultTheme,
    locale: 'en',
    serviceWorker: '/dimension/worker.js',
    state: {
      initialState: _initialState.initialState,
      reducers: {
        test: _testReducer.test
      }
    }
  }
}), _dec(_class = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
  }

  return App;
}(_react.Component)) || _class);
exports.default = App;

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.test = test;

var _initialState = __webpack_require__(6);

function test() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case 'SET_TEST':
      return Object.assign({}, state, {
        test: action.test
      });
    default:
      return state;
  }
}

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _core = __webpack_require__(4);

var _AppBar = __webpack_require__(29);

var _AppBar2 = _interopRequireDefault(_AppBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = (_dec = (0, _core.DimPage)({
  path: '/dimension'
}), _dec2 = (0, _core.DimPropTypes)({
  test: _react.PropTypes.string.isRequired
}), _dec3 = (0, _core.DimState)(['test']), _dec4 = (0, _core.DimStyles)({
  appbar: {
    position: 'fixed',
    width: 'auto',
    height: '65px',
    right: '0px',
    left: '0px'
  }
}), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = function (_Component) {
  _inherits(HomePage, _Component);

  function HomePage(props) {
    _classCallCheck(this, HomePage);

    return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, props));
  }

  _createClass(HomePage, [{
    key: 'render',
    value: function render() {
      console.log(this.props.test);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_AppBar2.default, {
          style: this.styles.appbar,
          title: this.props.test
        })
      );
    }
  }]);

  return HomePage;
}(_react.Component)) || _class) || _class) || _class) || _class);
exports.default = HomePage;

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

module.exports = require("material-ui/AppBar");

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ = __webpack_require__(2);

var _appMain = __webpack_require__(11);

var _appMain2 = _interopRequireDefault(_appMain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
  (0, _.bootstrap)(_react2.default.createElement(_appMain2.default, null), document.getElementById('app'));
};

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var initialState = exports.initialState = { test: 'test' };

/***/ })

},[36]);
});