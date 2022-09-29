

function Card(props) {
    let datos = props.datos.data()
    const {nombre, precio, descripcion} = datos
    return (
            <div className="col-sm-6 col-md-4 col-xl-3">
                <div className="card-sl mb-5">
                    <div className="card-image">
                        <img
                            src="https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt='foto' classNameName="img-fluid"/>
                    </div>
                    <div className="card-heading">
                        {nombre}
                    </div>
                    <div className="card-text">
                        {descripcion}
                    </div>
                    <div className="card-text">
                        ${precio}
                    </div>
                </div>
            </div>
    )
}

export default Card