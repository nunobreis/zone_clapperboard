import React from 'react'
import { storiesOf } from '@storybook/react'

import TextInput from './TextInput'

storiesOf('Atoms | Inputs/TextInput', module)
  .add('default text input', () => (
    <TextInput placeholder="hello world"/>
  ))
