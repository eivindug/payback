import React, {useContext} from 'react';
import {Button} from 'react-bootstrap';
import {LoanContext} from '../contexts/LoanContext';
import axios from 'axios';

function CalculateButton() {
    const {paybackTime, type, interest, amount, setMonthlyPayment} = useContext(LoanContext)

    const handleClick = () => {
        axios.post('/api/plan',{
            type: type,
            interest: interest,
            amount: amount,
            paybackTime: paybackTime
        })
        .then(function (response) {
            setMonthlyPayment(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

  return (
    <>
        <Button className="w-100" variant="primary" onClick={handleClick}>Calculate</Button>{' '}
    </>
  );
}

export default CalculateButton;
