import React from 'react'
import { storiesOf } from '@storybook/react'

import Logo from './Logo'

storiesOf('Atoms | Logo', module)
  .add('renders default logo', () => (
    <Logo />
  ))
