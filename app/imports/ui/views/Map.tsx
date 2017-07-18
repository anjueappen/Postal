import * as React from 'react';
import * as _ from 'underscore';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import withScriptjs from "react-google-maps/lib/async/withScriptjs";

const GoogleMapComponent = withScriptjs(
    withGoogleMap(
        props => (
            <GoogleMap
                ref={props.onMapLoad}
                defaultZoom={3}
                defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
                onClick={props.onMapClick}
            >
                {props.markers.map(marker => (
                    <Marker
                        {...marker}
                        onRightClick={() => props.onMarkerRightClick(marker)}
                    />
                ))}
            </GoogleMap>
        )));


export class Map extends React.Component<{}, {}> {

    render(){
        return <GoogleMapComponent
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBTLq1MW1uKRqxDLPHiYYHVvCCr67EnS0s"
            loadingElement={<div style={{ height: `100%`, width:`100%` }}>
        <div>Loading ...</div>
      </div>}
            containerElement={<div style={{ height: `500px`, width: '100%'}} />}
            mapElement={<div style={{ height: `100%` }} />}
            onMapLoad={_.noop}
            onMapClick={_.noop}
            markers={[]}
            onMarkerRightClick={_.noop}
        />
    }
}
