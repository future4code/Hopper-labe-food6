import React, { useContext, useEffect, useState } from 'react'
import Modal from 'react-modal'
import { GlobalContext } from '../../../../Global/GlobalContext'
import * as S from './styles'

Modal.setAppElement('#root')

const CardDeProdutos = ({ 
	produto, 
	frete,
	restaurante
}) => {
	const { states, setters } = useContext(GlobalContext)
	const handleAddToCart = (item, quantidade) => {
		event.preventDefault()
		const pedido = {
			item,
			quantity: Number(quantidade)
		}
		const pedidos = states.cart.products

		pedidos.push(pedido)
		console.log(states.cart);

		setters.setCart({restaurant: restaurante, shipping: frete, products: pedidos, paymentMethod: ""})
		setQuantity("")
		setOpen(false)
		
	}
	const id = produto.id
	const [open, setOpen] = useState(false)
	const handleOpen = () => {
		setOpen(true)
	};
	
	const [quantity, setQuantity] = useState("")

	return (
		<>
			<S.CardComidas>
				<S.ImgComidas src={produto.photoUrl} />

				<S.ComidaInfo>
					<S.NomeDoItem>{produto?.name}</S.NomeDoItem>
					<S.Descricao>{produto?.description}</S.Descricao>
					<S.Preco>R${produto?.price}</S.Preco>
					<S.BotaoAdicionar onClick={handleOpen}>Adicionar</S.BotaoAdicionar>
				</S.ComidaInfo>
			</S.CardComidas>
			<S.Modal isOpen={open}>
				<div class='modal-content'>
					<div className='modal-header'>
						<button onClick={() => setOpen(false)} className='close'>
							&times;
						</button>
					</div>
					<div className='modal-body'>
						<p>Selecione a quantidade desejada</p>
						<form onSubmit={() => handleAddToCart(produto, quantity)}>
							<input
								type='number'
								value={quantity}
								onChange={(event) => setQuantity(event.target.value)}
							/>
							<button>
								ADICIONAR AO CARRINHO
							</button>
						</form>
					</div>
				</div>
			</S.Modal>
		</>
	)
}

export default CardDeProdutos
