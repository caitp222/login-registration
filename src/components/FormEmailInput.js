import React, { Component } from 'react';

// bootstrap components
import {
  FormGroup,
  Col,
  ControlLabel,
  FormControl
} from 'react-bootstrap';

const EmailInput = () => (
  <FormGroup controlId="formHorizontalEmail">
    <Col componentClass={ControlLabel} sm={2} smOffset={3}>
      Email
    </Col>
    <Col sm={4}>
      <FormControl type="email" placeholder="Email" />
    </Col>
  </FormGroup>
)

export default EmailInput;
