# README 

    This is a small banking app that you can interact with via the Node.js REPL.
    It allows a user to make deposits and withdrawals and print out a statement of their transaction history.

## Planning and Design

    To plan and design this program I used a Design Recipe and diagramming. (see lib/designRecipe and lib/class-diagram.png). 

    I started by breaking down the requirements into User Stories. I paid attention to the spec and acceptance criteria to create these. 

    I mapped out the class design, thinking about what parameters the functions would take, what it would return and any expected side-effects of the functions. Also, thinking about which functions should stay in a certain class or be separated out into another class to help keep classes small and not overloaded. 

    Next I planned out Unit Tests for each class, including mocking where necessary, and then the Integration Tests. Tests were designed around the expected behaviour in each case. 

## How to install and run tests

    To run testing with Jest, you will need to do the following:

    // Add the jest package
    npm add jest

    // Add jest globally
    npm install -g jest

    // run the tests
    jest
   

    For a snapshot of the test coverage see lib/test-coverage.png

## How to run program

    This is an example of how you can interact with the program in the REPL.

    Start the Node.js REPL by typing 'node' in the terminal and then press enter.

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

    
```
    Expected Output:

    date || credit || debit || balance  
    14/01/2023 || || 500.00 || 2500.00  
    13/01/2023 || 2000.00 || || 3000.00  
    10/01/2023 || 1000.00 || || 1000.00  
```
