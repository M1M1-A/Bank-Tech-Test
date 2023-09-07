const AccountStatement = require("../lib/AccountStatement")

describe("AccountStatement", () =>{
    it('shows account transactions in a nicely formatted way', () => {
        const mockBankAccount = { balance : 100.00, 
                                  transactions: [{  date: '01/09/2023', 
                                                    credit: '100.55', 
                                                    debit: null, 
                                                    balance: 100.55}]}
        
        const accountStatement = new AccountStatement()
        const transactions = mockBankAccount.transactions
        const statement = accountStatement.printStatement(transactions)
                                                                                                
        expect(statement).toEqual(
            `date || credit || debit || balance\n01/09/2023 || 100.55 || || 100.55`
        )
    })
    it('shows multiple account transactions in a nicely formatted way, most recent first', () => {
        const mockBankAccount = { balance : 100.00, 
                                transactions: [{  date: '01/09/2023', 
                                                    credit: '100.00', 
                                                    debit: null, 
                                                    balance: 100.00},
                                                    {  date: '02/09/2023', 
                                                    credit: '200.00', 
                                                    debit: null, 
                                                    balance: 300.00}
                                                ]}
        
        const accountStatement = new AccountStatement()
        const transactions = mockBankAccount.transactions
        const statement = accountStatement.printStatement(transactions)
                                                                                            
        expect(statement).toEqual(
            `date || credit || debit || balance\n02/09/2023 || 200.00 || || 300.00\n01/09/2023 || 100.00 || || 100.00`
        )
    })
})