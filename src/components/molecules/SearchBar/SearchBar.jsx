import React from 'react'

import TextInput from '../../atoms/TextInput/TextInput'

import { Wrapper } from './SearchBar.styles'

const SearchBar = () => <Wrapper>
  <TextInput placeholder="Search for movies..." />
</Wrapper>

export default SearchBar
