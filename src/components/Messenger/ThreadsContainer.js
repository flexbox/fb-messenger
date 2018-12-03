import React, { Component } from 'react'
import { withRouter } from 'react-router'

import { fetchThreads } from '../../api/thread'
import Threads from './Threads'

class ThreadsContainer extends Component {
  constructor(props) {
    super(props)

    // hint, add some state here
    this.state = {
      threads: []
    }
  }

  componentDidMount() {
    // hint, you should fetch the threads here
    fetchThreads()
      .then(({ threads }) => {
        this.setState({ threads })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const { showSettings, newMessage, history, match } = this.props
    const { threads } = this.state

    return <Threads threads={threads} history={history} match={match} />
  }
}

export default withRouter(ThreadsContainer)
