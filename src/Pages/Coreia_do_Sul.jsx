import "./Style_Todos.css";
import Nav from "../Components/Navbar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Coreias from "../assets/Coreia.jpeg"

const destino = [
  {
    nome: "Banyan Tree Club & Spa Seoul",
    descricao: "Ideal para quem quer luxo e tranquilidade",
    valor: "R$ 32.000",
    imagem: Coreias,
  },
];

function Coreia() {
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
          </div>
        ))}
        <Footer />
      </div>
    </div>
  );
}

export default Coreia;
