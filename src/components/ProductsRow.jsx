import { db } from '../config/firebase'
import { doc , deleteDoc, setDoc} from 'firebase/firestore'
import { useState } from 'react'

const ProductsRow = (props) => {
    let datos = props.datos.data()
    const {nombre, precio, descripcion} = datos
    const [edit, setEdit] = useState(false)
    const [epro, setEpro] =  useState({nombre,precio,descripcion})
    const eliminar = async () => {
        await deleteDoc(doc(db,'products',props.datos.id))
        props.update()
    }
    const editt = () => {
        setEdit(true)
    }
    const handleInput = (e) =>{
        setEpro({
            ...epro,
            [e.target.name]:e.target.value
        })
    }

    const update = async () => {
        await setDoc(doc(db,'products',props.datos.id),epro)
        props.update()
        setEdit(false)
    }
    return (
        <tr>
            <th scope="row">1</th>
            <td>{edit===false ? nombre :<input id="nombre" name='nombre' value={epro.nombre} onChange={(e)=>handleInput(e)}/>}</td>
            <td>{edit===false ? precio :<input id="precio" name='precio' value={epro.precio} onChange={(e)=>handleInput(e)} />} </td>
            <td>{edit===false ? descripcion :<input id="descripcion" name='descripcion' value={epro.descripcion} onChange={(e)=>handleInput(e)}/> }</td>
            <td><button type="button" className="btn btn-primary" onClick={edit===false ? editt : update}>{edit===false ? 'Editar' : 'Actualizar'}</button></td>
            <td>{edit===false ? <button type="button" className="btn btn-primary" onClick={eliminar}>Eliminar</button>: null}</td>
        </tr>
    )
}
export default ProductsRow