import React from 'react';
import './Footer.css'; 
import Logo from '../assets/Logo - Viagem.png'

const Footer = () => {
  return (
    <footer className="footer">
      {/* Seção de conteúdo acima da linha */}
      <div className="top-section">
        <p> <b> Telefone: </b> +55 (19) 97864-2324 </p>
        <br/>
        <p>|</p>
        <br/>
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
        <br/>
        <br/>
        <p> <b> Companhias Aéreas Internacionais </b> </p>

        <p> Tap Air Portugal </p>
        <p> Copa Airlines </p>
        <p> Aerolíneas Argentinas </p>
        <p> Air France </p>
        <p> Iberia </p>
        <p> American Airlines </p>
        </div>

        <div className="item">
        <br/>
        <br/>
        <p> <b> Companhias Aéreas Nacionais </b> </p>

        <p> Azul Viagens </p>
        <p> Latam </p>
        <p> Tam </p>
        <p> VoePass </p>
        <p> Avianca </p>
        </div>
      </div>

      {/* Imagem abaixo dos itens */}
      <div className="image-containe">
        <img className="Img_2" src={Logo} alt="Viagem" />
      </div>

      {/* Seção com mais itens abaixo da imagem */}
      <div className="row">
        <div className="item">
          <p> MadamesVoyage.com Ltda. – CNPJ/ME 40.59.12/0008-76 </p>
 
          <p> Madames Voyage é uma marca do Grupo As Gatitas e sua razão social é MadamesVoyage.com Ltda. 
              Ministério do Turismo - Cadastur 42.395627.30.0009-5 / 42.395627.30.0009-5 – CNPJ/ME 40.59.12/0008-76. 
              Todos os direitos reservados. Avenida Ana Lombardi, 242, 8º andar, Jardim Canudos, Vinhedo, São Paulo, CEP 13269-540. </p>

          <p> Copyright 1992-2024, MademesVoyage.com Ltda </p>

        </div>

        <div className="item">
          <p>
          A Madames Voyage comercializa os produtos de seus fornecedores de forma direta pelo seu site (www.mademesvoyage.com.br), 
          aplicativo e televendas. Não há qualquer venda por redes sociais (Facebook, Instagram, Twitter, LinkedIn, TikTok, etc.).
          Pós-vendas - os canais oficiais de atendimento aos clientes são: por meio do telefone (19) 97864-2324 e Minhas Viagens. 
          A Madames Voyage não realiza qualquer tipo de abordagem nas redes sociais ou sites de relacionamento, tampouco disponibiliza 
          e-mails de contato com domínios distintos de @madamesvoyage.com.br. Endereços de e-mails com domínios: @hotmail.com @gmail.com @outlook.com 
          ou qualquer outro neste sentido não tem qualquer relação com a Madames Voyage. Mais esclarecimentos em www.madamesvoyage.com.br
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

