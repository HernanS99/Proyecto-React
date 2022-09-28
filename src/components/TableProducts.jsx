function TableProducts(props) {
    let datos = props.datos.data()
    const {nombre, precio, descripcion} = datos
    return (
        <div>
            <table className="table">
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
                        <td>{nombre}</td>
                        <td>{precio}</td>
                        <td>{descripcion}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TableProducts