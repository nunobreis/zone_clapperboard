import React from 'react'
import { storiesOf } from '@storybook/react'

import FetchingDataFailed from './FetchingDataFailed'

storiesOf(
  'Molecules | Warnings / FetchingDataFailed',
  module,
).add('renders a Fetching Data Failed warning', () => <FetchingDataFailed error="Ups, there was an error when fetching your data" />)
