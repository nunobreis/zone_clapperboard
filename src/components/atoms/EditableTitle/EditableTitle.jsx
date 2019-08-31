import React from 'react'
import PropTypes from 'prop-types'

import { StyledInput } from './EditableTitle.styles'

const EditableTitle = ({ value, onChange }) => (
  <StyledInput type="text" value={value} onChange={e => onChange(e)} />
)

EditableTitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default EditableTitle
