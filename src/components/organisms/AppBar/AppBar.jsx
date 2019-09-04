import React from 'react'
import PropTypes from 'prop-types'

import Logo from '../../atoms/Logo/Logo'
import Login from '../../../containers/Login.container'

import { Wrapper, BrandWrapper, Brand } from './AppBar.styles'

const AppBar = ({ children, ...props }) => (
  <Wrapper {...props}>
    <BrandWrapper>
      <Brand level={4}>Clapperboard</Brand>
      <Logo />
    </BrandWrapper>
    <Login />
  </Wrapper>
)

AppBar.propTypes = {
  children: PropTypes.node
}

export default AppBar
