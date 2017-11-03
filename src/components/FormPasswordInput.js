import React, { Component } from 'react';

// bootstrap components
import {
  FormGroup,
  Col,
  ControlLabel,
  FormControl
} from 'react-bootstrap';

const PasswordInput = (props) => (
  <FormGroup controlId="formHorizontalPassword">
    <Col componentClass={ControlLabel} sm={2}>
      Password
    </Col>
    <Col sm={4}>
      <FormControl type="password" placeholder="Password" />
    </Col>
  </FormGroup>
)

export default PasswordInput;
