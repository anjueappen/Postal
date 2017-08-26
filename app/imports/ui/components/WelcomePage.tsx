import * as React from 'react';
import {RegisterForm, FormHandlerMethod} from "../forms/WelcomePageForms";
import {LoginForm} from "../forms/LoginForm";

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
    return <div className="ui equal width grid">
      <div className="ui two row middle aligned grid">
        <div className="column"></div>

          <div className="six wide column">
              {(this.state.formState == 'REGISTER')? <RegisterForm submitHandler={this.props.handleRegistration}/> :
                  <LoginForm submitHandler={this.props.handleLogin}/>}
          </div>


        <div className="column"></div>
        <div className="ui horizontal divider">
          Or
        </div>
        <div className="center aligned column">
          <button className="ui big green labeled icon button" onClick={this.toggleFormState}>
            <i className="signup icon"/>
              {(this.state.formState == 'REGISTER')?  "Log In" : "Sign up"}
          </button>
        </div>
      </div>
    </div>

  }
}


