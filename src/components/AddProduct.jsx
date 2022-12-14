import { useState } from "react"
import { db } from '../config/firebase'
import { collection , addDoc} from 'firebase/firestore'
import toast, { Toaster } from 'react-hot-toast';

function AddProduct(props){
    let nombre,precio,descripcion,img = ""
    const [insert, saveInsert] = useState(false)
    const [product, saveProduct] = useState({nombre,precio,descripcion,img})

    const handleInput = (e) => {
        const  { value , name } = e.target
        saveProduct({
            ...product,
            [name]: value
        }
        )
    }

    const changeState = () => {
        saveInsert(true)
    }

    const saveProductos = async () => {
        if(product.nombre === undefined || product.precio === undefined || product.descripcion === undefined|| product.img === undefined) {
            toast.error('Debe rellenar todos los campos!');
            
        }else{
            try{
                await addDoc(collection(db,'products'),product)
                props.update()
                saveInsert(false)
                toast.success('Creado Exitosamente!');
            }catch(err){
    
            }
        } 
    }

    return (
        <div className="container">
             <Toaster/>
            {
                insert === false
                ? <div className="d-grid col-md-12 justify-content-md-end mb-3 mt-3">
                <button type="button" className="btn btn-success btn-lg" onClick={changeState}>Agregar producto</button>
                </div>
                :
                <div className="row">
                <div className="input-group mb-3 mt-5">
                    <p className="me-3">Nombre: </p>
                    <input type="text" className="form-control" name="nombre" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={(evento) => handleInput(evento)}/>
                </div>
                <div className="input-group mb-3">
                    <p className="me-3">Precio: </p>
                    <input type="number" className="form-control" name="precio" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={(evento) => handleInput(evento)}/>
                </div>
                <div className="input-group mb-3">
                    <p className="me-3">Descripcion: </p>
                    <input type="text" className="form-control" name="descripcion" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={(evento) => handleInput(evento)}/>
                </div>
                <div className="input-group mb-3">
                    <p className="me-3">Url imagen: </p>
                    <input type="text" className="form-control" name="img" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={(evento) => handleInput(evento)}/>
                </div>
                <div className="col-md-12 text-center mb-3">
                    <button type="button" className="btn btn-primary btn-lg" onClick={saveProductos}>Enviar</button>
                </div>
            </div>
            }
        </div>
    )
}

export default AddProduct