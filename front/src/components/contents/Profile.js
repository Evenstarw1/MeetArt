import React, { Component } from 'react';
import EditProfile from './EditProfile';
// import AuthService from '../auth/AuthService';
import Gallery from './Gallery/Gallery';
import { Link } from 'react-router-dom';


class Profile extends Component {

  render() {
      return (
        <div>
          <h1>Hola</h1>
          <EditProfile user= {this.props.userInSession} />
          <hr/>
          <Link to='/submitart'>Submit Art</Link>
          <Gallery/>
        </div>
    )
  }
}

export default Profile;