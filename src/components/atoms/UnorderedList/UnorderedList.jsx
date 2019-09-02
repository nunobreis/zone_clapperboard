import React from 'react'
import PropTypes from 'prop-types'

import { UnorderedList } from './UnorderedList.styles'

const List = ({ children, ...props }) => <UnorderedList {...props}>{children}</UnorderedList>

List.propTypes = {
  children: PropTypes.node.isRequired
}

export default List
