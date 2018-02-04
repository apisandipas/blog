import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'
import reducers from '../client/reducers'

export default (req) => {
  const api = axios.create({
    baseURL: 'http://localhost:3001/'
  })

  const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument({api, req}))
  )
  return store
}
