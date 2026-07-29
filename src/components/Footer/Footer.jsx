import { Link } from "react-router-dom";
import logoFooter from "../../assets/LOGO-Footer.png";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
        <img src={logoFooter} alt="Kasa" />
        <p>© 2026 Kasa. All rights reserved.</p>
    </footer>
  );
}

export default Footer;