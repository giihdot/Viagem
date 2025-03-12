import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Passagem from "./Pages/Passagens";
import Hospedagens from "./Pages/Hospedagens";
import './App.css';
import Ofertas from './Pages/Ofertas';


function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/Passagens" element={<Passagem />} />
        <Route path="/Hospedagens" element={<Hospedagens />} />
        <Route path="/Ofertas" element={<Ofertas />} />
        

      </Routes>
    </Router>
  );
}

export default App;

