import * as React from 'react';
import { Form, Text } from 'react-form';
import { Accounts } from 'meteor/accounts-base';

export const RegisterForm = (
  <Form
     onSubmit={(values) => {
       const {name, email, phone, password} = values;
       Accounts.createUser(

         {username: name,
          email: email,
          phone: phone,
          password: password},

         function(err){
           (err) ? console.log(err) :  console.log('Success', Meteor.userId());
         } );
     }}


      // Validating your form is super easy, just use the `validate` life-cycle method
     validate={values => {
       const { name, email, phone, password } = values
       return {
         name: !name ? 'A name is required' : undefined,
         email: (email && email.length < 5) ? 'Your email must be at least 5 characters long' : false,
         phone: !phone ? 'A phone is required' : null,
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

)


export const LoginForm = (
  <Form
     onSubmit={(values) => {
       const {email, password} = values;
       //TODO User should login with either email or password
       Meteor.loginWithPassword(email, password,
         function(err){
           (err) ? console.log(err) :  console.log('Success', Meteor.userId());
       })
       console.log('Login Success!', values)
     }}


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
           <button>
             Login
           </button>
         </form>
       )
     }}
   </Form>
)
