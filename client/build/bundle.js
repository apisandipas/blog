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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FETCH_POSTS = exports.FETCH_POSTS = 'fetch_posts';
var FETCH_POST = exports.FETCH_POST = 'fetch_post';

var FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = 'fetch_current_user';
var AUTH_USER = exports.AUTH_USER = 'auth_user';
var UNAUTH_USER = exports.UNAUTH_USER = 'unauth_user';
var AUTH_ERROR = exports.AUTH_ERROR = 'auth_error';

var FORGOT_PASSWORD = exports.FORGOT_PASSWORD = 'forgot_password';
var RESET_PASSWORD = exports.RESET_PASSWORD = 'reset_password';

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetPassword = exports.forgotPassword = exports.authError = exports.authUser = exports.registerUser = exports.logOut = exports.loginUser = undefined;

var _types = __webpack_require__(4);

var _isomorphicCookie = __webpack_require__(11);

var _isomorphicCookie2 = _interopRequireDefault(_isomorphicCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var loginUser = exports.loginUser = function loginUser(values) {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, _ref) {
      var api = _ref.api,
          req = _ref.req;
      var res, token;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return api.post('/api/login', values);

            case 3:
              res = _context.sent;
              token = res.data.token;

              dispatch(authUser({ token: token }));
              _isomorphicCookie2.default.save('token', token, { secure: false });
              _context.next = 13;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context['catch'](0);

              console.log('error', _context.t0);
              dispatch(authError('Bad Login Info'));

            case 13:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 9]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var logOut = exports.logOut = function logOut() {
  return function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _isomorphicCookie2.default.remove('token', { secure: false });
              dispatch({
                type: _types.UNAUTH_USER
              });

            case 2:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x4) {
      return _ref3.apply(this, arguments);
    };
  }();
};

var registerUser = exports.registerUser = function registerUser(values) {
  return function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, _ref4) {
      var api = _ref4.api,
          req = _ref4.req;
      var res;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return api.post('/api/register', values);

            case 3:
              res = _context3.sent;

              dispatch(authUser({ token: res.data.token }));
              _isomorphicCookie2.default.save('token', res.data.token, { secure: false });
              _context3.next = 12;
              break;

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3['catch'](0);

              console.log(_context3.t0);
              dispatch(authError('Bad registration info'));

            case 12:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined, [[0, 8]]);
    }));

    return function (_x5, _x6, _x7) {
      return _ref5.apply(this, arguments);
    };
  }();
};

var authUser = exports.authUser = function authUser(token) {
  return {
    type: _types.AUTH_USER,
    payload: token
  };
};

var authError = exports.authError = function authError(error) {
  return {
    type: _types.AUTH_ERROR,
    payload: error
  };
};

var forgotPassword = exports.forgotPassword = function forgotPassword(email) {
  return function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch, getState, _ref6) {
      var api = _ref6.api,
          req = _ref6.req;
      var res;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return api.post('/api/forgot-password', email);

            case 3:
              res = _context4.sent;

              dispatch({
                type: _types.FORGOT_PASSWORD,
                payload: res.data
              });
              _context4.next = 11;
              break;

            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4['catch'](0);

              console.log('error', _context4.t0);
              dispatch(authError('Something went wrong'));

            case 11:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined, [[0, 7]]);
    }));

    return function (_x8, _x9, _x10) {
      return _ref7.apply(this, arguments);
    };
  }();
};

var resetPassword = exports.resetPassword = function resetPassword(payload) {
  return function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(dispatch, getState, _ref8) {
      var api = _ref8.api,
          req = _ref8.req;
      var res;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return api.post('/api/reset-password', payload);

            case 3:
              res = _context5.sent;

              dispatch({
                type: _types.RESET_PASSWORD,
                payload: res.data
              });
              _context5.next = 11;
              break;

            case 7:
              _context5.prev = 7;
              _context5.t0 = _context5['catch'](0);

              console.log('error', _context5.t0);
              dispatch(authError('Something went wrong'));

            case 11:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, undefined, [[0, 7]]);
    }));

    return function (_x11, _x12, _x13) {
      return _ref9.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _App = __webpack_require__(23);

var _App2 = _interopRequireDefault(_App);

var _HomePage = __webpack_require__(24);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _PostPage = __webpack_require__(27);

var _PostPage2 = _interopRequireDefault(_PostPage);

var _LoginPage = __webpack_require__(28);

var _LoginPage2 = _interopRequireDefault(_LoginPage);

var _RegisterPage = __webpack_require__(29);

var _RegisterPage2 = _interopRequireDefault(_RegisterPage);

var _NotFoundPage = __webpack_require__(30);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

var _ForgotPasswordPage = __webpack_require__(31);

var _ForgotPasswordPage2 = _interopRequireDefault(_ForgotPasswordPage);

var _ResetPasswordPage = __webpack_require__(32);

var _ResetPasswordPage2 = _interopRequireDefault(_ResetPasswordPage);

var _Backend = __webpack_require__(33);

var _Backend2 = _interopRequireDefault(_Backend);

var _Dashboard = __webpack_require__(35);

var _Dashboard2 = _interopRequireDefault(_Dashboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({
  path: '/admin'
}, _Backend2.default, {
  routes: [_extends({}, _Dashboard2.default)]
}), _extends({
  path: '/'
}, _App2.default, {
  routes: [_extends({}, _PostPage2.default, {
    path: '/posts/:slug'
  }), _extends({}, _LoginPage2.default, {
    path: '/login'
  }), _extends({}, _RegisterPage2.default, {
    path: '/register'
  }), _extends({}, _ForgotPasswordPage2.default, {
    path: '/forgot-password'
  }), _extends({}, _ResetPasswordPage2.default, {
    path: '/reset-password'
  }), _extends({}, _HomePage2.default, {
    exact: true,
    path: '/:page?'
  }), _extends({}, _NotFoundPage2.default)]
})];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchPost = exports.fetchPosts = undefined;

var _types = __webpack_require__(4);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fetchPosts = exports.fetchPosts = function fetchPosts() {
  var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, _ref) {
      var api = _ref.api,
          req = _ref.req;
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return api.get('/api/posts?page=' + page);

            case 2:
              res = _context.sent;

              dispatch({
                type: _types.FETCH_POSTS,
                payload: res
              });

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x2, _x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var fetchPost = exports.fetchPost = function fetchPost(slug) {
  return function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, _ref3) {
      var api = _ref3.api,
          req = _ref3.req;
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return api.get('/api/posts/' + slug);

            case 3:
              res = _context2.sent;

              dispatch({
                type: _types.FETCH_POST,
                payload: res
              });
              _context2.next = 10;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2['catch'](0);

              console.log(_context2.t0);

            case 10:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 7]]);
    }));

    return function (_x5, _x6, _x7) {
      return _ref4.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _reactRedux = __webpack_require__(1);

var _authActions = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'logOut',
    value: function logOut() {
      this.props.logOut();
    }
  }, {
    key: 'renderAuthLinks',
    value: function renderAuthLinks() {
      var _this2 = this;

      return this.props.isAuthenticated ? [_react2.default.createElement(
        _reactRouterDom.Link,
        { className: 'navbar-item', to: '/admin', key: 'admin' },
        'Admin'
      ), _react2.default.createElement(
        'a',
        { onClick: function onClick() {
            return _this2.logOut();
          }, className: 'navbar-item', key: 'logout' },
        'Logout'
      )] : [_react2.default.createElement(
        _reactRouterDom.Link,
        { className: 'navbar-item', to: '/register', key: 'register' },
        'Register'
      ), _react2.default.createElement(
        _reactRouterDom.Link,
        { className: 'navbar-item', to: '/login', key: 'login' },
        'Login'
      )];
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'nav',
        { className: 'navbar', role: 'navigation' },
        _react2.default.createElement(
          'div',
          { className: 'navbar-inner' },
          _react2.default.createElement(
            'div',
            { className: 'navbar-brand' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { className: 'brand-text', to: '/', onClick: this.props.onHomeClick },
              'NERDPress'
            )
          ),
          _react2.default.createElement(
            'div',
            { id: 'navMenu', className: 'navbar-menu' },
            _react2.default.createElement(
              'div',
              { className: 'navbar-start' },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { className: 'navbar-item', to: '/', onClick: this.props.onHomeClick },
                'Home'
              ),
              _react2.default.createElement(
                _reactRouterDom.Link,
                { className: 'navbar-item', to: '/archives' },
                'Archives'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'navbar-end' },
              this.renderAuthLinks()
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth;

  return {
    isAuthenticated: !!auth.token
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { logOut: _authActions.logOut })(Header);

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-cookie");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
  return _react2.default.createElement(
    'footer',
    null,
    '\xA9 2018 Bryan Paronto'
  );
};

exports.default = Footer;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-nl2br");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("title-case");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("dateformat");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(18);

var _express = __webpack_require__(19);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(6);

var _isomorphicCookie = __webpack_require__(11);

var _isomorphicCookie2 = _interopRequireDefault(_isomorphicCookie);

var _renderer = __webpack_require__(20);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(38);

var _createStore2 = _interopRequireDefault(_createStore);

var _Routes = __webpack_require__(8);

var _Routes2 = _interopRequireDefault(_Routes);

var _authActions = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = process.env.PORT || 3002;
app.use(_express2.default.static('public'));

app.get('*', function (req, res) {
  var store = (0, _createStore2.default)(req);
  var token = _isomorphicCookie2.default.load('token', req);

  if (token) {
    store.dispatch((0, _authActions.authUser)({ token: token }));
  }

  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

    return route.loadData ? route.loadData(store, req) : Promise.resolve(null);
  });

  Promise.all(promises).then(function () {
    var context = {};
    var content = (0, _renderer2.default)(req, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  }).catch(function (err) {
    return console.log(err);
  });
});

app.listen(PORT, function () {
  console.log('listening on port %d', PORT);
});

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(21);

var _reactRouterDom = __webpack_require__(2);

var _reactRouterConfig = __webpack_require__(6);

var _serializeJavascript = __webpack_require__(22);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactRedux = __webpack_require__(1);

var _reactHelmet = __webpack_require__(3);

var _Routes = __webpack_require__(8);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store, context) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: context },
      _react2.default.createElement(
        'div',
        null,
        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
      )
    )
  ));

  var helmet = _reactHelmet.Helmet.renderStatic();
  return '\n    <html>\n      <head>\n        <meta charset="utf-8">\n        <meta http-equiv="x-ua-compatible" content="ie=edge">\n        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n        ' + helmet.title.toString() + '\n        ' + helmet.meta.toString() + '\n        <link rel="stylesheet" type="text/css" href="/style.css">\n      </head>\n      <body>\n        <div id="root">' + content + '</div>\n        <script>window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '</script>\n        <script src="/bundle.js"></script>\n       </body>\n    </html>\n  ';
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(3);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactRouterConfig = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var route = _ref.route;

  return _react2.default.createElement(
    'div',
    { id: 'frontend', className: 'container' },
    _react2.default.createElement(_reactHelmet2.default, null),
    (0, _reactRouterConfig.renderRoutes)(route.routes)
  );
};

exports.default = {
  component: App
  // loadData: ({ dispatch }) => dispatch()
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(3);

var _reactRedux = __webpack_require__(1);

var _postActions = __webpack_require__(9);

var _Header = __webpack_require__(10);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(12);

var _Footer2 = _interopRequireDefault(_Footer);

var _Pagination = __webpack_require__(25);

var _Pagination2 = _interopRequireDefault(_Pagination);

var _PostPreview = __webpack_require__(26);

var _PostPreview2 = _interopRequireDefault(_PostPreview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = function (_Component) {
  _inherits(HomePage, _Component);

  function HomePage(props) {
    _classCallCheck(this, HomePage);

    var _this = _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, props));

    var page = Number(props.location.pathname.split('/')[1]) || 1;
    _this.state = {
      page: page
    };
    return _this;
  }

  _createClass(HomePage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.posts.length) {
        this.props.fetchPosts(this.state.page);
      }
    }
  }, {
    key: 'prevPage',
    value: function prevPage() {
      this.setState({
        page: Number(this.state.page) - 1
      }, this.setPage);
    }
  }, {
    key: 'nextPage',
    value: function nextPage() {
      this.setState({
        page: Number(this.state.page) + 1
      }, this.setPage);
    }
  }, {
    key: 'setPage',
    value: function setPage() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.page;

      this.props.history.push('/' + page);
      this.props.fetchPosts(page);
    }
  }, {
    key: 'renderPosts',
    value: function renderPosts(posts) {
      return posts.map(function (post) {
        return _react2.default.createElement(_PostPreview2.default, { post: post, key: post.id });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var posts = this.props.posts;
      var numPages = this.props.pagination.pageCount;
      var currentPage = this.state.page;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement(
            'title',
            null,
            'NERDPress | Home Page'
          ),
          _react2.default.createElement('meta', { property: 'og:title', content: 'NERDPress | Home Page' })
        ),
        _react2.default.createElement(_Header2.default, { onHomeClick: function onHomeClick() {
            return _this2.setPage(1);
          } }),
        this.state.page > numPages && _react2.default.createElement(
          'h1',
          null,
          'Error! Can\'t seem to find what your looking for?',
          _react2.default.createElement(
            Link,
            { to: '/', onClick: function onClick() {
                return _this2.setPage(1);
              } },
            ' Go Home!'
          )
        ),
        _react2.default.createElement(
          'main',
          { className: 'site-body' },
          _react2.default.createElement(
            'section',
            { className: 'articles' },
            posts && this.renderPosts(posts)
          ),
          _react2.default.createElement(
            'aside',
            { className: 'sidebar' },
            _react2.default.createElement(
              'h3',
              null,
              'Sidebar'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Aperiam quos aut atque temporibus at. Saepe deserunt asperiores in voluptas sunt sit et possimus aut. Recusandae vero consequatur. '
            ),
            _react2.default.createElement(
              'p',
              null,
              'Aperiam quos aut atque temporibus at. Saepe deserunt asperiores in voluptas sunt sit et possimus aut. Recusandae vero consequatur. '
            ),
            _react2.default.createElement(
              'p',
              null,
              'Aperiam quos aut atque temporibus at. Saepe deserunt asperiores in voluptas sunt sit et possimus aut. Recusandae vero consequatur. '
            )
          )
        ),
        _react2.default.createElement(_Pagination2.default, {
          numPages: numPages,
          currentPage: currentPage,
          onPreviousClick: this.prevPage.bind(this),
          onNextClick: this.nextPage.bind(this)
        }),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return HomePage;
}(_react.Component);

function mapStateToProps(state) {
  return {
    posts: state.posts,
    pagination: state.pagination
  };
}

exports.default = {
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchPosts: _postActions.fetchPosts })(HomePage),
  loadData: function loadData(_ref, _ref2) {
    var dispatch = _ref.dispatch;
    var params = _ref2.params;

    var page = params[0].split('/')[1] || 1;
    return dispatch((0, _postActions.fetchPosts)(page));
  }
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pagination = function Pagination(props) {
  var numPages = props.numPages,
      currentPage = props.currentPage,
      onPreviousClick = props.onPreviousClick,
      onNextClick = props.onNextClick;

  return _react2.default.createElement(
    "nav",
    { className: "pagination", role: "navigation", "aria-label": "pagination", style: { marginTop: '25px' }, key: "nav" },
    currentPage > 1 ? _react2.default.createElement(
      "a",
      { className: "pagination-previous", onClick: onPreviousClick },
      "Previous"
    ) : _react2.default.createElement(
      "a",
      { className: "pagination-previous", style: { cursor: 'not-allowed' } },
      "Previous"
    ),
    currentPage < numPages ? _react2.default.createElement(
      "a",
      { className: "pagination-next", onClick: onNextClick },
      "Next page"
    ) : _react2.default.createElement(
      "a",
      { className: "pagination-previous", style: { cursor: 'not-allowed' } },
      "Next page"
    )
  );
};

exports.default = Pagination;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _reactNl2br = __webpack_require__(13);

var _reactNl2br2 = _interopRequireDefault(_reactNl2br);

var _titleCase = __webpack_require__(14);

var _titleCase2 = _interopRequireDefault(_titleCase);

var _dateformat = __webpack_require__(15);

var _dateformat2 = _interopRequireDefault(_dateformat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostPreview = function PostPreview(_ref) {
  var post = _ref.post;

  return _react2.default.createElement(
    'div',
    { className: 'card article', key: post.id },
    _react2.default.createElement(
      'div',
      { className: 'card-content' },
      _react2.default.createElement(
        'h1',
        { className: 'title article-title' },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/posts/' + post.slug },
          (0, _titleCase2.default)(post.title)
        )
      ),
      _react2.default.createElement(
        'p',
        { className: 'subtitle is-6 article-subtitle' },
        _react2.default.createElement(
          'a',
          { href: '#' },
          post.user.name
        ),
        ' on ',
        (0, _dateformat2.default)(post.created_at, 'dddd, mmmm dS, yyyy, h:MM:ss TT')
      ),
      _react2.default.createElement(
        'div',
        { className: 'content article-body' },
        (0, _reactNl2br2.default)(post.excerpt)
      )
    )
  );
};

exports.default = PostPreview;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(3);

var _reactRedux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(2);

var _reactNl2br = __webpack_require__(13);

var _reactNl2br2 = _interopRequireDefault(_reactNl2br);

var _titleCase = __webpack_require__(14);

var _titleCase2 = _interopRequireDefault(_titleCase);

var _dateformat = __webpack_require__(15);

var _dateformat2 = _interopRequireDefault(_dateformat);

var _postActions = __webpack_require__(9);

var _Header = __webpack_require__(10);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(12);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostPage = function (_Component) {
  _inherits(PostPage, _Component);

  function PostPage() {
    _classCallCheck(this, PostPage);

    return _possibleConstructorReturn(this, (PostPage.__proto__ || Object.getPrototypeOf(PostPage)).apply(this, arguments));
  }

  _createClass(PostPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var slug = this.props.match.params.slug;

      this.props.fetchPost(slug);
    }
  }, {
    key: 'render',
    value: function render() {
      var post = this.props.post;

      var user = post.user;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement(
            'title',
            null,
            'NERDPress | Post Page'
          ),
          _react2.default.createElement('meta', { property: 'og:title', content: 'NERDPress | Post Page' })
        ),
        _react2.default.createElement(
          'section',
          { className: 'single-article' },
          _react2.default.createElement(
            'div',
            { className: 'column is-8 is-offset-2' },
            _react2.default.createElement(_Header2.default, null),
            _react2.default.createElement(
              'main',
              { className: 'site-body' },
              _react2.default.createElement(
                'section',
                { className: 'article' },
                _react2.default.createElement(
                  'div',
                  { className: 'card' },
                  _react2.default.createElement(
                    'h1',
                    { className: 'title article-title' },
                    (0, _titleCase2.default)(post.title)
                  ),
                  _react2.default.createElement(
                    'p',
                    { className: 'subtitle is-6 article-subtitle' },
                    _react2.default.createElement(
                      'a',
                      { href: '#' },
                      user && user.name
                    ),
                    ' on ',
                    (0, _dateformat2.default)(post.created_at, 'dddd, mmmm dS, yyyy, h:MM:ss TT')
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'content article-body' },
                    (0, _reactNl2br2.default)(post.body)
                  )
                )
              ),
              _react2.default.createElement(
                'aside',
                { className: 'sidebar' },
                _react2.default.createElement(
                  'h3',
                  null,
                  'Sidebar'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Aperiam quos aut atque temporibus at. Saepe deserunt asperiores in voluptas sunt sit et possimus aut. Recusandae vero consequatur. '
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Aperiam quos aut atque temporibus at. Saepe deserunt asperiores in voluptas sunt sit et possimus aut. Recusandae vero consequatur. '
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Aperiam quos aut atque temporibus at. Saepe deserunt asperiores in voluptas sunt sit et possimus aut. Recusandae vero consequatur. '
                )
              )
            ),
            _react2.default.createElement(_Footer2.default, null)
          )
        )
      );
    }
  }]);

  return PostPage;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    post: state.post
  };
};

exports.default = {
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchPost: _postActions.fetchPost })(PostPage),
  loadData: function loadData(_ref, _ref2) {
    var dispatch = _ref.dispatch;
    var path = _ref2.path;

    var slug = path.split('/')[2];
    return dispatch((0, _postActions.fetchPost)(slug));
  }
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(3);

var _reactRouterDom = __webpack_require__(2);

var _reduxForm = __webpack_require__(7);

var _reactRedux = __webpack_require__(1);

var _authActions = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginPage = function (_Component) {
  _inherits(LoginPage, _Component);

  function LoginPage(props) {
    _classCallCheck(this, LoginPage);

    var _this = _possibleConstructorReturn(this, (LoginPage.__proto__ || Object.getPrototypeOf(LoginPage)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(LoginPage, [{
    key: 'handleSubmit',
    value: function handleSubmit(values) {
      this.props.loginUser(values);
    }
  }, {
    key: 'renderField',
    value: function renderField(field) {
      return _react2.default.createElement(
        'div',
        { className: 'field' },
        _react2.default.createElement(
          'div',
          { className: 'control' },
          _react2.default.createElement('input', _extends({}, field.input, {
            name: field.name,
            type: field.type,
            className: 'input',
            placeholder: field.placeholder
          })),
          field.meta.touched && field.meta.error && _react2.default.createElement(
            'div',
            { className: 'tag error', style: { width: '100%' } },
            field.meta.error
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          handleSubmit = _props.handleSubmit,
          auth = _props.auth,
          error = _props.error;


      if (auth) {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/admin' });
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement(
            'title',
            null,
            'NERDPress | Login'
          ),
          _react2.default.createElement('meta', { property: 'og:title', content: 'NERDPress | Login' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'login-page' },
          _react2.default.createElement(
            'h3',
            { className: 'title' },
            'Login'
          ),
          _react2.default.createElement(
            'p',
            { className: 'subtitle' },
            'Please login to proceed.'
          ),
          error && _react2.default.createElement(
            'div',
            { className: 'notification is-danger' },
            error
          ),
          _react2.default.createElement(
            'div',
            { className: 'box' },
            _react2.default.createElement(
              'form',
              { onSubmit: handleSubmit(this.handleSubmit) },
              _react2.default.createElement(_reduxForm.Field, {
                name: 'email',
                component: this.renderField,
                type: 'email',
                placeholder: 'Your Email'
              }),
              _react2.default.createElement(_reduxForm.Field, {
                name: 'password',
                component: this.renderField,
                type: 'password',
                placeholder: 'Your Password'
              }),
              _react2.default.createElement('input', { type: 'submit', value: 'Login', className: 'btn', style: { width: '100%' } })
            )
          ),
          _react2.default.createElement(
            'p',
            { className: 'has-text-grey' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/register' },
              'Register'
            ),
            ' ',
            ' ',
            '\xB7',
            ' ',
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/forgot-password' },
              'Forgot Password'
            )
          )
        )
      );
    }
  }]);

  return LoginPage;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth && state.auth.token,
    error: state.auth && state.auth.error
  };
};

var validate = function validate(values) {
  var errors = {};

  if (!values.email) errors.email = 'Please enter your email';

  if (!values.password) errors.password = 'Please enter your password';

  return errors;
};

exports.default = {
  component: (0, _reduxForm.reduxForm)({
    form: 'loginForm',
    validate: validate
  })((0, _reactRedux.connect)(mapStateToProps, { loginUser: _authActions.loginUser })(LoginPage))
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(3);

var _reactRouterDom = __webpack_require__(2);

var _reduxForm = __webpack_require__(7);

var _reactRedux = __webpack_require__(1);

var _authActions = __webpack_require__(5);

var _helpers = __webpack_require__(47);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RegisterPage = function (_Component) {
  _inherits(RegisterPage, _Component);

  function RegisterPage(props) {
    _classCallCheck(this, RegisterPage);

    var _this = _possibleConstructorReturn(this, (RegisterPage.__proto__ || Object.getPrototypeOf(RegisterPage)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(RegisterPage, [{
    key: 'handleSubmit',
    value: function handleSubmit(values) {
      console.log(values);
      this.props.registerUser(values);
    }
  }, {
    key: 'renderField',
    value: function renderField(field) {
      return _react2.default.createElement(
        'div',
        { className: 'field' },
        _react2.default.createElement(
          'div',
          { className: 'control' },
          _react2.default.createElement('input', _extends({}, field.input, {
            name: field.name,
            type: field.type,
            className: 'input',
            placeholder: field.placeholder
          })),
          field.meta.touched && field.meta.error && _react2.default.createElement(
            'div',
            { className: 'tag error', style: { width: '100%' } },
            field.meta.error
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          handleSubmit = _props.handleSubmit,
          auth = _props.auth,
          error = _props.error;


      if (auth) {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/admin' });
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement(
            'title',
            null,
            'NERDPress | Register'
          ),
          _react2.default.createElement('meta', { property: 'og:title', content: 'NERDPress | Register' })
        ),
        _react2.default.createElement(
          'section',
          { className: 'register-page' },
          _react2.default.createElement(
            'h3',
            { className: 'title ' },
            'Register'
          ),
          _react2.default.createElement(
            'p',
            { className: 'subtitle ' },
            'Please register for an account.'
          ),
          error && _react2.default.createElement(
            'div',
            { className: 'notification is-danger' },
            error
          ),
          _react2.default.createElement(
            'div',
            { className: 'box' },
            _react2.default.createElement(
              'form',
              { onSubmit: handleSubmit(this.handleSubmit) },
              _react2.default.createElement(_reduxForm.Field, {
                name: 'name',
                component: this.renderField,
                type: 'text',
                placeholder: 'Your Name'
              }),
              _react2.default.createElement(_reduxForm.Field, {
                name: 'email',
                component: this.renderField,
                type: 'email',
                placeholder: 'Your Email'
              }),
              _react2.default.createElement(_reduxForm.Field, {
                name: 'password',
                component: this.renderField,
                type: 'password',
                placeholder: 'Your Password'
              }),
              _react2.default.createElement(_reduxForm.Field, {
                name: 'passwordConfirm',
                component: this.renderField,
                type: 'password',
                placeholder: 'Confirm Password'
              }),
              _react2.default.createElement('input', { type: 'submit', value: 'Register', className: 'btn', style: { width: '100%' } })
            )
          ),
          _react2.default.createElement(
            'p',
            { className: 'has-text-grey' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/login' },
              'Login'
            ),
            ' ',
            ' ',
            '\xB7',
            ' ',
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/forgot-password' },
              'Forgot Password'
            )
          )
        )
      );
    }
  }]);

  return RegisterPage;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth && state.auth.token,
    error: state.auth && state.auth.error
  };
};

var validate = function validate(values) {
  var errors = {};
  // Validate name
  if (!values.name) errors.name = "Please enter your name!";

  // Validate Email
  if (!values.email) errors.email = "Please enter your email!";
  if (!(0, _helpers.validEmail)(values.email)) errors.email = "Please enter a valid email!";

  if (!values.password) errors.password = "Please enter a password!";
  if (!values.passwordConfirm) errors.passwordConfirm = "Please enter a password confirmation!";

  if (values.password !== values.passwordConfirm) errors.passwordConfirm = "Passwords do not match!";

  return errors;
};

// function validEmail(email) {
//     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

exports.default = {
  component: (0, _reduxForm.reduxForm)({
    form: 'registrationForm',
    validate: validate
  })((0, _reactRedux.connect)(mapStateToProps, { registerUser: _authActions.registerUser })(RegisterPage))
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundPage = function NotFoundPage(_ref) {
  var _ref$staticContext = _ref.staticContext,
      staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

  staticContext.notFound = true;
  return _react2.default.createElement(
    'h1',
    { className: 'center-align', style: { marginTop: '200px' } },
    'Not Found'
  );
};

exports.default = {
  component: NotFoundPage
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(3);

var _reactRouterDom = __webpack_require__(2);

var _reduxForm = __webpack_require__(7);

var _reactRedux = __webpack_require__(1);

var _authActions = __webpack_require__(5);

var _helpers = __webpack_require__(47);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ForgotPasswordPage = function (_Component) {
  _inherits(ForgotPasswordPage, _Component);

  function ForgotPasswordPage(props) {
    _classCallCheck(this, ForgotPasswordPage);

    var _this = _possibleConstructorReturn(this, (ForgotPasswordPage.__proto__ || Object.getPrototypeOf(ForgotPasswordPage)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(ForgotPasswordPage, [{
    key: 'handleSubmit',
    value: function handleSubmit(values) {
      console.log('values!!', values);
      this.props.forgotPassword(values);
    }
  }, {
    key: 'renderField',
    value: function renderField(field) {
      return _react2.default.createElement(
        'div',
        { className: 'field' },
        _react2.default.createElement(
          'div',
          { className: 'control' },
          _react2.default.createElement('input', _extends({}, field.input, {
            name: field.name,
            type: field.type,
            className: 'input',
            placeholder: field.placeholder
          })),
          field.meta.touched && field.meta.error && _react2.default.createElement(
            'div',
            { className: 'tag error', style: { width: '100%' } },
            field.meta.error
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          handleSubmit = _props.handleSubmit,
          error = _props.error,
          message = _props.message;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement(
            'title',
            null,
            'NERDPress | Forgot Password'
          ),
          _react2.default.createElement('meta', { property: 'og:title', content: 'NERDPress | Forgot Password' })
        ),
        _react2.default.createElement(
          'section',
          { className: 'forgot-password-page' },
          _react2.default.createElement(
            'h3',
            { className: 'title' },
            'Forgot Password'
          ),
          _react2.default.createElement(
            'p',
            { className: 'subtitle' },
            'Please enter your email for a password reset.'
          ),
          error && _react2.default.createElement(
            'div',
            { className: 'notification is-danger' },
            error
          ),
          message && _react2.default.createElement(
            'div',
            { className: 'notification is-alert' },
            message
          ),
          _react2.default.createElement(
            'div',
            { className: 'box' },
            _react2.default.createElement(
              'form',
              { onSubmit: handleSubmit(this.handleSubmit) },
              _react2.default.createElement(_reduxForm.Field, {
                name: 'email',
                component: this.renderField,
                type: 'email',
                placeholder: 'Your Email'
              }),
              _react2.default.createElement('input', { type: 'submit', value: 'Send Reset Email', className: 'btn', style: { width: '100%' } })
            )
          ),
          _react2.default.createElement(
            'p',
            { className: 'has-text-grey' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/register' },
              'Register'
            ),
            ' ',
            ' ',
            '\xB7',
            ' ',
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/' },
              'Return Home'
            )
          )
        )
      );
    }
  }]);

  return ForgotPasswordPage;
}(_react.Component);

var validate = function validate(values) {
  var errors = {};

  if (!values.email) errors.email = 'Please enter your email';
  if (!(0, _helpers.validEmail)(values.email)) errors.email = "Please enter a valid email!";

  return errors;
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    message: state.auth && state.auth.message
  };
};

exports.default = {
  component: (0, _reduxForm.reduxForm)({
    form: 'forgotPasswordForm',
    validate: validate
  })((0, _reactRedux.connect)(mapStateToProps, { forgotPassword: _authActions.forgotPassword })(ForgotPasswordPage))
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(3);

var _reactRouterDom = __webpack_require__(2);

var _reduxForm = __webpack_require__(7);

var _reactRedux = __webpack_require__(1);

var _authActions = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResetPasswordPage = function (_Component) {
  _inherits(ResetPasswordPage, _Component);

  function ResetPasswordPage(props) {
    _classCallCheck(this, ResetPasswordPage);

    var _this = _possibleConstructorReturn(this, (ResetPasswordPage.__proto__ || Object.getPrototypeOf(ResetPasswordPage)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(ResetPasswordPage, [{
    key: 'handleSubmit',
    value: function handleSubmit(values) {
      var token = this.props.location.search.split('=')[1];
      values.token = token;
      this.props.resetPassword(values);
    }
  }, {
    key: 'renderField',
    value: function renderField(field) {
      return _react2.default.createElement(
        'div',
        { className: 'field' },
        _react2.default.createElement(
          'div',
          { className: 'control' },
          _react2.default.createElement('input', _extends({}, field.input, {
            name: field.name,
            type: field.type,
            className: 'input',
            placeholder: field.placeholder
          })),
          field.meta.touched && field.meta.error && _react2.default.createElement(
            'div',
            { className: 'tag error', style: { width: '100%' } },
            field.meta.error
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          handleSubmit = _props.handleSubmit,
          error = _props.error,
          doRedirect = _props.doRedirect;


      if (doRedirect) return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/login' });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement(
            'title',
            null,
            'NERDPress | Reset Password'
          ),
          _react2.default.createElement('meta', { property: 'og:title', content: 'NERDPress | Reset Password' })
        ),
        _react2.default.createElement(
          'section',
          { className: 'reset-password-page' },
          _react2.default.createElement(
            'h3',
            { className: 'title' },
            'Reset Password'
          ),
          _react2.default.createElement(
            'p',
            { className: 'subtitle' },
            'Please enter your new password below.'
          ),
          error && _react2.default.createElement(
            'div',
            { className: 'notification is-danger' },
            error
          ),
          _react2.default.createElement(
            'div',
            { className: 'box' },
            _react2.default.createElement(
              'form',
              { onSubmit: handleSubmit(this.handleSubmit) },
              _react2.default.createElement(_reduxForm.Field, {
                name: 'password',
                component: this.renderField,
                type: 'password',
                placeholder: 'Your new password'
              }),
              _react2.default.createElement(_reduxForm.Field, {
                name: 'passwordConfirm',
                component: this.renderField,
                type: 'password',
                placeholder: 'Confirm your new password'
              }),
              _react2.default.createElement('input', { type: 'submit', value: 'Reset Password', className: 'btn', style: { width: '100%' } })
            )
          ),
          _react2.default.createElement(
            'p',
            { className: 'has-text-grey' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/register' },
              'Register'
            ),
            ' ',
            ' ',
            '\xB7',
            ' ',
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/' },
              'Return Home'
            )
          )
        )
      );
    }
  }]);

  return ResetPasswordPage;
}(_react.Component);

var validate = function validate(values) {
  var errors = {};
  if (!values.password) errors.password = 'Please enter a password!';
  if (!values.passwordConfirm) errors.passwordConfirm = 'Please enter a password confirmation!';
  if (values.password !== values.passwordConfirm) errors.passwordConfirm = 'Passwords do not match!';
  return errors;
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    doRedirect: state.auth && state.auth.message
  };
};

exports.default = {
  component: (0, _reduxForm.reduxForm)({
    form: 'resetPasswordForm',
    validate: validate
  })((0, _reactRedux.connect)(mapStateToProps, { resetPassword: _authActions.resetPassword })(ResetPasswordPage))
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactHelmet = __webpack_require__(3);

var _reactRouterConfig = __webpack_require__(6);

var _Header = __webpack_require__(34);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Backend = function (_Component) {
  _inherits(Backend, _Component);

  function Backend() {
    _classCallCheck(this, Backend);

    return _possibleConstructorReturn(this, (Backend.__proto__ || Object.getPrototypeOf(Backend)).apply(this, arguments));
  }

  _createClass(Backend, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          route = _props.route,
          history = _props.history;

      return _react2.default.createElement(
        'div',
        { id: 'admin', className: 'container' },
        _react2.default.createElement(
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,700', rel: 'stylesheet' }),
          _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/admin.css' })
        ),
        _react2.default.createElement(_Header2.default, { history: history }),
        (0, _reactRouterConfig.renderRoutes)(route.routes)
      );
    }
  }]);

  return Backend;
}(_react.Component);

exports.default = {
  component: (0, _reactRedux.connect)(null, null)(Backend)
  // loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(2);

var _authActions = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'logOut',
    value: function logOut() {
      this.props.logOut();
      this.props.history.push('/');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'nav',
        { className: 'navbar is-white' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'navbar-brand' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { className: 'navbar-item brand-text', to: '/admin' },
              'Admin'
            ),
            _react2.default.createElement(
              'div',
              { className: 'navbar-burger burger', 'data-target': 'navMenu' },
              _react2.default.createElement('span', null),
              _react2.default.createElement('span', null),
              _react2.default.createElement('span', null)
            )
          ),
          _react2.default.createElement(
            'div',
            { id: 'navMenu', className: 'navbar-menu' },
            _react2.default.createElement(
              'div',
              { className: 'navbar-start' },
              _react2.default.createElement(
                'a',
                { className: 'navbar-item', href: 'admin.html' },
                'Dashboard'
              ),
              _react2.default.createElement(
                'a',
                { className: 'navbar-item', href: 'admin.html' },
                'Posts'
              ),
              _react2.default.createElement(
                'a',
                { className: 'navbar-item', href: 'admin.html' },
                'Users'
              ),
              _react2.default.createElement(
                'a',
                { className: 'navbar-item', href: 'admin.html' },
                'My Account'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'navbar-end' },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { className: 'navbar-item', to: '/' },
                '\xAB Back to Site'
              ),
              _react2.default.createElement(
                'a',
                { className: 'navbar-item', onClick: function onClick() {
                    return _this2.logOut();
                  } },
                'Logout'
              )
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(null, { logOut: _authActions.logOut })(Header);

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(3);

var _reactRedux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(2);

var _requireAuth = __webpack_require__(36);

var _requireAuth2 = _interopRequireDefault(_requireAuth);

var _requireRole = __webpack_require__(37);

var _requireRole2 = _interopRequireDefault(_requireRole);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dashboard = function (_Component) {
  _inherits(Dashboard, _Component);

  function Dashboard() {
    _classCallCheck(this, Dashboard);

    return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).apply(this, arguments));
  }

  _createClass(Dashboard, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement(
            'title',
            null,
            'Admin'
          ),
          _react2.default.createElement('meta', { property: 'og:title', content: 'Admin' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'columns' },
            _react2.default.createElement(
              'div',
              { className: 'column is-12' },
              _react2.default.createElement(
                'nav',
                { className: 'breadcrumb', 'aria-label': 'breadcrumbs' },
                _react2.default.createElement(
                  'ul',
                  null,
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      _reactRouterDom.Link,
                      { to: '/admin' },
                      'Admin'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'is-active' },
                    _react2.default.createElement(
                      _reactRouterDom.Link,
                      { to: '/admin', 'aria-current': 'page' },
                      'Dashboard'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'section',
                { className: 'hero is-info welcome is-small' },
                _react2.default.createElement(
                  'div',
                  { className: 'hero-body' },
                  _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                      'h1',
                      { className: 'title' },
                      'Hello, ',
                      this.props.name,
                      '.'
                    ),
                    _react2.default.createElement(
                      'h2',
                      { className: 'subtitle' },
                      'I hope you are having a great day!'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'section',
                { className: 'info-tiles' },
                _react2.default.createElement(
                  'div',
                  { className: 'tile is-ancestor has-text-centered' },
                  _react2.default.createElement(
                    'div',
                    { className: 'tile is-parent' },
                    _react2.default.createElement(
                      'article',
                      { className: 'tile is-child box' },
                      _react2.default.createElement(
                        'p',
                        { className: 'title' },
                        '439k'
                      ),
                      _react2.default.createElement(
                        'p',
                        { className: 'subtitle' },
                        'Users'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'tile is-parent' },
                    _react2.default.createElement(
                      'article',
                      { className: 'tile is-child box' },
                      _react2.default.createElement(
                        'p',
                        { className: 'title' },
                        '59k'
                      ),
                      _react2.default.createElement(
                        'p',
                        { className: 'subtitle' },
                        'Products'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'tile is-parent' },
                    _react2.default.createElement(
                      'article',
                      { className: 'tile is-child box' },
                      _react2.default.createElement(
                        'p',
                        { className: 'title' },
                        '3.4k'
                      ),
                      _react2.default.createElement(
                        'p',
                        { className: 'subtitle' },
                        'Open Orders'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'tile is-parent' },
                    _react2.default.createElement(
                      'article',
                      { className: 'tile is-child box' },
                      _react2.default.createElement(
                        'p',
                        { className: 'title' },
                        '19'
                      ),
                      _react2.default.createElement(
                        'p',
                        { className: 'subtitle' },
                        'Exceptions'
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Dashboard;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    name: state.auth.name
  };
};

exports.default = {
  component: (0, _reactRedux.connect)(mapStateToProps, null)((0, _requireRole2.default)((0, _requireAuth2.default)(Dashboard), ['ADMIN'])),
  loadData: function loadData(_ref) {
    var dispatch = _ref.dispatch;
  }
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ChildComponent) {
  var RequireAuth = function (_Component) {
    _inherits(RequireAuth, _Component);

    function RequireAuth() {
      _classCallCheck(this, RequireAuth);

      return _possibleConstructorReturn(this, (RequireAuth.__proto__ || Object.getPrototypeOf(RequireAuth)).apply(this, arguments));
    }

    _createClass(RequireAuth, [{
      key: 'render',
      value: function render() {
        switch (this.props.auth) {
          case false:
            return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/login' });
          case null:
            return _react2.default.createElement(
              'div',
              null,
              'Loading... '
            );
          default:
            return _react2.default.createElement(ChildComponent, this.props);
        }
      }
    }]);

    return RequireAuth;
  }(_react.Component);

  var mapStateToProps = function mapStateToProps(_ref) {
    var auth = _ref.auth;
    return { auth: auth };
  };
  return (0, _reactRedux.connect)(mapStateToProps)(RequireAuth);
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ChildComponent, requiredRole) {
  var RequireRole = function (_Component) {
    _inherits(RequireRole, _Component);

    function RequireRole() {
      _classCallCheck(this, RequireRole);

      return _possibleConstructorReturn(this, (RequireRole.__proto__ || Object.getPrototypeOf(RequireRole)).apply(this, arguments));
    }

    _createClass(RequireRole, [{
      key: 'render',
      value: function render() {
        var role = this.props.auth.role;
        // if an array of roles is oassed, check to see if useres role is in the array

        if (Array.isArray(requiredRole) && requiredRole.includes(role)
        // otherwise if the requiredRole is a string, check if it matches users role
        || typeof requiredRole === "string" && role === requiredRole) {
          return _react2.default.createElement(ChildComponent, this.props);
        }

        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
      }
    }]);

    return RequireRole;
  }(_react.Component);

  var mapStateToProps = function mapStateToProps(_ref) {
    var auth = _ref.auth;
    return { auth: auth };
  };
  return (0, _reactRedux.connect)(mapStateToProps)(RequireRole);
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(16);

var _reduxThunk = __webpack_require__(39);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(40);

var _axios2 = _interopRequireDefault(_axios);

var _reducers = __webpack_require__(41);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  var api = _axios2.default.create({
    baseURL: 'http://localhost:3001/'
  });

  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument({ api: api, req: req })));
  return store;
};

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(16);

var _reduxForm = __webpack_require__(7);

var _authReducer = __webpack_require__(42);

var _authReducer2 = _interopRequireDefault(_authReducer);

var _postsReducer = __webpack_require__(44);

var _postsReducer2 = _interopRequireDefault(_postsReducer);

var _postReducer = __webpack_require__(45);

var _postReducer2 = _interopRequireDefault(_postReducer);

var _paginationReducer = __webpack_require__(46);

var _paginationReducer2 = _interopRequireDefault(_paginationReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  auth: _authReducer2.default,
  posts: _postsReducer2.default,
  post: _postReducer2.default,
  form: _reduxForm.reducer,
  pagination: _paginationReducer2.default
});

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _types = __webpack_require__(4);

var _jwtSimple = __webpack_require__(43);

var _jwtSimple2 = _interopRequireDefault(_jwtSimple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultState = { error: '' };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  switch (action.type) {
    case _types.AUTH_ERROR:
      return _extends({}, state, { error: action.payload });
    case _types.AUTH_USER:
      var token = action.payload.token;

      var decoded = _jwtSimple2.default.decode(token, "ob7cq2p98byq45ciuacrca7ewp984qghjdsanj");
      var id = decoded.id,
          name = decoded.name,
          email = decoded.email,
          role = decoded.role;

      return _extends({}, state, {
        token: token,
        id: id,
        name: name,
        email: email,
        role: role,
        error: null
      });
    case _types.RESET_PASSWORD:
    case _types.FORGOT_PASSWORD:
      return _extends({}, state, {
        message: action.payload.message
      });
    case _types.UNAUTH_USER:
      return {};
    default:
      return state;
  }
};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("jwt-simple");

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = __webpack_require__(4);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _types.FETCH_POSTS:
      return action.payload.data.posts;
    default:
      return state;
  }
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = __webpack_require__(4);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _types.FETCH_POST:
      return action.payload.data;
    default:
      return state;
  }
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = __webpack_require__(4);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _types.FETCH_POSTS:
      return action.payload.data.pagination;
    default:
      return state;
  }
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var validEmail = exports.validEmail = function validEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map