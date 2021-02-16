import React, {useContext} from 'react';
import {Form, } from 'react-bootstrap';
import {LoanContext} from '../contexts/LoanContext'

function AmountComponent() {
    const {amount, setAmount} = useContext(LoanContext)

  return (
    <>
  <Form>
  <Form.Group controlId="formBasicRange">
    <Form.Label>{amount}</Form.Label>
    <Form.Control type="range" min={0} max={10000000} onChange={(data) => setAmount(data.target.value)}/>
  </Form.Group>
</Form>
</>
  );
}

export default AmountComponent;
