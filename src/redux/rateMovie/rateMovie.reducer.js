import {
  RATE_MOVIE,
  RATE_MOVIE_PENDING,
  RATE_MOVIE_FAILED
} from '../types/index'

const initialState = {
  isPending: false,
  error: '',
  movieId: null,
  ratingValue: null
}

const rateMovie = (state = initialState, action = {}) => {
  switch (action.type) {
    case RATE_MOVIE_PENDING:
      return {
        ...state,
        isPending: true
      }
    case RATE_MOVIE_FAILED:
      return {
        ...state,
        error: action.payload,
        isPending: false
      }
    case RATE_MOVIE:
      return {
        ...state,
        isPending: false,
        movieId: action.payload,
        ratingValue: action.payload
      }
    default:
      return state
  }
}

export default rateMovie
