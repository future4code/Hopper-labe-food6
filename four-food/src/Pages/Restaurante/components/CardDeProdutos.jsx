import React, { useContext, useEffect, useState } from 'react'
import Modal from 'react-modal'
import { GlobalContext } from '../../../Global/GlobalContext'
import styled from 'styled-components'

const StyledModal = styled(Modal)`
	.Overlay {
		background-color: #000000;
	}
	width: 20.5rem;
	height: 13.5rem;
	margin: 1.688rem 1rem 1.813rem;
	padding: 0.688rem 0 4.25rem;
	background-color: #fff;
`
Modal.setAppElement('#root')

const CardDeProdutos = ({ produto, novoRestaurante }) => {
	const { states, setters } = useContext(GlobalContext)
	const {carrinho} = states
	const {setCarrinho} = setters
	const AtualizarCarrinho = (novoProduto, quantidade) => {
		const compraJaAdicionada = carrinho.find(compra => compra.id === novoProduto.id)
		if (compraJaAdicionada) {
			const novaQtd = compraJaAdicionada.qtd + quantidade
		  compraJaAdicionada.qtd = novaQtd
		 compraJaAdicionada.valor = novaQtd * novoProduto.price
		 
		} else {
		  
		  const compra = {
			id: novoProduto.id,
			valorUnitario : novoProduto.price,
			nome: novoProduto.name,
			descricao: novoProduto.description,
			qtd: quantidade,
			valor: novoProduto.price * quantidade,
			imgUrl: novoProduto.photoUrl,
			info : novoRestaurante
			
		  }
	
		  carrinho.push(compra)
		}
		setCarrinho([...carrinho])
		setOpen(false)
		setQuantity(1)
	  }
	
	/*const handleAddToCart = (item, quantidade) => {
		setters.setCart((prevState) => [
			...prevState,
			{
				...item,
				quantity: quantidade,
			},
		])
		setQuantity(0)
		setOpen(false)
	}*/
	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)
	const [quantity, setQuantity] = useState(1)
	useEffect(() => {
		console.log(states.cart)
	}, [states])

	return (
		<div>
			<div>
				<img src={produto.photoUrl} />
			</div>
			<span>
				<p>{produto?.name}</p>
			</span>

			<span>
				<p>{produto?.description}</p>
			</span>
			<button onClick={handleOpen}>adicionar</button>

			<span>
				<p>R${produto?.price}</p>
			</span>

			<StyledModal
				isOpen={open}
				onRequestClose={handleClose}
				contentLabel='Modal de Adição'
			>
				<p>Selecione a quantidade desejada</p>
				<input
					type='number'
					value={quantity}
					onChange={(event) => setQuantity(event.target.value)}
				/>
				<button onClick={() => AtualizarCarrinho(produto, quantity)}>
					ADICIONAR AO CARRINHO
				</button>
			</StyledModal>
		</div>
	)
}

export default CardDeProdutos
