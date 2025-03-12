import { useState } from "react";
import "./Style_Todos.css";
import Nav from "../Components/Navbar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Coreias from "../Components/Coreia_do_Sul";
import Itali from "../Components/Italia";
import Malvi from "../Components/Maldivas";
import Orland from "../Components/Orlando";
import Portug from "../Components/Portugal";

function Hosp() {
  return (
    <>
    <section className="Flex-Colunm">
      <Header titulo="MADAMES VOYAGE" />
      <Nav />
    </section>
    <Coreias/>
    <Itali/>
    <Malvi/>
    <Orland/>
    <Portug/>
    <Footer/>
    </>
  );
}

export default Hosp;
