import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import CardList from '../components/organisms/CardList/CardList'
import Spinner from '../components/atoms/Spinner/Spinner'
import FetchingDataFailed from '../components/molecules/FetchingDataFailed/FetchingDataFailed'
import SearchBar from '../components/molecules/SearchBar/SearchBar'

import * as moviesActions from '../redux/movies/movies.actions'

class MovieGrid extends React.Component {
  componentDidMount() {
    this.props.onRequestMovies()
  }

  componentDidUpdate(prevProps) {
    const { genresFilters } = this.props
    if (prevProps.genresFilters !== genresFilters) {
      const joinElements = genresFilters.join()
      return this.props.onRequestMoviesByGenre(joinElements)
    }
    return null
  }

  render() {
    const {
      isPending,
      error,
      onSearchChange,
      rateMovie
    } = this.props
    const { results } = this.props.movies

    if (isPending) {
      return <Spinner />
    }
    if (error) {
      return <FetchingDataFailed error={error}/>
    }
    if (results) {
      const filterByPopularity = results.sort((a, b) => b.popularity - a.popularity)
      return (
        <div>
          <SearchBar searchChange={onSearchChange} />
          <CardList items={filterByPopularity} rateMovie={rateMovie} />
        </div>
      )
    }
    return null
  }
}

MovieGrid.propTypes = {
  onRequestMovies: PropTypes.func,
  movies: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  isPending: PropTypes.bool,
  error: PropTypes.string,
  onSearchChange: PropTypes.func,
  genresFilters: PropTypes.array,
  moviesByGenreIsPending: PropTypes.bool,
  moviesByGenre: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  moviesByGenreError: PropTypes.string,
  onRequestMoviesByGenre: PropTypes.func,
  rateMovie: PropTypes.object
}

const mapStateToProps = (state) => {
  const { movies, isPending, error } = state.getMovies
  const { genresFilters } = state
  const { rateMovie } = state

  return {
    movies,
    isPending,
    error,
    genresFilters,
    rateMovie
  }
}

const mapDispatchToProps = dispatch => ({
  onRequestMovies: () => moviesActions.loadMovies(dispatch),
  onSearchChange: searchTerm => moviesActions.loadMoviesByTitle(dispatch, searchTerm),
  onRequestMoviesByGenre: genres => moviesActions.loadMoviesByGenre(dispatch, genres)
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieGrid)
