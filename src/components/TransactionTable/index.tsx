import { useContext, useEffect, useState } from "react";
import { api } from "../../services/axios";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";

interface Transaction{
    id: number;
    title: string;
    type: string;
    amount: number;
    category: string;
    createdAt: string
}

export function TransactionTable(){
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const data = useContext(TransactionsContext);

    useEffect(() => {
        api.get('transactions')
        .then(({ data }) => setTransactions(data.transactions))
    }, [])

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                   {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.amount)}
                            </td>
                            <td>{transaction.category}</td>
                            <td>
                                {new Intl.DateTimeFormat('pt-BR').format(
                                    new Date(transaction.createdAt)
                                )}
                            </td>
                        </tr>
                   ))}
                </tbody>
            </table>
        </Container>
    )
}