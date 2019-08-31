import React from 'react'
import { storiesOf } from '@storybook/react'

import ServerDownIllustration from './ServerDownIllustration'

storiesOf(
  'Atoms | Illustrations / ServerDown',
  module,
).add('renders a ServerDown illustration', () => <ServerDownIllustration />)
