import axios from 'axios'

import {
  GET_MOVIES
} from '../../../services/moviesApi/index'

import {
  LOADING_MOVIES,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES_FAILED
} from '../types/index'

export const loadMovies = (dispatch) => {
  dispatch({
    type: LOADING_MOVIES
  })
  axios(GET_MOVIES)
    .then(({ data }) => dispatch({
      type: LOAD_MOVIES_SUCCESS,
      payload: data
    }))
    .catch(({ message }) => dispatch({
      type: LOAD_MOVIES_FAILED,
      payload: message
    }))
}
