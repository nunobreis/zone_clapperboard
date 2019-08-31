import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import Image from './Image'

storiesOf('Atoms | Image', module)
  .add('renders an image with default size', () => (
    <Image
      src="https://lorempixel.com/200/200"
      alt="random image from lorem pixel"
    />
  ))
  .addParameters({
    info: {
      text: `
        ### TRY DIFFERENT SIZES
        Refer to the **"Knobs"** section at the bottom to try different sizes.
      `
    }
  })
  .add('renders an image with custom size', () => {
    const width = text('Width', '100px')
    const height = text('Height', '100px')
    return (
      <Image
        style={{ paddingLeft: '3em' }}
        width={width}
        height={height}
        src="https://lorempixel.com/200/200"
        alt="random image with custom size"
      />
    )
  })
