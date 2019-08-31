import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import AppBar from '../components/organisms/AppBar/AppBar'
import UploadIcon from '../components/atoms/UploadIcon/UploadIcon'
import FetchIcon from '../components/atoms/FetchIcon/FetchIcon'
import Navigation from '../components/molecules/Navigation/Navigation'

import * as transcriptionsActions from '../redux/transcriptions/transcriptions.actions'

class NavigationContainer extends React.Component {
  constructor(props) {
    super(props)

    this.handleFetchData = this.handleFetchData.bind(this)
    this.handlePostData = this.handlePostData.bind(this)
  }

  handlePostData() {
    this.props.post()
  }

  handleFetchData() {
    const { actions } = this.props
    actions.loadTranscriptions()
  }

  render() {
    return (
      <AppBar>
        <Navigation>
          <UploadIcon
            onClick={this.handlePostData}
          />
          <FetchIcon
            onClick={this.handleFetchData}
          />
          </Navigation>
      </AppBar>
    )
  }
}

NavigationContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  post: PropTypes.func
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(transcriptionsActions, dispatch)
})

export default connect(null, mapDispatchToProps)(NavigationContainer)
