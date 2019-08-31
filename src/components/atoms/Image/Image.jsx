import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledImage = styled.img`
  margin: 1rem 0;
`

const Image = props => <StyledImage {...props} alt={props.alt} />

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Image
