import React from 'react'
import PropTypes from 'prop-types'

import Paragraph from '../../atoms/Paragraph/Paragraph'

import { Wrapper, SaveRatingButton, ChangeRatingButton } from './MovieRating.styles'

const MovieRating = ({
  increase,
  decrease,
  counter,
  saveRating,
  ...props
}) => (
  <Wrapper {...props}>
    <div>
      <ChangeRatingButton onClick={decrease}>-</ChangeRatingButton>
      <Paragraph>{counter}</Paragraph>
      <ChangeRatingButton onClick={increase}>+</ChangeRatingButton>
    </div>
    <SaveRatingButton onClick={saveRating}>Rate this Movie</SaveRatingButton>
  </Wrapper>
)

MovieRating.propTypes = {
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
  saveRating: PropTypes.func.isRequired,
  counter: PropTypes.number
}

export default MovieRating
