import { useState } from "react";
import "./Style_Todos.css";
import Nav from "../Components/Navbar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Coreias from "../assets/Coreia.jpeg"


function Coreia() {
    
    const [nota, setNota] = useState(0);

    const selecionarNota = (notaSelecionada) => {
      setNota(notaSelecionada);
    };
  

const destino = [
  {
    nome: "Banyan Tree Club & Spa Seoul",
    descricao: "O Banyan Tree Club & Spa Seoul é um dos hotéis mais exclusivos da Coreia do Sul, oferecendo uma combinação perfeita de luxo, bem-estar e privacidade. Situado no sopé do Monte Namsan, no centro de Seul, o resort proporciona uma fuga serena da agitação da cidade, ao mesmo tempo em que mantém fácil acesso aos principais pontos turísticos da capital.",
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

export default Coreia;
