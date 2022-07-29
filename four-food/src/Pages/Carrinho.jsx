import React, { useContext, useState  } from "react";
import styled from "styled-components";
import imgHome from "../img/home.png"
import imgCarrinho from "../img/carrinho.png"
import imgPerfil from "../img/perfil.png"
import NovoProduto from "./components-carrinho/CardProduto";
import { GlobalContext } from "../Global/GlobalContext";
import { BoxComprar, EscolhaDePagamento, Linha, Local, Endereco,  Restaurante, Titulo, BarraDoTitulo, ContainerCarrinho, Rua, Tempo, Card, RuaEntrega, Frete, SubTotal, Total, FormaPagamento, Valores, LineGrey, BarraIncon,CarrinhoVazio} from "./components-carrinho/styleCarrinho"
import {useNavigate} from "react-router-dom"

const MainContainer = styled.div`
height: 100vh;
width: 100vw ;
display:flex;
justify-content:center;



`


const Carrinho = () => {

  
  const {states , setters } = useContext(GlobalContext)
 const { carrinho , usuario } = states 
 const {setPedido , setCarrinho} = setters

 const finalizarPedido = (novoPedido) =>{
    setPedido(novoPedido)
    navigate("/")
 }
 const infoUsuario = usuario.user.address
 
  
  
  const removerCompraCarrinho = (idCompraARemover) => {
    const carrinhoAtualizado = carrinho.find(compras => compras.id === idCompraARemover)
    if (carrinhoAtualizado.qtd > 1) {
      carrinhoAtualizado.qtd = carrinhoAtualizado.qtd - 1
      carrinhoAtualizado.valor = carrinhoAtualizado.qtd * carrinhoAtualizado.valorUnitario
      setCarrinho([...carrinho])
      
    } else {

      const novoCarrinho = carrinho.filter(compras => compras.id !== idCompraARemover)



        
      setCarrinho(novoCarrinho)
      setPedido("")
    }


  }
  

  
  const somaTotaldeCompras = (totalProdutos) => {
    const frete = carrinho.length > 0 ? carrinho[0].info.shipping : 0
    let valorProduto = totalProdutos.map((novoValor) => {
      return novoValor.valor
    })
    let soma = valorProduto.reduce((primeroValor, segundoValor) => primeroValor + segundoValor, 0)
    let total = soma + frete
    if (soma > 0) {
      return total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    } else {
      return "R$ 0,00"
    }

  }

  let totalDeCompras = somaTotaldeCompras(carrinho)
  const compras = carrinho.map((produto) => {

    return <NovoProduto nome={produto.nome} descricao={produto.descricao} valor={produto.valor}
      qtd={produto.qtd} img={produto.imgUrl} remover={() => removerCompraCarrinho(produto.id)} />

  })
  const navigate = useNavigate()
  return (

    <MainContainer>
      
      <ContainerCarrinho>

        <BarraDoTitulo>
          <Titulo> Carrinho</Titulo>
        </BarraDoTitulo>

        <Endereco>
          <Local>Endereço de entrega</Local>
          <RuaEntrega> {infoUsuario} </RuaEntrega>
        </Endereco>
        {carrinho.length > 0 ? <div>
          <Restaurante>{carrinho[0].info.name ? carrinho[0].info.name : <p></p> } </Restaurante>

          <Rua>{carrinho[0].info.address ? carrinho[0].info.address : <p></p> } </Rua>
          <Tempo>30 - {carrinho[0].info.deliveryTime? carrinho[0].info.deliveryTime: <p></p> } </Tempo>
        </div> : <CarrinhoVazio>Carrinho vazio</CarrinhoVazio>}


        <Card>
          {compras}

          <Frete>Frete  {carrinho.length > 0 ? carrinho[0].info.shipping.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) : "R$0,00"  } </Frete>
          <Valores>
            <SubTotal>SUBTOTAL</SubTotal>
            <Total> {totalDeCompras} </Total>
          </Valores>
          <FormaPagamento>Forma de pagamento</FormaPagamento>
          <Linha>________________________________________</Linha>
          <EscolhaDePagamento name="Forma de pagamento" method="GET">
            <input type="radio" name="pagamento" value="Din" />Dinheiro <br />
            <input type="radio" name="pagamento" value="Card" />Cartão de Credito
          </EscolhaDePagamento>
          <BoxComprar onClick={()=>finalizarPedido(totalDeCompras)} >
            <p>Comfirmar</p>
          </BoxComprar>
          <LineGrey>_________________________________________________</LineGrey>
          <BarraIncon>
            <img onClick={()=> navigate("/")} src={imgHome} />
            <img onClick={()=> navigate("/Carrinho")} src={imgCarrinho} />
            <img onClick={()=>navigate("/Perfil") } src={imgPerfil} />
          </BarraIncon>
        </Card>

      </ContainerCarrinho>

          
    </MainContainer>

  )
}

export default Carrinho;