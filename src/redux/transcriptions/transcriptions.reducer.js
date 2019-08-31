import {
  LOAD_TRANSCRIPTIONS_SUCCESS,
  LOAD_TRANSCRIPTIONS_FAILED,
  ADD_NEW_ROW,
  DELETE_ROW
} from '../types/index'

const initialState = {}

export default function transcriptionsReducer(state = initialState, action) {
  const { messages } = state
  switch (action.type) {
    case LOAD_TRANSCRIPTIONS_SUCCESS:
      return {
        ...state,
        messages: [...action.transcriptions]
      }
    case LOAD_TRANSCRIPTIONS_FAILED:
      return {
        ...state,
        error: action.error
      }
    case ADD_NEW_ROW:
      return {
        ...state,
        messages: messages
          ? [...messages, action.defaultTranscription]
          : [action.defaultTranscription]
      }
    case DELETE_ROW:
      return {
        ...state,
        messages: messages.filter(({ id }) => id !== action.id)
      }
    default:
      return state
  }
}
