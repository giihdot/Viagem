import { useState } from "react";
import "../Pages/Style_Todos.css";
import Malvi from "../assets/Malvidas.jpeg";

function Maldivas() {
  const [nota, setNota] = useState(0);

  const selecionarNota = (notaSelecionada) => {
    setNota(notaSelecionada);
  };

  const destino = {
    nome: "Resort All-Inclusive",
    descricao:
      "Desfrute de uma estadia luxuosa com tudo incluso! Aproveite praias paradisíacas, gastronomia requintada e serviços exclusivos neste incrível resort nas Maldivas.",
    valor: "R$15.700",
    imagem: Malvi,
  };

  return (
    <div >
      <h1>MALDIVAS</h1>
      <div className="card">
        <img src={Malvi} />
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
    </div>
  );
}

export default Maldivas;
