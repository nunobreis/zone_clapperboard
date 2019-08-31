import React from 'react'
import PropTypes from 'prop-types'

import AvatarIcon from '../../atoms/AvatarIcon/AvatarIcon'
import Checkbox from '../../atoms/Checkbox/Checkbox'
import EditableTextContent from '../../atoms/EditableTextContent/EditableTextContent'
import EditableTitle from '../../atoms/EditableTitle/EditableTitle'

import {
  Wrapper,
  StyledDeleteIcon
} from './Transcriptions.styles'

class TranscriptionForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isChecked: false,
      id: this.props.id,
      voiceValue: this.props.voice,
      textValue: this.props.text
    }

    this.handleVoiceChange = this.handleVoiceChange.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleOnChangeCheckbox = this.handleOnChangeCheckbox.bind(this)
  }

  handleVoiceChange(event) {
    this.setState({ voiceValue: event.target.value })
  }

  handleTextChange(event) {
    this.setState({ textValue: event.target.value })
  }

  handleOnChangeCheckbox(event) {
    const transcription = {
      isChecked: event.target.checked,
      id: this.state.id,
      voice: this.state.voiceValue,
      text: this.state.textValue
    }
    this.props.transcriptionsList(transcription)
  }

  render() {
    return (
        <Wrapper>
          <Checkbox
            name={this.state.id}
            id={this.state.id}
            onChange={this.handleOnChangeCheckbox}
          />
          <AvatarIcon />
          <div>
            <EditableTitle
              value={this.state.voiceValue}
              onChange={this.handleVoiceChange}
            />
            <EditableTextContent
              value={this.state.textValue}
              onChange={this.handleTextChange}
            />
          </div>
          <StyledDeleteIcon onClick={() => this.props.deleteRow(this.props.id)} />
        </Wrapper>
    )
  }
}

TranscriptionForm.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  voice: PropTypes.string,
  text: PropTypes.string,
  deleteRow: PropTypes.func.isRequired,
  transcriptionsList: PropTypes.func.isRequired
}

export default TranscriptionForm
