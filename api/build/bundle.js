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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = __webpack_require__(11);

var _config2 = _interopRequireDefault(_config);

var _knex = __webpack_require__(12);

var _knex2 = _interopRequireDefault(_knex);

var _bookshelf = __webpack_require__(13);

var _bookshelf2 = _interopRequireDefault(_bookshelf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _knex2.default)(_config2.default.db);
var db = (0, _bookshelf2.default)(_knex2.default);

db.plugin('registry');
db.plugin('virtuals');
db.plugin('visibility');

exports.default = db;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(3);

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _morgan = __webpack_require__(4);

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = __webpack_require__(5);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _dotenv = __webpack_require__(6);

var _dotenv2 = _interopRequireDefault(_dotenv);

var _responseHelpers = __webpack_require__(7);

var _responseHelpers2 = _interopRequireDefault(_responseHelpers);

var _router = __webpack_require__(8);

var _router2 = _interopRequireDefault(_router);

var _database = __webpack_require__(1);

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Load .env file
_dotenv2.default.config();

var PORT = process.env.PORT;

var app = (0, _express2.default)();
app.set('db', _database2.default);

// Load middleare
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());
app.use((0, _responseHelpers2.default)());

app.get('/', function (req, res) {
  res.send("Status OK");
});

// magic starts here
app.use('/api', _router2.default);

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.serverError(new Error("Something went terribly wrong!"));
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.serverError();
});

app.listen(PORT, function () {
  console.log('API is listening on port %d', process.env.PORT);
});

exports.default = app;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A set of helper functions decorating the 
 * response object for better JSON API responses.
 */

/**
 * Map of HTTP Status codes.
 */
var Status = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  UNSUPPORTED_ACTION: 405,
  VALIDATION_FAILED: 422,
  SERVER_ERROR: 500
};

/**
 * Helper for returning the approriate HTTP error string
 * @param status
 * @returns {string}
 */
var statusMessage = function statusMessage(status) {
  switch (status) {
    case Status.BAD_REQUEST:
      return 'Bad Request';
    case Status.UNAUTHORIZED:
      return 'Unauthorized';
    case Status.NOT_FOUND:
      return 'Not Found';
    case Status.UNSUPPORTED_ACTION:
      return 'Unsupported Action';
    case Status.VALIDATION_FAILED:
      return 'Validation Failed';
    case Status.SERVER_ERROR:
      return 'Internal Server Error';
  }
};

/**
 * Helper for sending JSON responses
 * @param res
 * @param body
 * @param options
 */
var jsonResponse = function jsonResponse(res, body) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  options.status = options.status || Status.OK;
  res.status(options.status).json(body || null);
};

module.exports = function () {

  return function (req, res, next) {

    /**
     * Respond with `200 OK` and JSON-encoded data.
     * @param data Object
     */
    res.ok = function (data) {
      jsonResponse(res, data, {
        status: Status.OK
      });
    };

    /**
     * Respond with `400 Bad Request` and JSON-encoded error object, `{message:String,errors:Array}`.
     * @param errors Array (of String) or String
     */
    res.badRequest = function (errors) {
      errors = Array.isArray(errors) ? errors : [errors];

      var body = {
        message: statusMessage(Status.BAD_REQUEST),
        errors: errors
      };

      jsonResponse(res, body, {
        status: Status.BAD_REQUEST
      });
    };

    /**
     * Respond with `401 Unauthorized` and JSON-encoded error object, `{message:String}`.
     */
    res.unauthorized = function () {
      var body = {
        message: statusMessage(Status.UNAUTHORIZED)
      };

      jsonResponse(res, body, {
        status: Status.UNAUTHORIZED
      });
    };

    /**
     * Respond with `404 Not Found` and JSON-encoded error object, `{message:String}`.
     */
    res.notFound = function () {
      var body = {
        message: statusMessage(Status.NOT_FOUND)
      };

      jsonResponse(res, body, {
        status: Status.NOT_FOUND
      });
    };

    /**
     * Respond with `405 Method Not Allowed` and JSON-encoded error object, `{message:String}`.
     */
    res.unsupportedAction = function () {
      var body = {
        message: statusMessage(Status.UNSUPPORTED_ACTION)
      };

      jsonResponse(res, body, {
        status: Status.UNSUPPORTED_ACTION
      });
    };

    /**
     * Respond with `422 Unprocessable Entity` and JSON-encoded error object, `{message:String,errors:Array}`.
     * @param errors Array (of String) or String
     */
    res.invalid = function (errors) {
      errors = Array.isArray(errors) ? errors : [errors];

      var body = {
        message: statusMessage(Status.VALIDATION_FAILED),
        errors: errors
      };

      jsonResponse(res, body, {
        status: Status.VALIDATION_FAILED
      });
    };

    /**
     * Respond with `500 Internal Server Error` and JSON-encoded error object, `{message:String,error:Object}`.
     * @param error Object
     */
    res.serverError = function (error) {
      if (error instanceof Error) {
        error = {
          message: error.message,
          // only send a stacktrace in development
          stacktrace: 'development' === res.app.get('env') ? error.stack : {}
        };
      }
      var body = {
        message: statusMessage(Status.SERVER_ERROR),
        error: error
      };

      jsonResponse(res, body, {
        status: Status.SERVER_ERROR
      });
    };

    next();
  };
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _PostsController = __webpack_require__(9);

var _PostsController2 = _interopRequireDefault(_PostsController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// router.get('/users', users.list);
// router.post('/users', users.add);
// router.get('/users/:id', users.get);
// router.put('/users/:id', users.update);
// router.delete('/users/:id', users.delete);

router.get('/posts', _PostsController2.default.index);
// router.post('/pins', pins.add);
router.get('/posts/:id', _PostsController2.default.show);
// router.put('/pins/:id', pins.update);
// router.delete('/pins/:id', pins.delete);

router.get('/status', function (req, res) {
  res.send("OK");
});

exports.default = router;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _post = __webpack_require__(10);

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PostsController = function () {
  function PostsController() {
    _classCallCheck(this, PostsController);
  }

  _createClass(PostsController, [{
    key: 'index',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var posts;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _post2.default.fetchAll();

              case 3:
                posts = _context.sent;

                res.json(posts.toJSON());
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context['catch'](0);

                res.serverError(new Error(_context.t0.message));

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function index(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return index;
    }()
  }, {
    key: 'show',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var id, post;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = req.params.id;
                _context2.prev = 1;
                _context2.next = 4;
                return _post2.default.where('id', id).fetch();

              case 4:
                post = _context2.sent;

                res.send(post.toJSON());
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2['catch'](1);

                res.serverError(new Error(_context2.t0.message));

              case 11:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 8]]);
      }));

      function show(_x3, _x4) {
        return _ref2.apply(this, arguments);
      }

      return show;
    }()
  }]);

  return PostsController;
}();

exports.default = new PostsController();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _database = __webpack_require__(1);

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Post = _database2.default.Model.extend({
  tableName: 'posts'
});

exports.default = _database2.default.model('Post', Post);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _process$env = process.env,
    DB_DRIVER = _process$env.DB_DRIVER,
    DB_HOST = _process$env.DB_HOST,
    DB_USER = _process$env.DB_USER,
    DB_PASSWORD = _process$env.DB_PASSWORD,
    DB_PORT = _process$env.DB_PORT,
    DB_NAME = _process$env.DB_NAME,
    DB_CHARSET = _process$env.DB_CHARSET;
exports.default = {
  db: {
    client: DB_DRIVER || 'mysql',
    connection: {
      host: DB_HOST || 'localhost',
      user: DB_USER || 'homestead',
      password: DB_PASSWORD || 'secret',
      port: DB_PORT || '33060',
      database: DB_NAME || 'redux_blog',
      charset: DB_CHARSET || 'utf8'
    }
  }
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("knex");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("bookshelf");

/***/ })
/******/ ]);