import * as React from 'react'
import { Form, Text } from 'react-form'
 
export const AnjuForm = (
  <Form
    onSubmit={(values) => {
      console.log('Success!', values)
    }}
    validate={({ name }) => {
      return {
        name: !name ? 'A name is required' : undefined
      }
    }}
  >
    {({submitForm}) => {
      return (
        <form onSubmit={submitForm}>
          <Text field='name' />
          <button type='submit'>Submit</button>
        </form>
      )
    }}
  </Form>
)