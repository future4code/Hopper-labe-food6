import React, { useContext, useEffect, useState } from 'react'
import Modal from 'react-modal'
import { GlobalContext } from '../../../../Global/GlobalContext'
import * as S from './styles'

Modal.setAppElement('#root')

const CardDeProdutos = ({ produto }) => {
	const { states, setters } = useContext(GlobalContext)
	const handleAddToCart = (item, quantidade) => {
		if (quantidade > 0) {
			setters.setCart((prevState) => [
				...prevState,
				{
					...item,
					quantity: quantidade,
				},
			])

			setQuantity(0)
			setOpen(false)
		}
	}
	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)
	const [quantity, setQuantity] = useState(0)
	useEffect(() => {
		console.log(states.cart)
	}, [states])

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
						<input
							type='number'
							value={quantity}
							onChange={(event) => setQuantity(event.target.value)}
						/>
						<button onClick={() => handleAddToCart(produto, quantity)}>
							ADICIONAR AO CARRINHO
						</button>
					</div>
				</div>
			</S.Modal>
		</>
	)
}

export default CardDeProdutos
