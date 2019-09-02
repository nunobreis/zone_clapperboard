import React from 'react'
import PropTypes from 'prop-types'

import Heading from '../../atoms/Heading/Heading'
import Paragraph from '../../atoms/Paragraph/Paragraph'
import Image from '../../atoms/Image/Image'

import {
  StyledLabel,
  MovieDetails,
  Wrapper,
  StyledCard
} from './CardList.styles'

const CardList = ({ items, ...props }) => (
  <Wrapper {...props}>
    {items ? (
      items.map((item, i) => (
        <StyledCard key={i}>
          <Heading level={2}>{item.title}</Heading>
          <MovieDetails>
            <Image src={`https://image.tmdb.org/t/p/w185${item.poster_path}`} alt={item.title}/>
            <div>
              <Heading level={6}>Release Date:</Heading>
              <StyledLabel>{item.release_date}</StyledLabel>
              <Heading level={6}>Voting Average:</Heading>
              <StyledLabel>{item.vote_average}</StyledLabel>
              <Heading level={6}>Popularity:</Heading>
              <StyledLabel>{item.popularity}</StyledLabel>
            </div>
          </MovieDetails>
          <Heading level={6}>Description:</Heading>
          <Paragraph>{item.overview}</Paragraph>
        </StyledCard>
      ))
    ) : null}
  </Wrapper>
)

CardList.propTypes = {
  items: PropTypes.array
}

export default CardList
