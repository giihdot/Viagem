import "./Header.css"
import Logo from "../assets/Logo-Viagem.png"

function Header(props) {
  return (
    <>
    <header>
    <h1> MADAMES VOYAGE {props.Titulo} </h1> 
    <img className="Img_1" src={Logo} alt="Viagem" />
    </header>
    </>
  );
}

export default Header;