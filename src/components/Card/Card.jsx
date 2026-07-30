import { Link } from "react-router-dom";
import "./Card.scss";


function Card({id,title, cover}) {
    return (
        <Link to={`/housing/${id}`}>
            <div className="card">
                <img src={cover} alt={title} />
                <h3>{title}</h3>
            </div>
        </Link>
    );
}
export default Card;