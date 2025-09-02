import React from "react";
import "./App.css";
import List from "./components/List";
import { useState } from "react";

const App = () => {
  const [items,setItems] = useState([]);
  const [newItem,setNewItem]=useState('');

  const handleChange=(e)=>{
    setNewItem(e.target.value);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    const trimmed = newItem.trim();
    if(!trimmed) return;
    const newTask={
      id: Date.now(),
      text: trimmed,
      completed : false
    }
    setItems([...items,newTask])
    setNewItem('');
    
  }

  return (
    <div className="container">
      <div className="todo">
        <div className="header">
          <h3>Todo-Items</h3>
        </div>
        <div className="list-items">
          <List items={items} setItems={setItems}/>
        </div>
        <form className="footer" onSubmit={handleSubmit}>
          <input 
          type="text" 
          placeholder="add a new Task"  
          value={newItem}
          onChange={handleChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default App;
