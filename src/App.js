import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home';
import NotFound from './views/NotFound';
import AdminPage from './views/AdminPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/AdminPage' element={<AdminPage />} />
      </Routes>
    </div>
  );
}

export default App;
