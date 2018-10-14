import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import axios from 'axios';
import '../css/Map.css';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';



class CreateMeetings extends Component {

  constructor(props){
    super(props);
    this.state = {
        meetings: {},
        redirect: false
    }
  }
  

  componentDidMount = () => {
    this.setState({meetings: this.props.meetings})
  }

  handleFormSubmit=(event)=>{
    const data = this.state.meetings;
    event.preventDefault();
    axios.post(`http://localhost:3010/api/meetings/`,{data})
    .then(res => {
      console.log(res)
      this.setState({redirect: true})
    })
    .catch(e=>console.log("Error",e))
  }

  handleAddMeet= (event, type)=> {
    let meetings = Object.assign({}, this.state.meetings)
    meetings[type] = event.target.value;
    this.setState({meetings})
  }


  render() {
      if(this.state.redirect)return <Redirect to='/meetings'/>
    const style = {
        width: '600px',
        height: '100%'
    }

    return (
      <div>
        <div>
        <h2>Create your Meeting</h2>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name</label>
          <input type="text" name="name" onChange={e => this.handleAddMeet(e, "name")}/>
          <label>Description:</label>
          <textarea name="description" onChange={e => this.handleAddMeet(e, "description")} />
          <label>Place</label>
          <input type="text" name="name" onChange={e => this.handleAddMeet(e, "place")}/>
          <label>Date:</label>
          <input type="date" name="date" onChange={e => this.handleAddMeet(e, "date")} />
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

        <div class="map-container">
                <Map style = {style} google={this.props.google} zoom={14} initialCenter = {{ lat: 40.4169473, lng: -3.7057172 }}>
                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>
                        {/* <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                        </div> */}
                    </InfoWindow>
                </Map>
        </div>

      </div>
    )
  }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyCkhuP8ROCRjv9n-f_LuZtylrTZY2yJTP0")
  })(CreateMeetings)