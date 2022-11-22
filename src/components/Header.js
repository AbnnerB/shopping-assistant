import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="headerNav">
      <Link to="/">Lista</Link>
      <Link to="/count">Contas</Link>
    </div>
  );
}
