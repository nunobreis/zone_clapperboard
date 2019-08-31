import React from 'react'
import { storiesOf } from '@storybook/react'

import EditableTextContent from './EditableTextContent'

storiesOf(
  'Atoms | Inputs / Editable Text Content',
  module,
).add('renders an editable text content', () => <EditableTextContent />)
