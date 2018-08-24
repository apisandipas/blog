import { AUTH_ERROR, AUTH_USER, UNAUTH_USER, FORGOT_PASSWORD, RESET_PASSWORD } from "../actions/types"
import jwt from 'jwt-simple'

const defaultState = { error: '' }
export default (state = defaultState, action) => {
  switch (action.type) {
    case AUTH_ERROR:
      return { ...state, error: action.payload }
    case AUTH_USER:
      const { token }  = action.payload
      const decoded = jwt.decode(token, JWT_SECRET)
      const { id, name, email, role } = decoded
      return {
        ...state,
        token,
        id,
        name,
        email,
        role,
        error: null
      }
    case RESET_PASSWORD:
    case FORGOT_PASSWORD:
      return {
        ...state,
        message: action.payload.message
      }
    case UNAUTH_USER:
      return {}
    default:
      return state
  }
}
