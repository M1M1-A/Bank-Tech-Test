const BankAccount = require("../lib/BankAccount")

class AccountStatement {
    constructor (bankAccount) {
        this.bankAccount = bankAccount;
    }
}

module.exports = AccountStatement;