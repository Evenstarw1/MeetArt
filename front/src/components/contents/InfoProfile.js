import React, { Component } from 'react';
import axios from 'axios';
import './profile.css'

export default class User extends Component {
    constructor() {
        super();
        this.state = {};
    }

    getAllInfo = () => {
        axios.get(`http://localhost:3010/api/user/profile`, { withCredentials: true })
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
                    <img className="img-profile" src={user.image} alt={user.name} />
                    <h5 className="">{user.username}</h5>
                    <p className="">{user.description} </p>
                    <p>{user.location}</p>
                    <p>{user.gender}</p>
                    <p>{user.role}</p>
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