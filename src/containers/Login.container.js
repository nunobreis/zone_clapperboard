import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Popout from 'react-popout'

import Button from '../components/atoms/Button/Button'
import Paragraph from '../components/atoms/Paragraph/Paragraph'

import * as loginActions from '../redux/login/login.actions'
import { ASK_USER_PERMISSION } from '../../services/moviesApi/index'

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick() {
    this.props.onLogIn()
  }

  render() {
    const { loggedIn, token } = this.props.userLogin
    if (loggedIn && token) {
      return (
        <div>
          <Paragraph>Welcome</Paragraph>
          <Popout
            url={`${ASK_USER_PERMISSION}/${token.request_token}`}
            title='Asking user for approval'
            onClosing={this.popupClosed}>
            <div>Popped out content!</div>
          </Popout>
        </div>
      )
    }

    return (
      <div>
        <Button onClick={this.handleOnClick}>Login</Button>
      </div>
    )
  }
}

Login.propTypes = {
  onLogIn: PropTypes.func.isRequired,
  userLogin: PropTypes.object
}

const mapStateToProps = ({ userLogin }) => ({
  userLogin
})

const mapDispatchToProps = dispatch => ({
  onLogIn: () => loginActions.login(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
