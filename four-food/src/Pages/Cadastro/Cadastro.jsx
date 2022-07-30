import React, { useContext } from "react";
import Header from "../../Components/Header";
import axios from 'axios';
import useForm from '../../Hooks/useForm'
import { GlobalContext } from "../../Global/GlobalContext";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {

    const {setters} = useContext(GlobalContext)
    const {setUsuario, setToken} = setters

    const navigate = useNavigate()

    const onClick = (event) => {
        event.preventDefault()

        const url = "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/signup"
        const body = form

        axios.post(url, body)
        .then((res) => {
            setUsuario(res.data)
            setToken(res.data.token)
            window.localStorage.setItem("token", res.data.token)
            console.log(res.data);
        }).catch((error) => {
            console.log(error);
        }).finally(navigate("/CadastroEndereco"))
        console.log(form);
    }

    const [form, onChange] = useForm({
        name: "",
        email: "",
        cpf: "",
        password: ""}) 

    return (
        <div>
        <Header/>

        <h2>Cadastro</h2>
        <form onSubmit={onClick}>
            <input 
                placeholder="Nome"
                type="text" 
                name="name" 
                value={form.name}
                onChange={onChange}/>
            <input 
                placeholder="Email"
                type="e-mail" 
                name="email" 
                value={form.email}
                onChange={onChange}/>
            <input 
                placeholder="CPF"
                type="text" 
                name="cpf" 
                value={form.cpf}
                onChange={onChange}/>
            <input 
                placeholder="Senha"
                type="password" 
                name="password" 
                value={form.password}
                onChange={onChange}/>

            <button>Cadastrar</button>

        </form>
        </div>
    )
}

export default Cadastro;