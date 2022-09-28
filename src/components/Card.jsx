

function Card(props) {
    return (
            <div className="col-sm-6 col-md-4 col-xl-3">
                <div className="card-sl mb-5">
                    <div className="card-image">
                        <img
                            src="https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt='foto' classNameName="img-fluid"/>
                    </div>

                     <a className="card-action" href="#!"><i className="fa fa-heart"></i>
                     </a> 
                    <div className="card-heading">
                        {props.datos.name}
                    </div>
                    <div className="card-text">
                        {props.datos.descripcion}
                    </div>
                    <div className="card-text">
                        $67,400
                    </div> 
                            <a href="#!" className="card-button"> Purchase</a> 
                </div>
            </div>
    )
}

export default Card