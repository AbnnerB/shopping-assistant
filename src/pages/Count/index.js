// import { useState } from "react";

import Header from "../../components/Header";

import "./count.css";

export default function Count() {
  // const [valor, setValor] = useState("");
  // const [quantidade, setQuantidade] = useState(1);
  // const [total, setTotal] = useState(0);

  // const [arrayTodo, setArrayTodo] = useState(
  //   () => JSON.parse(localStorage.getItem("arrayTodo")) || []
  // );

  // useEffect(() => {
  //   function soma() {
  //     if (quantidade < 1) {
  //       setQuantidade(1);
  //     }

  //     let somaValores = valor * quantidade;
  //     setTotal(somaValores);
  //   }
  //   soma();
  // }, [quantidade, valor]);

  // function handleInputChange(e) {
  //   let valorTotal = e.valor * e.quant;

  //   console.log(total);
  //   return total + valorTotal;
  // }

  // const handleInputChange = (e) =>
  //   arrayTodo.reduce((total, e) => {
  //     const totalMultiplicacao = parseFloat(e.valor) * parseFloat(e.quant);

  //     const totalTabela = total + totalMultiplicacao;
  //     console.log(totalTabela);

  //     // setTotal(totalTabela);
  //     return totalTabela;
  //   }, 0);

  // useEffect(() => {
  //   arrayTodo.map((item) => {
  //     item.valor = valor;
  //     item.quant = quantidade;
  //   });
  //   setValor(123);
  //   setQuantidade(13323);
  // });

  //Só na esperança de conseguir fazer isso funcionar
  /*
    function handleInputChange(e) {
    if (e.target.getAttribute("name") === "inputValue") {
      setArrayTodo((obj) => {
        return {
          ...obj,
          valor: e.target.value,
          quant: obj.quant,
        };
      });
    } 
  */

  // function handleInputChange(e) {
  //   if (e.target.getAttribute("name") === "inputValue") {
  //     setArrayTodo({
  //       id: arrayTodo.id,
  //       text: arrayTodo.text,
  //       checkedButton: arrayTodo.checkedButton,
  //       valor: e.target.value,
  //       quant: arrayTodo.quant,
  //     });
  //   } else if (e.target.getAttribute("name") === "inputQuant") {
  //     setArrayTodo({
  //       id: arrayTodo.id,
  //       text: arrayTodo.text,
  //       checkedButton: arrayTodo.checkedButton,
  //       valor: arrayTodo.valor,
  //       quant: e.target.value,
  //     });
  //   }

  // const valorTotal = parseFloat(item.quant) * parseFloat(item.valor);
  // console.log(total + valorTotal);
  // return total + valorTotal;
  // }

  //tentei tudo

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
          {/* <tr>
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
          </tr> */}
          {/* sa */}
          {/* {arrayTodo.map((item, index) => (
            <tr key={index}>
              <td>{item.text} </td>
              <td>
                <input
                  className="inputTabela"
                  type="number"
                  placeholder="00"
                  min="1"
                  name="inputValue"
                  // value={item.valor}
                  // onChange={(e) => arrayTodo.reduce(handleInputChange, 0)}
                  // onChange={ handleInputChange}
                  // onChange={(e) => handleInputChange(e)}
                  // onChange={() => arrayTodo.reduce(handleInputChange, 0)}
                  // onChange={(e) => setValor(e.target.value)}
                  // onChange={(e) => handleInputChange(e)}
                />
              </td>
              <td>
                <input
                  className="inputTabela"
                  type="number"
                  placeholder="01"
                  min="1"
                  name="inputQuant"
                  // value={item.quant}
                  // onChange={(e) => handleInputChange(e)}
                />
              </td>
            </tr>
          ))} */}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td colSpan="2">
              {/* {total.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })} */}
              {}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
