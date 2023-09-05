const AccountStatement = require("../lib/AccountStatement");
const BankAccount = require("../lib/BankAccount")

describe("BankAccount and AccountStatement", () => {

    let bankAccount;
    let accountStatement;

    beforeAll(() => {
        bankAccount = new BankAccount();
        accountStatement = new AccountStatement(bankAccount)
    })

    afterEach(() => {
        bankAccount.balance = 0;
        bankAccount.transactions = [];
    })

    it('creates a new bank account, makes a deposit and statement reflects this as credit', () => {

        bankAccount.makeDeposit(100.00, '01/09/2023')
        const statement = accountStatement.printStatement()

        expect(statement).toEqual(
            `date || credit || debit || balance\n01/09/2023 || 100.00 || || 100.00`
        )
    })

    it('creates a new bank account, makes a withdrawal and statement reflects this as debit', () => {
        
        bankAccount.makeDeposit(100.00, '01/09/2023')
        bankAccount.makeWithdrawal(50.50, '02/09/2023')
        const statement = accountStatement.printStatement()

        expect(statement).toEqual(
            `date || credit || debit || balance\n02/09/2023 || || 50.50 || 49.50\n01/09/2023 || 100.00 || || 100.00`
        )
    })

    it('creates a new bank account, makes a multiple deposits and withdrawals and these are reflected in statement with most recent first', () => {
        bankAccount.makeDeposit(200.00, '01/09/2023')
        bankAccount.makeWithdrawal(100.00, '02/09/2023')
        bankAccount.makeDeposit(200.00, '03/09/2023')
        bankAccount.makeWithdrawal(100.00, '04/09/2023')

        const statement = accountStatement.printStatement()

        expect(statement).toEqual(
            `date || credit || debit || balance
04/09/2023 || || 100.00 || 200.00
03/09/2023 || 200.00 || || 300.00
02/09/2023 || || 100.00 || 100.00
01/09/2023 || 200.00 || || 200.00`
        )
    })
})