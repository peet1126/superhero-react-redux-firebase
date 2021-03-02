import React, {Component} from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
// import { render } from "react-dom";

class MapTest extends Component {
  state = {
    store: [{lat: 47.49855629475769, lng: -122.14184416996333},
            {latitude: 47.359423, longitude: -122.021071},
            {latitude: 47.2052192687988, longitude: -121.988426208496},
            {latitude: 47.6307081, longitude: -122.1434325},
            {latitude: 47.3084488, longitude: -122.2140121},
            {latitude: 47.5524695, longitude: -122.0425407}]
  }

  displayMarkers = () => {
    return this.state.store.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  }

  render() {
    console.log("Google Props", this.props.google)
    console.log("Copy State", this.state.store)
    return (
        <div className="section">
            <div className="card z-depth-0 p-4">
                <div id="map-content" className="card-content">
                    <div id="map">
                    <Map 
                      google={this.props.google}
                      zoom={8}
                      // style={mapStyles}
                      initialCenter={{ lat: 47.444, lng: -122.176}}
                      >
                      {this.displayMarkers()}
                    </Map>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default 
  GoogleApiWrapper({
  apiKey: 'AIzaSyCA9SKgoBD6F007I3vtQ2_e2pFlCJmQEks'
})(MapTest);