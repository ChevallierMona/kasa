import { useState } from "react";
import arrow from "../../assets/arrow-top.svg";
import "./Collapse.scss";

function Collapse({ title, content }) {

  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="collapse">

      <div
        className="collapse__header"
        onClick={toggleCollapse}
      >
        <h2>{title}</h2>

        <img
          src={arrow}
          alt="Développer le contenu"
          className={`collapse__arrow ${
            isOpen ? "collapse__arrow--open" : ""
          }`}
        />
      </div>

      {isOpen && (
        <div className="collapse__content">
          {content}
        </div>
      )}

    </div>
  );
}

export default Collapse;