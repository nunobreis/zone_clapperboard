import React from 'react'
import PropTypes from 'prop-types'

import { StyledInput } from './TextInput.styles'

const TextInput = ({ placeholder, ...props }) => (
  <StyledInput
    placeholder={placeholder}
    { ...props }
  />
)

TextInput.propTypes = {
  placeholder: PropTypes.string.isRequired
}

export default TextInput
