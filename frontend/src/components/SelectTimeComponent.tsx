import React, {useContext} from 'react';
import {Dropdown} from 'react-bootstrap';
import {LoanContext} from '../contexts/LoanContext';
import axios, {AxiosResponse} from 'axios';

function SelectTimeComponent() {
    const {paybackTime, setPaybackTime, type, interest, amount} = useContext(LoanContext)
    const yearOptions = [5, 10, 15, 20, 25, 30]

    var bodyFormData = new FormData();
    bodyFormData.append('type', type);
    bodyFormData.append('type', type);
    bodyFormData.append('type', type);


  return (
    <>
  <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
      {paybackTime} years
  </Dropdown.Toggle>

  <Dropdown.Menu>
  {yearOptions.map(year => (
                <Dropdown.Item onClick={() => setPaybackTime(year)}>{year}</Dropdown.Item>
            ))}
  </Dropdown.Menu>
</Dropdown>
</>
  );
}

export default SelectTimeComponent;
