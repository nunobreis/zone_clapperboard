import {
  requestTranscriptions
} from '../../../services/transcriptionsApi/index'

import {
  LOAD_TRANSCRIPTIONS_SUCCESS,
  LOAD_TRANSCRIPTIONS_FAILED,
  ADD_NEW_ROW,
  DELETE_ROW
} from '../types/index'

export const loadTranscriptionsSuccess = transcriptions => ({
  type: LOAD_TRANSCRIPTIONS_SUCCESS,
  transcriptions
})

export const loadTranscriptionsFailed = error => ({
  type: LOAD_TRANSCRIPTIONS_FAILED,
  error
})

// request transcriptions thunk:
export const loadTranscriptions = () => dispatch => requestTranscriptions()
  .then(({ data }) => dispatch(loadTranscriptionsSuccess(data)))
  .catch(error => dispatch(loadTranscriptionsFailed(error.message)))

export const addNewRow = defaultTranscription => ({
  type: ADD_NEW_ROW,
  defaultTranscription
})

export const deleteRow = id => ({
  type: DELETE_ROW,
  id
})
