

const Recommendations = (props) => {
    let datos = props.datos.data()
    const {email,name,message} = datos
    return (
        <div className="container" >
            <section className="mx-auto my-5">

                <div className="card">
                    <div className="card-body">
                        <blockquote className="blockquote blockquote-custom bg-white px-3 pt-4">
                            <div className="blockquote-custom-icon bg-info shadow-1-strong">
                                <i className="fa fa-quote-left text-white"></i>
                            </div>
                            <p className="mb-0 mt-2 font-italic">
                                {message}
                            </p>
                            <footer className="blockquote-footer pt-4 mt-4 border-top">
                                <cite title="Source Title">{email}</cite> - 
                                <cite title="Source Title"> {name}</cite>
                            </footer>
                        </blockquote>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Recommendations