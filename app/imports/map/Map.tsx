import * as React from 'react';
import {GoogleApiWrapper, Map} from 'google-maps-react'

const __GAPI_KEY__ = "AIzaSyBTLq1MW1uKRqxDLPHiYYHVvCCr67EnS0s";

const MapContainer = React.createClass({
    getInitialState: function() {
        return {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
        }
    },

    onMapMoved: function(props, map) {
        const center = map.center;
    },

    onMarkerClick: function(props, marker, e) {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    },

    onInfoWindowClose: function() {
        this.setState({
            showingInfoWindow: false,
            activeMarker: null
        })
    },

    onMapClicked: function(props) {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    },

    render: function() {
        console.log(this.props);
        if (!this.props.loaded) {
            return <div>Loading...</div>
        }

        return (
            <Map google={this.props.google}
                 style={{width: '100%', height: '100%', position: 'relative'}}
                 className={'map'}
                 zoom={14}
                 containerStyle={{}}
                 centerAroundCurrentLocation={true}
                 onClick={this.onMapClicked}
                 onDragend={this.onMapMoved} />
        )
    }
});


GoogleApiWrapper({
    apiKey: __GAPI_KEY__
})(MapContainer);

export default MapContainer;