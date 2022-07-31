import React, { useContext, useEffect, useState } from 'react'
import RestauranteInfo from './components/RestauranteInfo/index'
import CardDeProdutos from './components/CardDeProduto/index'
import axios from 'axios'
import Header from '../../Components/Header'
import { useParams } from 'react-router-dom'
import { Container } from './styles'
import useForm from '../../Hooks/useForm'
import { GlobalContext } from '../../Global/GlobalContext'

const Restaurante = () => {
	const { id } = useParams()
	const [restaurante, setRestaurante] = useState(null)
	const {states} = useContext(GlobalContext)

	useEffect(() => {
		axios
			.get(
				`https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/restaurants/${id}`,
				{
					headers: {
						auth: states.token
					},
				}
			)
			.then((response) => {
				setRestaurante(response.data.restaurant)
				console.log(response.data.restaurant);
			}).catch((err) => {
				console.log(err);
			})
	}, [])

	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: '80vw',
		bgcolor: 'background.paper',
		border: '2px solid #6e0202',
		borderRadius: '10px',
		boxShadow: 24,
		p: 4,
		textAlign: 'center',
	};
	
	return (
		<>
			<Header />
			<Container>
				<RestauranteInfo
					nome={restaurante?.name}
					endereco={restaurante?.address}
					frete={restaurante?.shipping}
					tempoDeEntrega={restaurante?.deliveryTime}
					categoria={restaurante?.category}
					imagem={restaurante?.logoUrl}
				/>
				{restaurante?.products?.map((produto) => (
					<CardDeProdutos produto={produto}/>
				))}
			</Container>
		</>
	)
}

export default Restaurante
