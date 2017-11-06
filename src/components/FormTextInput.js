import React from 'react';

// bootstrap components
import {
  FormGroup,
  Col,
  ControlLabel,
  FormControl
} from 'react-bootstrap';

const TextInput = (props) => (
  <FormGroup controlId={ "formHorizontal" + props.input.replace(" ","") }>
    <Col componentClass={ControlLabel} sm={2} smOffset={3}>
      { props.input }
    </Col>
    <Col sm={4}>
      <FormControl
        type="text"
        placeholder={ props.input }
        onChange={ props.handleOnChange }
        name={ props.input.toLowerCase().replace(" ", "") }
      />
    </Col>
  </FormGroup>
)

export default TextInput;
