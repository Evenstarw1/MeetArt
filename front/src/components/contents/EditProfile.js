import React from 'react';
import { Redirect } from "react-router-dom";
import axios from 'axios';
import UpItem from './Gallery/UpItem';
import './editprofile.css';


export default class EditProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
        this.service = new UpItem();
    }

    componentDidMount = () => {
        console.log(this.props.user);
        this.setState({ user: this.props.user })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const {user, image} = this.state;

        const formData = new FormData();
        formData.append("image", image);
        formData.append("username", user.username);
        formData.append("description", user.description);
        formData.append("location", user.location);
        formData.append("gender", user.gender);
        formData.append("role", user.role);

       return axios.post(`${process.env.REACT_APP_API_URL}/api/user/${this.state.user._id}`, formData, { 
            headers: {
                'Conent-Type': 'multipart/form-data',
            },
            withCredentials: true
        })
            .then(res => {
                console.log(res)
                return <Redirect to="/Profile"></Redirect>
            })
            .catch(e => console.log("Error", e))
    }

    handleChangeProf = (event, type) => {
        let user = Object.assign({}, this.state.user)
        user[type] = event.target.value;
        this.setState({ user })
    }



    render() {
        let { user } = this.state;
        let displayEdit = this.props.displayEdit ? 'block' : 'none';
        return (
            <div style={{display: displayEdit}}>
                <hr />
                <h5>Edit your Profile</h5>
                <p>Your information will appear on your public profile.</p>
                <div className="box-edit-background">
                <div className="box-edit-profile">
                <div className="meeting-form">
                <form onSubmit={this.handleFormSubmit} >
                <div className="field">
                    <label className="label label-text">Username:</label>
                    <input className="input" type="text" name="username" value={user.username} onChange={e => this.handleChangeProf(e, "username")} />
                    </div>   
                    <label className="label label-text">Description:</label>
                    <textarea className="textarea" name="description" value={user.description} onChange={e => this.handleChangeProf(e, "description")} />
                    <p>Use your description to introduce yourself to the community. </p>
                    <label className="label label-text">Location:</label>
                    <input className="input" type="text" name="location" value={user.location} onChange={e => this.handleChangeProf(e, "location")} />
                    <label className="label label-text">Gender:</label>
                    <div class="control is-center">
                    <div class="select">
                    <select name="gender" value={user.gender} onChange={e => this.handleChangeProf(e, "gender")}>
                        <option value="-">-</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Robot">Robot</option>
                    </select>
                    </div>
                    </div>
                    <label className="label label-text">Role:</label>
                    <div class="control is-center">
                    <div class="select">
                    <select name="role" value={user.role} onChange={e => this.handleChangeProf(e, "role")}>
                        <option value="-">-</option>
                        <option value="Illustrator">Illustrator</option>
                        <option value="Writer">Writer</option>
                        <option value="Photographer">Photographer</option>
                    </select>
                    </div>
                    </div>
                    <label className="label label-text">Your profile pic:</label>
                    <input type="file" name='image' placeholder='Your profile pic' onChange={e => this.setState({image: e.target.files[0]})} />
                    <button className="btn btn-grad btn-edit" onClick={this.editProfile}>Submit</button>
                </form>
                </div>
                </div>
                </div>
            </div>
        )
    }
}