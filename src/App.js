import React, { Component } from 'react'
import './App.css'
import Modal from './components/Modal'
import Footer from './components/Footer'
import Topbar from './components/Topbar'
import Messenger from './components/Messenger/Messenger'

class App extends Component {
  constructor() {
    super()
    this.state = {
      showModal: false
    }
  }

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal
    }))
  }

  showSettings = () => {
    this.toggleModal()
  }

  render() {
    const { showModal } = this.state

    return (
      <div className="app">
        <Footer />
        <Modal show={showModal} toggleModal={this.toggleModal} />
        <Topbar toggleModal={this.toggleModal} />
        <Messenger />
      </div>
    )
  }
}

export default App
