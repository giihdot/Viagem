import { useState } from "react";
import "../Pages/Style_Todos.css";
import Orland from "../assets/Orlando.jpeg";

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
      valor: "R$20.699",
      imagem: Orland,
    },
  ];

  return (
    <div>
      <h1> ORLANDO </h1>
      <div>
        {destino.map((destino, index) => (
          <div key={index} className="card">
            <img
              src={Orland}
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
    </div>
  );
}

export default Orlando;
