/**
 * Created by anjueappen on 8/22/17.
 *
 * TODO:
 *  - add spacing between rows
 *  - change alignment of button arrow
 *  - Get some sort of postal logo working (later maybe)
 */

import * as React from 'react';
import {FormProps} from './WelcomePageForms';


export class RegisterForm extends React.Component<FormProps, {username:string, password:string}> {

    constructor(props:any){
        super(props);

        this.state = {
            username: "",
            password: ""
        };

        this.login = this.login.bind(this);
    }


    login(){
        this.props.submitHandler({email: this.state.username, password: this.state.password})
    }

    render(){
        return<form className="ui form" onSubmit={this.login}>
            <div className="field">
                <label>Username</label>
                <div className="ui left icon input">
                    <i className="user icon"/>
                    <input type="text" placeholder="Username" onChange={(e) => this.setState({username: e.target.value})}/>
                </div>
            </div>
            <div className="field">
                <label>Password</label>
                <div className="ui left icon input">
                    <i className="lock icon"/>
                    <input type="password" onChange={(e) => this.setState({password: e.target.value})}/>
                </div>
            </div>
            <button className="ui blue submit button" type="submit">Login</button>
        </form>

    }

}
