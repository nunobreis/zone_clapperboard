import React from 'react'
import { storiesOf } from '@storybook/react'

import AddNewRow from './AddNewRow'

storiesOf(
  'Molecules | AddNewRow',
  module,
).add('renders an Add New Row for the transcriptions page', () => <AddNewRow />)
