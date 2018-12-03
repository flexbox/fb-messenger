import React, { Component } from 'react'
import users from '../../mocks/users'
import Threads from './Threads'
import Conversation from './Conversation'

export default class index extends Component {
  render() {
    return (
      <div className="messenger">
        <Threads users={users} />
        <Conversation />
      </div>
    )
  }
}
