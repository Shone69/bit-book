import React, { Component } from 'react';

export class LogIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }
  username = (event) => {
    this.setState({ username: event.target.value })
  }

  password = (event) => {
    this.setState({ password: event.target.value })
  }
  logIn = (event) => {
    this.props.logInUser(this.state.username, this.state.password)
    this.setState({ username: '', password: '' })
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="input-field col s8 offset-s1">
            <input id="username" type="text" className="validate" onChange={this.username} value={this.state.username} />
            <label for="username" >username</label>
          </div>

        </div>
        <div className="row">
          <div className="input-field col s8 offset-s1">
            <input id="password" type="password" className="validate" onChange={this.password} value={this.state.password} />
            <label for="password">Password</label>
          </div>
        </div>
        <p className="waves-effect waves-light btn" onClick={this.logIn}> Log in</p>

      </div>

    )
  }
}