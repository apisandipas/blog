import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducer'
import postsReducer from './postsReducer'

export default combineReducers({
  auth: authReducer,
  posts: postsReducer,
  form: formReducer
})
