import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, number } from '@storybook/addon-knobs'

import Heading from './Heading'

storiesOf('Atoms | Typography / Heading', module)
  .addParameters({
    info: {
      text: `
        ### TRY DIFFERENT LEVELS:
        Refer to the **"Knobs"** section at the bottom to try different levels.
      `
    }
  })
  .add('renders a Heading with a specific level', () => {
    const selectLevel = number('Level: ', 1)
    const textContent = text('Heading text: ', 'Heading 1')
    return <Heading level={selectLevel}>{textContent}</Heading>
  })
