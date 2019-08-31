import React from 'react'
import { storiesOf } from '@storybook/react'

import EditableText from './EditableTitle'

storiesOf(
  'Atoms | Inputs / Editable Title',
  module,
).add('renders an Editable Title component', () => <EditableText />)
