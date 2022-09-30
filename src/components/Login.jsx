import { useEffect, useState } from "react"
import { auth, signInWithEmailAndPassword, signInWithGoogle, logInWithEmailAndPassword } from "../firebase";

const Login = () => {

    let usuarios = []
    const [user, setUser] = useState({})

    const handleInput = (evento) => {
        const { value, name } = evento.target
        setUser({
            ...user,
            [name]: value
        })

    }
    function validateUser(){
        const regexmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        if (regexmail.test(user.email)) {
            let existe = usuarios.find((element) => element.email === user.email && element.password === user.password)
            if (existe === undefined) {
                alert("ads")
            } else {
                alert("paso")
            }
        }else{
            alert("mail malo")
        }
    }
    

        function getUsers() {
            let listusers = localStorage.getItem('usuarios')
            usuarios = !listusers ? [] : JSON.parse(listusers);
            return usuarios;
        }
        useEffect(() => {
            getUsers()
        })
       console.log(user)
        return (
            <section class="vh-100 gradient-custom">
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div class="card bg-dark text-white">
                                <div class="card-body p-5 text-center">

                                    <div class="mb-md-5 mt-md-4 pb-5">

                                        <h2 class="fw-bold mb-2 text-uppercase">Iniciar Sesion</h2>
                                        <p class="text-white-50 mb-5">Ingresa los datos solicitados</p>

                                        <div class="form-outline form-white mb-4">
                                            <input type="email" id="typeEmailX" name="email" class="form-control form-control-lg" onChange={(evento) => handleInput(evento)} />
                                            <label class="form-label" for="typeEmailX">Correo</label>
                                        </div>

                                        <div class="form-outline form-white mb-4">
                                            <input type="password" id="typePasswordX" name="password" class="form-control form-control-lg" onChange={(evento) => handleInput(evento)} />
                                            <label class="form-label" for="typePasswordX">Contraseña</label>
                                        </div>

                                        <button class="btn btn-outline-light btn-lg px-5" type="submit" onClick={() => logInWithEmailAndPassword(user.email, user.password)}>Login</button>

                                    </div>

                                    <div>
                                        <p class="mb-0">No tienes una cuenta? <a href="./Register" class="text-white-50 fw-bold">Registrate</a>
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