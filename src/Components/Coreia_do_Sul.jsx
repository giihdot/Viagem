import { useState } from "react";
import "../Pages/Style_Todos.css";
import Coreias from "../assets/Coreia.jpeg";

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
      valor: "R$32.000",
      imagem: Coreias,
    },
  ];

  return (
    <div >
      <h1>COREIA DO SUL</h1>
      
        {destino.map((destino, index) => (
          <div key={index} className="card">
            <img
              src={Coreias}
            />
            <h3 className="titulo">{destino.nome}</h3>
            <p className="descricao">{destino.descricao}</p>
            <p className="valor">{destino.valor}</p>

            <div className="avaliacao">
              <h5>Avalie nosso serviço ⭐</h5>
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
      
  );
}

export default Coreia;
