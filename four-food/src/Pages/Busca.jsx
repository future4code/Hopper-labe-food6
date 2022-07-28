import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Components/Header";


const Busca = () => {

    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/restaurants"
        
        const header = {
            headers: {
                auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkZuN3pzQk43azQ4cDhxTXUwQnJWIiwibmFtZSI6Ik1hZHNvbiIsImVtYWlsIjoibWFkc29uQGdtYWlsLmNvbSIsImNwZiI6IjIyMi4xMTEuMjIyLTExIiwiaGFzQWRkcmVzcyI6ZmFsc2UsImlhdCI6MTY1ODE4MzMwOH0.u-yas9zsvab_PMwqhLUrUsKe9rC8yt-Ska6jYxtyYeM'
            }
            }

        axios.get(url, header)
        .then((res) => {
            setRestaurants(res.data)
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
    },[])


    return (
        <div>
        <Header/>
        </div>
    )
}

export default Busca;