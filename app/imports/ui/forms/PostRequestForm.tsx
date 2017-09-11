/**
 * Created by anjueappen on 9/10/17.
 */
import * as React from 'react';
import {AddressSearchComponent} from "./AddressSearchComponent";

/*
Steps to Request an item

1. Enter destination address in Autocomplete and select appropriate
    if(incomplete address){
       2. go to partially filled form with some changes and request user to fill out

3. Verify address and display on google map fragment
4. Take a picture of contents - enter size and weight
4. Summary Page
 */

enum RequestStep {DEST, DEST_FILL, DEST_VERIFY, CONTENTS, SUMMARY}

export class PostRequestForm extends React.Component<{}, {step:RequestStep}> {
    constructor(props:any){
        super(props);
        this.state = {
            step: RequestStep.DEST
        }
    }
    render(){

        switch (this.state.step){

            case RequestStep.DEST:
                return <AddressSearchComponent/>;

            case RequestStep.DEST_FILL:
                return <div>Not implemented</div>;

            case RequestStep.DEST_VERIFY:
                return <div>Nope</div>;

            case RequestStep.CONTENTS:
                return <div>Nope</div>;

            case RequestStep.SUMMARY:
                return <div>Nope</div>;

        }
    }
}
