import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Button from '../components/atoms/Button/Button'
import Paragraph from '../components/atoms/Paragraph/Paragraph'

import * as loginActions from '../redux/login/login.actions'
import { ASK_USER_PERMISSION } from '../../services/moviesApi/index'

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.handleOnClick = this.handleOnClick.bind(this)
  }

  componentDidMount() {
    const approvedUrl = window.location.search
    if (approvedUrl !== '' && approvedUrl.includes('&approved=true')) {
      const removePrefix = approvedUrl.replace('?request_token=', '')
      const removeSufix = removePrefix.replace('&approved=true', '')
      this.props.createNewSession(removeSufix)
    }
  }

  componentDidUpdate() {
    const { loggedIn, token } = this.props.userLogin

    if (loggedIn && token) {
      window.location.href = `${ASK_USER_PERMISSION}/${token.request_token}?redirect_to=http://localhost:8080/`
    }
  }

  handleOnClick() {
    this.props.onLogIn()
  }

  render() {
    if (window.location.search !== '') {
      return (
        <div>
          <Paragraph>Welcome</Paragraph>
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
  userLogin: PropTypes.object,
  createNewSession: PropTypes.func
}

const mapStateToProps = ({ userLogin }) => ({
  userLogin
})

const mapDispatchToProps = dispatch => ({
  onLogIn: () => loginActions.login(dispatch),
  createNewSession: requestToken => loginActions.newSession(dispatch, requestToken)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
