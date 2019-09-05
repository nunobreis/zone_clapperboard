import axios from 'axios'

import {
  LOGIN,
  CREATE_NEW_SESSION
} from '../../../services/moviesApi/index'

import {
  LOGIN_FAILED,
  LOGIN_PENDING,
  LOGIN_TMDB,
  NEW_SESSION_PENDING,
  NEW_SESSION_FAILED,
  NEW_SESSION
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

export const newSession = (dispatch, requestToken) => {
  dispatch({
    type: NEW_SESSION_PENDING
  })
  axios.post(CREATE_NEW_SESSION, {
    request_token: requestToken
  })
    .then(({ data }) => dispatch({
      type: NEW_SESSION,
      payload: data
    }))
    .catch(({ message }) => dispatch({
      type: NEW_SESSION_FAILED,
      payload: message
    }))
}
