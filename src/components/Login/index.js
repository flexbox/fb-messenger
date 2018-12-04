import React, { Component } from 'react'
import './Login.css'

class Login extends Component {
  constructor(props) {
    super(props)

    // Here you'll need to set up the state of the form
    this.state = {
      email: '',
      password: ''
    }
  }

  _handleChange = (name, event) => {
    let change = {
      [name]: event.target.value
    }
    this.setState(change)
  }

  _handleSubmit = async e => {
    // When the button(which type=submit) is clicked, we can stop the form submission by doing:
    e.preventDefault()

    const { history } = this.props
    const { password, email } = this.state

    // You can add some validation here to make sure password and email are provided

    const { status } = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({ password, email })
    })

    if (status === 200) {
      history.push('/')
    }
  }

  render() {
    return (
      <form className="form-signin">
        <div className="form-group">
          <h2 className="form-signin-heading">Please sign in</h2>
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Enter email"
            className="form-control"
            value={this.state.email}
            onChange={e => this._handleChange('email', e)}
          />
          <input
            type="password"
            placeholder="Enter password"
            className="form-control"
            value={this.state.password}
            onChange={e => this._handleChange('password', e)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-lg btn-primary btn-block"
          onClick={this._handleSubmit}
        >
          Sign in
        </button>
      </form>
    )
  }
}

export default Login
