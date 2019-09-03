import {
  LOADING_DATA,
  LOAD_GENRES_SUCCESS,
  LOAD_DATA_FAILED
} from '../types/index'

import { initialState } from './genres.selectors'

const getGenres = (state = initialState, action = {}) => {
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
