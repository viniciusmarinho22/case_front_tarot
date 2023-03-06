import React from "react";

import { CardContainer1, Imagem } from "../Styled";


class CardTarotEmbaralhado extends React.Component{
    state={
        cartaSelecionada:"",
        detalheCarta:[]
    }

    cartas = require("../tarot.json")
   
    shuffle=(array)=>{
        const newArray = []
        let number = Math.floor(Math.random()*array.length)
        let count = 1
        newArray.push(array[number])

        while (count < array.length){
            const newNumber = Math.floor(Math.random()*array.length)
            if(!newArray.includes(array[newNumber])){
                count++
                number = newNumber
                newArray.push(array[number])
            }
        }
        return newArray
    }

  
    cartasEmbaralhadas= this.shuffle(this.cartas.cards);
 
    selecionarCarta=(i)=>{
        const cartaSelecionada = this.cartasEmbaralhadas.filter((card,index)=>{
            return i === index
        })
        this.setState({cartaSelecionada:`${cartaSelecionada[0].name}`, detalheCarta: cartaSelecionada[0]})
        
    }

    
    
    listaCartas = this.cartas.cards.map((card,i)=>{
      return (
        
        <CardContainer1 key={i}>
            <Imagem src="https://yata-apix-542e61bd-af98-47c8-bd31-306ec06fccd7.s3-object.locaweb.com.br/1293016a685249ac85832bb6d0c71ac9.png" alt="Minha Figura"></Imagem>
            <button onClick={()=>this.selecionarCarta(i)}>escolher carta</button>
        </CardContainer1>
      )      
    })


    render(){
        console.log(this.state.cartaSelecionada)
        this.state.cartaSelecionada ? alert(this.state.cartaSelecionada) : alert(`Selecione uma carta`)
       
        return(
            <>
               {this.listaCartas}
               
            </>
        )
    }
}
export default CardTarotEmbaralhado