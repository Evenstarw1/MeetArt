import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCkhuP8ROCRjv9n-f_LuZtylrTZY2yJTP0",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => {

  let markers;

  if (props.markers) {
    markers = props.markers.map((e, i) => <Marker key={i} position={{ lat: e.lat, lng: e.lng }} />)
  }

  return (<GoogleMap
    defaultZoom={15}
    defaultCenter={{lat: 40.416856345761985 , lng: -3.703494483007944}}
    onClick={e => props.onMarkerClick(e)}
  >
    {markers}
  </GoogleMap>)
}
)

class Map extends React.PureComponent {
  state = {

  }

  componentDidMount() {
  }



  handleMarkerClick = (e) => {
    this.setState({ marker: [{ lat: e.latLng.lat(), lng: e.latLng.lng() }] })
    this.props.handleClick(e);
  }

  render() {
    return (
      <MyMapComponent
        onMarkerClick={this.handleMarkerClick}
        markers={this.state.marker}
      />
    )
  }
}

export default Map