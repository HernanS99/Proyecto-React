import { db } from '../config/firebase'
import { doc , deleteDoc} from 'firebase/firestore'

const ProductsRow = (props) => {
    let datos = props.datos.data()
    const {nombre, precio, descripcion} = datos

    const eliminar = async () => {
        let response = await deleteDoc(doc(db,'products',props.datos.id))
        console.log(response)
    }

    console.log(datos)
    return (
        <tr>
            <th scope="row">1</th>
            <td>{nombre}</td>
            <td>{precio}</td>
            <td>{descripcion}</td>
            <td><button type="button" className="btn btn-primary">Editar</button></td>
            <td><button type="button" className="btn btn-primary" onClick={eliminar}>Eliminar</button></td>
        </tr>
    )
}
export default ProductsRow