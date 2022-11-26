import { useState } from "react";

import "./home.css";

import Header from "../../components/Header";

import {
  AiFillDelete,
  AiFillPlusCircle,
  AiOutlineCheckCircle,
} from "react-icons/ai";

export default function Home() {
  const [texts, setTexts] = useState("");
  const [id, setId] = useState(0);

  const [arrayTodo, setArrayTodo] = useState([]);

  function addTodo() {
    if (texts.length < 1) {
      alert("Digite alguma coisa ");
      return;
    }

    const todoObj = { id: id, text: texts, checkedButton: true };
    setId(id + 1);

    setArrayTodo([...arrayTodo, todoObj]);
    console.log(arrayTodo);

    setTexts("");
  }

  function deleteItem(id) {
    var filtered = arrayTodo.filter((todo) => todo.id !== id);
    setArrayTodo(filtered);
    console.log(arrayTodo);
  }

  return (
    <div className="containerHome">
      <Header />

      <div className="inputButton">
        <input
          type="text"
          maxLength="40"
          placeholder="Digite aqui..."
          value={texts}
          onChange={(e) => setTexts(e.target.value)}
          autoFocus
        />
        <button onClick={addTodo}>
          <AiFillPlusCircle />
        </button>
      </div>

      <div className="containerLista">
        <h1>Anotações</h1>

        {arrayTodo.map((item, index) => (
          <div key={index} className="lista">
            <span>
              <button>
                <AiOutlineCheckCircle />
              </button>
              {item.text}
            </span>
            <button
              className="buttonDelete"
              onClick={() => deleteItem(item.id)}
            >
              <AiFillDelete />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
