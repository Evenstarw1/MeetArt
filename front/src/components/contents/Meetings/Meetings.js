import React, { Component } from 'react';
import Map from '../Map/map.js';
import { Link } from 'react-router-dom';
import axios from 'axios';



class Meetings extends Component {
    constructor() {
        super();
        this.state = { listOfMeetings: [] };
    }

    getAllMeetings = () => {
        axios.get(`http://localhost:3010/api/meetings/`)
            .then(responseFromApi => {
                console.log(responseFromApi)
                this.setState({
                    listOfMeetings: responseFromApi.data
                })
            })
    }

    componentDidMount() {
        this.getAllMeetings();
    }


    render() {

        return (
            <div>
                <h1>Meetings</h1>
                <hr />
                <div className="map-container">
                        {this.state.listOfMeetings.length > 0 ? (
                            <Map id="myMap" meetings={this.state.listOfMeetings} />
                        ) : (
                        ""
                        )}
                </div>
                <div>
                    <Link to='/createmeeting'>Create a Meeting</Link>
                    <div>
                        <h3>Next meetings</h3>
                        <div style={{ width: '60%', float: "right" }}>
                            {this.state.listOfMeetings.map((meeting, index) => {
                                return (
                                    <div key={meeting._id}>
                                        <h3>{meeting.name}</h3>
                                        <p>{meeting.place}</p>
                                        <p>{meeting.description} </p>
                                        <p>{meeting.date}</p>
                                        <p>{meeting.times}</p>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Meetings;
