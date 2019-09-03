import {
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIE_BY_GENRES_SUCCESS,
  LOAD_MOVIE_BY_TITLE_SUCCESS,
  LOAD_DATA_FAILED,
  LOADING_DATA
} from '../types/index'

const initialState = {
  isPending: false,
  movies: [],
  error: ''
}

const getMovies = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        isPending: true
      }
    case LOAD_DATA_FAILED:
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
    case LOAD_MOVIE_BY_GENRES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        isPending: false
      }
    case LOAD_MOVIE_BY_TITLE_SUCCESS:
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
