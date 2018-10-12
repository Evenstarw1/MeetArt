// navbar/Navbar.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../auth/AuthService';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] })
  }

  handleLogout = (e) => {
    this.props.logout()
  }

  render() {
    if (this.state.loggedInUser) {
      return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active"><Link className="nav-link" to='/profile'>Profile</Link></li>
                <li className="nav-item active"><Link className="nav-link" to='/meetings'>Meetings</Link></li>
                <li className="nav-item active"><button className="btn btn-danger" onClick={this.handleLogout}>Logout</button></li>
              </ul>
              </div>
          </nav>
        </div>
              )
    } else {
      return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active"><Link className="nav-link" to='/signup'>Signup</Link></li>
                <li className="nav-item active"><Link className="nav-link" to='/login'>Login</Link></li>
              </ul>
              </div>
          </nav>   
              </div>
              )
            }
          }
        }
        
export default Navbar;