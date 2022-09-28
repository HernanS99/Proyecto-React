import Img from '../assets/img/team.jpg'

const Aboutus = () => {

    

    return (
        <section id="about" className="about">
            <div className="container mb-5">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={Img} className="img-fluid" alt=""/>
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0">
                        <h3>Nosotros</h3>
                        <p>
                        Tenemos todo dispuesto para entregar una experiencia única.
                        </p>
                        <ul>
                            <p><i className="fa-solid fa-check-double"></i> Directamente desde China nuestros chefs te cautivan con gastronomía tradicional de la región, amoldada a los gustos particulares del paladar santiaguino, prevaleciendo el interés principal de satisfacer el gusto, olfato y vista de nuestros clientes.</p>
                            <p><i className="fa-solid fa-check-double"/> Contamos con una variada carta de comida china.</p>
                        </ul>
                        <div className="row icon-boxes">
                            <div className="col-md-6">
                            <i className="fa-regular fa-cubes"/>
                                <h4>Calidad</h4>
                                <p>Contamos con ingredientes de calidad premium para darle las mejores comidas</p>
                            </div>
                            <div className="col-md-6 mt-4 mt-md-0">
                            <i className="fa-regular fa-cubes"/>
                                <h4>Tiempo de entrega</h4>
                                <p>Tenemos el promedio de tiempo de entrega más corto de la region</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Aboutus