import "./Style_Todos.css";
import Nav from "../Components/Navbar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Portug from "../assets/Portugal.jpeg"

const destino = [
  {
    nome: "The One Palácio da Anunciada",
    descricao: "Charme e sofisticação",
    valor: "R$ 18.540",
    imagem: Portug,
  },
];

function Portugal() {
  return (
    <div className="container">
      <Header />
      <Nav />
      <h1>Portugal - Hospedagem</h1>
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

export default Portugal;
