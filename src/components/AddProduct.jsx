import { useState } from "react"

const AddProduct = () => {

    const [product, saveProduct] = useState({})

    const handleInput = (e) => {
        const {value , name } = e.target
        saveProduct({
            ...product,
            name: value
        }
        )
    }

    return (
        <div className="container">
            <div className="row">
                <div class="input-group mb-3 mt-5">
                    <p className="me-3">Nombre: </p>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
                <div class="input-group mb-3">
                    <p className="me-3">Precio: </p>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
                <div class="input-group mb-3">
                    <p className="me-3">Descripcion: </p>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
                <div className="col-md-12 text-center mb-3">
                    <button type="button" className="btn btn-primary btn-lg">Enviar</button>
                </div>
            </div>
        </div>

    )
}

export default AddProduct