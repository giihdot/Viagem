import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Maldivas from "./Pages/Maldivas";
import Portugal from "./Pages/Portugal";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Maldivas" element={<Maldivas />} />
        <Route path="/Portugal" element={<Portugal />} />

      </Routes>
    </Router>
  );
}

export default App;

