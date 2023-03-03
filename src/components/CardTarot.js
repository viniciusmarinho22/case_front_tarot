import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
border: 1px solid yellow;
background-color: white;
width: 120px;
`

const Imagem = styled.img`
width: 100px;
height: 80%;
`


class CardTarot extends React.Component{

    cartas = require("../tarot.json")
  
    listaCartas = this.cartas.cards.map((card,i)=>{
      return (
          <CardContainer key={i}>
            <Imagem src={card.image} alt="Minha Figura"></Imagem>
            <div>

            <h6>{card.name}</h6>
            </div>
          </CardContainer>
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