import React from 'react'
import PropTypes from 'prop-types'

import { StyledInput } from './EditableTextContent.styles'

const EditableTextContent = ({ value, onChange }) => (
  <StyledInput type="text" value={value} onChange={e => onChange(e)} />
)

EditableTextContent.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default EditableTextContent
