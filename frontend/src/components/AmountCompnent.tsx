import React, {useContext} from 'react';
import {Form, InputGroup} from 'react-bootstrap';
import {LoanContext} from '../contexts/LoanContext'

function AmountComponent() {
    const {amount, setAmount} = useContext(LoanContext)

  return (
    <>
      <InputGroup className="mb-3 loan-input">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Amount</InputGroup.Text>
          <Form.Control className="w-100" type="range" min={0} max={10000000} value={amount} onChange={(data) => setAmount(data.target.value)}/>
          <Form.Control
            value={amount}
            aria-describedby="basic-addon1"
            onChange={(data) => setAmount(data.target.value)}
          />
        <InputGroup.Text id="basic-addon1">NOK</InputGroup.Text>
        </InputGroup.Prepend>
      </InputGroup>
    </>
  );
}

export default AmountComponent;
