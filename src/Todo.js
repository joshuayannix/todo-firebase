import React, { useState } from 'react'
import { List, ListItem, ListItemText, IconButton, Modal, Button } from '@material-ui/core';
import './Todo.css';
import db from './firebase';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function Todo(props) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const updateTodo = () => {
    db.collection('todos').doc(props.todo.id).set({
      todo: input
    }, { merge: true })
    setOpen(false);
  };

  return(
    <>
    <Modal
      open={open}
      onClose={handleClose}
    >
      <form>
        <h1>MODAL</h1>
        <input 
          placeholder={props.todo.todo}
          value={input}
          onChange={event => setInput(event.target.value)}
        />
        <Button 
          onClick={updateTodo}
          color='primary'
          variant='contained'
          type='submit'
        >
          Update Todo
        </Button>
      </form>
    </Modal>
    <List className='todo__list'>
      <ListItem>
        <ListItemText primary={props.todo.todo} secondary='deadline'/>
      </ListItem>
      <IconButton
        color='primary'
        onClick={e => setOpen(true)}
      >
        <EditIcon />
      </IconButton>
      <IconButton
        color='secondary' 
        onClick={event => db.collection('todos').doc(props.todo.id).delete()}
      >
        <DeleteIcon />
      </IconButton>
    </List>
    </>
  )
};

export default Todo