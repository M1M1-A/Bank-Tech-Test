

# How to run program

Start the Node.js REPL by typing 'node' in the terminal and then enter.

Now enter these, one by one

> const BankAccount = require('./lib/BankAccount');

> const bankAccount = new BankAccount();

> bankAccount.makeDeposit(1000.00, '10/01/2023')

> bankAccount.makeDeposit(2000.00, '13/01/2023')

> bankAccount.makeWithdrawal(500.00, '14/01/2023')

> const AccountStatement = require('./lib/AccountStatement')

> const accountStatement = new AccountStatement(bankAccount)

> const statement = accountStatement.printStatement()

> console.log(statement)

Expected Output:

date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00

# How to run tests