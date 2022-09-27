import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home';
import NotFound from './components/NotFound';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
