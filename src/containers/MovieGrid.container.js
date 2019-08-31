import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as moviesActions from '../redux/movies/movies.actions'
import CardList from '../components/molecules/CardList/CardList'
import Spinner from '../components/atoms/Spinner/Spinner'
import FetchingDataFailed from '../components/molecules/FetchingDataFailed/FetchingDataFailed'

class MovieGrid extends React.Component {
  componentDidMount() {
    this.props.onRequestMovies()
  }

  render() {
    const { isPending, error } = this.props
    const { results } = this.props.movies
    // const filteredMovies = results.filter(movies => movies.original_title.toLowerCase().includes('a'))

    if (isPending) {
      return <Spinner />
    }
    if (error) {
      return <FetchingDataFailed error={error}/>
    }
    if (results) {
      return (
        <div>
          <CardList items={results} />
        </div>
      )
    }
    return null
  }
}

MovieGrid.propTypes = {
  onRequestMovies: PropTypes.func
}

const mapStateToProps = ({ getMovies }) => ({
  movies: getMovies.movies,
  isPending: getMovies.isPending,
  error: getMovies.error
})

const mapDispatchToProps = dispatch => ({
  onRequestMovies: () => moviesActions.loadMovies(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieGrid)
