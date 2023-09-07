const BankAccount = require('./BankAccount')

class AccountStatement {
    printStatement(transactionsHistory) {
        const header = "date || credit || debit || balance";
        const transactions = transactionsHistory.reverse()
            .map((transaction) => {
                const { date, credit, debit, balance } = transaction;

                const creditColumn = credit ? ` ${credit} ` : ' ';
                const debitColumn = debit ? ` ${debit} ` : ' ';

                return `${date} ||${creditColumn}||${debitColumn}|| ${balance.toFixed(2)}`;
            })

        const statement = [header, ...transactions].join('\n');
        return statement;
    }
}

module.exports = AccountStatement;

