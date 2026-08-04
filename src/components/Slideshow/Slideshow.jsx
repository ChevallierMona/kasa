import { useState } from "react";
import "./Slideshow.scss";
import arrowLeft from "../../assets/arrow_left.svg";
import arrowRight from "../../assets/arrow_right.svg";

function Slideshow({ pictures }) {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex === pictures.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previousSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(pictures.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="slideshow">

      <img
        className="slideshow__image"
        src={pictures[currentIndex]}
        alt="Logement"
      />

      {pictures.length > 1 && (
        <>
          <img
            src={arrowLeft}
            alt="Image précédente"
            onClick={previousSlide}
            className="slideshow__arrow slideshow__arrow--left"
          />

          <img
            src={arrowRight}
            alt="Image suivante"
            onClick={nextSlide}
            className="slideshow__arrow slideshow__arrow--right"
          />

          <p className="slideshow__counter">
            {currentIndex + 1} / {pictures.length}
          </p>
        </>
      )}

    </div>
  );
}

export default Slideshow;