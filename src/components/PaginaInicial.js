import React from "react";
import { Button, CardContainer, Header, Titulo } from "../Styled";
import CardTarot from "./CardTarot";

class PaginaInical extends React.Component{
 
    render(){
        
        return(
            <>
                <Header>
                    <Titulo>JOGO DE TAROT</Titulo>
                </Header>
                <CardContainer className="App">
                    <CardTarot/>
                    <Button onClick={this.props.começaJogo}>COMEÇAR O JOGO</Button>
                </CardContainer>
            </>
        )
    }
}
export default PaginaInical