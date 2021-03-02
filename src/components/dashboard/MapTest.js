import React, {Component} from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
// import { render } from "react-dom";

const MapTest = props => {
  const {locations} = props;

  const displayMarkers = () => {
    if (locations !== null) {
      return locations.map((location, index) => {  
        return display(location, index);
      }) 
    } else {
      return null;
    }
  }

  const display = (spot, index) => {
    let marker = spot[1];
      return <Marker key={index} id={index} position={{
        lat: marker.__,
        lng: marker.f_
      }}
      onClick={() => console.log("You clicked me!")} />    
  }

    return (
        <div className="section">
        {locations !== null ? 
            <div className="card z-depth-0 p-4">
                <div id="map-content" className="card-content">
                    <div id="map">
                    <Map 
                      google={props.google}
                      zoom={8}
                      // style={mapStyles}
                      initialCenter={{ lat: 47.444, lng: -122.176}}
                      >
                      {displayMarkers()}
                    </Map>
                    </div>
                </div>
            </div>
            : null
          }    
        </div>
    )
  }

 

const mapStateToProps = (state, ownProps) => {
  // console.log("MAPSTATE", state);
  // console.log("OWNPROPS", ownProps);
  const project = ownProps.project;
  const locations = project.locations ? Object.entries(project.locations) : null;

  return {
    locations: locations,
    auth: state.firebase.auth
  };
};


export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "projects"
    }
  ]),
  GoogleApiWrapper({
  apiKey: 'AIzaSyCA9SKgoBD6F007I3vtQ2_e2pFlCJmQEks'
}))(MapTest);