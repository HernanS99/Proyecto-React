import AddProduct from "./AddProduct"
import TableProducts from "./TableProducts"
import { db } from '../config/firebase'
import { collection , getDocs} from 'firebase/firestore'
import { useEffect, useState } from "react"

const ProductsMenu = () => {
    
    const [productos, setProductos] = useState([])

    const getProducts = async () => {
        let response = await getDocs(collection(db,'products'))
        setProductos(response.docs)
    }
    
    useEffect(()=>{
        getProducts()
    },[])

    return (
        <div>
            <AddProduct/>
            <div>
                {productos.map(product=><TableProducts datos={product} key={product.name}/>)}
            </div>
        </div>
    )
}
export default ProductsMenu