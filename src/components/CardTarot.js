import React from "react";
import { CardContainer1, CardName, Imagem } from "../Styled";


class CardTarot extends React.Component{

    cartas = require("../tarot.json")
  
    listaCartas = this.cartas.cards.map((card,i)=>{
      return (
          <CardContainer1 key={i}>
            <Imagem src={card.image} alt="Minha Figura"></Imagem>
            <CardName>{card.name}</CardName>
          </CardContainer1>
      )      
    })

    render(){
        return(
            <>
                {this.listaCartas}
            </>
        )
    }
}
export default CardTarot