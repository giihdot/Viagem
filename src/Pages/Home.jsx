import Header from "../Components/Header";
import Nav from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Components/Footer.css"
import Carrosel from "../Components/Carrosel";

function Home() {
  return (
    <>
    <section className="Flex-Colunm" >
      <Header titulo="MADAMES VOYAGE"/>
      <Nav />
      </section>
      <Carrosel />
      <Footer />
    </>
  );
}

export default Home;
