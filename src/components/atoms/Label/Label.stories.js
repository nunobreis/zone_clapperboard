import React from 'react'
import { storiesOf } from '@storybook/react'

import Label from './Label'

storiesOf('Atoms | Label', module)
  .add('renders a default label', () => (
    <Label>I am a label</Label>
  ))
