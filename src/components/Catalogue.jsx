import Card from "./Card"
import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";

const Catalogue = () => {
    const [poke, setPoke] = useState([])
    


    const getFromA = async () => {
        let resp = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
        setPoke(resp.data.results)
    }

    useEffect(()=>{
        getFromA()
    },)
    
    

    return (
        <div className="container">
            <div className="row">
                <div>
                    <p className="fs-1 fw-bold text-center">Catalogo</p>
                </div>
            </div>
            <div className="row ">
             { poke.map(producto=><Card datos={producto} key={producto.name}/>) } 
            </div>
        </div>
    )


}

export default Catalogue