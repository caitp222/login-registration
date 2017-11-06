import React, { Component } from 'react';

// router components
import {
  Link,
  withRouter
 } from 'react-router-dom';

// bootstrap components
import {
  Form,
  FormGroup,
  Col,
  Checkbox,
  Button,
  Row,
  Grid
} from 'react-bootstrap';

// components
import TextInput from './FormTextInput'
import PasswordInput from './FormPasswordInput'

// to simulate an API call
async function fakeFetch(url, options) {
  console.log(`Successful post request made to ${url}.
    User object: ${options.body}`)
}

class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: "",
      rememberme: false
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleOnChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleCheckboxChange(event) {
    this.setState({rememberme: event.target.checked})
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = this.state;
    const options = {
      method: 'POST',
      body: JSON.stringify(user)
    }
    fakeFetch("http://localhost:3000/sessions", options).then(
       () => this.props.history.push("/welcome-page")
     )
  }

  render() {
    return (
      <div className="flexbox">
        <Grid className="flexbox-item">
          <Row sm={12}>
            <Form horizontal onSubmit={ this.handleSubmit }>
              <FormGroup>
                <Col smOffset={4} sm={8}>
                  <h3>Welcome to the NYT Coding Challenge</h3>
                </Col>
              </FormGroup>
              <TextInput
                input={ "Username" }
                handleOnChange={ this.handleOnChange }
              />
              <PasswordInput
                handleOnChange={ this.handleOnChange }
              />
              <FormGroup>
                <Col smOffset={5} sm={7}>
                  <Checkbox name="rememberMe" onChange={this.handleCheckboxChange}>Remember me</Checkbox>
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
              <p>New User? <Link to={{ pathname: "/register" }}>Register</Link></p>
            </Col>
          </Row>
          <Row sm={12}>
            <Col smOffset={5} sm={3}>
              <p>Forgot Password? Click <Link to={{ pathname: "/password-reset"}}>here</Link>.</p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default withRouter(LoginForm);
