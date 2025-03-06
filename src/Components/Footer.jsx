import React from 'react';
import './Footer.css'; // Importa o arquivo CSS

const Footer = () => {
  return (
    <footer className="footer">
      {/* Seção de conteúdo acima da linha */}
      <div className="top-section">
        <p> <b> Para maiores informações: </b> +55 (19) 97864-2324 </p>
      <p> <b> Email: </b> madamesvoyage@passagens.com.br </p>
      </div>
    <br/>
    <br/>
      {/* Linha */}
      <hr className="line" />
    <br/>
    <br/>
      {/* Seção com 4 itens lado a lado */}
      <div className="row">
        <div className="item">
        <p> <b>Sobre a Empresa:</b> </p>

        <p> Atendimento ao Cliente </p>
        <p> Blog das Madames Voyage </p>
        <p> Canais Oficiais </p>
        <p> Políticas de Privacidade </p>
        <p> Termos de Uso </p>
        <p> Black Friday </p>
        <p> Excluir minha conta </p>
        </div>

        <div className="item">
        <p> <b> Madames Voyage: Agência de Viagens Online </b> </p>

        <p> Passagens Aéreas Promocionais </p>
        <p> Passagens Aéreas Internacionais </p>
        <p> Passagem para São Paulo </p>
        <p> Passagem para Goiânia </p>
        <p> Passagem para Recife </p>
        <p> Passagem para Bahia </p>
        <p> Passagem para Santa Catarina </p>
        <p> Passagem para Maceió </p>
        </div>

        <div className="item">
        <p> <b> Companhias Aéreas Internacionais </b> </p>

        <p> Tap Air Portugal </p>
        <p> Copa Airlines </p>
        <p> Aerolíneas Argentinas </p>
        <p> Air France </p>
        <p> Iberia </p>
        <p> American Airlines </p>
        </div>

        <div className="item">
        <p> <b> Companhias Aéreas Nacionais </b> </p>

        <p> Azul Viagens </p>
        <p> Latam </p>
        <p> Tam </p>
        <p> VoePass </p>
        <p> Avianca </p>
        </div>
      </div>

      {/* Imagem abaixo dos itens */}
      <div className="image-container">
        <img src="https://via.placeholder.com/150" alt="Imagem" className="image" />
      </div>

      {/* Seção com mais itens abaixo da imagem */}
      <div className="row">
        <div className="item">Item A</div>
        <div className="item">Item B</div>
        <div className="item">Item C</div>
      </div>
    </footer>
  );
};

export default Footer;

