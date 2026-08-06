import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import bannerAboutImg from '../../assets/banner-aPropos.png';
import arrow_left from '../../assets/arrow-top.svg';
import "./About.scss";
import Collapse from "../../components/Collapse/Collapse";


function About() {
  return(
      <div className="about">
      <Banner image={bannerAboutImg}  />
      <div className="about__content">
<Collapse
          title="Fiabilité"
        />

        <Collapse
          title="Respect"
        />

        <Collapse
          title="Service"
        />

        <Collapse
          title="Sécurité"
        />
      </div>
      </div>
);
}

export default About;
