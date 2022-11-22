import "./home.css";

import Header from "../../components/Header";

import {
  AiFillDelete,
  AiFillPlusCircle,
  AiOutlineCheckCircle,
} from "react-icons/ai";

export default function Home() {
  return (
    <div className="containerHome">
      <Header />

      <div className="inputButton">
        <input type="text" maxLength="40" placeholder="Digite aqui..." />
        <button>
          <AiFillPlusCircle />
        </button>
      </div>
      <div className="containerLista">
        <h1>Anotações</h1>
        <div className="lista">
          <span>
            <button>
              <AiOutlineCheckCircle />
            </button>
            compras 1
          </span>
          <button className="buttonDelete">
            <AiFillDelete />
          </button>
        </div>
        <div className="lista">
          <span>
            <button>
              <AiOutlineCheckCircle />
            </button>
            compras 2
          </span>
          <button className="buttonDelete">
            <AiFillDelete />
          </button>
        </div>
        <div className="lista">
          <span>
            <button>
              <AiOutlineCheckCircle />
            </button>
            compras 3
          </span>
          <button className="buttonDelete">
            <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
