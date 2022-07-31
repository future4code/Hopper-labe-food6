import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import CardRestaurante from "../Components/CardRestaurante";
import Header from "../Components/Header";
import { GlobalContext } from "../Global/GlobalContext";
import useAutenticator from "../Hooks/useAutenticator";
import styled from "styled-components";
import Input from '@mui/material/Input';
import CardPedido from "./components-carrinho/PedidoAprovado"


const MenuFiltros = styled.div`
    display: flex;
    flex-direction: row;
    overflow-y: scroll;
    gap: 15px;
`

const Home = () => {
    useAutenticator()

    const {states, setters} = useContext(GlobalContext)
    const {token, restaurants, pedido} = states
    const {setRestaurants} = setters

    const [loading, setLoading] = useState(false)
    const [filtro, setFiltro] = useState([])
    const [categoria, setCategoria] = useState("")

    useEffect(() => {
        
        const url = "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/restaurants"
        const header = {
            headers: {
                auth: token
            }
        }
        axios.get(url, header)
        .then((res) => {
            setRestaurants(res.data.restaurants)
            console.log(res.data.restaurants);
            setLoading(false)
        }).catch((err) => {
            console.log(err);
        })
    },[])

    const onClickFiltro = (cat) => {
        const restaurantesFiltrados = restaurants.filter(restaurante => restaurante.category === cat)
        
        if (filtro.length === 0) {
            setFiltro(restaurantesFiltrados)
            setCategoria(cat)
        } else if (filtro.length > 0 && cat !== categoria ) {
            setFiltro(restaurantesFiltrados)
            setCategoria(cat)
        } else if (filtro.length > 0 && cat === categoria ) {
            setFiltro([])
        } 

    }
    
    return (
        <div>
        <Header/>
        <h1>Home</h1>
        <form><input 
            type="text"
            placeholder="Busca"
            /></form>
        <MenuFiltros>
            {
                !loading && restaurants && restaurants.map((menu) => {
                    return <p key={menu.id} onClick={() => {onClickFiltro(menu.category)} }>{ menu.category }</p>
                })
            }
        </MenuFiltros>
            { 
                !loading && restaurants && filtro && filtro.length > 0 && filtro.map((restaurante) => {
                    return (
                        <CardRestaurante key={restaurante.id}
                        nome={restaurante.name}
                        fotoUrl={restaurante.logoUrl}
                        tempoEntrega={restaurante.deliveryTime}
                        frete={restaurante.shipping}
                        id={restaurante.id}
                        />
                    )

                }) 
            }

            {
                !loading && restaurants && filtro && filtro.length === 0 && restaurants.map((restaurante) => {

                    return (
                        <CardRestaurante key={restaurante.id}
                        nome={restaurante.name}
                        fotoUrl={restaurante.logoUrl}
                        tempoEntrega={restaurante.deliveryTime}
                        frete={restaurante.shipping}
                        id={restaurante.id}
                        />
                    )
                    })
            }
            { pedido ? <CardPedido/> && <CardPedido/> : <div></div> && <div></div> }
        </div>
    )
}

export default Home;