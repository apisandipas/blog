import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducer'
import postsReducer from './postsReducer'
import postReducer from './postReducer'
import userReducer from './userReducer'

export default combineReducers({
  auth: authReducer,
  posts: postsReducer,
  post: postReducer,
  user: userReducer,
  form: formReducer
})
