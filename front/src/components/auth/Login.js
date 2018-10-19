// auth/Signup.js
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AuthService from './AuthService'
import './Auth.css'
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service.login(username, password)
      .then(response => {
        this.setState({
          username: username,
          password: password,
          error: false,
          redirect: true,
        });

        this.props.getUser(response)
      })
      .catch(error => {
        this.setState({
          username: username,
          password: password,
          error: true
        });
      })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    if(this.state.redirect) return <Redirect to="/profile"></Redirect>
    return (<div>
      <div ClassName="box-auth">
      <h3>Please, login to our site</h3>
      <hr/>
  
      <div className="box-display">
      <div className="box-container">
      <form className="px-4 py-3 loginBox" onSubmit={this.handleFormSubmit}>

        <div className="form-group">
          <fieldset>
            <label className="label label-text">Username:</label>
            <input className="form-control" type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
          </fieldset>
        </div>
        <div className="form-group">
          <fieldset >
            <label className="label label-text">Password:</label>
            <input className="form-control" type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
          </fieldset>
        </div>
        <input className="btn btn-grad" type="submit" value="Login" />
      </form>
      </div>

      <h1>{this.state.error ? 'Error' : ''}</h1>
    </div>
    </div>
    </div>)
  }
}

export default Login;