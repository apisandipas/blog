import { FETCH_POSTS, FETCH_POST, FETCH_CURRENT_USER, AUTH_USER } from './types'

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get('/api/current-user')

  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res
  })
}

export const fetchPosts = () => async (dispatch, getState, api) => {
  const res = await api.get('/api/posts')
  dispatch({
    type: FETCH_POSTS,
    payload: res
  })
}

export const fetchPost = (id) => async (dispatch, getState, api) => {
  try {
    const res = await api.get(`/api/posts/${id}`)
    dispatch({
      type: FETCH_POST,
      payload: res
    })
  } catch(err) {
    console.log(err)
  }

}

export const loginUser = ({ email, password }) => async (dispatch, getState, api) => {
  try {
    const res = await api.get('/api/login', { email, password })
    dispatch({
      type: AUTH_USER,
      payload: res.data
    })
  } catch(err) {
    dispatch(authError('Bad Login Info'));
  }
}

export const authError = (error) =>{
  return {
    type: AUTH_ERROR,
    payload: error
  };
}
