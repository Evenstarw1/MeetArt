import React, { Component } from 'react';
import EditProfile from './EditProfile';
// import AuthService from '../auth/AuthService';



class Profile extends Component {

  render() {
      return (
        <div>
          <h1>Hola</h1>
          <EditProfile user= {this.props.userInSession} />
        </div>
    )
  }
}

export default Profile;