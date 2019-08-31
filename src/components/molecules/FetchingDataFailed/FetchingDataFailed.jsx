import React from 'react'
import PropTypes from 'prop-types'

import ServerDownIllustration from '../../atoms/ServerDownIllustration/ServerDownIllustration'
import Paragraph from '../../atoms/Paragraph/Paragraph'
import Heading from '../../atoms/Heading/Heading'

import { Wrapper } from './FetchingDataFailed.styles'

const FetchingDataFailed = ({ error }) => <Wrapper>
  <ServerDownIllustration />
  <Heading level={3}>{error}</Heading>
  <Paragraph>Please try again later</Paragraph>
</Wrapper>

FetchingDataFailed.propTypes = {
  error: PropTypes.string.isRequired
}

export default FetchingDataFailed
