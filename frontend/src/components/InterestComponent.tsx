import React, {useContext} from 'react';
import {Form, InputGroup} from 'react-bootstrap';
import {LoanContext} from '../contexts/LoanContext'

function InterestComponent() {
    const {interest, setInterest} = useContext(LoanContext)

  return (
    <>
      <InputGroup className="mb-3 loan-input">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Interest</InputGroup.Text>
          <Form.Control className="w-100" type="range" min={0} max={15} value={interest} onChange={(data) => setInterest(data.target.value)}/>
          <Form.Control
          value={interest}
          aria-describedby="basic-addon1"
          onChange={(data) => setInterest(data.target.value)}
          />
          <InputGroup.Text id="basic-addon1">%</InputGroup.Text>
        </InputGroup.Prepend>
      </InputGroup>
    </>
  );
}

export default InterestComponent;
