import React from 'react'
import { storiesOf } from '@storybook/react'

import SearchBar from './SearchBar'

storiesOf('Molecules | SearchBar', module)
  .add('renders default SearchBar', () => (
    <SearchBar />
  ))
