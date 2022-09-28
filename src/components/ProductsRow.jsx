import { db } from '../config/firebase'
import { collection , deleteDoc} from 'firebase/firestore'

const ProductsRow = (props) => {
    let datos = props.datos.data()
    const {nombre, precio, descripcion} = datos

    

    console.log(datos)
    return (
        <tr>
            <th scope="row">1</th>
            <td>{nombre}</td>
            <td>{precio}</td>
            <td>{descripcion}</td>
            <td><button type="button" class="btn btn-primary">Editar</button></td>
            <td><button type="button" class="btn btn-primary">Eliminar</button></td>
        </tr>
    )
}
export default ProductsRow