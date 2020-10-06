import React, { useState } from 'react';

import './App.css';

function App() {
  const [todos, setTodos] = useState(['log hours', 'code', 'bench press']);
  const [input, setInput] = useState('');
  console.log('🎃'+ input)
  
  const addTodo = event => {
    event.preventDefault();
    setTodos([...todos, input])
    setInput('');
  }

  return (
    <div className="App">
      <h1>hello world</h1>
      <form action="">
        <input 
          value={input} 
          onChange={event => setInput(event.target.value)}
        />
        <button type='submit' onClick={addTodo}>Add todo</button>
      </form>
        

      

      <ul>
        {todos.map(todo => (
          <li>{todo}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
