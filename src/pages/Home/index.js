import { useEffect, useState } from "react";

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
  // () => JSON.parse(localStorage.getItem("arrayTodo")) || [],

  useEffect(() => {
    // localStorage.setItem("arrayTodo", JSON.stringify(arrayTodo));

    let storedArray = JSON.parse(localStorage.getItem("arrayTodo")) || [];
    setArrayTodo(storedArray);

    //soluçao para o problema no id
    //quando a pagina recarregava o id voltava a 0, então se o usuario recarregasse a pagina e adicionasse mais 1 item na lista, esse item viria com o id 0, fazendo com q o id se repetisse
    let getId = storedArray.map((task) => {
      return task.id;
    });

    let lastId = getId[getId.length - 1];

    setId(lastId + 1 || 0);
    //soluçao para o problema no id
  }, []);

  function addTodo() {
    if (texts.length < 1) {
      alert("Digite alguma coisa ");
      return;
    }

    const todoObj = { id: id, text: texts, checkedButton: true };
    setId(id + 1);

    setArrayTodo([...arrayTodo, todoObj]);
    // console.log(arrayTodo);

    localStorage.setItem("arrayTodo", JSON.stringify(arrayTodo));

    setTexts("");
  }
  //espaço

  function deleteItem(id) {
    var filtered = arrayTodo.filter((todo) => todo.id !== id);
    setArrayTodo(filtered);

    localStorage.setItem("arrayTodo", JSON.stringify(filtered));
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
