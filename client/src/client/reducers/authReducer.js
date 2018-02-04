import { FETCH_CURRENT_USER, AUTH_ERROR, AUTH_USER, UNAUTH_USER } from "../actions/types"

export default (state = false, action) => {
  switch (action.type) {
    case AUTH_ERROR:
      return { ...state, error: action.payload }
    case AUTH_USER:
      return { ...state, token: action.payload.token }
    case UNAUTH_USER:
      return false
    default:
      return state
  }
}