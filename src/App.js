import React, { useEffect, useState } from 'react';
import { FormControl, Input, Button, InputLabel, IconButton } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

    // when the app loads, we need to listen to the database and fetch new todos as they get added/removed
    // we only want to attach the listener to the database once
    // hence our dependency is just an empty array
    // so this useEffect only happens when the database changes, or when app.js loads

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
      console.log(snapshot.docs.map(doc => doc.data().todo))
    })
  }, []);
  
  const addTodo = event => {
    event.preventDefault();
    // setTodos([...todos, input])
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    setInput('');
  }

  return (
    <div className="App">
      <h1>hello world</h1>
      
      <form action="">

        <FormControl>
          <InputLabel htmlFor="my-input">Write a todo...</InputLabel>
          <Input 
            value={input} 
            onChange={event => setInput(event.target.value)}
          />

        </FormControl>

        <IconButton 
          disabled={!input} 
          variant='contained' 
          color='primary' 
          type='submit' 
          onClick={addTodo}
        >
          <AddCircleIcon />
        </IconButton>
      </form>
        
      <ul>
        {todos.map(todo => (
          <Todo 
            text={todo}
          />
        ))}
      </ul>

    </div>
  );
}

export default App;
