import "./Style_Todos.css";
import Passagem from "../Components/Passag";
import Nav from "../Components/Navbar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Alemanha from "../assets/Alemanha.jpg";
import Maragogi from "../assets/Maragogi.jpg";
import Natal from "../assets/Natal.jpg";
import Suica from "../assets/Suica.jpg";
import Holanda from "../assets/Holanda.jpg"



function Passag() {
  return (
    <>
      <section className="Flex-Colunm">
        <Header titulo="MADAMES VOYAGE" />
        <Nav />
      </section>
      <h4> PASSAGENS ÁEREAS ✈ </h4>
      <Passagem
        nome="MARAGOGI"
        origem="Origem: Guarulhos/SP"
        destino="Destino: Alagoas/AL"
        descricao="Embarque em uma viagem inesquecível para Maragogi, 
        um dos destinos mais paradisíacos de Alagoas! 
        Conheça suas praias de águas cristalinas e areias brancas, 
        além das famosas piscinas naturais, 
        onde o mar calmo revela um mundo de corais e vida marinha exuberante. 
        Maragogi é o lugar ideal para quem busca relaxar em um cenário de tirar o fôlego, 
        aproveitando o melhor da natureza em um ambiente tranquilo e acolhedor. 
        Prepare-se para viver momentos únicos e 
        inesquecíveis em um dos cantos mais encantadores do Brasil!"
        valor="Valor: R$600,00 a R$1.500,00"
        hora="Tempo (Voo): 2h30 / 3h"
        imagem={Maragogi}
      />

      <Passagem
        nome="AMSTERDÃ"
        origem="Origem: Campinas/SP"
        destino="Destino: Holanda/NL"
        descricao="Amsterdã, a encantadora capital da Holanda, 
        é uma cidade que combina beleza histórica e modernidade de maneira única. 
        Conhecida por seus canais românticos, museus renomados como o Rijksmuseum e a 
        Casa de Anne Frank, e a vibrante vida cultural, Amsterdã encanta a todos com seu charme europeu. 
        Passeie de barco pelos famosos canais, explore os bairros charmosos e aproveite a 
        deliciosa culinária local. Uma cidade que oferece história, arte e diversão em cada esquina!"
        valor="Valor: R$3.500,00 a R$5.500,00"
        hora="Tempo (Voo): 11h / 12h"
        imagem={Holanda}
      />

      <Passagem
        nome="NATAL"
        origem="Origem: Congonhas/SP"
        destino="Destino: Rio Grande do Norte/RN"
        descricao="Descubra o paraíso tropical de Natal, 
        no Rio Grande do Norte! Com suas praias de águas mornas e cristalinas, 
        dunas impressionantes e um clima quente o ano inteiro, 
        Natal é o destino perfeito para quem busca relaxar e aproveitar belezas naturais. 
        Conheça o famoso Parque das Dunas, a Fortaleza dos Reis Magos, 
        e se encante com o pôr do sol nas praias de Ponta Negra e Genipabu. 
        Uma viagem repleta de cultura, diversão e paisagens deslumbrantes te espera em Natal!"
        valor="Valor: R$600,00 a R$1.200,00"
        hora="Tempo (Voo): 3h40 / 4h"
        imagem={Natal}
      />

      <Passagem
        nome="BERLIM"
        origem="Origem: Campins/SP"
        destino="Destino: Alemanha/DE"
        descricao="Berlim, a vibrante capital da Alemanha, 
        é um destino que combina história, cultura e modernidade de forma única. 
        Conhecida por sua cena artística e cosmopolita, 
        a cidade é repleta de marcos históricos como o Portão de Brandemburgo, 
        o Muro de Berlim e o Memorial do Holocausto. Além disso, 
        Berlim oferece uma vida noturna agitada, museus renomados e uma arquitetura impressionante. 
        Uma cidade que reflete o passado, abraça o presente e se projeta para o futuro, 
        oferecendo uma experiência inesquecível para todos os visitantes."
        valor="Valor: R$3.500,00 a R$6.000,00"
        hora="Tempo (Voo): 12h / 13h"
        imagem={Alemanha}
      />

      <Passagem
        nome="LAUTERBRUNNEN"
        origem="Origem: Guarulho/SP"
        destino="Destino: Suiça/CH"
        descricao="Lauterbrunnen é um dos destinos mais deslumbrantes da Suíça, 
        conhecido por suas paisagens de tirar o fôlego e suas impressionantes quedas d'água. 
        Localizada no coração dos Alpes, a vila é cercada por montanhas majestosas 
        e mais de 70 cachoeiras, sendo a Trümmelbach Falls a mais famosa. Lauterbrunnen é o 
        ponto de partida para explorar outras atrações icônicas da região, como Jungfrau e o 
        Glacier Express. Com sua tranquilidade e beleza natural, 
        Lauterbrunnen é um verdadeiro paraíso para os amantes da natureza e aventureiros."
        valor=" Valor: R$3.500,00 a R$7.000,00"
        hora="Tempo (Voo): 11h / 12h"
        imagem={Suica}
      />
        <br/>
        <br/>
        <br/>
      <Footer />
    </>
  );
}

export default Passag;
