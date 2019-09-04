import axios from 'axios'

import {
  MOVIE_URL,
  API_KEY
} from '../../../services/moviesApi/index'

import {
  RATE_MOVIE,
  RATE_MOVIE_PENDING,
  RATE_MOVIE_FAILED
} from '../types/index'

export const rateMovie = (dispatch, value, id) => {
  const RATE_MOVIE_URL = `${MOVIE_URL}/${id}/rating?${API_KEY}`
  dispatch({
    type: RATE_MOVIE_PENDING
  })
  axios.post(RATE_MOVIE_URL, {
    movie_id: id,
    value
  })
    .then(({ data }) => dispatch({
      type: RATE_MOVIE,
      payload: data
    }))
    .catch(({ message }) => dispatch({
      type: RATE_MOVIE_FAILED,
      payload: message
    }))
}
