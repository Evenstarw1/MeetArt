import React, { Component } from 'react';
import Map from '../Map/map.js';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './meetings.css';



class Meetings extends Component {
    constructor() {
        super();
        this.state = { listOfMeetings: [] };
    }

    getAllMeetings = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/meetings/`)
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
                <h3>Meetings</h3>
                <hr />
                <div className="button-meetings">
                <button className="btn btn-grad btn-edit"><Link to='/createmeeting'>Create a Meeting</Link></button>
                </div>


            <div className="map-meetings-group">

                <div className="map-list">
                    {this.state.listOfMeetings.length > 0 ? (
                        <Map className="map-meeting-list" id="myMap" meetings={this.state.listOfMeetings} />
                    ) : (
                            ""
                        )}
                </div>

                <div className="meetings-list">
                        <h5>Next meetings</h5>
                        <div>
                            {this.state.listOfMeetings.map((meeting, index) => {
                                return (
                                    <div className="each-meeting" key={meeting._id}>
                                        <h6>{meeting.name}</h6>
                                        <p><b>Where?</b> {meeting.place}</p>
                                        <p><b>When?</b> {meeting.date} at {meeting.time}h</p>
                                        <p>{meeting.description} </p>
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
