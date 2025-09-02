import React from "react";
import { useState } from "react";

const List = ({ items, setItems }) => {
  const [completedTask, setCompletedTask] = useState([]);
  const [deletedList, setDeletedList] = useState([]);

  const handleClick = (index) => {
    if (completedTask.includes(index)) {
      setCompletedTask(completedTask.filter((i) => i != index));
    } else {
      setCompletedTask([...completedTask, index]);
    }
  };
  const handleDelete = (index) => {
    console.log("Deleting item at index:", index);
    const filteredItems = items.filter((_, i) => i !== index);
    console.log("New items after delete:", filteredItems);
    setItems(filteredItems);

    setCompletedTask(completedTask.filter((i) => i !== index));
  };

  return (
    <div className="list-div">
      {items.length === 0 ? (
        <p>No tasks</p>
      ) : (
        items.map((item, index) => (
          <div key={index} className="list-item">
            <div
              className="list-text"
              style={{
                textDecoration: completedTask.includes(index)
                  ? "line-through"
                  : "none",
                color: completedTask.includes(index) ? "gray" : "white",
              }}
            >
              {item}
            </div>
            <div className="button-group">
              <button onClick={() => handleClick(index)}>Complete</button>
              <button className="delete-btn" onClick={() => handleDelete(index)}>x</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default List;
