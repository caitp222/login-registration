import React, { Component } from 'react';

// routing components
import {
  NavLink
} from 'react-router-dom';

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
import TextInput from './FormTextInput';
import EmailInput from './FormEmailInput';
import PasswordInput from './FormPasswordInput';

const RegisterForm = () => (
  <div className="form-wrapper">
    <Form horizontal className="centered-form">
      <h3>Register with the NYT Coding Challenge</h3>
      <TextInput input={ "First Name" }/>
      <TextInput input={ "Last Name" }/>
      <TextInput input={ "Username" }/>
      <EmailInput />
      <PasswordInput />

      <FormGroup>
        <Col smOffset={5} sm={7}>
          <Button type="submit">
            Register
          </Button>
        </Col>
      </FormGroup>
    </Form>
  </div>
)

export default RegisterForm;
