import React, { Component } from 'react';

// routing components
import {
  Link
} from 'react-router-dom';

// bootstrap components
import {
  Form,
  FormGroup,
  Col,
  ControlLabel,
  FormControl,
  Checkbox,
  Button,
  Grid,
  Row
} from 'react-bootstrap';

// components
import TextInput from './FormTextInput';
import EmailInput from './FormEmailInput';
import PasswordInput from './FormPasswordInput';

const RegisterForm = () => (
  <div className="flexbox">
    <Grid className="flexbox-item">
    <Row sm={12}>
    <Form horizontal>
      <FormGroup>
        <Col smOffset={4} sm={8}>
          <h3>Register with the NYT Coding Challenge</h3>
        </Col>
      </FormGroup>
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
    </Row>
    <Row sm={12}>
      <Col smOffset={5} sm={3}>
        <p>Already have an account? <Link to={{ pathname:"/login" }}>Login</Link></p>
      </Col>
    </Row>
    </Grid>
  </div>
)

export default RegisterForm;
