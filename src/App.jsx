import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Maldivas from "./Pages/Maldivas";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Maldivas />} />
      </Routes>
    </Router>
  );
}

export default App;

