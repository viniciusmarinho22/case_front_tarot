import React from "react";
import {CardContainer, Header, Titulo } from "../Styled";
import CardTarotEmbaralhado from "./CardTarotEmbaralhado";

class PaginaEmbaralhada extends React.Component{
    render(){
        return(
            <>
                <Header>
                    <Titulo>JOGO DE TAROT</Titulo>
                </Header>
                <CardContainer>
                    <CardTarotEmbaralhado/>
                </CardContainer>
            </>
        )
    }
}
export default PaginaEmbaralhada