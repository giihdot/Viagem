import Header from "../Components/Header";
import Nav from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Components/Footer.css";
import Carrosel from "../Components/Carrosel";

function Home() {
  return (
    <>
      <section className="Flex-Colunm">
        <Header titulo="MADAMES VOYAGE" />
        <Nav />
      </section>
      <Carrosel />
      <section>
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
      </section>
      <Footer />
    </>
  );
}

export default Home;
