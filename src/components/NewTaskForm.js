import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
const [formData, setFormData] = useState({
  text: '',
  category: 'Code',
})

function storeFormData(event) {
  let name = event.target.name;
  let value = event.target.value;
  setFormData({
    ...formData,
    [name]: value,
  });
} 

function handleSubmission(event) {
  event.preventDefault();
  onTaskFormSubmit(formData);
  setFormData({
    text: '',
    category: 'Code',
  });
}

  const removingAllCat = categories.slice(1);

  const categoryOptions = removingAllCat.map((item) => {
    return <option key={item} value={item}>{item}</option>
  })

  return (
    <form className="new-task-form" onSubmit={handleSubmission} >
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={storeFormData}/>
      </label>
      <label>
        Category
        <select name="category" onChange={storeFormData}>
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
