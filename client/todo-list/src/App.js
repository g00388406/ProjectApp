import {useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const[itemText, setItemText] = useState('')

  //adding items to the database
  const addItem = async (e)=>{
    e.preventDefault();
      try {
        const res = await axios.post('http://localhost:5500/api/item', {item: itemText})
        console.log(res);
      } catch (err) {
        console.log(err);
      }
  }



  return (
    <div className="App">
      <h1>Todo List</h1>
      <form className="form" onSubmit={e => addItem(e)}>
        <input type="text" placeholder="Add todo list item"
        onChange={e => {setItemText(e.target.value)}} value={itemText}/>
        <button type="submit">Add</button>
      </form>
      <div className="todolist-items">
        <div className="todo-item">
          <p className="item-content">this is an item</p>
          <button className="update-item">Update</button>
          <button className="delete-item">Delete</button>
        </div>
        <div className="todo-item">
          <p className="item-content">this is an item</p>
          <button className="update-item">Update</button>
          <button className="delete-item">Delete</button>
        </div>
        <div className="todo-item">
          <p className="item-content">this is an item</p>
          <button className="update-item">Update</button>
          <button className="delete-item">Delete</button>
        </div>
      </div>
    </div>

  );
}

export default App;
