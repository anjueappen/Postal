import * as React from "react";
// import {AnjuForm} from "../components/Form";
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form'


// export interface HelloProps {compiler: string; framework: string; children?:ReactElement<any> | null}
export interface HelloState {};

export class Hello extends React.Component<{}, HelloState> {
    render() {
        // return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
        return <h1>Hello from Anju and blah!</h1>;
    }
}
//
// {/*<AnjuForm/>*/}
//  <Form
//     onSubmit={(values) => {
//       console.log('Success!', values)
//     }}
//
//
//     // Validating your form is super easy, just use the `validate` life-cycle method
//     validate={values => {
//       const { name, email, phone, password } = values
//       return {
//         name: !name ? 'A name is required' : undefined,
//         email: (email && email.length < 5) ? 'Your email must be at least 5 characters long' : false,
//         phone: !phone ? 'A phone is required' : null,
//         password: !password ? 'A valid password is required' : 0
//       }
//     }}
//
//     // `onValidationFail` is another handy form life-cycle method
//     onValidationFail={() => {
//       {/*window.alert('There is something wrong with your form!  Please check for any required values and try again :)')*/}
//     }}
//   >
//     {({ values, submitForm, addValue, removeValue, getError }) => {
//       // A Form's direct child will usually be a function that returns a component
//       // This way you have access to form methods and form values to use in your component. See the docs for a complete list.
//       return (
//         // When the form is submitted, call the `submitForm` callback prop
//         <form onSubmit={submitForm}>
//
//           <div>
//             <h6>Name</h6>
//             <Text // This is the built-in Text formInput
//               field='name' // field is a string version of the field location
//               placeholder='Your name' // all other props are sent through to the underlying component, in this case an <input />
//             />
//           </div>
//
//            <div>
//             <h6>Phone</h6>
//             <Text // This is the built-in Textarea formInput
//               field='phone'
//               placeholder='555-1234'
//             />
//           </div>
//
//           <div>
//             <h6>Email</h6>
//             <Text // This is the built-in Text formInput
//               field='email' // field is a string version of the field location
//               placeholder='Your email' // all other props are sent through to the underlying component, in this case an <input />
//             />
//             </div>
//
//           <div>
//             <span>
//
//
//             </span>
//             <h6>Password</h6>
//             <Text // This is the built-in Text formInput
//               field='password' // field is a string version of the field location
//               placeholder='Password' // all other props are sent through to the underlying component, in this case an <input />
//             />
//             </div>
//
//           <br/>
//
//           {/* // Since this is the parent form, let's put a submit button in there ;) */}
//           {/* // You can submit your form however you want, as long as you call the `submitForm` callback */}
//           <button>
//             Submit
//           </button>
//         </form>
//       )
//     }}
//   </Form>
// </div>
