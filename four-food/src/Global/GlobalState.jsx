import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { GlobalContext } from './GlobalContext'

export const GlobalState = (props) => {
	const [usuario, setUsuario] = useState({})
	const [token, setToken] = useState('')
	const [restaurants, setRestaurants] = useState([])
	const [cart, setCart] = useState([])
	const [carrinho , setCarrinho] = useState([])
	const [pedido , setPedido] = useState("")
	const states = { usuario, token, restaurants, cart , carrinho, pedido }

	const setters = { setUsuario, setToken, setRestaurants, setCart, setCarrinho, setPedido }

	useEffect(() => {
		const header = {
			headers: {
				auth: token,
			},
		}
		token &&
			axios
				.get(
					'https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/profile',
					header
				)
				.then((res) => {})
				.catch((err) => {
					console.log(err)
				})
	}, [token])

	return (
		<GlobalContext.Provider value={{ states, setters }}>
			{props.children}
		</GlobalContext.Provider>
	)
}
