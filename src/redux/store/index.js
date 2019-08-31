import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'

import transcriptions from '../transcriptions/transcriptions.reducer'
import checkedTranscriptions from '../checkedTranscriptions/checkedTranscriptions.reducer'

const rootReducer = combineReducers({
  transcriptions,
  checkedTranscriptions
})

export default function configureStore(initialState) {
  // add support for redux dev tools
  /* eslint no-underscore-dangle: 0 */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant())),
  )
}
