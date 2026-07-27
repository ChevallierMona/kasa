import { Link } from "react-router-dom";
import logo from "../../assets/LOGO.png";
import "./Header.scss";


function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Kasa" className="header__logo" />

  <nav>
    <ul className="header__nav">
      <li>
        <Link to="/" className="header__link">
          Accueil
        </Link>
      </li>
      <li>
        <Link to="/about" className="header__link">
          À propos
        </Link>
      </li>
    </ul>
  </nav>
</header>
  )
}
export default Header;