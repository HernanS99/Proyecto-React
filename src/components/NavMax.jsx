
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from "../config/firebase";

function NavMax() {

  const [user, setUser] = useState(null)
  onAuthStateChanged(auth, (usuario=>{
    if(usuario)
    {
      setUser(usuario)
    }else{
      setUser(null)
    }
  }))
  const signOutUser = async () => await signOut(auth);


  return (

    
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <img className="navbar-brand" src="https://banner2.cleanpng.com/20180419/ptw/kisspng-japanese-cuisine-icon-sushi-computer-icons-sake-a-pair-of-chopsticks-5ad8ae8115d850.3968730015241498890895.jpg" width="80" height="54" alt="" />Restorant Comida China
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll ">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Inicio</Link>
            </li>
            {user === null ?
              <li className="nav-item">
              <Link to="/Login">Administracion</Link>
            </li>
            :
            <li className="nav-item">
              <button type=" button" className="btn btn-success" onClick={() => signOutUser()}>Cerrar Sesion</button>
            </li>
            }
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavMax