import 'babel-polyfill'
import express from 'express';
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'
import { matchRoutes } from 'react-router-config'
import isomorphicCookie from 'isomorphic-cookie'
import Routes from './app/Routes'
import { authUser } from './app/actions/authActions'

const app = express()
const PORT = process.env.PORT || 3002
app.use(express.static('public'))

app.get('*', (req, res) => {
  const store = createStore(req)
  const token = isomorphicCookie.load('token', req)

  if (token) {
    store.dispatch(authUser({token}))
  }

  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store, req) : Promise.resolve(null)
  })

  Promise.all(promises).then(() => {
    const context = {}
    const content = renderer(req, store, context)

    if (context.url) {
      return res.redirect(301, context.url)
    }
    if (context.notFound) {
      res.status(404)
    }

    res.send(content)
  }).catch((err) => console.log(err))
})

app.listen(PORT, () => {
  console.log('listening on port %d', PORT)
})
