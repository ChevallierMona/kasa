import "./Rating.scss";

import starActive from "../../assets/star-active.svg";
import starInactive from "../../assets/star-inactive.svg";

function Rating({ rating }) {
  return (
    <div className="rating">

      {Array.from({ length: 5 }, (_, index) => (

        <img
          key={index}
          src={index < rating ? starActive : starInactive}
          alt={index < rating ? "Étoile active" : "Étoile inactive"}
          className="rating__star"
        />

      ))}

    </div>
  );
}

export default Rating;