// import { Link } from "react-router-dom";
// import "./Nav.css";

function Nav() {
  return (
    <nav className="navegacao">
      <Link to="/"> Home </Link>
      <Link to="/Passagens"> Passagens Aéreas </Link>
      <Link to="/Pacotes"> Pacotes </Link>
      <Link to="/Paaseios"> Passeios </Link>
      <Link to="/Ofertas"> Ofertas </Link>
    </nav>
  );
}

export default Nav;