import React from 'react'
import PropTypes from 'prop-types'

import Logo from '../../atoms/Logo/Logo'

import { Wrapper, BrandWrapper ,Brand } from './AppBar.styles'

const AppBar = ({ children, ...props }) => <Wrapper {...props}>
  <BrandWrapper>
    <Brand level={4}>Clapperboard</Brand>
    <Logo />
  </BrandWrapper>
  {/* will pass children in case navigation is intended on the right side of the app bar */}
  { children }
</Wrapper>

AppBar.propTypes = {
  children: PropTypes.node
}

export default AppBar
