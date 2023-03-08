import React from "react";
import { Button, CardContainer, Header, Titulo } from "../Styled";
import CardTarot from "../components/CardTarot";

function PaginaInical(props) {

    const embaralhar = () => {
        props.setValorPagina(2)
      }

    return (
        <>
            <Header>
                <Titulo> 🎴JOGO DE TAROT🎴</Titulo>
            </Header>
            <CardContainer>
                <CardTarot/>
                <Button onClick={embaralhar}><i>EMBARALHAR</i></Button>
            </CardContainer>
        </>
    )
}
export default PaginaInical