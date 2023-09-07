const BankAccount = require("../lib/BankAccount")

describe("BankAccount", () => {

    let bankAccount;

    beforeAll(() => {
        bankAccount = new BankAccount();
    })

    afterEach(() => {
        bankAccount.balance = 0;
        bankAccount.transactions = [];
    })

    it("shows an initial balance of zero", () => {
        expect(bankAccount.balance).toBe(0);
    })

    it('initially shows transactions as empty array', () => {
        expect(bankAccount.transactions).toEqual([])
    })

    it('adds a credit amount to the balance', () => {
        bankAccount.makeDeposit(1000.00)
        expect(bankAccount.balance).toBe(1000.00)
    })

    it('updates the balance correctly when multiple credits made', () => {
        bankAccount.makeDeposit(1000.00)
        bankAccount.makeDeposit(500.00)
        expect(bankAccount.balance).toBe(1500.00)
    })

    it('creates a transaction with a correctly formatted current date', () => {
        bankAccount.makeDeposit(1000.00)
        const currentDate = bankAccount.getDate()
        const transactionDate = bankAccount.transactions[0].date
        expect(transactionDate).toEqual(currentDate)
    })

    it('creates a new credit transaction when a credit is added', () => {
        bankAccount.makeDeposit(100.00)
        const currentDate = bankAccount.getDate()
        expect(bankAccount.transactions).toEqual([
                                                    { date: `${currentDate}`, 
                                                    credit: '100.00', 
                                                    debit: null, 
                                                    balance: 100.00 }])
    })

    it('creates multiple new credit transactions when multiple credits added', () => {
        bankAccount.makeDeposit(100.00)
        bankAccount.makeDeposit(200.00)
        const currentDate = bankAccount.getDate()
        expect(bankAccount.transactions).toEqual([{ date: `${currentDate}`, credit: '100.00', debit: null, balance: 100.00 },
                                                  { date: `${currentDate}`, credit: '200.00', debit: null, balance: 300.00 }])
    })

    it('deducts the amount from the balance when a withdrawal is made', () => {
        bankAccount.makeDeposit(200.00)
        bankAccount.makeWithdrawal(50.00)
        expect(bankAccount.balance).toEqual(150.00)
    })

    it('updates the balance correctly when multiple wihtdrawals made', () => {
        bankAccount.makeDeposit(200.00)
        bankAccount.makeWithdrawal(50.00)
        bankAccount.makeWithdrawal(50.00)
        expect(bankAccount.balance).toEqual(100.00)
    })

    it('creates a new debit transaction when a withdrawal is made', () => {
        bankAccount.makeDeposit(200.00)
        bankAccount.makeWithdrawal(50.00)
        const currentDate = bankAccount.getDate()
        expect(bankAccount.transactions).toEqual([{ date: `${currentDate}`, credit: '200.00', debit: null, balance: 200.00 },
                                                  { date: `${currentDate}`, credit: null, debit: '50.00', balance: 150.00 }])
    })

    it('creates multiple debit transactions when multiple withdrawals are made', () => {
        bankAccount.makeDeposit(500.00)
        bankAccount.makeWithdrawal(100.00)
        bankAccount.makeWithdrawal(200.00)
        const currentDate = bankAccount.getDate()
        expect(bankAccount.transactions).toEqual([{ date: `${currentDate}`, credit: '500.00', debit: null, balance: 500.00 },
                                                  { date: `${currentDate}`, credit: null, debit: '100.00', balance: 400.00 },
                                                  { date: `${currentDate}`, credit: null, debit: '200.00', balance: 200.00 }])
    })

    it('shows an error message if you try to withdraw more than in balance', () => {
        try {
            bankAccount.makeDeposit(100.00);
            bankAccount.makeWithdrawal(200.00)
        } catch (error) {
            expect(error.message).toEqual('Insufficient funds');
        }   
    })

    it('when I add a float debit/credit, it reflects as a float in transactions', () => {
        bankAccount.makeDeposit(100.55);
        bankAccount.makeWithdrawal(50.50)
        const currentDate = bankAccount.getDate()
        expect(bankAccount.transactions).toEqual([  { date: `${currentDate}`, credit: '100.55', debit: null, balance: 100.55},
                                                    { date: `${currentDate}`, credit: null, debit: '50.50', balance: 50.05 }])
    })



})