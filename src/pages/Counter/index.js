import { useEffect, useState } from "react";

import "./styles.css";

import { AiFillDelete } from "react-icons/ai";

export default function Counter() {
  const [products, setProducts] = useState("");
  const [values, setValues] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [id, setId] = useState(0);

  const [totalValue, setTotalValue] = useState(0);

  const [arrayLine, setArrayLine] = useState(
    () => JSON.parse(localStorage.getItem("arrayLineLocal")) || []
  );

  useEffect(() => {
    if (values <= 0) {
      setValues(1);
    }
    if (quantity < 1) {
      setQuantity(1);
    }
  }, [values, quantity]);

  useEffect(() => {
    let storedArray = JSON.parse(localStorage.getItem("arrayLineLocal"));
    let getId = storedArray.map((task) => {
      return task.id;
    });

    let lastId = getId[getId.length - 1];

    setId(lastId + 1 || 0);
  }, []);

  function addLine() {
    if (products.length < 1 || values.length < 1 || quantity.length < 0) {
      alert("Digite um Valor");
      return;
    }

    const lineObj = {
      product: products,
      values: values,
      quantity: quantity,
      id: id,
    };
    setId(id + 1);

    setArrayLine([...arrayLine, lineObj]);
    console.log(arrayLine);
  }

  useEffect(() => {
    localStorage.setItem("arrayLineLocal", JSON.stringify(arrayLine));

    function somar(total, item) {
      const valorTotal = item.values * item.quantity;

      return total + valorTotal;
    }

    const resultado = arrayLine.reduce(somar, 0);

    setTotalValue(resultado);
  }, [arrayLine]);

  function deleteLine(id) {
    let filtered = arrayLine.filter((line) => line.id !== id);
    setArrayLine(filtered);

    localStorage.setItem("arrayLineLocal", JSON.stringify(filtered));
  }

  return (
    <div>
      <h3>Vamos ver se agora vai</h3>

      <section className="topoInputs">
        <div className="containerLabelInputs">
          <label>Produtos:</label>
          <input
            type="text"
            name="inputName"
            placeholder="Digite..."
            value={products}
            onChange={(e) => setProducts(e.target.value)}
          />
        </div>
        <div className="containerLabelInputs">
          <label>Valor:</label>
          <input
            type="number"
            name="inputValue"
            placeholder="Digite um valor"
            value={values}
            onChange={(e) => setValues(e.target.value)}
          />
        </div>
        <div className="containerLabelInputs">
          <label>Quantidade:</label>
          <input
            type="number"
            name="inputQuant"
            placeholder="Digite um valor"
            value={quantity}
            min="1"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        <button onClick={addLine}>Add</button>
      </section>
      <section className="sectionTable">
        {arrayLine.length >= 1 && (
          <table border="1">
            <thead>
              <tr>
                <th>Produto</th>
                <th>Valor</th>
                <th>Quantidade</th>
              </tr>
            </thead>
            <tbody>
              {arrayLine.map((item, index) => (
                <tr key={index}>
                  <td>{item.product} </td>
                  <td>{`R$ ${item.values},00`}</td>
                  <td>{item.quantity}</td>
                  <td className="tdButton">
                    <button onClick={() => deleteLine(item.id)}>
                      <AiFillDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td>Total</td>
                <td colSpan="2">
                  {/* {total.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                })} */}

                  {totalValue.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </td>
              </tr>
            </tfoot>
          </table>
        )}
      </section>
    </div>
  );
}
