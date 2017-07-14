import * as React from 'react';
import Autocomplete from 'react-google-autocomplete';
import scriptLoader from 'react-async-script-loader';


interface AutoCompleteProps {isScriptLoaded:boolean, isScriptLoadSucceed:boolean}
interface AutoCompleteState {ready:boolean}

@scriptLoader('https://maps.googleapis.com/maps/api/js?key=AIzaSyBTLq1MW1uKRqxDLPHiYYHVvCCr67EnS0s&libraries=places')
export class AutoCompleteTextbox extends React.Component<AutoCompleteProps, AutoCompleteState>{

    constructor(props:any) {
        super(props);
        this.state = {ready: false};
    }

    componentWillReceiveProps (AutoCompleteProps) {
        const {isScriptLoaded, isScriptLoadSucceed} = AutoCompleteProps;
        if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished
            if (isScriptLoadSucceed) {
                this.setState({ready:true});
            }
            else console.log('Autocomplete error');
        }
    }

    componentDidMount () {
        const { isScriptLoaded, isScriptLoadSucceed } = this.props
        if (isScriptLoaded && isScriptLoadSucceed) {
            this.setState({ready:true});
        }
    }


    render() {
        const output = ! (this.state.ready)? <div>Loading...</div> :
            <Autocomplete
                style={{width: '90%'}}
                onPlaceSelected={(place) => {console.log(place);}}
                types={['(regions)']}

            />;

        return (<div>
                {output}
            </div>
        );
    }
}
