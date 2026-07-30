import { useState } from "react";
import "./Slideshow.scss";

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="slideshow">
    <img
      src={pictures[currentIndex]}
      alt="Logement"
    />
    </div>
  );
}

export default Slideshow;