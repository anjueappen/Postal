import * as React from 'react';
import {RegisterForm, LoginForm, FormHandlerMethod} from "../forms/WelcomePageForms";

interface WelcomeProps {handleRegistration: FormHandlerMethod, handleLogin: FormHandlerMethod};
interface WelcomeState {formState: string, loggedIn:boolean};

export class WelcomePage extends React.Component<WelcomeProps, WelcomeState>{

  constructor(props: any){
    super(props);
    console.log('Creating component')

    this.state = {formState: 'REGISTER', loggedIn:false};
    this.toggleFormState = this.toggleFormState.bind(this);

  }

  toggleFormState():void {
    let currentState = this.state.formState;
    let newState = currentState === 'REGISTER'? 'LOGIN': 'REGISTER';
    this.setState({
      formState: newState
    });
  }

  render(){
    return <div>
        <button type="button" onClick={this.toggleFormState}> Toggle</button>
        {(this.state.formState == 'REGISTER')? <RegisterForm submitHandler={this.props.handleRegistration}/> :
            <LoginForm submitHandler={this.props.handleLogin}/>}
    </div>
  }
}


