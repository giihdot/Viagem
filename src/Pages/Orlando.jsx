import "./Style_Todos.css";
import Nav from "../Components/Navbar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Orland from "../assets/Orlando.jpeg"

const destino = [
  {
    nome: "Disney's Grand Floridian Resort & Spa",
    descricao: "Elegância vitoriana e vista para o Castelo da Cinderela",
    valor: "R$ 20.699",
    imagem: Orland,
  },
];

function Orlando() {
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
          </div>
        ))}
        <Footer />
      </div>
    </div>
  );
}

export default Orlando;
