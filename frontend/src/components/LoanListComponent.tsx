import React, {useState, useEffect, useContext} from 'react';
import {Dropdown, InputGroup} from 'react-bootstrap';
import axios, {AxiosResponse} from 'axios'
import {LoanContext} from '../contexts/LoanContext'

interface Loan {
    type: string;
    interest: number;
    amount: number;
    paybackTime: number;
}

function LoanListComponent() {
    const [loans, setLoans] = useState<Loan[]>([]);

    const {type, setType, setInterest, setAmount, setPaybackTime} = useContext(LoanContext)

    useEffect(() => {
        axios.get<Loan[]>('/api/loanList')
        .then((response: AxiosResponse) => {
            console.log(response.data);
            setLoans(response.data);
        });
    }, []);

    const handleClick = (loan:Loan) => {
        setType(loan.type);
        setInterest(loan.interest);
        setAmount(loan.amount);
        setPaybackTime(loan.paybackTime);
    }

  return (
    <>
      <InputGroup className="mb-3 loan-input">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Loan type</InputGroup.Text>
          <Dropdown className="w-100">
            <Dropdown.Toggle className="w-100"  variant="success" id="dropdown-basic">
              {type}
            </Dropdown.Toggle>
            <Dropdown.Menu className="w-100">
              {loans.map(loan => (
                <Dropdown.Item onClick={() => handleClick(loan)}>{loan.type}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </InputGroup.Prepend>
      </InputGroup>
    </>
  );
}

export default LoanListComponent;
