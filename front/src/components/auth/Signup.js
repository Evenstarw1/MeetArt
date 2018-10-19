// auth/Signup.js
import React, { Component } from 'react';
import AuthService from './AuthService';
import './Auth.css'

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '', email: '' };
    this.service = new AuthService();
  }
    
  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const email = this.state.email;


    this.service.signup(username, password, email)
    .then( response => {
        this.setState({
            username: "", 
            password: "",
            email: "",
        });
        this.props.getUser(response.user)
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
      

  render() {
    return(
      <div>
        <h3>Welcome to MeetArt!</h3>
        <h3>Please, complete the form to be a member</h3>
        <hr/>
        <div ClassName="box-auth">
        <div className="box-display">
      <div className="box-container">
        <form className="loginBox" onSubmit={this.handleFormSubmit}>
        <div className="form-group">
          <fieldset>
            <label className="label label-text">Username:</label>
            <input className="form-control" type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
          </fieldset>
          </div>
          <div className="form-group">
          <fieldset>
            <label className="label label-text">Password:</label>
            <input className="form-control" type="password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
          </fieldset>
          </div>
          <div className="form-group">
          <fieldset>
            <label className="label label-text">Email:</label>
            <input className="form-control" type="email" name="email" value={this.state.email} onChange={ e => this.handleChange(e)} />
          </fieldset>
          </div>
          <input className="btn btn-grad" type="submit" value="Sign up" />
        </form>
        </div>
        </div>
</div>
      </div>
    )
  }
}

export default Signup;