import React from "react";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";


const MenuBar = () => {
    const navigate = useNavigate()
    return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>    
        <Box sx={{ width: '100vw'}}>
            <BottomNavigation>
                <BottomNavigationAction onClick={() => {navigate('/')}} label="Home" icon={<HomeOutlinedIcon />} />
                <BottomNavigationAction onClick={() => {navigate('/Carrinho')}} label="Carrinho" icon={<ShoppingCartOutlinedIcon />} />
                <BottomNavigationAction onClick={() => {navigate('/Perfil')}} label="Perfil" icon={<PersonOutlineOutlinedIcon />} />
        </BottomNavigation>
        </Box>
    </Paper>    
    )
}
export default MenuBar;