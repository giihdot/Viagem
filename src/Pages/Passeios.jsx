import React, { useState, useEffect } from 'react';
import './Passeios.css';

const Passeios = ({ passeios }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // UseEffect para mudar a imagem automaticamente a cada 2 segundo
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % passeios[0].imagens.length);
    }, 2000);

    return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
  }, [passeios]);

  return (
    <div className="passeios-container">
      {passeios.map((passeio, index) => (
        <div key={index} className="passeio-item">
          <h2>{passeio.nome}</h2>
          <p className="preco">{passeio.preco}</p>
          <p>{passeio.descricao}</p>
          <div className="slider-container">
            <div className="slider" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
              {passeio.imagens.map((imagem, idx) => (
                <div key={idx} className="slide">
                  <img src={imagem} alt={`${passeio.nome} ${idx}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Passeios;


