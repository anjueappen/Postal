import * as React from 'react';
import { Accounts } from 'meteor/accounts-base';
import {RegisterForm, LoginForm, HandlerMethod} from "../forms/Form";

interface WelcomeProps {};
interface WelcomeState {formState: string};

export class WelcomePage extends React.Component<WelcomeProps, WelcomeState>{

  constructor(props: any){
    super(props);
    console.log('Creating component')

    this.state = {formState: 'REGISTER'}
    this.toggleFormState = this.toggleFormState.bind(this);

    this.handleRegistration = this.handleRegistration.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toggleFormState():void {
    console.log(this.state)
    var currentState = this.state.formState;
    var newState = currentState === 'REGISTER'? 'LOGIN': 'REGISTER';
    this.setState({
      formState: newState
    });
  }

  //TODO Handle API error codes in callback function
  handleRegistration(values:any):void {
      const {name, email, phone, password} = values;
      Accounts.createUser(

        {username: name,
         email: email,
         phone: phone,
         password: password},

        function(err){
          (err) ? console.log(err) :  console.log('Success', Meteor.userId());
        } );
  }

  //TODO User should login with either email or password
  handleLogin(values:any): void{
    const {email, password} = values;
    Meteor.loginWithPassword(email, password,
      function(err){
        (err) ? console.log(err) :  console.log('Success', Meteor.userId());
    });
  }

  render(){

    if(this.state.formState == 'REGISTER'){
      let form = <RegisterForm submitHandler={this.handleRegistration}/> ;
    } else {
      let form = <LoginForm submitHandler={this.handleLogin}/>;
    }

    return <div>
        <button type="button" onClick={this.toggleFormState}> Toggle</button>
        {form}
    </div>
  }
};
