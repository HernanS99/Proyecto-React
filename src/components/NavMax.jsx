import { useNavigate } from 'react-router-dom';
import { Router, Route} from 'react-router'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "../config/firebase";

function NavMax() {

  const navigate = useNavigate();
  
  const [user, setUser] = useState(null)
  onAuthStateChanged(auth, (usuario=>{
    if(usuario)
    {
      setUser(usuario)
    }else{
      setUser(null)
    }
  }))


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
            <a className="nav-link active" aria-current="page"><Link to="/">Inicio</Link></a>
            </li>
            {user === null ?
              <li className="nav-item">
              <a className="nav-link active" aria-current="page"><Link to="/Login">Administracion</Link></a>
            </li>
            :
            <li className="nav-item">
              <a className="nav-link active" aria-current="page"><Link to="/Login">Administracion</Link></a>
            </li>
            }
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavMax