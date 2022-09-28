import { db } from '../config/firebase'
import { doc , deleteDoc} from 'firebase/firestore'
import { useState } from 'react'

const ProductsRow = (props) => {
    let datos = props.datos.data()
    const {nombre, precio, descripcion} = datos
    const [edit, setEdit] = useState(false)
    const eliminar = async () => {
        let response = await deleteDoc(doc(db,'products',props.datos.id))
        console.log(response)
    }
    const editt = () => {
        setEdit(true)
        
    }
    console.log(edit)
    return (
        <tr>
            <th scope="row">1</th>
            <td>{edit===false ? nombre :<input id="name" name='name'/> }</td>
            <td>{edit===false ? precio :<input id="name" name='name'/> }</td>
            <td>{edit===false ? descripcion :<input id="name" name='name'/> }</td>
            <td><button type="button" className="btn btn-primary" onClick={editt}>{edit===false ? 'Editar' : 'Actualizar'}</button></td>
            <td><button type="button" className="btn btn-primary" onClick={eliminar}>Eliminar</button></td>
        </tr>
    )
}
export default ProductsRow