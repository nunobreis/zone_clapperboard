import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper } from './MovieSearchTemplate.styles'

const TranscriptionsTemplate = ({ header, searchBar, children }) => (
  <div>
    { header }
    <Wrapper>
      { searchBar }
      { children }
    </Wrapper>
  </div>
)

TranscriptionsTemplate.propTypes = {
  header: PropTypes.object.isRequired,
  searchBar: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
}

export default TranscriptionsTemplate
