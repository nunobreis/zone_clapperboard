import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { styles } from './Heading.styles'

const Heading = styled(({ level, children, ...props }) => React
  .createElement(`h${level || 1}`, props, children))`${styles}`

Heading.propTypes = {
  level: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired
}

export default Heading
