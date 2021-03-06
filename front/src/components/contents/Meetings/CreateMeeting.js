import React from 'react';
import { Redirect } from "react-router-dom";
import axios from 'axios';
import Map from '../Map/map.js';

export default class CreateMeetings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      meetings: {},
      redirect: false
    }
  }


  componentDidMount = () => {
    this.setState({ meetings: this.props.meetings })
  }

  handleFormSubmit = (event) => {
    const data = this.state.meetings;
    data['lat'] = this.state.lat;
    data['lng'] = this.state.lng;
    event.preventDefault();
    console.log(data)
    axios.post(`${process.env.REACT_APP_API_URL}/api/meetings`, { data })
      .then(res => {
        console.log(res)
        this.setState({ redirect: true })
      })
      .catch(e => console.log("Error", e))
  }

  handleAddMeet = (event, type) => {
    let meetings = Object.assign({}, this.state.meetings)
    meetings[type] = event.target.value;
    this.setState({ meetings })
  }

  handleClickMap = (event) => {
    this.setState({ lat: event.latLng.lat(), lng: event.latLng.lng() })
  }


  render() {
    if (this.state.redirect) return <Redirect to='/meetings' />

    return (
      <div>
          <h3>Create your Meeting</h3>
          <hr />
          <div className="map-meetings-group">
            <div className="map-list">
              <Map className="map-meeting-list" id="myMap" handleClick={this.handleClickMap} />
            </div>

            <div className="meeting-form">
            <form onSubmit={this.handleFormSubmit}>
            <div className="field">
              <label className="label label-text">Name:</label>
              <input className="input" type="text" name="name" onChange={e => this.handleAddMeet(e, "name")} />
              </div>
              <div className="field">
              <label className="label label-text">Description:</label>
              <textarea className="textarea" name="description" onChange={e => this.handleAddMeet(e, "description")} />
              </div>
              <div className="field">
              <label className="label label-text">Place:</label>
              <input className="input" type="text" name="name" onChange={e => this.handleAddMeet(e, "place")} />
              </div>
              <label className="label label-text">Date:</label>
              <input type="date" name="date" onChange={e => this.handleAddMeet(e, "date")} />
              <label className="label label-text">Time:</label>
              <input type="time" name="time" onChange={e => this.handleAddMeet(e, "time")} />
              <div className="field">
              <label className="label label-text">Category:</label>
              <div class="control is-center">
              <div class="select">
              <select name="category" onChange={e => this.handleAddMeet(e, "category")}>
                <option value="Drawing">Drawing</option>
                <option value="Painting">Painting</option>
                <option value="Photography">Photography</option>
                <option value="Writing">Writing</option>
              </select>
              </div>
              </div>
              </div>
              <button className="btn btn-grad btn-edit" type="submit">Submit</button>
            </form>
          </div>
          </div>
      </div>
    )
  }
}