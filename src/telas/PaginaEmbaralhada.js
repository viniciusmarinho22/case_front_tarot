import React from "react";
import Cartas from "../constants/Cartas";
import { CardContainer, Header, Titulo } from "../Styled";
import CardTarotEmbaralhado from "../components/CardTarotEmbaralhado";
import Shuffle from "../constants/Shuffle";

function PaginaEmbaralhada(props) {
    
    const cartasEmbaralhadas = Shuffle(Cartas().cards);

    const selecionarCarta = (i) => {
        const cartaSelecionada = cartasEmbaralhadas.filter((card, index) => {
          return i === index
        })
        props.setDetalheCarta(cartaSelecionada[0])
        props.setValorPagina(3)
      }

    return (
        <>
            <Header>
                <Titulo>JOGO DE TAROT</Titulo>
            </Header>
            <CardContainer>
                <CardTarotEmbaralhado cartasEmbaralhadas={cartasEmbaralhadas} selecionarCarta={selecionarCarta} />
            </CardContainer>
        </>
    )
}
export default PaginaEmbaralhada