import React from "react";
import Cartas from "../constants/Cartas";
import { CardContainer1, CardName, Imagem } from "../Styled";

function CardTarot() {

    const listaCartas = Cartas().cards.map((card, i) => {
        return (
            <CardContainer1 key={i}>
                <Imagem src={card.image} alt="Minha Figura"></Imagem>
                <CardName>{card.name}</CardName>
            </CardContainer1>
        )
    })

    return (
        <>
            {listaCartas}
        </>
    )
}
export default CardTarot