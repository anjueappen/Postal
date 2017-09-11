import * as React from 'react';

// searchbox:google.maps.places.Autocomplete

export class AddressSearchComponent extends React.Component<{}, {}>{


    componentDidMount(){
        let input = document.getElementById('address_input');

        let autocomplete = new google.maps.places.Autocomplete(input);
        autocomplete.addListener('place_changed', () => {
            let place = autocomplete.getPlace();
            console.log(place)
        });

        this.setState({searchbox:autocomplete});
    }

    render(){
        return <div>

            <div className="ui center aligned basic segment">
                <div className="ui left icon action input">
                    <input placeholder="Enter destination" id="address_input"/>
                    <i className="search icon"/>
                </div>
            </div>

        </div>
    }
}

