import React, { useContext } from "react";
import Header from "../Components/Header";
import axios from 'axios';
import useForm from '../Hooks/useForm'
import { GlobalContext } from "../Global/GlobalContext";
import { useNavigate } from "react-router-dom";

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
        <div>
        <Header/>

        <h2>Entrar</h2>
        <form onSubmit={onClick}>
            <input 
                placeholder="Email"
                type="e-mail" 
                name="email" 
                value={form.email}
                onChange={onChange}/>
            <input 
                placeholder="Senha"
                type="password" 
                name="password" 
                value={form.password}
                onChange={onChange}/>

            <button>Entrar</button>

        </form>
        <br/>
        
        <button onClick={() => {navigate("/Cadastro")}}>Cadastro</button>
        </div>
    )
}

export default Login;