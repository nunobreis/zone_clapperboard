import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper } from './Navigation.styles'

const Navigation = ({ children }) => <Wrapper>
  { children }
</Wrapper>

Navigation.propTypes = {
  children: PropTypes.node.isRequired
}

export default Navigation
