import React, { useState } from 'react';
import PaginaInical from './components/PaginaInicial';
import PaginaEmbaralhada from './components/PaginaEmbaralhada';
import PaginaDetalheCarta from './components/PaginaDetalheCarta';

function App() {
  const [pagina, setValorPagina] = useState(1)
  const [detalheCarta, setDetalheCarta] = useState([])

  const embaralhar = () => {
    setValorPagina(2)
  }

  const cartas = require("./tarot.json")

  const shuffle = (array) => {
    const newArray = []
    let number = Math.floor(Math.random() * array.length)
    let count = 1
    newArray.push(array[number])

    while (count < array.length) {
      const newNumber = Math.floor(Math.random() * array.length)
      if (!newArray.includes(array[newNumber])) {
        count++
        number = newNumber
        newArray.push(array[number])
      }
    }
    return newArray
  }

  const cartasEmbaralhadas = shuffle(cartas.cards);

  const selecionarCarta = (i) => {
    const cartaSelecionada = cartasEmbaralhadas.filter((card, index) => {
      return i === index
    })
    setDetalheCarta(cartaSelecionada[0])
    setValorPagina(3)
  }

  const selecionaPagina = () => {

    switch (pagina) {
      case 1:
        return <PaginaInical embaralhar={embaralhar} />
      case 2:
        return <PaginaEmbaralhada cartasEmbaralhadas={cartasEmbaralhadas} selecionarCarta={selecionarCarta} />
      case 3:
        return <PaginaDetalheCarta detalheCarta={detalheCarta} />
      default:
        return "Página não encontrada!"
    }
  }

  return (
    <>
      {selecionaPagina()}
    </>
  );
}

export default App;
