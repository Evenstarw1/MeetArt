import React, { Component } from 'react';
import axios from 'axios';
import './profile.css'

export default class User extends Component {
    constructor() {
        super();
        this.state = {};
    }

    getAllInfo = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/user/profile`, { withCredentials: true })
            .then(responseFromApi => {
                console.log(responseFromApi);
                this.setState({
                    listOfInfo: responseFromApi.data
                })
            })
    }

    componentDidMount() {
        this.getAllInfo();
    }

    


    render() {
        if (this.state.listOfInfo) {
            let user = this.state.listOfInfo;
            return (<div>
                <div className="profile-box">
                <div key={user._id}>
                <div className="profile-info">
                <div className="img-box">
                    <img className="img-profile" src={user.image} alt={user.name} />
                </div>
                <div className="txt-box">
                    <h5 className="">{user.username}</h5>
                    <p>{user.gender}</p>
                    <h6>My description:</h6>
                    <p className="">{user.description} </p>
                    <h6>Where I am?</h6>
                    <p>{user.location}</p>
                    <h6>I'm a...</h6>
                    <p>{user.role}</p>
                </div>     
                </div>
                <button onClick={(e) => this.props.toggle_visibility(e)} className="btn btn-grad btn-edit">Edit your profile<img className="img-button-pencil" src="https://res.cloudinary.com/dqesvgqq9/image/upload/v1539856293/MeetArt/pencil.png" alt=""></img></button>
                </div> 
                </div>   
            </div>
            )
        } else {
            return (
                <h3>Loading...</h3>
            )
        }
    }
}