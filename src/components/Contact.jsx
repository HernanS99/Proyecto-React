import { useState } from "react"
import { db } from '../config/firebase'
import { collection , addDoc} from 'firebase/firestore'

const Contact = () => {

    const [user, setUser] = useState({})

    const handleInput = (evento) => {
        const { value, name } = evento.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const saveRecomendation = async () => {
        await addDoc(collection(db,'recomendaciones'),user)
    }
    console.log(user)
    return (
            <div className="container-fluid mb-4">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="well well-sm">
                            <form className="form-horizontal" action="" method="">
                                <fieldset>
                                    <legend className="text-center">Contactanos</legend>

                                    <div className="form-group">
                                        <label className="control-label" for="name">Nombre</label>
                                        <div className="">
                                            <input id="name" name="name" type="text" placeholder="Tu nombre" className="form-control" onChange={(evento) => handleInput(evento)}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label" for="email">Tu Correo</label>
                                        <div className="">
                                            <input id="email" name="email" type="text" placeholder="Tu correo" className="form-control" onChange={(evento) => handleInput(evento)}/>
                                        </div>
                                    </div>

                                    <div className="form-group mb-4">
                                        <label className="control-label" for="message">Tu Mensaje</label>
                                        <div className="">
                                            <textarea className="form-control" id="message" name="message" placeholder="Por favor ingresa tu mensaje aqui..." rows="5" onChange={(evento) => handleInput(evento)}></textarea>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="col-md-12 text-right">
                                            <button type="button" className="btn btn-primary btn-lg" onClick={saveRecomendation}>Enviar</button>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Contact