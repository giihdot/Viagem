import Img1 from "../assets/1.jpg";
import Img2 from "../assets/2.jpg";
import Img3 from "../assets/3.jpg";
import Img4 from "../assets/4.jpg";

function Carrosel() {
  let currentIndex = 0;
  const slides = document.querySelector(".slides");
  const slideArray = document.querySelectorAll(".slides img");
  const totalSlides = slideArray.length;

  document.querySelector(".prev").addEventListener("click", () => {
    moveSlide(-1);
  });

  document.querySelector(".next").addEventListener("click", () => {
    moveSlide(1);
  });

  function moveSlide(step) {
    currentIndex += step;
    if (currentIndex >= totalSlides) {
      currentIndex = 0;
    } else if (currentIndex < 0) {
      currentIndex = totalSlides - 1;
    }
    slides.style.transform = "translateX(" + -25 * currentIndex + "%)";
  }

  setInterval(() => {
    moveSlide(1);
  }, 5000); // Muda a imagem a cada 3 segundos
  
  return (
    <section class="carousel">
      <section class="slides">
        <img src={Img1} alt="Imagem 1" />
        <img src={Img2} alt="Imagem 2" />
        <img src={Img3} alt="Imagem 3" />
        <img src={Img4} alt="Imagem 4" />
      </section>
      <button class="prev">&#10094;</button>
      <button class="next">&#10095;</button>
    </section>
  );
}

export default Carrosel