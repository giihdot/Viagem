import "./Footer.css";
// import Logo from "../assets/Logo_Img.png";

function Footer() {
  return (
    <footer className="Flex-Row">
        <section className="Flex-Colunm">
      <p>
        <b> Para maiores informações: </b>
      </p>
      <p> Cel: +55 (19) 97864-2324 </p>
      <p> Email: madamesvoyage@passagens.com.br </p>
      </section>
<hr/>
      <section className="Flex-Colunm">
      <p>
        <b>Sobre a Empresa:</b>
      </p>

      <p>Atendimento ao Cliente</p>
      <p>Blog das Madames Voyage</p>
      <p> Canais Oficiais</p>
      <p>Políticas de Privacidade</p>
      <p>Termos de Uso</p>
      <p>Black Friday</p>
      <p>Excluir minha conta</p>
      </section>

      <section className="Flex-Colunm">
      <p>
        <b>Madames Voyage: Agência de Viagens Online</b>
      </p>

      <p>Passagens Aéreas Promocionais </p>
      <p> Passagens Aéreas Internacionais</p>
      <p>Passagem para São Paulo </p>
      <p> Passagem para Goiânia </p>
      <p>Passagem para Recife </p>
      <p>Passagem para Bahia </p>
      <p>Passagem para Santa Catarina </p>
      <p>Passagem para Maceió </p>
      </section>
      {/* <img className="img_logo" scr={Logo} alt="Logo" /> */}
    </footer>
  );
}

export default Footer;
