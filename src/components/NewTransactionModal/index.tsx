import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { Container, RadioBox, TransactionTypeContainer } from './styled';
import closeImg from '../../assets/close.svg';
import { useState } from 'react';
import { api } from '../../services/axios';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose}: NewTransactionModalProps){
    const [type, setType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState(0);

    function handleCreateNewTransaction(event: React.FormEvent){
        event.preventDefault();

       const data = {title, price, category, type}

       api.post('/transactions', data)
    }

    return(
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} 
         overlayClassName="react-modal-overlay" className="react-modal-content"
        >
            <button type="button" className="react-modal-close" onClick={onRequestClose}>
                <img src={closeImg} alt="Fechar modal" />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>

                <input type="text" placeholder="Título" value={title} onChange={event => setTitle(event.target.value)} />
                <input type="number" placeholder="Preço" value={price} onChange={event => setPrice(Number(event.target.value))}/>

                <TransactionTypeContainer>
                    <RadioBox type="button" 
                     onClick={() => setType('deposit')} 
                     isActive={type === 'deposit'}
                     activeColor="green"
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox type="button" 
                     onClick={() => 
                     setType('withdraw')} 
                     isActive={type === 'withdraw'}
                     activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input type="text" placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)}/>

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}