import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../Global/GlobalContext";
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Paper from '@mui/material/Paper';

const ContainerInfo = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
margin-right: 60px;
`

export default function Pedido(){
const {states} = useContext(GlobalContext)
const {pedido} = states
    return(
        <Paper sx={{ 
          position: 'fixed', 
          bottom: '57px', 
          left: 0, 
          right: 0,
          width: '100%',
          height: '150px',
          backgroundColor: '#e8222e',
          overflow: 'hidden',          
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center' }} elevation={3}>
          <AccessTimeIcon sx={{ fontSize: 40 }}/>
          <ContainerInfo>
          <Typography sx={{color: 'white', textAlign: 'start'}}>Pedido em andamento</Typography>
          <Typography sx={{textAlign: 'start'}}>{pedido.restaurantName}</Typography>
          <Typography sx={{textAlign: 'start'}}>SUBTOTAL {pedido.totalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} </Typography>
          </ContainerInfo>
        </Paper>
    )
}