import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import CardRestaurante from "../Components/CardRestaurante";
import Header from "../Components/Header";
import { GlobalContext } from "../Global/GlobalContext";
import useAutenticator from "../Hooks/useAutenticator";
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import CardPedido from "./components-carrinho/PedidoAprovado"
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import MenuBar from "../Components/MenuBar";
import { Button } from "@mui/material";


const MenuFiltros = styled.div`
    display: flex;
    flex-direction: row;
    overflow-y: scroll;
    gap: 15px;
    margin: 15px;
`

const ItemFiltro = styled.p`
    font-size: '1.5em';
    color: 'rgb(0,0,0)';
    transition: '150ms';
    &:focus {
        font-size: '1.3em';
        color: '#ff0000'
    }
`;

const Home = () => {
    useAutenticator()

    const {states, setters} = useContext(GlobalContext)
    const {token, restaurants, pedido} = states
    const {setRestaurants} = setters

    const [loading, setLoading] = useState(false)
    const [filtro, setFiltro] = useState([])
    const [filtroNome, setFiltroNome] = useState("")
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
    let filtroTexto 

    const restaurantes = () => { 

        const listaDeRestaurantes = restaurants.map(restaurante => restaurante.name.toLowerCase())
        filtroTexto = listaDeRestaurantes.filter((restaurante) => filtroNome ? restaurante.includes(filtroNome): true)

        if (!loading && restaurants && filtro && filtro.length > 0) {
            return (
            filtro
                .filter((restaurante) => filtroNome ? restaurante?.name.toLowerCase().includes(filtroNome.toLowerCase()): true)
                .map((restaurante) => {
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
            )
        } else if (!loading && restaurants && filtro && filtro.length === 0) {
            return(
            restaurants
                .filter((restaurante) => filtroNome ? restaurante?.name.toLowerCase().includes(filtroNome.toLowerCase()): true)
                .map((restaurante) => {

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
            )
        }  
        return filtroTexto

    }
    
    return (
        <div>
        <MenuBar/>
        <Box sx={{margin: '10px', borderBottom: '2px solid #88888876', padding: '5px' }}>
            <Typography sx={{fontSize: '1.3em', textAlign: 'center'}} id="spring-modal-title" variant="h1" component="h1" >Ifuture</Typography>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <FormControl>
                <Input sx={{width: '90vw', height: '50px', border: '2px solid #88888876'}}
                    type="search"
                    variant="filled"
                    value={filtroNome}
                    onChange={(event) => {setFiltroNome(event.target.value)}}
                    placeholder="Busca"
                    startAdornment={
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    }
                />
            </FormControl>
        </Box>
        <MenuFiltros>
            {
                !loading && restaurants && restaurants.map((menu) => {
                    return <Box key={menu.id}> 
                            <Button variant="text" sx={{color: '#c20000'}} onClick={() => {onClickFiltro(menu.category)} }>{ menu.category }</Button></Box>
                })
            }
        </MenuFiltros>

            {
                restaurantes()
            }
            {
                !loading && restaurants && filtro && filtroTexto.length === 0 && 
                <Box sx={{textAlign: 'center'}}>
                    <Typography>Não encontramos ¯\_(ツ)_/¯ </Typography>
                </Box> 
            }
            { pedido ? <CardPedido/> && <CardPedido/> : <div></div> && <div></div> }
        </div>
    )
}

export default Home;