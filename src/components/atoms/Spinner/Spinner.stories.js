import React from 'react'
import { storiesOf } from '@storybook/react'

import Spinner from './Spinner'

storiesOf('Atoms | Spinner', module)
  .add('renders a default spinner', () => <Spinner />)
