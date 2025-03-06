import "./Header.css"
import Logo from '../assets/Logo - Viagem.png'

function Header(props) {
  return (
    <>
    <header>
    <h2> {props.titulo} </h2> 
    <img className="Img_1" src={Logo} alt="Viagem" />
    </header>
    </>
  );
}

export default Header;