import { useState } from "react";
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { createServer } from 'miragejs'
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";

createServer({
  routes(){
    this.namespace='api'

    this.get('/transactions', ()=>{
      return[
        {
          id: 1,
          title: 'Transactions 1',
          amount: 400,
          type: 'deposit',
          categoty: 'Food'
        }
      ]
    })
  }
})

Modal.setAppElement("#root")

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false) ;

  function handleOpenModal(){
      setIsNewTransactionModalOpen(true)
  }

  function handleCloseModal(){
      setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransaction={handleOpenModal}/>
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseModal}/>
      <GlobalStyle />
    </>
  );
}

