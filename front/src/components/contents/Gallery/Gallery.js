import React, { Component } from 'react';
import axios from 'axios';

export default class Gallery extends Component {
    constructor() {
        super();
        this.state = { listOfItems: [] };
    }

    getAllItems = () => {
        axios.get(`http://localhost:3010/api/item`, { withCredentials: true })
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
                    <div key={index}>
                        <div>
                            <div key={items._id}>
                                <h3>{items.name}</h3>
                                <img src={items.image} alt=""/>
                                <p>{items.description} </p>
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