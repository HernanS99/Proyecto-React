const NotFound = () => {
    return (
        <div>
            <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="text-center row">
                    <div className=" col-md-6">
                        <img src="https://miro.medium.com/max/1400/1*qdFdhbR00beEaIKDI_WDCw.gif" alt=""
                            className="img-fluid"/>
                    </div>
                    <div className=" col-md-6 mt-5">
                        <p className="fs-3"> <span className="text-danger">Error</span> Pagina no encontrada.</p>
                        <p className="lead">
                            La pagina que buscas no existe
                        </p>
                        <a href="/" className="btn btn-primary">Ir a inicio</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NotFound