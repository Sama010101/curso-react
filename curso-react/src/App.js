import './App.css';
import { BrowserRouter as router,Routes,Route, Link, Router, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';  
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import styles from './components/NavBar.modulo.css';


function App() {
  return (
    
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/sobre' element={<Empresa/>}/>
        <Route path='/contato' element={<Contato/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
} 

export default App;
