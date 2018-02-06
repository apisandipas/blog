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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

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
exports.authError = exports.authUser = exports.registerUser = exports.logOut = exports.loginUser = exports.fetchCurrentUser = undefined;

var _types = __webpack_require__(5);

var _isomorphicCookie = __webpack_require__(9);

var _isomorphicCookie2 = _interopRequireDefault(_isomorphicCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, _ref) {
      var api = _ref.api,
          req = _ref.req;
      var cookie, res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              cookie = _isomorphicCookie2.default.load('token', req);
              _context.next = 4;
              return api.get('/api/current-user', {
                headers: { authorization: cookie }
              });

            case 4:
              res = _context.sent;


              dispatch({
                type: _types.FETCH_CURRENT_USER,
                payload: res
              });
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context['catch'](0);

              console.log('error', _context.t0);

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 8]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var loginUser = exports.loginUser = function loginUser(values) {
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
              return api.post('/api/login', values);

            case 3:
              res = _context2.sent;

              dispatch({
                type: _types.AUTH_USER,
                payload: res.data
              });
              _isomorphicCookie2.default.save('token', res.data.token, { secure: false });
              _context2.next = 12;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2['catch'](0);

              console.log(_context2.t0);
              dispatch(authError('Bad Login Info'));

            case 12:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 8]]);
    }));

    return function (_x4, _x5, _x6) {
      return _ref4.apply(this, arguments);
    };
  }();
};

var logOut = exports.logOut = function logOut() {
  return function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch) {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _isomorphicCookie2.default.remove('token', null, { secure: false });
              dispatch({
                type: _types.UNAUTH_USER
              });

            case 2:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x7) {
      return _ref5.apply(this, arguments);
    };
  }();
};

var registerUser = exports.registerUser = function registerUser(values) {
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
              return api.post('/api/register', values);

            case 3:
              res = _context4.sent;

              dispatch({
                type: _types.AUTH_USER,
                payload: res.data
              });
              _isomorphicCookie2.default.save('token', res.data.token, { secure: false });
              _context4.next = 12;
              break;

            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4['catch'](0);

              console.log(_context4.t0);
              dispatch(authError('Bad Login Info'));

            case 12:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined, [[0, 8]]);
    }));

    return function (_x8, _x9, _x10) {
      return _ref7.apply(this, arguments);
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

/***/ }),
/* 5 */
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

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(21);

var _App2 = _interopRequireDefault(_App);

var _HomePage = __webpack_require__(23);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _PostPage = __webpack_require__(25);

var _PostPage2 = _interopRequireDefault(_PostPage);

var _LoginPage = __webpack_require__(26);

var _LoginPage2 = _interopRequireDefault(_LoginPage);

var _RegisterPage = __webpack_require__(27);

var _RegisterPage2 = _interopRequireDefault(_RegisterPage);

var _NotFoundPage = __webpack_require__(28);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

var _Backend = __webpack_require__(29);

var _Backend2 = _interopRequireDefault(_Backend);

var _Dashboard = __webpack_require__(31);

var _Dashboard2 = _interopRequireDefault(_Dashboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({
  path: '/admin'
}, _Backend2.default, {
  routes: [_extends({}, _Dashboard2.default)]
}), _extends({
  path: '/'
}, _App2.default, {
  routes: [_extends({}, _HomePage2.default, {
    exact: true,
    path: '/'
  }), _extends({}, _PostPage2.default, {
    path: '/posts/:slug'
  }), _extends({}, _LoginPage2.default, {
    path: '/login'
  }), _extends({}, _RegisterPage2.default, {
    path: '/register'
  }),
  // {
  //   ...AdminPage,
  //   path: '/admin',
  // },
  _extends({}, _NotFoundPage2.default)]
})];

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-cookie");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-nl2br");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("title-case");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("dateformat");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchPost = exports.fetchPosts = undefined;

var _types = __webpack_require__(5);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fetchPosts = exports.fetchPosts = function fetchPosts() {
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
              return api.get('/api/posts');

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

    return function (_x, _x2, _x3) {
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

    return function (_x4, _x5, _x6) {
      return _ref4.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(16);

var _express = __webpack_require__(17);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(18);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(33);

var _createStore2 = _interopRequireDefault(_createStore);

var _reactRouterConfig = __webpack_require__(6);

var _isomorphicCookie = __webpack_require__(9);

var _isomorphicCookie2 = _interopRequireDefault(_isomorphicCookie);

var _Routes = __webpack_require__(8);

var _Routes2 = _interopRequireDefault(_Routes);

var _authActions = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static('public'));

app.get('*', function (req, res) {
  var store = (0, _createStore2.default)(req);

  var cookie = _isomorphicCookie2.default.load('token', req);
  if (cookie) {
    store.dispatch((0, _authActions.authUser)(cookie));
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
  });
});

app.listen(3002, function () {
  console.log('listening on port 3002');
});

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(19);

var _reactRouterDom = __webpack_require__(1);

var _reactRouterConfig = __webpack_require__(6);

var _serializeJavascript = __webpack_require__(20);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactRedux = __webpack_require__(2);

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

  return '\n    <html>\n      <head>\n        ' + helmet.title.toString() + '\n        ' + helmet.meta.toString() + '\n        <script defer src="https://use.fontawesome.com/releases/v5.0.0/js/all.js"></script>\n        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.css">  \n      </head>\n      <body>\n        <div id="root">' + content + '</div>\n        <script>window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '</script>\n        <script src="/bundle.js"></script>\n       </body>\n    </html>  \n  ';
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 21 */
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

var _Header = __webpack_require__(22);

var _Header2 = _interopRequireDefault(_Header);

var _authActions = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var route = _ref.route;

  return _react2.default.createElement(
    'div',
    { className: 'container' },
    _react2.default.createElement(
      _reactHelmet2.default,
      null,
      _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/styles.css' })
    ),
    _react2.default.createElement(_Header2.default, null),
    (0, _reactRouterConfig.renderRoutes)(route.routes)
  );
};

exports.default = {
  component: App
  // loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

var _authActions = __webpack_require__(4);

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
    key: 'render',
    value: function render() {
      var _this2 = this;

      var auth = this.props.auth;

      var authButton = auth && auth.token ? [_react2.default.createElement(
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
      return _react2.default.createElement(
        'nav',
        { className: 'navbar is-white' },
        _react2.default.createElement(
          'div',
          { className: 'navbar-brand' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'navbar-item brand-text', to: '/' },
            'NERDPress'
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
              _reactRouterDom.Link,
              { className: 'navbar-item', to: '/' },
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
            authButton
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

function mapStateToProps(_ref) {
  var auth = _ref.auth;

  return {
    auth: auth
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { logOut: _authActions.logOut })(Header);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(3);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(1);

var _lodash = __webpack_require__(24);

var _lodash2 = _interopRequireDefault(_lodash);

var _reactNl2br = __webpack_require__(10);

var _reactNl2br2 = _interopRequireDefault(_reactNl2br);

var _titleCase = __webpack_require__(11);

var _titleCase2 = _interopRequireDefault(_titleCase);

var _dateformat = __webpack_require__(12);

var _dateformat2 = _interopRequireDefault(_dateformat);

var _postActions = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = function (_Component) {
  _inherits(HomePage, _Component);

  function HomePage(props) {
    _classCallCheck(this, HomePage);

    var _this = _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, props));

    _this.state = {
      isLoading: true,
      page: 1
    };
    return _this;
  }

  _createClass(HomePage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.props.fetchPosts().then(function () {
        _this2.setState({
          isLoading: false
        });
      });
    }
  }, {
    key: 'prevPage',
    value: function prevPage() {
      this.setState({
        page: this.state.page - 1
      });
    }
  }, {
    key: 'nextPage',
    value: function nextPage() {
      this.setState({
        page: this.state.page + 1
      });
    }
  }, {
    key: 'renderPosts',
    value: function renderPosts(posts) {
      return posts.map(function (post) {
        return _react2.default.createElement(
          'div',
          { className: 'card article', key: post.id },
          _react2.default.createElement(
            'div',
            { className: 'card-content' },
            _react2.default.createElement(
              'p',
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
              (0, _dateformat2.default)(post.created_at, "dddd, mmmm dS, yyyy, h:MM:ss TT")
            ),
            _react2.default.createElement(
              'div',
              { className: 'content article-body' },
              (0, _reactNl2br2.default)(post.excerpt)
            )
          )
        );
      });
    }
  }, {
    key: 'renderPagination',
    value: function renderPagination(numPages) {
      var _this3 = this;

      var currentPage = this.state.page;
      return _react2.default.createElement(
        'nav',
        { className: 'pagination', role: 'navigation', 'aria-label': 'pagination', style: { marginTop: '25px' }, key: 'nav' },
        currentPage > 1 ? _react2.default.createElement(
          'a',
          { className: 'pagination-previous', onClick: function onClick() {
              return _this3.prevPage();
            } },
          'Previous'
        ) : _react2.default.createElement(
          'a',
          { className: 'pagination-previous', style: { cursor: 'not-allowed' } },
          'Previous'
        ),
        currentPage < numPages ? _react2.default.createElement(
          'a',
          { className: 'pagination-next', onClick: function onClick() {
              return _this3.nextPage();
            } },
          'Next page'
        ) : _react2.default.createElement(
          'a',
          { className: 'pagination-previous', style: { cursor: 'not-allowed' } },
          'Next page'
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var posts_per_page = 10;
      var posts = (0, _lodash2.default)(this.props.posts, posts_per_page)[this.state.page - 1];
      var numPages = Math.round(this.props.posts.length / posts_per_page);

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
        _react2.default.createElement(
          'section',
          { className: 'articles' },
          _react2.default.createElement(
            'div',
            { className: 'column is-8 is-offset-2' },
            this.state.isLoading ? _react2.default.createElement(
              'p',
              null,
              'Loading... '
            ) : [this.renderPosts(posts), this.renderPagination(numPages)]
          )
        )
      );
    }
  }]);

  return HomePage;
}(_react.Component);

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

exports.default = {
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchPosts: _postActions.fetchPosts })(HomePage),
  loadData: function loadData(_ref) {
    var dispatch = _ref.dispatch;
    return dispatch((0, _postActions.fetchPosts)());
  }

};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("lodash.chunk");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(3);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(1);

var _reactNl2br = __webpack_require__(10);

var _reactNl2br2 = _interopRequireDefault(_reactNl2br);

var _titleCase = __webpack_require__(11);

var _titleCase2 = _interopRequireDefault(_titleCase);

var _dateformat = __webpack_require__(12);

var _dateformat2 = _interopRequireDefault(_dateformat);

var _postActions = __webpack_require__(13);

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
          { className: 'article' },
          _react2.default.createElement(
            'div',
            { className: 'column is-8 is-offset-2' },
            _react2.default.createElement(
              'div',
              { className: 'card' },
              _react2.default.createElement(
                'div',
                { className: 'card-content' },
                _react2.default.createElement(
                  'p',
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
                  (0, _dateformat2.default)(post.created_at, "dddd, mmmm dS, yyyy, h:MM:ss TT")
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'content article-body' },
                  (0, _reactNl2br2.default)(post.body)
                )
              )
            )
          )
        )
      );
    }
  }]);

  return PostPage;
}(_react.Component);

function mapStateToProps(state) {
  return {
    post: state.post
  };
}

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
/* 26 */
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

var _reactRouterDom = __webpack_require__(1);

var _reduxForm = __webpack_require__(7);

var _reactRedux = __webpack_require__(2);

var _authActions = __webpack_require__(4);

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
            className: 'input is-large',
            placeholder: field.placeholder
          }))
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          handleSubmit = _props.handleSubmit,
          auth = _props.auth;


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
          'section',
          { className: 'hero is-success is-fullheight' },
          _react2.default.createElement(
            'div',
            { className: 'hero-body' },
            _react2.default.createElement(
              'div',
              { className: 'container has-text-centered' },
              _react2.default.createElement(
                'div',
                { className: 'column is-4 is-offset-4' },
                _react2.default.createElement(
                  'h3',
                  { className: 'title has-text-grey' },
                  'Login'
                ),
                _react2.default.createElement(
                  'p',
                  { className: 'subtitle has-text-grey' },
                  'Please login to proceed.'
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
                    _react2.default.createElement('input', { type: 'submit', value: 'Login', className: 'button is-block is-info is-large', style: { width: '100%' } })
                  )
                ),
                _react2.default.createElement(
                  'p',
                  { className: 'has-text-grey' },
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/register' },
                    'Register'
                  )
                )
              )
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
    auth: state.auth && state.auth.token
  };
};

exports.default = {
  component: (0, _reduxForm.reduxForm)({
    form: 'loginForm'
  })((0, _reactRedux.connect)(mapStateToProps, { loginUser: _authActions.loginUser })(LoginPage))
};

/***/ }),
/* 27 */
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

var _reactRouterDom = __webpack_require__(1);

var _reduxForm = __webpack_require__(7);

var _reactRedux = __webpack_require__(2);

var _authActions = __webpack_require__(4);

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
            className: 'input is-large',
            placeholder: field.placeholder
          }))
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          handleSubmit = _props.handleSubmit,
          auth = _props.auth;


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
          { className: 'hero is-success is-fullheight' },
          _react2.default.createElement(
            'div',
            { className: 'hero-body' },
            _react2.default.createElement(
              'div',
              { className: 'container has-text-centered' },
              _react2.default.createElement(
                'div',
                { className: 'column is-4 is-offset-4' },
                _react2.default.createElement(
                  'h3',
                  { className: 'title has-text-grey' },
                  'Register'
                ),
                _react2.default.createElement(
                  'p',
                  { className: 'subtitle has-text-grey' },
                  'Please register for an account.'
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
                    _react2.default.createElement('input', { type: 'submit', value: 'Register', className: 'button is-block is-info is-large', style: { width: '100%' } })
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
                  ' \xA0\xB7\xA0'
                )
              )
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
    auth: state.auth && state.auth.token
  };
};

exports.default = {
  component: (0, _reduxForm.reduxForm)({
    form: 'registrationForm'
  })((0, _reactRedux.connect)(mapStateToProps, { registerUser: _authActions.registerUser })(RegisterPage))
};

/***/ }),
/* 28 */
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactHelmet = __webpack_require__(3);

var _reactRouterDom = __webpack_require__(1);

var _reactRouterConfig = __webpack_require__(6);

var _authActions = __webpack_require__(4);

var _Header = __webpack_require__(30);

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
    value: function componentDidMount() {
      this.props.fetchCurrentUser();
    }
  }, {
    key: 'render',
    value: function render() {
      var route = this.props.route;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,700', rel: 'stylesheet' }),
          _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/admin.css' })
        ),
        _react2.default.createElement(_Header2.default, null),
        (0, _reactRouterConfig.renderRoutes)(route.routes)
      );
    }
  }]);

  return Backend;
}(_react.Component);

exports.default = {
  component: (0, _reactRedux.connect)(null, { fetchCurrentUser: _authActions.fetchCurrentUser })(Backend),
  loadData: function loadData(_ref) {
    var dispatch = _ref.dispatch;
    return dispatch((0, _authActions.fetchCurrentUser)());
  }
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(1);

var _authActions = __webpack_require__(4);

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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(3);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(1);

var _requireAuth = __webpack_require__(32);

var _requireAuth2 = _interopRequireDefault(_requireAuth);

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
                      this.props.user.name,
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
    user: state.user
  };
};

exports.default = {
  component: (0, _reactRedux.connect)(mapStateToProps, null)((0, _requireAuth2.default)(Dashboard)),
  loadData: function loadData(_ref) {
    var dispatch = _ref.dispatch;
  }
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(1);

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
            return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
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

  function mapStateToProps(_ref) {
    var auth = _ref.auth;

    return { auth: auth };
  }

  return (0, _reactRedux.connect)(mapStateToProps)(RequireAuth);
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(14);

var _reduxThunk = __webpack_require__(34);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(35);

var _axios2 = _interopRequireDefault(_axios);

var _reducers = __webpack_require__(36);

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
/* 34 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(14);

var _reduxForm = __webpack_require__(7);

var _authReducer = __webpack_require__(37);

var _authReducer2 = _interopRequireDefault(_authReducer);

var _postsReducer = __webpack_require__(38);

var _postsReducer2 = _interopRequireDefault(_postsReducer);

var _postReducer = __webpack_require__(39);

var _postReducer2 = _interopRequireDefault(_postReducer);

var _userReducer = __webpack_require__(40);

var _userReducer2 = _interopRequireDefault(_userReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  auth: _authReducer2.default,
  posts: _postsReducer2.default,
  post: _postReducer2.default,
  user: _userReducer2.default,
  form: _reduxForm.reducer
});

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _types = __webpack_require__(5);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments[1];

  switch (action.type) {
    case _types.AUTH_ERROR:
      return _extends({}, state, { error: action.payload });
    case _types.AUTH_USER:
      return _extends({}, state, { token: action.payload.token });
    case _types.UNAUTH_USER:
      return false;
    default:
      return state;
  }
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = __webpack_require__(5);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _types.FETCH_POSTS:
      return action.payload.data;
    default:
      return state;
  }
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = __webpack_require__(5);

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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = __webpack_require__(5);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _types.FETCH_CURRENT_USER:
      return action.payload.data || false;
    default:
      return state;
  }
};

/***/ })
/******/ ]);