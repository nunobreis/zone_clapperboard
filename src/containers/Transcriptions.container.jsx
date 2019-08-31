import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import uuid from 'uuid'

import TranscriptionsTemplate from '../components/Templates/TranscriptionsTemplate/TranscriptionsTemplate'
import Card from '../components/atoms/Card/Card'
import AddNewRow from '../components/molecules/AddNewRow/AddNewRow'
import FetchingDataFailed from '../components/molecules/FetchingDataFailed/FetchingDataFailed'
import TranscriptionForm from '../components/molecules/TranscriptionForm/TranscriptionForm'

import * as transcriptionsActions from '../redux/transcriptions/transcriptions.actions'
import * as checkedTranscriptionsActions from '../redux/checkedTranscriptions/checkedTranscriptions.actions'

import NavigationContainer from './Navigation.container'

class TranscriptionsContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.handleAddNewRow = this.handleAddNewRow.bind(this)
    this.handleDeleteRow = this.handleDeleteRow.bind(this)
    this.handleTranscriptionsList = this.handleTranscriptionsList.bind(this)
    this.handlePostTranscriptions = this.handlePostTranscriptions.bind(this)
  }

  handleDeleteRow(id) {
    const { actions } = this.props
    return actions.deleteRow(id)
  }

  handleAddNewRow() {
    const { actions } = this.props
    return actions.addNewRow({
      id: uuid(),
      voice: 'Place your title here',
      text: 'Place your text here'
    })
  }

  handleTranscriptionsList(transcription) {
    const { actions } = this.props
    actions.checkedTranscription(transcription)
  }

  handlePostTranscriptions() {
    const transcriptions = this.props.checkedTranscriptions
    if (transcriptions) {
      this.props.actions.uploadTranscriptions(transcriptions)
    }
  }

  render() {
    const { transcriptions } = this.props
    if (transcriptions.messages) {
      return (
        <TranscriptionsTemplate
          header={<NavigationContainer post={this.handlePostTranscriptions} />}
        >
          <form>
            <Card>
              {transcriptions.messages.map(({ id, voice, text }) => (
                <TranscriptionForm
                  key={id}
                  id={id}
                  voice={voice}
                  text={text}
                  deleteRow={this.handleDeleteRow}
                  transcriptionsList={this.handleTranscriptionsList}
                />
              ))}

            </Card>
          </form>
          <AddNewRow addRow={this.handleAddNewRow} />
        </TranscriptionsTemplate>
      )
    }
    if (transcriptions.error) {
      return (
        <TranscriptionsTemplate header={<NavigationContainer />}>
          <Card>
            <FetchingDataFailed
              error={`Ups, something went wrong: ${transcriptions.error}`}
            />
          </Card>
        </TranscriptionsTemplate>
      )
    }
    return (
      <TranscriptionsTemplate header={<NavigationContainer post={this.handlePostTranscriptions} />}>
        <Card />
        <AddNewRow addRow={this.handleAddNewRow} />
      </TranscriptionsTemplate>
    )
  }
}

TranscriptionsContainer.propTypes = {
  transcriptions: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  checkedTranscriptions: PropTypes.object,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = ({
  transcriptions,
  checkedTranscriptions
}) => ({
  transcriptions,
  checkedTranscriptions
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...transcriptionsActions,
    ...checkedTranscriptionsActions
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(
  TranscriptionsContainer,
)
