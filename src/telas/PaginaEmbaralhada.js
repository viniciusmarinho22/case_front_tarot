import React from "react";
import Cartas from "../constants/Cartas";
import { CardContainer, Header, SubTitulo, Titulo } from "../Styled";
import CardTarotEmbaralhado from "../components/CardTarotEmbaralhado";
import Shuffle from "../constants/Shuffle";
import { useNavigate } from "react-router-dom";
import { irParaPaginaDetalheCarta } from "../Router/coordinator";

function PaginaEmbaralhada(props) {

    const cartasEmbaralhadas = Shuffle(Cartas().cards);

    const navigate = useNavigate()
    const selecionarCarta = (i) => {
        const cartaSelecionada = cartasEmbaralhadas.filter((card, index) => {
            return i === index
        })
        props.setDetalheCarta(cartaSelecionada[0])

        irParaPaginaDetalheCarta(navigate)
    }

    return (
        <>
            <Header>
                <div>
                    <Titulo>🎴   JOGO DE TAROT   🎴</Titulo>   
                </div>
                <div>
                    <SubTitulo> Escolha uma carta e click nela! </SubTitulo>
                </div> 
            </Header>

            <CardContainer>
                <CardTarotEmbaralhado cartasEmbaralhadas={cartasEmbaralhadas} selecionarCarta={selecionarCarta} />
            </CardContainer>
        </>
    )
}
export default PaginaEmbaralhada