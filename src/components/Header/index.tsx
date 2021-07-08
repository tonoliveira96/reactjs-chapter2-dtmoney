
import LogoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps{
  onOpenNewTransaction: ()=>void;
}

export function Header({onOpenNewTransaction}: HeaderProps) {
 

  return (
    <Container>
        <Content>
            <img src={LogoImg} alt="dt-modey" />
            <button type="button" onClick={onOpenNewTransaction}>Nova transação</button>

        </Content>
    </Container>
  );
}
