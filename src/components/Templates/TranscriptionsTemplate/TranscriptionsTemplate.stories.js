import React from 'react'
import { storiesOf } from '@storybook/react'

import TranscriptionTemplate from './TranscriptionsTemplate'
import AppBar from '../../organisms/AppBar/AppBar'
import Card from '../../atoms/Card/Card'
import Heading from '../../atoms/Heading/Heading'

storiesOf(
  'Templates | Transcription Template',
  module,
).add('renders a Transcription Template', () => (
  <TranscriptionTemplate header={<AppBar />}>
    <Card>
      <Heading level={1}>Transcriptions Template</Heading>
    </Card>
  </TranscriptionTemplate>
))
