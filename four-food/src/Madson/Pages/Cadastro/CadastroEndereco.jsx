import React, { useContext } from "react";
import Header from "../../Components/Header";
import axios from 'axios';
import useForm from '../../Hooks/useForm'
import { GlobalContext } from "../../Global/GlobalContext";
import { useNavigate } from "react-router-dom";
import useAutenticator from "../../Hooks/useAutenticator"

const CadastroEndereco = () => {
    useAutenticator()

    const navigate = useNavigate()

    const {states, setters} = useContext(GlobalContext)
    const {token} = states
    const {setUsuario, setToken} = setters


    const onClick = (event) => {
        event.preventDefault();

        const url = "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/address"
        const header = {
            headers: {
                auth: token
            }
        }
        const body = form

        axios.put(url, header, body)
        .then((res) => {
            setUsuario(res.data)
            setToken(res.data.token)
            window.localStorage.setItem("token", res.data.token)
            console.log(res.data);
        }).catch((error) => {
            console.log(error);
        }).finally(navigate("/"))

    }

    const [form, onChange] = useForm({
        street: "",
        number: "",
        neighbourhood: "",
        city: "",
        state: "",
        complement: ""
    })

    return (
        <div>
            <Header/>

            <h2>Meu endereço</h2>
            <form onSubmit={onClick}>
            <input 
                placeholder="Rua / Av."
                type="text" 
                name="street" 
                value={form.street}
                onChange={onChange}/>
            <input 
                placeholder="Número"
                type="number" 
                name="number" 
                value={form.number}
                onChange={onChange}/>
            <input 
                placeholder="Apto. / Bloco"
                type="text" 
                name="complement" 
                value={form.complement}
                onChange={onChange}/>
            <input 
                placeholder="Bairro"
                type="text" 
                name="neighbourhood" 
                value={form.neighbourhood}
                onChange={onChange}/>
            <input 
                placeholder="Cidade"
                type="text" 
                name="city" 
                value={form.city}
                onChange={onChange}/>
            <input 
                placeholder="Estado"
                type="text" 
                name="state" 
                value={form.state}
                onChange={onChange}/>

            <button>Cadastrar</button>

            </form>
        </div>
    )
}

export default CadastroEndereco;