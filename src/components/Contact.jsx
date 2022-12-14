import { useState } from "react"
import { db } from '../config/firebase'
import { collection , addDoc} from 'firebase/firestore'
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
    let name,email,message
    const [recomen, setRecomen] = useState({name,email,message})

    const handleInput = (evento) => {
        const { value, name } = evento.target
        setRecomen({
            ...recomen,
            [name]: value
        })
    }
    const saveRecomendation = async () => {
         if(recomen.name ===  undefined || recomen.email === undefined || recomen.message === undefined) {
            toast.error('Debe rellenar todos los campos');
        }else{
            const regexmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i 
            if (regexmail.test(recomen.email)) { 
                try{
                    await addDoc(collection(db,'recomendaciones'),recomen)
                    toast.success('Creado Exitosamente!');
                }catch(err){
                    toast.error(err)
                }
            }else{
                toast.error('Email incorrecto');
            } 
        }
    }
    return (
            <div className="container mb-4">
                <Toaster/>
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="well well-sm">
                            <form className="form-horizontal" action="" method="">
                                <fieldset>
                                    <legend className="text-center">Dejanos tus recomendaciones o dudas</legend>

                                    <div className="form-group">
                                        <label className="control-label" >Nombre</label>
                                        <div className="">
                                            <input id="name" name="name" type="text" placeholder="Tu nombre" className="form-control" onChange={(evento) => handleInput(evento)}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label" >Tu Correo</label>
                                        <div className="">
                                            <input id="email" name="email" type="email" placeholder="Tu correo" className="form-control" onChange={(evento) => handleInput(evento)}/>
                                        </div>
                                    </div>

                                    <div className="form-group mb-4">
                                        <label className="control-label">Tu Mensaje</label>
                                        <div className="">
                                            <textarea className="form-control" id="message" name="message" placeholder="Por favor ingresa tu mensaje aqui..." ength="3minl0" rows="5" onChange={(evento) => handleInput(evento)}></textarea>
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