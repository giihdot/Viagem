import { useState } from "react";
import "./Style_Todos.css";
import Nav from "../Components/Navbar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
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
                Orlando
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

export default Portugal;
