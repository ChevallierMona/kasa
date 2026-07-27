 import "./Banner.scss";

function Banner({ image, text }) {
  return (
    <div className="banner">
      <img src={image} alt="" />
      {text && <h1>{text}</h1>}
    </div>
  );
}

export default Banner;