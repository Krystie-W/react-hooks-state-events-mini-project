import React from "react";

function Task({ text, category, deleteTasks }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => deleteTasks(text)}>X</button>
    </div>
  );
}

export default Task;
