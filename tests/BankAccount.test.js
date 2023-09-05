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
        bankAccount.makeDeposit(1000.00, '01/09/2023')
        expect(bankAccount.balance).toBe(1000.00)
    })

    it('updates the balance correctly when multiple credits made', () => {
        bankAccount.makeDeposit(1000.00, '01/09/2023')
        bankAccount.makeDeposit(500.00, '02/09/2023')
        expect(bankAccount.balance).toBe(1500.00)
    })

})