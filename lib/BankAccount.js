class BankAccount {

    constructor () {
        this.balance = 0;
        this.transactions = []; 
    }

    makeDeposit (depositAmount) {
        const currentDate = this.getDate()
        this.balance += depositAmount;
        this.transactions.push({ date: currentDate, 
                                credit: depositAmount.toFixed(2), 
                                debit: null, 
                                balance: this.balance})
    }

    makeWithdrawal (withdrawalAmount) {
        if (withdrawalAmount > this.balance) {
            throw new Error("Insufficient funds")
        }

        const currentDate = this.getDate()
        this.balance -= withdrawalAmount;
        this.transactions.push({ 
						date: currentDate, 
						credit: null,
						debit: withdrawalAmount.toFixed(2), 
						balance: this.balance})
						
    }

    getDate() {
        const date = new Date()
                .toJSON()
                .slice(0,10)
                .split('-')
                .reverse()
                .join('/')

        return String(date)
    }

}

module.exports = BankAccount;