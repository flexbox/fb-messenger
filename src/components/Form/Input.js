import React, { Component } from 'react'

/*

Here you can create your uncontrolled Input.

Hints:
- This component will be uncontrolled from the outer components, meaning this
component needs to keep track of the state of the input.
- Uncontrolled components receive a prop to "notify" the outer components that the
state has changed. That prop is normally called onChange.
- If you add the class form-control to your Input it will keep the style.

*/

class Input extends Component {
  state = {
    value
  }

  _handleChange(value) {}

  render() {
    const { placeholder, type } = this.props

    return (
      <input
        {...this.props}
        type={type}
        placeholder={placeholder}
        className="form-control"
        value={this.state.value}
        onChange={e => this._handleChange(value, e)}
      />
    )
  }
}

export default Input
