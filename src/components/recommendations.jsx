import { db } from '../config/firebase'
import { doc , deleteDoc} from 'firebase/firestore'
import toast, { Toaster } from 'react-hot-toast';

const Recommendations = (props) => {


    
    const eliminar = async () => {
        try{
            await deleteDoc(doc(db,'recomendaciones',props.datos.id))
            toast.error('Eliminado exitosamente');
        }catch(err){

        }  
    }
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
                            <div className="blockquote-custom-icon2 bg-danger shadow-1-strong">
                                <button type="button" className="btn" onClick={()=>eliminar()}><i className="fa fa-check-double text-white"></i></button>
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