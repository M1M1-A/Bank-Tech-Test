const BankAccount = require("../lib/BankAccount")

class AccountStatement {
    constructor (bankAccount) {
        this.bankAccount = bankAccount;
    }

    printStatement() {
        const header = "date || credit || debit || balance";
        const transactions = this.bankAccount.transactions.map((transaction) => {
            const { date, credit, debit, balance } = transaction;
            
            const creditColumn = credit ? ` ${credit} ` : ' ';
            const debitColumn = debit ? ` ${debit} ` : ' ';

            return `${date} ||${creditColumn}||${debitColumn}|| ${balance.toFixed(2)}`;        });

        const statement = [header, ...transactions].join('\n');
        return statement;
    }
}

module.exports = AccountStatement;