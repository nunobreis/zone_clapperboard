import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper, Brand } from './AppBar.styles'

const AppBar = ({ children, ...props }) => <Wrapper {...props}>
  <Brand level={4}>Clapperboard</Brand>
  {/* will pass children in case navigation is intended on the right side of the app bar */}
  { children }
</Wrapper>

AppBar.propTypes = {
  children: PropTypes.node
}

export default AppBar
