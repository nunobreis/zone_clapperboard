import {
  LOADING_GENRES,
  LOAD_GENRES_SUCCESS,
  LOAD_GENRES_FAILED
} from '../types/index'

const initialState = {
  isPending: false,
  genres: [],
  error: ''
}

const getGenres = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOADING_GENRES:
      return {
        ...state,
        isPending: true
      }
    case LOAD_GENRES_FAILED:
      return {
        ...state,
        error: action.payload,
        isPending: false
      }
    case LOAD_GENRES_SUCCESS:
      return {
        ...state,
        genres: action.payload,
        isPending: false
      }
    default:
      return state
  }
}

export default getGenres
