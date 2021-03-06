import * as React from 'react';
import {withGoogleMap, GoogleMap, Marker, OverlayView} from "react-google-maps/lib";
import SearchBox from "react-google-maps/lib/places/SearchBox";

const INPUT_STYLE = {
    boxSizing: `border-box`,
    MozBoxSizing: `border-box`,
    border: `1px solid transparent`,
    width: `240px`,
    height: `32px`,
    marginTop: `27px`,
    padding: `0 12px`,
    borderRadius: `1px`,
    boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
    fontSize: `14px`,
    outline: `none`,
    textOverflow: `ellipses`,
};

const NO_STYLE = {};

interface GoogleMapProps {
    center:any,
    onMapMounted:any,
    onBoundsChanged:any,
    onSearchBoxMounted:any,
    bounds:any,
    onPlacesChanged:any,
    markers:any}

const SearchBoxGoogleMap = withGoogleMap((props:GoogleMapProps) => (
    <GoogleMap
        ref={props.onMapMounted}
        defaultZoom={15}
        center={props.center}
        onBoundsChanged={props.onBoundsChanged}>
        <SearchBox
            ref={props.onSearchBoxMounted}
            bounds={props.bounds}
            controlPosition={google.maps.ControlPosition.TOP_CENTER}
            onPlacesChanged={props.onPlacesChanged}
            inputPlaceholder="Send mail to..."
            inputStyle={INPUT_STYLE}
        />
        {props.markers.map((marker, index) => (
            <Marker position={marker.position} key={index} />
        ))}

    </GoogleMap>
));

/*
 * https://developers.google.com/maps/documentation/javascript/examples/places-searchbox
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class GoogleMapWithSearchBox extends React.Component<{}, {bounds:any, center:any, markers:any}> {
    _map: any;
    _searchBox:any;

    constructor(props:any){
        super(props);
        this.state = {
            bounds: null,
            center: {
                lat: 47.6205588,
                lng: -122.3212725,
            },
            markers: [],
        };
        this.handleMapMounted = this.handleMapMounted.bind(this);
        this.handleBoundsChanged = this.handleBoundsChanged.bind(this);
        this.handleSearchBoxMounted = this.handleSearchBoxMounted.bind(this);
        this.handlePlacesChanged = this.handlePlacesChanged.bind(this);

    }

    handleMapMounted(map) {
        this._map = map;
    }

    handleBoundsChanged() {
        this.setState({
            bounds: this._map.getBounds(),
            center: this._map.getCenter(),
        });
    }

    handleSearchBoxMounted(searchBox) {
        this._searchBox = searchBox;
    }

    handlePlacesChanged() {
        const places = this._searchBox.getPlaces();

        // Add a marker for each place returned from search bar
        const markers = places.map(place => ({
            position: place.geometry.location,
        }));

        // Set markers; set map center to first search result
        const mapCenter = markers.length > 0 ? markers[0].position : this.state.center;

        this.setState({
            center: mapCenter,
            markers,
        });
    }

    render() {
        return (
            <SearchBoxGoogleMap
                containerElement={<div style={{ height: `500px` }} />}
                mapElement={<div style={{ height: `500px` }} />}
                center={this.state.center}
                onMapMounted={this.handleMapMounted}
                onBoundsChanged={this.handleBoundsChanged}
                onSearchBoxMounted={this.handleSearchBoxMounted}
                bounds={this.state.bounds}
                onPlacesChanged={this.handlePlacesChanged}
                markers={this.state.markers}
            >        <div className="ui animated button" >
                <div className="visible content">Next</div>
                <div className="hidden content">
                    <i className="right arrow icon"/>
                </div>
            </div>
            </SearchBoxGoogleMap>
        );
    }
}