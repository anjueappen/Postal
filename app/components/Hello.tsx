import * as React from "react";
import {RegisterForm, LoginForm} from "./forms/Form";
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form'


export interface HelloProps {compiler: string; framework: string;}
export interface HelloState {formState: string};

export class Hello extends React.Component<HelloProps, HelloState> {

  shouldComponentUpdate():boolean {
    return false;
  }

  constructor(props: any){
    super(props);
    console.log('Creating component')

    this.state = {formState: 'REGISTER'}
    this.toggleFormState = this.toggleFormState.bind(this);
  }

  toggleFormState():void{
    console.log(this.state)
    var currentState = this.state.formState;
    var newState = currentState === 'REGISTER'? 'LOGIN': 'REGISTER';
    this.setState({
      formState: newState
    });
  }


//TODO Make the login form a stateless component with container
  render() {
      //TODO Change toggle button to switcher
      if(this.state.formState == 'REGISTER'){
        return <div>
            <button type="button" onClick={this.toggleFormState}> Toggle</button>
            <h1>Register</h1>
            {RegisterForm}
            </div>;
      }else if (this.state.formState == 'LOGIN'){
        return <div>
            <button type="button" onClick={this.toggleFormState}> Toggle</button>
            <h1>Login</h1>
            {LoginForm}
        </div>
      }

  }
}
