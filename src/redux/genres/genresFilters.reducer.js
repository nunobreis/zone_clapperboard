import {
  SELECT_GENRE
} from '../types/index'

const initialState = []

const genresFilters = (state = initialState, action = {}) => {
  switch (action.type) {
    case SELECT_GENRE:
      if (state.find(genre => genre === action.id)) {
        const removeGenre = state.filter(genre => genre !== action.id)
        return [
          ...removeGenre
        ]
      }
      return [
        ...state,
        action.id
      ]
    default:
      return state
  }
}

export default genresFilters
