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

export const rateMovie = (dispatch, value, id, sessionId) => {
  const RATE_MOVIE_URL = `${MOVIE_URL}/${id}/rating?${API_KEY}&session_id=${sessionId}`
  dispatch({
    type: RATE_MOVIE_PENDING
  })
  axios.post(RATE_MOVIE_URL, {
    value
  })
    .then(({ data }) => dispatch({
      type: RATE_MOVIE,
      movieId: id,
      payload: data
    }))
    .catch(({ message }) => dispatch({
      type: RATE_MOVIE_FAILED,
      payload: message
    }))
}
