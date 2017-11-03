import React, { Component } from 'react';

// bootstrap components
import {
  Form,
  FormGroup,
  Col,
  ControlLabel,
  FormControl,
  Checkbox,
  Button
} from 'react-bootstrap';

// components
import TextInput from './FormTextInput'
import PasswordInput from './FormPasswordInput'

class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      userName: "",
      password: ""
    }
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form horizontal className="centered-form">
          <FormGroup>
            <Col smOffset={4} sm={8}>
              <h3>Welcome to the NYT Coding Challenge</h3>
            </Col>
          </FormGroup>
          <TextInput input={ "Username" }/>
          <PasswordInput />

          <FormGroup>
            <Col smOffset={5} sm={7}>
              <Checkbox>Remember me</Checkbox>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={5} sm={7}>
              <Button type="submit">
                Sign in
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
  )
  }
}

export default LoginForm;
