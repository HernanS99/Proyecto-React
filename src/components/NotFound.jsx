const NotFound = () => {
    return (
        <div>
            <div class="d-flex align-items-center justify-content-center vh-100">
                <div class="text-center row">
                    <div class=" col-md-6">
                        <img src="https://miro.medium.com/max/1400/1*qdFdhbR00beEaIKDI_WDCw.gif" alt=""
                            class="img-fluid"/>
                    </div>
                    <div class=" col-md-6 mt-5">
                        <p class="fs-3"> <span class="text-danger">Error</span> Pagina no encontrada.</p>
                        <p class="lead">
                            La pagina que buscas no existe
                        </p>
                        <a href="/" class="btn btn-primary">Ir a inicio</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NotFound