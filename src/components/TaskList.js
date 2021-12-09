import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteTasks }) {

const renderTasks = tasks.map((item) => {
    return <Task key={item.text} text={item.text} category={item.category} deleteTasks={deleteTasks} />
})


  return (
    <div className="tasks"> {renderTasks}
    </div>
  );
}

export default TaskList;
