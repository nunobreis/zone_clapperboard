import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { paragraphStyles } from './Paragraph.styles'

const Paragraph = styled(({ children, ...props }) => React.createElement(
  'p',
  props,
  children
))`${paragraphStyles}`

Paragraph.propTypes = {
  children: PropTypes.node
}

export default Paragraph
