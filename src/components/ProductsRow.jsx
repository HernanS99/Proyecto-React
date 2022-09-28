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
        </tr>
    )
}
export default ProductsRow