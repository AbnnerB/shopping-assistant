import { useState } from "react";

import "./styles.css";

import { AiFillDelete } from "react-icons/ai";

export default function Counter() {
  const [products, setProducts] = useState("");
  const [values, setValues] = useState("");
  const [quantity, setQuantity] = useState("");

  const [arrayLine, setArrayLine] = useState([]);

  function addLine() {
    if (products.length < 1 || values.length < 1 || quantity.length < 0) {
      alert("Digite um Valor");
    }

    const lineObj = {
      product: products,
      values: values,
      quantity: quantity,
    };

    setArrayLine([...arrayLine, lineObj]);
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
                <th>Nome</th>
                <th>Valor</th>
                <th>Quantidade</th>
              </tr>
            </thead>
            <tbody>
              {arrayLine.map((item, index) => (
                <tr key={index}>
                  <td>{item.product} </td>
                  <td>{item.values}</td>
                  <td>{item.quantity}</td>
                  <td className="tdButton">
                    <button>
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
                </td>
              </tr>
            </tfoot>
          </table>
        )}
      </section>
    </div>
  );
}
