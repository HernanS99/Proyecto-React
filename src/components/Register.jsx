import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import {
    auth,
    registerWithEmailAndPassword,
    signInWithGoogle,
  } from "../firebase";
const Register = () => {
    let usuarios = []
    const [user, setUser] = useState({})

    const handleInput = (evento) => {
        const { value, name } = evento.target
        setUser({
            ...user,
            [name]: value
        })
    }

    /* const crearUsuario = async () => {
        const respu = await axios.post('https://todo-app-bs.herokuapp.com/v1/user/signup', user)
        console.log(respu.data)
    } */
    /* console.log(user)

    function createUser() {
        
        usuarios.push(user);
        console.log(usuarios)
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    } */

    function register() {
        if (!user.name) alert("Please enter name");
        registerWithEmailAndPassword(user.name, user.email, user.password);
      };

    function getUsers() {
        let listusers = localStorage.getItem('usuarios')
        usuarios = !listusers ? [] : JSON.parse(listusers);
        return usuarios;
    }
    useEffect(()=>{
        getUsers()
    })
    
    return (
        <section class="vh-100 gradient-custom">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div class="card bg-dark text-white">
                            <div class="card-body p-5 text-center">

                                <div class="mb-md-5 mt-md-4 pb-5">

                                    <h2 class="fw-bold mb-2 text-uppercase">Registrarse</h2>
                                    <p class="text-white-50 mb-5">Ingrese los datos solicitados en la parte inferior</p>

                                    <div class="form-outline form-white mb-4">
                                        <input type="text" id="typeEmailX" name="name" class="form-control form-control-lg"
                                            onChange={(evento) => handleInput(evento)}
                                        />
                                        <label class="form-label" for="typeEmailX">Nombre</label>
                                    </div>{/* 
                                    <div class="form-outline form-white mb-4">
                                        <input type="text" id="typeEmailX" name="lastName" class="form-control form-control-lg"
                                            onChange={(evento) => handleInput(evento)}
                                        />
                                        <label class="form-label" for="typeEmailX">Apellido</label>
                                    </div> */}
                                    <div class="form-outline form-white mb-4">
                                        <input type="email" id="typeEmailX" name="email" class="form-control form-control-lg"
                                            onChange={(evento) => handleInput(evento)}
                                        />
                                        <label class="form-label" for="typeEmailX">Email</label>
                                    </div>

                                    <div class="form-outline form-white mb-4">
                                        <input type="password" id="typePasswordX" name="password" class="form-control form-control-lg" onChange={(evento) => handleInput(evento)} />
                                        <label class="form-label" for="typePasswordX">Contraseña</label>
                                    </div>

                                    <button class="btn btn-outline-light btn-lg px-5" type="submit" onClick={register}>Login</button>

                                </div>

                                <div>
                                    <p class="mb-0">ya tienes una cuenta? <a href="./Login" class="text-white-50 fw-bold">Inicia sesion</a>
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

export default Register