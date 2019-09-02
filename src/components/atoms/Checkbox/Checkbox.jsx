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
  onCheckboxChange
}) => <Container>
  { text || null }
  <StyledInput
    type="checkbox"
    name={name}
    onChange={onCheckboxChange}
  />
  <Checkmark></Checkmark>
</Container>

Checkbox.propTypes = {
  text: PropTypes.string,
  name: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  onCheckboxChange: PropTypes.func.isRequired
}

export default Checkbox
