import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './types'
import isomorphicCookie from 'isomorphic-cookie'

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
  isomorphicCookie.remove('token', {secure: false})   
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
    dispatch(authError('Bad registration info'));
  }
}

export const authUser = (token) => {
  return {
    type: AUTH_USER,
    payload: token
  }
}

export const authError = (error) =>{
  return {
    type: AUTH_ERROR,
    payload: error
  };
}
