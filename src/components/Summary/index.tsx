import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import { Container } from "./styles";

export function Summary(){
   return  (
       <Container>
           <div>
               <header>
                   <p>Entradas</p>
                   <img src={incomeImg} alt="income" />
               </header>
               <strong>1.000,00R$</strong>
           </div>
           <div>
               <header>
                   <p>Saídas</p>
                   <img src={outcomeImg} alt="saidas" />
               </header>
               <strong>-5.00,00R$</strong>
           </div>
           <div className="highlight-background">
               <header>
                   <p>Total</p>
                   <img src={totalImg} alt="total" />
               </header>
               <strong>500,00R$</strong>
           </div>
       </Container>
   )
}