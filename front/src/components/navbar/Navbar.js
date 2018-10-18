// navbar/Navbar.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../auth/AuthService';
import './navbar.css';

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
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <img className="logo-nav" src="https://res.cloudinary.com/dqesvgqq9/image/upload/v1539856293/MeetArt/meetart_logo.png" alt=""/>            <div className="nav-link-direction">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active li-white"><Link className="nav-link-white" to='/'>Home</Link></li>
                <li className="nav-item active li-white"><Link className="nav-link-white" to='/profile'>Profile</Link></li>
                <li className="nav-item active li-white"><Link className="nav-link-white" to='/meetings'>Meetings</Link></li>
                <li className=""><button className="btn-navbar btn-grad-navbar" onClick={this.handleLogout}>Logout</button></li>
              </ul>
              </div>
              </div>
          </nav>
        </div>
              )
    } else {
      return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <img className="logo-nav" src="https://res.cloudinary.com/dqesvgqq9/image/upload/v1539856293/MeetArt/meetart_logo.png" alt=""/>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active"><Link className="nav-link-white" to='/signup'>Signup</Link></li>
                <li className="nav-item active"><Link className="nav-link-white" to='/login'>Login</Link></li>
              </ul>
              </div>
          </nav>   
              </div>
              )
            }
          }
        }
        
export default Navbar;