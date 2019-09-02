import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Label from '../components/atoms/Label/Label'
import Checkbox from '../components/atoms/Checkbox/Checkbox'
import List from '../components/atoms/UnorderedList/UnorderedList'

import * as genresActions from '../redux/genres/genres.actions'

class GenreFilter extends React.Component {
  componentDidMount() {
    this.props.onGenresRequest()
  }

  render() {
    const { genres } = this.props.genres
    const { onChangeGenre } = this.props
    if (genres) {
      return (
        <List>
          {genres.map((genre, i) => (
            <li key={i}>
              <Checkbox
                onCheckboxChange={() => onChangeGenre(genre.id, genre.name)}
                name={genre.name}
              />
              <Label>{genre.name}</Label>
            </li>
          ))}
        </List>
      )
    }
    return <Label>Sorry, Genres filters are not available</Label>
  }
}

GenreFilter.propTypes = {
  isPending: PropTypes.bool,
  error: PropTypes.string,
  onGenresRequest: PropTypes.func,
  genres: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onChangeGenre: PropTypes.func
}

const mapStateToProps = ({ getGenres }) => ({
  isPending: getGenres.isPending,
  error: getGenres.error,
  genres: getGenres.genres
})

const mapDispatchToProps = dispatch => ({
  onGenresRequest: () => genresActions.loadGenres(dispatch),
  onChangeGenre: id => dispatch(genresActions.selectGenre(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(GenreFilter)
