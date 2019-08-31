import axios from 'axios'

// on a real world app this key would never be in this file / be deployed to a public repo
const API_KEY = 'api_key=b2a1db157d5c38da50264ca60afa6273'

const API = 'https://api.themoviedb.org/3'

// get movies:
export const GET_MOVIES = `${API}/movie/popular?${API_KEY}&language=en-US&page=1`

// post method:
export const postTranscriptions = (dispatch, voice, text) => axios.post(
  API,
  {
    voice,
    text
  }
).then(dispatch)
