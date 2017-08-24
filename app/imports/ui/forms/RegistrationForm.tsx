/**
 * Created by anjueappen on 8/22/17.
 */

import * as React from 'react';
import {FormProps} from '../forms/WelcomePageForms';


export default class RegistrationForm extends React.Component<FormProps, {username:string, password:string, phone:string}> {

    constructor(props:any){
        super(props);
        this.state = {
            username: "",
            password: "",
            phone:""
        };

        // this.register = this.register.bind(this);
    }

    // register(){
    //     this.props.submitHandler({email: this.state.username,
    //         password: this.state.password})
    // }

    render(){
        return <div className="ui equal width grid">
            <div className="stretched row">
                <div className="column">
                    <div className="ui segment">
                        1
                    </div>
                    <div className="ui segment">
                        2
                    </div>
                </div>
                <div className="six wide column">
                    <div className="ui segment">
                        <img className="ui image" src="/images/wireframe/image.png">
                    </div>
                </div>
                <div className="column">
                    <div className="ui segment">
                        1
                    </div>
                    <div className="ui segment">
                        2
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <div className="ui segment">
                        1
                    </div>
                    <div className="ui segment">
                        2
                    </div>
                </div>
            </div>
    }

}
