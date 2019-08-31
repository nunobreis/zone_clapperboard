import React from 'react'
import PropTypes from 'prop-types'

import { StyledButton } from './Button.styles'

const Button = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
)

Button.propTypes = {
  children: PropTypes.node
}

export default Button
