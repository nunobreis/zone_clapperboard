import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'

import getMovies from '../movies/movies.reducer'
import getGenres from '../genres/genres.reducer'
import genresFilters from '../genres/genresFilters.reducer'

const rootReducer = combineReducers({
  getMovies,
  getGenres,
  genresFilters
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
