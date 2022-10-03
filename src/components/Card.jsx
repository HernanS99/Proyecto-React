import nf from '../assets/img/nf.png'

function Card(props) {
    let datos = props.datos.data()
    const {nombre, precio, descripcion,img} = datos
    return (
            <div className="col-sm-6 col-md-4 col-xl-3">
                <div className="card-sl mb-5">
                    <div className="card-image">
                        <img
                            src={img === null ? nf : img} alt='foto' classNameName="img-fluid"/>
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