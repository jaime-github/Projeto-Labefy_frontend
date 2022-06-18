import React from "react";
import axios from "axios";
import styled from 'styled-components';




const CardPlaylists = styled.div`
  border: 1px solid black;
  background-color: white;
  padding: 10px;
  margin: 10px;
  width: 300px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`

const CardFundoTela = styled.div`
  background-color: white;
  height: 100vh;
`

export default class PlaylistsCadastradas extends React.Component {
  state = {
    playlists: [],
  };

  componentDidMount() {
    this.pegarPlaylists();
  }

  pegarPlaylists = () => {
    const url =
      "http://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    axios
      .get(url, {
        headers: {
          Authorization: "jaime-epifanio-moreira",
        },
      })
      .then((res) => {
        alert("Sua nova Playlist acaba de ser incluida com sucesso!");
        this.setState({playlists: res.data.result.list});
      })
      .catch((err) => {
        alert("Ocorreu algum problema, por favor tente novamente!");
      });
  };

  deletarPlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
    axios.delete(url, {
      headers: {
        Authorization: "jaime-epifanio-moreira"
      }
    })
    .then((res) => {
      alert("Playlist deletada com sucesso!");
      this.pegarPlaylists()
    })
    .catch((err) => {
      alert("Ops, algo de errado ocorreu, por favor tente novamente!");
    });
  }

  render() {
      const listaPlaylists = this.state.playlists.map((plays) => {
          return(
              
              <CardPlaylists 
              key={plays.id}
              onClick={() => this.props.irParaInfoPlaylists(plays.id)}
              >
              

                <h2>{plays.name}</h2>                
                <button onClick={() => this.deletarPlaylist(plays.id)}>Deletar Playlist</button>
              </CardPlaylists>
              )
            })
      
            return (
              <CardFundoTela>
                <button onClick={this.props.irParaCadastro}>Voltar Para Home</button>
                <h2>Minhas Playlists</h2>
                {listaPlaylists}
              </CardFundoTela>
              );
            }

}
