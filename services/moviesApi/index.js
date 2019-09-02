// on a real world app this key would never be in this file / be deployed to a public repo
const API_KEY = 'api_key=b2a1db157d5c38da50264ca60afa6273'

const API = 'https://api.themoviedb.org/3'

// get movies:
export const GET_MOVIES = `${API}/movie/now_playing?${API_KEY}&language=en-US`

// get movie genres:
export const GET_MOVIE_GENRES = `${API}/genre/movie/list?${API_KEY}&language=en-US`

// get movies by genre:
export const GET_MOVIES_BY_GENRE = `${API}/discover/movie?${API_KEY}&with_genres=`

// get movie by title:
export const GET_MOVIE_BY_TITLE = `${API}/search/movie?${API_KEY}&query=`
