import { FETCH_CURRENT_USER, AUTH_ERROR } from "../actions/types"

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return action.payload.data || false
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    default:
      return state
  }
}