import Card from "./Card"
import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";

import { db } from '../config/firebase'
import { collection , getDocs} from 'firebase/firestore'

const Catalogue = () => {
    const [productos, setProductos] = useState([])
    


    const getProducts = async () => {
        let response = await getDocs(collection(db,'products'))
        setProductos(response.docs)
    }

    useEffect(()=>{
        getProducts()
    },)
    
    

    return (
        <div className="container">
            <div className="row">
                <div>
                    <p className="fs-1 fw-bold text-center">Catalogo</p>
                </div>
            </div>
            <div className="row ">
             { productos.map(producto=><Card datos={producto} key={producto.name}/>) } 
            </div>
        </div>
    )


}

export default Catalogue