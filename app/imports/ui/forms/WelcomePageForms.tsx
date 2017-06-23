import * as React from 'react';
import { Form, Text } from 'react-form';

export interface HandlerMethod {(values: any): void };

interface FormProps {submitHandler:HandlerMethod};
interface FormState {};

export class RegisterForm extends React.Component<FormProps, FormState>{
  render(){
    return <div>
      <h1>Register</h1>
      <Form
        onSubmit={this.props.submitHandler}
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

export class LoginForm extends React.Component<FormProps, FormState>{

  render(){
    return <div>
      <h1>Login</h1>
      <Form
        onSubmit={this.props.submitHandler}
        validate={values => {
           const { email, password } = values
           return {
             email: (email && email.length < 1) ? 'Your email must be at least 1 characters long' : false,
             password: !password ? 'A valid password is required' : 0
           }
         }}

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
               <button>
                 Login
               </button>
             </form>
           )
         }}
       </Form>
    </div>
  }
}
