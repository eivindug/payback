package no.visma.payback.repository;

import no.visma.payback.model.Loan;

import java.util.ArrayList;

public class LoanList {
    private ArrayList<Loan> loanList = new ArrayList<Loan>();

    public LoanList() {
        ArrayList<Loan> loanList = new ArrayList<Loan>();
        loanList.add(new Loan("House", 3.5, 2500000, 25));
        loanList.add(new Loan("Car", 4.5, 200000, 5));
        loanList.add(new Loan("Spending", 10, 50000, 5));
        this.loanList = loanList;
    }

    public ArrayList<Loan> getLoanList() {
        return loanList;
    }
}
