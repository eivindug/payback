package no.visma.payback.model;

public class Loan {
    private String type;
    private double interest;
    private double amount;
    private int paybackTime;

    public Loan(String type, double interest, double amount, int paybackTime) {
        this.type = type;
        this.interest = interest;
        this.amount = amount;
        this.paybackTime = paybackTime;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public double getInterest() {
        return interest;
    }

    public void setInterest(double interest) {
        this.interest = interest;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public int getPaybackTime() {
        return paybackTime;
    }

    public void setPaybackTime(int paybackTime) {
        this.paybackTime = paybackTime;
    }

    public double getMonthlyAmount(){
        double newAmount = this.interest*this.amount;
        return newAmount/paybackTime/12;
    }

}
