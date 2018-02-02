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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"react\"\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"react-router-dom\"\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"react-redux\"\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"react-helmet\"\n// module id = 3\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.authError = exports.loginUser = exports.fetchPost = exports.fetchPosts = exports.fetchCurrentUser = undefined;\n\nvar _types = __webpack_require__(5);\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {\n  return function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return api.get('/api/current-user');\n\n            case 2:\n              res = _context.sent;\n\n\n              dispatch({\n                type: _types.FETCH_CURRENT_USER,\n                payload: res\n              });\n\n            case 4:\n            case 'end':\n              return _context.stop();\n          }\n        }\n      }, _callee, undefined);\n    }));\n\n    return function (_x, _x2, _x3) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\n\nvar fetchPosts = exports.fetchPosts = function fetchPosts() {\n  return function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return api.get('/api/posts');\n\n            case 2:\n              res = _context2.sent;\n\n              dispatch({\n                type: _types.FETCH_POSTS,\n                payload: res\n              });\n\n            case 4:\n            case 'end':\n              return _context2.stop();\n          }\n        }\n      }, _callee2, undefined);\n    }));\n\n    return function (_x4, _x5, _x6) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n};\n\nvar fetchPost = exports.fetchPost = function fetchPost(slug) {\n  return function () {\n    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.prev = 0;\n              _context3.next = 3;\n              return api.get('/api/posts/' + slug);\n\n            case 3:\n              res = _context3.sent;\n\n              dispatch({\n                type: _types.FETCH_POST,\n                payload: res\n              });\n              _context3.next = 10;\n              break;\n\n            case 7:\n              _context3.prev = 7;\n              _context3.t0 = _context3['catch'](0);\n\n              console.log(_context3.t0);\n\n            case 10:\n            case 'end':\n              return _context3.stop();\n          }\n        }\n      }, _callee3, undefined, [[0, 7]]);\n    }));\n\n    return function (_x7, _x8, _x9) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n};\n\nvar loginUser = exports.loginUser = function loginUser(values) {\n  return function () {\n    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch, getState, api) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              _context4.prev = 0;\n              _context4.next = 3;\n              return api.post('/api/login', values);\n\n            case 3:\n              res = _context4.sent;\n\n              dispatch({\n                type: _types.AUTH_USER,\n                payload: res.data\n              });\n              _context4.next = 11;\n              break;\n\n            case 7:\n              _context4.prev = 7;\n              _context4.t0 = _context4['catch'](0);\n\n              console.log(_context4.t0);\n              dispatch(authError('Bad Login Info'));\n\n            case 11:\n            case 'end':\n              return _context4.stop();\n          }\n        }\n      }, _callee4, undefined, [[0, 7]]);\n    }));\n\n    return function (_x10, _x11, _x12) {\n      return _ref4.apply(this, arguments);\n    };\n  }();\n};\n\nvar authError = exports.authError = function authError(error) {\n  return {\n    type: _types.AUTH_ERROR,\n    payload: error\n  };\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/client/actions/index.js\n// module id = 4\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/client/actions/index.js?");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = 'fetch_current_user';\nvar FETCH_POSTS = exports.FETCH_POSTS = 'fetch_posts';\nvar FETCH_POST = exports.FETCH_POST = 'fetch_post';\n\nvar AUTH_USER = exports.AUTH_USER = 'auth_user';\nvar AUTH_ERROR = exports.AUTH_ERROR = 'auth_error';\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/client/actions/types.js\n// module id = 5\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/client/actions/types.js?");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"react-router-config\"\n// module id = 6\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-form\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"redux-form\"\n// module id = 7\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22redux-form%22?");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _App = __webpack_require__(19);\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _HomePage = __webpack_require__(21);\n\nvar _HomePage2 = _interopRequireDefault(_HomePage);\n\nvar _PostPage = __webpack_require__(23);\n\nvar _PostPage2 = _interopRequireDefault(_PostPage);\n\nvar _LoginPage = __webpack_require__(24);\n\nvar _LoginPage2 = _interopRequireDefault(_LoginPage);\n\nvar _RegisterPage = __webpack_require__(25);\n\nvar _RegisterPage2 = _interopRequireDefault(_RegisterPage);\n\nvar _NotFoundPage = __webpack_require__(26);\n\nvar _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = [_extends({}, _App2.default, {\n  routes: [_extends({}, _HomePage2.default, {\n    path: '/',\n    exact: true\n  }), _extends({}, _PostPage2.default, {\n    path: '/posts/:slug'\n  }), _extends({}, _LoginPage2.default, {\n    path: '/login'\n  }), _extends({}, _RegisterPage2.default, {\n    path: '/register'\n  }), _extends({}, _NotFoundPage2.default)]\n})];\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/client/Routes.js\n// module id = 8\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/client/Routes.js?");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-nl2br\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"react-nl2br\"\n// module id = 9\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22react-nl2br%22?");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

eval("module.exports = require(\"title-case\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"title-case\"\n// module id = 10\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22title-case%22?");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

eval("module.exports = require(\"dateformat\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"dateformat\"\n// module id = 11\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22dateformat%22?");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"redux\"\n// module id = 12\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(14);\n\nvar _express = __webpack_require__(15);\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _renderer = __webpack_require__(16);\n\nvar _renderer2 = _interopRequireDefault(_renderer);\n\nvar _createStore = __webpack_require__(27);\n\nvar _createStore2 = _interopRequireDefault(_createStore);\n\nvar _reactRouterConfig = __webpack_require__(6);\n\nvar _expressHttpProxy = __webpack_require__(34);\n\nvar _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);\n\nvar _Routes = __webpack_require__(8);\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\n\n// app.use(\n//   '/api',\n//   proxy('http://localhost:3001', {\n//     proxyReqOptDecorator(opts) {\n//       opts.headers['x-forwarded-host'] = 'localhost:3002'\n//       return opts\n//     }\n//   })\n// )\n\napp.use(_express2.default.static('public'));\n\napp.get('*', function (req, res) {\n  var store = (0, _createStore2.default)(req);\n  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {\n    var route = _ref.route;\n\n    return route.loadData ? route.loadData(store, req) : null;\n  }).map(function (promise) {\n    if (promise) {\n      return new Promise(function (resolve, reject) {\n        promise.then(resolve).catch(resolve);\n      });\n    }\n  });\n\n  Promise.all(promises).then(function () {\n    var context = {};\n    var content = (0, _renderer2.default)(req, store, context);\n\n    if (context.url) {\n      return res.redirect(301, context.url);\n    }\n    if (context.notFound) {\n      res.status(404);\n    }\n\n    res.send(content);\n  });\n});\n\napp.listen(3002, function () {\n  console.log('listening on port 3002');\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/index.js\n// module id = 13\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"babel-polyfill\"\n// module id = 14\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"express\"\n// module id = 15\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(17);\n\nvar _reactRouterDom = __webpack_require__(1);\n\nvar _reactRouterConfig = __webpack_require__(6);\n\nvar _serializeJavascript = __webpack_require__(18);\n\nvar _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);\n\nvar _reactRedux = __webpack_require__(2);\n\nvar _reactHelmet = __webpack_require__(3);\n\nvar _Routes = __webpack_require__(8);\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (req, store, context) {\n  var content = (0, _server.renderToString)(_react2.default.createElement(\n    _reactRedux.Provider,\n    { store: store },\n    _react2.default.createElement(\n      _reactRouterDom.StaticRouter,\n      { location: req.path, context: context },\n      _react2.default.createElement(\n        'div',\n        null,\n        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)\n      )\n    )\n  ));\n\n  var helmet = _reactHelmet.Helmet.renderStatic();\n\n  return '\\n    <html>\\n      <head>\\n        ' + helmet.title.toString() + '\\n        ' + helmet.meta.toString() + '\\n        <link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.css\">  \\n        <link rel=\"stylesheet\" type=\"text/css\" href=\"/styles.css\">  \\n      </head>\\n      <body>\\n        <div id=\"root\">' + content + '</div>\\n        <script>window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '</script>\\n        <script src=\"/bundle.js\"></script>\\n       </body>\\n    </html>  \\n  ';\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/helpers/renderer.js\n// module id = 16\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/helpers/renderer.js?");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"react-dom/server\"\n// module id = 17\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"serialize-javascript\"\n// module id = 18\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterConfig = __webpack_require__(6);\n\nvar _Header = __webpack_require__(20);\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _actions = __webpack_require__(4);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function App(_ref) {\n  var route = _ref.route;\n\n  return _react2.default.createElement(\n    'div',\n    { className: 'container' },\n    _react2.default.createElement(_Header2.default, null),\n    (0, _reactRouterConfig.renderRoutes)(route.routes)\n  );\n};\n\nexports.default = {\n  component: App\n  // loadData: ({ dispatch }) => dispatch(fetchCurrentUser())\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/client/App.js\n// module id = 19\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/client/App.js?");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(1);\n\nvar _reactRedux = __webpack_require__(2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Header = function Header(_ref) {\n  var auth = _ref.auth;\n\n\n  var authButton = auth ? _react2.default.createElement(\n    'a',\n    { href: '/api/logout', className: 'navbar-item' },\n    'Logout'\n  ) : _react2.default.createElement(\n    'a',\n    { href: '/api/login', className: 'navbar-item' },\n    'Login'\n  );\n\n  return _react2.default.createElement(\n    'nav',\n    { className: 'navbar is-white' },\n    _react2.default.createElement(\n      'div',\n      { className: 'navbar-brand' },\n      _react2.default.createElement(\n        _reactRouterDom.Link,\n        { className: 'navbar-item brand-text', to: '/' },\n        'NERDPress'\n      ),\n      _react2.default.createElement(\n        'div',\n        { className: 'navbar-burger burger', 'data-target': 'navMenu' },\n        _react2.default.createElement('span', null),\n        _react2.default.createElement('span', null),\n        _react2.default.createElement('span', null)\n      )\n    ),\n    _react2.default.createElement(\n      'div',\n      { id: 'navMenu', className: 'navbar-menu' },\n      _react2.default.createElement(\n        'div',\n        { className: 'navbar-start' },\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { className: 'navbar-item', to: '/' },\n          'Home'\n        ),\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { className: 'navbar-item', to: '/archives' },\n          'Archives'\n        )\n      ),\n      _react2.default.createElement(\n        'div',\n        { className: 'navbar-end' },\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { className: 'navbar-item', to: '/login' },\n          'Login'\n        )\n      )\n    )\n  );\n};\n\nfunction mapStateToProps(_ref2) {\n  var auth = _ref2.auth;\n\n  return {\n    auth: auth\n  };\n}\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/client/components/Header.js\n// module id = 20\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/client/components/Header.js?");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactHelmet = __webpack_require__(3);\n\nvar _reactRedux = __webpack_require__(2);\n\nvar _reactRouterDom = __webpack_require__(1);\n\nvar _lodash = __webpack_require__(22);\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _reactNl2br = __webpack_require__(9);\n\nvar _reactNl2br2 = _interopRequireDefault(_reactNl2br);\n\nvar _titleCase = __webpack_require__(10);\n\nvar _titleCase2 = _interopRequireDefault(_titleCase);\n\nvar _dateformat = __webpack_require__(11);\n\nvar _dateformat2 = _interopRequireDefault(_dateformat);\n\nvar _index = __webpack_require__(4);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar HomePage = function (_Component) {\n  _inherits(HomePage, _Component);\n\n  function HomePage(props) {\n    _classCallCheck(this, HomePage);\n\n    var _this = _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, props));\n\n    _this.state = {\n      page: 1\n    };\n    return _this;\n  }\n\n  _createClass(HomePage, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.props.fetchPosts();\n    }\n  }, {\n    key: 'prevPage',\n    value: function prevPage() {\n      this.setState({\n        page: this.state.page - 1\n      });\n    }\n  }, {\n    key: 'nextPage',\n    value: function nextPage() {\n      this.setState({\n        page: this.state.page + 1\n      });\n    }\n  }, {\n    key: 'renderPosts',\n    value: function renderPosts(posts) {\n      return posts.map(function (post) {\n        return _react2.default.createElement(\n          'div',\n          { className: 'card article', key: post.id },\n          _react2.default.createElement(\n            'div',\n            { className: 'card-content' },\n            _react2.default.createElement(\n              'p',\n              { className: 'title article-title' },\n              _react2.default.createElement(\n                _reactRouterDom.Link,\n                { to: '/posts/' + post.slug },\n                (0, _titleCase2.default)(post.title)\n              )\n            ),\n            _react2.default.createElement(\n              'p',\n              { className: 'subtitle is-6 article-subtitle' },\n              _react2.default.createElement(\n                'a',\n                { href: '#' },\n                post.user.name\n              ),\n              ' on ',\n              (0, _dateformat2.default)(post.created_at, \"dddd, mmmm dS, yyyy, h:MM:ss TT\")\n            ),\n            _react2.default.createElement(\n              'div',\n              { className: 'content article-body' },\n              (0, _reactNl2br2.default)(post.excerpt)\n            )\n          )\n        );\n      });\n    }\n  }, {\n    key: 'renderPagination',\n    value: function renderPagination(numPages) {\n      var _this2 = this;\n\n      var currentPage = this.state.page;\n      return _react2.default.createElement(\n        'nav',\n        { className: 'pagination', role: 'navigation', 'aria-label': 'pagination', style: { marginTop: '25px' } },\n        currentPage > 1 ? _react2.default.createElement(\n          'a',\n          { className: 'pagination-previous', onClick: function onClick() {\n              return _this2.prevPage();\n            } },\n          'Previous'\n        ) : _react2.default.createElement('a', null),\n        currentPage < numPages ? _react2.default.createElement(\n          'a',\n          { className: 'pagination-next', onClick: function onClick() {\n              return _this2.nextPage();\n            } },\n          'Next page'\n        ) : _react2.default.createElement('a', null)\n      );\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var posts_per_page = 10;\n      var posts = (0, _lodash2.default)(this.props.posts, posts_per_page)[this.state.page - 1];\n      var numPages = Math.round(this.props.posts.length / posts_per_page);\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _reactHelmet.Helmet,\n          null,\n          _react2.default.createElement(\n            'title',\n            null,\n            'NERDPress | Home Page'\n          ),\n          _react2.default.createElement('meta', { property: 'og:title', content: 'NERDPress | Home Page' })\n        ),\n        _react2.default.createElement(\n          'section',\n          { className: 'articles' },\n          _react2.default.createElement(\n            'div',\n            { className: 'column is-8 is-offset-2' },\n            this.renderPosts(posts),\n            this.renderPagination(numPages)\n          )\n        )\n      );\n    }\n  }]);\n\n  return HomePage;\n}(_react.Component);\n\nfunction mapStateToProps(state) {\n  return {\n    posts: state.posts\n  };\n}\n\nexports.default = {\n  component: (0, _reactRedux.connect)(mapStateToProps, { fetchPosts: _index.fetchPosts })(HomePage),\n  loadData: function loadData(_ref) {\n    var dispatch = _ref.dispatch;\n    return dispatch((0, _index.fetchPosts)());\n  }\n\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/client/pages/HomePage.js\n// module id = 21\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/client/pages/HomePage.js?");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash.chunk\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"lodash.chunk\"\n// module id = 22\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22lodash.chunk%22?");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactHelmet = __webpack_require__(3);\n\nvar _reactRedux = __webpack_require__(2);\n\nvar _reactRouterDom = __webpack_require__(1);\n\nvar _reactNl2br = __webpack_require__(9);\n\nvar _reactNl2br2 = _interopRequireDefault(_reactNl2br);\n\nvar _titleCase = __webpack_require__(10);\n\nvar _titleCase2 = _interopRequireDefault(_titleCase);\n\nvar _dateformat = __webpack_require__(11);\n\nvar _dateformat2 = _interopRequireDefault(_dateformat);\n\nvar _index = __webpack_require__(4);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar PostPage = function (_Component) {\n  _inherits(PostPage, _Component);\n\n  function PostPage() {\n    _classCallCheck(this, PostPage);\n\n    return _possibleConstructorReturn(this, (PostPage.__proto__ || Object.getPrototypeOf(PostPage)).apply(this, arguments));\n  }\n\n  _createClass(PostPage, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var slug = this.props.match.params.slug;\n\n      this.props.fetchPost(slug);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var post = this.props.post;\n\n      var user = post.user;\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _reactHelmet.Helmet,\n          null,\n          _react2.default.createElement(\n            'title',\n            null,\n            'NERDPress | Post Page'\n          ),\n          _react2.default.createElement('meta', { property: 'og:title', content: 'NERDPress | Post Page' })\n        ),\n        _react2.default.createElement(\n          'section',\n          { className: 'article' },\n          _react2.default.createElement(\n            'div',\n            { className: 'column is-8 is-offset-2' },\n            _react2.default.createElement(\n              'div',\n              { className: 'card' },\n              _react2.default.createElement(\n                'div',\n                { className: 'card-content' },\n                _react2.default.createElement(\n                  'p',\n                  { className: 'title article-title' },\n                  (0, _titleCase2.default)(post.title)\n                ),\n                _react2.default.createElement(\n                  'p',\n                  { className: 'subtitle is-6 article-subtitle' },\n                  _react2.default.createElement(\n                    'a',\n                    { href: '#' },\n                    user && user.name\n                  ),\n                  ' on ',\n                  (0, _dateformat2.default)(post.created_at, \"dddd, mmmm dS, yyyy, h:MM:ss TT\")\n                ),\n                _react2.default.createElement(\n                  'div',\n                  { className: 'content article-body' },\n                  (0, _reactNl2br2.default)(post.body)\n                )\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return PostPage;\n}(_react.Component);\n\nfunction mapStateToProps(state) {\n  return {\n    post: state.post\n  };\n}\n\nexports.default = {\n  component: (0, _reactRedux.connect)(mapStateToProps, { fetchPost: _index.fetchPost })(PostPage),\n  loadData: function loadData(_ref, _ref2) {\n    var dispatch = _ref.dispatch;\n    var path = _ref2.path;\n\n    var slug = path.split('/')[2];\n    return dispatch((0, _index.fetchPost)(slug));\n  }\n\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/client/pages/PostPage.js\n// module id = 23\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/client/pages/PostPage.js?");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactHelmet = __webpack_require__(3);\n\nvar _reactRouterDom = __webpack_require__(1);\n\nvar _reduxForm = __webpack_require__(7);\n\nvar _reactRedux = __webpack_require__(2);\n\nvar _actions = __webpack_require__(4);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar LoginPage = function (_Component) {\n  _inherits(LoginPage, _Component);\n\n  function LoginPage(props) {\n    _classCallCheck(this, LoginPage);\n\n    var _this = _possibleConstructorReturn(this, (LoginPage.__proto__ || Object.getPrototypeOf(LoginPage)).call(this, props));\n\n    _this.handleSubmit = _this.handleSubmit.bind(_this);\n    return _this;\n  }\n\n  _createClass(LoginPage, [{\n    key: 'handleSubmit',\n    value: function handleSubmit(values) {\n      // console.log(values)\n\n      this.props.loginUser(values);\n    }\n  }, {\n    key: 'renderField',\n    value: function renderField(field) {\n      return _react2.default.createElement(\n        'div',\n        { className: 'field' },\n        _react2.default.createElement(\n          'div',\n          { className: 'control' },\n          _react2.default.createElement('input', _extends({}, field.input, {\n            name: field.name,\n            type: field.type,\n            className: 'input is-large',\n            placeholder: field.placeholder\n          }))\n        )\n      );\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var handleSubmit = this.props.handleSubmit;\n\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _reactHelmet.Helmet,\n          null,\n          _react2.default.createElement(\n            'title',\n            null,\n            'NERDPress | Login'\n          ),\n          _react2.default.createElement('meta', { property: 'og:title', content: 'NERDPress | Login' })\n        ),\n        _react2.default.createElement(\n          'section',\n          { className: 'hero is-success is-fullheight' },\n          _react2.default.createElement(\n            'div',\n            { className: 'hero-body' },\n            _react2.default.createElement(\n              'div',\n              { className: 'container has-text-centered' },\n              _react2.default.createElement(\n                'div',\n                { className: 'column is-4 is-offset-4' },\n                _react2.default.createElement(\n                  'h3',\n                  { className: 'title has-text-grey' },\n                  'Login'\n                ),\n                _react2.default.createElement(\n                  'p',\n                  { className: 'subtitle has-text-grey' },\n                  'Please login to proceed.'\n                ),\n                _react2.default.createElement(\n                  'div',\n                  { className: 'box' },\n                  _react2.default.createElement(\n                    'form',\n                    { onSubmit: handleSubmit(this.handleSubmit) },\n                    _react2.default.createElement(_reduxForm.Field, {\n                      name: 'email',\n                      component: this.renderField,\n                      type: 'email',\n                      placeholder: 'Your Email'\n                    }),\n                    _react2.default.createElement(_reduxForm.Field, {\n                      name: 'password',\n                      component: this.renderField,\n                      type: 'password',\n                      placeholder: 'Your Password'\n                    }),\n                    _react2.default.createElement('input', { type: 'submit', value: 'Login', className: 'button is-block is-info is-large', style: { width: '100%' } })\n                  )\n                ),\n                _react2.default.createElement(\n                  'p',\n                  { className: 'has-text-grey' },\n                  _react2.default.createElement(\n                    _reactRouterDom.Link,\n                    { to: '/register' },\n                    'Register'\n                  )\n                )\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return LoginPage;\n}(_react.Component);\n\nexports.default = {\n  component: (0, _reduxForm.reduxForm)({\n    form: 'loginForm'\n  })((0, _reactRedux.connect)(null, { loginUser: _actions.loginUser })(LoginPage))\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/client/pages/LoginPage.js\n// module id = 24\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/client/pages/LoginPage.js?");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactHelmet = __webpack_require__(3);\n\nvar _reactRouterDom = __webpack_require__(1);\n\nvar _reduxForm = __webpack_require__(7);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar RegisterPage = function (_Component) {\n  _inherits(RegisterPage, _Component);\n\n  function RegisterPage() {\n    _classCallCheck(this, RegisterPage);\n\n    return _possibleConstructorReturn(this, (RegisterPage.__proto__ || Object.getPrototypeOf(RegisterPage)).apply(this, arguments));\n  }\n\n  _createClass(RegisterPage, [{\n    key: 'handleSubmit',\n    value: function handleSubmit(values) {}\n  }, {\n    key: 'renderField',\n    value: function renderField(field) {\n      return _react2.default.createElement(\n        'div',\n        { className: 'field' },\n        _react2.default.createElement(\n          'div',\n          { className: 'control' },\n          _react2.default.createElement('input', _extends({}, field.input, {\n            name: field.name,\n            type: field.type,\n            className: 'input is-large',\n            placeholder: field.placeholder\n          }))\n        )\n      );\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var handleSubmit = this.props.handleSubmit;\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _reactHelmet.Helmet,\n          null,\n          _react2.default.createElement(\n            'title',\n            null,\n            'NERDPress | Register'\n          ),\n          _react2.default.createElement('meta', { property: 'og:title', content: 'NERDPress | Register' })\n        ),\n        _react2.default.createElement(\n          'section',\n          { className: 'hero is-success is-fullheight' },\n          _react2.default.createElement(\n            'div',\n            { className: 'hero-body' },\n            _react2.default.createElement(\n              'div',\n              { className: 'container has-text-centered' },\n              _react2.default.createElement(\n                'div',\n                { className: 'column is-4 is-offset-4' },\n                _react2.default.createElement(\n                  'h3',\n                  { className: 'title has-text-grey' },\n                  'Register'\n                ),\n                _react2.default.createElement(\n                  'p',\n                  { className: 'subtitle has-text-grey' },\n                  'Please register for an account.'\n                ),\n                _react2.default.createElement(\n                  'div',\n                  { className: 'box' },\n                  _react2.default.createElement(\n                    'form',\n                    { onSubmit: handleSubmit(this.handleSubmit) },\n                    _react2.default.createElement(_reduxForm.Field, {\n                      name: 'name',\n                      component: this.renderField,\n                      type: 'text',\n                      placeholder: 'Your Name'\n                    }),\n                    _react2.default.createElement(_reduxForm.Field, {\n                      name: 'email',\n                      component: this.renderField,\n                      type: 'email',\n                      placeholder: 'Your Email'\n                    }),\n                    _react2.default.createElement(_reduxForm.Field, {\n                      name: 'password',\n                      component: this.renderField,\n                      type: 'password',\n                      placeholder: 'Your Password'\n                    }),\n                    _react2.default.createElement(_reduxForm.Field, {\n                      name: 'passwordConfirm',\n                      component: this.renderField,\n                      type: 'password',\n                      placeholder: 'Confirm Password'\n                    }),\n                    _react2.default.createElement(\n                      'a',\n                      { className: 'button is-block is-info is-large' },\n                      'Register'\n                    )\n                  )\n                ),\n                _react2.default.createElement(\n                  'p',\n                  { className: 'has-text-grey' },\n                  _react2.default.createElement(\n                    _reactRouterDom.Link,\n                    { to: '/login' },\n                    'Login'\n                  ),\n                  ' \\xA0\\xB7\\xA0'\n                )\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return RegisterPage;\n}(_react.Component);\n\nexports.default = {\n  component: (0, _reduxForm.reduxForm)({\n    form: 'registrationForm'\n  })(RegisterPage)\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/client/pages/RegisterPage.js\n// module id = 25\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/client/pages/RegisterPage.js?");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar NotFoundPage = function NotFoundPage(_ref) {\n  var _ref$staticContext = _ref.staticContext,\n      staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;\n\n  staticContext.notFound = true;\n  return _react2.default.createElement(\n    'h1',\n    { className: 'center-align', style: { marginTop: '200px' } },\n    'Not Found'\n  );\n};\n\nexports.default = {\n  component: NotFoundPage\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/client/pages/NotFoundPage.js\n// module id = 26\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/client/pages/NotFoundPage.js?");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(12);\n\nvar _reduxThunk = __webpack_require__(28);\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _axios = __webpack_require__(29);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _reducers = __webpack_require__(30);\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (req) {\n  var axiosInstance = _axios2.default.create({\n    baseURL: 'http://localhost:3001/',\n    headers: { cookie: req.get('cookie') || '' }\n  });\n\n  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));\n  return store;\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/helpers/createStore.js\n// module id = 27\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/helpers/createStore.js?");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"redux-thunk\"\n// module id = 28\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"axios\"\n// module id = 29\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(12);\n\nvar _reduxForm = __webpack_require__(7);\n\nvar _authReducer = __webpack_require__(31);\n\nvar _authReducer2 = _interopRequireDefault(_authReducer);\n\nvar _postsReducer = __webpack_require__(32);\n\nvar _postsReducer2 = _interopRequireDefault(_postsReducer);\n\nvar _postReducer = __webpack_require__(33);\n\nvar _postReducer2 = _interopRequireDefault(_postReducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _redux.combineReducers)({\n  auth: _authReducer2.default,\n  posts: _postsReducer2.default,\n  post: _postReducer2.default,\n  form: _reduxForm.reducer\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/client/reducers/index.js\n// module id = 30\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/client/reducers/index.js?");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _types = __webpack_require__(5);\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _types.FETCH_CURRENT_USER:\n      return action.payload.data || false;\n    case _types.AUTH_ERROR:\n      return _extends({}, state, { error: action.payload });\n    case _types.AUTH_USER:\n      console.log(action);\n      return _extends({}, state, { token: action.payload.token });\n    default:\n      return state;\n  }\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/client/reducers/authReducer.js\n// module id = 31\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/client/reducers/authReducer.js?");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _types = __webpack_require__(5);\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _types.FETCH_POSTS:\n      return action.payload.data;\n    default:\n      return state;\n  }\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/client/reducers/postsReducer.js\n// module id = 32\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/client/reducers/postsReducer.js?");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _types = __webpack_require__(5);\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _types.FETCH_POST:\n      return action.payload.data;\n    default:\n      return state;\n  }\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/client/reducers/postReducer.js\n// module id = 33\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/client/reducers/postReducer.js?");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-http-proxy\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"express-http-proxy\"\n// module id = 34\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22express-http-proxy%22?");

/***/ })
/******/ ]);