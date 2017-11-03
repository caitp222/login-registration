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

const LoginForm = () => (
  <div>
    <h3>Welcome to the NYT Coding Challenge</h3>
    <div className="form-container">
      <Form horizontal className="centered-form">
        <TextInput input={ "Username" }/>
        <PasswordInput />

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Checkbox>Remember me</Checkbox>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit">
              Sign in
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  </div>
)

export default LoginForm;
