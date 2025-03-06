import "./Header.css"
import Logo from '../assets/Logo - Viagem.png'

function Header() {
  return (
    <>
    <header>
    {/* <h1> MADAMES VOYAGE {props.Integrante} </h1>  */}
    <img className="Img_1" src={Logo} alt="Viagem" />
    </header>
    </>
  );
}

export default Header;