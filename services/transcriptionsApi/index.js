import axios from 'axios'

const API = 'http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c'

// get method:
export const requestTranscriptions = dispatch => axios.get(
  API,
).then(dispatch)

// post method:
export const postTranscriptions = (dispatch, voice, text) => axios.post(
  API,
  {
    voice,
    text
  }
).then(dispatch)
