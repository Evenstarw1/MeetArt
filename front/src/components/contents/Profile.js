import React, { Component } from 'react';
import EditProfile from './EditProfile';
// import AuthService from '../auth/AuthService';
import Gallery from './Gallery/Gallery';
import UploadItem from './Gallery/UploadItem';

class Profile extends Component {

  render() {
      return (
        <div>
          <h1>Hola</h1>
          {/* <h2>Welcome, {this.state.loggedInUser.username}</h2> */}
          <EditProfile user= {this.props.userInSession} />
          <hr/>
          <h2>Upload</h2>
          <UploadItem/>
          {/* <Gallery/>  */}
        </div>
    )
  }
}

export default Profile;