import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LoanListComponent from './components/LoanListComponent';
import {LoanContext} from './contexts/LoanContext'
import AmountComponent from './components/AmountCompnent';
import SelectTimeComponent from './components/SelectTimeComponent';
import CalculateButton from './components/CalculateButton';
import InterestComponent from './components/InterestComponent';
import PaybackPlan from './components/PaybackPlan';
import {Form} from 'react-bootstrap';
function App() {
  const [type, setType] = useState<string>("");
const [interest, setInterest] = useState<number>(0);
const [amount, setAmount] = useState<number>(0);
const [paybackTime, setPaybackTime] = useState<number>(0);
const [monthlyPayment, setMonthlyPayment] = useState<number | undefined>(undefined);


  return (
    <LoanContext.Provider value={{type, setType, interest, setInterest, amount, setAmount, paybackTime, setPaybackTime, monthlyPayment, setMonthlyPayment}}>
    <div className="App">
      <Form>
      <h1>Payback plan</h1>
      <br/>
      <LoanListComponent></LoanListComponent>
      <InterestComponent></InterestComponent>
      <AmountComponent></AmountComponent>
      <SelectTimeComponent></SelectTimeComponent>
      <CalculateButton></CalculateButton>
      <br/>
      <PaybackPlan></PaybackPlan>
      </Form>
    </div>
    </LoanContext.Provider>
  );
}

export default App;
