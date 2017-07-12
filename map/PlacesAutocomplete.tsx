import * as React from 'react';

export default class PlacesAutocomplete extends React.Component<{}, {}>{

    render(){
        var bounds =  new google.maps.LatLngBounds
        var options = {}
        return <div>

        <input placeholder="Start typing here" id="pac-input" type="text" />
        </div>;
    }
}