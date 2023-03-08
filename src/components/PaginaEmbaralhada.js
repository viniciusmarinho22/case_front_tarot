import React from "react";
import { CardContainer, Header, Titulo } from "../Styled";
import CardTarotEmbaralhado from "./CardTarotEmbaralhado";

function PaginaEmbaralhada(props) {
    
    return (
        <>
            <Header>
                <Titulo>JOGO DE TAROT</Titulo>
            </Header>
            <CardContainer>
                <CardTarotEmbaralhado cartasEmbaralhadas={props.cartasEmbaralhadas} selecionarCarta={props.selecionarCarta} />
            </CardContainer>
        </>
    )
}
export default PaginaEmbaralhada