import "./Maldivas.css";
import Nav from "../Components/Navbar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const destino = [
  {
    nome: "The One Palácio da Anunciada",
    descricao: "Charme e sofisticação",
    valor: "R$ 18.540",
  },
];

function Portugual() {
  return (
    <div className="container">
      <Header />
      <Nav />
      <h1>Portugual - Hospedagem</h1>
      <div>
        {destino.map((destino, index) => (
          <div key={index} className="card">
            <img src={destino.imagem} alt={destino.nome} />
            <h2>{destino.nome}</h2>
            <p>{destino.descricao}</p>
            <p className="valor">{destino.valor}</p>
          </div>
        ))}
        <Footer />
      </div>
    </div>
  );
}

export default Portugual;
