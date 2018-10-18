import React, { Component } from 'react';
import axios from 'axios';
import './showitem.css';

export default class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {id: props.match.params.id}
    }

    getAllInfo = () => {
        axios.get(`http://localhost:3010/api/item/${this.state.id}` )
            .then(responseFromApi => {
                console.log(responseFromApi);
                this.setState({
                    listOfDetails: responseFromApi.data
                })
            })
    }

    componentDidMount() {
        this.getAllInfo();
        
    }


    render() {
        if (this.state.listOfDetails) {
            let item = this.state.listOfDetails;
            return (
            <div className="box-item">
                
                <div key={item._id}>
                    <img className="img-item" src={item.image} alt={item.name} />
                <div className="box-info-item">
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                    <p>{item.category} </p>
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