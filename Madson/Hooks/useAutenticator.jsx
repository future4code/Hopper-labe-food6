import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../Global/GlobalContext"

const useAutenticator = () => {

    const {states} = useContext(GlobalContext)
    const {token} = states

    const tokenStorage = window.localStorage.getItem("token")

    const navigate = useNavigate()

    useEffect(() => {

        if (token === "" || tokenStorage === null) {
            navigate("/Login")
        }
    },[navigate, token])
}
export default useAutenticator;