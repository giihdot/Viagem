import "./Maldivas.css";

const destinos = [
  { nome: "Resort Luxuoso", descricao: "Bangalôs sobre o mar.", valor: "R$ 12.500"},
  { nome: "Vila Privativa", descricao: "Praias de areia branca.", valor: "R$ 8.900"},
  { nome: "Resort All-Inclusive", descricao: "Tudo incluso.", valor: "R$ 15.700"},
  { nome: "Ilha Particular", descricao: "Exclusividade total.", valor: "R$ 25.000"},
  { nome: "Pacote de Mergulho", descricao: "Explore os corais.", valor: "R$ 9.500"}
];

function Maldivas() {
  return (
    <div className="container">
      <h1>Destinos nas Maldivas</h1>
      <div className="grid">
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
