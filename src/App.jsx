import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Maldivas from "./Pages/Maldivas";
import Portugual from "./Pages/Portugual";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Maldivas" element={<Maldivas />} />
        <Route path="/Portugual" element={<Portugual />} />

      </Routes>
    </Router>
  );
}

export default App;

