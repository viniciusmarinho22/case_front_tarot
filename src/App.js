import './App.css';
import React from 'react';
import CardTarot from './components/CardTarot';
import styled from 'styled-components';

const CardContainer = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(8, 1fr);
  row-gap: 20px;
  /* column-gap: 10px; */
  /* margin: 10px; */
  background-color: purple;
`
const Header = styled.div`
  background-color: purple;
  display: flex;
  /* text-align: center; */
  justify-content: center;
`

const Titulo = styled.h1`
display: flex;
justify-content: space-between;
`


class App extends React.Component{

 
  render(){
    return (
      <>
        <Header>
        <Titulo>JOGO DE TAROT</Titulo>
        </Header>
      <CardContainer className="App">
        <CardTarot></CardTarot>
      </CardContainer>
      </>
    );
  }
}

export default App;
