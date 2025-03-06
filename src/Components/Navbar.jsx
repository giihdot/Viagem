<<<<<<< HEAD
import { Link } from "react-router-dom"
import "./Navbar.css"
=======
import { Link } from "react-router-dom";
import "./Nav.css";
>>>>>>> b9bd5651642d6a8af3e08c526b3871095e9dc0b3

function Nav() {
  return (
    <nav className="navegacao">
      <Link to="/"> Home </Link> 
      <Link to="/Passagens"> Passagens </Link>
      <Link to="/Pacotes"> Pacotes </Link>
      <Link to="/Paaseios"> Passeios </Link>
      <Link to="/Ofertas"> Ofertas </Link>
    </nav>
  );
}

export default Nav;