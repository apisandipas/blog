import { FETCH_POSTS, FETCH_POST } from './types'


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