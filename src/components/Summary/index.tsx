import { useContext } from 'react';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContent';

import { Container } from "./styles";

export function Summary(){

   const {transaction} = useContext(TransactionsContext); 

   const summary = transaction.reduce((acc, data)=>{
    if(data.type === 'deposit'){
        acc.deposits += data.amount
        acc.total += data.amount
    }else{
        acc.withDraws += data.amount 
        acc.total -= data.amount
    }

    return acc
   }, {
       deposits:0,
       withDraws: 0,
       total: 0
   })
   return  (
       <Container>
           <div>
               <header>
                   <p>Entradas</p>
                   <img src={incomeImg} alt="income" />
               </header>
               <strong>{summary.deposits}R$</strong>
           </div>
           <div>
               <header>
                   <p>Saídas</p>
                   <img src={outcomeImg} alt="saidas" />
               </header>
               <strong>-{summary.withDraws}R$</strong>
           </div>
           <div className="highlight-background">
               <header>
                   <p>Total</p>
                   <img src={totalImg} alt="total" />
               </header>
               <strong>{summary.total}R$</strong>
           </div>
       </Container>
   )
}