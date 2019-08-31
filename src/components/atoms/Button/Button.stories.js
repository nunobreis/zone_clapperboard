import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from './Button'

storiesOf('Atoms | Button', module)
  .add('default button', () => <Button>I am a button</Button>)
