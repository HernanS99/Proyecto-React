

const Recommendations = (props) => {
    let datos = props.datos.data()
    const {email,name,message} = datos
    return (
        <div class="container">
            <section class="mx-auto my-5">

                <div class="card">
                    <div class="card-body">
                        <blockquote class="blockquote blockquote-custom bg-white px-3 pt-4">
                            <div class="blockquote-custom-icon bg-info shadow-1-strong">
                                <i class="fa fa-quote-left text-white"></i>
                            </div>
                            <p class="fs-2">
                                Nombre: {name}
                            </p>
                            <p class="mb-0 mt-2 font-italic">
                                {message}
                            </p>
                            <footer class="blockquote-footer pt-4 mt-4 border-top">
                                <cite title="Source Title">{email}</cite>
                            </footer>
                        </blockquote>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Recommendations