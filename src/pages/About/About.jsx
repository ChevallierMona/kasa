import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import bannerAboutImg from '../../assets/banner-aPropos.png';
import arrow_left from '../../assets/arrow_about_content_left.png';
import "./About.scss";


function About() {
  return(
      <div className="about">
      <Banner image={bannerAboutImg}  />
      <div className="about__content">
        <p>Fiabilite</p>
        <p>Respect</p>
        <p>Service</p>
        <p>securite</p>
      </div>
      </div>
);
}

export default About;
