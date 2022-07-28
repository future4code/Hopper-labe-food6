import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    return <div>
        <button onClick={() => {navigate("/")}}>Home</button>
        <button onClick={() => {navigate("/Busca")}}>Busca</button>
        <button onClick={() => {navigate("/Login")}}>Login</button>
        <button onClick={() => {navigate("/Perfil")}}>Perfil</button>
        <button onClick={() => {navigate("/Cadastro")}}>Cadastro</button>
        <button onClick={() => {navigate("/CadastroEndereco")}}>CadastroEndereco</button>
        <button onClick={() => {navigate("/Restaurante")}}>Restaurante</button>
        <button onClick={() => {navigate("/Carrinho")}}>Carrinho</button>
        
    </div>
}

export default Header;