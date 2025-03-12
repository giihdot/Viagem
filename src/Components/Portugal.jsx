import { useState } from "react";
import "../Pages/Style_Todos.css";
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
      valor: "R$18.540",
      imagem: Portug,
    },
  ];

  return (
    <div className="container">
      <h1>PORTUGAL</h1>

      {destinos.map((destino, index) => (
        <div key={index} className="card">
          <img
            src={Portug}
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

export default Portugal;
