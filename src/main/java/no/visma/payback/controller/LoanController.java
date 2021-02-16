package no.visma.payback.controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;
import no.visma.payback.model.Loan;
import no.visma.payback.repository.LoanList;


@RestController
public class LoanController {
    LoanList loanList = new LoanList();

    @GetMapping("/api/loanList")
    public ArrayList<Loan> getLoanList() {
        return loanList.getLoanList();
    }

    @GetMapping("/api/plan")
    public double getPayPlan(@RequestBody Loan loan) {
        return loan.getMonthlyAmount();
    }
}
