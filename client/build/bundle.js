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

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = 'fetch_current_user';
var FETCH_POSTS = exports.FETCH_POSTS = 'fetch_posts';
var FETCH_POST = exports.FETCH_POST = 'fetch_post';

var AUTH_USER = exports.AUTH_USER = 'auth_user';
var AUTH_ERROR = exports.AUTH_ERROR = 'auth_error';

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authError = exports.loginUser = exports.fetchPost = exports.fetchPosts = exports.fetchCurrentUser = undefined;

var _types = __webpack_require__(4);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return api.get('/api/current-user');

            case 2:
              res = _context.sent;


              dispatch({
                type: _types.FETCH_CURRENT_USER,
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
      return _ref.apply(this, arguments);
    };
  }();
};

var fetchPosts = exports.fetchPosts = function fetchPosts() {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return api.get('/api/posts');

            case 2:
              res = _context2.sent;

              dispatch({
                type: _types.FETCH_POSTS,
                payload: res
              });

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var fetchPost = exports.fetchPost = function fetchPost(slug) {
  return function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return api.get('/api/posts/' + slug);

            case 3:
              res = _context3.sent;

              dispatch({
                type: _types.FETCH_POST,
                payload: res
              });
              _context3.next = 10;
              break;

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3['catch'](0);

              console.log(_context3.t0);

            case 10:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined, [[0, 7]]);
    }));

    return function (_x7, _x8, _x9) {
      return _ref3.apply(this, arguments);
    };
  }();
};

var loginUser = exports.loginUser = function loginUser(_ref4) {
  var email = _ref4.email,
      password = _ref4.password;
  return function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return api.get('/api/login', { email: email, password: password });

            case 3:
              res = _context4.sent;

              dispatch({
                type: _types.AUTH_USER,
                payload: res.data
              });
              _context4.next = 10;
              break;

            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4['catch'](0);

              dispatch(authError('Bad Login Info'));

            case 10:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined, [[0, 7]]);
    }));

    return function (_x10, _x11, _x12) {
      return _ref5.apply(this, arguments);
    };
  }();
};

var authError = exports.authError = function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(19);

var _App2 = _interopRequireDefault(_App);

var _HomePage = __webpack_require__(21);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _PostPage = __webpack_require__(22);

var _PostPage2 = _interopRequireDefault(_PostPage);

var _LoginPage = __webpack_require__(23);

var _LoginPage2 = _interopRequireDefault(_LoginPage);

var _RegisterPage = __webpack_require__(24);

var _RegisterPage2 = _interopRequireDefault(_RegisterPage);

var _NotFoundPage = __webpack_require__(25);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
  routes: [_extends({}, _HomePage2.default, {
    path: '/',
    exact: true
  }), _extends({}, _PostPage2.default, {
    path: '/posts/:slug'
  }), _extends({}, _LoginPage2.default, {
    path: '/login'
  }), _extends({}, _RegisterPage2.default, {
    path: '/register'
  }), _extends({}, _NotFoundPage2.default)]
})];

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-nl2br");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("title-case");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("dateformat");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(14);

var _express = __webpack_require__(15);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(16);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(26);

var _createStore2 = _interopRequireDefault(_createStore);

var _reactRouterConfig = __webpack_require__(5);

var _expressHttpProxy = __webpack_require__(33);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _Routes = __webpack_require__(7);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/api', (0, _expressHttpProxy2.default)('http://localhost:3001', {
  proxyReqOptDecorator: function proxyReqOptDecorator(opts) {
    opts.headers['x-forwarded-host'] = 'localhost:3002';
    return opts;
  }
}));

app.use(_express2.default.static('public'));

app.get('*', function (req, res) {
  var store = (0, _createStore2.default)(req);
  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

    return route.loadData ? route.loadData(store, req) : null;
  }).map(function (promise) {
    if (promise) {
      return new Promise(function (resolve, reject) {
        promise.then(resolve).catch(resolve);
      });
    }
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
/* 14 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(17);

var _reactRouterDom = __webpack_require__(1);

var _reactRouterConfig = __webpack_require__(5);

var _serializeJavascript = __webpack_require__(18);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactRedux = __webpack_require__(3);

var _reactHelmet = __webpack_require__(2);

var _Routes = __webpack_require__(7);

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

  return '\n    <html>\n      <head>\n        ' + helmet.title.toString() + '\n        ' + helmet.meta.toString() + '\n        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.css">  \n        <link rel="stylesheet" type="text/css" href="/styles.css">  \n      </head>\n      <body>\n        <div id="root">' + content + '</div>\n        <script>window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '</script>\n        <script src="/bundle.js"></script>\n       </body>\n    </html>  \n  ';
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(5);

var _Header = __webpack_require__(20);

var _Header2 = _interopRequireDefault(_Header);

var _actions = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var route = _ref.route;

  return _react2.default.createElement(
    'div',
    { className: 'container' },
    _react2.default.createElement(_Header2.default, null),
    (0, _reactRouterConfig.renderRoutes)(route.routes)
  );
};

exports.default = {
  component: App
  // loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _reactRedux = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var auth = _ref.auth;


  var authButton = auth ? _react2.default.createElement(
    'a',
    { href: '/api/logout', className: 'navbar-item' },
    'Logout'
  ) : _react2.default.createElement(
    'a',
    { href: '/api/login', className: 'navbar-item' },
    'Login'
  );

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
        _react2.default.createElement(
          _reactRouterDom.Link,
          { className: 'navbar-item', to: '/login' },
          'Login'
        )
      )
    )
  );
};

function mapStateToProps(_ref2) {
  var auth = _ref2.auth;

  return {
    auth: auth
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(2);

var _reactRedux = __webpack_require__(3);

var _reactRouterDom = __webpack_require__(1);

var _lodash = __webpack_require__(34);

var _lodash2 = _interopRequireDefault(_lodash);

var _reactNl2br = __webpack_require__(8);

var _reactNl2br2 = _interopRequireDefault(_reactNl2br);

var _titleCase = __webpack_require__(9);

var _titleCase2 = _interopRequireDefault(_titleCase);

var _dateformat = __webpack_require__(10);

var _dateformat2 = _interopRequireDefault(_dateformat);

var _index = __webpack_require__(6);

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
      page: 1
    };
    return _this;
  }

  _createClass(HomePage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchPosts();
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
      var _this2 = this;

      var currentPage = this.state.page;
      return _react2.default.createElement(
        'nav',
        { className: 'pagination', role: 'navigation', 'aria-label': 'pagination', style: { marginTop: '25px' } },
        currentPage > 1 ? _react2.default.createElement(
          'a',
          { className: 'pagination-previous', onClick: function onClick() {
              return _this2.prevPage();
            } },
          'Previous'
        ) : _react2.default.createElement('a', null),
        currentPage < numPages ? _react2.default.createElement(
          'a',
          { className: 'pagination-next', onClick: function onClick() {
              return _this2.nextPage();
            } },
          'Next page'
        ) : _react2.default.createElement('a', null)
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
            this.renderPosts(posts),
            this.renderPagination(numPages)
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
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchPosts: _index.fetchPosts })(HomePage),
  loadData: function loadData(_ref) {
    var dispatch = _ref.dispatch;
    return dispatch((0, _index.fetchPosts)());
  }

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

var _reactHelmet = __webpack_require__(2);

var _reactRedux = __webpack_require__(3);

var _reactRouterDom = __webpack_require__(1);

var _reactNl2br = __webpack_require__(8);

var _reactNl2br2 = _interopRequireDefault(_reactNl2br);

var _titleCase = __webpack_require__(9);

var _titleCase2 = _interopRequireDefault(_titleCase);

var _dateformat = __webpack_require__(10);

var _dateformat2 = _interopRequireDefault(_dateformat);

var _index = __webpack_require__(6);

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
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchPost: _index.fetchPost })(PostPage),
  loadData: function loadData(_ref, _ref2) {
    var dispatch = _ref.dispatch;
    var path = _ref2.path;

    var slug = path.split('/')[2];
    return dispatch((0, _index.fetchPost)(slug));
  }

};

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

var _reactHelmet = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(1);

var _reduxForm = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginPage = function (_Component) {
  _inherits(LoginPage, _Component);

  function LoginPage() {
    _classCallCheck(this, LoginPage);

    return _possibleConstructorReturn(this, (LoginPage.__proto__ || Object.getPrototypeOf(LoginPage)).apply(this, arguments));
  }

  _createClass(LoginPage, [{
    key: 'handleSubmit',
    value: function handleSubmit(values) {
      console.log(values);
    }
  }, {
    key: 'render',
    value: function render() {
      var handleSubmit = this.props.handleSubmit;


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
                    _react2.default.createElement(
                      'div',
                      { className: 'field' },
                      _react2.default.createElement(
                        'div',
                        { className: 'control' },
                        _react2.default.createElement(_reduxForm.Field, {
                          name: 'email',
                          component: 'input',
                          type: 'email',
                          className: 'input is-large',
                          placeholder: 'Your Email',
                          autoFocus: 'true'
                        })
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'field' },
                      _react2.default.createElement(
                        'div',
                        { className: 'control' },
                        _react2.default.createElement(_reduxForm.Field, {
                          name: 'password',
                          component: 'input',
                          type: 'password',
                          className: 'input is-large',
                          placeholder: 'Your Password'
                        })
                      )
                    ),
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

exports.default = {
  component: (0, _reduxForm.reduxForm)({
    form: 'loginPage'
  })(LoginPage)
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

var _reactHelmet = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RegisterPage = function (_Component) {
  _inherits(RegisterPage, _Component);

  function RegisterPage() {
    _classCallCheck(this, RegisterPage);

    return _possibleConstructorReturn(this, (RegisterPage.__proto__ || Object.getPrototypeOf(RegisterPage)).apply(this, arguments));
  }

  _createClass(RegisterPage, [{
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
                    { onSubmit: this.handleSubmit },
                    _react2.default.createElement(
                      'div',
                      { className: 'field' },
                      _react2.default.createElement(
                        'div',
                        { className: 'control' },
                        _react2.default.createElement('input', { className: 'input is-large', type: 'text', placeholder: 'Your Name', autoFocus: 'true' })
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'field' },
                      _react2.default.createElement(
                        'div',
                        { className: 'control' },
                        _react2.default.createElement('input', { className: 'input is-large', type: 'email', placeholder: 'Your Email' })
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'field' },
                      _react2.default.createElement(
                        'div',
                        { className: 'control' },
                        _react2.default.createElement('input', { className: 'input is-large', type: 'password', placeholder: 'Your Password' })
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'field' },
                      _react2.default.createElement(
                        'div',
                        { className: 'control' },
                        _react2.default.createElement('input', { className: 'input is-large', type: 'password', placeholder: 'Confirm Password' })
                      )
                    ),
                    _react2.default.createElement(
                      'a',
                      { className: 'button is-block is-info is-large' },
                      'Register'
                    )
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

exports.default = {
  component: RegisterPage
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(12);

var _reduxThunk = __webpack_require__(27);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(28);

var _axios2 = _interopRequireDefault(_axios);

var _reducers = __webpack_require__(29);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  var axiosInstance = _axios2.default.create({
    baseURL: 'http://localhost:3001/',
    headers: { cookie: req.get('cookie') || '' }
  });

  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));
  return store;
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(12);

var _reduxForm = __webpack_require__(11);

var _authReducer = __webpack_require__(30);

var _authReducer2 = _interopRequireDefault(_authReducer);

var _postsReducer = __webpack_require__(31);

var _postsReducer2 = _interopRequireDefault(_postsReducer);

var _postReducer = __webpack_require__(32);

var _postReducer2 = _interopRequireDefault(_postReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  auth: _authReducer2.default,
  posts: _postsReducer2.default,
  post: _postReducer2.default,
  form: _reduxForm.reducer
});

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _types = __webpack_require__(4);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments[1];

  switch (action.type) {
    case _types.FETCH_CURRENT_USER:
      return action.payload.data || false;
    case _types.AUTH_ERROR:
      return _extends({}, state, { error: action.payload });
    default:
      return state;
  }
};

/***/ }),
/* 31 */
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
      return action.payload.data;
    default:
      return state;
  }
};

/***/ }),
/* 32 */
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
/* 33 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991,
    MAX_INTEGER = 1.7976931348623157e+308,
    NAN = 0 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax = Math.max;

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * _.chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 *
 * _.chunk(['a', 'b', 'c', 'd'], 3);
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size, guard) {
  if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
    size = 1;
  } else {
    size = nativeMax(toInteger(size), 0);
  }
  var length = array ? array.length : 0;
  if (!length || size < 1) {
    return [];
  }
  var index = 0,
      resIndex = 0,
      result = Array(nativeCeil(length / size));

  while (index < length) {
    result[resIndex++] = baseSlice(array, index, (index += size));
  }
  return result;
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = chunk;


/***/ })
/******/ ]);