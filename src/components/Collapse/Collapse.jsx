import { useState } from "react";
import arrow from "../../assets/arrow_about_content_left.png";
import "./Collapse.scss";

function Collapse({ title, content }) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">

      <div
        className="collapse__header"
        onClick={() => setIsOpen(!isOpen)}
      >

        <h2>{title}</h2>

        <img
          src={arrow}
          alt=""
          className={isOpen ? "rotate" : ""}
        />

      </div>

      {isOpen && (

        <div className="collapse__content">

          <p>{content}</p>

        </div>

      )}

    </div>
  );
}

export default Collapse;