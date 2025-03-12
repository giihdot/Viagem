import React from 'react';
import Header from '../Components/Header';
import Nav from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../Pages/Passeios'
import Passeios from '../Pages/Passeios';
import Jules1 from '../assets/Jules_Img1.jpg'
import Jules2 from '../assets/Jules_Img2.jpg'
import BigBen1 from '../assets/BigBen_Img1.jpg'
import BigBen2 from '../assets/BigBen_Img2.jpg'
import Coliseu1 from '../assets/Coliseu_Img1.jpg'
import Coliseu2 from '../assets/Coliseu_Img2.jpg'
import Louvre1 from '../assets/Louvre_Img1.jpg'
import Louvre2 from '../assets/Louvre_Img2.jpg'
import Veneza1 from '../assets/Veneza_Img1.jpg'
import Veneza2 from '../assets/Veneza_Img2.jpg'
import Oktoberfest1 from '../assets/Oktoberfest_Img1.jpg'
import Oktoberfest2 from '../assets/Oktoberfest_Img2.jpg'
import AnneFrank1 from '../assets/AnneFrank_Img1.jpg'
import AnneFrank2 from '../assets/AnneFrank_Img2.jpg'
import MonteFuji1 from '../assets/MonteFuji_Img1.jpg'
import MonteFuji2 from '../assets/MonteFuji_Img2.jpg'


const App = () => {
  const passeiosData = [
    {
      nome: "JULES VERNE - PARIS",
      preco: "R$ 1.500,00 ou € 238",
      descricao: "O Restaurante Jules Verne, na Torre Eiffel, oferece uma experiência gastronômica única com vistas incríveis de Paris. Sua cozinha refinada mistura clássicos e inovações. Não esqueça de fazer sua reserva!",
      imagens: [
        Jules1,
        Jules2
      ]
    },
    {
      nome: "LONDRES - BIG BEN",
      preco: "R$ 2.699,99 ou € 429",
      descricao: "O Big Ben é o nome do famoso sino da Torre do Relógio do Palácio de Westminster, em Londres. Inaugurado em 1859, tornou-se um símbolo da cidade e do Reino Unido, conhecido mundialmente pelo seu som marcante.",
      imagens: [
        BigBen1,
        BigBen2
      ]
    },
    {
      nome: "COLISEU - ROMA",
      preco: "R$ 1.900,00 ou € 302",
      descricao: "O Coliseu é um antigo anfiteatro romano, localizado no centro de Roma, e um dos maiores símbolos do Império Romano. Construído no século I. Hoje, é uma das principais atrações turísticas do mundo.",
      imagens: [
        Coliseu1,
        Coliseu2
      ]
    },
    {
        nome: "LOUVRE - PARIS",
        preco: "R$ 1.999,99 ou € 318",
        descricao: "O Museu do Louvre, em Paris, é um dos maiores e mais famosos museus de arte do mundo. Abriga obras-primas como a Mona Lisa e a Vênus de Milo. Sua vasta coleção abrange mais de 9.000 anos de história da humanidade.",
        imagens: [
          Louvre1,
          Louvre2
        ]
      },
      {
        nome: "GÔNDOLA - VENEZA",
        preco: "R$ 850,99 ou € 135",
        descricao: "A gôndola é uma tradicional embarcação veneziana, símbolo icônico de Veneza. Usada para passeios pelos canais, oferece uma experiência romântica e única. As gôndolas, com seus designs característicos, são conduzidas por gondoleiros habilidosos.",
        imagens: [
          Veneza1,
          Veneza2
        ]
      },
      {
        nome: "OKTOBERFEST - ALEMANHA",
        preco: "R$ 682,78 ou € 108",
        descricao: "A Oktoberfest é a maior festa da cerveja do mundo, realizada anualmente em Munique, Alemanha. Iniciada em 1810, atrai milhões de visitantes para celebrar. É um evento cultural que reúne tradições alemãs e diversão.",
        imagens: [
          Oktoberfest1,
          Oktoberfest2
        ]
      },
      {
        nome: "ANNE FRANK - HOLANDA",
        preco: "R$ 2.384,95 ou € 379",
        descricao: "A Casa de Anne Frank, em Amsterdã, é o local onde Anne e sua família se esconderam durante a Segunda Guerra Mundial. Hoje, é um museu dedicado à memória de Anne e aos horrores do Holocausto.",
        imagens: [
          AnneFrank1,
          AnneFrank2
        ]
      },
      {
        nome: "MONTE FUJI - JAPÃO",
        preco: "R$ 3.641,99 ou € 579",
        descricao: "O Monte Fuji é a montanha mais alta do Japão, com 3.776 m de altura. Considerado um símbolo, é um destino popular para escaladores e  turistas. Sua forma em cone perfeita e a presença imponente fazem dele um dos vulcões mais conhecidos do mundo, sendo um grande ícone.",
        imagens: [
          MonteFuji1,
          MonteFuji2
        ]
      }
  ];
  <Footer/>

  return (
    <div>
        <Header titulo="MADAMES VOYAGE"/>
        <Nav/>
        <br/>
        <br/>
      <h1> PASSEIOS INTERNACIONAIS </h1>
       <br/>
       <br/>
      <Passeios passeios={passeiosData} />
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer/>
    </div>
  );
};

export default App;
