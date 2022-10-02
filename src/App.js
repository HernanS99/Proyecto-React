import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home';
import NotFound from './views/NotFound';
import AdminPage from './views/AdminPage';
import Register from './views/Register'
import Login from './views/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/AdminPage' element={<AdminPage />} />
        <Route path='/Register' element={<Register/>}/>
      <Route path='/Login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
