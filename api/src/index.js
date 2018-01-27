import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import env from 'dotenv'

env.config()

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())

app.get('/', (req, res) => {

  res.send(process.env.CRITICAL_CONFIG)
})

app.listen(3001, () => {
  console.log('API is listening on port 3001')
})

export default app
