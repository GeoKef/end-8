import React, { Component } from 'react';
import Map from './Map'
import List from './List'


export default class MapContainer extends Component {

  render() {
    const { google, onChangeMarker, locationsGoogle } = this.props;

    return (
      <div className="map-container">
        <List locationsGoogle={locationsGoogle} />
        <main role="presentation"  aria-label="Map showing places" className="main-container">
          <Map 
            google={google}
            onChangeMarker={onChangeMarker} 
            />
        </main>
      </div>
    )
  }
}