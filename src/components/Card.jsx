

function Card(props) {
    console.log(props)
    return (
            <div class="col-sm-6 col-md-4 col-xl-3">
                <div class="card-sl mb-5">
                    <div class="card-image">
                        <img
                            src="https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt='foto' className="img-fluid"/>
                    </div>

                     <a class="card-action" href="#!"><i class="fa fa-heart"></i></a> 
                    <div class="card-heading">
                        {props.datos.name}
                    </div>
                    <div class="card-text">
                        {props.datos.descripcion}
                    </div>
                    <div class="card-text">
                        $67,400
                    </div> 
                            <a href="#!" class="card-button"> Purchase</a> 
                </div>
            </div>
    )
}

export default Card