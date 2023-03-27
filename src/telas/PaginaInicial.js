import React from "react";
import { CardContainer, Header, SubTitulo, Titulo } from "../Styled";
import CardTarot from "../components/CardTarot";
import BotaoEmbaralhar from "../components/BotaoEmbralhar"

function PaginaInical() {
    return (
        <>
            <Header>
                <div>
                  <Titulo> 🎴   JOGO DE TAROT 🎴</Titulo>
                </div>
                <div>
                    <SubTitulo> Para começar, click em embaralhar! </SubTitulo>
                </div>
                
            </Header>
            <CardContainer>
                <CardTarot />
                <BotaoEmbaralhar />
            </CardContainer>
        </>
    )
}
export default PaginaInical