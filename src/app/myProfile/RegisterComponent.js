import React, { Component } from 'react';
import { RegisterForm } from "../services/register"

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      name: "",
      password: "",
      email: "",

    }
  }

  userName = (event) => {
    this.setState({ username: event.target.value })
  }
  nameOfUser = (event) => {
    this.setState({ name: event.target.value })
  }
  passwordOfUser = (event) => {
    this.setState({ password: event.target.value })
  }
  emailOfUser = (event) => {
    this.setState({ email: event.target.value })
  }

  registerUser = () => {

    const username = this.state.username;
    const name = this.state.name;
    const password = this.state.password;
    const email = this.state.email;
    this.props.registerUser(username, password, name, email)
  }


  render() {
    return (
      <div>

        <div className="row">
          <div class="input-field col s8">
            <input id="username" type="text" class="validate" onChange={this.userName} value={this.state.username} />
            <label for="username">Username</label>
          </div>
          <div class="input-field col s8">
            <input id="first_name" type="text" class="validate" onChange={this.nameOfUser} value={this.state.name} />
            <label for="first_name">First Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s8">
            <input id="password" type="password" className="validate" onChange={this.passwordOfUser} value={this.state.password} />
            <label for="password">Password</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s8">
            <input id="email" type="email" className="validate" onChange={this.emailOfUser} value={this.state.email} />
            <label for="email">Email</label>
          </div>

        </div>
        <p className="waves-effect waves-light btn" onClick={this.registerUser}>Register</p>

      </div>

    )
  }
}

export { Register }