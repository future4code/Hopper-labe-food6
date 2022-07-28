import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import styled from 'styled-components'

const RestauranteInfo = ({
	nome,
	endereco,
	categoria,
	frete,
	tempoDeEntrega,
	imagem,
}) => {
	const InfoEntrega = styled.div`
		.tempo-de-entrega {
			margin-right: 25px;
			height: 1.125rem;
			font-family: Roboto;
			font-size: 1rem;
			font-weight: normal;
			font-stretch: normal;
			font-style: normal;
			line-height: normal;
			letter-spacing: -0.39px;
			color: var(--greyish);
		}
	`

	return (
		<>
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia component='img' image={imagem} alt='restaurante Logo' />
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{nome}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						<p>{categoria}</p>
						<InfoEntrega>
							<span className='tempo-de-entrega'>{tempoDeEntrega} min</span>
							<span className='tempo-de-entrega'>Frete: R${frete}</span>
						</InfoEntrega>
						<p>{endereco}</p>
					</Typography>
				</CardContent>
			</Card>
		</>
	)
}

export default RestauranteInfo
