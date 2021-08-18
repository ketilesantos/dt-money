import {createContext, useEffect, useState} from 'react'
import { api } from './services/axios'

interface Transaction{
    id: number;
    title: string;
    type: string;
    amount: number;
    category: string;
    createdAt: string
}
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsProviderProps{
    children: React.ReactNode;
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransactions: (transactions: TransactionInput) => Promise<void>
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)

export function TransactionsProvider({children}: TransactionsProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('transactions')
        .then(({ data }) => setTransactions(data.transactions))
    }, [])

    async function createTransactions(transactionsInput: TransactionInput){
        const response = await api.post('/transactions', {...transactionsInput, createdAt: new Date()});
        const {transaction} = response.data;
        setTransactions([...transactions, transaction])

    }

    return(
        <TransactionsContext.Provider value={{transactions, createTransactions }}>
            {children}
        </TransactionsContext.Provider>
    )
}   