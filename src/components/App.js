import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  function addNewTask (item) {
setTasks([...tasks, item])
  }

  function deleteTasks(text) {
    setTasks(tasks.filter((item) => item.text !== text))
  };

const filteredTasks = tasks.filter((task) => selectedCategory === "All" || task.category === selectedCategory);


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onFilterButtonClick={setSelectedCategory} selectedCategory={selectedCategory}/>
      <div className="Tasks">
        <h5>Tasks</h5>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addNewTask}/>
      <TaskList tasks={filteredTasks} deleteTasks={deleteTasks} />
      </div>
    </div>
  );
}

export default App;
