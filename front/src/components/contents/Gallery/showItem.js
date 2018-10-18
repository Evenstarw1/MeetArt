import React, { Component } from 'react';
import axios from 'axios';


export default class Item extends Component {
    constructor() {
        super();
        this.state = {};
    }

    getAllInfo = () => {
        axios.get(`http://localhost:3010/api/item`, { withCredentials: true })
            .then(responseFromApi => {
                console.log(responseFromApi);
                this.setState({
                    listOfDetails: responseFromApi.data
                })
            })
    }

    componentDidMount() {
        this.getAllDetails();
    }


    render() {
        if (this.state.listOfDetails) {
            let item = this.state.listOfDetails;
            return (
            <div>
                
                <div key={item._id}>
                    <img className="img-profile" src={item.image} alt={item.name} />
  
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                    <p>{item.category} </p>
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