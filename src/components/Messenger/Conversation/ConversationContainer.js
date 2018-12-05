import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { receiveConversation } from '../../../actions'
import * as api from '../../../api/message'
import Conversation from './Conversation'

class ConversationContainer extends Component {
  componentDidMount() {
    this.fetchConversation(this.props.match.params.username)
  }

  fetchConversation = async username => {
    const conversation = await api.fetchConversation(username)
    this.props.receiveConversation(conversation)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.username !== nextProps.match.params.username) {
      this.fetchConversation(nextProps.match.params.username)
    }
  }

  render() {
    const { match, conversation } = this.props

    return <Conversation conversation={conversation} match={match} />
  }
}

const mapStateToProps = state => ({
  conversation: state.conversation
})

const mapStateToDispatch = {
  receiveConversation
}

ConversationContainer.propTypes = {
  match: PropTypes.object.isRequired,
  conversation: PropTypes.array.isRequired,
  receiveConversation: PropTypes.func.isRequired
}

export default withRouter(
  connect(
    mapStateToProps,
    mapStateToDispatch
  )(ConversationContainer)
)
