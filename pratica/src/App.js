import { useState } from "react";
import "./App.css";
import Historico from "./components/HistoricoDeContagem";

const chamarNome = (nome) => `Olá, ${nome}!`;

function App() {
  const [contador, setContador] = useState(10);
  const [numero, setNumero] = useState(1); // passo inicial
 

  const min = 8;
  const max = 50;

  const incrementarContador = () => {
    if (contador + numero <= max) {
      setContador(contador + numero);
    } else {
      alert(`O contador não pode passar de ${max}`);
    }
  };

  const decrementarContador = () => {
    if (contador - numero >= min) {
      setContador(contador - numero);
    } else {
      alert(`O contador não pode ser menor que ${min}`);
    }
  };


  return (
    <div className="App">
      <header>
        <label>
          Digite um número:{" "}
          <input
            type="number"
            value={numero}
            onChange={(e) => setNumero(Number(e.target.value))}
          />
        </label>

        <h3> QUESTÃO 1 - Olá React ! </h3>
        <p> QUESTÃO 2 - {chamarNome("Esdras")} </p>
        <div className="app-contador">
          
        <p name= 'q3'>  Contador: <h2> {contador}</h2> </p>
        <button name= 'btn1' onClick={incrementarContador}>Incrementar</button>
        <button name= 'btn2' onClick={decrementarContador}>Decrementar</button>
        <h2> Historico </h2>
        <Historico contagem={[contador]} />
        </div>
      </header>
    </div>
  );
}

export default App;
