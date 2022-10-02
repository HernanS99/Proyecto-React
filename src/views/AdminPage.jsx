import ProductsMenu from "../components/ProductsMenu"
import Recommendations from "../components/Recommendations"
import { db } from '../config/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from "react"

const AdminPage = () => {
    const [recom, setRecom] = useState([])
    


    const getProducts = async () => {
        try{
            let response = await getDocs(collection(db,'recomendaciones'))
            setRecom(response.docs)
        }catch(err){
            
        }
    }

    useEffect(()=>{
        getProducts()
    },[])

    return(
        <div>
            {recom.map(recomendacion =><Recommendations datos={recomendacion} key={recomendacion.id}/>)}
            <ProductsMenu/>
            
        </div>
    )
}

export default AdminPage