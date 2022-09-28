import ProductsRow from "./ProductsRow"
import { db } from '../config/firebase'
import { collection , getDocs} from 'firebase/firestore'
import { useEffect, useState } from "react"

function TableProducts() {
    
    const [productos, setProductos] = useState([])

    const getProducts = async () => {
        let response = await getDocs(collection(db,'products'))
        setProductos(response.docs)
    }
    
    useEffect(()=>{
        getProducts()
    },[])
    console.log(productos)
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Descripcion</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map(product => <ProductsRow datos={product} key={product.id}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default TableProducts