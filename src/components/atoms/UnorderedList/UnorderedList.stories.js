import React from 'react'
import { storiesOf } from '@storybook/react'

import List from './UnorderedList'

storiesOf('Atoms | UnorderedList', module)
  .add('renders a default ul', () => (
    <List>
      <li>item</li>
      <li>item</li>
      <li>item</li>
      <li>item</li>
    </List>
  ))
