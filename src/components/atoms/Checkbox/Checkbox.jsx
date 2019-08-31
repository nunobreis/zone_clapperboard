import React from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  StyledInput,
  Checkmark
} from './Checkbox.styles'

const Checkbox = ({
  text,
  name,
  onChange
}) => <Container>
  { text || null }
  <StyledInput
    type="checkbox"
    name={name}
    onChange={onChange}
  />
  <Checkmark></Checkmark>
</Container>

Checkbox.propTypes = {
  text: PropTypes.string,
  name: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  onChange: PropTypes.func.isRequired
}

export default Checkbox
