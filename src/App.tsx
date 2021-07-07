import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { createServer } from 'miragejs'
import { GlobalStyle } from "./styles/global";

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
export function App() {
  return (
    <>
      <Header/>
      <Dashboard />
     
      <GlobalStyle />
    </>
  );
}

