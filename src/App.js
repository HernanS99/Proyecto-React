import './App.css';
import { Routes, Route } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "./config/firebase";
import Home from './views/Home';
import NotFound from './views/NotFound';
import AdminPage from './views/AdminPage';
import Register from './views/Register'
import Login from './views/Login';
import Nav from './components/Nav';
import { useState } from 'react';




function App() {

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
    <div>
      <Nav>
        <Routes>
          <Route path='/' element={<Home />} />
          {user === null ? <Route path='*' element={<NotFound />} />: null}
          
          <Route path='/AdminPage' element={<AdminPage />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
      </Nav>
    </div>

  );
}

export default App;
