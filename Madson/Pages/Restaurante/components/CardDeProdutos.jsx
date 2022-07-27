import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

const CardDeProdutos = ({ produto, onClick }) => {
	return (
			<Card onClick={() => {onClick(produto.id)}} sx={{ display: 'flex' }}>
			<CardMedia
				component='img'
				sx={{ width: 151 }}
				image={produto?.photoUrl}
				alt='Foto do Produto'
			/>
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				<CardContent sx={{ flex: '1 0 auto' }}>
					<Typography component='div' variant='h5'>
						<p>{produto?.name}</p>
					</Typography>

					<Typography
						variant='subtitle1'
						color='text.secondary'
						component='div'
					>
						<p>{produto?.description}</p>
					</Typography>
					<Typography component='div' variant='h5'>
						<p>{produto && produto?.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
					</Typography>
				</CardContent>
				<Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}></Box>
			</Box>
		</Card>
	)
}

export default CardDeProdutos
