import React from 'react'
import PropTypes from 'prop-types'

const Image = props => <img {...props} alt={props.alt} />

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Image
