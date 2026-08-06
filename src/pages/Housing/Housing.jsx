import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import logements from "../../data/logements.json";
import Tags from "../../components/Tags/Tags";
import Rating from "../../components/Rating/Rating";
import Collapse from "../../components/Collapse/Collapse";

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

          <Tags tags={logement.tags} />

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
          <Rating rating={logement.rating} />

        </div>

      </div>

      <div className="housing__collapse">

        <Collapse
          title="Description"
          content={<p>{logement.description}</p>}
        />
        <Collapse
          title="Équipements"
          content={
            <ul>
              {logement.equipments.map((equipment) => (
                <li key={equipment}>{equipment}</li>
              ))}
            </ul>
          }
        />

      </div>

    </div>
  );
}

export default Housing;