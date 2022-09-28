function TableProducts(props) {

    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Descripcion</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{props.datos.name}</td>
                        <td>{props.datos.precio}</td>
                        <td>{props.datos.descripcion}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TableProducts