import { CHANGE_SEARCH_FIELD } from '../types/index'

const initialState = {
  searchField: ''
}

const searchMovies = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return {
        ...state,
        searchField: action.text
      }
    default:
      return state
  }
}

export default searchMovies
