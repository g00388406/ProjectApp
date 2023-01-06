
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <form className="form">
        <input type="text" placeholder="Add todo list item"/>
        <button type="submit">Add Todo List Item</button>
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
