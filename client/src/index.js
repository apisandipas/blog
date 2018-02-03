import 'babel-polyfill'
import express from 'express';
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'
import { matchRoutes } from 'react-router-config'
import isomorphicCookie from 'isomorphic-cookie'
import Routes from './client/Routes'


const app = express()

app.use(express.static('public'))

app.get('*', (req, res) => {
  const store = createStore(req)

  const cookie = isomorphicCookie.load('token', req)
  if (cookie) {
    store.dispatch({ type: 'auth_user', payload: { token: cookie}})
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
  })
})

app.listen(3002, () => {
  console.log('listening on port 3002')
})
