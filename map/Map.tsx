import * as React from 'react';
import {GoogleApiWrapper, Map} from 'google-maps-react'

const __GAPI_KEY__ = "AIzaSyBTLq1MW1uKRqxDLPHiYYHVvCCr67EnS0s";


export const MapContainer = createContainer(() => {
    const onReady = () => {
        console.log('Map ready');
        loaded
    }
};, Map);


const class MapContainer {
    constructor(props:any){
        super(props);
        this.onReady = this.onReady.bind(this);
    },
    getInitialState: function() {
        return {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
        }
    },

    onReady(){
        console.log("ready");
        this.setState({loaded:true});
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

    /*OVER HERE! Check why this.props.loaded is false.. */

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
                 onDragend={this.onMapMoved}
                 onReady={this.onReady}/>
        )
    }
};


GoogleApiWrapper({
    apiKey: __GAPI_KEY__
})(MapContainer);

export default MapContainer;