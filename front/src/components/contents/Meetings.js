import React, { Component } from 'react';
import '../css/Map.css';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
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
        const style = {
            width: '600px',
            height: '100%',/* 
            marginRight: '750px' */
        }
        return (
            <div>
                <h1>Meetings</h1>
                <hr />
                <div className="map-container">
                    <Map style={style} google={this.props.google} zoom={14} initialCenter={{ lat: 40.4169473, lng: -3.7057172 }}>
                        <Marker onClick={this.onMarkerClick}
                            name={'Current location'} />

                        <InfoWindow onClose={this.onInfoWindowClose}>
                            {/* <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                        </div> */}
                        </InfoWindow>
                    </Map>
                </div>
                <div style={{ "zindex": "10" }}>
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

export default GoogleApiWrapper({
    apiKey: ("AIzaSyCkhuP8ROCRjv9n-f_LuZtylrTZY2yJTP0")
})(Meetings)
