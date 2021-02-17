import {useContext} from 'react';
import {LoanContext} from '../contexts/LoanContext'

function PaybackPlan() {
    const {monthlyPayment} = useContext(LoanContext);

  return (
    monthlyPayment? 
    <h2>
      Monthly payment: {Math.round(monthlyPayment)} NOK
    </h2>:
    <>
    </>
  );
}

export default PaybackPlan;
