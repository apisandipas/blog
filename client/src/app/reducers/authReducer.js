import { AUTH_ERROR, AUTH_USER, UNAUTH_USER } from "../actions/types"
import jwt from 'jwt-simple'

export default (state = false, action) => {
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
        role 
      }
    case UNAUTH_USER:
      return {}
    default:
      return state
  }
}