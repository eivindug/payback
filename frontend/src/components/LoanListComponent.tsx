import React, {useState, useEffect, useContext} from 'react';
import {Dropdown} from 'react-bootstrap';
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

    const {type, setType, interest, setInterest, amount, setAmount, paybackTime, setPaybackTime} = useContext(LoanContext)

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
  <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
      {type}
  </Dropdown.Toggle>

  <Dropdown.Menu>
  {loans.map(loan => (
                <Dropdown.Item onClick={() => handleClick(loan)}>{loan.type}</Dropdown.Item>
            ))}
  </Dropdown.Menu>
</Dropdown>
</>
  );
}

export default LoanListComponent;
