import { useEffect, useState } from "react";

import "./styles.css";

import { AiFillDelete } from "react-icons/ai";

export default function Counter() {
  const [products, setProducts] = useState("");
  const [values, setValues] = useState("");
  const [quantity, setQuantity] = useState("");
  const [id, setId] = useState(0);

  const [totalValue, setTotalValue] = useState(0);

  const [arrayLine, setArrayLine] = useState(
    () => JSON.parse(localStorage.getItem("arrayLineLocal")) || []
  );

  useEffect(() => {
    let storedArray = JSON.parse(localStorage.getItem("arrayLineLocal")) || [];
    let getId = storedArray.map((task) => {
      return task.id;
    });

    let lastId = getId[getId.length - 1];

    setId(lastId + 1 || 0);
  }, []);

  useEffect(() => {
    if (values.length > 6) {
      setValues("99999");
    }
    if (quantity.length > 6) {
      setQuantity("999999");
    }
  }, [values, quantity]);

  function addLine() {
    if (products.length < 1 || values.length < 1 || quantity.length < 1) {
      alert("Preencha as caixas de textos");
      return;
    }

    if (values <= 0 || quantity <= 0) {
      alert("Digite um valor diferente de 0");
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

    setProducts("");
    setValues("");
    setQuantity("");
  }

  function addLineWithEnter(event) {
    if (event.key === "Enter") {
      addLine();
    }
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
    <div className="containerContent">
      <h1>Assistente de compras</h1>

      <section className="topoInputs">
        <div className="containerLabelInputs">
          <label>Produto</label>
          <input
            type="text"
            name="inputName"
            placeholder="Digite um nome"
            value={products}
            onChange={(e) => setProducts(e.target.value)}
            autoFocus
            maxLength="25"
          />
        </div>
        <div className="inputQuantValue">
          <div className="containerLabelInputs">
            <label>Valor</label>
            <input
              type="number"
              name="inputValue"
              placeholder="Valor"
              value={values}
              min="1"
              onChange={(e) => setValues(e.target.value)}
            />
          </div>
          <div className="containerLabelInputs">
            <label>Quantidade</label>
            <input
              type="number"
              name="inputQuant"
              placeholder="Quantidade"
              value={quantity}
              min="1"
              onKeyPress={addLineWithEnter}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
        </div>

        <button onClick={addLine}>Adicionar</button>
      </section>
      <section className="sectionTable">
        {arrayLine.length >= 1 && (
          <table border="1">
            <thead>
              <tr>
                <th>Produto</th>
                <th>Valor</th>
                <th>Quant</th>
              </tr>
            </thead>
            <tbody>
              {arrayLine.map((item, index) => {
                const getValue = parseFloat(item.values);

                const valueFormat = getValue.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                });

                console.log(valueFormat);

                return (
                  <tr key={index}>
                    <td>{item.product} </td>
                    <td>{valueFormat}</td>
                    <td>{item.quantity}</td>
                    <td className="tdButton">
                      <button onClick={() => deleteLine(item.id)}>
                        <AiFillDelete />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td>Total</td>
                <td colSpan="2">
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
