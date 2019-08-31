import {
  postTranscriptions
} from '../../../services/transcriptionsApi/index'

import {
  CHECKED_TRANSCRIPTION,
  POST_TRANSCRIPTIONS_SUCCESS,
  POST_TRANSCRIPTIONS_FAILED
} from '../types/index'

export const checkedTranscription = transcription => ({
  type: CHECKED_TRANSCRIPTION,
  transcription
})

export const postTranscriptionsSuccess = response => ({
  type: POST_TRANSCRIPTIONS_SUCCESS,
  response
})

export const postTranscriptionsFailed = error => ({
  type: POST_TRANSCRIPTIONS_FAILED,
  error
})

// post transcriptions thunk:
export const uploadTranscriptions = () => (dispatch, voice, text) => postTranscriptions(voice, text)
  .then(({ data }) => dispatch(postTranscriptionsSuccess(data)))
  .catch(error => dispatch(postTranscriptionsFailed(error.message)))
