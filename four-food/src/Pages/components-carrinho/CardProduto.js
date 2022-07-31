import React from "react";
import styled from "styled-components";


const Produto = styled.div`
display:flex;
width: 20.5rem;
  height: 7rem;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  margin-bottom:1rem;
  overflow:hidden;
`
const Qtd = styled.div`

position: relative;
left:12.1902rem;
    width: 2.063rem;
  height: 2.063rem;
  margin: 0 2.068rem 0 0;
  padding:1px;
  border-radius:0 8px 0 8px;
  border: solid 1px #e8222e;
  
p{
  position: relative;
  bottom:0.5rem;
   // width: 0.563rem;
  //height: 1.188rem;
  
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: #e8222e;
}
`
const NomeProduto = styled.p`
    width: 10.438rem;
  height: 1.125rem;
  margin: 1.125rem 1rem 0.5rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #e8222e;
`
const MolduraImg = styled.div`
align-items:center;
display:flex;
justify-content:center;
overflow:hidden;
padding-left:1rem;


`
const ImgProtudo = styled.img`

   width: 13.3rem;
  height:7rem;
  margin: 0 1rem 0 0;
  object-fit: contain;
  border-radius: 8px 0 0 8px;

`
const Descricao = styled.p`
  width: 12.5rem;
  height: 1.875rem;
  margin: 0.5rem 1rem 0.25rem;
  font-family: Roboto;
  font-size: 0.75rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #b8b8b8;
`
const Valor = styled.p`
  width: 7.375rem;
  height: 1.188rem;
  margin: 0.25rem 0.5rem 0.938rem 1rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: black;
`
const Remover = styled.div`
cursor: pointer;
position: relative;
left:7.2rem;
bottom:4.35rem;
  width: 4.625rem;
  height: 1.7rem;
  margin: 0.438rem 0 0 0.5rem;
  padding: 0.1rem 1rem 0.1rem 1rem;
  border-radius: 8px 0px 8px 0px;
  border: solid 1px #e02020;
  p{
    position: relative;
    left: 1rem;
    bottom:0.4rem;
    width: 2.688rem;
  height: 0.875rem;
  font-family: Roboto;
  font-size: 0.75rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  text-align: center;
  color: #e02020;
  }

`
const DescricaoCompra = styled.div`
  position: relative;
  bottom:2rem;
  
  
`




export default function produto(props) {

    return(
      <Produto>
        <MolduraImg>
        <ImgProtudo src={props.img} />
        </MolduraImg>
         

<div>
  <Qtd>
    <p>{props.qtd}</p>
  </Qtd>
  <DescricaoCompra>
    <NomeProduto>{props.nome}</NomeProduto>
    <Descricao>{props.descricao}</Descricao>
    <Valor> {props.valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }</Valor>
  </DescricaoCompra>

  <Remover onClick={props.remover} >
    <p>remover</p>
  </Remover>

</div>
      </Produto>
    )
       
}