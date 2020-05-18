import React, { Component } from "react"
import GoogleMapReact from "google-map-react"
import Marker from "../components/Marker"

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 37.77,
      lng: -122.42,
    },
    zoom: 11,
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "300px", width: "400px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GOOGLE_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={37.771}
            lng={-122.3866}
            text="Alison Knight"
            color="blue"
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default GoogleMap
