import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FORGOT_PASSWORD, RESET_PASSWORD } from './types'
import isomorphicCookie from 'isomorphic-cookie'

export const loginUser = (values) => async (dispatch, getState, { api, req }) => {
  try {
    const res = await api.post('/api/login', values)
    const { token } = res.data
    dispatch(authUser({ token }))
    isomorphicCookie.save('token', token, {secure: false})
  } catch(err) {
    console.log('error', err)
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
    dispatch(authUser({token: res.data.token}))
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

export const forgotPassword = (email) => async (dispatch, getState, { api, req }) => {
  try {
    const res = await api.post('/api/forgot-password', email)
    dispatch({
      type: FORGOT_PASSWORD,
      payload: res.data
    })
  } catch (err) {
    console.log('error', err)
    dispatch(authError('Something went wrong'))
  }
}

export const resetPassword = (payload) => async (dispatch, getState, { api, req }) => {
  try {
    const res = await api.post('/api/reset-password', payload)
    dispatch({
      type: RESET_PASSWORD,
      payload: res.data
    })
  } catch (err) {
    console.log('error', err)
    dispatch(authError('Something went wrong'))
  }
}
