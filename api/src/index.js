import 'babel-polyfill'
import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import env from 'dotenv'
import responseHelpers from './middleware/response-helpers'
import router from './router'
import db from './config/database'

// Load .env file
env.config()

const { PORT } = process.env
const app = express()
app.set('db', db);

// Load middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(responseHelpers())

app.get('/', (req, res) => {
  console.log(process.env.DB_DRIVER)
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
  console.log('API is listening on port %d', process.env.PORT)
})

export default app
