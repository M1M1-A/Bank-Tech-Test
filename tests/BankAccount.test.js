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

    it('shows transactions as empty array', () => {
        expect(bankAccount.transactions).toEqual([])
    })

})