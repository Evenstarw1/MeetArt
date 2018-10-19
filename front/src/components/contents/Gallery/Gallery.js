import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './gallery.css'

export default class Gallery extends Component {
    constructor() {
        super();
        this.state = { listOfItems: [] };
    }

    getAllItems = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/item`, { withCredentials: true })
            .then(responseFromApi => {
                this.setState({
                    listOfItems: responseFromApi.data
                })
            })
    }

    componentDidMount() {
        this.getAllItems();
    }
 

    render() {
        if (this.state.listOfItems) {
            return this.state.listOfItems.map((items, index) => {
                return (
                    <div className="gallery-container">
                    <div className="card card-style">
                    <div key={index}>
                            <div key={items._id}>
                            <div className="item-image">
                                <img className="card-img-top card-img-height" src={items.image} alt={items.name}/>
                            </div>
                                <h5 className="card-title">{items.title}</h5>
                                <button className="btn btn-grad"><Link to={'/item/'+ items._id}>Visit</Link></button>
                            </div>
                        </div>
                    </div> 
                    </div>                   
                )
            })
        } else {
            return (
                <h3>Loading...</h3>
            )
        }

    }
}