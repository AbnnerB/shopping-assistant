import "./styles.css";

export default function Counter() {
  return (
    <div>
      <h3>Vamos ver se agora vai</h3>

      <section className="topoInputs">
        <div className="containerLabelInputs">
          <input type="text" name="inputName" id="" />
          <label>Produtos</label>
        </div>
        <div>
          <input type="number" name="input" id="" />
          <label>Valor</label>
        </div>
        <div>
          <input type="number" name="input" id="" />
          <label>Quantidade</label>
        </div>
      </section>
    </div>
  );
}
