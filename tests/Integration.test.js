const AccountStatement = require("../lib/AccountStatement");
const BankAccount = require("../lib/BankAccount")

describe("BankAccount and AccountStatement", () => {

    let bankAccount;
    let accountStatement;
    let transactions;
    let currentDate;

    beforeAll(() => {
        bankAccount = new BankAccount();
        accountStatement = new AccountStatement()
        currentDate = bankAccount.getDate();
    })

    afterEach(() => {
        bankAccount.balance = 0;
        bankAccount.transactions = [];
    })

    it('creates a new bank account, makes a deposit and statement reflects this as credit', () => {

        bankAccount.makeDeposit(100.00)
        transactions = bankAccount.transactions
        const statement = accountStatement.printStatement(transactions)

        expect(statement).toEqual(
            `date || credit || debit || balance\n${currentDate} || 100.00 || || 100.00`
        )
    })

    it('creates a new bank account, makes a withdrawal and statement reflects this as debit', () => {
        
        bankAccount.makeDeposit(100.00)
        bankAccount.makeWithdrawal(50.50)
        transactions = bankAccount.transactions
        const statement = accountStatement.printStatement(transactions)

        expect(statement).toEqual(
            `date || credit || debit || balance\n${currentDate} || || 50.50 || 49.50\n${currentDate} || 100.00 || || 100.00`
        )
    })

    it('creates a new bank account, makes a multiple deposits and withdrawals and these are reflected in statement with most recent first', () => {

        bankAccount.makeDeposit(200.00)
        bankAccount.makeWithdrawal(100.00)
        bankAccount.makeDeposit(200.00)
        bankAccount.makeWithdrawal(100.00)

        transactions = bankAccount.transactions
        const statement = accountStatement.printStatement(transactions)

        expect(statement).toEqual(
            `date || credit || debit || balance
${currentDate} || || 100.00 || 200.00
${currentDate} || 200.00 || || 300.00
${currentDate} || || 100.00 || 100.00
${currentDate} || 200.00 || || 200.00`
        )
    })

    it('acceptance criteria example', () => {
        bankAccount.makeDeposit(1000.00)
        bankAccount.makeDeposit(2000.00)
        bankAccount.makeWithdrawal(500.00)

        transactions = bankAccount.transactions
        const statement = accountStatement.printStatement(transactions)

        expect(statement).toEqual(
            `date || credit || debit || balance
${currentDate} || || 500.00 || 2500.00
${currentDate} || 2000.00 || || 3000.00
${currentDate} || 1000.00 || || 1000.00`
        )
    })
})