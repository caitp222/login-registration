import React, { Component } from 'react';

// bootstrap components
import {
  Form,
  FormGroup,
  Col,
  ControlLabel,
  FormControl,
  Checkbox,
  Button,
  Row,
  Grid
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
      <div className="flexbox">
        <Grid className="flexbox-item">
          <Row sm={12}>
            <Form horizontal>
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
                <Col smOffset={5} sm={1}>
                  <Button type="submit">
                    Sign in
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </Row>
          <Row sm={12}>
            <Col smOffset={5} sm={3}>
              <p>New User? Click here.</p>
            </Col>
          </Row>
          <Row sm={12}>
            <Col smOffset={5} sm={3}>
              <p>Forgot Password? Click here.</p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default LoginForm;
