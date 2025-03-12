import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Maldivas from "./Pages/Maldivas";
import Portugal from "./Pages/Portugal";
import Orlando from "./Pages/Orlando";
import Coreia from "./Pages/Coreia_do_Sul";
import Italia from "./Pages/Italia";
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
        <Route path="/Maldivas" element={<Maldivas />} />
        <Route path="/Portugal" element={<Portugal />} />
        <Route path="/Orlando" element={<Orlando />} />
        <Route path="/Coreia" element={<Coreia />} />
        <Route path="/Italia" element={<Italia />} />

      </Routes>
    </Router>
  );
}

export default App;

