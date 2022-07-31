import React, { useContext, useEffect, useState  } from "react";
import styled from "styled-components";
import NovoProduto from "./components-carrinho/CardProduto";
import { GlobalContext } from "../Global/GlobalContext";
import { BoxComprar, EscolhaDePagamento, Linha, Local, Endereco,  Restaurante, Titulo, BarraDoTitulo, ContainerCarrinho, Rua, Tempo, Card, RuaEntrega, Frete, SubTotal, Total, FormaPagamento, Valores, LineGrey, BarraIncon,CarrinhoVazio} from "./components-carrinho/styleCarrinho"
import {useNavigate} from "react-router-dom"
import AppBarComponent from "../Components/AppBarComponent";
import useAutenticator from "../Hooks/useAutenticator.jsx"

const MainContainer = styled.div`
height: 100vh;
width: 100vw ;
display:flex;
justify-content:center;
`
const Carrinho = () => {

    useAutenticator()

    const {states, setters } = useContext(GlobalContext)
    const {cart, usuario} = states 
    const {setPedido, setCart} = setters
    

    useEffect(() => {
        
        
    },[cart])

    const finalizarPedido = (novoPedido) =>{
    setPedido(novoPedido)
    navigate("/")
    }

    

    const removerCompraCarrinho = (id) => {
        let cartTemp = cart
        cartTemp.products.map((produto) => {
            if (produto.item.id === id && produto.quantity > 1 ) {
                produto.quantity = produto.quantity - 1
                console.log(produto.quantity);
                console.log(cartTemp);
                setCart(cartTemp)
            } 
        })
    }
  

  
    const somaTotaldeCompras = (totalProdutos) => {
        const frete = cart?.length > 0 ? cart[0].info.shipping : 0
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

    const navigate = useNavigate()
    console.log("cart:", cart);
    
    return (

        <MainContainer>       
        <ContainerCarrinho>
        <AppBarComponent nome={"Carrinho"}/> 
            <Endereco>
            <Local>Endereço de entrega</Local>
            <RuaEntrega> {usuario && usuario?.user?.address} </RuaEntrega>
            </Endereco>
            {
            cart.products.length > 0 ? 
                <div>
                    <Restaurante>  </Restaurante>
                    <Rua>  </Rua>
                    <Tempo> </Tempo>
                </div> : <CarrinhoVazio>Carrinho vazio</CarrinhoVazio>}


            <Card>
            {
                cart && cart?.products.map((produto) => {
                return (
                <NovoProduto key={produto.item.id} 
                nome={produto.item.name} 
                descricao={produto.item.description} 
                valor={produto.item.price}
                qtd={produto.quantity} 
                img={produto.item.photoUrl} 
                remover={() => removerCompraCarrinho(produto.item.id)}/>)

            })}

            <Frete>Frete  {cart.length > 0 ? cart[0].info.shipping.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) : "R$0,00"  } </Frete>
            <Valores>
                <SubTotal>SUBTOTAL</SubTotal>
                <Total>  </Total>
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
            </Card>

        </ContainerCarrinho>

            
        </MainContainer>

    )
}

export default Carrinho;