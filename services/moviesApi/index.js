// on a real world app this key would never be in this file / be deployed to a public repo
export const API_KEY = 'api_key=b2a1db157d5c38da50264ca60afa6273'

const BASE_URL = 'https://api.themoviedb.org/3'

// get movies:
export const GET_MOVIES = `${BASE_URL}/movie/now_playing?${API_KEY}&language=en-US`

// get movie genres:
export const GET_MOVIE_GENRES = `${BASE_URL}/genre/movie/list?${API_KEY}&language=en-US`

// get movies by genre:
export const GET_MOVIES_BY_GENRE = `${BASE_URL}/discover/movie?${API_KEY}&with_genres=`

// get movie by title:
export const GET_MOVIE_BY_TITLE = `${BASE_URL}/search/movie?${API_KEY}&query=`

// login:
export const LOGIN = `${BASE_URL}/authentication/token/new?${API_KEY}`

// ask user for permission:
export const ASK_USER_PERMISSION = 'https://www.themoviedb.org/authenticate'

// create new session:
export const CREATE_NEW_SESSION = `${BASE_URL}/authentication/session/new?${API_KEY}`

// rate movie:
export const MOVIE_URL = `${BASE_URL}/movie`

// https://api.themoviedb.org/3/authentication/session/new?api_key=%3C%3Capi_key%3E%3E"
