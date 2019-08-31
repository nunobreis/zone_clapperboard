import React from 'react'
import { storiesOf } from '@storybook/react'

import Card from './Card'

storiesOf(
  'Atoms | Surfaces / Card',
  module,
).add('renders a card with content', () => (
  <Card>
    Lorem ipsum dolor amet cold-pressed kinfolk plaid keytar artisan organic,
    pok pok next level vinyl helvetica tbh four dollar toast salvia DIY. Shabby
    chic lomo chia vaporware, gastropub authentic godard bespoke tattooed
    meditation hashtag ennui raw denim. Pinterest four dollar toast tousled
    mumblecore, brunch meggings kogi jianbing church-key yuccie tofu ethical
    blue bottle. Pitchfork man braid humblebrag, polaroid hammock master cleanse
    slow-carb bushwick kale chips pour-over.
  </Card>
))
