import Img from '../assets/img/team.jpg'

const Aboutus = () => {
    return (
        <section id="about" class="about">
            <div class="container mb-5">
                <div class="row">
                    <div class="col-lg-6">
                        <img src={Img} class="img-fluid" alt=""/>
                    </div>
                    <div class="col-lg-6 pt-4 pt-lg-0">
                        <h3>Nosotros</h3>
                        <p>
                        Tenemos todo dispuesto para entregar una experiencia única.
                        </p>
                        <ul>
                            <p><i class="fa-solid fa-check-double"></i> Directamente desde China nuestros chefs te cautivan con gastronomía tradicional de la región, amoldada a los gustos particulares del paladar santiaguino, prevaleciendo el interés principal de satisfacer el gusto, olfato y vista de nuestros clientes.</p>
                            <p><i class="fa-solid fa-check-double"></i> Contamos con una variada carta de comida china.</p>
                        </ul>
                        <div class="row icon-boxes">
                            <div class="col-md-6">
                            <i class="fa-regular fa-cubes"></i>
                                <h4>Corporis voluptates sit</h4>
                                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                            </div>
                            <div class="col-md-6 mt-4 mt-md-0">
                            <i class="fa-regular fa-cubes"></i>
                                <h4>Ullamco laboris nisi</h4>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Aboutus