import React, { useEffect, useState } from 'react'
import RestauranteInfo from './components/RestauranteInfo'
import CardDeProdutos from './components/CardDeProdutos'
import axios from 'axios'

const Restaurante = () => {
	const [restaurante, setRestaurante] = useState(null)
	useEffect(() => {
		axios
			.get(
				'https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/restaurants/1',
				{
					headers: {
						auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImdaSGo0RVM3aW4zTkdSTEJKQWtUIiwibmFtZSI6InRlc3RlMSIsImVtYWlsIjoidGVzdDFAZ21haWwuY29tIiwiY3BmIjoiMjMyLjIyNi4yMTItMjIiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUi4gQWZvbnNvIEJyYXosIDE3NywgNzEgLSBWaWxhIE4uIENvbmNlacOnw6NvIiwiaWF0IjoxNjU4MDAxMzU0fQ.dWVp6E072aC6xB4T8N_fpakshHKnS6yp3So0z0OZLaI',
					},
				}
			)
			.then((response) => setRestaurante(response.data.restaurant))
	}, [])

	console.log(restaurante)
	return (
		<>
			<RestauranteInfo
				nome={restaurante?.name}
				endereco={restaurante?.address}
				frete={restaurante?.shipping}
				tempoDeEntrega={restaurante?.deliveryTime}
				categoria={restaurante?.category}
				imagem={restaurante?.logoUrl}
			/>
			{restaurante?.products?.map((produto) => (
				<CardDeProdutos produto={produto} />
			))}
		</>
	)
}

export default Restaurante
