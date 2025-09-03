import React from "react";
import "./App.css";
import List from "./components/List";
import { useEffect, useState, useRef } from "react";

const App = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const isFirstRender = useRef(true);

  useEffect(() => {
    const storedItemsInLocalStorage = localStorage.getItem("todoItems");
    if (storedItemsInLocalStorage) {
      setItems(JSON.parse(storedItemsInLocalStorage));
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem("todoItems", JSON.stringify(items));
  }, [items]);

  const handleChange = (e) => {
    setNewItem(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = newItem.trim();
    if (!trimmed) return;
    const newTask = {
      id: Date.now(),
      text: trimmed,
      completed: false,
    };
    setItems([...items, newTask]);
    setNewItem("");
  };
  const handleClearAll = () => {
  if(items.length === 0){
    window.alert("No task to clear");
    return;
  }
   if (window.confirm("Are you sure you want to clear all tasks?")) {
      setItems([]);
    }
  };

  return (
    <div className="container">
      <div className="todo">
        <div className="header">
          <h3>Todo-Items</h3>
          
          <button onClick={handleClearAll}>Clear All</button>
        </div>
        <div className="list-items">
          <List items={items} setItems={setItems} />
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
