import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper, Brand } from './AppBar.styles'

const AppBar = ({ children, ...props }) => <Wrapper {...props}>
  <Brand level={4}>Transcriptions</Brand>
  { children }
</Wrapper>

AppBar.propTypes = {
  children: PropTypes.node.isRequired
}

export default AppBar
