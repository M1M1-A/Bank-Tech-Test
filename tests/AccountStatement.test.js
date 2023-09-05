const AccountStatement = require("../lib/AccountStatement")

describe("AccountStatement", () =>{
    it('sets an instance of bankAccount in the constructor', () => {
        const mockBankAccount = { balance : 0, 
                                transactions: []}
        
        const accountStatement = new AccountStatement(mockBankAccount)
            
        expect(accountStatement.bankAccount).toEqual({  balance : 0, 
																											transactions: []})
    })

    it('shows account transactions in a nicely formatted way', () => {
        const mockBankAccount = { balance : 100.00, 
                                  transactions: [{  date: '01/09/2023', 
                                                    credit: '100.55', 
                                                    debit: null, 
                                                    balance: 100.55}]}
        
        const accountStatement = new AccountStatement(mockBankAccount)
        const statement = accountStatement.printStatement()
                                                    
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
        
        const accountStatement = new AccountStatement(mockBankAccount)
        const statement = accountStatement.printStatement()
                                                    
        expect(statement).toEqual(
            `date || credit || debit || balance\n02/09/2023 || 200.00 || || 300.00\n01/09/2023 || 100.00 || || 100.00`
        )
    })
})