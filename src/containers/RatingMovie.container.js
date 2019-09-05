import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import MovieRating from '../components/organisms/MovieRating/MovieRating'
import Heading from '../components/atoms/Heading/Heading'

import * as rateMovieActions from '../redux/rateMovie/rateMovie.actions'

class RatingMovie extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 3
    }
    this.handleIncrease = this.handleIncrease.bind(this)
    this.handleDecrease = this.handleDecrease.bind(this)
    this.handleSaveRating = this.handleSaveRating.bind(this)
  }

  handleIncrease() {
    const { counter } = this.state
    if (counter < 10) {
      this.setState({
        counter: counter + 0.5
      })
    }
  }

  handleDecrease() {
    const { counter } = this.state

    if (counter > 0.5) {
      this.setState({
        counter: counter - 0.5
      })
    }
  }

  handleSaveRating() {
    const value = this.state.counter
    const id = this.props.movieId
    const sessionId = this.props.userLogin.userSession.session_id
    this.props.onRatingMovie(value, id, sessionId)
  }

  render() {
    if (window.location.search !== '') {
      return (
          <MovieRating
            increase={this.handleIncrease}
            decrease={this.handleDecrease}
            counter={this.state.counter}
            saveRating={this.handleSaveRating}
          />
      )
    }

    return (
      <Heading level={6}>Please login first to rate movies</Heading>
    )
  }
}

RatingMovie.propTypes = {
  counter: PropTypes.number,
  userLogin: PropTypes.object,
  onRatingMovie: PropTypes.func,
  movieId: PropTypes.number
}

const mapStateToProps = ({ userLogin }) => ({
  userLogin
})

const mapDispatchToProps = dispatch => ({
  onRatingMovie: (value, id, sessionId) => rateMovieActions
    .rateMovie(dispatch, value, id, sessionId)
})

export default connect(mapStateToProps, mapDispatchToProps)(RatingMovie)
