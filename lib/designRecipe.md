## Design Recipe

1. Specification/user stories

- User can add to their balance
- User can withdraw from their balance
- User can print a account statement with all transactions

2. Acceptance Criteria

Acceptance criteria
Given a client makes a deposit of 1000 on 10-01-2023
And a deposit of 2000 on 13-01-2023
And a withdrawal of 500 on 14-01-2023
When she prints her bank statement
Then she would see

date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00

3. Class Design

```Javascript

class BankAccount {

    constructor () {
        // parameters: none
        // contains a variable for users starting balance (in this case zero)
        // contains an array to store the transaction history
    }

    makeDeposit (depositAmount, date) {
        // parameters: amount to deposit (float number) and date (string in DD/MM/YY format)
        // returns: nothing
        // side effects: adds the deposit amount to the balance
        //               pushes a new object to transactions with date,
        //               credit amount and balance
    }

    makeWithdrawal (withdrawalAmount, date) {
        // parameters: amount to be withdrawn (float number) and date (string in DD/MM/YY format)
        // returns: nothing
        // side-effect: deducts withdrawalAmount from balance
        //              pushes a new object to transactions with date,
        //              debit amount and balance
    }
}

class AccountStatement {

    constructor (bankAccount) {
        // paremeters: takes an instance of BankAccount
        // side effects: sets instance of BankAccount in a variable
    }

    printStatement () {
        // parameters: none
        // returns: a list of all transactions from most recent to latest
    }
}

```

4. Unit Tests

```Javascript

// Tests for BankAccount

// add beforeEach to create new instance of BankAccount to use in tests
// add afterEach to reset the balance and transactions to zero

describe("BankAccount", () => {

    // when a new BankAccount is created the initial balance is zero
    it("shows an initial balance of zero", () => {
        // expect balance to equal zero
    })

    // when a new BankAccount is created the transactions are empty
    it('shows transactions as empty array', () => {
        // expect transactions to be []
    })

    // when I add a credit of 1000.00 the account balance is 1000.00
    it('adds a credit amount to the balance', () => {
        // call the makeDeposit function with 1000.00
        // expect balance to be 1000.00
    })

    // when I add more than one credit, the balance updates accordingly
    it('updates the balance correctly when multiple credits made', () => {
        // call makeDeposit with 1000.00
        // call makeDeposit with 500.00
        // expect balance to be 1500.00
    })

    // when I add a credit, a transaction gets created and added to transaction
    it('creates a new credit transaction when a credit is added', () => {
        // call makeDeposit with 100 and 01/09/2023
        // expect transactions to be [{ date: '01/09/2023', credit: 100.00, debit: null, balance: 100.00 }]
    })

    // when I add more than one credit, a transaction is added for each of them
    it('creates multiple new credit transactions when multiple credits added', () => {
        // call makeDeposit with 100 and 01/09/2023
        // call makeDeposit with 200 and 02/09/2023
        // expect transactions to be [ { date: '02/09/2023', credit: 200.00, debit: null, balance: 300.00 },
        //                             { date: '01/09/2023', credit: 100.00, debit: null, balance: 100.00 }]
    })

    // when I make a withdrawal, it's deducted from the balance
    it('deducts the amount from the balance when a withdrawal is made', () => {
        // call makeDeposit with 200.00
        // call makeWithdrawal with 50.00
        // expect balance to be 150.00
    })

    // when I make more than one withdrawal, the balance is updated accordingly
    it('updates the balance correctly when multiple wihtdrawals made', () => {
        // call makeDeposit with 200.00
        // call makeWithdrawal with 50.00
        // call makeWithdrawal with 100.00
        // expect balance to be 50.00
    })

    // when I make a withdrawal, a transaction is added for each of them
    it('creates a new debit transaction when a withdrawal is made', () => {
        // call makeDeposit with 500.00 and 01/09/2023
        // call makeWithdrawal with 100.00 and 02/09/2023
        // expect transactions to be [{ date: '02/09/2023', credit: null, debit: 100.00, balance: 400.00 }]
        //                            { date: '01/09/2023', credit: 500.00, debit: null, balance: 500.00 }]
    })


    // when I make more than one withdrawal, a transaction is created for each of them
    it('creates multiple debit transactions when multiple withdrawals are made', () => {
        // call makeDeposit with 500.00
        // call makeWithdrawal with 100.00 and 01/09/2023
        // call makeWithdrawal with 200.00 and 02/09/2023
        // expect transactions to be [{ date: '01/09/2023', credit: null, debit: 100.00, balance: 400.00 },
        //                            { date: '02/09/2023', credit: null, debit: 200.00, balance: 200.00 }]
    })

    // when I add a credit, with an incorrect date format, I get an error
    it('shows an error message if you enter a date in incorrect format', () => {
        // call makeDeposit with 100 and 01-09-2023
        // expect error message to be "Please enter a date in this format DD/MM/YY"
    })

    // when I try to make a withdrawal, with an incorrect date format, I get an error
    it('shows an error message if you enter a date in incorrect format', () => {
        // call makeDeposit with 100.00 and 01/09/2023
        // call makeWithdrawal with 50.00 and 02-09-2023
        // expect error message to be "Please enter a date in this format DD/MM/YY"
    })

    // when I try to make a withdrawal above the available balance, I get an error
    it('shows an error message try to withdraw more than in balance', () => {
        // call makeDeposit with 100.00 and 01/09/2023
        // call makeWithdrawal with 200.00 and 02-09-2023
        // expect error message to be "Insufficient funds"
    })

    // when I make a withdrawal or deposit amount that is not an float
    // It gets changed and shows as a float in the transactions
    it('when I add a float debit/credit, it reflects as a float in transactions', () => {
        // call makeDeposit with 200.55 and 01/09/2023
        // call makeWithdrawal with 100.55 and 02/09/2023
        // expect transactions to be [{ date: '02/09/2023', credit: null, debit: 100.55, balance: 400.00 },
        //                            { date: '01/09/2023', credit: 200.55, debit: null, balance: 400.00} ]
    })

})


// Tests for AccountStatement

describe("AccountStatement", () =>{

    // when I call print statement, I get a list of the recent transactions
    // formatted in a nice way (most recent transaction first)
    it('shows account transactions with the most recent first', () => {
        // create a mock bank account with a balance and transactions
        // expect transactions to show with most recent first
    })
})

```

5. Integration Tests

```Javascript

// add beforeAll to make a new instance of BankAccount and AccountStatement(bankAccount)
// add afterEach to reset balance to zero and transactions to []

describe("BankAccount and AccountStatement", () => {
    // when I create a new bank account, make a deposit, and print statement,
    // the deposit shows in the statement as a 'credit'
    it('creates a new bank account, makes a deposit and statement reflects this as credit', () => {
        // call bankAccount.makeDeposit with 100.00 on '01/09/2023'
        // call accountStatement.printStatement()
        // expect transaction to be
            'date || credit || debit || balance'
            '01/09/2023 || 100.00 || || 100.00'
    })


    // when I create a new bank account, make a deposit then a withdrawal, and print statement,
    // the withdrawal shows in the statement as a 'debit'
    it('creates a new bank account, makes a withdrawal and statement reflects this as debit', () => {
        // call bankAccount.makeDeposit with 100.00 on '01/09/2023'
        // call bankAccount.makeWithdrawal with 50.00 on '02/09/2023'
        // call accountStatement.printStatement()
        // expect transaction to be
            'date || credit || debit || balance'
            '02/09/2023 || || 50.00 || 50.00'
            '01/09/2023 || 100.00 || || 100.00'
    })

    // when I create a new bank account, and make several transactions
    // when I print statement, I see all these transactions listed (most recent first)
    it('creates a new bank account, makes a multiple deposits and withdrawals and these are reflected in statement with most recent first', () => {
        // call bankAccount.makeDeposit with 200.00 on '01/09/2023'
        // call bankAccount.makeWithdrawal with 100.00 on '02/09/2023'
        // call bankAccount.makeDeposit with 200.00 on '03/09/2023'
        // call bankAccount.makeWithdrawal with 100.00 on '04/09/2023'

        // call accountStatement.printStatement()
        // expect transaction to be
            'date || credit || debit || balance'
            '04/09/2023 || || 100.00 || 200.00'
            '03/09/2023 || 200.00 || || 300.00'
            '02/09/2023 || || 100.00 || 100.00'
            '01/09/2023 || 200.00 || || 200.00'
    })
})


```
