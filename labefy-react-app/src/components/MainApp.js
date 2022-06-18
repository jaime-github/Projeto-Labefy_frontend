import React, { Component } from 'react';
import styled from 'styled-components';
import Image from '../Imagens/background.png'


const Container = styled.div`
    width: 100%;
    height: 100vh;
`

const CardTexto1 = styled.h1`
    display: flex;
    align-items: center;
    color:#1ed760;
    font-size:132px;
    
`

const CardTexto2 = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1ed760;    
    font-weight: bold;
    
`

const CardButton = styled.button`
    display: flex;
    /* align-items: center; */
    /* justify-content: center; */
    text-align: center;
    margin-left: 560px;
    border-radius: 25px;
    border: none;
    background-color: #1ed760;
    color: #2941AB;
    height: 45px;
    width: 205px;
    font-weight: bold;
    margin-top: 20px;
    cursor: pointer;
`


export default class MainApp extends Component {
  render() {
    return (
        <Container style={{backgroundImage: `url(${Image})`, backgroundPosition: 'center',   backgroundSize: 'cover',   backgroundRepeat: 'no-repeat', height: '115vh'}}>
        <CardTexto1>Escutar Muda Tudo</CardTexto1>
        <CardTexto2>Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito.</CardTexto2>
        <CardButton>BAIXE O LABEFY FREE</CardButton>
        </Container>        
    )    
  }
}


