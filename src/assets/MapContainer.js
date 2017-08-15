import React, {Component} from 'react'
import {
  withGoogleMap,
  GoogleMap,
  InfoWindow,
  Marker,
} from "react-google-maps";

const InitialMap = withGoogleMap(props => {
	let position={
					lat: 25.0112183,
					lng: 121.520067570000001,
				}
  return (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={14}
      defaultCenter={position}
    >
      <Marker
        key={1}
        position={position}
        
      />
    </GoogleMap>
  )
});



class MapContainer extends Component {
	render() {
		return(
			<div style={{height: "100%"}}>
				<InitialMap
					containerElement={
						<div style={{height: "100%"}}/>
					}
					mapElement={
						<div style={{height: "100%"}}/>
					}
					
				/>
				
			</div>
		);
	}
}
export default MapContainer