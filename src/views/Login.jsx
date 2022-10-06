import { useEffect, useState } from "react"
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import {
   
    signInWithEmailAndPassword

} from "firebase/auth";
  import { Link } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate();
    let usuarios = []
    const [user, setUser] = useState({})

    const logInWithEmailAndPassword = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/AdminPage");
            toast.success('Inicio de sesion exitoso!');
        } catch (err) {
            alert(err.message);
        }
      };
    const handleInput = (evento) => {
        const { value, name } = evento.target
        setUser({
            ...user,
            [name]: value
        })
    }

        function getUsers() {
            let listusers = localStorage.getItem('usuarios')
            usuarios = !listusers ? [] : JSON.parse(listusers);
            return usuarios;
        }
        useEffect(() => {
            getUsers()
        })
        return (
            <section className="vh-100 gradient-custom">
                <Toaster/>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark text-white">
                                <div className="card-body p-5 text-center">

                                    <div className="mb-md-5 mt-md-4 pb-5">

                                        <h2 className="fw-bold mb-2 text-uppercase">Iniciar Sesion</h2>
                                        <p className="text-white-50 mb-5">Ingresa los datos solicitados</p>

                                        <div className="form-outline form-white mb-4">
                                            <input type="email" id="typeEmailX" name="email" className="form-control form-control-lg" onChange={(evento) => handleInput(evento)} />
                                            <label className="form-label">correo</label>
                                        </div>

                                        <div className="form-outline form-white mb-4">
                                            <input type="password" id="typePasswordX" name="password" className="form-control form-control-lg" onChange={(evento) => handleInput(evento)} />
                                            <label className="form-label">Contraseña</label>
                                        </div>

                                        <button className="btn btn-outline-light btn-lg px-5" type="submit" onClick={() => logInWithEmailAndPassword(user.email, user.password)}>Login</button>

                                    </div>

                                    <div>
                                        <p className="mb-0">No tienes una cuenta? <Link to="/Register">Registrarse</Link>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    export default Login