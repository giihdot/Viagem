import "./Passag.css"
function Passagem(props) {
  return (
    <>
    <section className="space">
      <section className="Flex-Row-1">
        <section className="Flex-Colunm">
          <h3> {props.nome} </h3>
          <section className="Flex-Row">
            <section className="or-de">
              <p> {props.origem} </p>
              <p> {props.destino} </p>
            </section>
            <section className="descr">
            <p> {props.descricao} </p>
            </section>
            <section className="va-ho">
              <p> {props.valor} </p>
              <p> {props.hora} </p>
            </section>
          </section>
        </section>
        <img src={props.imagem} />
      </section>
      </section>
    </>
  );
}

export default Passagem;
