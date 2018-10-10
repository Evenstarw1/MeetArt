import React from 'react';
import { Redirect } from "react-router-dom";
import axios from 'axios';


export default class EditProfile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: this.props.user
        }
      }

      editProfile=()=>{
        const {username, image, description, location, gender, role}=this.state
        const profile={username, image, description, location, gender, role}
        axios.post("http://localhost:3010/api/auth",profile)
        .then(res => {
          console.log(res)
          return <Redirect to="/Profile"></Redirect>
        })
        .catch(e=>console.log("Error",e))
      }

      handleChangeProf = (event) => {  
        }
      
    

    render() {
        let user = this.props.user
        return (
            <div>
                <hr />
                <h1>Edit Profile</h1>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Username:</label>
                    <input type="text" name="username" value={user.username} onChange={e => this.handleChangeProf(e)} />
                    <label>Description:</label>
                    <textarea name="description" value={user.description} onChange={e => this.handleChangeProf(e)} />
                    <label>Location:</label>
                    <input type="text" name="location" value={user.location} onChange={e => this.handleChangeProf(e)} />
                    <label>Gender:</label>
                    <select name="gender" value={user.gender} onChange={e => this.handleChangeProf(e)}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Robot">Robot</option>
                    </select>
                    <label>Role:</label>
                    <select name="role" value={user.role} onChange={e => this.handleChangeProf(e)}>
                        <option value="Illustrator">Illustrator</option>
                        <option value="Writer">Writer</option>
                        <option value="Photographer">Photographer</option>
                    </select>

                <button onClick={this.editProfile}>Submit</button>
            </form>
            </div>
        )
    }
}