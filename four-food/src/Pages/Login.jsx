import React, { useContext, useState } from "react";
import axios from 'axios';
import useForm from '../Hooks/useForm'
import { GlobalContext } from "../Global/GlobalContext";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png"
import { BoxTextField, ContainerSignIn, LogoSignin, SpamText, TextFields, ButtonSignIn, TextTitleSignIn, TitleSignIn} from "./Restaurante/StyledLogin";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const Login = () => {

  const {setters} = useContext(GlobalContext)
  const {setUsuario, setToken} = setters

  const navigate = useNavigate()

  const onClick = () => {
    const url = "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/login"
    const body = form

    axios.post(url, body)
      .then((res) => {
        setUsuario(res.data)
        setToken(res.data.token)
        console.log(res.data.token);
        window.localStorage.setItem("token", res.data.token)
        console.log(res.data);
        navigate("/")
      }).catch((error) => {
        console.log(error);
      })
    }

  const [form, onChange] = useForm({
    email: "",
    password: ""
  }) 
    
  return (
    <>
      <ContainerSignIn>
        <LogoSignin src={Logo}/>
        <TitleSignIn>
          <TextTitleSignIn>Entrar</TextTitleSignIn> 
        </TitleSignIn>
      <Box sx={{'& .MuiTextField-root': { m: 1, width: '20.5rem' }}}
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

      <FormControl sx={{ m: 1, width: "20.5rem" }} variant="outlined">
        <InputLabel htmlFor="campoSenha">
          Senha
        </InputLabel>
        <OutlinedInput
          id="campoSenha"
          type="password"
          value={form.password}
          placeholder="Mínino 6 caracteres"
          onChange={onChange}
          name="password" 
          label="Mínino 6 caracteres"
        />
      </FormControl>
        
      </BoxTextField>

        <ButtonSignIn variant="contained"disableElevation onClick={() => {onClick()}}>Entrar</ButtonSignIn>
        </Box>
        <SpamText onClick={() => {navigate("/Cadastro")}}>Não possui cadastro? Clique Aqui.</SpamText>        
        </ContainerSignIn>
       </>
    )
}

export default Login;