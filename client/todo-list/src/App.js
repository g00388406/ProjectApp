import {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const[itemText, setItemText] = useState('');
  const[listItems, setListItems] = useState([]);
  const[isUpdating, setIsUpdating] = useState('');
  const[updateItemText, setUpdateItemText] = useState('');

  //adding items to the database
  const addItem = async (e)=>{
    e.preventDefault();
      try {
        const res = await axios.post('http://localhost:5500/api/item', {item: itemText})
        setListItems(prev => [...prev, res.data]);
        setItemText('');
      } catch (err) {
        console.log(err);
      }
  }

  //adding items to total list of items
  useEffect(()=>{
    const getItemsList = async ()=>{
      try {
        const res = await axios.get('http://localhost:5500/api/items', {item: itemText})
        setListItems(res.data);
        console.log('render');
      } catch (err) {
        console.log(err);
      }
    }
      getItemsList()
  },)

  //deleting an item
  const deleteItem = async (id)=> {
    try {
      const res = await axios.delete(`http://localhost:5500/api/item/${id}`)
      const newListItem = listItems.filter(item=>item._id !== id);
      setListItems(newListItem);
      } catch (err) {
        console.log(err);
    }
  }

  //updating an item
  const updateItem = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:5500/api/item/${isUpdating}`, {item: updateItemText})
      console.log(res.data);
      const updatedItemIndex = listItems.findIndex(item => item._id === isUpdating);
      const updatedItem = listItems[updatedItemIndex].item = updateItemText;
      setUpdateItemText('');
      setIsUpdating('');
    } catch (err) {
      console.log(err);
    }
  }

  //making a new part of the form appear when update button is clicked
  const renderUpdateForm = ()=> (
    <form className="update-form" onSubmit={(e)=>{updateItem(e)}}>
      <input className="update-new-input" type="text" placeholder="New Item" onChange={e=>{setUpdateItemText(e.target.value)}}
      value={updateItemText}></input>
      <button className="update-new-btn" type="submit">Update</button>
    </form>
  )


  return (
    <div className="App">
      <h1>Todo List</h1>
      <form className="form" onSubmit={e => addItem(e)}>
        <input type="text" placeholder="Add todo list item"
        onChange={e => {setItemText(e.target.value)}} value={itemText}/>
        <button type="submit">Add</button>
      </form>
      <div className="todolist-items">

      {
          listItems.map(item => (
            <div className="todo-item">
              {
                isUpdating === item._id
                ? renderUpdateForm()
                :<>
                <p className="item-content">{item.item}</p>
                  <button className="update-item" onClick={()=>{setIsUpdating(item._id)}}>Update</button>
                  <button className="delete-item" onClick={()=>{deleteItem(item._id)}}>Delete</button>
                </>
              }
            
            </div>
          ))
      }
      
      </div>
    </div>

  );
}

export default App;
