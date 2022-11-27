import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Count from "./pages/Count";
import Counter from "./pages/Counter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/count" element={<Count />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//path * caso eu queira criar uma pagina de erro
//caso o usuario queira acessar uma pagina q não existe
// Ex:  Route path="*" element={<Erro />} />
