import React, { useContext, useEffect, useState } from 'react'
import RestauranteInfo from './components/RestauranteInfo'
import CardDeProdutos from './components/CardDeProdutos'
import axios from 'axios'
import Header from '../../Components/Header'
import { GlobalContext } from "../../Global/GlobalContext";
import { useParams } from 'react-router-dom'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import useForm from '../../Hooks/useForm';
import FormControl from '@mui/material/FormControl';


const Restaurante = () => {

	const {states, setters} = useContext(GlobalContext)
	const {token, carrinho} = states
	const {setCarrinho} = setters

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
		axios.get(`https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/restaurants/${id}`,
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
			<Header/>
			<Modal
				aria-labelledby="spring-modal-title"
				aria-describedby="spring-modal-description"
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
				timeout: 500,
        	}}>
				<Box sx={style}>
					<Typography sx={{fontSize: '1.2em', textAlign: 'center'}} id="spring-modal-title" variant="h6" component="h6">
						Quantidade desejada
					</Typography>
					<FormControl>
						<Input required={true} sx={{width: '300px', height: '50px'}} 
							type='number'
							name='quantity'
							value={form.quantity}
							onChange={onChange}
							/>
						<Button onClick={onClickAddProduto}>
							<Typography>
								Adicionar ao Carrinho
							</Typography>
						</Button>
					</FormControl>
				</Box>
      		</Modal>
			
			<RestauranteInfo
				nome={restaurante?.name}
				endereco={restaurante?.address}
				frete={restaurante?.shipping}
				tempoDeEntrega={restaurante?.deliveryTime}
				categoria={restaurante?.category}
				imagem={restaurante?.logoUrl}
			/>
			{
				restaurante?.products?.map((produto) => {
					return <CardDeProdutos 
						onClick={handleOpen} 
						produto={produto} />
				})
			}
		</>
	)
}

export default Restaurante
