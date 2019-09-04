import React from 'react'
import { storiesOf } from '@storybook/react'

import MovieRating from './MovieRating'

storiesOf('Organisms | MovieRating', module)
  .add('renders a default movie rating organism', () => (
    <MovieRating
      increase={() => 'increase'}
      decrease={() => 'decrease'}
      counter={3}
    />
  ))
