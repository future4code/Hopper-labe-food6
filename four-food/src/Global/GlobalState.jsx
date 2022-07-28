import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { GlobalContext } from "./GlobalContext";
import { useState } from "react";

export const GlobalState = (props) => {

    const [usuario, setUsuario] = useState({})
    const [token, setToken] = useState("")
    const [restaurants, setRestaurants] = useState([])
    const [pedido, setPedido] = useState([])

    const states = {usuario, token, restaurants,pedido }

    const setters = {setUsuario, setToken, setRestaurants, setPedido }

    useEffect(() => {
        const header = {
            headers: {
                auth: token
            }
        }
        token && axios.get("https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/profile", header)
        .then((res) => {
            
        }).catch((err) => {
            console.log(err);
        })
    },[token])

    return (
        <GlobalContext.Provider value={{states, setters}}>
            {props.children}
        </GlobalContext.Provider>
    )
}