import React, { Component } from 'react';

// bootstrap components
import {
  FormGroup,
  Col,
  ControlLabel,
  FormControl
} from 'react-bootstrap';

const TextInput = (props) => (
  <FormGroup controlId={ "formHorizontal" + props.input.replace(" ","") }>
    <Col componentClass={ControlLabel} sm={2}>
      { props.input }
    </Col>
    <Col sm={4}>
      <FormControl type="text" placeholder={ props.input } />
    </Col>
  </FormGroup>
)

export default TextInput;
