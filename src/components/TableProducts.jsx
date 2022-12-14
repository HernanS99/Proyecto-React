import ProductsRow from "./ProductsRow"
import { db, auth } from '../config/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from "react"
import AddProduct from "./AddProduct"
import { signOut } from "firebase/auth"

function TableProducts() {

    const [productos, setProductos] = useState([])

    const getProducts = async () => {
        try{
            let response = await getDocs(collection(db, 'products'))
            setProductos(response.docs)
        }catch(err){

        }
    }
    const signOutUser = async () => await signOut(auth);

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div>
            <div>
                <p className="text-center fs-1 ">Menu de productos</p>
            </div>
            <div>
                <AddProduct update={getProducts}/>
            </div>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Url imagen</th>
                            <th scope="col">Editar</th>
                            <th scope="col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map(product => <ProductsRow datos={product} update={getProducts} key={product.id} />)}
                    </tbody>
                </table>
            </div>
            <div className="text-center mb-3">
                <button type="button" className="btn btn-success" onClick={() => signOutUser()}>Cerrar Sesion</button>
            </div>
        </div>
    )
}

export default TableProducts