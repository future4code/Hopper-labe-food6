import React, { useContext } from "react";
import axios from 'axios';
import useForm from '../Hooks/useForm'
import { GlobalContext } from "../Global/GlobalContext";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png"
import { BoxTextField, ContainerSignIn, LogoSignin, SpamText, TextFields, ButtonSignIn, TextTitleSignIn, TitleSignIn} from "./Restaurante/StyledLogin";
import Box from '@mui/material/Box';




const Login = () => {

    const {states, setters} = useContext(GlobalContext)
    const {setUsuario, setToken} = setters
    const {token} = states

    const navigate = useNavigate()

    const onClick = (event) => {
        event.preventDefault()

        const url = "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/login"
        const body = form

        axios.post(url, body)
        .then((res) => {
            setUsuario(res.data)
            setToken(res.data.token)
            window.localStorage.setItem("token", res.data.token)
            console.log(res.data);
            navigate("/")
        }).catch((error) => {
            console.log(error);
        })
    }

    const [form, onChange] = useForm({
        email: "",
        password: ""}) 
    
    

    return (
        <>
        {/* <Header/> */}

        <ContainerSignIn>
            <LogoSignin src={Logo}/>

            <TitleSignIn>
                <TextTitleSignIn>Entrar</TextTitleSignIn> 
            </TitleSignIn>

        

        <Box component="form" onSubmit={onClick}
            sx={{
                '& .MuiTextField-root': { m: 1, width: '20.5rem' },
            }}
            noValidate
            autoComplete="off"
            >
      <BoxTextField>
        <TextFields
          required
          id="outlined-multiline-flexible"
          label="E-mail"
          defaultValue={form.email}
          placeholder="email@email.com"
          type="e-mail" 
          name="email" 
          onChange={onChange}
          fullWidth
        />

        <TextFields
          required
          id="outlined-required"
          label="Senha"
          defaultValue={form.password}
          placeholder="Mínino 6 caracteres"
          type="password" 
          name="password" 
          onChange={onChange}
          fullWidth
        />
        
        </BoxTextField>

        <ButtonSignIn variant="contained"disableElevation onClick={() => {navigate("/Home")}}>Entrar</ButtonSignIn>
        </Box>

       
        
        
        <SpamText onClick={() => {navigate("/Cadastro")}}>Não possui cadastro? Clique Aqui.</SpamText>

        
        </ContainerSignIn>




       </>
    )
}

export default Login;