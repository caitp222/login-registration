import React from 'react';

// bootstrap components
import {
  FormGroup,
  Col,
  ControlLabel,
  FormControl
} from 'react-bootstrap';

const PasswordInput = (props) => (
  <FormGroup controlId="formHorizontalPassword">
    <Col componentClass={ControlLabel} sm={2} smOffset={3}>
      Password
    </Col>
    <Col sm={4}>
      <FormControl
        type="password"
        placeholder="Password"
        name="password"
        onChange = { props.handleOnChange }
      />
    </Col>
  </FormGroup>
)

export default PasswordInput;
