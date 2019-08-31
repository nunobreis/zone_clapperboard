import {
  LOADING_MOVIES,
  LOAD_MOVIES_FAILED,
  LOAD_MOVIES_SUCCESS
} from '../types/index'

const initialState = {
  isPending: false,
  movies: [],
  error: ''
}

const getMovies = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOADING_MOVIES:
      return {
        ...state,
        isPending: true
      }
    case LOAD_MOVIES_FAILED:
      return {
        ...state,
        error: action.payload,
        isPending: false
      }
    case LOAD_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        isPending: false
      }
    default:
      return state
  }
}

export default getMovies
