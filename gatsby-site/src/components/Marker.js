import React from 'react';
import PropTypes from 'prop-types';
import { google } from 'google-maps-react';

export class Marker extends React.Component {
    componentDidUpdate(prevProps) {
        if ((this.props.map !== prevProps.map) ||
        (this.props.position !== prevProps.position)) {
            this.renderMarker();
      }
    }
    componentWillUnmount() {
      if (this.marker) {
        this.marker.setMap(null);
      }
    }
    renderMarker() {
      let {
        map, google, position, mapCenter
      } = this.props;
      let pos = position || mapCenter;
      position = new google.maps.LatLng(pos.lat, pos.lng);
      const pref = {
        map: map,
        position: position
      };
      this.marker = new google.maps.Marker(pref);

    }
    render() {
      return null;
    }
    handleEvent(evtName) {
      return (e) => {
        function camelize(str) {
          return str.split(' ').map(function(word){
            return word.charAt(0).toUpperCase() + word.slice(1);
          }).join('');
        }
        const evtName = `on${camelize(e)}`
        if (this.props[evtName]) {
          this.props[evtName](this.props, this.marker, e);
        }
        this.props.evtNames.forEach(e => {
          this.marker.addListener(e, this.handleEvent(e));
        })
      }
    }
  }

  Marker.propTypes = {
    position: PropTypes.object,
    map: PropTypes.object
  }