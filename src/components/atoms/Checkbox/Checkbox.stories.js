import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import Checkbox from './Checkbox'

storiesOf('Atoms | Inputs / Checkbox', module)
  .add('renders a checkbox with text', () => {
    const textContent = text('Text', 'checkbox')
    return <Checkbox text={textContent} />
  })
  .add('renders a checkbox with no text', () => <Checkbox />)
