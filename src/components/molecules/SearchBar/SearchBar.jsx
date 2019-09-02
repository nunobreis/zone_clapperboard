import React from 'react'
import PropTypes from 'prop-types'

import {
  Wrapper,
  StyledLabel,
  StyledButton,
  StyledTextInput
} from './SearchBar.styles'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick(e) {
    e.preventDefault()
    this.props.searchChange(this.state.value)
  }

  render() {
    return (
      <Wrapper>
        <StyledLabel>Search for a movie:</StyledLabel>
        <form>
          <StyledTextInput
            placeholder="Pulp Fiction..."
            value={this.state.value}
            onChange={e => this.setState({
              value: e.target.value
            })}
          />
          <StyledButton onClick={this.handleOnClick}>Search</StyledButton>
        </form>
      </Wrapper>
    )
  }
}

SearchBar.propTypes = {
  searchChange: PropTypes.func.isRequired
}

export default SearchBar
