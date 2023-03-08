import React from "react";
import { Button, CardContainer, Header, Titulo } from "../Styled";
import CardTarot from "./CardTarot";

function PaginaInical(props) {
    return (
        <>
            <Header>
                <Titulo>JOGO DE TAROT</Titulo>
            </Header>
            <CardContainer>
                <CardTarot />
                <Button onClick={props.embaralhar}><i>EMBARALHAR</i></Button>
            </CardContainer>
        </>
    )
}
export default PaginaInical