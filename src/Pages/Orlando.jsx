import { useState } from "react";
import "./Style_Todos.css";
import Nav from "../Components/Navbar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Orland from "../assets/Orlando.jpeg"

function Orlando() {

    const [nota, setNota] = useState(0);

    const selecionarNota = (notaSelecionada) => {
      setNota(notaSelecionada);
    };
  

const destino = [
  {
    nome: "Disney's Grand Floridian Resort & Spa",
    descricao: "Elegância vitoriana e vista para o Castelo da Cinderela",
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
          <img src={destino.imagem} alt={destino.nome} className="destino-img" />
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
        <Footer />
      </div>
  );
}

export default Orlando;
