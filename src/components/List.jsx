import React from "react";

const List = ({ items, setItems }) => {

  const toogleComplete= (id)=>{
    const updatedItems = items.map((item)=>
      item.id === id ? {...item,completed: !item.completed}:item
    );
    setItems(updatedItems);
  }
  
  const handleDelete = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
  };

  return (
    <div className="list-div">
      {items.length === 0 ? (
        <p>No tasks</p>
      ) : (
        items.map((item) => (
          <div key={item.id} className="list-item">
            <div
              className="list-text"
              style={{
                textDecoration: item.completed
                  ? "line-through"
                  : "none",
                color: item.completed ? "gray" : "white",
              }}
            >
              {item.text}
            </div>
            <div className="button-group">
              <button onClick={() => toogleComplete(item.id)}>
                {item.completed ? "Undo" : "Complete"}
              </button>
              <button className="delete-btn" onClick={() => handleDelete(item.id)}>x</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default List;
