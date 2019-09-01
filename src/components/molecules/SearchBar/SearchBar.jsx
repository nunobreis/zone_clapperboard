import React from 'react'
import PropTypes from 'prop-types'

import TextInput from '../../atoms/TextInput/TextInput'

import { Wrapper, StyledLabel } from './SearchBar.styles'

const SearchBar = ({ searchChange, ...props }) => (
  <Wrapper {...props}>
    <StyledLabel>Search for a movie</StyledLabel>
    <TextInput
      placeholder="Pulp Fiction..."
      onChange={searchChange}
    />
  </Wrapper>
)

SearchBar.propTypes = {
  searchChange: PropTypes.func.isRequired
}

export default SearchBar
