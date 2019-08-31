import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper } from './TranscriptionsTemplate.styles'

const TranscriptionsTemplate = ({ header, children }) => (
  <div>
    { header }
    <Wrapper>
      { children }
    </Wrapper>
  </div>
)

TranscriptionsTemplate.propTypes = {
  header: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
}

export default TranscriptionsTemplate
