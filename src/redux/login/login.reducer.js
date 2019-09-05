import {
  LOGIN_FAILED,
  LOGIN_PENDING,
  LOGIN_TMDB,
  NEW_SESSION_PENDING,
  NEW_SESSION_FAILED,
  NEW_SESSION
} from '../types/index'

const initialState = {
  isPending: false,
  error: '',
  token: null,
  loggedIn: false,
  userSession: null
}

const userLogin = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_PENDING:
      return {
        ...state,
        isPending: true
      }
    case LOGIN_FAILED:
      return {
        ...state,
        error: action.payload,
        isPending: false
      }
    case LOGIN_TMDB:
      return {
        ...state,
        isPending: false,
        token: action.payload,
        loggedIn: true
      }
    case NEW_SESSION:
      return {
        ...state,
        loggedIn: true,
        userSession: action.payload
      }
    default:
      return state
  }
}

export default userLogin
