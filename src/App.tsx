import { useState } from "react";
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import { TransactionsContext } from "./TransactionsContext";

Modal.setAppElement('#root')

export function App() {
  const [isOpenNewTransactionModal, setIsOpenNewTransactionModal] = useState(false)

  function handleOpenNewTransactionModal(){
    setIsOpenNewTransactionModal(true);
  }

  function handleCloseNewTransactionModal(){
    setIsOpenNewTransactionModal(false);
  }


  return (
    <TransactionsContext.Provider value={[]}>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal isOpen={isOpenNewTransactionModal} onRequestClose={handleCloseNewTransactionModal}/>
      <GlobalStyle />
    </TransactionsContext.Provider>
  );
}
