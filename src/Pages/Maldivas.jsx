import "./Maldivas.css";

const destinos = [
  { nome: "Resort All-Inclusive", descricao: "Tudo incluso.", valor: "R$ 15.700"},
];

function Maldivas() {
  return (
    <div className="container">
      <h1>Destinos nas Maldivas</h1>
      <div>
        {destinos.map((destino, index) => (
          <div key={index} className="card">
            <img src={destino.imagem} alt={destino.nome} />
            <h2>{destino.nome}</h2>
            <p>{destino.descricao}</p>
            <p className="valor">{destino.valor}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Maldivas;
