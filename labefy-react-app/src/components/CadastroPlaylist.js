import axios from 'axios';
import React from 'react';
import styled from 'styled-components'
import { BsSpotify } from 'react-icons/bs';


const CardBotão1 = styled.div`
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;

`
const CardBox = styled.div`
  display: flex;
  flex-direction: row;
`

const CardBotaoCriar = styled.button`   
  
`
const CardInput = styled.input`
  
  `
const CardButtonConfira = styled.button`
  
  `

const CardTitulo = styled.h1`
  color:white;
  display: flex;
  align-items: center;
  
`

export default class CadastroPlaylist extends React.Component {
  state = {
    criar: ""
  } 

  handleCriar = (event) => {
    this.setState({criar: event.target.value})
  }

  cadastrarPlaylist = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const body = {
      name: this.state.criar
    }

    axios.post(url, body, {
      headers: { 
          Authorization: "jaime-epifanio-moreira"
        }
      })
      .then((res) => {
          alert("Sua nova Playlist acaba de ser incluida com sucesso!")
          this.setState({criar: ""})
      })
      .catch((err) => {
          alert(err.response.data.message)
      })
    }

  render() {
    return( 
      <CardBotão1>        
        <CardTitulo><BsSpotify
        style={{ marginRight: 10 }}
        />Labefy</CardTitulo>
        
        <CardBox>
        <CardInput 
          placeholder={"Digite um Gênero"}
          value={this.state.criar}
          onChange={this.handleCriar}          
        />
        <CardBotaoCriar onClick={this.cadastrarPlaylist}>Criar</CardBotaoCriar>                
        </CardBox>
        <CardButtonConfira onClick={this.props.irParaLista}>Confira Suas Playlists Já Criadas</CardButtonConfira>
        
      </CardBotão1>
      )
    }
  }


