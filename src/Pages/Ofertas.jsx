import { useState } from "react";
import Header from "../Components/Header";
import Nav from "../Components/Navbar";
import Footer from "../Components/Footer";
import Carrosel from "../Components/Carrosel";
import Logo from "../assets/Logo - Viagem.png";
import Ny from "../assets/NovaYork.jpg";
import Gramado from "../assets/Gramado.jpg";
import CdDia from "../assets/Chapada.jpg";
import OuroPreto from "../assets/OuroPreto.jpg";
import Rj from "../assets/Rio.jpg";
import Ubatuba from "../assets/Uba.jpg";
import Recife from "../assets/Recife.jpg";
import BuenosAires from "../assets/BuAi.jpg";


const ofertas = [
  {
    id: 1,
    titulo: "Viagem dos Sonhos",
    descricao:
      "Paris, Londres, Nova York. Inclui passagens aéreas, 5 noites em hotel 4 estrelas, city tour, e  muito mais conforto para você!",
    preco: "A partir de R$ 4.999,00 por casal",
    desconto: "10% de desconto para reservas feitas até o final do mês",
    beneficios: [
      "Passagem aérea de ida e volta",
      "City tour com guia local",
      "Transfer entre aeroporto e hotel",
      "Ensaio fotográfico profissional",
    ],
    imagem: Ny
  },
  {
    id: 2,
    titulo: "Escapada Romântica",
    descricao:
      "Ilha Bela, Gramado, Campos do Jordão. Inclui 3 noites em chalé, jantar romântico, e passeios encantadores.",
    preco: "A partir de R$ 2.299,00 por casal",
    desconto: "15% de desconto para casais em lua de mel",
    beneficios: [
      "Jantar romântico à luz de velas",
      "Passeio de barco ou passeio pelo centro histórico",
      "Ensaio fotográfico profissional",
    ],
    imagem: Gramado

  },
  {
    id: 3,
    titulo: "Aventura e Natureza",
    descricao:
      "Chapada Diamantina, Bonito, Ilha de Santa Catarina. Inclui 6 noites de hospedagem e atividades de ecoturismo.",
    preco: "A partir de R$ 3.500,00 por pessoa",
    desconto: "20% de desconto para grupos a partir de 4 pessoas",
    beneficios: [
      "Atividades como rafting e trilhas",
      "Guia especializado em ecoturismo",
      "Aulas de fotografia de natureza",
    ],
    imagem: CdDia

  },
  {
    id: 4,
    titulo: "Exploração Cultural",
    descricao:
      "Salvador, Olinda, Ouro Preto, Paraty. Inclui passeios culturais e visitas a museus e festas típicas.",
    preco: "A partir de R$ 2.000,00 por pessoa",
    desconto: "5% de desconto para estudantes e professores",
    beneficios: [
      "Visitas guiadas aos centros históricos",
      "Aula de culinária local",
      "Ingressos para museus e festivais",
    ],
    imagem: OuroPreto

  },
  {
    id: 5,
    titulo: "Férias em Família",
    descricao:
      "Rio de Janeiro, Foz do Iguaçu, Maceió. Inclui 7 noites de hospedagem, transporte e atividades para crianças.",
    preco: "A partir de R$ 6.000,00 para 2 adultos e 2 crianças",
    desconto: "10% de desconto para grupos de 4 ou mais pessoas",
    beneficios: [
      "Atividades para crianças e parques temáticos",
      "Kit de viagem para crianças",
      "Acomodações familiares",
    ],
    imagem: Rj

  },
  {
    id: 6,
    titulo: "Viagem de Bem-Estar",
    descricao:
      "Ubatuba, Caldas Novas, Serra Gaúcha. Inclui 4 noites de resort de luxo com spa e alimentação saudável.",
    preco: "A partir de R$ 3.800,00 por pessoa",
    desconto: "10% de desconto para compras antecipadas",
    beneficios: [
      "Acesso ao spa",
      "Aulas de yoga e meditação",
      "Alimentação balanceada e saudável",
    ],
    imagem: Ubatuba

  },
  {
    id: 7,
    titulo: "De Última Hora",
    descricao:
      "São Paulo, Belo Horizonte, Recife. Inclui passagens aéreas e 2 a 3 noites de hospedagem.",
    preco: "A partir de R$ 999,00 por pessoa",
    desconto: "Descontos de até 40% para reservas de última hora",
    beneficios: [
      "Voucher de compras durante a viagem",
      "Transfer incluído",
      "Hospedagem confortável em hotel 3 estrelas",
    ],
    imagem: Recife

  },
  {
    id: 8,
    titulo: "Viagem Gastronômica",
    descricao:
      "São Paulo, Buenos Aires, Lisboa. Inclui tours gastronômicos, refeições em restaurantes renomados e aulas de culinária.",
    preco: "A partir de R$ 5.200,00 por pessoa",
    desconto: "10% de desconto para reservas feitas até o fim do mês",
    beneficios: [
      "Tour gastronômico em cada destino",
      "Jantar em restaurantes Michelin",
      "Aulas de culinária com chefs renomados",
    ],
    imagem: BuenosAires

  },
];

const Ofertas = () => {
  return (
    <>
    <section className="Flex-Colunm" >
      <Header titulo="MADAMES VOYAGE"/>
      <Nav />
      </section>

    <div className="ofertas-container">
      <h1 className="h1">OFERTAS DE VIAGEM</h1>      

      <div className="ofertas-list">
        {ofertas.map((oferta) => (
          <div key={oferta.id} className="oferta-card">
            <h2 className="h2">{oferta.titulo}</h2>
            <img className="img_Ofe" src={oferta.imagem} alt={oferta.titulo} />
            <p className="p">{oferta.descricao}</p>
            <p className="p">
              <strong>{oferta.preco}</strong>
            </p>
            <p className="p">
              <em>{oferta.desconto}</em>
            </p>
            <h3 className="h3">Benefícios inclusos:</h3>
            <ul>
              {oferta.beneficios.map((beneficio, index) => (
                <li key={index}> {beneficio} </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Ofertas;
