import React from "react";
import styled from "styled-components";

export const ContainerCarrinho = styled.div`
width: 24.5rem;
height: 55.813rem;
//border:solid 1px;
`
export const BarraDoTitulo = styled.div`
display:flex;
justify-content:center;
    width: 22.5rem;
  height: 4rem;
  margin: 0 0 0.063rem;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  background-color: #fff;
`
export const Titulo = styled.p`

    width: 5.688rem;
  height: 1.188rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: black;
`
 export const Restaurante = styled.div`
  width: 20.5rem;
  height: 1.125rem;
  margin: 1rem 1rem 0.5rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #e8222e;
`
 export const Endereco = styled.div`
     width: 22.5rem;
  height: 3.75rem;
  margin: 0.063rem 0 1rem;
  padding: 1rem;
  background-color: #eee;
`
 export const Local = styled.p`
    width: 20.5rem;
  height: 1.125rem;
  margin: 0 0 0.5rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`
export const Rua = styled.p`
 width: 20.5rem;
  height: 1.125rem;
  margin: 0.5rem 1rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;

`
 export const Tempo = styled.p`
    width: 20.5rem;
  height: 1.125rem;
  margin: 0.5rem 1rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`

export const Card = styled.div`

width: 22.5rem;
  height: 7.5rem;
  margin: 0.5rem 0 0;
  padding: 0.5rem 1rem 0;
`
export const RuaEntrega = styled.p`
  width: 20.5rem;
  height: 1.125rem;
  margin: 0.5rem 0 0;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: black;
`

 export const Frete = styled.p`
position: relative;
left:10rem;
  width: 6.5rem;
  height: 1.125rem;
  margin: 1rem 1rem 0.813rem 3.75rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: right;
  color: black;

`
 export const SubTotal = styled.p`
   width: 10.25rem;
  height: 1.125rem;
  margin: 0.938rem 0 1.563rem 1rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: black;
`
export const Total = styled.p`
position: relative;
right:1rem;
  width: 10.25rem;
  height: 1.313rem;
  margin: 0.81rem 1rem 1.5rem 0;
  font-family: Roboto;
  font-size: 1.125rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.43px;
  text-align: right;
  color: #e8222e;

`
 export const FormaPagamento = styled.p`
position: relative;
bottom:1rem;
   width: 20.5rem;
  height: 1.125rem;
  margin: 1.5rem 1rem 0.5rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: black;
`
 export const Valores = styled.div`
  display:flex;
`
 export const Linha = styled.p`
position: relative;
bottom:2rem;
   width: 20.5rem;
  height: 0.063rem;
  margin: 0.5rem 1rem;
  
`
  
 export const EscolhaDePagamento = styled.form`
 position: relative;
 top: 0.1rem;
 width: 30.5rem;
  height: 1.125rem;
  //margin: 0.688rem 1rem 0.688rem 0.5rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: black;
 input{
  position: relative;
  top:0.2rem;
  margin: 0 0.5rem 0 1.8rem;
  width:1.1rem;
  height:1.1rem;
   }

`
 export const BoxComprar = styled.div`
 cursor: pointer;
display:flex;
justify-content:center;
position: relative;
;
top:4rem;
width: 20.5rem;
height: 1.625rem;
padding: 0.75rem 1rem;
border-radius: 2px;
background-color: #e8222e;
p{
  position: relative;
  bottom:0.7rem;
  width: 18.5rem;
  height: 1.125rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: black;
}

`
 export const LineGrey = styled.p`
  color:#b8b8b8;
  position: relative;
  top: 3.5rem;
  right:1rem;
`
export const CarrinhoVazio = styled.p`
width: 18.5rem;
  height: 1.125rem;
  opacity: 0.89;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: black;

`