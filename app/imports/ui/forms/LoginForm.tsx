/**
 * Created by anjueappen on 8/22/17.
 *
 * TODO:
 *  - add spacing between rows
 *  - change alignment of button arrow
 *  - Get some sort of postal logo working (later maybe)
 */

import * as React from 'react';
import {FormProps} from '../forms/WelcomePageForms';


// export class LoginForm extends React.Component<FormProps, {username:string, password:string}> {
export class LoginForm extends React.Component<{}, {}> {



    // login(){
    //     this.props.submitHandler({email: this.state.username,
    //         password: this.state.password})
    // }

    render(){
        return <div className="ui equal width grid">
            <div className="stretched row">
                <div className="column">
                </div>
                <div className="six wide column ">
                    <div className="ui center aligned segment">

                        <div className="row">
                            <div className="ui left icon input">
                                <input type="text" placeholder="Username"/>
                                <i className="user icon"/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="ui left icon input">
                                <input type="text" placeholder="Password"/>
                                <i className="lock icon"/>
                            </div>
                        </div>

                        <div className="row">
                            <button className="ui teal right  icon button">
                                Login
                                <i className="caret right icon"/>
                            </button>
                        </div>

                        {/*<img className="ui image" src="/images/wireframe/image.png"/>*/}
                    </div>
                </div>
                <div className="column">

                </div>
            </div>
        </div>
    }

}
