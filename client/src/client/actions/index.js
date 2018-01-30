import { FETCH_POSTS, FETCH_CURRENT_USER } from './types'

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get('/current_user')

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


 