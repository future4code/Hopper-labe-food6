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

  const [carrinho, setCarrinho] = useState([])
  const {states , setters } = useContext(GlobalContext)
 const {pedido} = states 
 const {setPedido} = setters

 const finalizarPedido = (novoPedido) =>{
    setPedido(...pedido,novoPedido )
    navigate("/Home")
 }
 
  const AtualizarCarrinho = (novoProduto, quantidade) => {
    const compraJaAdicionada = carrinho.find(compra => compra.id === novoProduto.id)
    if (compraJaAdicionada) {
      compraJaAdicionada.qtd = compraJaAdicionada.qtd + quantidade
    } else {
      const valorDaCompra = novoProduto.price * quantidade
      const compra = {
        id: novoProduto.id,
        nome: novoProduto.name,
        descricao: novoProduto.description,
        qtd: quantidade,
        valor: valorDaCompra.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
        imgUrl: novoProduto.photoUrl

      }

      carrinho.push(compra)
    }
    setCarrinho([...carrinho])
  }
  const removerCompraCarrinho = (idCompraARemover) => {
    const carrinhoAtualizado = carrinho.find(compras => compras.id === idCompraARemover)
    if (carrinhoAtualizado.qtd > 1) {
      carrinhoAtualizado.qtd = carrinhoAtualizado.qtd - 1
      setCarrinho([...carrinho])
    } else {

      const novoCarrinho = carrinho.filter(compras => compras.id !== idCompraARemover)




      setCarrinho(novoCarrinho)

    }


  }
  const compras = carrinho.map((produto) => {

    return <NovoProduto nome={produto.nome} descricao={produto.descricao} valor={produto.valor}
      qtd={produto.qtd} img={"https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031245_66194219.jpg"} remover={() => removerCompraCarrinho(produto.id)} />

  })

  const teste = () => {
    let compra = {
      id: 1,
      nome: "Burguer",
      descricao: "cane bovina com alface e queijo aaaaa",
      qtd: 3,
      valor: 30.00,
      imgUrl: ""
    }


    carrinho.push(compra)
    console.log(carrinho)
    setCarrinho([...carrinho])
  }
  const somaTotaldeCompras = (totalProdutos, frete) => {
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

  let totalDeCompras = somaTotaldeCompras(carrinho, 6.00)

  const navigate = useNavigate()
  return (

    <MainContainer>
      <button onClick={() => teste()} >teste</button>
      <ContainerCarrinho>

        <BarraDoTitulo>
          <Titulo> Carrinho</Titulo>
        </BarraDoTitulo>

        <Endereco>
          <Local>Endereço de entrega</Local>
          <RuaEntrega>Rua Alessandra Vieira, 42</RuaEntrega>
        </Endereco>
        {carrinho.length > 0 ? <div>
          <Restaurante>Bullguer Vila Madalena</Restaurante>

          <Rua>R. Fradique Coutinho, 1136 - Vila Madalena</Rua>
          <Tempo>30 - 40 min</Tempo>
        </div> : <CarrinhoVazio>Carrinho vazio</CarrinhoVazio>}


        <Card>
          {compras}

          <Frete>Frete R$ 6,00 </Frete>
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
          <BoxComprar>
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