import { Link } from "react-router-dom";
import "./Error.scss";
import error404 from "../../assets/404.png";
function Error() {
  return (
    <div className="error">
      <img src={error404} alt="404" />
      <p>Oups ! La page que vous demandez n'existe pas.</p>

      <Link className="error__link" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error;
