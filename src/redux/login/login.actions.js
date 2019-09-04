import axios from 'axios'

import {
  LOGIN
} from '../../../services/moviesApi/index'

import {
  LOGIN_FAILED,
  LOGIN_PENDING,
  LOGIN_TMDB
} from '../types/index'

export const login = (dispatch) => {
  dispatch({
    type: LOGIN_PENDING
  })
  axios(LOGIN)
    .then(({ data }) => dispatch({
      type: LOGIN_TMDB,
      payload: data
    }))
    .catch(({ message }) => dispatch({
      type: LOGIN_FAILED,
      payload: message
    }))
}
