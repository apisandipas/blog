/**
 * A set of helper functions decorating the 
 * response object for better JSON API responses.
 */

/**
 * Map of HTTP Status codes.
 */
const Status = {
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
const statusMessage = (status) =>{
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
}

/**
 * Helper for sending JSON responses
 * @param res
 * @param body
 * @param options
 */
const jsonResponse = (res, body, options = {}) => {
  options.status = options.status || Status.OK;
  res.status(options.status).json(body || null);
}

module.exports = () =>{

  return (req, res, next) => {

    /**
     * Respond with `200 OK` and JSON-encoded data.
     * @param data Object
     */
      res.ok = (data) => {
        jsonResponse(res, data, {
          status: Status.OK
        });
      };


      /**
       * Respond with `400 Bad Request` and JSON-encoded error object, `{message:String,errors:Array}`.
       * @param errors Array (of String) or String
       */
      res.badRequest = (errors) => {
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
      res.unauthorized = () => {
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
      res.notFound = () => {
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
      res.unsupportedAction = () => {
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
      res.invalid = (errors) => {
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
      res.serverError = (error) => {
        if (error instanceof Error) {
          error = {
            message: error.message,
            // only send a stacktrace in development
            stacktrace: ('development' === res.app.get('env')) ? error.stack : {}
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

    }
};