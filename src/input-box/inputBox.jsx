
import React, { Component } from 'react';

export class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || '',
      error: ''
    }
  }

  setvalue = (value) => {
    this.setState({
      value: value,
      error: !value
    })
  }

  render() {
    return (
      <div>
        <label>Enter your name</label>
        <input
          type="text"
          value={this.state.value}
          onChange={(event) => this.setvalue(event.target.value)} />
        <button disabled={this.state.error}> Submit </button>
        {this.state.error && <div className='error-message'>The value entered is not valid.</div>}
        <div>{this}</div>
      </div>
    );
  }
} 