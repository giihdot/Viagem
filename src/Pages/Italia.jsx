import { useState } from "react";
import "./Style_Todos.css";
import Itali from "../assets/Itali.jpeg"
import Nav from "../Components/Navbar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

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
        <Footer />
      </div>
    </div>
  );
}

export default Italia;