import ProductsMenu from "../components/ProductsMenu"
import Recommendations from "../components/Recommendations"
import { db } from '../config/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from "react"

const AdminPage = () => {
    const [recom, setRecom] = useState([])



    const getProducts = async () => {
        try {
            let response = await getDocs(collection(db, 'recomendaciones'))
            setRecom(response.docs)
        } catch (err) {

        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div >
            <p className="fs-1 text-center">Recomendaciones</p>
            <div className="Scroll">
                {recom.map(recomendacion => <Recommendations upda={getProducts} datos={recomendacion} key={recomendacion.id} />)}
            </div>
            <ProductsMenu />

        </div>
    )
}

export default AdminPage