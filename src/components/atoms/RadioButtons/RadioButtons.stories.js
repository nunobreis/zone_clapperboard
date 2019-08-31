import React from 'react'
import { storiesOf } from '@storybook/react'

import RadioButtons from './RadioButtons'

storiesOf(
  'Atoms | Inputs / Radio Buttons',
  module,
).add('renders a radio button', () => <RadioButtons value="radio button" name="radio button" label="radio button" />)
