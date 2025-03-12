import { Link } from "react-router-dom"
import "./Navbar.css"


function Nav() {
  return (
    <nav className="navegacao">
      <Link to="/"> Home </Link> 
      <Link to="/Passagens"> Passagens </Link>
      <Link to="/Hospedagens"> Hospedagens </Link>
      <Link to="/Passeios"> Passeios </Link>
      <Link to="/Ofertas"> Ofertas </Link>
    </nav>
  );
}

export default Nav;