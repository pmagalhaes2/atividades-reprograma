import { Link } from "react-router-dom";
import "./menu.css";

function Menu() {
  return (
    <ul className="menu">
      <li className="item">
        <Link className="link" to="/">
          Sobre
        </Link>
      </li>
      <li className="item">
        <Link className="link" to="/diario-reprograma">
          Reprograma
        </Link>
      </li>
      <li className="item">
        <Link className="link" to="/portfolio">
          Porfólio
        </Link>
      </li>
      <li className="item">
        <Link className="link" to="/comentarios">
          Comentários
        </Link>
      </li>
      <li className="item">
        <Link className="link" to="/contato">
          Contato
        </Link>
      </li>
    </ul>
  );
}

export default Menu;
