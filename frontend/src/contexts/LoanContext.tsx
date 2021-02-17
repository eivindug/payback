import {createContext} from 'react'

type LoanProps = {
  type: string,
  setType: Function,
  interest: number,
  setInterest: Function,
  amount: number,
  setAmount: Function,
  paybackTime: number,
  setPaybackTime: Function
  monthlyPayment: number | undefined, 
  setMonthlyPayment: Function
}

export const LoanContext = createContext<LoanProps>({
  type: "",
  setType: Function,
  interest: 0,
  setInterest: Function,
  amount: 0,
  setAmount: Function,
  paybackTime: 0,
  setPaybackTime: Function,
  monthlyPayment: undefined,
  setMonthlyPayment: Function
});
