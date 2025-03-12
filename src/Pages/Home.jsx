import Header from "../Components/Header";
import Nav from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Components/Footer.css";
import './Home.css'
import Carrosel from "../Components/Carrosel";
import India from '../assets/India.jpg'
import Finlandia from '../assets/Finlandia.jpg'
import Egito from '../assets/Egito.jpg'

function Home() {
  return (
    <>
      <section className="Flex-Colunm">
      <Header titulo="MADAMES VOYAGE" />
        <Nav />
       
      </section>
      <Carrosel />
      <br/>
      <br/>
      <br/>
      <br/>
      <section className="Paragrafo">
        Seja bem-vindo à Madames Voyage, a sua agência de viagens especializada
        em criar experiências inesquecíveis ao redor do mundo! Com uma equipe
        dedicada e apaixonada por turismo, oferecemos pacotes exclusivos para
        destinos dos sonhos, com atendimento personalizado e curadoria de
        roteiros que atendem a todos os tipos de viajantes. Desde viagens
        tranquilas para relaxar em paraísos tropicais até aventuras emocionantes
        por destinos históricos e culturais, na Madames Voyage, nossa missão é
        transformar cada viagem em uma experiência única, repleta de conforto,
        segurança e muito prazer. Deixe-nos planejar o seu próximo destino e
        garantir que sua jornada seja inesquecível! Viagens sob medida, com o
        toque de excelência que você merece. Madames Voyage – onde a sua viagem
        começa com a nossa paixão por descobrir o mundo.
        <br/>
        <br/>
        <br/>
        A Madames Voyage é uma agência de viagens renomada, reconhecida por proporcionar 
        experiências inesquecíveis aos seus clientes. Oferecemos passagens aéreas com os melhores preços, 
        hospedagens de qualidade e passeios exclusivos para destinos ao redor do mundo. 
        Além disso, contamos com ofertas imperdíveis para garantir que cada viagem seja única e acessível. 
        Com orgulho, somos a 2ª melhor agência de viagem do mundo, destacando-nos pela excelência no atendimento 
        e pela personalização de cada jornada.
      </section>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="container">
      <div className="block">
        <h6> ÍNDIA </h6>
        <p> A Índia é um país vasto e diverso, conhecido por sua rica história, cultura vibrante e tradições milenares. <br/>
        Desde os templos antigos e monumentos como o Taj Mahal até as cores intensas de suas festas, como o Holi, a Índia encanta com sua variedade. <br/>
        Com uma culinária única e uma espiritualidade marcante, é um destino fascinante para quem busca novas experiências. <br/>
        Sua mistura de modernidade e tradições torna o país ainda mais fascinante. </p>
        <img className="Img" src={India} alt="India" />
      </div>

      <div className="block">
        <h6> FINLÂNDIA </h6>
        <p> A Finlândia é um país nórdico conhecido por sua paisagem deslumbrante, composta por florestas, lagos e o fenômeno da aurora boreal. <br/>
        Com uma cultura que valoriza a educação, bem-estar e a sustentabilidade, é um dos lugares mais avançados em qualidade de vida. <br/>
        Helsinque, sua capital, combina modernidade com tradição. Além disso, a Finlândia é famosa por ser o lar do Papai Noel e por suas saunas únicas.</p>
        <img className="Img" src={Finlandia} alt="Finlandia" />
      </div>

      <div className="block">
        <h6> EGITO </h6>
        <p> O Egito é um país localizado no nordeste da África, famoso por sua rica história e antigas civilizações. <br/>
        As pirâmides de Gizé e a Esfinge são alguns dos maiores marcos históricos do mundo. O rio Nilo, que corta o país, tem grande importância cultural e econômica. <br/>
        O Egito também é conhecido por sua religião e mitologia, além de ser um destino turístico popular. <br/>
        Sua capital, Cairo, é uma das maiores cidades do mundo árabe. </p>
        <img className="Img" src={Egito} alt="Egito" />
      </div>
    </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer />
    </>
  );
}

export default Home;
