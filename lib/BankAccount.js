class BankAccount {

    constructor () {
        this.balance = 0;
        this.transactions = []; 
    }

    makeDeposit (depositAmount, date) {
        // parameters: amount to deposit (float number) and date (string in DD/MM/YY format)
        // returns: nothing
        // side effects: adds the deposit amount to the balance
        //               pushes a new object to transactions with date,
        //               credit amount and balance
        this.balance += depositAmount;
        this.transactions.push({ date: date, 
                                credit: depositAmount, 
                                debit: null, 
                                balance: this.balance})

    }

    makeWithdrawal (withdrawalAmount, date) {
        // parameters: amount to be withdrawn (float number) and date (string in DD/MM/YY format)
        // returns: nothing
        // side-effect: deducts withdrawalAmount from balance
        //              pushes a new object to transactions with date,
        //              debit amount and balance
    }
}

module.exports = BankAccount;