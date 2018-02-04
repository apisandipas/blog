import { FETCH_POSTS, FETCH_POST, FETCH_CURRENT_USER, AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './types'
import isomorphicCookie from 'isomorphic-cookie'

export const fetchCurrentUser = () => async (dispatch, getState, { api, req }) => {
  try {
    const cookie = isomorphicCookie.load('token', req)
    const res = await api.get('/api/current-user', {
      headers: { authorization: cookie }
    })

    dispatch({
      type: FETCH_CURRENT_USER,
      payload: res
    })
  } catch(err) {
    console.log('error', err)
  }
}

export const fetchPosts = () => async (dispatch, getState, { api, req }) => {
  const res = await api.get('/api/posts')
  dispatch({
    type: FETCH_POSTS,
    payload: res
  })
}

export const fetchPost = (slug) => async (dispatch, getState, { api, req }) => {
  try {
    const res = await api.get(`/api/posts/${slug}`)
    dispatch({
      type: FETCH_POST,
      payload: res
    })
  } catch(err) {
    console.log(err)
  }
}

export const loginUser = (values) => async (dispatch, getState, { api, req }) => {
  try {
    const res = await api.post('/api/login', values)
    dispatch({
      type: AUTH_USER,
      payload: res.data
    })
    isomorphicCookie.save('token', res.data.token, {secure: false})
  } catch(err) {
    console.log(err)
    dispatch(authError('Bad Login Info'));
  }
}

export const logOut = () => async (dispatch) => {
  isomorphicCookie.remove('token', null, {secure: false})   
  dispatch({
    type: UNAUTH_USER
  })
}

export const registerUser = (values) => async (dispatch, getState, { api, req }) => {
  try {
    const res = await api.post('/api/register', values)
    dispatch({
      type: AUTH_USER,
      payload: res.data
    })
    isomorphicCookie.save('token', res.data.token, {secure: false})
  } catch(err) {
    console.log(err)
    dispatch(authError('Bad Login Info'));
  }
}

export const authError = (error) =>{
  return {
    type: AUTH_ERROR,
    payload: error
  };
}
