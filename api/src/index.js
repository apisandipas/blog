import 'babel-polyfill'
import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'
import passport from 'passport'
import expressValidator from 'express-validator'
import env from 'dotenv'
import responseHelpers from './middleware/response-helpers'
import router from './router'
import './services/passport'

// Load .env file
env.config()

const { PORT, COOKIE_KEY } = process.env
const app = express()

// Load middleware
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(expressValidator())
app.use(responseHelpers())
app.use(passport.initialize())
app.use(passport.session())

app.get('/', (req, res) => {
  res.send("Status OK")
})

// magic starts here
app.use('/api', router);

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.serverError(new Error("Something went terribly wrong!"));
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.serverError();
});

app.listen(PORT, () => {
  console.log('API is listening on port %d', PORT)
})

export default app
