import React from "react";
import styled from "styled-components";
import relogio from "../../img/relogio.png"
const MainContainer = styled.div`
width: 22.5rem;
  height: 6.375rem;
  margin: 6.188rem 0 3.063rem;
  padding: 1.3rem;
  background-color: #e8222e;

`
const PedidoAndamento = styled.p`
width: 16rem;
  height: 1.125rem;
  margin: 0 0 0.125rem 1.5rem;
  font-family: Montserrat;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #ffffff;
`
const Restaurante = styled.p`
 width: 16rem;
  height: 1.125rem;
  margin: 0.5rem 0 0.5rem 1.5rem;
  font-family: Montserrat;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: black;
`
const ValorCompra = styled.p`
 width: 16rem;
  height: 1.125rem;
  margin: 0.5rem 0 0 1.5rem;
  font-family: Montserrat;
  font-size: 1.2rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: black;
`
const Relogio = styled.img`
position: relative;
bottom: 3rem;
width: 2rem;
  height: 2rem;
  margin: 0.125rem 1.5rem 0 0;
  object-fit: contain;
`
const ContainerInfo = styled.div`
margin-left:2rem;
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;

`

export default function Pedido(){
    return(
        <MainContainer>

            <ContainerInfo>
            <PedidoAndamento>Pedido em andamento</PedidoAndamento>
            <Restaurante>Bullguer Vila Madalena</Restaurante>
            <ValorCompra>SUBTOTAL R$67,00</ValorCompra>
            </ContainerInfo>
           <Relogio src={relogio} />
        </MainContainer>
    )
}