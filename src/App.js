import React from 'react';
import PaginaInical from './components/PaginaInicial';
import PaginaEmbaralhada from './components/PaginaEmbaralhada';
import PaginaDetalheCarta from './components/PaginaDetalheCarta';

class App extends React.Component{
 state ={
  pagina: 1
 }
 
  começaJogo=()=>{
    this.setState({pagina: 2})
  } 
  
  escolheuCarta=()=>{
    this.setState({pagina: 3})
  }

    selecionaPagina=()=>{

    switch (this.state.pagina) {
    case 1:
      return <PaginaInical começaJogo={this.começaJogo}/>
    case 2:
      return <PaginaEmbaralhada/>
    case 3:
      return <PaginaDetalheCarta/>
    default:
      return "Página não encontrada!"
    }
  }

  render(){
    return (
      <>
       {this.selecionaPagina()}
      </>
    );
  }
}

export default App;
