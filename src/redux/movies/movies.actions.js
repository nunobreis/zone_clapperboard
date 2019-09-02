import axios from 'axios'

import {
  GET_MOVIES,
  GET_MOVIES_BY_GENRE,
  GET_MOVIE_BY_TITLE
} from '../../../services/moviesApi/index'

import {
  LOADING_MOVIES,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES_FAILED,
  LOADING_MOVIE_BY_GENRES,
  LOAD_MOVIE_BY_GENRES_SUCCESS,
  LOAD_MOVIE_BY_GENRES_FAILED,
  LOADING_MOVIE_BY_TITLE,
  LOAD_MOVIE_BY_TITLE_SUCCESS,
  LOAD_MOVIE_BY_TITLE_FAILED
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

export const loadMoviesByGenre = (dispatch, genres) => {
  dispatch({
    type: LOADING_MOVIE_BY_GENRES
  })
  axios(GET_MOVIES_BY_GENRE + genres)
    .then(({ data }) => dispatch({
      type: LOAD_MOVIE_BY_GENRES_SUCCESS,
      payload: data
    }))
    .catch(({ message }) => dispatch({
      type: LOAD_MOVIE_BY_GENRES_FAILED,
      payload: message
    }))
}

export const loadMoviesByTitle = (dispatch, title) => {
  dispatch({
    type: LOADING_MOVIE_BY_TITLE
  })
  axios(GET_MOVIE_BY_TITLE + title)
    .then(({ data }) => dispatch({
      type: LOAD_MOVIE_BY_TITLE_SUCCESS,
      payload: data
    }))
    .catch(({ message }) => dispatch({
      type: LOAD_MOVIE_BY_TITLE_FAILED,
      payload: message
    }))
}
