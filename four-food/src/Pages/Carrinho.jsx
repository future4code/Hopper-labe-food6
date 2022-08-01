import React, { useContext, useEffect, useState  } from "react";
import styled from "styled-components";
import NovoProduto from "./components-carrinho/CardProduto";
import { GlobalContext } from "../Global/GlobalContext";
import { BoxComprar, EscolhaDePagamento, Linha, Local, Endereco,  Restaurante, ContainerCarrinho, Rua, Tempo, Card, RuaEntrega, Frete, SubTotal, Total, FormaPagamento, Valores, LineGrey, CarrinhoVazio} from "./components-carrinho/styleCarrinho"
import {useNavigate} from "react-router-dom"
import AppBarComponent from "../Components/AppBarComponent";
import useAutenticator from "../Hooks/useAutenticator.jsx"
import axios from "axios";
import useForm from "../Hooks/useForm";
import MenuBar from "../Components/MenuBar";

const MainContainer = styled.div`
width: 100vw ;
display:flex;
justify-content:center;
`
const Carrinho = () => {

    useAutenticator()

    const {states, setters } = useContext(GlobalContext)
    const {cart, usuario, token} = states 
    const {setCart} = setters

    const [remove, setRemove] = useState(false)

    useEffect(() => {
        const header = {
			headers: {
				auth: token,
			},
		}
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/profile',
            header)
			.then((res) => {
                itensCarrinho()
            })
			.catch((err) => {
				console.log(err)
			})
    },[remove])

    const finalizarPedido = () =>{
        const products = cart?.products.map((produto) => {
            return {id: produto.item.id, 
                quantity: produto.quantity}
        })
        const header = {
			headers: {
				auth: token,
			}
		}

        const paymetMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

        const body = {
            products: products, 
            paymentMethod: paymetMethod
        }


        axios.post(`https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/restaurants/${cart.restaurant.id}/order`, body, header )
        .then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })

        setCart({
            restaurant: {},
            shipping: 0,
            products: [],
            paymentMethod: ""
        })

        navigate('/')
    }

    const itensCarrinho = () => {
        if (cart && cart.products.length > 0){
            return (
                cart.products
                    .map((produto) => {
                        return (
                            <NovoProduto key={produto.item.id} 
                            nome={produto.item.name} 
                            descricao={produto.item.description} 
                            valor={produto.item.price}
                            qtd={produto.quantity} 
                            img={produto.item.photoUrl} 
                            remover={() => removerCompraCarrinho(produto.item.id)}/>)
                }))
    }}
        
    let cartTemp = cart
    
    const removerCompraCarrinho = (id) => {
        cartTemp.products.map((produto) => {
            if (produto.item.id === id && produto.quantity > 1 ) {
                produto.quantity = produto.quantity - 1
                console.log(produto.quantity);
                console.log("listaNova:", cartTemp);
            } else if (produto.item.id === id && produto.quantity <= 1) {
                cartTemp.products.splice(cartTemp.products.indexOf(produto), 1)
            }
            setCart(cartTemp)
            setRemove(!remove)
        })
        
    }
  

  
    const somaTotaldeCompras = () => {
        const frete = cart?.products.length > 0 ? cart.shipping : 0
        let valorProduto = cart?.products.map((produto) => {
        return produto.quantity * produto.item.price
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
    
    const [form, onChange] = useForm({
        paymentMethod: ""
    })
    
    return (

        <MainContainer>
        <MenuBar/>
        <ContainerCarrinho>
        <AppBarComponent nome={"Carrinho"}/>
        <Endereco>
        <Local>Endereço de entrega</Local>
        <RuaEntrega> {usuario && usuario?.user?.address} </RuaEntrega>
        </Endereco>
            {
            cart.products.length > 0 ? 
                <div>
                    <Restaurante> {cart.restaurant.name} </Restaurante>
                    <Rua> {cart.restaurant.address} </Rua>
                    <Tempo> {cart.restaurant.deliveryTime-10}-{cart.restaurant.deliveryTime} min.</Tempo>
                </div> : <CarrinhoVazio>Carrinho vazio</CarrinhoVazio>}


            <Card>
            {
                itensCarrinho()
            }
            <Frete>Frete  {cart?.shipping ? cart.shipping.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) : "R$0,00"  } </Frete>
            <Valores>
                <SubTotal>SUBTOTAL</SubTotal>
                <Total> {somaTotaldeCompras()} </Total>
            </Valores>
            <FormaPagamento>Forma de pagamento</FormaPagamento>
            <Linha>________________________________________</Linha>
            <EscolhaDePagamento name="Forma de pagamento" method="GET">
                <input type="radio" name="paymentMethod" value="money" onChange={onChange}/>Dinheiro <br />
                <input type="radio" name="paymentMethod" value="creditcard" onChange={onChange} />Cartão de Credito
            </EscolhaDePagamento>
            <BoxComprar onClick={()=> {finalizarPedido()}} >
                <p>Comfirmar</p>
            </BoxComprar>
            <LineGrey>_________________________________________________</LineGrey>
            </Card>

        </ContainerCarrinho>

            
        </MainContainer>

    )
}

export default Carrinho;