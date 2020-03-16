import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../components/Marker'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 37.77,
      lng: -122.42
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '300px', width: '400px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAoJ4eWsP98Hk-YCWX7iB11qEzdx927jCs' }}
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
    );
  }
}

export default GoogleMap;