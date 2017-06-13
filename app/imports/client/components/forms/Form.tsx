import * as React from 'react';
import { Form, Text } from 'react-form';
import { Accounts } from 'meteor/accounts-base';

const EMAILREGEX = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

export interface HandlerMethod {(values: any): void };

interface FormProps {submitHandler:HandlerMethod};
interface FormState {};

export class RegisterForm extends React.Component<FormProps, FormState>{
  render(){
    return <div>
      <h1>Register</h1>
      <Form
        onSubmit={this.props.submitHandler}
          // Validating your form is super easy, just use the `validate` life-cycle method
        validate={values => {
            const { name, email, phone, password } = values
            return {
              name: !name ? 'A name is required' : undefined,
              email: (email && email.length < 5) ? 'Your email must be at least 5 characters long' : false,
              phone: !phone ? 'A phone is required' : null,
              password: !password ? 'A valid password is required' : 0
            }
          }}>
         {({ values, submitForm, addValue, removeValue, getError }) => {
            // A Form's direct child will usually be a function that returns a component
            // This way you have access to form methods and form values to use in your component. See the docs for a complete list.
           return (
              // When the form is submitted, call the `submitForm` callback prop
             <form onSubmit={submitForm}>


             <div>
               <h6>Name</h6>
               <Text
                 field='name'
                 placeholder='Your name'  />
             </div>

              <div>
               <h6>Phone</h6>
               <Text
                 field='phone'
                 placeholder='555-1234'/>
             </div>

             <div>
               <h6>Email</h6>
               <Text
                 field='email'
                 placeholder='Your email' />
               </div>

             <div>
               <span>

               </span>
               <h6>Password</h6>
               <Text
                 field='password'
                 placeholder='Password'   />
               </div>


               <br/>

               {/*  Since this is the parent form, let's put a submit button in there ;) */}
               {/*  You can submit your form however you want, as long as you call the `submitForm` callback */}
               <button>
                 Register
               </button>
             </form>
           )
         }}
       </Form>
    </div>
  }
}

export class LoginForm2 extends React.Component<FormProps, FormState>{

  render(){
    return <div>
      <h1>Login</h1>
      <Form
        onSubmit={this.props.submitHandler}
          // Validating your form is super easy, just use the `validate` life-cycle method
        validate={values => {
           const { email, password } = values
           return {
             email: (email && email.length < 5) ? 'Your email must be at least 5 characters long' : false,
             password: !password ? 'A valid password is required' : 0
           }
         }}

          // `onValidationFail` is another handy form life-cycle method
         onValidationFail={() => {
           {/*window.alert('There is something wrong with your form!  Please check for any required values and try again :)')*/}
         }}
       >
         {({ values, submitForm, addValue, removeValue, getError }) => {
            // A Form's direct child will usually be a function that returns a component
            // This way you have access to form methods and form values to use in your component. See the docs for a complete list.
           return (
              // When the form is submitted, call the `submitForm` callback prop
             <form onSubmit={submitForm}>


               <div>
                 <h6>Email</h6>
                 <Text
                   field='email'
                   placeholder='Your email' />
                 </div>

               <div>
                 <span>

                 </span>
                 <h6>Password</h6>
                 <Text
                   field='password'
                   placeholder='Password'   />
                 </div>

               <br/>

               {/*  Since this is the parent form, let's put a submit button in there ;) */}
               {/*  You can submit your form however you want, as long as you call the `submitForm` callback */}
               <button type="button" onClick={this.props.submitHandler}> Log Out </button>
             </form>
           )
         }}
       </Form>
    </div>
  }
}


export class LoginForm extends React.Component<FormProps, FormState> {

  // componentDidMount(){
  //   document.getElementById("loginForm").addEventListener("submit", this.props.submitHandler);
  // }

  render(){
    return <div>
      <h1>Login</h1>
        <form name="loginForm">
        <h5>Email:</h5>
        <input type="text" name="email" required/><br/>
        <h5>Password:</h5>
        <input type="password" name="password" required /><br/>
        <input type="submit" value="Submit" onClick={this.props.submitHandler}/>

      </form>
    </div>
  }
};
