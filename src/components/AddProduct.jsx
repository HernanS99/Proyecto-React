const AddProduct = () => {
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
            </div>
        </div>

    )
}

export default AddProduct