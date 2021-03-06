import React, { Component } from 'react';

// routing components
import {
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

// bootstrap components
import {
  Form,
  FormGroup,
  Col,
  Button,
  Grid,
  Row
} from 'react-bootstrap';

// components
import TextInput from './FormTextInput';
import EmailInput from './FormEmailInput';
import PasswordInput from './FormPasswordInput';

// to simulate an API call
async function fakeFetch(url, options) {
  console.log(`Successful post request made to ${url}.
    User object: ${options.body}`)
}

class RegisterForm extends Component {
  constructor() {
    super()
    this.state = {
      user: {
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: ""
      },
      redirect: false
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleOnChange(event) {
    const user = { ...this.state.user }
    user[event.target.name] = event.target.value
    this.setState({user})
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = this.state.user;
    const options = {
      method: 'POST',
      body: JSON.stringify(user)
    }
    fakeFetch("http://localhost:3000/users", options).then(
       this.setState({redirect: true})
     )
  }

  render() {
    const redirect = this.state.redirect;

    return (
      <div className="flexbox">
        <Grid className="flexbox-item">
          <Row sm={12}>
          <Form horizontal onSubmit={this.handleSubmit}>
            <FormGroup>
              <Col smOffset={4} sm={8}>
                <h3>Register with the NYT Coding Challenge</h3>
              </Col>
            </FormGroup>
            <TextInput
              input={ "First Name" }
              handleOnChange = { this.handleOnChange }
            />
            <TextInput
              input={ "Last Name" }
              handleOnChange = { this.handleOnChange }
            />
            <TextInput
              input={ "Username" }
              handleOnChange = { this.handleOnChange }
            />
            <EmailInput
              handleOnChange = { this.handleOnChange }
            />
            <PasswordInput
              handleOnChange = { this.handleOnChange }
            />
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
        { redirect && <Redirect to="/welcome-page"/> }
      </div>
    )
  }
}

export default withRouter(RegisterForm);
