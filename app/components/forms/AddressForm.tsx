import * as React from 'react'
import { Form, Text} from 'react-form'
// This is our reusable address form 
const AddressForm = (
    <div>
  <Form
    // It can have its own validation function too! This keeps our parent validation function clean and flat 
    validate={values => {
      return {
        street: !values.street ? 'A street is required' : undefined,
        city: !values.city ? 'A city is required' : undefined,
        state: !values.state ? 'A state is required' : undefined
      }
    }}
  >
    // If you don't need access to any form methods or props, you can simply return JSX without wrapping it in a function 
    <Text
      field='street'
      placeholder='Street'
    />
    <br />
    <Text
      field='city'
      placeholder='City'
    />
    <br />
    <Text
      field='state'
      placeholder='State'
    />
  </Form>
</div>);

