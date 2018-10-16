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
    axios.post(`http://localhost:3010/api/meetings/`, { data })
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
    this.setState({lat: event.latLng.lat(), lng: event.latLng.lng()})
  }


  render() {
    if (this.state.redirect) return <Redirect to='/meetings' />

    return (
      <div>
        <div>
          <h2>Create your Meeting</h2>
          <form onSubmit={this.handleFormSubmit}>
            <label>Name</label>
            <input type="text" name="name" onChange={e => this.handleAddMeet(e, "name")} />
            <label>Description:</label>
            <textarea name="description" onChange={e => this.handleAddMeet(e, "description")} />
            <label>Place</label>
            <input type="text" name="name" onChange={e => this.handleAddMeet(e, "place")} />           
            <label>Date:</label>
            <input type="date" name="date" onChange={e => this.handleAddMeet(e, "date")} />
            <label>Time:</label>
            <input type="time" name="time" onChange={e => this.handleAddMeet(e, "time")} />
            <label>Category:</label>
            <select name="category" onChange={e => this.handleAddMeet(e, "category")}>
              <option value="Drawing">Drawing</option>
              <option value="Painting">Painting</option>
              <option value="Photography">Photography</option>
              <option value="Writing">Writing</option>
            </select>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="map">
          <Map id="myMap" handleClick={this.handleClickMap}/>
        </div>

      </div>
    )
  }
}