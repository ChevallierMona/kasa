import logements from "../../data/logements.json";
import Card from "../../components/Card/Card";
import Banner from "../../components/Banner/Banner";
import bannerHomeImg from "../../assets/banner-home.png";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <Banner image={bannerHomeImg} text="Chez vous, partout et ailleurs" />

      <div className="gallery">
        {logements.map((logement) => (
          
        <Card
          key={logement.id}
          id={logement.id}
          title={logement.title}
          cover={logement.cover}
        />
        ))}
      </div>
    </div>
  );
}

export default Home;