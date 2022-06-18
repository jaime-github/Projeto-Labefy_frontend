import React from 'react';
import PlaylistsCadastradas from './components/PlaylistsCadastradas';
import CadastroPlaylist from './components/CadastroPlaylist';
import styled from 'styled-components'
import MainApp from './components/MainApp';


const CardTelaMain = styled.div`
    margin: 0;
    padding: 0;
    background-color: #2941AB;
  `

export default class App extends React.Component {
  state = {
    telaAtual: "cadastroPlaylist",
    playlistUrlClicada: ""
}

escolheTela = () => {
  switch (this.state.telaAtual){
    case "cadastroPlaylist":
      return <CadastroPlaylist irParaLista={this.irParaLista}/>        
    case "listaPlaylists":
      return <PlaylistsCadastradas voltarParaLista={this.voltarParaLista} url={this.state.playlistUrlClicada}/>
    default:
        return <div>Página não Encontrada !</div>      
  }
}

irParaCadastro = () => {
  this.setState({telaAtual: "cadastroPlaylist"})
}

irParaLista = () => {
  this.setState({telaAtual: "listaPlaylists"})
}

irParaInfoPlaylists = (url) => {
  this.setState({telaAtual: "infoPlaylists", playlistUrlClicada:url})
}

voltarParaLista = () => {
  this.setState({telaAtual: "listaPlaylists", playlistUrlClicada: ""})
}

  render() {
    return (
    
    <CardTelaMain>      
      {this.escolheTela()}
      <MainApp/> 
    </CardTelaMain>
    )
  }
}



