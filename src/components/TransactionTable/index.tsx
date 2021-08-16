import { Container } from "./styles";

export function TransactionTable(){
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
                    <tr>
                        <td>Desenvolvimento de Software</td>
                        <td className="deposit">12.000</td>
                        <td>Desenvolvimento</td>
                        <td>02/12/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">-1.100</td>
                        <td>Casa</td>
                        <td>22/12/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}