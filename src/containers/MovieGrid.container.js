import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import CardList from '../components/molecules/CardList/CardList'
import Spinner from '../components/atoms/Spinner/Spinner'
import FetchingDataFailed from '../components/molecules/FetchingDataFailed/FetchingDataFailed'
import SearchBar from '../components/molecules/SearchBar/SearchBar'

import * as moviesActions from '../redux/movies/movies.actions'
import * as searchMovieActions from '../redux/searchMovies/searchMovies.actions'

class MovieGrid extends React.Component {
  componentDidMount() {
    this.props.onRequestMovies()
  }

  render() {
    const {
      isPending,
      error,
      onSearchChange,
      searchField
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
      const filterByName = filterByPopularity.filter(movies => (
        movies.title.toLowerCase().includes(searchField.toLowerCase())
      ))

      return (
        <div>
          <SearchBar searchChange={onSearchChange} />
          <CardList items={filterByName} />
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
  searchField: PropTypes.string
}

const mapStateToProps = ({ getMovies, searchMovies }) => ({
  searchField: searchMovies.searchField,
  movies: getMovies.movies,
  isPending: getMovies.isPending,
  error: getMovies.error
})

const mapDispatchToProps = dispatch => ({
  onRequestMovies: () => moviesActions.loadMovies(dispatch),
  onSearchChange: e => dispatch(
    searchMovieActions.setSearchField(e.target.value)
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieGrid)
