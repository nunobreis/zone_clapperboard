import axios from 'axios'

import {
  GET_MOVIE_GENRES
} from '../../../services/moviesApi/index'
import {
  LOADING_DATA,
  LOAD_GENRES_SUCCESS,
  LOAD_DATA_FAILED,
  SELECT_GENRE
} from '../types/index'

export const loadGenres = (dispatch) => {
  dispatch({
    type: LOADING_DATA
  })
  axios(GET_MOVIE_GENRES)
    .then(({ data }) => dispatch({
      type: LOAD_GENRES_SUCCESS,
      payload: data
    }))
    .catch(({ message }) => dispatch({
      type: LOAD_DATA_FAILED,
      payload: message
    }))
}

export const selectGenre = id => ({
  type: SELECT_GENRE,
  id
})
