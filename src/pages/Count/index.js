import { useEffect, useState } from "react";

import Header from "../../components/Header";

import "./count.css";

export default function Count() {
  const [valor, setValor] = useState("");
  const [quantidade, setQuantidade] = useState(1);
  const [total, setTotal] = useState("");

  useEffect(() => {
    function soma() {
      if (quantidade < 1) {
        setQuantidade(1);
      }

      let somaValores = valor * quantidade;
      setTotal(somaValores);
    }
    soma();
  }, [quantidade, valor]);

  return (
    <div className="containerHome">
      <Header />
      <h2>Count, Pagina do to-do</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Valor</th>
            <th>Quantidade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>nutella </td>
            <td>
              <input
                className="inputTabela"
                type="number"
                placeholder="00"
                min="1"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
              />
            </td>
            <td>
              <input
                className="inputTabela"
                type="number"
                placeholder="01"
                min="1"
                value={quantidade}
                onChange={(e) => setQuantidade(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>nutella 2</td>
            <td>
              <input
                className="inputTabela"
                type="number"
                placeholder="00"
                min="1"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
              />
            </td>
            <td>
              <input
                className="inputTabela"
                type="number"
                placeholder="01"
                min="1"
                value={quantidade}
                onChange={(e) => setQuantidade(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Salmão</td>
            <td>
              <input
                className="inputTabela"
                type="number"
                placeholder="00"
                min="1"
              />
            </td>
            <td>
              <input
                className="inputTabela"
                type="number"
                min="1"
                placeholder="01"
              />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td colSpan="2">
              {total.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
