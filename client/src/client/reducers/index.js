import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducer'
import postsReducer from './postsReducer'
import postReducer from './postReducer'
import paginationReducer from './paginationReducer'

export default combineReducers({
  auth: authReducer,
  posts: postsReducer,
  post: postReducer,
  form: formReducer,
  pagination: paginationReducer
})
