import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LoanListComponent from './components/LoanListComponent';
import {LoanContext} from './contexts/LoanContext'
import AmountComponent from './components/AmountCompnent';
import SelectTimeComponent from './components/SelectTimeComponent';
function App() {
  const [type, setType] = useState<string>("");
const [interest, setInterest] = useState<number>(0);
const [amount, setAmount] = useState<number>(0);
const [paybackTime, setPaybackTime] = useState<number>(0);


  return (
    <LoanContext.Provider value={{type, setType, interest, setInterest, amount, setAmount, paybackTime, setPaybackTime}}>
    <div className="App">
      <h2>Payback plan</h2>
      <LoanListComponent></LoanListComponent>
      <AmountComponent></AmountComponent>
      <SelectTimeComponent></SelectTimeComponent>
    </div>
    </LoanContext.Provider>
  );
}

export default App;
