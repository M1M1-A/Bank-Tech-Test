class BankAccount {

    constructor () {
        this.balance = 0;
        this.transactions = []; 
    }

    makeDeposit (depositAmount, date) {

        if (!this.isValidDate(date)) {
            throw new Error('Please enter a date in this format DD/MM/YYYY')
        }

        this.balance += depositAmount;
        this.transactions.push({ date: date, 
                                credit: depositAmount.toFixed(2), 
                                debit: null, 
                                balance: this.balance})
    }

    makeWithdrawal (withdrawalAmount, date) {

        if (!this.isValidDate(date)) {
            throw new Error('Please enter a date in this format DD/MM/YYYY')
        }

        if (withdrawalAmount > this.balance) {
            throw new Error("Insufficient funds")
        }

        this.balance -= withdrawalAmount;
        this.transactions.push({ 	date: date, 
																credit: null, 
																debit: withdrawalAmount.toFixed(2), 
																balance: this.balance})
    }

    isValidDate(dateString) {
        const regex = /^\d{2}\/\d{2}\/\d{4}$/;
        return regex.test(dateString);
    }
}

module.exports = BankAccount;