import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

export class Map extends React.Component {
  constructor(props) {
    super(props);

    const {lat, lng} = this.props.initialCenter;

    this.state = {
      currentLocation: {
        lat: lat,
        lng: lng
      }
    }
  }
        
  handleEvent(evtName) {

    function camelize(str) {
      return str.split(' ').map(function(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join('');
    }

    let timeout;
    const handlerName = `on${camelize(evtName)}`;

    return (e) => {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      timeout = setTimeout(() => {
        if (this.props[handlerName]) {
          this.props[handlerName](this.props, this.map, e);
        }
      }, 0);
    }
  }

  recenterMap() {
    const map = this.map;
    const curr = this.state.currentLocation;

    const google = this.props.google;
    const maps = google.maps;

    if (map) {
        let center = new maps.LatLng(curr.lat, curr.lng)
        map.panTo(center)
    }
  }

  componentDidMount() {
    if (this.props.centerAroundCurrentLocation) {
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                const coords = pos.coords;
                this.setState({
                    currentLocation: {
                        lat: coords.latitude,
                        lng: coords.longitude
                    }
                })
            })
        }
    }
    this.loadMap();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
    if (prevState.currentLocation !== this.state.currentLocation) {
      this.recenterMap();
    }
  }

  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let {initialCenter, zoom} = this.props;

      const {lat, lng} = initialCenter;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);

      this.props.evtNames.forEach(e => {
        this.map.addListener(e, this.handleEvent(e));
      });

      maps.event.trigger(this.map, 'ready');

      let centerChangedTimeout;
      this.map.addListener('dragend', (evt) => {
          if (centerChangedTimeout) {
          clearTimeout(centerChangedTimeout);
          centerChangedTimeout = null;
          }
          centerChangedTimeout = setTimeout(() => {
          this.props.onMove(this.map);
          }, 0);
      })

      function camelize(str) {
        return str.split(' ').map(function(word){
          return word.charAt(0).toUpperCase() + word.slice(1);
        }).join('');
      }

      this.props.evtNames.forEach(e => Map.propTypes[camelize(e)] = React.PropTypes.func);
    }
    // ...
  }
  renderChildren() {
    const {children} = this.props;

    if (!children) return;

    return React.Children.map(children, c => {
      return React.cloneElement(c, {
          map: this.map,
          google: this.props.google,
          mapCenter: this.state.currentLocation
      });
    })
  }
  render() {
    return (
      <div ref='map'>
        Loading map...
        {this.renderChildren()}
      </div>
    )
  } 
}

  Map.propTypes = {
    google: PropTypes.object,
    zoom: PropTypes.number,
    initialCenter: PropTypes.object,
    onMove: PropTypes.func,
  }

  Map.defaultProps = {
    zoom: 13,
    // San Francisco, by default
    initialCenter: {
      lat: 37.774929,
      lng: -122.419416
    },
    onMove: function() {}
  }