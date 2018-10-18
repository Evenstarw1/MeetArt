import React, { Component } from 'react';
import EditProfile from './EditProfile';
// import AuthService from '../auth/AuthService';
import Gallery from './Gallery/Gallery';
import User from './InfoProfile';
import { Link } from 'react-router-dom';
import './Gallery/gallery.css'
import './profile.css';



class Profile extends Component {



  render() {
      return (
        <div>
          <User/>
          <EditProfile id="edit" user= {this.props.userInSession} />
          <hr/>
          <h3>Art Gallery</h3>
          <button className="btn btn-grad btn-submit"><Link to='/submitart'>Submit Art <img className="img-button" src="https://res.cloudinary.com/dqesvgqq9/image/upload/v1539856293/MeetArt/upload_item.png" alt=""></img></Link></button>
          <div className="card-group gallery-group">
          <Gallery/>
          </div>
        </div>
    )
  }
}

export default Profile;