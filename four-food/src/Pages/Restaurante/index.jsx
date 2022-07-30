import React, { useContext, useEffect, useState } from 'react'
import RestauranteInfo from './components/RestauranteInfo'
import CardDeProdutos from './components/CardDeProduto'
import axios from 'axios'
import Header from '../../Components/Header'
import { useParams } from 'react-router-dom'
import { Container } from './styles'

const Restaurante = () => {
	const { id } = useParams()
	const [restaurante, setRestaurante] = useState(null)
	const [prodId, setProdId] = useState("")
	const [open, setOpen] = useState(false);
    const handleOpen = (id) => {
		setOpen(true)
		setProdId(id)
	};
    const handleClose = () => setOpen(false);

	const param = useParams()
	const id = param.id

	useEffect(() => {
		axios
			.get(
				`https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/restaurants/${id}`,
				{
					headers: {
						auth: token
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
	
	const [form, onChange] = useForm({
		id: "",
		quantity: ""
	})

	const onClickAddProduto = (event) => {
		event.preventDefault()

		const pedido = {
			id: prodId,
			quantity: form.quantity
		}

		const pedidos = carrinho.products
		pedidos.push(pedido)

		setCarrinho({products: pedidos, paymentMethod: ""})
		console.log(carrinho);
		form.quantity = ""

		handleClose()
	}
	
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
					<CardDeProdutos produto={produto} />
				))}
			</Container>
		</>
	)
}

export default Restaurante
