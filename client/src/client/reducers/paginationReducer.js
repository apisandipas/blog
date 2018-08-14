import { FETCH_POSTS } from "../actions/types"

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS:
    console.log('action.payload.data', action.payload.data)
      return action.payload.data.pagination
    default:
      return state
  }
}
