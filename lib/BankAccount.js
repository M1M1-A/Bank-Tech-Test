class BankAccount {

    constructor () {
        this.balance = 0;
        this.transactions = []; 
    }

    makeDeposit (depositAmount, date) {
        this.balance += depositAmount;
        this.transactions.push({ date: date, 
                                credit: depositAmount, 
                                debit: null, 
                                balance: this.balance})
    }

    makeWithdrawal (withdrawalAmount, date) {
        this.balance -= withdrawalAmount;
        this.transactions.push({ date: date, 
            credit: null, 
            debit: withdrawalAmount, 
            balance: this.balance})
    }
}

module.exports = BankAccount;