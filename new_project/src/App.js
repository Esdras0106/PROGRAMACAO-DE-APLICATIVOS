import { useState } from 'react';
import './App.css';

function App() {
  const[item, setItem] = useState('')
  const[lista, setlista] = useState(['Arroz - 3kg', 'Feijão - 2kg', 'Macarrão - 1kg']);
  
  const adicionarItem = () => {
    if (lista.includes(adicionarItem)){
      alert('Usuário já existe !')
      return;
    }
    setlista([...lista, item]);
    setItem('');
  };
    
  return (  
    <div className="App">
      <h1>Adicionar itens</h1>
      <input 
        type="text" 
        value={item} 
        onChange={(e) => setItem(e.target.value)} 
        placeholder="Digite o nome do item " 
      />  
      <button onClick={adicionarItem}>Adicionar Item</button>
      
      <hr />
      <h2>Lista de itens</h2> <ol>
        {lista.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;