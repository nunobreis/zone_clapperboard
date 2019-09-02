import {
  LOADING_MOVIES,
  LOAD_MOVIES_FAILED,
  LOAD_MOVIES_SUCCESS,
  LOADING_MOVIE_BY_GENRES,
  LOAD_MOVIE_BY_GENRES_SUCCESS,
  LOAD_MOVIE_BY_GENRES_FAILED,
  LOADING_MOVIE_BY_TITLE,
  LOAD_MOVIE_BY_TITLE_SUCCESS,
  LOAD_MOVIE_BY_TITLE_FAILED
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
    case LOADING_MOVIE_BY_GENRES:
      return {
        ...state,
        isPending: true
      }
    case LOAD_MOVIE_BY_GENRES_FAILED:
      return {
        ...state,
        error: action.payload,
        isPending: false
      }
    case LOAD_MOVIE_BY_GENRES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        isPending: false
      }
    case LOADING_MOVIE_BY_TITLE:
      return {
        ...state,
        isPending: true
      }
    case LOAD_MOVIE_BY_TITLE_FAILED:
      return {
        ...state,
        error: action.payload,
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
