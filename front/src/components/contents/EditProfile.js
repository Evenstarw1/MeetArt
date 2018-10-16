import React from 'react';
import { Redirect } from "react-router-dom";
import axios from 'axios';
import UpItem from './Gallery/UpItem'


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

       return axios.post(`http://localhost:3010/api/user/${this.state.user._id}`, formData, { 
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
        return (
            <div>
                <hr />
                <h1>Edit your Profile</h1>
                <p>Your information will appear on your public profile.</p>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Username:</label>
                    <input type="text" name="username" value={user.username} onChange={e => this.handleChangeProf(e, "username")} />
                    <label>Description:</label>
                    <textarea name="description" value={user.description} onChange={e => this.handleChangeProf(e, "description")} />
                    <p>Use your descriptiono to introduce yourself to the community. </p>
                    <label>Location:</label>
                    <input type="text" name="location" value={user.location} onChange={e => this.handleChangeProf(e, "location")} />
                    <label>Gender:</label>
                    <select name="gender" value={user.gender} onChange={e => this.handleChangeProf(e, "gender")}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Robot">Robot</option>
                    </select>
                    <label>Role:</label>
                    <select name="role" value={user.role} onChange={e => this.handleChangeProf(e, "role")}>
                        <option value="Illustrator">Illustrator</option>
                        <option value="Writer">Writer</option>
                        <option value="Photographer">Photographer</option>
                    </select>
                    <label>Image</label>
                    <input type="file" name='image' placeholder='Your profile pic' onChange={e => this.setState({image: e.target.files[0]})} />
                    <button onClick={this.editProfile}>Submit</button>
                </form>
            </div>
        )
    }
}