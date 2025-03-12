import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Passagem from "./Pages/Passagens";
import Hospedagens from "./Pages/Hospedagens";
import Ofertas from './Pages/Ofertas';
import Passeios from './Pages/Passeio'
import './App.css';



function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/Passagens" element={<Passagem />} />
        <Route path="/Passeios" element={<Passeios />} />
        <Route path="/Hospedagens" element={<Hospedagens />} />
        <Route path="/Ofertas" element={<Ofertas />} />
        

      </Routes>
    </Router>
  );
}

export default App;

