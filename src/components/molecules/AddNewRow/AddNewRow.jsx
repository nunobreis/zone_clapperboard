import React from 'react'
import PropTypes from 'prop-types'

import AddRowIcon from '../../atoms/AddRowIcon/AddRowIcon'

import { Wrapper } from './AddNewRow.styles'

const AddNewRow = ({ addRow }) => <Wrapper>
  <AddRowIcon onClick={() => addRow()} />
</Wrapper>

AddNewRow.propTypes = {
  addRow: PropTypes.func.isRequired
}

export default AddNewRow
