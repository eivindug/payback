import React, {useContext} from 'react';
import {Dropdown, InputGroup} from 'react-bootstrap';
import {LoanContext} from '../contexts/LoanContext';

function SelectTimeComponent() {
    const {paybackTime, setPaybackTime} = useContext(LoanContext)
    const yearOptions = [5, 10, 15, 20, 25, 30]

  return (
    <>
      <InputGroup className="mb-3 loan-input">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Payback time</InputGroup.Text>
          <Dropdown className="w-100">
            <Dropdown.Toggle className="w-100" variant="success" id="dropdown-basic">
              {paybackTime} years
            </Dropdown.Toggle>
            <Dropdown.Menu className="w-100">
              {yearOptions.map(year => (
              <Dropdown.Item onClick={() => setPaybackTime(year)}>{year}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </InputGroup.Prepend>
    </InputGroup>
  </>
  );
}

export default SelectTimeComponent;
