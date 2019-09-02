import React from 'react'
import { storiesOf } from '@storybook/react'

import CardList from './CardList'

storiesOf('Organisms | CardList', module)
  .add('renders default CardList', () => (
    <CardList items={[{
      title: 'title',
      poster_path: 'keym7MPn1icW1wWfzMnW3HeuzWU.jpg',
      release_date: '2019-09-01',
      vote_average: 12093,
      popularity: 1283,
      overview: 'lorem ipsum...'
    }]}/>
  ))
