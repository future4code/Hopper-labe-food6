import React from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import styled from "styled-components";

const NomeRestaurante = styled.p`
    margin: 0;
`


const CardRestaurante = (props) => {

    const navigate = useNavigate()

    const img = props.fotoUrl
    const nome = props.nome
    const entrega = props.tempoEntrega
    const frete = props.frete
    const id = props.id

    return (
        <Card sx={{ 
                display: 'flex', 
                flexDirection: 'column',
                borderRadius: '10px',
                margin: '10px'
                }} onClick={() => {navigate(`/Restaurante/${id}`)}}>
            <CardMedia
                component='img'
                sx={{maxHeight: '250px',
                width: '100%',
                display: 'flex'
                }}

				image={img}
				alt={nome}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ 
                    flex: '1 0 auto',
                    maxHeight: '30px'
                    }}>
                <Typography component='div'>
						<NomeRestaurante>{nome}</NomeRestaurante>
					</Typography>
                </CardContent>
                <CardContent sx={{ 
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    maxHeight: '30px'
                    }}>
                <Typography
						variant='subtitle1'
						color='text.secondary'
						component='div'
					>
						<NomeRestaurante>{entrega} - {entrega - 10}min</NomeRestaurante>
					</Typography>
                    <Typography component='div'>
						<NomeRestaurante>Frete: R${frete},00</NomeRestaurante>
					</Typography>
                </CardContent>
            </Box>
        </Card>
    )
}
export default CardRestaurante;
