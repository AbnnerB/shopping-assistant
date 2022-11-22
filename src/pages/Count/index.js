import Header from "../../components/Header";

import "./count.css";

export default function Count() {
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
            <td>Body1 linha1</td>
            <td>
              <input className="inputTabela" type="number" />
            </td>
            <td>Body3 linha1</td>
          </tr>
          <tr>
            <td>Body1 linha2</td>
            <td>Body2 linha2</td>
            <td>Body3 linha2</td>
          </tr>
        </tbody>
        <tfoot>
          <td>Total</td>
          <td colSpan="2"></td>
        </tfoot>
      </table>
    </div>
  );
}
