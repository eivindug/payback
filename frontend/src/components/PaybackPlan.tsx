import {useContext} from 'react';
import {LoanContext} from '../contexts/LoanContext'

function PaybackPlan() {
    const {monthlyPayment, paybackTime} = useContext(LoanContext);
    const months = paybackTime*12;
    const array = Array(months);
    console.log(array)

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
