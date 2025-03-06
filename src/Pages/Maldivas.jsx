import "./Maldivas.css";
import Nav from "../Components/Navbar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const destinos = [
  { nome: "Resort All-Inclusive", descricao: "Tudo incluso.", valor: "R$ 15.700"},
];

function Maldivas() {
  return (
    <div className="container">
      <Header/>
      <Nav/>
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
        <Footer />
      </div>
    </div>
  );
}

export default Maldivas;
