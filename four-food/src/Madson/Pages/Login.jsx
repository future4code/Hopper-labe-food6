import React, { useContext } from "react";
import Header from "../Components/Header";
import axios from 'axios';
import useForm from '../Hooks/useForm'
import { GlobalContext } from "../Global/GlobalContext";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png"
import { AddressRest, AddressUser, ContainerSignIn, LogoSignin, TextFieldWrapper, TextTitleSignIn, TitleSignIn} from "./Restaurante/StyledLogin";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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

        </ContainerSignIn>

        <Box component="form" onSubmit={onClick}
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
      <div>
        <TextField
          required
          id="outlined-multiline-flexible"
          label="E-mail"
          defaultValue={form.email}
          placeholder="email@email.com"
          type="e-mail" 
          name="email" 
          onChange={onChange}
        />

        <TextField
          required
          id="outlined-required"
          label="Senha"
          defaultValue={form.password}
          placeholder="Senha"
          type="password" 
          name="password" 
          onChange={onChange}
        />
        
        </div>
            <button>Entrar</button>
        </Box>

        {/* <form > */}
            {/* <input
                placeholder="Email"
                type="e-mail" 
                name="email" 
                value={form.email}
                onChange={onChange}/> */}
            {/* <input 
                placeholder="Senha"
                type="password" 
                name="password" 
                value={form.password}
                onChange={onChange}/> <br/> */}

            

        {/* </form> */}
        <br/>
        
        <button onClick={() => {navigate("/Cadastro")}}>Cadastro</button>

        





       </>
    )
}

export default Login;