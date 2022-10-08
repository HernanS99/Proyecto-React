import Card from "./Card"
import { useState } from "react";
import { useEffect } from "react";
import { db } from '../config/firebase'
import { collection , getDocs} from 'firebase/firestore'

const Catalogue = () => {
    const [productos, setProductos] = useState([])
    let response = null
    const getProducts = async () => {
        
        try{
            response = await getDocs(collection(db,'products'))
            setProductos(response.docs)
        }catch(err){
            
        }
        
    }

    useEffect(()=>{
        getProducts()
    },[])
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p className="fs-1 fw-bold text-center">Catalogo</p>
                </div>
            </div>
            <div className="row ">
             { productos.map(producto=><Card datos={producto} key={producto.id}/>) } 
            </div>
        </div>
    )


}

export default Catalogue