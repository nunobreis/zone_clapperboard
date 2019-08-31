import React from 'react'
import { storiesOf } from '@storybook/react'

import TranscriptionForm from './TranscriptionForm'

storiesOf(
  'Molecules | Forms / Transcription Form',
).add('renders a transcription form', () => <TranscriptionForm voice="hello" text="world" />)
