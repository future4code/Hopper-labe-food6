import React, { useContext, useEffect } from "react";
import useAutenticator from "../Hooks/useAutenticator"
import MenuBar from "../Components/MenuBar"
import AppBarComponent from "../Components/AppBarComponent";
import { GlobalContext } from "../Global/GlobalContext";
import Typography from '@mui/material/Typography';
import { Box, List, ListItem } from "@mui/material";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const Perfil = () => {
    useAutenticator()
    const {states, setters} = useContext(GlobalContext)
    const {usuario} = states

    console.log(usuario);
    return (
        <div>
            <MenuBar/>
            <AppBarComponent nome={"Perfil"}/>
            <Box sx={{display: 'flex', 
                flexDirection: 'row', 
                justifyContent: 'space-between', 
                padding: '20px', 
                paddingLeft: '10px',
                paddingBottom: 0
                }}>
                <List>
                    <ListItem sx={{paddingTop: 0}}>
                        <Typography>{usuario && usuario?.user?.name}</Typography>
                    </ListItem>
                    <ListItem sx={{paddingTop: 0}}>
                        <Typography>{usuario && usuario?.user?.email}</Typography>
                    </ListItem>
                    <ListItem sx={{paddingTop: 0}}>
                        <Typography>{usuario && usuario?.user?.cpf}</Typography>
                    </ListItem>
                </List>
                <EditOutlinedIcon sx={{fontSize: '30px'}}/>
            </Box>
            <Box sx={{display: 'flex', 
                flexDirection: 'row', 
                justifyContent: 'space-between', 
                padding: '20px', 
                paddingLeft: '10px', 
                backgroundColor: '#eeeeee',
                height: '90px',
                paddingBottom: 0, 
                paddingTop: 0
                }}>
                <List>
                    <ListItem sx={{paddingTop: 0}}>
                        <Typography sx={{color: '#c5c5c5'}}>Endereço cadastrado</Typography>
                    </ListItem>
                    <ListItem sx={{paddingTop: 0}}>
                        <Typography>{usuario && usuario?.user?.address}</Typography>
                    </ListItem>
                </List>
                <Box sx={{display: 'flex', 
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <EditOutlinedIcon sx={{fontSize: '30px'}}/>
                </Box>
            </Box>
            <Box sx={{borderBottom: '2px solid #000000', padding: '20px', paddingBottom: '5px' }}>
                <Typography sx={{fontSize: '1.1em'}}>Histórico de pedidos.</Typography>
            </Box>

        
        </div>
    )
}

export default Perfil;