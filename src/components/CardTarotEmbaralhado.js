import React from "react";
import { CardContainer1, Imagem } from "../Styled";

function CardTarotEmbaralhado(props) {

  const listaCartasEmbaralhadas = props.cartasEmbaralhadas.map((card, i) => {
    return (
      <CardContainer1 key={i}>
        <Imagem onClick={() => props.selecionarCarta(i)} src="https://yata-apix-542e61bd-af98-47c8-bd31-306ec06fccd7.s3-object.locaweb.com.br/1293016a685249ac85832bb6d0c71ac9.png" alt="Minha Figura"></Imagem>
      </CardContainer1>
    )
  })

  return (
    <>
      {listaCartasEmbaralhadas}
    </>
  )
}
export default CardTarotEmbaralhado