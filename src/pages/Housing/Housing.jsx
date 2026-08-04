import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import logements from "../../data/logements.json";

import Slideshow from "../../components/Slideshow/Slideshow";

import "./Housing.scss";

function Housing() {
  const { id } = useParams();
  const navigate = useNavigate();

  const logement = logements.find(
    (logement) => logement.id === id
  );

  useEffect(() => {
    if (!logement) {
      navigate("/404");
    }
  }, [logement, navigate]);

  if (!logement) {
    return null;
  }

  return (
    <div className="housing">

      <Slideshow pictures={logement.pictures} />

      <div className="housing__content">

        <div className="housing__info">

          <h1 className="housing__title">
            {logement.title}
          </h1>

          <p className="housing__location">
            {logement.location}
          </p>

          <div className="housing__tags">
            {logement.tags.map((tag, index) => (
              <span
                key={index}
                className="housing__tag"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>

        <div className="housing__host-section">

          <div className="housing__host">

            <h2 className="housing__host-name">
              {logement.host.name}
            </h2>

            <img
              className="housing__host-picture"
              src={logement.host.picture}
              alt={logement.host.name}
            />

          </div>

          <div className="housing__rating">

            {Array.from({ length: 5 }, (_, index) => (
              <span
                key={index}
                className={`housing__star ${
                  index < logement.rating
                    ? "housing__star--active"
                    : "housing__star--inactive"
                }`}
              >
                ★
              </span>
            ))}

          </div>

        </div>

      </div>

      <div className="housing__collapse">


      </div>

    </div>
  );
}

export default Housing;