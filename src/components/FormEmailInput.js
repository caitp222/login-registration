import React from 'react';

// bootstrap components
import {
  FormGroup,
  Col,
  ControlLabel,
  FormControl
} from 'react-bootstrap';

const EmailInput = (props) => (
  <FormGroup controlId="formHorizontalEmail">
    <Col componentClass={ControlLabel} sm={2} smOffset={3}>
      Email
    </Col>
    <Col sm={4}>
      <FormControl
        type="email"
        placeholder="Email"
        name = "email"
        onChange = { props.handleOnChange }
      />
    </Col>
  </FormGroup>
)

export default EmailInput;
