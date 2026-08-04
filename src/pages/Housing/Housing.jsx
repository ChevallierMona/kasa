import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logements from "../../data/logements.json";

import Slideshow from "../../components/Slideshow/Slideshow";
function Housing() {
  const { id } = useParams();
  const navigate = useNavigate();


  const logement = logements.find((logement) => logement.id === id);

  useEffect(() => {
    if (!logement) {
      navigate("/404");
    }
  }, [logement, navigate]);

  if (!logement) {
    return null;
  }

  return (
    <>
<Slideshow pictures={logement.pictures} />    </>
  );
}

export default Housing;