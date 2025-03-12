import { useState } from "react";
import "./Style_Todos.css";
import Nav from "../Components/Navbar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Coreias from "../assets/Coreia.jpeg";
import Itali from "../assets/Italia.jpeg"
import Malvi from "../assets/Malvidas.jpeg"
import Orland from "../assets/Orlando.jpeg";
import Portug from "../assets/Portugal.jpeg";

function Portugal() {
    const [nota, setNota] = useState(0);
  
    const selecionarNota = (notaSelecionada) => {
      setNota(notaSelecionada);
    };
  
    const destinos = [
      {
        nome: "The One Palácio da Anunciada",
        descricao:
          "O The One Palácio da Anunciada é um hotel cinco estrelas que combina a sofisticação da arquitetura histórica com o luxo contemporâneo. Localizado no coração de Lisboa, a poucos passos da Avenida da Liberdade, este magnífico hotel ocupa um palácio restaurado do século XVI, oferecendo aos hóspedes uma experiência de exclusividade e requinte.",
        valor: "R$ 18.540",
        imagem: Portug,
      },
    ];
  
    return (
      <>
        <div className="container">
          <Header />
          <Nav />
          <h1>Portugal - Hospedagem</h1>
  
          {destinos.map((destino, index) => (
              <div key={index} className="card">
                <img
                  src={destino.imagem}
                  alt={destino.nome}
                  className="destino-img"
                />
                <h2>{destino.nome}</h2>
                <p>{destino.descricao}</p>
                <p className="valor">{destino.valor}</p> 
  
          
                <div className="avaliacao">
                  <h2>Avalie nosso serviço ⭐</h2>
                  {[1, 2, 3, 4, 5].map((numero) => (
                    <span
                      key={numero}
                      onClick={() => selecionarNota(numero)}
                      className={numero <= nota ? "star filled" : "star"}
                    >
                      ★
                    </span>
                  ))}
                </div> 
           </div>
            ))}
        
  
          <br />
          <br />
  
          <div className="links-container">
            <h2>Outros Destinos</h2>
            <br />
            <ul>
              <li>
                <a href="/Orlando" className="link-destino">
                  Portugal
                </a>
              </li>
              <li>
                <a href="/Coreia" className="link-destino">
                  Coreia
                </a>
              </li>
              <li>
                <a href="/Maldivas" className="link-destino">
                  Maldivas
                </a>
              </li>
              <li>
                <a href="/Italia" className="link-destino">
                  Itália
                </a>
              </li>
            </ul>
          </div>
          <br />
          <br />
  
          <Footer />
        </div>
      </>
    );
  }

  <hr/>
  
function Coreia() {
    const [nota, setNota] = useState(0);
  
    const selecionarNota = (notaSelecionada) => {
      setNota(notaSelecionada);
    };
  
    const destino = [
      {
        nome: "Banyan Tree Club & Spa Seoul",
        descricao:
          "O Banyan Tree Club & Spa Seoul é um dos hotéis mais exclusivos da Coreia do Sul, oferecendo uma combinação perfeita de luxo, bem-estar e privacidade. Situado no sopé do Monte Namsan, no centro de Seul, o resort proporciona uma fuga serena da agitação da cidade, ao mesmo tempo em que mantém fácil acesso aos principais pontos turísticos da capital.",
        valor: "R$ 32.000",
        imagem: Coreias,
      },
    ];
  
    return (
      <div className="container">
        <Header />
        <Nav />
        <h1>Coreia do Sul - Hospedagem</h1>
        <div>
          {destino.map((destino, index) => (
            <div key={index} className="card">
              <img
                src={destino.imagem}
                alt={destino.nome}
                className="destino-img"
              />
              <h2>{destino.nome}</h2>
              <p>{destino.descricao}</p>
              <p className="valor">{destino.valor}</p>
  
              <div className="avaliacao">
                <h2>Avalie nosso serviço ⭐</h2>
                {[1, 2, 3, 4, 5].map((numero) => (
                  <span
                    key={numero}
                    onClick={() => selecionarNota(numero)}
                    className={numero <= nota ? "star filled" : "star"}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <br />
        <br />
  
        <div className="links-container">
          <h2>Outros Destinos</h2>
          <br/>
          <ul>
            <li>
              <a href="/Portugual" className="link-destino">
                Portugal
              </a>
            </li>
            <li>
              <a href="/Orlando" className="link-destino">
                Orlando
              </a>
            </li>
            <li>
              <a href="/Maldivas" className="link-destino">
                Maldivas
              </a>
            </li>
            <li>
              <a href="/Italia" className="link-destino">
                Itália
              </a>
            </li>
          </ul>
        </div>
        <br />
        <br />
  
        <Footer />
      </div>
    );
  }

  <hr/>

  
function Italia() {
    const [nota, setNota] = useState(0);
  
    const selecionarNota = (notaSelecionada) => {
      setNota(notaSelecionada);
    };
  
    const destino = {
      nome: "Resort All-Inclusive",
      descricao:
        "Desfrute de uma estadia luxuosa com tudo incluso! Aproveite praias paradisíacas, gastronomia requintada e serviços exclusivos neste incrível resort nas Maldivas.",
      valor: "R$ 15.700",
      imagem: Itali
    };
  
    return (
      <div className="container">
        <Header/>
        <Nav/>
        <h1>Destinos nas Maldivas</h1>
        <div className="card">
          <div className="content">
            <img src={destino.imagem} alt={destino.nome} className="destino-img" />
            <div className="descricao">
              <h2>{destino.nome}</h2>
              <p>{destino.descricao}</p>
            </div>
          </div>
  
          <p className="valor">{destino.valor}</p>
  
          <div className="avaliacao">
            <h2>Avalie nosso serviço ⭐</h2>
            {[1, 2, 3, 4, 5].map((numero) => (
              <span
                key={numero}
                onClick={() => selecionarNota(numero)}
                className={numero <= nota ? "star filled" : "star"}
              >
                ★
              </span>
            ))}
            <p>{nota === 0 ? "" : `Você nos avaliou com ${nota} estrela(s)`}</p>
          </div>    
  
          <br />
        <br />
  
        <div className="links-container">
          <h2>Outros Destinos</h2>
          <br/>
          <ul>
            <li>
              <a href="/Portugual" className="link-destino">
                Portugal
              </a>
            </li>
            <li>
              <a href="/Orlando" className="link-destino">
                Orlando
              </a>
            </li>
            <li>
              <a href="/Maldivas" className="link-destino">
                Maldivas
              </a>
            </li>
            <li>
              <a href="/Coreia" className="link-destino">
                Coreia
              </a>
            </li>
          </ul>
        </div>
        <br />
        <br />
  
          <Footer />
        </div>
      </div>
    );
  }

  <hr/>

  
function Orlando() {
    const [nota, setNota] = useState(0);
  
    const selecionarNota = (notaSelecionada) => {
      setNota(notaSelecionada);
    };
  
    const destino = [
      {
        nome: "Disney's Grand Floridian Resort & Spa",
        descricao:
          "O Disney’s Grand Floridian Resort & Spa é o hotel mais luxuoso do Walt Disney World Resort, oferecendo uma combinação perfeita entre elegância vitoriana, conforto cinco estrelas e a magia Disney. Situado às margens da Seven Seas Lagoon, este resort icônico proporciona vistas deslumbrantes do Magic Kingdom, além de oferecer experiências exclusivas que fazem os hóspedes se sentirem parte de um conto de fadas.",
        valor: "R$ 20.699",
        imagem: Orland,
      },
    ];
  
    return (
      <div className="container">
        <Header />
        <Nav />
        <h1>Orlando - Hospedagem</h1>
        <div>
          {destino.map((destino, index) => (
            <div key={index} className="card">
              <img
                src={destino.imagem}
                alt={destino.nome}
                className="destino-img"
              />
              <h2>{destino.nome}</h2>
              <p>{destino.descricao}</p>
              <p className="valor">{destino.valor}</p>
  
              <div className="avaliacao">
                <h2>Avalie nosso serviço ⭐</h2>
                {[1, 2, 3, 4, 5].map((numero) => (
                  <span
                    key={numero}
                    onClick={() => selecionarNota(numero)}
                    className={numero <= nota ? "star filled" : "star"}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
  
        <br />
        <br />
  
        <div className="links-container">
          <h2>Outros Destinos</h2>
          <br/>
          <ul>
            <li>
              <a href="/Portugual" className="link-destino">
                Portugal
              </a>
            </li>
            <li>
              <a href="/Coreia" className="link-destino">
              Coreia
              </a>
            </li>
            <li>
              <a href="/Maldivas" className="link-destino">
                Maldivas
              </a>
            </li>
            <li>
              <a href="/Italia" className="link-destino">
                Itália
              </a>
            </li>
          </ul>
        </div>
        <br />
        <br />
        
        <Footer />
      </div>
    );
  }

  <hr/>
  
function Maldivas() {
    const [nota, setNota] = useState(0);
  
    const selecionarNota = (notaSelecionada) => {
      setNota(notaSelecionada);
    };
  
    const destino = {
      nome: "Resort All-Inclusive",
      descricao:
        "Desfrute de uma estadia luxuosa com tudo incluso! Aproveite praias paradisíacas, gastronomia requintada e serviços exclusivos neste incrível resort nas Maldivas.",
      valor: "R$ 15.700",
      imagem: Malvi
    };
  
    return (
      <div className="container">
        <Header/>
        <Nav/>
        <h1>Destinos nas Maldivas</h1>
        <div className="card">
          <div className="content">
            <img src={destino.imagem} alt={destino.nome} className="destino-img" />
            <div className="descricao">
              <h2>{destino.nome}</h2>
              <p>{destino.descricao}</p>
            </div>
          </div>
  
          <p className="valor">{destino.valor}</p>
  
          <div className="avaliacao">
            <h2>Avalie nosso serviço ⭐</h2>
            {[1, 2, 3, 4, 5].map((numero) => (
              <span
                key={numero}
                onClick={() => selecionarNota(numero)}
                className={numero <= nota ? "star filled" : "star"}
              >
                ★
              </span>
            ))}
          </div>    
          <br />
        <br />
  
        <div className="links-container">
          <h2>Outros Destinos</h2>
          <br/>
          <ul>
            <li>
              <a href="/Portugual" className="link-destino">
                Portugal
              </a>
            </li>
            <li>
              <a href="/Orlando" className="link-destino">
                Orlando
              </a>
            </li>
            <li>
              <a href="/Coreia" className="link-destino">
                Coreia
              </a>
            </li>
            <li>
              <a href="/Italia" className="link-destino">
                Itália
              </a>
            </li>
          </ul>
        </div>
        <br />
        <br />
  
          <Footer />
        </div>
      </div>
    );
  }
  
  
  export default Portugal; Maldivas; Italia; Orlando; Coreia;
  